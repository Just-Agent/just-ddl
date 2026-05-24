import { useMemo } from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BriefcaseBusiness,
  Bot,
  BookOpen,
  CalendarHeart,
  Clapperboard,
  Clock3,
  Code2,
  Database,
  ExternalLink,
  Eye,
  Gamepad2,
  GraduationCap,
  Layers,
  Medal,
  MessageSquare,
  Music,
  RadioTower,
  Scale,
  Car,
  Smartphone,
  Star,
  Trophy,
  type LucideIcon,
} from 'lucide-react';
import type { Topic } from '@/data/topics';
import { getDDLByTopic } from '@/data/ddl-data';
import { useSubscriptions } from '@/hooks/useSubscriptions';
import { useLanguage } from '@/lib/language';
import { compareDDLItems, formatRelativeDeadline, isActiveDeadlineItem } from '@/lib/ddl';

const iconMap: Record<string, LucideIcon> = {
  Trophy, Bot, Eye, MessageSquare, GraduationCap, BookOpen, Code2, CalendarHeart, Layers, Medal, Gamepad2, Music, Clapperboard, Smartphone, Car, Scale, BriefcaseBusiness,
};

function topicStatus(topic: Topic, language: 'zh' | 'en') {
  if (topic.status === 'incubating') {
    return {
      dot: '#F97316',
      background: '#FFEDD5',
      color: '#C2410C',
      label: language === 'zh' ? '孵化中' : 'incubating',
    };
  }
  if (topic.status === 'published') {
    return {
      dot: '#10B981',
      background: '#DCFCE7',
      color: '#047857',
      label: language === 'zh' ? '在线' : copyFallbackPublished(language),
    };
  }
  return {
    dot: '#F59E0B',
    background: '#FEF3C7',
    color: '#92400E',
    label: language === 'zh' ? '筹备中' : 'demo',
  };
}

function copyFallbackPublished(language: 'zh' | 'en') {
  return language === 'zh' ? '在线' : 'live';
}

function topicSourceLabel(topic: Topic, language: 'zh' | 'en') {
  if (topic.sourceMode === 'incubator') return language === 'zh' ? 'Hub 孵化区' : 'Hub incubator';
  if (topic.sourceMode === 'cluster') {
    const suffix = language === 'zh' ? '专题族' : 'topic family';
    return `${topic.repo} · ${suffix}`;
  }
  return topic.repo;
}

