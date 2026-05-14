import { motion } from 'framer-motion';
import { CalendarDays, MapPin, Globe, Star, ExternalLink, Database } from 'lucide-react';
import type { DDLItem } from '@/data/ddl-data';
import Countdown from './Countdown';
import { useSubscriptions } from '@/hooks/useSubscriptions';
import { useLanguage } from '@/lib/language';

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
  const { copy } = useLanguage();
  const subscribed = isSubscribed(item.id);
  const isGrid = variant === 'grid';

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
