import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const ROOT = process.cwd();
const TOPICS_PATH = path.join(ROOT, 'src/data/topics.ts');
const DATA_PATH = path.join(ROOT, 'src/data/ddl-data.ts');
const METRICS_PATH = path.join(ROOT, 'src/data/metric-data.ts');
const PACKAGE_PATH = path.join(ROOT, 'package.json');
const OUT_DIR = path.join(ROOT, 'public/miniprogram');
const TOPIC_DIR = path.join(OUT_DIR, 'topics');

const PRIVATE_KEYS = new Set([
  'accessMode',
  'adapter',
  'apiUrl',
  'coverageNote',
  'crawler',
  'crawlerReport',
  'crawledAt',
  'debug',
  'debugNote',
  'debugComment',
  'debugReport',
  'deadlineTimezone',
  'developerComment',
  'developerNote',
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
  'maintainerComment',
  'maintainerNote',
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
  'validationNote',
  'debugRemark'
]);
const PRIVATE_KEY_PATTERNS = [
  /^(?:internal|private|debug|crawler|crawl|parser|adapter|raw|error)[A-Za-z0-9_]*$/i,
  /(?:developer|dev|maintainer|internal|private|debug|crawler|crawl|parser|adapter|license|coverage|sample|scope|linkCheck|validation|review|ops|sync|raw|error)[A-Za-z0-9_]*(?:Note|Notes|Comment|Comments|Memo|Memos|Remark|Remarks|Annotation|Annotations|Report|Reports|Message|Messages)$/i,
  /^(?:raw|error|stack|trace|exception)$/i,
  /(?:开发者|开发人员|开发|内部|内测|维护者?|维护人|运营|调试|私有|私人|爬虫|解析器|原始|错误).{0,16}(?:备注|说明|注释|留言|消息|报告|记录)$/i
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
  /\b(?:TODO|FIXME|HACK|XXX):/i,
  ...OPERATOR_ONLY_PUBLIC_TEXT
];

function isPrivateKey(key) {
  return PRIVATE_KEYS.has(key) || PRIVATE_KEY_PATTERNS.some(pattern => pattern.test(key));
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

  for (let index = jsonStart; index < source.length; index += 1) {
    const char = source[index];
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
      if (depth === 0) return source.slice(jsonStart, index + 1);
    }
  }
  throw new Error(`Could not extract JSON for ${marker}`);
}

function readData() {
  const topicsSource = fs.readFileSync(TOPICS_PATH, 'utf8');
  const dataSource = fs.readFileSync(DATA_PATH, 'utf8');
  const metricsSource = fs.existsSync(METRICS_PATH) ? fs.readFileSync(METRICS_PATH, 'utf8') : '';
  return {
    packageJson: JSON.parse(fs.readFileSync(PACKAGE_PATH, 'utf8')),
    topics: JSON.parse(extractJsonAfter(topicsSource, 'export const topics', '[', ']')),
    ddlData: JSON.parse(extractJsonAfter(dataSource, 'export const ddlData', '{', '}')),
    metricData: metricsSource
      ? JSON.parse(extractJsonAfter(metricsSource, 'export const metricData', '{', '}'))
      : {}
  };
}

function stripPrivate(value) {
  if (Array.isArray(value)) return value.map(stripPrivate);
  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value)
        .filter(([key]) => !isPrivateKey(key))
        .map(([key, itemValue]) => [key, stripPrivate(itemValue)])
    );
  }
  return value;
}

function validatePublicPayload(value, label = 'miniprogram') {
  const errors = [];
  if (Array.isArray(value)) {
    value.forEach((item, index) => errors.push(...validatePublicPayload(item, `${label}[${index}]`)));
    return errors;
  }
  if (!value || typeof value !== 'object') {
    if (typeof value === 'string') {
      for (const pattern of FORBIDDEN_PUBLIC_TEXT) {
        if (pattern.test(value)) errors.push(`${label}: contains developer-facing text "${value}"`);
      }
    }
    return errors;
  }

  const status = String(value.status || '').trim().toLowerCase();
  if (status === 'maintenance' || status === 'operator-only') {
    errors.push(`${label}.status: operator-only status must not be exported to miniprogram data`);
  }

  for (const [key, itemValue] of Object.entries(value)) {
    if (isPrivateKey(key)) {
      errors.push(`${label}.${key}: developer-only key must not be exported to miniprogram data`);
      continue;
    }
    errors.push(...validatePublicPayload(itemValue, `${label}.${key}`));
  }
  return errors;
}

