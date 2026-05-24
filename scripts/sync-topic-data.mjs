import fs from 'node:fs';

const TOPICS_PATH = 'src/data/topics.ts';
const DATA_PATH = 'src/data/ddl-data.ts';
const METRICS_PATH = 'src/data/metric-data.ts';
const CONTRIB_REGISTRY_PATH = 'public/contrib-topics/registry.json';
const DEFAULT_OWNER = process.env.JUST_DDL_OWNER || 'Just-Agent';
const STRICT = process.env.STRICT_TOPIC_SYNC === '1';
const ONLY_TOPIC = (process.env.JUST_DDL_DISPATCH_TOPIC || process.env.JUST_DDL_TOPIC_ID || '').trim();
const FETCH_TIMEOUT_MS = Number(process.env.JUST_DDL_FETCH_TIMEOUT_MS || 12000);
const MAX_INCUBATOR_TOPICS = 5;
const MAX_INCUBATOR_ITEMS = 50;
const PUBLIC_PRIVATE_KEYS = new Set([
  'accessMode',
  'adapter',
  'apiUrl',
  'coverageNote',
  'crawler',
  'crawlerReport',
  'crawledAt',
  'debug',
  'debugReport',
  'deadlineTimezone',
  'developerNote',
  'developerComment',
  'developerRemark',
  'devComment',
  'devNote',
  'devRemark',
  'error',
  'forecastBasis',
  'internalNote',
  'internalComment',
  'internalRemark',
  'lastChecked',
  'licenseNote',
  'linkCheckMode',
  'maintainerNote',
  'maintainerComment',
  'maintainerRemark',
  'parser',
  'parserConfidence',
  'privateNote',
  'privateComment',
  'privateRemark',
  'raw',
  'rawHtml',
  'rawPayload',
  'rawSource',
  'releaseCadence',
  'sampleNote',
  'scopeNote',
  'debugNote',
  'debugComment',
  'debugRemark',
  'sourcePolicy',
  'sourcePriority',
  'validationNote'
]);
const PUBLIC_PRIVATE_KEY_PATTERNS = [
  /^(?:internal|private|debug|crawler|crawl|parser|adapter|raw|error)[A-Za-z0-9_]*$/i,
  /(?:developer|dev|maintainer|internal|private|debug|crawler|crawl|parser|adapter|license|coverage|sample|scope|linkCheck|validation|review|ops|sync|raw|error)[A-Za-z0-9_]*(?:Note|Notes|Comment|Comments|Memo|Memos|Remark|Remarks|Annotation|Annotations|Report|Reports|Message|Messages)$/i,
  /^(?:raw|error|stack|trace|exception)$/i,
  /(?:开发者|开发人员|开发|内部|内测|维护者?|维护人|运营|调试|私有|私人|爬虫|解析器|原始|错误).{0,16}(?:备注|说明|注释|留言|消息|报告|记录)$/i
];
const PUBLIC_TEXT_REWRITES = [
  [/curated coverage seed/gi, '人工整理的官方来源入口'],
  [/official-style seed/gi, '官方来源入口'],
  [/official seed/gi, '官方来源入口'],
  [/crawler seed/gi, '数据源入口'],
  [/coverage seed/gi, '官方来源入口'],
  [/定时\s*crawler\s*会继续补([^。]*)。?/gi, '后续将按官方页面持续补充$1。'],
  [/后续由\s*crawler\s*对齐/gi, '后续将按官方页面对齐'],
  [/后续\s*crawler\s*可/gi, '后续自动更新流程可'],
  [/\bcrawler\b/gi, '自动更新流程']
];
const OPERATOR_ONLY_PUBLIC_TEXT = [
  /maintenance forecast/i,
  /maintenance window/i,
  /operator-only/i,
  /crawler run cadence/i,
  /api sync window/i,
  /维护链路/,
  /维护刷新窗口/,
  /每周刷新窗口/,
  /维护节奏/,
  /运维节奏/
];
const PUBLIC_FORBIDDEN_TEXT = [
  /\b(?:developerNote|developerComment|developerRemark|devNote|devComment|devRemark|debugNote|debugComment|debugRemark|internalNote|internalComment|internalRemark|privateNote|privateComment|privateRemark|maintainerNote|maintainerComment|maintainerRemark|forecastBasis|releaseCadence|accessMode|apiUrl|licenseNote|scopeNote|linkCheckMode|parserConfidence|sourcePolicy|sourcePriority|validationNote|crawlerReport|debugReport|rawHtml|rawPayload|rawSource)\b/,
  /curated coverage seed/i,
  /official-style seed/i,
  /crawler seed/i,
  /coverage seed/i,
  /error\.message/i,
  /stack trace/i,
  /developer note/i,
  /developer remark/i,
  /maintainer note/i,
  /maintainer remark/i,
  /internal note/i,
  /internal remark/i,
  /private note/i,
  /private remark/i,
  /debug note/i,
  /debug remark/i,
  /(?:developer|dev|maintainer|internal|private|debug|crawler|parser|raw|error)[\w -]{0,24}\b(?:note|notes|comment|comments|memo|memos|remark|remarks|message|messages|report|reports)\b/i,
  /not for public/i,
  /do not publish/i,
  /开发者[的把]?备注/,
  /开发者.{0,16}(?:备注|注释|留言|消息|报告|记录)/,
  /开发人员.{0,16}(?:备注|注释|留言|消息|报告|记录)/,
  /开发备注/,
  /内部[的把]?备注/,
  /内部.{0,16}(?:备注|注释|留言|消息|报告|记录)/,
  /维护(?:者)?[的把]?备注/,
  /维护(?:者|人)?.{0,16}(?:备注|注释|留言|消息|报告|记录)/,
  /调试[的把]?备注/,
  /调试.{0,16}(?:备注|注释|留言|消息|报告|记录)/,
  /私有[的把]?备注/,
  /私有.{0,16}(?:备注|注释|留言|消息|报告|记录)/,
  /私人[的把]?备注/,
  /私人.{0,16}(?:备注|注释|留言|消息|报告|记录)/,
  /\b(?:TODO|FIXME|HACK|XXX):/i,
  ...OPERATOR_ONLY_PUBLIC_TEXT
];

