const topics = [
  { label: 'Hackathon', href: 'https://just-agent.github.io/hackathon-ddl/' },
  { label: 'Agent', href: 'https://just-agent.github.io/agent-ddl/' },
  { label: 'CV', href: 'https://just-agent.github.io/cv-ddl/' },
  { label: 'NLP', href: 'https://just-agent.github.io/nlp-ddl/' },
  { label: 'Academic', href: 'https://just-agent.github.io/academic-ddl/' },
  { label: 'Programming', href: 'https://just-agent.github.io/programming-ddl/' },
  { label: 'Holiday', href: 'https://just-agent.github.io/holiday-ddl/' },
  { label: 'Multimodal', href: 'https://just-agent.github.io/multimodal-ddl/' },
  { label: 'Roadmap', href: 'https://github.com/Just-Agent/just-ddl' },
];

export default function NetworkBar() {
  return (
    <div className="border-b border-white/10 bg-[#101626] text-white">
      <div className="mx-auto flex h-9 max-w-6xl items-center justify-between gap-3 px-4 text-[11px] sm:px-6">
        <a
          href="https://just-agent.github.io/just-ddl/"
          className="flex items-center gap-2 font-semibold tracking-[0.16em] text-[#FBBF24] uppercase"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#FBBF24]" />
          Just-DDL Network
        </a>
        <div className="flex min-w-0 items-center gap-3 overflow-x-auto">
          {topics.map((topic) => (
            <a
              key={topic.label}
              href={topic.href}
              className="whitespace-nowrap text-white/70 transition-colors hover:text-white"
            >
              {topic.label}
            </a>
          ))}
          <a
            href="https://github.com/Just-Agent/just-ddl"
            className="whitespace-nowrap rounded-full border border-white/15 px-2.5 py-1 text-white/80 transition-colors hover:border-[#F97316] hover:text-[#F97316]"
          >
            Repo
          </a>
        </div>
      </div>
    </div>
  );
}
