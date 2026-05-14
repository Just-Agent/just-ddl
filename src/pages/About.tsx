import { motion } from 'framer-motion';
import { GitBranch, Layers, Monitor, Shield, Target, Zap, type LucideIcon } from 'lucide-react';
import { useLanguage } from '@/lib/language';

type Feature = { icon: LucideIcon; title: string; desc: string };
type ArchitectureStep = { step: string; title: string; desc: string };

export default function About() {
  const { language, copy } = useLanguage();

  const features: Feature[] = language === 'zh'
    ? [
      { icon: Target, title: '极简专注', desc: '只关心截止日，无广告无冗余' },
      { icon: Layers, title: '一专题一仓库', desc: '每个领域独立仓库，独立维护' },
      { icon: GitBranch, title: '社区驱动', desc: '数据由社区维护，PR 更新' },
      { icon: Zap, title: '订阅即收藏', desc: 'Pin 置顶逻辑，一键关注' },
      { icon: Shield, title: '本地加密', desc: 'PC 端自定义 DDL 本地加密存储' },
      { icon: Monitor, title: '多端覆盖', desc: '网页、小程序、PC 客户端逐步联动' },
    ]
    : [
      { icon: Target, title: 'Focused', desc: 'Deadline tracking without noise or ads' },
      { icon: Layers, title: 'One Topic One Repo', desc: 'Each domain has its own repository' },
      { icon: GitBranch, title: 'Community Data', desc: 'Data updates through issues and PRs' },
      { icon: Zap, title: 'Subscribe Fast', desc: 'Pin important topics and DDL items' },
      { icon: Shield, title: 'Local Private Data', desc: 'PC custom DDL data stays encrypted locally' },
      { icon: Monitor, title: 'Multi-Surface', desc: 'Web, mini-program, and PC client roadmap' },
    ];

  const architecture: ArchitectureStep[] = language === 'zh'
    ? [
      { step: '1', title: '独立仓库', desc: '每个专题一个独立 GitHub 仓库，例如 hackathon-ddl、agent-ddl、journal-ddl。' },
      { step: '2', title: '自动爬虫', desc: 'GitHub Actions 定时爬取最新 DDL 数据，并运行 validator 与 link-check。' },
      { step: '3', title: '统一汇总', desc: 'just-ddl 主站汇总所有专题，形成主题广场和统一入口。' },
      { step: '4', title: '自由扩展', desc: '新增领域直接新建仓库，后续可以接入小程序和移动端。' },
    ]
    : [
      { step: '1', title: 'Independent Repos', desc: 'Every topic has its own GitHub repository, such as hackathon-ddl, agent-ddl, and journal-ddl.' },
      { step: '2', title: 'Scheduled Crawlers', desc: 'GitHub Actions refresh data and run validators plus link checks.' },
      { step: '3', title: 'Unified Hub', desc: 'The just-ddl hub aggregates all topics into one polished Topic Plaza.' },
      { step: '4', title: 'Easy Expansion', desc: 'New domains can become new repositories and later connect to mini-program and mobile surfaces.' },
    ];

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
        <p className="text-xs font-black uppercase tracking-[0.22em]" style={{ color: '#0F766E' }}>JUST-DDL</p>
        <h1 className="mt-3 text-3xl font-black sm:text-4xl" style={{ color: '#0F172A' }}>{copy.about.title}</h1>
        <p className="mt-4 max-w-3xl text-sm leading-7" style={{ color: '#475569' }}>{copy.about.intro}</p>
      </motion.div>

      <section className="mt-10">
        <h2 className="text-xs font-black uppercase tracking-[0.2em]" style={{ color: '#0F766E' }}>{copy.about.features}</h2>
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="rounded-3xl border bg-white p-5 shadow-sm"
                style={{ borderColor: '#E2E8F0' }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl" style={{ background: '#ECFDF5', color: '#0F766E' }}>
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 text-sm font-black" style={{ color: '#0F172A' }}>{feature.title}</h3>
                <p className="mt-1 text-xs leading-5" style={{ color: '#64748B' }}>{feature.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xs font-black uppercase tracking-[0.2em]" style={{ color: '#0F766E' }}>{copy.about.architecture}</h2>
        <div className="mt-4 space-y-3">
          {architecture.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.08 }}
              className="flex items-start gap-4 rounded-3xl border bg-white p-5 shadow-sm"
              style={{ borderColor: '#E2E8F0' }}
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl text-xs font-black text-white" style={{ background: '#0F172A' }}>
                {step.step}
              </div>
              <div>
                <h3 className="text-sm font-black" style={{ color: '#0F172A' }}>{step.title}</h3>
                <p className="mt-1 text-xs leading-5" style={{ color: '#475569' }}>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-3xl border p-6 shadow-sm" style={{ background: 'linear-gradient(135deg, #ECFDF5, #F8FAFC)', borderColor: '#D1FAE5' }}>
        <h2 className="text-sm font-black" style={{ color: '#0F172A' }}>{copy.about.permissions}</h2>
        <div className="mt-4 space-y-3">
          <div className="flex items-start gap-3">
            <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: '#22C55E' }} />
            <p className="text-xs leading-6" style={{ color: '#475569' }}>
              {language === 'zh'
                ? '网页端与微信小程序优先做纯静态展示：浏览专题、订阅收藏官方公开 DDL、查看倒计时。'
                : 'The web app and mini-program focus on static browsing: topics, public DDL subscriptions, and countdowns.'}
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: '#F59E0B' }} />
            <p className="text-xs leading-6" style={{ color: '#475569' }}>
              {language === 'zh'
                ? 'PC EXE 客户端与移动 APP 承担完整版能力：自定义 DDL、本地加密、离线使用、桌面提醒。'
                : 'The PC EXE client and mobile app carry the full feature set: custom DDL, local encryption, offline use, and reminders.'}
            </p>
          </div>
        </div>
      </section>

      <section className="mt-8 text-center">
        <p className="text-xs" style={{ color: '#94A3B8' }}>{copy.about.openSource}</p>
        <a
          href="https://github.com/Just-Agent/just-ddl"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1.5 rounded-2xl px-5 py-2.5 text-xs font-black text-white transition hover:-translate-y-0.5"
          style={{ background: '#0F766E' }}
        >
          {copy.about.repoAction}
        </a>
      </section>
    </div>
  );
}
