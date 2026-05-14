import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { Trophy, Bot, Eye, MessageSquare, GraduationCap, Code2, CalendarHeart, Layers, ArrowRight, Star, ExternalLink } from 'lucide-react';
import type { Topic } from '@/data/topics';
import { useSubscriptions } from '@/hooks/useSubscriptions';

const iconMap: Record<string, typeof Trophy> = {
  Trophy, Bot, Eye, MessageSquare, GraduationCap, Code2, CalendarHeart, Layers,
};

export default function TopicCard({ topic, index }: { topic: Topic; index: number }) {
  const { isSubscribed, toggle } = useSubscriptions();
  const subscribed = isSubscribed(topic.id);
  const Icon = iconMap[topic.icon] || Trophy;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      whileHover={{ y: -3, boxShadow: `0 8px 30px -8px ${topic.color}18` }}
      className="group relative overflow-hidden rounded-2xl border bg-white transition-all duration-300"
      style={{ borderColor: '#FED7AA' }}
    >
      {/* Color bar */}
      <div className="h-1 w-full" style={{ background: topic.color }} />

      <div className="p-5">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: `${topic.color}12`, color: topic.color }}>
              <Icon size={20} />
            </div>
            <div>
              <h3 className="text-sm font-bold" style={{ color: '#1C1917' }}>{topic.name}</h3>
              <span className="text-[11px]" style={{ color: '#A8A29E' }}>{topic.repo}</span>
            </div>
          </div>
          <button
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggle(topic.id); }}
            className="flex h-8 w-8 items-center justify-center rounded-lg transition-all"
            style={{ background: subscribed ? '#FFF7ED' : 'transparent', border: subscribed ? '1px solid #F97316' : '1px solid transparent' }}
          >
            <Star size={15} style={{ color: subscribed ? '#F97316' : '#D6D3D1', fill: subscribed ? '#F97316' : 'none' }} />
          </button>
        </div>

        <p className="mt-3 text-xs leading-relaxed" style={{ color: '#78716C' }}>{topic.description}</p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {topic.tags.map(t => (
            <span key={t} className="rounded-md px-2 py-0.5 text-[10px] font-medium" style={{ background: '#FFF7ED', color: '#78716C' }}>{t}</span>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between border-t pt-3" style={{ borderColor: '#F5F5F4' }}>
          <span className="text-[11px] font-medium" style={{ color: '#A8A29E' }}>{topic.itemCount} 个DDL</span>
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-medium" style={{ color: topic.color }}>{topic.category}</span>
            <span className="rounded-full px-1.5 py-0.5 text-[10px] font-medium" style={{ background: topic.status === 'published' ? '#ECFDF5' : '#F5F5F4', color: topic.status === 'published' ? '#047857' : '#78716C' }}>
              {topic.status === 'published' ? '已发布' : '骨架'}
            </span>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-[1fr_auto] gap-2">
          <Link to={`/topic/${topic.id}`}
            className="flex items-center justify-center gap-1 rounded-xl py-2 text-xs font-medium transition-all"
            style={{ background: '#FFF7ED', color: '#F97316' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#F97316'; e.currentTarget.style.color = '#FFFFFF'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#FFF7ED'; e.currentTarget.style.color = '#F97316'; }}>
            查看全部 <ArrowRight size={12} />
          </Link>
          <a href={topic.site} target="_blank" rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-xl border transition-all"
            style={{ borderColor: '#FED7AA', color: topic.color }}
            aria-label={`${topic.name} GitHub Pages`}>
            <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
