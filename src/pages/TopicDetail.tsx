import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  BriefcaseBusiness,
  Bot,
  BookOpen,
  CalendarHeart,
  Car,
  ChevronDown,
  Clapperboard,
  Code2,
  Database,
  ExternalLink,
  Eye,
  Gamepad2,
  Github,
  GraduationCap,
  Layers,
  LayoutGrid,
  List,
  ListFilter,
  Medal,
  MessageSquare,
  Music,
  Pin,
  RadioTower,
  Scale,
  Search,
  SlidersHorizontal,
  Sparkles,
  Smartphone,
  Star,
  Trophy,
  type LucideIcon,
} from 'lucide-react';
import { getTopicById } from '@/data/topics';
import type { DDLItem } from '@/data/ddl-data';
import { loadDDLByTopic } from '@/data/ddl-runtime';
import { loadMetricsByTopic, type MetricSnapshot } from '@/data/metric-runtime';
import { useSubscriptions } from '@/hooks/useSubscriptions';
import DDLCard, { type DDLCardVisualMode } from '@/components/DDLCard';
import { useLanguage } from '@/lib/language';
import { compareDDLItems, ddlItemTime, formatForecastDisclosure, formatForecastWindowDeadlineLabel, formatItemDate, formatRelativeDeadline, isActiveDeadlineItem, isForecastItem, isHistoryItem } from '@/lib/ddl';

const iconMap: Record<string, LucideIcon> = {
  Trophy, Bot, Eye, MessageSquare, GraduationCap, BookOpen, Code2, CalendarHeart, Layers, Medal, Gamepad2, Music, Clapperboard, Smartphone, Car, Scale, BriefcaseBusiness, Database, RadioTower,
};

interface SubtopicGroup {
  id: string;
  name: string;
  items: DDLItem[];
  activeItems: DDLItem[];
  nextItem?: DDLItem;
  sourceCount: number;
}

type EventViewMode = 'list' | 'grid';
type EventVisualMode = DDLCardVisualMode;

const journalMetricTopicIds = ['cas-partition-ddl', 'jcr-impact-factor-ddl', 'google-scholar-metrics-ddl', 'journal-volume-ddl'] as const;

function getItemSubtopic(item: DDLItem) {
  return {
    id: typeof item.subtopic === 'string' ? item.subtopic : 'other',
    name: typeof item.subtopicName === 'string' ? item.subtopicName : '其他',
  };
}

function metricTitle(metric: MetricSnapshot, language: 'zh' | 'en') {
  const raw = String(metric.metric || '');
  if (/works_count_by_year/i.test(raw)) return language === 'zh' ? '年度发文量' : 'yearly works';
  if (/works_count_total/i.test(raw)) return language === 'zh' ? '累计发文量' : 'total works';
  if (/impact|factor/i.test(raw)) return language === 'zh' ? '影响因子' : 'impact factor';
  if (/quartile/i.test(raw)) return language === 'zh' ? 'JCR 分区' : 'JCR quartile';
  if (/cas|partition|zone/i.test(raw)) return language === 'zh' ? 'CAS 分区' : 'CAS zone';
  return raw.replaceAll('_', ' ');
}

function metricWhen(metric: MetricSnapshot, language: 'zh' | 'en') {
  if (metric.year) return String(metric.year);
  if (typeof metric.asOfDate === 'string') {
    const time = Date.parse(metric.asOfDate);
    if (Number.isFinite(time)) return new Date(time).toLocaleDateString(language === 'zh' ? 'zh-CN' : 'en-US');
  }
  return language === 'zh' ? '当前快照' : 'current snapshot';
}

function forecastHistoryItems(forecast: DDLItem, items: DDLItem[]) {
  const basisIds = Array.isArray(forecast.basisEvents)
    ? forecast.basisEvents.filter((id): id is string => typeof id === 'string' && id.trim().length > 0)
    : [];
  if (!basisIds.length) return [];

  const byId = new Map(items.map(item => [item.id, item]));
  return basisIds
    .map(id => byId.get(id))
    .filter((item): item is DDLItem => Boolean(item) && isHistoryItem(item))
    .slice(-5);
}

function compactMetricItems(metrics: MetricSnapshot[]) {
  const jifRows = metrics.filter(metric => metric.metric === 'journal_impact_factor');
  if (jifRows.length >= 12) {
    const latestByJournal = new Map<string, MetricSnapshot>();
    for (const metric of jifRows) {
      const key = String(metric.journalId || metric.journalTitle || metric.id);
      const existing = latestByJournal.get(key);
      if (!existing || Number(metric.year || 0) > Number(existing.year || 0)) {
        latestByJournal.set(key, metric);
      }
    }
    return [...latestByJournal.values()].sort((a, b) => {
      const valueDiff = Number(b.value || 0) - Number(a.value || 0);
      if (valueDiff !== 0) return valueDiff;
      return String(a.journalTitle || a.id).localeCompare(String(b.journalTitle || b.id), 'zh-CN');
    });
  }
  return metrics.slice(0, 36);
}

function compactItemTitle(title: string) {
  return title.replace(/^20\d{2}\s+/, '').replace(/\s+发布$/, '');
}

function normalizeMetricText(value: unknown) {
  return String(value || '').trim().toLowerCase();
}

function metricJournalKey(metric: MetricSnapshot) {
  return normalizeMetricText(metric.journalId || metric.issn || metric.journalTitle || metric.id);
}

function metricNumber(value: unknown) {
  const next = Number(value);
  return Number.isFinite(next) ? next : undefined;
}

function sortByYearDesc(a: MetricSnapshot, b: MetricSnapshot) {
  return Number(b.year || 0) - Number(a.year || 0);
}

interface JournalMetricProfile {
  key: string;
  title: string;
  issn?: string;
  jifSeries: MetricSnapshot[];
  casSeries: MetricSnapshot[];
  worksSeries: MetricSnapshot[];
  totalWorks?: MetricSnapshot;
  latestJif?: MetricSnapshot;
  latestCas?: MetricSnapshot;
  latestCompleteWorks?: MetricSnapshot;
  currentYtdWorks?: MetricSnapshot;
}

