import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, ArrowRight, BookOpen, CheckCircle2, Clock3, Code2, Database, ExternalLink, FolderOpen, GitBranch, Languages, Pin, RadioTower, Search, Sparkles, Zap } from 'lucide-react';
import { topics, categories, getTopicById } from '@/data/topics';
import type { DDLItem } from '@/data/ddl-data';
import { loadAllDDL } from '@/data/ddl-runtime';
import { useSubscriptions } from '@/hooks/useSubscriptions';
import TopicCard from '@/components/TopicCard';
import { useLanguage } from '@/lib/language';
import { compareDDLItems, ddlItemTime, formatItemDate, formatRelativeDeadlineLong, hasOfficialDeadline, isActiveDeadlineItem } from '@/lib/ddl';

const DAY_MS = 24 * 60 * 60 * 1000;

function topicForItem(item: DDLItem) {
  const explicitTopicId = typeof item.topicId === 'string' ? item.topicId : '';
  if (explicitTopicId) return getTopicById(explicitTopicId);
  return topics.find(topic => item.id === topic.id || item.id.startsWith(`${topic.id}-`));
}

function isSameLocalDay(time: number, base = new Date()) {
  const date = new Date(time);
  return date.getFullYear() === base.getFullYear()
    && date.getMonth() === base.getMonth()
    && date.getDate() === base.getDate();
}

