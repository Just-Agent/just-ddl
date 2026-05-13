import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'just-ddl-subscriptions';

export function useSubscriptions() {
  const [subs, setSubs] = useState<Set<string>>(() => {
    try { const raw = localStorage.getItem(STORAGE_KEY); return raw ? new Set(JSON.parse(raw)) : new Set(); }
    catch { return new Set(); }
  });

  useEffect(() => { localStorage.setItem(STORAGE_KEY, JSON.stringify([...subs])); }, [subs]);

  const isSubscribed = useCallback((id: string) => subs.has(id), [subs]);
  const toggle = useCallback((id: string) => {
    setSubs(prev => { const next = new Set(prev); if (next.has(id)) next.delete(id); else next.add(id); return next; });
  }, []);
  const subscribedIds = [...subs];
  const count = subs.size;

  return { isSubscribed, toggle, subscribedIds, count };
}
