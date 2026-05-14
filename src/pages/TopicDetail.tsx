import { useMemo } from 'react';
import { Link, useParams } from 'react-router';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Bot,
  BookOpen,
  CalendarHeart,
  Code2,
  Database,
  ExternalLink,
  Eye,
  Github,
  GraduationCap,
  Layers,
  MessageSquare,
  RadioTower,
  Star,
  Trophy,
  type LucideIcon,
} from 'lucide-react';
import { getTopicById } from '@/data/topics';
import { getDDLByTopic } from '@/data/ddl-data';
import { useSubscriptions } from '@/hooks/useSubscriptions';
import DDLCard from '@/components/DDLCard';
import { useLanguage } from '@/lib/language';

const iconMap: Record<string, LucideIcon> = {
  Trophy, Bot, Eye, MessageSquare, GraduationCap, BookOpen, Code2, CalendarHeart, Layers,
};

export default function TopicDetail() {
  const { topicId } = useParams<{ topicId: string }>();
  const topic = getTopicById(topicId || '');
  const { isSubscribed, toggle } = useSubscriptions();
  const { copy, topicName, topicDescription, categoryName, tagName } = useLanguage();

  const items = useMemo(() => {
    if (!topicId) return [];
    return getDDLByTopic(topicId).sort((a, b) => {
      if (a.status === 'ended' && b.status !== 'ended') return 1;
      if (a.status !== 'ended' && b.status === 'ended') return -1;
      return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
    });
  }, [topicId]);

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
  const activeItems = items.filter(item => item.status !== 'ended');
  const nextItem = activeItems[0];
  const sourceCount = new Set(items.map(item => item.source).filter(Boolean)).size;

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10">
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

      <section className="mt-8 space-y-3">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-xl font-black" style={{ color: '#0F172A' }}>{copy.detail.allDeadlines}</h2>
          <span className="rounded-full border bg-white px-3 py-1.5 text-xs font-bold" style={{ borderColor: '#E2E8F0', color: '#64748B' }}>
            {activeItems.length} {copy.detail.active}
          </span>
        </div>
        {items.map((item, index) => (
          <DDLCard key={item.id} item={item} index={index} topicColor={topic.color} />
        ))}
        {items.length === 0 && (
          <div className="rounded-3xl border bg-white py-14 text-center" style={{ borderColor: '#E2E8F0' }}>
            <p className="text-sm font-semibold" style={{ color: '#94A3B8' }}>{copy.detail.empty}</p>
          </div>
        )}
      </section>
    </div>
  );
}
