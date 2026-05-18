import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Bot,
  BookOpen,
  CalendarHeart,
  ChevronDown,
  Code2,
  Database,
  ExternalLink,
  Eye,
  Gamepad2,
  Github,
  GraduationCap,
  Layers,
  LayoutGrid,
  List,
  ListFilter,
  Medal,
  MessageSquare,
  Pin,
  RadioTower,
  SlidersHorizontal,
  Sparkles,
  Star,
  Trophy,
  type LucideIcon,
} from 'lucide-react';
import { getTopicById } from '@/data/topics';
import { getDDLByTopic, type DDLItem } from '@/data/ddl-data';
import { useSubscriptions } from '@/hooks/useSubscriptions';
import DDLCard, { type DDLCardVisualMode } from '@/components/DDLCard';
import { useLanguage } from '@/lib/language';

const iconMap: Record<string, LucideIcon> = {
  Trophy, Bot, Eye, MessageSquare, GraduationCap, BookOpen, Code2, CalendarHeart, Layers, Medal, Gamepad2,
};

const dayMs = 24 * 60 * 60 * 1000;

interface SubtopicGroup {
  id: string;
  name: string;
  items: DDLItem[];
  activeItems: DDLItem[];
  nextItem?: DDLItem;
  sourceCount: number;
}

type EventViewMode = 'list' | 'grid';
type EventVisualMode = DDLCardVisualMode;

function getItemSubtopic(item: DDLItem) {
  return {
    id: typeof item.subtopic === 'string' ? item.subtopic : 'other',
    name: typeof item.subtopicName === 'string' ? item.subtopicName : '其他',
  };
}

