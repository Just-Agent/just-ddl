import { useMemo, useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CalendarClock,
  ChevronDown,
  ChevronRight,
  Clock3,
  Grid2X2,
  Heart,
  Layers3,
  List,
  Monitor,
  Pin,
  SlidersHorizontal,
  SortAsc,
  Sparkles,
} from 'lucide-react';
import { useSubscriptions } from '@/hooks/useSubscriptions';
import { getAllDDL, type DDLItem } from '@/data/ddl-data';
import { getTopicById, topics, type Topic } from '@/data/topics';
import DDLCard, { type DDLCardVisualMode } from '@/components/DDLCard';
import { useLanguage } from '@/lib/language';

type OrganizeMode = 'topic' | 'time' | 'name';
type DisplayMode = 'list' | 'grid';
type VisualMode = DDLCardVisualMode;

const ORGANIZE_STORAGE_KEY = 'just-ddl-my-organize-mode';
const DISPLAY_STORAGE_KEY = 'just-ddl-my-display-mode';
const VISUAL_STORAGE_KEY = 'just-ddl-my-visual-mode';

interface DDLWithMeta extends DDLItem {
  topicColor: string;
  topicId: string;
  topicName: string;
  topicCategory: string;
  pinnedTopic: boolean;
  explicit: boolean;
}

interface TopicGroup {
  id: string;
  topic?: Topic;
  name: string;
  category: string;
  color: string;
  pinned: boolean;
  explicitCount: number;
  activeCount: number;
  endedCount: number;
  items: DDLWithMeta[];
}

function initialOrganizeMode(): OrganizeMode {
  try {
    const saved = localStorage.getItem(ORGANIZE_STORAGE_KEY);
    if (saved === 'topic' || saved === 'time' || saved === 'name') return saved;
  } catch {
    /* localStorage can be unavailable in restricted browsers */
  }
  return 'topic';
}

function initialDisplayMode(): DisplayMode {
  try {
    const saved = localStorage.getItem(DISPLAY_STORAGE_KEY);
    if (saved === 'list' || saved === 'grid') return saved;
  } catch {
    /* localStorage can be unavailable in restricted browsers */
  }
  return 'list';
}

function initialVisualMode(): VisualMode {
  try {
    return localStorage.getItem(VISUAL_STORAGE_KEY) === 'simple' ? 'simple' : 'vivid';
  } catch {
    /* localStorage can be unavailable in restricted browsers */
  }
  return 'vivid';
}

function findTopicForItem(item: DDLItem) {
  return topics.find(topic => item.id === topic.id || item.id.startsWith(`${topic.id}-`));
}

function deadlineTime(item: DDLItem) {
  const time = new Date(item.deadline).getTime();
  return Number.isFinite(time) ? time : Number.MAX_SAFE_INTEGER;
}

function sortItemsByMode(items: DDLWithMeta[], mode: OrganizeMode, language: 'zh' | 'en') {
  const locale = language === 'zh' ? 'zh-Hans-CN' : 'en-US';
  return [...items].sort((a, b) => {
    if (mode === 'name') {
      return a.title.localeCompare(b.title, locale) || deadlineTime(a) - deadlineTime(b);
    }
    return deadlineTime(a) - deadlineTime(b) || a.title.localeCompare(b.title, locale);
  });
}

