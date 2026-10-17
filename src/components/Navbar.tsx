import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { useMobilePagination } from '../context/MobilePaginationContext';
import { Language } from '../data/translations';
import { Sun, Moon, Globe, Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const { isMobile, isPaginated, goToSection } = useMobilePagination();
  const [isScrolled, setIsScrolled] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 20);
      // On desktop, hide top navbar when bottom dock appears
      if (!isMobile) {
        setHideNavbar(y > window.innerHeight * 0.35);
      } else {
        setHideNavbar(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  const navLinks = [
    { href: '#about', label: t.nav.about },
    { href: '#services', label: t.nav.services },
    { href: '#skills', label: t.nav.skills },
    { href: '#projects', label: t.nav.projects },
    { href: '#career', label: t.nav.career },
    { href: '#education', label: t.nav.education },
    { href: '#contact', label: t.nav.contact },
  ];

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'it', label: 'IT', flag: '🇮🇹' },
    { code: 'es', label: 'ES', flag: '🇪🇸' },
    { code: 'en', label: 'EN', flag: '🇬🇧' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const id = href.replace('#', '');
    if (isMobile && isPaginated) {
      e.preventDefault();
      setMobileMenuOpen(false);
      goToSection(id);
    } else {
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform ${
        hideNavbar ? '-translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
      } ${
        isScrolled
          ? 'py-3 backdrop-blur-xl bg-background/80 border-b border-white/10 dark:border-white/10 shadow-lg'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand / Logo without icon and with ample breathing room */}
        <a
          href="#hero"
          onClick={(e) => handleLinkClick(e, '#hero')}
          className="flex flex-col group mr-8 lg:mr-12 shrink-0 cursor-pointer"
        >
          <span className="font-extrabold tracking-tight text-foreground text-sm sm:text-base leading-tight group-hover:text-cyan-400 transition-colors">
            Lorenzo Toccaceli
          </span>
          <span className="text-[10px] font-semibold text-muted-foreground tracking-wider uppercase">
            Customer Success
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 rounded-full px-4 py-1.5 glass-panel">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3.5 py-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-full transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Controls: Language Switcher, Theme Toggle, Contact CTA */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Language Switcher Pill */}
          <div className="flex items-center gap-1 p-1 rounded-full glass-panel text-xs font-bold">
            <Globe className="w-3.5 h-3.5 text-muted-foreground ml-2 mr-1" />
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => setLanguage(l.code)}
                className={`px-2.5 py-1 rounded-full transition-all duration-200 cursor-pointer ${
                  language === l.code
                    ? 'bg-[#18648a] text-white shadow-md shadow-[#18648a]/30 font-bold'
                    : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                }`}
                title={`Switch language to ${l.code.toUpperCase()}`}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full glass-panel flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-[#18648a]/40 transition-all cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-cyan-600" />}
          </button>

          {/* Direct Contact Button */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#18648a] to-[#2082b0] hover:from-[#2082b0] hover:to-cyan-600 shadow-md shadow-[#18648a]/30 hover:scale-105 transition-all duration-200 cursor-pointer"
          >
            <span>{t.nav.contact}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* Mobile Language Switcher Mini */}
          <div className="flex items-center p-0.5 rounded-full glass-panel text-[11px] font-bold">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => setLanguage(l.code)}
                className={`px-2 py-0.5 rounded-full cursor-pointer ${
                  language === l.code ? 'bg-[#18648a] text-white font-bold' : 'text-muted-foreground'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>

          <button
            onClick={toggleTheme}
            className="w-8 h-8 rounded-full glass-panel flex items-center justify-center text-muted-foreground"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-3.5 h-3.5 text-amber-300" /> : <Moon className="w-3.5 h-3.5 text-cyan-600" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-9 h-9 rounded-xl glass-panel flex items-center justify-center text-foreground cursor-pointer"
            aria-label="Open menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-panel border-b border-white/10 px-6 py-6 mt-2 space-y-4 animate-in fade-in duration-200">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-4 py-2.5 text-sm font-semibold text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-xl transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-white/10">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-xs font-bold text-white bg-[#18648a] shadow-lg shadow-[#18648a]/25"
            >
              <span>{t.nav.contact}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
