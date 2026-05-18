import { motion } from 'framer-motion';
import { CalendarDays, MapPin, Globe, Star, ExternalLink, Database } from 'lucide-react';
import type { DDLItem } from '@/data/ddl-data';
import Countdown from './Countdown';
import { useCountdown } from '@/hooks/useCountdown';
import { useSubscriptions } from '@/hooks/useSubscriptions';
import { useLanguage } from '@/lib/language';

export type DDLCardVariant = 'list' | 'grid';
export type DDLCardVisualMode = 'vivid' | 'simple';

const sourcePreviewRules: Array<[RegExp, string]> = [
  [/bwfbadminton\.com\/calendar/i, 'bwf-calendar.png'],
  [/ittf\.com\/2026-events-calendar/i, 'ittf-2026-events.png'],
  [/worldtabletennis\.com\/eventslist/i, 'wtt-events.png'],
  [/majorleaguepickleball\.co/i, 'mlp-schedule.png'],
  [/ppatour\.com\/schedule/i, 'ppa-tour.png'],
  [/matchroompool\.com\/uk-open-pool-championship/i, 'matchroom-uk-open-pool.png'],
  [/nba\.com\/playoffs\/2026\/nba-finals/i, 'nba-finals.png'],
  [/fiba\.basketball\/en\/events\/fiba-u17-basketball-world-cup-2026/i, 'fiba-u17-world-cup.png'],
  [/fiba\.basketball\/en\/events\/fiba-womens-basketball-world-cup-2026/i, 'fiba-womens-world-cup.png'],
  [/fiba\.basketball\/en\/events\/?$/i, 'fiba-events.png'],
  [/poolplayers\.com\/world-pool-championships/i, 'apa-world-pool.png'],
  [/poolplayers\.com\/us-amateur-championship/i, 'apa-us-amateur.png'],
  [/worldathletics\.org\/competitions\/world-athletics-u20-championships/i, 'world-athletics-u20.png'],
  [/sydneymarathon\.com/i, 'sydney-marathon.png'],
  [/bmw-berlin-marathon\.com/i, 'berlin-marathon.png'],
  [/chicagomarathon\.com/i, 'chicago-marathon.png'],
  [/tcsnewyorkcitymarathon\.org/i, 'nyc-marathon.png'],
  [/waterfront\.co\.uk\/what-s-on\/betvictor-northern-ireland-open/i, 'northern-ireland-open-snooker.png'],
];

function sourcePreviewFor(item: DDLItem) {
  if (typeof item.previewImage === 'string' && item.previewImage) return item.previewImage;
  const sourceUrl = String(item.sourceUrl || item.url || '');
  const rule = sourcePreviewRules.find(([pattern]) => pattern.test(sourceUrl));
  if (rule) return `assets/source-previews/${rule[1]}`;
  return '';
}

function sourceLabelFor(item: DDLItem) {
  if (item.source) return item.source;
  try {
    return new URL(item.url).hostname.replace(/^www\./, '');
  } catch {
    return 'Official source';
  }
}

function hostLabelFor(item: DDLItem) {
  try {
    return new URL(String(item.sourceUrl || item.url)).hostname.replace(/^www\./, '');
  } catch {
    return sourceLabelFor(item);
  }
}

function sourceModeFor(item: DDLItem, language: 'zh' | 'en') {
  const sourceUrl = String(item.sourceUrl || item.url || '');
  const isSharedCalendar = [
    /bwfbadminton\.com\/calendar/i,
    /ittf\.com\/2026-events-calendar/i,
    /worldtabletennis\.com\/eventslist/i,
    /majorleaguepickleball\.co/i,
    /ppatour\.com\/schedule/i,
  ].some(pattern => pattern.test(sourceUrl));
  if (isSharedCalendar) return language === 'zh' ? '共享赛历' : 'Shared calendar';
  return language === 'zh' ? '官方页面' : 'Official page';
}

