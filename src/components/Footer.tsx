import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useMobilePagination } from '../context/MobilePaginationContext';
import { ArrowUp, Mail, Phone } from 'lucide-react';
import { LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const { isMobile, isPaginated, goToPage } = useMobilePagination();

  const scrollToTop = () => {
    if (isMobile && isPaginated) {
      goToPage(0);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full border-t border-white/10 dark:border-white/10 bg-black/20 dark:bg-black/40 backdrop-blur-xl py-16 relative z-10 pb-24 md:pb-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-10">
        {/* Top Callout Box with Template Aurora Animated Gradients */}
        <div className="py-14 px-6 rounded-3xl bg-white/[0.02] dark:bg-white/[0.02] border border-[#18648a]/30 text-center flex flex-col items-center justify-center my-2 shadow-2xl relative overflow-hidden">
          {/* 4 Animated Aurora Blobs */}
          <div className="absolute inset-0 z-0 mix-blend-screen dark:mix-blend-lighten pointer-events-none opacity-40">
            <div
              className="absolute w-[50vw] h-[50vw] rounded-[37%_29%_27%_27%/28%_25%_41%_37%] bg-cyan-500/30 blur-2xl filter"
              style={{
                animationName: 'aurora-border, aurora-1',
                animationDuration: '6s, 10s',
                animationTimingFunction: 'ease-in-out, ease-in-out',
                animationIterationCount: 'infinite, infinite',
                animationDirection: 'normal, alternate',
              }}
            />
            <div
              className="absolute w-[50vw] h-[50vw] rounded-[37%_29%_27%_27%/28%_25%_41%_37%] bg-[#18648a]/40 blur-2xl filter"
              style={{
                animationName: 'aurora-border, aurora-2',
                animationDuration: '6s, 12s',
                animationTimingFunction: 'ease-in-out, ease-in-out',
                animationIterationCount: 'infinite, infinite',
                animationDirection: 'normal, alternate',
              }}
            />
            <div
              className="absolute w-[50vw] h-[50vw] rounded-[37%_29%_27%_27%/28%_25%_41%_37%] bg-sky-400/30 blur-2xl filter"
              style={{
                animationName: 'aurora-border, aurora-3',
                animationDuration: '6s, 8s',
                animationTimingFunction: 'ease-in-out, ease-in-out',
                animationIterationCount: 'infinite, infinite',
                animationDirection: 'normal, alternate',
              }}
            />
            <div
              className="absolute w-[50vw] h-[50vw] rounded-[37%_29%_27%_27%/28%_25%_41%_37%] bg-[#2082b0]/40 blur-2xl filter"
              style={{
                animationName: 'aurora-border, aurora-4',
                animationDuration: '6s, 11s',
                animationTimingFunction: 'ease-in-out, ease-in-out',
                animationIterationCount: 'infinite, infinite',
                animationDirection: 'normal, alternate',
              }}
            />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0c4a6e] dark:text-cyan-200 mb-3 bg-[#18648a]/15 dark:bg-[#18648a]/35 px-4 py-1.5 rounded-full border border-[#18648a]/30 dark:border-[#18648a]/50 shadow-sm">
              Empower & Retain
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl text-foreground font-extrabold text-center max-w-3xl tracking-tight">
              Customer Success & Revenue Growth
            </h2>
          </div>
        </div>

        {/* Copyright & Links Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-white/5">
          <p className="text-xs text-muted-foreground font-medium">
            © {new Date().getFullYear()} Lorenzo Toccaceli. {t.footer.allRightsReserved}
          </p>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com/in/lt89"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full glass-panel text-muted-foreground hover:text-cyan-400 hover:border-[#18648a]/50 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:lorenzo.toccaceli@gmail.com"
              className="p-2.5 rounded-full glass-panel text-muted-foreground hover:text-cyan-400 hover:border-[#18648a]/50 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="tel:+34644564857"
              className="p-2.5 rounded-full glass-panel text-muted-foreground hover:text-cyan-400 hover:border-[#18648a]/50 transition-colors"
              aria-label="Phone"
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-full glass-panel text-xs font-semibold text-muted-foreground hover:text-foreground cursor-pointer transition-colors border border-white/10 hover:border-[#18648a]/40"
            >
              <span>{t.footer.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
