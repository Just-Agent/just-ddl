import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const ROOT = process.cwd();
const DDL_PATH = path.join(ROOT, 'src/data/ddl-data.ts');
const REPORT_DIR = path.join(ROOT, 'reports');
const JSON_REPORT = path.join(REPORT_DIR, 'source-audit.json');
const MD_REPORT = path.join(REPORT_DIR, 'source-audit.md');
const CSV_REPORT = path.join(REPORT_DIR, 'source-audit-open-items.csv');

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

function sourcePriority(row) {
  if (row.reason === 'missing sourceUrl') return 'P0';
  if (row.reason === 'seed/demo source wording') return 'P0';
  if (row.reason === 'root-like URL without source-board wording') return 'P1';
  if (row.reason === 'aggregator or review-platform source') return 'P1';
  if (row.reason === 'manual/source-board follow-up') return 'P2';
  return 'P3';
}

function sourceNextAction(row) {
  if (row.reason === 'missing sourceUrl') {
    return '补齐 sourceUrl，指向官方详情页、官方日历项或可追踪官方总表';
  }
  if (row.reason === 'seed/demo source wording') {
    return '替换 seed/demo 文案，接入真实官方来源或移出生产数据';
  }
  if (row.reason === 'root-like URL without source-board wording') {
    return '优先寻找官方详情页；若官网只提供总入口，标明 official_index/source-board 语义';
  }
  if (row.reason === 'aggregator or review-platform source') {
    return '用聚合页做线索，补官方主办方/赛题/投稿页；无法补齐时标注二级来源并进入人工复核';
  }
  if (row.reason === 'manual/source-board follow-up') {
    return '从官方入口继续解析具体日期页；短期无法自动解析时保留人工核验记录';
  }
  return '人工复核来源语义';
}

function summarizeByTopic(rows) {
  const result = {};
  for (const row of rows) {
    result[row.topicId] = (result[row.topicId] || 0) + 1;
  }
  return Object.fromEntries(Object.entries(result).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])));
}

function summarizeByPriority(rows) {
  const result = {};
  for (const row of rows) {
    result[row.priority] = (result[row.priority] || 0) + 1;
  }
  return {
    P0: result.P0 || 0,
    P1: result.P1 || 0,
    P2: result.P2 || 0,
    P3: result.P3 || 0,
  };
}

function topRows(rows, limit = 80) {
  return rows.slice(0, limit);
}

function markdownTable(rows) {
  if (!rows.length) return '_None._\n';
  const header = '| Priority | Topic | Item | Reason | Source | Next action |\n|---|---|---|---|---|---|\n';
  const body = rows.map(row => {
    const item = `[${escapePipe(row.title || row.id)}](${row.url})`;
    const source = escapePipe(row.source || hostOf(row.url) || '-');
    return `| ${escapePipe(row.priority)} | ${escapePipe(row.topicId)} | ${item} | ${escapePipe(row.reason)} | ${source} | ${escapePipe(row.nextAction)} |`;
  }).join('\n');
  return `${header}${body}\n`;
}

function escapePipe(value) {
  return String(value || '').replace(/\|/g, '\\|').replace(/\r?\n/g, ' ');
}

function checksum(value) {
  return crypto.createHash('sha256').update(JSON.stringify(value)).digest('hex');
}

function csvCell(value) {
  const text = String(value || '');
  return /[",\r\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

function writeCsv(rows) {
  const header = [
    'priority',
    'topicId',
    'id',
    'title',
    'reason',
    'source',
    'url',
    'sourceUrl',
    'stage',
    'type',
    'isDatePlaceholder',
    'nextAction',
  ];
  const lines = [header.join(',')];
  for (const row of rows) {
    lines.push(header.map(key => csvCell(row[key])).join(','));
  }
  fs.writeFileSync(CSV_REPORT, `${lines.join('\n')}\n`, 'utf8');
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
  const priority = sourcePriority(row);
  uniqueRows.push({
    ...row,
    priority,
    nextAction: sourceNextAction(row),
  });
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
  priorityCounts: summarizeByPriority(uniqueRows),
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
writeCsv([...uniqueRows].sort((a, b) => a.priority.localeCompare(b.priority) || a.topicId.localeCompare(b.topicId) || String(a.id).localeCompare(String(b.id))));

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
  `- Priority P0: ${report.priorityCounts.P0 || 0}`,
  `- Priority P1: ${report.priorityCounts.P1 || 0}`,
  `- Priority P2: ${report.priorityCounts.P2 || 0}`,
  `- Full work queue CSV: ${path.relative(ROOT, CSV_REPORT).replace(/\\/g, '/')}`,
  '',
  'Priority rules: P0 blocks production data, P1 needs official-detail or verification upgrade before final release, P2 is a source-board/manual follow-up that can remain visible only with clear user-facing semantics.',
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
    csv: path.relative(ROOT, CSV_REPORT),
  },
  totalItems,
  officialDeadlineItems,
  priorityCounts: report.priorityCounts,
  buckets: Object.fromEntries(Object.entries(buckets).map(([name, bucket]) => [name, bucket.length])),
}, null, 2));
