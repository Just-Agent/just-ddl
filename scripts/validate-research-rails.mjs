import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const DDL_PATH = path.join(ROOT, 'src/data/ddl-data.ts');
const METRIC_PATH = path.join(ROOT, 'src/data/metric-data.ts');
const MINIPROGRAM_TOPIC_DIR = path.join(ROOT, 'public/miniprogram/topics');

const NSFC_TOPIC_ID = 'nsfc-ddl';
const RESEARCH_TOPIC_IDS = [
  'nsfc-ddl',
  'cas-partition-ddl',
  'jcr-impact-factor-ddl',
  'journal-volume-ddl'
];

const NSFC_REQUIRED_PROJECT_TYPES = {
  2025: [
    '面上项目',
    '青年科学基金',
    '地区科学基金',
    '重点项目',
    '优秀青年科学基金',
    '国家杰出青年科学基金',
    '创新研究群体',
    '卓越研究群体',
    '重点国际',
    '外国学者',
    '合作创新研究团队',
    '重大科研仪器',
    '联合基金',
    '重大研究计划',
    '数学天元基金'
  ],
  2026: [
    '面上项目',
    '青年科学基金项目（A类）',
    '青年科学基金项目（B类）',
    '青年科学基金项目（C类）',
    '地区科学基金',
    '重点项目',
    '创新研究群体',
    '卓越研究群体',
    '重点国际',
    '外国学者',
    '合作创新研究团队',
    '重大科研仪器',
    '联合基金',
    '重大研究计划',
    '数学天元基金'
  ]
};

const NSFC_SUBTOPIC_MINIMUMS = {
  'nsfc-guide': 1,
  'nsfc-application': 4,
  'nsfc-project-types': 30,
  'nsfc-review': 16,
  'nsfc-management': 10
};

const NSFC_REQUIRED_FUNDED_METRIC_ALIASES = [
  '面上项目',
  '青年科学基金',
  '重点项目',
  '重点国际',
  '优秀青年科学基金',
  '国家杰出青年科学基金',
  '创新研究群体',
  '地区科学基金',
  '外国学者',
  '合作创新研究团队'
];

const METRIC_SERIES_RULES = [
  {
    topicId: 'cas-partition-ddl',
    metric: 'cas_major_zone',
    minRecords: 176,
    minGroups: 90,
    minSeriesGroups: 86,
    minSnapshotsPerSeries: 2,
    coverage: 0.95
  },
  {
    topicId: 'jcr-impact-factor-ddl',
    metric: 'journal_impact_factor',
    minRecords: 705,
    minGroups: 90,
    minSeriesGroups: 90,
    minSnapshotsPerSeries: 2,
    coverage: 1
  },
  {
    topicId: 'journal-volume-ddl',
    metric: 'openalex_works_count_by_year',
    minRecords: 203,
    minGroups: 41,
    minSeriesGroups: 41,
    minSnapshotsPerSeries: 3,
    coverage: 1,
    validateYearCompleteness: true
  }
];

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

