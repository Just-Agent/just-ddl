import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const ROOT = process.cwd();
const DDL_PATH = path.join(ROOT, 'src/data/ddl-data.ts');
const REPORT_DIR = path.join(ROOT, 'reports');
const JSON_REPORT = path.join(REPORT_DIR, 'source-audit.json');
const MD_REPORT = path.join(REPORT_DIR, 'source-audit.md');

const AGGREGATOR_HOSTS = new Set([
  'ctftime.org',
  'www.ctftime.org',
  'openreview.net',
  'www.openreview.net',
  'allconfs.org',
  'www.allconfs.org',
  'sinoconf.napstic.cn',
]);

const SEED_SOURCE_PATTERN = /\b(?:seed|style seed|benchmark demo|shared-task demo|kaggle-style demo)\b/i;
const SOURCE_BOARD_PATTERN = /\bsource board\b|来源入口|官方入口|报名入口|考位|待.*官方公告|以官方公告为准|按官方.*为准/i;

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

function isRootLikeUrl(value) {
  if (typeof value !== 'string' || !value.trim()) return false;
  try {
    const url = new URL(value);
    const pathname = url.pathname.replace(/\/+$/, '');
    return pathname === '' || /^\/[a-z]{2}(?:-[a-z]{2})?$/i.test(pathname);
  } catch {
    return false;
  }
}

function isDedicatedEventMicrositeUrl(value) {
  if (typeof value !== 'string' || !value.trim()) return false;
  try {
    const url = new URL(value);
    const host = url.hostname.toLowerCase();
    const pathname = url.pathname.replace(/\/+$/, '');

    if (!(pathname === '' || /^\/[a-z]{2}(?:-[a-z]{2})?$/i.test(pathname))) {
      return false;
    }

    const isDevpostChallenge = host.endsWith('.devpost.com') && !['devpost.com', 'www.devpost.com'].includes(host);
    const isGithubPagesProject = host.endsWith('.github.io') && host !== 'github.io';

    return isDevpostChallenge || isGithubPagesProject;
  } catch {
    return false;
  }
}

function hostOf(value) {
  try {
    return new URL(value).hostname.toLowerCase();
  } catch {
    return '';
  }
}

function hasTraceableEvidenceUrl(item) {
  if (String(item.verificationLevel || '') === 'official_event_page') return true;
  if (!item.sourceUrl || !/^https?:\/\//.test(String(item.sourceUrl))) return false;
  if (isDedicatedEventMicrositeUrl(item.sourceUrl)) return true;
  return !isRootLikeUrl(item.sourceUrl);
}

function itemText(item) {
  return [
    item.title,
    item.source,
    item.stage,
    item.type,
    item.dateRange,
    item.description,
  ].filter(value => typeof value === 'string' && value.trim()).join(' ');
}

function compactItem(topicId, item, reason) {
  return {
    topicId,
    id: item.id,
    title: item.title,
    reason,
    url: item.url,
    sourceUrl: item.sourceUrl || '',
    source: item.source || '',
    stage: item.stage || '',
    type: item.type || '',
    isDatePlaceholder: item.isDatePlaceholder === true,
  };
}

function summarizeByTopic(rows) {
  const result = {};
  for (const row of rows) {
    result[row.topicId] = (result[row.topicId] || 0) + 1;
  }
  return Object.fromEntries(Object.entries(result).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])));
}

function topRows(rows, limit = 80) {
  return rows.slice(0, limit);
}

function markdownTable(rows) {
  if (!rows.length) return '_None._\n';
  const header = '| Topic | Item | Reason | Source |\n|---|---|---|---|\n';
  const body = rows.map(row => {
    const item = `[${escapePipe(row.title || row.id)}](${row.url})`;
    const source = escapePipe(row.source || hostOf(row.url) || '-');
    return `| ${escapePipe(row.topicId)} | ${item} | ${escapePipe(row.reason)} | ${source} |`;
  }).join('\n');
  return `${header}${body}\n`;
}

function escapePipe(value) {
  return String(value || '').replace(/\|/g, '\\|').replace(/\r?\n/g, ' ');
}

function checksum(value) {
  return crypto.createHash('sha256').update(JSON.stringify(value)).digest('hex');
}

function readExistingJson(filePath) {
  if (!fs.existsSync(filePath)) return null;
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch {
    return null;
  }
}

const ddlSource = fs.readFileSync(DDL_PATH, 'utf8');
const ddlData = JSON.parse(extractJsonAfter(ddlSource, 'export const ddlData', '{', '}'));

const rows = [];
let totalItems = 0;
let officialDeadlineItems = 0;

