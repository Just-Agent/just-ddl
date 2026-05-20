import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, ArrowRight, BookOpen, CheckCircle2, Clock3, Code2, Database, ExternalLink, FolderOpen, GitBranch, Languages, Pin, RadioTower, Search, Sparkles, Zap } from 'lucide-react';
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

  const heroStats = [
    { label: copy.home.topics, value: topics.length, icon: FolderOpen, color: '#D97706' },
    { label: copy.home.totalDeadlines, value: allItems.length, icon: Pin, color: '#E11D48' },
    { label: copy.home.activeDeadlines, value: activeDDL, icon: Zap, color: '#059669' },
    { label: copy.home.categories, value: categories.length - 1, icon: Database, color: '#0284C7' },
  ];

  const contributorGuide = language === 'zh'
    ? {
      eyebrow: '贡献者说明',
      title: '新增 DDL 专题，请先创建自己的 xxx-ddl 仓库',
      lead: '如果你要新增一个 DDL 专题，请先创建独立 xxx-ddl 仓库并发布 GitHub Pages，再向 Just-Agent/just-ddl 提交 PR 注册专题。Just-DDL Hub 不直接托管所有专题数据，而是接入各专题仓库的标准数据出口。',
      flow: ['创建独立仓库', '发布 GitHub Pages', '暴露 JSON 数据', 'PR 注册到 Hub'],
      modes: [
        { title: '修总站体验', desc: '主题广场、我的 DDL、小程序数据出口等，直接 PR Just-Agent/just-ddl。', icon: BookOpen },
        { title: '修已有专题', desc: '体育、电竞、期刊等已有专题，PR 对应的专题仓库。', icon: Code2 },
        { title: '新增完整专题', desc: '先在自己账号建 xxx-ddl，再 PR 到 Hub 只注册站点和数据出口。', icon: GitBranch },
      ],
      summaryImage: {
        src: 'assets/contributor-guide/justddl-three-modes-01.png',
        caption: '先看这一张总览图：默认外部联邦接入，fork 只是过渡工具，官方托管是成熟后的 ownership 转移。',
      },
      optionalGuides: [
        { title: '只想新增专题', desc: '看外部联邦节点：自己维护仓库，Hub 接入 Pages / JSON。', href: 'assets/contributor-guide/justddl-three-modes-02.png' },
        { title: '纠结要不要 fork', desc: '看 fork 镜像边界：fork 适合备份、审核和过渡，不等于官方托管。', href: 'assets/contributor-guide/justddl-three-modes-03.png' },
        { title: '专题成熟后托管', desc: '看官方 transfer：核心专题稳定后再转移到 Just-Agent 组织。', href: 'assets/contributor-guide/justddl-three-modes-04.png' },
        { title: '不熟悉 PR 流程', desc: '看通用开源 PR 流程：从 idea、分支、PR 到 review 与 merge。', href: 'assets/contributor-guide/open-source-pr-flow.jpg' },
      ],
      action: '提交注册 PR',
      docs: '打开完整教程',
    }
    : {
      eyebrow: 'Contributor Guide',
      title: 'New DDL topics should start as their own xxx-ddl repositories',
      lead: 'To add a new DDL topic, first create an independent xxx-ddl repository and publish GitHub Pages. Then open a PR to Just-Agent/just-ddl to register the topic. The Hub does not directly host every topic dataset; it consumes standard data exports from topic repositories.',
      flow: ['Create topic repo', 'Publish GitHub Pages', 'Expose JSON data', 'Register with Hub'],
      modes: [
        { title: 'Improve the Hub', desc: 'Topic Plaza, My DDL, mini-program data exports, and hub UX belong in Just-Agent/just-ddl.', icon: BookOpen },
        { title: 'Improve a topic', desc: 'Sports, esports, journals, and other existing domains should be changed in their topic repositories.', icon: Code2 },
        { title: 'Add a topic', desc: 'Create your own xxx-ddl repo first, then PR only the registration metadata into the Hub.', icon: GitBranch },
      ],
      summaryImage: {
        src: 'assets/contributor-guide/justddl-three-modes-01.png',
        caption: 'Start with this overview: external federation is the default, fork is a transition tool, and official hosting is a later ownership transfer.',
      },
      optionalGuides: [
        { title: 'Adding a topic', desc: 'Use external federation: maintain your repo, and let the Hub consume Pages / JSON.', href: 'assets/contributor-guide/justddl-three-modes-02.png' },
        { title: 'Fork or not', desc: 'Use the fork guide when you need backup, review, or transition. Fork is not official hosting.', href: 'assets/contributor-guide/justddl-three-modes-03.png' },
        { title: 'Official hosting', desc: 'Use transfer after a topic becomes stable and important enough for Just-Agent ownership.', href: 'assets/contributor-guide/justddl-three-modes-04.png' },
        { title: 'PR basics', desc: 'Use the general open-source PR flow if you are new to issues, branches, review, and merge.', href: 'assets/contributor-guide/open-source-pr-flow.jpg' },
      ],
      action: 'Open registration PR',
      docs: 'Open full guide',
    };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10">
      <motion.section
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch"
      >
        <div
          className="flex flex-col justify-between rounded-[28px] border p-6 shadow-sm sm:p-8"
          style={{
            background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 46%, #F0FDFA 100%)',
            borderColor: '#DCE7EF',
          }}
        >
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border bg-white px-3 py-1.5 text-xs font-black" style={{ borderColor: '#FEF3C7', color: '#B45309' }}>
                <Sparkles size={13} /> JUST-DDL NETWORK
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border bg-white px-3 py-1.5 text-xs font-bold" style={{ borderColor: '#D1FAE5', color: '#047857' }}>
                <Languages size={13} /> {copy.home.manualLanguage}
              </span>
            </div>

            <h1 className="mt-8 max-w-xl text-4xl font-black leading-[1.05] sm:text-5xl" style={{ color: '#0F172A' }}>
              {copy.home.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg font-bold leading-8 sm:text-xl" style={{ color: '#102033' }}>
              {copy.home.heroLine}
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-7" style={{ color: '#526174' }}>
              {copy.home.heroCopy}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => document.getElementById('plaza')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl px-5 text-sm font-black text-white transition hover:-translate-y-0.5"
                style={{ background: '#0F766E' }}
              >
                {copy.home.plazaTitle}<ArrowRight size={16} />
              </button>
              <a
                href="#/my"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl border bg-white px-5 text-sm font-black transition hover:-translate-y-0.5"
                style={{ borderColor: '#CBD5E1', color: '#0F172A' }}
              >
                {copy.nav.my}<Pin size={15} />
              </a>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-5 border-t pt-5 sm:grid-cols-4" style={{ borderColor: '#DCE7EF' }}>
            {heroStats.map(stat => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="min-w-0">
                  <Icon size={17} style={{ color: stat.color }} />
                  <p className="mt-2 text-2xl font-black" style={{ color: '#0F172A' }}>{stat.value}</p>
                  <p className="mt-1 text-xs font-bold" style={{ color: '#64748B' }}>{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-[28px] border bg-white p-5 shadow-sm sm:p-6" style={{ borderColor: '#D8E6E2' }}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em]" style={{ color: '#0F766E' }}>{copy.home.liveBoard}</p>
              <h2 className="mt-2 text-2xl font-black" style={{ color: '#0F172A' }}>{copy.home.featuredTitle}</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6" style={{ color: '#64748B' }}>{copy.home.featuredCopy}</p>
            </div>
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl" style={{ background: '#ECFDF5', color: '#0F766E' }}>
              <RadioTower size={20} />
            </div>
          </div>

          <div className="mt-5 divide-y divide-slate-200">
            {featured.map(topic => {
              const metrics = topicMetrics.get(topic.id);
              return (
                <a
                  key={topic.id}
                  href={`#/topic/${topic.id}`}
                  className="group grid gap-3 py-4 transition first:pt-0 last:pb-0 sm:grid-cols-[1fr_auto] sm:items-center"
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: topic.color }} />
                      <h3 className="truncate text-sm font-black" style={{ color: '#0F172A' }}>{topicName(topic)}</h3>
                      <span className="rounded-full px-2 py-0.5 text-[10px] font-black" style={{ background: '#ECFDF5', color: '#047857' }}>
                        {copy.home.live}
                      </span>
                    </div>
                    <p className="mt-1 truncate text-xs font-semibold" style={{ color: '#94A3B8' }}>{topic.repo}</p>
                  </div>

                  <div className="grid grid-cols-3 gap-3 rounded-2xl px-3 py-2 text-xs transition group-hover:bg-slate-50 sm:w-[320px]">
                    <span>
                      <strong className="block text-base font-black" style={{ color: '#0F172A' }}>{metrics?.active || 0}</strong>
                      <span style={{ color: '#64748B' }}>{copy.topicCard.active}</span>
                    </span>
                    <span>
                      <strong className="block text-base font-black" style={{ color: '#0F172A' }}>{metrics?.sources || 0}</strong>
                      <span style={{ color: '#64748B' }}>{copy.home.sources}</span>
                    </span>
                    <span>
                      <strong className="block truncate text-base font-black" style={{ color: '#0F172A' }}>{metrics?.next ? formatDistance(metrics.next.deadline, language) : '-'}</strong>
                      <span style={{ color: '#64748B' }}>{copy.home.next}</span>
                    </span>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-2xl border px-4 py-3 text-xs font-black" style={{ borderColor: '#FEF3C7', background: '#FFFBEB', color: '#92400E' }}>
              <GitBranch size={17} /> {copy.home.repoModel}
            </div>
            <div className="flex items-center gap-3 rounded-2xl border px-4 py-3 text-xs font-black" style={{ borderColor: '#D1FAE5', background: '#ECFDF5', color: '#047857' }}>
              <Activity size={17} /> {copy.home.dataFlow}
            </div>
          </div>
        </div>
      </motion.section>

      <section id="plaza" className="mt-8 rounded-3xl border bg-white/95 p-4 shadow-sm" style={{ borderColor: '#E2E8F0' }}>
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
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-black" style={{ background: '#EFF6FF', color: '#1D4ED8' }}>
              <GitBranch size={14} /> {contributorGuide.eyebrow}
            </p>
            <h3 className="mt-4 text-2xl font-black leading-tight" style={{ color: '#0F172A' }}>{contributorGuide.title}</h3>
            <p className="mt-3 text-sm font-semibold leading-7" style={{ color: '#475569' }}>{contributorGuide.lead}</p>
          </div>

          <div className="grid min-w-0 gap-2 sm:grid-cols-2 lg:w-[420px]">
            {contributorGuide.flow.map((item, index) => (
              <div key={item} className="flex items-center gap-2 rounded-2xl border bg-slate-50 px-3 py-2 text-xs font-black" style={{ borderColor: '#E2E8F0', color: '#334155' }}>
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] text-white" style={{ background: '#0F766E' }}>{index + 1}</span>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-3 lg:grid-cols-3">
          {contributorGuide.modes.map(mode => {
            const Icon = mode.icon;
            return (
              <div key={mode.title} className="rounded-3xl border p-5" style={{ borderColor: '#E2E8F0', background: '#F8FAFC' }}>
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl" style={{ background: '#ECFDF5', color: '#0F766E' }}>
                  <Icon size={20} />
                </div>
                <h4 className="mt-4 text-sm font-black" style={{ color: '#0F172A' }}>{mode.title}</h4>
                <p className="mt-2 text-xs leading-6" style={{ color: '#64748B' }}>{mode.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <figure className="overflow-hidden rounded-3xl border bg-white" style={{ borderColor: '#DBEAFE' }}>
            <img src={contributorGuide.summaryImage.src} alt={contributorGuide.title} loading="lazy" className="block w-full" />
            <figcaption className="border-t px-4 py-3 text-xs font-semibold leading-6" style={{ borderColor: '#DBEAFE', color: '#475569' }}>
              {contributorGuide.summaryImage.caption}
            </figcaption>
          </figure>

          <div className="rounded-3xl border bg-slate-50 p-5" style={{ borderColor: '#E2E8F0' }}>
            <h4 className="text-sm font-black" style={{ color: '#0F172A' }}>
              {language === 'zh' ? '图片很多，先看重点' : 'Many images, start with the key point'}
            </h4>
            <p className="mt-2 text-xs font-semibold leading-6" style={{ color: '#64748B' }}>
              {language === 'zh'
                ? '大多数贡献者只需要看左侧总览图和上面的文字规则。遇到具体问题时，再打开下面对应的图。'
                : 'Most contributors only need the overview image and the text rules above. Open a detailed image only when a specific question comes up.'}
            </p>
            <div className="mt-4 space-y-2">
              {contributorGuide.optionalGuides.map((guide, index) => (
                <a
                  key={guide.href}
                  href={guide.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 rounded-2xl border bg-white p-3 transition hover:-translate-y-0.5"
                  style={{ borderColor: '#E2E8F0' }}
                >
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-black text-white" style={{ background: index === 0 ? '#16A34A' : index === 1 ? '#F97316' : '#2563EB' }}>
                    {index + 1}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-black" style={{ color: '#0F172A' }}>{guide.title}</span>
                    <span className="mt-0.5 block text-[11px] font-semibold leading-5" style={{ color: '#64748B' }}>{guide.desc}</span>
                  </span>
                  <ExternalLink className="ml-auto mt-0.5 shrink-0 opacity-50 transition group-hover:opacity-100" size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 border-t pt-5 sm:flex-row sm:items-center sm:justify-between" style={{ borderColor: '#E2E8F0' }}>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 shrink-0" size={18} style={{ color: '#059669' }} />
            <p className="text-xs font-semibold leading-6" style={{ color: '#64748B' }}>
              {language === 'zh'
                ? 'Hub 只接入标准数据出口，不执行外部仓库脚本；外部联邦节点默认通过公开 JSON 和定时同步接入。'
                : 'The Hub consumes standard data exports and does not execute external repository scripts; external nodes are synced through public JSON by default.'}
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-2">
            <a
              href="#/contribute"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border bg-white px-4 py-2.5 text-xs font-black transition hover:-translate-y-0.5"
              style={{ borderColor: '#CBD5E1', color: '#0F172A' }}
            >
              {contributorGuide.docs}<ExternalLink size={14} />
            </a>
            <a
              href="https://github.com/Just-Agent/just-ddl/compare"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-2.5 text-xs font-black text-white transition hover:-translate-y-0.5"
              style={{ background: '#2563EB' }}
            >
              {contributorGuide.action}<ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      <section className="mt-8 overflow-hidden rounded-3xl border bg-white p-6 shadow-sm sm:p-8" style={{ borderColor: '#E2E8F0' }}>
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-xl font-black" style={{ color: '#0F172A' }}>{copy.home.ctaTitle}</h3>
            <p className="mt-2 max-w-2xl text-sm leading-6" style={{ color: '#64748B' }}>{copy.home.ctaCopy}</p>
          </div>
          <a
            href="https://github.com/Just-Agent/just-ddl/compare"
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