function buildJournalMetricProfiles(metrics: MetricSnapshot[]) {
  const grouped = new Map<string, JournalMetricProfile>();

  for (const metric of metrics) {
    const key = metricJournalKey(metric);
    const title = String(metric.journalTitle || '').trim();
    if (!key || !title) continue;

    const profile = grouped.get(key) || {
      key,
      title,
      issn: typeof metric.issn === 'string' && metric.issn.trim() ? metric.issn : undefined,
      jifSeries: [],
      casSeries: [],
      worksSeries: [],
    };

    if (!profile.issn && typeof metric.issn === 'string' && metric.issn.trim()) {
      profile.issn = metric.issn;
    }

    if (metric.metric === 'journal_impact_factor') profile.jifSeries.push(metric);
    if (metric.metric === 'cas_major_zone') profile.casSeries.push(metric);
    if (metric.metric === 'openalex_works_count_by_year') profile.worksSeries.push(metric);
    if (metric.metric === 'openalex_works_count_total') profile.totalWorks = metric;

    grouped.set(key, profile);
  }

  return [...grouped.values()].map(profile => {
    const jifSeries = [...profile.jifSeries].sort(sortByYearDesc);
    const casSeries = [...profile.casSeries].sort(sortByYearDesc);
    const worksSeries = [...profile.worksSeries].sort(sortByYearDesc);
    const completeWorks = worksSeries.filter(metric => metric.yearCompleteness === 'complete_observed');
    const ytdWorks = worksSeries.filter(metric => metric.yearCompleteness === 'partial_ytd');
    return {
      ...profile,
      jifSeries,
      casSeries,
      worksSeries,
      latestJif: jifSeries[0],
      latestCas: casSeries[0],
      latestCompleteWorks: completeWorks[0],
      currentYtdWorks: ytdWorks[0],
    };
  }).sort((a, b) => {
    const jifDelta = Number(b.latestJif?.value || 0) - Number(a.latestJif?.value || 0);
    if (jifDelta !== 0) return jifDelta;
    return a.title.localeCompare(b.title, 'zh-CN');
  });
}

function metricValueLabel(metric?: MetricSnapshot, empty = '-') {
  if (!metric) return empty;
  const value = metricNumber(metric.value);
  return value === undefined ? String(metric.value) : value.toLocaleString('zh-CN', { maximumFractionDigits: 3 });
}

function metricYearLabel(metric?: MetricSnapshot, empty = '') {
  if (!metric) return empty;
  return metric.year ? String(metric.year) : metricWhen(metric, 'zh');
}

