import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import type { Topic } from '@/data/topics';

export type Language = 'zh' | 'en';

const STORAGE_KEY = 'just-ddl-language';

const topicCopy: Record<string, Record<Language, { name: string; description: string }>> = {
  'hackathon-ddl': {
    zh: { name: '黑客松', description: '全球黑客松赛事与截稿日期追踪，覆盖 Devpost、MLH、DoraHacks、ETHGlobal 等平台。' },
    en: { name: 'Hackathon', description: 'Global hackathon deadlines across Devpost, MLH, DoraHacks, ETHGlobal, and independent event boards.' },
  },
  'agent-ddl': {
    zh: { name: 'AI 智能体', description: 'AI Agent 竞赛、评测榜单与应用挑战，一站式追踪 LLM 智能体生态。' },
    en: { name: 'AI Agent', description: 'AI agent hackathons, benchmark tracks, leaderboard windows, and applied LLM agent challenges.' },
  },
  'cv-ddl': {
    zh: { name: '计算机视觉', description: '计算机视觉会议、挑战赛与 workshop 截止日，覆盖 CVPR、ICCV、ECCV、WACV 等。' },
    en: { name: 'Computer Vision', description: 'Computer vision conferences, challenge tracks, workshops, and benchmark deadlines.' },
  },
  'nlp-ddl': {
    zh: { name: '自然语言处理', description: 'NLP 会议、shared task 与评测挑战，覆盖 ACL、EMNLP、NAACL、COLING 等。' },
    en: { name: 'NLP', description: 'NLP conferences, shared tasks, evaluation tracks, and workshop deadlines.' },
  },
  'academic-ddl': {
    zh: { name: '学术科研', description: '跨学科学术会议、基金申请、暑校与科研项目截止日。' },
    en: { name: 'Academic', description: 'Cross-discipline academic conferences, grant windows, summer schools, and research programs.' },
  },
  'journal-ddl': {
    zh: { name: '期刊专题', description: '期刊 Special Issue、Special Section、专题征稿与 Call for Papers 截止日。' },
    en: { name: 'Journal CFP', description: 'Journal special issues, special sections, topical calls, and call-for-papers deadlines.' },
  },
  'programming-ddl': {
    zh: { name: '编程竞赛', description: '算法竞赛、编程挑战、训练营和开发者赛事，覆盖 ICPC、Codeforces、AtCoder 等。' },
    en: { name: 'Programming', description: 'Competitive programming contests, coding challenges, training camps, and developer events.' },
  },
  'holiday-ddl': {
    zh: { name: '节假日', description: '法定节假日、二十四节气、传统节日、国际纪念日和海外公共假日倒计时。' },
    en: { name: 'Holidays', description: 'Public holidays, the 24 solar terms, traditional festivals, international observances, and global holiday countdowns.' },
  },
  'multimodal-ddl': {
    zh: { name: '多模态', description: '多模态理解、VLM、AIGC、视频和音频评测挑战截止日。' },
    en: { name: 'Multimodal', description: 'Multimodal understanding, VLM, AIGC, video, and audio evaluation challenge deadlines.' },
  },
  'security-ddl': {
    zh: { name: '安全与 CTF', description: 'CTF、网络安全会议、漏洞赏金、攻防演练和安全研究专题截止日。' },
    en: { name: 'Security & CTF', description: 'CTF, cybersecurity conferences, bug bounty windows, red-team drills, and security research deadlines.' },
  },
  'data-science-ddl': {
    zh: { name: '数据科学', description: 'Kaggle、天池、DataCastle、数据挖掘会议与数据挑战赛截止日。' },
    en: { name: 'Data Science', description: 'Kaggle, Tianchi, DataCastle, data mining conferences, and data challenge deadlines.' },
  },
  'open-source-ddl': {
    zh: { name: '开源计划', description: 'GSoC、OSPP、LFX、Outreachy、开源实习与社区贡献计划截止日。' },
    en: { name: 'Open Source', description: 'GSoC, OSPP, LFX, Outreachy, open-source internships, and community program deadlines.' },
  },
  'robotics-ddl': {
    zh: { name: '机器人', description: '机器人竞赛、ICRA/IROS challenge、自动驾驶和具身智能评测节点。' },
    en: { name: 'Robotics', description: 'Robotics competitions, ICRA/IROS challenges, autonomous driving, and embodied AI evaluation windows.' },
  },
  'startup-ddl': {
    zh: { name: '创业与孵化', description: '创业大赛、加速器申请、创新创业项目、路演和 grant 申请截止日。' },
    en: { name: 'Startup', description: 'Startup competitions, accelerator applications, innovation programs, demo days, and grant deadlines.' },
  },
  'design-ddl': {
    zh: { name: '设计与产品', description: 'UX、产品设计、服务设计、交互设计、工业设计和创意挑战赛截止日。' },
    en: { name: 'Design & Product', description: 'UX, product design, service design, interaction design, industrial design, and creative challenge deadlines.' },
  },
  'exam-ddl': {
    zh: { name: '考试考证', description: '升学考试、语言考试、职业资格、报名缴费和准考证打印提醒。' },
    en: { name: 'Exams', description: 'Academic exams, language tests, professional certificates, registration windows, and admit-card reminders.' },
  },
  'scholarship-ddl': {
    zh: { name: '奖学金申请', description: '奖学金、访问学者、暑研、交换项目、博士申请和 fellowship 截止日。' },
    en: { name: 'Scholarships', description: 'Scholarships, visiting programs, summer research, exchange programs, PhD applications, and fellowships.' },
  },
  'game-dev-ddl': {
    zh: { name: '游戏开发', description: 'Game Jam、独立游戏节、学生游戏竞赛、引擎挑战和作品提交截止日。' },
    en: { name: 'Game Dev', description: 'Game jams, indie festivals, student game competitions, engine challenges, and submission deadlines.' },
  },
  'biotech-ddl': {
    zh: { name: '生命科学', description: '生物医药、医学影像、基因组、蛋白质设计和健康 AI 挑战截止日。' },
    en: { name: 'Biotech', description: 'Biomedical, medical imaging, genomics, protein design, and health AI challenge deadlines.' },
  },
  'sports-ddl': {
    zh: { name: '体育赛事', description: '体育赛事、报名节点和赛历倒计时，重点覆盖乒乓球、羽毛球、马拉松与田径。' },
    en: { name: 'Sports', description: 'Sports event countdowns and calendar checkpoints, focused on table tennis, badminton, marathons, and athletics.' },
  },
};

