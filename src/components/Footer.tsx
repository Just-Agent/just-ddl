import { Heart } from 'lucide-react';
import { useLanguage } from '@/lib/language';

export default function Footer() {
  const { copy } = useLanguage();

  return (
    <footer className="border-t py-7" style={{ background: '#FFFFFF', borderColor: '#E2E8F0' }}>
      <div className="mx-auto max-w-7xl px-4 text-center">
        <p className="flex items-center justify-center gap-1 text-xs" style={{ color: '#A8A29E' }}>
          <Heart size={12} style={{ color: '#F43F5E' }} /> {copy.footer.line}
        </p>
        <p className="mt-1 text-[11px]" style={{ color: '#A8A29E' }}>
          {copy.nav.repo}:{' '}
          <a href="https://github.com/Just-Agent/just-ddl" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: '#F97316' }}>
            github.com/Just-Agent/just-ddl
          </a>
        </p>
        <p className="mt-1 text-[11px] font-semibold" style={{ color: '#0F766E' }}>{copy.footer.miniProgram}</p>
        <p className="mt-1 text-[11px]" style={{ color: '#A8A29E' }}>{copy.footer.disclaimer}</p>
      </div>
    </footer>
  );
}