function JournalMetricLookup({
  metrics,
  topicColor,
}: {
  metrics: MetricSnapshot[];
  topicColor: string;
}) {
  const { language } = useLanguage();
  const [query, setQuery] = useState('');
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const profiles = useMemo(() => buildJournalMetricProfiles(metrics), [metrics]);

  const labels = language === 'zh'
    ? {
      eyebrow: '单刊查询',
      title: '查某一本期刊的 JCR / CAS / 发文量轨迹',
      copy: '把授权导入的影响因子、中科院分区和 OpenAlex 公开发文量放到同一个剖面里。当前年发文量是 YTD 快照，不与完整年份做趋势判断。',
      search: '输入期刊名、ISSN 或 slug，例如 TPAMI / ACM Computing Surveys',
      results: '匹配期刊',
      jif: '最新影响因子',
      cas: '最新 CAS 大类',
      total: 'OpenAlex 累计发文',
      latestComplete: '最新完整年发文',
      ytd: '当前年 YTD',
      jifSeries: '影响因子轨迹',
      casSeries: 'CAS 分区轨迹',
      worksSeries: '发文量轨迹',
      source: '来源',
      missing: '待授权导入',
      noResult: '没有匹配期刊',
      top: 'TOP',
      complete: '完整年',
      partial: 'YTD',
    }
    : {
      eyebrow: 'journal lookup',
      title: 'Search JCR / CAS / Publication Volume By Journal',
      copy: 'This profile combines authorized JIF imports, CAS zone imports, and public OpenAlex volume snapshots. Current-year volume is a YTD snapshot.',
      search: 'Type a journal title, ISSN, or slug, e.g. TPAMI / ACM Computing Surveys',
      results: 'Matches',
      jif: 'Latest JIF',
      cas: 'Latest CAS Zone',
      total: 'OpenAlex Total',
      latestComplete: 'Latest Complete Year',
      ytd: 'Current YTD',
      jifSeries: 'JIF Series',
      casSeries: 'CAS Zone Series',
      worksSeries: 'Volume Series',
      source: 'Source',
      missing: 'Pending authorized import',
      noResult: 'No matching journal',
      top: 'TOP',
      complete: 'complete',
      partial: 'YTD',
    };

  const filteredProfiles = useMemo(() => {
    const needle = normalizeMetricText(query);
    if (!needle) return profiles.slice(0, 8);
    return profiles.filter(profile => {
      const haystack = [
        profile.key,
        profile.title,
        profile.issn,
      ].map(normalizeMetricText).join(' ');
      return haystack.includes(needle);
    }).slice(0, 12);
  }, [profiles, query]);

  const selectedProfile = useMemo(() => {
    if (!profiles.length) return undefined;
    return profiles.find(profile => profile.key === selectedKey)
      || filteredProfiles[0]
      || profiles[0];
  }, [filteredProfiles, profiles, selectedKey]);

  if (!profiles.length) return null;

  const statCards = [
    { label: labels.jif, value: metricValueLabel(selectedProfile?.latestJif, labels.missing), meta: metricYearLabel(selectedProfile?.latestJif, '') },
    {
      label: labels.cas,
      value: metricValueLabel(selectedProfile?.latestCas, labels.missing),
      meta: selectedProfile?.latestCas
        ? [metricYearLabel(selectedProfile.latestCas), selectedProfile.latestCas.isTop ? labels.top : ''].filter(Boolean).join(' · ')
        : '',
    },
    { label: labels.total, value: metricValueLabel(selectedProfile?.totalWorks, '-'), meta: selectedProfile?.totalWorks?.asOfDate ? String(selectedProfile.totalWorks.asOfDate) : '' },
    { label: labels.latestComplete, value: metricValueLabel(selectedProfile?.latestCompleteWorks, '-'), meta: metricYearLabel(selectedProfile?.latestCompleteWorks, '') },
    { label: labels.ytd, value: metricValueLabel(selectedProfile?.currentYtdWorks, '-'), meta: metricYearLabel(selectedProfile?.currentYtdWorks, '') },
  ];

  return (
    <section className="mt-8 rounded-3xl border bg-white p-5 shadow-sm sm:p-6" style={{ borderColor: '#E2E8F0' }}>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em]" style={{ color: topicColor }}>{labels.eyebrow}</p>
          <h2 className="mt-2 text-xl font-black" style={{ color: '#0F172A' }}>{labels.title}</h2>
          <p className="mt-2 max-w-3xl text-sm leading-7" style={{ color: '#64748B' }}>{labels.copy}</p>
        </div>
        <div className="relative w-full lg:max-w-md">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: '#94A3B8' }} />
          <input
            value={query}
            onChange={event => setQuery(event.target.value)}
            className="h-12 w-full rounded-2xl border bg-slate-50 pl-11 pr-4 text-sm font-semibold outline-none transition focus:bg-white"
            style={{ borderColor: '#E2E8F0', color: '#0F172A' }}
            placeholder={labels.search}
            aria-label={labels.search}
          />
        </div>
      </div>

      <div className="mt-5 grid gap-4 xl:grid-cols-[minmax(260px,0.7fr)_minmax(0,1.3fr)]">
        <article className="rounded-3xl border bg-slate-50 p-3" style={{ borderColor: '#E2E8F0' }}>
          <h3 className="px-2 py-1 text-sm font-black" style={{ color: '#0F172A' }}>{labels.results} · {filteredProfiles.length}</h3>
          <div className="mt-2 max-h-80 space-y-2 overflow-y-auto pr-1">
            {filteredProfiles.length ? filteredProfiles.map(profile => {
              const active = profile.key === selectedProfile?.key;
              return (
                <button
                  key={profile.key}
                  onClick={() => setSelectedKey(profile.key)}
                  className="w-full rounded-2xl border bg-white p-3 text-left transition hover:-translate-y-0.5"
                  style={{ borderColor: active ? topicColor : '#E2E8F0', boxShadow: active ? `0 0 0 3px ${topicColor}12` : 'none' }}
                >
                  <p className="line-clamp-1 text-sm font-black" style={{ color: '#0F172A' }}>{profile.title}</p>
                  <p className="mt-1 text-[11px] font-semibold" style={{ color: '#64748B' }}>
                    JIF {metricValueLabel(profile.latestJif, '-')} · CAS {metricValueLabel(profile.latestCas, '-')} · {profile.issn || 'ISSN -'}
                  </p>
                </button>
              );
            }) : <p className="px-2 py-4 text-sm font-semibold" style={{ color: '#94A3B8' }}>{labels.noResult}</p>}
          </div>
        </article>

        {selectedProfile && (
          <article className="rounded-3xl border bg-white p-4" style={{ borderColor: '#E2E8F0' }}>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-xl font-black" style={{ color: '#0F172A' }}>{selectedProfile.title}</h3>
                <p className="mt-1 text-xs font-semibold" style={{ color: '#64748B' }}>{selectedProfile.issn || 'ISSN -'}</p>
              </div>
              {(selectedProfile.latestJif?.url || selectedProfile.latestCas?.url || selectedProfile.totalWorks?.url) && (
                <a
                  href={String(selectedProfile.latestJif?.url || selectedProfile.latestCas?.url || selectedProfile.totalWorks?.url)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border px-3 py-2 text-xs font-black transition hover:-translate-y-0.5"
                  style={{ borderColor: '#E2E8F0', color: topicColor }}
                >
                  {labels.source} <ExternalLink size={13} />
                </a>
              )}
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
              {statCards.map(card => (
                <div key={card.label} className="rounded-2xl border bg-slate-50 p-3" style={{ borderColor: '#E2E8F0' }}>
                  <p className="text-[11px] font-black uppercase tracking-[0.12em]" style={{ color: '#64748B' }}>{card.label}</p>
                  <p className="mt-2 text-2xl font-black" style={{ color: '#0F172A' }}>{card.value}</p>
                  {card.meta && <p className="mt-1 text-[11px] font-semibold" style={{ color: '#94A3B8' }}>{card.meta}</p>}
                </div>
              ))}
            </div>

            <div className="mt-5 grid gap-4 lg:grid-cols-3">
              <MetricSeriesList title={labels.jifSeries} metrics={selectedProfile.jifSeries.slice(0, 8)} topicColor={topicColor} empty={labels.missing} />
              <MetricSeriesList
                title={labels.casSeries}
                metrics={selectedProfile.casSeries.slice(0, 6)}
                topicColor={topicColor}
                empty={labels.missing}
                valueSuffix={metric => metric.isTop ? ` · ${labels.top}` : ''}
              />
              <MetricSeriesList
                title={labels.worksSeries}
                metrics={selectedProfile.worksSeries.slice(0, 8)}
                topicColor={topicColor}
                empty="-"
                valueSuffix={metric => metric.yearCompleteness === 'partial_ytd' ? ` · ${labels.partial}` : ` · ${labels.complete}`}
              />
            </div>
          </article>
        )}
      </div>
    </section>
  );
}