function isWithinDays(item: DDLItem, days: number, now: number) {
  if (!hasOfficialDeadline(item)) return false;
  const time = ddlItemTime(item);
  return time >= now && time <= now + days * DAY_MS;
}

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('全部');
  const [search, setSearch] = useState('');
  const [now] = useState(() => Date.now());
  const { subscribedIds } = useSubscriptions();
  const { language, copy, topicName, topicDescription, categoryName, tagName } = useLanguage();
  const [allItems, setAllItems] = useState<DDLItem[]>([]);

  useEffect(() => {
    let isCurrent = true;
    loadAllDDL().then((items) => {
      if (isCurrent) setAllItems(items);
    });
    return () => {
      isCurrent = false;
    };
  }, []);

  const topicMetrics = useMemo(() => {
    const byTopic = new Map<string, DDLItem[]>();
    for (const item of allItems) {
      const itemTopicId = typeof item.topicId === 'string' && item.topicId ? item.topicId : '';
      if (!itemTopicId) continue;
      const group = byTopic.get(itemTopicId) || [];
      group.push(item);
      byTopic.set(itemTopicId, group);
    }

    return new Map(topics.map(topic => {
      const items = byTopic.get(topic.id) || [];
      const activeItems = items
        .filter(isActiveDeadlineItem)
        .sort(compareDDLItems);
      return [topic.id, {
        total: items.length || topic.itemCount,
        active: activeItems.length,
        next: activeItems[0],
        sources: new Set(items.map(item => item.source).filter(Boolean)).size,
      }];
    }));
  }, [allItems]);

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

  const activeDDL = allItems.filter(isActiveDeadlineItem).length;
  const activeOfficialItems = useMemo(() => (
    allItems
      .filter(item => isActiveDeadlineItem(item) && hasOfficialDeadline(item))
      .sort(compareDDLItems)
  ), [allItems]);
  const todayItems = useMemo(() => (
    activeOfficialItems
      .filter(item => isSameLocalDay(ddlItemTime(item)))
      .slice(0, 5)
  ), [activeOfficialItems]);
  const riskItems = useMemo(() => (
    activeOfficialItems
      .filter(item => isWithinDays(item, 7, now))
      .slice(0, 5)
  ), [activeOfficialItems, now]);
  const featured = useMemo(() => {
    return [...topics]
      .sort((a, b) => {
        const left = topicMetrics.get(a.id);
        const right = topicMetrics.get(b.id);
        return (right?.active || 0) - (left?.active || 0) || (right?.total || 0) - (left?.total || 0);
      })
      .slice(0, 4);
  }, [topicMetrics]);
  const heatTopics = useMemo(() => {
    return [...topics]
      .map(topic => {
        const metrics = topicMetrics.get(topic.id);
        const nextTime = metrics?.next ? ddlItemTime(metrics.next) : Number.MAX_SAFE_INTEGER;
        const days = Number.isFinite(nextTime) ? Math.max(0, Math.ceil((nextTime - now) / DAY_MS)) : 9999;
        const urgency = days <= 7 ? 24 : days <= 30 ? 12 : days <= 90 ? 4 : 0;
        const score = (metrics?.active || 0) * 3 + (metrics?.sources || 0) * 5 + urgency;
        return { topic, metrics, score };
      })
      .sort((a, b) => b.score - a.score || (b.metrics?.active || 0) - (a.metrics?.active || 0))
      .slice(0, 6);
  }, [now, topicMetrics]);

  const heroStats = [
    { label: copy.home.topics, value: topics.length, icon: FolderOpen, color: '#D97706' },
    { label: copy.home.totalDeadlines, value: allItems.length || topics.reduce((sum, topic) => sum + topic.itemCount, 0), icon: Pin, color: '#E11D48' },
    { label: copy.home.activeDeadlines, value: activeDDL, icon: Zap, color: '#059669' },
    { label: copy.home.categories, value: categories.length - 1, icon: Database, color: '#0284C7' },
  ];

  const spotlightCopy = language === 'zh'
    ? {
      todayTitle: '今日到期展示台',
      todayCopy: '只显示官方精确日期的节点，不把预测窗口、历史节点或个人本地 DDL 混进来。',
      noToday: '今天暂无官方 DDL 到期',
      riskTitle: '近期风险',
      riskCopy: '未来 7 天内即将到来的官方 DDL，适合每天扫一眼。',
      noRisk: '未来 7 天暂无高风险节点',
      heatTitle: '数据热度',
      heatCopy: '按活跃条目、来源数和最近节点排序，不代表真实用户点击热度。',
      open: '查看',
      official: '官方 DDL',
      method: '透明排序',
    }
    : {
      todayTitle: 'Today Board',
      todayCopy: 'Only official date-level deadlines are shown here. Forecasts, history, and local personal DDL stay out.',
      noToday: 'No official DDL due today',
      riskTitle: 'Near-Term Risk',
      riskCopy: 'Official deadlines arriving in the next 7 days for quick daily scanning.',
      noRisk: 'No high-risk official nodes in 7 days',
      heatTitle: 'Data Heat',
      heatCopy: 'Ranked by active items, source count, and nearest node. It is not user click popularity.',
      open: 'Open',
      official: 'Official DDL',
      method: 'Transparent ranking',
    };

  const contributorGuide = language === 'zh'
    ? {
      eyebrow: '贡献者说明',
      title: '贡献前先选对仓库',
      lead: 'Just-DDL 是联邦式多仓库网络：总站、子专题、新专题各有不同 PR 入口。先判断你要改哪一层，再提交到对应仓库。',
      flow: ['修总站', '修子专题', '新增专题'],
      modes: [
        { title: '修总站', desc: '主题广场、我的 DDL、导航、Hub 汇总逻辑、小程序数据出口等，PR Just-Agent/just-ddl。', icon: BookOpen, href: 'https://github.com/Just-Agent/just-ddl/compare', action: '提交 Hub PR' },
        { title: '修子专题', desc: '体育、电竞、期刊、节假日等已有专题的数据、页面、crawler 和 Actions，PR 对应专题仓库。', icon: Code2, href: 'https://github.com/Just-Agent', action: '找专题仓库' },
        { title: '新增专题', desc: '新手可先进 Hub 孵化区；长期维护的专题仍推荐独立 xxx-ddl 仓库再注册到 Hub。', icon: GitBranch, href: '#/contribute', action: '查看接入教程' },
      ],
      summaryImage: {
        src: 'assets/contributor-guide/open-source-pr-flow.jpg',
        caption: '常规开源 PR 操作图：从 idea、fork/分支、提交 PR、review 到合并。新增专题的专门规范请进入“接入教程”。',
      },
      action: '提交注册 PR',
      docs: '打开完整教程',
    }
    : {
      eyebrow: 'Contributor Guide',
      title: 'Choose the right repository before contributing',
      lead: 'Just-DDL is a federated multi-repository network. Hub work, topic work, and new-topic onboarding use different PR paths.',
      flow: ['Improve Hub', 'Improve Topic', 'Add Topic'],
      modes: [
        { title: 'Improve Hub', desc: 'Topic Plaza, My DDL, navigation, Hub sync logic, and mini-program data exports belong in Just-Agent/just-ddl.', icon: BookOpen, href: 'https://github.com/Just-Agent/just-ddl/compare', action: 'Open Hub PR' },
        { title: 'Improve Topic', desc: 'Data, pages, crawlers, and Actions for sports, esports, journals, holidays, and other topics belong in their topic repositories.', icon: Code2, href: 'https://github.com/Just-Agent', action: 'Find topic repo' },
        { title: 'Add Topic', desc: 'Beginners can use the Hub incubator; long-term topics should use an independent xxx-ddl repo registered with the Hub.', icon: GitBranch, href: '#/contribute', action: 'Read onboarding guide' },
      ],
      summaryImage: {
        src: 'assets/contributor-guide/open-source-pr-flow.jpg',
        caption: 'General open-source PR flow: idea, fork/branch, pull request, review, and merge. Use the onboarding guide for new-topic-specific rules.',
      },
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
                      <strong className="block truncate text-base font-black" style={{ color: '#0F172A' }}>{metrics?.next ? formatRelativeDeadlineLong(metrics.next, language) : '-'}</strong>
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

      <section className="mt-8 grid gap-4 lg:grid-cols-[1fr_1fr_1.15fr]">
        {[
          {
            title: spotlightCopy.todayTitle,
            copy: spotlightCopy.todayCopy,
            empty: spotlightCopy.noToday,
            items: todayItems,
            color: '#E11D48',
            icon: Clock3,
          },
          {
            title: spotlightCopy.riskTitle,
            copy: spotlightCopy.riskCopy,
            empty: spotlightCopy.noRisk,
            items: riskItems,
            color: '#F97316',
            icon: Zap,
          },
        ].map(board => {
          const Icon = board.icon;
          return (
            <motion.div
              key={board.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-3xl border bg-white p-5 shadow-sm"
              style={{ borderColor: '#E2E8F0' }}
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl" style={{ background: `${board.color}12`, color: board.color }}>
                  <Icon size={19} />
                </div>
                <div>
                  <h2 className="text-base font-black" style={{ color: '#0F172A' }}>{board.title}</h2>
                  <p className="mt-1 text-xs leading-5" style={{ color: '#64748B' }}>{board.copy}</p>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                {board.items.length > 0 ? board.items.map(item => {
                  const topic = topicForItem(item);
                  return (
                    <a
                      key={item.id}
                      href={topic ? `#/topic/${topic.id}` : '#/'}
                      className="group block rounded-2xl border bg-slate-50 px-3 py-3 transition hover:-translate-y-0.5 hover:bg-white"
                      style={{ borderColor: '#E2E8F0' }}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <p className="truncate text-xs font-black" style={{ color: topic?.color || board.color }}>
                            {topic ? topicName(topic) : spotlightCopy.official}
                          </p>
                          <h3 className="mt-1 line-clamp-2 text-sm font-black" style={{ color: '#0F172A' }}>{item.title}</h3>
                          <p className="mt-1 truncate text-[11px] font-semibold" style={{ color: '#94A3B8' }}>{formatItemDate(item, language)}</p>
                        </div>
                        <span className="shrink-0 rounded-full px-2.5 py-1 text-[11px] font-black" style={{ background: `${board.color}12`, color: board.color }}>
                          {formatRelativeDeadlineLong(item, language)}
                        </span>
                      </div>
                    </a>
                  );
                }) : (
                  <div className="rounded-2xl border border-dashed bg-slate-50 px-3 py-6 text-center text-xs font-bold" style={{ borderColor: '#CBD5E1', color: '#94A3B8' }}>
                    {board.empty}
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl border bg-white p-5 shadow-sm"
          style={{ borderColor: '#D1FAE5' }}
        >
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl" style={{ background: '#ECFDF5', color: '#0F766E' }}>
              <Activity size={19} />
            </div>
            <div>
              <h2 className="text-base font-black" style={{ color: '#0F172A' }}>{spotlightCopy.heatTitle}</h2>
              <p className="mt-1 text-xs leading-5" style={{ color: '#64748B' }}>{spotlightCopy.heatCopy}</p>
            </div>
          </div>

          <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
            {heatTopics.map(({ topic, metrics, score }) => (
              <a
                key={topic.id}
                href={`#/topic/${topic.id}`}
                className="group grid grid-cols-[1fr_auto] items-center gap-3 rounded-2xl border bg-slate-50 px-3 py-3 transition hover:-translate-y-0.5 hover:bg-white"
                style={{ borderColor: '#E2E8F0' }}
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: topic.color }} />
                    <h3 className="truncate text-sm font-black" style={{ color: '#0F172A' }}>{topicName(topic)}</h3>
                  </div>
                  <p className="mt-1 truncate text-[11px] font-semibold" style={{ color: '#64748B' }}>
                    {metrics?.active || 0} {copy.topicCard.active} · {metrics?.sources || 0} {copy.topicCard.sources}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-black" style={{ color: '#0F766E' }}>{score}</p>
                  <p className="text-[10px] font-black uppercase tracking-[0.12em]" style={{ color: '#94A3B8' }}>{spotlightCopy.method}</p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </section>

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
            <TopicCard key={topic.id} topic={topic} index={index} metrics={topicMetrics.get(topic.id)} />
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
            const isExternal = mode.href.startsWith('http');
            return (
              <a
                key={mode.title}
                href={mode.href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className="group rounded-3xl border p-5 transition hover:-translate-y-0.5"
                style={{ borderColor: '#E2E8F0', background: '#F8FAFC' }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl" style={{ background: '#ECFDF5', color: '#0F766E' }}>
                  <Icon size={20} />
                </div>
                <h4 className="mt-4 text-sm font-black" style={{ color: '#0F172A' }}>{mode.title}</h4>
                <p className="mt-2 text-xs leading-6" style={{ color: '#64748B' }}>{mode.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-black" style={{ color: '#0F766E' }}>
                  {mode.action}<ArrowRight size={13} className="transition group-hover:translate-x-0.5" />
                </span>
              </a>
            );
          })}
        </div>

        <div className="mt-6">
          <figure className="overflow-hidden rounded-3xl border bg-white" style={{ borderColor: '#DBEAFE' }}>
            <img src={contributorGuide.summaryImage.src} alt={contributorGuide.title} loading="lazy" className="block w-full" />
            <figcaption className="border-t px-4 py-3 text-xs font-semibold leading-6" style={{ borderColor: '#DBEAFE', color: '#475569' }}>
              {contributorGuide.summaryImage.caption}
            </figcaption>
          </figure>
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


