import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Pin, Home, Heart, Info, Menu, X, Github, Languages } from 'lucide-react';
import { useSubscriptions } from '@/hooks/useSubscriptions';
import { useLanguage, type Language } from '@/lib/language';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { count } = useSubscriptions();
  const { language, setLanguage, copy } = useLanguage();
  const navLinks = [
    { label: copy.nav.plaza, path: '/', icon: Home },
    { label: copy.nav.my, path: '/my', icon: Heart },
    { label: copy.nav.about, path: '/about', icon: Info },
  ];
  const languageOptions: Array<{ value: Language; label: string }> = [
    { value: 'zh', label: '中文' },
    { value: 'en', label: 'EN' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b" style={{ background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(16px)', borderColor: '#E2E8F0' }}>
      <div className="mx-auto flex h-[60px] max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl" style={{ background: '#101626', color: '#FBBF24' }}>
            <Pin size={16} />
          </span>
          <span className="text-base font-bold tracking-tight" style={{ fontFamily: 'Inter' }}>
            <span style={{ color: '#F97316' }}>Just</span> <span style={{ color: '#1C1917' }}>DDL</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path}
              className="flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-bold transition-all"
              style={{ color: location.pathname === link.path ? '#0F766E' : '#475569', background: location.pathname === link.path ? '#ECFDF5' : 'transparent' }}>
              <link.icon size={13} /> {link.label}
              {link.path === '/my' && count > 0 && (
                <span className="ml-0.5 flex h-4 min-w-[16px] items-center justify-center rounded-full px-1 text-[10px] font-bold text-white" style={{ background: '#F43F5E' }}>{count}</span>
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <div className="flex items-center gap-1 rounded-xl border bg-white p-1" style={{ borderColor: '#E2E8F0' }} aria-label="Language switcher">
            <Languages size={13} style={{ color: '#64748B' }} />
            {languageOptions.map(option => (
              <button
                key={option.value}
                type="button"
                onClick={() => setLanguage(option.value)}
                className="rounded-lg px-2 py-1 text-[11px] font-semibold transition-all"
                style={{
                  background: language === option.value ? '#101626' : 'transparent',
                  color: language === option.value ? '#FFFFFF' : '#78716C',
                }}
              >
                {option.label}
              </button>
            ))}
          </div>
          <a href="https://github.com/Just-Agent/just-ddl" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 rounded-xl border px-3 py-2 text-xs font-bold transition-all" style={{ borderColor: '#E2E8F0', color: '#475569' }}>
            <Github size={13} /> {copy.nav.github}
          </a>
        </div>

        <button type="button" className="md:hidden" style={{ color: '#1C1917' }} onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t px-4 py-3 md:hidden" style={{ background: '#FFFFFF', borderColor: '#E2E8F0' }}>
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} className="flex items-center gap-2 py-2 text-sm font-medium" style={{ color: '#78716C' }} onClick={() => setMobileOpen(false)}>
              <link.icon size={15} /> {link.label}
            </Link>
          ))}
          <div className="mt-2 flex items-center gap-1 rounded-xl border bg-white p-1" style={{ borderColor: '#E2E8F0' }}>
            <Languages size={14} style={{ color: '#A8A29E' }} />
            {languageOptions.map(option => (
              <button
                key={option.value}
                type="button"
                onClick={() => setLanguage(option.value)}
                className="flex-1 rounded-lg px-2 py-1.5 text-xs font-semibold"
                style={{
                  background: language === option.value ? '#101626' : 'transparent',
                  color: language === option.value ? '#FFFFFF' : '#78716C',
                }}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
