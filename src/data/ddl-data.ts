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
    },
    {
      "id": "hackathon-ddl-hackdavis-2027-2027-01-15",
      "title": "HackDavis 2027",
      "deadline": "2027-01-15T23:59:59",
      "dateRange": "Jan 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "coverage",
        "seed"
      ],
      "url": "https://just-agent.github.io/just-ddl/",
      "status": "upcoming",
      "description": "HackDavis 2027 ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "hackathon-ddl-hacknyu-2027-2027-02-02",
      "title": "HackNYU 2027",
      "deadline": "2027-02-02T23:59:59",
      "dateRange": "Feb 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "coverage",
        "seed"
      ],
      "url": "https://just-agent.github.io/just-ddl/",
      "status": "upcoming",
      "description": "HackNYU 2027 ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "hackathon-ddl-hackduke-2027-2027-02-20",
      "title": "HackDuke 2027",
      "deadline": "2027-02-20T23:59:59",
      "dateRange": "Feb 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "coverage",
        "seed"
      ],
      "url": "https://just-agent.github.io/just-ddl/",
      "status": "upcoming",
      "description": "HackDuke 2027 ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "hackathon-ddl-hackumass-2027-2027-03-10",
      "title": "HackUMass 2027",
      "deadline": "2027-03-10T23:59:59",
      "dateRange": "Mar 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "coverage",
        "seed"
      ],
      "url": "https://just-agent.github.io/just-ddl/",
      "status": "upcoming",
      "description": "HackUMass 2027 ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "hackathon-ddl-shellhacks-2027-2027-03-28",
      "title": "ShellHacks 2027",
      "deadline": "2027-03-28T23:59:59",
      "dateRange": "Mar 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "coverage",
        "seed"
      ],
      "url": "https://just-agent.github.io/just-ddl/",
      "status": "upcoming",
      "description": "ShellHacks 2027 ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "hackathon-ddl-hack-the-6ix-2027-2027-04-15",
      "title": "Hack the 6ix 2027",
      "deadline": "2027-04-15T23:59:59",
      "dateRange": "Apr 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "coverage",
        "seed"
      ],
      "url": "https://just-agent.github.io/just-ddl/",
      "status": "upcoming",
      "description": "Hack the 6ix 2027 ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "hackathon-ddl-global-climate-hack-2027-2027-05-03",
      "title": "Global Climate Hack 2027",
      "deadline": "2027-05-03T23:59:59",
      "dateRange": "May 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "coverage",
        "seed"
      ],
      "url": "https://just-agent.github.io/just-ddl/",
      "status": "upcoming",
      "description": "Global Climate Hack 2027 ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "hackathon-ddl-ai-for-education-hackathon-2027-2027-05-21",
      "title": "AI for Education Hackathon 2027",
      "deadline": "2027-05-21T23:59:59",
      "dateRange": "May 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "coverage",
        "seed"
      ],
      "url": "https://just-agent.github.io/just-ddl/",
      "status": "upcoming",
      "description": "AI for Education Hackathon 2027 ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
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
    },
    {
      "id": "agent-ddl-agentbench-reliability-track-2027-01-15",
      "title": "AgentBench Reliability Track",
      "deadline": "2027-01-15T23:59:59",
      "dateRange": "Jan 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "coverage",
        "seed"
      ],
      "url": "https://just-agent.github.io/just-ddl/",
      "status": "upcoming",
      "description": "AgentBench Reliability Track ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "agent-ddl-browsergym-agent-league-2027-02-02",
      "title": "BrowserGym Agent League",
      "deadline": "2027-02-02T23:59:59",
      "dateRange": "Feb 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "coverage",
        "seed"
      ],
      "url": "https://just-agent.github.io/just-ddl/",
      "status": "upcoming",
      "description": "BrowserGym Agent League ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "agent-ddl-toolbench-tool-use-challenge-2027-02-20",
      "title": "ToolBench Tool-Use Challenge",
      "deadline": "2027-02-20T23:59:59",
      "dateRange": "Feb 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "coverage",
        "seed"
      ],
      "url": "https://just-agent.github.io/just-ddl/",
      "status": "upcoming",
      "description": "ToolBench Tool-Use Challenge ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "agent-ddl-multi-agent-negotiation-cup-2027-03-10",
      "title": "Multi-Agent Negotiation Cup",
      "deadline": "2027-03-10T23:59:59",
      "dateRange": "Mar 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "coverage",
        "seed"
      ],
      "url": "https://just-agent.github.io/just-ddl/",
      "status": "upcoming",
      "description": "Multi-Agent Negotiation Cup ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "agent-ddl-agent-memory-benchmark-sprint-2027-03-28",
      "title": "Agent Memory Benchmark Sprint",
      "deadline": "2027-03-28T23:59:59",
      "dateRange": "Mar 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "coverage",
        "seed"
      ],
      "url": "https://just-agent.github.io/just-ddl/",
      "status": "upcoming",
      "description": "Agent Memory Benchmark Sprint ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "agent-ddl-mcp-apps-hackathon-2027-04-15",
      "title": "MCP Apps Hackathon",
      "deadline": "2027-04-15T23:59:59",
      "dateRange": "Apr 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "coverage",
        "seed"
      ],
      "url": "https://just-agent.github.io/just-ddl/",
      "status": "upcoming",
      "description": "MCP Apps Hackathon ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "agent-ddl-agent-safety-red-team-track-2027-05-03",
      "title": "Agent Safety Red-Team Track",
      "deadline": "2027-05-03T23:59:59",
      "dateRange": "May 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "coverage",
        "seed"
      ],
      "url": "https://just-agent.github.io/just-ddl/",
      "status": "upcoming",
      "description": "Agent Safety Red-Team Track ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "agent-ddl-enterprise-agent-workflow-challenge-2027-05-21",
      "title": "Enterprise Agent Workflow Challenge",
      "deadline": "2027-05-21T23:59:59",
      "dateRange": "May 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "coverage",
        "seed"
      ],
      "url": "https://just-agent.github.io/just-ddl/",
      "status": "upcoming",
      "description": "Enterprise Agent Workflow Challenge ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
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
    },
    {
      "id": "cv-ddl-ai-city-challenge-2027-2027-01-15",
      "title": "AI City Challenge 2027",
      "deadline": "2027-01-15T23:59:59",
      "dateRange": "Jan 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "coverage",
        "seed"
      ],
      "url": "https://just-agent.github.io/just-ddl/",
      "status": "upcoming",
      "description": "AI City Challenge 2027 ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "cv-ddl-motchallenge-benchmark-refresh-2027-02-02",
      "title": "MOTChallenge Benchmark Refresh",
      "deadline": "2027-02-02T23:59:59",
      "dateRange": "Feb 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "coverage",
        "seed"
      ],
      "url": "https://just-agent.github.io/just-ddl/",
      "status": "upcoming",
      "description": "MOTChallenge Benchmark Refresh ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "cv-ddl-davis-video-segmentation-track-2027-02-20",
      "title": "DAVIS Video Segmentation Track",
      "deadline": "2027-02-20T23:59:59",
      "dateRange": "Feb 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "coverage",
        "seed"
      ],
      "url": "https://just-agent.github.io/just-ddl/",
      "status": "upcoming",
      "description": "DAVIS Video Segmentation Track ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "cv-ddl-coco-detection-challenge-refresh-2027-03-10",
      "title": "COCO Detection Challenge Refresh",
      "deadline": "2027-03-10T23:59:59",
      "dateRange": "Mar 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "coverage",
        "seed"
      ],
      "url": "https://just-agent.github.io/just-ddl/",
      "status": "upcoming",
      "description": "COCO Detection Challenge Refresh ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "cv-ddl-medical-segmentation-decathlon-refresh-2027-03-28",
      "title": "Medical Segmentation Decathlon Refresh",
      "deadline": "2027-03-28T23:59:59",
      "dateRange": "Mar 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "coverage",
        "seed"
      ],
      "url": "https://just-agent.github.io/just-ddl/",
      "status": "upcoming",
      "description": "Medical Segmentation Decathlon Refresh ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "cv-ddl-openimages-challenge-track-2027-04-15",
      "title": "OpenImages Challenge Track",
      "deadline": "2027-04-15T23:59:59",
      "dateRange": "Apr 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "coverage",
        "seed"
      ],
      "url": "https://just-agent.github.io/just-ddl/",
      "status": "upcoming",
      "description": "OpenImages Challenge Track ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "cv-ddl-cvpr-robust-vision-workshop-2027-05-03",
      "title": "CVPR Robust Vision Workshop",
      "deadline": "2027-05-03T23:59:59",
      "dateRange": "May 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "coverage",
        "seed"
      ],
      "url": "https://just-agent.github.io/just-ddl/",
      "status": "upcoming",
      "description": "CVPR Robust Vision Workshop ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "cv-ddl-visual-localization-benchmark-sprint-2027-05-21",
      "title": "Visual Localization Benchmark Sprint",
      "deadline": "2027-05-21T23:59:59",
      "dateRange": "May 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "coverage",
        "seed"
      ],
      "url": "https://just-agent.github.io/just-ddl/",
      "status": "upcoming",
      "description": "Visual Localization Benchmark Sprint ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
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
    },
    {
      "id": "nlp-ddl-sigdial-2027-paper-submission-2027-01-15",
      "title": "SIGDIAL 2027 Paper Submission",
      "deadline": "2027-01-15T23:59:59",
      "dateRange": "Jan 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "coverage",
        "seed"
      ],
      "url": "https://just-agent.github.io/just-ddl/",
      "status": "upcoming",
      "description": "SIGDIAL 2027 Paper Submission ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "nlp-ddl-bea-shared-task-2027-2027-02-02",
      "title": "BEA Shared Task 2027",
      "deadline": "2027-02-02T23:59:59",
      "dateRange": "Feb 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "coverage",
        "seed"
      ],
      "url": "https://just-agent.github.io/just-ddl/",
      "status": "upcoming",
      "description": "BEA Shared Task 2027 ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "nlp-ddl-clpsych-shared-task-2027-2027-02-20",
      "title": "CLPsych Shared Task 2027",
      "deadline": "2027-02-20T23:59:59",
      "dateRange": "Feb 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "coverage",
        "seed"
      ],
      "url": "https://just-agent.github.io/just-ddl/",
      "status": "upcoming",
      "description": "CLPsych Shared Task 2027 ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "nlp-ddl-long-context-llm-evaluation-track-2027-03-10",
      "title": "Long Context LLM Evaluation Track",
      "deadline": "2027-03-10T23:59:59",
      "dateRange": "Mar 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "coverage",
        "seed"
      ],
      "url": "https://just-agent.github.io/just-ddl/",
      "status": "upcoming",
      "description": "Long Context LLM Evaluation Track ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "nlp-ddl-chinese-mrc-leaderboard-refresh-2027-03-28",
      "title": "Chinese MRC Leaderboard Refresh",
      "deadline": "2027-03-28T23:59:59",
      "dateRange": "Mar 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "coverage",
        "seed"
      ],
      "url": "https://just-agent.github.io/just-ddl/",
      "status": "upcoming",
      "description": "Chinese MRC Leaderboard Refresh ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "nlp-ddl-low-resource-mt-track-2027-04-15",
      "title": "Low-Resource MT Track",
      "deadline": "2027-04-15T23:59:59",
      "dateRange": "Apr 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "coverage",
        "seed"
      ],
      "url": "https://just-agent.github.io/just-ddl/",
      "status": "upcoming",
      "description": "Low-Resource MT Track ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "nlp-ddl-nlp-safety-evaluation-sprint-2027-05-03",
      "title": "NLP Safety Evaluation Sprint",
      "deadline": "2027-05-03T23:59:59",
      "dateRange": "May 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "coverage",
        "seed"
      ],
      "url": "https://just-agent.github.io/just-ddl/",
      "status": "upcoming",
      "description": "NLP Safety Evaluation Sprint ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "nlp-ddl-rag-evaluation-shared-task-2027-05-21",
      "title": "RAG Evaluation Shared Task",
      "deadline": "2027-05-21T23:59:59",
      "dateRange": "May 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "coverage",
        "seed"
      ],
      "url": "https://just-agent.github.io/just-ddl/",
      "status": "upcoming",
      "description": "RAG Evaluation Shared Task ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
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
    },
    {
      "id": "academic-ddl-ijcai-2027-abstract-2027-01-15",
      "title": "IJCAI 2027 Abstract",
      "deadline": "2027-01-15T23:59:59",
      "dateRange": "Jan 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "coverage",
        "seed"
      ],
      "url": "https://just-agent.github.io/just-ddl/",
      "status": "upcoming",
      "description": "IJCAI 2027 Abstract ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "academic-ddl-thewebconf-2027-research-track-2027-02-02",
      "title": "TheWebConf 2027 Research Track",
      "deadline": "2027-02-02T23:59:59",
      "dateRange": "Feb 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "coverage",
        "seed"
      ],
      "url": "https://just-agent.github.io/just-ddl/",
      "status": "upcoming",
      "description": "TheWebConf 2027 Research Track ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "academic-ddl-uist-2027-papers-2027-02-20",
      "title": "UIST 2027 Papers",
      "deadline": "2027-02-20T23:59:59",
      "dateRange": "Feb 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "coverage",
        "seed"
      ],
      "url": "https://just-agent.github.io/just-ddl/",
      "status": "upcoming",
      "description": "UIST 2027 Papers ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "academic-ddl-siggraph-asia-2027-technical-papers-2027-03-10",
      "title": "SIGGRAPH Asia 2027 Technical Papers",
      "deadline": "2027-03-10T23:59:59",
      "dateRange": "Mar 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "coverage",
        "seed"
      ],
      "url": "https://just-agent.github.io/just-ddl/",
      "status": "upcoming",
      "description": "SIGGRAPH Asia 2027 Technical Papers ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "academic-ddl-cikm-2027-full-paper-2027-03-28",
      "title": "CIKM 2027 Full Paper",
      "deadline": "2027-03-28T23:59:59",
      "dateRange": "Mar 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "coverage",
        "seed"
      ],
      "url": "https://just-agent.github.io/just-ddl/",
      "status": "upcoming",
      "description": "CIKM 2027 Full Paper ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "academic-ddl-iswc-2027-research-track-2027-04-15",
      "title": "ISWC 2027 Research Track",
      "deadline": "2027-04-15T23:59:59",
      "dateRange": "Apr 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "coverage",
        "seed"
      ],
      "url": "https://just-agent.github.io/just-ddl/",
      "status": "upcoming",
      "description": "ISWC 2027 Research Track ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "academic-ddl-research-internship-application-window-2027-05-03",
      "title": "Research Internship Application Window",
      "deadline": "2027-05-03T23:59:59",
      "dateRange": "May 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "coverage",
        "seed"
      ],
      "url": "https://just-agent.github.io/just-ddl/",
      "status": "upcoming",
      "description": "Research Internship Application Window ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "academic-ddl-global-phd-application-early-batch-2027-05-21",
      "title": "Global PhD Application Early Batch",
      "deadline": "2027-05-21T23:59:59",
      "dateRange": "May 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "coverage",
        "seed"
      ],
      "url": "https://just-agent.github.io/just-ddl/",
      "status": "upcoming",
      "description": "Global PhD Application Early Batch ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    }
  ],
  "journal-ddl": [
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
      "description": "December 2026 15 May 2026",
      "stage": "Call for Papers",
      "source": "IEEE Communications Magazine CFP",
      "type": "journal"
    },
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
      "description": "Fourth Quarter 2026 15 May 2026",
      "stage": "Call for Papers",
      "source": "IEEE JSAC CFP",
      "type": "journal"
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
      "description": "Submission deadline: 15-May-2026 Publication date: December-2026",
      "stage": "Special Issue",
      "source": "IEEE SPS Special Issue Deadlines",
      "type": "journal"
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
      "description": "Guest editors: Matteo Verotti, Guimin Chen, Just Herder, Jonathan Hopkins  •_Impact Factor 5.3_•_CiteScore 11.4_ Submission deadline:**31 May 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "•_Impact Factor 9.6_•_CiteScore 16.8_ Submission deadline:**31 May 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "First Quarter 2027 31 May 2026",
      "stage": "Call for Papers",
      "source": "IEEE Communications Magazine CFP",
      "type": "journal"
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
      "description": "Fourth Quarter 2026 31 May 2026",
      "stage": "Call for Papers",
      "source": "IEEE Communications Magazine CFP",
      "type": "journal"
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
      "description": "Guest editors: Selcuk Uluagac, Rebecca Montanari, Francesco Flammini, Carlo Mazzocca  •_Impact Factor 5.3_•_CiteScore 10.8_ Submission deadline:**01 June 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Raffaele R. Bruno, Kostas Chounos, Shashikant Ilager  •_Impact Factor 4.3_•_CiteScore 11.5_ Submission deadline:**06 June 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": " •_Impact Factor 10.3_•_CiteScore 19.9_ Submission deadline:**08 June 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Submission deadline: 15 June 2026 Publication date: January 2027",
      "stage": "Special Issue",
      "source": "IEEE SPS Special Issue Deadlines",
      "type": "journal"
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
      "description": "金属-空气电池材料进展、设计优化与实际应用专题。",
      "stage": "Special Issue",
      "source": "Elsevier Chinese CFP seed",
      "type": "journal"
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
      "description": "电池可持续发展专题。",
      "stage": "Special Issue",
      "source": "Elsevier Chinese CFP seed",
      "type": "journal"
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
      "description": "电能存储设备可持续发展及循环经济专题。",
      "stage": "Special Issue",
      "source": "Elsevier Chinese CFP seed",
      "type": "journal"
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
      "description": "新兴太阳能电池可持续材料与界面进展专题。",
      "stage": "Special Issue",
      "source": "Elsevier Chinese CFP seed",
      "type": "journal"
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
      "description": "微污染物去除专题，可在两个期刊中选择投稿。",
      "stage": "VSI: ReMP",
      "source": "Elsevier Chinese CFP seed",
      "type": "journal"
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
      "description": "可再生能源及储能系统热安全与防火研究专题。",
      "stage": "Special Issue",
      "source": "Elsevier Chinese CFP seed",
      "type": "journal"
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
      "description": "人工智能驱动下的绿色转型系统路径专题。",
      "stage": "Special Issue",
      "source": "Elsevier Chinese CFP seed",
      "type": "journal"
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
      "description": "异质集成光子芯片专题。",
      "stage": "Special Issue",
      "source": "Elsevier Chinese CFP seed",
      "type": "journal"
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
      "description": "面向可持续能源技术的数字孪生与情景评估专题。",
      "stage": "Special Issue",
      "source": "Elsevier Chinese CFP seed",
      "type": "journal"
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
      "description": "光/电催化技术在清洁能源与环境领域应用专题。",
      "stage": "Special Issue",
      "source": "Elsevier Chinese CFP seed",
      "type": "journal"
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
      "description": "Guest editors: Bingyu Zhao, Guenter Emberger, Sebastian Belz, Takeru Shibayama, Jonas De Vos  Submission deadline:**30 June 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Alexandre A. Madeira, Jing Wang  •_Impact Factor 1.2_•_CiteScore 2.8_ Submission deadline:**30 June 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Hyungil Kim, Isaac Cho, Myounghoon Jeon, Heejin Jeong, Kangsoo Kim  •_Impact Factor 2.8_•_CiteScore 6.1_ Submission deadline:**01 July 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Giulia Zanderighi  •_Impact Factor 29.5_•_CiteScore 49.9_ Submission deadline:**01 July 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editor: Carol M Connell  •_Impact Factor 2.5_•_CiteScore 6.9_ Submission deadline:**15 July 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Praveen Chandra Srivastava, James Vary, Shirokov M Andrey, Takaharu Otsuka, Venkata Krishna Brahmam Kota  Submission deadline:**15 July 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editor: David Bowman  Submission deadline:**15 July 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Submission deadline: 30-July-2026 Publication date (tentative): Q1, 2027",
      "stage": "Special Issue",
      "source": "IEEE SPS Special Issue Deadlines",
      "type": "journal"
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
      "description": "Guest editors: Andrew Urquhart, Ailie Charteris  •_Impact Factor 5.6_•_CiteScore 7.3_ Submission deadline:**31 July 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Pranav Vemula, Reshma Bhagat & Carla Yuede  •_Impact Factor 2.5_•_CiteScore 6.1_ Submission deadline:**31 July 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Submission deadline: 31 July 2026 Publication date: March 2027",
      "stage": "Special Issue",
      "source": "IEEE SPS Special Issue Deadlines",
      "type": "journal"
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
      "description": "Guest editors: Ehiaze Ehimen; Vignesh Kumaravel; Anna Masek; Tannaz Alizadeh Ashrafi  •_Impact Factor 7.9_•_CiteScore 7.3_ Submission deadline:**01 August 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Loukia-Maria Fratsea, PhD, Alin Croitoru, PhD  Submission deadline:**01 August 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Submission deadline: 01-August-2026 Publication date (tentative): Q1, 2027",
      "stage": "Special Issue",
      "source": "IEEE SPS Special Issue Deadlines",
      "type": "journal"
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
      "description": "Guest editors: Ye Zhou, Daniel Israel, Eric Johnsen  •_Impact Factor 2.9_•_CiteScore 4.6_ Submission deadline:**08 August 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "•_Impact Factor 5.3_•_CiteScore 11.2_ Submission deadline:**31 August 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "•_Impact Factor 8.4_•_CiteScore 15.2_ Submission deadline:**31 August 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Daniele Spatola, Rossella Di Mento, Elena Scacchia and Fabiano Gamberi  •_Impact Factor 1.8_•_CiteScore 5.9_ Submission deadline:**31 August 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": " •_CiteScore 1.7_ Submission deadline:**10 September 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Judith F. Baumhauer & Jeffery R. Houck  Submission deadline:**14 September 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Felix Fischer & Xiaodan Tang  Submission deadline:**14 September 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Pamela Lein and Kamil Jurowski  •_Impact Factor 3.5_•_CiteScore 9.9_ Submission deadline:**30 September 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": " •_CiteScore 3.1_ Submission deadline:**30 September 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Cristiana Boi, Todd Przybycien, Hanne Bak, Sanchayita Ghose  •_Impact Factor 9.0_•_CiteScore 15.1_ Submission deadline:**30 September 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Professor Magdalena Gajewska, Assistant Professor Alexandros Stefanakis, Associate Professor Katarzyna Kołecka and Associate professor Diederik Rousseau  •_Impact Factor 4.1_•_CiteScore 8.6_ Submission dea",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Prof. Dr. Henrik Rudolph, Prof. Dr. WeiXin Huang, Prof. Dr. Andrew Teplyakov, Prof. Dr. Byungchan Han, Prof. Dr. Maria Dinescu  •_Impact Factor 6.9_•_CiteScore 13.4_ Submission deadline:**01 October 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Julia L. Finkelstein & Jean-Louis Guéant  •_Impact Factor 3.8_•_CiteScore 6.9_ Submission deadline:**01 October 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Dr. Jocelyn Hafer, Dr. Stephen Cain  •_Impact Factor 2.4_•_CiteScore 4.9_ Submission deadline:**01 October 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Pantelis Mikropoulos; Thomas Tsovilis; Alexandre Piantini  •_Impact Factor 4.2_•_CiteScore 8.2_ Submission deadline:**01 October 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Mukesh Bachhav, Maria Okuniewski, Stephen Taller  •_Impact Factor 3.2_•_CiteScore 6.2_ Submission deadline:**01 October 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Yu Zhang; Zhiheng Lyu; Ming Zhao  •_Impact Factor 4.6_•_CiteScore 7.5_ Submission deadline:**11 October 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Daniel Archambault; Fernando Paulovich  •_Impact Factor 2.8_•_CiteScore 6.1_ Submission deadline:**15 October 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Krishna Kumar, Hady Habib Fayek, Sivakumar Nadarajan, Nitin Singh  •_Impact Factor 7.0_•_CiteScore 17.3_ Submission deadline:**15 October 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Carla Sofia Santos Ferreira, Cong Cong, Tomás de Figueiredo, Rares Halbac-Cotoara-Zamfir, Zahra Kalantari  •_Impact Factor 8.0_•_CiteScore 14.7_ Submission deadline:**15 October 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Giuseppe Filomeni and Chiara Pecorari  •_Impact Factor 11.9_•_CiteScore 19.5_ Submission deadline:**16 October 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Yaping Chen; Xiaobo Zheng; Mengwei Yuan; Song Chen; Liu Lin  •_Impact Factor 4.6_•_CiteScore 7.5_ Submission deadline:**31 October 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Ignacio Díaz Martínez, Jérémy Duveau and Kevin G. Hatala  •_Impact Factor 2.2_•_CiteScore 3.8_ Submission deadline:**31 October 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": " •_Impact Factor 3.6_•_CiteScore 6.8_ Submission deadline:**31 October 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Sai Ding, Ximing Yue, Lina Song, Shi Li  •_Impact Factor 5.5_•_CiteScore 8.2_ Submission deadline:**31 October 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Vinod Kumar, Renato Somma and Maja Radziemska  •_Impact Factor 4.6_•_CiteScore 7.2_ Submission deadline:**31 October 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Prof Liye Zou, Dr Yanjie Zhang, Dr Lin Luo, Dr Qian Yu, Dr Yanxia Chen, Dr Yuke Teng, Dr Xinxing Li  •_Impact Factor 3.5_•_CiteScore 7.7_ Submission deadline:**31 October 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Luke P. Lee; Xiao Yang; Deok-Ho Kim; Sei Kwang Hahn; Man Bock Gu  •_Impact Factor 10.5_•_CiteScore 20.9_ Submission deadline:**31 October 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Kaustabh Kumar Maiti; U. S Dinish  •_Impact Factor 3.7_•_CiteScore 7.2_ Submission deadline:**31 October 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Nezam Bozorgzadeh, Yu Feng  •_Impact Factor 6.2_•_CiteScore 9.0_ Submission deadline:**31 October 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Rob Poole, Jonathan Rothstein  •_Impact Factor 2.8_•_CiteScore 5.3_ Submission deadline:**01 November 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Gert Rijlaarsdam PhD., Jingxian Wang, PhD., Paula López, PhD., Per Henning Uppstad, PhD., Valeri Murnikov, PhD.  Submission deadline:**01 November 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Celia Garcia and Jason A Tetro  •_Impact Factor 5.8_•_CiteScore 10.0_ Submission deadline:**01 November 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "This Special Issue welcomes high-quality review papers that advance management knowledge in regional or global contexts.  •_Impact Factor 5.6_•_CiteScore 11.4_ Submission deadline:**01 November 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Jia-Bao Yan, Xudong Qian, Amin Heidarpour  •_Impact Factor 4.3_•_CiteScore 7.8_ Submission deadline:**07 November 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": " •_Impact Factor 1.2_•_CiteScore 2.8_ Submission deadline:**30 November 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: José Proença, Umberto Rivieccio  •_Impact Factor 1.2_•_CiteScore 2.8_ Submission deadline:**30 November 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": " •_Impact Factor 5.4_•_CiteScore 7.3_ Submission deadline:**30 November 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Dr. Filomena Piscitelli, Dr. Bartlomiej Przybyszewski, Dr. Julio Mora Nogués, Dr. Mariachiara Gallia  •_Impact Factor 8.7_•_CiteScore 15.3_ Submission deadline:**30 November 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Taha Arbaoui, Khaled Hadj-Hamou, Malek Masmoudi  •_Impact Factor 6.5_•_CiteScore 13.2_ Submission deadline:**30 November 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Yunyun Xiong and Marc Fisher  Submission deadline:**30 November 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editor: Dr. Sara Gloria Aguilar-Navarro  •_Impact Factor 1.4_•_CiteScore 3.0_ Submission deadline:**30 November 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Vesna Najdanovic, Stephen Worrall, Ana Vital Morgado Nunes  •_CiteScore 17.1_ Submission deadline:**30 November 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Antonio Luiz B. Pinheiro; Janusz M. Dabrowski; Pedro Jorge Louro Crugeira  •_Impact Factor 3.7_•_CiteScore 7.2_ Submission deadline:**30 November 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Simona Bettini  •_Impact Factor 6.3_•_CiteScore 8.5_ Submission deadline:**01 December 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Smriti Agarwal, Kevin N. Sheth, George WJ Harston, Lisa Herzog and Ondrej Volny  Submission deadline:**01 December 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Birute Tumiene, Ursula Unterberger and Luz Yadira Bravo Gallego  •_Impact Factor 1.7_•_CiteScore 3.7_ Submission deadline:**01 December 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Haoxin Li, Yuyang Pang, Jiuwen Bao, Weina Meng  •_Impact Factor 8.0_•_CiteScore 13.9_ Submission deadline:**01 December 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Shupeng Zhu, Jing Wei, Sibo Chen  Submission deadline:**10 December 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Dr. Roberto Berni, Dr. Gea Guerriero, Prof. Giancarlo Renella, Prof. Sergio Esposito  •_Impact Factor 7.7_•_CiteScore 6.6_ Submission deadline:**11 December 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: José Luis Moura, Luigi dell’Olio, António Lobo, Sérgio Pedro Duarte  •_Impact Factor 4.4_•_CiteScore 8.7_ Submission deadline:**17 December 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Matthieu Marbac, Wan-Lun Wang, Weixin Yao  •_Impact Factor 2.5_•_CiteScore 4.0_ Submission deadline:**20 December 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Badi Baltagi, Kazuhiko Hayakawa, Degui Li, Vasilis Sarafidis, Erricos Kontoghiorghes  •_Impact Factor 2.5_•_CiteScore 4.0_ Submission deadline:**20 December 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Jingyu Ran, Selim Ceylan, Lele Feng, Daya Pandey  •_CiteScore 2.2_ Submission deadline:**30 December 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "IEEE ComSoc Magazine CFP 入口，实际 DDL 需按专题详情页继续拆分。",
      "stage": "CFP board",
      "source": "IEEE official seed",
      "type": "journal"
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
      "description": "通信领域重点期刊专题入口，用作 crawler seed。",
      "stage": "CFP board",
      "source": "IEEE official seed",
      "type": "journal"
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
      "description": "SPS 特刊截止日列表入口，覆盖信号、语音、图像、多媒体方向。",
      "stage": "Deadline board",
      "source": "IEEE official seed",
      "type": "journal"
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
      "description": "IEEE Access Special Sections 入口，注意术语通常为 Special Section。",
      "stage": "Special Section",
      "source": "IEEE official seed",
      "type": "journal"
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
      "description": "Elsevier 主要 CFP 总入口，适合作为 crawler 主入口。",
      "stage": "CFP board",
      "source": "Elsevier official seed",
      "type": "journal"
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
      "description": "IEEE 投稿系统入口，后续用于保存 Special Section / Article Type 选择说明。",
      "stage": "Submission platform",
      "source": "IEEE official seed",
      "type": "journal"
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
      "description": "Guest editors: Carla M.A Pinto, Julia Calatayud, Marc Jornet  •_Impact Factor 5.6_•_CiteScore 9.9_ Submission deadline:**31 December 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Makoto Ogawa, Eduardo Ruiz-Hitzky, Takeo Ebina and Tetsuji Itoh  •_Impact Factor 5.8_•_CiteScore 10.3_ Submission deadline:**31 December 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Greg Young and Andy Nelson  Submission deadline:**31 December 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Christoph Jansen; Georg Schollmeyer; Julian Rodemann; Rudolf Seising.  •_Impact Factor 3.0_•_CiteScore 6.2_ Submission deadline:**31 December 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editor: Mamilla Ravi Sankar  Submission deadline:**31 December 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Sook-Lei Liew, Lara Boyd, Amy Brodtmann and Brenton Hordacre  Submission deadline:**31 December 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Junying Min, Jinjin Ha, Glenn Daehn, Xunzhong Guo  •_Impact Factor 6.0_•_CiteScore 11.2_ Submission deadline:**31 December 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Helena Kandarova, Luiz Ladeira and Mohamed Fathi Abdallah  •_Impact Factor 2.7_•_CiteScore 5.5_ Submission deadline:**31 December 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": " Submission deadline:**31 December 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editor: Dr. Lam T Duong  Submission deadline:**31 December 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editor: Richard Luxton  •_Impact Factor 7.6_•_CiteScore 11.0_ Submission deadline:**31 December 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Phillip Zhe Sun, Esra Zihni, Vivek Prabhakaran, Risto A. Kauppinen and Fahmeed Hyder  Submission deadline:**31 December 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Kirsty Donald, Derek Jones, Karen Chetcuti, Godwin Ogbole and Jo Wilmshurst  •_Impact Factor 4.5_•_CiteScore 10.8_ Submission deadline:**31 December 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "•_Impact Factor 4.6_•_CiteScore 7.5_ Submission deadline:**31 December 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Ewa K. Kowalska; Wojciech Macyk; Francesco Parrino; Zhishun Wei; Zuzanna Bielan  •_Impact Factor 4.7_•_CiteScore 7.8_ Submission deadline:**31 December 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "•_Impact Factor 4.2_•_CiteScore 7.9_ Submission deadline:**31 December 2026**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Hongliang Ding, Hui-Jun Sun, Kun Wang, Shaopeng Zhong  •_Impact Factor 5.7_•_CiteScore 9.2_ Submission deadline:**01 January 2027**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Foster Olive and Scott Rawls  •_Impact Factor 4.6_•_CiteScore 9.4_ Submission deadline:**01 January 2027**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Shengfeng Zhu, Jan Sokolowski, Wei Gong  •_Impact Factor 3.8_•_CiteScore 6.6_ Submission deadline:**01 January 2027**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Dr. Sanu Mathew Simon, Dr. Nilanthy Balakrishnan, Dr. Irshad Kammakakam  •_Impact Factor 4.4_•_CiteScore 3.9_ Submission deadline:**02 January 2027**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Elena Rusconi, Sergio Della Sala and Naama Friedmann  •_Impact Factor 3.3_•_CiteScore 6.1_ Submission deadline:**15 January 2027**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Claudio Antares Mezzina  •_Impact Factor 1.2_•_CiteScore 2.8_ Submission deadline:**31 January 2027**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Sang-Il Choi, Suresh Sundaramurthy, Bhargavi Rani Anne  •_Impact Factor 3.3_•_CiteScore 5.4_ Submission deadline:**31 January 2027**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Dr. Sam Elliott, Dr. Chris S Whatman, Dr. Simon Walters, Dr. Deb Agnew  Submission deadline:**31 January 2027**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Dr. Barret Michalec, Christine Arenson  •_CiteScore 2.2_ Submission deadline:**31 January 2027**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Yanchao Mao, Yanhao Yu  •_CiteScore 0.7_ Submission deadline:**31 January 2027**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Jun Xu; Xiang Gao; Wenquan Lu  •_Impact Factor 7.9_•_CiteScore 14.9_ Submission deadline:**31 January 2027**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Rafael Machado Dornellas; Rodrigo Alejandro Abarza Muñoz; João Victor Nicolini; Helen Ferraz; Felipe Silva Semaan  •_Impact Factor 4.1_•_CiteScore 8.1_ Submission deadline:**31 January 2027**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Dr. Zhao Zhang, Dr. Xiangdong Xu, Dr. Jiangping Zhou, Dr. Albert Solé Ribalta  •_Impact Factor 7.7_•_CiteScore 14.2_ Submission deadline:**12 February 2027**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Paul Dyson, Robert Franke, Qiang Xu  •_Impact Factor 23.5_•_CiteScore 38.2_ Submission deadline:**28 February 2027**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Kimberly Kurtis, Marta Palacios  •_Impact Factor 13.1_•_CiteScore 23.5_ Submission deadline:**28 February 2027**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Dr. Nicholas A. Livingston and Dr. Kelly Harper  Submission deadline:**01 March 2027**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Necati Ozdemir; Ender Ozcan; Anthony Siming Chen  •_Impact Factor 8.0_•_CiteScore 9.5_ Submission deadline:**01 March 2027**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Florence Doo & Michail Klontzas  Submission deadline:**10 March 2027**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Dr. Ambereen Kurwa Mehta  •_Impact Factor 3.5_•_CiteScore 6.2_ Submission deadline:**30 March 2027**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Jorge E. Araña Padilla, Katarzyna Czernek-Marszałek  •_Impact Factor 7.8_•_CiteScore 16.2_ Submission deadline:**31 March 2027**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Xi Li & Ruichao Li  •_Impact Factor 4.6_•_CiteScore 5.8_ Submission deadline:**30 April 2027**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Sean Cao, Allen Huang, Katsuyuki Kubo, Yohei Yamamoto, Clara Zhou  •_Impact Factor 5.3_•_CiteScore 7.2_ Submission deadline:**30 April 2027**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Christian Papp, Gareth Steven Parkinson, Lars C. Grabow  •_Impact Factor 1.8_•_CiteScore 3.5_ Submission deadline:**01 May 2027**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Carie R Boychuk, Ian Wenker  •_Impact Factor 5.1_•_CiteScore 10.9_ Submission deadline:**10 May 2027**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Tao Feng, Bo Zou, Lingxiao Wu  Submission deadline:**13 May 2027**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Erlend Dancke Sandorf, Klaus Glenk, Jürgen Meyerhoff  •_Impact Factor 2.4_•_CiteScore 5.6_ Submission deadline:**15 May 2027**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Professor Vivek Ranade, Professor Giancarlo Cravotto, Professor Matevz Dular,  •_Impact Factor 9.7_•_CiteScore 17.7_ Submission deadline:**31 May 2027**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": " •_CiteScore 23.3_ Submission deadline:**31 May 2027**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: David B. Audretsch, Maksim Belitski, Antje Fiedler, Donald F. Kuratko, Albert N. Link, Donald S. Siegel  •_Impact Factor 8.0_•_CiteScore 15.0_ Submission deadline:**01 June 2027**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Ivan Enrique I. Campos-Silva  •_Impact Factor 6.1_•_CiteScore 10.2_ Submission deadline:**30 June 2027**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Dr. Noéli Boscato, Dr. Anelise Fernandes Montagner  Submission deadline:**01 July 2027**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": "Guest editors: Jenny Jianqiang Cui, Liang Ma, Dong Lin, Yena Song, Zhipeng Zhou  •_Impact Factor 7.4_•_CiteScore 13.0_ Submission deadline:**31 August 2027**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
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
      "description": " •_Impact Factor 6.1_•_CiteScore 9.4_ Submission deadline:**31 December 2027**",
      "stage": "Call for Papers",
      "source": "ScienceDirect Browse Calls for Papers",
      "type": "journal"
    },
    {
      "id": "journal-ddl-ieee-tai-special-issue-on-trustworthy-agentic-ai-2027-01-15",
      "title": "IEEE TAI Special Issue on Trustworthy Agentic AI",
      "deadline": "2027-01-15T23:59:59",
      "dateRange": "Jan 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "coverage",
        "seed"
      ],
      "url": "https://just-agent.github.io/just-ddl/",
      "status": "upcoming",
      "description": "IEEE TAI Special Issue on Trustworthy Agentic AI ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "journal"
    },
    {
      "id": "journal-ddl-acm-tois-special-issue-on-rag-systems-2027-02-02",
      "title": "ACM TOIS Special Issue on RAG Systems",
      "deadline": "2027-02-02T23:59:59",
      "dateRange": "Feb 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "coverage",
        "seed"
      ],
      "url": "https://just-agent.github.io/just-ddl/",
      "status": "upcoming",
      "description": "ACM TOIS Special Issue on RAG Systems ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "journal"
    },
    {
      "id": "journal-ddl-patterns-special-issue-on-ai-for-science-workflows-2027-02-20",
      "title": "Patterns Special Issue on AI for Science Workflows",
      "deadline": "2027-02-20T23:59:59",
      "dateRange": "Feb 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "coverage",
        "seed"
      ],
      "url": "https://just-agent.github.io/just-ddl/",
      "status": "upcoming",
      "description": "Patterns Special Issue on AI for Science Workflows ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "journal"
    },
    {
      "id": "journal-ddl-ieee-access-special-section-on-edge-ai-systems-2027-03-10",
      "title": "IEEE Access Special Section on Edge AI Systems",
      "deadline": "2027-03-10T23:59:59",
      "dateRange": "Mar 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "coverage",
        "seed"
      ],
      "url": "https://just-agent.github.io/just-ddl/",
      "status": "upcoming",
      "description": "IEEE Access Special Section on Edge AI Systems ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "journal"
    },
    {
      "id": "journal-ddl-elsevier-vsi-on-sustainable-computing-infrastructure-2027-03-28",
      "title": "Elsevier VSI on Sustainable Computing Infrastructure",
      "deadline": "2027-03-28T23:59:59",
      "dateRange": "Mar 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "coverage",
        "seed"
      ],
      "url": "https://just-agent.github.io/just-ddl/",
      "status": "upcoming",
      "description": "Elsevier VSI on Sustainable Computing Infrastructure ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "journal"
    },
    {
      "id": "journal-ddl-nature-scientific-data-collection-on-benchmark-datasets-2027-04-15",
      "title": "Nature Scientific Data Collection on Benchmark Datasets",
      "deadline": "2027-04-15T23:59:59",
      "dateRange": "Apr 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "coverage",
        "seed"
      ],
      "url": "https://just-agent.github.io/just-ddl/",
      "status": "upcoming",
      "description": "Nature Scientific Data Collection on Benchmark Datasets ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "journal"
    },
    {
      "id": "journal-ddl-ieee-comsoc-magazine-feature-topic-on-6g-ai-native-networks-2027-05-03",
      "title": "IEEE ComSoc Magazine Feature Topic on 6G AI-Native Networks",
      "deadline": "2027-05-03T23:59:59",
      "dateRange": "May 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "coverage",
        "seed"
      ],
      "url": "https://just-agent.github.io/just-ddl/",
      "status": "upcoming",
      "description": "IEEE ComSoc Magazine Feature Topic on 6G AI-Native Networks ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "journal"
    },
    {
      "id": "journal-ddl-frontiers-research-topic-on-human-centered-ai-agents-2027-05-21",
      "title": "Frontiers Research Topic on Human-Centered AI Agents",
      "deadline": "2027-05-21T23:59:59",
      "dateRange": "May 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "coverage",
        "seed"
      ],
      "url": "https://just-agent.github.io/just-ddl/",
      "status": "upcoming",
      "description": "Frontiers Research Topic on Human-Centered AI Agents ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "journal"
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
    },
    {
      "id": "programming-ddl-atcoder-heuristic-contest-sprint-2027-01-15",
      "title": "AtCoder Heuristic Contest Sprint",
      "deadline": "2027-01-15T23:59:59",
      "dateRange": "Jan 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "coverage",
        "seed"
      ],
      "url": "https://just-agent.github.io/just-ddl/",
      "status": "upcoming",
      "description": "AtCoder Heuristic Contest Sprint ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "programming-ddl-codeforces-global-round-refresh-2027-02-02",
      "title": "Codeforces Global Round Refresh",
      "deadline": "2027-02-02T23:59:59",
      "dateRange": "Feb 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "coverage",
        "seed"
      ],
      "url": "https://just-agent.github.io/just-ddl/",
      "status": "upcoming",
      "description": "Codeforces Global Round Refresh ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "programming-ddl-icpc-challenge-practice-window-2027-02-20",
      "title": "ICPC Challenge Practice Window",
      "deadline": "2027-02-20T23:59:59",
      "dateRange": "Feb 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "coverage",
        "seed"
      ],
      "url": "https://just-agent.github.io/just-ddl/",
      "status": "upcoming",
      "description": "ICPC Challenge Practice Window ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "programming-ddl-leetcode-biweekly-contest-milestone-2027-03-10",
      "title": "LeetCode Biweekly Contest Milestone",
      "deadline": "2027-03-10T23:59:59",
      "dateRange": "Mar 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "coverage",
        "seed"
      ],
      "url": "https://just-agent.github.io/just-ddl/",
      "status": "upcoming",
      "description": "LeetCode Biweekly Contest Milestone ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "programming-ddl-nowcoder-multi-school-training-2027-03-28",
      "title": "Nowcoder Multi-School Training",
      "deadline": "2027-03-28T23:59:59",
      "dateRange": "Mar 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "coverage",
        "seed"
      ],
      "url": "https://just-agent.github.io/just-ddl/",
      "status": "upcoming",
      "description": "Nowcoder Multi-School Training ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "programming-ddl-luogu-monthly-contest-2027-04-15",
      "title": "Luogu Monthly Contest",
      "deadline": "2027-04-15T23:59:59",
      "dateRange": "Apr 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "coverage",
        "seed"
      ],
      "url": "https://just-agent.github.io/just-ddl/",
      "status": "upcoming",
      "description": "Luogu Monthly Contest ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "programming-ddl-topcoder-open-algorithm-track-2027-05-03",
      "title": "Topcoder Open Algorithm Track",
      "deadline": "2027-05-03T23:59:59",
      "dateRange": "May 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "coverage",
        "seed"
      ],
      "url": "https://just-agent.github.io/just-ddl/",
      "status": "upcoming",
      "description": "Topcoder Open Algorithm Track ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "programming-ddl-project-euler-challenge-month-2027-05-21",
      "title": "Project Euler Challenge Month",
      "deadline": "2027-05-21T23:59:59",
      "dateRange": "May 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "coverage",
        "seed"
      ],
      "url": "https://just-agent.github.io/just-ddl/",
      "status": "upcoming",
      "description": "Project Euler Challenge Month ?????????? crawler ??????????",
      "stage": "Coverage",
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
    },
    {
      "id": "holiday-ddl-2027-2027-01-15",
      "title": "??? 2027",
      "deadline": "2027-01-15T23:59:59",
      "dateRange": "Jan 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "coverage",
        "seed"
      ],
      "url": "https://just-agent.github.io/just-ddl/",
      "status": "upcoming",
      "description": "??? 2027 ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "holiday"
    },
    {
      "id": "holiday-ddl-2027-2027-02-02",
      "title": "??? 2027",
      "deadline": "2027-02-02T23:59:59",
      "dateRange": "Feb 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "coverage",
        "seed"
      ],
      "url": "https://just-agent.github.io/just-ddl/",
      "status": "upcoming",
      "description": "??? 2027 ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "holiday"
    },
    {
      "id": "holiday-ddl-2027-2027-02-20",
      "title": "??? 2027",
      "deadline": "2027-02-20T23:59:59",
      "dateRange": "Feb 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "coverage",
        "seed"
      ],
      "url": "https://just-agent.github.io/just-ddl/",
      "status": "upcoming",
      "description": "??? 2027 ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "holiday"
    },
    {
      "id": "holiday-ddl-2027-2027-03-10",
      "title": "??? 2027",
      "deadline": "2027-03-10T23:59:59",
      "dateRange": "Mar 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "coverage",
        "seed"
      ],
      "url": "https://just-agent.github.io/just-ddl/",
      "status": "upcoming",
      "description": "??? 2027 ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "holiday"
    },
    {
      "id": "holiday-ddl-2027-2027-03-28",
      "title": "??? 2027",
      "deadline": "2027-03-28T23:59:59",
      "dateRange": "Mar 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "coverage",
        "seed"
      ],
      "url": "https://just-agent.github.io/just-ddl/",
      "status": "upcoming",
      "description": "??? 2027 ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "holiday"
    },
    {
      "id": "holiday-ddl-halloween-2027-2027-04-15",
      "title": "Halloween 2027",
      "deadline": "2027-04-15T23:59:59",
      "dateRange": "Apr 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "coverage",
        "seed"
      ],
      "url": "https://just-agent.github.io/just-ddl/",
      "status": "upcoming",
      "description": "Halloween 2027 ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "holiday"
    },
    {
      "id": "holiday-ddl-thanksgiving-day-2027-2027-05-03",
      "title": "Thanksgiving Day 2027",
      "deadline": "2027-05-03T23:59:59",
      "dateRange": "May 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "coverage",
        "seed"
      ],
      "url": "https://just-agent.github.io/just-ddl/",
      "status": "upcoming",
      "description": "Thanksgiving Day 2027 ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "holiday"
    },
    {
      "id": "holiday-ddl-christmas-day-2027-2027-05-21",
      "title": "Christmas Day 2027",
      "deadline": "2027-05-21T23:59:59",
      "dateRange": "May 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "coverage",
        "seed"
      ],
      "url": "https://just-agent.github.io/just-ddl/",
      "status": "upcoming",
      "description": "Christmas Day 2027 ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "holiday"
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
    },
    {
      "id": "multimodal-ddl-visualwebarena-refresh-2027-01-15",
      "title": "VisualWebArena Refresh",
      "deadline": "2027-01-15T23:59:59",
      "dateRange": "Jan 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "coverage",
        "seed"
      ],
      "url": "https://just-agent.github.io/just-ddl/",
      "status": "upcoming",
      "description": "VisualWebArena Refresh ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "multimodal-ddl-omnibench-multimodal-evaluation-2027-02-02",
      "title": "OmniBench Multimodal Evaluation",
      "deadline": "2027-02-02T23:59:59",
      "dateRange": "Feb 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "coverage",
        "seed"
      ],
      "url": "https://just-agent.github.io/just-ddl/",
      "status": "upcoming",
      "description": "OmniBench Multimodal Evaluation ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "multimodal-ddl-audioset-tagging-challenge-2027-02-20",
      "title": "AudioSet Tagging Challenge",
      "deadline": "2027-02-20T23:59:59",
      "dateRange": "Feb 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "coverage",
        "seed"
      ],
      "url": "https://just-agent.github.io/just-ddl/",
      "status": "upcoming",
      "description": "AudioSet Tagging Challenge ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "multimodal-ddl-seed-bench-leaderboard-snapshot-2027-03-10",
      "title": "SEED-Bench Leaderboard Snapshot",
      "deadline": "2027-03-10T23:59:59",
      "dateRange": "Mar 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "coverage",
        "seed"
      ],
      "url": "https://just-agent.github.io/just-ddl/",
      "status": "upcoming",
      "description": "SEED-Bench Leaderboard Snapshot ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "multimodal-ddl-mmmu-pro-reasoning-track-2027-03-28",
      "title": "MMMU-Pro Reasoning Track",
      "deadline": "2027-03-28T23:59:59",
      "dateRange": "Mar 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "coverage",
        "seed"
      ],
      "url": "https://just-agent.github.io/just-ddl/",
      "status": "upcoming",
      "description": "MMMU-Pro Reasoning Track ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "multimodal-ddl-videohallucination-detection-challenge-2027-04-15",
      "title": "VideoHallucination Detection Challenge",
      "deadline": "2027-04-15T23:59:59",
      "dateRange": "Apr 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "coverage",
        "seed"
      ],
      "url": "https://just-agent.github.io/just-ddl/",
      "status": "upcoming",
      "description": "VideoHallucination Detection Challenge ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "multimodal-ddl-multimodal-medical-qa-track-2027-05-03",
      "title": "Multimodal Medical QA Track",
      "deadline": "2027-05-03T23:59:59",
      "dateRange": "May 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "coverage",
        "seed"
      ],
      "url": "https://just-agent.github.io/just-ddl/",
      "status": "upcoming",
      "description": "Multimodal Medical QA Track ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "multimodal-ddl-embodied-multimodal-planning-challenge-2027-05-21",
      "title": "Embodied Multimodal Planning Challenge",
      "deadline": "2027-05-21T23:59:59",
      "dateRange": "May 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "coverage",
        "seed"
      ],
      "url": "https://just-agent.github.io/just-ddl/",
      "status": "upcoming",
      "description": "Embodied Multimodal Planning Challenge ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
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
      "url": "https://ctftime.org",
      "status": "upcoming",
      "description": "DEF CON CTF Qualifier ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
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
      "url": "https://ctftime.org",
      "status": "upcoming",
      "description": "Google CTF 2026 ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
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
      "url": "https://ctftime.org",
      "status": "upcoming",
      "description": "Hack The Box Business CTF ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
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
      "url": "https://ctftime.org",
      "status": "upcoming",
      "description": "SECCON CTF Quals ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
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
      "url": "https://ctftime.org",
      "status": "upcoming",
      "description": "HITCON CTF ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
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
      "url": "https://ctftime.org",
      "status": "upcoming",
      "description": "Pwn2Own Entry Window ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
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
      "url": "https://ctftime.org",
      "status": "upcoming",
      "description": "Black Hat Arsenal Submission ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
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
      "url": "https://ctftime.org",
      "status": "upcoming",
      "description": "USENIX Security Artifact Evaluation ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
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
      "description": "Blue Team Village Challenge ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
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
      "url": "https://ctftime.org",
      "status": "upcoming",
      "description": "Bug Bounty Quarterly Review ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
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
      "url": "https://ctftime.org",
      "status": "upcoming",
      "description": "Real World Crypto Paper ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
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
      "description": "S&P Workshop Paper ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
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
      "description": "Cyber Defense Exercise Registration ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
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
      "description": "Mobile Security Challenge ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
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
      "description": "IoT Security Testbed Sprint ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
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
      "description": "Cloud Native Security Hackathon ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "contest"
    }
  ],
  "data-science-ddl": [
    {
      "id": "data-science-ddl-kaggle-playground-series-monthly-2026-07-01",
      "title": "Kaggle Playground Series Monthly",
      "deadline": "2026-07-01T23:59:59",
      "dateRange": "Jul 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Kaggle",
        "data mining",
        "ML"
      ],
      "url": "https://www.kaggle.com/competitions",
      "status": "upcoming",
      "description": "Kaggle Playground Series Monthly ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "data-science-ddl-alibaba-tianchi-ai-competition-2026-07-19",
      "title": "Alibaba Tianchi AI Competition",
      "deadline": "2026-07-19T23:59:59",
      "dateRange": "Jul 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Kaggle",
        "data mining",
        "ML"
      ],
      "url": "https://www.kaggle.com/competitions",
      "status": "upcoming",
      "description": "Alibaba Tianchi AI Competition ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "data-science-ddl-datacastle-financial-risk-track-2026-08-06",
      "title": "DataCastle Financial Risk Track",
      "deadline": "2026-08-06T23:59:59",
      "dateRange": "Aug 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Kaggle",
        "data mining",
        "ML"
      ],
      "url": "https://www.kaggle.com/competitions",
      "status": "upcoming",
      "description": "DataCastle Financial Risk Track ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "data-science-ddl-drivendata-climate-forecast-challenge-2026-08-24",
      "title": "DrivenData Climate Forecast Challenge",
      "deadline": "2026-08-24T23:59:59",
      "dateRange": "Aug 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Kaggle",
        "data mining",
        "ML"
      ],
      "url": "https://www.kaggle.com/competitions",
      "status": "upcoming",
      "description": "DrivenData Climate Forecast Challenge ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "data-science-ddl-zindi-africa-ml-challenge-2026-09-11",
      "title": "Zindi Africa ML Challenge",
      "deadline": "2026-09-11T23:59:59",
      "dateRange": "Sep 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Kaggle",
        "data mining",
        "ML"
      ],
      "url": "https://www.kaggle.com/competitions",
      "status": "upcoming",
      "description": "Zindi Africa ML Challenge ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "data-science-ddl-kdd-cup-practice-window-2026-09-29",
      "title": "KDD Cup Practice Window",
      "deadline": "2026-09-29T23:59:59",
      "dateRange": "Sep 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Kaggle",
        "data mining",
        "ML"
      ],
      "url": "https://www.kaggle.com/competitions",
      "status": "upcoming",
      "description": "KDD Cup Practice Window ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "data-science-ddl-neurips-data-centric-ai-workshop-2026-10-17",
      "title": "NeurIPS Data-Centric AI Workshop",
      "deadline": "2026-10-17T23:59:59",
      "dateRange": "Oct 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Kaggle",
        "data mining",
        "ML"
      ],
      "url": "https://www.kaggle.com/competitions",
      "status": "upcoming",
      "description": "NeurIPS Data-Centric AI Workshop ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "data-science-ddl-openml-benchmark-refresh-2026-11-04",
      "title": "OpenML Benchmark Refresh",
      "deadline": "2026-11-04T23:59:59",
      "dateRange": "Nov 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Kaggle",
        "data mining",
        "ML"
      ],
      "url": "https://www.kaggle.com/competitions",
      "status": "upcoming",
      "description": "OpenML Benchmark Refresh ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "data-science-ddl-m5-forecasting-refresh-2026-11-22",
      "title": "M5 Forecasting Refresh",
      "deadline": "2026-11-22T23:59:59",
      "dateRange": "Nov 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Kaggle",
        "data mining",
        "ML"
      ],
      "url": "https://www.kaggle.com/competitions",
      "status": "upcoming",
      "description": "M5 Forecasting Refresh ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "data-science-ddl-urban-data-challenge-2026-12-10",
      "title": "Urban Data Challenge",
      "deadline": "2026-12-10T23:59:59",
      "dateRange": "Dec 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Kaggle",
        "data mining",
        "ML"
      ],
      "url": "https://www.kaggle.com/competitions",
      "status": "upcoming",
      "description": "Urban Data Challenge ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "data-science-ddl-healthcare-claims-prediction-track-2026-12-28",
      "title": "Healthcare Claims Prediction Track",
      "deadline": "2026-12-28T23:59:59",
      "dateRange": "Dec 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Kaggle",
        "data mining",
        "ML"
      ],
      "url": "https://www.kaggle.com/competitions",
      "status": "upcoming",
      "description": "Healthcare Claims Prediction Track ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "data-science-ddl-graph-ml-data-challenge-2027-01-15",
      "title": "Graph ML Data Challenge",
      "deadline": "2027-01-15T23:59:59",
      "dateRange": "Jan 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Kaggle",
        "data mining",
        "ML"
      ],
      "url": "https://www.kaggle.com/competitions",
      "status": "upcoming",
      "description": "Graph ML Data Challenge ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "data-science-ddl-recommender-systems-challenge-2027-02-02",
      "title": "Recommender Systems Challenge",
      "deadline": "2027-02-02T23:59:59",
      "dateRange": "Feb 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Kaggle",
        "data mining",
        "ML"
      ],
      "url": "https://www.kaggle.com/competitions",
      "status": "upcoming",
      "description": "Recommender Systems Challenge ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "data-science-ddl-time-series-forecasting-cup-2027-02-20",
      "title": "Time Series Forecasting Cup",
      "deadline": "2027-02-20T23:59:59",
      "dateRange": "Feb 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Kaggle",
        "data mining",
        "ML"
      ],
      "url": "https://www.kaggle.com/competitions",
      "status": "upcoming",
      "description": "Time Series Forecasting Cup ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "data-science-ddl-data-visualization-storytelling-challenge-2027-03-10",
      "title": "Data Visualization Storytelling Challenge",
      "deadline": "2027-03-10T23:59:59",
      "dateRange": "Mar 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Kaggle",
        "data mining",
        "ML"
      ],
      "url": "https://www.kaggle.com/competitions",
      "status": "upcoming",
      "description": "Data Visualization Storytelling Challenge ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "data-science-ddl-open-data-impact-sprint-2027-03-28",
      "title": "Open Data Impact Sprint",
      "deadline": "2027-03-28T23:59:59",
      "dateRange": "Mar 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Kaggle",
        "data mining",
        "ML"
      ],
      "url": "https://www.kaggle.com/competitions",
      "status": "upcoming",
      "description": "Open Data Impact Sprint ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
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
      "description": "Google Summer of Code Org Application ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
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
      "description": "Google Summer of Code Contributor Application ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
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
      "url": "https://summerofcode.withgoogle.com",
      "status": "upcoming",
      "description": "Open Source Promotion Plan Application ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
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
      "url": "https://summerofcode.withgoogle.com",
      "status": "upcoming",
      "description": "LFX Mentorship Spring ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
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
      "url": "https://summerofcode.withgoogle.com",
      "status": "upcoming",
      "description": "Outreachy Internship Application ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
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
      "description": "Rails Girls Summer of Code ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
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
      "url": "https://summerofcode.withgoogle.com",
      "status": "upcoming",
      "description": "NumFOCUS Small Development Grants ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
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
      "description": "Mozilla Builders Incubator ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
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
      "description": "Hacktoberfest Maintainer Prep ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
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
      "url": "https://summerofcode.withgoogle.com",
      "status": "upcoming",
      "description": "CNCF Mentoring Program ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
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
      "url": "https://summerofcode.withgoogle.com",
      "status": "upcoming",
      "description": "Apache Community Over Code CFP ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
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
      "url": "https://summerofcode.withgoogle.com",
      "status": "upcoming",
      "description": "PyCon Open Spaces Proposal ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
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
      "description": "OpenJS Collaborator Summit CFP ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
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
      "description": "Rust Project Fellowship Window ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
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
      "url": "https://summerofcode.withgoogle.com",
      "status": "upcoming",
      "description": "OpenSSF Security Tooling Grant ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
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
      "url": "https://summerofcode.withgoogle.com",
      "status": "upcoming",
      "description": "FOSSASIA Summit CFP ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "program"
    }
  ],
  "robotics-ddl": [
    {
      "id": "robotics-ddl-robocup-team-registration-2026-07-01",
      "title": "RoboCup Team Registration",
      "deadline": "2026-07-01T23:59:59",
      "dateRange": "Jul 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "robotics",
        "embodied AI",
        "autonomous"
      ],
      "url": "https://www.robocup.org",
      "status": "upcoming",
      "description": "RoboCup Team Registration ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "robotics-ddl-iros-robot-learning-workshop-2026-07-19",
      "title": "IROS Robot Learning Workshop",
      "deadline": "2026-07-19T23:59:59",
      "dateRange": "Jul 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "robotics",
        "embodied AI",
        "autonomous"
      ],
      "url": "https://www.robocup.org",
      "status": "upcoming",
      "description": "IROS Robot Learning Workshop ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "robotics-ddl-icra-manipulation-challenge-2026-08-06",
      "title": "ICRA Manipulation Challenge",
      "deadline": "2026-08-06T23:59:59",
      "dateRange": "Aug 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "robotics",
        "embodied AI",
        "autonomous"
      ],
      "url": "https://www.robocup.org",
      "status": "upcoming",
      "description": "ICRA Manipulation Challenge ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "robotics-ddl-open-x-embodiment-benchmark-refresh-2026-08-24",
      "title": "Open X-Embodiment Benchmark Refresh",
      "deadline": "2026-08-24T23:59:59",
      "dateRange": "Aug 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "robotics",
        "embodied AI",
        "autonomous"
      ],
      "url": "https://www.robocup.org",
      "status": "upcoming",
      "description": "Open X-Embodiment Benchmark Refresh ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "robotics-ddl-autonomous-driving-challenge-2026-09-11",
      "title": "Autonomous Driving Challenge",
      "deadline": "2026-09-11T23:59:59",
      "dateRange": "Sep 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "robotics",
        "embodied AI",
        "autonomous"
      ],
      "url": "https://www.robocup.org",
      "status": "upcoming",
      "description": "Autonomous Driving Challenge ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "robotics-ddl-drone-racing-league-ai-track-2026-09-29",
      "title": "Drone Racing League AI Track",
      "deadline": "2026-09-29T23:59:59",
      "dateRange": "Sep 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "robotics",
        "embodied AI",
        "autonomous"
      ],
      "url": "https://www.robocup.org",
      "status": "upcoming",
      "description": "Drone Racing League AI Track ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "robotics-ddl-robomaster-university-series-2026-10-17",
      "title": "RoboMaster University Series",
      "deadline": "2026-10-17T23:59:59",
      "dateRange": "Oct 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "robotics",
        "embodied AI",
        "autonomous"
      ],
      "url": "https://www.robocup.org",
      "status": "upcoming",
      "description": "RoboMaster University Series ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "robotics-ddl-humanoid-locomotion-challenge-2026-11-04",
      "title": "Humanoid Locomotion Challenge",
      "deadline": "2026-11-04T23:59:59",
      "dateRange": "Nov 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "robotics",
        "embodied AI",
        "autonomous"
      ],
      "url": "https://www.robocup.org",
      "status": "upcoming",
      "description": "Humanoid Locomotion Challenge ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "robotics-ddl-household-robotics-benchmark-2026-11-22",
      "title": "Household Robotics Benchmark",
      "deadline": "2026-11-22T23:59:59",
      "dateRange": "Nov 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "robotics",
        "embodied AI",
        "autonomous"
      ],
      "url": "https://www.robocup.org",
      "status": "upcoming",
      "description": "Household Robotics Benchmark ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "robotics-ddl-robot-navigation-long-horizon-track-2026-12-10",
      "title": "Robot Navigation Long-Horizon Track",
      "deadline": "2026-12-10T23:59:59",
      "dateRange": "Dec 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "robotics",
        "embodied AI",
        "autonomous"
      ],
      "url": "https://www.robocup.org",
      "status": "upcoming",
      "description": "Robot Navigation Long-Horizon Track ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "robotics-ddl-rlbench-challenge-refresh-2026-12-28",
      "title": "RLBench Challenge Refresh",
      "deadline": "2026-12-28T23:59:59",
      "dateRange": "Dec 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "robotics",
        "embodied AI",
        "autonomous"
      ],
      "url": "https://www.robocup.org",
      "status": "upcoming",
      "description": "RLBench Challenge Refresh ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "robotics-ddl-sim2real-transfer-sprint-2027-01-15",
      "title": "Sim2Real Transfer Sprint",
      "deadline": "2027-01-15T23:59:59",
      "dateRange": "Jan 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "robotics",
        "embodied AI",
        "autonomous"
      ],
      "url": "https://www.robocup.org",
      "status": "upcoming",
      "description": "Sim2Real Transfer Sprint ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "robotics-ddl-agricultural-robotics-challenge-2027-02-02",
      "title": "Agricultural Robotics Challenge",
      "deadline": "2027-02-02T23:59:59",
      "dateRange": "Feb 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "robotics",
        "embodied AI",
        "autonomous"
      ],
      "url": "https://www.robocup.org",
      "status": "upcoming",
      "description": "Agricultural Robotics Challenge ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "robotics-ddl-warehouse-robot-picking-challenge-2027-02-20",
      "title": "Warehouse Robot Picking Challenge",
      "deadline": "2027-02-20T23:59:59",
      "dateRange": "Feb 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "robotics",
        "embodied AI",
        "autonomous"
      ],
      "url": "https://www.robocup.org",
      "status": "upcoming",
      "description": "Warehouse Robot Picking Challenge ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "robotics-ddl-embodied-safety-evaluation-2027-03-10",
      "title": "Embodied Safety Evaluation",
      "deadline": "2027-03-10T23:59:59",
      "dateRange": "Mar 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "robotics",
        "embodied AI",
        "autonomous"
      ],
      "url": "https://www.robocup.org",
      "status": "upcoming",
      "description": "Embodied Safety Evaluation ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "robotics-ddl-robot-foundation-model-workshop-2027-03-28",
      "title": "Robot Foundation Model Workshop",
      "deadline": "2027-03-28T23:59:59",
      "dateRange": "Mar 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "robotics",
        "embodied AI",
        "autonomous"
      ],
      "url": "https://www.robocup.org",
      "status": "upcoming",
      "description": "Robot Foundation Model Workshop ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    }
  ],
  "startup-ddl": [
    {
      "id": "startup-ddl-y-combinator-batch-application-2026-07-01",
      "title": "Y Combinator Batch Application",
      "deadline": "2026-07-01T23:59:59",
      "dateRange": "Jul 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "startup",
        "accelerator",
        "grant"
      ],
      "url": "https://www.ycombinator.com/apply",
      "status": "upcoming",
      "description": "Y Combinator Batch Application ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "program"
    },
    {
      "id": "startup-ddl-techstars-accelerator-application-2026-07-19",
      "title": "Techstars Accelerator Application",
      "deadline": "2026-07-19T23:59:59",
      "dateRange": "Jul 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "startup",
        "accelerator",
        "grant"
      ],
      "url": "https://www.ycombinator.com/apply",
      "status": "upcoming",
      "description": "Techstars Accelerator Application ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "program"
    },
    {
      "id": "startup-ddl-masschallenge-application-2026-08-06",
      "title": "MassChallenge Application",
      "deadline": "2026-08-06T23:59:59",
      "dateRange": "Aug 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "startup",
        "accelerator",
        "grant"
      ],
      "url": "https://www.ycombinator.com/apply",
      "status": "upcoming",
      "description": "MassChallenge Application ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "program"
    },
    {
      "id": "startup-ddl-hult-prize-campus-round-2026-08-24",
      "title": "Hult Prize Campus Round",
      "deadline": "2026-08-24T23:59:59",
      "dateRange": "Aug 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "startup",
        "accelerator",
        "grant"
      ],
      "url": "https://www.ycombinator.com/apply",
      "status": "upcoming",
      "description": "Hult Prize Campus Round ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "program"
    },
    {
      "id": "startup-ddl-mit-100k-pitch-deadline-2026-09-11",
      "title": "MIT $100K Pitch Deadline",
      "deadline": "2026-09-11T23:59:59",
      "dateRange": "Sep 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "startup",
        "accelerator",
        "grant"
      ],
      "url": "https://www.ycombinator.com/apply",
      "status": "upcoming",
      "description": "MIT $100K Pitch Deadline ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "program"
    },
    {
      "id": "startup-ddl-rice-business-plan-competition-2026-09-29",
      "title": "Rice Business Plan Competition",
      "deadline": "2026-09-29T23:59:59",
      "dateRange": "Sep 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "startup",
        "accelerator",
        "grant"
      ],
      "url": "https://www.ycombinator.com/apply",
      "status": "upcoming",
      "description": "Rice Business Plan Competition ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "program"
    },
    {
      "id": "startup-ddl-berkeley-skydeck-application-2026-10-17",
      "title": "Berkeley SkyDeck Application",
      "deadline": "2026-10-17T23:59:59",
      "dateRange": "Oct 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "startup",
        "accelerator",
        "grant"
      ],
      "url": "https://www.ycombinator.com/apply",
      "status": "upcoming",
      "description": "Berkeley SkyDeck Application ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "program"
    },
    {
      "id": "startup-ddl-stanford-bases-challenge-2026-11-04",
      "title": "Stanford BASES Challenge",
      "deadline": "2026-11-04T23:59:59",
      "dateRange": "Nov 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "startup",
        "accelerator",
        "grant"
      ],
      "url": "https://www.ycombinator.com/apply",
      "status": "upcoming",
      "description": "Stanford BASES Challenge ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "program"
    },
    {
      "id": "startup-ddl-startup-weekend-demo-day-2026-11-22",
      "title": "Startup Weekend Demo Day",
      "deadline": "2026-11-22T23:59:59",
      "dateRange": "Nov 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "startup",
        "accelerator",
        "grant"
      ],
      "url": "https://www.ycombinator.com/apply",
      "status": "upcoming",
      "description": "Startup Weekend Demo Day ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "program"
    },
    {
      "id": "startup-ddl-entrepreneur-first-application-2026-12-10",
      "title": "Entrepreneur First Application",
      "deadline": "2026-12-10T23:59:59",
      "dateRange": "Dec 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "startup",
        "accelerator",
        "grant"
      ],
      "url": "https://www.ycombinator.com/apply",
      "status": "upcoming",
      "description": "Entrepreneur First Application ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "program"
    },
    {
      "id": "startup-ddl-indiebio-application-2026-12-28",
      "title": "IndieBio Application",
      "deadline": "2026-12-28T23:59:59",
      "dateRange": "Dec 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "startup",
        "accelerator",
        "grant"
      ],
      "url": "https://www.ycombinator.com/apply",
      "status": "upcoming",
      "description": "IndieBio Application ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "program"
    },
    {
      "id": "startup-ddl-climatetech-startup-grant-2027-01-15",
      "title": "ClimateTech Startup Grant",
      "deadline": "2027-01-15T23:59:59",
      "dateRange": "Jan 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "startup",
        "accelerator",
        "grant"
      ],
      "url": "https://www.ycombinator.com/apply",
      "status": "upcoming",
      "description": "ClimateTech Startup Grant ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "program"
    },
    {
      "id": "startup-ddl-ai-startup-pitch-cup-2027-02-02",
      "title": "AI Startup Pitch Cup",
      "deadline": "2027-02-02T23:59:59",
      "dateRange": "Feb 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "startup",
        "accelerator",
        "grant"
      ],
      "url": "https://www.ycombinator.com/apply",
      "status": "upcoming",
      "description": "AI Startup Pitch Cup ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "program"
    },
    {
      "id": "startup-ddl-university-innovation-fund-window-2027-02-20",
      "title": "University Innovation Fund Window",
      "deadline": "2027-02-20T23:59:59",
      "dateRange": "Feb 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "startup",
        "accelerator",
        "grant"
      ],
      "url": "https://www.ycombinator.com/apply",
      "status": "upcoming",
      "description": "University Innovation Fund Window ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "program"
    },
    {
      "id": "startup-ddl-social-impact-venture-challenge-2027-03-10",
      "title": "Social Impact Venture Challenge",
      "deadline": "2027-03-10T23:59:59",
      "dateRange": "Mar 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "startup",
        "accelerator",
        "grant"
      ],
      "url": "https://www.ycombinator.com/apply",
      "status": "upcoming",
      "description": "Social Impact Venture Challenge ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "program"
    },
    {
      "id": "startup-ddl-hardware-startup-demo-sprint-2027-03-28",
      "title": "Hardware Startup Demo Sprint",
      "deadline": "2027-03-28T23:59:59",
      "dateRange": "Mar 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "startup",
        "accelerator",
        "grant"
      ],
      "url": "https://www.ycombinator.com/apply",
      "status": "upcoming",
      "description": "Hardware Startup Demo Sprint ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "program"
    }
  ],
  "design-ddl": [
    {
      "id": "design-ddl-ux-design-awards-submission-2026-07-01",
      "title": "UX Design Awards Submission",
      "deadline": "2026-07-01T23:59:59",
      "dateRange": "Jul 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "UX",
        "product",
        "design"
      ],
      "url": "https://ux-design-awards.com",
      "status": "upcoming",
      "description": "UX Design Awards Submission ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "contest"
    },
    {
      "id": "design-ddl-core77-design-awards-2026-07-19",
      "title": "Core77 Design Awards",
      "deadline": "2026-07-19T23:59:59",
      "dateRange": "Jul 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "UX",
        "product",
        "design"
      ],
      "url": "https://ux-design-awards.com",
      "status": "upcoming",
      "description": "Core77 Design Awards ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "contest"
    },
    {
      "id": "design-ddl-if-design-student-award-2026-08-06",
      "title": "iF Design Student Award",
      "deadline": "2026-08-06T23:59:59",
      "dateRange": "Aug 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "UX",
        "product",
        "design"
      ],
      "url": "https://ux-design-awards.com",
      "status": "upcoming",
      "description": "iF Design Student Award ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "contest"
    },
    {
      "id": "design-ddl-red-dot-design-concept-2026-08-24",
      "title": "Red Dot Design Concept",
      "deadline": "2026-08-24T23:59:59",
      "dateRange": "Aug 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "UX",
        "product",
        "design"
      ],
      "url": "https://ux-design-awards.com",
      "status": "upcoming",
      "description": "Red Dot Design Concept ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "contest"
    },
    {
      "id": "design-ddl-service-design-award-2026-09-11",
      "title": "Service Design Award",
      "deadline": "2026-09-11T23:59:59",
      "dateRange": "Sep 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "UX",
        "product",
        "design"
      ],
      "url": "https://ux-design-awards.com",
      "status": "upcoming",
      "description": "Service Design Award ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "contest"
    },
    {
      "id": "design-ddl-interaction-awards-2026-09-29",
      "title": "Interaction Awards",
      "deadline": "2026-09-29T23:59:59",
      "dateRange": "Sep 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "UX",
        "product",
        "design"
      ],
      "url": "https://ux-design-awards.com",
      "status": "upcoming",
      "description": "Interaction Awards ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "contest"
    },
    {
      "id": "design-ddl-awwwards-sites-of-the-year-2026-10-17",
      "title": "Awwwards Sites of the Year",
      "deadline": "2026-10-17T23:59:59",
      "dateRange": "Oct 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "UX",
        "product",
        "design"
      ],
      "url": "https://ux-design-awards.com",
      "status": "upcoming",
      "description": "Awwwards Sites of the Year ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "contest"
    },
    {
      "id": "design-ddl-figma-community-design-jam-2026-11-04",
      "title": "Figma Community Design Jam",
      "deadline": "2026-11-04T23:59:59",
      "dateRange": "Nov 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "UX",
        "product",
        "design"
      ],
      "url": "https://ux-design-awards.com",
      "status": "upcoming",
      "description": "Figma Community Design Jam ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "contest"
    },
    {
      "id": "design-ddl-adobe-creative-jam-2026-11-22",
      "title": "Adobe Creative Jam",
      "deadline": "2026-11-22T23:59:59",
      "dateRange": "Nov 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "UX",
        "product",
        "design"
      ],
      "url": "https://ux-design-awards.com",
      "status": "upcoming",
      "description": "Adobe Creative Jam ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "contest"
    },
    {
      "id": "design-ddl-product-hunt-makers-festival-2026-12-10",
      "title": "Product Hunt Makers Festival",
      "deadline": "2026-12-10T23:59:59",
      "dateRange": "Dec 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "UX",
        "product",
        "design"
      ],
      "url": "https://ux-design-awards.com",
      "status": "upcoming",
      "description": "Product Hunt Makers Festival ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "contest"
    },
    {
      "id": "design-ddl-design-for-america-studio-deadline-2026-12-28",
      "title": "Design for America Studio Deadline",
      "deadline": "2026-12-28T23:59:59",
      "dateRange": "Dec 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "UX",
        "product",
        "design"
      ],
      "url": "https://ux-design-awards.com",
      "status": "upcoming",
      "description": "Design for America Studio Deadline ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "contest"
    },
    {
      "id": "design-ddl-accessibility-design-challenge-2027-01-15",
      "title": "Accessibility Design Challenge",
      "deadline": "2027-01-15T23:59:59",
      "dateRange": "Jan 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "UX",
        "product",
        "design"
      ],
      "url": "https://ux-design-awards.com",
      "status": "upcoming",
      "description": "Accessibility Design Challenge ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "contest"
    },
    {
      "id": "design-ddl-speculative-futures-design-sprint-2027-02-02",
      "title": "Speculative Futures Design Sprint",
      "deadline": "2027-02-02T23:59:59",
      "dateRange": "Feb 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "UX",
        "product",
        "design"
      ],
      "url": "https://ux-design-awards.com",
      "status": "upcoming",
      "description": "Speculative Futures Design Sprint ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "contest"
    },
    {
      "id": "design-ddl-open-source-design-cfp-2027-02-20",
      "title": "Open Source Design CFP",
      "deadline": "2027-02-20T23:59:59",
      "dateRange": "Feb 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "UX",
        "product",
        "design"
      ],
      "url": "https://ux-design-awards.com",
      "status": "upcoming",
      "description": "Open Source Design CFP ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "contest"
    },
    {
      "id": "design-ddl-product-strategy-case-competition-2027-03-10",
      "title": "Product Strategy Case Competition",
      "deadline": "2027-03-10T23:59:59",
      "dateRange": "Mar 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "UX",
        "product",
        "design"
      ],
      "url": "https://ux-design-awards.com",
      "status": "upcoming",
      "description": "Product Strategy Case Competition ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "contest"
    },
    {
      "id": "design-ddl-design-systems-documentation-challenge-2027-03-28",
      "title": "Design Systems Documentation Challenge",
      "deadline": "2027-03-28T23:59:59",
      "dateRange": "Mar 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "UX",
        "product",
        "design"
      ],
      "url": "https://ux-design-awards.com",
      "status": "upcoming",
      "description": "Design Systems Documentation Challenge ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "contest"
    }
  ],
  "exam-ddl": [
    {
      "id": "exam-ddl-item-2026-07-01",
      "title": "??????????????",
      "deadline": "2026-07-01T23:59:59",
      "dateRange": "Jul 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "exam",
        "certificate",
        "registration"
      ],
      "url": "https://www.neea.edu.cn",
      "status": "upcoming",
      "description": "?????????????? ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "program"
    },
    {
      "id": "exam-ddl-item-2026-07-19",
      "title": "???????????????",
      "deadline": "2026-07-19T23:59:59",
      "dateRange": "Jul 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "exam",
        "certificate",
        "registration"
      ],
      "url": "https://www.neea.edu.cn",
      "status": "upcoming",
      "description": "??????????????? ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "program"
    },
    {
      "id": "exam-ddl-item-2026-08-06",
      "title": "???????????",
      "deadline": "2026-08-06T23:59:59",
      "dateRange": "Aug 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "exam",
        "certificate",
        "registration"
      ],
      "url": "https://www.neea.edu.cn",
      "status": "upcoming",
      "description": "??????????? ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "program"
    },
    {
      "id": "exam-ddl-item-2026-08-24",
      "title": "????????",
      "deadline": "2026-08-24T23:59:59",
      "dateRange": "Aug 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "exam",
        "certificate",
        "registration"
      ],
      "url": "https://www.neea.edu.cn",
      "status": "upcoming",
      "description": "???????? ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "program"
    },
    {
      "id": "exam-ddl-item-2026-09-11",
      "title": "????????",
      "deadline": "2026-09-11T23:59:59",
      "dateRange": "Sep 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "exam",
        "certificate",
        "registration"
      ],
      "url": "https://www.neea.edu.cn",
      "status": "upcoming",
      "description": "???????? ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
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
      "url": "https://www.neea.edu.cn",
      "status": "upcoming",
      "description": "GRE General Test Planning ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
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
      "url": "https://www.neea.edu.cn",
      "status": "upcoming",
      "description": "GMAT Focus Exam Planning ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "program"
    },
    {
      "id": "exam-ddl-item-2026-11-04",
      "title": "???????????",
      "deadline": "2026-11-04T23:59:59",
      "dateRange": "Nov 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "exam",
        "certificate",
        "registration"
      ],
      "url": "https://www.neea.edu.cn",
      "status": "upcoming",
      "description": "??????????? ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "program"
    },
    {
      "id": "exam-ddl-item-2026-11-22",
      "title": "?????????",
      "deadline": "2026-11-22T23:59:59",
      "dateRange": "Nov 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "exam",
        "certificate",
        "registration"
      ],
      "url": "https://www.neea.edu.cn",
      "status": "upcoming",
      "description": "????????? ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "program"
    },
    {
      "id": "exam-ddl-item-2026-12-10",
      "title": "?????????",
      "deadline": "2026-12-10T23:59:59",
      "dateRange": "Dec 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "exam",
        "certificate",
        "registration"
      ],
      "url": "https://www.neea.edu.cn",
      "status": "upcoming",
      "description": "????????? ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "program"
    },
    {
      "id": "exam-ddl-item-2026-12-28",
      "title": "??????",
      "deadline": "2026-12-28T23:59:59",
      "dateRange": "Dec 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "exam",
        "certificate",
        "registration"
      ],
      "url": "https://www.neea.edu.cn",
      "status": "upcoming",
      "description": "?????? ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "program"
    },
    {
      "id": "exam-ddl-item-2027-01-15",
      "title": "?????????",
      "deadline": "2027-01-15T23:59:59",
      "dateRange": "Jan 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "exam",
        "certificate",
        "registration"
      ],
      "url": "https://www.neea.edu.cn",
      "status": "upcoming",
      "description": "????????? ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "program"
    },
    {
      "id": "exam-ddl-item-2027-02-02",
      "title": "???????",
      "deadline": "2027-02-02T23:59:59",
      "dateRange": "Feb 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "exam",
        "certificate",
        "registration"
      ],
      "url": "https://www.neea.edu.cn",
      "status": "upcoming",
      "description": "??????? ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
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
      "url": "https://www.neea.edu.cn",
      "status": "upcoming",
      "description": "AWS Certification Voucher Window ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
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
      "url": "https://www.neea.edu.cn",
      "status": "upcoming",
      "description": "PMP Exam Application Window ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
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
      "url": "https://www.neea.edu.cn",
      "status": "upcoming",
      "description": "CFA Exam Registration Deadline ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "program"
    }
  ],
  "scholarship-ddl": [
    {
      "id": "scholarship-ddl-csc-2026-07-01",
      "title": "CSC ????????????????",
      "deadline": "2026-07-01T23:59:59",
      "dateRange": "Jul 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "scholarship",
        "fellowship",
        "application"
      ],
      "url": "https://www.csc.edu.cn",
      "status": "upcoming",
      "description": "CSC ???????????????? ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "program"
    },
    {
      "id": "scholarship-ddl-fulbright-foreign-student-program-2026-07-19",
      "title": "Fulbright Foreign Student Program",
      "deadline": "2026-07-19T23:59:59",
      "dateRange": "Jul 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "scholarship",
        "fellowship",
        "application"
      ],
      "url": "https://www.csc.edu.cn",
      "status": "upcoming",
      "description": "Fulbright Foreign Student Program ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "program"
    },
    {
      "id": "scholarship-ddl-chevening-scholarship-application-2026-08-06",
      "title": "Chevening Scholarship Application",
      "deadline": "2026-08-06T23:59:59",
      "dateRange": "Aug 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "scholarship",
        "fellowship",
        "application"
      ],
      "url": "https://www.csc.edu.cn",
      "status": "upcoming",
      "description": "Chevening Scholarship Application ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "program"
    },
    {
      "id": "scholarship-ddl-erasmus-mundus-application-window-2026-08-24",
      "title": "Erasmus Mundus Application Window",
      "deadline": "2026-08-24T23:59:59",
      "dateRange": "Aug 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "scholarship",
        "fellowship",
        "application"
      ],
      "url": "https://www.csc.edu.cn",
      "status": "upcoming",
      "description": "Erasmus Mundus Application Window ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "program"
    },
    {
      "id": "scholarship-ddl-daad-scholarship-window-2026-09-11",
      "title": "DAAD Scholarship Window",
      "deadline": "2026-09-11T23:59:59",
      "dateRange": "Sep 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "scholarship",
        "fellowship",
        "application"
      ],
      "url": "https://www.csc.edu.cn",
      "status": "upcoming",
      "description": "DAAD Scholarship Window ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "program"
    },
    {
      "id": "scholarship-ddl-rhodes-scholarship-application-2026-09-29",
      "title": "Rhodes Scholarship Application",
      "deadline": "2026-09-29T23:59:59",
      "dateRange": "Sep 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "scholarship",
        "fellowship",
        "application"
      ],
      "url": "https://www.csc.edu.cn",
      "status": "upcoming",
      "description": "Rhodes Scholarship Application ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "program"
    },
    {
      "id": "scholarship-ddl-gates-cambridge-scholarship-2026-10-17",
      "title": "Gates Cambridge Scholarship",
      "deadline": "2026-10-17T23:59:59",
      "dateRange": "Oct 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "scholarship",
        "fellowship",
        "application"
      ],
      "url": "https://www.csc.edu.cn",
      "status": "upcoming",
      "description": "Gates Cambridge Scholarship ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "program"
    },
    {
      "id": "scholarship-ddl-knight-hennessy-scholars-2026-11-04",
      "title": "Knight-Hennessy Scholars",
      "deadline": "2026-11-04T23:59:59",
      "dateRange": "Nov 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "scholarship",
        "fellowship",
        "application"
      ],
      "url": "https://www.csc.edu.cn",
      "status": "upcoming",
      "description": "Knight-Hennessy Scholars ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "program"
    },
    {
      "id": "scholarship-ddl-mit-summer-research-program-2026-11-22",
      "title": "MIT Summer Research Program",
      "deadline": "2026-11-22T23:59:59",
      "dateRange": "Nov 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "scholarship",
        "fellowship",
        "application"
      ],
      "url": "https://www.csc.edu.cn",
      "status": "upcoming",
      "description": "MIT Summer Research Program ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "program"
    },
    {
      "id": "scholarship-ddl-epfl-excellence-fellowship-2026-12-10",
      "title": "EPFL Excellence Fellowship",
      "deadline": "2026-12-10T23:59:59",
      "dateRange": "Dec 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "scholarship",
        "fellowship",
        "application"
      ],
      "url": "https://www.csc.edu.cn",
      "status": "upcoming",
      "description": "EPFL Excellence Fellowship ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "program"
    },
    {
      "id": "scholarship-ddl-eth-zurich-excellence-scholarship-2026-12-28",
      "title": "ETH Zurich Excellence Scholarship",
      "deadline": "2026-12-28T23:59:59",
      "dateRange": "Dec 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "scholarship",
        "fellowship",
        "application"
      ],
      "url": "https://www.csc.edu.cn",
      "status": "upcoming",
      "description": "ETH Zurich Excellence Scholarship ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "program"
    },
    {
      "id": "scholarship-ddl-nus-research-scholarship-window-2027-01-15",
      "title": "NUS Research Scholarship Window",
      "deadline": "2027-01-15T23:59:59",
      "dateRange": "Jan 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "scholarship",
        "fellowship",
        "application"
      ],
      "url": "https://www.csc.edu.cn",
      "status": "upcoming",
      "description": "NUS Research Scholarship Window ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "program"
    },
    {
      "id": "scholarship-ddl-hkpfs-application-deadline-2027-02-02",
      "title": "HKPFS Application Deadline",
      "deadline": "2027-02-02T23:59:59",
      "dateRange": "Feb 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "scholarship",
        "fellowship",
        "application"
      ],
      "url": "https://www.csc.edu.cn",
      "status": "upcoming",
      "description": "HKPFS Application Deadline ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "program"
    },
    {
      "id": "scholarship-ddl-jsps-postdoctoral-fellowship-2027-02-20",
      "title": "JSPS Postdoctoral Fellowship",
      "deadline": "2027-02-20T23:59:59",
      "dateRange": "Feb 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "scholarship",
        "fellowship",
        "application"
      ],
      "url": "https://www.csc.edu.cn",
      "status": "upcoming",
      "description": "JSPS Postdoctoral Fellowship ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "program"
    },
    {
      "id": "scholarship-ddl-marie-curie-doctoral-networks-2027-03-10",
      "title": "Marie Curie Doctoral Networks",
      "deadline": "2027-03-10T23:59:59",
      "dateRange": "Mar 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "scholarship",
        "fellowship",
        "application"
      ],
      "url": "https://www.csc.edu.cn",
      "status": "upcoming",
      "description": "Marie Curie Doctoral Networks ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "program"
    },
    {
      "id": "scholarship-ddl-undergraduate-research-fellowship-window-2027-03-28",
      "title": "Undergraduate Research Fellowship Window",
      "deadline": "2027-03-28T23:59:59",
      "dateRange": "Mar 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "scholarship",
        "fellowship",
        "application"
      ],
      "url": "https://www.csc.edu.cn",
      "status": "upcoming",
      "description": "Undergraduate Research Fellowship Window ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
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
      "url": "https://itch.io/jams",
      "status": "upcoming",
      "description": "Global Game Jam Site Registration ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
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
      "url": "https://itch.io/jams",
      "status": "upcoming",
      "description": "Ludum Dare 60 ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
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
      "description": "GMTK Game Jam ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
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
      "description": "itch.io Brackeys Game Jam ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
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
      "url": "https://itch.io/jams",
      "status": "upcoming",
      "description": "Independent Games Festival Submission ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
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
      "description": "Student Game Competition Entry ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
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
      "url": "https://itch.io/jams",
      "status": "upcoming",
      "description": "Unreal Engine Challenge ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
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
      "url": "https://itch.io/jams",
      "status": "upcoming",
      "description": "Unity Student Challenge ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
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
      "description": "Godot Wild Jam ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
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
      "url": "https://itch.io/jams",
      "status": "upcoming",
      "description": "Game Off by GitHub ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
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
      "url": "https://itch.io/jams",
      "status": "upcoming",
      "description": "A MAZE. Awards Submission ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
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
      "url": "https://itch.io/jams",
      "status": "upcoming",
      "description": "IndieCade Submission ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
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
      "url": "https://itch.io/jams",
      "status": "upcoming",
      "description": "Games for Change Awards ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
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
      "description": "AI NPC Challenge ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
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
      "description": "Procedural Generation Jam ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
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
      "description": "Serious Games Health Track ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "contest"
    }
  ],
  "biotech-ddl": [
    {
      "id": "biotech-ddl-dream-challenge-registration-2026-07-01",
      "title": "DREAM Challenge Registration",
      "deadline": "2026-07-01T23:59:59",
      "dateRange": "Jul 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "biotech",
        "medical AI",
        "genomics"
      ],
      "url": "https://grand-challenge.org",
      "status": "upcoming",
      "description": "DREAM Challenge Registration ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "biotech-ddl-casp-protein-prediction-target-window-2026-07-19",
      "title": "CASP Protein Prediction Target Window",
      "deadline": "2026-07-19T23:59:59",
      "dateRange": "Jul 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "biotech",
        "medical AI",
        "genomics"
      ],
      "url": "https://grand-challenge.org",
      "status": "upcoming",
      "description": "CASP Protein Prediction Target Window ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "biotech-ddl-kaggle-biomedical-image-challenge-2026-08-06",
      "title": "Kaggle Biomedical Image Challenge",
      "deadline": "2026-08-06T23:59:59",
      "dateRange": "Aug 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "biotech",
        "medical AI",
        "genomics"
      ],
      "url": "https://grand-challenge.org",
      "status": "upcoming",
      "description": "Kaggle Biomedical Image Challenge ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "biotech-ddl-miccai-grand-challenge-registration-2026-08-24",
      "title": "MICCAI Grand Challenge Registration",
      "deadline": "2026-08-24T23:59:59",
      "dateRange": "Aug 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "biotech",
        "medical AI",
        "genomics"
      ],
      "url": "https://grand-challenge.org",
      "status": "upcoming",
      "description": "MICCAI Grand Challenge Registration ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "biotech-ddl-ismb-eccb-proceedings-paper-2026-09-11",
      "title": "ISMB/ECCB Proceedings Paper",
      "deadline": "2026-09-11T23:59:59",
      "dateRange": "Sep 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "biotech",
        "medical AI",
        "genomics"
      ],
      "url": "https://grand-challenge.org",
      "status": "upcoming",
      "description": "ISMB/ECCB Proceedings Paper ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "biotech-ddl-recomb-paper-submission-2026-09-29",
      "title": "RECOMB Paper Submission",
      "deadline": "2026-09-29T23:59:59",
      "dateRange": "Sep 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "biotech",
        "medical AI",
        "genomics"
      ],
      "url": "https://grand-challenge.org",
      "status": "upcoming",
      "description": "RECOMB Paper Submission ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "biotech-ddl-single-cell-perturbation-challenge-2026-10-17",
      "title": "Single-Cell Perturbation Challenge",
      "deadline": "2026-10-17T23:59:59",
      "dateRange": "Oct 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "biotech",
        "medical AI",
        "genomics"
      ],
      "url": "https://grand-challenge.org",
      "status": "upcoming",
      "description": "Single-Cell Perturbation Challenge ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "biotech-ddl-genomics-variant-calling-benchmark-2026-11-04",
      "title": "Genomics Variant Calling Benchmark",
      "deadline": "2026-11-04T23:59:59",
      "dateRange": "Nov 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "biotech",
        "medical AI",
        "genomics"
      ],
      "url": "https://grand-challenge.org",
      "status": "upcoming",
      "description": "Genomics Variant Calling Benchmark ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "biotech-ddl-drug-discovery-benchmark-sprint-2026-11-22",
      "title": "Drug Discovery Benchmark Sprint",
      "deadline": "2026-11-22T23:59:59",
      "dateRange": "Nov 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "biotech",
        "medical AI",
        "genomics"
      ],
      "url": "https://grand-challenge.org",
      "status": "upcoming",
      "description": "Drug Discovery Benchmark Sprint ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "biotech-ddl-protein-design-hackathon-2026-12-10",
      "title": "Protein Design Hackathon",
      "deadline": "2026-12-10T23:59:59",
      "dateRange": "Dec 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "biotech",
        "medical AI",
        "genomics"
      ],
      "url": "https://grand-challenge.org",
      "status": "upcoming",
      "description": "Protein Design Hackathon ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "biotech-ddl-medical-qa-safety-evaluation-2026-12-28",
      "title": "Medical QA Safety Evaluation",
      "deadline": "2026-12-28T23:59:59",
      "dateRange": "Dec 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "biotech",
        "medical AI",
        "genomics"
      ],
      "url": "https://grand-challenge.org",
      "status": "upcoming",
      "description": "Medical QA Safety Evaluation ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "biotech-ddl-digital-pathology-challenge-2027-01-15",
      "title": "Digital Pathology Challenge",
      "deadline": "2027-01-15T23:59:59",
      "dateRange": "Jan 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "biotech",
        "medical AI",
        "genomics"
      ],
      "url": "https://grand-challenge.org",
      "status": "upcoming",
      "description": "Digital Pathology Challenge ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "biotech-ddl-wearable-health-data-challenge-2027-02-02",
      "title": "Wearable Health Data Challenge",
      "deadline": "2027-02-02T23:59:59",
      "dateRange": "Feb 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "biotech",
        "medical AI",
        "genomics"
      ],
      "url": "https://grand-challenge.org",
      "status": "upcoming",
      "description": "Wearable Health Data Challenge ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "biotech-ddl-clinical-nlp-shared-task-2027-02-20",
      "title": "Clinical NLP Shared Task",
      "deadline": "2027-02-20T23:59:59",
      "dateRange": "Feb 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "biotech",
        "medical AI",
        "genomics"
      ],
      "url": "https://grand-challenge.org",
      "status": "upcoming",
      "description": "Clinical NLP Shared Task ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "biotech-ddl-ai-for-healthcare-workshop-paper-2027-03-10",
      "title": "AI for Healthcare Workshop Paper",
      "deadline": "2027-03-10T23:59:59",
      "dateRange": "Mar 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "biotech",
        "medical AI",
        "genomics"
      ],
      "url": "https://grand-challenge.org",
      "status": "upcoming",
      "description": "AI for Healthcare Workshop Paper ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    },
    {
      "id": "biotech-ddl-biocreative-track-submission-2027-03-28",
      "title": "BioCreative Track Submission",
      "deadline": "2027-03-28T23:59:59",
      "dateRange": "Mar 2027",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "biotech",
        "medical AI",
        "genomics"
      ],
      "url": "https://grand-challenge.org",
      "status": "upcoming",
      "description": "BioCreative Track Submission ?????????? crawler ??????????",
      "stage": "Coverage",
      "source": "Curated coverage seed",
      "type": "challenge"
    }
  ]
};

export const getDDLByTopic = (topicId: string) => ddlData[topicId] || [];
export const getAllDDL = () => Object.values(ddlData).flat();
export const getDDLById = (id: string) => getAllDDL().find(d => d.id === id);
