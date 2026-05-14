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
  { id: 'hackathon-ddl', name: 'Hackathon', description: '全球黑客松赛事与截稿日期追踪，覆盖 Devpost / MLH / DoraHacks / ETHGlobal 等平台', icon: 'Trophy', color: '#F97316', repo: 'Just-Agent/hackathon-ddl', site: 'https://just-agent.github.io/hackathon-ddl/', status: 'published', itemCount: 18, category: '技术赛事', tags: ['coding', '48h', 'team'] },
  { id: 'agent-ddl', name: 'AI Agent', description: 'AI Agent 竞赛与 Benchmark 挑战，LLM 智能体赛事一站式追踪', icon: 'Bot', color: '#8B5CF6', repo: 'Just-Agent/agent-ddl', site: 'https://just-agent.github.io/agent-ddl/', status: 'published', itemCount: 18, category: '技术赛事', tags: ['LLM', 'agent', 'benchmark'] },
  { id: 'cv-ddl', name: 'Computer Vision', description: '计算机视觉会议、挑战赛与 workshop 截止日，覆盖 CVPR / ICCV / ECCV / WACV 等', icon: 'Eye', color: '#06B6D4', repo: 'Just-Agent/cv-ddl', site: 'https://just-agent.github.io/cv-ddl/', status: 'published', itemCount: 18, category: '技术赛事', tags: ['CVPR', 'ICCV', 'ECCV'] },
  { id: 'nlp-ddl', name: 'NLP', description: '自然语言处理会议、shared task 与评测挑战，覆盖 ACL / EMNLP / NAACL / COLING 等', icon: 'MessageSquare', color: '#10B981', repo: 'Just-Agent/nlp-ddl', site: 'https://just-agent.github.io/nlp-ddl/', status: 'published', itemCount: 18, category: '技术赛事', tags: ['ACL', 'EMNLP', 'NAACL'] },
  { id: 'academic-ddl', name: 'Academic', description: '跨学科学术会议、基金申请、暑校与科研项目截稿日期', icon: 'GraduationCap', color: '#F43F5E', repo: 'Just-Agent/academic-ddl', site: 'https://just-agent.github.io/academic-ddl/', status: 'published', itemCount: 20, category: '学术科研', tags: ['conference', 'grant', 'paper'] },
  { id: 'journal-ddl', name: 'Journal CFP', description: '期刊 Special Issue、Special Section、专题征稿与 Call for Papers 截止日', icon: 'BookOpen', color: '#0F766E', repo: 'Just-Agent/journal-ddl', site: 'https://just-agent.github.io/journal-ddl/', status: 'published', itemCount: 0, category: '学术期刊', tags: ['journal', 'special issue', 'CFP'] },
  { id: 'programming-ddl', name: 'Programming', description: '算法竞赛、编程挑战、训练营和开发者赛事，覆盖 ICPC / Codeforces / AtCoder 等', icon: 'Code2', color: '#3B82F6', repo: 'Just-Agent/programming-ddl', site: 'https://just-agent.github.io/programming-ddl/', status: 'published', itemCount: 20, category: '专业竞赛', tags: ['ICPC', 'Codeforces', 'LeetCode'] },
  { id: 'holiday-ddl', name: 'Holidays', description: '法定节假日、二十四节气、传统节日、国际纪念日和海外公共假日倒计时', icon: 'CalendarHeart', color: '#EAB308', repo: 'Just-Agent/holiday-ddl', site: 'https://just-agent.github.io/holiday-ddl/', status: 'published', itemCount: 78, category: '日常通用', tags: ['festival', 'solar-term', 'vacation'] },
  { id: 'multimodal-ddl', name: 'Multimodal', description: '多模态理解、VLM、AIGC、视频和音频评测挑战截止日', icon: 'Layers', color: '#EC4899', repo: 'Just-Agent/multimodal-ddl', site: 'https://just-agent.github.io/multimodal-ddl/', status: 'published', itemCount: 18, category: '技术赛事', tags: ['MM', 'VLM', 'generative'] },
];

export const categories = ['全部', '技术赛事', '学术科研', '学术期刊', '专业竞赛', '日常通用'];

export function getTopicById(id: string) { return topics.find(t => t.id === id); }
