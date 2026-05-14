import { useMemo } from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { Heart, Pin, ArrowRight, Monitor } from 'lucide-react';
import { useSubscriptions } from '@/hooks/useSubscriptions';
import { getAllDDL, type DDLItem } from '@/data/ddl-data';
import { getTopicById } from '@/data/topics';
import DDLCard from '@/components/DDLCard';
import { useLanguage } from '@/lib/language';

interface DDLWithColor extends DDLItem {
  topicColor?: string;
}

export default function MyDDL() {
  const { subscribedIds } = useSubscriptions();
  const { copy } = useLanguage();

  const allDDL = useMemo(() => getAllDDL(), []);

  const subscribedItems = useMemo(() => {
    const items: DDLWithColor[] = [];
    for (const id of subscribedIds) {
      const d = allDDL.find(x => x.id === id);
      if (d) items.push(d);
    }
    return items.sort((a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime());
  }, [subscribedIds, allDDL]);

  const topicItems = useMemo(() => {
    const seen = new Set<string>();
    const result: DDLWithColor[] = [];

    for (const id of subscribedIds) {
      const topic = getTopicById(id);
      if (topic) {
        const topicDDLs = allDDL.filter(d => d.id.startsWith(topic.id));
        for (const d of topicDDLs) {
          if (!seen.has(d.id)) {
            seen.add(d.id);
            result.push({ ...d, topicColor: topic.color });
          }
        }
      }
    }

    for (const d of subscribedItems) {
      if (!seen.has(d.id)) {
        seen.add(d.id);
        result.push(d);
      }
    }

    return result.sort((a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime());
  }, [subscribedIds, allDDL, subscribedItems]);

  const subscribedTopics = useMemo(() => {
    const list = [];
    for (const id of subscribedIds) {
      const t = getTopicById(id);
      if (t) list.push(t);
    }
    return list;
  }, [subscribedIds]);

  const activeItems = topicItems.filter(d => d.status !== 'ended');
  const endedItems = topicItems.filter(d => d.status === 'ended');

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-black sm:text-3xl" style={{ color: '#0F172A' }}>
          <Heart size={25} className="mr-1.5 inline" style={{ color: '#F43F5E', fill: '#F43F5E' }} /> {copy.my.title}
        </h1>
        <p className="mt-2 text-sm" style={{ color: '#64748B' }}>
          {copy.my.summary} <strong style={{ color: '#0F766E' }}>{subscribedTopics.length}</strong> {copy.my.topics}，{copy.my.individual} <strong style={{ color: '#0F766E' }}>{subscribedItems.length}</strong> {copy.my.items}
        </p>
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
          {activeItems.length > 0 && (
            <section className="mt-6">
              <h2 className="text-xs font-black uppercase tracking-[0.18em]" style={{ color: '#0F766E' }}>{copy.my.active} ({activeItems.length})</h2>
              <div className="mt-3 space-y-3">
                {activeItems.map((item, i) => (
                  <DDLCard key={item.id} item={item} index={i} topicColor={item.topicColor || '#F97316'} />
                ))}
              </div>
            </section>
          )}

          {endedItems.length > 0 && (
            <section className="mt-8">
              <h2 className="text-xs font-black uppercase tracking-[0.18em]" style={{ color: '#94A3B8' }}>{copy.my.ended} ({endedItems.length})</h2>
              <div className="mt-3 space-y-3 opacity-60">
                {endedItems.map((item, i) => (
                  <DDLCard key={item.id} item={item} index={i} topicColor={item.topicColor || '#D6D3D1'} />
                ))}
              </div>
            </section>
          )}
        </>
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
