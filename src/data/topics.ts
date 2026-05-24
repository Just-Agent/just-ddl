export interface Topic {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  repo: string;
  site: string;
  status: 'published' | 'demo' | 'incubating';
  sourceMode?: 'official' | 'external' | 'incubator' | 'cluster';
  clusterId?: string;
  maintainer?: string;
  dataUrl?: string;
  metricsUrl?: string;
  itemCount: number;
  category: string;
  tags: string[];
}

export const topics: Topic[] = [
  {
    "id": "hackathon-ddl",
    "name": "Hackathon",
    "description": "全球黑客松赛事与截稿日期追踪，覆盖 Devpost / MLH / DoraHacks / ETHGlobal 等平台",
    "icon": "Trophy",
    "color": "#F97316",
    "repo": "Just-Agent/hackathon-ddl",
    "site": "https://just-agent.github.io/hackathon-ddl/",
    "status": "published",
    "itemCount": 18,
    "category": "技术赛事",
    "tags": [
      "coding",
      "48h",
      "team"
    ]
  },
  {
    "id": "agent-ddl",
    "name": "AI Agent",
    "description": "AI Agent 竞赛与 Benchmark 挑战，LLM 智能体赛事一站式追踪",
    "icon": "Bot",
    "color": "#8B5CF6",
    "repo": "Just-Agent/agent-ddl",
    "site": "https://just-agent.github.io/agent-ddl/",
    "status": "published",
    "itemCount": 18,
    "category": "技术赛事",
    "tags": [
      "LLM",
      "agent",
      "benchmark"
    ]
  },
  {
    "id": "cv-ddl",
    "name": "Computer Vision",
    "description": "计算机视觉会议、挑战赛与 workshop 截止日，覆盖 CVPR / ICCV / ECCV / WACV 等",
    "icon": "Eye",
    "color": "#06B6D4",
    "repo": "Just-Agent/cv-ddl",
    "site": "https://just-agent.github.io/cv-ddl/",
    "status": "published",
    "itemCount": 33,
    "category": "技术赛事",
    "tags": [
      "CVPR",
      "ICCV",
      "ECCV"
    ]
  },
  {
    "id": "nlp-ddl",
    "name": "NLP",
    "description": "自然语言处理会议、shared task 与评测挑战，覆盖 ACL / EMNLP / NAACL / COLING 等",
    "icon": "MessageSquare",
    "color": "#10B981",
    "repo": "Just-Agent/nlp-ddl",
    "site": "https://just-agent.github.io/nlp-ddl/",
    "status": "published",
    "itemCount": 18,
    "category": "技术赛事",
    "tags": [
      "ACL",
      "EMNLP",
      "NAACL"
    ]
  },
  {
    "id": "academic-ddl",
    "name": "Academic",
    "description": "跨学科学术会议、基金申请、暑校与科研项目截稿日期",
    "icon": "GraduationCap",
    "color": "#F43F5E",
    "repo": "Just-Agent/academic-ddl",
    "site": "https://just-agent.github.io/academic-ddl/",
    "status": "published",
    "itemCount": 20,
    "category": "学术科研",
    "tags": [
      "conference",
      "grant",
      "paper"
    ]
  },
  {
    "id": "journal-ddl",
    "name": "Journal CFP",
    "description": "期刊 Special Issue、Special Section、专题征稿与 Call for Papers 截止日",
    "icon": "BookOpen",
    "color": "#0F766E",
    "repo": "Just-Agent/journal-ddl",
    "site": "https://just-agent.github.io/journal-ddl/",
    "status": "published",
    "itemCount": 144,
    "category": "学术期刊",
    "tags": [
      "journal",
      "special issue",
      "CFP"
    ]
  },
  {
    "id": "programming-ddl",
    "name": "Programming",
    "description": "算法竞赛、编程挑战、训练营和开发者赛事，覆盖 ICPC / Codeforces / AtCoder 等",
    "icon": "Code2",
    "color": "#3B82F6",
    "repo": "Just-Agent/programming-ddl",
    "site": "https://just-agent.github.io/programming-ddl/",
    "status": "published",
    "itemCount": 20,
    "category": "专业竞赛",
    "tags": [
      "ICPC",
      "Codeforces",
      "LeetCode"
    ]
  },
  {
    "id": "holiday-ddl",
    "name": "Holidays",
    "description": "法定节假日、二十四节气、传统节日、国际纪念日和海外公共假日倒计时",
    "icon": "CalendarHeart",
    "color": "#EAB308",
    "repo": "Just-Agent/holiday-ddl",
    "site": "https://just-agent.github.io/holiday-ddl/",
    "status": "published",
    "itemCount": 78,
    "category": "日常通用",
    "tags": [
      "festival",
      "solar-term",
      "vacation"
    ]
  },
  {
    "id": "multimodal-ddl",
    "name": "Multimodal",
    "description": "多模态理解、VLM、AIGC、视频和音频评测挑战截止日",
    "icon": "Layers",
    "color": "#EC4899",
    "repo": "Just-Agent/multimodal-ddl",
    "site": "https://just-agent.github.io/multimodal-ddl/",
    "status": "published",
    "itemCount": 18,
    "category": "技术赛事",
    "tags": [
      "MM",
      "VLM",
      "generative"
    ]
  },
  {
    "id": "security-ddl",
    "name": "Security & CTF",
    "description": "CTF、网络安全会议、漏洞赏金、攻防演练和安全研究专题截止日",
    "icon": "Code2",
    "color": "#DC2626",
    "repo": "Just-Agent/security-ddl",
    "site": "https://just-agent.github.io/security-ddl/",
    "status": "published",
    "itemCount": 28,
    "category": "安全开源",
    "tags": [
      "CTF",
      "security",
      "bug bounty"
    ]
  },
  {
    "id": "data-science-ddl",
    "name": "Data Science",
    "description": "Kaggle、天池、DataCastle、数据挖掘会议与数据挑战赛截止日",
    "icon": "Layers",
    "color": "#2563EB",
    "repo": "Just-Agent/data-science-ddl",
    "site": "https://just-agent.github.io/data-science-ddl/",
    "status": "published",
    "itemCount": 6,
    "category": "技术赛事",
    "tags": [
      "Kaggle",
      "data mining",
      "ML"
    ]
  },
  {
    "id": "open-source-ddl",
    "name": "Open Source",
    "description": "GSoC、OSPP、LFX、Outreachy、开源实习与社区贡献计划截止日",
    "icon": "Code2",
    "color": "#059669",
    "repo": "Just-Agent/open-source-ddl",
    "site": "https://just-agent.github.io/open-source-ddl/",
    "status": "published",
    "itemCount": 26,
    "category": "安全开源",
    "tags": [
      "GSoC",
      "OSPP",
      "LFX"
    ]
  },
  {
    "id": "robotics-ddl",
    "name": "Robotics",
    "description": "机器人竞赛、ICRA/IROS challenge、自动驾驶和具身智能评测节点",
    "icon": "Bot",
    "color": "#7C3AED",
    "repo": "Just-Agent/robotics-ddl",
    "site": "https://just-agent.github.io/robotics-ddl/",
    "status": "published",
    "itemCount": 8,
    "category": "技术赛事",
    "tags": [
      "robotics",
      "embodied AI",
      "autonomous"
    ]
  },
  {
    "id": "startup-ddl",
    "name": "Startup",
    "description": "创业大赛、加速器申请、创新创业项目、路演和 grant 申请截止日",
    "icon": "Trophy",
    "color": "#EA580C",
    "repo": "Just-Agent/startup-ddl",
    "site": "https://just-agent.github.io/startup-ddl/",
    "status": "published",
    "itemCount": 10,
    "category": "产业创业",
    "tags": [
      "startup",
      "accelerator",
      "grant"
    ]
  },
  {
    "id": "design-ddl",
    "name": "Design & Product",
    "description": "UX、产品设计、服务设计、交互设计、工业设计和创意挑战赛截止日",
    "icon": "Eye",
    "color": "#DB2777",
    "repo": "Just-Agent/design-ddl",
    "site": "https://just-agent.github.io/design-ddl/",
    "status": "published",
    "itemCount": 7,
    "category": "设计创作",
    "tags": [
      "UX",
      "product",
      "design"
    ]
  },
  {
    "id": "exam-ddl",
    "name": "Exams",
    "description": "升学考试、语言考试、职业资格、报名缴费和准考证打印提醒",
    "icon": "GraduationCap",
    "color": "#0891B2",
    "repo": "Just-Agent/exam-ddl",
    "site": "https://just-agent.github.io/exam-ddl/",
    "status": "published",
    "itemCount": 16,
    "category": "考试申请",
    "tags": [
      "exam",
      "certificate",
      "registration"
    ]
  },
  {
    "id": "ielts-toefl-ddl",
    "name": "IELTS & TOEFL",
    "description": "雅思、托福报名入口、考期发布和官方考试安排追踪。",
    "icon": "GraduationCap",
    "color": "#0F766E",
    "repo": "Just-Agent/exam-ddl",
    "site": "https://just-agent.github.io/exam-ddl/#ielts-toefl-ddl",
    "status": "published",
    "sourceMode": "cluster",
    "clusterId": "exam-ddl",
    "dataUrl": "data/ielts-toefl-ddl/items.json",
    "itemCount": 6,
    "category": "考试申请",
    "tags": [
      "IELTS",
      "TOEFL",
      "language test",
      "registration"
    ]
  },
  {
    "id": "scholarship-ddl",
    "name": "Scholarships",
    "description": "奖学金、访问学者、暑研、交换项目、博士申请和 fellowship 截止日",
    "icon": "BookOpen",
    "color": "#CA8A04",
    "repo": "Just-Agent/scholarship-ddl",
    "site": "https://just-agent.github.io/scholarship-ddl/",
    "status": "published",
    "itemCount": 1,
    "category": "考试申请",
    "tags": [
      "scholarship",
      "fellowship",
      "application"
    ]
  },
  {
    "id": "civil-service-ddl",
    "name": "Civil Service",
    "description": "公务员、事业单位、选调生、遴选和基层项目报名、笔试、面试节点追踪",
    "icon": "GraduationCap",
    "color": "#4F46E5",
    "repo": "pengpoom/civil-service-ddl",
    "site": "https://pengpoom.github.io/civil-service-ddl/",
    "status": "published",
    "sourceMode": "external",
    "maintainer": "pengpoom",
    "dataUrl": "https://raw.githubusercontent.com/pengpoom/civil-service-ddl/main/data/items.json",
    "itemCount": 27,
    "category": "考试申请",
    "tags": [
      "公务员",
      "事业单位",
      "选调生",
      "遴选"
    ]
  },
  {
    "id": "game-dev-ddl",
    "name": "Game Dev",
    "description": "Game Jam、独立游戏节、学生游戏竞赛、引擎挑战和作品提交截止日",
    "icon": "Trophy",
    "color": "#9333EA",
    "repo": "Just-Agent/game-dev-ddl",
    "site": "https://just-agent.github.io/game-dev-ddl/",
    "status": "published",
    "itemCount": 25,
    "category": "设计创作",
    "tags": [
      "game jam",
      "indie game",
      "Unity"
    ]
  },
  {
    "id": "biotech-ddl",
    "name": "Biotech",
    "description": "生物医药、医学影像、基因组、蛋白质设计和健康 AI 挑战截止日",
    "icon": "GraduationCap",
    "color": "#16A34A",
    "repo": "Just-Agent/biotech-ddl",
    "site": "https://just-agent.github.io/biotech-ddl/",
    "status": "published",
    "itemCount": 2,
    "category": "生命健康",
    "tags": [
      "biotech",
      "medical AI",
      "genomics"
    ]
  },
  {
    "id": "sports-ddl",
    "name": "Sports",
    "description": "体育赛事、报名节点和赛历倒计时，覆盖乒乓球、羽毛球、篮球、台球、匹克球、马拉松与田径。",
    "icon": "Medal",
    "color": "#0EA5E9",
    "repo": "Just-Agent/sports-ddl",
    "site": "https://just-agent.github.io/sports-ddl/",
    "status": "published",
    "itemCount": 44,
    "category": "体育赛事",
    "tags": [
      "table tennis",
      "badminton",
      "basketball",
      "billiards",
      "pickleball"
    ]
  },
  {
    "id": "game-ddl",
    "name": "Esports",
    "description": "英雄联盟、王者荣耀、VALORANT、Dota 2、CS2 与电竞世界杯等赛事赛历和报名/开赛节点。",
    "icon": "Gamepad2",
    "color": "#E11D48",
    "repo": "Just-Agent/game-ddl",
    "site": "https://just-agent.github.io/game-ddl/",
    "status": "published",
    "itemCount": 16,
    "category": "电竞赛事",
    "tags": [
      "League of Legends",
      "王者荣耀",
      "VALORANT",
      "CS2",
      "Dota 2"
    ]
  },
  {
    "id": "game-version-ddl",
    "name": "Game Versions",
    "description": "英雄联盟、云顶之弈等游戏版本、补丁更新时间，含官方 patch schedule、历史节点和预测窗口。",
    "icon": "Gamepad2",
    "color": "#0EA5E9",
    "repo": "Just-Agent/game-ddl",
    "site": "https://just-agent.github.io/game-ddl/#game-version-ddl",
    "status": "published",
    "sourceMode": "cluster",
    "clusterId": "game-ddl",
    "dataUrl": "data/game-version-ddl/items.json",
    "itemCount": 30,
    "category": "电竞赛事",
    "tags": [
      "game update",
      "patch",
      "League of Legends",
      "Teamfight Tactics"
    ]
  },
  {
    "id": "concert-ddl",
    "name": "Concerts",
    "description": "演唱会、巡演、官方场馆活动和开票/演出日期倒计时。",
    "icon": "Music",
    "color": "#F97316",
    "repo": "Just-Agent/entertainment-ddl",
    "site": "https://just-agent.github.io/entertainment-ddl/#concert-ddl",
    "status": "published",
    "sourceMode": "cluster",
    "clusterId": "entertainment-ddl",
    "dataUrl": "data/concert-ddl/items.json",
    "itemCount": 8,
    "category": "文娱生活",
    "tags": [
      "concert",
      "live",
      "ticketing"
    ]
  },
  {
    "id": "movie-tv-ddl",
    "name": "Movies & TV",
    "description": "电影、电视剧、流媒体和动画上映/上线日期倒计时。",
    "icon": "Clapperboard",
    "color": "#DB2777",
    "repo": "Just-Agent/entertainment-ddl",
    "site": "https://just-agent.github.io/entertainment-ddl/#movie-tv-ddl",
    "status": "published",
    "sourceMode": "cluster",
    "clusterId": "entertainment-ddl",
    "dataUrl": "data/movie-tv-ddl/items.json",
    "itemCount": 12,
    "category": "文娱生活",
    "tags": [
      "movie",
      "TV",
      "release"
    ]
  },
  {
    "id": "phone-launch-ddl",
    "name": "Phone Launches",
    "description": "手机发布会、移动生态发布窗口和官方品牌 source board。",
    "icon": "Smartphone",
    "color": "#0EA5E9",
    "repo": "Just-Agent/consumer-launch-ddl",
    "site": "https://just-agent.github.io/consumer-launch-ddl/#phone-launch-ddl",
    "status": "published",
    "sourceMode": "cluster",
    "clusterId": "consumer-launch-ddl",
    "dataUrl": "data/phone-launch-ddl/items.json",
    "itemCount": 11,
    "category": "消费发布",
    "tags": [
      "smartphone",
      "launch",
      "mobile"
    ]
  },
  {
    "id": "car-launch-ddl",
    "name": "Car Launches",
    "description": "汽车发布、官方车展、媒体日和新车/出行产品发布窗口。",
    "icon": "Car",
    "color": "#F59E0B",
    "repo": "Just-Agent/consumer-launch-ddl",
    "site": "https://just-agent.github.io/consumer-launch-ddl/#car-launch-ddl",
    "status": "published",
    "sourceMode": "cluster",
    "clusterId": "consumer-launch-ddl",
    "dataUrl": "data/car-launch-ddl/items.json",
    "itemCount": 11,
    "category": "消费发布",
    "tags": [
      "car",
      "auto show",
      "vehicle launch"
    ]
  },
  {
    "id": "regulation-ddl",
    "name": "Regulations",
    "description": "新规实施、强制性标准、监管合规和政策生效日期追踪。",
    "icon": "Scale",
    "color": "#0F766E",
    "repo": "Just-Agent/public-life-ddl",
    "site": "https://just-agent.github.io/public-life-ddl/#regulation-ddl",
    "status": "published",
    "sourceMode": "cluster",
    "clusterId": "public-life-ddl",
    "dataUrl": "data/regulation-ddl/items.json",
    "itemCount": 14,
    "category": "公共生活",
    "tags": [
      "regulation",
      "standard",
      "effective date"
    ]
  },
  {
    "id": "student-contest-ddl",
    "name": "Student Contests",
    "description": "大学生/研究生竞赛、工程挑战、科研项目和作品提交节点。",
    "icon": "GraduationCap",
    "color": "#16A34A",
    "repo": "Just-Agent/education-career-ddl",
    "site": "https://just-agent.github.io/education-career-ddl/#student-contest-ddl",
    "status": "published",
    "sourceMode": "cluster",
    "clusterId": "education-career-ddl",
    "dataUrl": "data/student-contest-ddl/items.json",
    "itemCount": 12,
    "category": "教育职业",
    "tags": [
      "student competition",
      "graduate",
      "research"
    ]
  },
  {
    "id": "career-fair-ddl",
    "name": "Career Fairs",
    "description": "高校招聘会、实习招聘会、工程/STEM/综合 career fair 日期追踪。",
    "icon": "BriefcaseBusiness",
    "color": "#2563EB",
    "repo": "Just-Agent/education-career-ddl",
    "site": "https://just-agent.github.io/education-career-ddl/#career-fair-ddl",
    "status": "published",
    "sourceMode": "cluster",
    "clusterId": "education-career-ddl",
    "dataUrl": "data/career-fair-ddl/items.json",
    "itemCount": 7,
    "category": "教育职业",
    "tags": [
      "career fair",
      "internship",
      "graduate students"
    ]
  },
  {
    "id": "llm-release-ddl",
    "name": "大模型发布",
    "description": "Kimi、GLM、MiniMax、DeepSeek 等主力模型版本历史节点、距上次发布时长与下一代预测窗口。",
    "icon": "Bot",
    "color": "#7C3AED",
    "repo": "Just-Agent/ai-model-release-ddl",
    "site": "https://just-agent.github.io/ai-model-release-ddl/#llm-release-ddl",
    "status": "published",
    "sourceMode": "cluster",
    "clusterId": "ai-model-release-ddl",
    "dataUrl": "data/topics/llm-release-ddl/items.json",
    "itemCount": 18,
    "category": "AI 发布",
    "tags": [
      "LLM",
      "model release",
      "forecast"
    ]
  },
  {
    "id": "nsfc-ddl",
    "name": "国家自然科学基金",
    "description": "国家自然科学基金集中接收、年度指南、结果公布、复审节点与历年节奏预测。",
    "icon": "GraduationCap",
    "color": "#2563EB",
    "repo": "Just-Agent/research-funding-ddl",
    "site": "https://just-agent.github.io/research-funding-ddl/#nsfc-ddl",
    "status": "published",
    "sourceMode": "cluster",
    "clusterId": "research-funding-ddl",
    "dataUrl": "data/topics/nsfc-ddl/items.json",
    "metricsUrl": "data/topics/nsfc-ddl/metrics.json",
    "itemCount": 32,
    "category": "学术科研",
    "tags": [
      "NSFC",
      "research funding",
      "科研基金"
    ]
  },
  {
    "id": "cas-partition-ddl",
    "name": "中科院期刊分区",
    "description": "中科院期刊分区表年度版本、历史节点、停更声明和授权数据边界追踪。",
    "icon": "BookOpen",
    "color": "#0F766E",
    "repo": "Just-Agent/journal-metrics-ddl",
    "site": "https://just-agent.github.io/journal-metrics-ddl/#cas-partition-ddl",
    "status": "published",
    "sourceMode": "cluster",
    "clusterId": "journal-metrics-ddl",
    "dataUrl": "data/topics/cas-partition-ddl/items.json",
    "metricsUrl": "data/topics/cas-partition-ddl/metrics.json",
    "itemCount": 2,
    "category": "学术期刊",
    "tags": [
      "CAS",
      "journal partition",
      "期刊分区"
    ]
  },
  {
    "id": "jcr-impact-factor-ddl",
    "name": "JCR 影响因子",
    "description": "Journal Citation Reports 年度发布、影响因子版本节点、数据修正窗口和指标轨迹。",
    "icon": "Database",
    "color": "#9333EA",
    "repo": "Just-Agent/journal-metrics-ddl",
    "site": "https://just-agent.github.io/journal-metrics-ddl/#jcr-impact-factor-ddl",
    "status": "published",
    "sourceMode": "cluster",
    "clusterId": "journal-metrics-ddl",
    "dataUrl": "data/topics/jcr-impact-factor-ddl/items.json",
    "metricsUrl": "data/topics/jcr-impact-factor-ddl/metrics.json",
    "itemCount": 6,
    "category": "学术期刊",
    "tags": [
      "JCR",
      "impact factor",
      "Clarivate"
    ]
  },
  {
    "id": "journal-volume-ddl",
    "name": "期刊发文量",
    "description": "Nature、Science、Cell 等期刊公开元数据发文量快照、年度趋势和下一次更新窗口。",
    "icon": "Database",
    "color": "#0891B2",
    "repo": "Just-Agent/journal-metrics-ddl",
    "site": "https://just-agent.github.io/journal-metrics-ddl/#journal-volume-ddl",
    "status": "published",
    "sourceMode": "cluster",
    "clusterId": "journal-metrics-ddl",
    "dataUrl": "data/topics/journal-volume-ddl/items.json",
    "metricsUrl": "data/topics/journal-volume-ddl/metrics.json",
    "itemCount": 2,
    "category": "学术期刊",
    "tags": [
      "journal volume",
      "OpenAlex",
      "works count"
    ]
  }
];

export const categories = [
  "全部",
  "技术赛事",
  "AI 发布",
  "学术科研",
  "学术期刊",
  "专业竞赛",
  "日常通用",
  "安全开源",
  "产业创业",
  "设计创作",
  "考试申请",
  "生命健康",
  "体育赛事",
  "电竞赛事",
  "文娱生活",
  "消费发布",
  "公共生活",
  "教育职业"
];

export function getTopicById(id: string) { return topics.find(t => t.id === id); }