function VividCountdown({ deadline, topicColor }: { deadline: string; topicColor: string }) {
  const { days, hours, minutes, urgency } = useCountdown(deadline);
  const { language, copy } = useLanguage();
  const isEnded = urgency === 'ended';
  const labels = language === 'zh'
    ? { days: '天', hours: '小时', minutes: '分钟' }
    : { days: 'days', hours: 'hours', minutes: 'mins' };

  if (isEnded) {
    return (
      <span className="inline-flex self-start rounded-full bg-stone-100 px-3 py-1 text-xs font-black text-stone-400">
        {copy.ddl.ended}
      </span>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-2">
      {[
        { value: days, label: labels.days },
        { value: hours.toString().padStart(2, '0'), label: labels.hours },
        { value: minutes.toString().padStart(2, '0'), label: labels.minutes },
      ].map(unit => (
        <div
          key={unit.label}
          className="rounded-2xl border bg-slate-50 px-3 py-3"
          style={{ borderColor: `${topicColor}24` }}
        >
          <p className="text-2xl font-black leading-none" style={{ color: '#020617' }}>{unit.value}</p>
          <p className="mt-1 text-xs font-black" style={{ color: '#52627A' }}>{unit.label}</p>
        </div>
      ))}
    </div>
  );
}

function SourcePreview({
  item,
  topicColor,
  isGrid,
}: {
  item: DDLItem;
  topicColor: string;
  isGrid: boolean;
}) {
  const { copy, language } = useLanguage();
  const previewImage = sourcePreviewFor(item);
  const previewLabel = sourceLabelFor(item);
  const sourceMode = sourceModeFor(item, language);
  const hostLabel = hostLabelFor(item);

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative shrink-0 overflow-hidden border bg-slate-950 ${isGrid ? 'block h-44 w-full rounded-t-3xl border-x-0 border-t-0' : 'block h-28 w-full rounded-2xl sm:w-44'}`}
      style={{ borderColor: '#E2E8F0' }}
      aria-label={copy.ddl.official}
      title={copy.ddl.official}
    >
      {previewImage ? (
        <img
          src={previewImage}
          alt={`${previewLabel} preview`}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
          loading="lazy"
        />
      ) : (
        <div
          className="flex h-full w-full flex-col justify-between p-5"
          style={{ background: `linear-gradient(135deg, ${topicColor}, color-mix(in srgb, ${topicColor} 54%, #020617))` }}
        >
          <div className="text-[11px] font-black uppercase tracking-[0.18em] text-white/70">{hostLabel}</div>
          <div className="mb-12">
            <p className="line-clamp-2 text-2xl font-black leading-tight text-white">{previewLabel}</p>
            <p className="mt-2 line-clamp-1 text-xs font-semibold text-white/70">{item.title}</p>
          </div>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/64 via-slate-950/8 to-transparent" />
      <span className="absolute left-4 bottom-4 rounded-full bg-slate-950/78 px-3 py-1.5 text-xs font-black text-white shadow-sm">
        {sourceMode}
      </span>
      <span className="absolute bottom-4 left-[92px] max-w-[calc(100%-150px)] truncate rounded-full bg-white px-3 py-1.5 text-xs font-black shadow-sm" style={{ color: '#020617' }}>
        {previewLabel}
      </span>
      <span className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm" style={{ color: topicColor }}>
        <ExternalLink size={16} />
      </span>
    </a>
  );
}

export default function DDLCard({
  item,
  index,
  topicColor = '#F97316',
  topicLabel,
  variant = 'list',
  visualMode = 'vivid',
}: {
  item: DDLItem;
  index: number;
  topicColor?: string;
  topicLabel?: string;
  variant?: DDLCardVariant;
  visualMode?: DDLCardVisualMode;
}) {
  const { isSubscribed, toggle } = useSubscriptions();
  const { copy } = useLanguage();
  const subscribed = isSubscribed(item.id);
  const isGrid = variant === 'grid';
  const isVivid = visualMode === 'vivid';

  if (isVivid && isGrid) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.04, duration: 0.35 }}
        className="group flex min-h-[430px] flex-col overflow-hidden rounded-3xl border bg-white shadow-sm transition-all duration-200"
        style={{ borderColor: '#DCE6F3' }}
        whileHover={{ y: -3, boxShadow: `0 26px 70px -38px ${topicColor}` }}
      >
        <SourcePreview item={item} topicColor={topicColor} isGrid />
        <div className="flex flex-1 flex-col gap-4 p-5">
          {topicLabel && (
            <span className="inline-flex self-start rounded-full px-2 py-0.5 text-[10px] font-black" style={{ background: `${topicColor}12`, color: topicColor }}>
              {topicLabel}
            </span>
          )}
          <div className="flex flex-wrap items-center gap-2 text-xs font-black" style={{ color: '#52627A' }}>
            <span>{item.tags[0] || item.type || 'DDL'}</span>
            {item.stage && <span className="rounded-full px-2 py-1" style={{ background: `${topicColor}14`, color: topicColor }}>{item.stage}</span>}
            <span>{new Date(item.deadline).toLocaleDateString('zh-CN')}</span>
          </div>
          <h4 className="line-clamp-2 text-2xl font-black leading-tight" style={{ color: '#020617' }}>{item.title}</h4>
          <VividCountdown deadline={item.deadline} topicColor={topicColor} />
          {item.description && <p className="line-clamp-3 text-sm leading-7" style={{ color: '#52627A' }}>{item.description}</p>}
          <div className="flex flex-wrap gap-1.5">
            {item.tags.map(t => (
              <span key={t} className="rounded-full px-2.5 py-1 text-[11px] font-black" style={{ background: `${topicColor}12`, color: '#102033' }}>{t}</span>
            ))}
          </div>
          <div className="mt-auto flex flex-wrap items-center gap-2 pt-2">
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-2xl px-4 py-2 text-xs font-black text-white transition hover:-translate-y-0.5"
              style={{ background: topicColor }}
            >
              {copy.ddl.official} <ExternalLink size={13} />
            </a>
            <button
              onClick={() => toggle(item.id)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border transition hover:-translate-y-0.5"
              style={{ borderColor: subscribed ? topicColor : '#E2E8F0', background: subscribed ? `${topicColor}12` : '#FFFFFF' }}
              aria-label={subscribed ? copy.ddl.subscribed : copy.ddl.subscribe}
              title={subscribed ? copy.ddl.subscribed : copy.ddl.subscribe}
            >
              <Star size={14} style={{ color: subscribed ? topicColor : '#CBD5E1', fill: subscribed ? topicColor : 'none' }} />
            </button>
          </div>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04, duration: 0.35 }}
      className={`group flex flex-col gap-3 rounded-3xl border bg-white p-4 transition-all duration-200 ${isGrid ? 'min-h-[240px]' : 'sm:flex-row sm:items-center'}`}
      style={{ borderColor: '#E2E8F0' }}
      whileHover={{ boxShadow: `0 18px 48px -32px ${topicColor}` }}
    >
      {/* Left: status indicator */}
      <div className="hidden sm:block">
        <div className="h-2 w-2 rounded-full" style={{
          background: item.status === 'ended' ? '#D6D3D1' : topicColor,
          boxShadow: item.status === 'upcoming' ? `0 0 6px ${topicColor}50` : 'none',
        }} />
      </div>

      {isVivid && !isGrid && (
        <SourcePreview item={item} topicColor={topicColor} isGrid={false} />
      )}

      {/* Middle: info */}
      <div className="flex-1 min-w-0">
        {topicLabel && (
          <span className="mb-2 inline-flex rounded-full px-2 py-0.5 text-[10px] font-black" style={{ background: `${topicColor}12`, color: topicColor }}>
            {topicLabel}
          </span>
        )}
        <div className="flex items-center gap-2">
          <h4 className={`${isGrid ? 'line-clamp-2' : 'truncate'} min-w-0 text-sm font-semibold`} style={{ color: '#1C1917' }}>{item.title}</h4>
          {item.stage && <span className="shrink-0 rounded-full px-1.5 py-0.5 text-[10px] font-medium" style={{ background: topicColor + '12', color: topicColor }}>{item.stage}</span>}
          {item.status === 'ended' && <span className="shrink-0 rounded-full px-1.5 py-0.5 text-[10px] font-medium" style={{ background: '#F5F5F4', color: '#A8A29E' }}>{copy.ddl.ended}</span>}
        </div>
        {item.description && <p className={`mt-1 text-[11px] leading-relaxed ${isGrid ? 'line-clamp-3' : ''}`} style={{ color: '#78716C' }}>{item.description}</p>}
        <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px]" style={{ color: '#A8A29E' }}>
          <span className="flex items-center gap-1">{item.isOnline ? <Globe size={11} /> : <MapPin size={11} />}{item.location}</span>
          <span className="flex items-center gap-1"><CalendarDays size={11} />{item.dateRange}</span>
          {item.source && <span className="flex items-center gap-1"><Database size={11} />{item.source}</span>}
          {item.prize && <span style={{ color: '#F97316' }}>{item.prize}</span>}
        </div>
        <div className="mt-1.5 flex flex-wrap gap-1">
          {item.tags.map(t => <span key={t} className="rounded-md px-1.5 py-0.5 text-[10px]" style={{ background: '#FFF7ED', color: '#78716C' }}>{t}</span>)}
        </div>
      </div>

      {/* Right: countdown + actions */}
      <div className={`flex items-center gap-3 ${isGrid ? 'mt-auto justify-between border-t pt-3' : 'sm:justify-end'}`} style={isGrid ? { borderColor: '#F1F5F9' } : undefined}>
        <Countdown deadline={item.deadline} size={isGrid ? 'sm' : 'md'} />
        <div className="flex items-center gap-1">
          <button onClick={() => toggle(item.id)}
            className="flex h-7 w-7 items-center justify-center rounded-lg transition-all"
            style={{ background: subscribed ? `${topicColor}12` : '#F5F5F4' }}
            aria-label={subscribed ? copy.ddl.subscribed : copy.ddl.subscribe}
            title={subscribed ? copy.ddl.subscribed : copy.ddl.subscribe}>
            <Star size={13} style={{ color: subscribed ? topicColor : '#D6D3D1', fill: subscribed ? topicColor : 'none' }} />
          </button>
          <a href={item.url} target="_blank" rel="noopener noreferrer"
            className="flex h-7 w-7 items-center justify-center rounded-lg transition-all" style={{ background: '#F5F5F4', color: '#A8A29E' }}
            onMouseEnter={e => { e.currentTarget.style.background = topicColor + '12'; e.currentTarget.style.color = topicColor; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#F5F5F4'; e.currentTarget.style.color = '#A8A29E'; }}
            aria-label={copy.ddl.official}
            title={copy.ddl.official}>
            <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
