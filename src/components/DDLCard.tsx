import { motion } from 'framer-motion';
import { CalendarDays, MapPin, Globe, Star, ExternalLink, Database } from 'lucide-react';
import type { DDLItem } from '@/data/ddl-data';
import Countdown from './Countdown';
import { useSubscriptions } from '@/hooks/useSubscriptions';
import { useLanguage } from '@/lib/language';

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

export default function DDLCard({
  item,
  index,
  topicColor = '#F97316',
  topicLabel,
  variant = 'list',
}: {
  item: DDLItem;
  index: number;
  topicColor?: string;
  topicLabel?: string;
  variant?: 'list' | 'grid';
}) {
  const { isSubscribed, toggle } = useSubscriptions();
  const { copy, language } = useLanguage();
  const subscribed = isSubscribed(item.id);
  const isGrid = variant === 'grid';
  const previewImage = sourcePreviewFor(item);
  const previewLabel = sourceLabelFor(item);
  const sourceMode = sourceModeFor(item, language);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04, duration: 0.35 }}
      className={`group flex flex-col gap-3 rounded-3xl border bg-white p-4 transition-all duration-200 ${isGrid ? 'min-h-[282px]' : 'sm:flex-row sm:items-center'}`}
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

      {previewImage && (
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`relative shrink-0 overflow-hidden rounded-2xl border bg-slate-100 ${isGrid ? 'h-32 w-full' : 'h-28 w-full sm:w-44'}`}
          style={{ borderColor: '#E2E8F0' }}
          aria-label={copy.ddl.official}
          title={copy.ddl.official}
        >
          <img src={previewImage} alt={`${previewLabel} preview`} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]" loading="lazy" />
          <span className="absolute left-2 top-2 rounded-full bg-white/90 px-2 py-1 text-[10px] font-black shadow-sm" style={{ color: topicColor }}>
            {previewLabel}
          </span>
          <span className="absolute bottom-2 left-2 rounded-full bg-slate-950/80 px-2 py-1 text-[10px] font-black text-white shadow-sm">
            {sourceMode}
          </span>
          <span className="absolute bottom-2 right-2 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 shadow-sm" style={{ color: topicColor }}>
            <ExternalLink size={13} />
          </span>
        </a>
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