function assertPublicPayload(value, label) {
  const errors = validatePublicPayload(value, label);
  if (errors.length) throw new Error(errors.join('\n'));
}

function pick(value, keys) {
  const result = {};
  for (const key of keys) {
    if (value[key] !== undefined && value[key] !== null && value[key] !== '') {
      result[key] = value[key];
    }
  }
  return result;
}

function topicLite(topic) {
  return pick(topic, [
    'id',
    'name',
    'description',
    'icon',
    'color',
    'repo',
    'site',
    'category',
    'tags',
    'itemCount',
    'status',
    'sourceMode',
    'clusterId'
  ]);
}

function itemLite(item, topicId) {
  return pick({ ...item, topicId: item.topicId || topicId }, [
    'id',
    'topicId',
    'title',
    'deadline',
    'date',
    'dateRange',
    'isDatePlaceholder',
    'estimatedNextWindow',
    'lastOfficialDate',
    'basisEvents',
    'confidence',
    'location',
    'isOnline',
    'tags',
    'url',
    'status',
    'stage',
    'source',
    'sourceUrl',
    'previewImage',
    'type',
    'prize',
    'description',
    'subtopic',
    'subtopicName',
    'category'
  ]);
}

function metricLite(metric, topicId) {
  return pick({ ...metric, topicId: metric.topicId || topicId }, [
    'id',
    'topicId',
    'type',
    'journalId',
    'journalTitle',
    'issn',
    'metric',
    'value',
    'year',
    'yearCompleteness',
    'asOfDate',
    'source',
    'url',
    'sourceUrl',
    'openAlexId',
    'homepageUrl'
  ]);
}

function parseTime(value) {
  if (typeof value !== 'string' || !value.trim()) return Number.NaN;
  const time = Date.parse(value);
  return Number.isFinite(time) ? time : Number.NaN;
}

function isHistoryItem(item) {
  return item.type === 'historyEvent' || item.type === 'officialRelease';
}

function isForecastItem(item) {
  return item.type === 'forecastWindow' || Boolean(item.estimatedNextWindow);
}

function isPlaceholderItem(item) {
  return item.isDatePlaceholder === true && !isForecastItem(item);
}

function hasOfficialDeadline(item) {
  return !isHistoryItem(item)
    && !isForecastItem(item)
    && !isPlaceholderItem(item)
    && Number.isFinite(parseTime(item.deadline));
}

function isNextItemCandidate(item) {
  return hasOfficialDeadline(item) && String(item.status || '').toLowerCase() !== 'ended';
}

function subtopicGroups(items) {
  const groups = new Map();
  for (const item of items) {
    const id = item.subtopic || 'general';
    const name = item.subtopicName || item.subtopic || 'General';
    const group = groups.get(id) || {
      id,
      name,
      itemCount: 0,
      nextItemId: null,
      nextItemTime: Number.POSITIVE_INFINITY
    };
    group.itemCount += 1;
    if (isNextItemCandidate(item)) {
      const itemTime = parseTime(item.deadline);
      if (itemTime < group.nextItemTime) {
        group.nextItemId = item.id;
        group.nextItemTime = itemTime;
      }
    }
    groups.set(id, group);
  }
  return Array.from(groups.values())
    .map(({ nextItemTime, ...group }) => group)
    .sort((a, b) => b.itemCount - a.itemCount || a.name.localeCompare(b.name, 'zh-CN'));
}

function checksum(value) {
  return crypto.createHash('sha256').update(JSON.stringify(value)).digest('hex');
}