const categoryCopy: Record<string, Record<Language, string>> = {
  全部: { zh: '全部', en: 'All' },
  技术赛事: { zh: '技术赛事', en: 'Tech Events' },
  学术科研: { zh: '学术科研', en: 'Research' },
  学术期刊: { zh: '学术期刊', en: 'Journals' },
  专业竞赛: { zh: '专业竞赛', en: 'Competitions' },
  日常通用: { zh: '日常通用', en: 'Everyday' },
  安全开源: { zh: '安全开源', en: 'Security & Open Source' },
  产业创业: { zh: '产业创业', en: 'Startup' },
  设计创作: { zh: '设计创作', en: 'Design & Creation' },
  考试申请: { zh: '考试申请', en: 'Exams & Applications' },
  生命健康: { zh: '生命健康', en: 'Life & Health' },
  体育赛事: { zh: '体育赛事', en: 'Sports' },
};

const tagCopy: Record<string, Record<Language, string>> = {
  coding: { zh: '编程', en: 'coding' },
  team: { zh: '组队', en: 'team' },
  conference: { zh: '会议', en: 'conference' },
  grant: { zh: '基金', en: 'grant' },
  paper: { zh: '论文', en: 'paper' },
  festival: { zh: '节日', en: 'festival' },
  'solar-term': { zh: '节气', en: 'solar term' },
  vacation: { zh: '假期', en: 'vacation' },
  journal: { zh: '期刊', en: 'journal' },
  'special issue': { zh: '专题', en: 'special issue' },
  'table tennis': { zh: '乒乓球', en: 'table tennis' },
  badminton: { zh: '羽毛球', en: 'badminton' },
  marathon: { zh: '马拉松', en: 'marathon' },
};

