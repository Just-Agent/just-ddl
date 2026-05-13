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
}

export const ddlData: Record<string, DDLItem[]> = {
  'hackathon-ddl': [
    { id: 'hackathon-ddl-1', title: 'Hack the North 2026', deadline: '2026-09-01T23:59:59', dateRange: 'Sep 18-20, 2026', location: 'Waterloo, Canada', isOnline: false, tags: ['AI/ML', 'Open Innovation'], url: 'https://hackthenorth.com', status: 'upcoming', prize: '$50,000+', description: '加拿大最大学生黑客松' },
    { id: 'hackathon-ddl-2', title: 'ETHGlobal New York 2026', deadline: '2026-10-10T23:59:59', dateRange: 'Oct 10-12, 2026', location: 'New York, USA', isOnline: false, tags: ['Web3', 'DeFi'], url: 'https://ethglobal.com', status: 'upcoming', prize: '$150,000+', description: '以太坊生态全球黑客松' },
    { id: 'hackathon-ddl-3', title: 'HackMIT 2026', deadline: '2026-09-15T23:59:59', dateRange: 'Sep 27-28, 2026', location: 'Cambridge, MA, USA', isOnline: false, tags: ['AI/ML', 'EdTech'], url: 'https://hackmit.org', status: 'upcoming', prize: '$40,000+', description: 'MIT 官方黑客松' },
    { id: 'hackathon-ddl-4', title: 'Cal Hacks 2026', deadline: '2026-10-24T10:00:00', dateRange: 'Oct 24-26, 2026', location: 'Berkeley, CA, USA', isOnline: false, tags: ['AI/ML', 'Healthcare'], url: 'https://calhacks.io', status: 'upcoming', prize: '$30,000+', description: 'UC Berkeley 黑客松' },
    { id: 'hackathon-ddl-5', title: 'HackGT 2026', deadline: '2026-10-03T18:00:00', dateRange: 'Oct 3-5, 2026', location: 'Atlanta, GA, USA', isOnline: false, tags: ['FinTech', 'Blockchain'], url: 'https://hack.gt', status: 'upcoming', prize: '$20,000+', description: 'Georgia Tech 黑客松' },
    { id: 'hackathon-ddl-6', title: 'PennApps 2026', deadline: '2026-09-05T17:00:00', dateRange: 'Sep 5-7, 2026', location: 'Philadelphia, PA, USA', isOnline: false, tags: ['AI/ML', 'Healthcare'], url: 'https://pennapps.com', status: 'upcoming', prize: '$32,000+', description: '宾大黑客松' },
    { id: 'hackathon-ddl-7', title: 'TreeHacks 2026', deadline: '2026-11-15T23:59:59', dateRange: 'Nov 20-22, 2026', location: 'Stanford, CA, USA', isOnline: false, tags: ['AI/ML', 'Climate'], url: 'https://treehacks.com', status: 'upcoming', prize: '$35,000+', description: '斯坦福黑客松' },
    { id: 'hackathon-ddl-8', title: 'nwHacks 2026', deadline: '2026-12-10T23:59:59', dateRange: 'Jan 9-11, 2027', location: 'Vancouver, Canada', isOnline: false, tags: ['AI/ML', 'Healthcare'], url: 'https://nwhacks.io', status: 'upcoming', prize: '$28,000+', description: '温哥华黑客松' },
  ],
  'agent-ddl': [
    { id: 'agent-ddl-1', title: 'Google Cloud Rapid Agent Hackathon', deadline: '2026-06-11T23:59:59', dateRange: 'May 1 - Jun 11', location: 'Online', isOnline: true, tags: ['AI Agents', 'Cloud'], url: 'https://googlecloud.devpost.com', status: 'upcoming', prize: '$60,000+', description: 'Google Cloud 智能体黑客松' },
    { id: 'agent-ddl-2', title: 'Agents Assemble - Healthcare AI', deadline: '2026-05-20T23:59:59', dateRange: 'Apr 1 - May 20', location: 'Online', isOnline: true, tags: ['Healthcare', 'MCP', 'A2A'], url: 'https://agentsassemble.devpost.com', status: 'upcoming', prize: '$25,000+', description: '医疗AI智能体竞赛' },
    { id: 'agent-ddl-3', title: 'CAR-bench IJCAI 2026', deadline: '2026-07-31T23:59:59', dateRange: 'May 4 - Jul 31', location: 'Online', isOnline: true, tags: ['LLM Agents', 'Automotive'], url: 'https://car-bench.github.io', status: 'upcoming', description: 'IJCAI 智能体可靠性评测' },
    { id: 'agent-ddl-4', title: 'Vertex Swarm Challenge 2026', deadline: '2026-07-01T23:59:59', dateRange: 'Apr 15 - Jul 1', location: 'Global', isOnline: true, tags: ['Multi-Agent', 'Robotics'], url: 'https://dorahacks.io', status: 'upcoming', prize: '$27,000+', description: '多智能体协调挑战' },
    { id: 'agent-ddl-5', title: 'Splunk Agentic Ops Hackathon', deadline: '2026-06-15T23:59:59', dateRange: 'May 15 - Jun 15', location: 'Online', isOnline: true, tags: ['Agentic Ops'], url: 'https://splunk.devpost.com', status: 'upcoming', prize: '$20,000+', description: 'Agentic运维黑客松' },
    { id: 'agent-ddl-6', title: 'FIND EVIL! AI Security', deadline: '2026-06-15T23:59:59', dateRange: 'May 1 - Jun 15', location: 'Online', isOnline: true, tags: ['Cybersecurity'], url: 'https://findevil.devpost.com', status: 'upcoming', prize: '$22,000+', description: 'AI安全智能体竞赛' },
    { id: 'agent-ddl-7', title: 'FREUID Challenge 2026', deadline: '2026-07-27T23:59:59', dateRange: 'May 11 - Jul 27', location: 'Online', isOnline: true, tags: ['Fraud Detection', 'GenAI'], url: 'https://freuid2026.com', status: 'upcoming', description: '身份文件欺诈检测' },
    { id: 'agent-ddl-8', title: 'Industrial Automation Challenge', deadline: '2026-08-01T23:59:59', dateRange: 'Jun 1 - Aug 1', location: 'Online', isOnline: true, tags: ['Physics LLM', 'Industrial'], url: 'https://ijcai-automation.org', status: 'upcoming', description: '工业自动化LLM挑战' },
  ],
  'academic-ddl': [
    { id: 'academic-ddl-1', title: 'NeurIPS 2026', deadline: '2026-05-28T23:59:59', dateRange: 'May 28', location: 'Online', isOnline: true, tags: ['ML', 'AI'], url: 'https://neurips.cc', status: 'upcoming', description: '神经信息处理系统大会' },
    { id: 'academic-ddl-2', title: 'ACL 2026', deadline: '2026-07-09T23:59:59', dateRange: 'Jul 9', location: 'Online', isOnline: true, tags: ['NLP'], url: 'https://acl2026.org', status: 'upcoming', description: '计算语言学年会' },
    { id: 'academic-ddl-3', title: 'CVPR 2027', deadline: '2026-11-07T23:59:59', dateRange: 'Nov 7', location: 'Online', isOnline: true, tags: ['CV'], url: 'https://cvpr2027.org', status: 'upcoming', description: '计算机视觉与模式识别' },
    { id: 'academic-ddl-4', title: 'EMNLP 2026', deadline: '2026-06-16T23:59:59', dateRange: 'Jun 16', location: 'Online', isOnline: true, tags: ['NLP'], url: 'https://emnlp2026.org', status: 'upcoming', description: '自然语言处理实证方法' },
    { id: 'academic-ddl-5', title: 'AAAI 2027', deadline: '2026-08-12T23:59:59', dateRange: 'Aug 12', location: 'Online', isOnline: true, tags: ['AI'], url: 'https://aaai.org', status: 'upcoming', description: '人工智能促进会' },
    { id: 'academic-ddl-6', title: 'ICLR 2027', deadline: '2026-10-01T23:59:59', dateRange: 'Oct 1', location: 'Online', isOnline: true, tags: ['ML', 'Representation'], url: 'https://iclr.cc', status: 'upcoming', description: '学习表征国际会议' },
    { id: 'academic-ddl-7', title: 'ICCV 2027', deadline: '2027-03-17T23:59:59', dateRange: 'Mar 17', location: 'Online', isOnline: true, tags: ['CV'], url: 'https://iccv2027.org', status: 'upcoming', description: '国际计算机视觉大会' },
    { id: 'academic-ddl-8', title: 'ECCV 2026', deadline: '2026-03-07T23:59:59', dateRange: 'Mar 7', location: 'Online', isOnline: true, tags: ['CV'], url: 'https://eccv2026.org', status: 'ended', description: '欧洲计算机视觉大会' },
  ],
  'programming-ddl': [
    { id: 'programming-ddl-1', title: 'ICPC World Finals 2026', deadline: '2026-09-15T23:59:59', dateRange: 'Sep 15', location: 'Cairo, Egypt', isOnline: false, tags: ['ICPC', 'Algorithm'], url: 'https://icpc.global', status: 'upcoming', description: '国际大学生程序设计竞赛' },
    { id: 'programming-ddl-2', title: 'Meta Hacker Cup 2026', deadline: '2026-09-01T23:59:59', dateRange: 'Sep 1', location: 'Online', isOnline: true, tags: ['Meta', 'Algorithm'], url: 'https://hacker cup.com', status: 'upcoming', description: 'Meta 编程竞赛' },
    { id: 'programming-ddl-3', title: 'AtCoder World Tour', deadline: '2026-11-01T23:59:59', dateRange: 'Nov 1', location: 'Online', isOnline: true, tags: ['AtCoder'], url: 'https://atcoder.jp', status: 'upcoming', description: 'AtCoder 世界巡回赛' },
    { id: 'programming-ddl-4', title: 'Google Code Jam 2026', deadline: '2026-03-15T23:59:59', dateRange: 'Mar 15', location: 'Online', isOnline: true, tags: ['Google'], url: 'https://codingcompetitions.withgoogle.com', status: 'ended', description: '谷歌编程挑战赛' },
    { id: 'programming-ddl-5', title: 'LeetCode Weekly Contest', deadline: '2026-12-31T23:59:59', dateRange: 'Every Sat', location: 'Online', isOnline: true, tags: ['LeetCode'], url: 'https://leetcode.com', status: 'upcoming', description: 'LeetCode 周赛' },
  ],
  'cv-ddl': [
    { id: 'cv-ddl-1', title: 'CVPR 2027', deadline: '2026-11-07T23:59:59', dateRange: 'Nov 7', location: 'Online', isOnline: true, tags: ['CVPR'], url: 'https://cvpr2027.org', status: 'upcoming', description: '计算机视觉顶会' },
    { id: 'cv-ddl-2', title: 'ICCV 2027', deadline: '2027-03-17T23:59:59', dateRange: 'Mar 17', location: 'Online', isOnline: true, tags: ['ICCV'], url: 'https://iccv2027.org', status: 'upcoming', description: '计算机视觉顶会' },
    { id: 'cv-ddl-3', title: 'ECCV 2026', deadline: '2026-03-07T23:59:59', dateRange: 'Mar 7', location: 'Online', isOnline: true, tags: ['ECCV'], url: 'https://eccv2026.org', status: 'ended', description: '欧洲计算机视觉大会' },
    { id: 'cv-ddl-4', title: 'WACV 2027', deadline: '2026-07-14T23:59:59', dateRange: 'Jul 14', location: 'Online', isOnline: true, tags: ['WACV'], url: 'https://wacv2027.org', status: 'upcoming', description: '冬季计算机视觉应用' },
  ],
  'nlp-ddl': [
    { id: 'nlp-ddl-1', title: 'ACL 2026', deadline: '2026-07-09T23:59:59', dateRange: 'Jul 9', location: 'Online', isOnline: true, tags: ['ACL'], url: 'https://acl2026.org', status: 'upcoming', description: '计算语言学年会' },
    { id: 'nlp-ddl-2', title: 'EMNLP 2026', deadline: '2026-06-16T23:59:59', dateRange: 'Jun 16', location: 'Online', isOnline: true, tags: ['EMNLP'], url: 'https://emnlp2026.org', status: 'upcoming', description: '自然语言处理实证方法' },
    { id: 'nlp-ddl-3', title: 'NAACL 2026', deadline: '2026-01-15T23:59:59', dateRange: 'Jan 15', location: 'Online', isOnline: true, tags: ['NAACL'], url: 'https://naacl2026.org', status: 'ended', description: '北美计算语言学' },
    { id: 'nlp-ddl-4', title: 'COLING 2026', deadline: '2026-09-18T23:59:59', dateRange: 'Sep 18', location: 'Online', isOnline: true, tags: ['COLING'], url: 'https://coling2026.org', status: 'upcoming', description: '国际计算语言学会议' },
    { id: 'nlp-ddl-5', title: 'EACL 2026', deadline: '2026-10-09T23:59:59', dateRange: 'Oct 9', location: 'Online', isOnline: true, tags: ['EACL'], url: 'https://eacl2026.org', status: 'upcoming', description: '欧洲计算语言学' },
  ],
  'holiday-ddl': [
    { id: 'holiday-ddl-1', title: '端午节 2026', deadline: '2026-06-19T00:00:00', dateRange: 'Jun 19', location: 'China', isOnline: false, tags: ['法定假日'], url: '#', status: 'upcoming', description: '端午节假期（6月19日-21日）' },
    { id: 'holiday-ddl-2', title: '中秋节 2026', deadline: '2026-09-25T00:00:00', dateRange: 'Sep 25', location: 'China', isOnline: false, tags: ['法定假日'], url: '#', status: 'upcoming', description: '中秋节假期（9月25日-27日）' },
    { id: 'holiday-ddl-3', title: '国庆节 2026', deadline: '2026-10-01T00:00:00', dateRange: 'Oct 1', location: 'China', isOnline: false, tags: ['法定假日'], url: '#', status: 'upcoming', description: '国庆假期（10月1日-7日）' },
    { id: 'holiday-ddl-4', title: '圣诞节 2026', deadline: '2026-12-25T00:00:00', dateRange: 'Dec 25', location: 'Global', isOnline: false, tags: ['节日'], url: '#', status: 'upcoming', description: '圣诞节' },
    { id: 'holiday-ddl-5', title: '元旦 2027', deadline: '2027-01-01T00:00:00', dateRange: 'Jan 1', location: 'Global', isOnline: false, tags: ['法定假日'], url: '#', status: 'upcoming', description: '元旦假期（1月1日-3日）' },
    { id: 'holiday-ddl-6', title: '春节 2027', deadline: '2027-02-17T00:00:00', dateRange: 'Feb 17', location: 'China', isOnline: false, tags: ['法定假日'], url: '#', status: 'upcoming', description: '春节假期（2月17日-23日）' },
    { id: 'holiday-ddl-7', title: '清明节 2027', deadline: '2027-04-05T00:00:00', dateRange: 'Apr 5', location: 'China', isOnline: false, tags: ['法定假日'], url: '#', status: 'upcoming', description: '清明假期（4月5日-7日）' },
    { id: 'holiday-ddl-8', title: '劳动节 2027', deadline: '2027-05-01T00:00:00', dateRange: 'May 1', location: 'China', isOnline: false, tags: ['法定假日'], url: '#', status: 'upcoming', description: '五一假期（5月1日-5日）' },
  ],
  'multimodal-ddl': [
    { id: 'multimodal-ddl-1', title: 'MMMU Challenge 2026', deadline: '2026-08-15T23:59:59', dateRange: 'Aug 15', location: 'Online', isOnline: true, tags: ['MM Understanding'], url: 'https://mmmu-challenge.org', status: 'upcoming', description: '多模态理解基准挑战' },
    { id: 'multimodal-ddl-2', title: 'VQA Challenge 2026', deadline: '2026-07-01T23:59:59', dateRange: 'Jul 1', location: 'Online', isOnline: true, tags: ['VQA'], url: 'https://visualqa.org', status: 'upcoming', description: '视觉问答竞赛' },
    { id: 'multimodal-ddl-3', title: 'AIGC Evaluation 2026', deadline: '2026-09-30T23:59:59', dateRange: 'Sep 30', location: 'Online', isOnline: true, tags: ['AIGC', 'Generation'], url: 'https://aigc-eval.org', status: 'upcoming', description: 'AI生成内容评测' },
  ],
};

export const getDDLByTopic = (topicId: string) => ddlData[topicId] || [];
export const getAllDDL = () => Object.values(ddlData).flat();
export const getDDLById = (id: string) => getAllDDL().find(d => d.id === id);
