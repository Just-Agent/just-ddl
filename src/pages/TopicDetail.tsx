import { useMemo } from 'react';
import { useParams, Link } from 'react-router';
import { motion } from 'framer-motion';
import { ArrowLeft, Trophy, Bot, Eye, MessageSquare, GraduationCap, Code2, CalendarHeart, Layers, Star, Github, ExternalLink } from 'lucide-react';
import { getTopicById } from '@/data/topics';
import { getDDLByTopic } from '@/data/ddl-data';
import { useSubscriptions } from '@/hooks/useSubscriptions';
import DDLCard from '@/components/DDLCard';

const iconMap: Record<string, typeof Trophy> = {
  Trophy, Bot, Eye, MessageSquare, GraduationCap, Code2, CalendarHeart, Layers,
};

export default function TopicDetail() {
  const { topicId } = useParams<{ topicId: string }>();
  const topic = getTopicById(topicId || '');
  const { isSubscribed, toggle } = useSubscriptions();

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
      <div className="mx-auto max-w-6xl px-4 py-12 text-center">
        <h2 className="text-lg font-bold" style={{ color: '#1C1917' }}>专题不存在</h2>
        <Link to="/" className="mt-4 inline-block text-sm" style={{ color: '#F97316' }}>返回专题广场</Link>
      </div>
    );
  }

  const Icon = iconMap[topic.icon] || Trophy;
  const subscribed = isSubscribed(topic.id);
  const activeItems = items.filter(d => d.status !== 'ended');
  const nextItem = activeItems[0];

  return (
    <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 sm:py-8">
      {/* Breadcrumb */}
      <Link to="/" className="inline-flex items-center gap-1 text-xs font-medium transition-colors" style={{ color: '#A8A29E' }}
        onMouseEnter={e => e.currentTarget.style.color = '#F97316'}
        onMouseLeave={e => e.currentTarget.style.color = '#A8A29E'}>
        <ArrowLeft size={12} /> 专题广场
      </Link>

      {/* Topic Header */}
      <motion.section initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mt-4 rounded-2xl border bg-white p-5 sm:p-6" style={{ borderColor: '#FED7AA' }}>
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl" style={{ background: `${topic.color}12`, color: topic.color }}>
            <Icon size={24} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-lg font-bold" style={{ color: '#1C1917' }}>{topic.name}</h1>
              <span className="rounded-full px-2 py-0.5 text-[10px] font-medium" style={{ background: `${topic.color}12`, color: topic.color }}>{topic.category}</span>
              <span className="rounded-full px-2 py-0.5 text-[10px] font-medium" style={{ background: topic.status === 'published' ? '#ECFDF5' : '#F5F5F4', color: topic.status === 'published' ? '#047857' : '#78716C' }}>
                {topic.status === 'published' ? '已发布' : 'Demo 已完善'}
              </span>
            </div>
            <p className="mt-1 text-xs" style={{ color: '#78716C' }}>{topic.description}</p>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <button onClick={() => toggle(topic.id)}
                className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all"
                style={{ background: subscribed ? '#FFF7ED' : '#F5F5F4', color: subscribed ? '#F97316' : '#78716C', border: subscribed ? '1px solid #F97316' : '1px solid transparent' }}>
                <Star size={12} style={{ fill: subscribed ? '#F97316' : 'none' }} /> {subscribed ? '已订阅' : '订阅专题'}
              </button>
              <a href={`https://github.com/${topic.repo}`} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition-all" style={{ borderColor: '#FED7AA', color: '#78716C' }}>
                <Github size={12} /> {topic.repo}
              </a>
              <a href={topic.site} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition-all" style={{ borderColor: '#FED7AA', color: topic.color }}>
                <ExternalLink size={12} /> GitHub Pages
              </a>
              <span className="text-xs" style={{ color: '#A8A29E' }}>{topic.itemCount} 个DDL · {items.filter(d => d.status !== 'ended').length} 个进行中</span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Tag pills */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {topic.tags.map(t => (
          <span key={t} className="rounded-md px-2 py-0.5 text-[10px] font-medium" style={{ background: '#FFF7ED', color: '#78716C' }}>{t}</span>
        ))}
      </div>

      <section className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div className="rounded-xl border bg-white p-3" style={{ borderColor: '#FED7AA' }}>
          <p className="text-[10px] font-medium uppercase tracking-wider" style={{ color: '#A8A29E' }}>Total</p>
          <p className="mt-1 text-lg font-bold" style={{ color: '#1C1917' }}>{items.length}</p>
        </div>
        <div className="rounded-xl border bg-white p-3" style={{ borderColor: '#FED7AA' }}>
          <p className="text-[10px] font-medium uppercase tracking-wider" style={{ color: '#A8A29E' }}>Active</p>
          <p className="mt-1 text-lg font-bold" style={{ color: topic.color }}>{activeItems.length}</p>
        </div>
        <div className="rounded-xl border bg-white p-3" style={{ borderColor: '#FED7AA' }}>
          <p className="text-[10px] font-medium uppercase tracking-wider" style={{ color: '#A8A29E' }}>Next</p>
          <p className="mt-1 truncate text-xs font-semibold" style={{ color: '#1C1917' }}>{nextItem?.stage || '暂无'}</p>
        </div>
        <div className="rounded-xl border bg-white p-3" style={{ borderColor: '#FED7AA' }}>
          <p className="text-[10px] font-medium uppercase tracking-wider" style={{ color: '#A8A29E' }}>Sources</p>
          <p className="mt-1 text-lg font-bold" style={{ color: '#1C1917' }}>{new Set(items.map(i => i.source).filter(Boolean)).size}</p>
        </div>
      </section>

      {/* DDL List */}
      <section className="mt-6 space-y-3">
        <h2 className="text-sm font-bold" style={{ color: '#1C1917' }}>全部截止日</h2>
        {items.map((item, i) => (
          <DDLCard key={item.id} item={item} index={i} topicColor={topic.color} />
        ))}
        {items.length === 0 && (
          <div className="rounded-2xl border py-12 text-center" style={{ background: 'white', borderColor: '#FED7AA' }}>
            <p className="text-sm" style={{ color: '#A8A29E' }}>暂无数据</p>
          </div>
        )}
      </section>
    </div>
  );
}
