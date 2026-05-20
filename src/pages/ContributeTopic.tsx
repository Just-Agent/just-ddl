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
      routesTitle: '新增专题有两条路线',
      routes: [
        {
          title: '新手路线：Hub 孵化区',
          desc: '适合基础薄弱、暂时不会独立建仓库的贡献者。把少量静态 JSON 提交到 public/contrib-topics/{topicId}，最多 5 个孵化专题、每个最多 50 条。',
        },
        {
          title: '标准路线：独立仓库',
          desc: '适合能长期维护专题的贡献者。创建自己的 xxx-ddl 仓库，发布 Pages 和 data/items.json，再向 Hub 注册。',
        },
      ],
      incubatorTitle: 'Hub 孵化区接口',
      incubatorIntro: '孵化区是临时协作入口，不是长期托管。它只接受静态 JSON，不在 Hub 内运行贡献者 crawler。',
      incubatorItems: ['注册表：public/contrib-topics/registry.json', '专题数据：public/contrib-topics/{topicId}/items.json', '来源说明：public/contrib-topics/{topicId}/sources.json', '校验命令：node scripts/validate-contrib-topics.mjs', '成熟后迁出为独立 xxx-ddl 仓库，并从孵化区删除'],
      standardsTitle: '一个合格的专题仓库要满足什么？',
      standardsIntro: '新增专题仓库不需要和 Just-Agent 完全同款，但必须能被 Hub 稳定消费、能被人审查、能长期维护。',
      standards: [
        '仓库名使用 xxx-ddl，例如 music-ddl、finance-ddl、robotics-ddl；专题边界要清楚，不要把多个无关领域混在一个仓库。',
        '必须公开 `data/items.json`，主分支为 `main`，Hub 默认读取 `https://raw.githubusercontent.com/owner/xxx-ddl/main/data/items.json`。',
        '`items.json` 至少包含 `id/title/deadline/url/source`，建议补齐 `dateRange/location/isOnline/tags/status/stage/type/description/subtopic/previewImage`。',
        '每条 DDL 优先使用官方/主办方/权威聚合来源，`url` 必须可公开访问；不确定的信息要在 `source` 或 `description` 里说明。',
        '建议保留 `data/sources.json`、`scripts/validate-data.mjs`、`scripts/link-check.mjs`、`scripts/crawl-sources.mjs` 和 `.github/workflows/update-data.yml`。',
        '必须发布 GitHub Pages，让用户能看到专题页面；README 要说明数据来源、更新频率、维护者和如何反馈错误。',
      ],
      templateTitle: '如何用已有子专题当模板？',
      templateSteps: [
        '优先参考 sports-ddl：适合有子专题、事件缩略图、列表/格子视图、赛事/活动类专题。',
        '期刊 CFP、征稿、资料型专题可以参考 journal-ddl；结构更轻，适合大量文字条目。',
        '复制模板后先全局替换专题 ID、仓库名、标题、描述、颜色、标签和 Pages 地址。',
        '删除模板里的示例数据，改写 `data/items.json` 和 `data/sources.json`，保证每条记录都有真实来源。',
        '按你的来源改 `scripts/crawl-sources.mjs`，再运行 validator/link-check；无法自动爬的来源也要能人工维护 JSON。',
        '启用 GitHub Pages 和 Actions，确认页面、README、JSON 数据出口都能被匿名访问。',
      ],
      hubTitle: '如何接入 Just-DDL 总站？',
      hubItems: [
        '在 Just-Agent/just-ddl 提交 PR，通常只注册专题元数据，不提交整份专题数据。',
        '在 `src/data/topics.ts` 新增一条 Topic：`id/name/description/icon/color/repo/site/status/category/tags`。',
        '`repo` 可以是外部仓库，例如 `friend/music-ddl`；`site` 写你的 Pages 地址，例如 `https://friend.github.io/music-ddl/`。',
        'Hub 同步时会读取你仓库的 `data/items.json`，并用 `itemCount`、搜索、主题广场和小程序数据出口消费它。',
        'PR 描述里贴上 Pages 地址、raw JSON 地址、数据来源说明、更新频率和维护者联系方式。',
      ],
      skillTitle: '可以用仓库自带 skill 辅助接入',
      skillIntro: '主站提供 `skills/just-ddl-topic-onboarding/SKILL.md`，用于把这套流程变成可复用的 AI 工作流。',
      skillItems: [
        '适合让 AI 帮你从 sports-ddl / journal-ddl 复制模板并改成自己的 xxx-ddl 专题。',
        '适合检查 `data/items.json` 字段、来源、链接、UTF-8 编码和 Pages 数据出口。',
        '适合生成 Hub 注册 PR 需要的 `src/data/topics.ts` 元数据和 PR checklist。',
      ],
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
      routesTitle: 'Two ways to add a topic',
      routes: [
        {
          title: 'Beginner route: Hub incubator',
          desc: 'For contributors who are not ready to maintain a separate repository. Submit small static JSON under public/contrib-topics/{topicId}; up to 5 incubator topics and 50 items each.',
        },
        {
          title: 'Standard route: independent repo',
          desc: 'For contributors who can maintain a topic long term. Create your own xxx-ddl repository, publish Pages and data/items.json, then register it with the Hub.',
        },
      ],
      incubatorTitle: 'Hub incubator interface',
      incubatorIntro: 'The incubator is a temporary collaboration entry, not permanent hosting. It only accepts static JSON and does not run contributor crawlers inside the Hub.',
      incubatorItems: ['Registry: public/contrib-topics/registry.json', 'Topic data: public/contrib-topics/{topicId}/items.json', 'Source notes: public/contrib-topics/{topicId}/sources.json', 'Validation: node scripts/validate-contrib-topics.mjs', 'Migrate to an independent xxx-ddl repository once stable'],
      standardsTitle: 'What makes a valid topic repository?',
      standardsIntro: 'A topic repository does not need to copy Just-Agent exactly, but it must be stable, reviewable, and easy for the Hub to consume.',
      standards: [
        'Use an xxx-ddl repository name, such as music-ddl, finance-ddl, or robotics-ddl. Keep the topic boundary clear.',
        'Expose public `data/items.json` on the `main` branch. The Hub reads `https://raw.githubusercontent.com/owner/xxx-ddl/main/data/items.json` by default.',
        '`items.json` must include `id/title/deadline/url/source`; recommended fields are `dateRange/location/isOnline/tags/status/stage/type/description/subtopic/previewImage`.',
        'Prefer official organizer or authoritative aggregate sources. `url` must be public, and uncertain information should be explained in `source` or `description`.',
        'Recommended files: `data/sources.json`, `scripts/validate-data.mjs`, `scripts/link-check.mjs`, `scripts/crawl-sources.mjs`, and `.github/workflows/update-data.yml`.',
        'Publish GitHub Pages so users can browse the topic. README should explain sources, update cadence, maintainers, and error reporting.',
      ],
      templateTitle: 'How to adapt an existing topic as a template',
      templateSteps: [
        'Start from sports-ddl when you need subtopics, previews, list/grid views, and event-style cards.',
        'Use journal-ddl for CFP or text-heavy topics with many simple records.',
        'After copying the template, replace topic ID, repository name, title, description, color, tags, and Pages URL.',
        'Remove sample records, rewrite `data/items.json` and `data/sources.json`, and keep every item traceable to a real source.',
        'Adapt `scripts/crawl-sources.mjs` to your sources, then run validator and link-check. Manual JSON maintenance is acceptable when crawling is not practical.',
        'Enable GitHub Pages and Actions, then verify the page, README, and JSON export are public.',
      ],
      hubTitle: 'How to connect it to the Just-DDL Hub',
      hubItems: [
        'Open a PR to Just-Agent/just-ddl. In most cases, register metadata only; do not submit the entire dataset into the Hub.',
        'Add one Topic entry in `src/data/topics.ts`: `id/name/description/icon/color/repo/site/status/category/tags`.',
        '`repo` can be external, such as `friend/music-ddl`; `site` should be your Pages URL, such as `https://friend.github.io/music-ddl/`.',
        'The Hub sync reads your repository `data/items.json` and uses it for item counts, search, Topic Plaza, and mini-program exports.',
        'In the PR description, include Pages URL, raw JSON URL, source notes, update cadence, and maintainer contact.',
      ],
      skillTitle: 'Use the repository skill for onboarding',
      skillIntro: 'The Hub ships `skills/just-ddl-topic-onboarding/SKILL.md` so this workflow can be reused by AI coding agents.',
      skillItems: [
        'Use it to adapt sports-ddl or journal-ddl into your own xxx-ddl topic.',
        'Use it to check `data/items.json`, sources, links, UTF-8 encoding, and Pages exports.',
        'Use it to draft the Hub `src/data/topics.ts` metadata and PR checklist.',
      ],
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

      <section className="mt-8 grid gap-5 lg:grid-cols-2">
        {copy.routes.map((route) => (
          <article key={route.title} className="rounded-3xl border bg-white p-6 shadow-sm" style={{ borderColor: '#DBEAFE' }}>
            <h2 className="text-xl font-black" style={{ color: '#0F172A' }}>{route.title}</h2>
            <p className="mt-3 text-sm font-semibold leading-7" style={{ color: '#475569' }}>{route.desc}</p>
          </article>
        ))}
      </section>

      <section className="mt-8 rounded-3xl border bg-white p-6 shadow-sm" style={{ borderColor: '#FED7AA' }}>
        <div className="max-w-3xl">
          <h2 className="text-2xl font-black" style={{ color: '#0F172A' }}>{copy.incubatorTitle}</h2>
          <p className="mt-2 text-sm font-semibold leading-7" style={{ color: '#64748B' }}>{copy.incubatorIntro}</p>
        </div>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {copy.incubatorItems.map((item, index) => (
            <div key={item} className="flex gap-3 rounded-2xl border p-4" style={{ borderColor: '#FED7AA', background: '#FFF7ED' }}>
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-black text-white" style={{ background: '#F97316' }}>{index + 1}</span>
              <p className="text-xs font-semibold leading-6" style={{ color: '#7C2D12' }}>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-3xl border bg-white p-6 shadow-sm" style={{ borderColor: '#E2E8F0' }}>
        <div className="max-w-3xl">
          <h2 className="text-2xl font-black" style={{ color: '#0F172A' }}>{copy.standardsTitle}</h2>
          <p className="mt-2 text-sm font-semibold leading-7" style={{ color: '#64748B' }}>{copy.standardsIntro}</p>
        </div>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {copy.standards.map((item, index) => (
            <div key={item} className="rounded-2xl border p-4" style={{ borderColor: '#E2E8F0', background: '#F8FAFC' }}>
              <div className="flex items-center gap-2 text-xs font-black" style={{ color: '#0F766E' }}>
                <span className="flex h-6 w-6 items-center justify-center rounded-full text-white" style={{ background: '#0F766E' }}>{index + 1}</span>
                {zh ? '规范' : 'Rule'}
              </div>
              <p className="mt-3 text-xs font-semibold leading-6" style={{ color: '#475569' }}>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8 grid gap-5 lg:grid-cols-2">
        <div className="rounded-3xl border bg-white p-6 shadow-sm" style={{ borderColor: '#DBEAFE' }}>
          <h2 className="text-xl font-black" style={{ color: '#0F172A' }}>{copy.templateTitle}</h2>
          <div className="mt-5 space-y-3">
            {copy.templateSteps.map((item, index) => (
              <p key={item} className="flex gap-3 text-xs font-semibold leading-6" style={{ color: '#475569' }}>
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-black" style={{ background: '#EFF6FF', color: '#2563EB' }}>{index + 1}</span>
                {item}
              </p>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border bg-white p-6 shadow-sm" style={{ borderColor: '#D1FAE5' }}>
          <h2 className="text-xl font-black" style={{ color: '#0F172A' }}>{copy.hubTitle}</h2>
          <div className="mt-5 space-y-3">
            {copy.hubItems.map((item, index) => (
              <p key={item} className="flex gap-3 text-xs font-semibold leading-6" style={{ color: '#475569' }}>
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-black text-white" style={{ background: '#059669' }}>{index + 1}</span>
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-3xl border bg-white p-6 shadow-sm" style={{ borderColor: '#E2E8F0' }}>
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-xl font-black" style={{ color: '#0F172A' }}>{copy.skillTitle}</h2>
            <p className="mt-2 text-sm font-semibold leading-7" style={{ color: '#64748B' }}>{copy.skillIntro}</p>
          </div>
          <code className="rounded-2xl border px-4 py-3 text-xs font-bold" style={{ borderColor: '#DBEAFE', background: '#EFF6FF', color: '#1D4ED8' }}>
            skills/just-ddl-topic-onboarding/SKILL.md
          </code>
        </div>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {copy.skillItems.map((item) => (
            <div key={item} className="rounded-2xl border p-4" style={{ borderColor: '#E2E8F0', background: '#F8FAFC' }}>
              <CheckCircle2 size={16} style={{ color: '#16A34A' }} />
              <p className="mt-3 text-xs font-semibold leading-6" style={{ color: '#475569' }}>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-black" style={{ color: '#0F172A' }}>{copy.visualTitle}</h2>
          <p className="mt-2 text-sm font-semibold leading-7" style={{ color: '#64748B' }}>{copy.visualIntro}</p>
        </div>
        <div className="mt-5 grid gap-5 lg:grid-cols-2">
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
        <div className="mt-5 grid gap-5 lg:grid-cols-2">
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
