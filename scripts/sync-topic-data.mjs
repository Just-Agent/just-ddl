import fs from 'node:fs';

const TOPICS_PATH = 'src/data/topics.ts';
const DATA_PATH = 'src/data/ddl-data.ts';
const CONTRIB_REGISTRY_PATH = 'public/contrib-topics/registry.json';
const DEFAULT_OWNER = process.env.JUST_DDL_OWNER || 'Just-Agent';
const STRICT = process.env.STRICT_TOPIC_SYNC === '1';
const ONLY_TOPIC = (process.env.JUST_DDL_DISPATCH_TOPIC || process.env.JUST_DDL_TOPIC_ID || '').trim();
const FETCH_TIMEOUT_MS = Number(process.env.JUST_DDL_FETCH_TIMEOUT_MS || 12000);
const MAX_INCUBATOR_TOPICS = 5;
const MAX_INCUBATOR_ITEMS = 50;

function extractJsonAfter(source, marker, open, close) {
  const start = source.indexOf(marker);
  if (start === -1) throw new Error(`Missing marker: ${marker}`);
  const assignment = source.indexOf('=', start);
  if (assignment === -1) throw new Error(`Missing assignment for ${marker}`);
  const jsonStart = source.indexOf(open, assignment);
  if (jsonStart === -1) throw new Error(`Missing JSON start for ${marker}`);

  let depth = 0;
  let inString = false;
  let escaped = false;

  for (let i = jsonStart; i < source.length; i += 1) {
    const char = source[i];
    if (inString) {
      if (escaped) {
        escaped = false;
      } else if (char === '\\') {
        escaped = true;
      } else if (char === '"') {
        inString = false;
      }
      continue;
    }
    if (char === '"') {
      inString = true;
    } else if (char === open) {
      depth += 1;
    } else if (char === close) {
      depth -= 1;
      if (depth === 0) return source.slice(jsonStart, i + 1);
    }
  }

  throw new Error(`Could not find JSON end for ${marker}`);
}

function readModel() {
  const topicsSource = fs.readFileSync(TOPICS_PATH, 'utf8');
  const dataSource = fs.readFileSync(DATA_PATH, 'utf8');
  return {
    topics: JSON.parse(extractJsonAfter(topicsSource, 'export const topics', '[', ']')),
    categories: JSON.parse(extractJsonAfter(topicsSource, 'export const categories', '[', ']')),
    ddlData: JSON.parse(extractJsonAfter(dataSource, 'export const ddlData', '{', '}'))
  };
}

function topicRepoName(topic) {
  if (topic.repo?.includes('/')) return topic.repo.split('/').pop();
  return topic.id;
}

function topicOwner(topic) {
  if (topic.repo?.includes('/')) return topic.repo.split('/')[0];
  return DEFAULT_OWNER;
}

function rawItemsUrl(topic) {
  return `https://raw.githubusercontent.com/${topicOwner(topic)}/${topicRepoName(topic)}/main/data/items.json`;
}

