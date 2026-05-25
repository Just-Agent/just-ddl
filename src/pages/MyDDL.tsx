import { useMemo, useRef, useState, type FormEvent } from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CalendarClock,
  ChevronDown,
  ChevronRight,
  Clock3,
  Copy,
  Download,
  Edit3,
  Grid2X2,
  Heart,
  Layers3,
  List,
  Monitor,
  Plus,
  Pin,
  SlidersHorizontal,
  SortAsc,
  Sparkles,
  Trash2,
  Upload,
  X,
} from 'lucide-react';
import { useSubscriptions } from '@/hooks/useSubscriptions';
import { useUserDDL, type UserDDLEventInput } from '@/hooks/useUserDDL';
import { getAllDDL, type DDLItem } from '@/data/ddl-data';
import { getTopicById, topics, type Topic } from '@/data/topics';
import DDLCard, { type DDLCardVisualMode } from '@/components/DDLCard';
import Countdown from '@/components/Countdown';
import { useLanguage } from '@/lib/language';
import { ddlItemTime, formatItemDate, hasOfficialDeadline, isActiveDeadlineItem } from '@/lib/ddl';

type OrganizeMode = 'topic' | 'time' | 'name';
type DisplayMode = 'list' | 'grid';
type VisualMode = DDLCardVisualMode;

const ORGANIZE_STORAGE_KEY = 'just-ddl-my-organize-mode';
const DISPLAY_STORAGE_KEY = 'just-ddl-my-display-mode';
const VISUAL_STORAGE_KEY = 'just-ddl-my-visual-mode';
const PERSONAL_TOPIC_ID = 'personal-ddl';
const PERSONAL_TOPIC_COLOR = '#0F766E';

interface DDLWithMeta extends DDLItem {
  topicColor: string;
  topicId: string;
  topicName: string;
  topicCategory: string;
  pinnedTopic: boolean;
  explicit: boolean;
  isCustom?: boolean;
}

interface CustomFormState {
  title: string;
  deadline: string;
  category: string;
  location: string;
  tags: string;
  url: string;
  description: string;
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
  if (typeof item.topicId === 'string' && item.topicId) {
    const exact = getTopicById(item.topicId);
    if (exact) return exact;
  }
  return topics.find(topic => item.id === topic.id || item.id.startsWith(`${topic.id}-`));
}

function sortItemsByMode(items: DDLWithMeta[], mode: OrganizeMode, language: 'zh' | 'en') {
  const locale = language === 'zh' ? 'zh-Hans-CN' : 'en-US';
  return [...items].sort((a, b) => {
    if (mode === 'name') {
      return a.title.localeCompare(b.title, locale) || ddlItemTime(a) - ddlItemTime(b);
    }
    return ddlItemTime(a) - ddlItemTime(b) || a.title.localeCompare(b.title, locale);
  });
}

function toDatetimeLocal(value: string | Date) {
  const date = value instanceof Date ? value : new Date(value);
  if (!Number.isFinite(date.getTime())) return '';
  const local = new Date(date.getTime() - date.getTimezoneOffset() * 60_000);
  return local.toISOString().slice(0, 16);
}

function nextDefaultDeadline() {
  const date = new Date();
  date.setDate(date.getDate() + 7);
  date.setHours(23, 59, 0, 0);
  return toDatetimeLocal(date);
}

function emptyCustomForm(): CustomFormState {
  return {
    title: '',
    deadline: nextDefaultDeadline(),
    category: '个人',
    location: '',
    tags: '',
    url: '',
    description: '',
  };
}

function formToInput(form: CustomFormState): UserDDLEventInput | null {
  const title = form.title.trim();
  const deadlineTime = Date.parse(form.deadline);
  if (!title || !Number.isFinite(deadlineTime)) return null;
  return {
    title,
    deadline: new Date(deadlineTime).toISOString(),
    category: form.category.trim() || '个人',
    location: form.location.trim() || '本地',
    tags: form.tags.split(/[,，、\s]+/).map(tag => tag.trim()).filter(Boolean),
    url: form.url.trim() || undefined,
    description: form.description.trim() || undefined,
  };
}

