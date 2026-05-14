import { motion } from 'framer-motion';
import { Target, Layers, GitBranch, Zap, Shield, Monitor } from 'lucide-react';

const features = [
  { icon: <Target size={20} />, title: '极简专注', desc: '只关心截止日，无广告无冗余' },
  { icon: <Layers size={20} />, title: '一专题一仓库', desc: '每个领域独立仓库，独立维护' },
  { icon: <GitBranch size={20} />, title: '社区驱动', desc: '数据由社区维护，PR更新' },
  { icon: <Zap size={20} />, title: '订阅即收藏', desc: 'Pin置顶逻辑，一键关注' },
  { icon: <Shield size={20} />, title: '本地加密', desc: 'PC端自定义DDL本地加密存储' },
  { icon: <Monitor size={20} />, title: '多端覆盖', desc: '网页+小程序+PC客户端' },
];

const architecture = [
  { step: '1', title: '独立仓库', desc: '每个专题一个独立GitHub仓库，如 hackathon-ddl, agent-ddl' },
  { step: '2', title: '自动爬虫', desc: 'GitHub Actions 定时爬取最新DDL数据' },
  { step: '3', title: '增量更新', desc: '用户仅加载已订阅内容，低内存低流量' },
  { step: '4', title: '自由扩展', desc: '新增领域直接新建仓库，主程序零改动' },
];

export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-xl font-bold sm:text-2xl" style={{ color: '#1C1917' }}>关于 Just DDL</h1>
        <p className="mt-2 text-sm leading-relaxed" style={{ color: '#78716C' }}>
          Just DDL 是一个纯截止日期追踪平台，采用极简设计理念，专注帮助学生、科研人员、开发者不再错过任何一个重要的截止日。
        </p>
      </motion.div>

      {/* Features */}
      <section className="mt-10">
        <h2 className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#F97316' }}>产品特性</h2>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
              className="rounded-xl border bg-white p-4" style={{ borderColor: '#FED7AA' }}>
              <div style={{ color: '#F97316' }}>{f.icon}</div>
              <h3 className="mt-2 text-xs font-semibold" style={{ color: '#1C1917' }}>{f.title}</h3>
              <p className="mt-1 text-[11px]" style={{ color: '#A8A29E' }}>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Architecture */}
      <section className="mt-10">
        <h2 className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#F97316' }}>架构设计</h2>
        <div className="mt-4 space-y-3">
          {architecture.map((a, i) => (
            <motion.div key={a.step} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }}
              className="flex items-start gap-4 rounded-xl border bg-white p-4" style={{ borderColor: '#FED7AA' }}>
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold" style={{ background: '#FFF7ED', color: '#F97316' }}>{a.step}</div>
              <div>
                <h3 className="text-sm font-semibold" style={{ color: '#1C1917' }}>{a.title}</h3>
                <p className="mt-0.5 text-xs" style={{ color: '#78716C' }}>{a.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Permission rules */}
      <section className="mt-10 rounded-2xl border p-5" style={{ background: '#FFF7ED', borderColor: '#FED7AA' }}>
        <h2 className="text-sm font-semibold" style={{ color: '#1C1917' }}>功能权限说明</h2>
        <div className="mt-3 space-y-2">
          <div className="flex items-start gap-2">
            <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full" style={{ background: '#22C55E' }} />
            <p className="text-xs" style={{ color: '#78716C' }}><strong style={{ color: '#1C1917' }}>网页端 + 微信小程序：</strong>纯静态展示。浏览专题、订阅收藏官方公开DDL。支持查看倒计时、收藏关注。</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full" style={{ background: '#F97316' }} />
            <p className="text-xs" style={{ color: '#78716C' }}><strong style={{ color: '#1C1917' }}>PC EXE 客户端 + 移动APP：</strong>功能完整版。支持创建自定义DDL、本地加密存储、桌面悬浮窗、离线使用。</p>
          </div>
        </div>
      </section>

      {/* Open source */}
      <section className="mt-8 text-center">
        <p className="text-xs" style={{ color: '#A8A29E' }}>Just DDL 是开源项目，欢迎贡献代码和数据</p>
        <a href="https://github.com/Just-Agent/just-ddl" target="_blank" rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1.5 rounded-xl px-5 py-2 text-xs font-medium text-white transition-all" style={{ background: '#F97316' }}>
          GitHub 仓库
        </a>
      </section>
    </div>
  );
}
