import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ExternalLink, GitBranch, GitPullRequest, Globe2, ListChecks, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/lib/language';

export default function ContributeTopic() {
  const { language } = useLanguage();
  const zh = language === 'zh';

  const copy = zh
    ? {
      eyebrow: '贡献者教程',
      title: '接入你的 DDL 专题？',
      lead: '新增专题不要先把数据塞进 Just-DDL 总仓库。正确做法是：你先维护一个独立 xxx-ddl 仓库，发布 GitHub Pages 和标准 JSON 数据出口，再向 Hub 提交 PR 注册接入。',
      rule: '如果你要新增一个 DDL 专题，请先创建独立 xxx-ddl 仓库并发布 GitHub Pages，再向 Just-Agent/just-ddl 提交 PR 注册专题。Just-DDL Hub 不直接托管所有专题数据，而是接入各专题仓库的标准数据出口。',
      stepsTitle: '按这 6 步做',
      steps: [
        '确定专题边界，例如 robotics-ddl、music-ddl、finance-ddl。',
        '在你的 GitHub 账号下创建公开仓库 friend/xxx-ddl。',
        '补齐 README、data/items.json、data/sources.json 和专题页面。',
        '发布 GitHub Pages，确认页面和 JSON 数据能公开访问。',
        '向 Just-Agent/just-ddl 提交 PR，只注册专题元数据。',
        '合并后你继续维护专题仓库，Hub 负责展示、搜索、订阅和导航。',
      ],
      submitTitle: 'PR 到 Hub 时提交什么？',
      submitItems: ['专题名、中文/英文描述、分类、标签、图标/颜色', '仓库地址：friend/xxx-ddl', 'Pages 地址：专题页面入口', '数据出口：data/items.json 或等价公开 JSON', '维护者信息、更新频率、数据来源说明'],
      notTitle: '不要这样做',
      notItems: ['不要把大量专题数据直接提交进 just-ddl Hub', '不要要求 Hub 执行外部仓库里的脚本', '不要把 fork 当成长期官方托管', '不要用不可公开访问的私有数据源作为默认入口'],
      visualTitle: '完整图文步骤',
      visualIntro: '下面的图是给第一次贡献的人看的。先按文字步骤做；遇到不清楚的地方，再看对应图片。',
      modeTitle: '三种接入模式怎么选？',
      modeIntro: '默认先外部联邦接入；fork 镜像只用于备份、审核和过渡；官方托管是专题成熟后的 ownership transfer。',
      openPr: '打开 PR 对比页',
      readRepo: '查看 GitHub 仓库',
    }
    : {
      eyebrow: 'Contributor Guide',
      title: 'Connect Your DDL Topic',
      lead: 'Do not start by dumping data into the Just-DDL Hub. Create an independent xxx-ddl repository first, publish GitHub Pages and standard JSON exports, then open a Hub PR to register the topic.',
      rule: 'To add a new DDL topic, first create an independent xxx-ddl repository and publish GitHub Pages. Then open a PR to Just-Agent/just-ddl to register the topic. The Hub does not directly host every topic dataset; it consumes standard data exports from topic repositories.',
      stepsTitle: 'Follow these 6 steps',
      steps: [
        'Define the topic boundary, such as robotics-ddl, music-ddl, or finance-ddl.',
        'Create a public friend/xxx-ddl repository under your own GitHub account.',
        'Add README, data/items.json, data/sources.json, and a topic page.',
        'Publish GitHub Pages and verify the page plus JSON are public.',
        'Open a PR to Just-Agent/just-ddl with only topic registration metadata.',
        'After merge, you keep maintaining the topic repository while the Hub handles discovery, search, subscription, and navigation.',
      ],
      submitTitle: 'What should the Hub PR include?',
      submitItems: ['Topic name, bilingual description, category, tags, icon/color', 'Repository URL: friend/xxx-ddl', 'Pages URL: topic page entry', 'Data export: data/items.json or equivalent public JSON', 'Maintainer, update frequency, and source notes'],
      notTitle: 'Do not do this',
      notItems: ['Do not submit large topic datasets directly into the Hub', 'Do not ask the Hub to execute scripts from external repositories', 'Do not treat a fork as long-term official hosting', 'Do not rely on private data sources as the default entry'],
      visualTitle: 'Step-by-step visual guide',
      visualIntro: 'These images are for first-time contributors. Follow the text steps first, then use the images when a detail is unclear.',
      modeTitle: 'Which connection mode should you choose?',
      modeIntro: 'External federation is the default. Forks are for backup/review/transition. Official hosting is a later ownership transfer after the topic matures.',
      openPr: 'Open PR compare',
      readRepo: 'View GitHub repo',
    };

  const stepCards = [
    { icon: GitBranch, text: copy.steps[0] },
    { icon: Globe2, text: copy.steps[1] },
    { icon: ListChecks, text: copy.steps[2] },
    { icon: ShieldCheck, text: copy.steps[3] },
    { icon: GitPullRequest, text: copy.steps[4] },
    { icon: CheckCircle2, text: copy.steps[5] },
  ];

  const practicalImages = [
    { src: 'assets/contributor-guide/federated-pr-01.jpg', title: zh ? '1. 先判断应该 PR 哪个仓库' : '1. Choose the right repository' },
    { src: 'assets/contributor-guide/federated-pr-02.jpg', title: zh ? '2. 新建自己的 xxx-ddl 专题仓库' : '2. Create your own xxx-ddl repository' },
    { src: 'assets/contributor-guide/federated-pr-03.jpg', title: zh ? '3. 发布 Pages、校验数据并提交 Hub PR' : '3. Publish Pages, validate data, and open a Hub PR' },
    { src: 'assets/contributor-guide/federated-pr-04.jpg', title: zh ? '4. 合并后展示、维护与升级' : '4. Display, maintain, and upgrade after merge' },
  ];

  const modeImages = [
    { src: 'assets/contributor-guide/justddl-three-modes-01.png', title: zh ? '三种接入模式总览' : 'Three connection modes overview' },
    { src: 'assets/contributor-guide/justddl-three-modes-02.png', title: zh ? '默认推荐：外部联邦节点' : 'Default: external federated node' },
    { src: 'assets/contributor-guide/justddl-three-modes-03.png', title: zh ? '过渡工具：fork 镜像' : 'Transition tool: fork mirror' },
    { src: 'assets/contributor-guide/justddl-three-modes-04.png', title: zh ? '成熟后：官方托管节点' : 'Mature topic: official hosting' },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      <motion.section initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="rounded-[30px] border bg-white p-6 shadow-sm sm:p-8" style={{ borderColor: '#DBEAFE' }}>
        <p className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-black" style={{ background: '#EFF6FF', color: '#1D4ED8' }}>
          <GitPullRequest size={14} /> {copy.eyebrow}
        </p>
        <h1 className="mt-5 text-3xl font-black leading-tight sm:text-5xl" style={{ color: '#0F172A' }}>{copy.title}</h1>
        <p className="mt-4 max-w-4xl text-base font-semibold leading-8" style={{ color: '#475569' }}>{copy.lead}</p>
        <blockquote className="mt-6 rounded-3xl border-l-4 p-5 text-sm font-bold leading-7" style={{ background: '#F8FAFC', borderColor: '#0F766E', color: '#0F172A' }}>
          {copy.rule}
        </blockquote>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="https://github.com/Just-Agent/just-ddl/compare" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-black text-white transition hover:-translate-y-0.5" style={{ background: '#0F766E' }}>
            {copy.openPr}<ArrowRight size={16} />
          </a>
          <a href="https://github.com/Just-Agent/just-ddl" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-2xl border bg-white px-5 py-3 text-sm font-black transition hover:-translate-y-0.5" style={{ borderColor: '#CBD5E1', color: '#0F172A' }}>
            {copy.readRepo}<ExternalLink size={15} />
          </a>
        </div>
      </motion.section>

      <section className="mt-8 grid gap-5 lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded-3xl border bg-white p-6 shadow-sm" style={{ borderColor: '#E2E8F0' }}>
          <h2 className="text-xl font-black" style={{ color: '#0F172A' }}>{copy.stepsTitle}</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {stepCards.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.text} className="flex gap-3 rounded-2xl border p-4" style={{ borderColor: '#E2E8F0', background: '#F8FAFC' }}>
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl text-xs font-black text-white" style={{ background: '#0F172A' }}>{index + 1}</div>
                  <div>
                    <Icon size={16} style={{ color: '#0F766E' }} />
                    <p className="mt-2 text-xs font-bold leading-6" style={{ color: '#475569' }}>{step.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid gap-5">
          <div className="rounded-3xl border bg-white p-6 shadow-sm" style={{ borderColor: '#D1FAE5' }}>
            <h2 className="text-sm font-black" style={{ color: '#0F172A' }}>{copy.submitTitle}</h2>
            <div className="mt-4 space-y-2">
              {copy.submitItems.map(item => (
                <p key={item} className="flex gap-2 text-xs font-semibold leading-6" style={{ color: '#475569' }}>
                  <CheckCircle2 className="mt-1 shrink-0" size={14} style={{ color: '#16A34A' }} /> {item}
                </p>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border bg-white p-6 shadow-sm" style={{ borderColor: '#FED7AA' }}>
            <h2 className="text-sm font-black" style={{ color: '#0F172A' }}>{copy.notTitle}</h2>
            <div className="mt-4 space-y-2">
              {copy.notItems.map(item => (
                <p key={item} className="flex gap-2 text-xs font-semibold leading-6" style={{ color: '#7C2D12' }}>
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full" style={{ background: '#F97316' }} /> {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-black" style={{ color: '#0F172A' }}>{copy.visualTitle}</h2>
          <p className="mt-2 text-sm font-semibold leading-7" style={{ color: '#64748B' }}>{copy.visualIntro}</p>
        </div>
        <div className="mt-5 grid gap-5">
          {practicalImages.map((image) => (
            <figure key={image.src} className="overflow-hidden rounded-3xl border bg-white shadow-sm" style={{ borderColor: '#DBEAFE' }}>
              <figcaption className="border-b px-5 py-4 text-sm font-black" style={{ borderColor: '#DBEAFE', color: '#0F172A' }}>{image.title}</figcaption>
              <img src={image.src} alt={image.title} loading="lazy" className="block w-full" />
            </figure>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-black" style={{ color: '#0F172A' }}>{copy.modeTitle}</h2>
          <p className="mt-2 text-sm font-semibold leading-7" style={{ color: '#64748B' }}>{copy.modeIntro}</p>
        </div>
        <div className="mt-5 grid gap-5">
          {modeImages.map((image) => (
            <figure key={image.src} className="overflow-hidden rounded-3xl border bg-white shadow-sm" style={{ borderColor: '#DBEAFE' }}>
              <figcaption className="border-b px-5 py-4 text-sm font-black" style={{ borderColor: '#DBEAFE', color: '#0F172A' }}>{image.title}</figcaption>
              <img src={image.src} alt={image.title} loading="lazy" className="block w-full" />
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}
