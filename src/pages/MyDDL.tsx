import { useMemo } from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { Heart, Pin, ArrowRight, Monitor } from 'lucide-react';
import { useSubscriptions } from '@/hooks/useSubscriptions';
import { getAllDDL, type DDLItem } from '@/data/ddl-data';
import { getTopicById } from '@/data/topics';
import DDLCard from '@/components/DDLCard';

interface DDLWithColor extends DDLItem {
  topicColor?: string;
}

export default function MyDDL() {
  const { subscribedIds } = useSubscriptions();

  const allDDL = getAllDDL();

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
    <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 sm:py-8">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-xl font-bold sm:text-2xl" style={{ color: '#1C1917' }}>
          <Heart size={22} className="mr-1.5 inline" style={{ color: '#F43F5E', fill: '#F43F5E' }} /> 我的DDL
        </h1>
        <p className="mt-1 text-xs sm:text-sm" style={{ color: '#78716C' }}>
          已订阅 <strong style={{ color: '#F97316' }}>{subscribedTopics.length}</strong> 个专题，单独收藏 <strong style={{ color: '#F97316' }}>{subscribedItems.length}</strong> 个DDL
        </p>
      </motion.div>

      {topicItems.length === 0 ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-10 rounded-2xl border py-14 text-center" style={{ background: 'white', borderColor: '#FED7AA' }}>
          <Pin size={36} className="mx-auto" style={{ color: '#D6D3D1' }} />
          <h3 className="mt-4 text-sm font-semibold" style={{ color: '#1C1917' }}>还没有订阅任何内容</h3>
          <p className="mt-1 text-xs" style={{ color: '#A8A29E' }}>去专题广场订阅你关心的领域</p>
          <Link to="/" className="mt-4 inline-flex items-center gap-1 rounded-xl px-5 py-2 text-xs font-medium text-white" style={{ background: '#F97316' }}>
            浏览专题广场 <ArrowRight size={12} />
          </Link>
        </motion.div>
      ) : (
        <>
          {activeItems.length > 0 && (
            <section className="mt-6">
              <h2 className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#F97316' }}>进行中 ({activeItems.length})</h2>
              <div className="mt-3 space-y-3">
                {activeItems.map((item, i) => (
                  <DDLCard key={item.id} item={item} index={i} topicColor={item.topicColor || '#F97316'} />
                ))}
              </div>
            </section>
          )}

          {endedItems.length > 0 && (
            <section className="mt-8">
              <h2 className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#A8A29E' }}>已结束 ({endedItems.length})</h2>
              <div className="mt-3 space-y-3 opacity-60">
                {endedItems.map((item, i) => (
                  <DDLCard key={item.id} item={item} index={i} topicColor={item.topicColor || '#D6D3D1'} />
                ))}
              </div>
            </section>
          )}
        </>
      )}

      <section className="mt-10 rounded-2xl border p-5" style={{ background: 'linear-gradient(135deg, #FFF7ED, #FFF1F2)', borderColor: '#FED7AA' }}>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: 'white' }}>
            <Monitor size={18} style={{ color: '#F97316' }} />
          </div>
          <div>
            <h3 className="text-sm font-semibold" style={{ color: '#1C1917' }}>自定义个人DDL</h3>
            <p className="text-xs" style={{ color: '#78716C' }}>下载 PC 客户端，创建属于你的私人截止日，本地加密存储</p>
          </div>
        </div>
        <p className="mt-3 text-[11px] leading-relaxed" style={{ color: '#A8A29E' }}>
          网页端仅支持浏览和收藏官方公开DDL。如需添加个人自定义截止日（如课程作业、项目节点、个人目标），请使用 PC EXE 客户端或移动APP。
        </p>
      </section>
    </div>
  );
}
