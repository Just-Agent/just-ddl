import { useLanguage } from '@/lib/language';

const topics = [
  { key: 'hackathon', href: 'https://just-agent.github.io/hackathon-ddl/' },
  { key: 'agent', href: 'https://just-agent.github.io/agent-ddl/' },
  { key: 'cv', href: 'https://just-agent.github.io/cv-ddl/' },
  { key: 'nlp', href: 'https://just-agent.github.io/nlp-ddl/' },
  { key: 'academic', href: 'https://just-agent.github.io/academic-ddl/' },
  { key: 'journal', href: 'https://just-agent.github.io/journal-ddl/' },
  { key: 'programming', href: 'https://just-agent.github.io/programming-ddl/' },
  { key: 'holiday', href: 'https://just-agent.github.io/holiday-ddl/' },
  { key: 'multimodal', href: 'https://just-agent.github.io/multimodal-ddl/' },
];

export default function NetworkBar() {
  const { copy } = useLanguage();

  return (
    <div className="border-b border-white/10 bg-[#101626] text-white">
      <div className="mx-auto flex h-9 max-w-7xl items-center justify-between gap-3 px-4 text-[11px] sm:px-6">
        <a
          href="https://just-agent.github.io/just-ddl/"
          className="flex items-center gap-2 font-semibold tracking-[0.16em] text-[#FBBF24] uppercase"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#FBBF24]" />
          Just-DDL Network
        </a>
        <div className="flex min-w-0 items-center gap-3 overflow-x-auto">
          {topics.map((topic, index) => (
            <a
              key={topic.key}
              href={topic.href}
              className="whitespace-nowrap text-white/70 transition-colors hover:text-white"
            >
              {copy.network.topics[index]}
            </a>
          ))}
          <a
            href="https://github.com/Just-Agent/just-ddl"
            className="whitespace-nowrap rounded-full border border-white/15 px-2.5 py-1 text-white/80 transition-colors hover:border-[#F97316] hover:text-[#F97316]"
          >
            {copy.nav.repo}
          </a>
        </div>
      </div>
    </div>
  );
}
