export interface DDLItem {
  [key: string]: unknown;
  id: string;
  title: string;
  deadline?: string;
  date?: string;
  dateRange: string;
  location: string;
  isOnline: boolean;
  tags: string[];
  url: string;
  status: 'upcoming' | 'ongoing' | 'ended' | 'unannounced' | 'watching' | string;
  prize?: string;
  description?: string;
  stage?: string;
  source?: string;
  type?: 'conference' | 'journal' | 'challenge' | 'hackathon' | 'holiday' | 'contest' | 'program' | 'release' | 'concert' | 'regulation' | 'officialDeadline' | 'historyEvent' | 'officialRelease' | 'forecastWindow' | string;
  sourceUrl?: string;
  canonicalUrl?: string;
  isDatePlaceholder?: boolean;
  previewImage?: string;
  subtopic?: string;
  subtopicName?: string;
  estimatedNextWindow?: {
    start: string;
    end: string;
  };
  lastOfficialDate?: string;
  basisEvents?: string[];
  confidence?: 'low' | 'medium' | 'high' | string;
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
      "source": "人工整理的官方来源入口",
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
      "source": "人工整理的官方来源入口",
      "type": "hackathon",
      "description": "Devpost AI 应用类比赛 官方来源入口，后续将按官方页面持续补充官方详情。",
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
      "source": "官方来源入口",
      "type": "hackathon",
      "description": "高校黑客松 官方来源入口，用于补足北美校园赛历。"
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
      "source": "人工整理的官方来源入口",
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
      "source": "人工整理的官方来源入口",
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
      "source": "人工整理的官方来源入口",
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
      "source": "人工整理的官方来源入口",
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
      "source": "人工整理的官方来源入口",
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
      "description": "Web3 生态黑客松入口，后续将按官方页面对齐具体城市站详情页。",
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
      "source": "人工整理的官方来源入口",
      "type": "hackathon",
      "description": "欧洲学生黑客松 官方来源入口。"
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
      "source": "人工整理的官方来源入口",
      "type": "hackathon",
      "description": "美国西海岸高校黑客松 官方来源入口。",
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
      "source": "人工整理的官方来源入口",
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
      "source": "人工整理的官方来源入口",
      "type": "hackathon",
      "description": "开源赏金与项目提交通道 官方来源入口。",
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
      "source": "人工整理的官方来源入口",
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
      "source": "人工整理的官方来源入口",
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
      "source": "人工整理的官方来源入口",
      "type": "hackathon",
      "description": "英国高校黑客松入口。"
    }
  ],
  "agent-ddl": [
    {
      "id": "agent-ddl-devnetwork-ai-ml-hackathon-2026-05-28",
      "title": "DevNetwork [AI + ML] Hackathon 2026",
      "deadline": "2026-05-28T10:00:00-07:00",
      "dateRange": "May 11 - May 28, 2026",
      "location": "South San Francisco + Online",
      "isOnline": false,
      "tags": [
        "AI/ML",
        "Enterprise",
        "Crusoe",
        "Nemotron"
      ],
      "url": "https://devnetwork-ai-ml-hack-2026.devpost.com/",
      "status": "upcoming",
      "stage": "Submission",
      "source": "DevNetwork AI + ML Hackathon Devpost",
      "type": "hackathon",
      "description": "Challenge-driven AI/ML hackathon at AI DevSummit 2026, including a Crusoe agent track for Hermes / NemoClaw on Nvidia Nemotron.",
      "prize": "$8,000+",
      "platform": "Devpost",
      "evaluationMode": "Human",
      "organizer": "DevNetwork",
      "submissionType": "Devpost project + sponsor challenge deliverables",
      "sourceUrl": "https://devnetwork-ai-ml-hack-2026.devpost.com/",
      "phases": [
        {
          "name": "Online hackathon starts",
          "deadline": "2026-05-11T00:00:00-07:00"
        },
        {
          "name": "Submission deadline",
          "deadline": "2026-05-28T10:00:00-07:00"
        }
      ]
    },
    {
      "id": "agent-ddl-international-ai-agents-hackathon-2026-05-29",
      "title": "International AI Agents Hackathon",
      "deadline": "2026-05-29T13:00:00-04:00",
      "dateRange": "Deadline: May 29, 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "AI Agents",
        "Workflow Automation",
        "Student"
      ],
      "url": "https://ai-agents-hackathon1.devpost.com/",
      "status": "upcoming",
      "stage": "Submission",
      "source": "International AI Agents Hackathon Devpost",
      "type": "hackathon",
      "description": "Student-focused AI agents hackathon for workflow automation tools and intelligent work-flow applications.",
      "prize": "$100",
      "platform": "Devpost",
      "evaluationMode": "Human",
      "organizer": "AI HackWorld",
      "submissionType": "Live tool link + pitch deck + code evidence",
      "sourceUrl": "https://ai-agents-hackathon1.devpost.com/",
      "phases": [
        {
          "name": "Submission deadline",
          "deadline": "2026-05-29T13:00:00-04:00"
        }
      ]
    },
    {
      "id": "agent-ddl-anac-2026-submission-2026-06-01",
      "title": "The 17th Automated Negotiating Agents Competition - ANAC 2026",
      "deadline": "2026-06-01T23:59:59",
      "dateRange": "Submission deadline: Jun 1, 2026",
      "location": "IJCAI-ECAI 2026",
      "isOnline": true,
      "tags": [
        "Negotiation Agents",
        "IJCAI",
        "Multi-Agent"
      ],
      "url": "https://web.tuat.ac.jp/~katfuji/ANAC2026/",
      "status": "upcoming",
      "stage": "Submission",
      "source": "IJCAI 2026 ANAC",
      "type": "challenge",
      "description": "Automated negotiating agent competition covering negotiation leagues, supply-chain management, and human-agent negotiation.",
      "prize": "N/A",
      "platform": "IJCAI",
      "evaluationMode": "Automated",
      "organizer": "IJCAI-ECAI 2026 Competition Track",
      "submissionType": "Agent submission",
      "sourceUrl": "https://web.tuat.ac.jp/~katfuji/ANAC2026/",
      "phases": [
        {
          "name": "Submission deadline",
          "deadline": "2026-06-01T23:59:59"
        },
        {
          "name": "Notification of finalists",
          "deadline": "2026-06-15T23:59:59"
        },
        {
          "name": "Competition session",
          "deadline": "2026-08-15T23:59:59"
        }
      ]
    },
    {
      "id": "agent-ddl-google-cloud-rapid-agent-hackathon-2026-06-11",
      "title": "Google Cloud Rapid Agent Hackathon",
      "deadline": "2026-06-11T14:00:00-07:00",
      "dateRange": "May 5 - Jun 11, 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Google Cloud",
        "Gemini",
        "MCP",
        "AI Agents"
      ],
      "url": "https://rapid-agent.devpost.com/",
      "status": "upcoming",
      "stage": "Submission",
      "source": "Google Cloud Rapid Agent Hackathon Devpost",
      "type": "hackathon",
      "description": "Build functional AI agents powered by Gemini and Google Cloud Agent Builder that integrate partner MCP servers for real-world tasks.",
      "prize": "$60,000",
      "platform": "Devpost",
      "evaluationMode": "Human",
      "organizer": "Google",
      "submissionType": "Hosted project URL + open-source repo + demo video",
      "sourceUrl": "https://rapid-agent.devpost.com/",
      "phases": [
        {
          "name": "Submissions open",
          "deadline": "2026-05-05T12:00:00-07:00"
        },
        {
          "name": "Submission deadline",
          "deadline": "2026-06-11T14:00:00-07:00"
        },
        {
          "name": "Judging ends",
          "deadline": "2026-07-06T17:00:00-07:00"
        },
        {
          "name": "Winners announced",
          "deadline": "2026-07-13T14:00:00-07:00"
        }
      ],
      "tracks": [
        {
          "name": "Partner MCP tracks",
          "description": "Build an agent around partner MCP servers such as Arize, Elastic, Fivetran, GitLab, MongoDB, and more."
        }
      ],
      "modelConstraints": [
        "Gemini and Google Cloud Agent Builder encouraged",
        "Partner MCP integration required"
      ]
    },
    {
      "id": "agent-ddl-openclaw-security-attack-defense-2026-06-12",
      "title": "OpenClaw Security Attack-and-Defense Challenge",
      "deadline": "2026-06-12T23:59:59",
      "dateRange": "Submission of solutions and papers: Jun 12, 2026",
      "location": "IJCAI-ECAI 2026",
      "isOnline": true,
      "tags": [
        "OpenClaw",
        "Agent Security",
        "Prompt Injection"
      ],
      "url": "https://ai-safety-workshop-ijcai2026.github.io/Track1.html",
      "status": "upcoming",
      "stage": "Solutions / Papers",
      "source": "IJCAI OpenClaw Security Challenge",
      "type": "challenge",
      "description": "Security attack-and-defense challenge around autonomous AI agent environments, prompt injection, skill poisoning, and supply-chain risks.",
      "prize": "N/A",
      "platform": "IJCAI",
      "evaluationMode": "Hybrid",
      "organizer": "IJCAI 2026 AI Safety Workshop",
      "submissionType": "Solution and paper submission",
      "sourceUrl": "https://ai-safety-workshop-ijcai2026.github.io/Track1.html",
      "phases": [
        {
          "name": "Test phase 1",
          "deadline": "2026-05-10T23:59:59"
        },
        {
          "name": "Test phase 2",
          "deadline": "2026-06-01T23:59:59"
        },
        {
          "name": "Test period ends",
          "deadline": "2026-06-08T23:59:59"
        },
        {
          "name": "Solutions and papers due",
          "deadline": "2026-06-12T23:59:59"
        }
      ]
    },
    {
      "id": "agent-ddl-mega-agent-a-thon-2026-06-14",
      "title": "Mega Agent-A-Thon",
      "deadline": "2026-06-14T23:59:59+05:30",
      "dateRange": "Deadline: Jun 14, 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "AI Agents",
        "Real-World Impact",
        "Beginner Friendly"
      ],
      "url": "https://mega-agent-a-thon.devpost.com/",
      "status": "upcoming",
      "stage": "Submission",
      "source": "Mega Agent-A-Thon Devpost",
      "type": "hackathon",
      "description": "Build intelligent AI agents that solve real-world problems and create global impact.",
      "prize": "Non-monetary",
      "platform": "Devpost",
      "evaluationMode": "Human",
      "organizer": "Devpost community",
      "submissionType": "Devpost project",
      "sourceUrl": "https://mega-agent-a-thon.devpost.com/",
      "phases": [
        {
          "name": "Submission deadline",
          "deadline": "2026-06-14T23:59:59+05:30"
        }
      ]
    },
    {
      "id": "agent-ddl-ai-olympics-realaigym-stage1-2026-06-15",
      "title": "AI Olympics with RealAIGym - Stage 1",
      "deadline": "2026-06-15T23:59:59",
      "dateRange": "First stage solutions and reports: May 1 - Jun 15, 2026",
      "location": "IJCAI-ECAI 2026 / DFKI Bremen",
      "isOnline": true,
      "tags": [
        "Robotics Agent",
        "Reinforcement Learning",
        "CloudPendulum"
      ],
      "url": "https://ai-olympics.dfki-bremen.de/",
      "status": "upcoming",
      "stage": "Stage 1 report",
      "source": "IJCAI AI Olympics with RealAIGym",
      "type": "challenge",
      "description": "Hardware benchmark for global swing-up policies on CloudPendulum hardware, evaluating robotics and RL agents.",
      "prize": "N/A",
      "platform": "IJCAI",
      "evaluationMode": "Automated",
      "organizer": "DFKI Bremen / IJCAI-ECAI 2026",
      "submissionType": "Controller solution and report",
      "sourceUrl": "https://ai-olympics.dfki-bremen.de/",
      "phases": [
        {
          "name": "Registration deadline",
          "deadline": "2026-05-31T23:59:59"
        },
        {
          "name": "First stage solutions and reports due",
          "deadline": "2026-06-15T23:59:59"
        },
        {
          "name": "Second stage starts",
          "deadline": "2026-07-01T23:59:59"
        },
        {
          "name": "Second stage ends",
          "deadline": "2026-08-15T23:59:59"
        }
      ]
    },
    {
      "id": "agent-ddl-splunk-agentic-ops-hackathon-2026-06-15",
      "title": "Splunk Agentic Ops Hackathon",
      "deadline": "2026-06-15T09:00:00-07:00",
      "dateRange": "May 18 - Jun 15, 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Splunk AI",
        "Observability",
        "Security",
        "MCP"
      ],
      "url": "https://splunk.devpost.com/",
      "status": "upcoming",
      "stage": "Submission",
      "source": "Splunk Agentic Ops Hackathon Devpost",
      "type": "hackathon",
      "description": "Build agentic operations solutions with Splunk AI across observability, security, and platform/developer experience tracks.",
      "prize": "$20,000",
      "platform": "Devpost",
      "evaluationMode": "Human",
      "organizer": "Splunk",
      "submissionType": "Text description + demo video + public code repository + architecture diagram",
      "sourceUrl": "https://splunk.devpost.com/",
      "phases": [
        {
          "name": "Submission period opens",
          "deadline": "2026-05-18T00:00:00-07:00"
        },
        {
          "name": "Submission deadline",
          "deadline": "2026-06-15T09:00:00-07:00"
        }
      ],
      "tracks": [
        {
          "name": "Observability",
          "description": "AI agents for monitoring, anomaly detection, and operational response."
        },
        {
          "name": "Security",
          "description": "AI workflows for faster threat detection and incident investigation."
        },
        {
          "name": "Platform & Developer Experience",
          "description": "Developer workflows and Splunk app/platform automation."
        }
      ]
    },
    {
      "id": "agent-ddl-find-evil-ai-security-2026-06-15",
      "title": "FIND EVIL!",
      "deadline": "2026-06-15T23:45:00-04:00",
      "dateRange": "Apr 15 - Jun 15, 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Cybersecurity",
        "MCP",
        "Incident Response",
        "Agentic IDE"
      ],
      "url": "https://findevil.devpost.com/",
      "status": "upcoming",
      "stage": "Submission",
      "source": "FIND EVIL Devpost",
      "type": "hackathon",
      "description": "Cybersecurity challenge to build autonomous AI agents for defensive incident response using SANS SIFT and MCP-style tooling.",
      "prize": "$22,000",
      "platform": "Devpost",
      "evaluationMode": "Hybrid",
      "organizer": "SANS / Protocol SIFT community",
      "submissionType": "Public code repo + demo video + architecture diagram + project writeup",
      "sourceUrl": "https://findevil.devpost.com/",
      "phases": [
        {
          "name": "Submission deadline",
          "deadline": "2026-06-15T23:45:00-04:00"
        }
      ],
      "tracks": [
        {
          "name": "Direct Agent Extension",
          "description": "Extend Protocol SIFT or similar agent loops."
        },
        {
          "name": "Custom MCP Server",
          "description": "Expose structured, type-safe incident-response functions."
        },
        {
          "name": "Multi-Agent Frameworks",
          "description": "Use AutoGen, CrewAI, LangGraph, or similar frameworks for DFIR workflows."
        }
      ]
    },
    {
      "id": "agent-ddl-usaii-global-ai-hackathon-2026-06-21",
      "title": "USAII Global AI Hackathon 2026",
      "deadline": "2026-06-21T23:59:59-04:00",
      "dateRange": "Deadline: Jun 21, 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "AI for Good",
        "Student",
        "Career Readiness"
      ],
      "url": "https://usaii-global-ai-hackathon-2026.devpost.com/",
      "status": "upcoming",
      "stage": "Submission",
      "source": "USAII Global AI Hackathon Devpost",
      "type": "hackathon",
      "description": "Global virtual AI hackathon for student builders creating real-world impact and career-readiness solutions.",
      "prize": "$15,000",
      "platform": "Devpost",
      "evaluationMode": "Human",
      "organizer": "USAII",
      "submissionType": "Devpost project",
      "sourceUrl": "https://usaii-global-ai-hackathon-2026.devpost.com/",
      "phases": [
        {
          "name": "Submission deadline",
          "deadline": "2026-06-21T23:59:59-04:00"
        }
      ]
    },
    {
      "id": "agent-ddl-sunnyhacks-june-2026-07-01",
      "title": "SunnyHacks June 2026",
      "deadline": "2026-07-01T23:59:59-04:00",
      "dateRange": "Deadline: Jul 1, 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "AI Agents",
        "Student",
        "Beginner Friendly"
      ],
      "url": "https://sunnyhacks-june-2026.devpost.com/",
      "status": "upcoming",
      "stage": "Submission",
      "source": "SunnyHacks June 2026 Devpost",
      "type": "hackathon",
      "description": "Online hackathon whose stated theme is creating useful and exciting AI agents.",
      "prize": "Non-monetary",
      "platform": "Devpost",
      "evaluationMode": "Human",
      "organizer": "SunnyHacks",
      "submissionType": "Devpost project",
      "sourceUrl": "https://sunnyhacks-june-2026.devpost.com/",
      "phases": [
        {
          "name": "Submission deadline",
          "deadline": "2026-07-01T23:59:59-04:00"
        }
      ]
    },
    {
      "id": "agent-ddl-slack-agent-builder-challenge-2026-07-13",
      "title": "Slack Agent Builder Challenge",
      "deadline": "2026-07-13T17:00:00-07:00",
      "dateRange": "May 20 - Jul 13, 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Slack",
        "Agent Builder",
        "MCP",
        "Low/No Code"
      ],
      "url": "https://slackhack.devpost.com/",
      "status": "upcoming",
      "stage": "Submission",
      "source": "Slack Agent Builder Challenge Devpost",
      "type": "hackathon",
      "description": "Build a new or significantly updated Slack agent using Slack AI capabilities, MCP server integration, or the Real-Time Search API.",
      "prize": "$42,000",
      "platform": "Devpost",
      "evaluationMode": "Human",
      "organizer": "Salesforce / Slack",
      "submissionType": "Slack app + Devpost submission + sandbox access",
      "sourceUrl": "https://slackhack.devpost.com/",
      "phases": [
        {
          "name": "Submission period starts",
          "deadline": "2026-05-20T10:00:00-07:00"
        },
        {
          "name": "Submission deadline",
          "deadline": "2026-07-13T17:00:00-07:00"
        },
        {
          "name": "Judging ends",
          "deadline": "2026-08-06T11:00:00-07:00"
        },
        {
          "name": "Winners announced",
          "deadline": "2026-08-11T14:00:00-07:00"
        }
      ],
      "tracks": [
        {
          "name": "New Slack Agent",
          "description": "Build a new Slack application with agent capabilities."
        },
        {
          "name": "Slack Agent for Good",
          "description": "Build an agent around social-good use cases."
        },
        {
          "name": "Slack Agent for Organizations",
          "description": "Build or significantly update an app for organizational workflows."
        }
      ]
    },
    {
      "id": "agent-ddl-chinatravel-ai-agent-phase1-2026-07-15",
      "title": "The 2nd Travel Itinerary Planning Challenge for AI Agent - Phase 1",
      "deadline": "2026-07-15T23:59:59",
      "dateRange": "Phase 1 submission deadline: Jul 15, 2026",
      "location": "IJCAI-ECAI 2026",
      "isOnline": true,
      "tags": [
        "Travel Planning Agent",
        "Tool Use",
        "ChinaTravel"
      ],
      "url": "https://chinatravel-competition.github.io/IJCAI2026/",
      "status": "upcoming",
      "stage": "Phase 1 Submission",
      "source": "IJCAI ChinaTravel AI Agent Challenge",
      "type": "challenge",
      "description": "AI agent travel itinerary planning challenge with tracks for travel planning and agentic skill development.",
      "prize": "N/A",
      "platform": "IJCAI",
      "evaluationMode": "Automated",
      "organizer": "IJCAI-ECAI 2026 Competition Track",
      "submissionType": "Agent solution submission",
      "sourceUrl": "https://chinatravel-competition.github.io/IJCAI2026/",
      "phases": [
        {
          "name": "Data released and submission begins",
          "deadline": "2026-05-31T23:59:59"
        },
        {
          "name": "Phase 1 submission deadline",
          "deadline": "2026-07-15T23:59:59"
        },
        {
          "name": "Phase 2 submission window ends",
          "deadline": "2026-07-31T23:59:59"
        },
        {
          "name": "Technical report due",
          "deadline": "2026-08-05T23:59:59"
        },
        {
          "name": "Final results notification",
          "deadline": "2026-08-15T23:59:59"
        }
      ],
      "tracks": [
        {
          "name": "Travel Planning",
          "description": "Generate feasible multi-day itineraries from natural language queries."
        },
        {
          "name": "Agentic Skill Development",
          "description": "Develop specialized tool-use plugins for commercial agentic platforms."
        }
      ]
    },
    {
      "id": "agent-ddl-car-bench-final-evaluation-2026-07-19",
      "title": "CAR-bench Challenge - Final Evaluation",
      "deadline": "2026-07-19T23:59:59-12:00",
      "dateRange": "Final evaluation: Jul 19, 2026 AoE",
      "location": "IJCAI-ECAI 2026 / Online",
      "isOnline": true,
      "tags": [
        "LLM Agent Reliability",
        "Automotive",
        "Uncertainty Quantification"
      ],
      "url": "https://car-bench.github.io/car-bench/",
      "status": "upcoming",
      "stage": "Final Evaluation",
      "source": "CAR-bench Challenge",
      "type": "challenge",
      "description": "Academic competition evaluating reliable LLM agents as automotive in-car voice assistants under uncertainty, missing capabilities, and ambiguity.",
      "prize": "Sponsored prize TBD",
      "platform": "CAR-bench",
      "evaluationMode": "Automated",
      "organizer": "CAR-bench / IJCAI-ECAI 2026",
      "submissionType": "Hidden test-set evaluation",
      "sourceUrl": "https://car-bench.github.io/car-bench/",
      "phases": [
        {
          "name": "Competition opens",
          "deadline": "2026-05-11T23:59:59-12:00"
        },
        {
          "name": "First hidden test evaluation",
          "deadline": "2026-07-10T23:59:59-12:00"
        },
        {
          "name": "Final hidden test evaluation",
          "deadline": "2026-07-19T23:59:59-12:00"
        },
        {
          "name": "Technical report deadline",
          "deadline": "2026-07-26T23:59:59-12:00"
        },
        {
          "name": "Winners announced",
          "deadline": "2026-07-31T23:59:59-12:00"
        }
      ],
      "tracks": [
        {
          "name": "Open Track",
          "description": "Any LLM, provider, or architecture, ranked by hidden test performance."
        },
        {
          "name": "Cerebras Fast-Reasoning Track",
          "description": "Compute-aware agent design under Cerebras fast inference constraints."
        }
      ]
    },
    {
      "id": "agent-ddl-car-bench-technical-report-2026-07-26",
      "title": "CAR-bench Challenge - Technical Report",
      "deadline": "2026-07-26T23:59:59-12:00",
      "dateRange": "Technical report deadline: Jul 26, 2026 AoE",
      "location": "IJCAI-ECAI 2026 / Online",
      "isOnline": true,
      "tags": [
        "LLM Agent Reliability",
        "Technical Report",
        "IJCAI"
      ],
      "url": "https://car-bench.github.io/car-bench/",
      "status": "upcoming",
      "stage": "Technical Report",
      "source": "CAR-bench Challenge",
      "type": "challenge",
      "description": "Technical report deadline for CAR-bench IJCAI-ECAI 2026 competition participants.",
      "prize": "Sponsored prize TBD",
      "platform": "CAR-bench",
      "evaluationMode": "Hybrid",
      "organizer": "CAR-bench / IJCAI-ECAI 2026",
      "submissionType": "4-page IJCAI-format technical report",
      "sourceUrl": "https://car-bench.github.io/car-bench/",
      "phases": [
        {
          "name": "Final hidden test evaluation",
          "deadline": "2026-07-19T23:59:59-12:00"
        },
        {
          "name": "Technical report deadline",
          "deadline": "2026-07-26T23:59:59-12:00"
        },
        {
          "name": "Winners announced",
          "deadline": "2026-07-31T23:59:59-12:00"
        }
      ]
    },
    {
      "id": "agent-ddl-industrial-automation-llm-submission-2026-08-01",
      "title": "Industrial Automation Challenge: Physics-Grounded LLMs for Task Reasoning",
      "deadline": "2026-08-01T23:59:59",
      "dateRange": "Submission deadline: Aug 1, 2026",
      "location": "IJCAI-ECAI 2026",
      "isOnline": true,
      "tags": [
        "Physics-Grounded LLM",
        "Industrial Automation",
        "Agentic Tools"
      ],
      "url": "https://sites.google.com/view/ai-industrial-challenge-ijcai/home",
      "status": "upcoming",
      "stage": "Submission",
      "source": "IJCAI Industrial Automation Challenge",
      "type": "challenge",
      "description": "Benchmark for industrial task reasoning with physics-grounded LLMs, including an agentic tool-augmented reasoning track.",
      "prize": "N/A",
      "platform": "IJCAI",
      "evaluationMode": "Automated",
      "organizer": "IJCAI-ECAI 2026 Competition Track",
      "submissionType": "Model / solution submission",
      "sourceUrl": "https://sites.google.com/view/ai-industrial-challenge-ijcai/home",
      "phases": [
        {
          "name": "Dataset and baseline release",
          "deadline": "2026-06-15T23:59:59"
        },
        {
          "name": "Submission deadline",
          "deadline": "2026-08-01T23:59:59"
        },
        {
          "name": "Winner notification",
          "deadline": "2026-08-15T23:59:59"
        }
      ],
      "tracks": [
        {
          "name": "Internal model reasoning",
          "description": "Native-parameter reasoning over industrial context."
        },
        {
          "name": "Agentic tool-augmented reasoning",
          "description": "Reasoning with external industrial tools and structured context."
        }
      ]
    },
    {
      "id": "agent-ddl-chinatravel-ai-agent-report-2026-08-05",
      "title": "The 2nd Travel Itinerary Planning Challenge for AI Agent - Technical Report",
      "deadline": "2026-08-05T23:59:59",
      "dateRange": "Paper / technical report deadline: Aug 5, 2026",
      "location": "IJCAI-ECAI 2026",
      "isOnline": true,
      "tags": [
        "Travel Planning Agent",
        "Technical Report",
        "IJCAI"
      ],
      "url": "https://chinatravel-competition.github.io/IJCAI2026/",
      "status": "upcoming",
      "stage": "Technical Report",
      "source": "IJCAI ChinaTravel AI Agent Challenge",
      "type": "challenge",
      "description": "Technical report deadline for the ChinaTravel AI Agent itinerary planning challenge.",
      "prize": "N/A",
      "platform": "IJCAI",
      "evaluationMode": "Hybrid",
      "organizer": "IJCAI-ECAI 2026 Competition Track",
      "submissionType": "Paper / technical report submission",
      "sourceUrl": "https://chinatravel-competition.github.io/IJCAI2026/",
      "phases": [
        {
          "name": "Phase 1 submission deadline",
          "deadline": "2026-07-15T23:59:59"
        },
        {
          "name": "Phase 2 submission window ends",
          "deadline": "2026-07-31T23:59:59"
        },
        {
          "name": "Technical report due",
          "deadline": "2026-08-05T23:59:59"
        },
        {
          "name": "Final results notification",
          "deadline": "2026-08-15T23:59:59"
        }
      ]
    },
    {
      "id": "agent-ddl-agents-assemble-healthcare-ai-2026-05-11",
      "title": "Agents Assemble - The Healthcare AI Endgame",
      "deadline": "2026-05-11T23:59:59-07:00",
      "dateRange": "Mar 4 - May 11, 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Healthcare",
        "MCP",
        "A2A",
        "FHIR"
      ],
      "url": "https://agents-assemble.devpost.com/",
      "status": "ended",
      "stage": "Submission",
      "source": "Agents Assemble Devpost",
      "type": "hackathon",
      "description": "Healthcare AI agent hackathon focused on interoperable agents at the intersection of MCP, A2A, and FHIR.",
      "prize": "$25,000",
      "platform": "Devpost",
      "evaluationMode": "Hybrid",
      "organizer": "Prompt Opinion (Darena Health)",
      "submissionType": "Demo video + Devpost project",
      "sourceUrl": "https://agents-assemble.devpost.com/",
      "phases": [
        {
          "name": "Submission period ends",
          "deadline": "2026-05-11T23:59:59-07:00"
        },
        {
          "name": "Winners announced",
          "deadline": "2026-05-27T23:59:59-07:00"
        }
      ],
      "tracks": [
        {
          "name": "Build a Superpower",
          "description": "Create an MCP server that exposes healthcare tools for agents."
        },
        {
          "name": "Build an Agent",
          "description": "Configure an A2A-capable healthcare workflow agent on the Prompt Opinion platform."
        }
      ]
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
      "source": "人工整理的官方来源入口",
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
      "source": "人工整理的官方来源入口",
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
      "source": "人工整理的官方来源入口",
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
      "source": "人工整理的官方来源入口",
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
      "source": "人工整理的官方来源入口",
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
      "source": "人工整理的官方来源入口",
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
      "source": "人工整理的官方来源入口",
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
      "source": "人工整理的官方来源入口",
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
      "source": "人工整理的官方来源入口",
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
      "source": "人工整理的官方来源入口",
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
      "source": "人工整理的官方来源入口",
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
      "source": "人工整理的官方来源入口",
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
      "source": "人工整理的官方来源入口",
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
      "source": "人工整理的官方来源入口",
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
      "source": "人工整理的官方来源入口",
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
      "source": "人工整理的官方来源入口",
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
      "source": "人工整理的官方来源入口",
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
      "source": "人工整理的官方来源入口",
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
      "source": "人工整理的官方来源入口",
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
      "source": "人工整理的官方来源入口",
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
      "source": "人工整理的官方来源入口",
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
      "source": "人工整理的官方来源入口",
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
      "source": "人工整理的官方来源入口",
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
      "source": "人工整理的官方来源入口",
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
      "source": "人工整理的官方来源入口",
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
      "source": "人工整理的官方来源入口",
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
      "source": "人工整理的官方来源入口",
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
      "source": "人工整理的官方来源入口",
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
      "source": "人工整理的官方来源入口",
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
      "source": "人工整理的官方来源入口",
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
      "source": "人工整理的官方来源入口",
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "VSI"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "source": "IEEE 官方来源入口",
      "type": "journal",
      "description": "IEEE 投稿系统入口，后续用于保存 Special Section / Article Type 选择说明。",
      "journal": "IEEE Journals",
      "publisher": "IEEE",
      "cfpType": "Submission Platform"
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
      "source": "IEEE 官方来源入口",
      "type": "journal",
      "description": "IEEE Access Special Sections 入口，注意术语通常为 Special Section。",
      "journal": "IEEE Access",
      "publisher": "IEEE",
      "cfpType": "Special Section"
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
      "source": "IEEE 官方来源入口",
      "type": "journal",
      "description": "IEEE ComSoc Magazine CFP 入口，实际 DDL 需按专题详情页继续拆分。",
      "journal": "IEEE Communications Magazine",
      "publisher": "IEEE",
      "cfpType": "Special Issue / Series"
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
      "source": "IEEE 官方来源入口",
      "type": "journal",
      "description": "通信领域重点期刊专题入口，用作 数据源入口。",
      "journal": "IEEE Journal on Selected Areas in Communications",
      "publisher": "IEEE",
      "cfpType": "Special Issue"
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
      "source": "IEEE 官方来源入口",
      "type": "journal",
      "description": "SPS 特刊截止日列表入口，覆盖信号、语音、图像、多媒体方向。",
      "journal": "IEEE SPS Journals",
      "publisher": "IEEE",
      "cfpType": "Special Issue Deadlines"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "source": "Elsevier 官方来源入口",
      "type": "journal",
      "description": "Elsevier 主要 CFP 总入口，适合作为 自动更新流程 主入口。",
      "journal": "Elsevier Journals",
      "publisher": "Elsevier",
      "cfpType": "CFP board"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "cfpType": "Special Issue"
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
      "source": "人工整理的官方来源入口",
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
      "source": "人工整理的官方来源入口",
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
      "source": "人工整理的官方来源入口",
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
      "source": "人工整理的官方来源入口",
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
      "source": "人工整理的官方来源入口",
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
      "source": "官方来源入口",
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
      "source": "人工整理的官方来源入口",
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
      "source": "人工整理的官方来源入口",
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
      "source": "人工整理的官方来源入口",
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
      "source": "人工整理的官方来源入口",
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
      "source": "人工整理的官方来源入口",
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
      "source": "人工整理的官方来源入口",
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
      "source": "人工整理的官方来源入口",
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
      "source": "人工整理的官方来源入口",
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
      "source": "人工整理的官方来源入口",
      "type": "contest",
      "description": "Topcoder 赛事入口。"
    }
  ],
  "holiday-ddl": [
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
    },
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
      "source": "人工整理的官方来源入口",
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
      "source": "人工整理的官方来源入口",
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
      "source": "人工整理的官方来源入口",
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
      "source": "人工整理的官方来源入口",
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
      "source": "人工整理的官方来源入口",
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
      "source": "人工整理的官方来源入口",
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
      "source": "人工整理的官方来源入口",
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
      "source": "人工整理的官方来源入口",
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
      "source": "人工整理的官方来源入口",
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
      "source": "人工整理的官方来源入口",
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
      "source": "人工整理的官方来源入口",
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
      "source": "人工整理的官方来源入口",
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
      "source": "人工整理的官方来源入口",
      "type": "challenge",
      "description": "视觉-语言-动作模型评测入口。"
    }
  ],
  "security-ddl": [
    {
      "id": "ctftime-3277",
      "title": "Hack for a Change 2026 May: UN SDG 1",
      "deadline": "2026-05-19T00:00:00Z",
      "dateRange": "19 May, 00:00 UTC — 21 May 2026, 23:59 UTC",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "CTF",
        "security",
        "Jeopardy"
      ],
      "url": "https://ctftime.org/event/3277",
      "status": "upcoming",
      "description": "Parsed from CTFtime upcoming events. Deadline represents the event start time, not a registration deadline.",
      "stage": "upcoming",
      "source": "ctftime",
      "type": "contest"
    },
    {
      "id": "ctftime-3205",
      "title": "DEF CON CTF Qualifier 2026",
      "deadline": "2026-05-22T21:00:00Z",
      "dateRange": "22 May, 21:00 UTC — 24 May 2026, 21:00 UTC",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "CTF",
        "security",
        "Jeopardy"
      ],
      "url": "https://ctftime.org/event/3205",
      "status": "upcoming",
      "description": "Parsed from CTFtime upcoming events. Deadline represents the event start time, not a registration deadline.",
      "stage": "upcoming",
      "source": "ctftime",
      "type": "contest"
    },
    {
      "id": "ctftime-3284",
      "title": "Hack4Krak CTF 2026 - High School Edition",
      "deadline": "2026-05-23T08:00:00Z",
      "dateRange": "23 May, 08:00 UTC — 24 May 2026, 14:00 UTC",
      "location": "Poland, Cracow",
      "isOnline": false,
      "tags": [
        "CTF",
        "security",
        "Jeopardy"
      ],
      "url": "https://ctftime.org/event/3284",
      "status": "upcoming",
      "description": "Parsed from CTFtime upcoming events. Deadline represents the event start time, not a registration deadline.",
      "stage": "upcoming",
      "source": "ctftime",
      "type": "contest"
    },
    {
      "id": "ctftime-3136",
      "title": "SecLeaf Q2 CTF 2026",
      "deadline": "2026-05-23T14:00:00Z",
      "dateRange": "23 May, 14:00 UTC — 24 May 2026, 14:00 UTC",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "CTF",
        "security",
        "Jeopardy"
      ],
      "url": "https://ctftime.org/event/3136",
      "status": "upcoming",
      "description": "Parsed from CTFtime upcoming events. Deadline represents the event start time, not a registration deadline.",
      "stage": "upcoming",
      "source": "ctftime",
      "type": "contest"
    },
    {
      "id": "ctftime-3271",
      "title": "ZEROBREACH CTF",
      "deadline": "2026-05-24T04:30:00Z",
      "dateRange": "24 May, 04:30 UTC — 24 May 2026, 16:30 UTC",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "CTF",
        "security",
        "Jeopardy"
      ],
      "url": "https://ctftime.org/event/3271",
      "status": "upcoming",
      "description": "Parsed from CTFtime upcoming events. Deadline represents the event start time, not a registration deadline.",
      "stage": "upcoming",
      "source": "ctftime",
      "type": "contest"
    },
    {
      "id": "ctftime-3270",
      "title": "Hackअस्त्र",
      "deadline": "2026-05-29T10:15:00Z",
      "dateRange": "29 May, 10:15 UTC — 30 May 2026, 17:15 UTC",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "CTF",
        "security",
        "Jeopardy"
      ],
      "url": "https://ctftime.org/event/3270",
      "status": "upcoming",
      "description": "Parsed from CTFtime upcoming events. Deadline represents the event start time, not a registration deadline.",
      "stage": "upcoming",
      "source": "ctftime",
      "type": "contest"
    },
    {
      "id": "ctftime-3174",
      "title": "Hardwear.io USA 2026 Hardware CTF",
      "deadline": "2026-05-29T17:00:00Z",
      "dateRange": "29 May, 17:00 UTC — 30 May 2026, 20:50 UTC",
      "location": "US, Santa Clara",
      "isOnline": false,
      "tags": [
        "CTF",
        "security",
        "Jeopardy"
      ],
      "url": "https://ctftime.org/event/3174",
      "status": "upcoming",
      "description": "Parsed from CTFtime upcoming events. Deadline represents the event start time, not a registration deadline.",
      "stage": "upcoming",
      "source": "ctftime",
      "type": "contest"
    },
    {
      "id": "ctftime-3209",
      "title": "THEM?!CTF 2026",
      "deadline": "2026-05-29T18:00:00Z",
      "dateRange": "29 May, 18:00 UTC — 31 May 2026, 18:00 UTC",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "CTF",
        "security",
        "Jeopardy"
      ],
      "url": "https://ctftime.org/event/3209",
      "status": "upcoming",
      "description": "Parsed from CTFtime upcoming events. Deadline represents the event start time, not a registration deadline.",
      "stage": "upcoming",
      "source": "ctftime",
      "type": "contest"
    },
    {
      "id": "ctftime-3247",
      "title": "BYUCTF 2026",
      "deadline": "2026-05-30T00:00:00Z",
      "dateRange": "30 May, 00:00 UTC — 31 May 2026, 00:00 UTC",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "CTF",
        "security",
        "Jeopardy"
      ],
      "url": "https://ctftime.org/event/3247",
      "status": "upcoming",
      "description": "Parsed from CTFtime upcoming events. Deadline represents the event start time, not a registration deadline.",
      "stage": "upcoming",
      "source": "ctftime",
      "type": "contest"
    },
    {
      "id": "ctftime-3178",
      "title": "Grey Cat The Flag 2026 Qualifiers",
      "deadline": "2026-05-30T02:00:00Z",
      "dateRange": "30 May, 02:00 UTC — 31 May 2026, 02:00 UTC",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "CTF",
        "security",
        "Jeopardy"
      ],
      "url": "https://ctftime.org/event/3178",
      "status": "upcoming",
      "description": "Parsed from CTFtime upcoming events. Deadline represents the event start time, not a registration deadline.",
      "stage": "upcoming",
      "source": "ctftime",
      "type": "contest"
    },
    {
      "id": "ctftime-3220",
      "title": "Pwn2Play Open CTF",
      "deadline": "2026-05-30T09:00:00Z",
      "dateRange": "30 May, 09:00 UTC — 30 May 2026, 18:00 UTC",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "CTF",
        "security",
        "Jeopardy"
      ],
      "url": "https://ctftime.org/event/3220",
      "status": "upcoming",
      "description": "Parsed from CTFtime upcoming events. Deadline represents the event start time, not a registration deadline.",
      "stage": "upcoming",
      "source": "ctftime",
      "type": "contest"
    },
    {
      "id": "ctftime-3243",
      "title": "WhiteHats TrojanCTF 2026",
      "deadline": "2026-05-30T09:00:00Z",
      "dateRange": "30 May, 09:00 UTC — 30 May 2026, 19:00 UTC",
      "location": "Netherlands, Eindhoven",
      "isOnline": false,
      "tags": [
        "CTF",
        "security",
        "Jeopardy"
      ],
      "url": "https://ctftime.org/event/3243",
      "status": "upcoming",
      "description": "Parsed from CTFtime upcoming events. Deadline represents the event start time, not a registration deadline.",
      "stage": "upcoming",
      "source": "ctftime",
      "type": "contest"
    },
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
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 自动更新流程 抽取并校验。",
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
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 自动更新流程 抽取并校验。",
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
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 自动更新流程 抽取并校验。",
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
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 自动更新流程 抽取并校验。",
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
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 自动更新流程 抽取并校验。",
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
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 自动更新流程 抽取并校验。",
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
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 自动更新流程 抽取并校验。",
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
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 自动更新流程 抽取并校验。",
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
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 自动更新流程 抽取并校验。",
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
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 自动更新流程 抽取并校验。",
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
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 自动更新流程 抽取并校验。",
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
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 自动更新流程 抽取并校验。",
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
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 自动更新流程 抽取并校验。",
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
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 自动更新流程 抽取并校验。",
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
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 自动更新流程 抽取并校验。",
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
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 自动更新流程 抽取并校验。",
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
      "id": "gsoc-2026-may-1-24-community-bonding-period-gsoc-contributors-get-to-know-mentors-read-doc",
      "title": "Community Bonding Period | GSoC contributors get to know mentors, read documentation, get up to speed to begin working on their projects",
      "deadline": "2026-05-24T23:59:59Z",
      "dateRange": "May 1 - 24",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "GSoC",
        "open source"
      ],
      "url": "https://developers.google.com/open-source/gsoc/timeline?hl=en",
      "status": "upcoming",
      "description": "Parsed from the official GSoC 2026 timeline. Milestone event.",
      "stage": "Milestone",
      "source": "Google Summer of Code",
      "type": "program"
    },
    {
      "id": "gsoc-2026-may-25-coding-officially-begins",
      "title": "Coding officially begins!",
      "deadline": "2026-05-25T23:59:59Z",
      "dateRange": "May 25",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "GSoC",
        "open source"
      ],
      "url": "https://developers.google.com/open-source/gsoc/timeline?hl=en",
      "status": "upcoming",
      "description": "Parsed from the official GSoC 2026 timeline. Milestone event.",
      "stage": "Milestone",
      "source": "Google Summer of Code",
      "type": "program"
    },
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
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 自动更新流程 抽取并校验。",
      "stage": "Source board",
      "source": "Google Summer of Code",
      "type": "program"
    },
    {
      "id": "gsoc-2026-july-6-18-00-utc-mentors-and-gsoc-contributors-can-begin-submitting-midterm-eval",
      "title": "Mentors and GSoC contributors can begin submitting midterm evaluations (for standard 12 week coding projects)",
      "deadline": "2026-07-06T18:00:00Z",
      "dateRange": "July 6 - 18:00 UTC",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "GSoC",
        "open source"
      ],
      "url": "https://developers.google.com/open-source/gsoc/timeline?hl=en",
      "status": "upcoming",
      "description": "Parsed from the official GSoC 2026 timeline. Milestone event.",
      "stage": "Milestone",
      "source": "Google Summer of Code",
      "type": "program"
    },
    {
      "id": "gsoc-2026-july-10-18-00-utc-midterm-evaluation-deadline-standard-coding-period",
      "title": "Midterm evaluation deadline (standard coding period)",
      "deadline": "2026-07-10T18:00:00Z",
      "dateRange": "July 10 - 18:00 UTC",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "GSoC",
        "open source"
      ],
      "url": "https://developers.google.com/open-source/gsoc/timeline?hl=en",
      "status": "upcoming",
      "description": "Parsed from the official GSoC 2026 timeline. Deadline event.",
      "stage": "Deadline",
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
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 自动更新流程 抽取并校验。",
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
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 自动更新流程 抽取并校验。",
      "stage": "Source board",
      "source": "开源之夏",
      "type": "program"
    },
    {
      "id": "gsoc-2026-july-6-august-16-work-period-gsoc-contributors-work-on-their-project-with-guidan",
      "title": "Work Period | GSoC contributors work on their project with guidance from Mentors",
      "deadline": "2026-08-16T23:59:59Z",
      "dateRange": "July 6 - August 16",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "GSoC",
        "open source"
      ],
      "url": "https://developers.google.com/open-source/gsoc/timeline?hl=en",
      "status": "upcoming",
      "description": "Parsed from the official GSoC 2026 timeline. Milestone event.",
      "stage": "Milestone",
      "source": "Google Summer of Code",
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
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 自动更新流程 抽取并校验。",
      "stage": "Source board",
      "source": "LFX Mentorship",
      "type": "program"
    },
    {
      "id": "gsoc-2026-august-17-24-18-00-utc-final-week-gsoc-contributors-submit-their-final-work-prod",
      "title": "Final week: GSoC contributors submit their final work product and their final mentor evaluation (standard coding period)",
      "deadline": "2026-08-24T18:00:00Z",
      "dateRange": "August 17 - 24 - 18:00 UTC",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "GSoC",
        "open source"
      ],
      "url": "https://developers.google.com/open-source/gsoc/timeline?hl=en",
      "status": "upcoming",
      "description": "Parsed from the official GSoC 2026 timeline. Deadline event.",
      "stage": "Deadline",
      "source": "Google Summer of Code",
      "type": "program"
    },
    {
      "id": "gsoc-2026-august-24-31-18-00-utc-mentors-submit-final-gsoc-contributor-evaluations-standar",
      "title": "Mentors submit final GSoC contributor evaluations (standard coding period)",
      "deadline": "2026-08-31T18:00:00Z",
      "dateRange": "August 24 - 31 - 18:00 UTC",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "GSoC",
        "open source"
      ],
      "url": "https://developers.google.com/open-source/gsoc/timeline?hl=en",
      "status": "upcoming",
      "description": "Parsed from the official GSoC 2026 timeline. Deadline event.",
      "stage": "Deadline",
      "source": "Google Summer of Code",
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
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 自动更新流程 抽取并校验。",
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
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 自动更新流程 抽取并校验。",
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
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 自动更新流程 抽取并校验。",
      "stage": "Source board",
      "source": "NumFOCUS Grants",
      "type": "program"
    },
    {
      "id": "gsoc-2026-november-2-18-00-utc-final-date-for-all-gsoc-contributors-to-submit-their-final-",
      "title": "Final date for all GSoC contributors to submit their final work product and final evaluation",
      "deadline": "2026-11-02T18:00:00Z",
      "dateRange": "November 2 - 18:00 UTC",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "GSoC",
        "open source"
      ],
      "url": "https://developers.google.com/open-source/gsoc/timeline?hl=en",
      "status": "upcoming",
      "description": "Parsed from the official GSoC 2026 timeline. Deadline event.",
      "stage": "Deadline",
      "source": "Google Summer of Code",
      "type": "program"
    },
    {
      "id": "gsoc-2026-august-24-november-2-gsoc-contributors-with-extended-timelines-continue-coding",
      "title": "GSoC contributors with extended timelines continue coding",
      "deadline": "2026-11-02T23:59:59Z",
      "dateRange": "August 24 - November 2",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "GSoC",
        "open source"
      ],
      "url": "https://developers.google.com/open-source/gsoc/timeline?hl=en",
      "status": "upcoming",
      "description": "Parsed from the official GSoC 2026 timeline. Milestone event.",
      "stage": "Milestone",
      "source": "Google Summer of Code",
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
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 自动更新流程 抽取并校验。",
      "stage": "Source board",
      "source": "summerofcode.withgoogle.com",
      "type": "program"
    },
    {
      "id": "gsoc-2026-november-9-18-00-utc-final-date-for-mentors-to-submit-evaluations-for-gsoc-contr",
      "title": "Final date for mentors to submit evaluations for GSoC contributor projects with extended deadlines",
      "deadline": "2026-11-09T18:00:00Z",
      "dateRange": "November 9 - 18:00 UTC",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "GSoC",
        "open source"
      ],
      "url": "https://developers.google.com/open-source/gsoc/timeline?hl=en",
      "status": "upcoming",
      "description": "Parsed from the official GSoC 2026 timeline. Deadline event.",
      "stage": "Deadline",
      "source": "Google Summer of Code",
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
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 自动更新流程 抽取并校验。",
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
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 自动更新流程 抽取并校验。",
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
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 自动更新流程 抽取并校验。",
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
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 自动更新流程 抽取并校验。",
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
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 自动更新流程 抽取并校验。",
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
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 自动更新流程 抽取并校验。",
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
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 自动更新流程 抽取并校验。",
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
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 自动更新流程 抽取并校验。",
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
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 自动更新流程 抽取并校验。",
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
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 自动更新流程 抽取并校验。",
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
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 自动更新流程 抽取并校验。",
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
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 自动更新流程 抽取并校验。",
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
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 自动更新流程 抽取并校验。",
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
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 自动更新流程 抽取并校验。",
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
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 自动更新流程 抽取并校验。",
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
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 自动更新流程 抽取并校验。",
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
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 自动更新流程 抽取并校验。",
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
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 自动更新流程 抽取并校验。",
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
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 自动更新流程 抽取并校验。",
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
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 自动更新流程 抽取并校验。",
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
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 自动更新流程 抽取并校验。",
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
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 自动更新流程 抽取并校验。",
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
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 自动更新流程 抽取并校验。",
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
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 自动更新流程 抽取并校验。",
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
      "id": "itchio-jam-gdevelop-big-game-jam-9",
      "title": "GDevelop BIG Game Jam #9",
      "deadline": "2026-05-24T19:00:00Z",
      "deadlineType": "end",
      "tags": [
        "game jam"
      ],
      "url": "https://itch.io/jam/gdevelop-big-game-jam-9",
      "status": "upcoming",
      "description": "Parsed from itch.io/jams. Deadline is the jam end time.",
      "stage": "upcoming",
      "source": "itch.io Jams",
      "type": "contest",
      "dateRange": "2026-05-24",
      "location": "Online",
      "isOnline": true
    },
    {
      "id": "itchio-jam-coolmath-game-jam-2026",
      "title": "The $20K Coolmath Game Jam 2026",
      "deadline": "2026-06-08T06:59:59Z",
      "deadlineType": "end",
      "tags": [
        "game jam"
      ],
      "url": "https://itch.io/jam/coolmath-game-jam-2026",
      "status": "upcoming",
      "description": "Parsed from itch.io/jams. Deadline is the jam end time.",
      "stage": "upcoming",
      "source": "itch.io Jams",
      "type": "contest",
      "dateRange": "2026-06-08",
      "location": "Online",
      "isOnline": true
    },
    {
      "id": "itchio-jam-noise-jam-3",
      "title": "NOISE JAM 3",
      "deadline": "2026-06-13T08:00:00Z",
      "deadlineType": "end-computed",
      "tags": [
        "game jam"
      ],
      "url": "https://itch.io/jam/noise-jam-3",
      "status": "upcoming",
      "description": "Parsed from itch.io/jams. Deadline is computed from the listed start time plus jam duration.",
      "stage": "upcoming",
      "source": "itch.io Jams",
      "type": "contest",
      "dateRange": "2026-06-13",
      "location": "Online",
      "isOnline": true
    },
    {
      "id": "itchio-jam-nes-jam-2026",
      "title": "NES Jam 2026",
      "deadline": "2026-06-15T11:00:00Z",
      "deadlineType": "end-computed",
      "tags": [
        "game jam"
      ],
      "url": "https://itch.io/jam/nes-jam-2026",
      "status": "upcoming",
      "description": "Parsed from itch.io/jams. Deadline is computed from the listed start time plus jam duration.",
      "stage": "upcoming",
      "source": "itch.io Jams",
      "type": "contest",
      "dateRange": "2026-06-15",
      "location": "Online",
      "isOnline": true
    },
    {
      "id": "itchio-jam-metroidvania-month-32",
      "title": "Metroidvania Month 32",
      "deadline": "2026-06-16T02:00:00Z",
      "deadlineType": "end",
      "tags": [
        "game jam"
      ],
      "url": "https://itch.io/jam/metroidvania-month-32",
      "status": "upcoming",
      "description": "Parsed from itch.io/jams. Deadline is the jam end time.",
      "stage": "upcoming",
      "source": "itch.io Jams",
      "type": "contest",
      "dateRange": "2026-06-16",
      "location": "Online",
      "isOnline": true
    },
    {
      "id": "itchio-jam-comfy-jam-summer-2026",
      "title": "Comfy Jam: Summer🏖️",
      "deadline": "2026-06-19T22:00:00Z",
      "deadlineType": "end-computed",
      "tags": [
        "game jam"
      ],
      "url": "https://itch.io/jam/comfy-jam-summer-2026",
      "status": "upcoming",
      "description": "Parsed from itch.io/jams. Deadline is computed from the listed start time plus jam duration.",
      "stage": "upcoming",
      "source": "itch.io Jams",
      "type": "contest",
      "dateRange": "2026-06-19",
      "location": "Online",
      "isOnline": true
    },
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
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 自动更新流程 抽取并校验。",
      "stage": "Source board",
      "source": "Global Game Jam",
      "type": "contest"
    },
    {
      "id": "itchio-jam-toxic-yuri-vn-jam-2",
      "title": "TOXIC YURI VN JAM 2",
      "deadline": "2026-07-13T04:00:00Z",
      "deadlineType": "end-computed",
      "tags": [
        "game jam"
      ],
      "url": "https://itch.io/jam/toxic-yuri-vn-jam-2",
      "status": "upcoming",
      "description": "Parsed from itch.io/jams. Deadline is computed from the listed start time plus jam duration.",
      "stage": "upcoming",
      "source": "itch.io Jams",
      "type": "contest",
      "dateRange": "2026-07-13",
      "location": "Online",
      "isOnline": true
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
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 自动更新流程 抽取并校验。",
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
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 自动更新流程 抽取并校验。",
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
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 自动更新流程 抽取并校验。",
      "stage": "Source board",
      "source": "itch.io Jams",
      "type": "contest"
    },
    {
      "id": "itchio-jam-brackeys-16",
      "title": "Brackeys Game Jam 2026.2",
      "deadline": "2026-08-30T10:00:00Z",
      "deadlineType": "end-computed",
      "tags": [
        "game jam"
      ],
      "url": "https://itch.io/jam/brackeys-16",
      "status": "upcoming",
      "description": "Parsed from itch.io/jams. Deadline is computed from the listed start time plus jam duration.",
      "stage": "upcoming",
      "source": "itch.io Jams",
      "type": "contest",
      "dateRange": "2026-08-30",
      "location": "Online",
      "isOnline": true
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
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 自动更新流程 抽取并校验。",
      "stage": "Source board",
      "source": "Independent Games Festival",
      "type": "contest"
    },
    {
      "id": "itchio-jam-gbjam-14",
      "title": "GBJam 14",
      "deadline": "2026-09-21T11:00:00Z",
      "deadlineType": "end-computed",
      "tags": [
        "game jam"
      ],
      "url": "https://itch.io/jam/gbjam-14",
      "status": "upcoming",
      "description": "Parsed from itch.io/jams. Deadline is computed from the listed start time plus jam duration.",
      "stage": "upcoming",
      "source": "itch.io Jams",
      "type": "contest",
      "dateRange": "2026-09-21",
      "location": "Online",
      "isOnline": true
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
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 自动更新流程 抽取并校验。",
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
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 自动更新流程 抽取并校验。",
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
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 自动更新流程 抽取并校验。",
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
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 自动更新流程 抽取并校验。",
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
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 自动更新流程 抽取并校验。",
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
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 自动更新流程 抽取并校验。",
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
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 自动更新流程 抽取并校验。",
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
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 自动更新流程 抽取并校验。",
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
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 自动更新流程 抽取并校验。",
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
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 自动更新流程 抽取并校验。",
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
      "description": "已登记官方或权威聚合来源入口；具体截止时间需以链接页面为准，后续由专题 自动更新流程 抽取并校验。",
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
  ],
  "game-ddl": [
    {
      "id": "game-ddl-iem-cologne-major-2026-06-02",
      "title": "IEM Cologne Major 2026",
      "deadline": "2026-06-02T23:59:59",
      "dateRange": "Jun 2-21, 2026",
      "location": "Cologne, Germany",
      "isOnline": false,
      "tags": [
        "CS2",
        "IEM",
        "Major"
      ],
      "url": "https://pro.eslgaming.com/tour/csgo/cologne",
      "status": "upcoming",
      "description": "ESL Pro Tour 官方页面确认 IEM Cologne Major 2026 stages 与 playoff 日期。",
      "stage": "Stage 1 start",
      "source": "ESL Pro Tour",
      "type": "contest",
      "subtopic": "cs2",
      "subtopicName": "CS2",
      "sourceUrl": "https://pro.eslgaming.com/tour/csgo/cologne"
    },
    {
      "id": "game-ddl-valorant-masters-london-2026-06-06",
      "title": "VALORANT Masters London 2026",
      "deadline": "2026-06-06T23:59:59",
      "dateRange": "Jun 6-21, 2026",
      "location": "London, United Kingdom",
      "isOnline": false,
      "tags": [
        "VALORANT",
        "VCT",
        "Masters"
      ],
      "url": "https://www.thespike.gg/events/valorant-champions-tour-2026-masters-london-2026/4148",
      "status": "upcoming",
      "description": "THESPIKE.GG 赛事页追踪 Riot-organized VCT Masters London 的赛程与参赛信息。",
      "stage": "Event start",
      "source": "THESPIKE.GG Event Listing",
      "type": "contest",
      "subtopic": "valorant",
      "subtopicName": "VALORANT",
      "sourceUrl": "https://www.thespike.gg/events/valorant-champions-tour-2026-masters-london-2026/4148"
    },
    {
      "id": "game-ddl-hok-enc-ranking-cutoff-2026-06-07",
      "title": "Honor of Kings ENC Ranking Cutoff",
      "deadline": "2026-06-07T23:59:59",
      "dateRange": "Jun 7, 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "王者荣耀",
        "Honor of Kings",
        "ENC"
      ],
      "url": "https://esportsnationscup.com/en/press-releases/enc-adds-honor-of-kings-to-the-games-lineup",
      "status": "upcoming",
      "description": "ENC 官方新闻确认王者荣耀国家队排名直邀积分截止日。",
      "stage": "Ranking cutoff",
      "source": "Esports Nations Cup",
      "type": "contest",
      "subtopic": "honor-of-kings",
      "subtopicName": "王者荣耀",
      "sourceUrl": "https://esportsnationscup.com/en/press-releases/enc-adds-honor-of-kings-to-the-games-lineup"
    },
    {
      "id": "game-ddl-dota2-ti15-qualifiers-2026-06-09",
      "title": "The International 2026 Open Qualifiers",
      "deadline": "2026-06-09T23:59:59",
      "dateRange": "Jun 9-12, 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "Dota 2",
        "The International",
        "qualifier"
      ],
      "url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/assets/RFP_TI_2026.pdf",
      "status": "upcoming",
      "description": "Valve 官方 TI 2026 broadcast RFP 中列出的公开预选赛窗口。",
      "stage": "Open qualifier start",
      "source": "Valve / Dota 2",
      "type": "contest",
      "subtopic": "dota2",
      "subtopicName": "Dota 2",
      "sourceUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/assets/RFP_TI_2026.pdf"
    },
    {
      "id": "game-ddl-lol-lcs-spring-finals-2026-06-13",
      "title": "LCS Spring Finals 2026",
      "deadline": "2026-06-13T23:59:59",
      "dateRange": "Jun 13-14, 2026",
      "location": "Tempe, USA",
      "isOnline": false,
      "tags": [
        "英雄联盟",
        "LoL Esports",
        "LCS"
      ],
      "url": "https://lolesports.com/en-US/news/lcs-spring-finals-heads-to-asu-at-mullett-arena",
      "status": "upcoming",
      "description": "LoL Esports 官方新闻确认 LCS Spring Finals 在 ASU Mullett Arena 举办。",
      "stage": "Finals start",
      "source": "LoL Esports",
      "type": "contest",
      "subtopic": "league-of-legends",
      "subtopicName": "英雄联盟",
      "sourceUrl": "https://lolesports.com/en-US/news/lcs-spring-finals-heads-to-asu-at-mullett-arena"
    },
    {
      "id": "game-ddl-lol-msi-2026-06-28",
      "title": "Mid-Season Invitational 2026",
      "deadline": "2026-06-28T23:59:59",
      "dateRange": "Jun 28 - Jul 12, 2026",
      "location": "Daejeon, South Korea",
      "isOnline": false,
      "tags": [
        "英雄联盟",
        "MSI",
        "Riot Games"
      ],
      "url": "https://lolesports.com/en-US/news/msi-and-worlds-updates",
      "status": "upcoming",
      "description": "LoL Esports 官方 MSI/Worlds update 确认 MSI 2026 场馆、日期和阶段安排。",
      "stage": "Event start",
      "source": "LoL Esports",
      "type": "contest",
      "subtopic": "league-of-legends",
      "subtopicName": "英雄联盟",
      "sourceUrl": "https://lolesports.com/en-US/news/msi-and-worlds-updates"
    },
    {
      "id": "game-ddl-hok-enc-regional-qualifiers-2026-07-03",
      "title": "Honor of Kings ENC Regional Qualifiers",
      "deadline": "2026-07-03T23:59:59",
      "dateRange": "Jul 3-5, 2026",
      "location": "Multiple regions",
      "isOnline": true,
      "tags": [
        "王者荣耀",
        "Honor of Kings",
        "qualifier"
      ],
      "url": "https://esportsnationscup.com/en/press-releases/enc-adds-honor-of-kings-to-the-games-lineup",
      "status": "upcoming",
      "description": "ENC 官方新闻确认王者荣耀九个地区资格赛时间。",
      "stage": "Qualifier start",
      "source": "Esports Nations Cup",
      "type": "contest",
      "subtopic": "honor-of-kings",
      "subtopicName": "王者荣耀",
      "sourceUrl": "https://esportsnationscup.com/en/press-releases/enc-adds-honor-of-kings-to-the-games-lineup"
    },
    {
      "id": "game-ddl-ewc-2026-opening-2026-07-06",
      "title": "Esports World Cup 2026",
      "deadline": "2026-07-06T23:59:59",
      "dateRange": "Jul 6 - Aug 23, 2026",
      "location": "Riyadh, Saudi Arabia",
      "isOnline": false,
      "tags": [
        "电竞世界杯",
        "EWC",
        "multi-title"
      ],
      "url": "https://esportsworldcup.com/en/news/ewc26-confirms-the-return-of-20-games",
      "status": "upcoming",
      "description": "EWC 官方新闻确认 2026 电竞世界杯时间窗口和回归项目清单。",
      "stage": "Event window opens",
      "source": "Esports World Cup",
      "type": "contest",
      "subtopic": "multi-title",
      "subtopicName": "综合电竞",
      "sourceUrl": "https://esportsworldcup.com/en/news/ewc26-confirms-the-return-of-20-games"
    },
    {
      "id": "game-ddl-ewc-honor-of-kings-2026-07-06",
      "title": "Honor of Kings at Esports World Cup 2026",
      "deadline": "2026-07-06T23:59:59",
      "dateRange": "Jul 6 - Aug 23, 2026",
      "location": "Riyadh, Saudi Arabia",
      "isOnline": false,
      "tags": [
        "王者荣耀",
        "EWC",
        "Honor of Kings"
      ],
      "url": "https://esportsworldcup.com/en/news/ewc26-confirms-the-return-of-20-games",
      "status": "upcoming",
      "description": "EWC 官方 2026 回归项目清单包含 Honor of Kings；精确赛程发布后由 自动更新流程 拆分。",
      "stage": "Title window",
      "source": "Esports World Cup",
      "type": "contest",
      "subtopic": "honor-of-kings",
      "subtopicName": "王者荣耀",
      "sourceUrl": "https://esportsworldcup.com/en/news/ewc26-confirms-the-return-of-20-games"
    },
    {
      "id": "game-ddl-ewc-league-of-legends-2026-07-06",
      "title": "League of Legends at Esports World Cup 2026",
      "deadline": "2026-07-06T23:59:59",
      "dateRange": "Jul 6 - Aug 23, 2026",
      "location": "Riyadh, Saudi Arabia",
      "isOnline": false,
      "tags": [
        "英雄联盟",
        "EWC",
        "League of Legends"
      ],
      "url": "https://esportsworldcup.com/en/news/ewc26-confirms-the-return-of-20-games",
      "status": "upcoming",
      "description": "EWC 官方 2026 回归项目清单包含 League of Legends；精确赛程发布后由 自动更新流程 拆分。",
      "stage": "Title window",
      "source": "Esports World Cup",
      "type": "contest",
      "subtopic": "league-of-legends",
      "subtopicName": "英雄联盟",
      "sourceUrl": "https://esportsworldcup.com/en/news/ewc26-confirms-the-return-of-20-games"
    },
    {
      "id": "game-ddl-ewc-cs2-2026-08-10",
      "title": "Counter-Strike 2 at Esports World Cup 2026",
      "deadline": "2026-08-10T23:59:59",
      "dateRange": "Aug 10-23, 2026",
      "location": "Riyadh, Saudi Arabia",
      "isOnline": false,
      "tags": [
        "CS2",
        "EWC",
        "Counter-Strike 2"
      ],
      "url": "https://www.esportsworldcup.com/en/news/cs2-locked-in-for-ewc-2026-2027",
      "status": "upcoming",
      "description": "EWC 官方 CS2 新闻确认 2026 和 2027 的 Counter-Strike 2 赛事窗口。",
      "stage": "Event start",
      "source": "Esports World Cup",
      "type": "contest",
      "subtopic": "cs2",
      "subtopicName": "CS2",
      "sourceUrl": "https://www.esportsworldcup.com/en/news/cs2-locked-in-for-ewc-2026-2027"
    },
    {
      "id": "game-ddl-dota2-the-international-2026-08-13",
      "title": "The International 2026",
      "deadline": "2026-08-13T23:59:59",
      "dateRange": "Aug 13-23, 2026",
      "location": "Shanghai, China",
      "isOnline": false,
      "tags": [
        "Dota 2",
        "The International",
        "TI15"
      ],
      "url": "https://cdn.cloudflare.steamstatic.com/apps/dota2/assets/RFP_TI_2026.pdf",
      "status": "upcoming",
      "description": "Valve 官方 TI 2026 broadcast RFP 中列出的上海正赛窗口。",
      "stage": "Event start",
      "source": "Valve / Dota 2",
      "type": "contest",
      "subtopic": "dota2",
      "subtopicName": "Dota 2",
      "sourceUrl": "https://cdn.cloudflare.steamstatic.com/apps/dota2/assets/RFP_TI_2026.pdf"
    },
    {
      "id": "game-ddl-lol-worlds-2026-10-15",
      "title": "League of Legends World Championship 2026",
      "deadline": "2026-10-15T23:59:59",
      "dateRange": "Oct 15 - Nov 14, 2026",
      "location": "Los Angeles, Allen, Brooklyn, USA",
      "isOnline": false,
      "tags": [
        "英雄联盟",
        "Worlds",
        "Riot Games"
      ],
      "url": "https://lolesports.com/en-US/news/msi-and-worlds-updates",
      "status": "upcoming",
      "description": "LoL Esports 官方更新确认 Worlds 2026 将在北美多城举办。",
      "stage": "Play-In start",
      "source": "LoL Esports",
      "type": "contest",
      "subtopic": "league-of-legends",
      "subtopicName": "英雄联盟",
      "sourceUrl": "https://lolesports.com/en-US/news/msi-and-worlds-updates"
    },
    {
      "id": "game-ddl-lol-worlds-final-2026-11-14",
      "title": "League of Legends Worlds 2026 Grand Final",
      "deadline": "2026-11-14T23:59:59",
      "dateRange": "Nov 14, 2026",
      "location": "Brooklyn, USA",
      "isOnline": false,
      "tags": [
        "英雄联盟",
        "Worlds Final",
        "Riot Games"
      ],
      "url": "https://lolesports.com/en-US/news/msi-and-worlds-updates",
      "status": "upcoming",
      "description": "LoL Esports 官方更新确认 Worlds 2026 Grand Final 在 Brooklyn Barclays Center 举办。",
      "stage": "Grand Final",
      "source": "LoL Esports",
      "type": "contest",
      "subtopic": "league-of-legends",
      "subtopicName": "英雄联盟",
      "sourceUrl": "https://lolesports.com/en-US/news/msi-and-worlds-updates"
    },
    {
      "id": "game-ddl-hok-enc-tournament-2026-11-24",
      "title": "Honor of Kings Esports Nations Cup 2026",
      "deadline": "2026-11-24T23:59:59",
      "dateRange": "Nov 24-29, 2026",
      "location": "Riyadh, Saudi Arabia",
      "isOnline": false,
      "tags": [
        "王者荣耀",
        "Honor of Kings",
        "ENC"
      ],
      "url": "https://esportsnationscup.com/en/press-releases/enc-adds-honor-of-kings-to-the-games-lineup",
      "status": "upcoming",
      "description": "ENC 官方新闻确认王者荣耀项目将在 Riyadh 进行正赛。",
      "stage": "Event start",
      "source": "Esports Nations Cup",
      "type": "contest",
      "subtopic": "honor-of-kings",
      "subtopicName": "王者荣耀",
      "sourceUrl": "https://esportsnationscup.com/en/press-releases/enc-adds-honor-of-kings-to-the-games-lineup"
    },
    {
      "id": "game-ddl-pgl-singapore-major-2026-11-25",
      "title": "PGL Singapore Major 2026",
      "deadline": "2026-11-25T23:59:59",
      "dateRange": "Nov 25 - Dec 13, 2026",
      "location": "Singapore",
      "isOnline": false,
      "tags": [
        "CS2",
        "PGL",
        "Major"
      ],
      "url": "https://blast.tv/cs/tournaments/pgl-singapore-major-2026",
      "status": "upcoming",
      "description": "BLAST tournament listing 追踪 PGL Singapore Major 2026 的日期、队伍和赛程。",
      "stage": "Event start",
      "source": "BLAST / PGL Event Listing",
      "type": "contest",
      "subtopic": "cs2",
      "subtopicName": "CS2",
      "sourceUrl": "https://blast.tv/cs/tournaments/pgl-singapore-major-2026"
    }
  ],
  "sports-ddl": [
    {
      "id": "sports-ddl-bwf-malaysia-masters-2026-05-19",
      "title": "Perodua Malaysia Masters 2026",
      "deadline": "2026-05-19T23:59:59",
      "dateRange": "May 19-24, 2026",
      "location": "Kuala Lumpur, Malaysia",
      "isOnline": false,
      "tags": [
        "羽毛球",
        "BWF",
        "Super 500"
      ],
      "url": "https://bwfbadminton.com/calendar/",
      "status": "upcoming",
      "description": "BWF 官方赛历中的世界巡回赛节点，当前按开赛日倒计时。",
      "stage": "Event start",
      "source": "BWF Tournament Calendar",
      "type": "contest",
      "subtopic": "badminton",
      "subtopicName": "羽毛球",
      "sourceUrl": "https://bwfbadminton.com/calendar/"
    },
    {
      "id": "sports-ddl-wtt-contender-lagos-2026-05-19",
      "title": "WTT Contender Lagos 2026",
      "deadline": "2026-05-19T23:59:59",
      "dateRange": "May 19-24, 2026",
      "location": "Lagos, Nigeria",
      "isOnline": false,
      "tags": [
        "乒乓球",
        "WTT",
        "Contender"
      ],
      "url": "https://www.ittf.com/2026-events-calendar/",
      "status": "upcoming",
      "description": "ITTF/WTT 2026 赛历中的职业巡回赛节点，当前按开赛日倒计时。",
      "stage": "Event start",
      "source": "ITTF 2026 Events Calendar",
      "type": "contest",
      "subtopic": "table-tennis",
      "subtopicName": "乒乓球",
      "sourceUrl": "https://www.ittf.com/2026-events-calendar/"
    },
    {
      "id": "sports-ddl-mlp-dallas-2026-05-22",
      "title": "Major League Pickleball Dallas 2026",
      "deadline": "2026-05-22T23:59:59",
      "dateRange": "May 22-25, 2026",
      "location": "Dallas, USA",
      "isOnline": false,
      "tags": [
        "匹克球",
        "MLP",
        "pickleball"
      ],
      "url": "https://majorleaguepickleball.co/news/major-league-pickleball-announces-full-2026-may-august-season-schedule-event-tickets-now-on-sale-via-tixr-and-ticketmaster-2/",
      "status": "upcoming",
      "description": "MLP 官方 2026 season schedule 中的 Dallas regular season 节点。",
      "stage": "Event start",
      "source": "Major League Pickleball",
      "type": "contest",
      "subtopic": "pickleball",
      "subtopicName": "匹克球",
      "sourceUrl": "https://majorleaguepickleball.co/news/major-league-pickleball-announces-full-2026-may-august-season-schedule-event-tickets-now-on-sale-via-tixr-and-ticketmaster-2/"
    },
    {
      "id": "sports-ddl-bwf-singapore-open-2026-05-26",
      "title": "KFF Singapore Badminton Open 2026",
      "deadline": "2026-05-26T23:59:59",
      "dateRange": "May 26-31, 2026",
      "location": "Singapore",
      "isOnline": false,
      "tags": [
        "羽毛球",
        "BWF",
        "Super 750"
      ],
      "url": "https://bwfbadminton.com/calendar/",
      "status": "upcoming",
      "description": "BWF World Tour 新加坡公开赛节点，后续自动更新流程可补签表和赛程详情。",
      "stage": "Event start",
      "source": "BWF Tournament Calendar",
      "type": "contest",
      "subtopic": "badminton",
      "subtopicName": "羽毛球",
      "sourceUrl": "https://bwfbadminton.com/calendar/"
    },
    {
      "id": "sports-ddl-uk-open-pool-championship-2026-05-26",
      "title": "UK Open Pool Championship 2026",
      "deadline": "2026-05-26T23:59:59",
      "dateRange": "May 26-31, 2026",
      "location": "Brentwood, England",
      "isOnline": false,
      "tags": [
        "台球",
        "pool",
        "Matchroom"
      ],
      "url": "https://matchroompool.com/uk-open-pool-championship/",
      "status": "upcoming",
      "description": "Matchroom Pool 赛事入口与公开赛报道确认的九球公开赛节点，按正赛开赛日倒计时。",
      "stage": "Event start",
      "source": "Matchroom Pool",
      "type": "contest",
      "subtopic": "billiards",
      "subtopicName": "台球",
      "sourceUrl": "https://matchroompool.com/uk-open-pool-championship/"
    },
    {
      "id": "sports-ddl-ppa-asia-macao-open-2026-05-27",
      "title": "PPA Asia 500 Macao Open 2026",
      "deadline": "2026-05-27T23:59:59",
      "dateRange": "May 27-31, 2026",
      "location": "Macao, China",
      "isOnline": false,
      "tags": [
        "匹克球",
        "PPA",
        "Asia 500"
      ],
      "url": "https://ppatour.com/schedule/",
      "status": "upcoming",
      "description": "PPA Tour 官方 schedule 中的 Macao Open 节点。",
      "stage": "Event start",
      "source": "PPA Tour",
      "type": "contest",
      "subtopic": "pickleball",
      "subtopicName": "匹克球",
      "sourceUrl": "https://ppatour.com/schedule/"
    },
    {
      "id": "sports-ddl-bwf-indonesia-open-2026-06-02",
      "title": "Indonesia Open 2026",
      "deadline": "2026-06-02T23:59:59",
      "dateRange": "Jun 2-7, 2026",
      "location": "Jakarta, Indonesia",
      "isOnline": false,
      "tags": [
        "羽毛球",
        "BWF",
        "Super 1000"
      ],
      "url": "https://bwfbadminton.com/calendar/",
      "status": "upcoming",
      "description": "BWF Super 1000 级别赛事，按官方赛历开赛日展示倒计时。",
      "stage": "Event start",
      "source": "BWF Tournament Calendar",
      "type": "contest",
      "subtopic": "badminton",
      "subtopicName": "羽毛球",
      "sourceUrl": "https://bwfbadminton.com/calendar/"
    },
    {
      "id": "sports-ddl-nba-finals-2026-06-03",
      "title": "NBA Finals 2026",
      "deadline": "2026-06-03T23:59:59",
      "dateRange": "Jun 3-19, 2026",
      "location": "North America, team arenas",
      "isOnline": false,
      "tags": [
        "篮球",
        "NBA",
        "Finals"
      ],
      "url": "https://www.nba.com/playoffs/2026/nba-finals",
      "status": "upcoming",
      "description": "NBA 官方 Finals 页面列出的总决赛赛程，当前按 Game 1 开赛日展示倒计时。",
      "stage": "Finals start",
      "source": "NBA Playoffs",
      "type": "contest",
      "subtopic": "basketball",
      "subtopicName": "篮球",
      "sourceUrl": "https://www.nba.com/playoffs/2026/nba-finals"
    },
    {
      "id": "sports-ddl-mlp-st-louis-2026-06-04",
      "title": "Major League Pickleball St. Louis 2026",
      "deadline": "2026-06-04T23:59:59",
      "dateRange": "Jun 4-7, 2026",
      "location": "St. Louis, USA",
      "isOnline": false,
      "tags": [
        "匹克球",
        "MLP",
        "pickleball"
      ],
      "url": "https://majorleaguepickleball.co/news/major-league-pickleball-announces-full-2026-may-august-season-schedule-event-tickets-now-on-sale-via-tixr-and-ticketmaster-2/",
      "status": "upcoming",
      "description": "MLP 官方 2026 season schedule 中的 St. Louis regular season 节点。",
      "stage": "Event start",
      "source": "Major League Pickleball",
      "type": "contest",
      "subtopic": "pickleball",
      "subtopicName": "匹克球",
      "sourceUrl": "https://majorleaguepickleball.co/news/major-league-pickleball-announces-full-2026-may-august-season-schedule-event-tickets-now-on-sale-via-tixr-and-ticketmaster-2/"
    },
    {
      "id": "sports-ddl-ittf-world-masters-gangneung-2026-06-05",
      "title": "ITTF World Masters Championships Gangneung 2026",
      "deadline": "2026-06-05T23:59:59",
      "dateRange": "Jun 5-12, 2026",
      "location": "Gangneung, Korea",
      "isOnline": false,
      "tags": [
        "乒乓球",
        "ITTF",
        "Masters"
      ],
      "url": "https://www.ittf.com/2026-events-calendar/",
      "status": "upcoming",
      "description": "ITTF 赛事日历中的大师赛节点，适合关注大众组与大师组报名/参赛安排。",
      "stage": "Event start",
      "source": "ITTF 2026 Events Calendar",
      "type": "contest",
      "subtopic": "table-tennis",
      "subtopicName": "乒乓球",
      "sourceUrl": "https://www.ittf.com/2026-events-calendar/"
    },
    {
      "id": "sports-ddl-bwf-australian-open-2026-06-09",
      "title": "SATHIO Australian Open 2026",
      "deadline": "2026-06-09T23:59:59",
      "dateRange": "Jun 9-14, 2026",
      "location": "Sydney, Australia",
      "isOnline": false,
      "tags": [
        "羽毛球",
        "BWF",
        "Super 500"
      ],
      "url": "https://bwfbadminton.com/calendar/",
      "status": "upcoming",
      "description": "BWF 澳大利亚公开赛节点，适合订阅赛程、抽签和直播提醒。",
      "stage": "Event start",
      "source": "BWF Tournament Calendar",
      "type": "contest",
      "subtopic": "badminton",
      "subtopicName": "羽毛球",
      "sourceUrl": "https://bwfbadminton.com/calendar/"
    },
    {
      "id": "sports-ddl-bwf-macau-open-2026-06-16",
      "title": "Macau Open 2026",
      "deadline": "2026-06-16T23:59:59",
      "dateRange": "Jun 16-21, 2026",
      "location": "Macau, China",
      "isOnline": false,
      "tags": [
        "羽毛球",
        "BWF",
        "Super 300"
      ],
      "url": "https://bwfbadminton.com/calendar/",
      "status": "upcoming",
      "description": "BWF 澳门公开赛节点，当前按赛事开始日倒计时。",
      "stage": "Event start",
      "source": "BWF Tournament Calendar",
      "type": "contest",
      "subtopic": "badminton",
      "subtopicName": "羽毛球",
      "sourceUrl": "https://bwfbadminton.com/calendar/"
    },
    {
      "id": "sports-ddl-wtt-star-contender-ljubljana-2026-06-16",
      "title": "WTT Star Contender Ljubljana 2026",
      "deadline": "2026-06-16T23:59:59",
      "dateRange": "Jun 16-21, 2026",
      "location": "Ljubljana, Slovenia",
      "isOnline": false,
      "tags": [
        "乒乓球",
        "WTT",
        "Star Contender"
      ],
      "url": "https://worldtabletennis.com/eventslist",
      "status": "upcoming",
      "description": "WTT 职业赛历节点，后续 自动更新流程 会继续补齐官方详情页与报名信息。",
      "stage": "Event start",
      "source": "WTT Events",
      "type": "contest",
      "subtopic": "table-tennis",
      "subtopicName": "乒乓球",
      "sourceUrl": "https://worldtabletennis.com/eventslist"
    },
    {
      "id": "sports-ddl-ppa-asia-china-open-1-2026-06-17",
      "title": "PPA Asia 500 China Open 1 2026",
      "deadline": "2026-06-17T23:59:59",
      "dateRange": "Jun 17-21, 2026",
      "location": "China",
      "isOnline": false,
      "tags": [
        "匹克球",
        "PPA",
        "China Open"
      ],
      "url": "https://ppatour.com/schedule/",
      "status": "upcoming",
      "description": "PPA Tour 官方 schedule 中的 China Open 1 节点。",
      "stage": "Event start",
      "source": "PPA Tour",
      "type": "contest",
      "subtopic": "pickleball",
      "subtopicName": "匹克球",
      "sourceUrl": "https://ppatour.com/schedule/"
    },
    {
      "id": "sports-ddl-wtt-united-states-smash-2026-06-25",
      "title": "WTT United States Smash 2026",
      "deadline": "2026-06-25T23:59:59",
      "dateRange": "Jun 25 - Jul 5, 2026",
      "location": "United States",
      "isOnline": false,
      "tags": [
        "乒乓球",
        "WTT",
        "Smash"
      ],
      "url": "https://worldtabletennis.com/eventslist",
      "status": "upcoming",
      "description": "WTT Smash 级别赛事，当前按赛事开始日展示倒计时。",
      "stage": "Event start",
      "source": "WTT Events",
      "type": "contest",
      "subtopic": "table-tennis",
      "subtopicName": "乒乓球",
      "sourceUrl": "https://worldtabletennis.com/eventslist"
    },
    {
      "id": "sports-ddl-fiba-u17-world-cup-2026-06-27",
      "title": "FIBA U17 Basketball World Cup 2026",
      "deadline": "2026-06-27T23:59:59",
      "dateRange": "Jun 27 - Jul 5, 2026",
      "location": "Istanbul, Turkiye",
      "isOnline": false,
      "tags": [
        "篮球",
        "FIBA",
        "U17"
      ],
      "url": "https://www.fiba.basketball/en/events/fiba-u17-basketball-world-cup-2026",
      "status": "upcoming",
      "description": "FIBA 官方赛事页确认的 U17 男篮世界杯节点，按首个比赛日倒计时。",
      "stage": "Event start",
      "source": "FIBA Basketball",
      "type": "contest",
      "subtopic": "basketball",
      "subtopicName": "篮球",
      "sourceUrl": "https://www.fiba.basketball/en/events/fiba-u17-basketball-world-cup-2026"
    },
    {
      "id": "sports-ddl-bwf-canada-open-2026-06-30",
      "title": "YONEX Canada Open 2026",
      "deadline": "2026-06-30T23:59:59",
      "dateRange": "Jun 30 - Jul 5, 2026",
      "location": "Calgary, Canada",
      "isOnline": false,
      "tags": [
        "羽毛球",
        "BWF",
        "Super 300"
      ],
      "url": "https://bwfbadminton.com/calendar/",
      "status": "upcoming",
      "description": "BWF 加拿大公开赛节点，作为北美羽毛球赛事子专题入口。",
      "stage": "Event start",
      "source": "BWF Tournament Calendar",
      "type": "contest",
      "subtopic": "badminton",
      "subtopicName": "羽毛球",
      "sourceUrl": "https://bwfbadminton.com/calendar/"
    },
    {
      "id": "sports-ddl-wtt-youth-contender-hong-kong-2026-07-06",
      "title": "WTT Youth Contender Hong Kong 2026",
      "deadline": "2026-07-06T23:59:59",
      "dateRange": "Jul 6-12, 2026",
      "location": "Hong Kong, China",
      "isOnline": false,
      "tags": [
        "乒乓球",
        "WTT Youth",
        "Contender"
      ],
      "url": "https://www.ittf.com/2026-events-calendar/",
      "status": "upcoming",
      "description": "WTT 青少年赛历节点，用于子专题追踪报名、抽签与赛程更新。",
      "stage": "Event start",
      "source": "ITTF 2026 Events Calendar",
      "type": "contest",
      "subtopic": "table-tennis",
      "subtopicName": "乒乓球",
      "sourceUrl": "https://www.ittf.com/2026-events-calendar/"
    },
    {
      "id": "sports-ddl-fiba-u17-womens-world-cup-2026-07-11",
      "title": "FIBA U17 Women's Basketball World Cup 2026",
      "deadline": "2026-07-11T23:59:59",
      "dateRange": "Jul 11-19, 2026",
      "location": "Brno, Czechia",
      "isOnline": false,
      "tags": [
        "篮球",
        "FIBA",
        "Women's U17"
      ],
      "url": "https://www.fiba.basketball/en/events",
      "status": "upcoming",
      "description": "FIBA 官方 event calendar 中的 U17 女篮世界杯节点，后续自动更新流程可接入赛事详情页。",
      "stage": "Event start",
      "source": "FIBA Event Calendar",
      "type": "contest",
      "subtopic": "basketball",
      "subtopicName": "篮球",
      "sourceUrl": "https://www.fiba.basketball/en/events"
    },
    {
      "id": "sports-ddl-bwf-japan-open-2026-07-14",
      "title": "Japan Open 2026",
      "deadline": "2026-07-14T23:59:59",
      "dateRange": "Jul 14-19, 2026",
      "location": "Tokyo, Japan",
      "isOnline": false,
      "tags": [
        "羽毛球",
        "BWF",
        "Super 750"
      ],
      "url": "https://bwfbadminton.com/calendar/",
      "status": "upcoming",
      "description": "BWF 日本公开赛节点，适合跟踪签表、赛程与转播提醒。",
      "stage": "Event start",
      "source": "BWF Tournament Calendar",
      "type": "contest",
      "subtopic": "badminton",
      "subtopicName": "羽毛球",
      "sourceUrl": "https://bwfbadminton.com/calendar/"
    },
    {
      "id": "sports-ddl-bwf-china-open-2026-07-21",
      "title": "China Open 2026",
      "deadline": "2026-07-21T23:59:59",
      "dateRange": "Jul 21-26, 2026",
      "location": "Changzhou, China",
      "isOnline": false,
      "tags": [
        "羽毛球",
        "BWF",
        "Super 1000"
      ],
      "url": "https://bwfbadminton.com/calendar/",
      "status": "upcoming",
      "description": "BWF 中国公开赛，Super 1000 级别重点赛事。",
      "stage": "Event start",
      "source": "BWF Tournament Calendar",
      "type": "contest",
      "subtopic": "badminton",
      "subtopicName": "羽毛球",
      "sourceUrl": "https://bwfbadminton.com/calendar/"
    },
    {
      "id": "sports-ddl-apa-world-pool-championships-2026-08-04",
      "title": "APA World Pool Championships 2026",
      "deadline": "2026-08-04T23:59:59",
      "dateRange": "Aug 4-15, 2026",
      "location": "Las Vegas, USA",
      "isOnline": false,
      "tags": [
        "台球",
        "APA",
        "8-Ball",
        "9-Ball"
      ],
      "url": "https://poolplayers.com/world-pool-championships/",
      "status": "upcoming",
      "description": "APA 官方页面列出的 8-Ball 与 9-Ball World Championships 赛事窗口。",
      "stage": "Event start",
      "source": "APA Poolplayers",
      "type": "contest",
      "subtopic": "billiards",
      "subtopicName": "台球",
      "sourceUrl": "https://poolplayers.com/world-pool-championships/"
    },
    {
      "id": "sports-ddl-world-athletics-u20-oregon-2026-08-05",
      "title": "World Athletics U20 Championships Oregon 2026",
      "deadline": "2026-08-05T23:59:59",
      "dateRange": "Aug 5-9, 2026",
      "location": "Eugene, USA",
      "isOnline": false,
      "tags": [
        "田径",
        "World Athletics",
        "U20"
      ],
      "url": "https://worldathletics.org/competitions/world-athletics-u20-championships",
      "status": "upcoming",
      "description": "World Athletics 官方赛事节点，当前按锦标赛开赛日倒计时。",
      "stage": "Event start",
      "source": "World Athletics",
      "type": "contest",
      "subtopic": "running-athletics",
      "subtopicName": "路跑与田径",
      "sourceUrl": "https://worldathletics.org/competitions/world-athletics-u20-championships"
    },
    {
      "id": "sports-ddl-wtt-champions-yokohama-2026-08-05",
      "title": "WTT Champions Yokohama 2026",
      "deadline": "2026-08-05T23:59:59",
      "dateRange": "Aug 5-9, 2026",
      "location": "Yokohama, Japan",
      "isOnline": false,
      "tags": [
        "乒乓球",
        "WTT",
        "Champions"
      ],
      "url": "https://worldtabletennis.com/eventslist",
      "status": "upcoming",
      "description": "WTT Champions 级别赛事，适合关注签表、资格和直播赛程。",
      "stage": "Event start",
      "source": "WTT Events",
      "type": "contest",
      "subtopic": "table-tennis",
      "subtopicName": "乒乓球",
      "sourceUrl": "https://worldtabletennis.com/eventslist"
    },
    {
      "id": "sports-ddl-wtt-europe-smash-sweden-2026-08-13",
      "title": "WTT Europe Smash Sweden 2026",
      "deadline": "2026-08-13T23:59:59",
      "dateRange": "Aug 13-23, 2026",
      "location": "Sweden",
      "isOnline": false,
      "tags": [
        "乒乓球",
        "WTT",
        "Smash"
      ],
      "url": "https://worldtabletennis.com/eventslist",
      "status": "upcoming",
      "description": "WTT Europe Smash 节点，当前按官方赛历开始日期倒计时。",
      "stage": "Event start",
      "source": "WTT Events",
      "type": "contest",
      "subtopic": "table-tennis",
      "subtopicName": "乒乓球",
      "sourceUrl": "https://worldtabletennis.com/eventslist"
    },
    {
      "id": "sports-ddl-sydney-marathon-2026-08-30",
      "title": "Sydney Marathon 2026",
      "deadline": "2026-08-30T23:59:59",
      "dateRange": "Aug 30, 2026",
      "location": "Sydney, Australia",
      "isOnline": false,
      "tags": [
        "马拉松",
        "World Marathon Majors",
        "road race"
      ],
      "url": "https://sydneymarathon.com/",
      "status": "upcoming",
      "description": "世界马拉松大满贯赛事节点，按比赛日倒计时，报名节点可在后续 自动更新流程 中拆分。",
      "stage": "Race day",
      "source": "Sydney Marathon",
      "type": "contest",
      "subtopic": "running-athletics",
      "subtopicName": "路跑与田径",
      "sourceUrl": "https://sydneymarathon.com/"
    },
    {
      "id": "sports-ddl-veolia-pickleball-national-championships-2026-08-31",
      "title": "Veolia Pickleball National Championships 2026",
      "deadline": "2026-08-31T23:59:59",
      "dateRange": "Aug 31 - Sep 6, 2026",
      "location": "Cary, USA",
      "isOnline": false,
      "tags": [
        "匹克球",
        "PPA",
        "Nationals"
      ],
      "url": "https://ppatour.com/schedule/",
      "status": "upcoming",
      "description": "PPA Tour 官方 schedule 中的 Pickleball National Championships 节点。",
      "stage": "Event start",
      "source": "PPA Tour",
      "type": "contest",
      "subtopic": "pickleball",
      "subtopicName": "匹克球",
      "sourceUrl": "https://ppatour.com/schedule/"
    },
    {
      "id": "sports-ddl-bwf-china-masters-2026-09-01",
      "title": "China Masters 2026",
      "deadline": "2026-09-01T23:59:59",
      "dateRange": "Sep 1-6, 2026",
      "location": "Shenzhen, China",
      "isOnline": false,
      "tags": [
        "羽毛球",
        "BWF",
        "Super 750"
      ],
      "url": "https://bwfbadminton.com/calendar/",
      "status": "upcoming",
      "description": "BWF 中国大师赛节点，适合跟踪报名、签表和直播赛程。",
      "stage": "Event start",
      "source": "BWF Tournament Calendar",
      "type": "contest",
      "subtopic": "badminton",
      "subtopicName": "羽毛球",
      "sourceUrl": "https://bwfbadminton.com/calendar/"
    },
    {
      "id": "sports-ddl-fiba-womens-world-cup-2026-09-04",
      "title": "FIBA Women's Basketball World Cup 2026",
      "deadline": "2026-09-04T23:59:59",
      "dateRange": "Sep 4-13, 2026",
      "location": "Berlin, Germany",
      "isOnline": false,
      "tags": [
        "篮球",
        "FIBA",
        "Women's World Cup"
      ],
      "url": "https://www.fiba.basketball/en/events/fiba-womens-basketball-world-cup-2026",
      "status": "upcoming",
      "description": "FIBA 官方女篮世界杯页面确认的柏林赛事窗口，当前按小组赛首日倒计时。",
      "stage": "Event start",
      "source": "FIBA Basketball",
      "type": "contest",
      "subtopic": "basketball",
      "subtopicName": "篮球",
      "sourceUrl": "https://www.fiba.basketball/en/events/fiba-womens-basketball-world-cup-2026"
    },
    {
      "id": "sports-ddl-bwf-hong-kong-open-2026-09-08",
      "title": "Hong Kong Open 2026",
      "deadline": "2026-09-08T23:59:59",
      "dateRange": "Sep 8-13, 2026",
      "location": "Hong Kong, China",
      "isOnline": false,
      "tags": [
        "羽毛球",
        "BWF",
        "Super 500"
      ],
      "url": "https://bwfbadminton.com/calendar/",
      "status": "upcoming",
      "description": "BWF 香港公开赛节点，作为大中华区赛历的重要补充。",
      "stage": "Event start",
      "source": "BWF Tournament Calendar",
      "type": "contest",
      "subtopic": "badminton",
      "subtopicName": "羽毛球",
      "sourceUrl": "https://bwfbadminton.com/calendar/"
    },
    {
      "id": "sports-ddl-berlin-marathon-2026-09-27",
      "title": "BMW Berlin Marathon 2026",
      "deadline": "2026-09-27T23:59:59",
      "dateRange": "Sep 27, 2026",
      "location": "Berlin, Germany",
      "isOnline": false,
      "tags": [
        "马拉松",
        "World Marathon Majors",
        "road race"
      ],
      "url": "https://www.bmw-berlin-marathon.com/",
      "status": "upcoming",
      "description": "柏林马拉松比赛日节点，后续可拆出抽签、报名与参赛包领取提醒。",
      "stage": "Race day",
      "source": "BMW Berlin Marathon",
      "type": "contest",
      "subtopic": "running-athletics",
      "subtopicName": "路跑与田径",
      "sourceUrl": "https://www.bmw-berlin-marathon.com/"
    },
    {
      "id": "sports-ddl-wtt-china-smash-2026-10-01",
      "title": "WTT China Smash 2026",
      "deadline": "2026-10-01T23:59:59",
      "dateRange": "Oct 1-11, 2026",
      "location": "China",
      "isOnline": false,
      "tags": [
        "乒乓球",
        "WTT",
        "Smash"
      ],
      "url": "https://worldtabletennis.com/eventslist",
      "status": "upcoming",
      "description": "WTT 中国大满贯赛事，后续可接入赛程、票务与报名提醒。",
      "stage": "Event start",
      "source": "WTT Events",
      "type": "contest",
      "subtopic": "table-tennis",
      "subtopicName": "乒乓球",
      "sourceUrl": "https://worldtabletennis.com/eventslist"
    },
    {
      "id": "sports-ddl-bwf-arctic-open-2026-10-06",
      "title": "Arctic Open 2026",
      "deadline": "2026-10-06T23:59:59",
      "dateRange": "Oct 6-11, 2026",
      "location": "Vantaa, Finland",
      "isOnline": false,
      "tags": [
        "羽毛球",
        "BWF",
        "Super 500"
      ],
      "url": "https://bwfbadminton.com/calendar/",
      "status": "upcoming",
      "description": "BWF 北极公开赛节点，当前按官方赛历开始日倒计时。",
      "stage": "Event start",
      "source": "BWF Tournament Calendar",
      "type": "contest",
      "subtopic": "badminton",
      "subtopicName": "羽毛球",
      "sourceUrl": "https://bwfbadminton.com/calendar/"
    },
    {
      "id": "sports-ddl-chicago-marathon-2026-10-11",
      "title": "Bank of America Chicago Marathon 2026",
      "deadline": "2026-10-11T23:59:59",
      "dateRange": "Oct 11, 2026",
      "location": "Chicago, USA",
      "isOnline": false,
      "tags": [
        "马拉松",
        "World Marathon Majors",
        "road race"
      ],
      "url": "https://www.chicagomarathon.com/",
      "status": "upcoming",
      "description": "芝加哥马拉松比赛日节点，适合后续补充报名、抽签和成绩发布时间。",
      "stage": "Race day",
      "source": "Chicago Marathon",
      "type": "contest",
      "subtopic": "running-athletics",
      "subtopicName": "路跑与田径",
      "sourceUrl": "https://www.chicagomarathon.com/"
    },
    {
      "id": "sports-ddl-attu-asian-table-tennis-championships-2026-10-12",
      "title": "ATTU Asian Table Tennis Championships 2026",
      "deadline": "2026-10-12T23:59:59",
      "dateRange": "Oct 12-25, 2026",
      "location": "Tashkent, Uzbekistan",
      "isOnline": false,
      "tags": [
        "乒乓球",
        "ATTU",
        "Asian Championships"
      ],
      "url": "https://www.ittf.com/2026-events-calendar/",
      "status": "upcoming",
      "description": "亚洲区锦标赛节点，适合跟踪队伍报名、赛程和成绩发布时间。",
      "stage": "Event start",
      "source": "ITTF 2026 Events Calendar",
      "type": "contest",
      "subtopic": "table-tennis",
      "subtopicName": "乒乓球",
      "sourceUrl": "https://www.ittf.com/2026-events-calendar/"
    },
    {
      "id": "sports-ddl-bwf-denmark-open-2026-10-13",
      "title": "Denmark Open 2026",
      "deadline": "2026-10-13T23:59:59",
      "dateRange": "Oct 13-18, 2026",
      "location": "Odense, Denmark",
      "isOnline": false,
      "tags": [
        "羽毛球",
        "BWF",
        "Super 750"
      ],
      "url": "https://bwfbadminton.com/calendar/",
      "status": "upcoming",
      "description": "BWF 丹麦公开赛节点，欧洲秋季重点赛事。",
      "stage": "Event start",
      "source": "BWF Tournament Calendar",
      "type": "contest",
      "subtopic": "badminton",
      "subtopicName": "羽毛球",
      "sourceUrl": "https://bwfbadminton.com/calendar/"
    },
    {
      "id": "sports-ddl-northern-ireland-open-snooker-2026-10-18",
      "title": "BetVictor Northern Ireland Open 2026",
      "deadline": "2026-10-18T23:59:59",
      "dateRange": "Oct 18-25, 2026",
      "location": "Belfast, Northern Ireland",
      "isOnline": false,
      "tags": [
        "台球",
        "snooker",
        "World Snooker Tour"
      ],
      "url": "https://www.waterfront.co.uk/what-s-on/betvictor-northern-ireland-open/",
      "status": "upcoming",
      "description": "Waterfront Hall 官方售票页确认 World Snooker Tour 北爱尔兰公开赛日期。",
      "stage": "Event start",
      "source": "Waterfront Hall / World Snooker Tour",
      "type": "contest",
      "subtopic": "billiards",
      "subtopicName": "台球",
      "sourceUrl": "https://www.waterfront.co.uk/what-s-on/betvictor-northern-ireland-open/"
    },
    {
      "id": "sports-ddl-bwf-french-open-2026-10-20",
      "title": "French Open 2026",
      "deadline": "2026-10-20T23:59:59",
      "dateRange": "Oct 20-25, 2026",
      "location": "France",
      "isOnline": false,
      "tags": [
        "羽毛球",
        "BWF",
        "Super 750"
      ],
      "url": "https://bwfbadminton.com/calendar/",
      "status": "upcoming",
      "description": "BWF 法国公开赛节点，后续可补齐场馆、签表与直播入口。",
      "stage": "Event start",
      "source": "BWF Tournament Calendar",
      "type": "contest",
      "subtopic": "badminton",
      "subtopicName": "羽毛球",
      "sourceUrl": "https://bwfbadminton.com/calendar/"
    },
    {
      "id": "sports-ddl-bwf-hylo-open-2026-10-27",
      "title": "HYLO Open 2026",
      "deadline": "2026-10-27T23:59:59",
      "dateRange": "Oct 27 - Nov 1, 2026",
      "location": "Saarbrucken, Germany",
      "isOnline": false,
      "tags": [
        "羽毛球",
        "BWF",
        "World Tour"
      ],
      "url": "https://bwfbadminton.com/calendar/",
      "status": "upcoming",
      "description": "BWF HYLO Open 节点，适合作为欧洲秋季赛历追踪入口。",
      "stage": "Event start",
      "source": "BWF Tournament Calendar",
      "type": "contest",
      "subtopic": "badminton",
      "subtopicName": "羽毛球",
      "sourceUrl": "https://bwfbadminton.com/calendar/"
    },
    {
      "id": "sports-ddl-new-york-city-marathon-2026-11-01",
      "title": "TCS New York City Marathon 2026",
      "deadline": "2026-11-01T23:59:59",
      "dateRange": "Nov 1, 2026",
      "location": "New York, USA",
      "isOnline": false,
      "tags": [
        "马拉松",
        "World Marathon Majors",
        "road race"
      ],
      "url": "https://www.tcsnewyorkcitymarathon.org/",
      "status": "upcoming",
      "description": "纽约马拉松比赛日节点，后续可继续拆出抽签、报名和赛前领取提醒。",
      "stage": "Race day",
      "source": "TCS New York City Marathon",
      "type": "contest",
      "subtopic": "running-athletics",
      "subtopicName": "路跑与田径",
      "sourceUrl": "https://www.tcsnewyorkcitymarathon.org/"
    },
    {
      "id": "sports-ddl-apa-us-amateur-championship-2026-11-13",
      "title": "APA U.S. Amateur Championship 2026",
      "deadline": "2026-11-13T23:59:59",
      "dateRange": "Nov 13-15, 2026",
      "location": "Las Vegas, USA",
      "isOnline": false,
      "tags": [
        "台球",
        "APA",
        "amateur"
      ],
      "url": "https://poolplayers.com/us-amateur-championship/",
      "status": "upcoming",
      "description": "APA 官方 U.S. Amateur Championship 页面列出的 2026 冠军赛节点。",
      "stage": "Event start",
      "source": "APA Poolplayers",
      "type": "contest",
      "subtopic": "billiards",
      "subtopicName": "台球",
      "sourceUrl": "https://poolplayers.com/us-amateur-championship/"
    },
    {
      "id": "sports-ddl-ittf-world-youth-championships-manama-2026-11-21",
      "title": "ITTF World Youth Championships Manama 2026",
      "deadline": "2026-11-21T23:59:59",
      "dateRange": "Nov 21-28, 2026",
      "location": "Manama, Bahrain",
      "isOnline": false,
      "tags": [
        "乒乓球",
        "ITTF",
        "Youth"
      ],
      "url": "https://www.ittf.com/2026-events-calendar/",
      "status": "upcoming",
      "description": "ITTF 青少年世界锦标赛节点，后续可拆出报名、抽签和正赛多个 DDL。",
      "stage": "Event start",
      "source": "ITTF 2026 Events Calendar",
      "type": "contest",
      "subtopic": "table-tennis",
      "subtopicName": "乒乓球",
      "sourceUrl": "https://www.ittf.com/2026-events-calendar/"
    },
    {
      "id": "sports-ddl-ittf-mixed-team-world-cup-chengdu-2026-11-29",
      "title": "ITTF Mixed Team World Cup Chengdu 2026",
      "deadline": "2026-11-29T23:59:59",
      "dateRange": "Nov 29 - Dec 6, 2026",
      "location": "Chengdu, China",
      "isOnline": false,
      "tags": [
        "乒乓球",
        "ITTF",
        "World Cup"
      ],
      "url": "https://www.ittf.com/2026-events-calendar/",
      "status": "upcoming",
      "description": "ITTF 混合团体世界杯成都站，当前按赛事开始日倒计时。",
      "stage": "Event start",
      "source": "ITTF 2026 Events Calendar",
      "type": "contest",
      "subtopic": "table-tennis",
      "subtopicName": "乒乓球",
      "sourceUrl": "https://www.ittf.com/2026-events-calendar/"
    },
    {
      "id": "sports-ddl-wtt-finals-hong-kong-2026-12-08",
      "title": "WTT Finals Hong Kong 2026",
      "deadline": "2026-12-08T23:59:59",
      "dateRange": "Dec 8-13, 2026",
      "location": "Hong Kong, China",
      "isOnline": false,
      "tags": [
        "乒乓球",
        "WTT",
        "Finals"
      ],
      "url": "https://worldtabletennis.com/eventslist",
      "status": "upcoming",
      "description": "WTT 年终总决赛节点，适合关注入围名单、赛程和观赛提醒。",
      "stage": "Event start",
      "source": "WTT Events",
      "type": "contest",
      "subtopic": "table-tennis",
      "subtopicName": "乒乓球",
      "sourceUrl": "https://worldtabletennis.com/eventslist"
    }
  ],
  "civil-service-ddl": [
    {
      "id": "civil-service-ddl-beijing-public-recruitment-14a8e5c312",
      "title": "北京市东城区教育委员会所属事业单位2026年第二批公开招聘公告",
      "deadline": "2026-05-27T10:00:00+08:00",
      "dateRange": "报名截止：2026年5月27日 10:00",
      "location": "北京",
      "isOnline": true,
      "tags": [
        "事业单位",
        "招聘",
        "报名",
        "教师"
      ],
      "url": "https://rsj.beijing.gov.cn/xxgk/gkzp/202605/t20260518_4656090.html",
      "status": "upcoming",
      "description": "北京公开招聘公告，已解析报名截止时间。",
      "stage": "报名截止",
      "source": "北京市人力资源和社会保障局公开招聘",
      "type": "program",
      "publishedAt": "2026-05-18"
    },
    {
      "id": "civil-service-ddl-beijing-public-recruitment-fb7add6215",
      "title": "北京第五实验学校2026年公开招聘公告",
      "deadline": "2026-05-27T17:00:00+08:00",
      "dateRange": "报名截止：2026年5月27日 17:00",
      "location": "北京",
      "isOnline": true,
      "tags": [
        "事业单位",
        "招聘",
        "报名",
        "教师"
      ],
      "url": "https://rsj.beijing.gov.cn/xxgk/gkzp/202605/t20260518_4655204.html",
      "status": "upcoming",
      "description": "北京公开招聘公告，已解析报名截止时间。",
      "stage": "报名截止",
      "source": "北京市人力资源和社会保障局公开招聘",
      "type": "program",
      "publishedAt": "2026-05-18"
    },
    {
      "id": "civil-service-ddl-beijing-public-recruitment-796b267fed",
      "title": "首都师范大学附属育新学校2026年公开招聘公告",
      "deadline": "2026-05-27T17:00:00+08:00",
      "dateRange": "报名截止：2026年5月27日 17:00",
      "location": "北京",
      "isOnline": true,
      "tags": [
        "事业单位",
        "招聘",
        "报名",
        "教师"
      ],
      "url": "https://rsj.beijing.gov.cn/xxgk/gkzp/202605/t20260518_4655797.html",
      "status": "upcoming",
      "description": "北京公开招聘公告，已解析报名截止时间。",
      "stage": "报名截止",
      "source": "北京市人力资源和社会保障局公开招聘",
      "type": "program",
      "publishedAt": "2026-05-18"
    },
    {
      "id": "civil-service-ddl-beijing-public-recruitment-2c84541cb0",
      "title": "北京工业大学2026年人才引进公告（第一批）",
      "deadline": "2026-05-27T23:59:00+08:00",
      "dateRange": "报名截止：2026年5月27日 23:59",
      "location": "北京",
      "isOnline": true,
      "tags": [
        "事业单位",
        "招聘",
        "报名"
      ],
      "url": "https://rsj.beijing.gov.cn/xxgk/gkzp/202605/t20260518_4655772.html",
      "status": "upcoming",
      "description": "北京公开招聘公告，已解析报名截止时间。",
      "stage": "报名截止",
      "source": "北京市人力资源和社会保障局公开招聘",
      "type": "program",
      "publishedAt": "2026-05-18"
    },
    {
      "id": "civil-service-ddl-beijing-public-recruitment-4f8f8125ab",
      "title": "北京信息科技大学2026年人才引进公告（第一批）",
      "deadline": "2026-05-27T23:59:00+08:00",
      "dateRange": "报名截止：2026年5月27日 23:59",
      "location": "北京",
      "isOnline": true,
      "tags": [
        "事业单位",
        "招聘",
        "报名"
      ],
      "url": "https://rsj.beijing.gov.cn/xxgk/gkzp/202605/t20260518_4655277.html",
      "status": "upcoming",
      "description": "北京公开招聘公告，已解析报名截止时间。",
      "stage": "报名截止",
      "source": "北京市人力资源和社会保障局公开招聘",
      "type": "program",
      "publishedAt": "2026-05-18"
    },
    {
      "id": "civil-service-ddl-beijing-public-recruitment-af9cc3a513",
      "title": "北京急救中心2026年度第三批公开招聘公告",
      "deadline": "2026-05-28T16:00:00+08:00",
      "dateRange": "报名截止：2026年5月28日 16:00",
      "location": "北京",
      "isOnline": true,
      "tags": [
        "事业单位",
        "招聘",
        "报名"
      ],
      "url": "https://rsj.beijing.gov.cn/xxgk/gkzp/202605/t20260519_4657708.html",
      "status": "upcoming",
      "description": "北京公开招聘公告，已解析报名截止时间。",
      "stage": "报名截止",
      "source": "北京市人力资源和社会保障局公开招聘",
      "type": "program",
      "publishedAt": "2026-05-19"
    },
    {
      "id": "civil-service-ddl-beijing-public-recruitment-494e7574b0",
      "title": "北京小汤山医院2026年公开招聘公告（第二批）",
      "deadline": "2026-05-31T23:59:00+08:00",
      "dateRange": "报名截止：2026年5月31日 23:59",
      "location": "北京",
      "isOnline": true,
      "tags": [
        "事业单位",
        "招聘",
        "报名",
        "医疗"
      ],
      "url": "https://rsj.beijing.gov.cn/xxgk/gkzp/202605/t20260513_4648579.html",
      "status": "upcoming",
      "description": "北京公开招聘公告，已解析报名截止时间。",
      "stage": "报名截止",
      "source": "北京市人力资源和社会保障局公开招聘",
      "type": "program",
      "publishedAt": "2026-05-13"
    },
    {
      "id": "civil-service-ddl-beijing-public-recruitment-acd1e4ae58",
      "title": "首都医科大学附属北京天坛医院2026年公开招聘工作人员公告",
      "deadline": "2026-05-31T23:59:00+08:00",
      "dateRange": "报名截止：2026年5月31日 23:59",
      "location": "北京",
      "isOnline": true,
      "tags": [
        "事业单位",
        "招聘",
        "报名",
        "医疗"
      ],
      "url": "https://rsj.beijing.gov.cn/xxgk/gkzp/202605/t20260518_4655221.html",
      "status": "upcoming",
      "description": "北京公开招聘公告，已解析报名截止时间。",
      "stage": "报名截止",
      "source": "北京市人力资源和社会保障局公开招聘",
      "type": "program",
      "publishedAt": "2026-05-18"
    },
    {
      "id": "civil-service-ddl-beijing-public-recruitment-e1e09ba32b",
      "title": "首都医科大学附属北京地坛医院2026年学科带头人、学科骨干公开招聘公告",
      "deadline": "2026-06-30T23:59:00+08:00",
      "dateRange": "报名截止：2026年6月30日 23:59",
      "location": "北京",
      "isOnline": true,
      "tags": [
        "事业单位",
        "招聘",
        "报名",
        "医疗"
      ],
      "url": "https://rsj.beijing.gov.cn/xxgk/gkzp/202605/t20260509_4642680.html",
      "status": "upcoming",
      "description": "北京公开招聘公告，已解析报名截止时间。",
      "stage": "报名截止",
      "source": "北京市人力资源和社会保障局公开招聘",
      "type": "program",
      "publishedAt": "2026-05-09"
    },
    {
      "id": "civil-service-ddl-national-civil-service-source-board-2026-10-15",
      "title": "中央机关及其直属机构公务员考试公告与报名入口",
      "deadline": "2026-10-15T23:59:59+08:00",
      "dateRange": "以官方公告为准",
      "location": "中国",
      "isOnline": true,
      "tags": [
        "公务员",
        "国考",
        "报名"
      ],
      "url": "http://bm.scs.gov.cn/kl2026",
      "status": "upcoming",
      "description": "中央机关及其直属机构公务员考试官方入口。",
      "stage": "Source board",
      "source": "国家公务员局",
      "type": "program",
      "isDatePlaceholder": true
    },
    {
      "id": "civil-service-ddl-central-selection-source-board-2026-10-30",
      "title": "中央机关公开遴选和公开选调公务员入口",
      "deadline": "2026-10-30T23:59:59+08:00",
      "dateRange": "以官方公告为准",
      "location": "中国",
      "isOnline": true,
      "tags": [
        "公务员",
        "遴选",
        "选调"
      ],
      "url": "http://subb.scs.gov.cn/lx2026",
      "status": "upcoming",
      "description": "中央机关公开遴选、公开选调官方入口。",
      "stage": "Source board",
      "source": "国家公务员局",
      "type": "program",
      "isDatePlaceholder": true
    },
    {
      "id": "civil-service-ddl-beijing-public-service-source-board-2026-11-15",
      "title": "北京市公务员与事业单位招录公告入口",
      "deadline": "2026-11-15T23:59:59+08:00",
      "dateRange": "以官方公告为准",
      "location": "北京",
      "isOnline": true,
      "tags": [
        "公务员",
        "事业单位",
        "报名"
      ],
      "url": "https://rsj.beijing.gov.cn/ywsite/bjpta/",
      "status": "upcoming",
      "description": "北京市公务员与事业单位招录公告入口。",
      "stage": "Source board",
      "source": "北京市人事考试服务频道",
      "type": "program",
      "isDatePlaceholder": true
    },
    {
      "id": "civil-service-ddl-guangdong-public-service-source-board-2026-11-30",
      "title": "广东省公务员与事业单位招录公告入口",
      "deadline": "2026-11-30T23:59:59+08:00",
      "dateRange": "以官方公告为准",
      "location": "广东",
      "isOnline": true,
      "tags": [
        "公务员",
        "事业单位",
        "招聘"
      ],
      "url": "https://rsks.gd.gov.cn/",
      "status": "upcoming",
      "description": "广东省考与事业单位招聘公告入口。",
      "stage": "Source board",
      "source": "广东人事考试网",
      "type": "program",
      "isDatePlaceholder": true
    },
    {
      "id": "civil-service-ddl-public-institution-source-board-2026-12-15",
      "title": "事业单位公开招聘公告入口",
      "deadline": "2026-12-15T23:59:59+08:00",
      "dateRange": "以官方公告为准",
      "location": "中国",
      "isOnline": true,
      "tags": [
        "事业单位",
        "招聘",
        "报名"
      ],
      "url": "https://chinajob.mohrss.gov.cn/",
      "status": "upcoming",
      "description": "事业单位公开招聘与公共招聘公告入口。",
      "stage": "Source board",
      "source": "中国公共招聘网",
      "type": "program",
      "isDatePlaceholder": true
    },
    {
      "id": "civil-service-ddl-shaanxi-public-service-source-board-2026-12-31",
      "title": "陕西省公务员与事业单位招录公告入口",
      "deadline": "2026-12-31T23:59:59+08:00",
      "dateRange": "以官方公告为准",
      "location": "陕西",
      "isOnline": true,
      "tags": [
        "公务员",
        "事业单位",
        "招聘"
      ],
      "url": "https://www.sxrsks.cn/",
      "status": "upcoming",
      "description": "陕西公务员录用与事业单位招聘公告入口。",
      "stage": "Source board",
      "source": "陕西人事考试网",
      "type": "program",
      "isDatePlaceholder": true
    },
    {
      "id": "civil-service-ddl-beijing-public-recruitment-8162cde1bf",
      "title": "2026年丰台区卫生健康委直属事业单位第二批公开招聘医疗卫生专业工作人员公告",
      "deadline": "2026-05-13T16:00:00+08:00",
      "dateRange": "报名截止：2026年5月13日 16:00",
      "location": "北京",
      "isOnline": true,
      "tags": [
        "事业单位",
        "招聘",
        "报名",
        "医疗"
      ],
      "url": "https://rsj.beijing.gov.cn/xxgk/gkzp/202604/t20260429_4622415.html",
      "status": "ended",
      "description": "北京公开招聘公告，已解析报名截止时间。",
      "stage": "报名截止",
      "source": "北京市人力资源和社会保障局公开招聘",
      "type": "program",
      "publishedAt": "2026-04-29"
    },
    {
      "id": "civil-service-ddl-beijing-public-recruitment-006d73fb67",
      "title": "房山区燕山教育委员会所属事业单位2026年第二批公开招聘教师的公告",
      "deadline": "2026-05-14T15:00:00+08:00",
      "dateRange": "报名截止：2026年5月14日 15:00",
      "location": "北京",
      "isOnline": true,
      "tags": [
        "事业单位",
        "招聘",
        "报名",
        "教师"
      ],
      "url": "https://rsj.beijing.gov.cn/xxgk/gkzp/202605/t20260507_4639213.html",
      "status": "ended",
      "description": "北京公开招聘公告，已解析报名截止时间。",
      "stage": "报名截止",
      "source": "北京市人力资源和社会保障局公开招聘",
      "type": "program",
      "publishedAt": "2026-05-07"
    },
    {
      "id": "civil-service-ddl-beijing-public-recruitment-3c6abc993a",
      "title": "北京市卫生健康委员会直属事业单位2026年公开招聘工作人员公告",
      "deadline": "2026-05-14T16:00:00+08:00",
      "dateRange": "报名截止：2026年5月14日 16:00",
      "location": "北京",
      "isOnline": true,
      "tags": [
        "事业单位",
        "招聘",
        "报名",
        "医疗"
      ],
      "url": "https://rsj.beijing.gov.cn/xxgk/gkzp/202604/t20260430_4625871.html",
      "status": "ended",
      "description": "北京公开招聘公告，已解析报名截止时间。",
      "stage": "报名截止",
      "source": "北京市人力资源和社会保障局公开招聘",
      "type": "program",
      "publishedAt": "2026-04-30"
    },
    {
      "id": "civil-service-ddl-beijing-public-recruitment-a8e0362052",
      "title": "北京市大兴区卫生健康委员会2026年第二批事业单位公开招聘工作人员公告",
      "deadline": "2026-05-14T17:00:00+08:00",
      "dateRange": "报名截止：2026年5月14日 17:00",
      "location": "北京",
      "isOnline": true,
      "tags": [
        "事业单位",
        "招聘",
        "报名",
        "医疗"
      ],
      "url": "https://rsj.beijing.gov.cn/xxgk/gkzp/202605/t20260506_4636745.html",
      "status": "ended",
      "description": "北京公开招聘公告，已解析报名截止时间。",
      "stage": "报名截止",
      "source": "北京市人力资源和社会保障局公开招聘",
      "type": "program",
      "publishedAt": "2026-05-06"
    },
    {
      "id": "civil-service-ddl-beijing-public-recruitment-98c8f37664",
      "title": "石景山区教育系统事业单位2026年第二次面向应届博士毕业生公开招聘公告",
      "deadline": "2026-05-14T17:00:00+08:00",
      "dateRange": "报名截止：2026年5月14日 17:00",
      "location": "北京",
      "isOnline": true,
      "tags": [
        "事业单位",
        "招聘",
        "报名",
        "教师"
      ],
      "url": "https://rsj.beijing.gov.cn/xxgk/gkzp/202605/t20260506_4637818.html",
      "status": "ended",
      "description": "北京公开招聘公告，已解析报名截止时间。",
      "stage": "报名截止",
      "source": "北京市人力资源和社会保障局公开招聘",
      "type": "program",
      "publishedAt": "2026-05-06"
    },
    {
      "id": "civil-service-ddl-beijing-public-recruitment-cb5b2154a3",
      "title": "首都医科大学附属北京口腔医院2026年公开招聘（第三批）公告",
      "deadline": "2026-05-15T23:59:00+08:00",
      "dateRange": "报名截止：2026年5月15日 23:59",
      "location": "北京",
      "isOnline": true,
      "tags": [
        "事业单位",
        "招聘",
        "报名",
        "医疗"
      ],
      "url": "https://rsj.beijing.gov.cn/xxgk/gkzp/202604/t20260430_4625873.html",
      "status": "ended",
      "description": "北京公开招聘公告，已解析报名截止时间。",
      "stage": "报名截止",
      "source": "北京市人力资源和社会保障局公开招聘",
      "type": "program",
      "publishedAt": "2026-04-30"
    },
    {
      "id": "civil-service-ddl-beijing-public-recruitment-abcafd562f",
      "title": "北京财贸职业学院2026年公开招聘公告（第二批）",
      "deadline": "2026-05-17T16:00:00+08:00",
      "dateRange": "报名截止：2026年5月17日 16:00",
      "location": "北京",
      "isOnline": true,
      "tags": [
        "事业单位",
        "招聘",
        "报名"
      ],
      "url": "https://rsj.beijing.gov.cn/xxgk/gkzp/202604/t20260430_4625674.html",
      "status": "ended",
      "description": "北京公开招聘公告，已解析报名截止时间。",
      "stage": "报名截止",
      "source": "北京市人力资源和社会保障局公开招聘",
      "type": "program",
      "publishedAt": "2026-04-30"
    },
    {
      "id": "civil-service-ddl-beijing-public-recruitment-c956b6dcbc",
      "title": "首都医科大学2026年度事业编制岗位公开招聘公告（第二批）",
      "deadline": "2026-05-17T22:00:00+08:00",
      "dateRange": "报名截止：2026年5月17日 22:00",
      "location": "北京",
      "isOnline": true,
      "tags": [
        "事业单位",
        "招聘",
        "报名",
        "医疗"
      ],
      "url": "https://rsj.beijing.gov.cn/xxgk/gkzp/202604/t20260430_4625644.html",
      "status": "ended",
      "description": "北京公开招聘公告，已解析报名截止时间。",
      "stage": "报名截止",
      "source": "北京市人力资源和社会保障局公开招聘",
      "type": "program",
      "publishedAt": "2026-04-30"
    },
    {
      "id": "civil-service-ddl-beijing-public-recruitment-2b7549c412",
      "title": "中共北京市石景山区委党校（区行政学院、区社会主义学院）2026年公开招聘事业单位工作人员公告",
      "deadline": "2026-05-18T16:00:00+08:00",
      "dateRange": "报名截止：2026年5月18日 16:00",
      "location": "北京",
      "isOnline": true,
      "tags": [
        "事业单位",
        "招聘",
        "报名"
      ],
      "url": "https://rsj.beijing.gov.cn/xxgk/gkzp/202605/t20260509_4642649.html",
      "status": "ended",
      "description": "北京公开招聘公告，已解析报名截止时间。",
      "stage": "报名截止",
      "source": "北京市人力资源和社会保障局公开招聘",
      "type": "program",
      "publishedAt": "2026-05-09"
    },
    {
      "id": "civil-service-ddl-beijing-public-recruitment-a60e44f9d6",
      "title": "​北京市体育局所属事业单位2026年上半年公开招聘运动员公告",
      "deadline": "2026-05-18T23:59:00+08:00",
      "dateRange": "报名截止：2026年5月18日 23:59",
      "location": "北京",
      "isOnline": true,
      "tags": [
        "事业单位",
        "招聘",
        "报名"
      ],
      "url": "https://rsj.beijing.gov.cn/xxgk/gkzp/202605/t20260508_4640696.html",
      "status": "ended",
      "description": "北京公开招聘公告，已解析报名截止时间。",
      "stage": "报名截止",
      "source": "北京市人力资源和社会保障局公开招聘",
      "type": "program",
      "publishedAt": "2026-05-08"
    },
    {
      "id": "civil-service-ddl-beijing-public-recruitment-783d6b6f07",
      "title": "首都医科大学附属北京安贞医院2026年第二批面向应届毕业生（含社会人员）公开招聘公告",
      "deadline": "2026-05-18T23:59:00+08:00",
      "dateRange": "报名截止：2026年5月18日 23:59",
      "location": "北京",
      "isOnline": true,
      "tags": [
        "事业单位",
        "招聘",
        "报名",
        "医疗"
      ],
      "url": "https://rsj.beijing.gov.cn/xxgk/gkzp/202605/t20260507_4639284.html",
      "status": "ended",
      "description": "北京公开招聘公告，已解析报名截止时间。",
      "stage": "报名截止",
      "source": "北京市人力资源和社会保障局公开招聘",
      "type": "program",
      "publishedAt": "2026-05-07"
    },
    {
      "id": "civil-service-ddl-beijing-public-recruitment-ccea664114",
      "title": "石景山区教育系统事业单位2026年第二次公开招聘工作人员公告",
      "deadline": "2026-05-19T17:00:00+08:00",
      "dateRange": "报名截止：2026年5月19日 17:00",
      "location": "北京",
      "isOnline": true,
      "tags": [
        "事业单位",
        "招聘",
        "报名",
        "教师"
      ],
      "url": "https://rsj.beijing.gov.cn/xxgk/gkzp/202605/t20260509_4643573.html",
      "status": "ended",
      "description": "北京公开招聘公告，已解析报名截止时间。",
      "stage": "报名截止",
      "source": "北京市人力资源和社会保障局公开招聘",
      "type": "program",
      "publishedAt": "2026-05-09"
    }
  ],
  "game-version-ddl": [
    {
      "id": "game-version-ddl-lol-26-11-2026-05-28",
      "title": "League of Legends Patch 26.11",
      "deadline": "2026-05-28T23:59:59-07:00",
      "dateRange": "May 28, 2026 (Pacific Time)",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "英雄联盟",
        "League of Legends",
        "patch"
      ],
      "url": "https://support-leagueoflegends.riotgames.com/hc/en-us/articles/360018987893-Patch-Schedule-League-of-Legends",
      "status": "upcoming",
      "description": "Riot 官方 2026 League of Legends patch schedule 中的版本发布日期。具体上线时间以官方客户端与公告为准。",
      "stage": "Version release",
      "source": "League of Legends Support",
      "sourceUrl": "https://support-leagueoflegends.riotgames.com/hc/en-us/articles/360018987893-Patch-Schedule-League-of-Legends",
      "canonicalUrl": "https://support-leagueoflegends.riotgames.com/hc/en-us/articles/360018987893-Patch-Schedule-League-of-Legends#26-11",
      "type": "release",
      "subtopic": "league-of-legends",
      "subtopicName": "英雄联盟"
    },
    {
      "id": "game-version-ddl-tft-tft17-4-2026-05-28",
      "title": "Teamfight Tactics Patch TFT17.4",
      "deadline": "2026-05-28T23:59:59-07:00",
      "dateRange": "May 28, 2026 (Pacific Time)",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "云顶之弈",
        "Teamfight Tactics",
        "patch"
      ],
      "url": "https://support-teamfighttactics.riotgames.com/hc/en-us/articles/37127675562387-Patch-Schedule-Teamfight-Tactics",
      "status": "upcoming",
      "description": "Riot 官方 2026 Teamfight Tactics patch schedule 中的版本发布日期。具体上线时间以官方客户端与公告为准。",
      "stage": "Version release",
      "source": "Teamfight Tactics Support",
      "sourceUrl": "https://support-teamfighttactics.riotgames.com/hc/en-us/articles/37127675562387-Patch-Schedule-Teamfight-Tactics",
      "canonicalUrl": "https://support-teamfighttactics.riotgames.com/hc/en-us/articles/37127675562387-Patch-Schedule-Teamfight-Tactics#tft17-4",
      "type": "release",
      "subtopic": "teamfight-tactics",
      "subtopicName": "云顶之弈"
    },
    {
      "id": "game-version-ddl-lol-26-12-2026-06-10",
      "title": "League of Legends Patch 26.12",
      "deadline": "2026-06-10T23:59:59-07:00",
      "dateRange": "June 10, 2026 (Pacific Time)",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "英雄联盟",
        "League of Legends",
        "patch"
      ],
      "url": "https://support-leagueoflegends.riotgames.com/hc/en-us/articles/360018987893-Patch-Schedule-League-of-Legends",
      "status": "upcoming",
      "description": "Riot 官方 2026 League of Legends patch schedule 中的版本发布日期。具体上线时间以官方客户端与公告为准。",
      "stage": "Version release",
      "source": "League of Legends Support",
      "sourceUrl": "https://support-leagueoflegends.riotgames.com/hc/en-us/articles/360018987893-Patch-Schedule-League-of-Legends",
      "canonicalUrl": "https://support-leagueoflegends.riotgames.com/hc/en-us/articles/360018987893-Patch-Schedule-League-of-Legends#26-12",
      "type": "release",
      "subtopic": "league-of-legends",
      "subtopicName": "英雄联盟"
    },
    {
      "id": "game-version-ddl-tft-tft17-5-2026-06-10",
      "title": "Teamfight Tactics Patch TFT17.5",
      "deadline": "2026-06-10T23:59:59-07:00",
      "dateRange": "June 10, 2026 (Pacific Time)",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "云顶之弈",
        "Teamfight Tactics",
        "patch"
      ],
      "url": "https://support-teamfighttactics.riotgames.com/hc/en-us/articles/37127675562387-Patch-Schedule-Teamfight-Tactics",
      "status": "upcoming",
      "description": "Riot 官方 2026 Teamfight Tactics patch schedule 中的版本发布日期。具体上线时间以官方客户端与公告为准。",
      "stage": "Version release",
      "source": "Teamfight Tactics Support",
      "sourceUrl": "https://support-teamfighttactics.riotgames.com/hc/en-us/articles/37127675562387-Patch-Schedule-Teamfight-Tactics",
      "canonicalUrl": "https://support-teamfighttactics.riotgames.com/hc/en-us/articles/37127675562387-Patch-Schedule-Teamfight-Tactics#tft17-5",
      "type": "release",
      "subtopic": "teamfight-tactics",
      "subtopicName": "云顶之弈"
    },
    {
      "id": "game-version-ddl-lol-26-13-2026-06-24",
      "title": "League of Legends Patch 26.13",
      "deadline": "2026-06-24T23:59:59-07:00",
      "dateRange": "June 24, 2026 (Pacific Time)",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "英雄联盟",
        "League of Legends",
        "patch"
      ],
      "url": "https://support-leagueoflegends.riotgames.com/hc/en-us/articles/360018987893-Patch-Schedule-League-of-Legends",
      "status": "upcoming",
      "description": "Riot 官方 2026 League of Legends patch schedule 中的版本发布日期。具体上线时间以官方客户端与公告为准。",
      "stage": "Version release",
      "source": "League of Legends Support",
      "sourceUrl": "https://support-leagueoflegends.riotgames.com/hc/en-us/articles/360018987893-Patch-Schedule-League-of-Legends",
      "canonicalUrl": "https://support-leagueoflegends.riotgames.com/hc/en-us/articles/360018987893-Patch-Schedule-League-of-Legends#26-13",
      "type": "release",
      "subtopic": "league-of-legends",
      "subtopicName": "英雄联盟"
    },
    {
      "id": "game-version-ddl-tft-tft17-6-2026-06-24",
      "title": "Teamfight Tactics Patch TFT17.6",
      "deadline": "2026-06-24T23:59:59-07:00",
      "dateRange": "June 24, 2026 (Pacific Time)",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "云顶之弈",
        "Teamfight Tactics",
        "patch"
      ],
      "url": "https://support-teamfighttactics.riotgames.com/hc/en-us/articles/37127675562387-Patch-Schedule-Teamfight-Tactics",
      "status": "upcoming",
      "description": "Riot 官方 2026 Teamfight Tactics patch schedule 中的版本发布日期。具体上线时间以官方客户端与公告为准。",
      "stage": "Version release",
      "source": "Teamfight Tactics Support",
      "sourceUrl": "https://support-teamfighttactics.riotgames.com/hc/en-us/articles/37127675562387-Patch-Schedule-Teamfight-Tactics",
      "canonicalUrl": "https://support-teamfighttactics.riotgames.com/hc/en-us/articles/37127675562387-Patch-Schedule-Teamfight-Tactics#tft17-6",
      "type": "release",
      "subtopic": "teamfight-tactics",
      "subtopicName": "云顶之弈"
    },
    {
      "id": "game-version-ddl-lol-26-14-2026-07-15",
      "title": "League of Legends Patch 26.14",
      "deadline": "2026-07-15T23:59:59-07:00",
      "dateRange": "July 15, 2026 (Pacific Time)",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "英雄联盟",
        "League of Legends",
        "patch"
      ],
      "url": "https://support-leagueoflegends.riotgames.com/hc/en-us/articles/360018987893-Patch-Schedule-League-of-Legends",
      "status": "upcoming",
      "description": "Riot 官方 2026 League of Legends patch schedule 中的版本发布日期。具体上线时间以官方客户端与公告为准。",
      "stage": "Version release",
      "source": "League of Legends Support",
      "sourceUrl": "https://support-leagueoflegends.riotgames.com/hc/en-us/articles/360018987893-Patch-Schedule-League-of-Legends",
      "canonicalUrl": "https://support-leagueoflegends.riotgames.com/hc/en-us/articles/360018987893-Patch-Schedule-League-of-Legends#26-14",
      "type": "release",
      "subtopic": "league-of-legends",
      "subtopicName": "英雄联盟"
    },
    {
      "id": "game-version-ddl-tft-tft17-7-2026-07-15",
      "title": "Teamfight Tactics Patch TFT17.7",
      "deadline": "2026-07-15T23:59:59-07:00",
      "dateRange": "July 15, 2026 (Pacific Time)",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "云顶之弈",
        "Teamfight Tactics",
        "patch"
      ],
      "url": "https://support-teamfighttactics.riotgames.com/hc/en-us/articles/37127675562387-Patch-Schedule-Teamfight-Tactics",
      "status": "upcoming",
      "description": "Riot 官方 2026 Teamfight Tactics patch schedule 中的版本发布日期。具体上线时间以官方客户端与公告为准。",
      "stage": "Version release",
      "source": "Teamfight Tactics Support",
      "sourceUrl": "https://support-teamfighttactics.riotgames.com/hc/en-us/articles/37127675562387-Patch-Schedule-Teamfight-Tactics",
      "canonicalUrl": "https://support-teamfighttactics.riotgames.com/hc/en-us/articles/37127675562387-Patch-Schedule-Teamfight-Tactics#tft17-7",
      "type": "release",
      "subtopic": "teamfight-tactics",
      "subtopicName": "云顶之弈"
    },
    {
      "id": "game-version-ddl-lol-26-15-2026-07-29",
      "title": "League of Legends Patch 26.15",
      "deadline": "2026-07-29T23:59:59-07:00",
      "dateRange": "July 29, 2026 (Pacific Time)",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "英雄联盟",
        "League of Legends",
        "patch"
      ],
      "url": "https://support-leagueoflegends.riotgames.com/hc/en-us/articles/360018987893-Patch-Schedule-League-of-Legends",
      "status": "upcoming",
      "description": "Riot 官方 2026 League of Legends patch schedule 中的版本发布日期。具体上线时间以官方客户端与公告为准。",
      "stage": "Version release",
      "source": "League of Legends Support",
      "sourceUrl": "https://support-leagueoflegends.riotgames.com/hc/en-us/articles/360018987893-Patch-Schedule-League-of-Legends",
      "canonicalUrl": "https://support-leagueoflegends.riotgames.com/hc/en-us/articles/360018987893-Patch-Schedule-League-of-Legends#26-15",
      "type": "release",
      "subtopic": "league-of-legends",
      "subtopicName": "英雄联盟"
    },
    {
      "id": "game-version-ddl-tft-tft18-1-2026-07-29",
      "title": "Teamfight Tactics Patch TFT18.1",
      "deadline": "2026-07-29T23:59:59-07:00",
      "dateRange": "July 29, 2026 (Pacific Time)",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "云顶之弈",
        "Teamfight Tactics",
        "patch"
      ],
      "url": "https://support-teamfighttactics.riotgames.com/hc/en-us/articles/37127675562387-Patch-Schedule-Teamfight-Tactics",
      "status": "upcoming",
      "description": "Riot 官方 2026 Teamfight Tactics patch schedule 中的版本发布日期。具体上线时间以官方客户端与公告为准。",
      "stage": "Version release",
      "source": "Teamfight Tactics Support",
      "sourceUrl": "https://support-teamfighttactics.riotgames.com/hc/en-us/articles/37127675562387-Patch-Schedule-Teamfight-Tactics",
      "canonicalUrl": "https://support-teamfighttactics.riotgames.com/hc/en-us/articles/37127675562387-Patch-Schedule-Teamfight-Tactics#tft18-1",
      "type": "release",
      "subtopic": "teamfight-tactics",
      "subtopicName": "云顶之弈"
    }
  ],
  "ielts-toefl-ddl": [
    {
      "id": "ielts-toefl-ddl-ielts-neea-registration-portal-2026",
      "title": "雅思考试中国大陆报名入口",
      "deadline": "2026-12-31T23:59:59+08:00",
      "dateRange": "按官方考位与报名系统显示为准",
      "location": "中国大陆",
      "isOnline": true,
      "tags": [
        "IELTS",
        "雅思",
        "报名"
      ],
      "url": "https://ielts.neea.cn/",
      "status": "upcoming",
      "description": "教育部教育考试院雅思考试报名入口。具体考试日期、报名截止日和考位以登录后的官方系统为准。",
      "stage": "Source board",
      "source": "雅思考试报名网站",
      "sourceUrl": "https://ielts.neea.cn/",
      "canonicalUrl": "https://ielts.neea.cn/#registration",
      "type": "program",
      "subtopic": "ielts",
      "subtopicName": "雅思",
      "isDatePlaceholder": true
    },
    {
      "id": "ielts-toefl-ddl-ielts-neea-2026-announcement",
      "title": "2026 年 IELTS 报名与收费安排",
      "deadline": "2026-12-31T23:59:59+08:00",
      "dateRange": "2026 年全年安排入口",
      "location": "中国大陆",
      "isOnline": true,
      "tags": [
        "IELTS",
        "雅思",
        "NEEA"
      ],
      "url": "https://news.neea.edu.cn/IELTS/zh_CN/4411D51FC3C4BAEFE0630746C80A3901.html",
      "status": "upcoming",
      "description": "教育部教育考试院发布的 2026 年雅思考试报名、收费标准调整与考期安排页面。",
      "stage": "Official notice",
      "source": "教育部教育考试院 IELTS 2026 安排",
      "sourceUrl": "https://news.neea.edu.cn/IELTS/zh_CN/4411D51FC3C4BAEFE0630746C80A3901.html",
      "canonicalUrl": "https://news.neea.edu.cn/IELTS/zh_CN/4411D51FC3C4BAEFE0630746C80A3901.html",
      "type": "program",
      "subtopic": "ielts",
      "subtopicName": "雅思",
      "isDatePlaceholder": true
    },
    {
      "id": "ielts-toefl-ddl-ielts-2026-q2-schedule",
      "title": "雅思 2026 年 4-6 月考期查询",
      "deadline": "2026-06-30T23:59:59+08:00",
      "dateRange": "2026 年 4-6 月考期",
      "location": "中国大陆",
      "isOnline": true,
      "tags": [
        "IELTS",
        "雅思",
        "考期"
      ],
      "url": "https://www.chinaielts.org/press-office/IELTS-Chinese-Mainland-Exam-Registration-2026-4-6",
      "status": "upcoming",
      "description": "雅思中文官方网站发布的 2026 年 4-6 月中国大陆考期入口；具体报名截止日以官方表格和报名系统为准。",
      "stage": "Schedule window",
      "source": "雅思中文官方网站 2026 年 4-6 月考期",
      "sourceUrl": "https://www.chinaielts.org/press-office/IELTS-Chinese-Mainland-Exam-Registration-2026-4-6",
      "canonicalUrl": "https://www.chinaielts.org/press-office/IELTS-Chinese-Mainland-Exam-Registration-2026-4-6",
      "type": "program",
      "subtopic": "ielts",
      "subtopicName": "雅思",
      "isDatePlaceholder": true
    },
    {
      "id": "ielts-toefl-ddl-toefl-neea-registration-portal-2026",
      "title": "TOEFL iBT 中国大陆报名入口",
      "deadline": "2026-12-31T23:59:59+08:00",
      "dateRange": "按官方考位与报名系统显示为准",
      "location": "中国大陆",
      "isOnline": true,
      "tags": [
        "TOEFL",
        "托福",
        "报名"
      ],
      "url": "https://toefl.neea.cn/",
      "status": "upcoming",
      "description": "教育部教育考试院 TOEFL iBT 中国大陆报名入口。具体考期、考点与报名截止日以官方系统为准。",
      "stage": "Source board",
      "source": "TOEFL iBT 中国大陆报名网站",
      "sourceUrl": "https://toefl.neea.cn/",
      "canonicalUrl": "https://toefl.neea.cn/#registration",
      "type": "program",
      "subtopic": "toefl",
      "subtopicName": "托福",
      "isDatePlaceholder": true
    },
    {
      "id": "ielts-toefl-ddl-ets-toefl-mainland-china",
      "title": "ETS TOEFL 中国大陆考试选项说明",
      "deadline": "2026-12-31T23:59:59+08:00",
      "dateRange": "按 ETS 与 NEEA 官方说明为准",
      "location": "中国大陆",
      "isOnline": true,
      "tags": [
        "TOEFL",
        "ETS",
        "China"
      ],
      "url": "https://www.ets.org/toefl/test-takers/ibt/about/testing-options.html",
      "status": "upcoming",
      "description": "ETS 官方 TOEFL iBT 考试选项页面，用于核对中国大陆相关报名和考试方式说明。",
      "stage": "Official guide",
      "source": "ETS TOEFL Testing Options Mainland China",
      "sourceUrl": "https://www.ets.org/toefl/test-takers/ibt/about/testing-options.html",
      "canonicalUrl": "https://www.ets.org/toefl/test-takers/ibt/about/testing-options.html#mainland-china",
      "type": "program",
      "subtopic": "toefl",
      "subtopicName": "托福",
      "isDatePlaceholder": true
    },
    {
      "id": "ielts-toefl-ddl-ets-toefl-ibt-registration",
      "title": "TOEFL iBT 全球报名与考位查询",
      "deadline": "2026-12-31T23:59:59+08:00",
      "dateRange": "按 ETS 官方报名系统为准",
      "location": "Global",
      "isOnline": true,
      "tags": [
        "TOEFL",
        "ETS",
        "test dates"
      ],
      "url": "https://www.ets.org/toefl/test-takers/ibt/register.html",
      "status": "upcoming",
      "description": "ETS 官方 TOEFL iBT 报名和考试日期查询入口；中国大陆报名仍应以 NEEA 官方入口为准。",
      "stage": "Source board",
      "source": "ETS TOEFL iBT Registration",
      "sourceUrl": "https://www.ets.org/toefl/test-takers/ibt/register.html",
      "canonicalUrl": "https://www.ets.org/toefl/test-takers/ibt/register.html",
      "type": "program",
      "subtopic": "toefl",
      "subtopicName": "托福",
      "isDatePlaceholder": true
    }
  ],
  "concert-ddl": [
    {
      "id": "concert-ddl-metallica-athens-2026-05-09",
      "topicId": "concert-ddl",
      "title": "Metallica M72 Athens 2026",
      "deadline": "2026-05-09T23:59:59+03:00",
      "dateRange": "May 9, 2026",
      "location": "Athens, Greece",
      "isOnline": false,
      "tags": [
        "Metallica",
        "M72",
        "stadium"
      ],
      "url": "https://www.metallica.com/news/2025-05-22-m72-returns-to-europe-in-2026.html",
      "status": "upcoming",
      "description": "Metallica 官方 M72 2026 欧洲巡演公告中的 Athens 场次，按演出日期倒计时。",
      "stage": "Concert date",
      "source": "Metallica official news",
      "sourceUrl": "https://www.metallica.com/news/2025-05-22-m72-returns-to-europe-in-2026.html",
      "canonicalUrl": "https://www.metallica.com/news/2025-05-22-m72-returns-to-europe-in-2026.html#athens-2026-05-09",
      "type": "concert",
      "subtopic": "rock-metal",
      "subtopicName": "摇滚/金属",
      "sourceLabel": "官方巡演公告"
    },
    {
      "id": "concert-ddl-metallica-dublin-2026-06-19",
      "topicId": "concert-ddl",
      "title": "Metallica M72 Dublin 2026",
      "deadline": "2026-06-19T23:59:59+01:00",
      "dateRange": "June 19 & 21, 2026",
      "location": "Dublin, Ireland",
      "isOnline": false,
      "tags": [
        "Metallica",
        "M72",
        "No Repeat Weekend"
      ],
      "url": "https://www.metallica.com/news/2025-05-22-m72-returns-to-europe-in-2026.html",
      "status": "upcoming",
      "description": "Metallica 官方公告列出的 Dublin Aviva Stadium No Repeat Weekend 节点，按首场演出日期倒计时。",
      "stage": "Concert date",
      "source": "Metallica official news",
      "sourceUrl": "https://www.metallica.com/news/2025-05-22-m72-returns-to-europe-in-2026.html",
      "canonicalUrl": "https://www.metallica.com/news/2025-05-22-m72-returns-to-europe-in-2026.html#dublin-2026-06-19",
      "type": "concert",
      "subtopic": "rock-metal",
      "subtopicName": "摇滚/金属",
      "sourceLabel": "官方巡演公告"
    },
    {
      "id": "concert-ddl-metallica-london-2026-07-03",
      "topicId": "concert-ddl",
      "title": "Metallica M72 London 2026",
      "deadline": "2026-07-03T23:59:59+01:00",
      "dateRange": "July 3 & 5, 2026",
      "location": "London, England",
      "isOnline": false,
      "tags": [
        "Metallica",
        "M72",
        "London Stadium"
      ],
      "url": "https://www.metallica.com/news/2025-05-22-m72-returns-to-europe-in-2026.html",
      "status": "upcoming",
      "description": "Metallica 官方公告列出的 London Stadium No Repeat Weekend 节点，按首场演出日期倒计时。",
      "stage": "Concert date",
      "source": "Metallica official news",
      "sourceUrl": "https://www.metallica.com/news/2025-05-22-m72-returns-to-europe-in-2026.html",
      "canonicalUrl": "https://www.metallica.com/news/2025-05-22-m72-returns-to-europe-in-2026.html#london-2026-07-03",
      "type": "concert",
      "subtopic": "rock-metal",
      "subtopicName": "摇滚/金属",
      "sourceLabel": "官方巡演公告"
    },
    {
      "id": "concert-ddl-ariana-grande-chicago-2026-08-03",
      "topicId": "concert-ddl",
      "title": "Ariana Grande The Eternal Sunshine Tour Chicago",
      "deadline": "2026-08-03T20:00:00-05:00",
      "dateRange": "August 3, 5 & 6, 2026",
      "location": "Chicago, USA",
      "isOnline": false,
      "tags": [
        "Ariana Grande",
        "pop",
        "United Center"
      ],
      "url": "https://www.unitedcenter.com/events/2026/08/03/ariana-grande-the-eternal-sunshine-tour/",
      "status": "upcoming",
      "description": "United Center 官方活动页确认 Ariana Grande 2026 年 8 月 3、5、6 日芝加哥场次，按首场开演时间倒计时。",
      "stage": "Concert date",
      "source": "United Center official event",
      "sourceUrl": "https://www.unitedcenter.com/events/2026/08/03/ariana-grande-the-eternal-sunshine-tour/",
      "canonicalUrl": "https://www.unitedcenter.com/events/2026/08/03/ariana-grande-the-eternal-sunshine-tour/#august-3",
      "type": "concert",
      "subtopic": "pop",
      "subtopicName": "流行音乐",
      "sourceLabel": "官方场馆页"
    },
    {
      "id": "concert-ddl-wynonna-nashville-2026-06-06",
      "topicId": "concert-ddl",
      "title": "Wynonna Nashville 2026",
      "deadline": "2026-06-06T23:59:59-05:00",
      "dateRange": "June 6, 2026",
      "location": "Nashville, USA",
      "isOnline": false,
      "tags": [
        "Wynonna",
        "country",
        "The Bluebird Cafe"
      ],
      "url": "https://www.wynonna.com/",
      "status": "upcoming",
      "description": "Wynonna 官方巡演列表中的 Nashville / The Bluebird Cafe 场次，按演出日倒计时。",
      "stage": "Concert date",
      "source": "Wynonna official tour",
      "sourceUrl": "https://www.wynonna.com/",
      "canonicalUrl": "https://www.wynonna.com/#tour-nashville-2026-06-06",
      "type": "concert",
      "subtopic": "country",
      "subtopicName": "乡村音乐",
      "sourceLabel": "官方巡演页"
    },
    {
      "id": "concert-ddl-wynonna-red-butte-2026-07-30",
      "topicId": "concert-ddl",
      "title": "Wynonna Red Butte Garden 2026",
      "deadline": "2026-07-30T23:59:59-06:00",
      "dateRange": "July 30, 2026",
      "location": "Salt Lake City, USA",
      "isOnline": false,
      "tags": [
        "Wynonna",
        "country",
        "Red Butte Garden"
      ],
      "url": "https://www.wynonna.com/",
      "status": "upcoming",
      "description": "Wynonna 官方巡演列表中的 Red Butte Garden Outdoor Concert Series 节点。",
      "stage": "Concert date",
      "source": "Wynonna official tour",
      "sourceUrl": "https://www.wynonna.com/",
      "canonicalUrl": "https://www.wynonna.com/#tour-red-butte-2026-07-30",
      "type": "concert",
      "subtopic": "country",
      "subtopicName": "乡村音乐",
      "sourceLabel": "官方巡演页"
    },
    {
      "id": "concert-ddl-roger-daltrey-mesa-2026-08-23",
      "topicId": "concert-ddl",
      "title": "Roger Daltrey Mesa 2026",
      "deadline": "2026-08-23T23:59:59-07:00",
      "dateRange": "August 23, 2026",
      "location": "Mesa, USA",
      "isOnline": false,
      "tags": [
        "Roger Daltrey",
        "The Who",
        "classic rock"
      ],
      "url": "https://www.thewho.com/tour/",
      "status": "upcoming",
      "description": "The Who 官方 tour 页面列出的 Roger Daltrey Mesa Arts Center 场次，按演出日倒计时。",
      "stage": "Concert date",
      "source": "The Who official tour",
      "sourceUrl": "https://www.thewho.com/tour/",
      "canonicalUrl": "https://www.thewho.com/tour/#roger-daltrey-mesa-2026-08-23",
      "type": "concert",
      "subtopic": "classic-rock",
      "subtopicName": "经典摇滚",
      "sourceLabel": "官方巡演页"
    },
    {
      "id": "concert-ddl-roger-daltrey-reno-2026-09-05",
      "topicId": "concert-ddl",
      "title": "Roger Daltrey Reno 2026",
      "deadline": "2026-09-05T23:59:59-07:00",
      "dateRange": "September 5, 2026",
      "location": "Reno, USA",
      "isOnline": false,
      "tags": [
        "Roger Daltrey",
        "The Who",
        "classic rock"
      ],
      "url": "https://www.thewho.com/tour/",
      "status": "upcoming",
      "description": "The Who 官方 tour 页面列出的 Roger Daltrey Reno / Grand Theatre 场次。",
      "stage": "Concert date",
      "source": "The Who official tour",
      "sourceUrl": "https://www.thewho.com/tour/",
      "canonicalUrl": "https://www.thewho.com/tour/#roger-daltrey-reno-2026-09-05",
      "type": "concert",
      "subtopic": "classic-rock",
      "subtopicName": "经典摇滚",
      "sourceLabel": "官方巡演页"
    }
  ],
  "movie-tv-ddl": [
    {
      "id": "movie-tv-ddl-devil-wears-prada-2-2026-05-01",
      "topicId": "movie-tv-ddl",
      "title": "The Devil Wears Prada 2",
      "deadline": "2026-05-01T23:59:59+01:00",
      "dateRange": "May 1, 2026",
      "location": "Theaters",
      "isOnline": false,
      "tags": [
        "Disney",
        "comedy",
        "theatrical"
      ],
      "url": "https://www.disney.co.uk/movies/the-devil-wears-prada-2",
      "status": "upcoming",
      "description": "Disney UK 官方电影页列出的院线上映日期，按上映日倒计时。",
      "stage": "Theatrical release",
      "source": "Disney official movie page",
      "sourceUrl": "https://www.disney.co.uk/movies/the-devil-wears-prada-2",
      "canonicalUrl": "https://www.disney.co.uk/movies/the-devil-wears-prada-2#release-date",
      "type": "release",
      "subtopic": "movie-release",
      "subtopicName": "电影上映",
      "sourceLabel": "官方电影页"
    },
    {
      "id": "movie-tv-ddl-mandalorian-grogu-2026-05-22",
      "topicId": "movie-tv-ddl",
      "title": "Star Wars: The Mandalorian and Grogu",
      "deadline": "2026-05-22T23:59:59+01:00",
      "dateRange": "May 22, 2026",
      "location": "Theaters",
      "isOnline": false,
      "tags": [
        "Lucasfilm",
        "Star Wars",
        "theatrical"
      ],
      "url": "https://www.disney.co.uk/movies/star-wars-the-mandalorian-and-grogu",
      "status": "upcoming",
      "description": "Disney UK 官方电影页列出的 Star Wars 新片院线上映日期。",
      "stage": "Theatrical release",
      "source": "Disney official movie page",
      "sourceUrl": "https://www.disney.co.uk/movies/star-wars-the-mandalorian-and-grogu",
      "canonicalUrl": "https://www.disney.co.uk/movies/star-wars-the-mandalorian-and-grogu#release-date",
      "type": "release",
      "subtopic": "movie-release",
      "subtopicName": "电影上映",
      "sourceLabel": "官方电影页"
    },
    {
      "id": "movie-tv-ddl-toy-story-5-2026-06-19",
      "topicId": "movie-tv-ddl",
      "title": "Toy Story 5",
      "deadline": "2026-06-19T23:59:59-07:00",
      "dateRange": "June 19, 2026",
      "location": "Theaters",
      "isOnline": false,
      "tags": [
        "Pixar",
        "animation",
        "theatrical"
      ],
      "url": "https://www.pixar.com/toy-story-5",
      "status": "upcoming",
      "description": "Pixar 官方电影页确认 Toy Story 5 于 2026 年 6 月 19 日院线上映。",
      "stage": "Theatrical release",
      "source": "Pixar official movie page",
      "sourceUrl": "https://www.pixar.com/toy-story-5",
      "canonicalUrl": "https://www.pixar.com/toy-story-5#release-date",
      "type": "release",
      "subtopic": "animation",
      "subtopicName": "动画电影",
      "sourceLabel": "官方电影页"
    },
    {
      "id": "movie-tv-ddl-moana-2026-07-10",
      "topicId": "movie-tv-ddl",
      "title": "Moana",
      "deadline": "2026-07-10T23:59:59+01:00",
      "dateRange": "July 10, 2026",
      "location": "Theaters",
      "isOnline": false,
      "tags": [
        "Disney",
        "live action",
        "theatrical"
      ],
      "url": "https://www.disney.co.uk/movies/moana-2026",
      "status": "upcoming",
      "description": "Disney UK 官方电影页列出的 live-action Moana 上映日期。",
      "stage": "Theatrical release",
      "source": "Disney official movie page",
      "sourceUrl": "https://www.disney.co.uk/movies/moana-2026",
      "canonicalUrl": "https://www.disney.co.uk/movies/moana-2026#release-date",
      "type": "release",
      "subtopic": "movie-release",
      "subtopicName": "电影上映",
      "sourceLabel": "官方电影页"
    },
    {
      "id": "movie-tv-ddl-toy-story-release-1995-11-22",
      "topicId": "movie-tv-ddl",
      "title": "Toy Story 官方上映",
      "date": "1995-11-22",
      "dateRange": "November 22, 1995",
      "location": "Theaters",
      "isOnline": false,
      "tags": [
        "Pixar",
        "Toy Story",
        "official history"
      ],
      "url": "https://www.pixar.com/our-story",
      "status": "ended",
      "description": "Pixar Our Story 记录 Toy Story 于 1995 年 11 月 22 日在影院上映。该节点用于呈现系列历史节奏，不作为未来倒计时。",
      "stage": "Official release",
      "source": "Pixar Our Story",
      "sourceUrl": "https://www.pixar.com/our-story",
      "canonicalUrl": "https://www.pixar.com/our-story#1995-toy-story",
      "type": "officialRelease",
      "subtopic": "animation",
      "subtopicName": "动画电影",
      "sourceLabel": "官方历史节点"
    },
    {
      "id": "movie-tv-ddl-toy-story-2-release-1999-11-24",
      "topicId": "movie-tv-ddl",
      "title": "Toy Story 2 官方上映",
      "date": "1999-11-24",
      "dateRange": "November 24, 1999",
      "location": "Theaters",
      "isOnline": false,
      "tags": [
        "Pixar",
        "Toy Story",
        "official history"
      ],
      "url": "https://www.pixar.com/our-story",
      "status": "ended",
      "description": "Pixar Our Story 记录 Toy Story 2 于 1999 年 11 月 24 日在影院上映。该节点用于呈现系列历史节奏，不作为未来倒计时。",
      "stage": "Official release",
      "source": "Pixar Our Story",
      "sourceUrl": "https://www.pixar.com/our-story",
      "canonicalUrl": "https://www.pixar.com/our-story#1999-toy-story-2",
      "type": "officialRelease",
      "subtopic": "animation",
      "subtopicName": "动画电影",
      "sourceLabel": "官方历史节点"
    },
    {
      "id": "movie-tv-ddl-toy-story-3-release-2010-06-18",
      "topicId": "movie-tv-ddl",
      "title": "Toy Story 3 官方上映",
      "date": "2010-06-18",
      "dateRange": "June 18, 2010",
      "location": "Theaters",
      "isOnline": false,
      "tags": [
        "Pixar",
        "Toy Story",
        "official history"
      ],
      "url": "https://www.pixar.com/our-story",
      "status": "ended",
      "description": "Pixar Our Story 记录 Toy Story 3 于 2010 年 6 月 18 日在影院上映。该节点用于呈现系列历史节奏，不作为未来倒计时。",
      "stage": "Official release",
      "source": "Pixar Our Story",
      "sourceUrl": "https://www.pixar.com/our-story",
      "canonicalUrl": "https://www.pixar.com/our-story#2010-toy-story-3",
      "type": "officialRelease",
      "subtopic": "animation",
      "subtopicName": "动画电影",
      "sourceLabel": "官方历史节点"
    },
    {
      "id": "movie-tv-ddl-toy-story-4-release-2019-06-21",
      "topicId": "movie-tv-ddl",
      "title": "Toy Story 4 官方上映",
      "date": "2019-06-21",
      "dateRange": "June 21, 2019",
      "location": "Theaters",
      "isOnline": false,
      "tags": [
        "Pixar",
        "Toy Story",
        "official history"
      ],
      "url": "https://www.pixar.com/our-story",
      "status": "ended",
      "description": "Pixar Our Story 记录 Toy Story 4 于 2019 年 6 月 21 日在美国上映。该节点用于呈现系列历史节奏，不作为未来倒计时。",
      "stage": "Official release",
      "source": "Pixar Our Story",
      "sourceUrl": "https://www.pixar.com/our-story",
      "canonicalUrl": "https://www.pixar.com/our-story#2019-toy-story-4",
      "type": "officialRelease",
      "subtopic": "animation",
      "subtopicName": "动画电影",
      "sourceLabel": "官方历史节点"
    },
    {
      "id": "movie-tv-ddl-toy-story-next-film-forecast",
      "topicId": "movie-tv-ddl",
      "title": "Toy Story 系列下一部正片预测窗口",
      "dateRange": "预计 2032-11-12 至 2036-01-26（非官方）",
      "location": "Theaters / Disney-Pixar",
      "isOnline": false,
      "tags": [
        "Pixar",
        "Toy Story",
        "forecast"
      ],
      "url": "https://www.pixar.com/our-story",
      "status": "unannounced",
      "description": "基于 Pixar 官方历史上映节点和 Toy Story 5 已官宣上映日估算更远期节奏。该条目只是预测窗口，不代表 Disney 或 Pixar 已宣布下一部正片计划。",
      "stage": "Forecast window",
      "source": "Pixar official release history",
      "sourceUrl": "https://www.pixar.com/our-story",
      "canonicalUrl": "https://www.pixar.com/our-story#toy-story-cadence",
      "type": "forecastWindow",
      "subtopic": "animation",
      "subtopicName": "动画电影",
      "sourceLabel": "预测窗口",
      "isDatePlaceholder": true,
      "lastOfficialDate": "2026-06-19",
      "basisEvents": [
        "movie-tv-ddl-toy-story-release-1995-11-22",
        "movie-tv-ddl-toy-story-2-release-1999-11-24",
        "movie-tv-ddl-toy-story-3-release-2010-06-18",
        "movie-tv-ddl-toy-story-4-release-2019-06-21",
        "movie-tv-ddl-toy-story-5-2026-06-19"
      ],
      "estimatedNextWindow": {
        "start": "2032-11-12",
        "end": "2036-01-26"
      },
      "confidence": "medium"
    },
    {
      "id": "movie-tv-ddl-spider-man-brand-new-day-2026-07-31",
      "topicId": "movie-tv-ddl",
      "title": "Spider-Man: Brand New Day",
      "deadline": "2026-07-31T23:59:59-07:00",
      "dateRange": "July 31, 2026",
      "location": "Theaters",
      "isOnline": false,
      "tags": [
        "Marvel",
        "Spider-Man",
        "theatrical"
      ],
      "url": "https://www.marvel.com/movies/spider-man-brand-new-day",
      "status": "upcoming",
      "description": "Marvel 官方电影页列出的 Spider-Man: Brand New Day 上映日期。",
      "stage": "Theatrical release",
      "source": "Marvel official movie page",
      "sourceUrl": "https://www.marvel.com/movies/spider-man-brand-new-day",
      "canonicalUrl": "https://www.marvel.com/movies/spider-man-brand-new-day#release-date",
      "type": "release",
      "subtopic": "superhero",
      "subtopicName": "超级英雄",
      "sourceLabel": "官方电影页"
    },
    {
      "id": "movie-tv-ddl-avengers-doomsday-2026-12-18",
      "topicId": "movie-tv-ddl",
      "title": "Avengers: Doomsday",
      "deadline": "2026-12-18T23:59:59-08:00",
      "dateRange": "December 18, 2026",
      "location": "Theaters",
      "isOnline": false,
      "tags": [
        "Marvel",
        "Avengers",
        "theatrical"
      ],
      "url": "https://www.marvel.com/movies/avengers-doomsday",
      "status": "upcoming",
      "description": "Marvel 官方电影页确认 Avengers: Doomsday 于 2026 年 12 月 18 日上映。",
      "stage": "Theatrical release",
      "source": "Marvel official movie page",
      "sourceUrl": "https://www.marvel.com/movies/avengers-doomsday",
      "canonicalUrl": "https://www.marvel.com/movies/avengers-doomsday#release-date",
      "type": "release",
      "subtopic": "superhero",
      "subtopicName": "超级英雄",
      "sourceLabel": "官方电影页"
    },
    {
      "id": "movie-tv-ddl-avengers-secret-wars-2027-12-17",
      "topicId": "movie-tv-ddl",
      "title": "Avengers: Secret Wars",
      "deadline": "2027-12-17T23:59:59-08:00",
      "dateRange": "December 17, 2027",
      "location": "Theaters",
      "isOnline": false,
      "tags": [
        "Marvel",
        "Avengers",
        "theatrical"
      ],
      "url": "https://www.marvel.com/movies/avengers-secret-wars",
      "status": "upcoming",
      "description": "Marvel 官方电影页列出的 Avengers: Secret Wars 上映日期，作为远期倒计时节点保留。",
      "stage": "Theatrical release",
      "source": "Marvel official movie page",
      "sourceUrl": "https://www.marvel.com/movies/avengers-secret-wars",
      "canonicalUrl": "https://www.marvel.com/movies/avengers-secret-wars#release-date",
      "type": "release",
      "subtopic": "superhero",
      "subtopicName": "超级英雄",
      "sourceLabel": "官方电影页"
    }
  ],
  "phone-launch-ddl": [
    {
      "id": "phone-launch-ddl-apple-wwdc26-keynote-2026-06-08",
      "topicId": "phone-launch-ddl",
      "title": "Apple WWDC26 Keynote",
      "deadline": "2026-06-08T10:00:00-07:00",
      "dateRange": "June 8, 2026",
      "location": "Online / Apple Park",
      "isOnline": true,
      "tags": [
        "Apple",
        "iOS",
        "developer keynote"
      ],
      "url": "https://www.apple.com/newsroom/2026/05/apple-kicks-off-worldwide-developers-conference-on-june-8/",
      "status": "upcoming",
      "description": "Apple 官方 Newsroom 公告确认 WWDC26 于 2026 年 6 月 8 日开幕，iPhone 平台系统与生态更新通常在 keynote 首日发布。",
      "stage": "Launch keynote",
      "source": "Apple Newsroom",
      "sourceUrl": "https://www.apple.com/newsroom/2026/05/apple-kicks-off-worldwide-developers-conference-on-june-8/",
      "canonicalUrl": "https://www.apple.com/newsroom/2026/05/apple-kicks-off-worldwide-developers-conference-on-june-8/#keynote",
      "type": "release",
      "subtopic": "apple",
      "subtopicName": "Apple",
      "sourceLabel": "官方发布会"
    },
    {
      "id": "phone-launch-ddl-ifa-berlin-2026-09-04",
      "topicId": "phone-launch-ddl",
      "title": "IFA Berlin 2026",
      "deadline": "2026-09-04T10:00:00+02:00",
      "dateRange": "September 4-8, 2026",
      "location": "Berlin, Germany",
      "isOnline": false,
      "tags": [
        "IFA",
        "consumer electronics",
        "mobile"
      ],
      "url": "https://www.ifa-berlin.com/",
      "status": "upcoming",
      "description": "IFA 官方站点公布 2026 年柏林消费电子展日期；手机与移动设备新品常在该窗口集中发布，具体品牌机型以厂商官方公告为准。",
      "stage": "Launch window",
      "source": "IFA Berlin official",
      "sourceUrl": "https://www.ifa-berlin.com/",
      "canonicalUrl": "https://www.ifa-berlin.com/#2026",
      "type": "program",
      "subtopic": "global-expo",
      "subtopicName": "全球发布窗口",
      "sourceLabel": "官方展会页"
    },
    {
      "id": "phone-launch-ddl-apple-iphone-mainline-forecast-2026",
      "topicId": "phone-launch-ddl",
      "title": "Apple 主线 iPhone 下一代发布预测窗口",
      "dateRange": "预计 2026 年 9 月上中旬（非官方）",
      "location": "Global",
      "isOnline": true,
      "tags": [
        "Apple",
        "iPhone",
        "forecast"
      ],
      "url": "https://www.apple.com/newsroom/",
      "status": "unannounced",
      "description": "基于 Apple Newsroom 2021-2025 年主线 iPhone 官方发布时间，历史节点稳定集中在 9 月上中旬；该条目是预测窗口，不是 Apple 官方发布日期。",
      "stage": "Forecast window",
      "source": "Apple Newsroom official history",
      "sourceUrl": "https://www.apple.com/newsroom/",
      "canonicalUrl": "https://www.apple.com/newsroom/#iphone-mainline-forecast-2026",
      "type": "forecastWindow",
      "subtopic": "apple",
      "subtopicName": "Apple",
      "isDatePlaceholder": true,
      "sourceLabel": "预测窗口",
      "lastOfficialDate": "2025-09-09",
      "basisEvents": [
        "phone-launch-ddl-apple-iphone-13-release-2021-09-14",
        "phone-launch-ddl-apple-iphone-14-release-2022-09-07",
        "phone-launch-ddl-apple-iphone-15-release-2023-09-12",
        "phone-launch-ddl-apple-iphone-16-release-2024-09-09",
        "phone-launch-ddl-apple-iphone-17-release-2025-09-09"
      ],
      "estimatedNextWindow": {
        "start": "2026-09-01",
        "end": "2026-09-22"
      },
      "confidence": "high"
    },
    {
      "id": "phone-launch-ddl-google-pixel-source-board-2026",
      "topicId": "phone-launch-ddl",
      "title": "Google Pixel 官方发布入口",
      "dateRange": "待 Google 官方公告",
      "location": "Global",
      "isOnline": true,
      "tags": [
        "Google",
        "Pixel",
        "Android"
      ],
      "url": "https://blog.google/products/pixel/",
      "status": "unannounced",
      "description": "Google Pixel 官方产品博客入口。下一代 Pixel 发布会日期未官宣前只做来源追踪，避免使用传闻日期。",
      "stage": "Source board",
      "source": "Google Pixel Blog",
      "sourceUrl": "https://blog.google/products/pixel/",
      "canonicalUrl": "https://blog.google/products/pixel/#launch-news",
      "type": "program",
      "subtopic": "google-pixel",
      "subtopicName": "Google Pixel",
      "isDatePlaceholder": true,
      "sourceLabel": "官方入口"
    },
    {
      "id": "phone-launch-ddl-oppo-newsroom-source-board-2026",
      "topicId": "phone-launch-ddl",
      "title": "OPPO Newsroom 官方发布入口",
      "dateRange": "待 OPPO 官方公告",
      "location": "Global",
      "isOnline": true,
      "tags": [
        "OPPO",
        "smartphone",
        "launch"
      ],
      "url": "https://www.oppo.com/en/newsroom/",
      "status": "unannounced",
      "description": "OPPO Global Newsroom 官方入口。下一场手机发布会日期未官宣前只作为 source board，不展示假倒计时。",
      "stage": "Source board",
      "source": "OPPO Newsroom",
      "sourceUrl": "https://www.oppo.com/en/newsroom/",
      "canonicalUrl": "https://www.oppo.com/en/newsroom/#smartphone-launch",
      "type": "program",
      "subtopic": "oppo",
      "subtopicName": "OPPO",
      "isDatePlaceholder": true,
      "sourceLabel": "官方入口"
    },
    {
      "id": "phone-launch-ddl-xiaomi-newsroom-source-board-2026",
      "topicId": "phone-launch-ddl",
      "title": "Xiaomi Global Newsroom 发布入口",
      "dateRange": "待 Xiaomi 官方公告",
      "location": "Global",
      "isOnline": true,
      "tags": [
        "Xiaomi",
        "smartphone",
        "launch"
      ],
      "url": "https://www.mi.com/global/discover/newsroom",
      "status": "unannounced",
      "description": "Xiaomi Global Newsroom 用于追踪全球手机新品发布。具体机型和日期以 Xiaomi 官方公告为准。",
      "stage": "Source board",
      "source": "Xiaomi Global Newsroom",
      "sourceUrl": "https://www.mi.com/global/discover/newsroom",
      "canonicalUrl": "https://www.mi.com/global/discover/newsroom#smartphone-launch",
      "type": "program",
      "subtopic": "xiaomi",
      "subtopicName": "Xiaomi",
      "isDatePlaceholder": true,
      "sourceLabel": "官方入口"
    },
    {
      "id": "phone-launch-ddl-apple-iphone-13-release-2021-09-14",
      "title": "iPhone 13 / iPhone 13 mini 官方发布",
      "date": "2021-09-14",
      "dateRange": "September 14, 2021",
      "url": "https://www.apple.com/newsroom/2021/09/apple-introduces-iphone-13-and-iphone-13-mini/",
      "source": "Apple Newsroom",
      "sourceUrl": "https://www.apple.com/newsroom/2021/09/apple-introduces-iphone-13-and-iphone-13-mini/",
      "topicId": "phone-launch-ddl",
      "location": "Apple official announcement",
      "isOnline": true,
      "tags": [
        "Apple",
        "iPhone",
        "mainline release"
      ],
      "status": "ended",
      "description": "iPhone 13 / iPhone 13 mini 官方发布。该节点用于构建 Apple 主线 iPhone 年度发布节奏，不作为未来倒计时。",
      "stage": "Official release",
      "canonicalUrl": "https://www.apple.com/newsroom/2021/09/apple-introduces-iphone-13-and-iphone-13-mini/#official-release",
      "type": "officialRelease",
      "subtopic": "apple",
      "subtopicName": "Apple",
      "sourceLabel": "官方历史节点"
    },
    {
      "id": "phone-launch-ddl-apple-iphone-14-release-2022-09-07",
      "title": "iPhone 14 / iPhone 14 Plus 官方发布",
      "date": "2022-09-07",
      "dateRange": "September 7, 2022",
      "url": "https://www.apple.com/newsroom/2022/09/apple-introduces-iphone-14-and-iphone-14-plus/",
      "source": "Apple Newsroom",
      "sourceUrl": "https://www.apple.com/newsroom/2022/09/apple-introduces-iphone-14-and-iphone-14-plus/",
      "topicId": "phone-launch-ddl",
      "location": "Apple official announcement",
      "isOnline": true,
      "tags": [
        "Apple",
        "iPhone",
        "mainline release"
      ],
      "status": "ended",
      "description": "iPhone 14 / iPhone 14 Plus 官方发布。该节点用于构建 Apple 主线 iPhone 年度发布节奏，不作为未来倒计时。",
      "stage": "Official release",
      "canonicalUrl": "https://www.apple.com/newsroom/2022/09/apple-introduces-iphone-14-and-iphone-14-plus/#official-release",
      "type": "officialRelease",
      "subtopic": "apple",
      "subtopicName": "Apple",
      "sourceLabel": "官方历史节点"
    },
    {
      "id": "phone-launch-ddl-apple-iphone-15-release-2023-09-12",
      "title": "iPhone 15 / iPhone 15 Plus 官方发布",
      "date": "2023-09-12",
      "dateRange": "September 12, 2023",
      "url": "https://www.apple.com/newsroom/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/",
      "source": "Apple Newsroom",
      "sourceUrl": "https://www.apple.com/newsroom/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/",
      "topicId": "phone-launch-ddl",
      "location": "Apple official announcement",
      "isOnline": true,
      "tags": [
        "Apple",
        "iPhone",
        "mainline release"
      ],
      "status": "ended",
      "description": "iPhone 15 / iPhone 15 Plus 官方发布。该节点用于构建 Apple 主线 iPhone 年度发布节奏，不作为未来倒计时。",
      "stage": "Official release",
      "canonicalUrl": "https://www.apple.com/newsroom/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/#official-release",
      "type": "officialRelease",
      "subtopic": "apple",
      "subtopicName": "Apple",
      "sourceLabel": "官方历史节点"
    },
    {
      "id": "phone-launch-ddl-apple-iphone-16-release-2024-09-09",
      "title": "iPhone 16 / iPhone 16 Plus 官方发布",
      "date": "2024-09-09",
      "dateRange": "September 9, 2024",
      "url": "https://www.apple.com/newsroom/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/",
      "source": "Apple Newsroom",
      "sourceUrl": "https://www.apple.com/newsroom/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/",
      "topicId": "phone-launch-ddl",
      "location": "Apple official announcement",
      "isOnline": true,
      "tags": [
        "Apple",
        "iPhone",
        "mainline release"
      ],
      "status": "ended",
      "description": "iPhone 16 / iPhone 16 Plus 官方发布。该节点用于构建 Apple 主线 iPhone 年度发布节奏，不作为未来倒计时。",
      "stage": "Official release",
      "canonicalUrl": "https://www.apple.com/newsroom/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/#official-release",
      "type": "officialRelease",
      "subtopic": "apple",
      "subtopicName": "Apple",
      "sourceLabel": "官方历史节点"
    },
    {
      "id": "phone-launch-ddl-apple-iphone-17-release-2025-09-09",
      "title": "iPhone 17 官方发布",
      "date": "2025-09-09",
      "dateRange": "September 9, 2025",
      "url": "https://www.apple.com/li/newsroom/2025/09/apple-introduces-iphone-17/",
      "source": "Apple Newsroom",
      "sourceUrl": "https://www.apple.com/li/newsroom/2025/09/apple-introduces-iphone-17/",
      "topicId": "phone-launch-ddl",
      "location": "Apple official announcement",
      "isOnline": true,
      "tags": [
        "Apple",
        "iPhone",
        "mainline release"
      ],
      "status": "ended",
      "description": "iPhone 17 官方发布。该节点用于构建 Apple 主线 iPhone 年度发布节奏，不作为未来倒计时。",
      "stage": "Official release",
      "canonicalUrl": "https://www.apple.com/li/newsroom/2025/09/apple-introduces-iphone-17/#official-release",
      "type": "officialRelease",
      "subtopic": "apple",
      "subtopicName": "Apple",
      "sourceLabel": "官方历史节点"
    }
  ],
  "car-launch-ddl": [
    {
      "id": "car-launch-ddl-paris-motor-show-2026-10-12",
      "topicId": "car-launch-ddl",
      "title": "Paris Motor Show 2026",
      "deadline": "2026-10-12T09:00:00+02:00",
      "dateRange": "October 12-18, 2026",
      "location": "Paris, France",
      "isOnline": false,
      "tags": [
        "Paris Motor Show",
        "auto show",
        "world premiere"
      ],
      "url": "https://mondial.paris/en",
      "status": "upcoming",
      "description": "巴黎车展官方入口，用于追踪 2026 年整车和概念车发布窗口；具体车型以品牌官方公告为准。",
      "stage": "Auto show opening",
      "source": "Paris Motor Show official",
      "sourceUrl": "https://mondial.paris/en",
      "canonicalUrl": "https://mondial.paris/en#2026",
      "type": "program",
      "subtopic": "auto-show",
      "subtopicName": "国际车展",
      "sourceLabel": "官方车展页"
    },
    {
      "id": "car-launch-ddl-japan-mobility-show-bizweek-2026-10-13",
      "topicId": "car-launch-ddl",
      "title": "Japan Mobility Show Bizweek 2026",
      "deadline": "2026-10-13T09:00:00+09:00",
      "dateRange": "October 13-16, 2026",
      "location": "Tokyo, Japan",
      "isOnline": false,
      "tags": [
        "Japan Mobility Show",
        "mobility",
        "auto tech"
      ],
      "url": "https://www.japan-mobility-show.com/",
      "status": "upcoming",
      "description": "Japan Mobility Show 官方站点公布 Bizweek 2026 窗口，可用于追踪日本车企与出行技术发布。",
      "stage": "Mobility show opening",
      "source": "Japan Mobility Show official",
      "sourceUrl": "https://www.japan-mobility-show.com/",
      "canonicalUrl": "https://www.japan-mobility-show.com/#bizweek-2026",
      "type": "program",
      "subtopic": "auto-show",
      "subtopicName": "国际车展",
      "sourceLabel": "官方车展页"
    },
    {
      "id": "car-launch-ddl-sema-show-2026-11-03",
      "topicId": "car-launch-ddl",
      "title": "SEMA Show 2026",
      "deadline": "2026-11-03T09:00:00-08:00",
      "dateRange": "November 3-6, 2026",
      "location": "Las Vegas, USA",
      "isOnline": false,
      "tags": [
        "SEMA",
        "aftermarket",
        "vehicle products"
      ],
      "url": "https://www.semashow.com/",
      "status": "upcoming",
      "description": "SEMA Show 官方入口，面向整车改装、零部件和汽车新品发布窗口。",
      "stage": "Show opening",
      "source": "SEMA Show official",
      "sourceUrl": "https://www.semashow.com/",
      "canonicalUrl": "https://www.semashow.com/#2026",
      "type": "program",
      "subtopic": "aftermarket",
      "subtopicName": "改装/零部件",
      "sourceLabel": "官方展会页"
    },
    {
      "id": "car-launch-ddl-automobility-la-2026-11-19",
      "topicId": "car-launch-ddl",
      "title": "AutoMobility LA 2026",
      "deadline": "2026-11-19T09:00:00-08:00",
      "dateRange": "November 19, 2026",
      "location": "Los Angeles, USA",
      "isOnline": false,
      "tags": [
        "LA Auto Show",
        "press day",
        "vehicle launch"
      ],
      "url": "https://laautoshow.com/",
      "status": "upcoming",
      "description": "LA Auto Show 官方入口；AutoMobility LA 通常承载媒体日、车企发布和行业活动，具体日程以官方更新为准。",
      "stage": "Media / industry day",
      "source": "LA Auto Show official",
      "sourceUrl": "https://laautoshow.com/",
      "canonicalUrl": "https://laautoshow.com/#automobility-la-2026",
      "type": "program",
      "subtopic": "auto-show",
      "subtopicName": "国际车展",
      "sourceLabel": "官方车展页"
    },
    {
      "id": "car-launch-ddl-la-auto-show-2026-11-20",
      "topicId": "car-launch-ddl",
      "title": "LA Auto Show 2026 Public Days",
      "deadline": "2026-11-20T09:00:00-08:00",
      "dateRange": "November 20-29, 2026",
      "location": "Los Angeles, USA",
      "isOnline": false,
      "tags": [
        "LA Auto Show",
        "public days",
        "new vehicles"
      ],
      "url": "https://laautoshow.com/",
      "status": "upcoming",
      "description": "洛杉矶车展公众日窗口，用于追踪北美车企和出行产品展示；具体发布以车展和品牌官方日程为准。",
      "stage": "Public opening",
      "source": "LA Auto Show official",
      "sourceUrl": "https://laautoshow.com/",
      "canonicalUrl": "https://laautoshow.com/#public-days-2026",
      "type": "program",
      "subtopic": "auto-show",
      "subtopicName": "国际车展",
      "sourceLabel": "官方车展页"
    },
    {
      "id": "car-launch-ddl-detroit-auto-show-2027-01-12",
      "topicId": "car-launch-ddl",
      "title": "Detroit Auto Show 2027",
      "deadline": "2027-01-12T09:00:00-05:00",
      "dateRange": "January 12-24, 2027",
      "location": "Detroit, USA",
      "isOnline": false,
      "tags": [
        "Detroit Auto Show",
        "NAIAS",
        "vehicle launch"
      ],
      "url": "https://detroitautoshow.com/",
      "status": "upcoming",
      "description": "Detroit Auto Show 官方入口，作为北美车企新车和移动出行发布窗口。",
      "stage": "Auto show opening",
      "source": "Detroit Auto Show official",
      "sourceUrl": "https://detroitautoshow.com/",
      "canonicalUrl": "https://detroitautoshow.com/#2027",
      "type": "program",
      "subtopic": "auto-show",
      "subtopicName": "国际车展",
      "sourceLabel": "官方车展页"
    },
    {
      "id": "car-launch-ddl-auto-shanghai-2027-04-23",
      "topicId": "car-launch-ddl",
      "title": "Auto Shanghai 2027",
      "deadline": "2027-04-23T09:00:00+08:00",
      "dateRange": "April 23 - May 2, 2027",
      "location": "Shanghai, China",
      "isOnline": false,
      "tags": [
        "Auto Shanghai",
        "China",
        "world premiere"
      ],
      "url": "https://www.autoshanghai.org/",
      "status": "upcoming",
      "description": "上海车展官方入口，适合追踪中国和全球车企新车首发；媒体日和具体车型以官方后续公告为准。",
      "stage": "Auto show opening",
      "source": "Auto Shanghai official",
      "sourceUrl": "https://www.autoshanghai.org/",
      "canonicalUrl": "https://www.autoshanghai.org/#2027",
      "type": "program",
      "subtopic": "auto-show",
      "subtopicName": "国际车展",
      "sourceLabel": "官方车展页"
    }
  ],
  "regulation-ddl": [
    {
      "topicId": "regulation-ddl",
      "id": "regulation-ddl-cn-fridge-energy-gb12021-2-2025-2026-06-01",
      "title": "GB 12021.2-2025 家用电冰箱能效标准实施",
      "deadline": "2026-06-01T00:00:00+08:00",
      "dateRange": "2026/06/01 起实施",
      "location": "China",
      "isOnline": false,
      "tags": [
        "国家标准",
        "家电",
        "能效"
      ],
      "url": "https://app.www.gov.cn/govdata/gov/202506/25/531575/article.html",
      "status": "upcoming",
      "stage": "实施",
      "source": "中国政府网 / 国家标准委",
      "sourceUrl": "https://app.www.gov.cn/govdata/gov/202506/25/531575/article.html",
      "type": "regulation",
      "subtopic": "cn-standards",
      "subtopicName": "中国国家标准",
      "description": "新版家用电冰箱耗电量限定值及能效等级国家标准正式实施，覆盖压缩式家用电冰箱和部分半导体制冷器具。"
    },
    {
      "topicId": "regulation-ddl",
      "id": "regulation-ddl-eu-cra-conformity-body-notification-2026-06-11",
      "title": "EU Cyber Resilience Act 符合性评定机构规则适用",
      "deadline": "2026-06-11T00:00:00+02:00",
      "dateRange": "2026/06/11 起适用",
      "location": "European Union",
      "isOnline": false,
      "tags": [
        "EU",
        "cybersecurity",
        "conformity"
      ],
      "url": "https://digital-strategy.ec.europa.eu/en/factpages/cyber-resilience-act-implementation",
      "status": "upcoming",
      "stage": "适用",
      "source": "European Commission",
      "sourceUrl": "https://digital-strategy.ec.europa.eu/en/factpages/cyber-resilience-act-implementation",
      "type": "regulation",
      "subtopic": "eu-digital",
      "subtopicName": "欧盟数字法规",
      "description": "Cyber Resilience Act Chapter IV 相关符合性评定机构通知规则开始适用，为 2027 年全面要求做准备。"
    },
    {
      "topicId": "regulation-ddl",
      "id": "regulation-ddl-cn-ev-battery-safety-gb38031-2025-2026-07-01",
      "title": "GB 38031-2025 电动汽车动力电池安全要求实施",
      "deadline": "2026-07-01T00:00:00+08:00",
      "dateRange": "2026/07/01 起实施",
      "location": "China",
      "isOnline": false,
      "tags": [
        "国家标准",
        "新能源汽车",
        "电池安全"
      ],
      "url": "https://www.gov.cn/lianbo/bumen/202504/content_7018797.htm",
      "status": "upcoming",
      "stage": "实施",
      "source": "中国政府网 / 工业和信息化部",
      "sourceUrl": "https://openstd.samr.gov.cn/bzgk/std/newGbInfo?hcno=3AB693FAFF5D9716DF61C61D6FD2187A",
      "type": "regulation",
      "subtopic": "cn-standards",
      "subtopicName": "中国国家标准",
      "description": "强制性国家标准《电动汽车用动力蓄电池安全要求》开始实施，重点提高动力电池热扩散等安全要求。"
    },
    {
      "topicId": "regulation-ddl",
      "id": "regulation-ddl-cn-production-accident-standards-2026-07-01",
      "title": "生产安全事故调查等三项强制性国家标准实施",
      "deadline": "2026-07-01T00:00:00+08:00",
      "dateRange": "2026/07/01 起实施",
      "location": "China",
      "isOnline": false,
      "tags": [
        "国家标准",
        "安全生产",
        "事故调查"
      ],
      "url": "https://big5.www.gov.cn/gate/big5/www.gov.cn/lianbo/202601/content_7056032.htm",
      "status": "upcoming",
      "stage": "实施",
      "source": "中国政府网 / 应急管理部",
      "sourceUrl": "https://big5.www.gov.cn/gate/big5/www.gov.cn/lianbo/202601/content_7056032.htm",
      "type": "regulation",
      "subtopic": "cn-standards",
      "subtopicName": "中国国家标准",
      "description": "《生产安全事故调查技术规范》等三项强制性国家标准实施，覆盖事故调查程序、分类编码和直接经济损失统计。"
    },
    {
      "topicId": "regulation-ddl",
      "id": "regulation-ddl-eu-ai-act-general-application-2026-08-02",
      "title": "EU AI Act 主要规则适用日",
      "deadline": "2026-08-02T00:00:00+02:00",
      "dateRange": "2026/08/02 起适用",
      "location": "European Union",
      "isOnline": false,
      "tags": [
        "EU",
        "AI Act",
        "compliance"
      ],
      "url": "https://digital-strategy.ec.europa.eu/en/faqs/navigating-ai-act",
      "status": "upcoming",
      "stage": "适用",
      "source": "European Commission",
      "sourceUrl": "https://digital-strategy.ec.europa.eu/en/faqs/navigating-ai-act",
      "type": "regulation",
      "subtopic": "eu-digital",
      "subtopicName": "欧盟数字法规",
      "description": "欧盟 AI Act 按阶段适用，主要规则在生效两年后进入适用期，部分高风险系统规则另有过渡期。"
    },
    {
      "topicId": "regulation-ddl",
      "id": "regulation-ddl-eu-cra-reporting-obligations-2026-09-11",
      "title": "EU Cyber Resilience Act 报告义务适用",
      "deadline": "2026-09-11T00:00:00+02:00",
      "dateRange": "2026/09/11 起适用",
      "location": "European Union",
      "isOnline": false,
      "tags": [
        "EU",
        "cybersecurity",
        "incident reporting"
      ],
      "url": "https://digital-strategy.ec.europa.eu/en/policies/cyber-resilience-act",
      "status": "upcoming",
      "stage": "适用",
      "source": "European Commission",
      "sourceUrl": "https://digital-strategy.ec.europa.eu/en/policies/cyber-resilience-act",
      "type": "regulation",
      "subtopic": "eu-digital",
      "subtopicName": "欧盟数字法规",
      "description": "制造商主动报告已被利用漏洞和严重网络安全事件的义务开始适用，是 CRA 全面落地前的重要节点。"
    },
    {
      "topicId": "regulation-ddl",
      "id": "regulation-ddl-cn-lpg-gb11174-2025-2026-11-01",
      "title": "GB 11174-2025 液化石油气强制性国家标准实施",
      "deadline": "2026-11-01T00:00:00+08:00",
      "dateRange": "2026/11/01 起实施",
      "location": "China",
      "isOnline": false,
      "tags": [
        "国家标准",
        "液化石油气",
        "民生安全"
      ],
      "url": "https://www.gov.cn/lianbo/bumen/202511/content_7047106.htm",
      "status": "upcoming",
      "stage": "实施",
      "source": "中国政府网 / 市场监管总局",
      "sourceUrl": "https://www.gov.cn/lianbo/bumen/202511/content_7047106.htm",
      "type": "regulation",
      "subtopic": "cn-standards",
      "subtopicName": "中国国家标准",
      "description": "新版《液化石油气》强制性国家标准实施，增加并提高产品质量、安全和环保相关指标。"
    },
    {
      "topicId": "regulation-ddl",
      "id": "regulation-ddl-eu-eudr-large-operators-2026-12-30",
      "title": "EU Deforestation Regulation 大中型经营者适用日",
      "deadline": "2026-12-30T00:00:00+01:00",
      "dateRange": "2026/12/30 起适用",
      "location": "European Union",
      "isOnline": false,
      "tags": [
        "EU",
        "deforestation",
        "supply chain"
      ],
      "url": "https://green-forum.ec.europa.eu/deforestation-regulation-implementation_en",
      "status": "upcoming",
      "stage": "适用",
      "source": "European Commission Green Forum",
      "sourceUrl": "https://green-forum.ec.europa.eu/deforestation-regulation-implementation_en",
      "type": "regulation",
      "subtopic": "eu-sustainability",
      "subtopicName": "欧盟可持续法规",
      "description": "EUDR 针对大中型经营者和交易商的主要义务进入适用期，涉及相关商品的无毁林供应链尽职调查。"
    },
    {
      "topicId": "regulation-ddl",
      "id": "regulation-ddl-cn-production-accident-workday-loss-2027-01-01",
      "title": "GB 15499-2025 事故伤害损失工作日判定标准实施",
      "deadline": "2027-01-01T00:00:00+08:00",
      "dateRange": "2027/01/01 起实施",
      "location": "China",
      "isOnline": false,
      "tags": [
        "国家标准",
        "安全生产",
        "事故统计"
      ],
      "url": "https://big5.www.gov.cn/gate/big5/www.gov.cn/lianbo/202601/content_7056032.htm",
      "status": "upcoming",
      "stage": "实施",
      "source": "中国政府网 / 应急管理部",
      "sourceUrl": "https://big5.www.gov.cn/gate/big5/www.gov.cn/lianbo/202601/content_7056032.htm",
      "type": "regulation",
      "subtopic": "cn-standards",
      "subtopicName": "中国国家标准",
      "description": "强制性国家标准《生产安全事故伤害损失工作日判定》实施，用于事故伤害损失工作日判定。"
    },
    {
      "topicId": "regulation-ddl",
      "id": "regulation-ddl-eu-battery-passport-2027-02-18",
      "title": "EU Battery Passport 义务启动",
      "deadline": "2027-02-18T00:00:00+01:00",
      "dateRange": "2027/02/18 起适用",
      "location": "European Union",
      "isOnline": false,
      "tags": [
        "EU",
        "battery",
        "digital product passport"
      ],
      "url": "https://www.europarl.europa.eu/doceo/document/E-10-2026-000888_EN.html",
      "status": "upcoming",
      "stage": "适用",
      "source": "European Parliament",
      "sourceUrl": "https://www.europarl.europa.eu/doceo/document/E-10-2026-000888_EN.html",
      "type": "regulation",
      "subtopic": "eu-sustainability",
      "subtopicName": "欧盟可持续法规",
      "description": "欧盟电池法规下的数字电池护照义务开始适用，覆盖特定 LMT、电动汽车和工业电池类别。"
    },
    {
      "topicId": "regulation-ddl",
      "id": "regulation-ddl-eu-eudr-micro-small-operators-2027-06-30",
      "title": "EU Deforestation Regulation 微型和小型经营者适用日",
      "deadline": "2027-06-30T00:00:00+02:00",
      "dateRange": "2027/06/30 起适用",
      "location": "European Union",
      "isOnline": false,
      "tags": [
        "EU",
        "deforestation",
        "SME"
      ],
      "url": "https://green-forum.ec.europa.eu/deforestation-regulation-implementation_en",
      "status": "upcoming",
      "stage": "适用",
      "source": "European Commission Green Forum",
      "sourceUrl": "https://green-forum.ec.europa.eu/deforestation-regulation-implementation_en",
      "type": "regulation",
      "subtopic": "eu-sustainability",
      "subtopicName": "欧盟可持续法规",
      "description": "EUDR 针对自然人以及微型、小型经营者的适用日，作为供应链合规和数据准备的重要节点。"
    },
    {
      "topicId": "regulation-ddl",
      "id": "regulation-ddl-eu-ai-act-high-risk-article-6-1-2027-08-02",
      "title": "EU AI Act Article 6(1) 高风险系统义务适用",
      "deadline": "2027-08-02T00:00:00+02:00",
      "dateRange": "2027/08/02 起适用",
      "location": "European Union",
      "isOnline": false,
      "tags": [
        "EU",
        "AI Act",
        "high-risk AI"
      ],
      "url": "https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-113",
      "status": "upcoming",
      "stage": "适用",
      "source": "AI Act Service Desk / European Commission",
      "sourceUrl": "https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-113",
      "type": "regulation",
      "subtopic": "eu-digital",
      "subtopicName": "欧盟数字法规",
      "description": "AI Act Article 6(1) 及相关义务适用，主要影响嵌入受监管产品的高风险 AI 系统。"
    },
    {
      "topicId": "regulation-ddl",
      "id": "regulation-ddl-eu-battery-due-diligence-2027-08-18",
      "title": "EU Battery Regulation 尽职调查义务适用",
      "deadline": "2027-08-18T00:00:00+02:00",
      "dateRange": "2027/08/18 起适用",
      "location": "European Union",
      "isOnline": false,
      "tags": [
        "EU",
        "battery",
        "due diligence"
      ],
      "url": "https://www.consilium.europa.eu/en/press/press-releases/2025/07/18/simplification-council-adopts-law-to-stop-the-clock-on-due-diligence-rules-for-batteries/",
      "status": "upcoming",
      "stage": "适用",
      "source": "Council of the European Union",
      "sourceUrl": "https://www.consilium.europa.eu/en/press/press-releases/2025/07/18/simplification-council-adopts-law-to-stop-the-clock-on-due-diligence-rules-for-batteries/",
      "type": "regulation",
      "subtopic": "eu-sustainability",
      "subtopicName": "欧盟可持续法规",
      "description": "电池供应链尽职调查相关义务延后至该日适用，为电池生产商和出口商留出准备期。"
    },
    {
      "topicId": "regulation-ddl",
      "id": "regulation-ddl-eu-cra-main-obligations-2027-12-11",
      "title": "EU Cyber Resilience Act 主要义务全面适用",
      "deadline": "2027-12-11T00:00:00+01:00",
      "dateRange": "2027/12/11 起适用",
      "location": "European Union",
      "isOnline": false,
      "tags": [
        "EU",
        "cybersecurity",
        "product security"
      ],
      "url": "https://digital-strategy.ec.europa.eu/en/policies/cyber-resilience-act",
      "status": "upcoming",
      "stage": "适用",
      "source": "European Commission",
      "sourceUrl": "https://digital-strategy.ec.europa.eu/en/policies/cyber-resilience-act",
      "type": "regulation",
      "subtopic": "eu-digital",
      "subtopicName": "欧盟数字法规",
      "description": "Cyber Resilience Act 对带有数字元素产品的主要网络安全要求全面适用。"
    }
  ],
  "student-contest-ddl": [
    {
      "topicId": "student-contest-ddl",
      "id": "student-contest-ddl-mathworks-minidrone-ifac-2026-application-2026-05-25",
      "title": "MathWorks Minidrone IFAC 2026 Application",
      "deadline": "2026-05-25T23:59:00+09:00",
      "dateRange": "Application deadline: May 25, 2026",
      "location": "Busan, Korea / Online first round",
      "isOnline": true,
      "tags": [
        "student competition",
        "robotics",
        "MATLAB"
      ],
      "url": "https://www.mathworks.com/academia/student-competitions/minidrones/ifac.html",
      "status": "upcoming",
      "stage": "Application",
      "source": "MathWorks",
      "sourceUrl": "https://www.mathworks.com/academia/student-competitions/minidrones/ifac.html",
      "type": "contest",
      "subtopic": "engineering",
      "subtopicName": "工程与机器人",
      "description": "IFAC 2026 MathWorks Minidrone Competition 报名截止日，面向全球高校学生团队。"
    },
    {
      "topicId": "student-contest-ddl",
      "id": "student-contest-ddl-igem-village-project-info-2026-06-24",
      "title": "iGEM 2026 Village & Project Information Due",
      "deadline": "2026-06-24T15:00:00Z",
      "dateRange": "June 24, 2026 15:00 UTC",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "iGEM",
        "synthetic biology",
        "deliverable"
      ],
      "url": "https://competition.igem.org/2026/deliverables",
      "status": "upcoming",
      "stage": "Deliverable",
      "source": "iGEM Competition",
      "sourceUrl": "https://competition.igem.org/2026/deliverables",
      "type": "contest",
      "subtopic": "biotech",
      "subtopicName": "生命科学竞赛",
      "description": "iGEM 2026 队伍需提交 Village 与项目基本信息，是后续评审材料的前置节点。"
    },
    {
      "topicId": "student-contest-ddl",
      "id": "student-contest-ddl-mathworks-minidrone-ifac-2026-simulation-2026-06-25",
      "title": "MathWorks Minidrone IFAC 2026 Simulation Submission",
      "deadline": "2026-06-25T23:59:00+09:00",
      "dateRange": "Simulation submission: June 25, 2026",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "student competition",
        "simulation",
        "control"
      ],
      "url": "https://www.mathworks.com/academia/student-competitions/minidrones/ifac.html",
      "status": "upcoming",
      "stage": "Simulation submission",
      "source": "MathWorks",
      "sourceUrl": "https://www.mathworks.com/academia/student-competitions/minidrones/ifac.html",
      "type": "contest",
      "subtopic": "engineering",
      "subtopicName": "工程与机器人",
      "description": "第一轮仿真提交截止日，用于路径规划、图像处理和控制算法评估。"
    },
    {
      "topicId": "student-contest-ddl",
      "id": "student-contest-ddl-igem-safety-preliminary-2026-07-01",
      "title": "iGEM 2026 Safety Forms Preliminary Deadline",
      "deadline": "2026-07-01T15:00:00Z",
      "dateRange": "July 1, 2026 15:00 UTC",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "iGEM",
        "safety",
        "bioengineering"
      ],
      "url": "https://competition.igem.org/2026/deliverables",
      "status": "upcoming",
      "stage": "Preliminary deadline",
      "source": "iGEM Competition",
      "sourceUrl": "https://competition.igem.org/2026/deliverables",
      "type": "contest",
      "subtopic": "biotech",
      "subtopicName": "生命科学竞赛",
      "description": "安全表格初稿节点，影响队伍能否继续保持合规参赛。"
    },
    {
      "topicId": "student-contest-ddl",
      "id": "student-contest-ddl-icsc-qualification-submission-2026-07-05",
      "title": "International Computer Science Competition Qualification Submission",
      "deadline": "2026-07-05T23:59:00Z",
      "dateRange": "July 5, 2026 23:59 UTC",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "computer science",
        "student competition",
        "qualification"
      ],
      "url": "https://www.icscompetition.org/docs/ICSC_Deadlines.pdf",
      "status": "upcoming",
      "stage": "Qualification submission",
      "source": "International Computer Science Competition",
      "sourceUrl": "https://www.icscompetition.org/docs/ICSC_Deadlines.pdf",
      "type": "contest",
      "subtopic": "computer-science",
      "subtopicName": "计算机竞赛",
      "description": "ICSC 2026 资格赛提交截止日，官方 PDF 标注所有轮次时间均使用 UTC+0。"
    },
    {
      "topicId": "student-contest-ddl",
      "id": "student-contest-ddl-icsc-prefinal-registration-2026-08-11",
      "title": "ICSC 2026 Pre-Final Registration Deadline",
      "deadline": "2026-08-11T23:59:00Z",
      "dateRange": "August 11, 2026 23:59 UTC",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "computer science",
        "student competition",
        "registration"
      ],
      "url": "https://www.icscompetition.org/docs/ICSC_Deadlines.pdf",
      "status": "upcoming",
      "stage": "Registration",
      "source": "International Computer Science Competition",
      "sourceUrl": "https://www.icscompetition.org/docs/ICSC_Deadlines.pdf",
      "type": "contest",
      "subtopic": "computer-science",
      "subtopicName": "计算机竞赛",
      "description": "ICSC 2026 预决赛注册截止日。"
    },
    {
      "topicId": "student-contest-ddl",
      "id": "student-contest-ddl-igem-project-promotion-video-2026-08-12",
      "title": "iGEM 2026 Project Promotion Video Due",
      "deadline": "2026-08-12T15:00:00Z",
      "dateRange": "August 12, 2026 15:00 UTC",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "iGEM",
        "video",
        "submission"
      ],
      "url": "https://competition.igem.org/2026/deliverables",
      "status": "upcoming",
      "stage": "Video due",
      "source": "iGEM Competition",
      "sourceUrl": "https://competition.igem.org/2026/deliverables",
      "type": "contest",
      "subtopic": "biotech",
      "subtopicName": "生命科学竞赛",
      "description": "iGEM 项目推广视频提交截止日，用于公开展示项目方向。"
    },
    {
      "topicId": "student-contest-ddl",
      "id": "student-contest-ddl-icsc-prefinal-exam-2026-08-16",
      "title": "ICSC 2026 Pre-Final Exam Deadline",
      "deadline": "2026-08-16T23:59:00Z",
      "dateRange": "August 16, 2026 23:59 UTC",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "computer science",
        "exam",
        "student competition"
      ],
      "url": "https://www.icscompetition.org/docs/ICSC_Deadlines.pdf",
      "status": "upcoming",
      "stage": "Exam deadline",
      "source": "International Computer Science Competition",
      "sourceUrl": "https://www.icscompetition.org/docs/ICSC_Deadlines.pdf",
      "type": "contest",
      "subtopic": "computer-science",
      "subtopicName": "计算机竞赛",
      "description": "ICSC 2026 预决赛考试截止日。"
    },
    {
      "topicId": "student-contest-ddl",
      "id": "student-contest-ddl-igem-jamboree-talk-proposal-2026-09-16",
      "title": "iGEM 2026 Jamboree Talk Proposal Due",
      "deadline": "2026-09-16T15:00:00Z",
      "dateRange": "September 16, 2026 15:00 UTC",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "iGEM",
        "Jamboree",
        "proposal"
      ],
      "url": "https://competition.igem.org/2026/deliverables",
      "status": "upcoming",
      "stage": "Proposal due",
      "source": "iGEM Competition",
      "sourceUrl": "https://competition.igem.org/2026/deliverables",
      "type": "contest",
      "subtopic": "biotech",
      "subtopicName": "生命科学竞赛",
      "description": "Grand Jamboree 公开演讲申请截止日。"
    },
    {
      "topicId": "student-contest-ddl",
      "id": "student-contest-ddl-igem-final-safety-forms-2026-10-07",
      "title": "iGEM 2026 Safety Forms Final Deadline",
      "deadline": "2026-10-07T15:00:00Z",
      "dateRange": "October 7, 2026 15:00 UTC",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "iGEM",
        "safety",
        "final deadline"
      ],
      "url": "https://competition.igem.org/2026/deliverables",
      "status": "upcoming",
      "stage": "Final deadline",
      "source": "iGEM Competition",
      "sourceUrl": "https://competition.igem.org/2026/deliverables",
      "type": "contest",
      "subtopic": "biotech",
      "subtopicName": "生命科学竞赛",
      "description": "iGEM 安全表格最终截止日，错过可能导致队伍失去评奖资格。"
    },
    {
      "topicId": "student-contest-ddl",
      "id": "student-contest-ddl-igem-registry-judging-freeze-2026-10-21",
      "title": "iGEM 2026 Registry Contributions & Judging Form Freeze",
      "deadline": "2026-10-21T15:00:00Z",
      "dateRange": "October 21, 2026 15:00 UTC",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "iGEM",
        "freeze",
        "judging"
      ],
      "url": "https://competition.igem.org/2026/deliverables",
      "status": "upcoming",
      "stage": "Freeze",
      "source": "iGEM Competition",
      "sourceUrl": "https://competition.igem.org/2026/deliverables",
      "type": "contest",
      "subtopic": "biotech",
      "subtopicName": "生命科学竞赛",
      "description": "Registry Contributions 和 Judging Form 冻结节点，是 iGEM 评奖前的关键截止日。"
    },
    {
      "topicId": "student-contest-ddl",
      "id": "student-contest-ddl-igem-presentation-video-2026-10-28",
      "title": "iGEM 2026 Presentation Video Due",
      "deadline": "2026-10-28T15:00:00Z",
      "dateRange": "October 28, 2026 15:00 UTC",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "iGEM",
        "presentation",
        "video"
      ],
      "url": "https://competition.igem.org/2026/deliverables",
      "status": "upcoming",
      "stage": "Presentation video",
      "source": "iGEM Competition",
      "sourceUrl": "https://competition.igem.org/2026/deliverables",
      "type": "contest",
      "subtopic": "biotech",
      "subtopicName": "生命科学竞赛",
      "description": "15 分钟 Presentation Video 提交截止日，用于评委和公众查看项目成果。"
    }
  ],
  "career-fair-ddl": [
    {
      "topicId": "career-fair-ddl",
      "id": "career-fair-ddl-umich-fall-engineering-career-fair-2026-09-09",
      "title": "University of Michigan Fall Engineering Career Fair",
      "deadline": "2026-09-09T12:00:00-04:00",
      "dateRange": "September 9, 2026",
      "location": "Ann Arbor, USA",
      "isOnline": false,
      "tags": [
        "engineering",
        "career fair",
        "university"
      ],
      "url": "https://careercenter.umich.edu/content/career-center-fairs",
      "status": "upcoming",
      "stage": "Event start",
      "source": "University of Michigan Career Center",
      "sourceUrl": "https://careercenter.umich.edu/content/career-center-fairs",
      "type": "program",
      "subtopic": "campus-career-fair",
      "subtopicName": "高校招聘会",
      "description": "密歇根大学 Fall Engineering Career Fair 官方页面节点，面向工程学生与雇主。"
    },
    {
      "topicId": "career-fair-ddl",
      "id": "career-fair-ddl-umass-amherst-internship-fair-2026-09-11",
      "title": "UMass Amherst Internship Fair",
      "deadline": "2026-09-11T10:00:00-04:00",
      "dateRange": "September 11, 2026",
      "location": "Amherst, USA",
      "isOnline": false,
      "tags": [
        "internship",
        "career fair",
        "university"
      ],
      "url": "https://www.umass.edu/careers/employers/career-fairs",
      "status": "upcoming",
      "stage": "Event start",
      "source": "UMass Amherst Career Development",
      "sourceUrl": "https://www.umass.edu/careers/employers/career-fairs",
      "type": "program",
      "subtopic": "campus-career-fair",
      "subtopicName": "高校招聘会",
      "description": "UMass Amherst Fall 2026 internship fair 官方日期，用于实习和校招提醒。"
    },
    {
      "topicId": "career-fair-ddl",
      "id": "career-fair-ddl-uic-engineering-technology-fair-2026-09-16",
      "title": "UIC Engineering and Technology Job & Internship Fair",
      "deadline": "2026-09-16T12:00:00-05:00",
      "dateRange": "September 16, 2026",
      "location": "Chicago, USA",
      "isOnline": false,
      "tags": [
        "engineering",
        "technology",
        "career fair"
      ],
      "url": "https://ecc.uic.edu/employers/career-fairs/",
      "status": "upcoming",
      "stage": "Event start",
      "source": "University of Illinois Chicago Engineering Career Center",
      "sourceUrl": "https://ecc.uic.edu/employers/career-fairs/",
      "type": "program",
      "subtopic": "campus-career-fair",
      "subtopicName": "高校招聘会",
      "description": "UIC 工程与技术 Job & Internship Fair，覆盖工程和技术相关专业。"
    },
    {
      "topicId": "career-fair-ddl",
      "id": "career-fair-ddl-osu-university-wide-career-fair-2026-09-16",
      "title": "Ohio State University-Wide Career and Internship Fair",
      "deadline": "2026-09-16T11:00:00-04:00",
      "dateRange": "September 16-17, 2026",
      "location": "Columbus / Online",
      "isOnline": false,
      "tags": [
        "career fair",
        "internship",
        "hybrid"
      ],
      "url": "https://careers.osu.edu/events-and-programs/university-wide-career-and-internship-fair",
      "status": "upcoming",
      "stage": "Event start",
      "source": "The Ohio State University Career Center",
      "sourceUrl": "https://careers.osu.edu/events-and-programs/university-wide-career-and-internship-fair",
      "type": "program",
      "subtopic": "campus-career-fair",
      "subtopicName": "高校招聘会",
      "description": "Ohio State 全校 Career and Internship Fair，包含线下和虚拟日程。"
    },
    {
      "topicId": "career-fair-ddl",
      "id": "career-fair-ddl-unh-fall-career-internship-fair-2026-09-16",
      "title": "UNH Fall Career & Internship Fair",
      "deadline": "2026-09-16T11:00:00-04:00",
      "dateRange": "September 16-17, 2026",
      "location": "Durham, USA",
      "isOnline": false,
      "tags": [
        "career fair",
        "internship",
        "graduate students"
      ],
      "url": "https://www.unh.edu/career/career-events/career-internship-fair/employer-logistics",
      "status": "upcoming",
      "stage": "Event start",
      "source": "University of New Hampshire Career and Professional Success",
      "sourceUrl": "https://www.unh.edu/career/career-events/career-internship-fair/employer-logistics",
      "type": "program",
      "subtopic": "campus-career-fair",
      "subtopicName": "高校招聘会",
      "description": "UNH Fall 2026 Career & Internship Fair，覆盖本科、硕士和校友求职场景。"
    },
    {
      "topicId": "career-fair-ddl",
      "id": "career-fair-ddl-umn-cse-career-fair-2026-09-22",
      "title": "University of Minnesota CSE Career Fair",
      "deadline": "2026-09-22T11:00:00-05:00",
      "dateRange": "September 22-23, 2026",
      "location": "Minneapolis, USA",
      "isOnline": false,
      "tags": [
        "CSE",
        "engineering",
        "career fair"
      ],
      "url": "https://cse.umn.edu/college/career/cse-career-fair",
      "status": "upcoming",
      "stage": "Event start",
      "source": "University of Minnesota College of Science and Engineering",
      "sourceUrl": "https://cse.umn.edu/college/career/cse-career-fair",
      "type": "program",
      "subtopic": "campus-career-fair",
      "subtopicName": "高校招聘会",
      "description": "UMN College of Science and Engineering Fall 2026 Career Fair 官方日期。"
    },
    {
      "topicId": "career-fair-ddl",
      "id": "career-fair-ddl-kstate-all-university-career-fair-2026-09-22",
      "title": "Kansas State All-University Career Fair",
      "deadline": "2026-09-22T11:00:00-05:00",
      "dateRange": "September 22-24, 2026",
      "location": "Manhattan, USA",
      "isOnline": false,
      "tags": [
        "career fair",
        "university-wide",
        "employer"
      ],
      "url": "https://www.k-state.edu/careercenter/conference/documents/EABJan26.pdf",
      "status": "upcoming",
      "stage": "Event start",
      "source": "Kansas State University Career Center",
      "sourceUrl": "https://www.k-state.edu/careercenter/conference/documents/EABJan26.pdf",
      "type": "program",
      "subtopic": "campus-career-fair",
      "subtopicName": "高校招聘会",
      "description": "Kansas State All-University Career Fair，官方资料列出 2026 年 9 月 22-24 日窗口。"
    }
  ],
  "llm-release-ddl": [
    {
      "id": "kimi-k2-0711-preview",
      "topicId": "llm-release-ddl",
      "title": "Kimi K2 0711 Preview 发布",
      "type": "historyEvent",
      "date": "2025-07-11",
      "url": "https://platform.moonshot.ai/blog/posts/changelog",
      "source": "Moonshot AI",
      "sourceUrl": "https://platform.moonshot.ai/blog/posts/changelog",
      "stage": "Model release",
      "category": "AI 发布",
      "subtopic": "kimi",
      "subtopicName": "Kimi",
      "tags": [
        "Kimi",
        "Moonshot",
        "K2"
      ],
      "description": "Kimi Open Platform changelog 记录 kimi-k2-0711-preview 正式发布。",
      "dateRange": "2025-07-11",
      "location": "Online",
      "isOnline": true,
      "status": "ended"
    },
    {
      "id": "kimi-k2-0905-preview",
      "topicId": "llm-release-ddl",
      "title": "Kimi K2 0905 Preview 发布",
      "type": "historyEvent",
      "date": "2025-09-05",
      "url": "https://platform.moonshot.ai/blog/posts/changelog",
      "source": "Moonshot AI",
      "sourceUrl": "https://platform.moonshot.ai/blog/posts/changelog",
      "stage": "Model release",
      "category": "AI 发布",
      "subtopic": "kimi",
      "subtopicName": "Kimi",
      "tags": [
        "Kimi",
        "Moonshot",
        "K2"
      ],
      "description": "Kimi Open Platform changelog 记录 kimi-k2-0905-preview 发布。",
      "dateRange": "2025-09-05",
      "location": "Online",
      "isOnline": true,
      "status": "ended"
    },
    {
      "id": "kimi-k2-think",
      "topicId": "llm-release-ddl",
      "title": "Kimi K2 Think 发布",
      "type": "historyEvent",
      "date": "2025-11-06",
      "url": "https://platform.moonshot.ai/blog/posts/changelog",
      "source": "Moonshot AI",
      "sourceUrl": "https://platform.moonshot.ai/blog/posts/changelog",
      "stage": "Model release",
      "category": "AI 发布",
      "subtopic": "kimi",
      "subtopicName": "Kimi",
      "tags": [
        "Kimi",
        "Thinking",
        "Moonshot"
      ],
      "description": "Kimi Open Platform changelog 记录 Kimi K2 Think model 及 turbo version 正式上线。",
      "dateRange": "2025-11-06",
      "location": "Online",
      "isOnline": true,
      "status": "ended"
    },
    {
      "id": "deepseek-r1-release",
      "topicId": "llm-release-ddl",
      "title": "DeepSeek-R1 发布",
      "type": "historyEvent",
      "date": "2025-01-20",
      "url": "https://api-docs.deepseek.com/news/news250120",
      "source": "DeepSeek API Docs",
      "sourceUrl": "https://api-docs.deepseek.com/news/news250120",
      "stage": "Model release",
      "category": "AI 发布",
      "subtopic": "deepseek",
      "subtopicName": "DeepSeek",
      "tags": [
        "DeepSeek",
        "R1",
        "reasoning"
      ],
      "description": "DeepSeek 官方 API News 记录 DeepSeek-R1 上线。",
      "dateRange": "2025-01-20",
      "location": "Online",
      "isOnline": true,
      "status": "ended"
    },
    {
      "id": "deepseek-r1-0528",
      "topicId": "llm-release-ddl",
      "title": "DeepSeek-R1-0528 更新",
      "type": "historyEvent",
      "date": "2025-05-28",
      "url": "https://api-docs.deepseek.com/news/news250528",
      "source": "DeepSeek API Docs",
      "sourceUrl": "https://api-docs.deepseek.com/news/news250528",
      "stage": "Model update",
      "category": "AI 发布",
      "subtopic": "deepseek",
      "subtopicName": "DeepSeek",
      "tags": [
        "DeepSeek",
        "R1",
        "update"
      ],
      "description": "DeepSeek 官方 API News 记录 R1 0528 版本更新。",
      "dateRange": "2025-05-28",
      "location": "Online",
      "isOnline": true,
      "status": "ended"
    },
    {
      "id": "deepseek-v3-2-release",
      "topicId": "llm-release-ddl",
      "title": "DeepSeek-V3.2 发布",
      "type": "historyEvent",
      "date": "2025-12-01",
      "url": "https://api-docs.deepseek.com/news/news251201",
      "source": "DeepSeek API Docs",
      "sourceUrl": "https://api-docs.deepseek.com/news/news251201",
      "stage": "Model release",
      "category": "AI 发布",
      "subtopic": "deepseek",
      "subtopicName": "DeepSeek",
      "tags": [
        "DeepSeek",
        "V3.2",
        "release"
      ],
      "description": "DeepSeek 官方 API News 记录 DeepSeek-V3.2 发布。",
      "dateRange": "2025-12-01",
      "location": "Online",
      "isOnline": true,
      "status": "ended"
    },
    {
      "id": "glm-4-5-release",
      "topicId": "llm-release-ddl",
      "title": "GLM-4.5 发布",
      "type": "historyEvent",
      "date": "2025-07-28",
      "url": "https://z.ai/blog/glm-4.5",
      "source": "Z.ai",
      "sourceUrl": "https://z.ai/blog/glm-4.5",
      "stage": "Model release",
      "category": "AI 发布",
      "subtopic": "glm",
      "subtopicName": "GLM",
      "tags": [
        "GLM",
        "Z.ai",
        "agent"
      ],
      "description": "Z.ai 官方博客发布 GLM-4.5。",
      "dateRange": "2025-07-28",
      "location": "Online",
      "isOnline": true,
      "status": "ended"
    },
    {
      "id": "glm-4-6-release",
      "topicId": "llm-release-ddl",
      "title": "GLM-4.6 发布",
      "type": "historyEvent",
      "date": "2025-09-30",
      "url": "https://z.ai/blog/glm-4.6",
      "source": "Z.ai",
      "sourceUrl": "https://z.ai/blog/glm-4.6",
      "stage": "Model release",
      "category": "AI 发布",
      "subtopic": "glm",
      "subtopicName": "GLM",
      "tags": [
        "GLM",
        "Z.ai",
        "coding"
      ],
      "description": "Z.ai 官方博客发布 GLM-4.6。",
      "dateRange": "2025-09-30",
      "location": "Online",
      "isOnline": true,
      "status": "ended"
    },
    {
      "id": "minimax-m2-release",
      "topicId": "llm-release-ddl",
      "title": "MiniMax M2 发布",
      "type": "historyEvent",
      "date": "2025-10-27",
      "url": "https://www.minimaxi.com/en/news/minimax-m2",
      "source": "MiniMax",
      "sourceUrl": "https://www.minimaxi.com/en/news/minimax-m2",
      "stage": "Model release",
      "category": "AI 发布",
      "subtopic": "minimax",
      "subtopicName": "MiniMax",
      "tags": [
        "MiniMax",
        "M2",
        "agent"
      ],
      "description": "MiniMax 官方 News 发布 MiniMax M2 与 Agent。",
      "dateRange": "2025-10-27",
      "location": "Online",
      "isOnline": true,
      "status": "ended"
    },
    {
      "id": "kimi-next-major-forecast-2026",
      "topicId": "llm-release-ddl",
      "title": "Kimi 下一代主力模型预测窗口",
      "type": "forecastWindow",
      "isDatePlaceholder": true,
      "status": "unannounced",
      "lastOfficialDate": "2025-11-06",
      "basisEvents": [
        "kimi-k2-0711-preview",
        "kimi-k2-0905-preview",
        "kimi-k2-think"
      ],
      "estimatedNextWindow": {
        "start": "2026-06-16",
        "end": "2026-07-14"
      },
      "confidence": "medium",
      "url": "https://platform.moonshot.ai/blog/posts/changelog",
      "source": "Moonshot AI",
      "sourceUrl": "https://platform.moonshot.ai/blog/posts/changelog",
      "stage": "Forecast only",
      "category": "AI 发布",
      "subtopic": "kimi",
      "subtopicName": "Kimi",
      "tags": [
        "Kimi",
        "预测窗口",
        "未官宣"
      ],
      "description": "预测不是官方发布时间，待 Moonshot AI 正式发布后再转为历史节点或官方节点。",
      "dateRange": "2026-06-16 - 2026-07-14",
      "location": "Online",
      "isOnline": true
    },
    {
      "id": "deepseek-next-major-forecast-2026",
      "topicId": "llm-release-ddl",
      "title": "DeepSeek 下一代主力模型预测窗口",
      "type": "forecastWindow",
      "isDatePlaceholder": true,
      "status": "unannounced",
      "lastOfficialDate": "2025-12-01",
      "basisEvents": [
        "deepseek-r1-release",
        "deepseek-r1-0528",
        "deepseek-v3-2-release"
      ],
      "estimatedNextWindow": {
        "start": "2026-04-06",
        "end": "2026-06-09"
      },
      "confidence": "medium",
      "url": "https://api-docs.deepseek.com/news/news251201",
      "source": "DeepSeek API Docs",
      "sourceUrl": "https://api-docs.deepseek.com/news/news251201",
      "stage": "Forecast only",
      "category": "AI 发布",
      "subtopic": "deepseek",
      "subtopicName": "DeepSeek",
      "tags": [
        "DeepSeek",
        "预测窗口",
        "未官宣"
      ],
      "description": "预测不是官方发布时间，待 DeepSeek 官方 News 更新后再替换。",
      "dateRange": "2026-04-06 - 2026-06-09",
      "location": "Online",
      "isOnline": true
    },
    {
      "id": "glm-next-major-forecast-2026",
      "topicId": "llm-release-ddl",
      "title": "GLM 下一代主力模型预测窗口",
      "type": "forecastWindow",
      "isDatePlaceholder": true,
      "status": "unannounced",
      "lastOfficialDate": "2025-09-30",
      "basisEvents": [
        "glm-4-5-release",
        "glm-4-6-release"
      ],
      "estimatedNextWindow": {
        "start": "2026-05-30",
        "end": "2026-06-27"
      },
      "confidence": "low",
      "url": "https://z.ai/blog/glm-4.6",
      "source": "Z.ai",
      "sourceUrl": "https://z.ai/blog/glm-4.6",
      "stage": "Forecast only",
      "category": "AI 发布",
      "subtopic": "glm",
      "subtopicName": "GLM",
      "tags": [
        "GLM",
        "预测窗口",
        "未官宣"
      ],
      "description": "预测不是官方发布时间，首版样本仍少，需要继续补官方历史节点。",
      "dateRange": "2026-05-30 - 2026-06-27",
      "location": "Online",
      "isOnline": true
    },
    {
      "id": "minimax-next-major-forecast-2026",
      "topicId": "llm-release-ddl",
      "title": "MiniMax 下一代主力模型预测窗口",
      "type": "forecastWindow",
      "isDatePlaceholder": true,
      "status": "unannounced",
      "lastOfficialDate": "2025-10-27",
      "basisEvents": [
        "minimax-m2-release"
      ],
      "estimatedNextWindow": {
        "start": "2026-05-01",
        "end": "2026-09-30"
      },
      "confidence": "low",
      "url": "https://www.minimaxi.com/en/news/minimax-m2",
      "source": "MiniMax",
      "sourceUrl": "https://www.minimaxi.com/en/news/minimax-m2",
      "stage": "Forecast only",
      "category": "AI 发布",
      "subtopic": "minimax",
      "subtopicName": "MiniMax",
      "tags": [
        "MiniMax",
        "预测窗口",
        "未官宣"
      ],
      "description": "预测不是官方发布时间，后续以 MiniMax 官方 News/API release notes 为准。",
      "dateRange": "2026-05-01 - 2026-09-30",
      "location": "Online",
      "isOnline": true
    }
  ],
  "nsfc-ddl": [
    {
      "id": "nsfc-2026-lump-sum-policy-filing",
      "topicId": "nsfc-ddl",
      "title": "2026 年度包干制管理规定备案",
      "type": "officialDeadline",
      "deadline": "2026-06-30T23:59:00+08:00",
      "url": "https://www.nsfc.gov.cn/p1/3381/2824/99667.html",
      "source": "国家自然科学基金委员会",
      "sourceUrl": "https://www.nsfc.gov.cn/p1/3381/2824/99667.html",
      "status": "upcoming",
      "stage": "Institution filing",
      "category": "科研基金",
      "subtopic": "nsfc-management",
      "subtopicName": "基金管理",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "NSFC",
        "管理规定",
        "包干制"
      ],
      "description": "2026 年度通告要求依托单位于 2026 年 6 月底前将包干制项目经费管理规定报自然科学基金委备案。",
      "dateRange": "2026-06-30"
    },
    {
      "id": "nsfc-2026-application-window",
      "topicId": "nsfc-ddl",
      "title": "2026 年度集中接收项目申请",
      "type": "historyEvent",
      "date": "2026-03-20",
      "url": "https://www.nsfc.gov.cn/p1/3381/2824/99667.html",
      "source": "国家自然科学基金委员会",
      "sourceUrl": "https://www.nsfc.gov.cn/p1/3381/2824/99667.html",
      "stage": "Application deadline",
      "category": "科研基金",
      "subtopic": "nsfc-application",
      "subtopicName": "集中接收",
      "dateRange": "2026-03-01 - 2026-03-20 16:00",
      "tags": [
        "NSFC",
        "集中接收",
        "申请截止"
      ],
      "description": "2026 年度集中接收项目申请于 2026 年 3 月 1 日开始，3 月 20 日 16 时截止。",
      "location": "Online",
      "isOnline": true,
      "status": "ended"
    },
    {
      "id": "nsfc-2026-project-guide-release",
      "topicId": "nsfc-ddl",
      "title": "2026 年度国家自然科学基金项目指南发布",
      "type": "historyEvent",
      "date": "2026-01-19",
      "url": "https://www.nsfc.gov.cn/p1/2931/4077/2026nxmzn.html",
      "source": "国家自然科学基金委员会",
      "sourceUrl": "https://www.nsfc.gov.cn/p1/2931/4077/2026nxmzn.html",
      "stage": "Guide release",
      "category": "科研基金",
      "subtopic": "nsfc-guide",
      "subtopicName": "年度指南",
      "tags": [
        "NSFC",
        "项目指南",
        "年度指南"
      ],
      "description": "2026 年度项目指南页面汇总年度指南、专项项目和合作项目指南，是申请人核对项目类型和填报要求的官方入口。",
      "dateRange": "2026-01-19",
      "location": "Online",
      "isOnline": true,
      "status": "ended"
    },
    {
      "id": "nsfc-2026-general-program-window",
      "topicId": "nsfc-ddl",
      "title": "2026 年度面上项目集中接收",
      "type": "historyEvent",
      "date": "2026-03-20",
      "url": "https://www.nsfc.gov.cn/p1/3381/2824/99667.html",
      "source": "国家自然科学基金委员会",
      "sourceUrl": "https://www.nsfc.gov.cn/p1/3381/2824/99667.html",
      "stage": "Application deadline",
      "category": "科研基金",
      "subtopic": "nsfc-project-types",
      "subtopicName": "项目门类",
      "dateRange": "2026-03-01 - 2026-03-20 16:00",
      "tags": [
        "NSFC",
        "面上项目",
        "集中接收"
      ],
      "description": "2026 年通告将面上项目列入集中接收类型，申请窗口为 3 月 1 日至 3 月 20 日 16 时。",
      "location": "Online",
      "isOnline": true,
      "status": "ended"
    },
    {
      "id": "nsfc-2026-young-scientists-c-window",
      "topicId": "nsfc-ddl",
      "title": "2026 年度青年科学基金项目（C类）集中接收",
      "type": "historyEvent",
      "date": "2026-03-20",
      "url": "https://www.nsfc.gov.cn/p1/3381/2824/99667.html",
      "source": "国家自然科学基金委员会",
      "sourceUrl": "https://www.nsfc.gov.cn/p1/3381/2824/99667.html",
      "stage": "Application deadline",
      "category": "科研基金",
      "subtopic": "nsfc-project-types",
      "subtopicName": "项目门类",
      "dateRange": "2026-03-01 - 2026-03-20 16:00",
      "tags": [
        "NSFC",
        "青年科学基金",
        "C类"
      ],
      "description": "2026 年通告将青年科学基金项目（C类）列入集中接收类型；面上项目和青年 C 类申请书结构框架已调整，需使用最新版申请书。",
      "location": "Online",
      "isOnline": true,
      "status": "ended"
    },
    {
      "id": "nsfc-2026-regional-fund-window",
      "topicId": "nsfc-ddl",
      "title": "2026 年度地区科学基金项目集中接收",
      "type": "historyEvent",
      "date": "2026-03-20",
      "url": "https://www.nsfc.gov.cn/p1/3381/2824/99667.html",
      "source": "国家自然科学基金委员会",
      "sourceUrl": "https://www.nsfc.gov.cn/p1/3381/2824/99667.html",
      "stage": "Application deadline",
      "category": "科研基金",
      "subtopic": "nsfc-project-types",
      "subtopicName": "项目门类",
      "dateRange": "2026-03-01 - 2026-03-20 16:00",
      "tags": [
        "NSFC",
        "地区科学基金",
        "集中接收"
      ],
      "description": "2026 年通告将地区科学基金项目列入集中接收类型，依托单位需在截止后 24 小时内在线提交项目申请清单。",
      "location": "Online",
      "isOnline": true,
      "status": "ended"
    },
    {
      "id": "nsfc-2026-key-program-window",
      "topicId": "nsfc-ddl",
      "title": "2026 年度重点项目集中接收",
      "type": "historyEvent",
      "date": "2026-03-20",
      "url": "https://www.nsfc.gov.cn/p1/3381/2824/99667.html",
      "source": "国家自然科学基金委员会",
      "sourceUrl": "https://www.nsfc.gov.cn/p1/3381/2824/99667.html",
      "stage": "Application deadline",
      "category": "科研基金",
      "subtopic": "nsfc-project-types",
      "subtopicName": "项目门类",
      "dateRange": "2026-03-01 - 2026-03-20 16:00",
      "tags": [
        "NSFC",
        "重点项目",
        "集中接收"
      ],
      "description": "2026 年通告将重点项目列入集中接收类型；重点项目与面上、青年 C 类一并纳入分类评审相关要求。",
      "location": "Online",
      "isOnline": true,
      "status": "ended"
    },
    {
      "id": "nsfc-2026-young-scientists-b-window",
      "topicId": "nsfc-ddl",
      "title": "2026 年度青年科学基金项目（B类）集中接收",
      "type": "historyEvent",
      "date": "2026-03-20",
      "url": "https://www.nsfc.gov.cn/p1/3381/2824/99667.html",
      "source": "国家自然科学基金委员会",
      "sourceUrl": "https://www.nsfc.gov.cn/p1/3381/2824/99667.html",
      "stage": "Application deadline",
      "category": "科研基金",
      "subtopic": "nsfc-project-types",
      "subtopicName": "项目门类",
      "dateRange": "2026-03-01 - 2026-03-20 16:00",
      "tags": [
        "NSFC",
        "青年科学基金",
        "B类"
      ],
      "description": "2026 年通告将青年科学基金项目（B类）列入集中接收类型，并实行经费包干制。",
      "location": "Online",
      "isOnline": true,
      "status": "ended"
    },
    {
      "id": "nsfc-2026-young-scientists-a-window",
      "topicId": "nsfc-ddl",
      "title": "2026 年度青年科学基金项目（A类）集中接收",
      "type": "historyEvent",
      "date": "2026-03-20",
      "url": "https://www.nsfc.gov.cn/p1/3381/2824/99667.html",
      "source": "国家自然科学基金委员会",
      "sourceUrl": "https://www.nsfc.gov.cn/p1/3381/2824/99667.html",
      "stage": "Application deadline",
      "category": "科研基金",
      "subtopic": "nsfc-project-types",
      "subtopicName": "项目门类",
      "dateRange": "2026-03-01 - 2026-03-20 16:00",
      "tags": [
        "NSFC",
        "青年科学基金",
        "A类"
      ],
      "description": "2026 年通告将青年科学基金项目（A类，含延续资助项目）列入集中接收类型，并实行经费包干制。",
      "location": "Online",
      "isOnline": true,
      "status": "ended"
    },
    {
      "id": "nsfc-2026-innovative-research-group-window",
      "topicId": "nsfc-ddl",
      "title": "2026 年度创新研究群体项目集中接收",
      "type": "historyEvent",
      "date": "2026-03-20",
      "url": "https://www.nsfc.gov.cn/p1/3381/2824/99667.html",
      "source": "国家自然科学基金委员会",
      "sourceUrl": "https://www.nsfc.gov.cn/p1/3381/2824/99667.html",
      "stage": "Application deadline",
      "category": "科研基金",
      "subtopic": "nsfc-project-types",
      "subtopicName": "项目门类",
      "dateRange": "2026-03-01 - 2026-03-20 16:00",
      "tags": [
        "NSFC",
        "创新研究群体",
        "集中接收"
      ],
      "description": "2026 年通告将创新研究群体项目列入集中接收类型，项目研究期限由信息系统结合项目类型自动生成。",
      "location": "Online",
      "isOnline": true,
      "status": "ended"
    },
    {
      "id": "nsfc-2026-excellent-research-group-window",
      "topicId": "nsfc-ddl",
      "title": "2026 年度卓越研究群体项目集中接收",
      "type": "historyEvent",
      "date": "2026-03-20",
      "url": "https://www.nsfc.gov.cn/p1/3381/2824/99667.html",
      "source": "国家自然科学基金委员会",
      "sourceUrl": "https://www.nsfc.gov.cn/p1/3381/2824/99667.html",
      "stage": "Application deadline",
      "category": "科研基金",
      "subtopic": "nsfc-project-types",
      "subtopicName": "项目门类",
      "dateRange": "2026-03-01 - 2026-03-20 16:00",
      "tags": [
        "NSFC",
        "卓越研究群体",
        "集中接收"
      ],
      "description": "2026 年通告将卓越研究群体项目列入集中接收类型，申请人可在 3 月 11 日至 13 日完成预提交以查询联合限项情况。",
      "location": "Online",
      "isOnline": true,
      "status": "ended"
    },
    {
      "id": "nsfc-2026-key-international-cooperation-window",
      "topicId": "nsfc-ddl",
      "title": "2026 年度重点国际（地区）合作研究项目集中接收",
      "type": "historyEvent",
      "date": "2026-03-20",
      "url": "https://www.nsfc.gov.cn/p1/3381/2824/99667.html",
      "source": "国家自然科学基金委员会",
      "sourceUrl": "https://www.nsfc.gov.cn/p1/3381/2824/99667.html",
      "stage": "Application deadline",
      "category": "科研基金",
      "subtopic": "nsfc-project-types",
      "subtopicName": "项目门类",
      "dateRange": "2026-03-01 - 2026-03-20 16:00",
      "tags": [
        "NSFC",
        "国际合作",
        "重点国际合作"
      ],
      "description": "2026 年通告将重点国际（地区）合作研究项目列入集中接收类型；其他随时接收的国际合作项目以单独指南为准。",
      "location": "Online",
      "isOnline": true,
      "status": "ended"
    },
    {
      "id": "nsfc-2026-foreign-scholars-window",
      "topicId": "nsfc-ddl",
      "title": "2026 年度外国学者研究基金项目集中接收",
      "type": "historyEvent",
      "date": "2026-03-20",
      "url": "https://www.nsfc.gov.cn/p1/3381/2824/100065.html",
      "source": "国家自然科学基金委员会",
      "sourceUrl": "https://www.nsfc.gov.cn/p1/3381/2824/100065.html",
      "stage": "Application deadline",
      "category": "科研基金",
      "subtopic": "nsfc-project-types",
      "subtopicName": "项目门类",
      "dateRange": "2026-03-01 - 2026-03-20 16:00",
      "tags": [
        "NSFC",
        "外国学者",
        "国际科研资助"
      ],
      "description": "2026 年外国学者研究基金项目指南列明在线申报接收期为 3 月 1 日至 3 月 20 日 16 时。",
      "location": "Online",
      "isOnline": true,
      "status": "ended"
    },
    {
      "id": "nsfc-2026-creative-research-team-window",
      "topicId": "nsfc-ddl",
      "title": "2026 年度合作创新研究团队项目集中接收",
      "type": "historyEvent",
      "date": "2026-03-20",
      "url": "https://www.nsfc.gov.cn/p1/3381/2824/100064.html",
      "source": "国家自然科学基金委员会",
      "sourceUrl": "https://www.nsfc.gov.cn/p1/3381/2824/100064.html",
      "stage": "Application deadline",
      "category": "科研基金",
      "subtopic": "nsfc-project-types",
      "subtopicName": "项目门类",
      "dateRange": "2026-03-01 - 2026-03-20 16:00",
      "tags": [
        "NSFC",
        "合作创新研究团队",
        "国际科研资助"
      ],
      "description": "2026 年合作创新研究团队项目指南列明在线申报接收期为 3 月 1 日至 3 月 20 日 16 时。",
      "location": "Online",
      "isOnline": true,
      "status": "ended"
    },
    {
      "id": "nsfc-2026-major-instrument-window",
      "topicId": "nsfc-ddl",
      "title": "2026 年度国家重大科研仪器研制项目（自由申请）集中接收",
      "type": "historyEvent",
      "date": "2026-03-20",
      "url": "https://www.nsfc.gov.cn/p1/3381/2824/99667.html",
      "source": "国家自然科学基金委员会",
      "sourceUrl": "https://www.nsfc.gov.cn/p1/3381/2824/99667.html",
      "stage": "Application deadline",
      "category": "科研基金",
      "subtopic": "nsfc-project-types",
      "subtopicName": "项目门类",
      "dateRange": "2026-03-01 - 2026-03-20 16:00",
      "tags": [
        "NSFC",
        "重大科研仪器",
        "集中接收"
      ],
      "description": "2026 年通告将国家重大科研仪器研制项目（自由申请）列入集中接收类型，并要求严格开展预算评审。",
      "location": "Online",
      "isOnline": true,
      "status": "ended"
    },
    {
      "id": "nsfc-2026-joint-fund-window",
      "topicId": "nsfc-ddl",
      "title": "2026 年度部分联合基金项目集中接收",
      "type": "historyEvent",
      "date": "2026-03-20",
      "url": "https://www.nsfc.gov.cn/p1/3381/2824/99667.html",
      "source": "国家自然科学基金委员会",
      "sourceUrl": "https://www.nsfc.gov.cn/p1/3381/2824/99667.html",
      "stage": "Application deadline",
      "category": "科研基金",
      "subtopic": "nsfc-project-types",
      "subtopicName": "项目门类",
      "dateRange": "2026-03-01 - 2026-03-20 16:00",
      "tags": [
        "NSFC",
        "联合基金",
        "集中接收"
      ],
      "description": "2026 年通告将部分联合基金项目列入集中接收类型；其他批次以 NSFC 后续单独指南为准。",
      "location": "Online",
      "isOnline": true,
      "status": "ended"
    },
    {
      "id": "nsfc-2026-major-research-plan-window",
      "topicId": "nsfc-ddl",
      "title": "2026 年度部分重大研究计划项目集中接收",
      "type": "historyEvent",
      "date": "2026-03-20",
      "url": "https://www.nsfc.gov.cn/p1/3381/2824/99667.html",
      "source": "国家自然科学基金委员会",
      "sourceUrl": "https://www.nsfc.gov.cn/p1/3381/2824/99667.html",
      "stage": "Application deadline",
      "category": "科研基金",
      "subtopic": "nsfc-project-types",
      "subtopicName": "项目门类",
      "dateRange": "2026-03-01 - 2026-03-20 16:00",
      "tags": [
        "NSFC",
        "重大研究计划",
        "集中接收"
      ],
      "description": "2026 年通告将部分重大研究计划项目列入集中接收类型，具体方向还需要继续跟踪年度项目指南和单独指南。",
      "location": "Online",
      "isOnline": true,
      "status": "ended"
    },
    {
      "id": "nsfc-2026-math-tianyuan-window",
      "topicId": "nsfc-ddl",
      "title": "2026 年度部分数学天元基金项目集中接收",
      "type": "historyEvent",
      "date": "2026-03-20",
      "url": "https://www.nsfc.gov.cn/p1/3381/2824/99667.html",
      "source": "国家自然科学基金委员会",
      "sourceUrl": "https://www.nsfc.gov.cn/p1/3381/2824/99667.html",
      "stage": "Application deadline",
      "category": "科研基金",
      "subtopic": "nsfc-project-types",
      "subtopicName": "项目门类",
      "dateRange": "2026-03-01 - 2026-03-20 16:00",
      "tags": [
        "NSFC",
        "数学天元基金",
        "集中接收"
      ],
      "description": "2026 年通告将部分数学天元基金项目列入集中接收类型；未列入集中接收的项目以单独指南为准。",
      "location": "Online",
      "isOnline": true,
      "status": "ended"
    },
    {
      "id": "nsfc-2026-preliminary-review-result",
      "topicId": "nsfc-ddl",
      "title": "2026 年度申请初审结果公布节点",
      "type": "historyEvent",
      "date": "2026-04-29",
      "url": "https://www.nsfc.gov.cn/p1/3381/2824/99667.html",
      "source": "国家自然科学基金委员会",
      "sourceUrl": "https://www.nsfc.gov.cn/p1/3381/2824/99667.html",
      "stage": "Preliminary review",
      "category": "科研基金",
      "subtopic": "nsfc-review",
      "subtopicName": "评审结果",
      "tags": [
        "NSFC",
        "初审结果",
        "评审"
      ],
      "description": "2026 年度通告写明自然科学基金委于 2026 年 4 月 29 日前公布申请项目初审结果。",
      "dateRange": "2026-04-29",
      "location": "Online",
      "isOnline": true,
      "status": "ended"
    },
    {
      "id": "nsfc-2026-preliminary-review-announcement",
      "topicId": "nsfc-ddl",
      "title": "2026 年度申请初审结果正式公布",
      "type": "historyEvent",
      "date": "2026-04-29",
      "url": "https://www.nsfc.gov.cn/p1/3381/2822/122579.html",
      "source": "国家自然科学基金委员会",
      "sourceUrl": "https://www.nsfc.gov.cn/p1/3381/2822/122579.html",
      "stage": "Preliminary review",
      "category": "科研基金",
      "subtopic": "nsfc-review",
      "subtopicName": "评审结果",
      "tags": [
        "NSFC",
        "初审结果",
        "受理情况"
      ],
      "description": "2026 年初审结果通告显示集中接收期间共接收各类型项目申请 470561 项，经初审受理 469427 项。",
      "dateRange": "2026-04-29",
      "location": "Online",
      "isOnline": true,
      "status": "ended"
    },
    {
      "id": "nsfc-2026-preliminary-recheck-deadline",
      "topicId": "nsfc-ddl",
      "title": "2026 年度不予受理项目复审申请截止",
      "type": "historyEvent",
      "date": "2026-05-15",
      "url": "https://www.nsfc.gov.cn/p1/3381/2822/122579.html",
      "source": "国家自然科学基金委员会",
      "sourceUrl": "https://www.nsfc.gov.cn/p1/3381/2822/122579.html",
      "stage": "Preliminary recheck deadline",
      "category": "科研基金",
      "subtopic": "nsfc-review",
      "subtopicName": "评审结果",
      "dateRange": "2026-04-29 - 2026-05-15 16:00",
      "tags": [
        "NSFC",
        "复审",
        "初审结果"
      ],
      "description": "申请人如对不予受理决定有异议，应于 2026 年 5 月 15 日 16 时前在线提交复审申请。",
      "location": "Online",
      "isOnline": true,
      "status": "ended"
    },
    {
      "id": "nsfc-2026-preliminary-recheck-result",
      "topicId": "nsfc-ddl",
      "title": "2026 年度不予受理项目复审审查结果通知",
      "type": "officialDeadline",
      "deadline": "2026-06-05T23:59:00+08:00",
      "url": "https://www.nsfc.gov.cn/p1/3381/2822/122579.html",
      "source": "国家自然科学基金委员会",
      "sourceUrl": "https://www.nsfc.gov.cn/p1/3381/2822/122579.html",
      "status": "upcoming",
      "stage": "Preliminary recheck result",
      "category": "科研基金",
      "subtopic": "nsfc-review",
      "subtopicName": "评审结果",
      "tags": [
        "NSFC",
        "复审结果",
        "初审结果"
      ],
      "description": "2026 年初审复审审查结果将由相关项目管理部门在 6 月 5 日前书面通知申请人。",
      "dateRange": "2026-06-05",
      "location": "Online",
      "isOnline": true
    },
    {
      "id": "nsfc-2026-progress-report-deadline",
      "topicId": "nsfc-ddl",
      "title": "2026 年度项目进展报告依托单位确认截止",
      "type": "historyEvent",
      "date": "2026-01-15",
      "url": "https://www.nsfc.gov.cn/p1/3381/2824/99667.html",
      "source": "国家自然科学基金委员会",
      "sourceUrl": "https://www.nsfc.gov.cn/p1/3381/2824/99667.html",
      "stage": "Progress report deadline",
      "category": "科研基金",
      "subtopic": "nsfc-management",
      "subtopicName": "基金管理",
      "tags": [
        "NSFC",
        "进展报告",
        "依托单位"
      ],
      "description": "项目负责人在线撰写进展报告，依托单位应于 2026 年 1 月 15 日前逐项确认。",
      "dateRange": "2026-01-15",
      "location": "Online",
      "isOnline": true,
      "status": "ended"
    },
    {
      "id": "nsfc-2026-final-report-online-deadline",
      "topicId": "nsfc-ddl",
      "title": "2026 年度结题材料电子版确认截止",
      "type": "historyEvent",
      "date": "2026-02-24",
      "url": "https://www.nsfc.gov.cn/p1/3381/2824/99667.html",
      "source": "国家自然科学基金委员会",
      "sourceUrl": "https://www.nsfc.gov.cn/p1/3381/2824/99667.html",
      "stage": "Final report online deadline",
      "category": "科研基金",
      "subtopic": "nsfc-management",
      "subtopicName": "基金管理",
      "tags": [
        "NSFC",
        "结题",
        "成果报告"
      ],
      "description": "依托单位应于 2026 年 2 月 24 日 16 时前通过信息系统对结题材料进行审核并逐项确认。",
      "dateRange": "2026-02-24",
      "location": "Online",
      "isOnline": true,
      "status": "ended"
    },
    {
      "id": "nsfc-2026-final-report-paper-deadline",
      "topicId": "nsfc-ddl",
      "title": "2026 年度结题纸质材料报送截止",
      "type": "historyEvent",
      "date": "2026-03-09",
      "url": "https://www.nsfc.gov.cn/p1/3381/2824/99667.html",
      "source": "国家自然科学基金委员会",
      "sourceUrl": "https://www.nsfc.gov.cn/p1/3381/2824/99667.html",
      "stage": "Final report paper deadline",
      "category": "科研基金",
      "subtopic": "nsfc-management",
      "subtopicName": "基金管理",
      "tags": [
        "NSFC",
        "结题",
        "纸质材料"
      ],
      "description": "依托单位应于 2026 年 3 月 9 日前将签字盖章后的纸质结题/成果报告原件及清单等材料报送自然科学基金委。",
      "dateRange": "2026-03-09",
      "location": "Online",
      "isOnline": true,
      "status": "ended"
    },
    {
      "id": "nsfc-2026-annual-management-report-deadline",
      "topicId": "nsfc-ddl",
      "title": "2026 年度管理报告提交截止",
      "type": "historyEvent",
      "date": "2026-04-15",
      "url": "https://www.nsfc.gov.cn/p1/3381/2824/99667.html",
      "source": "国家自然科学基金委员会",
      "sourceUrl": "https://www.nsfc.gov.cn/p1/3381/2824/99667.html",
      "stage": "Annual management report",
      "category": "科研基金",
      "subtopic": "nsfc-management",
      "subtopicName": "基金管理",
      "dateRange": "2026-04-01 - 2026-04-15 16:00",
      "tags": [
        "NSFC",
        "年度管理报告",
        "依托单位"
      ],
      "description": "依托单位应在 2026 年 4 月 1 日至 4 月 15 日 16 时期间在线提交年度管理报告。",
      "location": "Online",
      "isOnline": true,
      "status": "ended"
    },
    {
      "id": "nsfc-2025-application-window",
      "topicId": "nsfc-ddl",
      "title": "2025 年度集中接收项目申请",
      "type": "historyEvent",
      "date": "2025-03-20",
      "url": "https://www.nsfc.gov.cn/p1/3381/2824/66780.html",
      "source": "国家自然科学基金委员会",
      "sourceUrl": "https://www.nsfc.gov.cn/p1/3381/2824/66780.html",
      "stage": "Application deadline",
      "category": "科研基金",
      "subtopic": "nsfc-application",
      "subtopicName": "集中接收",
      "dateRange": "2025-03-01 - 2025-03-20 16:00",
      "tags": [
        "NSFC",
        "集中接收",
        "申请截止"
      ],
      "description": "2025 年度集中接收项目申请于 2025 年 3 月 1 日开始，3 月 20 日 16 时截止。",
      "location": "Online",
      "isOnline": true,
      "status": "ended"
    },
    {
      "id": "nsfc-2024-review-result-query",
      "topicId": "nsfc-ddl",
      "title": "2024 年度集中接收申请项目评审结果公布",
      "type": "historyEvent",
      "date": "2024-08-23",
      "url": "https://www.nsfc.gov.cn/p1/3381/2824/66854.html",
      "source": "国家自然科学基金委员会",
      "sourceUrl": "https://www.nsfc.gov.cn/p1/3381/2824/66854.html",
      "stage": "Review result",
      "category": "科研基金",
      "subtopic": "nsfc-review",
      "subtopicName": "评审结果",
      "tags": [
        "NSFC",
        "评审结果",
        "资助结果"
      ],
      "description": "自然科学基金委于 2024 年 8 月 23 日发布集中接收申请项目评审结果查询和复审申请有关事项通告。",
      "dateRange": "2024-08-23",
      "location": "Online",
      "isOnline": true,
      "status": "ended"
    },
    {
      "id": "nsfc-2025-review-result-query",
      "topicId": "nsfc-ddl",
      "title": "2025 年国家自然科学基金集中接收申请项目评审结果公布",
      "type": "historyEvent",
      "date": "2025-08-27",
      "url": "https://www.nsfc.gov.cn/publish/portal0/tab442/info95464.htm",
      "source": "国家自然科学基金委员会",
      "sourceUrl": "https://www.nsfc.gov.cn/publish/portal0/tab442/info95464.htm",
      "stage": "Review result",
      "category": "科研基金",
      "subtopic": "nsfc-review",
      "subtopicName": "评审结果",
      "tags": [
        "NSFC",
        "评审结果",
        "资助结果"
      ],
      "description": "2025 年评审结果通告显示，申请人和依托单位可于 2025 年 8 月 27 日以后登录科学基金网络信息系统查询评审结果。",
      "dateRange": "2025-08-27",
      "location": "Online",
      "isOnline": true,
      "status": "ended"
    },
    {
      "id": "nsfc-2024-review-recheck-deadline",
      "topicId": "nsfc-ddl",
      "title": "2024 年度评审结果复审申请截止",
      "type": "historyEvent",
      "date": "2024-09-06",
      "url": "https://www.nsfc.gov.cn/p1/3381/2824/66854.html",
      "source": "国家自然科学基金委员会",
      "sourceUrl": "https://www.nsfc.gov.cn/p1/3381/2824/66854.html",
      "stage": "Review recheck deadline",
      "category": "科研基金",
      "subtopic": "nsfc-review",
      "subtopicName": "评审结果",
      "tags": [
        "NSFC",
        "复审",
        "评审结果"
      ],
      "description": "2024 年度项目评审结果复审申请提交截止时间为 2024 年 9 月 6 日 16 时。",
      "dateRange": "2024-09-06",
      "location": "Online",
      "isOnline": true,
      "status": "ended"
    },
    {
      "id": "nsfc-2027-application-forecast",
      "topicId": "nsfc-ddl",
      "title": "2027 年度集中接收申请预测窗口",
      "type": "forecastWindow",
      "isDatePlaceholder": true,
      "status": "unannounced",
      "lastOfficialDate": "2026-03-20",
      "basisEvents": [
        "nsfc-2025-application-window",
        "nsfc-2026-application-window"
      ],
      "estimatedNextWindow": {
        "start": "2027-03-01",
        "end": "2027-03-20"
      },
      "confidence": "medium",
      "url": "https://www.nsfc.gov.cn/",
      "source": "国家自然科学基金委员会",
      "sourceUrl": "https://www.nsfc.gov.cn/",
      "stage": "Forecast only",
      "category": "科研基金",
      "subtopic": "nsfc-application",
      "subtopicName": "集中接收",
      "tags": [
        "NSFC",
        "预测窗口",
        "集中接收"
      ],
      "description": "预测窗口不等于官方截止日；待 2027 年官方通告发布后替换为正式 DDL。",
      "dateRange": "2027-03-01 - 2027-03-20",
      "location": "Online",
      "isOnline": true
    },
    {
      "id": "nsfc-2026-review-result-forecast",
      "topicId": "nsfc-ddl",
      "title": "2026 年度集中接收项目评审结果预测窗口",
      "type": "forecastWindow",
      "isDatePlaceholder": true,
      "status": "unannounced",
      "lastOfficialDate": "2025-08-27",
      "basisEvents": [
        "nsfc-2024-review-result-query",
        "nsfc-2025-review-result-query"
      ],
      "estimatedNextWindow": {
        "start": "2026-08-20",
        "end": "2026-09-05"
      },
      "confidence": "medium",
      "url": "https://www.nsfc.gov.cn/",
      "source": "国家自然科学基金委员会",
      "sourceUrl": "https://www.nsfc.gov.cn/",
      "stage": "Forecast only",
      "category": "科研基金",
      "subtopic": "nsfc-review",
      "subtopicName": "评审结果",
      "tags": [
        "NSFC",
        "预测窗口",
        "评审结果"
      ],
      "description": "展示用户关心的评审结果节奏，但明确样本不足且不进入官方 DDL 统计。",
      "dateRange": "2026-08-20 - 2026-09-05",
      "location": "Online",
      "isOnline": true
    }
  ],
  "cas-partition-ddl": [
    {
      "id": "cas-partition-platform-history-policy",
      "topicId": "cas-partition-ddl",
      "title": "中科院期刊分区表：平台发布与历史查询口径",
      "type": "historyEvent",
      "date": "2026-03-27",
      "dateRange": "2026-03-27",
      "url": "https://www.fenqubiao.com/",
      "source": "中科院期刊分区表在线平台",
      "sourceUrl": "https://www.fenqubiao.com/",
      "status": "ended",
      "stage": "Platform boundary",
      "category": "期刊评价",
      "subtopic": "cas-access",
      "subtopicName": "历史查询",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "CAS",
        "历史轨迹",
        "查询平台"
      ],
      "description": "在线平台说明期刊分区表自 2004 年发布、2019 年发布升级版、2022 年起只发布升级版；公开专题只记录平台与合规查询入口。"
    },
    {
      "id": "cas-partition-2026-stop-update-statement",
      "topicId": "cas-partition-ddl",
      "title": "中科院文献情报中心声明：2026 年起不再更新发布期刊分区表",
      "type": "historyEvent",
      "date": "2026-03-27",
      "dateRange": "2026-03-27",
      "url": "https://www.las.cas.cn/news/tzgg/202603/t20260327_8178738.html",
      "source": "中国科学院文献情报中心",
      "sourceUrl": "https://www.las.cas.cn/news/tzgg/202603/t20260327_8178738.html",
      "status": "ended",
      "stage": "Official statement",
      "category": "期刊评价",
      "subtopic": "cas-policy",
      "subtopicName": "官方声明",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "CAS",
        "期刊分区",
        "停更"
      ],
      "description": "官方声明明确自 2026 年起不再更新与发布期刊分区表，任何其他机构发布的期刊分区表均与文献中心无关。"
    },
    {
      "id": "cas-partition-history-data-policy",
      "topicId": "cas-partition-ddl",
      "title": "中科院期刊分区历史数据查询与授权边界",
      "type": "historyEvent",
      "date": "2026-03-27",
      "dateRange": "2026-03-27",
      "url": "https://www.fenqubiao.com/",
      "source": "中科院期刊分区表在线平台",
      "sourceUrl": "https://www.las.cas.cn/news/tzgg/202603/t20260327_8178738.html",
      "status": "ended",
      "stage": "Access boundary",
      "category": "期刊评价",
      "subtopic": "cas-access",
      "subtopicName": "历史数据",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "CAS",
        "历史轨迹",
        "授权数据"
      ],
      "description": "具体期刊历年分区变化需要通过平台查询、机构授权或合规文件导入维护；Just-DDL 不绕过登录或授权边界抓取单刊分区。"
    },
    {
      "id": "cas-partition-authorized-import-ready",
      "topicId": "cas-partition-ddl",
      "title": "CAS 单刊分区轨迹授权导入接口已预留",
      "type": "historyEvent",
      "date": "2026-05-24",
      "dateRange": "2026-05-24",
      "url": "https://www.fenqubiao.com/",
      "source": "中科院期刊分区表在线平台",
      "sourceUrl": "https://www.fenqubiao.com/",
      "status": "ended",
      "stage": "Authorized import",
      "category": "期刊评价",
      "subtopic": "cas-import",
      "subtopicName": "授权导入",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "CAS",
        "CSV 导入",
        "单刊轨迹"
      ],
      "description": "仓库提供 CAS_HISTORY_CSV 授权导入流程，可把单刊 ISSN、年份、大类分区、小类分区写入 metricSnapshot，用于展示历年一区/二区/三区/四区变化。"
    },
    {
      "id": "cas-partition-no-2026-official-release",
      "topicId": "cas-partition-ddl",
      "title": "2026 起无官方年度分区表更新窗口",
      "type": "historyEvent",
      "date": "2026-03-27",
      "dateRange": "2026-03-27",
      "url": "https://www.las.cas.cn/news/tzgg/202603/t20260327_8178738.html",
      "source": "中国科学院文献情报中心",
      "sourceUrl": "https://www.las.cas.cn/news/tzgg/202603/t20260327_8178738.html",
      "status": "ended",
      "stage": "No official release window",
      "category": "期刊评价",
      "subtopic": "cas-policy",
      "subtopicName": "停更后状态",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "CAS",
        "无官方 DDL",
        "停更"
      ],
      "description": "由于官方已声明不再更新发布，CAS 分区专题不再生成 2026 及以后年度官方分区表倒计时；后续只追踪官方声明变化或授权历史数据导入。"
    }
  ],
  "jcr-impact-factor-ddl": [
    {
      "id": "jcr-2026-official-webinar",
      "topicId": "jcr-impact-factor-ddl",
      "title": "2026 Journal Citation Reports 官方说明活动",
      "type": "officialDeadline",
      "deadline": "2026-06-30T11:00:00+03:00",
      "dateRange": "2026-06-30",
      "url": "https://clarivate.com/academia-government/events/journal-citation-reports-2026-2/",
      "source": "Clarivate",
      "sourceUrl": "https://clarivate.com/academia-government/events/journal-citation-reports-2026-2/",
      "status": "upcoming",
      "stage": "JCR 2026 webinar",
      "category": "期刊评价",
      "subtopic": "jcr-release",
      "subtopicName": "JCR 年度发布",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "JCR",
        "Clarivate",
        "2026"
      ],
      "description": "Clarivate 官方培训页列出 2026 Journal Citation Reports 相关说明活动；JCR 具体数据仍以 Clarivate 正式发布为准。"
    },
    {
      "id": "jcr-2025-release",
      "topicId": "jcr-impact-factor-ddl",
      "title": "2025 Journal Citation Reports 发布",
      "type": "historyEvent",
      "date": "2025-06-18",
      "dateRange": "2025-06-18",
      "url": "https://clarivate.com/news/clarivate-unveils-the-2025-journal-citation-reports/",
      "source": "Clarivate",
      "sourceUrl": "https://clarivate.com/news/clarivate-unveils-the-2025-journal-citation-reports/",
      "status": "ended",
      "stage": "JCR release",
      "category": "期刊评价",
      "subtopic": "jcr-release",
      "subtopicName": "JCR 年度发布",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "JCR",
        "影响因子",
        "年度发布",
        "2025"
      ],
      "description": "Clarivate 于 2025 年 6 月 18 日发布 2025 Journal Citation Reports，提供 2024 年 JCR 数据。"
    },
    {
      "id": "jcr-2024-release",
      "topicId": "jcr-impact-factor-ddl",
      "title": "2024 Journal Citation Reports 发布",
      "type": "historyEvent",
      "date": "2024-06-20",
      "dateRange": "2024-06-20",
      "url": "https://clarivate.com/news/clarivate-reveals-worlds-leading-and-trusted-journals-with-the-2024-journal-citation-reports/",
      "source": "Clarivate",
      "sourceUrl": "https://clarivate.com/news/clarivate-reveals-worlds-leading-and-trusted-journals-with-the-2024-journal-citation-reports/",
      "status": "ended",
      "stage": "JCR release",
      "category": "期刊评价",
      "subtopic": "jcr-release",
      "subtopicName": "JCR 年度发布",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "JCR",
        "影响因子",
        "年度发布",
        "2024"
      ],
      "description": "Clarivate 于 2024 年 6 月 20 日发布 2024 Journal Citation Reports，新增 ESCI 统一分类排名视图。"
    },
    {
      "id": "jcr-2023-release",
      "topicId": "jcr-impact-factor-ddl",
      "title": "2023 Journal Citation Reports 发布",
      "type": "historyEvent",
      "date": "2023-06-28",
      "dateRange": "2023-06-28",
      "url": "https://clarivate.com/news/clarivate-unveils-journal-citation-reports-2023-a-trusted-resource-to-support-research-integrity-and-promote-accurate-journal-evaluation/",
      "source": "Clarivate",
      "sourceUrl": "https://clarivate.com/news/clarivate-unveils-journal-citation-reports-2023-a-trusted-resource-to-support-research-integrity-and-promote-accurate-journal-evaluation/",
      "status": "ended",
      "stage": "JCR release",
      "category": "期刊评价",
      "subtopic": "jcr-release",
      "subtopicName": "JCR 年度发布",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "JCR",
        "影响因子",
        "年度发布",
        "2023"
      ],
      "description": "Clarivate 于 2023 年 6 月 28 日发布 2023 Journal Citation Reports，首次让更多 AHCI/ESCI 期刊获得 JIF。"
    },
    {
      "id": "jcr-2022-release",
      "topicId": "jcr-impact-factor-ddl",
      "title": "2022 Journal Citation Reports 发布",
      "type": "historyEvent",
      "date": "2022-06-28",
      "dateRange": "2022-06-28",
      "url": "https://ir.clarivate.com/news-events/press-releases/news-details/2022/Clarivate-Names-Worlds-Leading-Journals-with-the-2022-Journal-Citation-Reports/default.aspx?sf257796683=1",
      "source": "Clarivate",
      "sourceUrl": "https://ir.clarivate.com/news-events/press-releases/news-details/2022/Clarivate-Names-Worlds-Leading-Journals-with-the-2022-Journal-Citation-Reports/default.aspx?sf257796683=1",
      "status": "ended",
      "stage": "JCR release",
      "category": "期刊评价",
      "subtopic": "jcr-release",
      "subtopicName": "JCR 年度发布",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "JCR",
        "影响因子",
        "年度发布",
        "2022"
      ],
      "description": "Clarivate 于 2022 年 6 月 28 日发布 2022 Journal Citation Reports，基于 2021 年 Web of Science 数据。"
    },
    {
      "id": "jcr-2021-release",
      "topicId": "jcr-impact-factor-ddl",
      "title": "2021 Journal Citation Reports 发布",
      "type": "historyEvent",
      "date": "2021-06-30",
      "dateRange": "2021-06-30",
      "url": "https://ir.clarivate.com/news-events/press-releases/news-details/2021/Clarivate-Releases-Journal-Citation-Reports-Naming-the-Worlds-Leading-Journals/default.aspx/1000/",
      "source": "Clarivate",
      "sourceUrl": "https://ir.clarivate.com/news-events/press-releases/news-details/2021/Clarivate-Releases-Journal-Citation-Reports-Naming-the-Worlds-Leading-Journals/default.aspx/1000/",
      "status": "ended",
      "stage": "JCR release",
      "category": "期刊评价",
      "subtopic": "jcr-release",
      "subtopicName": "JCR 年度发布",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "JCR",
        "影响因子",
        "年度发布",
        "2021"
      ],
      "description": "Clarivate 于 2021 年 6 月 30 日发布 2021 Journal Citation Reports，并引入 Journal Citation Indicator 等变化。"
    },
    {
      "id": "jcr-2025-correction-record",
      "topicId": "jcr-impact-factor-ddl",
      "title": "2025 JCR 后续更正记录",
      "type": "historyEvent",
      "date": "2025-10-15",
      "dateRange": "2025-10-15",
      "url": "https://journalcitationreports.zendesk.com/hc/en-gb/articles/36310787349521-2025",
      "source": "Clarivate JCR Help Center",
      "sourceUrl": "https://journalcitationreports.zendesk.com/hc/en-gb/articles/36310787349521-2025",
      "status": "ended",
      "stage": "Data reload",
      "category": "期刊评价",
      "subtopic": "jcr-corrections",
      "subtopicName": "后续修正",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "JCR",
        "数据修正",
        "reload",
        "2025"
      ],
      "description": "2025 JCR Help Center 记录 10 月 15 日 Data Reload：补充缺失材料并修正少量期刊指标。"
    },
    {
      "id": "jcr-2024-correction-record",
      "topicId": "jcr-impact-factor-ddl",
      "title": "2024 JCR 后续更正记录",
      "type": "historyEvent",
      "date": "2024-10-23",
      "dateRange": "2024-10-23",
      "url": "https://journalcitationreports.zendesk.com/hc/en-gb/articles/28351055638801-2024",
      "source": "Clarivate JCR Help Center",
      "sourceUrl": "https://journalcitationreports.zendesk.com/hc/en-gb/articles/28351055638801-2024",
      "status": "ended",
      "stage": "Data reload",
      "category": "期刊评价",
      "subtopic": "jcr-corrections",
      "subtopicName": "后续修正",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "JCR",
        "数据修正",
        "reload",
        "2024"
      ],
      "description": "2024 JCR Help Center 记录 10 月 23 日 Data Reload：补充缺失材料并修正少量期刊指标。"
    },
    {
      "id": "jcr-2023-correction-record",
      "topicId": "jcr-impact-factor-ddl",
      "title": "2023 JCR 后续更正记录",
      "type": "historyEvent",
      "date": "2023-10-18",
      "dateRange": "2023-10-18",
      "url": "https://journalcitationreports.zendesk.com/hc/en-gb/articles/28351122662289-2023",
      "source": "Clarivate JCR Help Center",
      "sourceUrl": "https://journalcitationreports.zendesk.com/hc/en-gb/articles/28351122662289-2023",
      "status": "ended",
      "stage": "Data reload",
      "category": "期刊评价",
      "subtopic": "jcr-corrections",
      "subtopicName": "后续修正",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "JCR",
        "数据修正",
        "reload",
        "2023"
      ],
      "description": "2023 JCR Help Center 记录 10 月 18 日 Data Reload：2022 JCR 数据在 reload 后完成并纳入产品。"
    },
    {
      "id": "jcr-2022-correction-record",
      "topicId": "jcr-impact-factor-ddl",
      "title": "2022 JCR 后续更正记录",
      "type": "historyEvent",
      "date": "2022-10-19",
      "dateRange": "2022-10-19",
      "url": "https://journalcitationreports.zendesk.com/hc/en-gb/articles/28351163576721-2022",
      "source": "Clarivate JCR Help Center",
      "sourceUrl": "https://journalcitationreports.zendesk.com/hc/en-gb/articles/28351163576721-2022",
      "status": "ended",
      "stage": "Data reload",
      "category": "期刊评价",
      "subtopic": "jcr-corrections",
      "subtopicName": "后续修正",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "JCR",
        "数据修正",
        "reload",
        "2022"
      ],
      "description": "2022 JCR Help Center 记录 10 月 19 日 Data Reload：补充缺失材料并修正少量期刊指标。"
    },
    {
      "id": "jcr-2021-correction-record",
      "topicId": "jcr-impact-factor-ddl",
      "title": "2021 JCR 后续更正记录",
      "type": "historyEvent",
      "date": "2021-10-25",
      "dateRange": "2021-10-25",
      "url": "https://journalcitationreports.zendesk.com/hc/en-gb/articles/28351153135761-2021",
      "source": "Clarivate JCR Help Center",
      "sourceUrl": "https://journalcitationreports.zendesk.com/hc/en-gb/articles/28351153135761-2021",
      "status": "ended",
      "stage": "Data reload",
      "category": "期刊评价",
      "subtopic": "jcr-corrections",
      "subtopicName": "后续修正",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "JCR",
        "数据修正",
        "reload",
        "2021"
      ],
      "description": "2021 JCR Help Center 记录 10 月 25 日 Data Reload，并在 7 月记录过部分 quartile 调整。"
    },
    {
      "id": "jcr-2026-release-forecast",
      "topicId": "jcr-impact-factor-ddl",
      "title": "2026 JCR 年度发布预测窗口",
      "type": "forecastWindow",
      "dateRange": "2026-06-18 - 2026-06-30",
      "url": "https://clarivate.com/academia-government/scientific-and-academic-research/research-funding-analytics/journal-citation-reports/",
      "source": "Clarivate",
      "sourceUrl": "https://clarivate.com/academia-government/scientific-and-academic-research/research-funding-analytics/journal-citation-reports/",
      "status": "unannounced",
      "stage": "Forecast only",
      "category": "期刊评价",
      "subtopic": "jcr-release",
      "subtopicName": "JCR 年度发布",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "JCR",
        "预测窗口",
        "Clarivate"
      ],
      "description": "预测窗口不进入官方倒计时；待 Clarivate 正式发布后替换为正式历史/发布节点。",
      "isDatePlaceholder": true,
      "lastOfficialDate": "2025-06-18",
      "basisEvents": [
        "jcr-2021-release",
        "jcr-2022-release",
        "jcr-2023-release",
        "jcr-2024-release",
        "jcr-2025-release"
      ],
      "estimatedNextWindow": {
        "start": "2026-06-18",
        "end": "2026-06-30"
      },
      "confidence": "high"
    },
    {
      "id": "jcr-2026-correction-watch-window",
      "topicId": "jcr-impact-factor-ddl",
      "title": "2026 JCR 后续修正观察窗口",
      "type": "forecastWindow",
      "dateRange": "2026-10-15 - 2026-10-31",
      "url": "https://journalcitationreports.zendesk.com/hc/en-gb/sections/201245195-Journal-Citation-Reports",
      "source": "Clarivate JCR Help Center",
      "sourceUrl": "https://journalcitationreports.zendesk.com/hc/en-gb/articles/36310787349521-2025",
      "status": "watching",
      "stage": "Watch window",
      "category": "期刊评价",
      "subtopic": "jcr-corrections",
      "subtopicName": "后续修正",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "JCR",
        "修正观察",
        "reload"
      ],
      "description": "用于提醒维护链路检查 JCR 官方支持页是否出现 reload 或 correction，不显示为正式 DDL。",
      "isDatePlaceholder": true,
      "lastOfficialDate": "2025-10-15",
      "basisEvents": [
        "jcr-2021-correction-record",
        "jcr-2022-correction-record",
        "jcr-2023-correction-record",
        "jcr-2024-correction-record",
        "jcr-2025-correction-record"
      ],
      "estimatedNextWindow": {
        "start": "2026-10-15",
        "end": "2026-10-31"
      },
      "confidence": "medium"
    }
  ],
  "journal-volume-ddl": [
    {
      "id": "journal-volume-openalex-snapshot",
      "topicId": "journal-volume-ddl",
      "title": "OpenAlex 期刊发文量快照",
      "type": "historyEvent",
      "date": "2026-05-24",
      "dateRange": "2026-05-24",
      "url": "https://docs.openalex.org/api-entities/sources/source-object",
      "source": "OpenAlex",
      "sourceUrl": "https://docs.openalex.org/api-entities/sources/source-object",
      "status": "ended",
      "stage": "Metadata snapshot",
      "category": "期刊评价",
      "subtopic": "openalex-volume",
      "subtopicName": "开放元数据发文量",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "OpenAlex",
        "发文量",
        "开放元数据"
      ],
      "description": "使用 OpenAlex Source object 的 works_count 与 counts_by_year 字段统计代表期刊当前发文量、近年年度趋势和最新完整年同比变化。"
    },
    {
      "id": "journal-volume-weekly-refresh-window",
      "topicId": "journal-volume-ddl",
      "title": "期刊发文量每周刷新窗口",
      "type": "forecastWindow",
      "dateRange": "2026-05-25 - 2026-05-31",
      "url": "https://docs.openalex.org/api-entities/sources/source-object",
      "source": "OpenAlex",
      "sourceUrl": "https://docs.openalex.org/api-entities/sources/source-object",
      "status": "maintenance",
      "stage": "Maintenance forecast",
      "category": "期刊评价",
      "subtopic": "openalex-volume",
      "subtopicName": "开放元数据发文量",
      "location": "Online",
      "isOnline": true,
      "tags": [
        "OpenAlex",
        "刷新窗口",
        "低置信度"
      ],
      "description": "用于提醒维护链路刷新开放元数据，不进入官方 DDL 统计。",
      "isDatePlaceholder": true,
      "lastOfficialDate": "2026-05-24",
      "basisEvents": [
        "journal-volume-openalex-snapshot"
      ],
      "estimatedNextWindow": {
        "start": "2026-05-25",
        "end": "2026-05-31"
      },
      "confidence": "low"
    }
  ]
};

export function getDDLByTopic(topicId: string): DDLItem[] {
  return ddlData[topicId] || [];
}

export function getAllDDL(): DDLItem[] {
  return Object.values(ddlData).flat();
}
