export interface DDLItem {
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
      "description": "MLH 系列活动入口，适合专题按周滚动展示。",
      "stage": "Event start",
      "source": "Curated coverage seed",
      "type": "hackathon"
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
      "prize": "$25,000+",
      "description": "Devpost AI 应用类比赛 coverage seed，定时 crawler 会继续补官方详情。",
      "stage": "Submission",
      "source": "Curated coverage seed",
      "type": "hackathon"
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
      "description": "高校黑客松 coverage seed，用于补足北美校园赛历。",
      "stage": "Application",
      "source": "Official-style seed",
      "type": "hackathon"
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
      "prize": "$50,000+",
      "description": "大型校园黑客松，追踪报名、确认、项目提交和 Demo Day 节点。",
      "stage": "Registration",
      "source": "Official site",
      "type": "hackathon"
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
      "description": "欧洲大型企业/创新黑客松入口。",
      "stage": "Application",
      "source": "Curated coverage seed",
      "type": "hackathon"
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
      "prize": "$40,000+",
      "description": "校园线下黑客松入口，等待官方申请时间校验。",
      "stage": "Application",
      "source": "Curated coverage seed",
      "type": "hackathon"
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
      "description": "哈佛校园黑客松入口。",
      "stage": "Application",
      "source": "Curated coverage seed",
      "type": "hackathon"
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
      "description": "全球开放数据与空间科学挑战入口。",
      "stage": "Local event",
      "source": "Official site",
      "type": "hackathon"
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
      "description": "普林斯顿校园黑客松入口。",
      "stage": "Application",
      "source": "Curated coverage seed",
      "type": "hackathon"
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
      "description": "UCLA 黑客松入口。",
      "stage": "Registration",
      "source": "Curated coverage seed",
      "type": "hackathon"
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
      "prize": "$150,000+",
      "description": "Web3 生态黑客松入口，后续由 crawler 对齐具体城市站详情页。",
      "stage": "Project submit",
      "source": "ETHGlobal events board",
      "type": "hackathon"
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
      "description": "欧洲学生黑客松 coverage seed。",
      "stage": "Registration",
      "source": "Curated coverage seed",
      "type": "hackathon"
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
      "prize": "$30,000+",
      "description": "美国西海岸高校黑客松 coverage seed。",
      "stage": "Hacking",
      "source": "Curated coverage seed",
      "type": "hackathon"
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
      "description": "欧洲综合创新黑客松入口。",
      "stage": "Application",
      "source": "Curated coverage seed",
      "type": "hackathon"
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
      "prize": "$80,000+",
      "description": "开源赏金与项目提交通道 coverage seed。",
      "stage": "Bounty submit",
      "source": "Curated coverage seed",
      "type": "hackathon"
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
      "prize": "$35,000+",
      "description": "斯坦福黑客松入口，后续由官方页面校准。",
      "stage": "Acceptance",
      "source": "Curated coverage seed",
      "type": "hackathon"
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
      "prize": "$28,000+",
      "description": "加拿大西海岸校园黑客松入口。",
      "stage": "Registration",
      "source": "Curated coverage seed",
      "type": "hackathon"
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
      "description": "英国高校黑客松入口。",
      "stage": "Registration",
      "source": "Curated coverage seed",
      "type": "hackathon"
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
      "description": "医疗智能体应用赛 coverage seed。",
      "stage": "Final submit",
      "source": "Curated coverage seed",
      "type": "challenge"
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
      "prize": "$60,000+",
      "description": "智能体应用构建赛入口，覆盖 tool use / cloud agent 场景。",
      "stage": "Submission",
      "source": "Devpost-style seed",
      "type": "challenge"
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
      "prize": "$20,000+",
      "description": "Agentic 运维场景黑客松入口。",
      "stage": "Demo video",
      "source": "Curated coverage seed",
      "type": "hackathon"
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
      "description": "MCP 工具生态构建赛入口。",
      "stage": "Project submit",
      "source": "Curated coverage seed",
      "type": "hackathon"
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
      "description": "智能体可靠性评测入口。",
      "stage": "Leaderboard",
      "source": "Benchmark demo",
      "type": "challenge"
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
      "description": "桌面环境智能体评测入口。",
      "stage": "Evaluation",
      "source": "Benchmark coverage seed",
      "type": "challenge"
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
      "description": "面向产品原型的 Agent 黑客松入口。",
      "stage": "Launch",
      "source": "Curated coverage seed",
      "type": "hackathon"
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
      "description": "代码修复智能体挑战入口。",
      "stage": "Patch submit",
      "source": "Benchmark demo",
      "type": "challenge"
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
      "description": "通用助理能力评测入口。",
      "stage": "Leaderboard",
      "source": "Benchmark coverage seed",
      "type": "challenge"
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
      "description": "网页智能体评测入口。",
      "stage": "Evaluation",
      "source": "Benchmark demo",
      "type": "challenge"
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
      "description": "浏览器智能体任务集入口。",
      "stage": "Submission",
      "source": "Benchmark coverage seed",
      "type": "challenge"
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
      "prize": "$10,000+",
      "description": "RAG 工作流智能体挑战入口。",
      "stage": "Notebook submit",
      "source": "Curated coverage seed",
      "type": "challenge"
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
      "description": "工具调用智能体评测入口。",
      "stage": "Result upload",
      "source": "Benchmark coverage seed",
      "type": "challenge"
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
      "description": "多任务智能体能力榜单入口。",
      "stage": "Leaderboard",
      "source": "Benchmark coverage seed",
      "type": "challenge"
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
      "description": "长程规划与记忆能力评测入口。",
      "stage": "Paper / report",
      "source": "OpenReview-style seed",
      "type": "challenge"
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
      "description": "移动端操作智能体挑战入口。",
      "stage": "Submission",
      "source": "Coverage seed",
      "type": "challenge"
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
      "description": "多智能体安全评测入口。",
      "stage": "Report",
      "source": "OpenReview-style seed",
      "type": "challenge"
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
      "description": "可信智能体专题评测/论文入口。",
      "stage": "Paper",
      "source": "Academic coverage seed",
      "type": "challenge"
    }
  ],
  "cv-ddl": [
    {
      "id": "cv-ddl-wacv-2027-first-round-2026-07-14",
      "title": "WACV 2027 First Round",
      "deadline": "2026-07-14T23:59:59",
      "dateRange": "Jul 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "WACV",
        "Application"
      ],
      "url": "https://wacv.thecvf.com",
      "status": "upcoming",
      "description": "冬季计算机视觉应用会议入口。",
      "stage": "Round 1",
      "source": "Curated coverage seed",
      "type": "conference"
    },
    {
      "id": "cv-ddl-eccv-2026-camera-ready-2026-07-20",
      "title": "ECCV 2026 Camera Ready",
      "deadline": "2026-07-20T23:59:59",
      "dateRange": "Jul 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "ECCV",
        "Camera-ready"
      ],
      "url": "https://eccv.ecva.net",
      "status": "upcoming",
      "description": "ECCV 后续节点入口。",
      "stage": "Camera ready",
      "source": "Official-style seed",
      "type": "conference"
    },
    {
      "id": "cv-ddl-vot-challenge-2026-2026-07-31",
      "title": "VOT Challenge 2026",
      "deadline": "2026-07-31T23:59:59",
      "dateRange": "Jul 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Tracking",
        "VOT"
      ],
      "url": "https://www.votchallenge.net",
      "status": "upcoming",
      "description": "视觉目标跟踪挑战入口。",
      "stage": "Submission",
      "source": "Curated coverage seed",
      "type": "conference"
    },
    {
      "id": "cv-ddl-image-matching-challenge-2026-2026-08-01",
      "title": "Image Matching Challenge 2026",
      "deadline": "2026-08-01T23:59:59",
      "dateRange": "Jun-Aug 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Kaggle",
        "3D Vision"
      ],
      "url": "https://www.kaggle.com/competitions",
      "status": "upcoming",
      "description": "视觉挑战赛样例，展示 leaderboard 和 final submit。",
      "stage": "Leaderboard",
      "source": "Kaggle-style demo",
      "type": "conference"
    },
    {
      "id": "cv-ddl-coco-detection-challenge-2026-2026-08-25",
      "title": "COCO Detection Challenge 2026",
      "deadline": "2026-08-25T23:59:59",
      "dateRange": "Aug 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "COCO",
        "Detection"
      ],
      "url": "https://cocodataset.org",
      "status": "upcoming",
      "description": "通用目标检测挑战入口。",
      "stage": "Result submit",
      "source": "Benchmark coverage seed",
      "type": "conference"
    },
    {
      "id": "cv-ddl-cityscapes-semantic-segmentation-refresh-2026-09-05",
      "title": "Cityscapes Semantic Segmentation Refresh",
      "deadline": "2026-09-05T23:59:59",
      "dateRange": "Sep 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Segmentation",
        "Autonomous Driving"
      ],
      "url": "https://www.cityscapes-dataset.com",
      "status": "upcoming",
      "description": "自动驾驶场景分割榜单入口。",
      "stage": "Leaderboard",
      "source": "Benchmark coverage seed",
      "type": "conference"
    },
    {
      "id": "cv-ddl-openimages-challenge-2026-2026-09-15",
      "title": "OpenImages Challenge 2026",
      "deadline": "2026-09-15T23:59:59",
      "dateRange": "Sep 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Detection",
        "OpenImages"
      ],
      "url": "https://storage.googleapis.com/openimages/web/challenge.html",
      "status": "upcoming",
      "description": "大规模视觉识别挑战入口。",
      "stage": "Submission",
      "source": "Curated coverage seed",
      "type": "conference"
    },
    {
      "id": "cv-ddl-motchallenge-2026-submission-2026-09-28",
      "title": "MOTChallenge 2026 Submission",
      "deadline": "2026-09-28T23:59:59",
      "dateRange": "Sep 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Tracking",
        "MOT"
      ],
      "url": "https://motchallenge.net",
      "status": "upcoming",
      "description": "多目标跟踪评测入口。",
      "stage": "Result upload",
      "source": "Benchmark coverage seed",
      "type": "conference"
    },
    {
      "id": "cv-ddl-document-ai-visual-parsing-challenge-2026-10-08",
      "title": "Document AI Visual Parsing Challenge",
      "deadline": "2026-10-08T23:59:59",
      "dateRange": "Oct 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "OCR",
        "Document AI"
      ],
      "url": "https://www.kaggle.com/competitions",
      "status": "upcoming",
      "description": "文档视觉解析挑战入口。",
      "stage": "Notebook submit",
      "source": "Curated coverage seed",
      "type": "conference"
    },
    {
      "id": "cv-ddl-video-object-segmentation-challenge-2026-10-18",
      "title": "Video Object Segmentation Challenge",
      "deadline": "2026-10-18T23:59:59",
      "dateRange": "Oct 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Video",
        "Segmentation"
      ],
      "url": "https://davischallenge.org",
      "status": "upcoming",
      "description": "视频分割挑战入口。",
      "stage": "Final submit",
      "source": "Benchmark demo",
      "type": "conference"
    },
    {
      "id": "cv-ddl-cvpr-2027-abstract-registration-2026-11-07",
      "title": "CVPR 2027 Abstract Registration",
      "deadline": "2026-11-07T23:59:59",
      "dateRange": "Nov 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "CVPR",
        "Main Conference"
      ],
      "url": "https://cvpr.thecvf.com",
      "status": "upcoming",
      "description": "CVPR 主会 abstract / paper 阶段入口。",
      "stage": "Abstract",
      "source": "AllConfs-style seed",
      "type": "conference"
    },
    {
      "id": "cv-ddl-3d-object-detection-challenge-2026-11-12",
      "title": "3D Object Detection Challenge",
      "deadline": "2026-11-12T23:59:59",
      "dateRange": "Nov 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "3D Vision",
        "LiDAR"
      ],
      "url": "https://www.kaggle.com/competitions",
      "status": "upcoming",
      "description": "3D 感知挑战入口。",
      "stage": "Final submit",
      "source": "Curated coverage seed",
      "type": "conference"
    },
    {
      "id": "cv-ddl-cvpr-2027-full-paper-2026-11-14",
      "title": "CVPR 2027 Full Paper",
      "deadline": "2026-11-14T23:59:59",
      "dateRange": "Nov 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "CVPR",
        "Paper"
      ],
      "url": "https://cvpr.thecvf.com",
      "status": "upcoming",
      "description": "CVPR 全文提交阶段入口。",
      "stage": "Full paper",
      "source": "Curated coverage seed",
      "type": "conference"
    },
    {
      "id": "cv-ddl-miccai-2027-full-paper-2026-12-15",
      "title": "MICCAI 2027 Full Paper",
      "deadline": "2026-12-15T23:59:59",
      "dateRange": "Dec 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Medical Imaging",
        "MICCAI"
      ],
      "url": "https://conferences.miccai.org",
      "status": "upcoming",
      "description": "医学图像会议入口。",
      "stage": "Paper",
      "source": "Curated coverage seed",
      "type": "conference"
    },
    {
      "id": "cv-ddl-pascal-voc-legacy-leaderboard-2026-12-31",
      "title": "PASCAL VOC Legacy Leaderboard",
      "deadline": "2026-12-31T23:59:59",
      "dateRange": "Rolling 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "VOC",
        "Benchmark"
      ],
      "url": "http://host.robots.ox.ac.uk/pascal/VOC/",
      "status": "ongoing",
      "description": "经典视觉 benchmark 入口，用于长期追踪。",
      "stage": "Rolling",
      "source": "Curated coverage seed",
      "type": "conference"
    },
    {
      "id": "cv-ddl-medical-segmentation-decathlon-refresh-2027-01-20",
      "title": "Medical Segmentation Decathlon Refresh",
      "deadline": "2027-01-20T23:59:59",
      "dateRange": "Jan 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Medical",
        "Segmentation"
      ],
      "url": "http://medicaldecathlon.com",
      "status": "upcoming",
      "description": "医学分割榜单入口。",
      "stage": "Leaderboard",
      "source": "Curated coverage seed",
      "type": "conference"
    },
    {
      "id": "cv-ddl-ntire-restoration-challenge-2027-2027-02-10",
      "title": "NTIRE Restoration Challenge 2027",
      "deadline": "2027-02-10T23:59:59",
      "dateRange": "Feb 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Restoration",
        "Workshop"
      ],
      "url": "https://cvlai.net/ntire",
      "status": "upcoming",
      "description": "图像复原 workshop/challenge 入口。",
      "stage": "Final results",
      "source": "Curated coverage seed",
      "type": "conference"
    },
    {
      "id": "cv-ddl-iccv-2027-paper-submission-2027-03-17",
      "title": "ICCV 2027 Paper Submission",
      "deadline": "2027-03-17T23:59:59",
      "dateRange": "Mar 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "ICCV",
        "Vision"
      ],
      "url": "https://iccv.thecvf.com",
      "status": "upcoming",
      "description": "ICCV 主会投稿入口。",
      "stage": "Paper",
      "source": "Curated coverage seed",
      "type": "conference"
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
      "description": "EMNLP 主会全文提交入口。",
      "stage": "Paper",
      "source": "Curated coverage seed",
      "type": "conference"
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
      "description": "临床 NLP shared task 入口。",
      "stage": "System submit",
      "source": "Curated coverage seed",
      "type": "conference"
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
      "description": "生物医学 NLP workshop 入口。",
      "stage": "Paper",
      "source": "Curated coverage seed",
      "type": "conference"
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
      "description": "中文 NLP 会议/任务入口。",
      "stage": "Demo",
      "source": "SinoConf-style seed",
      "type": "conference"
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
      "description": "NLP 可解释性 workshop 入口。",
      "stage": "Paper",
      "source": "Curated coverage seed",
      "type": "conference"
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
      "description": "COLING 长文提交入口。",
      "stage": "Long paper",
      "source": "Curated coverage seed",
      "type": "conference"
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
      "description": "ACL 系列主会 ARR 承诺流入口。",
      "stage": "ARR commit",
      "source": "AllConfs-style seed",
      "type": "conference"
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
      "description": "法律文本处理挑战入口。",
      "stage": "Submission",
      "source": "Curated coverage seed",
      "type": "conference"
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
      "description": "阅读理解与问答评测入口。",
      "stage": "Leaderboard",
      "source": "Curated coverage seed",
      "type": "conference"
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
      "description": "检索增强生成评测入口。",
      "stage": "System report",
      "source": "Curated coverage seed",
      "type": "conference"
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
      "description": "语义评测任务入口。",
      "stage": "System",
      "source": "Shared-task demo",
      "type": "conference"
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
      "description": "NAACL 投稿入口。",
      "stage": "Paper",
      "source": "Curated coverage seed",
      "type": "conference"
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
      "description": "长上下文 NLP benchmark 入口。",
      "stage": "Leaderboard",
      "source": "Curated coverage seed",
      "type": "conference"
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
      "description": "Shared task 注册与系统提交入口。",
      "stage": "System submit",
      "source": "Shared-task demo",
      "type": "conference"
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
      "description": "低资源语言 shared task 入口。",
      "stage": "Paper / system",
      "source": "Curated coverage seed",
      "type": "conference"
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
      "description": "机器翻译评测入口。",
      "stage": "Result upload",
      "source": "Benchmark demo",
      "type": "conference"
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
      "description": "自然语言生成会议入口。",
      "stage": "Paper",
      "source": "Curated coverage seed",
      "type": "conference"
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
      "description": "对话系统会议入口。",
      "stage": "Paper",
      "source": "Curated coverage seed",
      "type": "conference"
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
      "description": "机器学习主会投稿入口。",
      "stage": "Paper",
      "source": "AllConfs-style seed",
      "type": "conference"
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
      "description": "VLDB 月度投稿入口。",
      "stage": "Monthly cycle",
      "source": "Curated coverage seed",
      "type": "conference"
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
      "description": "数据库会议滚动投稿入口。",
      "stage": "Round 1",
      "source": "Curated coverage seed",
      "type": "conference"
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
      "description": "AAAI abstract 阶段入口。",
      "stage": "Abstract",
      "source": "Curated coverage seed",
      "type": "conference"
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
      "description": "人机交互会议入口。",
      "stage": "Paper",
      "source": "Curated coverage seed",
      "type": "conference"
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
      "description": "机器人会议入口。",
      "stage": "Paper",
      "source": "Curated coverage seed",
      "type": "conference"
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
      "description": "科研基金/项目申请入口，后续可拆分到独立 grant-ddl。",
      "stage": "Proposal window",
      "source": "Curated coverage seed",
      "type": "program"
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
      "description": "ICLR 投稿入口。",
      "stage": "OpenReview",
      "source": "OpenReview-style seed",
      "type": "conference"
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
      "description": "Web Conference 研究论文入口。",
      "stage": "Paper",
      "source": "Curated coverage seed",
      "type": "conference"
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
      "description": "统计学习会议入口。",
      "stage": "Paper",
      "source": "Curated coverage seed",
      "type": "conference"
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
      "description": "普适计算会议入口。",
      "stage": "Paper",
      "source": "Curated coverage seed",
      "type": "conference"
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
      "description": "计算机体系结构会议入口。",
      "stage": "Paper",
      "source": "Curated coverage seed",
      "type": "conference"
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
      "description": "规划与调度会议入口。",
      "stage": "Paper",
      "source": "Curated coverage seed",
      "type": "conference"
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
      "description": "ICML abstract 阶段入口。",
      "stage": "Abstract",
      "source": "Curated coverage seed",
      "type": "conference"
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
      "description": "Robotics: Science and Systems 投稿入口。",
      "stage": "Paper",
      "source": "Curated coverage seed",
      "type": "conference"
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
      "description": "信息检索会议入口。",
      "stage": "Paper",
      "source": "Curated coverage seed",
      "type": "conference"
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
      "description": "系统研究会议入口。",
      "stage": "Paper",
      "source": "Curated coverage seed",
      "type": "conference"
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
      "description": "数据挖掘会议入口。",
      "stage": "Research",
      "source": "Curated coverage seed",
      "type": "conference"
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
      "description": "不确定性人工智能会议入口。",
      "stage": "Paper",
      "source": "Curated coverage seed",
      "type": "conference"
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
      "description": "多媒体会议主会入口。",
      "stage": "Paper",
      "source": "Curated coverage seed",
      "type": "conference"
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
      "description": "Codeforces 轮次入口。",
      "stage": "Contest",
      "source": "Official site",
      "type": "contest"
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
      "description": "信息学竞赛训练营入口。",
      "stage": "Registration",
      "source": "Curated coverage seed",
      "type": "contest"
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
      "description": "月度机器学习竞赛入口。",
      "stage": "Submission",
      "source": "Curated coverage seed",
      "type": "contest"
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
      "description": "面试编程训练专题入口。",
      "stage": "Practice",
      "source": "Curated coverage seed",
      "type": "contest"
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
      "description": "国内算法竞赛入口。",
      "stage": "Submission",
      "source": "Curated coverage seed",
      "type": "contest"
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
      "description": "算法竞赛资格赛入口。",
      "stage": "Qualification",
      "source": "Curated coverage seed",
      "type": "contest"
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
      "description": "区域赛报名入口。",
      "stage": "Registration",
      "source": "Official-style seed",
      "type": "contest"
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
      "description": "软件能力认证/竞赛入口。",
      "stage": "Registration",
      "source": "Curated coverage seed",
      "type": "contest"
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
      "description": "在线评测竞赛入口。",
      "stage": "Contest",
      "source": "Curated coverage seed",
      "type": "contest"
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
      "description": "世界总决赛赛程入口。",
      "stage": "Contest",
      "source": "Curated coverage seed",
      "type": "contest"
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
      "description": "AtCoder 高难度比赛入口。",
      "stage": "Contest",
      "source": "Official site",
      "type": "contest"
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
      "description": "优化类编程挑战归档入口。",
      "stage": "Practice",
      "source": "Curated coverage seed",
      "type": "contest"
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
      "description": "年度编程挑战入口。",
      "stage": "Event start",
      "source": "Official site",
      "type": "contest"
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
      "description": "国内编程竞赛入口。",
      "stage": "Registration",
      "source": "SinoConf-style seed",
      "type": "contest"
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
      "description": "美国信息学竞赛入口。",
      "stage": "Contest",
      "source": "Curated coverage seed",
      "type": "contest"
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
      "description": "重复赛事入口，后续可转为 RRULE 或周规则。",
      "stage": "Recurring",
      "source": "Official site",
      "type": "contest"
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
      "description": "经典题库入口，用于训练专题。",
      "stage": "Archive",
      "source": "Curated coverage seed",
      "type": "contest"
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
      "description": "Topcoder 赛事入口。",
      "stage": "Recurring",
      "source": "Curated coverage seed",
      "type": "contest"
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
      "description": "长期数学编程题入口。",
      "stage": "Recurring",
      "source": "Curated coverage seed",
      "type": "contest"
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
      "description": "CodeChef 周赛入口。",
      "stage": "Recurring",
      "source": "Curated coverage seed",
      "type": "contest"
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
      "description": "视觉问答评测入口。",
      "stage": "Submission",
      "source": "Benchmark demo",
      "type": "challenge"
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
      "description": "OCR + VQA 评测入口。",
      "stage": "Result upload",
      "source": "Benchmark demo",
      "type": "challenge"
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
      "description": "多模态理解 benchmark 入口。",
      "stage": "Leaderboard",
      "source": "Benchmark demo",
      "type": "challenge"
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
      "description": "图像描述挑战入口。",
      "stage": "Submission",
      "source": "Curated coverage seed",
      "type": "challenge"
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
      "description": "多模态推理榜单入口。",
      "stage": "Leaderboard",
      "source": "Curated coverage seed",
      "type": "challenge"
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
      "description": "视频描述挑战入口。",
      "stage": "Submission",
      "source": "Curated coverage seed",
      "type": "challenge"
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
      "description": "生成式 AI 评测入口。",
      "stage": "Final submit",
      "source": "Kaggle-style demo",
      "type": "challenge"
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
      "description": "视频理解评测入口。",
      "stage": "Leaderboard",
      "source": "Benchmark demo",
      "type": "challenge"
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
      "description": "图表问答评测入口。",
      "stage": "Submission",
      "source": "Curated coverage seed",
      "type": "challenge"
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
      "description": "音视频多模态挑战入口。",
      "stage": "Submission",
      "source": "Curated coverage seed",
      "type": "challenge"
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
      "description": "文档问答评测入口。",
      "stage": "Result upload",
      "source": "Curated coverage seed",
      "type": "challenge"
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
      "description": "VLM workshop paper 入口。",
      "stage": "Workshop paper",
      "source": "Curated coverage seed",
      "type": "program"
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
      "description": "多模态综合评测入口。",
      "stage": "Leaderboard",
      "source": "Curated coverage seed",
      "type": "challenge"
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
      "description": "多模态安全评测入口。",
      "stage": "Report",
      "source": "Curated coverage seed",
      "type": "challenge"
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
      "description": "VLM 对话能力评测入口。",
      "stage": "Evaluation",
      "source": "Curated coverage seed",
      "type": "challenge"
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
      "description": "多模态 NLP workshop 入口。",
      "stage": "Paper",
      "source": "Curated coverage seed",
      "type": "program"
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
      "description": "语音到图像生成评测入口。",
      "stage": "Submission",
      "source": "Curated coverage seed",
      "type": "challenge"
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
      "description": "视觉-语言-动作模型评测入口。",
      "stage": "Leaderboard",
      "source": "Curated coverage seed",
      "type": "challenge"
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
      "description": "新年假日。",
      "stage": "Holiday",
      "source": "Gov calendar seed",
      "type": "holiday"
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
      "description": "冬季节气。",
      "stage": "Solar term",
      "source": "Hong Kong Observatory almanac seed",
      "type": "holiday"
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
      "description": "日本成人之日。",
      "stage": "National holiday",
      "source": "Japan Cabinet Office",
      "type": "holiday"
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
      "description": "美国联邦假日。",
      "stage": "Federal holiday",
      "source": "US OPM federal holidays",
      "type": "holiday"
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
      "description": "冬季最后一个节气。",
      "stage": "Solar term",
      "source": "Hong Kong Observatory almanac seed",
      "type": "holiday"
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
      "description": "春季开始。",
      "stage": "Solar term",
      "source": "Hong Kong Observatory almanac seed",
      "type": "holiday"
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
      "description": "北方小年。",
      "stage": "Traditional festival",
      "source": "Lunar calendar seed",
      "type": "holiday"
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
      "description": "日本建国纪念日。",
      "stage": "National holiday",
      "source": "Japan Cabinet Office",
      "type": "holiday"
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
      "description": "情人节。",
      "stage": "Observance",
      "source": "International calendar seed",
      "type": "holiday"
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
      "description": "农历岁末。",
      "stage": "Traditional festival",
      "source": "Lunar calendar seed",
      "type": "holiday"
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
      "description": "美国联邦假日。",
      "stage": "Federal holiday",
      "source": "US OPM federal holidays",
      "type": "holiday"
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
      "description": "农历新年。",
      "stage": "Holiday",
      "source": "Gov calendar seed",
      "type": "holiday"
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
      "description": "降水增多。",
      "stage": "Solar term",
      "source": "Hong Kong Observatory almanac seed",
      "type": "holiday"
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
      "description": "日本天皇诞生日。",
      "stage": "National holiday",
      "source": "Japan Cabinet Office",
      "type": "holiday"
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
      "description": "正月十五。",
      "stage": "Traditional festival",
      "source": "Lunar calendar seed",
      "type": "holiday"
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
      "description": "仲春节气。",
      "stage": "Solar term",
      "source": "Hong Kong Observatory almanac seed",
      "type": "holiday"
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
      "description": "国际妇女节。",
      "stage": "UN observance",
      "source": "UN observances",
      "type": "holiday"
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
      "description": "圣帕特里克节。",
      "stage": "Observance",
      "source": "International calendar seed",
      "type": "holiday"
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
      "description": "昼夜近等长。",
      "stage": "Solar term",
      "source": "Hong Kong Observatory almanac seed",
      "type": "holiday"
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
      "description": "农历二月初二。",
      "stage": "Traditional festival",
      "source": "Lunar calendar seed",
      "type": "holiday"
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
      "description": "愚人节。",
      "stage": "Observance",
      "source": "International calendar seed",
      "type": "holiday"
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
      "description": "英国银行假日。",
      "stage": "Bank holiday",
      "source": "UK bank holidays",
      "type": "holiday"
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
      "description": "节气与传统节日。",
      "stage": "Solar term",
      "source": "Gov / almanac seed",
      "type": "holiday"
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
      "description": "英国银行假日。",
      "stage": "Bank holiday",
      "source": "UK bank holidays",
      "type": "holiday"
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
      "description": "春季最后一个节气。",
      "stage": "Solar term",
      "source": "Hong Kong Observatory almanac seed",
      "type": "holiday"
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
      "description": "世界地球日。",
      "stage": "Observance",
      "source": "Official observance seed",
      "type": "holiday"
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
      "description": "昭和之日。",
      "stage": "National holiday",
      "source": "Japan Cabinet Office",
      "type": "holiday"
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
      "description": "劳动节假期入口。",
      "stage": "Holiday",
      "source": "Gov calendar seed",
      "type": "holiday"
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
      "description": "宪法纪念日。",
      "stage": "National holiday",
      "source": "Japan Cabinet Office",
      "type": "holiday"
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
      "description": "英国银行假日。",
      "stage": "Bank holiday",
      "source": "UK bank holidays",
      "type": "holiday"
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
      "description": "绿之日。",
      "stage": "National holiday",
      "source": "Japan Cabinet Office",
      "type": "holiday"
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
      "description": "夏季开始。",
      "stage": "Solar term",
      "source": "Hong Kong Observatory almanac seed",
      "type": "holiday"
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
      "description": "日本儿童节。",
      "stage": "National holiday",
      "source": "Japan Cabinet Office",
      "type": "holiday"
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
      "description": "母亲节。",
      "stage": "Observance",
      "source": "International calendar seed",
      "type": "holiday"
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
      "description": "夏季节气。",
      "stage": "Solar term",
      "source": "Hong Kong Observatory almanac seed",
      "type": "holiday"
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
      "description": "美国联邦假日。",
      "stage": "Federal holiday",
      "source": "US OPM federal holidays",
      "type": "holiday"
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
      "description": "英国银行假日。",
      "stage": "Bank holiday",
      "source": "UK bank holidays",
      "type": "holiday"
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
      "description": "仲夏农事节气。",
      "stage": "Solar term",
      "source": "Hong Kong Observatory almanac seed",
      "type": "holiday"
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
      "description": "农历五月初五。",
      "stage": "Holiday",
      "source": "Gov calendar seed",
      "type": "holiday"
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
      "description": "美国联邦假日。",
      "stage": "Federal holiday",
      "source": "US OPM federal holidays",
      "type": "holiday"
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
      "description": "北半球白昼较长。",
      "stage": "Solar term",
      "source": "Hong Kong Observatory almanac seed",
      "type": "holiday"
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
      "description": "父亲节。",
      "stage": "Observance",
      "source": "International calendar seed",
      "type": "holiday"
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
      "description": "美国独立日。",
      "stage": "Federal holiday",
      "source": "US OPM federal holidays",
      "type": "holiday"
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
      "description": "暑热开始。",
      "stage": "Solar term",
      "source": "Hong Kong Observatory almanac seed",
      "type": "holiday"
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
      "description": "海之日。",
      "stage": "National holiday",
      "source": "Japan Cabinet Office",
      "type": "holiday"
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
      "description": "暑热高峰。",
      "stage": "Solar term",
      "source": "Hong Kong Observatory almanac seed",
      "type": "holiday"
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
      "description": "秋季开始。",
      "stage": "Solar term",
      "source": "Hong Kong Observatory almanac seed",
      "type": "holiday"
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
      "description": "山之日。",
      "stage": "National holiday",
      "source": "Japan Cabinet Office",
      "type": "holiday"
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
      "description": "农历七月初七。",
      "stage": "Traditional festival",
      "source": "Lunar calendar seed",
      "type": "holiday"
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
      "description": "暑热渐退。",
      "stage": "Solar term",
      "source": "Hong Kong Observatory almanac seed",
      "type": "holiday"
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
      "description": "农历七月十五。",
      "stage": "Traditional festival",
      "source": "Lunar calendar seed",
      "type": "holiday"
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
      "description": "英国银行假日。",
      "stage": "Bank holiday",
      "source": "UK bank holidays",
      "type": "holiday"
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
      "description": "秋季节气。",
      "stage": "Solar term",
      "source": "Hong Kong Observatory almanac seed",
      "type": "holiday"
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
      "description": "美国劳动节。",
      "stage": "Federal holiday",
      "source": "US OPM federal holidays",
      "type": "holiday"
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
      "description": "敬老日。",
      "stage": "National holiday",
      "source": "Japan Cabinet Office",
      "type": "holiday"
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
      "description": "昼夜近等长。",
      "stage": "Solar term",
      "source": "Hong Kong Observatory almanac seed",
      "type": "holiday"
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
      "description": "秋分日。",
      "stage": "National holiday",
      "source": "Japan Cabinet Office",
      "type": "holiday"
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
      "description": "农历八月十五。",
      "stage": "Holiday",
      "source": "Gov calendar seed",
      "type": "holiday"
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
      "description": "世界旅游日。",
      "stage": "UN observance",
      "source": "UN observances",
      "type": "holiday"
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
      "description": "国庆假期入口。",
      "stage": "Holiday",
      "source": "Gov calendar seed",
      "type": "holiday"
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
      "description": "深秋节气。",
      "stage": "Solar term",
      "source": "Hong Kong Observatory almanac seed",
      "type": "holiday"
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
      "description": "体育日。",
      "stage": "National holiday",
      "source": "Japan Cabinet Office",
      "type": "holiday"
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
      "description": "农历九月初九。",
      "stage": "Traditional festival",
      "source": "Lunar calendar seed",
      "type": "holiday"
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
      "description": "秋季最后一个节气。",
      "stage": "Solar term",
      "source": "Hong Kong Observatory almanac seed",
      "type": "holiday"
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
      "description": "万圣夜。",
      "stage": "Observance",
      "source": "International calendar seed",
      "type": "holiday"
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
      "description": "文化日。",
      "stage": "National holiday",
      "source": "Japan Cabinet Office",
      "type": "holiday"
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
      "description": "冬季开始。",
      "stage": "Solar term",
      "source": "Hong Kong Observatory almanac seed",
      "type": "holiday"
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
      "description": "双十一。",
      "stage": "Observance",
      "source": "International calendar seed",
      "type": "holiday"
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
      "description": "冬季节气。",
      "stage": "Solar term",
      "source": "Hong Kong Observatory almanac seed",
      "type": "holiday"
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
      "description": "勤劳感谢日。",
      "stage": "National holiday",
      "source": "Japan Cabinet Office",
      "type": "holiday"
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
      "description": "美国感恩节。",
      "stage": "Federal holiday",
      "source": "US OPM federal holidays",
      "type": "holiday"
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
      "description": "黑色星期五。",
      "stage": "Observance",
      "source": "International calendar seed",
      "type": "holiday"
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
      "description": "仲冬节气。",
      "stage": "Solar term",
      "source": "Hong Kong Observatory almanac seed",
      "type": "holiday"
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
      "description": "冬至节气。",
      "stage": "Solar term",
      "source": "Hong Kong Observatory almanac seed",
      "type": "holiday"
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
      "description": "圣诞节。",
      "stage": "Holiday",
      "source": "International calendar seed",
      "type": "holiday"
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
      "description": "英国节礼日补假。",
      "stage": "Bank holiday",
      "source": "UK bank holidays",
      "type": "holiday"
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
      "description": "跨年与新年假日。",
      "stage": "Holiday",
      "source": "International calendar seed",
      "type": "holiday"
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
      "description": "农历腊月初八。",
      "stage": "Traditional festival",
      "source": "Lunar calendar seed",
      "type": "holiday"
    }
  ],
  "journal-ddl": []
};

export const getDDLByTopic = (topicId: string) => ddlData[topicId] || [];
export const getAllDDL = () => Object.values(ddlData).flat();
export const getDDLById = (id: string) => getAllDDL().find(d => d.id === id);
