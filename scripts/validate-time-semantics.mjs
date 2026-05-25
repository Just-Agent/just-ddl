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

function readDdlData() {
  const source = fs.readFileSync(DATA_PATH, 'utf8');
  return JSON.parse(extractJsonAfter(source, 'export const ddlData', '{', '}'));
}

function validateSourceItems(ddlData) {
  const errors = [];
  let itemsCount = 0;

  for (const [topicId, items] of Object.entries(ddlData)) {
    for (const item of items) {
      itemsCount += 1;
      const label = `${topicId}/${item.id || '<missing-id>'}`;
      const deadlineTime = parseTime(item.deadline);
      const dateTime = parseTime(item.date);
      const isHistory = isHistoryItem(item);
      const isForecast = isForecastItem(item);
      const isPlaceholder = isPlaceholderItem(item);

      if (isForecast) {
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
        continue;
      }

      if (isHistory) {
        if (!Number.isFinite(dateTime)) {
          errors.push(`${label}: history item must use a valid local calendar date`);
        }
        continue;
      }

      if (isPlaceholder) {
        continue;
      }

      if (!Number.isFinite(deadlineTime)) {
        errors.push(`${label}: official deadline item must include a valid deadline`);
      }
    }
  }

  return { errors, itemsCount };
}

function validateMiniprogramSubtopics() {
  const errors = [];
  let topicFiles = 0;

  if (!fs.existsSync(MINIPROGRAM_TOPIC_DIR)) {
    return { errors, topicFiles };
  }

  for (const fileName of fs.readdirSync(MINIPROGRAM_TOPIC_DIR).filter(file => file.endsWith('.json'))) {
    topicFiles += 1;
    const filePath = path.join(MINIPROGRAM_TOPIC_DIR, fileName);
    const payload = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const itemsById = new Map((payload.items || []).map(item => [item.id, item]));

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

  return { errors, topicFiles };
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
    miniprogramTopicFiles: miniprogramResult.topicFiles
  }, null, 2));
}

main();