function writeJson(filePath, value) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(`${filePath}.tmp`, `${JSON.stringify(value, null, 2)}\n`, 'utf8');
  fs.renameSync(`${filePath}.tmp`, filePath);
}

function readExistingJson(filePath) {
  if (!fs.existsSync(filePath)) return null;
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch {
    return null;
  }
}

function main() {
  const { packageJson, topics, ddlData, metricData } = readData();
  const cleanedTopics = stripPrivate(topics).map(topicLite);
  assertPublicPayload(cleanedTopics, 'miniprogram.topics');
  const cleanedItemsByTopic = {};
  const cleanedMetricsByTopic = {};
  let itemsCount = 0;
  let metricsCount = 0;

  for (const topic of cleanedTopics) {
    const items = stripPrivate(ddlData[topic.id] || []).map(item => itemLite(item, topic.id));
    const metrics = stripPrivate(metricData[topic.id] || []).map(metric => metricLite(metric, topic.id));
    assertPublicPayload(items, `miniprogram.topics.${topic.id}.items`);
    assertPublicPayload(metrics, `miniprogram.topics.${topic.id}.metrics`);
    cleanedItemsByTopic[topic.id] = items;
    cleanedMetricsByTopic[topic.id] = metrics;
    itemsCount += items.length;
    metricsCount += metrics.length;
  }

  const payloadForHash = {
    topics: cleanedTopics,
    items: cleanedItemsByTopic,
    metrics: cleanedMetricsByTopic
  };
  const dataVersion = checksum(payloadForHash).slice(0, 16);
  const existingManifest = readExistingJson(path.join(OUT_DIR, 'manifest.json'));
  const generatedAt = existingManifest?.dataVersion === dataVersion && existingManifest?.generatedAt
    ? existingManifest.generatedAt
    : new Date().toISOString();

  fs.rmSync(TOPIC_DIR, { recursive: true, force: true });
  fs.mkdirSync(TOPIC_DIR, { recursive: true });
  for (const topic of cleanedTopics) {
    const items = cleanedItemsByTopic[topic.id] || [];
    const metrics = cleanedMetricsByTopic[topic.id] || [];
    writeJson(path.join(TOPIC_DIR, `${topic.id}.json`), {
      generatedAt,
      dataVersion,
      topic,
      items,
      metrics,
      subtopics: subtopicGroups(items)
    });
  }

  const searchItems = cleanedTopics.flatMap(topic =>
    (cleanedItemsByTopic[topic.id] || []).map(item => ({
      id: item.id,
      topicId: topic.id,
      title: item.title,
      deadline: item.deadline,
      date: item.date,
      estimatedNextWindow: item.estimatedNextWindow,
      type: item.type,
      status: item.status,
      tags: item.tags || [],
      subtopic: item.subtopic,
      source: item.source
    }))
  );
  assertPublicPayload(searchItems, 'miniprogram.searchIndex.items');

  writeJson(path.join(OUT_DIR, 'manifest.json'), {
    generatedAt,
    dataVersion,
    appVersion: packageJson.version || '0.0.0',
    baseAssetUrl: '/assets/source-previews/',
    topicsCount: cleanedTopics.length,
    itemsCount,
    metricsCount,
    checksum: checksum(payloadForHash),
    endpoints: {
      topics: '/miniprogram/topics.json',
      searchIndex: '/miniprogram/search-index.json',
      topicTemplate: '/miniprogram/topics/{topicId}.json'
    }
  });
  writeJson(path.join(OUT_DIR, 'topics.json'), cleanedTopics);
  writeJson(path.join(OUT_DIR, 'search-index.json'), {
    generatedAt,
    dataVersion,
    topics: cleanedTopics.map(topic => pick(topic, ['id', 'name', 'description', 'category', 'tags', 'itemCount', 'status'])),
    items: searchItems
  });

  console.log(JSON.stringify({
    generatedAt,
    dataVersion,
    topicsCount: cleanedTopics.length,
    itemsCount,
    metricsCount,
    output: path.relative(ROOT, OUT_DIR)
  }, null, 2));
}

main();
