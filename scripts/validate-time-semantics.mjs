import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const DATA_PATH = path.join(ROOT, 'src/data/ddl-data.ts');
const MINIPROGRAM_TOPIC_DIR = path.join(ROOT, 'public/miniprogram/topics');

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

function parseTime(value) {
  if (typeof value !== 'string' || !value.trim()) return Number.NaN;
  const time = Date.parse(value);
  return Number.isFinite(time) ? time : Number.NaN;
}

function hasHttpUrl(value) {
  return typeof value === 'string' && /^https?:\/\/\S+$/i.test(value.trim());
}

function hasSourceName(item) {
  return typeof item.source === 'string' && item.source.trim().length > 0;
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

function localDate(value) {
  if (typeof value !== 'string' || !value.trim()) return '';
  const match = value.match(/^(\d{4}-\d{2}-\d{2})/);
  if (match) return match[1];
  const time = parseTime(value);
  return Number.isFinite(time) ? new Date(time).toISOString().slice(0, 10) : '';
}

function officialDate(item) {
  return localDate(item.date || item.deadline);
}

function validateHistoryItem(topicId, item) {
  const errors = [];
  const label = `${topicId}/${item.id || '<missing-id>'}`;
  if (!Number.isFinite(parseTime(item.date))) {
    errors.push(`${label}: history item must use a valid local calendar date`);
  }
  if (!hasSourceName(item)) {
    errors.push(`${label}: history item must include a public source name`);
  }
  if (!hasHttpUrl(item.sourceUrl) && !hasHttpUrl(item.url)) {
    errors.push(`${label}: history item must include an official http(s) url or sourceUrl`);
  }
  return errors;
}

function readDdlData() {
  const source = fs.readFileSync(DATA_PATH, 'utf8');
  return JSON.parse(extractJsonAfter(source, 'export const ddlData', '{', '}'));
}

function validateForecastRelationship(topicId, items, forecast) {
  const errors = [];
  const label = `${topicId}/${forecast.id || '<missing-id>'}`;
  const itemsById = new Map(items.map(item => [item.id, item]));
  const basisEvents = Array.isArray(forecast.basisEvents) ? forecast.basisEvents : [];
  const windowStart = localDate(forecast.estimatedNextWindow?.start);
  const windowEnd = localDate(forecast.estimatedNextWindow?.end);

  if (basisEvents.length < 2) {
    errors.push(`${label}: forecast item must include at least two basisEvents`);
    return errors;
  }
  if (!['low', 'medium', 'high'].includes(String(forecast.confidence || ''))) {
    errors.push(`${label}: forecast item must include confidence low/medium/high`);
  }
  if (!windowStart || !windowEnd) {
    errors.push(`${label}: forecast item must include valid estimatedNextWindow.start/end`);
  } else if (windowStart > windowEnd) {
    errors.push(`${label}: forecast window start must be before end`);
  }

  const dates = [];
  for (const basisId of basisEvents) {
    const basis = itemsById.get(basisId);
    if (!basis) {
      errors.push(`${label}: missing basisEvent ${basisId}`);
      continue;
    }
    if (isForecastItem(basis) || isPlaceholderItem(basis)) {
      errors.push(`${label}: basisEvent ${basisId} must be an official dated node, not a forecast or placeholder`);
      continue;
    }
    const date = officialDate(basis);
    if (!date) {
      errors.push(`${label}: basisEvent ${basisId} has no official date`);
      continue;
    }
    if (!hasSourceName(basis)) {
      errors.push(`${label}: basisEvent ${basisId} must include a public source name`);
      continue;
    }
    if (!hasHttpUrl(basis.sourceUrl) && !hasHttpUrl(basis.url)) {
      errors.push(`${label}: basisEvent ${basisId} must include an official http(s) url or sourceUrl`);
      continue;
    }
    dates.push(date);
  }

  if (dates.length !== basisEvents.length) return errors;
  const sortedDates = [...dates].sort();
  if (dates.some((date, index) => date !== sortedDates[index])) {
    errors.push(`${label}: basisEvents must be chronological`);
  }
  if (localDate(forecast.lastOfficialDate) !== dates.at(-1)) {
    errors.push(`${label}: lastOfficialDate must match the latest basisEvent date`);
  }

  return errors;
}

function validateSourceItems(ddlData) {
  const errors = [];
  let itemsCount = 0;
  let forecastCount = 0;
  let placeholderCount = 0;
  let historyCount = 0;

  for (const [topicId, items] of Object.entries(ddlData)) {
    for (const item of items) {
      itemsCount += 1;
      const label = `${topicId}/${item.id || '<missing-id>'}`;
      const deadlineTime = parseTime(item.deadline);
      const isHistory = isHistoryItem(item);
      const isForecast = isForecastItem(item);
      const isPlaceholder = isPlaceholderItem(item);

      if (isForecast) {
        forecastCount += 1;
        const windowStart = parseTime(item.estimatedNextWindow?.start);
        const windowEnd = parseTime(item.estimatedNextWindow?.end);
        if (Number.isFinite(deadlineTime)) {
          errors.push(`${label}: forecast item must use estimatedNextWindow instead of deadline`);
        }
        if (item.isDatePlaceholder !== true) {
          errors.push(`${label}: forecast item must set isDatePlaceholder=true`);
        }
        if (!Number.isFinite(windowStart) || !Number.isFinite(windowEnd)) {
          errors.push(`${label}: forecast item must include valid estimatedNextWindow.start/end`);
        } else if (windowStart > windowEnd) {
          errors.push(`${label}: forecast window start must be before end`);
        }
        errors.push(...validateForecastRelationship(topicId, items, item));
        continue;
      }

      if (isHistory) {
        historyCount += 1;
        errors.push(...validateHistoryItem(topicId, item));
        continue;
      }

      if (isPlaceholder) {
        placeholderCount += 1;
        if (typeof item.dateRange !== 'string' || !item.dateRange.trim()) {
          errors.push(`${label}: placeholder item must include a public dateRange disclosure`);
        }
        continue;
      }

      if (!Number.isFinite(deadlineTime)) {
        errors.push(`${label}: official deadline item must include a valid deadline`);
      }
    }
  }

  return { errors, itemsCount, forecastCount, placeholderCount, historyCount };
}

function validateMiniprogramForecasts(payload) {
  const errors = [];
  let forecastCount = 0;
  let historyCount = 0;
  const topicId = payload.topic?.id || 'unknown-topic';
  const items = payload.items || [];
  for (const item of items) {
    if (isHistoryItem(item)) {
      historyCount += 1;
      errors.push(...validateHistoryItem(topicId, item));
    }
    if (isForecastItem(item)) {
      forecastCount += 1;
      errors.push(...validateForecastRelationship(topicId, items, item));
    }
  }
  return { errors, forecastCount, historyCount };
}

function validateMiniprogramSubtopics() {
  const errors = [];
  let topicFiles = 0;
  let forecastCount = 0;
  let historyCount = 0;

  if (!fs.existsSync(MINIPROGRAM_TOPIC_DIR)) {
    return { errors, topicFiles };
  }

  for (const fileName of fs.readdirSync(MINIPROGRAM_TOPIC_DIR).filter(file => file.endsWith('.json'))) {
    topicFiles += 1;
    const filePath = path.join(MINIPROGRAM_TOPIC_DIR, fileName);
    const payload = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const itemsById = new Map((payload.items || []).map(item => [item.id, item]));
    const forecastResult = validateMiniprogramForecasts(payload);
    errors.push(...forecastResult.errors);
    forecastCount += forecastResult.forecastCount;
    historyCount += forecastResult.historyCount;

    for (const group of payload.subtopics || []) {
      if (!group.nextItemId) continue;
      const item = itemsById.get(group.nextItemId);
      const label = `${payload.topic?.id || fileName}/${group.id}.nextItemId`;
      if (!item) {
        errors.push(`${label}: referenced item is missing`);
      } else if (!isNextItemCandidate(item)) {
        errors.push(`${label}: must reference an active official deadline, got ${item.id} (${item.type || 'untagged'})`);
      }
    }
  }

  return { errors, topicFiles, forecastCount, historyCount };
}

function main() {
  const ddlData = readDdlData();
  const sourceResult = validateSourceItems(ddlData);
  const miniprogramResult = validateMiniprogramSubtopics();
  const errors = [...sourceResult.errors, ...miniprogramResult.errors];

  if (errors.length) {
    console.error(errors.join('\n'));
    process.exit(1);
  }

  console.log(JSON.stringify({
    ok: true,
    sourceItems: sourceResult.itemsCount,
    sourceHistoryItems: sourceResult.historyCount,
    sourceForecasts: sourceResult.forecastCount,
    sourcePlaceholders: sourceResult.placeholderCount,
    miniprogramTopicFiles: miniprogramResult.topicFiles,
    miniprogramForecasts: miniprogramResult.forecastCount,
    miniprogramHistoryItems: miniprogramResult.historyCount
  }, null, 2));
}

main();