function topicDataUrl(topic) {
  if (topic.dataUrl) {
    const value = String(topic.dataUrl).trim();
    if (/^https?:\/\//.test(value)) return value;
    const relativePath = value.replaceAll('\\', '/').replace(/^\.?\//, '');
    if (!relativePath || relativePath.includes('..')) {
      throw new Error(`${topic.id}: invalid dataUrl ${topic.dataUrl}`);
    }
    return `https://raw.githubusercontent.com/${topicOwner(topic)}/${topicRepoName(topic)}/main/${relativePath}`;
  }
  return rawItemsUrl(topic);
}

function defaultPagesUrl(topic) {
  return `https://${topicOwner(topic).toLowerCase()}.github.io/${topicRepoName(topic)}/`;
}

function readJsonFile(path, fallback) {
  if (!fs.existsSync(path)) return fallback;
  return JSON.parse(fs.readFileSync(path, 'utf8'));
}

function normalizeContribPath(path) {
  const normalized = String(path || '').replaceAll('\\', '/').replace(/^\/+/, '');
  if (!normalized || normalized.includes('..') || normalized.startsWith('public/')) {
    throw new Error(`Invalid contrib topic path: ${path}`);
  }
  return `public/contrib-topics/${normalized}`;
}

function readContribRegistry() {
  const registry = readJsonFile(CONTRIB_REGISTRY_PATH, []);
  if (!Array.isArray(registry)) throw new Error(`${CONTRIB_REGISTRY_PATH} must be an array`);
  if (registry.length > MAX_INCUBATOR_TOPICS) {
    throw new Error(`Incubator topic limit exceeded: ${registry.length}/${MAX_INCUBATOR_TOPICS}`);
  }
  return registry;
}

async function fetchJson(url) {
  let lastError;
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
    try {
      const response = await fetch(url, {
        signal: controller.signal,
        headers: {
          'user-agent': 'just-ddl-topic-sync'
        }
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return await response.json();
    } catch (error) {
      lastError = error;
      await new Promise(resolve => setTimeout(resolve, attempt * 1000));
    } finally {
      clearTimeout(timeout);
    }
  }
  throw lastError;
}

function validateItem(topicId, item) {
  const errors = [];
  for (const key of ['id', 'title', 'deadline', 'url', 'source']) {
    if (!item[key]) errors.push(`${topicId}/${item.id || '<missing-id>'}: missing ${key}`);
  }
  if (item.deadline && Number.isNaN(Date.parse(item.deadline))) {
    errors.push(`${topicId}/${item.id}: invalid deadline ${item.deadline}`);
  }
  if (item.url && !/^https?:\/\//.test(item.url)) {
    errors.push(`${topicId}/${item.id}: invalid url ${item.url}`);
  }
  const text = JSON.stringify(item);
  if (/\?\?\?\?|�/.test(text)) {
    errors.push(`${topicId}/${item.id}: contains mojibake placeholder`);
  }
  return errors;
}

function normalizeItems(topic, items) {
  if (!Array.isArray(items) || items.length === 0) {
    throw new Error(`${topic.id}: fetched items.json is empty or not an array`);
  }
  const normalized = items.map(item => {
    const deadlineDate = Number.isNaN(Date.parse(item.deadline))
      ? ''
      : new Date(item.deadline).toISOString().slice(0, 10);
    return {
      ...item,
      dateRange: item.dateRange || deadlineDate || 'TBD',
      location: item.location || (item.isOnline === false ? 'TBD' : 'Online'),
      isOnline: typeof item.isOnline === 'boolean' ? item.isOnline : true,
      tags: Array.isArray(item.tags) ? item.tags : [],
      status: item.status || 'upcoming'
    };
  });

  const errors = normalized.flatMap(item => validateItem(topic.id, item));
  if (errors.length) throw new Error(errors.join('\n'));

  return normalized.sort((a, b) => {
    const dateDiff = Date.parse(a.deadline) - Date.parse(b.deadline);
    if (dateDiff !== 0) return dateDiff;
    return String(a.title).localeCompare(String(b.title), 'zh-CN');
  });
}

function writeTopics(topics, categories) {
  const content = `export interface Topic {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  repo: string;
  site: string;
  status: 'published' | 'demo' | 'incubating';
  sourceMode?: 'official' | 'external' | 'incubator' | 'cluster';
  clusterId?: string;
  maintainer?: string;
  dataUrl?: string;
  itemCount: number;
  category: string;
  tags: string[];
}

export const topics: Topic[] = ${JSON.stringify(topics, null, 2)};

export const categories = ${JSON.stringify(categories, null, 2)};

export function getTopicById(id: string) { return topics.find(t => t.id === id); }
`;
  fs.writeFileSync(TOPICS_PATH, content, 'utf8');
}

function writeData(ddlData) {
  const content = `export interface DDLItem {
  [key: string]: unknown;
  id: string;
  title: string;
  deadline: string;
  dateRange: string;
  location: string;
  isOnline: boolean;
  tags: string[];
  url: string;
  status: 'upcoming' | 'ongoing' | 'ended';
  prize?: string;
  description?: string;
  stage?: string;
  source?: string;
  type?: 'conference' | 'journal' | 'challenge' | 'hackathon' | 'holiday' | 'contest' | 'program';
  sourceUrl?: string;
  canonicalUrl?: string;
  isDatePlaceholder?: boolean;
}

export const ddlData: Record<string, DDLItem[]> = ${JSON.stringify(ddlData, null, 2)};

export function getDDLByTopic(topicId: string): DDLItem[] {
  return ddlData[topicId] || [];
}

export function getAllDDL(): DDLItem[] {
  return Object.values(ddlData).flat();
}
`;
  fs.writeFileSync(DATA_PATH, content, 'utf8');
}

function normalizeContribTopic(topic) {
  const errors = [];
  for (const key of ['id', 'name', 'description', 'icon', 'color', 'category', 'itemsPath', 'sourcesPath']) {
    if (!topic[key]) errors.push(`contrib topic ${topic.id || '<missing-id>'}: missing ${key}`);
  }
  if (topic.id && !/^[a-z0-9-]+-ddl$/.test(topic.id)) {
    errors.push(`contrib topic ${topic.id}: id must be lowercase kebab-case and end with -ddl`);
  }
  if (topic.color && !/^#[0-9A-Fa-f]{6}$/.test(topic.color)) {
    errors.push(`contrib topic ${topic.id}: color must be #RRGGBB`);
  }
  if (topic.tags && !Array.isArray(topic.tags)) {
    errors.push(`contrib topic ${topic.id}: tags must be an array`);
  }
  if (errors.length) throw new Error(errors.join('\n'));

  const itemsPath = normalizeContribPath(topic.itemsPath);
  const sourcesPath = normalizeContribPath(topic.sourcesPath);
  if (!fs.existsSync(itemsPath)) throw new Error(`${topic.id}: missing ${itemsPath}`);
  if (!fs.existsSync(sourcesPath)) throw new Error(`${topic.id}: missing ${sourcesPath}`);

  const items = normalizeItems(topic, readJsonFile(itemsPath, []));
  if (items.length > MAX_INCUBATOR_ITEMS) {
    throw new Error(`${topic.id}: incubator item limit exceeded: ${items.length}/${MAX_INCUBATOR_ITEMS}`);
  }

  return {
    topic: {
      id: topic.id,
      name: topic.name,
      description: topic.description,
      icon: topic.icon,
      color: topic.color,
      repo: 'Just-Agent/just-ddl',
      site: `https://just-agent.github.io/just-ddl/#/topic/${topic.id}`,
      status: 'incubating',
      sourceMode: 'incubator',
      maintainer: topic.maintainer || '',
      dataUrl: `contrib-topics/${topic.itemsPath}`,
      itemCount: items.length,
      category: topic.category,
      tags: Array.isArray(topic.tags) ? topic.tags : []
    },
    items
  };
}

function mergeContribTopics(topics, ddlData) {
  const registry = readContribRegistry();
  for (let index = topics.length - 1; index >= 0; index -= 1) {
    if (topics[index].sourceMode === 'incubator') {
      delete ddlData[topics[index].id];
      topics.splice(index, 1);
    }
  }
  const existingTopicIds = new Set(topics.map(topic => topic.id));
  const existingItemIds = new Set(Object.values(ddlData).flat().map(item => item.id));
  const seenTopicIds = new Set();

  for (const entry of registry) {
    if (seenTopicIds.has(entry.id)) throw new Error(`Duplicate incubator topic id: ${entry.id}`);
    if (existingTopicIds.has(entry.id)) throw new Error(`Incubator topic conflicts with existing topic id: ${entry.id}`);
    seenTopicIds.add(entry.id);

    const { topic, items } = normalizeContribTopic(entry);
    for (const item of items) {
      if (existingItemIds.has(item.id)) throw new Error(`${topic.id}: duplicate item id ${item.id}`);
      existingItemIds.add(item.id);
    }

    topics.push(topic);
    ddlData[topic.id] = items;
  }

  return registry.length;
}

function validateCrossTopicUniqueness(ddlData) {
  const itemIds = new Map();
  const canonicalUrls = new Map();
  const errors = [];

  for (const [topicId, items] of Object.entries(ddlData)) {
    if (!Array.isArray(items)) {
      errors.push(`${topicId}: topic data must be an array`);
      continue;
    }

    for (const item of items) {
      const itemRef = `${topicId}/${item.id || '<missing-id>'}`;
      if (item.id) {
        if (itemIds.has(item.id)) {
          errors.push(`Duplicate item id ${item.id}: ${itemIds.get(item.id)} and ${itemRef}`);
        } else {
          itemIds.set(item.id, itemRef);
        }
      }

      if (item.canonicalUrl) {
        const canonicalUrl = String(item.canonicalUrl).trim();
        if (canonicalUrls.has(canonicalUrl)) {
          errors.push(`Duplicate canonicalUrl ${canonicalUrl}: ${canonicalUrls.get(canonicalUrl)} and ${itemRef}`);
        } else {
          canonicalUrls.set(canonicalUrl, itemRef);
        }
      }
    }
  }

  if (errors.length) throw new Error(errors.join('\n'));
}

async function main() {
  const { topics, categories, ddlData } = readModel();
  const contribCount = mergeContribTopics(topics, ddlData);
  const targetTopics = topics.filter(topic => topic.sourceMode !== 'incubator' && (!ONLY_TOPIC || topic.id === ONLY_TOPIC));
  if (ONLY_TOPIC && targetTopics.length === 0) {
    const incubatorTopic = topics.find(topic => topic.id === ONLY_TOPIC && topic.sourceMode === 'incubator');
    if (!incubatorTopic) throw new Error(`Dispatch topic ${ONLY_TOPIC} is not registered in ${TOPICS_PATH}`);
  }

  const summary = [];
  const warnings = [];

  for (const topic of targetTopics) {
    const url = topicDataUrl(topic);
    try {
      const items = normalizeItems(topic, await fetchJson(url));
      ddlData[topic.id] = items;
      topic.itemCount = items.length;
      topic.status = 'published';
      topic.repo = `${topicOwner(topic)}/${topicRepoName(topic)}`;
      topic.site = topic.site && /^https?:\/\//.test(topic.site) ? topic.site : defaultPagesUrl(topic);
      summary.push({ topicId: topic.id, itemCount: items.length, url });
    } catch (error) {
      const fallback = ddlData[topic.id];
      const message = `${topic.id}: ${error.message}`;
      if (STRICT || !Array.isArray(fallback) || fallback.length === 0) {
        throw new Error(message);
      }
      topic.itemCount = fallback.length;
      warnings.push(message);
    }
  }

  validateCrossTopicUniqueness(ddlData);
  writeTopics(topics, categories);
  writeData(ddlData);

  console.log(JSON.stringify({
    syncedAt: new Date().toISOString(),
    requestedTopic: ONLY_TOPIC || 'all',
    incubatorTopics: contribCount,
    syncedTopics: summary,
    warnings
  }, null, 2));
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
