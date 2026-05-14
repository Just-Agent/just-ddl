import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, ArrowRight, Clock3, Database, FolderOpen, GitBranch, Languages, Pin, RadioTower, Search, Sparkles, Zap } from 'lucide-react';
import { topics, categories, getTopicById } from '@/data/topics';
import { getAllDDL, getDDLByTopic } from '@/data/ddl-data';
import { useSubscriptions } from '@/hooks/useSubscriptions';
import TopicCard from '@/components/TopicCard';
import { useLanguage } from '@/lib/language';

const dayMs = 24 * 60 * 60 * 1000;

function formatDistance(deadline: string, language: 'zh' | 'en') {
  const time = new Date(deadline).getTime();
  if (!Number.isFinite(time)) return '-';

  const days = Math.ceil((time - Date.now()) / dayMs);
  if (days < 0) return language === 'zh' ? '已过期' : 'past';
  if (days === 0) return language === 'zh' ? '今天' : 'today';
  return language === 'zh' ? `${days} 天后` : `in ${days}d`;
}

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('全部');
  const [search, setSearch] = useState('');
  const { subscribedIds } = useSubscriptions();
  const { language, copy, topicName, topicDescription, categoryName, tagName } = useLanguage();

  const allItems = useMemo(() => getAllDDL(), []);
  const topicMetrics = useMemo(() => {
    return new Map(topics.map(topic => {
      const items = getDDLByTopic(topic.id);
      const activeItems = items
        .filter(item => item.status !== 'ended')
        .sort((a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime());
      return [topic.id, {
        total: items.length || topic.itemCount,
        active: activeItems.length,
        next: activeItems[0],
        sources: new Set(items.map(item => item.source).filter(Boolean)).size,
      }];
    }));
  }, []);

  const filtered = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    return topics.filter(topic => {
      if (activeCategory !== '全部' && topic.category !== activeCategory) return false;
      if (!keyword) return true;

      const haystack = [
        topicName(topic),
        topicDescription(topic),
        topic.repo,
        topic.category,
        categoryName(topic.category),
        ...topic.tags,
        ...topic.tags.map(tagName),
      ].join(' ').toLowerCase();

      return haystack.includes(keyword);
    });
  }, [activeCategory, categoryName, search, tagName, topicDescription, topicName]);

  const activeDDL = allItems.filter(item => item.status !== 'ended').length;
  const featured = useMemo(() => {
    return [...topics]
      .sort((a, b) => {
        const left = topicMetrics.get(a.id);
        const right = topicMetrics.get(b.id);
        return (right?.active || 0) - (left?.active || 0) || (right?.total || 0) - (left?.total || 0);
      })
      .slice(0, 4);
  }, [topicMetrics]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
      <motion.section
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        className="overflow-hidden rounded-[28px] border text-white shadow-[0_24px_80px_-48px_rgba(15,23,42,0.8)]"
        style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 52%, #0F766E 100%)', borderColor: 'rgba(148,163,184,0.28)' }}
      >
        <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.08fr_0.92fr] lg:p-10">
          <div className="flex min-h-[420px] flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-amber-200">
                  <Sparkles size={13} /> JUST-DDL NETWORK
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-emerald-100">
                  <Languages size={13} /> {copy.home.manualLanguage}
                </span>
              </div>

              <h1 className="mt-7 max-w-3xl text-4xl font-black leading-[1.05] sm:text-6xl">
                {copy.home.title}
              </h1>
              <p className="mt-5 max-w-2xl text-lg font-medium leading-8 text-slate-100 sm:text-xl">
                {copy.home.heroLine}
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
                {copy.home.heroCopy}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { label: copy.home.topics, value: topics.length, icon: FolderOpen, color: '#FBBF24' },
                { label: copy.home.totalDeadlines, value: allItems.length, icon: Pin, color: '#FB7185' },
                { label: copy.home.activeDeadlines, value: activeDDL, icon: Zap, color: '#34D399' },
                { label: copy.home.categories, value: categories.length - 1, icon: Database, color: '#38BDF8' },
              ].map(stat => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="rounded-2xl border border-white/15 bg-white/[0.08] p-4 backdrop-blur">
                    <Icon size={17} style={{ color: stat.color }} />
                    <p className="mt-3 text-2xl font-black">{stat.value}</p>
                    <p className="mt-1 text-xs font-medium text-slate-300">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-3xl border border-white/15 bg-white/[0.08] p-4 backdrop-blur-md sm:p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-200">{copy.home.liveBoard}</p>
                <h2 className="mt-2 text-2xl font-black">{copy.home.featuredTitle}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-300">{copy.home.featuredCopy}</p>
              </div>
              <RadioTower className="mt-1 shrink-0 text-emerald-200" size={22} />
            </div>

            <div className="mt-6 space-y-3">
              {featured.map(topic => {
                const metrics = topicMetrics.get(topic.id);
                return (
                  <a
                    key={topic.id}
                    href={`#/topic/${topic.id}`}
                    className="group block rounded-2xl border border-white/10 bg-white/[0.09] p-4 transition hover:bg-white/[0.14]"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="h-2.5 w-2.5 rounded-full" style={{ background: topic.color }} />
                          <h3 className="truncate text-sm font-bold">{topicName(topic)}</h3>
                        </div>
                        <p className="mt-1 truncate text-xs text-slate-400">{topic.repo}</p>
                      </div>
                      <span className="rounded-full bg-emerald-300/15 px-2.5 py-1 text-[11px] font-bold text-emerald-200">
                        {copy.home.live}
                      </span>
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-2 text-xs">
                      <span className="rounded-xl bg-slate-950/25 px-3 py-2">
                        <strong className="block text-base text-white">{metrics?.active || 0}</strong>
                        <span className="text-slate-400">{copy.topicCard.active}</span>
                      </span>
                      <span className="rounded-xl bg-slate-950/25 px-3 py-2">
                        <strong className="block text-base text-white">{metrics?.sources || 0}</strong>
                        <span className="text-slate-400">{copy.home.sources}</span>
                      </span>
                      <span className="rounded-xl bg-slate-950/25 px-3 py-2">
                        <strong className="block truncate text-base text-white">{metrics?.next ? formatDistance(metrics.next.deadline, language) : '-'}</strong>
                        <span className="text-slate-400">{copy.home.next}</span>
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 text-xs font-semibold">
              <div className="rounded-2xl bg-white/[0.09] p-4 text-slate-200">
                <GitBranch className="mb-3 text-amber-200" size={17} />
                {copy.home.repoModel}
              </div>
              <div className="rounded-2xl bg-white/[0.09] p-4 text-slate-200">
                <Activity className="mb-3 text-emerald-200" size={17} />
                {copy.home.dataFlow}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <section className="mt-8 rounded-3xl border bg-white/90 p-4 shadow-sm" style={{ borderColor: '#E2E8F0' }}>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full lg:max-w-md">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: '#94A3B8' }} />
            <input
              value={search}
              onChange={event => setSearch(event.target.value)}
              placeholder={copy.home.searchPlaceholder}
              className="h-12 w-full rounded-2xl border bg-slate-50 pl-11 pr-4 text-sm font-medium outline-none transition-all focus:border-emerald-400 focus:bg-white"
              style={{ borderColor: '#CBD5E1', color: '#0F172A' }}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className="rounded-full px-4 py-2 text-xs font-bold transition-all"
                style={{
                  background: activeCategory === category ? '#0F172A' : '#F8FAFC',
                  color: activeCategory === category ? '#FFFFFF' : '#475569',
                  border: '1px solid',
                  borderColor: activeCategory === category ? '#0F172A' : '#E2E8F0',
                }}
              >
                {categoryName(category)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {subscribedIds.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 rounded-3xl border bg-white p-5 shadow-sm"
          style={{ borderColor: '#D1FAE5' }}
        >
          <h3 className="text-xs font-black uppercase tracking-[0.18em]" style={{ color: '#059669' }}>{copy.home.subscribedTitle}</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {subscribedIds.map(id => {
              const topic = getTopicById(id);
              if (!topic) return null;
              return (
                <a
                  key={id}
                  href={`#/topic/${id}`}
                  className="flex items-center gap-2 rounded-full border bg-white px-3 py-2 text-xs font-bold transition hover:-translate-y-0.5"
                  style={{ borderColor: '#D1FAE5', color: '#334155' }}
                >
                  <span className="h-2 w-2 rounded-full" style={{ background: topic.color }} /> {topicName(topic)}
                </a>
              );
            })}
          </div>
        </motion.section>
      )}

      <section className="mt-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em]" style={{ color: '#0F766E' }}>{copy.home.plazaTitle}</p>
            <h2 className="mt-2 text-2xl font-black" style={{ color: '#0F172A' }}>{copy.home.title}</h2>
          </div>
          <div className="hidden items-center gap-2 rounded-full border bg-white px-3 py-2 text-xs font-bold text-slate-500 sm:flex" style={{ borderColor: '#E2E8F0' }}>
            <Clock3 size={14} /> {activeDDL} {copy.home.activeDeadlines}
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((topic, index) => (
            <TopicCard key={topic.id} topic={topic} index={index} />
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="mt-12 rounded-3xl border bg-white py-14 text-center" style={{ borderColor: '#E2E8F0' }}>
            <Search size={34} className="mx-auto" style={{ color: '#CBD5E1' }} />
            <p className="mt-3 text-sm font-semibold" style={{ color: '#94A3B8' }}>{copy.home.noResults}</p>
          </div>
        )}
      </section>

      <section className="mt-12 overflow-hidden rounded-3xl border bg-white p-6 shadow-sm sm:p-8" style={{ borderColor: '#E2E8F0' }}>
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-xl font-black" style={{ color: '#0F172A' }}>{copy.home.ctaTitle}</h3>
            <p className="mt-2 max-w-2xl text-sm leading-6" style={{ color: '#64748B' }}>{copy.home.ctaCopy}</p>
          </div>
          <a
            href="https://github.com/Just-Agent/just-ddl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-black text-white transition hover:-translate-y-0.5"
            style={{ background: '#0F766E' }}
          >
            {copy.home.ctaAction}<ArrowRight size={16} />
          </a>
        </div>
      </section>
    </div>
  );
}