for (const [topicId, items] of Object.entries(ddlData)) {
  for (const item of items) {
    totalItems += 1;
    const text = itemText(item);
    const host = hostOf(item.url);
    const isHistory = item.type === 'historyEvent' || item.type === 'officialRelease';
    const isForecast = item.type === 'forecastWindow' || Boolean(item.estimatedNextWindow);
    const isPlaceholder = item.isDatePlaceholder === true;
    if (!isHistory && !isForecast && !isPlaceholder) officialDeadlineItems += 1;

    if (!item.sourceUrl) {
      rows.push(compactItem(topicId, item, 'missing sourceUrl'));
    }
    if (isRootLikeUrl(item.url) && !hasTraceableEvidenceUrl(item) && !SOURCE_BOARD_PATTERN.test(text)) {
      rows.push(compactItem(topicId, item, 'root-like URL without source-board wording'));
    }
    if (SOURCE_BOARD_PATTERN.test(text) || isPlaceholder) {
      rows.push(compactItem(topicId, item, 'manual/source-board follow-up'));
    }
    if (SEED_SOURCE_PATTERN.test(item.source || '')) {
      rows.push(compactItem(topicId, item, 'seed/demo source wording'));
    }
    if (AGGREGATOR_HOSTS.has(host)) {
      rows.push(compactItem(topicId, item, 'aggregator or review-platform source'));
    }
  }
}

const uniqueRows = [];
const seen = new Set();
for (const row of rows) {
  const key = `${row.topicId}/${row.id}/${row.reason}`;
  if (seen.has(key)) continue;
  seen.add(key);
  uniqueRows.push(row);
}

const buckets = {
  missingSourceUrl: uniqueRows.filter(row => row.reason === 'missing sourceUrl'),
  rootLikeUrl: uniqueRows.filter(row => row.reason === 'root-like URL without source-board wording'),
  manualFollowUp: uniqueRows.filter(row => row.reason === 'manual/source-board follow-up'),
  seedWording: uniqueRows.filter(row => row.reason === 'seed/demo source wording'),
  aggregatorSource: uniqueRows.filter(row => row.reason === 'aggregator or review-platform source'),
};

const reportPayload = {
  totalItems,
  officialDeadlineItems,
  buckets: Object.fromEntries(Object.entries(buckets).map(([name, bucket]) => [
    name,
    {
      count: bucket.length,
      byTopic: summarizeByTopic(bucket),
      sample: topRows(bucket, 30),
    },
  ])),
};
const dataVersion = checksum(reportPayload).slice(0, 16);
const existingReport = readExistingJson(JSON_REPORT);
const generatedAt = existingReport?.dataVersion === dataVersion && existingReport?.generatedAt
  ? existingReport.generatedAt
  : new Date().toISOString();
const report = {
  generatedAt,
  dataVersion,
  ...reportPayload,
};

fs.mkdirSync(REPORT_DIR, { recursive: true });
fs.writeFileSync(JSON_REPORT, `${JSON.stringify(report, null, 2)}\n`, 'utf8');

const md = [
  '# Just-DDL Source Audit',
  '',
  `Generated: ${report.generatedAt}`,
  '',
  'This is an internal production-readiness report. It identifies items that need detail-page upgrades, sourceUrl completion, manual maintenance, or official-source verification. It is not published to GitHub Pages or miniprogram exports.',
  '',
  `- Total DDL items: ${totalItems}`,
  `- Official deadline candidates: ${officialDeadlineItems}`,
  `- Missing sourceUrl: ${buckets.missingSourceUrl.length}`,
  `- Root-like URL follow-up: ${buckets.rootLikeUrl.length}`,
  `- Manual/source-board follow-up: ${buckets.manualFollowUp.length}`,
  `- Seed/demo source wording: ${buckets.seedWording.length}`,
  `- Aggregator/review-platform source: ${buckets.aggregatorSource.length}`,
  '',
  '## Missing sourceUrl',
  '',
  markdownTable(topRows(buckets.missingSourceUrl)),
  '## Root-Like URL Follow-Up',
  '',
  markdownTable(topRows(buckets.rootLikeUrl)),
  '## Manual / Source-Board Follow-Up',
  '',
  markdownTable(topRows(buckets.manualFollowUp)),
  '## Seed / Demo Source Wording',
  '',
  markdownTable(topRows(buckets.seedWording)),
  '## Aggregator Or Review-Platform Source',
  '',
  markdownTable(topRows(buckets.aggregatorSource)),
].join('\n');

fs.writeFileSync(MD_REPORT, `${md}\n`, 'utf8');

console.log(JSON.stringify({
  ok: true,
  output: {
    json: path.relative(ROOT, JSON_REPORT),
    markdown: path.relative(ROOT, MD_REPORT),
  },
  totalItems,
  officialDeadlineItems,
  buckets: Object.fromEntries(Object.entries(buckets).map(([name, bucket]) => [name, bucket.length])),
}, null, 2));