export default function TopicCard({ topic, index }: { topic: Topic; index: number }) {
  const { isSubscribed, toggle } = useSubscriptions();
  const { language, copy, topicName, topicDescription, categoryName, tagName } = useLanguage();
  const subscribed = isSubscribed(topic.id);
  const Icon = iconMap[topic.icon] || Trophy;
  const status = topicStatus(topic, language);

  const metrics = useMemo(() => {
    const items = getDDLByTopic(topic.id);
    const activeItems = items
      .filter(isActiveDeadlineItem)
      .sort(compareDDLItems);

    return {
      total: items.length || topic.itemCount,
      active: activeItems.length,
      next: activeItems[0],
      sources: new Set(items.map(item => item.source).filter(Boolean)).size,
    };
  }, [topic.id, topic.itemCount]);

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.045, duration: 0.35 }}
      whileHover={{ y: -4, boxShadow: `0 20px 48px -28px ${topic.color}` }}
      className="group relative overflow-hidden rounded-3xl border bg-white transition-all duration-300"
      style={{ borderColor: '#E2E8F0' }}
    >
      <div className="absolute inset-x-0 top-0 h-24" style={{ background: `linear-gradient(135deg, ${topic.color}24, transparent 70%)` }} />
      <div className="relative p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl" style={{ background: `${topic.color}16`, color: topic.color }}>
              <Icon size={23} />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="truncate text-lg font-black" style={{ color: '#0F172A' }}>{topicName(topic)}</h3>
                <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: status.dot }} />
              </div>
              <p className="mt-1 truncate text-xs font-semibold" style={{ color: '#64748B' }}>
                {topicSourceLabel(topic, language)}
              </p>
            </div>
          </div>

          <button
            onClick={(event) => { event.preventDefault(); event.stopPropagation(); toggle(topic.id); }}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl border transition-all"
            style={{
              background: subscribed ? `${topic.color}12` : 'white',
              borderColor: subscribed ? topic.color : '#E2E8F0',
            }}
            aria-label={subscribed ? copy.topicCard.subscribed : copy.topicCard.subscribe}
            title={subscribed ? copy.topicCard.subscribed : copy.topicCard.subscribe}
          >
            <Star size={16} style={{ color: subscribed ? topic.color : '#CBD5E1', fill: subscribed ? topic.color : 'none' }} />
          </button>
        </div>

        <p className="mt-4 min-h-[48px] text-sm leading-6" style={{ color: '#475569' }}>{topicDescription(topic)}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          <span className="rounded-full px-2.5 py-1 text-[11px] font-bold" style={{ background: '#F1F5F9', color: '#334155' }}>
            {categoryName(topic.category)}
          </span>
          {topic.tags.slice(0, 4).map(tag => (
            <span key={tag} className="rounded-full px-2.5 py-1 text-[11px] font-semibold" style={{ background: `${topic.color}10`, color: '#475569' }}>
              {tagName(tag)}
            </span>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-3 gap-2">
          <div className="rounded-2xl border bg-slate-50 p-3" style={{ borderColor: '#E2E8F0' }}>
            <RadioTower size={14} style={{ color: topic.color }} />
            <p className="mt-2 text-lg font-black" style={{ color: '#0F172A' }}>{metrics.active}</p>
            <p className="text-[11px] font-bold" style={{ color: '#64748B' }}>{copy.topicCard.active}</p>
          </div>
          <div className="rounded-2xl border bg-slate-50 p-3" style={{ borderColor: '#E2E8F0' }}>
            <Database size={14} style={{ color: topic.color }} />
            <p className="mt-2 text-lg font-black" style={{ color: '#0F172A' }}>{metrics.sources}</p>
            <p className="text-[11px] font-bold" style={{ color: '#64748B' }}>{copy.topicCard.sources}</p>
          </div>
          <div className="rounded-2xl border bg-slate-50 p-3" style={{ borderColor: '#E2E8F0' }}>
            <Clock3 size={14} style={{ color: topic.color }} />
            <p className="mt-2 truncate text-lg font-black" style={{ color: '#0F172A' }}>
              {metrics.next ? formatRelativeDeadline(metrics.next, language) : '-'}
            </p>
            <p className="text-[11px] font-bold" style={{ color: '#64748B' }}>{copy.topicCard.next}</p>
          </div>
        </div>

        <div className="mt-5 rounded-2xl border bg-white p-3" style={{ borderColor: '#E2E8F0' }}>
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="text-[11px] font-black uppercase tracking-[0.16em]" style={{ color: '#94A3B8' }}>{copy.topicCard.next}</p>
              <p className="mt-1 truncate text-sm font-bold" style={{ color: '#0F172A' }}>
                {metrics.next?.title || copy.topicCard.noUpcoming}
              </p>
            </div>
            <span className="shrink-0 rounded-full px-2.5 py-1 text-[11px] font-black" style={{ background: status.background, color: status.color }}>
              {topic.status === 'published' ? copy.topicCard.published : status.label}
            </span>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-[1fr_auto] gap-2">
          <Link
            to={`/topic/${topic.id}`}
            className="flex h-11 items-center justify-center gap-2 rounded-2xl text-sm font-black text-white transition hover:-translate-y-0.5"
            style={{ background: topic.color }}
          >
            {copy.topicCard.open}<ArrowRight size={15} />
          </Link>
          <a
            href={topic.site}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-2xl border bg-white transition hover:-translate-y-0.5"
            style={{ borderColor: '#E2E8F0', color: topic.color }}
            aria-label={`${topicName(topic)} ${copy.topicCard.pages}`}
            title={copy.topicCard.pages}
          >
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