function isPrivatePublicKey(key) {
  return PUBLIC_PRIVATE_KEYS.has(key) || PUBLIC_PRIVATE_KEY_PATTERNS.some(pattern => pattern.test(key));
}

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
  const metricsSource = fs.existsSync(METRICS_PATH) ? fs.readFileSync(METRICS_PATH, 'utf8') : '';
  return {
    topics: JSON.parse(extractJsonAfter(topicsSource, 'export const topics', '[', ']')),
    categories: JSON.parse(extractJsonAfter(topicsSource, 'export const categories', '[', ']')),
    ddlData: JSON.parse(extractJsonAfter(dataSource, 'export const ddlData', '{', '}')),
    metricData: metricsSource
      ? JSON.parse(extractJsonAfter(metricsSource, 'export const metricData', '{', '}'))
      : {}
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

function resolveRepoDataUrl(topic, dataPath) {
  if (dataPath) {
    const value = String(dataPath).trim();
    if (/^https?:\/\//.test(value)) return value;
    const relativePath = value.replaceAll('\\', '/').replace(/^\.?\//, '');
    if (!relativePath || relativePath.includes('..')) {
      throw new Error(`${topic.id}: invalid data path ${dataPath}`);
    }
    return `https://raw.githubusercontent.com/${topicOwner(topic)}/${topicRepoName(topic)}/main/${relativePath}`;
  }
  return '';
}

function topicDataUrl(topic) {
  if (topic.dataUrl) return resolveRepoDataUrl(topic, topic.dataUrl);
  return rawItemsUrl(topic);
}

function topicMetricsUrl(topic) {
  return topic.metricsUrl ? resolveRepoDataUrl(topic, topic.metricsUrl) : '';
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
  for (const key of ['id', 'title', 'url', 'source']) {
    if (!item[key]) errors.push(`${topicId}/${item.id || '<missing-id>'}: missing ${key}`);
  }
  const status = String(item.status || '').trim().toLowerCase();
  if (status === 'maintenance' || status === 'operator-only') {
    errors.push(`${topicId}/${item.id || '<missing-id>'}: operator-only status must not become a public DDL item`);
  }
  const stage = String(item.stage || '').trim();
  for (const pattern of OPERATOR_ONLY_PUBLIC_TEXT) {
    if (pattern.test(stage)) {
      errors.push(`${topicId}/${item.id || '<missing-id>'}: operator-only stage must not become a public DDL item`);
    }
  }

  const type = String(item.type || 'officialDeadline');
  const hasDeadline = item.deadline && !Number.isNaN(Date.parse(item.deadline));
  const hasDate = item.date && !Number.isNaN(Date.parse(item.date));
  const windowStart = item.estimatedNextWindow?.start;
  const windowEnd = item.estimatedNextWindow?.end;
  const hasWindow = windowStart && windowEnd && !Number.isNaN(Date.parse(windowStart)) && !Number.isNaN(Date.parse(windowEnd));
  const isHistory = type === 'historyEvent' || type === 'officialRelease';
  const isForecast = type === 'forecastWindow' || Boolean(item.estimatedNextWindow);
  const isPlaceholder = item.isDatePlaceholder === true;

  if (isHistory) {
    if (!hasDate) errors.push(`${topicId}/${item.id}: history item must include valid date`);
  } else if (isForecast) {
    if (!isPlaceholder) errors.push(`${topicId}/${item.id}: forecast item must set isDatePlaceholder=true`);
    if (!hasWindow) errors.push(`${topicId}/${item.id}: forecast item must include valid estimatedNextWindow.start/end`);
    if (!item.lastOfficialDate || Number.isNaN(Date.parse(item.lastOfficialDate))) {
      errors.push(`${topicId}/${item.id}: forecast item must include valid lastOfficialDate`);
    }
    if (!Array.isArray(item.basisEvents) || item.basisEvents.length === 0) {
      errors.push(`${topicId}/${item.id}: forecast item must include basisEvents`);
    }
    if (!['low', 'medium', 'high'].includes(String(item.confidence || ''))) {
      errors.push(`${topicId}/${item.id}: forecast item must include confidence low/medium/high`);
    }
  } else if (!isPlaceholder && !hasDeadline) {
    errors.push(`${topicId}/${item.id}: official deadline item must include valid deadline`);
  } else if (item.deadline && Number.isNaN(Date.parse(item.deadline))) {
    errors.push(`${topicId}/${item.id}: invalid deadline ${item.deadline}`);
  }
  if (item.url && !/^https?:\/\//.test(item.url)) {
    errors.push(`${topicId}/${item.id}: invalid url ${item.url}`);
  }
  const text = JSON.stringify(item);
  if (/\?\?\?\?|�/.test(text)) {
    errors.push(`${topicId}/${item.id}: contains mojibake placeholder`);
  }
  for (const pattern of OPERATOR_ONLY_PUBLIC_TEXT) {
    if (pattern.test(text)) {
      errors.push(`${topicId}/${item.id}: operator-only maintenance wording must not become a public DDL item`);
    }
  }
  return errors;
}

function validateMetric(topicId, metric) {
  const errors = [];
  for (const key of ['id', 'metric', 'value', 'source', 'url']) {
    if (metric[key] === undefined || metric[key] === null || metric[key] === '') {
      errors.push(`${topicId}/${metric.id || '<missing-id>'}: missing ${key}`);
    }
  }
  if (metric.url && !/^https?:\/\//.test(metric.url)) {
    errors.push(`${topicId}/${metric.id}: invalid url ${metric.url}`);
  }
  if (metric.asOfDate && Number.isNaN(Date.parse(metric.asOfDate))) {
    errors.push(`${topicId}/${metric.id}: invalid asOfDate ${metric.asOfDate}`);
  }
  if (metric.year !== undefined && (!Number.isInteger(Number(metric.year)) || Number(metric.year) < 1900)) {
    errors.push(`${topicId}/${metric.id}: invalid year ${metric.year}`);
  }
  const text = JSON.stringify(metric);
  if (/\?\?\?\?|�/.test(text)) {
    errors.push(`${topicId}/${metric.id}: contains mojibake placeholder`);
  }
  return errors;
}

function toPublicString(value) {
  return PUBLIC_TEXT_REWRITES.reduce(
    (text, [pattern, replacement]) => text.replace(pattern, replacement),
    value
  );
}

function stripPrivatePublicData(value) {
  if (Array.isArray(value)) return value.map(stripPrivatePublicData);
  if (!value || typeof value !== 'object') {
    return typeof value === 'string' ? toPublicString(value) : value;
  }

  const result = {};
  for (const [key, itemValue] of Object.entries(value)) {
    if (isPrivatePublicKey(key)) continue;
    result[key] = stripPrivatePublicData(itemValue);
  }
  return result;
}

function validatePublicPayload(value, path = 'ddlData') {
  const errors = [];
  if (Array.isArray(value)) {
    value.forEach((item, index) => errors.push(...validatePublicPayload(item, `${path}[${index}]`)));
    return errors;
  }
  if (!value || typeof value !== 'object') {
    if (typeof value === 'string') {
      for (const pattern of PUBLIC_FORBIDDEN_TEXT) {
        if (pattern.test(value)) errors.push(`${path}: contains developer-facing text "${value}"`);
      }
    }
    return errors;
  }

  const status = String(value.status || '').trim().toLowerCase();
  if (status === 'maintenance' || status === 'operator-only') {
    errors.push(`${path}.status: operator-only status must not be written to public Hub data`);
  }

  for (const [key, itemValue] of Object.entries(value)) {
    if (isPrivatePublicKey(key)) {
      errors.push(`${path}.${key}: developer-only field must not be written to public Hub data`);
      continue;
    }
    errors.push(...validatePublicPayload(itemValue, `${path}.${key}`));
  }
  return errors;
}

function publicDateRange(item) {
  if (item.dateRange) return item.dateRange;
  if (item.deadline && !Number.isNaN(Date.parse(item.deadline))) {
    return new Date(item.deadline).toISOString().slice(0, 10);
  }
  if (item.date && !Number.isNaN(Date.parse(item.date))) {
    return new Date(item.date).toISOString().slice(0, 10);
  }
  const start = item.estimatedNextWindow?.start;
  const end = item.estimatedNextWindow?.end;
  if (start && end && !Number.isNaN(Date.parse(start)) && !Number.isNaN(Date.parse(end))) {
    return `${new Date(start).toISOString().slice(0, 10)} - ${new Date(end).toISOString().slice(0, 10)}`;
  }
  return item.isDatePlaceholder === true ? '待官方公告' : 'TBD';
}

function publicStatus(item) {
  if (item.status) return item.status;
  if (item.type === 'historyEvent' || item.type === 'officialRelease') return 'ended';
  if (item.type === 'forecastWindow' || item.estimatedNextWindow) return 'unannounced';
  return 'upcoming';
}

function sortTime(item) {
  const candidates = [
    item.deadline,
    item.date,
    item.estimatedNextWindow?.start
  ];
  for (const candidate of candidates) {
    if (candidate && !Number.isNaN(Date.parse(candidate))) return Date.parse(candidate);
  }
  return Number.MAX_SAFE_INTEGER;
}

function sortBucket(item) {
  if (item.status === 'ended' || item.type === 'historyEvent' || item.type === 'officialRelease') return 2;
  if (item.type === 'forecastWindow' || item.estimatedNextWindow) return 1;
  return 0;
}

function normalizeItems(topic, items) {
  if (!Array.isArray(items) || items.length === 0) {
    throw new Error(`${topic.id}: fetched items.json is empty or not an array`);
  }
  const normalized = items.map(item => {
    return {
      ...item,
      dateRange: publicDateRange(item),
      location: item.location || (item.isOnline === false ? 'TBD' : 'Online'),
      isOnline: typeof item.isOnline === 'boolean' ? item.isOnline : true,
      tags: Array.isArray(item.tags) ? item.tags : [],
      status: publicStatus(item)
    };
  });

  const errors = normalized.flatMap(item => validateItem(topic.id, item));
  if (errors.length) throw new Error(errors.join('\n'));

  const publicItems = normalized.map(stripPrivatePublicData);
  return publicItems.sort((a, b) => {
    const bucketDiff = sortBucket(a) - sortBucket(b);
    if (bucketDiff !== 0) return bucketDiff;
    const dateDiff = sortTime(a) - sortTime(b);
    if (dateDiff !== 0) return dateDiff;
    return String(a.title).localeCompare(String(b.title), 'zh-CN');
  });
}

function normalizeMetrics(topic, metrics) {
  if (!Array.isArray(metrics)) {
    throw new Error(`${topic.id}: fetched metrics.json is not an array`);
  }
  const normalized = metrics.map(metric => ({
    ...metric,
    topicId: metric.topicId || topic.id,
    type: metric.type || 'metricSnapshot'
  }));
  const errors = normalized.flatMap(metric => validateMetric(topic.id, metric));
  if (errors.length) throw new Error(errors.join('\n'));

  const publicMetrics = normalized.map(stripPrivatePublicData);
  return publicMetrics.sort((a, b) => {
    const titleDiff = String(a.journalTitle || a.journalId || '').localeCompare(String(b.journalTitle || b.journalId || ''), 'zh-CN');
    if (titleDiff) return titleDiff;
    return Number(b.year || 0) - Number(a.year || 0) || String(a.metric).localeCompare(String(b.metric), 'zh-CN');
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
  metricsUrl?: string;
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
  const publicData = stripPrivatePublicData(ddlData);
  const publicErrors = validatePublicPayload(publicData);
  if (publicErrors.length) throw new Error(publicErrors.join('\n'));

  const content = `export interface DDLItem {
  [key: string]: unknown;
  id: string;
  title: string;
  deadline?: string;
  date?: string;
  dateRange: string;
  location: string;
  isOnline: boolean;
  tags: string[];
  url: string;
  status: 'upcoming' | 'ongoing' | 'ended' | 'unannounced' | 'watching' | string;
  prize?: string;
  description?: string;
  stage?: string;
  source?: string;
  type?: 'conference' | 'journal' | 'challenge' | 'hackathon' | 'holiday' | 'contest' | 'program' | 'release' | 'concert' | 'regulation' | 'officialDeadline' | 'historyEvent' | 'officialRelease' | 'forecastWindow' | string;
  sourceUrl?: string;
  canonicalUrl?: string;
  isDatePlaceholder?: boolean;
  previewImage?: string;
  subtopic?: string;
  subtopicName?: string;
  estimatedNextWindow?: {
    start: string;
    end: string;
  };
  lastOfficialDate?: string;
  basisEvents?: string[];
  confidence?: 'low' | 'medium' | 'high' | string;
}

export const ddlData: Record<string, DDLItem[]> = ${JSON.stringify(publicData, null, 2)};

export function getDDLByTopic(topicId: string): DDLItem[] {
  return ddlData[topicId] || [];
}

export function getAllDDL(): DDLItem[] {
  return Object.values(ddlData).flat();
}
`;
  fs.writeFileSync(DATA_PATH, content, 'utf8');
}

function writeMetrics(metricData) {
  const publicMetrics = stripPrivatePublicData(metricData);
  const publicErrors = validatePublicPayload(publicMetrics, 'metricData');
  if (publicErrors.length) throw new Error(publicErrors.join('\n'));

  const content = `export interface MetricSnapshot {
  [key: string]: unknown;
  id: string;
  topicId?: string;
  type?: 'metricSnapshot' | string;
  journalId?: string;
  journalTitle?: string;
  issn?: string;
  metric: string;
  value: number | string;
  year?: number;
  asOfDate?: string;
  source: string;
  url: string;
  sourceUrl?: string;
}

export const metricData: Record<string, MetricSnapshot[]> = ${JSON.stringify(publicMetrics, null, 2)};

export function getMetricsByTopic(topicId: string): MetricSnapshot[] {
  return metricData[topicId] || [];
}
`;
  fs.writeFileSync(METRICS_PATH, content, 'utf8');
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

function matchesDispatchTopic(topic) {
  if (!ONLY_TOPIC) return true;
  return (
    topic.id === ONLY_TOPIC ||
    topic.clusterId === ONLY_TOPIC ||
    topicRepoName(topic) === ONLY_TOPIC ||
    topic.repo === ONLY_TOPIC
  );
}

function mergeContribTopics(topics, ddlData, metricData) {
  const registry = readContribRegistry();
  for (let index = topics.length - 1; index >= 0; index -= 1) {
    if (topics[index].sourceMode === 'incubator') {
      delete ddlData[topics[index].id];
      delete metricData[topics[index].id];
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
  const { topics, categories, ddlData, metricData } = readModel();
  const contribCount = mergeContribTopics(topics, ddlData, metricData);
  const targetTopics = topics.filter(topic => topic.sourceMode !== 'incubator' && matchesDispatchTopic(topic));
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
      const metricsUrl = topicMetricsUrl(topic);
      let metricCount = 0;
      if (metricsUrl) {
        try {
          const metrics = normalizeMetrics(topic, await fetchJson(metricsUrl));
          metricData[topic.id] = metrics;
          metricCount = metrics.length;
        } catch (metricsError) {
          const fallbackMetrics = metricData[topic.id];
          const metricsMessage = `${topic.id}: ${metricsError.message}`;
          if (STRICT || !Array.isArray(fallbackMetrics)) {
            throw new Error(metricsMessage);
          }
          metricCount = fallbackMetrics.length;
          warnings.push(metricsMessage);
        }
      } else {
        delete metricData[topic.id];
      }
      summary.push({ topicId: topic.id, itemCount: items.length, metricCount, url });
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
  writeMetrics(metricData);

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
