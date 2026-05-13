import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t py-6" style={{ background: '#FFF7ED', borderColor: '#FED7AA' }}>
      <div className="mx-auto max-w-6xl px-4 text-center">
        <p className="flex items-center justify-center gap-1 text-xs" style={{ color: '#A8A29E' }}>
          <Heart size={12} style={{ color: '#F43F5E' }} /> Just DDL · 专注每一个截止日 · 社区驱动维护
        </p>
        <p className="mt-1 text-[11px]" style={{ color: '#A8A29E' }}>
          Repository:{' '}
          <a href="https://github.com/Just-Agent/just-ddl" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: '#F97316' }}>
            github.com/Just-Agent/just-ddl
          </a>
        </p>
        <p className="mt-1 text-[11px]" style={{ color: '#A8A29E' }}>数据仅供参，请以官方信息为准</p>
      </div>
    </footer>
  );
}
