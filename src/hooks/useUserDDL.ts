import { useCallback, useEffect, useMemo, useState } from 'react';
import type { DDLItem } from '@/data/ddl-data';

const STORAGE_KEY = 'just-ddl:user-events:v1';
const MAX_EVENTS = 200;

export interface UserDDLEvent {
  id: string;
  title: string;
  deadline: string;
  category: string;
  location: string;
  tags: string[];
  url?: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
}

export type UserDDLEventInput = Omit<UserDDLEvent, 'id' | 'createdAt' | 'updatedAt'>;

function text(value: unknown, fallback = '') {
  return typeof value === 'string' ? value.trim() : fallback;
}

function cleanTags(value: unknown) {
  if (Array.isArray(value)) {
    return value.map(tag => text(tag)).filter(Boolean).slice(0, 6);
  }
  return text(value)
    .split(/[,，、\s]+/)
    .map(tag => tag.trim())
    .filter(Boolean)
    .slice(0, 6);
}

function normalizeDeadline(value: unknown) {
  const raw = text(value);
  const time = Date.parse(raw);
  if (!raw || !Number.isFinite(time)) return '';
  return new Date(time).toISOString();
}

function normalizeUrl(value: unknown) {
  const raw = text(value).slice(0, 240);
  if (!raw) return undefined;
  try {
    const url = new URL(raw);
    return url.protocol === 'http:' || url.protocol === 'https:' ? url.toString() : undefined;
  } catch {
    return undefined;
  }
}

function normalizeEvent(value: unknown): UserDDLEvent | null {
  if (!value || typeof value !== 'object') return null;
  const record = value as Record<string, unknown>;
  const title = text(record.title).slice(0, 80);
  const deadline = normalizeDeadline(record.deadline || record.date);
  if (!title || !deadline) return null;

  const now = new Date().toISOString();
  const tags = cleanTags(record.tags);

  return {
    id: text(record.id) || `user-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    title,
    deadline,
    category: text(record.category, '个人').slice(0, 24) || '个人',
    location: text(record.location, '本地').slice(0, 40) || '本地',
    tags: tags.length ? tags : ['个人'],
    url: normalizeUrl(record.url),
    description: text(record.description).slice(0, 180) || undefined,
    createdAt: normalizeDeadline(record.createdAt) || now,
    updatedAt: normalizeDeadline(record.updatedAt) || now,
  };
}

function readEvents() {
  try {
    if (typeof localStorage === 'undefined') return [];
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    if (!Array.isArray(parsed)) return [];
    const seen = new Set<string>();
    return parsed
      .map(normalizeEvent)
      .filter((event): event is UserDDLEvent => Boolean(event))
      .filter(event => {
        if (seen.has(event.id)) return false;
        seen.add(event.id);
        return true;
      })
      .slice(0, MAX_EVENTS);
  } catch {
    return [];
  }
}

function writeEvents(events: UserDDLEvent[]) {
  if (typeof localStorage === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(events.slice(0, MAX_EVENTS)));
}

export function userEventToDDLItem(event: UserDDLEvent): DDLItem {
  const localDate = new Date(event.deadline);
  const dateRange = Number.isFinite(localDate.getTime()) ? localDate.toLocaleString('zh-CN') : event.deadline;
  return {
    id: event.id,
    title: event.title,
    deadline: event.deadline,
    dateRange,
    location: event.location,
    isOnline: false,
    tags: event.tags,
    url: event.url || '',
    status: localDate.getTime() < Date.now() ? 'ended' : 'upcoming',
    stage: event.category,
    source: '个人添加',
    type: 'custom',
    description: event.description,
  };
}

export function useUserDDL() {
  const [events, setEvents] = useState<UserDDLEvent[]>(readEvents);

  useEffect(() => {
    const onStorage = (event: StorageEvent) => {
      if (event.key === STORAGE_KEY) setEvents(readEvents());
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const persist = useCallback((updater: (current: UserDDLEvent[]) => UserDDLEvent[]) => {
    setEvents(current => {
      const next = updater(current).slice(0, MAX_EVENTS);
      try {
        writeEvents(next);
      } catch {
        /* localStorage can be unavailable or full in restricted browsers */
      }
      return next;
    });
  }, []);

  const addEvent = useCallback((input: UserDDLEventInput) => {
    const now = new Date().toISOString();
    const normalized = normalizeEvent({
      ...input,
      id: `user-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      createdAt: now,
      updatedAt: now,
    });
    if (!normalized) return false;
    persist(current => [normalized, ...current]);
    return true;
  }, [persist]);

  const updateEvent = useCallback((id: string, input: UserDDLEventInput) => {
    const currentEvent = events.find(event => event.id === id);
    if (!currentEvent) return false;
    const normalized = normalizeEvent({
      ...currentEvent,
      ...input,
      id,
      createdAt: currentEvent.createdAt,
      updatedAt: new Date().toISOString(),
    });
    if (!normalized) return false;
    persist(current => current.map(event => event.id === id ? normalized : event));
    return true;
  }, [events, persist]);

  const removeEvent = useCallback((id: string) => {
    persist(current => current.filter(event => event.id !== id));
  }, [persist]);

  const replaceEvents = useCallback((nextEvents: unknown[]) => {
    const seen = new Set<string>();
    const normalized = nextEvents
      .map(normalizeEvent)
      .filter((event): event is UserDDLEvent => Boolean(event))
      .filter(event => {
        if (seen.has(event.id)) return false;
        seen.add(event.id);
        return true;
      })
      .slice(0, MAX_EVENTS);
    persist(() => normalized);
    return normalized.length;
  }, [persist]);

  const ddlItems = useMemo(() => events.map(userEventToDDLItem), [events]);

  return {
    events,
    ddlItems,
    addEvent,
    updateEvent,
    removeEvent,
    replaceEvents,
    storageKey: STORAGE_KEY,
  };
}