const dictionary = {
  zh: {
    nav: { plaza: '主题广场', my: '我的 DDL', about: '关于', github: 'GitHub', repo: '仓库' },
    network: {
      roadmap: '路线图',
      topics: ['黑客松', '智能体', '视觉', 'NLP', '学术', '期刊', '编程', '节假日', '多模态', '安全', '数据', '开源', '机器人', '创业', '设计', '考试', '奖学金', '游戏', '生命科学', '体育'],
    },
    home: {
      title: '主题广场',
      heroLine: '把分散在世界各地的截止日，整理成可以订阅、追踪、部署和复用的专题矿场。',
      heroCopy: '默认中文浏览，英文界面需要手动切换。每个专题都拥有独立仓库、独立 Pages、独立 Actions 数据流，后续也能单独接入小程序。',
      activeDeadlines: '活跃截止日',
      topics: '专题',
      totalDeadlines: 'DDL 条目',
      categories: '分类',
      searchPlaceholder: '搜索专题、仓库或关键词...',
      featuredTitle: '正在运行的专题网络',
      featuredCopy: '数据量更大、近期节点更多的专题会优先浮出，方便把 Just-DDL 当成总入口来用。',
      plazaTitle: '全部专题',
      subscribedTitle: '已订阅专题',
      noResults: '没有找到匹配的专题',
      ctaTitle: '想开一个新的 DDL 专题？',
      ctaCopy: '先提交 Proposal，审核通过后使用统一模板生成独立仓库：crawler、validator、link-check、Pages、Actions 和后续小程序入口全部标准化。',
      ctaAction: '提交专题 Proposal',
      liveBoard: '部署与数据看板',
      live: '在线',
      sources: '数据源',
      next: '下一条',
      manualLanguage: '英文界面需要手动切换',
      repoModel: '一专题一仓库',
      dataFlow: 'Actions 自动更新',
    },
    topicCard: {
      repo: '仓库',
      pages: '专题站',
      open: '进入专题',
      active: '活跃',
      total: '总计',
      sources: '来源',
      next: '下一条',
      published: '在线',
      demo: '筹备中',
      subscribe: '收藏专题',
      subscribed: '已收藏专题',
      noUpcoming: '暂无进行中',
    },
    detail: {
      back: '主题广场',
      missing: '专题不存在',
      subscribe: '收藏专题',
      subscribed: '已收藏专题',
      repo: 'GitHub 仓库',
      pages: 'GitHub Pages',
      active: '进行中',
      total: '总计',
      next: '下一条',
      sources: '来源',
      allDeadlines: '全部截止日',
      empty: '暂无数据',
      published: '在线',
      demo: '筹备中',
      sportsPlazaTitle: '体育子专题小广场',
      sportsPlazaCopy: '乒乓球、羽毛球、路跑与田径先拆成可折叠小专题；pin 住后可以优先展开，后续也能接到个人主页。',
      sportSubtopic: '子专题',
      pinSubtopic: 'Pin 子专题',
      pinnedSubtopic: '已 Pin',
      expand: '展开',
      collapse: '收起',
      events: '条事件',
    },
    my: {
      title: '我的 DDL',
      summary: '已订阅',
      topics: '个专题',
      individual: '单独收藏',
      items: '个 DDL',
      pageHint: '收藏专题会把整个专题流加入这里；收藏某个事件只加入那一条 DDL。主页可以按专题折叠，也可以按名称或时间交叉展示。',
      organizeLabel: '组织方式',
      displayLabel: '展示方式',
      byTopic: '按专题折叠',
      byTime: '按时间交叉',
      byName: '按名称交叉',
      listView: '长卡列表',
      gridView: '多列卡片',
      displayHint: '长卡适合扫详情，多列卡片适合快速看大量倒计时。',
      topicModeHint: '每个专题是一组，可折叠查看里面的事件。',
      flatModeHint: '不同专题的事件会按当前规则交叉显示。',
      topicPinned: '专题已收藏',
      singleSaved: '单条收藏',
      events: '条事件',
      unknownTopic: '未知专题',
      noActiveInTopic: '这个专题暂无进行中的事件',
      emptyTitle: '还没有订阅任何内容',
      emptyCopy: '去主题广场订阅你关心的领域',
      browse: '浏览主题广场',
      active: '进行中',
      ended: '已结束',
      customTitle: '自定义个人 DDL',
      customCopy: '下载 PC 客户端，创建属于你的私人截止日，本地加密存储',
      customNote: '网页端仅支持浏览和收藏官方公开 DDL。如需添加课程作业、项目节点、个人目标，请使用 PC EXE 客户端或移动 APP。',
    },
    about: {
      title: '关于 Just DDL',
      intro: 'Just DDL 是一个纯截止日期追踪平台，采用一专题一仓库的开放架构，帮助学生、科研人员、开发者不再错过重要节点。',
      features: '产品特性',
      architecture: '架构设计',
      permissions: '功能权限说明',
      repoAction: 'GitHub 仓库',
      openSource: 'Just DDL 是开源项目，欢迎贡献代码和数据。',
    },
    ddl: {
      ended: '已结束',
      official: '官方链接',
      subscribe: '收藏',
      subscribed: '已收藏',
    },
    footer: {
      line: 'Just DDL · 专注每一个截止日 · 社区驱动维护',
      miniProgram: '微信小程序版本即将上线，敬请期待',
      disclaimer: '数据仅供参考，请以官方信息为准',
    },
  },
  en: {
    nav: { plaza: 'Topic Plaza', my: 'My DDL', about: 'About', github: 'GitHub', repo: 'Repo' },
    network: {
      roadmap: 'Roadmap',
      topics: ['Hackathon', 'Agent', 'CV', 'NLP', 'Academic', 'Journal', 'Programming', 'Holiday', 'Multimodal', 'Security', 'Data', 'Open Source', 'Robotics', 'Startup', 'Design', 'Exams', 'Scholarships', 'Game Dev', 'Biotech', 'Sports'],
    },
    home: {
      title: 'Topic Plaza',
      heroLine: 'A curated deadline plaza for competitions, research calls, holidays, and planning workflows.',
      heroCopy: 'Chinese is the default. Switch to English manually when needed. Each topic keeps its own repository, Pages site, Actions crawler, validator, and publishing lane.',
      activeDeadlines: 'active deadlines',
      topics: 'topics',
      totalDeadlines: 'DDL items',
      categories: 'categories',
      searchPlaceholder: 'Search topics, repositories, or keywords...',
      featuredTitle: 'Live Topic Network',
      featuredCopy: 'The busiest topics surface first, making Just-DDL feel like the operating center for the whole network.',
      plazaTitle: 'All Topics',
      subscribedTitle: 'Subscribed topics',
      noResults: 'No matching topics',
      ctaTitle: 'Want to open a new DDL topic?',
      ctaCopy: 'Start with a Proposal. Accepted topics use the standard independent repo template: crawler, validator, link-check, Pages, Actions, and future mini-program entry.',
      ctaAction: 'Submit Proposal',
      liveBoard: 'Deployment and Data Board',
      live: 'live',
      sources: 'sources',
      next: 'next',
      manualLanguage: 'English is a manual switch',
      repoModel: 'one topic, one repo',
      dataFlow: 'Actions auto update',
    },
    topicCard: {
      repo: 'Repository',
      pages: 'Topic site',
      open: 'Open topic',
      active: 'active',
      total: 'total',
      sources: 'sources',
      next: 'next',
      published: 'live',
      demo: 'preparing',
      subscribe: 'Save topic',
      subscribed: 'Topic saved',
      noUpcoming: 'No active item',
    },
    detail: {
      back: 'Topic Plaza',
      missing: 'Topic not found',
      subscribe: 'Save topic',
      subscribed: 'Topic saved',
      repo: 'GitHub Repository',
      pages: 'GitHub Pages',
      active: 'Active',
      total: 'Total',
      next: 'Next',
      sources: 'Sources',
      allDeadlines: 'All deadlines',
      empty: 'No data yet',
      published: 'live',
      demo: 'preparing',
      sportsPlazaTitle: 'Sports Subtopic Plaza',
      sportsPlazaCopy: 'Table tennis, badminton, running, and athletics are grouped into collapsible mini topics. Pin one to keep it opened first.',
      sportSubtopic: 'Subtopic',
      pinSubtopic: 'Pin subtopic',
      pinnedSubtopic: 'Pinned',
      expand: 'Expand',
      collapse: 'Collapse',
      events: 'events',
    },
    my: {
      title: 'My DDL',
      summary: 'Subscribed to',
      topics: 'topics',
      individual: 'and saved',
      items: 'DDL items',
      pageHint: 'Saving a topic brings the whole topic stream here; saving one event adds only that single deadline. Your page can group by topic or interleave items by name or time.',
      organizeLabel: 'Organize by',
      displayLabel: 'Display as',
      byTopic: 'Topic groups',
      byTime: 'Time order',
      byName: 'Name order',
      listView: 'Long list',
      gridView: 'Card grid',
      displayHint: 'Long cards are better for details; grid cards make large countdown sets easier to scan.',
      topicModeHint: 'Each topic becomes a collapsible group with its own saved events.',
      flatModeHint: 'Items from different topics are interleaved by the selected rule.',
      topicPinned: 'Topic saved',
      singleSaved: 'Single saves',
      events: 'events',
      unknownTopic: 'Unknown topic',
      noActiveInTopic: 'No active events in this topic',
      emptyTitle: 'Nothing subscribed yet',
      emptyCopy: 'Go to the Topic Plaza and subscribe to the areas you care about',
      browse: 'Browse Topic Plaza',
      active: 'Active',
      ended: 'Ended',
      customTitle: 'Custom personal DDL',
      customCopy: 'Use the PC client to create private encrypted local deadlines',
      customNote: 'The web app only browses and saves public official DDL items. Use the PC EXE client or mobile app for coursework, project milestones, and personal goals.',
    },
    about: {
      title: 'About Just DDL',
      intro: 'Just DDL is a pure deadline tracking platform with an open one-topic-one-repo architecture for students, researchers, and developers.',
      features: 'Product Features',
      architecture: 'Architecture',
      permissions: 'Capability Notes',
      repoAction: 'GitHub Repository',
      openSource: 'Just DDL is open source. Code and data contributions are welcome.',
    },
    ddl: {
      ended: 'Ended',
      official: 'Official link',
      subscribe: 'Save',
      subscribed: 'Saved',
    },
    footer: {
      line: 'Just DDL · Every deadline in focus · Community-maintained',
      miniProgram: 'WeChat Mini Program version is coming soon. Stay tuned.',
      disclaimer: 'Data is for reference only; always verify with the official source.',
    },
  },
} as const;

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  copy: typeof dictionary.zh | typeof dictionary.en;
  topicName: (topic: Topic) => string;
  topicDescription: (topic: Topic) => string;
  categoryName: (category: string) => string;
  tagName: (tag: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) === 'en' ? 'en' : 'zh';
    } catch {
      return 'zh';
    }
  });

  const setLanguage = (next: Language) => {
    setLanguageState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* localStorage can be unavailable in restricted browsers */
    }
  };

  useEffect(() => {
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  }, [language]);

  const value = useMemo<LanguageContextValue>(() => ({
    language,
    setLanguage,
    copy: dictionary[language],
    topicName: (topic) => topicCopy[topic.id]?.[language]?.name || topic.name,
    topicDescription: (topic) => topicCopy[topic.id]?.[language]?.description || topic.description,
    categoryName: (category) => categoryCopy[category]?.[language] || category,
    tagName: (tag) => tagCopy[tag]?.[language] || tag,
  }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}

