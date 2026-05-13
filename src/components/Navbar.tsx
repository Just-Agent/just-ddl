import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Pin, Home, Heart, Info, Menu, X, Github } from 'lucide-react';
import { useSubscriptions } from '@/hooks/useSubscriptions';

const navLinks = [
  { label: '专题广场', path: '/', icon: Home },
  { label: '我的DDL', path: '/my', icon: Heart },
  { label: '关于', path: '/about', icon: Info },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { count } = useSubscriptions();

  return (
    <header className="sticky top-0 z-50 border-b" style={{ background: 'rgba(255,250,245,0.85)', backdropFilter: 'blur(12px)', borderColor: '#FED7AA' }}>
      <div className="mx-auto flex h-[56px] max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2">
          <Pin size={18} style={{ color: '#F97316' }} />
          <span className="text-base font-bold tracking-tight" style={{ fontFamily: 'Inter' }}>
            <span style={{ color: '#F97316' }}>Just</span> <span style={{ color: '#1C1917' }}>DDL</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path}
              className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all"
              style={{ color: location.pathname === link.path ? '#F97316' : '#78716C', background: location.pathname === link.path ? '#FFF7ED' : 'transparent' }}>
              <link.icon size={13} /> {link.label}
              {link.path === '/my' && count > 0 && (
                <span className="ml-0.5 flex h-4 min-w-[16px] items-center justify-center rounded-full px-1 text-[10px] font-bold text-white" style={{ background: '#F43F5E' }}>{count}</span>
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a href="https://github.com/Just-Agent/just-ddl" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition-all" style={{ borderColor: '#FED7AA', color: '#78716C' }}>
            <Github size={13} /> GitHub
          </a>
        </div>

        <button className="md:hidden" style={{ color: '#1C1917' }} onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t px-4 py-3 md:hidden" style={{ background: '#FFF7ED', borderColor: '#FED7AA' }}>
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} className="flex items-center gap-2 py-2 text-sm font-medium" style={{ color: '#78716C' }} onClick={() => setMobileOpen(false)}>
              <link.icon size={15} /> {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