function MetricSeriesList({
  title,
  metrics,
  topicColor,
  empty,
  valueSuffix,
}: {
  title: string;
  metrics: MetricSnapshot[];
  topicColor: string;
  empty: string;
  valueSuffix?: (metric: MetricSnapshot) => string;
}) {
  return (
    <div className="rounded-2xl border bg-slate-50 p-3" style={{ borderColor: '#E2E8F0' }}>
      <h4 className="text-sm font-black" style={{ color: '#0F172A' }}>{title}</h4>
      <div className="mt-3 space-y-2">
        {metrics.length ? metrics.map(metric => (
          <a
            key={metric.id}
            href={metric.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-3 rounded-xl bg-white px-3 py-2 text-xs font-bold"
            style={{ color: '#334155' }}
          >
            <span className="font-black" style={{ color: topicColor }}>{metric.year || metricWhen(metric, 'zh')}</span>
            <span className="truncate">{metricValueLabel(metric)}{valueSuffix?.(metric) || ''}</span>
          </a>
        )) : <p className="rounded-xl bg-white px-3 py-2 text-xs font-semibold" style={{ color: '#94A3B8' }}>{empty}</p>}
      </div>
    </div>
  );
}

function TopicInsightRails({
  items,
  metrics,
  topicColor,
}: {
  items: DDLItem[];
  metrics: MetricSnapshot[];
  topicColor: string;
}) {
  const { language } = useLanguage();
  const historyItems = items.filter(isHistoryItem).sort((a, b) => ddlItemTime(b, 0) - ddlItemTime(a, 0)).slice(0, 6);
  const forecastItems = items.filter(isForecastItem).sort(compareDDLItems).slice(0, 4);
  const metricItems = compactMetricItems(metrics);

  if (!historyItems.length && !forecastItems.length && !metricItems.length) return null;

  const labels = language === 'zh'
    ? {
      eyebrow: '时间轨迹',
      title: '历史节点、预测窗口与指标快照',
      copy: '历史节点解释节奏，预测窗口只做观察提醒；指标快照来自公开或授权数据出口，不等同于官方倒计时。',
      history: '历史轨迹',
      forecast: '预测窗口',
      metrics: '指标快照',
      confidence: '置信度',
      disclosure: '预测说明',
      basis: '依据历史节点',
      source: '来源',
      empty: '暂无数据',
    }
    : {
      eyebrow: 'timeline',
      title: 'History, Forecasts, And Metrics',
      copy: 'History explains cadence; forecast windows are watch signals only. Metric snapshots come from public or authorized exports and are not official countdowns.',
      history: 'History',
      forecast: 'Forecasts',
      metrics: 'Metrics',
      confidence: 'Confidence',
      disclosure: 'Forecast note',
      basis: 'Basis history',
      source: 'Source',
      empty: 'No data yet',
    };

  return (
    <section className="mt-8 rounded-3xl border bg-white p-5 shadow-sm sm:p-6" style={{ borderColor: '#E2E8F0' }}>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em]" style={{ color: topicColor }}>{labels.eyebrow}</p>
          <h2 className="mt-2 text-xl font-black" style={{ color: '#0F172A' }}>{labels.title}</h2>
          <p className="mt-2 max-w-3xl text-sm leading-7" style={{ color: '#64748B' }}>{labels.copy}</p>
        </div>
      </div>

      <div className="mt-5 grid items-start gap-4 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,0.95fr)_minmax(0,1.1fr)]">
        <article className="self-start rounded-3xl border bg-slate-50 p-4" style={{ borderColor: '#E2E8F0' }}>
          <h3 className="text-sm font-black" style={{ color: '#0F172A' }}>{labels.history}</h3>
          <div className="mt-4 space-y-3">
            {historyItems.length ? historyItems.map(item => (
              <a key={item.id} href={item.url} target="_blank" rel="noopener noreferrer" className="block rounded-2xl border bg-white p-3 transition hover:-translate-y-0.5" style={{ borderColor: '#E2E8F0' }}>
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full px-2 py-0.5 text-[10px] font-black" style={{ background: `${topicColor}12`, color: topicColor }}>{formatItemDate(item, language)}</span>
                  <ExternalLink size={13} style={{ color: '#94A3B8' }} />
                </div>
                <p className="mt-2 line-clamp-2 text-xs font-black" style={{ color: '#0F172A' }}>{item.title}</p>
                <p className="mt-1 truncate text-[11px]" style={{ color: '#64748B' }}>{item.source}</p>
              </a>
            )) : <p className="text-xs font-semibold" style={{ color: '#94A3B8' }}>{labels.empty}</p>}
          </div>
        </article>

        <article className="self-start rounded-3xl border bg-slate-50 p-4" style={{ borderColor: '#E2E8F0' }}>
          <h3 className="text-sm font-black" style={{ color: '#0F172A' }}>{labels.forecast}</h3>
          <div className="mt-4 space-y-3">
            {forecastItems.length ? forecastItems.map(item => {
              const basis = forecastHistoryItems(item, items);
              return (
                <a key={item.id} href={item.url} target="_blank" rel="noopener noreferrer" className="block rounded-2xl border bg-white p-3 transition hover:-translate-y-0.5" style={{ borderColor: '#CFFAFE' }}>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-cyan-50 px-2 py-0.5 text-[10px] font-black text-cyan-700">{formatItemDate(item, language)}</span>
                    {typeof item.confidence === 'string' && (
                      <span className="rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-black text-amber-700">{labels.confidence}: {item.confidence}</span>
                    )}
                  </div>
                  <p className="mt-2 line-clamp-2 text-xs font-black" style={{ color: '#0F172A' }}>{item.title}</p>
                  <p className="mt-1 line-clamp-2 text-[11px]" style={{ color: '#64748B' }}>{item.description}</p>
                  <p className="mt-2 rounded-xl bg-cyan-50 px-2 py-1 text-[11px] font-bold leading-5 text-cyan-700">
                    {labels.disclosure}: {formatForecastDisclosure(item, language)}
                  </p>
                  {formatForecastWindowDeadlineLabel(item, language) && (
                    <p className="mt-2 rounded-xl border bg-white px-2 py-1 text-[11px] font-black leading-5" style={{ borderColor: '#BAE6FD', color: '#0E7490' }}>
                      {formatForecastWindowDeadlineLabel(item, language)}
                    </p>
                  )}
                  {basis.length > 0 && (
                    <div className="mt-2 rounded-xl border bg-slate-50 p-2" style={{ borderColor: '#E2E8F0' }}>
                      <p className="text-[10px] font-black uppercase tracking-[0.12em]" style={{ color: '#64748B' }}>{labels.basis}</p>
                      <div className="mt-1.5 space-y-1">
                        {basis.map(history => (
                          <div key={history.id} className="flex items-center gap-2 text-[11px] font-semibold" style={{ color: '#475569' }}>
                            <span className="shrink-0 rounded-full bg-white px-1.5 py-0.5 font-black" style={{ color: topicColor }}>
                              {formatItemDate(history, language)}
                            </span>
                            <span className="min-w-0 truncate">{compactItemTitle(history.title)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </a>
              );
            }) : <p className="text-xs font-semibold" style={{ color: '#94A3B8' }}>{labels.empty}</p>}
          </div>
        </article>

        <article className="self-start rounded-3xl border bg-slate-50 p-4" style={{ borderColor: '#E2E8F0' }}>
          <h3 className="text-sm font-black" style={{ color: '#0F172A' }}>{labels.metrics} · {metricItems.length}</h3>
          <div className="mt-4 grid max-h-96 gap-3 overflow-y-auto pr-1 sm:grid-cols-2 xl:grid-cols-1">
            {metricItems.length ? metricItems.map(metric => (
              <a key={metric.id} href={metric.url} target="_blank" rel="noopener noreferrer" className="rounded-2xl border bg-white p-3 transition hover:-translate-y-0.5" style={{ borderColor: '#E2E8F0' }}>
                <p className="truncate text-[11px] font-black uppercase tracking-[0.12em]" style={{ color: topicColor }}>
                  {metric.journalTitle || metric.journalId || metricTitle(metric, language)}
                </p>
                <div className="mt-2 flex items-end justify-between gap-3">
                  <div>
                    <p className="text-xl font-black" style={{ color: '#0F172A' }}>{String(metric.value)}</p>
                    <p className="text-[11px] font-semibold" style={{ color: '#64748B' }}>{metricTitle(metric, language)} · {metricWhen(metric, language)}</p>
                  </div>
                  <ExternalLink size={13} style={{ color: '#94A3B8' }} />
                </div>
                <p className="mt-2 truncate text-[11px]" style={{ color: '#94A3B8' }}>{labels.source}: {metric.source}</p>
              </a>
            )) : <p className="text-xs font-semibold" style={{ color: '#94A3B8' }}>{labels.empty}</p>}
          </div>
        </article>
      </div>
    </section>
  );
}

function TopicSubtopicPlaza({
  groups,
  topicColor,
  storageKey,
  eventViewMode,
  onEventViewModeChange,
  eventVisualMode,
  onEventVisualModeChange,
  labels,
}: {
  groups: SubtopicGroup[];
  topicColor: string;
  storageKey: string;
  eventViewMode: EventViewMode;
  onEventViewModeChange: (mode: EventViewMode) => void;
  eventVisualMode: EventVisualMode;
  onEventVisualModeChange: (mode: EventVisualMode) => void;
  labels: {
    title: string;
    copy: string;
    subtopic: string;
    pin: string;
    pinned: string;
    expand: string;
    collapse: string;
    active: string;
    sources: string;
    next: string;
    events: string;
    listView: string;
    gridView: string;
    vividMode: string;
    simpleMode: string;
  };
}) {
  const { language } = useLanguage();
  const [pinnedSubtopics, setPinnedSubtopics] = useState<Set<string>>(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      return raw ? new Set(JSON.parse(raw)) : new Set();
    } catch {
      return new Set();
    }
  });
  const [expandedSubtopics, setExpandedSubtopics] = useState<Set<string>>(() => {
    const firstPinned = groups.find(group => pinnedSubtopics.has(group.id));
    const firstGroupId = firstPinned?.id || groups[0]?.id;
    return firstGroupId ? new Set([firstGroupId]) : new Set();
  });

  const orderedGroups = useMemo(() => [...groups].sort((a, b) => {
    const pinDelta = Number(pinnedSubtopics.has(b.id)) - Number(pinnedSubtopics.has(a.id));
    if (pinDelta) return pinDelta;
    return ddlItemTime(a.nextItem || ({} as DDLItem)) - ddlItemTime(b.nextItem || ({} as DDLItem));
  }), [groups, pinnedSubtopics]);

  const togglePinned = (id: string) => {
    setPinnedSubtopics(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      try {
        localStorage.setItem(storageKey, JSON.stringify([...next]));
      } catch {
        /* localStorage can be unavailable in restricted browsers */
      }
      return next;
    });
    setExpandedSubtopics(prev => new Set(prev).add(id));
  };

  const toggleExpanded = (id: string) => {
    setExpandedSubtopics(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  const countdownLabel = (item?: DDLItem) => {
    if (!item) return '-';
    return formatRelativeDeadline(item, language);
  };

  if (!groups.length) return null;

  return (
    <section className="mt-8 overflow-hidden rounded-3xl border bg-white shadow-sm" style={{ borderColor: '#E2E8F0' }}>
      <div className="p-5 sm:p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em]" style={{ color: topicColor }}>
              <ListFilter size={14} /> {labels.subtopic}
            </div>
            <h2 className="mt-2 text-xl font-black" style={{ color: '#0F172A' }}>{labels.title}</h2>
            <p className="mt-2 max-w-3xl text-sm leading-7" style={{ color: '#475569' }}>{labels.copy}</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <div className="rounded-2xl px-3 py-2 text-xs font-black" style={{ background: `${topicColor}12`, color: topicColor }}>
              {groups.reduce((sum, group) => sum + group.items.length, 0)} {labels.events}
            </div>
            <div className="inline-flex rounded-2xl border bg-white p-1" style={{ borderColor: '#E2E8F0' }}>
              {[
                { id: 'list' as const, label: labels.listView, icon: List },
                { id: 'grid' as const, label: labels.gridView, icon: LayoutGrid },
              ].map(option => {
                const Icon = option.icon;
                const active = eventViewMode === option.id;
                return (
                  <button
                    key={option.id}
                    onClick={() => onEventViewModeChange(option.id)}
                    className="flex items-center gap-1.5 whitespace-nowrap rounded-xl px-3 py-1.5 text-xs font-black transition"
                    style={{ background: active ? `${topicColor}12` : 'transparent', color: active ? topicColor : '#64748B' }}
                    aria-pressed={active}
                    title={option.label}
                  >
                    <Icon size={14} /> {option.label}
                  </button>
                );
              })}
            </div>
            <div className="inline-flex rounded-2xl border bg-white p-1" style={{ borderColor: '#E2E8F0' }}>
              {[
                { id: 'vivid' as const, label: labels.vividMode, icon: Sparkles },
                { id: 'simple' as const, label: labels.simpleMode, icon: SlidersHorizontal },
              ].map(option => {
                const Icon = option.icon;
                const active = eventVisualMode === option.id;
                return (
                  <button
                    key={option.id}
                    onClick={() => onEventVisualModeChange(option.id)}
                    className="flex items-center gap-1.5 whitespace-nowrap rounded-xl px-3 py-1.5 text-xs font-black transition"
                    style={{ background: active ? `${topicColor}12` : 'transparent', color: active ? topicColor : '#64748B' }}
                    aria-pressed={active}
                    title={option.label}
                  >
                    <Icon size={14} /> {option.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-3">
          {orderedGroups.map(group => {
            const isPinned = pinnedSubtopics.has(group.id);
            const isExpanded = expandedSubtopics.has(group.id);
            return (
              <article key={group.id} className="overflow-hidden rounded-2xl border" style={{ borderColor: isPinned ? topicColor : '#E2E8F0', background: isPinned ? `${topicColor}08` : '#FFFFFF' }}>
                <div className="flex flex-col gap-4 p-4 lg:flex-row lg:items-center lg:justify-between">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base font-black" style={{ color: '#0F172A' }}>{group.name}</h3>
                      <span className="rounded-full px-2 py-0.5 text-[10px] font-black" style={{ background: `${topicColor}14`, color: topicColor }}>
                        {group.items.length} {labels.events}
                      </span>
                      {isPinned && (
                        <span className="rounded-full px-2 py-0.5 text-[10px] font-black" style={{ background: '#FEF3C7', color: '#A16207' }}>
                          {labels.pinned}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 truncate text-sm font-semibold" style={{ color: '#64748B' }}>
                      {labels.next}: {group.nextItem?.title || '-'} · {countdownLabel(group.nextItem)}
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-2 sm:min-w-[330px]">
                    <div className="rounded-2xl border bg-white px-3 py-2" style={{ borderColor: '#E2E8F0' }}>
                      <p className="text-lg font-black" style={{ color: '#0F172A' }}>{group.activeItems.length}</p>
                      <p className="text-[11px] font-bold" style={{ color: '#64748B' }}>{labels.active}</p>
                    </div>
                    <div className="rounded-2xl border bg-white px-3 py-2" style={{ borderColor: '#E2E8F0' }}>
                      <p className="text-lg font-black" style={{ color: '#0F172A' }}>{group.sourceCount}</p>
                      <p className="text-[11px] font-bold" style={{ color: '#64748B' }}>{labels.sources}</p>
                    </div>
                    <div className="rounded-2xl border bg-white px-3 py-2" style={{ borderColor: '#E2E8F0' }}>
                      <p className="truncate text-lg font-black" style={{ color: '#0F172A' }}>{countdownLabel(group.nextItem)}</p>
                      <p className="text-[11px] font-bold" style={{ color: '#64748B' }}>{labels.next}</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => togglePinned(group.id)}
                      className="flex h-10 w-10 items-center justify-center rounded-2xl border transition hover:-translate-y-0.5"
                      style={{ borderColor: isPinned ? topicColor : '#E2E8F0', background: isPinned ? `${topicColor}12` : '#FFFFFF', color: isPinned ? topicColor : '#64748B' }}
                      aria-label={isPinned ? labels.pinned : labels.pin}
                      title={isPinned ? labels.pinned : labels.pin}
                    >
                      <Pin size={15} style={{ fill: isPinned ? topicColor : 'none' }} />
                    </button>
                    <button
                      onClick={() => toggleExpanded(group.id)}
                      className="flex items-center gap-2 rounded-2xl border bg-white px-4 py-2 text-xs font-black transition hover:-translate-y-0.5"
                      style={{ borderColor: '#E2E8F0', color: '#475569' }}
                    >
                      {isExpanded ? labels.collapse : labels.expand}
                      <ChevronDown size={14} className="transition-transform" style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                    </button>
                  </div>
                </div>

                {isExpanded && (
                  <div
                    className={`border-t p-4 ${eventViewMode === 'grid' ? 'grid gap-4 md:grid-cols-2 xl:grid-cols-3' : 'space-y-3'}`}
                    style={{ borderColor: '#E2E8F0', background: '#F8FAFC' }}
                  >
                    {group.items.map((item, index) => (
                      <DDLCard key={item.id} item={item} index={index} topicColor={topicColor} variant={eventViewMode} visualMode={eventVisualMode} />
                    ))}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function TopicDetail() {
  const { topicId } = useParams<{ topicId: string }>();
  const topic = getTopicById(topicId || '');
  const { isSubscribed, toggle } = useSubscriptions();
  const { copy, topicName, topicDescription, categoryName, tagName } = useLanguage();
  const [eventViewMode, setEventViewMode] = useState<EventViewMode>(() => {
    try {
      return localStorage.getItem('just-ddl-topic-event-view') === 'list' ? 'list' : 'grid';
    } catch {
      return 'grid';
    }
  });
  const [eventVisualMode, setEventVisualMode] = useState<EventVisualMode>(() => {
    try {
      return localStorage.getItem('just-ddl-topic-visual-mode') === 'simple' ? 'simple' : 'vivid';
    } catch {
      return 'vivid';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('just-ddl-topic-event-view', eventViewMode);
    } catch {
      /* localStorage can be unavailable in restricted browsers */
    }
  }, [eventViewMode]);

  useEffect(() => {
    try {
      localStorage.setItem('just-ddl-topic-visual-mode', eventVisualMode);
    } catch {
      /* localStorage can be unavailable in restricted browsers */
    }
  }, [eventVisualMode]);

  const [loadedItems, setLoadedItems] = useState<{ topicId: string; items: DDLItem[] } | null>(null);

  useEffect(() => {
    let isCurrent = true;
    if (!topicId) return undefined;

    loadDDLByTopic(topicId).then((nextItems) => {
      if (isCurrent) setLoadedItems({ topicId, items: nextItems });
    });

    return () => {
      isCurrent = false;
    };
  }, [topicId]);

  const items = useMemo(() => {
    if (!topicId || loadedItems?.topicId !== topicId) return [];
    return [...loadedItems.items].sort(compareDDLItems);
  }, [loadedItems, topicId]);

  const [loadedMetrics, setLoadedMetrics] = useState<{ topicId: string; metrics: MetricSnapshot[] } | null>(null);

  useEffect(() => {
    let isCurrent = true;
    if (!topicId) return undefined;

    loadMetricsByTopic(topicId).then((nextMetrics) => {
      if (isCurrent) setLoadedMetrics({ topicId, metrics: nextMetrics });
    });

    return () => {
      isCurrent = false;
    };
  }, [topicId]);

  const metrics = loadedMetrics?.topicId === topicId ? loadedMetrics.metrics : [];
  const [loadedJournalMetrics, setLoadedJournalMetrics] = useState<{ topicId: string; metrics: MetricSnapshot[] } | null>(null);
  const isJournalMetricTopic = Boolean(topicId && journalMetricTopicIds.includes(topicId as typeof journalMetricTopicIds[number]));

  useEffect(() => {
    let isCurrent = true;
    if (!topicId || !journalMetricTopicIds.includes(topicId as typeof journalMetricTopicIds[number])) return undefined;

    Promise.all(journalMetricTopicIds.map(id => loadMetricsByTopic(id))).then((metricGroups) => {
      if (isCurrent) setLoadedJournalMetrics({ topicId, metrics: metricGroups.flat() });
    });

    return () => {
      isCurrent = false;
    };
  }, [topicId]);

  const journalMetrics = loadedJournalMetrics?.topicId === topicId ? loadedJournalMetrics.metrics : [];

  const subtopicGroups = useMemo<SubtopicGroup[]>(() => {
    if (!topicId || !['sports-ddl', 'game-ddl'].includes(topicId)) return [];
    const groups = new Map<string, SubtopicGroup>();
    for (const item of items) {
      const subtopic = getItemSubtopic(item);
      const group = groups.get(subtopic.id) || {
        id: subtopic.id,
        name: subtopic.name,
        items: [],
        activeItems: [],
        nextItem: undefined,
        sourceCount: 0,
      };
      group.items.push(item);
      if (isActiveDeadlineItem(item)) group.activeItems.push(item);
      groups.set(subtopic.id, group);
    }
    return [...groups.values()].map(group => {
      const activeItems = group.activeItems.sort(compareDDLItems);
      return {
        ...group,
        items: group.items.sort(compareDDLItems),
        activeItems,
        nextItem: activeItems[0] || group.items[0],
        sourceCount: new Set(group.items.map(item => item.source).filter(Boolean)).size,
      };
    });
  }, [items, topicId]);

  if (!topic) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-16 text-center">
        <h2 className="text-xl font-black" style={{ color: '#0F172A' }}>{copy.detail.missing}</h2>
        <Link to="/" className="mt-4 inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-bold text-white" style={{ background: '#0F766E' }}>
          <ArrowLeft size={14} /> {copy.detail.back}
        </Link>
      </div>
    );
  }

  const Icon = iconMap[topic.icon] || Trophy;
  const subscribed = isSubscribed(topic.id);
  const activeItems = items.filter(isActiveDeadlineItem);
  const nextItem = activeItems[0];
  const sourceCount = new Set(items.map(item => item.source).filter(Boolean)).size;

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10">
      <Link
        to="/"
        className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-2 text-xs font-bold transition hover:-translate-y-0.5"
        style={{ borderColor: '#E2E8F0', color: '#475569' }}
      >
        <ArrowLeft size={13} /> {copy.detail.back}
      </Link>

      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-5 overflow-hidden rounded-3xl border bg-white shadow-sm"
        style={{ borderColor: '#E2E8F0' }}
      >
        <div className="h-2" style={{ background: `linear-gradient(90deg, ${topic.color}, transparent)` }} />
        <div className="p-5 sm:p-7">
          <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
            <div className="flex min-w-0 gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl" style={{ background: `${topic.color}16`, color: topic.color }}>
                <Icon size={28} />
              </div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h1 className="text-2xl font-black" style={{ color: '#0F172A' }}>{topicName(topic)}</h1>
                  <span className="rounded-full px-2.5 py-1 text-[11px] font-black" style={{ background: `${topic.color}12`, color: topic.color }}>{categoryName(topic.category)}</span>
                  <span className="rounded-full px-2.5 py-1 text-[11px] font-black" style={{ background: topic.status === 'published' ? '#DCFCE7' : '#FEF3C7', color: topic.status === 'published' ? '#047857' : '#92400E' }}>
                    {topic.status === 'published' ? copy.detail.published : copy.detail.demo}
                  </span>
                </div>
                <p className="mt-3 max-w-2xl text-sm leading-7" style={{ color: '#475569' }}>{topicDescription(topic)}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {topic.tags.map(tag => (
                    <span key={tag} className="rounded-full px-2.5 py-1 text-[11px] font-semibold" style={{ background: '#F1F5F9', color: '#475569' }}>{tagName(tag)}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 md:justify-end">
              <button
                onClick={() => toggle(topic.id)}
                className="flex items-center gap-2 rounded-2xl border px-4 py-2 text-xs font-black transition hover:-translate-y-0.5"
                style={{ background: subscribed ? `${topic.color}12` : 'white', borderColor: subscribed ? topic.color : '#E2E8F0', color: subscribed ? topic.color : '#475569' }}
              >
                <Star size={14} style={{ fill: subscribed ? topic.color : 'none' }} /> {subscribed ? copy.detail.subscribed : copy.detail.subscribe}
              </button>
              <a
                href={`https://github.com/${topic.repo}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-2xl border bg-white px-4 py-2 text-xs font-black transition hover:-translate-y-0.5"
                style={{ borderColor: '#E2E8F0', color: '#475569' }}
              >
                <Github size={14} /> {copy.detail.repo}
              </a>
              <a
                href={topic.site}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-2xl px-4 py-2 text-xs font-black text-white transition hover:-translate-y-0.5"
                style={{ background: topic.color }}
              >
                <ExternalLink size={14} /> {copy.detail.pages}
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      <section className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { label: copy.detail.total, value: items.length, icon: Database },
          { label: copy.detail.active, value: activeItems.length, icon: RadioTower },
          { label: copy.detail.sources, value: sourceCount, icon: Github },
          { label: copy.detail.next, value: nextItem?.stage || nextItem?.title || '-', icon: ExternalLink },
        ].map(stat => {
          const IconStat = stat.icon;
          return (
            <div key={stat.label} className="rounded-3xl border bg-white p-4 shadow-sm" style={{ borderColor: '#E2E8F0' }}>
              <IconStat size={15} style={{ color: topic.color }} />
              <p className="mt-2 truncate text-xl font-black" style={{ color: '#0F172A' }}>{stat.value}</p>
              <p className="mt-1 text-xs font-bold" style={{ color: '#64748B' }}>{stat.label}</p>
            </div>
          );
        })}
      </section>

      <TopicInsightRails items={items} metrics={metrics} topicColor={topic.color} />
      {isJournalMetricTopic && <JournalMetricLookup metrics={journalMetrics} topicColor={topic.color} />}

      {['sports-ddl', 'game-ddl'].includes(topic.id) && subtopicGroups.length > 0 && (
        <TopicSubtopicPlaza
          groups={subtopicGroups}
          topicColor={topic.color}
          storageKey={`just-ddl-pinned-${topic.id}-subtopics`}
          eventViewMode={eventViewMode}
          onEventViewModeChange={setEventViewMode}
          eventVisualMode={eventVisualMode}
          onEventVisualModeChange={setEventVisualMode}
          labels={{
            title: topic.id === 'game-ddl' ? copy.detail.gamePlazaTitle : copy.detail.sportsPlazaTitle,
            copy: topic.id === 'game-ddl' ? copy.detail.gamePlazaCopy : copy.detail.sportsPlazaCopy,
            subtopic: copy.detail.sportSubtopic,
            pin: copy.detail.pinSubtopic,
            pinned: copy.detail.pinnedSubtopic,
            expand: copy.detail.expand,
            collapse: copy.detail.collapse,
            active: copy.detail.active,
            sources: copy.detail.sources,
            next: copy.detail.next,
            events: copy.detail.events,
            listView: copy.my.listView,
            gridView: copy.my.gridView,
            vividMode: copy.detail.vividMode,
            simpleMode: copy.detail.simpleMode,
          }}
        />
      )}

      <section className="mt-8 space-y-3">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <h2 className="text-xl font-black" style={{ color: '#0F172A' }}>{copy.detail.allDeadlines}</h2>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border bg-white px-3 py-1.5 text-xs font-bold" style={{ borderColor: '#E2E8F0', color: '#64748B' }}>
              {activeItems.length} {copy.detail.active}
            </span>
            <div className="inline-flex rounded-2xl border bg-white p-1" style={{ borderColor: '#E2E8F0' }}>
              {[
                { id: 'list' as const, label: copy.my.listView, icon: List },
                { id: 'grid' as const, label: copy.my.gridView, icon: LayoutGrid },
              ].map(option => {
                const Icon = option.icon;
                const active = eventViewMode === option.id;
                return (
                  <button
                    key={option.id}
                    onClick={() => setEventViewMode(option.id)}
                    className="flex items-center gap-1.5 whitespace-nowrap rounded-xl px-3 py-1.5 text-xs font-black transition"
                    style={{ background: active ? `${topic.color}12` : 'transparent', color: active ? topic.color : '#64748B' }}
                    aria-pressed={active}
                    title={option.label}
                  >
                    <Icon size={14} /> {option.label}
                  </button>
                );
              })}
            </div>
            <div className="inline-flex rounded-2xl border bg-white p-1" style={{ borderColor: '#E2E8F0' }}>
              {[
                { id: 'vivid' as const, label: copy.detail.vividMode, icon: Sparkles },
                { id: 'simple' as const, label: copy.detail.simpleMode, icon: SlidersHorizontal },
              ].map(option => {
                const Icon = option.icon;
                const active = eventVisualMode === option.id;
                return (
                  <button
                    key={option.id}
                    onClick={() => setEventVisualMode(option.id)}
                    className="flex items-center gap-1.5 whitespace-nowrap rounded-xl px-3 py-1.5 text-xs font-black transition"
                    style={{ background: active ? `${topic.color}12` : 'transparent', color: active ? topic.color : '#64748B' }}
                    aria-pressed={active}
                    title={option.label}
                  >
                    <Icon size={14} /> {option.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        <div className={eventViewMode === 'grid' ? 'grid gap-5 md:grid-cols-2 xl:grid-cols-3' : 'space-y-3'}>
          {items.map((item, index) => (
            <DDLCard key={item.id} item={item} index={index} topicColor={topic.color} variant={eventViewMode} visualMode={eventVisualMode} />
          ))}
        </div>
        {items.length === 0 && (
          <div className="rounded-3xl border bg-white py-14 text-center" style={{ borderColor: '#E2E8F0' }}>
            <p className="text-sm font-semibold" style={{ color: '#94A3B8' }}>{copy.detail.empty}</p>
          </div>
        )}
      </section>
    </div>
  );
}