function PersonalDDLCard({
  item,
  index,
  topicColor,
  topicLabel,
  variant,
  onEdit,
  onDelete,
}: {
  item: DDLWithMeta;
  index: number;
  topicColor: string;
  topicLabel?: string;
  variant: DisplayMode;
  onEdit: () => void;
  onDelete: () => void;
}) {
  const { copy, language } = useLanguage();
  const isGrid = variant === 'grid';
  const canCountdown = hasOfficialDeadline(item) && typeof item.deadline === 'string';

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04, duration: 0.35 }}
      className={`group rounded-3xl border bg-white p-4 shadow-sm transition-all ${isGrid ? 'min-h-[260px]' : 'sm:flex sm:items-center sm:gap-4'}`}
      style={{ borderColor: '#D1FAE5' }}
      whileHover={{ boxShadow: `0 18px 48px -32px ${topicColor}` }}
    >
      <div className={isGrid ? 'space-y-3' : 'min-w-0 flex-1'}>
        {topicLabel && (
          <span className="mb-2 inline-flex rounded-full px-2 py-0.5 text-[10px] font-black" style={{ background: '#ECFDF5', color: topicColor }}>
            {topicLabel}
          </span>
        )}
        <div className="flex flex-wrap items-center gap-2 text-xs font-black" style={{ color: '#52627A' }}>
          <span>{item.stage || copy.my.personalTopic}</span>
          <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-black text-emerald-700">{copy.my.localOnly}</span>
          <span>{formatItemDate(item, language)}</span>
        </div>
        <h4 className={`${isGrid ? 'line-clamp-2 text-xl' : 'truncate text-base'} mt-2 font-black`} style={{ color: '#0F172A' }}>
          {item.title}
        </h4>
        {item.description && (
          <p className={`${isGrid ? 'line-clamp-3' : 'line-clamp-2'} mt-2 text-xs leading-6`} style={{ color: '#64748B' }}>
            {item.description}
          </p>
        )}
        <div className="mt-2 flex flex-wrap gap-1.5">
          {item.tags.map(tag => (
            <span key={tag} className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-black text-emerald-800">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className={`${isGrid ? 'mt-4 border-t pt-3' : 'mt-3 sm:mt-0'} flex flex-wrap items-center gap-2`} style={isGrid ? { borderColor: '#ECFDF5' } : undefined}>
        {canCountdown && <Countdown deadline={item.deadline as string} size={isGrid ? 'sm' : 'md'} />}
        {item.url && (
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border bg-white transition hover:-translate-y-0.5"
            style={{ borderColor: '#D1FAE5', color: topicColor }}
            aria-label={copy.ddl.official}
            title={copy.ddl.official}
          >
            <ArrowRight size={14} />
          </a>
        )}
        <button
          type="button"
          onClick={onEdit}
          className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border bg-white transition hover:-translate-y-0.5"
          style={{ borderColor: '#D1FAE5', color: '#0F766E' }}
          aria-label={copy.my.editCustom}
          title={copy.my.editCustom}
        >
          <Edit3 size={14} />
        </button>
        <button
          type="button"
          onClick={onDelete}
          className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border bg-white transition hover:-translate-y-0.5"
          style={{ borderColor: '#FFE4E6', color: '#E11D48' }}
          aria-label={copy.my.deleteCustom}
          title={copy.my.deleteCustom}
        >
          <Trash2 size={14} />
        </button>
      </div>
    </motion.article>
  );
}

export default function MyDDL() {
  const { subscribedIds } = useSubscriptions();
  const { events: userEvents, ddlItems: userDDLItems, addEvent, updateEvent, removeEvent, replaceEvents } = useUserDDL();
  const { language, copy, topicName, categoryName } = useLanguage();
  const [organizeMode, setOrganizeModeState] = useState<OrganizeMode>(initialOrganizeMode);
  const [displayMode, setDisplayModeState] = useState<DisplayMode>(initialDisplayMode);
  const [visualMode, setVisualModeState] = useState<VisualMode>(initialVisualMode);
  const [collapsedTopics, setCollapsedTopics] = useState<Set<string>>(() => new Set());
  const [customForm, setCustomForm] = useState<CustomFormState>(emptyCustomForm);
  const [editingCustomId, setEditingCustomId] = useState<string | null>(null);
  const [formMessage, setFormMessage] = useState('');
  const importInputRef = useRef<HTMLInputElement | null>(null);

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

  const customItemsWithMeta = useMemo<DDLWithMeta[]>(() => (
    userDDLItems.map(item => ({
      ...item,
      topicColor: PERSONAL_TOPIC_COLOR,
      topicId: PERSONAL_TOPIC_ID,
      topicName: copy.my.personalTopic,
      topicCategory: copy.my.personalCategory,
      pinnedTopic: true,
      explicit: true,
      isCustom: true,
    }))
  ), [copy.my.personalCategory, copy.my.personalTopic, userDDLItems]);

  const topicItems = useMemo(() => {
    const seen = new Set<string>();
    const result: DDLWithMeta[] = [];

    for (const item of customItemsWithMeta) {
      if (!seen.has(item.id)) {
        seen.add(item.id);
        result.push(item);
      }
    }

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
  }, [allItemsWithMeta, customItemsWithMeta]);

  const subscribedItems = useMemo(() => {
    return allItemsWithMeta
      .filter(item => item.explicit)
      .sort((a, b) => ddlItemTime(a) - ddlItemTime(b));
  }, [allItemsWithMeta]);

  const sortedItems = useMemo(() => sortItemsByMode(topicItems, organizeMode, language), [topicItems, organizeMode, language]);
  const activeItems = sortedItems.filter(isActiveDeadlineItem);
  const endedItems = sortedItems.filter(d => !isActiveDeadlineItem(d));

  const topicGroups = useMemo<TopicGroup[]>(() => {
    const groups = new Map<string, TopicGroup>();

    for (const item of topicItems) {
      const topic = item.topicId === PERSONAL_TOPIC_ID ? undefined : getTopicById(item.topicId);
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
      if (isActiveDeadlineItem(item)) group.activeCount += 1;
      else group.endedCount += 1;
      groups.set(item.topicId, group);
    }

    return [...groups.values()]
      .map(group => ({ ...group, items: sortItemsByMode(group.items, organizeMode, language) }))
      .sort((a, b) => Number(b.pinned) - Number(a.pinned) || a.name.localeCompare(b.name, language === 'zh' ? 'zh-Hans-CN' : 'en-US'));
  }, [language, topicItems, organizeMode]);

  const resetCustomForm = () => {
    setCustomForm(emptyCustomForm());
    setEditingCustomId(null);
  };

  const submitCustomForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const input = formToInput(customForm);
    if (!input) {
      setFormMessage(copy.my.customInvalid);
      return;
    }

    const ok = editingCustomId ? updateEvent(editingCustomId, input) : addEvent(input);
    if (!ok) {
      setFormMessage(copy.my.customInvalid);
      return;
    }
    setFormMessage(editingCustomId ? copy.my.customUpdated : copy.my.customAdded);
    resetCustomForm();
  };

  const startEditCustom = (id: string) => {
    const event = userEvents.find(item => item.id === id);
    if (!event) return;
    setEditingCustomId(id);
    setCustomForm({
      title: event.title,
      deadline: toDatetimeLocal(event.deadline),
      category: event.category,
      location: event.location,
      tags: event.tags.join(', '),
      url: event.url || '',
      description: event.description || '',
    });
    setFormMessage(copy.my.editingCustom);
  };

  const deleteCustom = (id: string) => {
    removeEvent(id);
    if (editingCustomId === id) resetCustomForm();
    setFormMessage(copy.my.customDeleted);
  };

  const exportCustomEvents = () => {
    const payload = {
      version: 1,
      exportedAt: new Date().toISOString(),
      events: userEvents,
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = `just-ddl-user-events-${new Date().toISOString().slice(0, 10)}.json`;
    anchor.click();
    URL.revokeObjectURL(url);
  };

  const importCustomEvents = async (file: File | null) => {
    if (!file) return;
    try {
      const parsed = JSON.parse(await file.text());
      const payload = Array.isArray(parsed) ? parsed : parsed.events;
      if (!Array.isArray(payload)) {
        setFormMessage(copy.my.importInvalid);
        return;
      }
      const count = replaceEvents(payload);
      setFormMessage(`${copy.my.importedPrefix}${count}${copy.my.importedSuffix}`);
      resetCustomForm();
    } catch {
      setFormMessage(copy.my.importInvalid);
    } finally {
      if (importInputRef.current) importInputRef.current.value = '';
    }
  };

  const pinMyDDLHome = async () => {
    const url = `${window.location.origin}${window.location.pathname}#/my`;
    try {
      if (navigator.share) {
        await navigator.share({
          title: copy.my.title,
          text: copy.my.pinHomeShareText,
          url,
        });
      } else {
        await navigator.clipboard.writeText(url);
      }
      setFormMessage(copy.my.pinHomeCopied);
    } catch {
      try {
        await navigator.clipboard.writeText(url);
        setFormMessage(copy.my.pinHomeCopied);
      } catch {
        setFormMessage(copy.my.pinHomeFailed);
      }
    }
  };

  const renderCards = (items: DDLWithMeta[], showTopicLabel: boolean, offset = 0) => (
    <div className={displayMode === 'grid' ? 'grid gap-3 md:grid-cols-2 xl:grid-cols-3' : 'space-y-3'}>
      {items.map((item, i) => (
        item.isCustom ? (
          <PersonalDDLCard
            key={item.id}
            item={item}
            index={i + offset}
            topicColor={item.topicColor}
            topicLabel={showTopicLabel ? item.topicName : undefined}
            variant={displayMode}
            onEdit={() => startEditCustom(item.id)}
            onDelete={() => deleteCustom(item.id)}
          />
        ) : (
          <DDLCard
            key={item.id}
            item={item}
            index={i + offset}
            topicColor={item.topicColor}
            topicLabel={showTopicLabel ? item.topicName : undefined}
            variant={displayMode}
            visualMode={visualMode}
          />
        )
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
          {copy.my.summary} <strong style={{ color: '#0F766E' }}>{subscribedTopics.length}</strong> {copy.my.topics}，{copy.my.individual} <strong style={{ color: '#0F766E' }}>{subscribedItems.length}</strong> {copy.my.items}，{copy.my.personal} <strong style={{ color: '#0F766E' }}>{userEvents.length}</strong> {copy.my.items}
        </p>
        <p className="mt-1 text-xs leading-5" style={{ color: '#94A3B8' }}>{copy.my.pageHint}</p>
      </motion.div>

      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-6 rounded-3xl border bg-white p-4 shadow-sm"
        style={{ borderColor: '#D1FAE5' }}
      >
        <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-[0.16em]" style={{ color: '#0F766E' }}>
              <Monitor size={13} /> {copy.my.customTitle}
            </p>
            <h2 className="mt-1 text-lg font-black" style={{ color: '#0F172A' }}>{copy.my.customHeadline}</h2>
            <p className="mt-1 text-xs leading-5" style={{ color: '#64748B' }}>{copy.my.customNote}</p>
            {formMessage && <p className="mt-2 text-xs font-bold" style={{ color: '#0F766E' }}>{formMessage}</p>}
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={pinMyDDLHome}
              className="inline-flex items-center gap-1.5 rounded-2xl border px-3 py-2 text-xs font-black transition"
              style={{ borderColor: '#BFDBFE', color: '#1D4ED8', background: '#EFF6FF' }}
            >
              <Copy size={14} /> {copy.my.pinHome}
            </button>
            <button
              type="button"
              onClick={exportCustomEvents}
              disabled={userEvents.length === 0}
              className="inline-flex items-center gap-1.5 rounded-2xl border px-3 py-2 text-xs font-black transition disabled:cursor-not-allowed disabled:opacity-40"
              style={{ borderColor: '#D1FAE5', color: '#0F766E', background: '#FFFFFF' }}
            >
              <Download size={14} /> {copy.my.exportJson}
            </button>
            <button
              type="button"
              onClick={() => importInputRef.current?.click()}
              className="inline-flex items-center gap-1.5 rounded-2xl border px-3 py-2 text-xs font-black transition"
              style={{ borderColor: '#D1FAE5', color: '#0F766E', background: '#FFFFFF' }}
            >
              <Upload size={14} /> {copy.my.importJson}
            </button>
            <input
              ref={importInputRef}
              type="file"
              accept="application/json,.json"
              className="hidden"
              onChange={event => importCustomEvents(event.currentTarget.files?.[0] || null)}
            />
          </div>
        </div>

        <form onSubmit={submitCustomForm} className="mt-4 grid gap-3 lg:grid-cols-[1.2fr_0.9fr_0.8fr]">
          <label className="grid gap-1 text-xs font-bold" style={{ color: '#334155' }}>
            {copy.my.customTitleLabel}
            <input
              value={customForm.title}
              onChange={event => setCustomForm(form => ({ ...form, title: event.target.value }))}
              className="h-11 rounded-2xl border bg-slate-50 px-3 text-sm outline-none transition focus:border-emerald-500"
              style={{ borderColor: '#E2E8F0' }}
              maxLength={80}
              placeholder={copy.my.customTitlePlaceholder}
            />
          </label>
          <label className="grid gap-1 text-xs font-bold" style={{ color: '#334155' }}>
            {copy.my.customDeadlineLabel}
            <input
              type="datetime-local"
              value={customForm.deadline}
              onChange={event => setCustomForm(form => ({ ...form, deadline: event.target.value }))}
              className="h-11 rounded-2xl border bg-slate-50 px-3 text-sm outline-none transition focus:border-emerald-500"
              style={{ borderColor: '#E2E8F0' }}
            />
          </label>
          <label className="grid gap-1 text-xs font-bold" style={{ color: '#334155' }}>
            {copy.my.customCategoryLabel}
            <input
              value={customForm.category}
              onChange={event => setCustomForm(form => ({ ...form, category: event.target.value }))}
              className="h-11 rounded-2xl border bg-slate-50 px-3 text-sm outline-none transition focus:border-emerald-500"
              style={{ borderColor: '#E2E8F0' }}
              maxLength={24}
              placeholder={copy.my.customCategoryPlaceholder}
            />
          </label>
          <label className="grid gap-1 text-xs font-bold" style={{ color: '#334155' }}>
            {copy.my.customLocationLabel}
            <input
              value={customForm.location}
              onChange={event => setCustomForm(form => ({ ...form, location: event.target.value }))}
              className="h-11 rounded-2xl border bg-slate-50 px-3 text-sm outline-none transition focus:border-emerald-500"
              style={{ borderColor: '#E2E8F0' }}
              maxLength={40}
              placeholder={copy.my.customLocationPlaceholder}
            />
          </label>
          <label className="grid gap-1 text-xs font-bold" style={{ color: '#334155' }}>
            {copy.my.customTagsLabel}
            <input
              value={customForm.tags}
              onChange={event => setCustomForm(form => ({ ...form, tags: event.target.value }))}
              className="h-11 rounded-2xl border bg-slate-50 px-3 text-sm outline-none transition focus:border-emerald-500"
              style={{ borderColor: '#E2E8F0' }}
              maxLength={80}
              placeholder={copy.my.customTagsPlaceholder}
            />
          </label>
          <label className="grid gap-1 text-xs font-bold" style={{ color: '#334155' }}>
            {copy.my.customUrlLabel}
            <input
              value={customForm.url}
              onChange={event => setCustomForm(form => ({ ...form, url: event.target.value }))}
              className="h-11 rounded-2xl border bg-slate-50 px-3 text-sm outline-none transition focus:border-emerald-500"
              style={{ borderColor: '#E2E8F0' }}
              maxLength={240}
              placeholder={copy.my.customUrlPlaceholder}
            />
          </label>
          <label className="grid gap-1 text-xs font-bold lg:col-span-2" style={{ color: '#334155' }}>
            {copy.my.customDescLabel}
            <input
              value={customForm.description}
              onChange={event => setCustomForm(form => ({ ...form, description: event.target.value }))}
              className="h-11 rounded-2xl border bg-slate-50 px-3 text-sm outline-none transition focus:border-emerald-500"
              style={{ borderColor: '#E2E8F0' }}
              maxLength={180}
              placeholder={copy.my.customDescPlaceholder}
            />
          </label>
          <div className="flex items-end gap-2">
            <button
              type="submit"
              className="inline-flex h-11 flex-1 items-center justify-center gap-1.5 rounded-2xl px-4 text-xs font-black text-white transition hover:-translate-y-0.5"
              style={{ background: '#0F766E' }}
            >
              <Plus size={15} /> {editingCustomId ? copy.my.updateCustom : copy.my.addCustom}
            </button>
            {editingCustomId && (
              <button
                type="button"
                onClick={resetCustomForm}
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border bg-white"
                style={{ borderColor: '#E2E8F0', color: '#64748B' }}
                aria-label={copy.my.cancelEdit}
                title={copy.my.cancelEdit}
              >
                <X size={15} />
              </button>
            )}
          </div>
        </form>
      </motion.section>

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
                const activeGroupItems = group.items.filter(isActiveDeadlineItem);
                const endedGroupItems = group.items.filter(item => !isActiveDeadlineItem(item));
                const Chevron = collapsed ? ChevronRight : ChevronDown;
                const isPersonalGroup = group.id === PERSONAL_TOPIC_ID;

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
                            {isPersonalGroup && (
                              <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-black text-emerald-700">
                                {copy.my.localOnly}
                              </span>
                            )}
                            {!isPersonalGroup && group.pinned && (
                              <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-black text-emerald-700">
                                {copy.my.topicPinned}
                              </span>
                            )}
                            {!isPersonalGroup && group.explicitCount > 0 && (
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
        <section className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: copy.my.topics, value: subscribedTopics.length, color: '#0F766E' },
            { label: copy.my.singleSaved, value: subscribedItems.length, color: '#F43F5E' },
            { label: copy.my.personalTopic, value: userEvents.length, color: '#0F766E' },
            { label: copy.my.events, value: topicItems.length, color: '#F97316' },
          ].map(stat => (
            <div key={stat.label} className="rounded-3xl border bg-white p-4 shadow-sm" style={{ borderColor: '#E2E8F0' }}>
              <p className="text-2xl font-black" style={{ color: stat.color }}>{stat.value}</p>
              <p className="mt-1 text-xs font-bold" style={{ color: '#64748B' }}>{stat.label}</p>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
