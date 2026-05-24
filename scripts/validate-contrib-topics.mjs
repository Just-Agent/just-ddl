import fs from 'node:fs';

const TOPICS_PATH = 'src/data/topics.ts';
const DATA_PATH = 'src/data/ddl-data.ts';
const REGISTRY_PATH = 'public/contrib-topics/registry.json';
const ROOT = 'public/contrib-topics';
const MAX_TOPICS = 5;
const MAX_ITEMS = 50;
const REQUIRED_TOPIC_FIELDS = ['id', 'name', 'description', 'icon', 'color', 'category', 'itemsPath', 'sourcesPath'];
const REQUIRED_ITEM_FIELDS = ['id', 'title', 'url', 'source'];
const PRIVATE_KEYS = new Set([
  'accessMode',
  'adapter',
  'apiUrl',
  'coverageNote',
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
  'debugNote',
  'debugComment',
  'debugRemark',
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
  'sourcePolicy',
  'sourcePriority',
  'validationNote'
]);
const PRIVATE_KEY_PATTERNS = [
  /^(?:internal|private|debug|crawler|crawl|parser|adapter|raw|error)[A-Za-z0-9_]*$/i,
  /(?:developer|dev|maintainer|internal|private|debug|crawler|crawl|parser|adapter|license|coverage|sample|scope|linkCheck|validation|review|ops|sync|raw|error)[A-Za-z0-9_]*(?:Note|Notes|Comment|Comments|Memo|Memos|Remark|Remarks|Annotation|Annotations|Report|Reports|Message|Messages)$/i,
  /^(?:raw|error|stack|trace|exception)$/i,
  /(?:开发者|开发人员|开发|内部|内测|维护者?|维护人|运营|调试|私有|私人|爬虫|解析器|原始|错误).{0,16}(?:备注|说明|注释|留言|消息|报告|记录)$/i
];
const FORBIDDEN_PUBLIC_TEXT = [
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
  /\b(?:TODO|FIXME|HACK|XXX):/i
];

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
  const text = JSON.stringify(value);
  if (/\?\?\?\?|�/.test(text)) {
    throw new Error(`${id}: contains mojibake placeholder`);
  }
  for (const pattern of FORBIDDEN_PUBLIC_TEXT) {
    if (pattern.test(text)) throw new Error(`${id}: contains developer-facing note text`);
  }
}

function isPrivateKey(key) {
  return PRIVATE_KEYS.has(key) || PRIVATE_KEY_PATTERNS.some(pattern => pattern.test(key));
}

function validateNoPrivateKeys(id, value) {
  if (Array.isArray(value)) {
    value.forEach((item, index) => validateNoPrivateKeys(`${id}[${index}]`, item));
    return;
  }
  if (!value || typeof value !== 'object') return;
  for (const [key, itemValue] of Object.entries(value)) {
    if (isPrivateKey(key)) throw new Error(`${id}.${key}: developer-only field is not allowed in public contrib data`);
    validateNoPrivateKeys(`${id}.${key}`, itemValue);
  }
}

function validateItem(topicId, item) {
  for (const key of REQUIRED_ITEM_FIELDS) {
    if (!item[key]) throw new Error(`${topicId}/${item.id || '<missing-id>'}: missing ${key}`);
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
    if (!hasDate) throw new Error(`${topicId}/${item.id}: history item must include valid date`);
  } else if (isForecast) {
    if (!isPlaceholder) throw new Error(`${topicId}/${item.id}: forecast item must set isDatePlaceholder=true`);
    if (!hasWindow) throw new Error(`${topicId}/${item.id}: forecast item must include valid estimatedNextWindow.start/end`);
    if (!item.lastOfficialDate || Number.isNaN(Date.parse(item.lastOfficialDate))) {
      throw new Error(`${topicId}/${item.id}: forecast item must include valid lastOfficialDate`);
    }
    if (!Array.isArray(item.basisEvents) || item.basisEvents.length === 0) {
      throw new Error(`${topicId}/${item.id}: forecast item must include basisEvents`);
    }
    if (!['low', 'medium', 'high'].includes(String(item.confidence || ''))) {
      throw new Error(`${topicId}/${item.id}: forecast item must include confidence low/medium/high`);
    }
  } else if (!isPlaceholder && !hasDeadline) {
    throw new Error(`${topicId}/${item.id}: official deadline item must include valid deadline`);
  } else if (item.deadline && Number.isNaN(Date.parse(item.deadline))) {
    throw new Error(`${topicId}/${item.id}: invalid deadline ${item.deadline}`);
  }
  if (!/^https?:\/\//.test(item.url)) {
    throw new Error(`${topicId}/${item.id}: invalid url ${item.url}`);
  }
  if (item.tags && !Array.isArray(item.tags)) {
    throw new Error(`${topicId}/${item.id}: tags must be an array`);
  }
  validateNoPrivateKeys(`${topicId}/${item.id}`, item);
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
    validateNoPrivateKeys(topic.id, topic);
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
    validateNoPrivateKeys(`${topic.id}/sources`, sources);
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