export default function MyDDL() {
  const { subscribedIds } = useSubscriptions();
  const { language, copy, topicName, categoryName } = useLanguage();
  const [organizeMode, setOrganizeModeState] = useState<OrganizeMode>(initialOrganizeMode);
  const [displayMode, setDisplayModeState] = useState<DisplayMode>(initialDisplayMode);
  const [visualMode, setVisualModeState] = useState<VisualMode>(initialVisualMode);
  const [collapsedTopics, setCollapsedTopics] = useState<Set<string>>(() => new Set());

  const allDDL = useMemo(() => getAllDDL(), []);
  const subscribedIdSet = useMemo(() => new Set(subscribedIds), [subscribedIds]);

  const setOrganizeMode = (mode: OrganizeMode) => {
    setOrganizeModeState(mode);
    try {
      localStorage.setItem(ORGANIZE_STORAGE_KEY, mode);
    } catch {
      /* localStorage can be unavailable in restricted browsers */
    }
  };

  const setDisplayMode = (mode: DisplayMode) => {
    setDisplayModeState(mode);
    try {
      localStorage.setItem(DISPLAY_STORAGE_KEY, mode);
    } catch {
      /* localStorage can be unavailable in restricted browsers */
    }
  };

  const setVisualMode = (mode: VisualMode) => {
    setVisualModeState(mode);
    try {
      localStorage.setItem(VISUAL_STORAGE_KEY, mode);
    } catch {
      /* localStorage can be unavailable in restricted browsers */
    }
  };

  const toggleTopicCollapse = (id: string) => {
    setCollapsedTopics(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const subscribedTopics = useMemo(() => {
    const list: Topic[] = [];
    for (const id of subscribedIds) {
      const t = getTopicById(id);
      if (t) list.push(t);
    }
    return list;
  }, [subscribedIds]);

  const subscribedTopicIdSet = useMemo(() => new Set(subscribedTopics.map(topic => topic.id)), [subscribedTopics]);

  const allItemsWithMeta = useMemo<DDLWithMeta[]>(() => {
    return allDDL.map(item => {
      const topic = findTopicForItem(item);
      const topicId = topic?.id || 'unknown';
      return {
        ...item,
        topicColor: topic?.color || '#F97316',
        topicId,
        topicName: topic ? topicName(topic) : copy.my.unknownTopic,
        topicCategory: topic ? categoryName(topic.category) : copy.my.unknownTopic,
        pinnedTopic: subscribedTopicIdSet.has(topicId),
        explicit: subscribedIdSet.has(item.id),
      };
    });
  }, [allDDL, categoryName, copy.my.unknownTopic, subscribedIdSet, subscribedTopicIdSet, topicName]);

  const topicItems = useMemo(() => {
    const seen = new Set<string>();
    const result: DDLWithMeta[] = [];

    for (const item of allItemsWithMeta) {
      if (item.pinnedTopic && !seen.has(item.id)) {
        seen.add(item.id);
        result.push(item);
      }
    }

    for (const item of allItemsWithMeta) {
      if (item.explicit && !seen.has(item.id)) {
        seen.add(item.id);
        result.push(item);
      }
    }

    return result;
  }, [allItemsWithMeta]);

  const subscribedItems = useMemo(() => {
    return allItemsWithMeta
      .filter(item => item.explicit)
      .sort((a, b) => deadlineTime(a) - deadlineTime(b));
  }, [allItemsWithMeta]);

  const sortedItems = useMemo(() => sortItemsByMode(topicItems, organizeMode, language), [topicItems, organizeMode, language]);
  const activeItems = sortedItems.filter(d => d.status !== 'ended');
  const endedItems = sortedItems.filter(d => d.status === 'ended');

  const topicGroups = useMemo<TopicGroup[]>(() => {
    const groups = new Map<string, TopicGroup>();

    for (const item of topicItems) {
      const topic = getTopicById(item.topicId);
      const group = groups.get(item.topicId) || {
        id: item.topicId,
        topic,
        name: item.topicName,
        category: item.topicCategory,
        color: item.topicColor,
        pinned: item.pinnedTopic,
        explicitCount: 0,
        activeCount: 0,
        endedCount: 0,
        items: [],
      };

      group.items.push(item);
      if (item.explicit) group.explicitCount += 1;
      if (item.status === 'ended') group.endedCount += 1;
      else group.activeCount += 1;
      groups.set(item.topicId, group);
    }

    return [...groups.values()]
      .map(group => ({ ...group, items: sortItemsByMode(group.items, organizeMode, language) }))
      .sort((a, b) => Number(b.pinned) - Number(a.pinned) || a.name.localeCompare(b.name, language === 'zh' ? 'zh-Hans-CN' : 'en-US'));
  }, [language, topicItems, organizeMode]);

  const renderCards = (items: DDLWithMeta[], showTopicLabel: boolean, offset = 0) => (
    <div className={displayMode === 'grid' ? 'grid gap-3 md:grid-cols-2 xl:grid-cols-3' : 'space-y-3'}>
      {items.map((item, i) => (
        <DDLCard
          key={item.id}
          item={item}
          index={i + offset}
          topicColor={item.topicColor}
          topicLabel={showTopicLabel ? item.topicName : undefined}
          variant={displayMode}
          visualMode={visualMode}
        />
      ))}
    </div>
  );

  const organizeOptions = [
    { id: 'topic' as const, label: copy.my.byTopic, icon: Layers3 },
    { id: 'time' as const, label: copy.my.byTime, icon: Clock3 },
    { id: 'name' as const, label: copy.my.byName, icon: SortAsc },
  ];

  const displayOptions = [
    { id: 'list' as const, label: copy.my.listView, icon: List },
    { id: 'grid' as const, label: copy.my.gridView, icon: Grid2X2 },
  ];
  const visualOptions = [
    { id: 'vivid' as const, label: copy.detail.vividMode, icon: Sparkles },
    { id: 'simple' as const, label: copy.detail.simpleMode, icon: SlidersHorizontal },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-black sm:text-3xl" style={{ color: '#0F172A' }}>
          <Heart size={25} className="mr-1.5 inline" style={{ color: '#F43F5E', fill: '#F43F5E' }} /> {copy.my.title}
        </h1>
        <p className="mt-2 text-sm" style={{ color: '#64748B' }}>
          {copy.my.summary} <strong style={{ color: '#0F766E' }}>{subscribedTopics.length}</strong> {copy.my.topics}，{copy.my.individual} <strong style={{ color: '#0F766E' }}>{subscribedItems.length}</strong> {copy.my.items}
        </p>
        <p className="mt-1 text-xs leading-5" style={{ color: '#94A3B8' }}>{copy.my.pageHint}</p>
      </motion.div>

      {topicItems.length === 0 ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-10 rounded-3xl border bg-white py-14 text-center shadow-sm" style={{ borderColor: '#E2E8F0' }}>
          <Pin size={36} className="mx-auto" style={{ color: '#D6D3D1' }} />
          <h3 className="mt-4 text-sm font-bold" style={{ color: '#0F172A' }}>{copy.my.emptyTitle}</h3>
          <p className="mt-1 text-xs" style={{ color: '#94A3B8' }}>{copy.my.emptyCopy}</p>
          <Link to="/" className="mt-4 inline-flex items-center gap-1 rounded-2xl px-5 py-2.5 text-xs font-black text-white" style={{ background: '#0F766E' }}>
            {copy.my.browse} <ArrowRight size={12} />
          </Link>
        </motion.div>
      ) : (
        <>
          <motion.section
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 grid gap-3 rounded-3xl border bg-white p-3 shadow-sm lg:grid-cols-[1fr_0.82fr]"
            style={{ borderColor: '#E2E8F0' }}
          >
            <div className="rounded-2xl bg-slate-50 p-3">
              <p className="mb-2 flex items-center gap-1.5 text-[11px] font-black uppercase tracking-[0.16em]" style={{ color: '#64748B' }}>
                <CalendarClock size={13} /> {copy.my.organizeLabel}
              </p>
              <div className="flex flex-wrap gap-2">
                {organizeOptions.map(option => {
                  const Icon = option.icon;
                  const active = organizeMode === option.id;
                  return (
                    <button
                      key={option.id}
                      onClick={() => setOrganizeMode(option.id)}
                      className="inline-flex items-center gap-1.5 rounded-2xl px-3 py-2 text-xs font-black transition-all"
                      style={{
                        background: active ? '#0F172A' : '#FFFFFF',
                        color: active ? '#FFFFFF' : '#475569',
                        border: '1px solid',
                        borderColor: active ? '#0F172A' : '#E2E8F0',
                      }}
                    >
                      <Icon size={14} /> {option.label}
                    </button>
                  );
                })}
              </div>
              <p className="mt-2 text-[11px] leading-5" style={{ color: '#94A3B8' }}>
                {organizeMode === 'topic' ? copy.my.topicModeHint : copy.my.flatModeHint}
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-3">
              <p className="mb-2 flex items-center gap-1.5 text-[11px] font-black uppercase tracking-[0.16em]" style={{ color: '#64748B' }}>
                <Grid2X2 size={13} /> {copy.my.displayLabel}
              </p>
              <div className="flex flex-wrap gap-2">
                {displayOptions.map(option => {
                  const Icon = option.icon;
                  const active = displayMode === option.id;
                  return (
                    <button
                      key={option.id}
                      onClick={() => setDisplayMode(option.id)}
                      className="inline-flex items-center gap-1.5 rounded-2xl px-3 py-2 text-xs font-black transition-all"
                      style={{
                        background: active ? '#0F766E' : '#FFFFFF',
                        color: active ? '#FFFFFF' : '#475569',
                        border: '1px solid',
                        borderColor: active ? '#0F766E' : '#E2E8F0',
                      }}
                    >
                      <Icon size={14} /> {option.label}
                    </button>
                  );
                })}
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {visualOptions.map(option => {
                  const Icon = option.icon;
                  const active = visualMode === option.id;
                  return (
                    <button
                      key={option.id}
                      onClick={() => setVisualMode(option.id)}
                      className="inline-flex items-center gap-1.5 rounded-2xl px-3 py-2 text-xs font-black transition-all"
                      style={{
                        background: active ? '#0EA5E9' : '#FFFFFF',
                        color: active ? '#FFFFFF' : '#475569',
                        border: '1px solid',
                        borderColor: active ? '#0EA5E9' : '#E2E8F0',
                      }}
                    >
                      <Icon size={14} /> {option.label}
                    </button>
                  );
                })}
              </div>
              <p className="mt-2 text-[11px] leading-5" style={{ color: '#94A3B8' }}>{copy.my.displayHint}</p>
            </div>
          </motion.section>

          {organizeMode === 'topic' ? (
            <section className="mt-6 space-y-4">
              {topicGroups.map((group, groupIndex) => {
                const collapsed = collapsedTopics.has(group.id);
                const activeGroupItems = group.items.filter(item => item.status !== 'ended');
                const endedGroupItems = group.items.filter(item => item.status === 'ended');
                const Chevron = collapsed ? ChevronRight : ChevronDown;

                return (
                  <motion.div
                    key={group.id}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: groupIndex * 0.03 }}
                    className="overflow-hidden rounded-3xl border bg-white shadow-sm"
                    style={{ borderColor: '#E2E8F0' }}
                  >
                    <button
                      onClick={() => toggleTopicCollapse(group.id)}
                      className="flex w-full items-center justify-between gap-4 p-4 text-left transition hover:bg-slate-50"
                    >
                      <div className="flex min-w-0 items-center gap-3">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl" style={{ background: `${group.color}14`, color: group.color }}>
                          <Pin size={18} fill={group.pinned ? group.color : 'none'} />
                        </div>
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <h2 className="truncate text-base font-black" style={{ color: '#0F172A' }}>{group.name}</h2>
                            <span className="rounded-full px-2 py-0.5 text-[10px] font-black" style={{ background: `${group.color}12`, color: group.color }}>
                              {group.category}
                            </span>
                            {group.pinned && (
                              <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-black text-emerald-700">
                                {copy.my.topicPinned}
                              </span>
                            )}
                            {group.explicitCount > 0 && (
                              <span className="rounded-full bg-rose-50 px-2 py-0.5 text-[10px] font-black text-rose-600">
                                {group.explicitCount} {copy.my.singleSaved}
                              </span>
                            )}
                          </div>
                          <p className="mt-1 text-xs" style={{ color: '#94A3B8' }}>
                            {group.activeCount} {copy.my.active} · {group.endedCount} {copy.my.ended}
                          </p>
                        </div>
                      </div>
                      <Chevron className="shrink-0" size={18} style={{ color: '#94A3B8' }} />
                    </button>

                    {!collapsed && (
                      <div className="border-t p-4" style={{ borderColor: '#E2E8F0' }}>
                        {activeGroupItems.length > 0 ? (
                          renderCards(activeGroupItems, false, groupIndex * 10)
                        ) : (
                          <p className="rounded-2xl bg-slate-50 px-4 py-3 text-xs font-semibold" style={{ color: '#94A3B8' }}>
                            {copy.my.noActiveInTopic}
                          </p>
                        )}

                        {endedGroupItems.length > 0 && (
                          <div className="mt-4 opacity-60">
                            <h3 className="mb-2 text-[11px] font-black uppercase tracking-[0.16em]" style={{ color: '#94A3B8' }}>
                              {copy.my.ended} ({endedGroupItems.length})
                            </h3>
                            {renderCards(endedGroupItems, false, groupIndex * 10 + activeGroupItems.length)}
                          </div>
                        )}
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </section>
          ) : (
            <>
              {activeItems.length > 0 && (
                <section className="mt-6">
                  <h2 className="text-xs font-black uppercase tracking-[0.18em]" style={{ color: '#0F766E' }}>{copy.my.active} ({activeItems.length})</h2>
                  <div className="mt-3">
                    {renderCards(activeItems, true)}
                  </div>
                </section>
              )}

              {endedItems.length > 0 && (
                <section className="mt-8">
                  <h2 className="text-xs font-black uppercase tracking-[0.18em]" style={{ color: '#94A3B8' }}>{copy.my.ended} ({endedItems.length})</h2>
                  <div className="mt-3 opacity-60">
                    {renderCards(endedItems, true)}
                  </div>
                </section>
              )}
            </>
          )}

          {activeItems.length === 0 && endedItems.length === 0 && (
            <section className="mt-6 rounded-3xl border bg-white p-6 text-center shadow-sm" style={{ borderColor: '#E2E8F0' }}>
              <p className="text-sm font-bold" style={{ color: '#0F172A' }}>{copy.my.emptyTitle}</p>
              <p className="mt-1 text-xs" style={{ color: '#94A3B8' }}>{copy.my.emptyCopy}</p>
            </section>
          )}
        </>
      )}

      {topicItems.length > 0 && (
        <section className="mt-10 grid gap-3 sm:grid-cols-3">
          {[
            { label: copy.my.topics, value: subscribedTopics.length, color: '#0F766E' },
            { label: copy.my.singleSaved, value: subscribedItems.length, color: '#F43F5E' },
            { label: copy.my.events, value: topicItems.length, color: '#F97316' },
          ].map(stat => (
            <div key={stat.label} className="rounded-3xl border bg-white p-4 shadow-sm" style={{ borderColor: '#E2E8F0' }}>
              <p className="text-2xl font-black" style={{ color: stat.color }}>{stat.value}</p>
              <p className="mt-1 text-xs font-bold" style={{ color: '#64748B' }}>{stat.label}</p>
            </div>
          ))}
        </section>
      )}

      <section className="mt-10 rounded-3xl border p-5 shadow-sm" style={{ background: 'linear-gradient(135deg, #ECFDF5, #F8FAFC)', borderColor: '#D1FAE5' }}>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: 'white' }}>
            <Monitor size={18} style={{ color: '#0F766E' }} />
          </div>
          <div>
            <h3 className="text-sm font-bold" style={{ color: '#0F172A' }}>{copy.my.customTitle}</h3>
            <p className="text-xs" style={{ color: '#475569' }}>{copy.my.customCopy}</p>
          </div>
        </div>
        <p className="mt-3 text-[11px] leading-relaxed" style={{ color: '#A8A29E' }}>
          {copy.my.customNote}
        </p>
      </section>
    </div>
  );
}