function TopicSubtopicPlaza({
  groups,
  topicColor,
  storageKey,
  eventViewMode,
  onEventViewModeChange,
  eventVisualMode,
  onEventVisualModeChange,
  labels,
}: {
  groups: SubtopicGroup[];
  topicColor: string;
  storageKey: string;
  eventViewMode: EventViewMode;
  onEventViewModeChange: (mode: EventViewMode) => void;
  eventVisualMode: EventVisualMode;
  onEventVisualModeChange: (mode: EventVisualMode) => void;
  labels: {
    title: string;
    copy: string;
    subtopic: string;
    pin: string;
    pinned: string;
    expand: string;
    collapse: string;
    active: string;
    sources: string;
    next: string;
    events: string;
    listView: string;
    gridView: string;
    vividMode: string;
    simpleMode: string;
  };
}) {
  const { language } = useLanguage();
  const [pinnedSubtopics, setPinnedSubtopics] = useState<Set<string>>(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      return raw ? new Set(JSON.parse(raw)) : new Set();
    } catch {
      return new Set();
    }
  });
  const [expandedSubtopics, setExpandedSubtopics] = useState<Set<string>>(() => new Set());

  useEffect(() => {
    if (!groups.length) return;
    setExpandedSubtopics(prev => {
      if (prev.size) return prev;
      const firstPinned = groups.find(group => pinnedSubtopics.has(group.id));
      return new Set([firstPinned?.id || groups[0].id]);
    });
  }, [groups, pinnedSubtopics]);

  const orderedGroups = useMemo(() => [...groups].sort((a, b) => {
    const pinDelta = Number(pinnedSubtopics.has(b.id)) - Number(pinnedSubtopics.has(a.id));
    if (pinDelta) return pinDelta;
    return new Date(a.nextItem?.deadline || '2999-01-01').getTime() - new Date(b.nextItem?.deadline || '2999-01-01').getTime();
  }), [groups, pinnedSubtopics]);

  const togglePinned = (id: string) => {
    setPinnedSubtopics(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      try {
        localStorage.setItem(storageKey, JSON.stringify([...next]));
      } catch {
        /* localStorage can be unavailable in restricted browsers */
      }
      return next;
    });
    setExpandedSubtopics(prev => new Set(prev).add(id));
  };

  const toggleExpanded = (id: string) => {
    setExpandedSubtopics(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  const countdownLabel = (item?: DDLItem) => {
    if (!item) return '-';
    const days = Math.ceil((new Date(item.deadline).getTime() - Date.now()) / dayMs);
    if (days <= 0) return language === 'zh' ? '今天' : 'today';
    return language === 'zh' ? `${days} 天后` : `in ${days}d`;
  };

  if (!groups.length) return null;

  return (
    <section className="mt-8 overflow-hidden rounded-3xl border bg-white shadow-sm" style={{ borderColor: '#E2E8F0' }}>
      <div className="p-5 sm:p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em]" style={{ color: topicColor }}>
              <ListFilter size={14} /> {labels.subtopic}
            </div>
            <h2 className="mt-2 text-xl font-black" style={{ color: '#0F172A' }}>{labels.title}</h2>
            <p className="mt-2 max-w-3xl text-sm leading-7" style={{ color: '#475569' }}>{labels.copy}</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <div className="rounded-2xl px-3 py-2 text-xs font-black" style={{ background: `${topicColor}12`, color: topicColor }}>
              {groups.reduce((sum, group) => sum + group.items.length, 0)} {labels.events}
            </div>
            <div className="inline-flex rounded-2xl border bg-white p-1" style={{ borderColor: '#E2E8F0' }}>
              {[
                { id: 'list' as const, label: labels.listView, icon: List },
                { id: 'grid' as const, label: labels.gridView, icon: LayoutGrid },
              ].map(option => {
                const Icon = option.icon;
                const active = eventViewMode === option.id;
                return (
                  <button
                    key={option.id}
                    onClick={() => onEventViewModeChange(option.id)}
                    className="flex items-center gap-1.5 whitespace-nowrap rounded-xl px-3 py-1.5 text-xs font-black transition"
                    style={{ background: active ? `${topicColor}12` : 'transparent', color: active ? topicColor : '#64748B' }}
                    aria-pressed={active}
                    title={option.label}
                  >
                    <Icon size={14} /> {option.label}
                  </button>
                );
              })}
            </div>
            <div className="inline-flex rounded-2xl border bg-white p-1" style={{ borderColor: '#E2E8F0' }}>
              {[
                { id: 'vivid' as const, label: labels.vividMode, icon: Sparkles },
                { id: 'simple' as const, label: labels.simpleMode, icon: SlidersHorizontal },
              ].map(option => {
                const Icon = option.icon;
                const active = eventVisualMode === option.id;
                return (
                  <button
                    key={option.id}
                    onClick={() => onEventVisualModeChange(option.id)}
                    className="flex items-center gap-1.5 whitespace-nowrap rounded-xl px-3 py-1.5 text-xs font-black transition"
                    style={{ background: active ? `${topicColor}12` : 'transparent', color: active ? topicColor : '#64748B' }}
                    aria-pressed={active}
                    title={option.label}
                  >
                    <Icon size={14} /> {option.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-3">
          {orderedGroups.map(group => {
            const isPinned = pinnedSubtopics.has(group.id);
            const isExpanded = expandedSubtopics.has(group.id);
            return (
              <article key={group.id} className="overflow-hidden rounded-2xl border" style={{ borderColor: isPinned ? topicColor : '#E2E8F0', background: isPinned ? `${topicColor}08` : '#FFFFFF' }}>
                <div className="flex flex-col gap-4 p-4 lg:flex-row lg:items-center lg:justify-between">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base font-black" style={{ color: '#0F172A' }}>{group.name}</h3>
                      <span className="rounded-full px-2 py-0.5 text-[10px] font-black" style={{ background: `${topicColor}14`, color: topicColor }}>
                        {group.items.length} {labels.events}
                      </span>
                      {isPinned && (
                        <span className="rounded-full px-2 py-0.5 text-[10px] font-black" style={{ background: '#FEF3C7', color: '#A16207' }}>
                          {labels.pinned}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 truncate text-sm font-semibold" style={{ color: '#64748B' }}>
                      {labels.next}: {group.nextItem?.title || '-'} · {countdownLabel(group.nextItem)}
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-2 sm:min-w-[330px]">
                    <div className="rounded-2xl border bg-white px-3 py-2" style={{ borderColor: '#E2E8F0' }}>
                      <p className="text-lg font-black" style={{ color: '#0F172A' }}>{group.activeItems.length}</p>
                      <p className="text-[11px] font-bold" style={{ color: '#64748B' }}>{labels.active}</p>
                    </div>
                    <div className="rounded-2xl border bg-white px-3 py-2" style={{ borderColor: '#E2E8F0' }}>
                      <p className="text-lg font-black" style={{ color: '#0F172A' }}>{group.sourceCount}</p>
                      <p className="text-[11px] font-bold" style={{ color: '#64748B' }}>{labels.sources}</p>
                    </div>
                    <div className="rounded-2xl border bg-white px-3 py-2" style={{ borderColor: '#E2E8F0' }}>
                      <p className="truncate text-lg font-black" style={{ color: '#0F172A' }}>{countdownLabel(group.nextItem)}</p>
                      <p className="text-[11px] font-bold" style={{ color: '#64748B' }}>{labels.next}</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => togglePinned(group.id)}
                      className="flex h-10 w-10 items-center justify-center rounded-2xl border transition hover:-translate-y-0.5"
                      style={{ borderColor: isPinned ? topicColor : '#E2E8F0', background: isPinned ? `${topicColor}12` : '#FFFFFF', color: isPinned ? topicColor : '#64748B' }}
                      aria-label={isPinned ? labels.pinned : labels.pin}
                      title={isPinned ? labels.pinned : labels.pin}
                    >
                      <Pin size={15} style={{ fill: isPinned ? topicColor : 'none' }} />
                    </button>
                    <button
                      onClick={() => toggleExpanded(group.id)}
                      className="flex items-center gap-2 rounded-2xl border bg-white px-4 py-2 text-xs font-black transition hover:-translate-y-0.5"
                      style={{ borderColor: '#E2E8F0', color: '#475569' }}
                    >
                      {isExpanded ? labels.collapse : labels.expand}
                      <ChevronDown size={14} className="transition-transform" style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                    </button>
                  </div>
                </div>

                {isExpanded && (
                  <div
                    className={`border-t p-4 ${eventViewMode === 'grid' ? 'grid gap-4 md:grid-cols-2 xl:grid-cols-3' : 'space-y-3'}`}
                    style={{ borderColor: '#E2E8F0', background: '#F8FAFC' }}
                  >
                    {group.items.map((item, index) => (
                      <DDLCard key={item.id} item={item} index={index} topicColor={topicColor} variant={eventViewMode} visualMode={eventVisualMode} />
                    ))}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function TopicDetail() {
  const { topicId } = useParams<{ topicId: string }>();
  const topic = getTopicById(topicId || '');
  const { isSubscribed, toggle } = useSubscriptions();
  const { copy, topicName, topicDescription, categoryName, tagName } = useLanguage();
  const [eventViewMode, setEventViewMode] = useState<EventViewMode>(() => {
    try {
      return localStorage.getItem('just-ddl-topic-event-view') === 'list' ? 'list' : 'grid';
    } catch {
      return 'grid';
    }
  });
  const [eventVisualMode, setEventVisualMode] = useState<EventVisualMode>(() => {
    try {
      return localStorage.getItem('just-ddl-topic-visual-mode') === 'simple' ? 'simple' : 'vivid';
    } catch {
      return 'vivid';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('just-ddl-topic-event-view', eventViewMode);
    } catch {
      /* localStorage can be unavailable in restricted browsers */
    }
  }, [eventViewMode]);

  useEffect(() => {
    try {
      localStorage.setItem('just-ddl-topic-visual-mode', eventVisualMode);
    } catch {
      /* localStorage can be unavailable in restricted browsers */
    }
  }, [eventVisualMode]);

  const items = useMemo(() => {
    if (!topicId) return [];
    return getDDLByTopic(topicId).sort((a, b) => {
      if (a.status === 'ended' && b.status !== 'ended') return 1;
      if (a.status !== 'ended' && b.status === 'ended') return -1;
      return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
    });
  }, [topicId]);

  const subtopicGroups = useMemo<SubtopicGroup[]>(() => {
    if (!topicId || !['sports-ddl', 'game-ddl'].includes(topicId)) return [];
    const groups = new Map<string, SubtopicGroup>();
    for (const item of items) {
      const subtopic = getItemSubtopic(item);
      const group = groups.get(subtopic.id) || {
        id: subtopic.id,
        name: subtopic.name,
        items: [],
        activeItems: [],
        nextItem: undefined,
        sourceCount: 0,
      };
      group.items.push(item);
      if (item.status !== 'ended') group.activeItems.push(item);
      groups.set(subtopic.id, group);
    }
    return [...groups.values()].map(group => {
      const activeItems = group.activeItems.sort((a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime());
      return {
        ...group,
        items: group.items.sort((a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime()),
        activeItems,
        nextItem: activeItems[0] || group.items[0],
        sourceCount: new Set(group.items.map(item => item.source).filter(Boolean)).size,
      };
    });
  }, [items, topicId]);

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
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10">
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

      {['sports-ddl', 'game-ddl'].includes(topic.id) && subtopicGroups.length > 0 && (
        <TopicSubtopicPlaza
          groups={subtopicGroups}
          topicColor={topic.color}
          storageKey={`just-ddl-pinned-${topic.id}-subtopics`}
          eventViewMode={eventViewMode}
          onEventViewModeChange={setEventViewMode}
          eventVisualMode={eventVisualMode}
          onEventVisualModeChange={setEventVisualMode}
          labels={{
            title: topic.id === 'game-ddl' ? copy.detail.gamePlazaTitle : copy.detail.sportsPlazaTitle,
            copy: topic.id === 'game-ddl' ? copy.detail.gamePlazaCopy : copy.detail.sportsPlazaCopy,
            subtopic: copy.detail.sportSubtopic,
            pin: copy.detail.pinSubtopic,
            pinned: copy.detail.pinnedSubtopic,
            expand: copy.detail.expand,
            collapse: copy.detail.collapse,
            active: copy.detail.active,
            sources: copy.detail.sources,
            next: copy.detail.next,
            events: copy.detail.events,
            listView: copy.my.listView,
            gridView: copy.my.gridView,
            vividMode: copy.detail.vividMode,
            simpleMode: copy.detail.simpleMode,
          }}
        />
      )}

      <section className="mt-8 space-y-3">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <h2 className="text-xl font-black" style={{ color: '#0F172A' }}>{copy.detail.allDeadlines}</h2>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border bg-white px-3 py-1.5 text-xs font-bold" style={{ borderColor: '#E2E8F0', color: '#64748B' }}>
              {activeItems.length} {copy.detail.active}
            </span>
            <div className="inline-flex rounded-2xl border bg-white p-1" style={{ borderColor: '#E2E8F0' }}>
              {[
                { id: 'list' as const, label: copy.my.listView, icon: List },
                { id: 'grid' as const, label: copy.my.gridView, icon: LayoutGrid },
              ].map(option => {
                const Icon = option.icon;
                const active = eventViewMode === option.id;
                return (
                  <button
                    key={option.id}
                    onClick={() => setEventViewMode(option.id)}
                    className="flex items-center gap-1.5 whitespace-nowrap rounded-xl px-3 py-1.5 text-xs font-black transition"
                    style={{ background: active ? `${topic.color}12` : 'transparent', color: active ? topic.color : '#64748B' }}
                    aria-pressed={active}
                    title={option.label}
                  >
                    <Icon size={14} /> {option.label}
                  </button>
                );
              })}
            </div>
            <div className="inline-flex rounded-2xl border bg-white p-1" style={{ borderColor: '#E2E8F0' }}>
              {[
                { id: 'vivid' as const, label: copy.detail.vividMode, icon: Sparkles },
                { id: 'simple' as const, label: copy.detail.simpleMode, icon: SlidersHorizontal },
              ].map(option => {
                const Icon = option.icon;
                const active = eventVisualMode === option.id;
                return (
                  <button
                    key={option.id}
                    onClick={() => setEventVisualMode(option.id)}
                    className="flex items-center gap-1.5 whitespace-nowrap rounded-xl px-3 py-1.5 text-xs font-black transition"
                    style={{ background: active ? `${topic.color}12` : 'transparent', color: active ? topic.color : '#64748B' }}
                    aria-pressed={active}
                    title={option.label}
                  >
                    <Icon size={14} /> {option.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        <div className={eventViewMode === 'grid' ? 'grid gap-5 md:grid-cols-2 xl:grid-cols-3' : 'space-y-3'}>
          {items.map((item, index) => (
            <DDLCard key={item.id} item={item} index={index} topicColor={topic.color} variant={eventViewMode} visualMode={eventVisualMode} />
          ))}
        </div>
        {items.length === 0 && (
          <div className="rounded-3xl border bg-white py-14 text-center" style={{ borderColor: '#E2E8F0' }}>
            <p className="text-sm font-semibold" style={{ color: '#94A3B8' }}>{copy.detail.empty}</p>
          </div>
        )}
      </section>
    </div>
  );
}
