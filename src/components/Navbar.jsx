import { useState } from 'react';
import { Rocket, Users, BookOpen, Info } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home', icon: Rocket },
    { href: '#profile', label: 'Profil', icon: Info },
    { href: '#people', label: 'Personil', icon: Users },
    { href: '#blog', label: 'Blog', icon: BookOpen },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/70 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2 font-semibold text-gray-900">
            <Rocket className="w-5 h-5 text-indigo-600" />
            <span>SE Lab</span>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map(({ href, label, icon: Icon }) => (
              <a key={href} href={href} className="flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900 transition">
                <Icon className="w-4 h-4" />
                {label}
              </a>
            ))}
          </nav>
          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-gray-300 text-gray-700"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map(({ href, label }) => (
              <a key={href} href={href} className="block px-2 py-2 rounded hover:bg-gray-100 text-gray-800" onClick={() => setOpen(false)}>
                {label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