function readMiniprogramTopic(topicId) {
  const filePath = path.join(MINIPROGRAM_TOPIC_DIR, `${topicId}.json`);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Missing miniprogram topic file: ${topicId}`);
  }
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function hasText(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

function isHttpUrl(value) {
  if (!hasText(value)) return false;
  try {
    const url = new URL(value);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
}

function isRootLikeUrl(value) {
  if (!isHttpUrl(value)) return false;
  const url = new URL(value);
  const pathname = url.pathname.replace(/\/+$/, '');
  return pathname === '' || /^\/[a-z]{2}(?:-[a-z]{2})?$/i.test(pathname);
}

function normalizeText(value) {
  return String(value || '')
    .normalize('NFKC')
    .toLowerCase()
    .replace(/[\s_]+/g, ' ')
    .trim();
}

function titleContainsAlias(title, alias) {
  const titleText = normalizeText(title);
  const aliasText = normalizeText(alias);
  if (titleText.includes(aliasText)) return true;
  if (aliasText.includes('（') || aliasText.includes('(')) {
    const compactAlias = aliasText.replace(/[（）()]/g, '');
    return titleText.replace(/[（）()]/g, '').includes(compactAlias);
  }
  return false;
}

function parseYear(value) {
  const year = Number(value);
  return Number.isInteger(year) ? year : Number.NaN;
}

function sourceLink(metric) {
  return metric.sourceUrl || metric.url || metric.homepageUrl || metric.openAlexId || '';
}

function assert(condition, message, errors) {
  if (!condition) errors.push(message);
}

function validateNsfcRail(items, metrics, scopeLabel) {
  const errors = [];
  const subtopicCounts = new Map();
  for (const item of items) {
    subtopicCounts.set(item.subtopic, (subtopicCounts.get(item.subtopic) || 0) + 1);
  }

  for (const [subtopic, minimum] of Object.entries(NSFC_SUBTOPIC_MINIMUMS)) {
    const actual = subtopicCounts.get(subtopic) || 0;
    assert(
      actual >= minimum,
      `${scopeLabel}: ${NSFC_TOPIC_ID} ${subtopic} has ${actual} items, expected at least ${minimum}`,
      errors
    );
  }

  const projectItems = items.filter(item => item.subtopic === 'nsfc-project-types');
  const projectCoverage = {};
  for (const [year, aliases] of Object.entries(NSFC_REQUIRED_PROJECT_TYPES)) {
    const yearItems = projectItems.filter(item => String(item.title || '').includes(String(year)));
    projectCoverage[year] = yearItems.length;
    assert(
      yearItems.length >= aliases.length,
      `${scopeLabel}: ${NSFC_TOPIC_ID} ${year} project types has ${yearItems.length} items, expected at least ${aliases.length}`,
      errors
    );
    for (const alias of aliases) {
      assert(
        yearItems.some(item => titleContainsAlias(item.title, alias)),
        `${scopeLabel}: ${NSFC_TOPIC_ID} ${year} project types missing ${alias}`,
        errors
      );
    }
  }

  const forecastSubtopics = new Set(
    items
      .filter(item => item.type === 'forecastWindow' || item.estimatedNextWindow)
      .map(item => item.subtopic)
  );
  assert(
    forecastSubtopics.has('nsfc-application') && forecastSubtopics.has('nsfc-review'),
    `${scopeLabel}: ${NSFC_TOPIC_ID} must keep application and review forecast windows`,
    errors
  );

  const fundedMetrics = metrics.filter(metric => metric.metric === 'funded_projects_by_type');
  assert(
    fundedMetrics.length >= NSFC_REQUIRED_FUNDED_METRIC_ALIASES.length,
    `${scopeLabel}: ${NSFC_TOPIC_ID} funded_projects_by_type has ${fundedMetrics.length} metrics, expected at least ${NSFC_REQUIRED_FUNDED_METRIC_ALIASES.length}`,
    errors
  );
  for (const alias of NSFC_REQUIRED_FUNDED_METRIC_ALIASES) {
    assert(
      fundedMetrics.some(metric => titleContainsAlias(metric.displayName || metric.id, alias)),
      `${scopeLabel}: ${NSFC_TOPIC_ID} funded metric missing ${alias}`,
      errors
    );
  }

  return {
    errors,
    subtopicCounts: Object.fromEntries([...subtopicCounts.entries()].sort()),
    projectCoverage,
    fundedProjectTypeMetrics: fundedMetrics.length,
    forecastSubtopics: [...forecastSubtopics].sort()
  };
}

function validateResearchSourcePrecision(topicId, items, scopeLabel) {
  const errors = [];
  const byId = new Map(items.map(item => [item.id, item]));
  for (const item of items) {
    const label = `${scopeLabel}: ${topicId}/${item.id || '<missing-item-id>'}`;
    assert(isHttpUrl(item.sourceUrl), `${label} missing http(s) sourceUrl`, errors);
    if (item.type === 'forecastWindow' || item.estimatedNextWindow) {
      assert(
        !isRootLikeUrl(item.sourceUrl),
        `${label} forecast sourceUrl must point to an official evidence page, not a generic homepage`,
        errors
      );
      const basisEvents = Array.isArray(item.basisEvents) ? item.basisEvents : [];
      for (const basisId of basisEvents) {
        const basis = byId.get(basisId);
        assert(Boolean(basis), `${label} missing basisEvent ${basisId}`, errors);
        if (basis) {
          assert(isHttpUrl(basis.sourceUrl), `${label} basisEvent ${basisId} missing http(s) sourceUrl`, errors);
        }
      }
    }
  }
  return errors;
}

function metricGroupKey(metric) {
  const title = normalizeText(metric.journalTitle || metric.title || metric.displayName || metric.id);
  const id = normalizeText(metric.journalId || metric.issn || title);
  const category = normalizeText(metric.majorCategory || metric.category || '');
  return category ? `${id}::${category}` : id;
}

function validateMetricSeries(rule, allMetrics, scopeLabel) {
  const errors = [];
  const records = allMetrics.filter(metric => metric.metric === rule.metric);
  assert(
    records.length >= rule.minRecords,
    `${scopeLabel}: ${rule.topicId}/${rule.metric} has ${records.length} records, expected at least ${rule.minRecords}`,
    errors
  );

  const groups = new Map();
  for (const metric of records) {
    const label = `${scopeLabel}: ${rule.topicId}/${metric.id || '<missing-metric-id>'}`;
    assert(hasText(metric.id), `${label} missing id`, errors);
    assert(hasText(metric.source), `${label} missing source`, errors);
    assert(hasText(sourceLink(metric)), `${label} missing traceable source link`, errors);
    assert(Number.isFinite(parseYear(metric.year)), `${label} missing numeric year`, errors);
    if (metric.value === undefined || metric.value === null || metric.value === '') {
      errors.push(`${label} missing value`);
    }
    if (rule.validateYearCompleteness && Number.isFinite(parseYear(metric.year))) {
      const year = Number(metric.year);
      const currentYear = new Date().getFullYear();
      if (year >= currentYear) {
        assert(metric.yearCompleteness === 'partial_ytd', `${label} current-year metric must be partial_ytd`, errors);
      } else {
        assert(metric.yearCompleteness === 'complete_observed', `${label} completed-year metric must be complete_observed`, errors);
      }
    }
    const key = metricGroupKey(metric);
    const group = groups.get(key) || [];
    group.push(metric);
    groups.set(key, group);
  }

  let seriesGroups = 0;
  for (const [key, group] of groups.entries()) {
    const years = new Set();
    for (const metric of group) {
      const year = Number(metric.year);
      if (years.has(year)) {
        errors.push(`${scopeLabel}: ${rule.topicId}/${rule.metric} duplicate year ${year} in series ${key}`);
      }
      years.add(year);
    }
    if (years.size >= rule.minSnapshotsPerSeries) seriesGroups += 1;
  }

  const coverage = groups.size ? seriesGroups / groups.size : 0;
  assert(
    groups.size >= rule.minGroups,
    `${scopeLabel}: ${rule.topicId}/${rule.metric} has ${groups.size} groups, expected at least ${rule.minGroups}`,
    errors
  );
  assert(
    seriesGroups >= rule.minSeriesGroups,
    `${scopeLabel}: ${rule.topicId}/${rule.metric} has ${seriesGroups} series groups, expected at least ${rule.minSeriesGroups}`,
    errors
  );
  assert(
    coverage >= rule.coverage,
    `${scopeLabel}: ${rule.topicId}/${rule.metric} coverage ${(coverage * 100).toFixed(1)}% below ${(rule.coverage * 100).toFixed(1)}%`,
    errors
  );

  return {
    errors,
    topicId: rule.topicId,
    metric: rule.metric,
    records: records.length,
    groups: groups.size,
    seriesGroups,
    coverage: Number(coverage.toFixed(4))
  };
}

function validateResearchPayload(ddlData, metricData, scopeLabel) {
  const errors = [];
  for (const topicId of RESEARCH_TOPIC_IDS) {
    assert(Array.isArray(ddlData[topicId]), `${scopeLabel}: missing ddlData for ${topicId}`, errors);
    assert(Array.isArray(metricData[topicId]), `${scopeLabel}: missing metricData for ${topicId}`, errors);
  }

  const nsfc = validateNsfcRail(ddlData[NSFC_TOPIC_ID] || [], metricData[NSFC_TOPIC_ID] || [], scopeLabel);
  errors.push(...nsfc.errors);

  for (const topicId of RESEARCH_TOPIC_IDS) {
    errors.push(...validateResearchSourcePrecision(topicId, ddlData[topicId] || [], scopeLabel));
  }

  const metricSeries = [];
  for (const rule of METRIC_SERIES_RULES) {
    const result = validateMetricSeries(rule, metricData[rule.topicId] || [], scopeLabel);
    errors.push(...result.errors);
    metricSeries.push(result);
  }

  return { errors, nsfc, metricSeries };
}

function miniprogramPayloadData() {
  const ddlData = {};
  const metricData = {};
  for (const topicId of RESEARCH_TOPIC_IDS) {
    const payload = readMiniprogramTopic(topicId);
    ddlData[topicId] = payload.items || [];
    metricData[topicId] = payload.metrics || [];
  }
  return { ddlData, metricData };
}

function main() {
  const sourceDdlData = readJsonTs(DDL_PATH, 'export const ddlData', '{', '}');
  const sourceMetricData = readJsonTs(METRIC_PATH, 'export const metricData', '{', '}');
  const source = validateResearchPayload(sourceDdlData, sourceMetricData, 'source');
  const miniData = miniprogramPayloadData();
  const miniprogram = validateResearchPayload(miniData.ddlData, miniData.metricData, 'miniprogram');
  const errors = [...source.errors, ...miniprogram.errors];

  if (errors.length) {
    console.error('Research rail validation failed:');
    for (const error of errors) console.error(`- ${error}`);
    process.exit(1);
  }

  console.log(JSON.stringify({
    ok: true,
    source: {
      nsfc: source.nsfc,
      metricSeries: source.metricSeries
    },
    miniprogram: {
      nsfc: miniprogram.nsfc,
      metricSeries: miniprogram.metricSeries
    }
  }, null, 2));
}

main();
