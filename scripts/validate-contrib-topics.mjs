import fs from 'node:fs';

const TOPICS_PATH = 'src/data/topics.ts';
const DATA_PATH = 'src/data/ddl-data.ts';
const REGISTRY_PATH = 'public/contrib-topics/registry.json';
const ROOT = 'public/contrib-topics';
const MAX_TOPICS = 5;
const MAX_ITEMS = 50;
const REQUIRED_TOPIC_FIELDS = ['id', 'name', 'description', 'icon', 'color', 'category', 'itemsPath', 'sourcesPath'];
const REQUIRED_ITEM_FIELDS = ['id', 'title', 'deadline', 'url', 'source'];

function extractJsonAfter(source, marker, open, close) {
  const start = source.indexOf(marker);
  if (start === -1) throw new Error(`Missing marker: ${marker}`);
  const assignment = source.indexOf('=', start);
  const jsonStart = source.indexOf(open, assignment);
  let depth = 0;
  let inString = false;
  let escaped = false;
  for (let i = jsonStart; i < source.length; i += 1) {
    const char = source[i];
    if (inString) {
      if (escaped) escaped = false;
      else if (char === '\\') escaped = true;
      else if (char === '"') inString = false;
      continue;
    }
    if (char === '"') inString = true;
    else if (char === open) depth += 1;
    else if (char === close) {
      depth -= 1;
      if (depth === 0) return source.slice(jsonStart, i + 1);
    }
  }
  throw new Error(`Could not extract ${marker}`);
}

function readJson(path, fallback) {
  if (!fs.existsSync(path)) return fallback;
  return JSON.parse(fs.readFileSync(path, 'utf8'));
}

function readCurrentModel() {
  const topicsSource = fs.readFileSync(TOPICS_PATH, 'utf8');
  const dataSource = fs.readFileSync(DATA_PATH, 'utf8');
  return {
    topics: JSON.parse(extractJsonAfter(topicsSource, 'export const topics', '[', ']')),
    ddlData: JSON.parse(extractJsonAfter(dataSource, 'export const ddlData', '{', '}')),
  };
}

function safePath(path) {
  const normalized = String(path || '').replaceAll('\\', '/').replace(/^\/+/, '');
  if (!normalized || normalized.includes('..') || normalized.startsWith('public/')) {
    throw new Error(`Invalid contrib path: ${path}`);
  }
  return `${ROOT}/${normalized}`;
}

function validateText(id, value) {
  if (/\?\?\?\?|�/.test(JSON.stringify(value))) {
    throw new Error(`${id}: contains mojibake placeholder`);
  }
}

function validateItem(topicId, item) {
  for (const key of REQUIRED_ITEM_FIELDS) {
    if (!item[key]) throw new Error(`${topicId}/${item.id || '<missing-id>'}: missing ${key}`);
  }
  if (Number.isNaN(Date.parse(item.deadline))) {
    throw new Error(`${topicId}/${item.id}: invalid deadline ${item.deadline}`);
  }
  if (!/^https?:\/\//.test(item.url)) {
    throw new Error(`${topicId}/${item.id}: invalid url ${item.url}`);
  }
  if (item.tags && !Array.isArray(item.tags)) {
    throw new Error(`${topicId}/${item.id}: tags must be an array`);
  }
  validateText(`${topicId}/${item.id}`, item);
}

function main() {
  const registry = readJson(REGISTRY_PATH, []);
  if (!Array.isArray(registry)) throw new Error(`${REGISTRY_PATH} must be an array`);
  if (registry.length > MAX_TOPICS) throw new Error(`Too many incubator topics: ${registry.length}/${MAX_TOPICS}`);

  const { topics, ddlData } = readCurrentModel();
  const generatedIncubatorIds = new Set(topics.filter(topic => topic.sourceMode === 'incubator').map(topic => topic.id));
  const existingTopicIds = new Set(topics.filter(topic => topic.sourceMode !== 'incubator').map(topic => topic.id));
  const existingItemIds = new Set(
    Object.entries(ddlData)
      .filter(([topicId]) => !generatedIncubatorIds.has(topicId))
      .flatMap(([, items]) => items)
      .map(item => item.id)
  );
  const seenTopicIds = new Set();

  for (const topic of registry) {
    for (const key of REQUIRED_TOPIC_FIELDS) {
      if (!topic[key]) throw new Error(`${topic.id || '<missing-topic>'}: missing ${key}`);
    }
    if (!/^[a-z0-9-]+-ddl$/.test(topic.id)) throw new Error(`${topic.id}: id must end with -ddl`);
    if (seenTopicIds.has(topic.id)) throw new Error(`${topic.id}: duplicate incubator topic id`);
    if (existingTopicIds.has(topic.id)) throw new Error(`${topic.id}: conflicts with existing Hub topic`);
    if (!/^#[0-9A-Fa-f]{6}$/.test(topic.color)) throw new Error(`${topic.id}: color must be #RRGGBB`);
    if (topic.tags && !Array.isArray(topic.tags)) throw new Error(`${topic.id}: tags must be an array`);
    if (topic.status && topic.status !== 'incubating') throw new Error(`${topic.id}: status must be incubating`);
    validateText(topic.id, topic);
    seenTopicIds.add(topic.id);

    const itemsPath = safePath(topic.itemsPath);
    const sourcesPath = safePath(topic.sourcesPath);
    if (!fs.existsSync(itemsPath)) throw new Error(`${topic.id}: missing ${itemsPath}`);
    if (!fs.existsSync(sourcesPath)) throw new Error(`${topic.id}: missing ${sourcesPath}`);

    const items = readJson(itemsPath, []);
    if (!Array.isArray(items)) throw new Error(`${topic.id}: items.json must be an array`);
    if (items.length > MAX_ITEMS) throw new Error(`${topic.id}: too many items ${items.length}/${MAX_ITEMS}`);
    for (const item of items) {
      validateItem(topic.id, item);
      if (existingItemIds.has(item.id)) throw new Error(`${topic.id}: duplicate item id ${item.id}`);
      existingItemIds.add(item.id);
    }

    const sources = readJson(sourcesPath, []);
    if (!Array.isArray(sources) && typeof sources !== 'object') {
      throw new Error(`${topic.id}: sources.json must be an array or object`);
    }
    validateText(`${topic.id}/sources`, sources);
  }

  console.log(JSON.stringify({
    ok: true,
    incubatorTopics: registry.length,
    maxTopics: MAX_TOPICS,
    maxItemsPerTopic: MAX_ITEMS,
  }, null, 2));
}

main();
