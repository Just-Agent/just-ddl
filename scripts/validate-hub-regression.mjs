import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const TOPICS_PATH = path.join(ROOT, 'src/data/topics.ts');
const DDL_PATH = path.join(ROOT, 'src/data/ddl-data.ts');
const METRIC_PATH = path.join(ROOT, 'src/data/metric-data.ts');
const MY_DDL_PATH = path.join(ROOT, 'src/pages/MyDDL.tsx');
const MINIPROGRAM_DIR = path.join(ROOT, 'public/miniprogram');
const MINIPROGRAM_TOPIC_DIR = path.join(MINIPROGRAM_DIR, 'topics');

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

function readJsonTs(filePath, marker, open, close) {
  const source = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(extractJsonAfter(source, marker, open, close));
}

function fail(errors) {
  console.error('Hub regression validation failed:');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

function isHttpUrl(value) {
  if (typeof value !== 'string' || !value.trim()) return false;
  try {
    const url = new URL(value);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
}

const topics = readJsonTs(TOPICS_PATH, 'export const topics', '[', ']');
const ddlData = readJsonTs(DDL_PATH, 'export const ddlData', '{', '}');
const metricData = readJsonTs(METRIC_PATH, 'export const metricData', '{', '}');
const manifest = JSON.parse(fs.readFileSync(path.join(MINIPROGRAM_DIR, 'manifest.json'), 'utf8'));
const miniprogramTopics = JSON.parse(fs.readFileSync(path.join(MINIPROGRAM_DIR, 'topics.json'), 'utf8'));
const ddlSource = fs.readFileSync(DDL_PATH, 'utf8');
const myDdlSource = fs.readFileSync(MY_DDL_PATH, 'utf8');

const errors = [];
const topicIds = new Set();
const miniprogramTopicIds = new Set(miniprogramTopics.map(topic => topic.id));
const sourceItemsCount = Object.values(ddlData).reduce((sum, items) => sum + items.length, 0);
const sourceMetricsCount = Object.values(metricData).reduce((sum, metrics) => sum + metrics.length, 0);

if (manifest.topicsCount !== topics.length) {
  errors.push(`manifest topicsCount ${manifest.topicsCount} does not match source topics ${topics.length}`);
}
if (manifest.itemsCount !== sourceItemsCount) {
  errors.push(`manifest itemsCount ${manifest.itemsCount} does not match source items ${sourceItemsCount}`);
}
if (manifest.metricsCount !== sourceMetricsCount) {
  errors.push(`manifest metricsCount ${manifest.metricsCount} does not match source metrics ${sourceMetricsCount}`);
}
if (miniprogramTopics.length !== topics.length) {
  errors.push(`miniprogram topics.json count ${miniprogramTopics.length} does not match source topics ${topics.length}`);
}

for (const topic of topics) {
  const label = topic.id || '<missing-topic-id>';
  if (!topic.id || typeof topic.id !== 'string') errors.push('topic missing id');
  if (topicIds.has(topic.id)) errors.push(`${label}: duplicate topic id`);
  topicIds.add(topic.id);
  for (const field of ['name', 'description', 'repo', 'site', 'category', 'status']) {
    if (typeof topic[field] !== 'string' || !topic[field].trim()) {
      errors.push(`${label}: missing topic.${field}`);
    }
  }
  if (!isHttpUrl(topic.site)) errors.push(`${label}: topic.site must be an http(s) URL`);
  if (!Array.isArray(topic.tags) || topic.tags.length === 0) errors.push(`${label}: topic.tags must be non-empty`);
  const items = ddlData[topic.id] || [];
  const metrics = metricData[topic.id] || [];
  if (!ddlData[topic.id]) errors.push(`${label}: missing ddlData entry`);
  if (items.length === 0 && metrics.length === 0) errors.push(`${label}: topic has neither items nor metrics`);
  if (topic.itemCount !== items.length) {
    errors.push(`${label}: itemCount ${topic.itemCount} does not match source item count ${items.length}`);
  }
  if (!miniprogramTopicIds.has(topic.id)) errors.push(`${label}: missing from miniprogram topics.json`);

  const topicFile = path.join(MINIPROGRAM_TOPIC_DIR, `${topic.id}.json`);
  if (!fs.existsSync(topicFile)) {
    errors.push(`${label}: missing miniprogram topic file`);
    continue;
  }
  const payload = JSON.parse(fs.readFileSync(topicFile, 'utf8'));
  if (payload.topic?.id !== topic.id) errors.push(`${label}: miniprogram topic id mismatch`);
  if ((payload.items || []).length !== items.length) {
    errors.push(`${label}: miniprogram item count ${(payload.items || []).length} does not match source ${items.length}`);
  }
  if ((payload.metrics || []).length !== metrics.length) {
    errors.push(`${label}: miniprogram metrics count ${(payload.metrics || []).length} does not match source ${metrics.length}`);
  }
  for (const item of payload.items || []) {
    if (item.topicId !== topic.id) {
      errors.push(`${label}/${item.id || '<missing-item-id>'}: miniprogram item.topicId mismatch`);
    }
  }
}

for (const [topicId, items] of Object.entries(ddlData)) {
  if (!topicIds.has(topicId)) errors.push(`${topicId}: orphan ddlData topic`);
  const itemIds = new Set();
  for (const item of items) {
    const label = `${topicId}/${item.id || '<missing-item-id>'}`;
    if (!item.id || typeof item.id !== 'string') errors.push(`${label}: missing item id`);
    if (itemIds.has(item.id)) errors.push(`${label}: duplicate item id within topic`);
    itemIds.add(item.id);
    for (const field of ['title', 'source', 'url']) {
      if (typeof item[field] !== 'string' || !item[field].trim()) {
        errors.push(`${label}: missing item.${field}`);
      }
    }
    if (!isHttpUrl(item.url)) errors.push(`${label}: item.url must be an http(s) URL`);
  }
}

for (const topicId of Object.keys(metricData)) {
  if (!topicIds.has(topicId)) errors.push(`${topicId}: orphan metricData topic`);
}

if (!ddlSource.includes('Object.entries(ddlData)') || !ddlSource.includes('topicId: typeof item.topicId')) {
  errors.push('getAllDDL must preserve or backfill topicId so My DDL can group subscribed-topic events');
}
if (!myDdlSource.includes('getTopicById(item.topicId)')) {
  errors.push('MyDDL.findTopicForItem must first resolve explicit item.topicId before id-prefix fallback');
}

if (errors.length > 0) fail(errors);

console.log(JSON.stringify({
  ok: true,
  topics: topics.length,
  items: sourceItemsCount,
  metrics: sourceMetricsCount,
  routes: topics.length + 4,
  miniprogramTopicFiles: fs.readdirSync(MINIPROGRAM_TOPIC_DIR).filter(file => file.endsWith('.json')).length,
}, null, 2));
