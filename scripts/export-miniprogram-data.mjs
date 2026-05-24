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

function subtopicGroups(items) {
  const groups = new Map();
  for (const item of items) {
    const id = item.subtopic || 'general';
    const name = item.subtopicName || item.subtopic || 'General';
    const group = groups.get(id) || {
      id,
      name,
      itemCount: 0,
      nextItemId: null
    };
    group.itemCount += 1;
    if (!group.nextItemId && item.deadline) group.nextItemId = item.id;
    groups.set(id, group);
  }
  return Array.from(groups.values()).sort((a, b) => b.itemCount - a.itemCount || a.name.localeCompare(b.name, 'zh-CN'));
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
  const cleanedItemsByTopic = {};
  const cleanedMetricsByTopic = {};
  let itemsCount = 0;
  let metricsCount = 0;

  for (const topic of cleanedTopics) {
    const items = stripPrivate(ddlData[topic.id] || []).map(item => itemLite(item, topic.id));
    const metrics = stripPrivate(metricData[topic.id] || []).map(metric => metricLite(metric, topic.id));
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
