export interface Topic {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  repo: string;
  itemCount: number;
  category: string;
  tags: string[];
}

export const topics: Topic[] = [
  { id: 'hackathon-ddl', name: 'Hackathon', description: '全球黑客松赛事截止日追踪，覆盖 Devpost / MLH / DoraHacks 等平台', icon: 'Trophy', color: '#F97316', repo: 'Just-Agent/hackathon-ddl', itemCount: 10, category: '技术赛事', tags: ['coding', '48h', 'team'] },
  { id: 'agent-ddl', name: 'AI Agent', description: 'AI Agent 竞赛与 Benchmark 挑战，LLM 智能体赛事一站式追踪', icon: 'Bot', color: '#8B5CF6', repo: 'Just-Agent/agent-ddl', itemCount: 14, category: '技术赛事', tags: ['LLM', 'agent', 'benchmark'] },
  { id: 'cv-ddl', name: 'Computer Vision', description: '计算机视觉顶会与赛事截稿，CVPR / ICCV / ECCV 等', icon: 'Eye', color: '#06B6D4', repo: 'Just-Agent/cv-ddl', itemCount: 8, category: '技术赛事', tags: ['CVPR', 'ICCV', 'ECCV'] },
  { id: 'nlp-ddl', name: 'NLP', description: '自然语言处理会议与竞赛，ACL / EMNLP / NAACL 等', icon: 'MessageSquare', color: '#10B981', repo: 'Just-Agent/nlp-ddl', itemCount: 6, category: '技术赛事', tags: ['ACL', 'EMNLP', 'NAACL'] },
  { id: 'academic-ddl', name: 'Academic', description: '全行业学术会议投稿截止，NeurIPS / ICML / ICLR 等', icon: 'GraduationCap', color: '#F43F5E', repo: 'Just-Agent/academic-ddl', itemCount: 12, category: '学术科研', tags: ['conference', 'journal', 'paper'] },
  { id: 'programming-ddl', name: 'Programming', description: '编程算法竞赛截止时间，ICPC / Codeforces / AtCoder 等', icon: 'Code2', color: '#3B82F6', repo: 'Just-Agent/programming-ddl', itemCount: 9, category: '专业竞赛', tags: ['ICPC', 'Codeforces', 'LeetCode'] },
  { id: 'holiday-ddl', name: 'Holidays', description: '法定节假日与二十四节气倒计时，寒暑假安排', icon: 'CalendarHeart', color: '#EAB308', repo: 'Just-Agent/holiday-ddl', itemCount: 15, category: '日常通用', tags: ['festival', 'solar-term', 'vacation'] },
  { id: 'multimodal-ddl', name: 'Multimodal', description: '多模态理解与生成竞赛，MM 理解 / VLM / AIGC 赛事', icon: 'Layers', color: '#EC4899', repo: 'Just-Agent/multimodal-ddl', itemCount: 5, category: '技术赛事', tags: ['MM', 'VLM', 'generative'] },
];

export const categories = ['全部', '技术赛事', '学术科研', '专业竞赛', '日常通用'];

export function getTopicById(id: string) { return topics.find(t => t.id === id); }
