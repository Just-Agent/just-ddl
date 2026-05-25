import type { DDLItem } from '@/data/ddl-data';

export type DDLLanguage = 'zh' | 'en';

const DAY_MS = 24 * 60 * 60 * 1000;

function stringValue(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

function parseTime(value: unknown) {
  const text = stringValue(value);
  if (!text) return Number.NaN;
  const time = Date.parse(text);
  return Number.isFinite(time) ? time : Number.NaN;
}

function windowDate(item: DDLItem, edge: 'start' | 'end') {
  const window = item.estimatedNextWindow;
  if (!window || typeof window !== 'object') return '';
  const value = (window as Record<string, unknown>)[edge];
  return stringValue(value);
}

function formatDate(value: unknown, language: DDLLanguage) {
  const time = parseTime(value);
  if (!Number.isFinite(time)) return stringValue(value) || '-';
  return new Date(time).toLocaleDateString(language === 'zh' ? 'zh-CN' : 'en-US');
}

function daysBetween(fromTime: number, toTime: number) {
  return Math.max(0, Math.floor((toTime - fromTime) / DAY_MS));
}

export function isHistoryItem(item: DDLItem) {
  return item.type === 'historyEvent' || item.type === 'officialRelease';
}

export function isForecastItem(item: DDLItem) {
  return item.type === 'forecastWindow' || Boolean(windowDate(item, 'start') && windowDate(item, 'end'));
}

export function isPlaceholderItem(item: DDLItem) {
  return item.isDatePlaceholder === true && !isForecastItem(item);
}

export function hasOfficialDeadline(item: DDLItem) {
  return !isHistoryItem(item) && !isForecastItem(item) && !isPlaceholderItem(item) && Number.isFinite(parseTime(item.deadline));
}

export function isActiveDeadlineItem(item: DDLItem) {
  return hasOfficialDeadline(item) && item.status !== 'ended';
}

export function ddlItemTime(item: DDLItem, fallback = Number.MAX_SAFE_INTEGER) {
  const candidates = [
    parseTime(item.deadline),
    parseTime(item.date),
    parseTime(windowDate(item, 'start')),
  ];
  const time = candidates.find(Number.isFinite);
  return typeof time === 'number' ? time : fallback;
}

export function compareDDLItems(a: DDLItem, b: DDLItem) {
  const aEnded = a.status === 'ended' || isHistoryItem(a);
  const bEnded = b.status === 'ended' || isHistoryItem(b);
  if (aEnded !== bEnded) return aEnded ? 1 : -1;
  const diff = ddlItemTime(a) - ddlItemTime(b);
  if (diff) return diff;
  return a.title.localeCompare(b.title, 'zh-CN');
}

export function formatRelativeDeadline(item: DDLItem, language: DDLLanguage) {
  if (isForecastItem(item)) return language === 'zh' ? '预测窗口' : 'forecast';
  if (isHistoryItem(item)) return language === 'zh' ? '历史节点' : 'history';
  if (isPlaceholderItem(item)) return language === 'zh' ? '待公告' : 'TBA';

  const time = parseTime(item.deadline);
  if (!Number.isFinite(time)) return '-';
  const days = Math.ceil((time - Date.now()) / DAY_MS);
  if (days < 0) return language === 'zh' ? '已过期' : 'past';
  if (days === 0) return language === 'zh' ? '今天' : 'today';
  return language === 'zh' ? `${days} 天` : `${days}d`;
}

export function formatRelativeDeadlineLong(item: DDLItem, language: DDLLanguage) {
  const short = formatRelativeDeadline(item, language);
  if (short === '-' || short === '预测窗口' || short === 'forecast' || short === '历史节点' || short === 'history' || short === '待公告' || short === 'TBA') {
    return short;
  }
  return language === 'zh' ? `${short}后` : `in ${short}`;
}

export function formatItemDate(item: DDLItem, language: DDLLanguage) {
  if (isForecastItem(item)) {
    const start = windowDate(item, 'start');
    const end = windowDate(item, 'end');
    if (start && end) return `${formatDate(start, language)} - ${formatDate(end, language)}`;
  }
  if (isHistoryItem(item)) return formatDate(item.date || item.deadline, language);
  if (isPlaceholderItem(item)) return item.dateRange || (language === 'zh' ? '待官方公告' : 'Official date TBA');
  if (item.deadline) return formatDate(item.deadline, language);
  return item.dateRange || '-';
}

export function formatLastOfficialSignal(item: DDLItem, language: DDLLanguage) {
  if (!isForecastItem(item)) return '';
  const lastTime = parseTime(item.lastOfficialDate);
  if (!Number.isFinite(lastTime)) return '';

  const lastDate = formatDate(item.lastOfficialDate, language);
  const now = Date.now();
  if (lastTime > now) {
    return language === 'zh'
      ? `最近已官宣节点：${lastDate}`
      : `Nearest announced node: ${lastDate}`;
  }

  const days = daysBetween(lastTime, now);
  return language === 'zh'
    ? `距上次官方节点已过 ${days} 天`
    : `${days}d since the last official node`;
}

export function formatForecastDisclosure(item: DDLItem, language: DDLLanguage) {
  if (!isForecastItem(item)) return '';
  const signal = formatLastOfficialSignal(item, language);
  const prefix = language === 'zh' ? '下一节点暂未官宣' : 'Next node not officially announced';
  const suffix = language === 'zh' ? '预测不是官方日期' : 'Forecast, not an official date';
  return signal ? `${prefix} · ${signal} · ${suffix}` : `${prefix} · ${suffix}`;
}

export function timingBadge(item: DDLItem, language: DDLLanguage) {
  if (isForecastItem(item)) {
    return {
      label: language === 'zh' ? '预测窗口' : 'Forecast window',
      background: '#ECFEFF',
      color: '#0E7490',
    };
  }
  if (isHistoryItem(item)) {
    return {
      label: language === 'zh' ? '历史节点' : 'History',
      background: '#F1F5F9',
      color: '#475569',
    };
  }
  if (isPlaceholderItem(item)) {
    return {
      label: language === 'zh' ? '待官方公告' : 'TBA',
      background: '#FFFBEB',
      color: '#B45309',
    };
  }
  if (item.status === 'ended') {
    return {
      label: language === 'zh' ? '已结束' : 'Ended',
      background: '#F5F5F4',
      color: '#A8A29E',
    };
  }
  return undefined;
}
