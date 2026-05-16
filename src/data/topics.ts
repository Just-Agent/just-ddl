export interface Topic {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  repo: string;
  site: string;
  status: 'published' | 'demo';
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
    "itemCount": 18,
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
    "itemCount": 14,
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
    "itemCount": 9,
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
    "itemCount": 16,
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
    "itemCount": 16,
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
    "itemCount": 16,
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
    "itemCount": 16,
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
    "id": "scholarship-ddl",
    "name": "Scholarships",
    "description": "奖学金、访问学者、暑研、交换项目、博士申请和 fellowship 截止日",
    "icon": "BookOpen",
    "color": "#CA8A04",
    "repo": "Just-Agent/scholarship-ddl",
    "site": "https://just-agent.github.io/scholarship-ddl/",
    "status": "published",
    "itemCount": 16,
    "category": "考试申请",
    "tags": [
      "scholarship",
      "fellowship",
      "application"
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
    "itemCount": 16,
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
    "itemCount": 16,
    "category": "生命健康",
    "tags": [
      "biotech",
      "medical AI",
      "genomics"
    ]
  }
];

export const categories = [
  "全部",
  "技术赛事",
  "学术科研",
  "学术期刊",
  "专业竞赛",
  "日常通用",
  "安全开源",
  "产业创业",
  "设计创作",
  "考试申请",
  "生命健康"
];

export function getTopicById(id: string) { return topics.find(t => t.id === id); }
