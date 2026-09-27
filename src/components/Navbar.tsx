import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowDownToLine, ChevronDown, Terminal, ExternalLink, Languages } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal }) => {
  const { language, toggleLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = window.scrollY / totalScroll;
        setScrollProgress(Math.min(Math.max(currentProgress, 0), 1));
      } else {
        setScrollProgress(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.experience, href: '#experience' },
    { label: t.nav.skills, href: '#skills' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.automation, href: '#automation' },
    { label: t.nav.lab, href: '#lab' }
  ];

  const moreLinks = [
    { label: t.nav.upskilling, href: '#upskilling' },
    { label: t.nav.skillSearch, href: '#search-skills' },
    { label: t.nav.aiAssistant, href: '#career-assistant' },
    { label: t.nav.educationCerts, href: '#education' },
    { label: t.nav.resume, href: '#resume' },
    { label: t.nav.contact, href: '#contact' }
  ];

  return (
    <>
      {/* Smooth Reading Progress Bar at the top of the viewport */}
      <div
        className="fixed top-0 left-0 right-0 h-[3px] z-[60] bg-slate-900/50 pointer-events-none"
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress * 100)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Reading progress"
      >
        <div
          className="h-full bg-gradient-to-r from-blue-600 via-sky-400 to-indigo-500 transition-transform duration-75 ease-out origin-left shadow-[0_0_8px_rgba(56,189,248,0.5)]"
          style={{ transform: `scaleX(${scrollProgress})` }}
        />
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          isScrolled
            ? 'bg-[#0b0f19]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3'
            : 'bg-transparent border-b border-slate-800/40 py-4'
        }`}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strictly compliant 3-zone top bar contract */}
        <div className="flex items-center justify-between">
          
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#home"
            className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm"
          >
            <div className="w-8 h-8 rounded bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white shadow-inner">
              <Terminal className="w-4 h-4 text-blue-200" />
            </div>
            <span className="text-lg font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
              Ragib Khan
            </span>
          </a>

          {/* Zone 2: 4-6 primary nav links + secondary dropdown */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-blue-400 transition-colors focus-visible:outline-none focus-visible:text-blue-400"
              >
                {link.label}
              </a>
            ))}

            {/* Dropdown for secondary pages */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                onBlur={() => setTimeout(() => setMoreDropdownOpen(false), 200)}
                className="flex items-center gap-1 hover:text-blue-400 transition-colors focus-visible:outline-none focus-visible:text-blue-400"
                aria-expanded={moreDropdownOpen}
              >
                <span>{t.nav.more}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${moreDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {moreDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-[#0f172a] border border-slate-800 rounded-lg shadow-xl shadow-black/40 py-1 z-50">
                  {moreLinks.map((subLink) => (
                    <a
                      key={subLink.label}
                      href={subLink.href}
                      onClick={() => setMoreDropdownOpen(false)}
                      className="block px-4 py-2 text-xs text-slate-300 hover:bg-slate-800 hover:text-blue-400 transition-colors"
                    >
                      {subLink.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Zone 3: 1-2 primary actions + Language Toggle */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Language Toggle Button */}
            <button
              type="button"
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 rounded-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              title={language === 'en' ? 'हिन्दी में देखें' : 'Switch to English'}
              aria-label={language === 'en' ? 'Switch to Hindi language' : 'Switch to English language'}
            >
              <Languages className="w-3.5 h-3.5 text-blue-400" />
              <span className="font-semibold">{language === 'en' ? 'हिन्दी' : 'English'}</span>
            </button>

            <button
              type="button"
              onClick={onOpenResumeModal}
              className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 whitespace-nowrap"
            >
              <ArrowDownToLine className="w-3.5 h-3.5 text-blue-400" />
              <span>{t.nav.downloadResume}</span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-md transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 whitespace-nowrap"
            >
              <span>{t.nav.contact}</span>
            </a>
          </div>

          {/* Mobile menu and controls */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Mobile Language Toggle */}
            <button
              type="button"
              onClick={toggleLanguage}
              className="px-2 py-1 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/80 rounded border border-slate-700 flex items-center gap-1"
              aria-label="Toggle language"
            >
              <Languages className="w-3.5 h-3.5 text-blue-400" />
              <span>{language === 'en' ? 'हिन्दी' : 'EN'}</span>
            </button>

            <button
              type="button"
              onClick={onOpenResumeModal}
              className="p-1.5 text-slate-300 hover:text-white bg-slate-800/80 rounded border border-slate-700"
              title="View Resume"
            >
              <ArrowDownToLine className="w-4 h-4 text-blue-400" />
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0f172a] border-b border-slate-800 px-4 pt-3 pb-6 space-y-1 shadow-2xl">
          <div className="grid grid-cols-2 gap-1 pb-3 border-b border-slate-800/60 mb-3 text-sm">
            {[...navLinks, ...moreLinks].map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-slate-300 hover:text-blue-400 hover:bg-slate-800/50 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2 pt-2">
            <button
              type="button"
              onClick={toggleLanguage}
              className="w-full py-2 px-4 text-center text-xs font-semibold text-slate-200 bg-slate-900 border border-slate-700 rounded-md flex items-center justify-center gap-2"
            >
              <Languages className="w-4 h-4 text-blue-400" />
              <span>{language === 'en' ? 'Switch to हिन्दी (Hindi)' : 'Switch to English'}</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="w-full py-2.5 px-4 text-center text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md flex items-center justify-center gap-2"
            >
              <ArrowDownToLine className="w-4 h-4 text-blue-400" />
              <span>{t.nav.downloadResume}</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 px-4 text-center text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-md"
            >
              {t.nav.contact}
            </a>
          </div>
        </div>
      )}
    </header>
    </>
  );
};

