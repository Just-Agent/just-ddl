export interface DDLItem {
  [key: string]: unknown;
  id: string;
  title: string;
  deadline: string;
  dateRange: string;
  location: string;
  isOnline: boolean;
  tags: string[];
  url: string;
  status: 'upcoming' | 'ongoing' | 'ended';
  prize?: string;
  description?: string;
  stage?: string;
  source?: string;
  type?: 'conference' | 'journal' | 'challenge' | 'hackathon' | 'holiday' | 'contest' | 'program';
}

export const ddlData: Record<string, DDLItem[]> = {
  "hackathon-ddl": [
    {
      "id": "hackathon-ddl-mlh-global-hack-week-2026-07-20",
      "title": "MLH Global Hack Week",
      "deadline": "2026-07-20T23:59:59",
      "dateRange": "Jul 21-27, 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "MLH",
        "Workshop"
      ],
      "url": "https://mlh.io/seasons",
      "status": "upcoming",
      "stage": "Event start",
      "source": "Curated coverage seed",
      "type": "hackathon",
      "description": "MLH 系列活动入口，适合专题按周滚动展示。"
    },
    {
      "id": "hackathon-ddl-devpost-ai-builders-challenge-2026-08-18",
      "title": "Devpost AI Builders Challenge",
      "deadline": "2026-08-18T23:59:59",
      "dateRange": "Jul 1 - Aug 18, 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "AI App",
        "Devpost"
      ],
      "url": "https://devpost.com/hackathons",
      "status": "upcoming",
      "stage": "Submission",
      "source": "Curated coverage seed",
      "type": "hackathon",
      "description": "Devpost AI 应用类比赛 coverage seed，定时 crawler 会继续补官方详情。",
      "prize": "$25,000+"
    },
    {
      "id": "hackathon-ddl-pennapps-2026-fall-2026-08-25",
      "title": "PennApps 2026 Fall",
      "deadline": "2026-08-25T23:59:59",
      "dateRange": "Sep 2026",
      "location": "Philadelphia, USA",
      "isOnline": false,
      "tags": [
        "Campus",
        "Prototype"
      ],
      "url": "https://pennapps.com",
      "status": "upcoming",
      "stage": "Application",
      "source": "Official-style seed",
      "type": "hackathon",
      "description": "高校黑客松 coverage seed，用于补足北美校园赛历。"
    },
    {
      "id": "hackathon-ddl-hack-the-north-2026-2026-09-01",
      "title": "Hack the North 2026",
      "deadline": "2026-09-01T23:59:59",
      "dateRange": "Sep 18-20, 2026",
      "location": "Waterloo, Canada",
      "isOnline": false,
      "tags": [
        "AI/ML",
        "Student",
        "Global"
      ],
      "url": "https://hackthenorth.com",
      "status": "upcoming",
      "stage": "Registration",
      "source": "Official site",
      "type": "hackathon",
      "description": "大型校园黑客松，追踪报名、确认、项目提交和 Demo Day 节点。",
      "prize": "$50,000+"
    },
    {
      "id": "hackathon-ddl-hackzurich-2026-2026-09-11",
      "title": "HackZurich 2026",
      "deadline": "2026-09-11T23:59:59",
      "dateRange": "Sep 2026",
      "location": "Zurich, Switzerland",
      "isOnline": false,
      "tags": [
        "Enterprise",
        "Europe"
      ],
      "url": "https://hackzurich.com",
      "status": "upcoming",
      "stage": "Application",
      "source": "Curated coverage seed",
      "type": "hackathon",
      "description": "欧洲大型企业/创新黑客松入口。"
    },
    {
      "id": "hackathon-ddl-hackmit-2026-2026-09-15",
      "title": "HackMIT 2026",
      "deadline": "2026-09-15T23:59:59",
      "dateRange": "Sep 27-28, 2026",
      "location": "Cambridge, USA",
      "isOnline": false,
      "tags": [
        "Campus",
        "Hardware"
      ],
      "url": "https://hackmit.org",
      "status": "upcoming",
      "stage": "Application",
      "source": "Curated coverage seed",
      "type": "hackathon",
      "description": "校园线下黑客松入口，等待官方申请时间校验。",
      "prize": "$40,000+"
    },
    {
      "id": "hackathon-ddl-hackharvard-2026-2026-09-20",
      "title": "HackHarvard 2026",
      "deadline": "2026-09-20T23:59:59",
      "dateRange": "Oct 2026",
      "location": "Cambridge, USA",
      "isOnline": false,
      "tags": [
        "Campus",
        "Social Impact"
      ],
      "url": "https://hackharvard.io",
      "status": "upcoming",
      "stage": "Application",
      "source": "Curated coverage seed",
      "type": "hackathon",
      "description": "哈佛校园黑客松入口。"
    },
    {
      "id": "hackathon-ddl-hackprinceton-2026-fall-2026-10-01",
      "title": "HackPrinceton 2026 Fall",
      "deadline": "2026-10-01T23:59:59",
      "dateRange": "Fall 2026",
      "location": "Princeton, USA",
      "isOnline": false,
      "tags": [
        "Campus",
        "Product"
      ],
      "url": "https://hackprinceton.com",
      "status": "upcoming",
      "stage": "Application",
      "source": "Curated coverage seed",
      "type": "hackathon",
      "description": "普林斯顿校园黑客松入口。"
    },
    {
      "id": "hackathon-ddl-nasa-space-apps-challenge-2026-2026-10-01",
      "title": "NASA Space Apps Challenge 2026",
      "deadline": "2026-10-01T23:59:59",
      "dateRange": "Oct 3-4, 2026",
      "location": "Global",
      "isOnline": true,
      "tags": [
        "Space",
        "Open Data"
      ],
      "url": "https://www.spaceappschallenge.org/",
      "status": "upcoming",
      "stage": "Local event",
      "source": "Official site",
      "type": "hackathon",
      "description": "全球开放数据与空间科学挑战入口。"
    },
    {
      "id": "hackathon-ddl-la-hacks-2026-2026-10-05",
      "title": "LA Hacks 2026",
      "deadline": "2026-10-05T23:59:59",
      "dateRange": "Oct 2026",
      "location": "Los Angeles, USA",
      "isOnline": false,
      "tags": [
        "Campus",
        "AI"
      ],
      "url": "https://lahacks.com",
      "status": "upcoming",
      "stage": "Registration",
      "source": "Curated coverage seed",
      "type": "hackathon",
      "description": "UCLA 黑客松入口。"
    },
    {
      "id": "hackathon-ddl-ethglobal-new-york-2026-2026-10-10",
      "title": "ETHGlobal New York 2026",
      "deadline": "2026-10-10T23:59:59",
      "dateRange": "Oct 10-12, 2026",
      "location": "New York, USA",
      "isOnline": false,
      "tags": [
        "Web3",
        "DeFi",
        "Infra"
      ],
      "url": "https://ethglobal.com/events",
      "status": "upcoming",
      "stage": "Project submit",
      "source": "ETHGlobal events board",
      "type": "hackathon",
      "description": "Web3 生态黑客松入口，后续由 crawler 对齐具体城市站详情页。",
      "prize": "$150,000+"
    },
    {
      "id": "hackathon-ddl-hackupc-2026-2026-10-18",
      "title": "HackUPC 2026",
      "deadline": "2026-10-18T23:59:59",
      "dateRange": "Autumn 2026",
      "location": "Barcelona, Spain",
      "isOnline": false,
      "tags": [
        "Europe",
        "Student"
      ],
      "url": "https://hackupc.com",
      "status": "upcoming",
      "stage": "Registration",
      "source": "Curated coverage seed",
      "type": "hackathon",
      "description": "欧洲学生黑客松 coverage seed。"
    },
    {
      "id": "hackathon-ddl-cal-hacks-2026-2026-10-24",
      "title": "Cal Hacks 2026",
      "deadline": "2026-10-24T10:00:00",
      "dateRange": "Oct 24-26, 2026",
      "location": "Berkeley, USA",
      "isOnline": false,
      "tags": [
        "AI",
        "Healthcare"
      ],
      "url": "https://calhacks.io",
      "status": "upcoming",
      "stage": "Hacking",
      "source": "Curated coverage seed",
      "type": "hackathon",
      "description": "美国西海岸高校黑客松 coverage seed。",
      "prize": "$30,000+"
    },
    {
      "id": "hackathon-ddl-junction-2026-2026-11-06",
      "title": "Junction 2026",
      "deadline": "2026-11-06T23:59:59",
      "dateRange": "Nov 2026",
      "location": "Helsinki, Finland",
      "isOnline": false,
      "tags": [
        "Europe",
        "Startup"
      ],
      "url": "https://www.hackjunction.com",
      "status": "upcoming",
      "stage": "Application",
      "source": "Curated coverage seed",
      "type": "hackathon",
      "description": "欧洲综合创新黑客松入口。"
    },
    {
      "id": "hackathon-ddl-dorahacks-open-innovation-sprint-2026-11-15",
      "title": "DoraHacks Open Innovation Sprint",
      "deadline": "2026-11-15T23:59:59",
      "dateRange": "Oct 1 - Nov 15, 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Open Source",
        "Bounty"
      ],
      "url": "https://dorahacks.io",
      "status": "upcoming",
      "stage": "Bounty submit",
      "source": "Curated coverage seed",
      "type": "hackathon",
      "description": "开源赏金与项目提交通道 coverage seed。",
      "prize": "$80,000+"
    },
    {
      "id": "hackathon-ddl-treehacks-2027-2026-11-15",
      "title": "TreeHacks 2027",
      "deadline": "2026-11-15T23:59:59",
      "dateRange": "Nov 20-22, 2026",
      "location": "Stanford, USA",
      "isOnline": false,
      "tags": [
        "AI",
        "Climate"
      ],
      "url": "https://treehacks.com",
      "status": "upcoming",
      "stage": "Acceptance",
      "source": "Curated coverage seed",
      "type": "hackathon",
      "description": "斯坦福黑客松入口，后续由官方页面校准。",
      "prize": "$35,000+"
    },
    {
      "id": "hackathon-ddl-nwhacks-2027-2026-12-10",
      "title": "nwHacks 2027",
      "deadline": "2026-12-10T23:59:59",
      "dateRange": "Jan 9-11, 2027",
      "location": "Vancouver, Canada",
      "isOnline": false,
      "tags": [
        "Campus",
        "Product"
      ],
      "url": "https://nwhacks.io",
      "status": "upcoming",
      "stage": "Registration",
      "source": "Curated coverage seed",
      "type": "hackathon",
      "description": "加拿大西海岸校园黑客松入口。",
      "prize": "$28,000+"
    },
    {
      "id": "hackathon-ddl-hack-cambridge-2027-2026-12-20",
      "title": "Hack Cambridge 2027",
      "deadline": "2026-12-20T23:59:59",
      "dateRange": "Jan 2027",
      "location": "Cambridge, UK",
      "isOnline": false,
      "tags": [
        "Europe",
        "Student"
      ],
      "url": "https://hackcambridge.com",
      "status": "upcoming",
      "stage": "Registration",
      "source": "Curated coverage seed",
      "type": "hackathon",
      "description": "英国高校黑客松入口。"
    }
  ],
  "agent-ddl": [
    {
      "id": "agent-ddl-agents-assemble-healthcare-ai-2026-05-20",
      "title": "Agents Assemble Healthcare AI",
      "deadline": "2026-05-20T23:59:59",
      "dateRange": "Apr 1 - May 20, 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Healthcare",
        "MCP"
      ],
      "url": "https://devpost.com/hackathons",
      "status": "upcoming",
      "stage": "Final submit",
      "source": "Curated coverage seed",
      "type": "challenge",
      "description": "医疗智能体应用赛 coverage seed。"
    },
    {
      "id": "agent-ddl-google-cloud-rapid-agent-hackathon-2026-06-11",
      "title": "Google Cloud Rapid Agent Hackathon",
      "deadline": "2026-06-11T23:59:59",
      "dateRange": "May 1 - Jun 11, 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "AI Agents",
        "Cloud"
      ],
      "url": "https://devpost.com/hackathons",
      "status": "upcoming",
      "stage": "Submission",
      "source": "Devpost-style seed",
      "type": "challenge",
      "description": "智能体应用构建赛入口，覆盖 tool use / cloud agent 场景。",
      "prize": "$60,000+"
    },
    {
      "id": "agent-ddl-agentic-ops-hackathon-2026-06-15",
      "title": "Agentic Ops Hackathon",
      "deadline": "2026-06-15T23:59:59",
      "dateRange": "May 15 - Jun 15, 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Ops",
        "Observability"
      ],
      "url": "https://devpost.com/hackathons",
      "status": "upcoming",
      "stage": "Demo video",
      "source": "Curated coverage seed",
      "type": "hackathon",
      "description": "Agentic 运维场景黑客松入口。",
      "prize": "$20,000+"
    },
    {
      "id": "agent-ddl-mcp-server-builder-challenge-2026-07-18",
      "title": "MCP Server Builder Challenge",
      "deadline": "2026-07-18T23:59:59",
      "dateRange": "Jul 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "MCP",
        "Tools"
      ],
      "url": "https://devpost.com/hackathons",
      "status": "upcoming",
      "stage": "Project submit",
      "source": "Curated coverage seed",
      "type": "hackathon",
      "description": "MCP 工具生态构建赛入口。"
    },
    {
      "id": "agent-ddl-car-bench-ijcai-2026-2026-07-31",
      "title": "CAR-bench IJCAI 2026",
      "deadline": "2026-07-31T23:59:59",
      "dateRange": "May 4 - Jul 31, 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Benchmark",
        "Automotive"
      ],
      "url": "https://www.ijcai.org",
      "status": "upcoming",
      "stage": "Leaderboard",
      "source": "Benchmark demo",
      "type": "challenge",
      "description": "智能体可靠性评测入口。"
    },
    {
      "id": "agent-ddl-osworld-agent-challenge-2026-08-22",
      "title": "OSWorld Agent Challenge",
      "deadline": "2026-08-22T23:59:59",
      "dateRange": "Jul-Aug 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Desktop Agent",
        "OSWorld"
      ],
      "url": "https://os-world.github.io",
      "status": "upcoming",
      "stage": "Evaluation",
      "source": "Benchmark coverage seed",
      "type": "challenge",
      "description": "桌面环境智能体评测入口。"
    },
    {
      "id": "agent-ddl-ai-agent-product-launch-sprint-2026-08-31",
      "title": "AI Agent Product Launch Sprint",
      "deadline": "2026-08-31T23:59:59",
      "dateRange": "Aug 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Product",
        "Startup"
      ],
      "url": "https://devpost.com/hackathons",
      "status": "upcoming",
      "stage": "Launch",
      "source": "Curated coverage seed",
      "type": "hackathon",
      "description": "面向产品原型的 Agent 黑客松入口。"
    },
    {
      "id": "agent-ddl-swe-agent-repair-sprint-2026-09-06",
      "title": "SWE-Agent Repair Sprint",
      "deadline": "2026-09-06T23:59:59",
      "dateRange": "Aug 1 - Sep 6, 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "SWE",
        "Code Agent"
      ],
      "url": "https://www.swebench.com",
      "status": "upcoming",
      "stage": "Patch submit",
      "source": "Benchmark demo",
      "type": "challenge",
      "description": "代码修复智能体挑战入口。"
    },
    {
      "id": "agent-ddl-gaia-reasoning-agent-track-2026-09-30",
      "title": "GAIA Reasoning Agent Track",
      "deadline": "2026-09-30T23:59:59",
      "dateRange": "Sep 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Reasoning",
        "Tool Use"
      ],
      "url": "https://huggingface.co/spaces/gaia-benchmark/leaderboard",
      "status": "upcoming",
      "stage": "Leaderboard",
      "source": "Benchmark coverage seed",
      "type": "challenge",
      "description": "通用助理能力评测入口。"
    },
    {
      "id": "agent-ddl-webarena-mini-agent-league-2026-10-12",
      "title": "WebArena Mini Agent League",
      "deadline": "2026-10-12T23:59:59",
      "dateRange": "Sep 1 - Oct 12, 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Web Agent",
        "Browser"
      ],
      "url": "https://webarena.dev",
      "status": "upcoming",
      "stage": "Evaluation",
      "source": "Benchmark demo",
      "type": "challenge",
      "description": "网页智能体评测入口。"
    },
    {
      "id": "agent-ddl-browsergym-web-agent-cup-2026-10-30",
      "title": "BrowserGym Web Agent Cup",
      "deadline": "2026-10-30T23:59:59",
      "dateRange": "Oct 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Browser",
        "Automation"
      ],
      "url": "https://github.com/ServiceNow/BrowserGym",
      "status": "upcoming",
      "stage": "Submission",
      "source": "Benchmark coverage seed",
      "type": "challenge",
      "description": "浏览器智能体任务集入口。"
    },
    {
      "id": "agent-ddl-rag-agent-workflow-cup-2026-11-03",
      "title": "RAG Agent Workflow Cup",
      "deadline": "2026-11-03T23:59:59",
      "dateRange": "Oct 1 - Nov 3, 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "RAG",
        "Workflow"
      ],
      "url": "https://www.kaggle.com/competitions",
      "status": "upcoming",
      "stage": "Notebook submit",
      "source": "Curated coverage seed",
      "type": "challenge",
      "description": "RAG 工作流智能体挑战入口。",
      "prize": "$10,000+"
    },
    {
      "id": "agent-ddl-toolbench-agent-evaluation-2026-11-20",
      "title": "ToolBench Agent Evaluation",
      "deadline": "2026-11-20T23:59:59",
      "dateRange": "Nov 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Tool Use",
        "API"
      ],
      "url": "https://github.com/OpenBMB/ToolBench",
      "status": "upcoming",
      "stage": "Result upload",
      "source": "Benchmark coverage seed",
      "type": "challenge",
      "description": "工具调用智能体评测入口。"
    },
    {
      "id": "agent-ddl-agentbench-refresh-2026-2026-12-08",
      "title": "AgentBench Refresh 2026",
      "deadline": "2026-12-08T23:59:59",
      "dateRange": "Dec 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "AgentBench",
        "LLM"
      ],
      "url": "https://github.com/THUDM/AgentBench",
      "status": "upcoming",
      "stage": "Leaderboard",
      "source": "Benchmark coverage seed",
      "type": "challenge",
      "description": "多任务智能体能力榜单入口。"
    },
    {
      "id": "agent-ddl-long-horizon-planning-agent-eval-2026-12-18",
      "title": "Long-Horizon Planning Agent Eval",
      "deadline": "2026-12-18T23:59:59",
      "dateRange": "Dec 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Planning",
        "Memory"
      ],
      "url": "https://openreview.net/",
      "status": "upcoming",
      "stage": "Paper / report",
      "source": "OpenReview-style seed",
      "type": "challenge",
      "description": "长程规划与记忆能力评测入口。"
    },
    {
      "id": "agent-ddl-mobile-agent-challenge-2027-01-10",
      "title": "Mobile Agent Challenge",
      "deadline": "2027-01-10T23:59:59",
      "dateRange": "Jan 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Mobile Agent",
        "Android"
      ],
      "url": "https://www.kaggle.com/competitions",
      "status": "upcoming",
      "stage": "Submission",
      "source": "Coverage seed",
      "type": "challenge",
      "description": "移动端操作智能体挑战入口。"
    },
    {
      "id": "agent-ddl-multi-agent-safety-eval-2027-01-15",
      "title": "Multi-Agent Safety Eval",
      "deadline": "2027-01-15T23:59:59",
      "dateRange": "Dec 1, 2026 - Jan 15, 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Safety",
        "Multi-Agent"
      ],
      "url": "https://openreview.net/",
      "status": "upcoming",
      "stage": "Report",
      "source": "OpenReview-style seed",
      "type": "challenge",
      "description": "多智能体安全评测入口。"
    },
    {
      "id": "agent-ddl-agent-trust-and-robustness-track-2027-02-15",
      "title": "Agent Trust and Robustness Track",
      "deadline": "2027-02-15T23:59:59",
      "dateRange": "Feb 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Trustworthy AI",
        "Robustness"
      ],
      "url": "https://openreview.net/",
      "status": "upcoming",
      "stage": "Paper",
      "source": "Academic coverage seed",
      "type": "challenge",
      "description": "可信智能体专题评测/论文入口。"
    }
  ],
  "cv-ddl": [
    {
      "id": "cvpr2077ai-2077ai-rising-star-award-may-22-2026",
      "title": "2077AI Rising Star Award",
      "deadline": "2026-05-22T23:59:59Z",
      "dateRange": "May 22, 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "CVPR 2026",
        "challenge",
        "2077AI"
      ],
      "url": "https://www.2077ai.com/challenge-pages/challenges.html",
      "status": "upcoming",
      "description": "Parsed from the official 2077AI CVPR 2026 challenge page.",
      "stage": "Award application deadline",
      "source": "2077AI CVPR 2026 Challenges",
      "type": "challenge"
    },
    {
      "id": "cvpr2077ai-2077ai-datamfm-challenge-may-29-2026",
      "title": "2077AI DataMFM Challenge",
      "deadline": "2026-05-29T23:59:59Z",
      "dateRange": "May 29, 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "CVPR 2026",
        "challenge",
        "2077AI"
      ],
      "url": "https://www.2077ai.com/challenge-pages/challenges.html",
      "status": "upcoming",
      "description": "Parsed from the official 2077AI CVPR 2026 challenge page.",
      "stage": "Submission deadline",
      "source": "2077AI CVPR 2026 Challenges",
      "type": "challenge"
    },
    {
      "id": "cvpr2026-cvpr-2026-1st-workshop-on-video-world-models-interaction-memory-and-efficiency-june-3-2026",
      "title": "CVPR 2026 - 1st Workshop on Video World Models: Interaction, Memory, and Efficiency",
      "deadline": "2026-06-03T23:59:59Z",
      "dateRange": "June 3, 2026 (Wed Half Day)",
      "location": "Denver, CO / Online",
      "isOnline": true,
      "tags": [
        "CVPR 2026",
        "challenge",
        "workshop",
        "VideoWorldModel"
      ],
      "url": "https://videoworldmodel-workshop.github.io/",
      "status": "upcoming",
      "description": "Parsed from the official CVPR 2026 workshops table.",
      "stage": "Workshop / challenge session",
      "source": "CVPR 2026 Workshops",
      "type": "challenge"
    },
    {
      "id": "cvpr2026-cvpr-2026-3rd-workshop-on-scannet-novel-view-synthesis-and-3d-semantic-understanding-chall",
      "title": "CVPR 2026 - 3rd Workshop on ScanNet++ Novel View Synthesis and 3D Semantic Understanding Challenge",
      "deadline": "2026-06-03T23:59:59Z",
      "dateRange": "June 3, 2026 (Wed Half Day)",
      "location": "Denver, CO / Online",
      "isOnline": true,
      "tags": [
        "CVPR 2026",
        "challenge",
        "workshop",
        "ScanNet++"
      ],
      "url": "https://scannetpp.mlsg.cit.tum.de/scannetpp/cvpr2026",
      "status": "upcoming",
      "description": "Parsed from the official CVPR 2026 workshops table.",
      "stage": "Workshop / challenge session",
      "source": "CVPR 2026 Workshops",
      "type": "challenge"
    },
    {
      "id": "cvpr2026-cvpr-2026-ai4rwc-the-2nd-international-workshop-on-vision-intelligence-for-real-world-chal",
      "title": "CVPR 2026 - AI4RWC: The 2nd International Workshop on Vision Intelligence for Real-world Challenges",
      "deadline": "2026-06-03T23:59:59Z",
      "dateRange": "June 3, 2026 (Wed Half Day)",
      "location": "Denver, CO / Online",
      "isOnline": true,
      "tags": [
        "CVPR 2026",
        "challenge",
        "workshop",
        "AI4RWC"
      ],
      "url": "https://sites.google.com/view/ai4rwc2026",
      "status": "upcoming",
      "description": "Parsed from the official CVPR 2026 workshops table.",
      "stage": "Workshop / challenge session",
      "source": "CVPR 2026 Workshops",
      "type": "challenge"
    },
    {
      "id": "cvpr2026-cvpr-2026-gigabrain-challenge-2026-workshop-on-world-models-empowering-vision-language-act",
      "title": "CVPR 2026 - GigaBrain Challenge 2026: Workshop on World Models Empowering Vision Language Action Model",
      "deadline": "2026-06-03T23:59:59Z",
      "dateRange": "June 3, 2026 (Wed Half Day)",
      "location": "Denver, CO / Online",
      "isOnline": true,
      "tags": [
        "CVPR 2026",
        "challenge",
        "workshop",
        "GigaBrain Challenge"
      ],
      "url": "https://gigaai-research.github.io/GigaBrain-Challenge-2026/",
      "status": "upcoming",
      "description": "Parsed from the official CVPR 2026 workshops table.",
      "stage": "Workshop / challenge session",
      "source": "CVPR 2026 Workshops",
      "type": "challenge"
    },
    {
      "id": "cvpr2026-cvpr-2026-multimodal-foundation-models-for-biomedicine-challenges-and-opportunities-june-3",
      "title": "CVPR 2026 - Multimodal Foundation Models for Biomedicine: Challenges and Opportunities",
      "deadline": "2026-06-03T23:59:59Z",
      "dateRange": "June 3, 2026 (Wed Half Day)",
      "location": "Denver, CO / Online",
      "isOnline": true,
      "tags": [
        "CVPR 2026",
        "challenge",
        "workshop",
        "MMFM-BIOMED"
      ],
      "url": "https://mmfm-biomed.github.io/",
      "status": "upcoming",
      "description": "Parsed from the official CVPR 2026 workshops table.",
      "stage": "Workshop / challenge session",
      "source": "CVPR 2026 Workshops",
      "type": "challenge"
    },
    {
      "id": "cvpr2026-cvpr-2026-the-2nd-international-workshop-challenge-on-subtle-visual-computing-cvpr-2026-ju",
      "title": "CVPR 2026 - The 2nd International Workshop & Challenge on Subtle Visual Computing @CVPR 2026",
      "deadline": "2026-06-03T23:59:59Z",
      "dateRange": "June 3, 2026 (Wed Half Day)",
      "location": "Denver, CO / Online",
      "isOnline": true,
      "tags": [
        "CVPR 2026",
        "challenge",
        "workshop",
        "SVC"
      ],
      "url": "https://sites.google.com/view/svc-cvpr26",
      "status": "upcoming",
      "description": "Parsed from the official CVPR 2026 workshops table.",
      "stage": "Workshop / challenge session",
      "source": "CVPR 2026 Workshops",
      "type": "challenge"
    },
    {
      "id": "cvpr2026-cvpr-2026-the-3rd-ai-for-visual-arts-workshop-and-challenges-june-3-2026-wed-half-day",
      "title": "CVPR 2026 - The 3rd AI for Visual Arts Workshop and Challenges",
      "deadline": "2026-06-03T23:59:59Z",
      "dateRange": "June 3, 2026 (Wed Half Day)",
      "location": "Denver, CO / Online",
      "isOnline": true,
      "tags": [
        "CVPR 2026",
        "challenge",
        "workshop",
        "AI4VA"
      ],
      "url": "https://ai4va-cvpr.github.io/",
      "status": "upcoming",
      "description": "Parsed from the official CVPR 2026 workshops table.",
      "stage": "Workshop / challenge session",
      "source": "CVPR 2026 Workshops",
      "type": "challenge"
    },
    {
      "id": "cvpr2026-cvpr-2026-the-5th-datacv-workshop-and-challenge-june-3-2026-wed-half-day",
      "title": "CVPR 2026 - The 5th DataCV Workshop and Challenge",
      "deadline": "2026-06-03T23:59:59Z",
      "dateRange": "June 3, 2026 (Wed Half Day)",
      "location": "Denver, CO / Online",
      "isOnline": true,
      "tags": [
        "CVPR 2026",
        "challenge",
        "workshop",
        "DataCV"
      ],
      "url": "https://sites.google.com/view/datacv-2026-cvpr/",
      "status": "upcoming",
      "description": "Parsed from the official CVPR 2026 workshops table.",
      "stage": "Workshop / challenge session",
      "source": "CVPR 2026 Workshops",
      "type": "challenge"
    },
    {
      "id": "cvpr2026-cvpr-2026-the-7th-international-workshop-and-cvml-challenge-on-agriculture-vision-challeng",
      "title": "CVPR 2026 - The 7th International Workshop and CVML Challenge on Agriculture-Vision: Challenges & Opportunities for Computer Vision in Agriculture",
      "deadline": "2026-06-03T23:59:59Z",
      "dateRange": "June 3, 2026 (Wed Half Day)",
      "location": "Denver, CO / Online",
      "isOnline": true,
      "tags": [
        "CVPR 2026",
        "challenge",
        "workshop",
        "V4A"
      ],
      "url": "https://www.agriculture-vision.com/",
      "status": "upcoming",
      "description": "Parsed from the official CVPR 2026 workshops table.",
      "stage": "Workshop / challenge session",
      "source": "CVPR 2026 Workshops",
      "type": "challenge"
    },
    {
      "id": "cvpr2026-cvpr-2026-workshop-on-world-models-meet-active-sensing-and-closed-loop-planning-june-3-202",
      "title": "CVPR 2026 - Workshop on World Models Meet Active Sensing and Closed-Loop Planning",
      "deadline": "2026-06-03T23:59:59Z",
      "dateRange": "June 3, 2026 (Wed Half Day)",
      "location": "Denver, CO / Online",
      "isOnline": true,
      "tags": [
        "CVPR 2026",
        "challenge",
        "workshop",
        "WMAS"
      ],
      "url": "https://cvpr.thecvf.com/Conferences/2026/Workshops",
      "status": "upcoming",
      "description": "Parsed from the official CVPR 2026 workshops table.",
      "stage": "Workshop / challenge session",
      "source": "CVPR 2026 Workshops",
      "type": "challenge"
    },
    {
      "id": "cvpr2026-cvpr-2026-11th-new-trends-in-image-restoration-and-enhancement-workshop-and-challenges-jun",
      "title": "CVPR 2026 - 11th New Trends in Image Restoration and Enhancement Workshop and Challenges",
      "deadline": "2026-06-04T23:59:59Z",
      "dateRange": "June 4, 2026 (Thu Full Day)",
      "location": "Denver, CO / Online",
      "isOnline": true,
      "tags": [
        "CVPR 2026",
        "challenge",
        "workshop",
        "NTIRE"
      ],
      "url": "https://www.cvlai.net/ntire/2026/",
      "status": "upcoming",
      "description": "Parsed from the official CVPR 2026 workshops table.",
      "stage": "Workshop / challenge session",
      "source": "CVPR 2026 Workshops",
      "type": "challenge"
    },
    {
      "id": "cvpr2026-cvpr-2026-4d-world-models-bridging-generation-and-reconstruction-june-4-2026-thu-half-day",
      "title": "CVPR 2026 - 4D World Models: Bridging Generation and Reconstruction",
      "deadline": "2026-06-04T23:59:59Z",
      "dateRange": "June 4, 2026 (Thu Half Day)",
      "location": "Denver, CO / Online",
      "isOnline": true,
      "tags": [
        "CVPR 2026",
        "challenge",
        "workshop",
        "ReGen4D"
      ],
      "url": "https://ivl.cs.brown.edu/4dworldmodels/",
      "status": "upcoming",
      "description": "Parsed from the official CVPR 2026 workshops table.",
      "stage": "Workshop / challenge session",
      "source": "CVPR 2026 Workshops",
      "type": "challenge"
    },
    {
      "id": "cvpr2026-cvpr-2026-6th-workshop-on-cv4animals-computer-vision-for-animal-behavior-tracking-and-mode",
      "title": "CVPR 2026 - 6th Workshop on CV4Animals: Computer Vision for Animal Behavior Tracking and Modeling",
      "deadline": "2026-06-04T23:59:59Z",
      "dateRange": "June 4, 2026 (Thu Half Day)",
      "location": "Denver, CO / Online",
      "isOnline": true,
      "tags": [
        "CVPR 2026",
        "challenge",
        "workshop",
        "CV4Animals"
      ],
      "url": "https://www.cv4animals.com/",
      "status": "upcoming",
      "description": "Parsed from the official CVPR 2026 workshops table.",
      "stage": "Workshop / challenge session",
      "source": "CVPR 2026 Workshops",
      "type": "challenge"
    },
    {
      "id": "cvpr2026-cvpr-2026-eighth-workshop-on-image-matching-local-features-and-beyond-june-4-2026-thu-half",
      "title": "CVPR 2026 - Eighth Workshop on Image Matching: Local Features and Beyond",
      "deadline": "2026-06-04T23:59:59Z",
      "dateRange": "June 4, 2026 (Thu Half Day)",
      "location": "Denver, CO / Online",
      "isOnline": true,
      "tags": [
        "CVPR 2026",
        "challenge",
        "workshop",
        "IMW"
      ],
      "url": "https://image-matching-workshop.github.io/",
      "status": "upcoming",
      "description": "Parsed from the official CVPR 2026 workshops table.",
      "stage": "Workshop / challenge session",
      "source": "CVPR 2026 Workshops",
      "type": "challenge"
    },
    {
      "id": "cvpr2026-cvpr-2026-embodied-reasoning-in-action-workshop-and-challenge-on-embodied-reasoning-for-ro",
      "title": "CVPR 2026 - Embodied Reasoning in Action: Workshop and Challenge on Embodied Reasoning for Robotic Manipulation",
      "deadline": "2026-06-04T23:59:59Z",
      "dateRange": "June 4, 2026 (Thu Full Day)",
      "location": "Denver, CO / Online",
      "isOnline": true,
      "tags": [
        "CVPR 2026",
        "challenge",
        "workshop",
        "ERA"
      ],
      "url": "https://embodied-reasoning.github.io/",
      "status": "upcoming",
      "description": "Parsed from the official CVPR 2026 workshops table.",
      "stage": "Workshop / challenge session",
      "source": "CVPR 2026 Workshops",
      "type": "challenge"
    },
    {
      "id": "cvpr2026-cvpr-2026-from-perception-to-persuasion-challenges-and-advances-in-misinformation-detectio",
      "title": "CVPR 2026 - From Perception to Persuasion: Challenges and Advances in Misinformation Detection in Society",
      "deadline": "2026-06-04T23:59:59Z",
      "dateRange": "June 4, 2026 (Thu Half Day)",
      "location": "Denver, CO / Online",
      "isOnline": true,
      "tags": [
        "CVPR 2026",
        "challenge",
        "workshop",
        "PP-MisDet"
      ],
      "url": "https://eecs.uq.edu.au/CVPR2026",
      "status": "upcoming",
      "description": "Parsed from the official CVPR 2026 workshops table.",
      "stage": "Workshop / challenge session",
      "source": "CVPR 2026 Workshops",
      "type": "challenge"
    },
    {
      "id": "cvpr2026-cvpr-2026-mobile-ai-workshop-and-associated-challenges-6th-edition-june-4-2026-thu-full-da",
      "title": "CVPR 2026 - Mobile AI workshop and associated challenges, 6th edition",
      "deadline": "2026-06-04T23:59:59Z",
      "dateRange": "June 4, 2026 (Thu Full Day)",
      "location": "Denver, CO / Online",
      "isOnline": true,
      "tags": [
        "CVPR 2026",
        "challenge",
        "workshop",
        "MAI 2026"
      ],
      "url": "https://ai-benchmark.com/workshops/mai/2026/",
      "status": "upcoming",
      "description": "Parsed from the official CVPR 2026 workshops table.",
      "stage": "Workshop / challenge session",
      "source": "CVPR 2026 Workshops",
      "type": "challenge"
    },
    {
      "id": "cvpr2026-cvpr-2026-multi-agent-embodied-intelligent-systems-meet-agentic-ai-era-opportunities-chall",
      "title": "CVPR 2026 - Multi-Agent Embodied Intelligent Systems Meet Agentic-AI era: Opportunities, Challenges and Futures",
      "deadline": "2026-06-04T23:59:59Z",
      "dateRange": "June 4, 2026 (Thu Full Day)",
      "location": "Denver, CO / Online",
      "isOnline": true,
      "tags": [
        "CVPR 2026",
        "challenge",
        "workshop",
        "MEIS"
      ],
      "url": "https://coop-intelligence.github.io/",
      "status": "upcoming",
      "description": "Parsed from the official CVPR 2026 workshops table.",
      "stage": "Workshop / challenge session",
      "source": "CVPR 2026 Workshops",
      "type": "challenge"
    },
    {
      "id": "cvpr2026-cvpr-2026-pixel-level-video-understanding-in-the-wild-challenge-june-4-2026-thu-half-day",
      "title": "CVPR 2026 - Pixel-level Video Understanding in the Wild Challenge",
      "deadline": "2026-06-04T23:59:59Z",
      "dateRange": "June 4, 2026 (Thu Half Day)",
      "location": "Denver, CO / Online",
      "isOnline": true,
      "tags": [
        "CVPR 2026",
        "challenge",
        "workshop",
        "PVUW"
      ],
      "url": "https://pvuw.github.io/",
      "status": "upcoming",
      "description": "Parsed from the official CVPR 2026 workshops table.",
      "stage": "Workshop / challenge session",
      "source": "CVPR 2026 Workshops",
      "type": "challenge"
    },
    {
      "id": "cvpr2026-cvpr-2026-the-8th-ug2-workshop-and-challenge-bridging-the-gap-between-computational-photog",
      "title": "CVPR 2026 - The 8th UG2+ Workshop and Challenge: Bridging the Gap between Computational Photography and Visual Perception",
      "deadline": "2026-06-04T23:59:59Z",
      "dateRange": "June 4, 2026 (Thu Half Day)",
      "location": "Denver, CO / Online",
      "isOnline": true,
      "tags": [
        "CVPR 2026",
        "challenge",
        "workshop",
        "UG2+"
      ],
      "url": "https://cvpr2026ug2challenge.github.io/",
      "status": "upcoming",
      "description": "Parsed from the official CVPR 2026 workshops table.",
      "stage": "Workshop / challenge session",
      "source": "CVPR 2026 Workshops",
      "type": "challenge"
    },
    {
      "id": "cvpr2026-cvpr-2026-video-generative-models-benchmarks-and-evaluation-june-4-2026-thu-full-day",
      "title": "CVPR 2026 - Video Generative Models: Benchmarks and Evaluation",
      "deadline": "2026-06-04T23:59:59Z",
      "dateRange": "June 4, 2026 (Thu Full Day)",
      "location": "Denver, CO / Online",
      "isOnline": true,
      "tags": [
        "CVPR 2026",
        "challenge",
        "workshop",
        "VGBE"
      ],
      "url": "https://vidgen-bench-eval.github.io/",
      "status": "upcoming",
      "description": "Parsed from the official CVPR 2026 workshops table.",
      "stage": "Workshop / challenge session",
      "source": "CVPR 2026 Workshops",
      "type": "challenge"
    },
    {
      "id": "cvpr2026-cvpr-2026-vizwiz-grand-challenge-interpreting-images-and-videos-taken-by-blind-people-june",
      "title": "CVPR 2026 - VizWiz Grand Challenge: Interpreting Images and Videos Taken by Blind People",
      "deadline": "2026-06-04T23:59:59Z",
      "dateRange": "June 4, 2026 (Thu Half Day)",
      "location": "Denver, CO / Online",
      "isOnline": true,
      "tags": [
        "CVPR 2026",
        "challenge",
        "workshop",
        "VizWiz"
      ],
      "url": "https://vizwiz.org/workshops/2026-vizwiz-grand-challenge-workshop/",
      "status": "upcoming",
      "description": "Parsed from the official CVPR 2026 workshops table.",
      "stage": "Workshop / challenge session",
      "source": "CVPR 2026 Workshops",
      "type": "challenge"
    },
    {
      "id": "eccv-ebmv-2026-ebmv-eccv-2026-challenge-submission-deadline-june-30-2026",
      "title": "EBMV @ ECCV 2026 - Challenge submission deadline",
      "deadline": "2026-06-30T23:59:59Z",
      "dateRange": "June 30, 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "ECCV 2026",
        "challenge",
        "event-based vision"
      ],
      "url": "https://eventbasemultimodalvision.github.io/",
      "status": "upcoming",
      "description": "Parsed from the EBMV @ ECCV 2026 official workshop page.",
      "stage": "Challenge submission deadline",
      "source": "EBMV @ ECCV 2026",
      "type": "challenge"
    },
    {
      "id": "eccv-ebmv-2026-ebmv-eccv-2026-challenge-results-announcement-july-5-2026",
      "title": "EBMV @ ECCV 2026 - Challenge results announcement",
      "deadline": "2026-07-05T23:59:59Z",
      "dateRange": "July 5, 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "ECCV 2026",
        "challenge",
        "event-based vision"
      ],
      "url": "https://eventbasemultimodalvision.github.io/",
      "status": "upcoming",
      "description": "Parsed from the EBMV @ ECCV 2026 official workshop page.",
      "stage": "Challenge results announcement",
      "source": "EBMV @ ECCV 2026",
      "type": "challenge"
    },
    {
      "id": "eccv-ebmv-2026-ebmv-eccv-2026-technical-report-deadline-july-10-2026",
      "title": "EBMV @ ECCV 2026 - Technical report deadline",
      "deadline": "2026-07-10T23:59:59Z",
      "dateRange": "July 10, 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "ECCV 2026",
        "challenge",
        "event-based vision"
      ],
      "url": "https://eventbasemultimodalvision.github.io/",
      "status": "upcoming",
      "description": "Parsed from the EBMV @ ECCV 2026 official workshop page.",
      "stage": "Technical report deadline",
      "source": "EBMV @ ECCV 2026",
      "type": "challenge"
    },
    {
      "id": "eccv-emr-2026-emr-eccv-2026-full-paper-submission-deadline-july-12-2026",
      "title": "EMR @ ECCV 2026 - Full paper submission deadline",
      "deadline": "2026-07-12T23:59:59Z",
      "dateRange": "July 12, 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "ECCV 2026",
        "challenge",
        "embodied AI"
      ],
      "url": "https://emr-workshop.github.io/",
      "status": "upcoming",
      "description": "Parsed from the EMR Workshop @ ECCV 2026 official page.",
      "stage": "Full paper submission deadline",
      "source": "EMR @ ECCV 2026",
      "type": "challenge"
    },
    {
      "id": "eccv-ebmv-2026-ebmv-eccv-2026-workshop-paper-deadline-july-20-2026",
      "title": "EBMV @ ECCV 2026 - Workshop paper deadline",
      "deadline": "2026-07-20T23:59:59Z",
      "dateRange": "July 20, 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "ECCV 2026",
        "challenge",
        "event-based vision"
      ],
      "url": "https://eventbasemultimodalvision.github.io/",
      "status": "upcoming",
      "description": "Parsed from the EBMV @ ECCV 2026 official workshop page.",
      "stage": "Workshop paper deadline",
      "source": "EBMV @ ECCV 2026",
      "type": "challenge"
    },
    {
      "id": "eccv-emr-2026-emr-eccv-2026-extended-abstract-submission-july-24-2026",
      "title": "EMR @ ECCV 2026 - Extended abstract submission",
      "deadline": "2026-07-24T23:59:59Z",
      "dateRange": "July 24, 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "ECCV 2026",
        "challenge",
        "embodied AI"
      ],
      "url": "https://emr-workshop.github.io/",
      "status": "upcoming",
      "description": "Parsed from the EMR Workshop @ ECCV 2026 official page.",
      "stage": "Extended abstract submission",
      "source": "EMR @ ECCV 2026",
      "type": "challenge"
    },
    {
      "id": "eccv-emr-2026-emr-eccv-2026-notification-july-31-2026",
      "title": "EMR @ ECCV 2026 - Notification",
      "deadline": "2026-07-31T23:59:59Z",
      "dateRange": "July 31, 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "ECCV 2026",
        "challenge",
        "embodied AI"
      ],
      "url": "https://emr-workshop.github.io/",
      "status": "upcoming",
      "description": "Parsed from the EMR Workshop @ ECCV 2026 official page.",
      "stage": "Notification",
      "source": "EMR @ ECCV 2026",
      "type": "challenge"
    },
    {
      "id": "eccv-ebmv-2026-ebmv-eccv-2026-camera-ready-deadline-august-12-2026",
      "title": "EBMV @ ECCV 2026 - Camera-ready deadline",
      "deadline": "2026-08-12T23:59:59Z",
      "dateRange": "August 12, 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "ECCV 2026",
        "challenge",
        "event-based vision"
      ],
      "url": "https://eventbasemultimodalvision.github.io/",
      "status": "upcoming",
      "description": "Parsed from the EBMV @ ECCV 2026 official workshop page.",
      "stage": "Camera-ready deadline",
      "source": "EBMV @ ECCV 2026",
      "type": "challenge"
    },
    {
      "id": "eccv-emr-2026-emr-eccv-2026-final-version-august-14-2026",
      "title": "EMR @ ECCV 2026 - Final version",
      "deadline": "2026-08-14T23:59:59Z",
      "dateRange": "August 14, 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "ECCV 2026",
        "challenge",
        "embodied AI"
      ],
      "url": "https://emr-workshop.github.io/",
      "status": "upcoming",
      "description": "Parsed from the EMR Workshop @ ECCV 2026 official page.",
      "stage": "Final version",
      "source": "EMR @ ECCV 2026",
      "type": "challenge"
    }
  ],
  "nlp-ddl": [
    {
      "id": "nlp-ddl-emnlp-2026-full-paper-2026-06-16",
      "title": "EMNLP 2026 Full Paper",
      "deadline": "2026-06-16T23:59:59",
      "dateRange": "Jun 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "EMNLP",
        "NLP"
      ],
      "url": "https://2026.emnlp.org",
      "status": "upcoming",
      "stage": "Paper",
      "source": "Curated coverage seed",
      "type": "conference",
      "description": "EMNLP 主会全文提交入口。"
    },
    {
      "id": "nlp-ddl-clpsych-shared-task-2026-2026-07-10",
      "title": "CLPsych Shared Task 2026",
      "deadline": "2026-07-10T23:59:59",
      "dateRange": "Jul 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Clinical NLP",
        "Shared Task"
      ],
      "url": "https://clpsych.org",
      "status": "upcoming",
      "stage": "System submit",
      "source": "Curated coverage seed",
      "type": "conference",
      "description": "临床 NLP shared task 入口。"
    },
    {
      "id": "nlp-ddl-bionlp-workshop-paper-2026-08-05",
      "title": "BioNLP Workshop Paper",
      "deadline": "2026-08-05T23:59:59",
      "dateRange": "Aug 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "BioNLP",
        "Workshop"
      ],
      "url": "https://aclweb.org/aclwiki/BioNLP_Workshop",
      "status": "upcoming",
      "stage": "Paper",
      "source": "Curated coverage seed",
      "type": "conference",
      "description": "生物医学 NLP workshop 入口。"
    },
    {
      "id": "nlp-ddl-chinese-nlpcc-2026-demo-track-2026-08-21",
      "title": "Chinese NLPCC 2026 Demo Track",
      "deadline": "2026-08-21T23:59:59",
      "dateRange": "Aug 2026",
      "location": "China",
      "isOnline": false,
      "tags": [
        "Chinese NLP",
        "NLPCC"
      ],
      "url": "http://tcci.ccf.org.cn",
      "status": "upcoming",
      "stage": "Demo",
      "source": "SinoConf-style seed",
      "type": "conference",
      "description": "中文 NLP 会议/任务入口。"
    },
    {
      "id": "nlp-ddl-blackboxnlp-workshop-2026-09-01",
      "title": "BlackboxNLP Workshop",
      "deadline": "2026-09-01T23:59:59",
      "dateRange": "Sep 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Interpretability",
        "Workshop"
      ],
      "url": "https://blackboxnlp.github.io",
      "status": "upcoming",
      "stage": "Paper",
      "source": "Curated coverage seed",
      "type": "conference",
      "description": "NLP 可解释性 workshop 入口。"
    },
    {
      "id": "nlp-ddl-coling-2027-long-paper-2026-09-18",
      "title": "COLING 2027 Long Paper",
      "deadline": "2026-09-18T23:59:59",
      "dateRange": "Sep 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "COLING",
        "Long Paper"
      ],
      "url": "https://coling2026.org",
      "status": "upcoming",
      "stage": "Long paper",
      "source": "Curated coverage seed",
      "type": "conference",
      "description": "COLING 长文提交入口。"
    },
    {
      "id": "nlp-ddl-acl-2027-arr-commitment-2026-10-15",
      "title": "ACL 2027 ARR Commitment",
      "deadline": "2026-10-15T23:59:59",
      "dateRange": "Oct 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "ACL",
        "ARR"
      ],
      "url": "https://www.aclweb.org",
      "status": "upcoming",
      "stage": "ARR commit",
      "source": "AllConfs-style seed",
      "type": "conference",
      "description": "ACL 系列主会 ARR 承诺流入口。"
    },
    {
      "id": "nlp-ddl-legal-nlp-challenge-2026-2026-10-30",
      "title": "Legal NLP Challenge 2026",
      "deadline": "2026-10-30T23:59:59",
      "dateRange": "Oct 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Legal NLP",
        "Chinese"
      ],
      "url": "https://www.kaggle.com/competitions",
      "status": "upcoming",
      "stage": "Submission",
      "source": "Curated coverage seed",
      "type": "conference",
      "description": "法律文本处理挑战入口。"
    },
    {
      "id": "nlp-ddl-mrqa-shared-task-refresh-2026-11-10",
      "title": "MRQA Shared Task Refresh",
      "deadline": "2026-11-10T23:59:59",
      "dateRange": "Nov 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "QA",
        "Reading Comprehension"
      ],
      "url": "https://mrqa.github.io",
      "status": "upcoming",
      "stage": "Leaderboard",
      "source": "Curated coverage seed",
      "type": "conference",
      "description": "阅读理解与问答评测入口。"
    },
    {
      "id": "nlp-ddl-rag-evaluation-shared-task-2026-11-28",
      "title": "RAG Evaluation Shared Task",
      "deadline": "2026-11-28T23:59:59",
      "dateRange": "Nov 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "RAG",
        "Evaluation"
      ],
      "url": "https://openreview.net/",
      "status": "upcoming",
      "stage": "System report",
      "source": "Curated coverage seed",
      "type": "conference",
      "description": "检索增强生成评测入口。"
    },
    {
      "id": "nlp-ddl-semeval-2027-system-submission-2026-12-05",
      "title": "SemEval 2027 System Submission",
      "deadline": "2026-12-05T23:59:59",
      "dateRange": "Dec 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "SemEval",
        "Evaluation"
      ],
      "url": "https://semeval.github.io",
      "status": "upcoming",
      "stage": "System",
      "source": "Shared-task demo",
      "type": "conference",
      "description": "语义评测任务入口。"
    },
    {
      "id": "nlp-ddl-naacl-2027-paper-submission-2026-12-18",
      "title": "NAACL 2027 Paper Submission",
      "deadline": "2026-12-18T23:59:59",
      "dateRange": "Dec 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "NAACL",
        "NLP"
      ],
      "url": "https://naacl.org",
      "status": "upcoming",
      "stage": "Paper",
      "source": "Curated coverage seed",
      "type": "conference",
      "description": "NAACL 投稿入口。"
    },
    {
      "id": "nlp-ddl-long-context-nlp-benchmark-2027-01-08",
      "title": "Long Context NLP Benchmark",
      "deadline": "2027-01-08T23:59:59",
      "dateRange": "Jan 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Long Context",
        "Benchmark"
      ],
      "url": "https://www.kaggle.com/competitions",
      "status": "upcoming",
      "stage": "Leaderboard",
      "source": "Curated coverage seed",
      "type": "conference",
      "description": "长上下文 NLP benchmark 入口。"
    },
    {
      "id": "nlp-ddl-conll-shared-task-2027-2027-01-20",
      "title": "CoNLL Shared Task 2027",
      "deadline": "2027-01-20T23:59:59",
      "dateRange": "Jan 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "CoNLL",
        "Shared Task"
      ],
      "url": "https://www.conll.org",
      "status": "upcoming",
      "stage": "System submit",
      "source": "Shared-task demo",
      "type": "conference",
      "description": "Shared task 注册与系统提交入口。"
    },
    {
      "id": "nlp-ddl-low-resource-languages-track-2027-02-01",
      "title": "Low Resource Languages Track",
      "deadline": "2027-02-01T23:59:59",
      "dateRange": "Feb 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Low-resource",
        "Multilingual"
      ],
      "url": "https://sigtyp.github.io",
      "status": "upcoming",
      "stage": "Paper / system",
      "source": "Curated coverage seed",
      "type": "conference",
      "description": "低资源语言 shared task 入口。"
    },
    {
      "id": "nlp-ddl-wmt-2027-translation-task-2027-02-12",
      "title": "WMT 2027 Translation Task",
      "deadline": "2027-02-12T23:59:59",
      "dateRange": "Feb 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "WMT",
        "MT"
      ],
      "url": "https://www.statmt.org/wmt",
      "status": "upcoming",
      "stage": "Result upload",
      "source": "Benchmark demo",
      "type": "conference",
      "description": "机器翻译评测入口。"
    },
    {
      "id": "nlp-ddl-inlg-2027-paper-2027-02-20",
      "title": "INLG 2027 Paper",
      "deadline": "2027-02-20T23:59:59",
      "dateRange": "Feb 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "NLG",
        "Generation"
      ],
      "url": "https://aclweb.org/aclwiki/INLG",
      "status": "upcoming",
      "stage": "Paper",
      "source": "Curated coverage seed",
      "type": "conference",
      "description": "自然语言生成会议入口。"
    },
    {
      "id": "nlp-ddl-sigdial-2027-paper-2027-03-01",
      "title": "SIGDIAL 2027 Paper",
      "deadline": "2027-03-01T23:59:59",
      "dateRange": "Mar 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Dialogue",
        "SIGDIAL"
      ],
      "url": "https://www.sigdial.org",
      "status": "upcoming",
      "stage": "Paper",
      "source": "Curated coverage seed",
      "type": "conference",
      "description": "对话系统会议入口。"
    }
  ],
  "academic-ddl": [
    {
      "id": "academic-ddl-neurips-2026-full-paper-2026-05-28",
      "title": "NeurIPS 2026 Full Paper",
      "deadline": "2026-05-28T23:59:59",
      "dateRange": "May 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "ML",
        "AI"
      ],
      "url": "https://neurips.cc",
      "status": "upcoming",
      "stage": "Paper",
      "source": "AllConfs-style seed",
      "type": "conference",
      "description": "机器学习主会投稿入口。"
    },
    {
      "id": "academic-ddl-vldb-2027-monthly-deadline-2026-06-01",
      "title": "VLDB 2027 Monthly Deadline",
      "deadline": "2026-06-01T23:59:59",
      "dateRange": "Rolling 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Database",
        "VLDB"
      ],
      "url": "https://vldb.org",
      "status": "ongoing",
      "stage": "Monthly cycle",
      "source": "Curated coverage seed",
      "type": "conference",
      "description": "VLDB 月度投稿入口。"
    },
    {
      "id": "academic-ddl-sigmod-2027-round-1-2026-07-15",
      "title": "SIGMOD 2027 Round 1",
      "deadline": "2026-07-15T23:59:59",
      "dateRange": "Jul 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Database",
        "SIGMOD"
      ],
      "url": "https://sigmod.org",
      "status": "upcoming",
      "stage": "Round 1",
      "source": "Curated coverage seed",
      "type": "conference",
      "description": "数据库会议滚动投稿入口。"
    },
    {
      "id": "academic-ddl-aaai-2027-abstract-2026-08-12",
      "title": "AAAI 2027 Abstract",
      "deadline": "2026-08-12T23:59:59",
      "dateRange": "Aug 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "AI",
        "AAAI"
      ],
      "url": "https://aaai.org",
      "status": "upcoming",
      "stage": "Abstract",
      "source": "Curated coverage seed",
      "type": "conference",
      "description": "AAAI abstract 阶段入口。"
    },
    {
      "id": "academic-ddl-chi-2027-papers-2026-09-10",
      "title": "CHI 2027 Papers",
      "deadline": "2026-09-10T23:59:59",
      "dateRange": "Sep 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "HCI",
        "CHI"
      ],
      "url": "https://chi2027.acm.org",
      "status": "upcoming",
      "stage": "Paper",
      "source": "Curated coverage seed",
      "type": "conference",
      "description": "人机交互会议入口。"
    },
    {
      "id": "academic-ddl-icra-2027-paper-2026-09-15",
      "title": "ICRA 2027 Paper",
      "deadline": "2026-09-15T23:59:59",
      "dateRange": "Sep 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Robotics",
        "ICRA"
      ],
      "url": "https://www.ieee-ras.org/conferences-workshops/fully-sponsored/icra",
      "status": "upcoming",
      "stage": "Paper",
      "source": "Curated coverage seed",
      "type": "conference",
      "description": "机器人会议入口。"
    },
    {
      "id": "academic-ddl-nsf-proposal-calendar-reminder-2026-09-30",
      "title": "NSF Proposal Calendar Reminder",
      "deadline": "2026-09-30T23:59:59",
      "dateRange": "Sep 2026",
      "location": "United States",
      "isOnline": true,
      "tags": [
        "Grant",
        "Proposal"
      ],
      "url": "https://www.nsf.gov/funding",
      "status": "upcoming",
      "stage": "Proposal window",
      "source": "Curated coverage seed",
      "type": "program",
      "description": "科研基金/项目申请入口，后续可拆分到独立 grant-ddl。"
    },
    {
      "id": "academic-ddl-iclr-2027-submission-2026-10-01",
      "title": "ICLR 2027 Submission",
      "deadline": "2026-10-01T23:59:59",
      "dateRange": "Oct 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Representation",
        "OpenReview"
      ],
      "url": "https://iclr.cc",
      "status": "upcoming",
      "stage": "OpenReview",
      "source": "OpenReview-style seed",
      "type": "conference",
      "description": "ICLR 投稿入口。"
    },
    {
      "id": "academic-ddl-www-2027-research-track-2026-10-07",
      "title": "WWW 2027 Research Track",
      "deadline": "2026-10-07T23:59:59",
      "dateRange": "Oct 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Web",
        "Graph"
      ],
      "url": "https://www2027.thewebconf.org",
      "status": "upcoming",
      "stage": "Paper",
      "source": "Curated coverage seed",
      "type": "conference",
      "description": "Web Conference 研究论文入口。"
    },
    {
      "id": "academic-ddl-aistats-2027-paper-2026-10-08",
      "title": "AISTATS 2027 Paper",
      "deadline": "2026-10-08T23:59:59",
      "dateRange": "Oct 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Statistics",
        "ML"
      ],
      "url": "https://aistats.org",
      "status": "upcoming",
      "stage": "Paper",
      "source": "Curated coverage seed",
      "type": "conference",
      "description": "统计学习会议入口。"
    },
    {
      "id": "academic-ddl-ubicomp-2027-full-paper-2026-10-20",
      "title": "UbiComp 2027 Full Paper",
      "deadline": "2026-10-20T23:59:59",
      "dateRange": "Oct 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "UbiComp",
        "HCI"
      ],
      "url": "https://ubicomp.org",
      "status": "upcoming",
      "stage": "Paper",
      "source": "Curated coverage seed",
      "type": "conference",
      "description": "普适计算会议入口。"
    },
    {
      "id": "academic-ddl-isca-2027-paper-2026-11-18",
      "title": "ISCA 2027 Paper",
      "deadline": "2026-11-18T23:59:59",
      "dateRange": "Nov 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Architecture",
        "Systems"
      ],
      "url": "https://iscaconf.org",
      "status": "upcoming",
      "stage": "Paper",
      "source": "Curated coverage seed",
      "type": "conference",
      "description": "计算机体系结构会议入口。"
    },
    {
      "id": "academic-ddl-icaps-2027-paper-2026-11-20",
      "title": "ICAPS 2027 Paper",
      "deadline": "2026-11-20T23:59:59",
      "dateRange": "Nov 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Planning",
        "Scheduling"
      ],
      "url": "https://icaps-conference.org",
      "status": "upcoming",
      "stage": "Paper",
      "source": "Curated coverage seed",
      "type": "conference",
      "description": "规划与调度会议入口。"
    },
    {
      "id": "academic-ddl-icml-2027-abstract-2027-01-23",
      "title": "ICML 2027 Abstract",
      "deadline": "2027-01-23T23:59:59",
      "dateRange": "Jan 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "ML",
        "Optimization"
      ],
      "url": "https://icml.cc",
      "status": "upcoming",
      "stage": "Abstract",
      "source": "Curated coverage seed",
      "type": "conference",
      "description": "ICML abstract 阶段入口。"
    },
    {
      "id": "academic-ddl-rss-2027-paper-2027-01-25",
      "title": "RSS 2027 Paper",
      "deadline": "2027-01-25T23:59:59",
      "dateRange": "Jan 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Robotics",
        "RSS"
      ],
      "url": "https://roboticsconference.org",
      "status": "upcoming",
      "stage": "Paper",
      "source": "Curated coverage seed",
      "type": "conference",
      "description": "Robotics: Science and Systems 投稿入口。"
    },
    {
      "id": "academic-ddl-sigir-2027-full-paper-2027-01-30",
      "title": "SIGIR 2027 Full Paper",
      "deadline": "2027-01-30T23:59:59",
      "dateRange": "Jan 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "IR",
        "Search"
      ],
      "url": "https://sigir.org",
      "status": "upcoming",
      "stage": "Paper",
      "source": "Curated coverage seed",
      "type": "conference",
      "description": "信息检索会议入口。"
    },
    {
      "id": "academic-ddl-osdi-2027-paper-2027-02-01",
      "title": "OSDI 2027 Paper",
      "deadline": "2027-02-01T23:59:59",
      "dateRange": "Feb 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Systems",
        "OSDI"
      ],
      "url": "https://www.usenix.org/conferences",
      "status": "upcoming",
      "stage": "Paper",
      "source": "Curated coverage seed",
      "type": "conference",
      "description": "系统研究会议入口。"
    },
    {
      "id": "academic-ddl-kdd-2027-research-track-2027-02-04",
      "title": "KDD 2027 Research Track",
      "deadline": "2027-02-04T23:59:59",
      "dateRange": "Feb 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Data Mining",
        "KDD"
      ],
      "url": "https://kdd.org",
      "status": "upcoming",
      "stage": "Research",
      "source": "Curated coverage seed",
      "type": "conference",
      "description": "数据挖掘会议入口。"
    },
    {
      "id": "academic-ddl-uai-2027-paper-2027-02-14",
      "title": "UAI 2027 Paper",
      "deadline": "2027-02-14T23:59:59",
      "dateRange": "Feb 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Uncertainty",
        "AI"
      ],
      "url": "https://www.auai.org/uai",
      "status": "upcoming",
      "stage": "Paper",
      "source": "Curated coverage seed",
      "type": "conference",
      "description": "不确定性人工智能会议入口。"
    },
    {
      "id": "academic-ddl-acm-mm-2027-paper-2027-03-31",
      "title": "ACM MM 2027 Paper",
      "deadline": "2027-03-31T23:59:59",
      "dateRange": "Mar 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Multimedia",
        "ACM"
      ],
      "url": "https://acmmm.org",
      "status": "upcoming",
      "stage": "Paper",
      "source": "Curated coverage seed",
      "type": "conference",
      "description": "多媒体会议主会入口。"
    }
  ],
  "journal-ddl": [
    {
      "id": "journal-ddl-ieee-jsac-digital-twins-for-wireless-networks-enabling-appli",
      "title": "Digital Twins for Wireless Networks: Enabling Application-Aware and Closed-Loop Optimization",
      "deadline": "2026-05-15T23:59:59",
      "dateRange": "2026-05-15",
      "location": "IEEE JSAC",
      "isOnline": true,
      "tags": [
        "IEEE",
        "ComSoc"
      ],
      "url": "https://www.comsoc.org/publications/journals/ieee-jsac/cfp/digital-twins-wireless-networks-enabling-application-aware-and",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "IEEE JSAC CFP",
      "type": "journal",
      "description": "Fourth Quarter 2026 15 May 2026",
      "journal": "IEEE JSAC",
      "publisher": "IEEE",
      "cfpType": "Special Issue",
      "sourcePriority": "official-society",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "ieee-jsac",
        "parser": "ieee-comsoc-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.820Z"
      }
    },
    {
      "id": "journal-ddl-ieee-comsoc-magazine-explainable-artificial-intelligence-for",
      "title": "Explainable Artificial Intelligence for Wireless Communications",
      "deadline": "2026-05-15T23:59:59",
      "dateRange": "2026-05-15",
      "location": "IEEE ComSoc",
      "isOnline": true,
      "tags": [
        "IEEE",
        "ComSoc"
      ],
      "url": "https://www.comsoc.org/publications/magazines/ieee-communications-magazine/cfp/explainable-artificial-intelligence",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "IEEE Communications Magazine CFP",
      "type": "journal",
      "description": "December 2026 15 May 2026",
      "journal": "IEEE Communications Magazine",
      "publisher": "IEEE",
      "cfpType": "Special Issue",
      "sourcePriority": "official-society",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "ieee-comsoc-magazine",
        "parser": "ieee-comsoc-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.820Z"
      }
    },
    {
      "id": "journal-ddl-ieee-sps-special-issues-ieee-jstsp-special-issue-on-wireless",
      "title": "IEEE JSTSP Special Issue on Wireless Foundation Models for AI-native 6G and Beyond",
      "deadline": "2026-05-15T23:59:59",
      "dateRange": "2026-05-15",
      "location": "IEEE Signal Processing Society",
      "isOnline": true,
      "tags": [
        "IEEE",
        "Signal Processing"
      ],
      "url": "https://signalprocessingsociety.org/events/ieee-jstsp-special-issue-wireless-foundation-models-ai-native-6g-and-beyond",
      "status": "upcoming",
      "stage": "Special Issue",
      "source": "IEEE SPS Special Issue Deadlines",
      "type": "journal",
      "description": "Submission deadline: 15-May-2026 Publication date: December-2026",
      "journal": "IEEE SPS Journals",
      "publisher": "IEEE",
      "cfpType": "Special Issue",
      "sourcePriority": "official-society",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "ieee-sps-special-issues",
        "parser": "ieee-sps-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.820Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-design-methodologies-and-applications-on-c",
      "title": "Design Methodologies and Applications on Compliant Mechanisms",
      "deadline": "2026-05-31T23:59:59",
      "dateRange": "2026-05-31",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333226/design-methodologies-and-applications-on-compliant-mechanisms",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Matteo Verotti, Guimin Chen, Just Herder, Jonathan Hopkins  •_Impact Factor 5.3_•_CiteScore 11.4_ Submission deadline:**31 May 2026**",
      "journal": "Mechanism and Machine Theory",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-ieee-comsoc-magazine-fluid-antennas-the-next-wave-of-mimo-ev",
      "title": "Fluid Antennas: The Next Wave of MIMO Evolution for 6G and Beyond",
      "deadline": "2026-05-31T23:59:59",
      "dateRange": "2026-05-31",
      "location": "IEEE ComSoc",
      "isOnline": true,
      "tags": [
        "IEEE",
        "ComSoc"
      ],
      "url": "https://www.comsoc.org/publications/magazines/ieee-communications-magazine/cfp/fluid-antennas-next-wave-mimo-evolution-6g",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "IEEE Communications Magazine CFP",
      "type": "journal",
      "description": "First Quarter 2027 31 May 2026",
      "journal": "IEEE Communications Magazine",
      "publisher": "IEEE",
      "cfpType": "Special Issue",
      "sourcePriority": "official-society",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "ieee-comsoc-magazine",
        "parser": "ieee-comsoc-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.820Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-journal-of-materiomics-2026-05-31",
      "title": "Journal of Materiomics",
      "deadline": "2026-05-31T23:59:59",
      "dateRange": "2026-05-31",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/journal/journal-of-materiomics",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "•_Impact Factor 9.6_•_CiteScore 16.8_ Submission deadline:**31 May 2026**",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-ieee-comsoc-magazine-quantum-enabled-ai-for-future-communica",
      "title": "Quantum-Enabled AI for Future Communications",
      "deadline": "2026-05-31T23:59:59",
      "dateRange": "2026-05-31",
      "location": "IEEE ComSoc",
      "isOnline": true,
      "tags": [
        "IEEE",
        "ComSoc"
      ],
      "url": "https://www.comsoc.org/publications/magazines/ieee-communications-magazine/cfp/quantum-enabled-ai-future-communications",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "IEEE Communications Magazine CFP",
      "type": "journal",
      "description": "Fourth Quarter 2026 31 May 2026",
      "journal": "IEEE Communications Magazine",
      "publisher": "IEEE",
      "cfpType": "Special Issue",
      "sourcePriority": "official-society",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "ieee-comsoc-magazine",
        "parser": "ieee-comsoc-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.820Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-artificial-intelligence-and-machine-learni",
      "title": "Artificial Intelligence and Machine Learning for Critical Infrastructure Protection and Homeland Security",
      "deadline": "2026-06-01T23:59:59",
      "dateRange": "2026-06-01",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333161/artificial-intelligence-and-machine-learning-for-critical-infrastructure-protection-and-homeland-security",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Selcuk Uluagac, Rebecca Montanari, Francesco Flammini, Carlo Mazzocca  •_Impact Factor 5.3_•_CiteScore 10.8_ Submission deadline:**01 June 2026**",
      "journal": "International Journal of Critical Infrastructure Protection",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-sustainable-digital-research-infrastructur",
      "title": "Sustainable Digital Research Infrastructures for the Edge-to-Cloud Continuum",
      "deadline": "2026-06-06T23:59:59",
      "dateRange": "2026-06-06",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333080/sustainable-digital-research-infrastructures-for-the-edge-to-cloud-continuum",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Raffaele R. Bruno, Kostas Chounos, Shashikant Ilager  •_Impact Factor 4.3_•_CiteScore 11.5_ Submission deadline:**06 June 2026**",
      "journal": "Computer Communications",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.820Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-call-for-papers-for-the-exercise-as-medici",
      "title": "Call for papers for The Exercise as Medicine in Chronic Disease 2026 Symposium",
      "deadline": "2026-06-08T23:59:59",
      "dateRange": "2026-06-08",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333183/call-for-papers-for-the-exercise-as-medicine-in-chronic-disease-2026-symposium",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": " •_Impact Factor 10.3_•_CiteScore 19.9_ Submission deadline:**08 June 2026**",
      "journal": "Journal of Sport and Health Science",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-ieee-sps-special-issues-ieee-jstsp-special-issue-on-autonomo",
      "title": "IEEE JSTSP Special Issue on Autonomous and Evolutive Optimization in Networked AI",
      "deadline": "2026-06-15T23:59:59",
      "dateRange": "2026-06-15",
      "location": "IEEE Signal Processing Society",
      "isOnline": true,
      "tags": [
        "IEEE",
        "Signal Processing"
      ],
      "url": "https://signalprocessingsociety.org/events/ieee-jstsp-special-issue-autonomous-and-evolutive-optimization-networked-ai",
      "status": "upcoming",
      "stage": "Special Issue",
      "source": "IEEE SPS Special Issue Deadlines",
      "type": "journal",
      "description": "Submission deadline: 15 June 2026 Publication date: January 2027",
      "journal": "IEEE SPS Journals",
      "publisher": "IEEE",
      "cfpType": "Special Issue",
      "sourcePriority": "official-society",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "ieee-sps-special-issues",
        "parser": "ieee-sps-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.820Z"
      }
    },
    {
      "id": "journal-ddl-2",
      "title": "Metal-Air Batteries: Advances in Materials, Design, and Practical Deployment",
      "deadline": "2026-06-20T23:59:59",
      "dateRange": "2026-06-20",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Metal-Air Batteries",
        "Materials"
      ],
      "url": "https://www.sciencedirect.com/browse/calls-for-papers",
      "status": "upcoming",
      "stage": "Special Issue",
      "source": "Elsevier Chinese CFP seed",
      "type": "journal",
      "description": "金属-空气电池材料进展、设计优化与实际应用专题。",
      "journal": "Future Batteries",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "unknown"
    },
    {
      "id": "journal-ddl-4",
      "title": "Advances in Sustainable Materials and Interfaces for Emerging Solar Cells",
      "deadline": "2026-06-30T23:59:59",
      "dateRange": "2026-06-30",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Solar Cells",
        "Materials",
        "ISSN 2950-4775"
      ],
      "url": "https://www.sciencedirect.com/browse/calls-for-papers",
      "status": "upcoming",
      "stage": "Special Issue",
      "source": "Elsevier Chinese CFP seed",
      "type": "journal",
      "description": "新兴太阳能电池可持续材料与界面进展专题。",
      "journal": "Sustainable Chemistry for Energy Materials",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "unknown"
    },
    {
      "id": "journal-ddl-7",
      "title": "AI-Driven Systematic Pathways to Green Transformation",
      "deadline": "2026-06-30T23:59:59",
      "dateRange": "2026-06-30",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "AI",
        "Green Transformation"
      ],
      "url": "https://www.sciencedirect.com/browse/calls-for-papers",
      "status": "upcoming",
      "stage": "Special Issue",
      "source": "Elsevier Chinese CFP seed",
      "type": "journal",
      "description": "人工智能驱动下的绿色转型系统路径专题。",
      "journal": "Environmental Impact Assessment Review",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "unknown"
    },
    {
      "id": "journal-ddl-9",
      "title": "Digital Twin and Scenario-Based Assessments for Sustainable Energy Technologies",
      "deadline": "2026-06-30T23:59:59",
      "dateRange": "2026-06-30",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Digital Twin",
        "Sustainable Energy"
      ],
      "url": "https://www.sciencedirect.com/browse/calls-for-papers",
      "status": "upcoming",
      "stage": "Special Issue",
      "source": "Elsevier Chinese CFP seed",
      "type": "journal",
      "description": "面向可持续能源技术的数字孪生与情景评估专题。",
      "journal": "Sustainable Energy Technologies and Assessments",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "unknown"
    },
    {
      "id": "journal-ddl-1",
      "title": "Future Batteries for Sustainability",
      "deadline": "2026-06-30T23:59:59",
      "dateRange": "2026-06-30",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Battery",
        "Sustainability",
        "ISSN 2950-2640"
      ],
      "url": "https://www.sciencedirect.com/browse/calls-for-papers",
      "status": "upcoming",
      "stage": "Special Issue",
      "source": "Elsevier Chinese CFP seed",
      "type": "journal",
      "description": "电池可持续发展专题。",
      "journal": "Future Batteries",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "unknown"
    },
    {
      "id": "journal-ddl-8",
      "title": "Heterogeneously Integrated Photonic Chips",
      "deadline": "2026-06-30T23:59:59",
      "dateRange": "2026-06-30",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Photonics",
        "Chip",
        "ISSN 2772-2724"
      ],
      "url": "https://www.sciencedirect.com/browse/calls-for-papers",
      "status": "upcoming",
      "stage": "Special Issue",
      "source": "Elsevier Chinese CFP seed",
      "type": "journal",
      "description": "异质集成光子芯片专题。",
      "journal": "Chip",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "unknown"
    },
    {
      "id": "journal-ddl-10",
      "title": "Photo(Electro)catalytic Approaches for Clean Energy and Environment",
      "deadline": "2026-06-30T23:59:59",
      "dateRange": "2026-06-30",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Catalysis",
        "Clean Energy"
      ],
      "url": "https://www.sciencedirect.com/browse/calls-for-papers",
      "status": "upcoming",
      "stage": "Special Issue",
      "source": "Elsevier Chinese CFP seed",
      "type": "journal",
      "description": "光/电催化技术在清洁能源与环境领域应用专题。",
      "journal": "Applied Catalysis O: Open",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "unknown"
    },
    {
      "id": "journal-ddl-5",
      "title": "Removal of Micropollutants",
      "deadline": "2026-06-30T23:59:59",
      "dateRange": "2026-06-30",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Water Treatment",
        "Micropollutants"
      ],
      "url": "https://www.sciencedirect.com/browse/calls-for-papers",
      "status": "upcoming",
      "stage": "VSI: ReMP",
      "source": "Elsevier Chinese CFP seed",
      "type": "journal",
      "description": "微污染物去除专题，可在两个期刊中选择投稿。",
      "journal": "Desalination / Desalination and Water Treatment",
      "publisher": "Elsevier",
      "cfpType": "VSI",
      "sourcePriority": "official-central",
      "deadlineTimezone": "unknown"
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-selected-and-extended-papers-of-the-6th-in",
      "title": "Selected and extended papers of the 6th International Workshop on Dynamic Logic: New Trends and Applications (DaLí 2025)",
      "deadline": "2026-06-30T23:59:59",
      "dateRange": "2026-06-30",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/332989/selected-and-extended-papers-of-the-6th-international-workshop-on-dynamic-logic-new-trends-and-applications-dali-2025",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Alexandre A. Madeira, Jing Wang  •_Impact Factor 1.2_•_CiteScore 2.8_ Submission deadline:**30 June 2026**",
      "journal": "Journal of Logical and Algebraic Methods in Programming",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.820Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-special-issue-24th-european-transport-cong",
      "title": "Special Issue: 24th European Transport Congress, Vienna 2026",
      "deadline": "2026-06-30T23:59:59",
      "dateRange": "2026-06-30",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333035/special-issue-24th-european-transport-congress-vienna-2026",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Bingyu Zhao, Guenter Emberger, Sebastian Belz, Takeru Shibayama, Jonas De Vos  Submission deadline:**30 June 2026**",
      "journal": "European Transport Studies",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.820Z"
      }
    },
    {
      "id": "journal-ddl-3",
      "title": "Sustainability and Circular Economy in Electric Energy Storage",
      "deadline": "2026-06-30T23:59:59",
      "dateRange": "2026-06-30",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Energy Storage",
        "Circular Economy"
      ],
      "url": "https://www.sciencedirect.com/browse/calls-for-papers",
      "status": "upcoming",
      "stage": "Special Issue",
      "source": "Elsevier Chinese CFP seed",
      "type": "journal",
      "description": "电能存储设备可持续发展及循环经济专题。",
      "journal": "Future Batteries",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "unknown"
    },
    {
      "id": "journal-ddl-6",
      "title": "Thermal and Fire Safety of Renewable Energy and Storage Systems",
      "deadline": "2026-06-30T23:59:59",
      "dateRange": "2026-06-30",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Thermal Safety",
        "Renewable Energy"
      ],
      "url": "https://www.sciencedirect.com/browse/calls-for-papers",
      "status": "upcoming",
      "stage": "Special Issue",
      "source": "Elsevier Chinese CFP seed",
      "type": "journal",
      "description": "可再生能源及储能系统热安全与防火研究专题。",
      "journal": "Applied Thermal Engineering",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "unknown"
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-review-of-precision-electroweak-measuremen",
      "title": "Review of Precision Electroweak Measurements, Theory and Phenomenology",
      "deadline": "2026-07-01T23:59:59",
      "dateRange": "2026-07-01",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/332974/review-of-precision-electroweak-measurements-theory-and-phenomenology",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Giulia Zanderighi  •_Impact Factor 29.5_•_CiteScore 49.9_ Submission deadline:**01 July 2026**",
      "journal": "Physics Reports",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.820Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-special-section-on-extended-reality-for-in",
      "title": "Special Section on eXtended Reality for Industrial and Occupational Supports (XRIOS)",
      "deadline": "2026-07-01T23:59:59",
      "dateRange": "2026-07-01",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/284319/special-section-on-extended-reality-for-industrial-and-occupational-supports-xrios",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Hyungil Kim, Isaac Cho, Myounghoon Jeon, Heejin Jeong, Kangsoo Kim  •_Impact Factor 2.8_•_CiteScore 6.1_ Submission deadline:**01 July 2026**",
      "journal": "Computers & Graphics",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-nuclear-theory-in-the-supercomputing-era-2",
      "title": "Nuclear Theory in the Supercomputing Era-2026",
      "deadline": "2026-07-15T23:59:59",
      "dateRange": "2026-07-15",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333144/nuclear-theory-in-the-supercomputing-era-2026",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Praveen Chandra Srivastava, James Vary, Shirokov M Andrey, Takaharu Otsuka, Venkata Krishna Brahmam Kota  Submission deadline:**15 July 2026**",
      "journal": "Journal of Subatomic Particles and Cosmology",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-regional-state-of-wildfires-reviews-of-the",
      "title": "Regional State of Wildfires: Reviews of the 2025-26 Fire Season",
      "deadline": "2026-07-15T23:59:59",
      "dateRange": "2026-07-15",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333076/regional-state-of-wildfires-reviews-of-the-2025-26-fire-season",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editor: David Bowman  Submission deadline:**15 July 2026**",
      "journal": "Journal of Pyrogeography",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.820Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-resilience-in-the-age-of-permacrisis-2026-",
      "title": "Resilience in the Age of Permacrisis",
      "deadline": "2026-07-15T23:59:59",
      "dateRange": "2026-07-15",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333219/resilience-in-the-age-of-permacrisis",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editor: Carol M Connell  •_Impact Factor 2.5_•_CiteScore 6.9_ Submission deadline:**15 July 2026**",
      "journal": "Organizational Dynamics",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-ieee-sps-special-issues-ieee-tmm-special-section-on-multimod",
      "title": "IEEE TMM Special Section on Multimodal Video Compression and Reconstruction: Theory, Algorithms, and Applications",
      "deadline": "2026-07-30T23:59:59",
      "dateRange": "2026-07-30",
      "location": "IEEE Signal Processing Society",
      "isOnline": true,
      "tags": [
        "IEEE",
        "Signal Processing"
      ],
      "url": "https://signalprocessingsociety.org/events/ieee-tmm-special-section-multimodal-video-compression-and-reconstruction-theory-algorithms",
      "status": "upcoming",
      "stage": "Special Issue",
      "source": "IEEE SPS Special Issue Deadlines",
      "type": "journal",
      "description": "Submission deadline: 30-July-2026 Publication date (tentative): Q1, 2027",
      "journal": "IEEE SPS Journals",
      "publisher": "IEEE",
      "cfpType": "Special Issue",
      "sourcePriority": "official-society",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "ieee-sps-special-issues",
        "parser": "ieee-sps-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.820Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-esg-and-sri-investment-challenges-2026-07-",
      "title": "ESG and SRI Investment Challenges",
      "deadline": "2026-07-31T23:59:59",
      "dateRange": "2026-07-31",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333134/esg-and-sri-investment-challenges",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Andrew Urquhart, Ailie Charteris  •_Impact Factor 5.6_•_CiteScore 7.3_ Submission deadline:**31 July 2026**",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-ieee-sps-special-issues-ieee-journal-on-selected-topics-in-s",
      "title": "IEEE Journal on Selected Topics in Signal Processing Signal Processing for Trustworthiness in 6G Wireless Ecosystems",
      "deadline": "2026-07-31T23:59:59",
      "dateRange": "2026-07-31",
      "location": "IEEE Signal Processing Society",
      "isOnline": true,
      "tags": [
        "IEEE",
        "Signal Processing"
      ],
      "url": "https://signalprocessingsociety.org/events/ieee-journal-selected-topics-signal-processing-signal-processing-trustworthiness-6g-wireless",
      "status": "upcoming",
      "stage": "Special Issue",
      "source": "IEEE SPS Special Issue Deadlines",
      "type": "journal",
      "description": "Submission deadline: 31 July 2026 Publication date: March 2027",
      "journal": "IEEE SPS Journals",
      "publisher": "IEEE",
      "cfpType": "Special Issue",
      "sourcePriority": "official-society",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "ieee-sps-special-issues",
        "parser": "ieee-sps-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.820Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-stress-and-alzheimer-s-disease-2026-07-31",
      "title": "Stress and Alzheimer's disease",
      "deadline": "2026-07-31T23:59:59",
      "dateRange": "2026-07-31",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/312225/stress-and-alzheimers-disease",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Pranav Vemula, Reshma Bhagat & Carla Yuede  •_Impact Factor 2.5_•_CiteScore 6.1_ Submission deadline:**31 July 2026**",
      "journal": "Journal of Neuroimmunology",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.820Z"
      }
    },
    {
      "id": "journal-ddl-ieee-sps-special-issues-ieee-tmm-special-section-on-generati",
      "title": "IEEE TMM Special Section on Generative AI for World Simulations and Communications",
      "deadline": "2026-08-01T23:59:59",
      "dateRange": "2026-08-01",
      "location": "IEEE Signal Processing Society",
      "isOnline": true,
      "tags": [
        "IEEE",
        "Signal Processing"
      ],
      "url": "https://signalprocessingsociety.org/events/ieee-tmm-special-section-generative-ai-world-simulations-and-communications",
      "status": "upcoming",
      "stage": "Special Issue",
      "source": "IEEE SPS Special Issue Deadlines",
      "type": "journal",
      "description": "Submission deadline: 01-August-2026 Publication date (tentative): Q1, 2027",
      "journal": "IEEE SPS Journals",
      "publisher": "IEEE",
      "cfpType": "Special Issue",
      "sourcePriority": "official-society",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "ieee-sps-special-issues",
        "parser": "ieee-sps-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.820Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-migration-within-the-current-global-transf",
      "title": "Migration within the Current Global Transformations: Aspirations, Constraints, and Unequal Choices",
      "deadline": "2026-08-01T23:59:59",
      "dateRange": "2026-08-01",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333204/migration-within-the-current-global-transformations-aspirations-constraints-and-unequal-choices",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Loukia-Maria Fratsea, PhD, Alin Croitoru, PhD  Submission deadline:**01 August 2026**",
      "journal": "Transnational Mobilities",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-technological-advances-and-considerations-",
      "title": "Technological Advances and Considerations for the Valorisation of Seafood Wastes",
      "deadline": "2026-08-01T23:59:59",
      "dateRange": "2026-08-01",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333293/technological-advances-and-considerations-for-the-valorisation-of-seafood-wastes",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Ehiaze Ehimen; Vignesh Kumaravel; Anna Masek; Tannaz Alizadeh Ashrafi  •_Impact Factor 7.9_•_CiteScore 7.3_ Submission deadline:**01 August 2026**",
      "journal": "Results in Engineering",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-instabilities-and-turbulent-mixing-2026-08",
      "title": "Instabilities and Turbulent Mixing",
      "deadline": "2026-08-08T23:59:59",
      "dateRange": "2026-08-08",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333014/instabilities-and-turbulent-mixing",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Ye Zhou, Daniel Israel, Eric Johnsen  •_Impact Factor 2.9_•_CiteScore 4.6_ Submission deadline:**08 August 2026**",
      "journal": "Physica D: Nonlinear Phenomena",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.820Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-catalysis-today-2026-08-31",
      "title": "Catalysis Today",
      "deadline": "2026-08-31T23:59:59",
      "dateRange": "2026-08-31",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/journal/catalysis-today",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "•_Impact Factor 5.3_•_CiteScore 11.2_ Submission deadline:**31 August 2026**",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-journal-of-co2-utilization-2026-08-31",
      "title": "Journal of CO2 Utilization",
      "deadline": "2026-08-31T23:59:59",
      "dateRange": "2026-08-31",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/journal/journal-of-co2-utilization",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "•_Impact Factor 8.4_•_CiteScore 15.2_ Submission deadline:**31 August 2026**",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-quaternary-seafloor-geology-investigating-",
      "title": "Quaternary seafloor geology: investigating environmental forcing factors and Earth ‘sphere interaction in the Mediterranean Sea",
      "deadline": "2026-08-31T23:59:59",
      "dateRange": "2026-08-31",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333041/quaternary-seafloor-geology-investigating-environmental-forcing-factors-and-earth-sphere-interaction-in-the-mediterranean-sea",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Daniele Spatola, Rossella Di Mento, Elena Scacchia and Fabiano Gamberi  •_Impact Factor 1.8_•_CiteScore 5.9_ Submission deadline:**31 August 2026**",
      "journal": "Quaternary International",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-call-for-paper-for-special-issue-on-intell",
      "title": "Call for Paper for Special Issue on Intelligent Operation and Maintenance for High-Speed Railways",
      "deadline": "2026-09-10T23:59:59",
      "dateRange": "2026-09-10",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333154/call-for-paper-for-special-issue-on-intelligent-operation-and-maintenance-for-high-speed-railways",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": " •_CiteScore 1.7_ Submission deadline:**10 September 2026**",
      "journal": "High-speed Railway",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-methodological-advances-in-the-measurement",
      "title": "Methodological Advances in the Measurement of Patient-Reported Outcomes",
      "deadline": "2026-09-14T23:59:59",
      "dateRange": "2026-09-14",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333074/methodological-advances-in-the-measurement-of-patient-reported-outcomes",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Felix Fischer & Xiaodan Tang  Submission deadline:**14 September 2026**",
      "journal": "Advances in Patient-Reported Outcomes",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-patient-reported-outcomes-where-it-counts-",
      "title": "Patient Reported Outcomes Where It Counts: Implementation and Impact in Clinical Care",
      "deadline": "2026-09-14T23:59:59",
      "dateRange": "2026-09-14",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333075/patient-reported-outcomes-where-it-counts-implementation-and-impact-in-clinical-care",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Judith F. Baumhauer & Jeffery R. Houck  Submission deadline:**14 September 2026**",
      "journal": "Advances in Patient-Reported Outcomes",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-60-years-of-fragrance-safety-science-and-i",
      "title": "60 Years of Fragrance Safety Science and Innovation at RIFM",
      "deadline": "2026-09-30T23:59:59",
      "dateRange": "2026-09-30",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333244/60-years-of-fragrance-safety-science-and-innovation-at-rifm",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Pamela Lein and Kamil Jurowski  •_Impact Factor 3.5_•_CiteScore 9.9_ Submission deadline:**30 September 2026**",
      "journal": "Food and Chemical Toxicology",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-innovative-nature-based-solutions-2026-09-",
      "title": "Innovative nature-based solutions",
      "deadline": "2026-09-30T23:59:59",
      "dateRange": "2026-09-30",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333019/innovative-nature-based-solutions",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Professor Magdalena Gajewska, Assistant Professor Alexandros Stefanakis, Associate Professor Katarzyna Kołecka and Associate professor Diederik Rousseau  •_Impact Factor 4.1_•_CiteScore 8.6_ Submission dea",
      "journal": "Ecological Engineering",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.820Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-intelligent-reservoir-characterisation-for",
      "title": "Intelligent Reservoir Characterisation for Complex Carbonates",
      "deadline": "2026-09-30T23:59:59",
      "dateRange": "2026-09-30",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333187/intelligent-reservoir-characterisation-for-complex-carbonates",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": " •_CiteScore 3.1_ Submission deadline:**30 September 2026**",
      "journal": "Journal of Natural Gas Geoscience",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-proceedings-of-the-recovery-of-biological-",
      "title": "Proceedings of the Recovery of Biological Products XXI Conference",
      "deadline": "2026-09-30T23:59:59",
      "dateRange": "2026-09-30",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333118/proceedings-of-the-recovery-of-biological-products-xxi-conference",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Cristiana Boi, Todd Przybycien, Hanne Bak, Sanchayita Ghose  •_Impact Factor 9.0_•_CiteScore 15.1_ Submission deadline:**30 September 2026**",
      "journal": "Separation and Purification Technology",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-7th-international-conference-on-applied-su",
      "title": "7th International Conference on Applied Surface Science (VSI: ICASS 2026)",
      "deadline": "2026-10-01T23:59:59",
      "dateRange": "2026-10-01",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333285/7th-international-conference-on-applied-surface-science-vsi-icass-2026",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Prof. Dr. Henrik Rudolph, Prof. Dr. WeiXin Huang, Prof. Dr. Andrew Teplyakov, Prof. Dr. Byungchan Han, Prof. Dr. Maria Dinescu  •_Impact Factor 6.9_•_CiteScore 13.4_ Submission deadline:**01 October 2026**",
      "journal": "Applied Surface Science",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-b-vitamins-and-one-carbon-metabolism-2026-",
      "title": "B-Vitamins and One-Carbon Metabolism",
      "deadline": "2026-10-01T23:59:59",
      "dateRange": "2026-10-01",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333208/b-vitamins-and-one-carbon-metabolism",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Julia L. Finkelstein & Jean-Louis Guéant  •_Impact Factor 3.8_•_CiteScore 6.9_ Submission deadline:**01 October 2026**",
      "journal": "The Journal of Nutrition",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-current-perspectives-and-best-practices-fo",
      "title": "Current perspectives and best practices for quantifying biomechanics with wearable inertial sensors",
      "deadline": "2026-10-01T23:59:59",
      "dateRange": "2026-10-01",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333138/current-perspectives-and-best-practices-for-quantifying-biomechanics-with-wearable-inertial-sensors",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Dr. Jocelyn Hafer, Dr. Stephen Cain  •_Impact Factor 2.4_•_CiteScore 4.9_ Submission deadline:**01 October 2026**",
      "journal": "Journal of Biomechanics",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-nuclear-science-user-facilities-20-years-o",
      "title": "Nuclear Science User Facilities: 20 Years of Enabling Innovation in Nuclear Materials",
      "deadline": "2026-10-01T23:59:59",
      "dateRange": "2026-10-01",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333032/nuclear-science-user-facilities-20-years-of-enabling-innovation-in-nuclear-materials",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Mukesh Bachhav, Maria Okuniewski, Stephen Taller  •_Impact Factor 3.2_•_CiteScore 6.2_ Submission deadline:**01 October 2026**",
      "journal": "Journal of Nuclear Materials",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.820Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-recent-advancements-in-lightning-physics-m",
      "title": "Recent Advancements in Lightning Physics, Modelling, Protection, and Safety",
      "deadline": "2026-10-01T23:59:59",
      "dateRange": "2026-10-01",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333089/recent-advancements-in-lightning-physics-modelling-protection-and-safety",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Pantelis Mikropoulos; Thomas Tsovilis; Alexandre Piantini  •_Impact Factor 4.2_•_CiteScore 8.2_ Submission deadline:**01 October 2026**",
      "journal": "Electric Power Systems Research",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-advanced-materials-for-next-generation-ene",
      "title": "Advanced Materials for Next-Generation Energy Storage and Conversion Technologies",
      "deadline": "2026-10-11T23:59:59",
      "dateRange": "2026-10-11",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333023/advanced-materials-for-next-generation-energy-storage-and-conversion-technologies",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Yu Zhang; Zhiheng Lyu; Ming Zhao  •_Impact Factor 4.6_•_CiteScore 7.5_ Submission deadline:**11 October 2026**",
      "journal": "Materials Science and Engineering: B",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.820Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-agentic-ai-and-advanced-analytics-for-resi",
      "title": "Agentic AI and Advanced Analytics for Resilient and Sustainable Power Systems",
      "deadline": "2026-10-15T23:59:59",
      "dateRange": "2026-10-15",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333042/agentic-ai-and-advanced-analytics-for-resilient-and-sustainable-power-systems",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Krishna Kumar, Hady Habib Fayek, Sivakumar Nadarajan, Nitin Singh  •_Impact Factor 7.0_•_CiteScore 17.3_ Submission deadline:**15 October 2026**",
      "journal": "Sustainable Energy Technologies and Assessments",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.820Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-special-issue-on-highlights-from-eurova-20",
      "title": "Special Issue on Highlights from EuroVA 2026",
      "deadline": "2026-10-15T23:59:59",
      "dateRange": "2026-10-15",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333225/special-issue-on-highlights-from-eurova-2026",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Daniel Archambault; Fernando Paulovich  •_Impact Factor 2.8_•_CiteScore 6.1_ Submission deadline:**15 October 2026**",
      "journal": "Computers & Graphics",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-urban-ecological-space-for-climate-adaptat",
      "title": "Urban Ecological Space for Climate Adaptation and Mitigation",
      "deadline": "2026-10-15T23:59:59",
      "dateRange": "2026-10-15",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/332983/urban-ecological-space-for-climate-adaptation-and-mitigation",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Carla Sofia Santos Ferreira, Cong Cong, Tomás de Figueiredo, Rares Halbac-Cotoara-Zamfir, Zahra Kalantari  •_Impact Factor 8.0_•_CiteScore 14.7_ Submission deadline:**15 October 2026**",
      "journal": "Geography and Sustainability",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.820Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-redox-and-metabolism-in-cancer-drivers-of-",
      "title": "Redox and Metabolism in Cancer: Drivers of Adaptation and Therapeutic Response",
      "deadline": "2026-10-16T23:59:59",
      "dateRange": "2026-10-16",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333018/redox-and-metabolism-in-cancer-drivers-of-adaptation-and-therapeutic-response",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Giuseppe Filomeni and Chiara Pecorari  •_Impact Factor 11.9_•_CiteScore 19.5_ Submission deadline:**16 October 2026**",
      "journal": "Redox Biology",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.820Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-advanced-materials-for-next-generation-rec",
      "title": "Advanced Materials for Next-Generation Rechargeable Batteries and Electrocatalysis",
      "deadline": "2026-10-31T23:59:59",
      "dateRange": "2026-10-31",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333337/advanced-materials-for-next-generation-rechargeable-batteries-and-electrocatalysis",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Yaping Chen; Xiaobo Zheng; Mengwei Yuan; Song Chen; Liu Lin  •_Impact Factor 4.6_•_CiteScore 7.5_ Submission deadline:**31 October 2026**",
      "journal": "Materials Science and Engineering: B",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.818Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-advances-in-artificial-intelligence-for-en",
      "title": "Advances in Artificial Intelligence for Energy Systems and Subsurface Engineering",
      "deadline": "2026-10-31T23:59:59",
      "dateRange": "2026-10-31",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333214/advances-in-artificial-intelligence-for-energy-systems-and-subsurface-engineering",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": " •_Impact Factor 3.6_•_CiteScore 6.8_ Submission deadline:**31 October 2026**",
      "journal": "Energy Geoscience",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-bayesian-workflow-for-geotechnical-enginee",
      "title": "Bayesian workflow for geotechnical engineering data analysis",
      "deadline": "2026-10-31T23:59:59",
      "dateRange": "2026-10-31",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/332985/bayesian-workflow-for-geotechnical-engineering-data-analysis",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Nezam Bozorgzadeh, Yu Feng  •_Impact Factor 6.2_•_CiteScore 9.0_ Submission deadline:**31 October 2026**",
      "journal": "Computers and Geotechnics",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.820Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-complementary-therapies-and-approaches-for",
      "title": "Complementary Therapies and Approaches for Health Promotion and Treatment",
      "deadline": "2026-10-31T23:59:59",
      "dateRange": "2026-10-31",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333176/complementary-therapies-and-approaches-for-health-promotion-and-treatment",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Prof Liye Zou, Dr Yanjie Zhang, Dr Lin Luo, Dr Qian Yu, Dr Yanxia Chen, Dr Yuke Teng, Dr Xinxing Li  •_Impact Factor 3.5_•_CiteScore 7.7_ Submission deadline:**31 October 2026**",
      "journal": "Complementary Therapies in Medicine",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-heavy-metal-contamination-in-soils-and-veg",
      "title": "Heavy Metal Contamination in Soils and Vegetables: Ecological and Health Risks assessment, and Sustainable Mitigation",
      "deadline": "2026-10-31T23:59:59",
      "dateRange": "2026-10-31",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333180/heavy-metal-contamination-in-soils-and-vegetables-ecological-and-health-risks-assessment-and-sustainable-mitigation",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Vinod Kumar, Renato Somma and Maja Radziemska  •_Impact Factor 4.6_•_CiteScore 7.2_ Submission deadline:**31 October 2026**",
      "journal": "Journal of Food Composition and Analysis",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-income-and-wealth-distribution-labor-marke",
      "title": "Income and Wealth Distribution, Labor Market, and Subjective Well-being in China – in Honor of Professor John Knight",
      "deadline": "2026-10-31T23:59:59",
      "dateRange": "2026-10-31",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333216/income-and-wealth-distribution-labor-market-and-subjective-well-being-in-china-in-honor-of-professor-john-knight",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Sai Ding, Ximing Yue, Lina Song, Shi Li  •_Impact Factor 5.5_•_CiteScore 8.2_ Submission deadline:**31 October 2026**",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-recent-advances-in-surface-enhanced-raman-",
      "title": "Recent Advances in Surface-enhanced Raman Spectroscopy (SERS) in Diagnostics and Nanomedicine",
      "deadline": "2026-10-31T23:59:59",
      "dateRange": "2026-10-31",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/332984/recent-advances-in-surface-enhanced-raman-spectroscopy-sers-in-diagnostics-and-nanomedicine",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Kaustabh Kumar Maiti; U. S Dinish  •_Impact Factor 3.7_•_CiteScore 7.2_ Submission deadline:**31 October 2026**",
      "journal": "Journal of Photochemistry and Photobiology B: Biology",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.820Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-the-future-of-bioelectronics-for-organoid-",
      "title": "The Future of Bioelectronics for Organoid Engineering and Regenerative Medicine",
      "deadline": "2026-10-31T23:59:59",
      "dateRange": "2026-10-31",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333155/the-future-of-bioelectronics-for-organoid-engineering-and-regenerative-medicine",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Luke P. Lee; Xiao Yang; Deok-Ho Kim; Sei Kwang Hahn; Man Bock Gu  •_Impact Factor 10.5_•_CiteScore 20.9_ Submission deadline:**31 October 2026**",
      "journal": "Biosensors and Bioelectronics",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-tracking-the-quaternary-vertebrate-footpri",
      "title": "Tracking the Quaternary: Vertebrate Footprints, Paleoenvironments and Processes",
      "deadline": "2026-10-31T23:59:59",
      "dateRange": "2026-10-31",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333215/tracking-the-quaternary-vertebrate-footprints-paleoenvironments-and-processes",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Ignacio Díaz Martínez, Jérémy Duveau and Kevin G. Hatala  •_Impact Factor 2.2_•_CiteScore 3.8_ Submission deadline:**31 October 2026**",
      "journal": "Quaternary Science Advances",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-30-years-of-apmr-2026-11-01",
      "title": "30 Years of APMR",
      "deadline": "2026-11-01T23:59:59",
      "dateRange": "2026-11-01",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333136/30-years-of-apmr",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "This Special Issue welcomes high-quality review papers that advance management knowledge in regional or global contexts.  •_Impact Factor 5.6_•_CiteScore 11.4_ Submission deadline:**01 November 2026**",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-applied-studies-in-innovative-learning-and",
      "title": "Applied Studies in Innovative Learning and Teaching",
      "deadline": "2026-11-01T23:59:59",
      "dateRange": "2026-11-01",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333266/applied-studies-in-innovative-learning-and-teaching",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Gert Rijlaarsdam PhD., Jingxian Wang, PhD., Paula López, PhD., Per Henning Uppstad, PhD., Valeri Murnikov, PhD.  Submission deadline:**01 November 2026**",
      "journal": "Applied Studies in Innovative Learning and Teaching",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-jnnfm-at-50-2026-11-01",
      "title": "JNNFM at 50",
      "deadline": "2026-11-01T23:59:59",
      "dateRange": "2026-11-01",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333289/jnnfm-at-50",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Rob Poole, Jonathan Rothstein  •_Impact Factor 2.8_•_CiteScore 5.3_ Submission deadline:**01 November 2026**",
      "journal": "Journal of Non-Newtonian Fluid Mechanics",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-microbiology-and-climate-change-2026-11-01",
      "title": "Microbiology and climate change",
      "deadline": "2026-11-01T23:59:59",
      "dateRange": "2026-11-01",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333191/microbiology-and-climate-change",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Celia Garcia and Jason A Tetro  •_Impact Factor 5.8_•_CiteScore 10.0_ Submission deadline:**01 November 2026**",
      "journal": "Current Research in Microbial Sciences",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-steel-and-steel-concrete-composite-structu",
      "title": "Steel and steel-concrete composite structures in extreme cold-region environments",
      "deadline": "2026-11-07T23:59:59",
      "dateRange": "2026-11-07",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333209/steel-and-steel-concrete-composite-structures-in-extreme-cold-region-environments",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Jia-Bao Yan, Xudong Qian, Amin Heidarpour  •_Impact Factor 4.3_•_CiteScore 7.8_ Submission deadline:**07 November 2026**",
      "journal": "Journal of Constructional Steel Research",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-a-perspective-on-biomarkers-of-aging-from-",
      "title": "A perspective on biomarkers of aging: from molecules to functional and cognitive capacity",
      "deadline": "2026-11-30T23:59:59",
      "dateRange": "2026-11-30",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333162/a-perspective-on-biomarkers-of-aging-from-molecules-to-functional-and-cognitive-capacity",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editor: Dr. Sara Gloria Aguilar-Navarro  •_Impact Factor 1.4_•_CiteScore 3.0_ Submission deadline:**30 November 2026**",
      "journal": "Revista de Investigación Clínica",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-bridging-data-driven-innovation-and-sustai",
      "title": "Bridging Data-Driven Innovation and Sustainable Practices",
      "deadline": "2026-11-30T23:59:59",
      "dateRange": "2026-11-30",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333290/bridging-data-driven-innovation-and-sustainable-practices",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Taha Arbaoui, Khaled Hadj-Hamou, Malek Masmoudi  •_Impact Factor 6.5_•_CiteScore 13.2_ Submission deadline:**30 November 2026**",
      "journal": "Computers & Industrial Engineering",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-enabling-sustainable-chemical-processes-th",
      "title": "Enabling Sustainable Chemical Processes through Green Solvents",
      "deadline": "2026-11-30T23:59:59",
      "dateRange": "2026-11-30",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333069/enabling-sustainable-chemical-processes-through-green-solvents",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Vesna Najdanovic, Stephen Worrall, Ana Vital Morgado Nunes  •_CiteScore 17.1_ Submission deadline:**30 November 2026**",
      "journal": "Current Research in Green and Sustainable Chemistry",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-illuminating-the-future-advances-in-photob",
      "title": "Illuminating the Future: Advances in Photobiotechnology for a Sustainable Bioeconomy",
      "deadline": "2026-11-30T23:59:59",
      "dateRange": "2026-11-30",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/332986/illuminating-the-future-advances-in-photobiotechnology-for-a-sustainable-bioeconomy",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Antonio Luiz B. Pinheiro; Janusz M. Dabrowski; Pedro Jorge Louro Crugeira  •_Impact Factor 3.7_•_CiteScore 7.2_ Submission deadline:**30 November 2026**",
      "journal": "Journal of Photochemistry and Photobiology B: Biology",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.820Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-imaging-for-patient-selection-in-acute-isc",
      "title": "Imaging for Patient Selection in Acute Ischemic Stroke",
      "deadline": "2026-11-30T23:59:59",
      "dateRange": "2026-11-30",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333193/imaging-for-patient-selection-in-acute-ischemic-stroke",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Yunyun Xiong and Marc Fisher  Submission deadline:**30 November 2026**",
      "journal": "NeuroImage Stroke",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-jlamp-reacts-2025-2026-11-30",
      "title": "JLAMP_ReacTS 2025",
      "deadline": "2026-11-30T23:59:59",
      "dateRange": "2026-11-30",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333323/jlamp_reacts-2025",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: José Proença, Umberto Rivieccio  •_Impact Factor 1.2_•_CiteScore 2.8_ Submission deadline:**30 November 2026**",
      "journal": "Journal of Logical and Algebraic Methods in Programming",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-materials-technologies-for-controlling-wet",
      "title": "Materials Technologies for Controlling Wetting, Icing and Liquid–Surface Interactions",
      "deadline": "2026-11-30T23:59:59",
      "dateRange": "2026-11-30",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333288/materials-technologies-for-controlling-wetting-icing-and-liquid-surface-interactions",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Dr. Filomena Piscitelli, Dr. Bartlomiej Przybyszewski, Dr. Julio Mora Nogués, Dr. Mariachiara Gallia  •_Impact Factor 8.7_•_CiteScore 15.3_ Submission deadline:**30 November 2026**",
      "journal": "Applied Surface Science Advances",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-special-issue-on-embodied-medical-robotics",
      "title": "Special Issue on Embodied Medical Robotics: From Mechanical Intelligence to Multimodal Cognitive Autonomy",
      "deadline": "2026-11-30T23:59:59",
      "dateRange": "2026-11-30",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333300/special-issue-on-embodied-medical-robotics-from-mechanical-intelligence-to-multimodal-cognitive-autonomy",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": " •_Impact Factor 5.4_•_CiteScore 7.3_ Submission deadline:**30 November 2026**",
      "journal": "Biomimetic Intelligence and Robotics",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-special-issue-on-reconfigurable-transition",
      "title": "Special Issue on Reconfigurable Transition Systems: Semantics, Logics and Applications",
      "deadline": "2026-11-30T23:59:59",
      "dateRange": "2026-11-30",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333325/special-issue-on-reconfigurable-transition-systems-semantics-logics-and-applications",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": " •_Impact Factor 1.2_•_CiteScore 2.8_ Submission deadline:**30 November 2026**",
      "journal": "Journal of Logical and Algebraic Methods in Programming",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.818Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-ai-in-acute-stroke-imaging-pearls-and-pitf",
      "title": "AI in Acute Stroke Imaging: Pearls and Pitfalls",
      "deadline": "2026-12-01T23:59:59",
      "dateRange": "2026-12-01",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333196/ai-in-acute-stroke-imaging-pearls-and-pitfalls",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Smriti Agarwal, Kevin N. Sheth, George WJ Harston, Lisa Herzog and Ondrej Volny  Submission deadline:**01 December 2026**",
      "journal": "NeuroImage Stroke",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-integration-of-european-reference-networks",
      "title": "Integration of European Reference Networks into national healthcare systems",
      "deadline": "2026-12-01T23:59:59",
      "dateRange": "2026-12-01",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333201/integration-of-european-reference-networks-into-national-healthcare-systems",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Birute Tumiene, Ursula Unterberger and Luz Yadira Bravo Gallego  •_Impact Factor 1.7_•_CiteScore 3.7_ Submission deadline:**01 December 2026**",
      "journal": "European Journal of Medical Genetics",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-organized-films-and-functional-materials-a",
      "title": "Organized Films and Functional Materials: Advances in Structure, Interfaces, and Applications",
      "deadline": "2026-12-01T23:59:59",
      "dateRange": "2026-12-01",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333327/organized-films-and-functional-materials-advances-in-structure-interfaces-and-applications",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Simona Bettini  •_Impact Factor 6.3_•_CiteScore 8.5_ Submission deadline:**01 December 2026**",
      "journal": "Surfaces and Interfaces",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.818Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-strategies-for-enhancing-the-durability-of",
      "title": "Strategies for Enhancing the Durability of Low-Carbon Concrete and the Corrosion Prevention of Embedded Steel Reinforcement",
      "deadline": "2026-12-01T23:59:59",
      "dateRange": "2026-12-01",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333109/strategies-for-enhancing-the-durability-of-low-carbon-concrete-and-the-corrosion-prevention-of-embedded-steel-reinforcement",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Haoxin Li, Yuyang Pang, Jiuwen Bao, Weina Meng  •_Impact Factor 8.0_•_CiteScore 13.9_ Submission deadline:**01 December 2026**",
      "journal": "Construction and Building Materials",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-global-air-quality-advances-in-monitoring-",
      "title": "Global Air Quality: Advances in Monitoring, Forecasting, and Applications",
      "deadline": "2026-12-10T23:59:59",
      "dateRange": "2026-12-10",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333085/global-air-quality-advances-in-monitoring-forecasting-and-applications",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Shupeng Zhu, Jing Wei, Sibo Chen  Submission deadline:**10 December 2026**",
      "journal": "Climate Physics and Atmospheric Science: Scientific Insights and Societal Challenges",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-nanomaterials-and-emerging-contaminants-in",
      "title": "Nanomaterials and emerging contaminants in plant systems: multi-omics and plant-microbiome interactions",
      "deadline": "2026-12-11T23:59:59",
      "dateRange": "2026-12-11",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333153/nanomaterials-and-emerging-contaminants-in-plant-systems-multi-omics-and-plant-microbiome-interactions",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Dr. Roberto Berni, Dr. Gea Guerriero, Prof. Giancarlo Renella, Prof. Sergio Esposito  •_Impact Factor 7.7_•_CiteScore 6.6_ Submission deadline:**11 December 2026**",
      "journal": "Plant Nano Biology",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-intelligent-transport-and-sustainable-mobi",
      "title": "Intelligent Transport and Sustainable Mobility in Urban Systems: Models, Data, Management and Policy Insights",
      "deadline": "2026-12-17T23:59:59",
      "dateRange": "2026-12-17",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333031/intelligent-transport-and-sustainable-mobility-in-urban-systems-models-data-management-and-policy-insights",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: José Luis Moura, Luigi dell’Olio, António Lobo, Sérgio Pedro Duarte  •_Impact Factor 4.4_•_CiteScore 8.7_ Submission deadline:**17 December 2026**",
      "journal": "Research in Transportation Business & Management",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.820Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-special-issue-on-panel-data-analysis-2026-",
      "title": "Special Issue on Panel Data Analysis",
      "deadline": "2026-12-20T23:59:59",
      "dateRange": "2026-12-20",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333079/special-issue-on-panel-data-analysis",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Badi Baltagi, Kazuhiko Hayakawa, Degui Li, Vasilis Sarafidis, Erricos Kontoghiorghes  •_Impact Factor 2.5_•_CiteScore 4.0_ Submission deadline:**20 December 2026**",
      "journal": "Econometrics and Statistics",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-third-special-issue-on-mixture-models-2026",
      "title": "Third Special Issue on Mixture Models",
      "deadline": "2026-12-20T23:59:59",
      "dateRange": "2026-12-20",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/332654/third-special-issue-on-mixture-models",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Matthieu Marbac, Wan-Lun Wang, Weixin Yao  •_Impact Factor 2.5_•_CiteScore 4.0_ Submission deadline:**20 December 2026**",
      "journal": "Econometrics and Statistics",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-advances-in-combustion-science-and-technol",
      "title": "Advances in Combustion Science and Technology: Innovations and Applications",
      "deadline": "2026-12-30T23:59:59",
      "dateRange": "2026-12-30",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333108/advances-in-combustion-science-and-technology-innovations-and-applications",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Jingyu Ran, Selim Ceylan, Lele Feng, Daya Pandey  •_CiteScore 2.2_ Submission deadline:**30 December 2026**",
      "journal": "DeCarbon",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-abrasive-and-non-abrasive-post-processing-",
      "title": "Abrasive and Non-Abrasive Post-Processing Technologies for Additively Manufactured Surfaces",
      "deadline": "2026-12-31T23:59:59",
      "dateRange": "2026-12-31",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333242/abrasive-and-non-abrasive-post-processing-technologies-for-additively-manufactured-surfaces",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editor: Mamilla Ravi Sankar  Submission deadline:**31 December 2026**",
      "journal": "Tribology and Interfaces",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-advanced-mri-for-stroke-outcome-prediction",
      "title": "Advanced MRI for Stroke Outcome Prediction and Image-Aided Treatment",
      "deadline": "2026-12-31T23:59:59",
      "dateRange": "2026-12-31",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333120/advanced-mri-for-stroke-outcome-prediction-and-image-aided-treatment",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Phillip Zhe Sun, Esra Zihni, Vivek Prabhakaran, Risto A. Kauppinen and Fahmeed Hyder  Submission deadline:**31 December 2026**",
      "journal": "NeuroImage Stroke",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-advances-in-robotic-forming-2026-12-31",
      "title": "Advances in Robotic Forming",
      "deadline": "2026-12-31T23:59:59",
      "dateRange": "2026-12-31",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333224/advances-in-robotic-forming",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Junying Min, Jinjin Ha, Glenn Daehn, Xunzhong Guo  •_Impact Factor 6.0_•_CiteScore 11.2_ Submission deadline:**31 December 2026**",
      "journal": "Advances in Industrial and Manufacturing Engineering",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-bioactive-compounds-and-therapeutic-potent",
      "title": "Bioactive Compounds and Therapeutic Potentials of Curcuma, Medicinal Plants, Medicinal Mushrooms, and Natural Food Colorants",
      "deadline": "2026-12-31T23:59:59",
      "dateRange": "2026-12-31",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333156/bioactive-compounds-and-therapeutic-potentials-of-curcuma-medicinal-plants-medicinal-mushrooms-and-natural-food-colorants",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editor: Dr. Lam T Duong  Submission deadline:**31 December 2026**",
      "journal": "Innovations in Industrial Crops and Processing",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-brain-health-frailty-and-resilience-after-",
      "title": "Brain Health, Frailty and Resilience After Stroke",
      "deadline": "2026-12-31T23:59:59",
      "dateRange": "2026-12-31",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333194/brain-health-frailty-and-resilience-after-stroke",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Sook-Lei Liew, Lara Boyd, Amy Brodtmann and Brenton Hordacre  Submission deadline:**31 December 2026**",
      "journal": "NeuroImage Stroke",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-electrochemistry-communications-2026-12-31",
      "title": "Electrochemistry Communications",
      "deadline": "2026-12-31T23:59:59",
      "dateRange": "2026-12-31",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/journal/electrochemistry-communications",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "•_Impact Factor 4.2_•_CiteScore 7.9_ Submission deadline:**31 December 2026**",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.820Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-estiv-2026-ensuring-safety-advancing-scien",
      "title": "ESTIV 2026: Ensuring Safety, Advancing Science - Bridging to the Future with NAMs",
      "deadline": "2026-12-31T23:59:59",
      "dateRange": "2026-12-31",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333171/estiv-2026-ensuring-safety-advancing-science-bridging-to-the-future-with-nams",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Helena Kandarova, Luiz Ladeira and Mohamed Fathi Abdallah  •_Impact Factor 2.7_•_CiteScore 5.5_ Submission deadline:**31 December 2026**",
      "journal": "Toxicology in Vitro",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-from-clay-fundamentals-to-hybrid-materials",
      "title": "From Clay Fundamentals to Hybrid Materials and Polymer Nanocomposites: A Tribute to Y. Fukushima",
      "deadline": "2026-12-31T23:59:59",
      "dateRange": "2026-12-31",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333307/from-clay-fundamentals-to-hybrid-materials-and-polymer-nanocomposites-a-tribute-to-y-fukushima",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Makoto Ogawa, Eduardo Ruiz-Hitzky, Takeo Ebina and Tetsuji Itoh  •_Impact Factor 5.8_•_CiteScore 10.3_ Submission deadline:**31 December 2026**",
      "journal": "Applied Clay Science",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-16",
      "title": "IEEE Access / IEEE Author Portal Submission Route",
      "deadline": "2026-12-31T23:59:59",
      "dateRange": "2026-12-31",
      "location": "IEEE Author Portal",
      "isOnline": true,
      "tags": [
        "IEEE",
        "Author Portal"
      ],
      "url": "https://ieee.atyponrex.com/",
      "status": "ongoing",
      "stage": "Submission platform",
      "source": "IEEE official seed",
      "type": "journal",
      "description": "IEEE 投稿系统入口，后续用于保存 Special Section / Article Type 选择说明。",
      "journal": "IEEE Journals",
      "publisher": "IEEE",
      "cfpType": "Submission Platform",
      "sourcePriority": "official-system",
      "deadlineTimezone": "unknown"
    },
    {
      "id": "journal-ddl-14",
      "title": "IEEE Access Special Sections",
      "deadline": "2026-12-31T23:59:59",
      "dateRange": "2026-12-31",
      "location": "IEEE Access",
      "isOnline": true,
      "tags": [
        "IEEE Access",
        "Special Section"
      ],
      "url": "https://ieeeaccess.ieee.org/sections/special-sections/",
      "status": "ongoing",
      "stage": "Special Section",
      "source": "IEEE official seed",
      "type": "journal",
      "description": "IEEE Access Special Sections 入口，注意术语通常为 Special Section。",
      "journal": "IEEE Access",
      "publisher": "IEEE",
      "cfpType": "Special Section",
      "sourcePriority": "official-journal",
      "deadlineTimezone": "unknown"
    },
    {
      "id": "journal-ddl-11",
      "title": "IEEE Communications Magazine Call for Papers",
      "deadline": "2026-12-31T23:59:59",
      "dateRange": "2026-12-31",
      "location": "IEEE ComSoc",
      "isOnline": true,
      "tags": [
        "IEEE",
        "Communications",
        "Special Issue"
      ],
      "url": "https://www.comsoc.org/publications/magazines/ieee-communications-magazine/cfp",
      "status": "ongoing",
      "stage": "CFP board",
      "source": "IEEE official seed",
      "type": "journal",
      "description": "IEEE ComSoc Magazine CFP 入口，实际 DDL 需按专题详情页继续拆分。",
      "journal": "IEEE Communications Magazine",
      "publisher": "IEEE",
      "cfpType": "Special Issue / Series",
      "sourcePriority": "official-society",
      "deadlineTimezone": "unknown"
    },
    {
      "id": "journal-ddl-12",
      "title": "IEEE JSAC Call for Papers",
      "deadline": "2026-12-31T23:59:59",
      "dateRange": "2026-12-31",
      "location": "IEEE ComSoc",
      "isOnline": true,
      "tags": [
        "IEEE",
        "JSAC",
        "Selected Areas"
      ],
      "url": "https://www.comsoc.org/publications/journals/ieee-jsac/cfp",
      "status": "ongoing",
      "stage": "CFP board",
      "source": "IEEE official seed",
      "type": "journal",
      "description": "通信领域重点期刊专题入口，用作 crawler seed。",
      "journal": "IEEE Journal on Selected Areas in Communications",
      "publisher": "IEEE",
      "cfpType": "Special Issue",
      "sourcePriority": "official-society",
      "deadlineTimezone": "unknown"
    },
    {
      "id": "journal-ddl-13",
      "title": "IEEE Signal Processing Society Special Issue Deadlines",
      "deadline": "2026-12-31T23:59:59",
      "dateRange": "2026-12-31",
      "location": "IEEE SPS",
      "isOnline": true,
      "tags": [
        "IEEE",
        "Signal Processing"
      ],
      "url": "https://signalprocessingsociety.org/publications-resources/special-issue-deadlines",
      "status": "ongoing",
      "stage": "Deadline board",
      "source": "IEEE official seed",
      "type": "journal",
      "description": "SPS 特刊截止日列表入口，覆盖信号、语音、图像、多媒体方向。",
      "journal": "IEEE SPS Journals",
      "publisher": "IEEE",
      "cfpType": "Special Issue Deadlines",
      "sourcePriority": "official-society",
      "deadlineTimezone": "unknown"
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-interkingdom-microbial-interactions-in-the",
      "title": "Interkingdom microbial interactions in the gastrointestinal tract",
      "deadline": "2026-12-31T23:59:59",
      "dateRange": "2026-12-31",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333291/interkingdom-microbial-interactions-in-the-gastrointestinal-tract",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Greg Young and Andy Nelson  Submission deadline:**31 December 2026**",
      "journal": "Gut Microbiology",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-international-conference-on-bio-sensing-te",
      "title": "International Conference on Bio-Sensing Technology 2026",
      "deadline": "2026-12-31T23:59:59",
      "dateRange": "2026-12-31",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333117/international-conference-on-bio-sensing-technology-2026",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editor: Richard Luxton  •_Impact Factor 7.6_•_CiteScore 11.0_ Submission deadline:**31 December 2026**",
      "journal": "Sensors and Actuators Reports",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-materials-science-and-engineering-b-2026-1",
      "title": "Materials Science and Engineering: B",
      "deadline": "2026-12-31T23:59:59",
      "dateRange": "2026-12-31",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/journal/materials-science-and-engineering-b",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "•_Impact Factor 4.6_•_CiteScore 7.5_ Submission deadline:**31 December 2026**",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.820Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-modern-approaches-to-mathematical-modeling",
      "title": "Modern Approaches to Mathematical Modeling of Infectious Diseases: Theory, Computation, and Applications",
      "deadline": "2026-12-31T23:59:59",
      "dateRange": "2026-12-31",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333297/modern-approaches-to-mathematical-modeling-of-infectious-diseases-theory-computation-and-applications",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Carla M.A Pinto, Julia Calatayud, Marc Jornet  •_Impact Factor 5.6_•_CiteScore 9.9_ Submission deadline:**31 December 2026**",
      "journal": "Chaos, Solitons & Fractals",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-neuroimaging-in-africa-progress-priorities",
      "title": "Neuroimaging in Africa: Progress, Priorities, and Possibilities",
      "deadline": "2026-12-31T23:59:59",
      "dateRange": "2026-12-31",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333040/neuroimaging-in-africa-progress-priorities-and-possibilities",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Kirsty Donald, Derek Jones, Karen Chetcuti, Godwin Ogbole and Jo Wilmshurst  •_Impact Factor 4.5_•_CiteScore 10.8_ Submission deadline:**31 December 2026**",
      "journal": "NeuroImage",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-papers-in-memory-of-thomas-augustin-2026-1",
      "title": "Papers in Memory of Thomas Augustin",
      "deadline": "2026-12-31T23:59:59",
      "dateRange": "2026-12-31",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333213/papers-in-memory-of-thomas-augustin",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Christoph Jansen; Georg Schollmeyer; Julian Rodemann; Rudolf Seising.  •_Impact Factor 3.0_•_CiteScore 6.2_ Submission deadline:**31 December 2026**",
      "journal": "International Journal of Approximate Reasoning",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-15",
      "title": "ScienceDirect Browse Calls for Papers",
      "deadline": "2026-12-31T23:59:59",
      "dateRange": "2026-12-31",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect",
        "CFP"
      ],
      "url": "https://www.sciencedirect.com/browse/calls-for-papers",
      "status": "ongoing",
      "stage": "CFP board",
      "source": "Elsevier official seed",
      "type": "journal",
      "description": "Elsevier 主要 CFP 总入口，适合作为 crawler 主入口。",
      "journal": "Elsevier Journals",
      "publisher": "Elsevier",
      "cfpType": "CFP board",
      "sourcePriority": "official-central",
      "deadlineTimezone": "unknown"
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-solar-chemistry-and-photocatalysis-energy-",
      "title": "Solar Chemistry and Photocatalysis: Energy and Environmental Applications (1)",
      "deadline": "2026-12-31T23:59:59",
      "dateRange": "2026-12-31",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/332987/solar-chemistry-and-photocatalysis-energy-and-environmental-applications-1",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Ewa K. Kowalska; Wojciech Macyk; Francesco Parrino; Zhishun Wei; Zuzanna Bielan  •_Impact Factor 4.7_•_CiteScore 7.8_ Submission deadline:**31 December 2026**",
      "journal": "Journal of Photochemistry and Photobiology A: Chemistry",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.820Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-the-nexus-of-opportunities-non-co-greenhou",
      "title": "The Nexus of Opportunities: Non-CO₂ Greenhouse Gas Mitigations in Developing Countries",
      "deadline": "2026-12-31T23:59:59",
      "dateRange": "2026-12-31",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333107/the-nexus-of-opportunities-non-co2-greenhouse-gas-mitigations-in-developing-countries",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": " Submission deadline:**31 December 2026**",
      "journal": "Environmental Nexus",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-recent-advances-on-shape-and-topology-opti",
      "title": "Recent Advances on Shape and Topology Optimization: Mathematical Analysis, Numerical Methods, and Applications",
      "deadline": "2027-01-01T23:59:59",
      "dateRange": "2027-01-01",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/332975/recent-advances-on-shape-and-topology-optimization-mathematical-analysis-numerical-methods-and-applications",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Shengfeng Zhu, Jan Sokolowski, Wei Gong  •_Impact Factor 3.8_•_CiteScore 6.6_ Submission deadline:**01 January 2027**",
      "journal": "Communications in Nonlinear Science and Numerical Simulation",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.820Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-synthetic-cathinones-2027-01-01",
      "title": "Synthetic Cathinones",
      "deadline": "2027-01-01T23:59:59",
      "dateRange": "2027-01-01",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333065/synthetic-cathinones",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Foster Olive and Scott Rawls  •_Impact Factor 4.6_•_CiteScore 9.4_ Submission deadline:**01 January 2027**",
      "journal": "Neuropharmacology",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-urban-air-mobility-systems-shaping-future-",
      "title": "Urban Air Mobility Systems: Shaping Future Mobility and Societal Transformation",
      "deadline": "2027-01-01T23:59:59",
      "dateRange": "2027-01-01",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333169/urban-air-mobility-systems-shaping-future-mobility-and-societal-transformation",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Hongliang Ding, Hui-Jun Sun, Kun Wang, Shaopeng Zhong  •_Impact Factor 5.7_•_CiteScore 9.2_ Submission deadline:**01 January 2027**",
      "journal": "Travel Behaviour and Society",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-surface-driven-mechanisms-in-next-generati",
      "title": "Surface-Driven Mechanisms in Next-Generation Electrochemical Energy Storage Devices (VSI: Surface-Driven Energy Storage Technologies)",
      "deadline": "2027-01-02T23:59:59",
      "dateRange": "2027-01-02",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333090/surface-driven-mechanisms-in-next-generation-electrochemical-energy-storage-devices-vsi-surface-driven-energy-storage-technologies",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Dr. Sanu Mathew Simon, Dr. Nilanthy Balakrishnan, Dr. Irshad Kammakakam  •_Impact Factor 4.4_•_CiteScore 3.9_ Submission deadline:**02 January 2027**",
      "journal": "Results in Surfaces and Interfaces",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.820Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-challenging-assumptions-in-neuropsychology",
      "title": "Challenging assumptions in neuropsychology",
      "deadline": "2027-01-15T23:59:59",
      "dateRange": "2027-01-15",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333106/challenging-assumptions-in-neuropsychology",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Elena Rusconi, Sergio Della Sala and Naama Friedmann  •_Impact Factor 3.3_•_CiteScore 6.1_ Submission deadline:**15 January 2027**",
      "journal": "Cortex",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-advancing-team-based-youth-sport-research-",
      "title": "Advancing Team-Based Youth Sport Research and Practice",
      "deadline": "2027-01-31T23:59:59",
      "dateRange": "2027-01-31",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333116/advancing-team-based-youth-sport-research-and-practice",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Dr. Sam Elliott, Dr. Chris S Whatman, Dr. Simon Walters, Dr. Deb Agnew  Submission deadline:**31 January 2027**",
      "journal": "Team Sports Studies",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-components-operationally-reversibility-and",
      "title": "Components Operationally: Reversibility and System Engineering",
      "deadline": "2027-01-31T23:59:59",
      "dateRange": "2027-01-31",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333326/components-operationally-reversibility-and-system-engineering",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Claudio Antares Mezzina  •_Impact Factor 1.2_•_CiteScore 2.8_ Submission deadline:**31 January 2027**",
      "journal": "Journal of Logical and Algebraic Methods in Programming",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.818Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-defect-engineered-advanced-materials-for-s",
      "title": "Defect-Engineered Advanced Materials for Sustainable Energy Applications",
      "deadline": "2027-01-31T23:59:59",
      "dateRange": "2027-01-31",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333135/defect-engineered-advanced-materials-for-sustainable-energy-applications",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Sang-Il Choi, Suresh Sundaramurthy, Bhargavi Rani Anne  •_Impact Factor 3.3_•_CiteScore 5.4_ Submission deadline:**31 January 2027**",
      "journal": "Solid State Sciences",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-emerging-challenges-and-solutions-in-batte",
      "title": "Emerging Challenges and Solutions in Battery Safety: Materials, Mechanisms, and Mitigation",
      "deadline": "2027-01-31T23:59:59",
      "dateRange": "2027-01-31",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333084/emerging-challenges-and-solutions-in-battery-safety-materials-mechanisms-and-mitigation",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Jun Xu; Xiang Gao; Wenquan Lu  •_Impact Factor 7.9_•_CiteScore 14.9_ Submission deadline:**31 January 2027**",
      "journal": "Journal of Power Sources",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.820Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-intersection-of-nanomaterials-and-stretcha",
      "title": "Intersection of Nanomaterials and Stretchable Electronics",
      "deadline": "2027-01-31T23:59:59",
      "dateRange": "2027-01-31",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333078/intersection-of-nanomaterials-and-stretchable-electronics",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Yanchao Mao, Yanhao Yu  •_CiteScore 0.7_ Submission deadline:**31 January 2027**",
      "journal": "Nano Trends",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-selected-papers-from-second-ensbe-2026-adv",
      "title": "Selected Papers from Second ENSBE 2026 — Advances and Challenges in Electrochemical Sensors and Biosensors",
      "deadline": "2027-01-31T23:59:59",
      "dateRange": "2027-01-31",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/332990/selected-papers-from-second-ensbe-2026-advances-and-challenges-in-electrochemical-sensors-and-biosensors",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Rafael Machado Dornellas; Rodrigo Alejandro Abarza Muñoz; João Victor Nicolini; Helen Ferraz; Felipe Silva Semaan  •_Impact Factor 4.1_•_CiteScore 8.1_ Submission deadline:**31 January 2027**",
      "journal": "Journal of Electroanalytical Chemistry",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.820Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-theoretical-foundations-of-interprofession",
      "title": "Theoretical Foundations of Interprofessional Practice",
      "deadline": "2027-01-31T23:59:59",
      "dateRange": "2027-01-31",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333132/theoretical-foundations-of-interprofessional-practice",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Dr. Barret Michalec, Christine Arenson  •_CiteScore 2.2_ Submission deadline:**31 January 2027**",
      "journal": "Journal of Interprofessional Education & Practice",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-ai-driven-modelling-and-en-hancement-for-t",
      "title": "AI-Driven Modelling and En-hancement for Transportation Re-silience under Disasters",
      "deadline": "2027-02-12T23:59:59",
      "dateRange": "2027-02-12",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333141/ai-driven-modelling-and-en-hancement-for-transportation-re-silience-under-disasters",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Dr. Zhao Zhang, Dr. Xiangdong Xu, Dr. Jiangping Zhou, Dr. Albert Solé Ribalta  •_Impact Factor 7.7_•_CiteScore 14.2_ Submission deadline:**12 February 2027**",
      "journal": "Transportation Research Part D: Transport and Environment",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-coordination-chemistry-for-catalysis-a-spe",
      "title": "Coordination chemistry for catalysis - a special issue in honor of Professor Matthias Beller",
      "deadline": "2027-02-28T23:59:59",
      "dateRange": "2027-02-28",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333329/coordination-chemistry-for-catalysis-a-special-issue-in-honor-of-professor-matthias-beller",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Paul Dyson, Robert Franke, Qiang Xu  •_Impact Factor 23.5_•_CiteScore 38.2_ Submission deadline:**28 February 2027**",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.818Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-keynote-papers-of-the-17th-international-c",
      "title": "Keynote Papers of the 17th International Conference on the Chemistry of Cement, 2027, New Delhi",
      "deadline": "2027-02-28T23:59:59",
      "dateRange": "2027-02-28",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333015/keynote-papers-of-the-17th-international-conference-on-the-chemistry-of-cement-2027-new-delhi",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Kimberly Kurtis, Marta Palacios  •_Impact Factor 13.1_•_CiteScore 23.5_ Submission deadline:**28 February 2027**",
      "journal": "Cement and Concrete Research",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-optimization-control-theory-and-artificial",
      "title": "Optimization, Control Theory, and Artificial Intelligence: Converging Methodologies for Engineering Applications",
      "deadline": "2027-03-01T23:59:59",
      "dateRange": "2027-03-01",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333017/optimization-control-theory-and-artificial-intelligence-converging-methodologies-for-engineering-applications",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Necati Ozdemir; Ender Ozcan; Anthony Siming Chen  •_Impact Factor 8.0_•_CiteScore 9.5_ Submission deadline:**01 March 2027**",
      "journal": "Engineering Applications of Artificial Intelligence",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-state-of-the-science-practice-and-emerging",
      "title": "State of the science, practice, and emerging trends in PTSD treatment",
      "deadline": "2027-03-01T23:59:59",
      "dateRange": "2027-03-01",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333070/state-of-the-science-practice-and-emerging-trends-in-ptsd-treatment",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Dr. Nicholas A. Livingston and Dr. Kelly Harper  Submission deadline:**01 March 2027**",
      "journal": "Journal of Mood & Anxiety Disorders",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-sustainability-of-artificial-intelligence-",
      "title": "Sustainability of Artificial Intelligence in Radiology",
      "deadline": "2027-03-10T23:59:59",
      "dateRange": "2027-03-10",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333330/sustainability-of-artificial-intelligence-in-radiology",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Florence Doo & Michail Klontzas  Submission deadline:**10 March 2027**",
      "journal": "European Journal of Radiology Artificial Intelligence",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.818Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-quality-improvement-innovations-2027-03-30",
      "title": "Quality Improvement: Innovations",
      "deadline": "2027-03-30T23:59:59",
      "dateRange": "2027-03-30",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333172/quality-improvement-innovations",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Dr. Ambereen Kurwa Mehta  •_Impact Factor 3.5_•_CiteScore 6.2_ Submission deadline:**30 March 2027**",
      "journal": "Journal of Pain and Symptom Management",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-curated-collection-on-methods-in-tourism-r",
      "title": "Curated Collection on Methods in Tourism Research: Advances & Best Practices",
      "deadline": "2027-03-31T23:59:59",
      "dateRange": "2027-03-31",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333091/curated-collection-on-methods-in-tourism-research-advances-best-practices",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Jorge E. Araña Padilla, Katarzyna Czernek-Marszałek  •_Impact Factor 7.8_•_CiteScore 16.2_ Submission deadline:**31 March 2027**",
      "journal": "Annals of Tourism Research",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.820Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-klebsiella-pneumoniae-antimicrobial-resist",
      "title": "Klebsiella pneumoniae: Antimicrobial resistance, hypervirulent K. pneumoniae, therapeutic strategies and infection control",
      "deadline": "2027-04-30T23:59:59",
      "dateRange": "2027-04-30",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333267/klebsiella-pneumoniae-antimicrobial-resistance-hypervirulent-k-pneumoniae-therapeutic-strategies-and-infection-control",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Xi Li & Ruichao Li  •_Impact Factor 4.6_•_CiteScore 5.8_ Submission deadline:**30 April 2027**",
      "journal": "International Journal of Antimicrobial Agents",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-special-issue-on-ai-disruption-in-global-c",
      "title": "Special Issue on AI Disruption in Global Capital Markets",
      "deadline": "2027-04-30T23:59:59",
      "dateRange": "2027-04-30",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333140/special-issue-on-ai-disruption-in-global-capital-markets",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Sean Cao, Allen Huang, Katsuyuki Kubo, Yohei Yamamoto, Clara Zhou  •_Impact Factor 5.3_•_CiteScore 7.2_ Submission deadline:**30 April 2027**",
      "journal": "Pacific-Basin Finance Journal",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-single-atom-catalysts-2027-05-01",
      "title": "Single Atom Catalysts",
      "deadline": "2027-05-01T23:59:59",
      "dateRange": "2027-05-01",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333268/single-atom-catalysts",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Christian Papp, Gareth Steven Parkinson, Lars C. Grabow  •_Impact Factor 1.8_•_CiteScore 3.5_ Submission deadline:**01 May 2027**",
      "journal": "Surface Science",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-sudden-unexpected-death-in-epilepsy-mechan",
      "title": "Sudden Unexpected Death in Epilepsy: Mechanisms and Interventions",
      "deadline": "2027-05-10T23:59:59",
      "dateRange": "2027-05-10",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333276/sudden-unexpected-death-in-epilepsy-mechanisms-and-interventions",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Carie R Boychuk, Ian Wenker  •_Impact Factor 5.1_•_CiteScore 10.9_ Submission deadline:**10 May 2027**",
      "journal": "Life Sciences",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-economic-and-management-challenges-in-urba",
      "title": "Economic and Management Challenges in Urban Air Mobility and Drone Systems",
      "deadline": "2027-05-13T23:59:59",
      "dateRange": "2027-05-13",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333033/economic-and-management-challenges-in-urban-air-mobility-and-drone-systems",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Tao Feng, Bo Zou, Lingxiao Wu  Submission deadline:**13 May 2027**",
      "journal": "Transport Economics and Management",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.820Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-advances-and-future-directions-in-choice-m",
      "title": "Advances and future directions in choice modelling for environmental valuation",
      "deadline": "2027-05-15T23:59:59",
      "dateRange": "2027-05-15",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333277/advances-and-future-directions-in-choice-modelling-for-environmental-valuation",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Erlend Dancke Sandorf, Klaus Glenk, Jürgen Meyerhoff  •_Impact Factor 2.4_•_CiteScore 5.6_ Submission deadline:**15 May 2027**",
      "journal": "Journal of Choice Modelling",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-hydrodynamic-cavitation-devices-modelling-",
      "title": "Hydrodynamic Cavitation: Devices, Modelling and Applications",
      "deadline": "2027-05-31T23:59:59",
      "dateRange": "2027-05-31",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333272/hydrodynamic-cavitation-devices-modelling-and-applications",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Professor Vivek Ranade, Professor Giancarlo Cravotto, Professor Matevz Dular,  •_Impact Factor 9.7_•_CiteScore 17.7_ Submission deadline:**31 May 2027**",
      "journal": "Ultrasonics Sonochemistry",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-special-issue-on-innovative-research-and-e",
      "title": "Special Issue on Innovative Research and Engineering Translation of Biomaterials for Regenerative Medicine",
      "deadline": "2027-05-31T23:59:59",
      "dateRange": "2027-05-31",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333243/special-issue-on-innovative-research-and-engineering-translation-of-biomaterials-for-regenerative-medicine",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": " •_CiteScore 23.3_ Submission deadline:**31 May 2027**",
      "journal": "Engineered Regeneration",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-academic-engagement-promises-potential-and",
      "title": "Academic Engagement: Promises, Potential, and Unintended Consequences",
      "deadline": "2027-06-01T23:59:59",
      "dateRange": "2027-06-01",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333137/academic-engagement-promises-potential-and-unintended-consequences",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: David B. Audretsch, Maksim Belitski, Antje Fiedler, Donald F. Kuratko, Albert N. Link, Donald S. Siegel  •_Impact Factor 8.0_•_CiteScore 15.0_ Submission deadline:**01 June 2027**",
      "journal": "Research Policy",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-advanced-diffusion-technologies-for-the-ge",
      "title": "Advanced Diffusion Technologies for the Generation of High-Performance Metallurgical Layers (VSI: High-Perf Diff Layers)",
      "deadline": "2027-06-30T23:59:59",
      "dateRange": "2027-06-30",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333328/advanced-diffusion-technologies-for-the-generation-of-high-performance-metallurgical-layers-vsi-high-perf-diff-layers",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Ivan Enrique I. Campos-Silva  •_Impact Factor 6.1_•_CiteScore 10.2_ Submission deadline:**30 June 2027**",
      "journal": "Surface and Coatings Technology",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.818Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-open-science-in-orofacial-pain-research-20",
      "title": "Open Science in Orofacial Pain Research",
      "deadline": "2027-07-01T23:59:59",
      "dateRange": "2027-07-01",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333184/open-science-in-orofacial-pain-research",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Dr. Noéli Boscato, Dr. Anelise Fernandes Montagner  Submission deadline:**01 July 2027**",
      "journal": "Clinical Dental Journal",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-planning-and-design-for-urban-underground-",
      "title": "Planning and Design for Urban Underground Spaces and Their Impact on Human Behaviour",
      "deadline": "2027-08-31T23:59:59",
      "dateRange": "2027-08-31",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333336/planning-and-design-for-urban-underground-spaces-and-their-impact-on-human-behaviour",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": "Guest editors: Jenny Jianqiang Cui, Liang Ma, Dong Lin, Yena Song, Zhipeng Zhou  •_Impact Factor 7.4_•_CiteScore 13.0_ Submission deadline:**31 August 2027**",
      "journal": "Tunnelling and Underground Space Technology",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.818Z"
      }
    },
    {
      "id": "journal-ddl-sciencedirect-cfp-advances-in-in-situ-condition-preserved-co",
      "title": "Advances in In-Situ Condition-preserved Coring and Testing of Deep Rocks",
      "deadline": "2027-12-31T23:59:59",
      "dateRange": "2027-12-31",
      "location": "ScienceDirect",
      "isOnline": true,
      "tags": [
        "Elsevier",
        "ScienceDirect"
      ],
      "url": "https://www.sciencedirect.com/special-issue/333186/advances-in-in-situ-condition-preserved-coring-and-testing-of-deep-rocks",
      "status": "upcoming",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal",
      "description": " •_Impact Factor 6.1_•_CiteScore 9.4_ Submission deadline:**31 December 2027**",
      "journal": "Petroleum Science",
      "publisher": "Elsevier",
      "cfpType": "Special Issue",
      "sourcePriority": "official-central",
      "deadlineTimezone": "source-local/unspecified",
      "crawler": {
        "sourceId": "sciencedirect-cfp",
        "parser": "sciencedirect-cfp",
        "parserConfidence": "source-specific",
        "crawledAt": "2026-05-14T14:36:52.819Z"
      }
    }
  ],
  "programming-ddl": [
    {
      "id": "programming-ddl-codeforces-global-round-2026-06-20",
      "title": "Codeforces Global Round",
      "deadline": "2026-06-20T22:35:00",
      "dateRange": "Jun 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Codeforces",
        "Rating"
      ],
      "url": "https://codeforces.com",
      "status": "upcoming",
      "stage": "Contest",
      "source": "Official site",
      "type": "contest",
      "description": "Codeforces 轮次入口。"
    },
    {
      "id": "programming-ddl-noi-online-training-camp-2026-07-05",
      "title": "NOI Online Training Camp",
      "deadline": "2026-07-05T23:59:59",
      "dateRange": "Jul 2026",
      "location": "China",
      "isOnline": true,
      "tags": [
        "NOI",
        "OI"
      ],
      "url": "https://www.noi.cn",
      "status": "upcoming",
      "stage": "Registration",
      "source": "Curated coverage seed",
      "type": "contest",
      "description": "信息学竞赛训练营入口。"
    },
    {
      "id": "programming-ddl-kaggle-playground-series-2026-07-31",
      "title": "Kaggle Playground Series",
      "deadline": "2026-07-31T23:59:59",
      "dateRange": "Monthly 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Kaggle",
        "ML"
      ],
      "url": "https://www.kaggle.com/competitions",
      "status": "upcoming",
      "stage": "Submission",
      "source": "Curated coverage seed",
      "type": "contest",
      "description": "月度机器学习竞赛入口。"
    },
    {
      "id": "programming-ddl-hackerrank-interview-preparation-kit-sprint-2026-08-15",
      "title": "HackerRank Interview Preparation Kit Sprint",
      "deadline": "2026-08-15T23:59:59",
      "dateRange": "Aug 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Interview",
        "Practice"
      ],
      "url": "https://www.hackerrank.com/domains/tutorials/10-days-of-javascript",
      "status": "upcoming",
      "stage": "Practice",
      "source": "Curated coverage seed",
      "type": "contest",
      "description": "面试编程训练专题入口。"
    },
    {
      "id": "programming-ddl-tianchi-algorithm-competition-2026-08-31",
      "title": "Tianchi Algorithm Competition",
      "deadline": "2026-08-31T23:59:59",
      "dateRange": "Aug 2026",
      "location": "China",
      "isOnline": true,
      "tags": [
        "天池",
        "ML"
      ],
      "url": "https://tianchi.aliyun.com/competition",
      "status": "upcoming",
      "stage": "Submission",
      "source": "Curated coverage seed",
      "type": "contest",
      "description": "国内算法竞赛入口。"
    },
    {
      "id": "programming-ddl-meta-hacker-cup-2026-qualification-2026-09-01",
      "title": "Meta Hacker Cup 2026 Qualification",
      "deadline": "2026-09-01T23:59:59",
      "dateRange": "Sep 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Meta",
        "Algorithm"
      ],
      "url": "https://www.facebook.com/codingcompetitions/hacker-cup",
      "status": "upcoming",
      "stage": "Qualification",
      "source": "Curated coverage seed",
      "type": "contest",
      "description": "算法竞赛资格赛入口。"
    },
    {
      "id": "programming-ddl-icpc-asia-regional-registration-2026-09-15",
      "title": "ICPC Asia Regional Registration",
      "deadline": "2026-09-15T23:59:59",
      "dateRange": "Sep 2026",
      "location": "Asia",
      "isOnline": false,
      "tags": [
        "ICPC",
        "Algorithm"
      ],
      "url": "https://icpc.global",
      "status": "upcoming",
      "stage": "Registration",
      "source": "Official-style seed",
      "type": "contest",
      "description": "区域赛报名入口。"
    },
    {
      "id": "programming-ddl-ccf-csp-certification-2026-09-20",
      "title": "CCF CSP Certification",
      "deadline": "2026-09-20T23:59:59",
      "dateRange": "Sep 2026",
      "location": "China",
      "isOnline": false,
      "tags": [
        "CCF",
        "CSP"
      ],
      "url": "https://www.cspro.org",
      "status": "upcoming",
      "stage": "Registration",
      "source": "Curated coverage seed",
      "type": "contest",
      "description": "软件能力认证/竞赛入口。"
    },
    {
      "id": "programming-ddl-dmoj-seasonal-contest-2026-10-10",
      "title": "DMOJ Seasonal Contest",
      "deadline": "2026-10-10T23:59:59",
      "dateRange": "Oct 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "DMOJ",
        "OI"
      ],
      "url": "https://dmoj.ca/contests",
      "status": "upcoming",
      "stage": "Contest",
      "source": "Curated coverage seed",
      "type": "contest",
      "description": "在线评测竞赛入口。"
    },
    {
      "id": "programming-ddl-icpc-world-finals-2026-2026-10-30",
      "title": "ICPC World Finals 2026",
      "deadline": "2026-10-30T23:59:59",
      "dateRange": "Oct 2026",
      "location": "Egypt",
      "isOnline": false,
      "tags": [
        "ICPC",
        "World Finals"
      ],
      "url": "https://icpc.global",
      "status": "upcoming",
      "stage": "Contest",
      "source": "Curated coverage seed",
      "type": "contest",
      "description": "世界总决赛赛程入口。"
    },
    {
      "id": "programming-ddl-atcoder-grand-contest-demo-round-2026-11-01",
      "title": "AtCoder Grand Contest Demo Round",
      "deadline": "2026-11-01T23:59:59",
      "dateRange": "Nov 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "AtCoder",
        "AGC"
      ],
      "url": "https://atcoder.jp",
      "status": "upcoming",
      "stage": "Contest",
      "source": "Official site",
      "type": "contest",
      "description": "AtCoder 高难度比赛入口。"
    },
    {
      "id": "programming-ddl-hash-code-legacy-practice-sprint-2026-11-30",
      "title": "Hash Code Legacy Practice Sprint",
      "deadline": "2026-11-30T23:59:59",
      "dateRange": "Nov 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Optimization",
        "Practice"
      ],
      "url": "https://codingcompetitions.withgoogle.com/hashcode/archive",
      "status": "upcoming",
      "stage": "Practice",
      "source": "Curated coverage seed",
      "type": "contest",
      "description": "优化类编程挑战归档入口。"
    },
    {
      "id": "programming-ddl-advent-of-code-2026-day-1-2026-12-01",
      "title": "Advent of Code 2026 Day 1",
      "deadline": "2026-12-01T00:00:00",
      "dateRange": "Dec 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "AoC",
        "Daily"
      ],
      "url": "https://adventofcode.com",
      "status": "upcoming",
      "stage": "Event start",
      "source": "Official site",
      "type": "contest",
      "description": "年度编程挑战入口。"
    },
    {
      "id": "programming-ddl-lanqiao-cup-provincial-round-2026-12-10",
      "title": "Lanqiao Cup Provincial Round",
      "deadline": "2026-12-10T23:59:59",
      "dateRange": "Dec 2026",
      "location": "China",
      "isOnline": false,
      "tags": [
        "蓝桥杯",
        "Student"
      ],
      "url": "https://dasai.lanqiao.cn",
      "status": "upcoming",
      "stage": "Registration",
      "source": "SinoConf-style seed",
      "type": "contest",
      "description": "国内编程竞赛入口。"
    },
    {
      "id": "programming-ddl-usaco-2026-december-contest-2026-12-18",
      "title": "USACO 2026 December Contest",
      "deadline": "2026-12-18T23:59:59",
      "dateRange": "Dec 2026",
      "location": "United States",
      "isOnline": true,
      "tags": [
        "USACO",
        "OI"
      ],
      "url": "https://usaco.org",
      "status": "upcoming",
      "stage": "Contest",
      "source": "Curated coverage seed",
      "type": "contest",
      "description": "美国信息学竞赛入口。"
    },
    {
      "id": "programming-ddl-codechef-starters-series-2026-12-31",
      "title": "CodeChef Starters Series",
      "deadline": "2026-12-31T23:59:59",
      "dateRange": "Weekly 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "CodeChef",
        "Weekly"
      ],
      "url": "https://www.codechef.com/contests",
      "status": "ongoing",
      "stage": "Recurring",
      "source": "Curated coverage seed",
      "type": "contest",
      "description": "CodeChef 周赛入口。"
    },
    {
      "id": "programming-ddl-google-code-jam-archive-practice-2026-12-31",
      "title": "Google Code Jam Archive Practice",
      "deadline": "2026-12-31T23:59:59",
      "dateRange": "Rolling 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Practice",
        "Archive"
      ],
      "url": "https://codingcompetitions.withgoogle.com/codejam/archive",
      "status": "ongoing",
      "stage": "Archive",
      "source": "Curated coverage seed",
      "type": "contest",
      "description": "经典题库入口，用于训练专题。"
    },
    {
      "id": "programming-ddl-leetcode-weekly-contest-2026-12-31",
      "title": "LeetCode Weekly Contest",
      "deadline": "2026-12-31T23:59:59",
      "dateRange": "Every Sat",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "LeetCode",
        "Weekly"
      ],
      "url": "https://leetcode.com/contest",
      "status": "ongoing",
      "stage": "Recurring",
      "source": "Official site",
      "type": "contest",
      "description": "重复赛事入口，后续可转为 RRULE 或周规则。"
    },
    {
      "id": "programming-ddl-project-euler-monthly-challenge-2026-12-31",
      "title": "Project Euler Monthly Challenge",
      "deadline": "2026-12-31T23:59:59",
      "dateRange": "Rolling 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Math",
        "Programming"
      ],
      "url": "https://projecteuler.net",
      "status": "ongoing",
      "stage": "Recurring",
      "source": "Curated coverage seed",
      "type": "contest",
      "description": "长期数学编程题入口。"
    },
    {
      "id": "programming-ddl-topcoder-srm-series-2026-12-31",
      "title": "Topcoder SRM Series",
      "deadline": "2026-12-31T23:59:59",
      "dateRange": "Rolling 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Topcoder",
        "SRM"
      ],
      "url": "https://www.topcoder.com/challenges",
      "status": "ongoing",
      "stage": "Recurring",
      "source": "Curated coverage seed",
      "type": "contest",
      "description": "Topcoder 赛事入口。"
    }
  ],
  "holiday-ddl": [
    {
      "id": "holiday-ddl-元旦-2026-2026-01-01",
      "title": "元旦 2026",
      "deadline": "2026-01-01T00:00:00",
      "dateRange": "Jan 1, 2026",
      "location": "Global",
      "isOnline": false,
      "tags": [
        "法定假日",
        "New Year"
      ],
      "url": "https://www.gov.cn/",
      "status": "ended",
      "stage": "Holiday",
      "source": "Gov calendar seed",
      "type": "holiday",
      "description": "新年假日。"
    },
    {
      "id": "holiday-ddl-小寒-2026-2026-01-05",
      "title": "小寒 2026",
      "deadline": "2026-01-05T00:00:00",
      "dateRange": "2026-01-05",
      "location": "China",
      "isOnline": false,
      "tags": [
        "二十四节气",
        "节气"
      ],
      "url": "https://www.weather.gov.hk/en/gts/astron2026/almanac2026_index.htm",
      "status": "ended",
      "stage": "Solar term",
      "source": "Hong Kong Observatory almanac seed",
      "type": "holiday",
      "description": "冬季节气。"
    },
    {
      "id": "holiday-ddl-coming-of-age-day-2026-2026-01-12",
      "title": "Coming of Age Day 2026",
      "deadline": "2026-01-12T00:00:00",
      "dateRange": "Jan 12, 2026",
      "location": "Japan",
      "isOnline": false,
      "tags": [
        "Japan National Holiday"
      ],
      "url": "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html",
      "status": "ended",
      "stage": "National holiday",
      "source": "Japan Cabinet Office",
      "type": "holiday",
      "description": "日本成人之日。"
    },
    {
      "id": "holiday-ddl-martin-luther-king-jr-day-2026-2026-01-19",
      "title": "Martin Luther King Jr. Day 2026",
      "deadline": "2026-01-19T00:00:00",
      "dateRange": "Jan 19, 2026",
      "location": "United States",
      "isOnline": false,
      "tags": [
        "US Federal Holiday"
      ],
      "url": "https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/",
      "status": "ended",
      "stage": "Federal holiday",
      "source": "US OPM federal holidays",
      "type": "holiday",
      "description": "美国联邦假日。"
    },
    {
      "id": "holiday-ddl-大寒-2026-2026-01-20",
      "title": "大寒 2026",
      "deadline": "2026-01-20T00:00:00",
      "dateRange": "2026-01-20",
      "location": "China",
      "isOnline": false,
      "tags": [
        "二十四节气",
        "节气"
      ],
      "url": "https://www.weather.gov.hk/en/gts/astron2026/almanac2026_index.htm",
      "status": "ended",
      "stage": "Solar term",
      "source": "Hong Kong Observatory almanac seed",
      "type": "holiday",
      "description": "冬季最后一个节气。"
    },
    {
      "id": "holiday-ddl-立春-2026-2026-02-04",
      "title": "立春 2026",
      "deadline": "2026-02-04T00:00:00",
      "dateRange": "2026-02-04",
      "location": "China",
      "isOnline": false,
      "tags": [
        "二十四节气",
        "节气"
      ],
      "url": "https://www.weather.gov.hk/en/gts/astron2026/almanac2026_index.htm",
      "status": "ended",
      "stage": "Solar term",
      "source": "Hong Kong Observatory almanac seed",
      "type": "holiday",
      "description": "春季开始。"
    },
    {
      "id": "holiday-ddl-小年-2026-2026-02-10",
      "title": "小年 2026",
      "deadline": "2026-02-10T00:00:00",
      "dateRange": "Feb 10, 2026",
      "location": "China",
      "isOnline": false,
      "tags": [
        "传统节日",
        "春节"
      ],
      "url": "https://www.timeanddate.com/holidays/",
      "status": "ended",
      "stage": "Traditional festival",
      "source": "Lunar calendar seed",
      "type": "holiday",
      "description": "北方小年。"
    },
    {
      "id": "holiday-ddl-national-foundation-day-2026-2026-02-11",
      "title": "National Foundation Day 2026",
      "deadline": "2026-02-11T00:00:00",
      "dateRange": "Feb 11, 2026",
      "location": "Japan",
      "isOnline": false,
      "tags": [
        "Japan National Holiday"
      ],
      "url": "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html",
      "status": "ended",
      "stage": "National holiday",
      "source": "Japan Cabinet Office",
      "type": "holiday",
      "description": "日本建国纪念日。"
    },
    {
      "id": "holiday-ddl-valentine-s-day-2026-2026-02-14",
      "title": "Valentine's Day 2026",
      "deadline": "2026-02-14T00:00:00",
      "dateRange": "Feb 14, 2026",
      "location": "Global",
      "isOnline": false,
      "tags": [
        "International",
        "Festival"
      ],
      "url": "https://www.timeanddate.com/holidays/",
      "status": "ended",
      "stage": "Observance",
      "source": "International calendar seed",
      "type": "holiday",
      "description": "情人节。"
    },
    {
      "id": "holiday-ddl-除夕-2026-2026-02-16",
      "title": "除夕 2026",
      "deadline": "2026-02-16T00:00:00",
      "dateRange": "Feb 16, 2026",
      "location": "China",
      "isOnline": false,
      "tags": [
        "传统节日",
        "春节"
      ],
      "url": "https://www.gov.cn/",
      "status": "ended",
      "stage": "Traditional festival",
      "source": "Lunar calendar seed",
      "type": "holiday",
      "description": "农历岁末。"
    },
    {
      "id": "holiday-ddl-washington-s-birthday-2026-2026-02-16",
      "title": "Washington's Birthday 2026",
      "deadline": "2026-02-16T00:00:00",
      "dateRange": "Feb 16, 2026",
      "location": "United States",
      "isOnline": false,
      "tags": [
        "US Federal Holiday"
      ],
      "url": "https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/",
      "status": "ended",
      "stage": "Federal holiday",
      "source": "US OPM federal holidays",
      "type": "holiday",
      "description": "美国联邦假日。"
    },
    {
      "id": "holiday-ddl-春节-2026-2026-02-17",
      "title": "春节 2026",
      "deadline": "2026-02-17T00:00:00",
      "dateRange": "Feb 17, 2026",
      "location": "China",
      "isOnline": false,
      "tags": [
        "法定假日",
        "春节"
      ],
      "url": "https://www.gov.cn/",
      "status": "ended",
      "stage": "Holiday",
      "source": "Gov calendar seed",
      "type": "holiday",
      "description": "农历新年。"
    },
    {
      "id": "holiday-ddl-雨水-2026-2026-02-19",
      "title": "雨水 2026",
      "deadline": "2026-02-19T00:00:00",
      "dateRange": "2026-02-19",
      "location": "China",
      "isOnline": false,
      "tags": [
        "二十四节气",
        "节气"
      ],
      "url": "https://www.weather.gov.hk/en/gts/astron2026/almanac2026_index.htm",
      "status": "ended",
      "stage": "Solar term",
      "source": "Hong Kong Observatory almanac seed",
      "type": "holiday",
      "description": "降水增多。"
    },
    {
      "id": "holiday-ddl-emperor-s-birthday-2026-2026-02-23",
      "title": "Emperor's Birthday 2026",
      "deadline": "2026-02-23T00:00:00",
      "dateRange": "Feb 23, 2026",
      "location": "Japan",
      "isOnline": false,
      "tags": [
        "Japan National Holiday"
      ],
      "url": "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html",
      "status": "ended",
      "stage": "National holiday",
      "source": "Japan Cabinet Office",
      "type": "holiday",
      "description": "日本天皇诞生日。"
    },
    {
      "id": "holiday-ddl-元宵节-2026-2026-03-03",
      "title": "元宵节 2026",
      "deadline": "2026-03-03T00:00:00",
      "dateRange": "Mar 3, 2026",
      "location": "China",
      "isOnline": false,
      "tags": [
        "传统节日",
        "农历"
      ],
      "url": "https://www.timeanddate.com/holidays/",
      "status": "ended",
      "stage": "Traditional festival",
      "source": "Lunar calendar seed",
      "type": "holiday",
      "description": "正月十五。"
    },
    {
      "id": "holiday-ddl-惊蛰-2026-2026-03-05",
      "title": "惊蛰 2026",
      "deadline": "2026-03-05T00:00:00",
      "dateRange": "2026-03-05",
      "location": "China",
      "isOnline": false,
      "tags": [
        "二十四节气",
        "节气"
      ],
      "url": "https://www.weather.gov.hk/en/gts/astron2026/almanac2026_index.htm",
      "status": "ended",
      "stage": "Solar term",
      "source": "Hong Kong Observatory almanac seed",
      "type": "holiday",
      "description": "仲春节气。"
    },
    {
      "id": "holiday-ddl-international-women-s-day-2026-2026-03-08",
      "title": "International Women's Day 2026",
      "deadline": "2026-03-08T00:00:00",
      "dateRange": "Mar 8, 2026",
      "location": "Global",
      "isOnline": false,
      "tags": [
        "UN Observance",
        "International"
      ],
      "url": "https://www.un.org/en/observances",
      "status": "ended",
      "stage": "UN observance",
      "source": "UN observances",
      "type": "holiday",
      "description": "国际妇女节。"
    },
    {
      "id": "holiday-ddl-st-patrick-s-day-2026-2026-03-17",
      "title": "St Patrick's Day 2026",
      "deadline": "2026-03-17T00:00:00",
      "dateRange": "Mar 17, 2026",
      "location": "Ireland / Global",
      "isOnline": false,
      "tags": [
        "International",
        "Festival"
      ],
      "url": "https://www.timeanddate.com/holidays/",
      "status": "ended",
      "stage": "Observance",
      "source": "International calendar seed",
      "type": "holiday",
      "description": "圣帕特里克节。"
    },
    {
      "id": "holiday-ddl-春分-2026-2026-03-20",
      "title": "春分 2026",
      "deadline": "2026-03-20T00:00:00",
      "dateRange": "2026-03-20",
      "location": "China",
      "isOnline": false,
      "tags": [
        "二十四节气",
        "节气"
      ],
      "url": "https://www.weather.gov.hk/en/gts/astron2026/almanac2026_index.htm",
      "status": "ended",
      "stage": "Solar term",
      "source": "Hong Kong Observatory almanac seed",
      "type": "holiday",
      "description": "昼夜近等长。"
    },
    {
      "id": "holiday-ddl-龙抬头-2026-2026-03-20",
      "title": "龙抬头 2026",
      "deadline": "2026-03-20T00:00:00",
      "dateRange": "Mar 20, 2026",
      "location": "China",
      "isOnline": false,
      "tags": [
        "传统节日",
        "农历"
      ],
      "url": "https://www.timeanddate.com/holidays/",
      "status": "ended",
      "stage": "Traditional festival",
      "source": "Lunar calendar seed",
      "type": "holiday",
      "description": "农历二月初二。"
    },
    {
      "id": "holiday-ddl-april-fools-day-2026-2026-04-01",
      "title": "April Fools' Day 2026",
      "deadline": "2026-04-01T00:00:00",
      "dateRange": "Apr 1, 2026",
      "location": "Global",
      "isOnline": false,
      "tags": [
        "International",
        "Fun"
      ],
      "url": "https://www.timeanddate.com/holidays/",
      "status": "ended",
      "stage": "Observance",
      "source": "International calendar seed",
      "type": "holiday",
      "description": "愚人节。"
    },
    {
      "id": "holiday-ddl-good-friday-2026-2026-04-03",
      "title": "Good Friday 2026",
      "deadline": "2026-04-03T00:00:00",
      "dateRange": "Apr 3, 2026",
      "location": "United Kingdom",
      "isOnline": false,
      "tags": [
        "UK Bank Holiday"
      ],
      "url": "https://www.gov.uk/bank-holidays",
      "status": "ended",
      "stage": "Bank holiday",
      "source": "UK bank holidays",
      "type": "holiday",
      "description": "英国银行假日。"
    },
    {
      "id": "holiday-ddl-清明-2026-2026-04-05",
      "title": "清明 2026",
      "deadline": "2026-04-05T00:00:00",
      "dateRange": "2026-04-05",
      "location": "China",
      "isOnline": false,
      "tags": [
        "二十四节气",
        "传统节日"
      ],
      "url": "https://www.gov.cn/",
      "status": "ended",
      "stage": "Solar term",
      "source": "Gov / almanac seed",
      "type": "holiday",
      "description": "节气与传统节日。"
    },
    {
      "id": "holiday-ddl-easter-monday-2026-2026-04-06",
      "title": "Easter Monday 2026",
      "deadline": "2026-04-06T00:00:00",
      "dateRange": "Apr 6, 2026",
      "location": "United Kingdom",
      "isOnline": false,
      "tags": [
        "UK Bank Holiday"
      ],
      "url": "https://www.gov.uk/bank-holidays",
      "status": "ended",
      "stage": "Bank holiday",
      "source": "UK bank holidays",
      "type": "holiday",
      "description": "英国银行假日。"
    },
    {
      "id": "holiday-ddl-谷雨-2026-2026-04-20",
      "title": "谷雨 2026",
      "deadline": "2026-04-20T00:00:00",
      "dateRange": "2026-04-20",
      "location": "China",
      "isOnline": false,
      "tags": [
        "二十四节气",
        "节气"
      ],
      "url": "https://www.weather.gov.hk/en/gts/astron2026/almanac2026_index.htm",
      "status": "ended",
      "stage": "Solar term",
      "source": "Hong Kong Observatory almanac seed",
      "type": "holiday",
      "description": "春季最后一个节气。"
    },
    {
      "id": "holiday-ddl-earth-day-2026-2026-04-22",
      "title": "Earth Day 2026",
      "deadline": "2026-04-22T00:00:00",
      "dateRange": "Apr 22, 2026",
      "location": "Global",
      "isOnline": false,
      "tags": [
        "Environment",
        "International"
      ],
      "url": "https://www.earthday.org",
      "status": "ended",
      "stage": "Observance",
      "source": "Official observance seed",
      "type": "holiday",
      "description": "世界地球日。"
    },
    {
      "id": "holiday-ddl-showa-day-2026-2026-04-29",
      "title": "Showa Day 2026",
      "deadline": "2026-04-29T00:00:00",
      "dateRange": "Apr 29, 2026",
      "location": "Japan",
      "isOnline": false,
      "tags": [
        "Japan National Holiday"
      ],
      "url": "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html",
      "status": "ended",
      "stage": "National holiday",
      "source": "Japan Cabinet Office",
      "type": "holiday",
      "description": "昭和之日。"
    },
    {
      "id": "holiday-ddl-劳动节-2026-2026-05-01",
      "title": "劳动节 2026",
      "deadline": "2026-05-01T00:00:00",
      "dateRange": "May 1, 2026",
      "location": "China / Global",
      "isOnline": false,
      "tags": [
        "法定假日",
        "Labor Day"
      ],
      "url": "https://www.gov.cn/",
      "status": "ended",
      "stage": "Holiday",
      "source": "Gov calendar seed",
      "type": "holiday",
      "description": "劳动节假期入口。"
    },
    {
      "id": "holiday-ddl-constitution-memorial-day-2026-2026-05-03",
      "title": "Constitution Memorial Day 2026",
      "deadline": "2026-05-03T00:00:00",
      "dateRange": "May 3, 2026",
      "location": "Japan",
      "isOnline": false,
      "tags": [
        "Japan National Holiday"
      ],
      "url": "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html",
      "status": "ended",
      "stage": "National holiday",
      "source": "Japan Cabinet Office",
      "type": "holiday",
      "description": "宪法纪念日。"
    },
    {
      "id": "holiday-ddl-early-may-bank-holiday-2026-2026-05-04",
      "title": "Early May Bank Holiday 2026",
      "deadline": "2026-05-04T00:00:00",
      "dateRange": "May 4, 2026",
      "location": "United Kingdom",
      "isOnline": false,
      "tags": [
        "UK Bank Holiday"
      ],
      "url": "https://www.gov.uk/bank-holidays",
      "status": "ended",
      "stage": "Bank holiday",
      "source": "UK bank holidays",
      "type": "holiday",
      "description": "英国银行假日。"
    },
    {
      "id": "holiday-ddl-greenery-day-2026-2026-05-04",
      "title": "Greenery Day 2026",
      "deadline": "2026-05-04T00:00:00",
      "dateRange": "May 4, 2026",
      "location": "Japan",
      "isOnline": false,
      "tags": [
        "Japan National Holiday"
      ],
      "url": "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html",
      "status": "ended",
      "stage": "National holiday",
      "source": "Japan Cabinet Office",
      "type": "holiday",
      "description": "绿之日。"
    },
    {
      "id": "holiday-ddl-立夏-2026-2026-05-05",
      "title": "立夏 2026",
      "deadline": "2026-05-05T00:00:00",
      "dateRange": "2026-05-05",
      "location": "China",
      "isOnline": false,
      "tags": [
        "二十四节气",
        "节气"
      ],
      "url": "https://www.weather.gov.hk/en/gts/astron2026/almanac2026_index.htm",
      "status": "ended",
      "stage": "Solar term",
      "source": "Hong Kong Observatory almanac seed",
      "type": "holiday",
      "description": "夏季开始。"
    },
    {
      "id": "holiday-ddl-children-s-day-2026-2026-05-05",
      "title": "Children's Day 2026",
      "deadline": "2026-05-05T00:00:00",
      "dateRange": "May 5, 2026",
      "location": "Japan",
      "isOnline": false,
      "tags": [
        "Japan National Holiday"
      ],
      "url": "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html",
      "status": "ended",
      "stage": "National holiday",
      "source": "Japan Cabinet Office",
      "type": "holiday",
      "description": "日本儿童节。"
    },
    {
      "id": "holiday-ddl-mother-s-day-2026-2026-05-10",
      "title": "Mother's Day 2026",
      "deadline": "2026-05-10T00:00:00",
      "dateRange": "May 10, 2026",
      "location": "United States / Global",
      "isOnline": false,
      "tags": [
        "International",
        "Family"
      ],
      "url": "https://www.timeanddate.com/holidays/",
      "status": "ended",
      "stage": "Observance",
      "source": "International calendar seed",
      "type": "holiday",
      "description": "母亲节。"
    },
    {
      "id": "holiday-ddl-小满-2026-2026-05-21",
      "title": "小满 2026",
      "deadline": "2026-05-21T00:00:00",
      "dateRange": "2026-05-21",
      "location": "China",
      "isOnline": false,
      "tags": [
        "二十四节气",
        "节气"
      ],
      "url": "https://www.weather.gov.hk/en/gts/astron2026/almanac2026_index.htm",
      "status": "upcoming",
      "stage": "Solar term",
      "source": "Hong Kong Observatory almanac seed",
      "type": "holiday",
      "description": "夏季节气。"
    },
    {
      "id": "holiday-ddl-memorial-day-2026-2026-05-25",
      "title": "Memorial Day 2026",
      "deadline": "2026-05-25T00:00:00",
      "dateRange": "May 25, 2026",
      "location": "United States",
      "isOnline": false,
      "tags": [
        "US Federal Holiday"
      ],
      "url": "https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/",
      "status": "upcoming",
      "stage": "Federal holiday",
      "source": "US OPM federal holidays",
      "type": "holiday",
      "description": "美国联邦假日。"
    },
    {
      "id": "holiday-ddl-spring-bank-holiday-2026-2026-05-25",
      "title": "Spring Bank Holiday 2026",
      "deadline": "2026-05-25T00:00:00",
      "dateRange": "May 25, 2026",
      "location": "United Kingdom",
      "isOnline": false,
      "tags": [
        "UK Bank Holiday"
      ],
      "url": "https://www.gov.uk/bank-holidays",
      "status": "upcoming",
      "stage": "Bank holiday",
      "source": "UK bank holidays",
      "type": "holiday",
      "description": "英国银行假日。"
    },
    {
      "id": "holiday-ddl-芒种-2026-2026-06-05",
      "title": "芒种 2026",
      "deadline": "2026-06-05T00:00:00",
      "dateRange": "2026-06-05",
      "location": "China",
      "isOnline": false,
      "tags": [
        "二十四节气",
        "节气"
      ],
      "url": "https://www.weather.gov.hk/en/gts/astron2026/almanac2026_index.htm",
      "status": "upcoming",
      "stage": "Solar term",
      "source": "Hong Kong Observatory almanac seed",
      "type": "holiday",
      "description": "仲夏农事节气。"
    },
    {
      "id": "holiday-ddl-端午节-2026-2026-06-19",
      "title": "端午节 2026",
      "deadline": "2026-06-19T00:00:00",
      "dateRange": "Jun 19, 2026",
      "location": "China",
      "isOnline": false,
      "tags": [
        "法定假日",
        "传统节日"
      ],
      "url": "https://www.gov.cn/",
      "status": "upcoming",
      "stage": "Holiday",
      "source": "Gov calendar seed",
      "type": "holiday",
      "description": "农历五月初五。"
    },
    {
      "id": "holiday-ddl-juneteenth-2026-2026-06-19",
      "title": "Juneteenth 2026",
      "deadline": "2026-06-19T00:00:00",
      "dateRange": "Jun 19, 2026",
      "location": "United States",
      "isOnline": false,
      "tags": [
        "US Federal Holiday"
      ],
      "url": "https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/",
      "status": "upcoming",
      "stage": "Federal holiday",
      "source": "US OPM federal holidays",
      "type": "holiday",
      "description": "美国联邦假日。"
    },
    {
      "id": "holiday-ddl-夏至-2026-2026-06-21",
      "title": "夏至 2026",
      "deadline": "2026-06-21T00:00:00",
      "dateRange": "2026-06-21",
      "location": "China",
      "isOnline": false,
      "tags": [
        "二十四节气",
        "节气"
      ],
      "url": "https://www.weather.gov.hk/en/gts/astron2026/almanac2026_index.htm",
      "status": "upcoming",
      "stage": "Solar term",
      "source": "Hong Kong Observatory almanac seed",
      "type": "holiday",
      "description": "北半球白昼较长。"
    },
    {
      "id": "holiday-ddl-father-s-day-2026-2026-06-21",
      "title": "Father's Day 2026",
      "deadline": "2026-06-21T00:00:00",
      "dateRange": "Jun 21, 2026",
      "location": "United States / Global",
      "isOnline": false,
      "tags": [
        "International",
        "Family"
      ],
      "url": "https://www.timeanddate.com/holidays/",
      "status": "upcoming",
      "stage": "Observance",
      "source": "International calendar seed",
      "type": "holiday",
      "description": "父亲节。"
    },
    {
      "id": "holiday-ddl-independence-day-2026-2026-07-04",
      "title": "Independence Day 2026",
      "deadline": "2026-07-04T00:00:00",
      "dateRange": "Jul 4, 2026",
      "location": "United States",
      "isOnline": false,
      "tags": [
        "US Federal Holiday"
      ],
      "url": "https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/",
      "status": "upcoming",
      "stage": "Federal holiday",
      "source": "US OPM federal holidays",
      "type": "holiday",
      "description": "美国独立日。"
    },
    {
      "id": "holiday-ddl-小暑-2026-2026-07-07",
      "title": "小暑 2026",
      "deadline": "2026-07-07T00:00:00",
      "dateRange": "2026-07-07",
      "location": "China",
      "isOnline": false,
      "tags": [
        "二十四节气",
        "节气"
      ],
      "url": "https://www.weather.gov.hk/en/gts/astron2026/almanac2026_index.htm",
      "status": "upcoming",
      "stage": "Solar term",
      "source": "Hong Kong Observatory almanac seed",
      "type": "holiday",
      "description": "暑热开始。"
    },
    {
      "id": "holiday-ddl-marine-day-2026-2026-07-20",
      "title": "Marine Day 2026",
      "deadline": "2026-07-20T00:00:00",
      "dateRange": "Jul 20, 2026",
      "location": "Japan",
      "isOnline": false,
      "tags": [
        "Japan National Holiday"
      ],
      "url": "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html",
      "status": "upcoming",
      "stage": "National holiday",
      "source": "Japan Cabinet Office",
      "type": "holiday",
      "description": "海之日。"
    },
    {
      "id": "holiday-ddl-大暑-2026-2026-07-23",
      "title": "大暑 2026",
      "deadline": "2026-07-23T00:00:00",
      "dateRange": "2026-07-23",
      "location": "China",
      "isOnline": false,
      "tags": [
        "二十四节气",
        "节气"
      ],
      "url": "https://www.weather.gov.hk/en/gts/astron2026/almanac2026_index.htm",
      "status": "upcoming",
      "stage": "Solar term",
      "source": "Hong Kong Observatory almanac seed",
      "type": "holiday",
      "description": "暑热高峰。"
    },
    {
      "id": "holiday-ddl-立秋-2026-2026-08-07",
      "title": "立秋 2026",
      "deadline": "2026-08-07T00:00:00",
      "dateRange": "2026-08-07",
      "location": "China",
      "isOnline": false,
      "tags": [
        "二十四节气",
        "节气"
      ],
      "url": "https://www.weather.gov.hk/en/gts/astron2026/almanac2026_index.htm",
      "status": "upcoming",
      "stage": "Solar term",
      "source": "Hong Kong Observatory almanac seed",
      "type": "holiday",
      "description": "秋季开始。"
    },
    {
      "id": "holiday-ddl-mountain-day-2026-2026-08-11",
      "title": "Mountain Day 2026",
      "deadline": "2026-08-11T00:00:00",
      "dateRange": "Aug 11, 2026",
      "location": "Japan",
      "isOnline": false,
      "tags": [
        "Japan National Holiday"
      ],
      "url": "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html",
      "status": "upcoming",
      "stage": "National holiday",
      "source": "Japan Cabinet Office",
      "type": "holiday",
      "description": "山之日。"
    },
    {
      "id": "holiday-ddl-七夕-2026-2026-08-19",
      "title": "七夕 2026",
      "deadline": "2026-08-19T00:00:00",
      "dateRange": "Aug 19, 2026",
      "location": "China",
      "isOnline": false,
      "tags": [
        "传统节日",
        "农历"
      ],
      "url": "https://www.timeanddate.com/holidays/",
      "status": "upcoming",
      "stage": "Traditional festival",
      "source": "Lunar calendar seed",
      "type": "holiday",
      "description": "农历七月初七。"
    },
    {
      "id": "holiday-ddl-处暑-2026-2026-08-23",
      "title": "处暑 2026",
      "deadline": "2026-08-23T00:00:00",
      "dateRange": "2026-08-23",
      "location": "China",
      "isOnline": false,
      "tags": [
        "二十四节气",
        "节气"
      ],
      "url": "https://www.weather.gov.hk/en/gts/astron2026/almanac2026_index.htm",
      "status": "upcoming",
      "stage": "Solar term",
      "source": "Hong Kong Observatory almanac seed",
      "type": "holiday",
      "description": "暑热渐退。"
    },
    {
      "id": "holiday-ddl-中元节-2026-2026-08-27",
      "title": "中元节 2026",
      "deadline": "2026-08-27T00:00:00",
      "dateRange": "Aug 27, 2026",
      "location": "China",
      "isOnline": false,
      "tags": [
        "传统节日",
        "农历"
      ],
      "url": "https://www.timeanddate.com/holidays/",
      "status": "upcoming",
      "stage": "Traditional festival",
      "source": "Lunar calendar seed",
      "type": "holiday",
      "description": "农历七月十五。"
    },
    {
      "id": "holiday-ddl-summer-bank-holiday-2026-2026-08-31",
      "title": "Summer Bank Holiday 2026",
      "deadline": "2026-08-31T00:00:00",
      "dateRange": "Aug 31, 2026",
      "location": "United Kingdom",
      "isOnline": false,
      "tags": [
        "UK Bank Holiday"
      ],
      "url": "https://www.gov.uk/bank-holidays",
      "status": "upcoming",
      "stage": "Bank holiday",
      "source": "UK bank holidays",
      "type": "holiday",
      "description": "英国银行假日。"
    },
    {
      "id": "holiday-ddl-白露-2026-2026-09-07",
      "title": "白露 2026",
      "deadline": "2026-09-07T00:00:00",
      "dateRange": "2026-09-07",
      "location": "China",
      "isOnline": false,
      "tags": [
        "二十四节气",
        "节气"
      ],
      "url": "https://www.weather.gov.hk/en/gts/astron2026/almanac2026_index.htm",
      "status": "upcoming",
      "stage": "Solar term",
      "source": "Hong Kong Observatory almanac seed",
      "type": "holiday",
      "description": "秋季节气。"
    },
    {
      "id": "holiday-ddl-labor-day-2026-2026-09-07",
      "title": "Labor Day 2026",
      "deadline": "2026-09-07T00:00:00",
      "dateRange": "Sep 7, 2026",
      "location": "United States",
      "isOnline": false,
      "tags": [
        "US Federal Holiday"
      ],
      "url": "https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/",
      "status": "upcoming",
      "stage": "Federal holiday",
      "source": "US OPM federal holidays",
      "type": "holiday",
      "description": "美国劳动节。"
    },
    {
      "id": "holiday-ddl-respect-for-the-aged-day-2026-2026-09-21",
      "title": "Respect for the Aged Day 2026",
      "deadline": "2026-09-21T00:00:00",
      "dateRange": "Sep 21, 2026",
      "location": "Japan",
      "isOnline": false,
      "tags": [
        "Japan National Holiday"
      ],
      "url": "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html",
      "status": "upcoming",
      "stage": "National holiday",
      "source": "Japan Cabinet Office",
      "type": "holiday",
      "description": "敬老日。"
    },
    {
      "id": "holiday-ddl-秋分-2026-2026-09-23",
      "title": "秋分 2026",
      "deadline": "2026-09-23T00:00:00",
      "dateRange": "2026-09-23",
      "location": "China",
      "isOnline": false,
      "tags": [
        "二十四节气",
        "节气"
      ],
      "url": "https://www.weather.gov.hk/en/gts/astron2026/almanac2026_index.htm",
      "status": "upcoming",
      "stage": "Solar term",
      "source": "Hong Kong Observatory almanac seed",
      "type": "holiday",
      "description": "昼夜近等长。"
    },
    {
      "id": "holiday-ddl-autumnal-equinox-day-2026-2026-09-23",
      "title": "Autumnal Equinox Day 2026",
      "deadline": "2026-09-23T00:00:00",
      "dateRange": "Sep 23, 2026",
      "location": "Japan",
      "isOnline": false,
      "tags": [
        "Japan National Holiday"
      ],
      "url": "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html",
      "status": "upcoming",
      "stage": "National holiday",
      "source": "Japan Cabinet Office",
      "type": "holiday",
      "description": "秋分日。"
    },
    {
      "id": "holiday-ddl-中秋节-2026-2026-09-25",
      "title": "中秋节 2026",
      "deadline": "2026-09-25T00:00:00",
      "dateRange": "Sep 25, 2026",
      "location": "China",
      "isOnline": false,
      "tags": [
        "法定假日",
        "传统节日"
      ],
      "url": "https://www.gov.cn/",
      "status": "upcoming",
      "stage": "Holiday",
      "source": "Gov calendar seed",
      "type": "holiday",
      "description": "农历八月十五。"
    },
    {
      "id": "holiday-ddl-world-tourism-day-2026-2026-09-27",
      "title": "World Tourism Day 2026",
      "deadline": "2026-09-27T00:00:00",
      "dateRange": "Sep 27, 2026",
      "location": "Global",
      "isOnline": false,
      "tags": [
        "UN Observance",
        "Travel"
      ],
      "url": "https://www.un.org/en/observances",
      "status": "upcoming",
      "stage": "UN observance",
      "source": "UN observances",
      "type": "holiday",
      "description": "世界旅游日。"
    },
    {
      "id": "holiday-ddl-国庆节-2026-2026-10-01",
      "title": "国庆节 2026",
      "deadline": "2026-10-01T00:00:00",
      "dateRange": "Oct 1, 2026",
      "location": "China",
      "isOnline": false,
      "tags": [
        "法定假日",
        "长假"
      ],
      "url": "https://www.gov.cn/",
      "status": "upcoming",
      "stage": "Holiday",
      "source": "Gov calendar seed",
      "type": "holiday",
      "description": "国庆假期入口。"
    },
    {
      "id": "holiday-ddl-寒露-2026-2026-10-08",
      "title": "寒露 2026",
      "deadline": "2026-10-08T00:00:00",
      "dateRange": "2026-10-08",
      "location": "China",
      "isOnline": false,
      "tags": [
        "二十四节气",
        "节气"
      ],
      "url": "https://www.weather.gov.hk/en/gts/astron2026/almanac2026_index.htm",
      "status": "upcoming",
      "stage": "Solar term",
      "source": "Hong Kong Observatory almanac seed",
      "type": "holiday",
      "description": "深秋节气。"
    },
    {
      "id": "holiday-ddl-sports-day-2026-2026-10-12",
      "title": "Sports Day 2026",
      "deadline": "2026-10-12T00:00:00",
      "dateRange": "Oct 12, 2026",
      "location": "Japan",
      "isOnline": false,
      "tags": [
        "Japan National Holiday"
      ],
      "url": "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html",
      "status": "upcoming",
      "stage": "National holiday",
      "source": "Japan Cabinet Office",
      "type": "holiday",
      "description": "体育日。"
    },
    {
      "id": "holiday-ddl-重阳节-2026-2026-10-18",
      "title": "重阳节 2026",
      "deadline": "2026-10-18T00:00:00",
      "dateRange": "Oct 18, 2026",
      "location": "China",
      "isOnline": false,
      "tags": [
        "传统节日",
        "农历"
      ],
      "url": "https://www.timeanddate.com/holidays/",
      "status": "upcoming",
      "stage": "Traditional festival",
      "source": "Lunar calendar seed",
      "type": "holiday",
      "description": "农历九月初九。"
    },
    {
      "id": "holiday-ddl-霜降-2026-2026-10-23",
      "title": "霜降 2026",
      "deadline": "2026-10-23T00:00:00",
      "dateRange": "2026-10-23",
      "location": "China",
      "isOnline": false,
      "tags": [
        "二十四节气",
        "节气"
      ],
      "url": "https://www.weather.gov.hk/en/gts/astron2026/almanac2026_index.htm",
      "status": "upcoming",
      "stage": "Solar term",
      "source": "Hong Kong Observatory almanac seed",
      "type": "holiday",
      "description": "秋季最后一个节气。"
    },
    {
      "id": "holiday-ddl-halloween-2026-2026-10-31",
      "title": "Halloween 2026",
      "deadline": "2026-10-31T00:00:00",
      "dateRange": "Oct 31, 2026",
      "location": "Global",
      "isOnline": false,
      "tags": [
        "International",
        "Festival"
      ],
      "url": "https://www.timeanddate.com/holidays/",
      "status": "upcoming",
      "stage": "Observance",
      "source": "International calendar seed",
      "type": "holiday",
      "description": "万圣夜。"
    },
    {
      "id": "holiday-ddl-culture-day-2026-2026-11-03",
      "title": "Culture Day 2026",
      "deadline": "2026-11-03T00:00:00",
      "dateRange": "Nov 3, 2026",
      "location": "Japan",
      "isOnline": false,
      "tags": [
        "Japan National Holiday"
      ],
      "url": "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html",
      "status": "upcoming",
      "stage": "National holiday",
      "source": "Japan Cabinet Office",
      "type": "holiday",
      "description": "文化日。"
    },
    {
      "id": "holiday-ddl-立冬-2026-2026-11-07",
      "title": "立冬 2026",
      "deadline": "2026-11-07T00:00:00",
      "dateRange": "2026-11-07",
      "location": "China",
      "isOnline": false,
      "tags": [
        "二十四节气",
        "节气"
      ],
      "url": "https://www.weather.gov.hk/en/gts/astron2026/almanac2026_index.htm",
      "status": "upcoming",
      "stage": "Solar term",
      "source": "Hong Kong Observatory almanac seed",
      "type": "holiday",
      "description": "冬季开始。"
    },
    {
      "id": "holiday-ddl-singles-day-2026-2026-11-11",
      "title": "Singles Day 2026",
      "deadline": "2026-11-11T00:00:00",
      "dateRange": "Nov 11, 2026",
      "location": "China / Global",
      "isOnline": false,
      "tags": [
        "Shopping",
        "China"
      ],
      "url": "https://www.timeanddate.com/holidays/",
      "status": "upcoming",
      "stage": "Observance",
      "source": "International calendar seed",
      "type": "holiday",
      "description": "双十一。"
    },
    {
      "id": "holiday-ddl-小雪-2026-2026-11-22",
      "title": "小雪 2026",
      "deadline": "2026-11-22T00:00:00",
      "dateRange": "2026-11-22",
      "location": "China",
      "isOnline": false,
      "tags": [
        "二十四节气",
        "节气"
      ],
      "url": "https://www.weather.gov.hk/en/gts/astron2026/almanac2026_index.htm",
      "status": "upcoming",
      "stage": "Solar term",
      "source": "Hong Kong Observatory almanac seed",
      "type": "holiday",
      "description": "冬季节气。"
    },
    {
      "id": "holiday-ddl-labor-thanksgiving-day-2026-2026-11-23",
      "title": "Labor Thanksgiving Day 2026",
      "deadline": "2026-11-23T00:00:00",
      "dateRange": "Nov 23, 2026",
      "location": "Japan",
      "isOnline": false,
      "tags": [
        "Japan National Holiday"
      ],
      "url": "https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html",
      "status": "upcoming",
      "stage": "National holiday",
      "source": "Japan Cabinet Office",
      "type": "holiday",
      "description": "勤劳感谢日。"
    },
    {
      "id": "holiday-ddl-thanksgiving-day-2026-2026-11-26",
      "title": "Thanksgiving Day 2026",
      "deadline": "2026-11-26T00:00:00",
      "dateRange": "Nov 26, 2026",
      "location": "United States",
      "isOnline": false,
      "tags": [
        "US Federal Holiday"
      ],
      "url": "https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/",
      "status": "upcoming",
      "stage": "Federal holiday",
      "source": "US OPM federal holidays",
      "type": "holiday",
      "description": "美国感恩节。"
    },
    {
      "id": "holiday-ddl-black-friday-2026-2026-11-27",
      "title": "Black Friday 2026",
      "deadline": "2026-11-27T00:00:00",
      "dateRange": "Nov 27, 2026",
      "location": "United States / Global",
      "isOnline": false,
      "tags": [
        "Shopping",
        "International"
      ],
      "url": "https://www.timeanddate.com/holidays/",
      "status": "upcoming",
      "stage": "Observance",
      "source": "International calendar seed",
      "type": "holiday",
      "description": "黑色星期五。"
    },
    {
      "id": "holiday-ddl-大雪-2026-2026-12-07",
      "title": "大雪 2026",
      "deadline": "2026-12-07T00:00:00",
      "dateRange": "2026-12-07",
      "location": "China",
      "isOnline": false,
      "tags": [
        "二十四节气",
        "节气"
      ],
      "url": "https://www.weather.gov.hk/en/gts/astron2026/almanac2026_index.htm",
      "status": "upcoming",
      "stage": "Solar term",
      "source": "Hong Kong Observatory almanac seed",
      "type": "holiday",
      "description": "仲冬节气。"
    },
    {
      "id": "holiday-ddl-冬至-2026-2026-12-22",
      "title": "冬至 2026",
      "deadline": "2026-12-22T00:00:00",
      "dateRange": "2026-12-22",
      "location": "China",
      "isOnline": false,
      "tags": [
        "二十四节气",
        "传统节日"
      ],
      "url": "https://www.weather.gov.hk/en/gts/astron2026/almanac2026_index.htm",
      "status": "upcoming",
      "stage": "Solar term",
      "source": "Hong Kong Observatory almanac seed",
      "type": "holiday",
      "description": "冬至节气。"
    },
    {
      "id": "holiday-ddl-christmas-day-2026-2026-12-25",
      "title": "Christmas Day 2026",
      "deadline": "2026-12-25T00:00:00",
      "dateRange": "Dec 25, 2026",
      "location": "Global",
      "isOnline": false,
      "tags": [
        "International",
        "Christmas"
      ],
      "url": "https://www.timeanddate.com/holidays/",
      "status": "upcoming",
      "stage": "Holiday",
      "source": "International calendar seed",
      "type": "holiday",
      "description": "圣诞节。"
    },
    {
      "id": "holiday-ddl-boxing-day-substitute-2026-2026-12-28",
      "title": "Boxing Day Substitute 2026",
      "deadline": "2026-12-28T00:00:00",
      "dateRange": "Dec 28, 2026",
      "location": "United Kingdom",
      "isOnline": false,
      "tags": [
        "UK Bank Holiday"
      ],
      "url": "https://www.gov.uk/bank-holidays",
      "status": "upcoming",
      "stage": "Bank holiday",
      "source": "UK bank holidays",
      "type": "holiday",
      "description": "英国节礼日补假。"
    },
    {
      "id": "holiday-ddl-new-year-2027-2027-01-01",
      "title": "New Year 2027",
      "deadline": "2027-01-01T00:00:00",
      "dateRange": "Jan 1, 2027",
      "location": "Global",
      "isOnline": false,
      "tags": [
        "New Year",
        "International"
      ],
      "url": "https://www.timeanddate.com/holidays/",
      "status": "upcoming",
      "stage": "Holiday",
      "source": "International calendar seed",
      "type": "holiday",
      "description": "跨年与新年假日。"
    },
    {
      "id": "holiday-ddl-腊八节-2027-2027-01-15",
      "title": "腊八节 2027",
      "deadline": "2027-01-15T00:00:00",
      "dateRange": "Jan 15, 2027",
      "location": "China",
      "isOnline": false,
      "tags": [
        "传统节日",
        "农历"
      ],
      "url": "https://www.timeanddate.com/holidays/",
      "status": "upcoming",
      "stage": "Traditional festival",
      "source": "Lunar calendar seed",
      "type": "holiday",
      "description": "农历腊月初八。"
    }
  ],
  "multimodal-ddl": [
    {
      "id": "multimodal-ddl-vqa-challenge-2026-2026-07-01",
      "title": "VQA Challenge 2026",
      "deadline": "2026-07-01T23:59:59",
      "dateRange": "Jul 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "VQA",
        "Vision-Language"
      ],
      "url": "https://visualqa.org",
      "status": "upcoming",
      "stage": "Submission",
      "source": "Benchmark demo",
      "type": "challenge",
      "description": "视觉问答评测入口。"
    },
    {
      "id": "multimodal-ddl-textvqa-refresh-2026-08-01",
      "title": "TextVQA Refresh",
      "deadline": "2026-08-01T23:59:59",
      "dateRange": "Aug 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "OCR",
        "VQA"
      ],
      "url": "https://textvqa.org",
      "status": "upcoming",
      "stage": "Result upload",
      "source": "Benchmark demo",
      "type": "challenge",
      "description": "OCR + VQA 评测入口。"
    },
    {
      "id": "multimodal-ddl-mmmu-challenge-2026-2026-08-15",
      "title": "MMMU Challenge 2026",
      "deadline": "2026-08-15T23:59:59",
      "dateRange": "Aug 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "MM Understanding",
        "Reasoning"
      ],
      "url": "https://mmmu-benchmark.github.io",
      "status": "upcoming",
      "stage": "Leaderboard",
      "source": "Benchmark demo",
      "type": "challenge",
      "description": "多模态理解 benchmark 入口。"
    },
    {
      "id": "multimodal-ddl-image-captioning-challenge-2026-08-28",
      "title": "Image Captioning Challenge",
      "deadline": "2026-08-28T23:59:59",
      "dateRange": "Aug 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Captioning",
        "COCO"
      ],
      "url": "https://cocodataset.org",
      "status": "upcoming",
      "stage": "Submission",
      "source": "Curated coverage seed",
      "type": "challenge",
      "description": "图像描述挑战入口。"
    },
    {
      "id": "multimodal-ddl-mmlu-pro-vision-reasoning-track-2026-09-18",
      "title": "MMLU-Pro Vision Reasoning Track",
      "deadline": "2026-09-18T23:59:59",
      "dateRange": "Sep 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Reasoning",
        "VLM"
      ],
      "url": "https://www.kaggle.com/competitions",
      "status": "upcoming",
      "stage": "Leaderboard",
      "source": "Curated coverage seed",
      "type": "challenge",
      "description": "多模态推理榜单入口。"
    },
    {
      "id": "multimodal-ddl-video-captioning-challenge-2026-09-25",
      "title": "Video Captioning Challenge",
      "deadline": "2026-09-25T23:59:59",
      "dateRange": "Sep 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Video Captioning",
        "Generation"
      ],
      "url": "https://www.kaggle.com/competitions",
      "status": "upcoming",
      "stage": "Submission",
      "source": "Curated coverage seed",
      "type": "challenge",
      "description": "视频描述挑战入口。"
    },
    {
      "id": "multimodal-ddl-aigc-evaluation-2026-2026-09-30",
      "title": "AIGC Evaluation 2026",
      "deadline": "2026-09-30T23:59:59",
      "dateRange": "Sep 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "AIGC",
        "Generation"
      ],
      "url": "https://www.kaggle.com/competitions",
      "status": "upcoming",
      "stage": "Final submit",
      "source": "Kaggle-style demo",
      "type": "challenge",
      "description": "生成式 AI 评测入口。"
    },
    {
      "id": "multimodal-ddl-video-mme-leaderboard-freeze-2026-10-12",
      "title": "Video-MME Leaderboard Freeze",
      "deadline": "2026-10-12T23:59:59",
      "dateRange": "Oct 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Video",
        "VLM"
      ],
      "url": "https://video-mme.github.io",
      "status": "upcoming",
      "stage": "Leaderboard",
      "source": "Benchmark demo",
      "type": "challenge",
      "description": "视频理解评测入口。"
    },
    {
      "id": "multimodal-ddl-chartqa-challenge-2026-10-22",
      "title": "ChartQA Challenge",
      "deadline": "2026-10-22T23:59:59",
      "dateRange": "Oct 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "ChartQA",
        "Document"
      ],
      "url": "https://github.com/vis-nlp/ChartQA",
      "status": "upcoming",
      "stage": "Submission",
      "source": "Curated coverage seed",
      "type": "challenge",
      "description": "图表问答评测入口。"
    },
    {
      "id": "multimodal-ddl-audio-visual-scene-challenge-2026-11-05",
      "title": "Audio-Visual Scene Challenge",
      "deadline": "2026-11-05T23:59:59",
      "dateRange": "Nov 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Audio",
        "Video"
      ],
      "url": "https://www.kaggle.com/competitions",
      "status": "upcoming",
      "stage": "Submission",
      "source": "Curated coverage seed",
      "type": "challenge",
      "description": "音视频多模态挑战入口。"
    },
    {
      "id": "multimodal-ddl-docvqa-task-refresh-2026-11-18",
      "title": "DocVQA Task Refresh",
      "deadline": "2026-11-18T23:59:59",
      "dateRange": "Nov 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "DocVQA",
        "OCR"
      ],
      "url": "https://rrc.cvc.uab.es/?ch=17",
      "status": "upcoming",
      "stage": "Result upload",
      "source": "Curated coverage seed",
      "type": "challenge",
      "description": "文档问答评测入口。"
    },
    {
      "id": "multimodal-ddl-cvpr-vlm-workshop-paper-2026-12-01",
      "title": "CVPR VLM Workshop Paper",
      "deadline": "2026-12-01T23:59:59",
      "dateRange": "Dec 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "VLM",
        "Workshop"
      ],
      "url": "https://cvpr.thecvf.com",
      "status": "upcoming",
      "stage": "Workshop paper",
      "source": "Curated coverage seed",
      "type": "program",
      "description": "VLM workshop paper 入口。"
    },
    {
      "id": "multimodal-ddl-mmbench-leaderboard-snapshot-2026-12-12",
      "title": "MMBench Leaderboard Snapshot",
      "deadline": "2026-12-12T23:59:59",
      "dateRange": "Dec 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "MMBench",
        "VLM"
      ],
      "url": "https://opencompass.org.cn/leaderboard-multimodal",
      "status": "upcoming",
      "stage": "Leaderboard",
      "source": "Curated coverage seed",
      "type": "challenge",
      "description": "多模态综合评测入口。"
    },
    {
      "id": "multimodal-ddl-multimodal-safety-red-team-2026-12-20",
      "title": "Multimodal Safety Red Team",
      "deadline": "2026-12-20T23:59:59",
      "dateRange": "Dec 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Safety",
        "Red Team"
      ],
      "url": "https://openreview.net/",
      "status": "upcoming",
      "stage": "Report",
      "source": "Curated coverage seed",
      "type": "challenge",
      "description": "多模态安全评测入口。"
    },
    {
      "id": "multimodal-ddl-llava-bench-refresh-2027-01-05",
      "title": "LLaVA Bench Refresh",
      "deadline": "2027-01-05T23:59:59",
      "dateRange": "Jan 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "LLaVA",
        "VLM"
      ],
      "url": "https://llava-vl.github.io",
      "status": "upcoming",
      "stage": "Evaluation",
      "source": "Curated coverage seed",
      "type": "challenge",
      "description": "VLM 对话能力评测入口。"
    },
    {
      "id": "multimodal-ddl-acl-multimodal-nlp-workshop-2027-01-25",
      "title": "ACL Multimodal NLP Workshop",
      "deadline": "2027-01-25T23:59:59",
      "dateRange": "Jan 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Multimodal NLP",
        "Workshop"
      ],
      "url": "https://www.aclweb.org",
      "status": "upcoming",
      "stage": "Paper",
      "source": "Curated coverage seed",
      "type": "program",
      "description": "多模态 NLP workshop 入口。"
    },
    {
      "id": "multimodal-ddl-speech-to-image-evaluation-track-2027-02-08",
      "title": "Speech-to-Image Evaluation Track",
      "deadline": "2027-02-08T23:59:59",
      "dateRange": "Feb 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Speech",
        "Generation"
      ],
      "url": "https://www.kaggle.com/competitions",
      "status": "upcoming",
      "stage": "Submission",
      "source": "Curated coverage seed",
      "type": "challenge",
      "description": "语音到图像生成评测入口。"
    },
    {
      "id": "multimodal-ddl-robotics-vla-benchmark-2027-03-10",
      "title": "Robotics VLA Benchmark",
      "deadline": "2027-03-10T23:59:59",
      "dateRange": "Mar 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "VLA",
        "Robotics"
      ],
      "url": "https://openreview.net/",
      "status": "upcoming",
      "stage": "Leaderboard",
      "source": "Curated coverage seed",
      "type": "challenge",
      "description": "视觉-语言-动作模型评测入口。"
    }
  ],
  "security-ddl": [
    {
      "id": "security-ddl-def-con-ctf-qualifier-2026-07-01",
      "title": "DEF CON CTF Qualifier",
      "deadline": "2026-07-01T23:59:59",
      "dateRange": "Jul 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "CTF",
        "security",
        "bug bounty"
      ],
      "url": "https://defcon.org",
      "status": "upcoming",
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 crawler 抽取并校验。",
      "stage": "Source board",
      "source": "DEF CON",
      "type": "contest"
    },
    {
      "id": "security-ddl-google-ctf-2026-2026-07-19",
      "title": "Google CTF 2026",
      "deadline": "2026-07-19T23:59:59",
      "dateRange": "Jul 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "CTF",
        "security",
        "bug bounty"
      ],
      "url": "https://capturetheflag.withgoogle.com",
      "status": "upcoming",
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 crawler 抽取并校验。",
      "stage": "Source board",
      "source": "Google CTF",
      "type": "contest"
    },
    {
      "id": "security-ddl-hack-the-box-business-ctf-2026-08-06",
      "title": "Hack The Box Business CTF",
      "deadline": "2026-08-06T23:59:59",
      "dateRange": "Aug 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "CTF",
        "security",
        "bug bounty"
      ],
      "url": "https://ctf.hackthebox.com",
      "status": "upcoming",
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 crawler 抽取并校验。",
      "stage": "Source board",
      "source": "Hack The Box CTF",
      "type": "contest"
    },
    {
      "id": "security-ddl-seccon-ctf-quals-2026-08-24",
      "title": "SECCON CTF Quals",
      "deadline": "2026-08-24T23:59:59",
      "dateRange": "Aug 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "CTF",
        "security",
        "bug bounty"
      ],
      "url": "https://www.seccon.jp",
      "status": "upcoming",
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 crawler 抽取并校验。",
      "stage": "Source board",
      "source": "SECCON",
      "type": "contest"
    },
    {
      "id": "security-ddl-hitcon-ctf-2026-09-11",
      "title": "HITCON CTF",
      "deadline": "2026-09-11T23:59:59",
      "dateRange": "Sep 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "CTF",
        "security",
        "bug bounty"
      ],
      "url": "https://ctf.hitcon.org",
      "status": "upcoming",
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 crawler 抽取并校验。",
      "stage": "Source board",
      "source": "HITCON CTF",
      "type": "contest"
    },
    {
      "id": "security-ddl-pwn2own-entry-window-2026-09-29",
      "title": "Pwn2Own Entry Window",
      "deadline": "2026-09-29T23:59:59",
      "dateRange": "Sep 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "CTF",
        "security",
        "bug bounty"
      ],
      "url": "https://www.zerodayinitiative.com",
      "status": "upcoming",
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 crawler 抽取并校验。",
      "stage": "Source board",
      "source": "Zero Day Initiative",
      "type": "contest"
    },
    {
      "id": "security-ddl-black-hat-arsenal-submission-2026-10-17",
      "title": "Black Hat Arsenal Submission",
      "deadline": "2026-10-17T23:59:59",
      "dateRange": "Oct 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "CTF",
        "security",
        "bug bounty"
      ],
      "url": "https://www.blackhat.com",
      "status": "upcoming",
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 crawler 抽取并校验。",
      "stage": "Source board",
      "source": "Black Hat",
      "type": "contest"
    },
    {
      "id": "security-ddl-usenix-security-artifact-evaluation-2026-11-04",
      "title": "USENIX Security Artifact Evaluation",
      "deadline": "2026-11-04T23:59:59",
      "dateRange": "Nov 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "CTF",
        "security",
        "bug bounty"
      ],
      "url": "https://www.usenix.org/conferences",
      "status": "upcoming",
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 crawler 抽取并校验。",
      "stage": "Source board",
      "source": "USENIX Conferences",
      "type": "contest"
    },
    {
      "id": "security-ddl-blue-team-village-challenge-2026-11-22",
      "title": "Blue Team Village Challenge",
      "deadline": "2026-11-22T23:59:59",
      "dateRange": "Nov 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "CTF",
        "security",
        "bug bounty"
      ],
      "url": "https://ctftime.org",
      "status": "upcoming",
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 crawler 抽取并校验。",
      "stage": "Source board",
      "source": "ctftime.org",
      "type": "contest"
    },
    {
      "id": "security-ddl-bug-bounty-quarterly-review-2026-12-10",
      "title": "Bug Bounty Quarterly Review",
      "deadline": "2026-12-10T23:59:59",
      "dateRange": "Dec 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "CTF",
        "security",
        "bug bounty"
      ],
      "url": "https://hackerone.com/hacktivity",
      "status": "upcoming",
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 crawler 抽取并校验。",
      "stage": "Source board",
      "source": "HackerOne Hacktivity",
      "type": "contest"
    },
    {
      "id": "security-ddl-real-world-crypto-paper-2026-12-28",
      "title": "Real World Crypto Paper",
      "deadline": "2026-12-28T23:59:59",
      "dateRange": "Dec 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "CTF",
        "security",
        "bug bounty"
      ],
      "url": "https://rwc.iacr.org",
      "status": "upcoming",
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 crawler 抽取并校验。",
      "stage": "Source board",
      "source": "Real World Crypto",
      "type": "contest"
    },
    {
      "id": "security-ddl-s-p-workshop-paper-2027-01-15",
      "title": "S&P Workshop Paper",
      "deadline": "2027-01-15T23:59:59",
      "dateRange": "Jan 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "CTF",
        "security",
        "bug bounty"
      ],
      "url": "https://ctftime.org",
      "status": "upcoming",
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 crawler 抽取并校验。",
      "stage": "Source board",
      "source": "ctftime.org",
      "type": "contest"
    },
    {
      "id": "security-ddl-cyber-defense-exercise-registration-2027-02-02",
      "title": "Cyber Defense Exercise Registration",
      "deadline": "2027-02-02T23:59:59",
      "dateRange": "Feb 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "CTF",
        "security",
        "bug bounty"
      ],
      "url": "https://ctftime.org",
      "status": "upcoming",
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 crawler 抽取并校验。",
      "stage": "Source board",
      "source": "ctftime.org",
      "type": "contest"
    },
    {
      "id": "security-ddl-mobile-security-challenge-2027-02-20",
      "title": "Mobile Security Challenge",
      "deadline": "2027-02-20T23:59:59",
      "dateRange": "Feb 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "CTF",
        "security",
        "bug bounty"
      ],
      "url": "https://ctftime.org",
      "status": "upcoming",
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 crawler 抽取并校验。",
      "stage": "Source board",
      "source": "ctftime.org",
      "type": "contest"
    },
    {
      "id": "security-ddl-iot-security-testbed-sprint-2027-03-10",
      "title": "IoT Security Testbed Sprint",
      "deadline": "2027-03-10T23:59:59",
      "dateRange": "Mar 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "CTF",
        "security",
        "bug bounty"
      ],
      "url": "https://ctftime.org",
      "status": "upcoming",
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 crawler 抽取并校验。",
      "stage": "Source board",
      "source": "ctftime.org",
      "type": "contest"
    },
    {
      "id": "security-ddl-cloud-native-security-hackathon-2027-03-28",
      "title": "Cloud Native Security Hackathon",
      "deadline": "2027-03-28T23:59:59",
      "dateRange": "Mar 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "CTF",
        "security",
        "bug bounty"
      ],
      "url": "https://ctftime.org",
      "status": "upcoming",
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 crawler 抽取并校验。",
      "stage": "Source board",
      "source": "ctftime.org",
      "type": "contest"
    }
  ],
  "data-science-ddl": [
    {
      "id": "drivendata-297-whats-up-docs",
      "title": "What's Up, Docs? Document Summarization with LLMs",
      "deadline": "2027-04-01T23:59:00Z",
      "dateRange": "April 1, 2027, 11:59 p.m. UTC",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "data science",
        "competition",
        "DrivenData",
        "development",
        "science"
      ],
      "url": "https://www.drivendata.org/competitions/297/whats-up-docs/",
      "status": "upcoming",
      "description": "Parsed from official DrivenData listing. Deadline is read from the card end-date tooltip.",
      "stage": "Deadline",
      "source": "DrivenData Competitions",
      "type": "challenge"
    },
    {
      "id": "drivendata-66-flu-shot-learning",
      "title": "Flu Shot Learning: Predict H1N1 and Seasonal Flu Vaccines",
      "deadline": "2027-07-30T23:59:00Z",
      "dateRange": "July 30, 2027, 11:59 p.m. UTC",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "data science",
        "competition",
        "DrivenData",
        "health"
      ],
      "url": "https://www.drivendata.org/competitions/66/flu-shot-learning/",
      "status": "upcoming",
      "description": "Parsed from official DrivenData listing. Deadline is read from the card end-date tooltip.",
      "stage": "Deadline",
      "source": "DrivenData Competitions",
      "type": "challenge"
    },
    {
      "id": "drivendata-87-competition-image-classification-wildlife-conservation",
      "title": "Conser-vision Practice Area: Image Classification",
      "deadline": "2027-10-05T23:59:00Z",
      "dateRange": "Oct. 5, 2027, 11:59 p.m. UTC",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "data science",
        "competition",
        "DrivenData",
        "climate"
      ],
      "url": "https://www.drivendata.org/competitions/87/competition-image-classification-wildlife-conservation/",
      "status": "upcoming",
      "description": "Parsed from official DrivenData listing. Deadline is read from the card end-date tooltip.",
      "stage": "Deadline",
      "source": "DrivenData Competitions",
      "type": "challenge"
    },
    {
      "id": "drivendata-44-dengai-predicting-disease-spread",
      "title": "DengAI: Predicting Disease Spread",
      "deadline": "2027-10-05T23:59:00Z",
      "dateRange": "Oct. 5, 2027, 11:59 p.m. UTC",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "data science",
        "competition",
        "DrivenData",
        "health"
      ],
      "url": "https://www.drivendata.org/competitions/44/dengai-predicting-disease-spread/",
      "status": "upcoming",
      "description": "Parsed from official DrivenData listing. Deadline is read from the card end-date tooltip.",
      "stage": "Deadline",
      "source": "DrivenData Competitions",
      "type": "challenge"
    },
    {
      "id": "drivendata-7-pump-it-up-data-mining-the-water-table",
      "title": "Pump it Up: Data Mining the Water Table",
      "deadline": "2027-10-05T23:59:00Z",
      "dateRange": "Oct. 5, 2027, 11:59 p.m. UTC",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "data science",
        "competition",
        "DrivenData",
        "development"
      ],
      "url": "https://www.drivendata.org/competitions/7/pump-it-up-data-mining-the-water-table/",
      "status": "upcoming",
      "description": "Parsed from official DrivenData listing. Deadline is read from the card end-date tooltip.",
      "stage": "Deadline",
      "source": "DrivenData Competitions",
      "type": "challenge"
    },
    {
      "id": "drivendata-57-nepal-earthquake",
      "title": "Richter's Predictor: Modeling Earthquake Damage",
      "deadline": "2027-10-05T23:59:00Z",
      "dateRange": "Oct. 5, 2027, 11:59 p.m. UTC",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "data science",
        "competition",
        "DrivenData",
        "disasters"
      ],
      "url": "https://www.drivendata.org/competitions/57/nepal-earthquake/",
      "status": "upcoming",
      "description": "Parsed from official DrivenData listing. Deadline is read from the card end-date tooltip.",
      "stage": "Deadline",
      "source": "DrivenData Competitions",
      "type": "challenge"
    }
  ],
  "open-source-ddl": [
    {
      "id": "open-source-ddl-google-summer-of-code-org-application-2026-07-01",
      "title": "Google Summer of Code Org Application",
      "deadline": "2026-07-01T23:59:59",
      "dateRange": "Jul 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "GSoC",
        "OSPP",
        "LFX"
      ],
      "url": "https://summerofcode.withgoogle.com",
      "status": "upcoming",
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 crawler 抽取并校验。",
      "stage": "Source board",
      "source": "Google Summer of Code",
      "type": "program"
    },
    {
      "id": "open-source-ddl-google-summer-of-code-contributor-application-2026-07-19",
      "title": "Google Summer of Code Contributor Application",
      "deadline": "2026-07-19T23:59:59",
      "dateRange": "Jul 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "GSoC",
        "OSPP",
        "LFX"
      ],
      "url": "https://summerofcode.withgoogle.com",
      "status": "upcoming",
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 crawler 抽取并校验。",
      "stage": "Source board",
      "source": "Google Summer of Code",
      "type": "program"
    },
    {
      "id": "open-source-ddl-open-source-promotion-plan-application-2026-08-06",
      "title": "Open Source Promotion Plan Application",
      "deadline": "2026-08-06T23:59:59",
      "dateRange": "Aug 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "GSoC",
        "OSPP",
        "LFX"
      ],
      "url": "https://summer-ospp.ac.cn",
      "status": "upcoming",
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 crawler 抽取并校验。",
      "stage": "Source board",
      "source": "开源之夏",
      "type": "program"
    },
    {
      "id": "open-source-ddl-lfx-mentorship-spring-2026-08-24",
      "title": "LFX Mentorship Spring",
      "deadline": "2026-08-24T23:59:59",
      "dateRange": "Aug 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "GSoC",
        "OSPP",
        "LFX"
      ],
      "url": "https://lfx.linuxfoundation.org/tools/mentorship/",
      "status": "upcoming",
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 crawler 抽取并校验。",
      "stage": "Source board",
      "source": "LFX Mentorship",
      "type": "program"
    },
    {
      "id": "open-source-ddl-outreachy-internship-application-2026-09-11",
      "title": "Outreachy Internship Application",
      "deadline": "2026-09-11T23:59:59",
      "dateRange": "Sep 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "GSoC",
        "OSPP",
        "LFX"
      ],
      "url": "https://www.outreachy.org",
      "status": "upcoming",
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 crawler 抽取并校验。",
      "stage": "Source board",
      "source": "Outreachy",
      "type": "program"
    },
    {
      "id": "open-source-ddl-rails-girls-summer-of-code-2026-09-29",
      "title": "Rails Girls Summer of Code",
      "deadline": "2026-09-29T23:59:59",
      "dateRange": "Sep 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "GSoC",
        "OSPP",
        "LFX"
      ],
      "url": "https://summerofcode.withgoogle.com",
      "status": "upcoming",
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 crawler 抽取并校验。",
      "stage": "Source board",
      "source": "summerofcode.withgoogle.com",
      "type": "program"
    },
    {
      "id": "open-source-ddl-numfocus-small-development-grants-2026-10-17",
      "title": "NumFOCUS Small Development Grants",
      "deadline": "2026-10-17T23:59:59",
      "dateRange": "Oct 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "GSoC",
        "OSPP",
        "LFX"
      ],
      "url": "https://numfocus.org/programs/small-development-grants",
      "status": "upcoming",
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 crawler 抽取并校验。",
      "stage": "Source board",
      "source": "NumFOCUS Grants",
      "type": "program"
    },
    {
      "id": "open-source-ddl-mozilla-builders-incubator-2026-11-04",
      "title": "Mozilla Builders Incubator",
      "deadline": "2026-11-04T23:59:59",
      "dateRange": "Nov 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "GSoC",
        "OSPP",
        "LFX"
      ],
      "url": "https://summerofcode.withgoogle.com",
      "status": "upcoming",
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 crawler 抽取并校验。",
      "stage": "Source board",
      "source": "summerofcode.withgoogle.com",
      "type": "program"
    },
    {
      "id": "open-source-ddl-hacktoberfest-maintainer-prep-2026-11-22",
      "title": "Hacktoberfest Maintainer Prep",
      "deadline": "2026-11-22T23:59:59",
      "dateRange": "Nov 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "GSoC",
        "OSPP",
        "LFX"
      ],
      "url": "https://summerofcode.withgoogle.com",
      "status": "upcoming",
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 crawler 抽取并校验。",
      "stage": "Source board",
      "source": "summerofcode.withgoogle.com",
      "type": "program"
    },
    {
      "id": "open-source-ddl-cncf-mentoring-program-2026-12-10",
      "title": "CNCF Mentoring Program",
      "deadline": "2026-12-10T23:59:59",
      "dateRange": "Dec 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "GSoC",
        "OSPP",
        "LFX"
      ],
      "url": "https://github.com/cncf/mentoring",
      "status": "upcoming",
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 crawler 抽取并校验。",
      "stage": "Source board",
      "source": "CNCF Mentoring",
      "type": "program"
    },
    {
      "id": "open-source-ddl-apache-community-over-code-cfp-2026-12-28",
      "title": "Apache Community Over Code CFP",
      "deadline": "2026-12-28T23:59:59",
      "dateRange": "Dec 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "GSoC",
        "OSPP",
        "LFX"
      ],
      "url": "https://communityovercode.org",
      "status": "upcoming",
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 crawler 抽取并校验。",
      "stage": "Source board",
      "source": "Apache Community Over Code",
      "type": "program"
    },
    {
      "id": "open-source-ddl-pycon-open-spaces-proposal-2027-01-15",
      "title": "PyCon Open Spaces Proposal",
      "deadline": "2027-01-15T23:59:59",
      "dateRange": "Jan 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "GSoC",
        "OSPP",
        "LFX"
      ],
      "url": "https://us.pycon.org",
      "status": "upcoming",
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 crawler 抽取并校验。",
      "stage": "Source board",
      "source": "PyCon US",
      "type": "program"
    },
    {
      "id": "open-source-ddl-openjs-collaborator-summit-cfp-2027-02-02",
      "title": "OpenJS Collaborator Summit CFP",
      "deadline": "2027-02-02T23:59:59",
      "dateRange": "Feb 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "GSoC",
        "OSPP",
        "LFX"
      ],
      "url": "https://summerofcode.withgoogle.com",
      "status": "upcoming",
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 crawler 抽取并校验。",
      "stage": "Source board",
      "source": "summerofcode.withgoogle.com",
      "type": "program"
    },
    {
      "id": "open-source-ddl-rust-project-fellowship-window-2027-02-20",
      "title": "Rust Project Fellowship Window",
      "deadline": "2027-02-20T23:59:59",
      "dateRange": "Feb 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "GSoC",
        "OSPP",
        "LFX"
      ],
      "url": "https://summerofcode.withgoogle.com",
      "status": "upcoming",
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 crawler 抽取并校验。",
      "stage": "Source board",
      "source": "summerofcode.withgoogle.com",
      "type": "program"
    },
    {
      "id": "open-source-ddl-openssf-security-tooling-grant-2027-03-10",
      "title": "OpenSSF Security Tooling Grant",
      "deadline": "2027-03-10T23:59:59",
      "dateRange": "Mar 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "GSoC",
        "OSPP",
        "LFX"
      ],
      "url": "https://openssf.org",
      "status": "upcoming",
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 crawler 抽取并校验。",
      "stage": "Source board",
      "source": "OpenSSF",
      "type": "program"
    },
    {
      "id": "open-source-ddl-fossasia-summit-cfp-2027-03-28",
      "title": "FOSSASIA Summit CFP",
      "deadline": "2027-03-28T23:59:59",
      "dateRange": "Mar 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "GSoC",
        "OSPP",
        "LFX"
      ],
      "url": "https://summit.fossasia.org",
      "status": "upcoming",
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 crawler 抽取并校验。",
      "stage": "Source board",
      "source": "FOSSASIA Summit",
      "type": "program"
    }
  ],
  "robotics-ddl": [
    {
      "id": "aicity-2026-registration-opens",
      "title": "AI City Challenge 2026 - Registration opens",
      "deadline": "2026-05-18T23:59:59Z",
      "dateRange": "May 18, 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "robotics",
        "autonomous",
        "smart city",
        "AI City"
      ],
      "url": "https://www.aicitychallenge.org",
      "status": "upcoming",
      "description": "Parsed from official AI City Challenge page.",
      "stage": "Registration",
      "source": "AI City Challenge",
      "type": "challenge"
    },
    {
      "id": "aicity-2026-release-of-evaluation-server-and-test-data-sets-may-18-2026",
      "title": "AI City Challenge 2026 - Release of evaluation server and test data sets",
      "deadline": "2026-05-18T23:59:59Z",
      "dateRange": "May 18, 2026",
      "location": "Online / CVPR workshop",
      "isOnline": true,
      "tags": [
        "robotics",
        "autonomous",
        "smart city",
        "AI City"
      ],
      "url": "https://www.aicitychallenge.org",
      "status": "upcoming",
      "description": "Parsed from official AI City Challenge Important Dates section.",
      "stage": "Milestone",
      "source": "AI City Challenge",
      "type": "challenge"
    },
    {
      "id": "aicity-2026-challenge-track-submissions-due-july-10-2026",
      "title": "AI City Challenge 2026 - Challenge track submissions due",
      "deadline": "2026-07-10T23:59:59Z",
      "dateRange": "July 10, 2026",
      "location": "Online / CVPR workshop",
      "isOnline": true,
      "tags": [
        "robotics",
        "autonomous",
        "smart city",
        "AI City"
      ],
      "url": "https://www.aicitychallenge.org",
      "status": "upcoming",
      "description": "Parsed from official AI City Challenge Important Dates section.",
      "stage": "Deadline",
      "source": "AI City Challenge",
      "type": "challenge"
    },
    {
      "id": "aicity-2026-anywhere-on-earth-workshop-papers-due-july-24-2026",
      "title": "AI City Challenge 2026 - (Anywhere on Earth) Workshop papers due",
      "deadline": "2026-07-24T23:59:59Z",
      "dateRange": "July 24, 2026",
      "location": "Online / CVPR workshop",
      "isOnline": true,
      "tags": [
        "robotics",
        "autonomous",
        "smart city",
        "AI City"
      ],
      "url": "https://www.aicitychallenge.org",
      "status": "upcoming",
      "description": "Parsed from official AI City Challenge Important Dates section.",
      "stage": "Deadline",
      "source": "AI City Challenge",
      "type": "challenge"
    },
    {
      "id": "aicity-2026-anywhere-on-earth-acceptance-notification-august-1-2026",
      "title": "AI City Challenge 2026 - (Anywhere on Earth) Acceptance notification",
      "deadline": "2026-08-01T23:59:59Z",
      "dateRange": "August 1, 2026",
      "location": "Online / CVPR workshop",
      "isOnline": true,
      "tags": [
        "robotics",
        "autonomous",
        "smart city",
        "AI City"
      ],
      "url": "https://www.aicitychallenge.org",
      "status": "upcoming",
      "description": "Parsed from official AI City Challenge Important Dates section.",
      "stage": "Milestone",
      "source": "AI City Challenge",
      "type": "challenge"
    },
    {
      "id": "aicity-2026-open-source-by-awards-candidates-due-august-7-2026",
      "title": "AI City Challenge 2026 - Open source by awards candidates due",
      "deadline": "2026-08-07T23:59:59Z",
      "dateRange": "August 7, 2026",
      "location": "Online / CVPR workshop",
      "isOnline": true,
      "tags": [
        "robotics",
        "autonomous",
        "smart city",
        "AI City"
      ],
      "url": "https://www.aicitychallenge.org",
      "status": "upcoming",
      "description": "Parsed from official AI City Challenge Important Dates section.",
      "stage": "Deadline",
      "source": "AI City Challenge",
      "type": "challenge"
    },
    {
      "id": "aicity-2026-anywhere-on-earth-camera-ready-papers-due-august-15-2026",
      "title": "AI City Challenge 2026 - (Anywhere on Earth) Camera-ready papers due",
      "deadline": "2026-08-15T23:59:59Z",
      "dateRange": "August 15, 2026",
      "location": "Online / CVPR workshop",
      "isOnline": true,
      "tags": [
        "robotics",
        "autonomous",
        "smart city",
        "AI City"
      ],
      "url": "https://www.aicitychallenge.org",
      "status": "upcoming",
      "description": "Parsed from official AI City Challenge Important Dates section.",
      "stage": "Deadline",
      "source": "AI City Challenge",
      "type": "challenge"
    },
    {
      "id": "aicity-2026-presentation-of-papers-and-announcement-of-awards-at-eccv-2026-september-8-9-2026",
      "title": "AI City Challenge 2026 - Presentation of papers and announcement of awards at ECCV 2026",
      "deadline": "2026-09-09T23:59:59Z",
      "dateRange": "September 8/9, 2026",
      "location": "Online / CVPR workshop",
      "isOnline": true,
      "tags": [
        "robotics",
        "autonomous",
        "smart city",
        "AI City"
      ],
      "url": "https://www.aicitychallenge.org",
      "status": "upcoming",
      "description": "Parsed from official AI City Challenge Important Dates section.",
      "stage": "Milestone",
      "source": "AI City Challenge",
      "type": "challenge"
    }
  ],
  "startup-ddl": [
    {
      "id": "techstars-abn-amro-techstars-future-of-finance-accelerator",
      "title": "ABN AMRO + Techstars Future of Finance Accelerator",
      "deadline": "2026-06-10T23:59:59Z",
      "dateRange": "Apply by Jun 10",
      "location": "Amsterdam, Netherlands",
      "isOnline": false,
      "tags": [
        "startup",
        "accelerator",
        "Techstars"
      ],
      "url": "https://www.techstars.com/accelerators/abn-amro-techstars-future-of-finance-accelerator",
      "status": "upcoming",
      "description": "Parsed from official Techstars accelerators listing. Deadline is read from the Apply by card and embedded earliestCurrentDeadline.",
      "stage": "Application deadline",
      "source": "Techstars Accelerators",
      "type": "program"
    },
    {
      "id": "techstars-baltimore-ai-health",
      "title": "Techstars AI Health Baltimore",
      "deadline": "2026-06-10T23:59:59Z",
      "dateRange": "Apply by Jun 10",
      "location": "Baltimore, United States",
      "isOnline": false,
      "tags": [
        "startup",
        "accelerator",
        "Techstars"
      ],
      "url": "https://www.techstars.com/accelerators/baltimore-ai-health",
      "status": "upcoming",
      "description": "Parsed from official Techstars accelerators listing. Deadline is read from the Apply by card and embedded earliestCurrentDeadline.",
      "stage": "Application deadline",
      "source": "Techstars Accelerators",
      "type": "program"
    },
    {
      "id": "techstars-alabama-power",
      "title": "Techstars Alabama EnergyTech Accelerator",
      "deadline": "2026-06-10T23:59:59Z",
      "dateRange": "Apply by Jun 10",
      "location": "Birmingham, Alabama",
      "isOnline": false,
      "tags": [
        "startup",
        "accelerator",
        "Techstars"
      ],
      "url": "https://www.techstars.com/accelerators/alabama-power",
      "status": "upcoming",
      "description": "Parsed from official Techstars accelerators listing. Deadline is read from the Apply by card and embedded earliestCurrentDeadline.",
      "stage": "Application deadline",
      "source": "Techstars Accelerators",
      "type": "program"
    },
    {
      "id": "techstars-anywhere",
      "title": "Techstars Anywhere Accelerator",
      "deadline": "2026-06-10T23:59:59Z",
      "dateRange": "Apply by Jun 10",
      "location": "Anywhere",
      "isOnline": true,
      "tags": [
        "startup",
        "accelerator",
        "Techstars"
      ],
      "url": "https://www.techstars.com/accelerators/anywhere",
      "status": "upcoming",
      "description": "Parsed from official Techstars accelerators listing. Deadline is read from the Apply by card and embedded earliestCurrentDeadline.",
      "stage": "Application deadline",
      "source": "Techstars Accelerators",
      "type": "program"
    },
    {
      "id": "techstars-boulder-accelerator",
      "title": "Techstars Boulder",
      "deadline": "2026-06-10T23:59:59Z",
      "dateRange": "Apply by Jun 10",
      "location": "Boulder, United States",
      "isOnline": false,
      "tags": [
        "startup",
        "accelerator",
        "Techstars"
      ],
      "url": "https://www.techstars.com/accelerators/boulder-accelerator",
      "status": "upcoming",
      "description": "Parsed from official Techstars accelerators listing. Deadline is read from the Apply by card and embedded earliestCurrentDeadline.",
      "stage": "Application deadline",
      "source": "Techstars Accelerators",
      "type": "program"
    },
    {
      "id": "techstars-ohio-state-university-accelerator",
      "title": "Techstars Columbus Powered by The Ohio State University",
      "deadline": "2026-06-10T23:59:59Z",
      "dateRange": "Apply by Jun 10",
      "location": "Columbus, United States",
      "isOnline": false,
      "tags": [
        "startup",
        "accelerator",
        "Techstars"
      ],
      "url": "https://www.techstars.com/accelerators/ohio-state-university-accelerator",
      "status": "upcoming",
      "description": "Parsed from official Techstars accelerators listing. Deadline is read from the Apply by card and embedded earliestCurrentDeadline.",
      "stage": "Application deadline",
      "source": "Techstars Accelerators",
      "type": "program"
    },
    {
      "id": "techstars-future-of-food",
      "title": "Techstars Future of Food Powered by Ecolab",
      "deadline": "2026-06-10T23:59:59Z",
      "dateRange": "Apply by Jun 10",
      "location": "Minneapolis, Minnesota",
      "isOnline": false,
      "tags": [
        "startup",
        "accelerator",
        "Techstars"
      ],
      "url": "https://www.techstars.com/accelerators/future-of-food",
      "status": "upcoming",
      "description": "Parsed from official Techstars accelerators listing. Deadline is read from the Apply by card and embedded earliestCurrentDeadline.",
      "stage": "Application deadline",
      "source": "Techstars Accelerators",
      "type": "program"
    },
    {
      "id": "techstars-permanente-medicine",
      "title": "Techstars Healthcare Accelerator powered by Permanente Medicine Mid-Atlantic States",
      "deadline": "2026-06-10T23:59:59Z",
      "dateRange": "Apply by Jun 10",
      "location": "Washington D.C.",
      "isOnline": false,
      "tags": [
        "startup",
        "accelerator",
        "Techstars"
      ],
      "url": "https://www.techstars.com/accelerators/permanente-medicine",
      "status": "upcoming",
      "description": "Parsed from official Techstars accelerators listing. Deadline is read from the Apply by card and embedded earliestCurrentDeadline.",
      "stage": "Application deadline",
      "source": "Techstars Accelerators",
      "type": "program"
    },
    {
      "id": "techstars-nyc",
      "title": "Techstars New York City Accelerator",
      "deadline": "2026-06-10T23:59:59Z",
      "dateRange": "Apply by Jun 10",
      "location": "New York, New York",
      "isOnline": false,
      "tags": [
        "startup",
        "accelerator",
        "Techstars"
      ],
      "url": "https://www.techstars.com/accelerators/nyc",
      "status": "upcoming",
      "description": "Parsed from official Techstars accelerators listing. Deadline is read from the Apply by card and embedded earliestCurrentDeadline.",
      "stage": "Application deadline",
      "source": "Techstars Accelerators",
      "type": "program"
    },
    {
      "id": "techstars-space",
      "title": "Techstars Space Accelerator",
      "deadline": "2026-06-10T23:59:59Z",
      "dateRange": "Apply by Jun 10",
      "location": "Los Angeles, California",
      "isOnline": false,
      "tags": [
        "startup",
        "accelerator",
        "Techstars"
      ],
      "url": "https://www.techstars.com/accelerators/space",
      "status": "upcoming",
      "description": "Parsed from official Techstars accelerators listing. Deadline is read from the Apply by card and embedded earliestCurrentDeadline.",
      "stage": "Application deadline",
      "source": "Techstars Accelerators",
      "type": "program"
    }
  ],
  "design-ddl": [
    {
      "id": "uxda-autumn-2026-submission-period-deadline",
      "title": "UX Design Awards Autumn 2026 - Submission period deadline",
      "deadline": "2026-05-18T23:59:59Z",
      "dateRange": "18 May 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "UX",
        "design",
        "award",
        "Autumn"
      ],
      "url": "https://ux-design-awards.com/enter/dates",
      "status": "upcoming",
      "description": "Parsed from official UX Design Awards Dates page.",
      "stage": "Deadline",
      "source": "UX Design Awards",
      "type": "contest"
    },
    {
      "id": "uxda-autumn-2026-nomination-review-closes",
      "title": "UX Design Awards Autumn 2026 - Nomination review closes",
      "deadline": "2026-05-31T23:59:59Z",
      "dateRange": "31 May 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "UX",
        "design",
        "award",
        "Autumn"
      ],
      "url": "https://ux-design-awards.com/enter/dates",
      "status": "upcoming",
      "description": "Parsed from official UX Design Awards Dates page.",
      "stage": "Milestone",
      "source": "UX Design Awards",
      "type": "contest"
    },
    {
      "id": "uxda-autumn-2026-notification-of-nominees",
      "title": "UX Design Awards Autumn 2026 - Notification of nominees",
      "deadline": "2026-06-02T23:59:59Z",
      "dateRange": "2 June 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "UX",
        "design",
        "award",
        "Autumn"
      ],
      "url": "https://ux-design-awards.com/enter/dates",
      "status": "upcoming",
      "description": "Parsed from official UX Design Awards Dates page.",
      "stage": "Milestone",
      "source": "UX Design Awards",
      "type": "contest"
    },
    {
      "id": "uxda-autumn-2026-public-nominee-announcement",
      "title": "UX Design Awards Autumn 2026 - Public nominee announcement",
      "deadline": "2026-07-07T23:59:59Z",
      "dateRange": "7 July 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "UX",
        "design",
        "award",
        "Autumn"
      ],
      "url": "https://ux-design-awards.com/enter/dates",
      "status": "upcoming",
      "description": "Parsed from official UX Design Awards Dates page.",
      "stage": "Milestone",
      "source": "UX Design Awards",
      "type": "contest"
    },
    {
      "id": "uxda-autumn-2026-public-choice-award-voting-closes",
      "title": "UX Design Awards Autumn 2026 - Public Choice Award voting closes",
      "deadline": "2026-08-21T23:59:59Z",
      "dateRange": "21 August 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "UX",
        "design",
        "award",
        "Autumn"
      ],
      "url": "https://ux-design-awards.com/enter/dates",
      "status": "upcoming",
      "description": "Parsed from official UX Design Awards Dates page.",
      "stage": "Deadline",
      "source": "UX Design Awards",
      "type": "contest"
    },
    {
      "id": "uxda-autumn-2026-winner-announcement",
      "title": "UX Design Awards Autumn 2026 - Winner announcement",
      "deadline": "2026-09-02T23:59:59Z",
      "dateRange": "2 September 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "UX",
        "design",
        "award",
        "Autumn"
      ],
      "url": "https://ux-design-awards.com/enter/dates",
      "status": "upcoming",
      "description": "Parsed from official UX Design Awards Dates page.",
      "stage": "Milestone",
      "source": "UX Design Awards",
      "type": "contest"
    },
    {
      "id": "uxda-autumn-2027-call-for-participation-closes",
      "title": "UX Design Awards Autumn 2027 - Call for participation closes",
      "deadline": "2026-11-15T23:59:59Z",
      "dateRange": "15 November 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "UX",
        "design",
        "award",
        "Autumn"
      ],
      "url": "https://ux-design-awards.com/enter/dates",
      "status": "upcoming",
      "description": "Parsed from official UX Design Awards Dates page.",
      "stage": "Deadline",
      "source": "UX Design Awards",
      "type": "contest"
    }
  ],
  "exam-ddl": [
    {
      "id": "exam-ddl-item-2026-07-01",
      "title": "全国硕士研究生考试预报名提醒",
      "deadline": "2026-07-01T23:59:59",
      "dateRange": "Jul 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "exam",
        "certificate",
        "registration"
      ],
      "url": "https://yz.chsi.com.cn",
      "status": "upcoming",
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 crawler 抽取并校验。",
      "stage": "Source board",
      "source": "yz.chsi.com.cn",
      "type": "program"
    },
    {
      "id": "exam-ddl-item-2026-07-19",
      "title": "全国硕士研究生考试正式报名提醒",
      "deadline": "2026-07-19T23:59:59",
      "dateRange": "Jul 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "exam",
        "certificate",
        "registration"
      ],
      "url": "https://yz.chsi.com.cn",
      "status": "upcoming",
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 crawler 抽取并校验。",
      "stage": "Source board",
      "source": "yz.chsi.com.cn",
      "type": "program"
    },
    {
      "id": "exam-ddl-item-2026-08-06",
      "title": "大学英语四六级报名窗口",
      "deadline": "2026-08-06T23:59:59",
      "dateRange": "Aug 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "exam",
        "certificate",
        "registration"
      ],
      "url": "https://cet.neea.edu.cn",
      "status": "upcoming",
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 crawler 抽取并校验。",
      "stage": "Source board",
      "source": "cet.neea.edu.cn",
      "type": "program"
    },
    {
      "id": "exam-ddl-item-2026-08-24",
      "title": "雅思考试报名提醒",
      "deadline": "2026-08-24T23:59:59",
      "dateRange": "Aug 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "exam",
        "certificate",
        "registration"
      ],
      "url": "https://ielts.neea.cn",
      "status": "upcoming",
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 crawler 抽取并校验。",
      "stage": "Source board",
      "source": "ielts.neea.cn",
      "type": "program"
    },
    {
      "id": "exam-ddl-item-2026-09-11",
      "title": "托福考试报名提醒",
      "deadline": "2026-09-11T23:59:59",
      "dateRange": "Sep 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "exam",
        "certificate",
        "registration"
      ],
      "url": "https://toefl.neea.cn",
      "status": "upcoming",
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 crawler 抽取并校验。",
      "stage": "Source board",
      "source": "toefl.neea.cn",
      "type": "program"
    },
    {
      "id": "exam-ddl-gre-general-test-planning-2026-09-29",
      "title": "GRE General Test Planning",
      "deadline": "2026-09-29T23:59:59",
      "dateRange": "Sep 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "exam",
        "certificate",
        "registration"
      ],
      "url": "https://www.ets.org/gre.html",
      "status": "upcoming",
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 crawler 抽取并校验。",
      "stage": "Source board",
      "source": "ETS GRE",
      "type": "program"
    },
    {
      "id": "exam-ddl-gmat-focus-exam-planning-2026-10-17",
      "title": "GMAT Focus Exam Planning",
      "deadline": "2026-10-17T23:59:59",
      "dateRange": "Oct 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "exam",
        "certificate",
        "registration"
      ],
      "url": "https://www.mba.com/exams/gmat-exam",
      "status": "upcoming",
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 crawler 抽取并校验。",
      "stage": "Source board",
      "source": "GMAC GMAT",
      "type": "program"
    },
    {
      "id": "exam-ddl-item-2026-11-04",
      "title": "国家公务员考试报名提醒",
      "deadline": "2026-11-04T23:59:59",
      "dateRange": "Nov 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "exam",
        "certificate",
        "registration"
      ],
      "url": "https://bm.scs.gov.cn",
      "status": "upcoming",
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 crawler 抽取并校验。",
      "stage": "Source board",
      "source": "中国政府网",
      "type": "program"
    },
    {
      "id": "exam-ddl-item-2026-11-22",
      "title": "教师资格证笔试报名",
      "deadline": "2026-11-22T23:59:59",
      "dateRange": "Nov 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "exam",
        "certificate",
        "registration"
      ],
      "url": "https://ntce.neea.edu.cn",
      "status": "upcoming",
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 crawler 抽取并校验。",
      "stage": "Source board",
      "source": "ntce.neea.edu.cn",
      "type": "program"
    },
    {
      "id": "exam-ddl-item-2026-12-10",
      "title": "计算机等级考试报名",
      "deadline": "2026-12-10T23:59:59",
      "dateRange": "Dec 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "exam",
        "certificate",
        "registration"
      ],
      "url": "https://ncre.neea.edu.cn",
      "status": "upcoming",
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 crawler 抽取并校验。",
      "stage": "Source board",
      "source": "ncre.neea.edu.cn",
      "type": "program"
    },
    {
      "id": "exam-ddl-item-2026-12-28",
      "title": "软考报名窗口",
      "deadline": "2026-12-28T23:59:59",
      "dateRange": "Dec 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "exam",
        "certificate",
        "registration"
      ],
      "url": "https://www.ruankao.org.cn",
      "status": "upcoming",
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 crawler 抽取并校验。",
      "stage": "Source board",
      "source": "ruankao.org.cn",
      "type": "program"
    },
    {
      "id": "exam-ddl-item-2027-01-15",
      "title": "注册会计师考试报名",
      "deadline": "2027-01-15T23:59:59",
      "dateRange": "Jan 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "exam",
        "certificate",
        "registration"
      ],
      "url": "https://cpaexam.cicpa.org.cn",
      "status": "upcoming",
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 crawler 抽取并校验。",
      "stage": "Source board",
      "source": "cpaexam.cicpa.org.cn",
      "type": "program"
    },
    {
      "id": "exam-ddl-item-2027-02-02",
      "title": "法考客观题报名",
      "deadline": "2027-02-02T23:59:59",
      "dateRange": "Feb 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "exam",
        "certificate",
        "registration"
      ],
      "url": "https://www.moj.gov.cn",
      "status": "upcoming",
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 crawler 抽取并校验。",
      "stage": "Source board",
      "source": "中国政府网",
      "type": "program"
    },
    {
      "id": "exam-ddl-aws-certification-voucher-window-2027-02-20",
      "title": "AWS Certification Voucher Window",
      "deadline": "2027-02-20T23:59:59",
      "dateRange": "Feb 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "exam",
        "certificate",
        "registration"
      ],
      "url": "https://aws.amazon.com/certification/",
      "status": "upcoming",
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 crawler 抽取并校验。",
      "stage": "Source board",
      "source": "AWS Certification",
      "type": "program"
    },
    {
      "id": "exam-ddl-pmp-exam-application-window-2027-03-10",
      "title": "PMP Exam Application Window",
      "deadline": "2027-03-10T23:59:59",
      "dateRange": "Mar 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "exam",
        "certificate",
        "registration"
      ],
      "url": "https://www.pmi.org/certifications/project-management-pmp",
      "status": "upcoming",
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 crawler 抽取并校验。",
      "stage": "Source board",
      "source": "PMI PMP Certification",
      "type": "program"
    },
    {
      "id": "exam-ddl-cfa-exam-registration-deadline-2027-03-28",
      "title": "CFA Exam Registration Deadline",
      "deadline": "2027-03-28T23:59:59",
      "dateRange": "Mar 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "exam",
        "certificate",
        "registration"
      ],
      "url": "https://www.cfainstitute.org",
      "status": "upcoming",
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 crawler 抽取并校验。",
      "stage": "Source board",
      "source": "CFA Institute",
      "type": "program"
    }
  ],
  "scholarship-ddl": [
    {
      "id": "chevening-offer-deadline-9-july-2026",
      "title": "Chevening - Offer deadline",
      "deadline": "2026-07-09T23:59:59Z",
      "dateRange": "9 July 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "scholarship",
        "Chevening",
        "UK"
      ],
      "url": "https://www.chevening.org/scholarships/application-timeline/",
      "status": "upcoming",
      "description": "Parsed from the official Chevening application timeline.",
      "stage": "Offer deadline",
      "source": "Chevening Scholarships",
      "type": "program"
    }
  ],
  "game-dev-ddl": [
    {
      "id": "game-dev-ddl-global-game-jam-site-registration-2026-07-01",
      "title": "Global Game Jam Site Registration",
      "deadline": "2026-07-01T23:59:59",
      "dateRange": "Jul 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "game jam",
        "indie game",
        "Unity"
      ],
      "url": "https://globalgamejam.org",
      "status": "upcoming",
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 crawler 抽取并校验。",
      "stage": "Source board",
      "source": "Global Game Jam",
      "type": "contest"
    },
    {
      "id": "game-dev-ddl-ludum-dare-60-2026-07-19",
      "title": "Ludum Dare 60",
      "deadline": "2026-07-19T23:59:59",
      "dateRange": "Jul 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "game jam",
        "indie game",
        "Unity"
      ],
      "url": "https://ldjam.com",
      "status": "upcoming",
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 crawler 抽取并校验。",
      "stage": "Source board",
      "source": "Ludum Dare",
      "type": "contest"
    },
    {
      "id": "game-dev-ddl-gmtk-game-jam-2026-08-06",
      "title": "GMTK Game Jam",
      "deadline": "2026-08-06T23:59:59",
      "dateRange": "Aug 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "game jam",
        "indie game",
        "Unity"
      ],
      "url": "https://itch.io/jams",
      "status": "upcoming",
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 crawler 抽取并校验。",
      "stage": "Source board",
      "source": "itch.io Jams",
      "type": "contest"
    },
    {
      "id": "game-dev-ddl-itch-io-brackeys-game-jam-2026-08-24",
      "title": "itch.io Brackeys Game Jam",
      "deadline": "2026-08-24T23:59:59",
      "dateRange": "Aug 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "game jam",
        "indie game",
        "Unity"
      ],
      "url": "https://itch.io/jams",
      "status": "upcoming",
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 crawler 抽取并校验。",
      "stage": "Source board",
      "source": "itch.io Jams",
      "type": "contest"
    },
    {
      "id": "game-dev-ddl-independent-games-festival-submission-2026-09-11",
      "title": "Independent Games Festival Submission",
      "deadline": "2026-09-11T23:59:59",
      "dateRange": "Sep 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "game jam",
        "indie game",
        "Unity"
      ],
      "url": "https://igf.com",
      "status": "upcoming",
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 crawler 抽取并校验。",
      "stage": "Source board",
      "source": "Independent Games Festival",
      "type": "contest"
    },
    {
      "id": "game-dev-ddl-student-game-competition-entry-2026-09-29",
      "title": "Student Game Competition Entry",
      "deadline": "2026-09-29T23:59:59",
      "dateRange": "Sep 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "game jam",
        "indie game",
        "Unity"
      ],
      "url": "https://itch.io/jams",
      "status": "upcoming",
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 crawler 抽取并校验。",
      "stage": "Source board",
      "source": "itch.io",
      "type": "contest"
    },
    {
      "id": "game-dev-ddl-unreal-engine-challenge-2026-10-17",
      "title": "Unreal Engine Challenge",
      "deadline": "2026-10-17T23:59:59",
      "dateRange": "Oct 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "game jam",
        "indie game",
        "Unity"
      ],
      "url": "https://www.unrealengine.com",
      "status": "upcoming",
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 crawler 抽取并校验。",
      "stage": "Source board",
      "source": "Unreal Engine",
      "type": "contest"
    },
    {
      "id": "game-dev-ddl-unity-student-challenge-2026-11-04",
      "title": "Unity Student Challenge",
      "deadline": "2026-11-04T23:59:59",
      "dateRange": "Nov 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "game jam",
        "indie game",
        "Unity"
      ],
      "url": "https://unity.com",
      "status": "upcoming",
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 crawler 抽取并校验。",
      "stage": "Source board",
      "source": "Unity",
      "type": "contest"
    },
    {
      "id": "game-dev-ddl-godot-wild-jam-2026-11-22",
      "title": "Godot Wild Jam",
      "deadline": "2026-11-22T23:59:59",
      "dateRange": "Nov 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "game jam",
        "indie game",
        "Unity"
      ],
      "url": "https://itch.io/jams",
      "status": "upcoming",
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 crawler 抽取并校验。",
      "stage": "Source board",
      "source": "itch.io Jams",
      "type": "contest"
    },
    {
      "id": "game-dev-ddl-game-off-by-github-2026-12-10",
      "title": "Game Off by GitHub",
      "deadline": "2026-12-10T23:59:59",
      "dateRange": "Dec 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "game jam",
        "indie game",
        "Unity"
      ],
      "url": "https://itch.io/jam/game-off",
      "status": "upcoming",
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 crawler 抽取并校验。",
      "stage": "Source board",
      "source": "GitHub Game Off",
      "type": "contest"
    },
    {
      "id": "game-dev-ddl-a-maze-awards-submission-2026-12-28",
      "title": "A MAZE. Awards Submission",
      "deadline": "2026-12-28T23:59:59",
      "dateRange": "Dec 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "game jam",
        "indie game",
        "Unity"
      ],
      "url": "https://amaze-berlin.de",
      "status": "upcoming",
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 crawler 抽取并校验。",
      "stage": "Source board",
      "source": "A MAZE.",
      "type": "contest"
    },
    {
      "id": "game-dev-ddl-indiecade-submission-2027-01-15",
      "title": "IndieCade Submission",
      "deadline": "2027-01-15T23:59:59",
      "dateRange": "Jan 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "game jam",
        "indie game",
        "Unity"
      ],
      "url": "https://www.indiecade.com",
      "status": "upcoming",
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 crawler 抽取并校验。",
      "stage": "Source board",
      "source": "IndieCade",
      "type": "contest"
    },
    {
      "id": "game-dev-ddl-games-for-change-awards-2027-02-02",
      "title": "Games for Change Awards",
      "deadline": "2027-02-02T23:59:59",
      "dateRange": "Feb 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "game jam",
        "indie game",
        "Unity"
      ],
      "url": "https://www.gamesforchange.org",
      "status": "upcoming",
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 crawler 抽取并校验。",
      "stage": "Source board",
      "source": "Games for Change",
      "type": "contest"
    },
    {
      "id": "game-dev-ddl-ai-npc-challenge-2027-02-20",
      "title": "AI NPC Challenge",
      "deadline": "2027-02-20T23:59:59",
      "dateRange": "Feb 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "game jam",
        "indie game",
        "Unity"
      ],
      "url": "https://itch.io/jams",
      "status": "upcoming",
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 crawler 抽取并校验。",
      "stage": "Source board",
      "source": "itch.io",
      "type": "contest"
    },
    {
      "id": "game-dev-ddl-procedural-generation-jam-2027-03-10",
      "title": "Procedural Generation Jam",
      "deadline": "2027-03-10T23:59:59",
      "dateRange": "Mar 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "game jam",
        "indie game",
        "Unity"
      ],
      "url": "https://itch.io/jams",
      "status": "upcoming",
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 crawler 抽取并校验。",
      "stage": "Source board",
      "source": "itch.io",
      "type": "contest"
    },
    {
      "id": "game-dev-ddl-serious-games-health-track-2027-03-28",
      "title": "Serious Games Health Track",
      "deadline": "2027-03-28T23:59:59",
      "dateRange": "Mar 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "game jam",
        "indie game",
        "Unity"
      ],
      "url": "https://itch.io/jams",
      "status": "upcoming",
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 crawler 抽取并校验。",
      "stage": "Source board",
      "source": "itch.io",
      "type": "contest"
    }
  ],
  "biotech-ddl": [
    {
      "id": "dd-health-66-flu-shot-learning",
      "title": "Flu Shot Learning: Predict H1N1 and Seasonal Flu Vaccines",
      "deadline": "2027-07-30T23:59:00Z",
      "dateRange": "July 30, 2027, 11:59 p.m. UTC",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "biotech",
        "health",
        "DrivenData",
        "competition"
      ],
      "url": "https://www.drivendata.org/competitions/66/flu-shot-learning/",
      "status": "upcoming",
      "description": "Parsed from DrivenData health competitions listing. Deadline is read from the card end-date tooltip.",
      "stage": "Deadline",
      "source": "DrivenData Health Competitions",
      "type": "challenge"
    },
    {
      "id": "dd-health-44-dengai-predicting-disease-spread",
      "title": "DengAI: Predicting Disease Spread",
      "deadline": "2027-10-05T23:59:00Z",
      "dateRange": "Oct. 5, 2027, 11:59 p.m. UTC",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "biotech",
        "health",
        "DrivenData",
        "competition"
      ],
      "url": "https://www.drivendata.org/competitions/44/dengai-predicting-disease-spread/",
      "status": "upcoming",
      "description": "Parsed from DrivenData health competitions listing. Deadline is read from the card end-date tooltip.",
      "stage": "Deadline",
      "source": "DrivenData Health Competitions",
      "type": "challenge"
    }
  ]
};

export function getDDLByTopic(topicId: string): DDLItem[] {
  return ddlData[topicId] || [];
}

export function getAllDDL(): DDLItem[] {
  return Object.values(ddlData).flat();
}
