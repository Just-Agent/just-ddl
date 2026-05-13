import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Pin, Zap, FolderOpen, ArrowRight } from 'lucide-react';
import { topics, categories, getTopicById } from '@/data/topics';
import { getAllDDL } from '@/data/ddl-data';
import { useSubscriptions } from '@/hooks/useSubscriptions';
import TopicCard from '@/components/TopicCard';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('全部');
  const [search, setSearch] = useState('');
  const { subscribedIds } = useSubscriptions();

  const filtered = useMemo(() => {
    return topics.filter(t => {
      if (activeCategory !== '全部' && t.category !== activeCategory) return false;
      if (search && !t.name.toLowerCase().includes(search.toLowerCase()) && !t.description.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });
  }, [activeCategory, search]);

  const totalDDL = getAllDDL().length;
  const activeDDL = getAllDDL().filter(d => d.status !== 'ended').length;

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      {/* Hero */}
      <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="rounded-3xl border px-6 py-10 sm:px-10 sm:py-14" style={{ background: 'linear-gradient(135deg, #FFF7ED 0%, #FFFAF5 50%, #FFF1F2 100%)', borderColor: '#FED7AA' }}>
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium" style={{ borderColor: '#FED7AA', color: '#F97316', background: '#FFF7ED' }}>
            <Zap size={12} /> {activeDDL} 个活跃截止日
          </span>
        </div>
        <h1 className="mt-4 text-2xl font-bold leading-tight sm:text-4xl" style={{ color: '#1C1917' }}>
          发现你关心的<span style={{ color: '#F97316' }}>截止日</span>
        </h1>
        <p className="mt-3 max-w-lg text-sm leading-relaxed" style={{ color: '#78716C' }}>
          一专题一仓库，覆盖黑客松、AI Agent、学术会议、编程竞赛、节假日等8大领域。订阅收藏，再不遗漏任何一个DDL。
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <div className="flex items-center gap-2 rounded-xl border px-4 py-2" style={{ borderColor: '#FED7AA', background: 'white' }}>
            <FolderOpen size={14} style={{ color: '#F97316' }} />
            <span className="text-xs font-medium" style={{ color: '#78716C' }}><strong style={{ color: '#1C1917' }}>{topics.length}</strong> 个专题</span>
          </div>
          <div className="flex items-center gap-2 rounded-xl border px-4 py-2" style={{ borderColor: '#FED7AA', background: 'white' }}>
            <Pin size={14} style={{ color: '#F43F5E' }} />
            <span className="text-xs font-medium" style={{ color: '#78716C' }}><strong style={{ color: '#1C1917' }}>{totalDDL}</strong> 个DDL</span>
          </div>
          <div className="flex items-center gap-2 rounded-xl border px-4 py-2" style={{ borderColor: '#FED7AA', background: 'white' }}>
            <span className="text-xs font-medium" style={{ color: '#78716C' }}><strong style={{ color: '#1C1917' }}>{categories.length - 1}</strong> 个分类</span>
          </div>
        </div>
      </motion.section>

      {/* Search + Category filter */}
      <section className="mt-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative max-w-xs">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: '#A8A29E' }} />
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="搜索专题..."
              className="h-9 w-full rounded-xl border bg-white pl-8 pr-3 text-xs outline-none transition-all focus:border-orange-300"
              style={{ borderColor: '#FED7AA', color: '#1C1917' }} />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(c => (
              <button key={c} onClick={() => setActiveCategory(c)}
                className="rounded-full px-3 py-1.5 text-xs font-medium transition-all"
                style={{
                  background: activeCategory === c ? '#F97316' : 'white',
                  color: activeCategory === c ? '#FFFFFF' : '#78716C',
                  border: '1px solid',
                  borderColor: activeCategory === c ? '#F97316' : '#FED7AA',
                }}>
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribed topics highlight */}
      {subscribedIds.length > 0 && (
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-6 rounded-2xl border p-4" style={{ background: '#FFF7ED', borderColor: '#FED7AA' }}>
          <h3 className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#F97316' }}>已订阅专题</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {subscribedIds.map(id => {
              const t = getTopicById(id);
              if (!t) return null;
              return (
                <a key={id} href={`#/topic/${id}`} className="flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition-all" style={{ borderColor: '#FED7AA', color: '#78716C', background: 'white' }}>
                  <span className="h-2 w-2 rounded-full" style={{ background: t.color }} /> {t.name}
                </a>
              );
            })}
          </div>
        </motion.section>
      )}

      {/* Topic Grid */}
      <section className="mt-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {filtered.map((topic, i) => (
            <TopicCard key={topic.id} topic={topic} index={i} />
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="mt-12 text-center">
            <Search size={32} className="mx-auto" style={{ color: '#D6D3D1' }} />
            <p className="mt-3 text-sm" style={{ color: '#A8A29E' }}>没有找到匹配的专题</p>
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="mt-12 rounded-2xl border px-6 py-8 text-center" style={{ background: '#FFF7ED', borderColor: '#FED7AA' }}>
        <h3 className="text-base font-bold" style={{ color: '#1C1917' }}>没找到想要的专题？</h3>
        <p className="mt-2 text-xs" style={{ color: '#78716C' }}>我们采用一专题一仓库架构，你可以申请新开一个独立仓库</p>
        <a href="https://github.com/Just-Agent/just-ddl" target="_blank" rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1 rounded-xl px-5 py-2 text-xs font-medium text-white transition-all"
          style={{ background: '#F97316' }}
          onMouseEnter={e => e.currentTarget.style.background = '#EA580C'}
          onMouseLeave={e => e.currentTarget.style.background = '#F97316'}>
          申请新专题 <ArrowRight size={12} />
        </a>
      </section>
    </div>
  );
}
