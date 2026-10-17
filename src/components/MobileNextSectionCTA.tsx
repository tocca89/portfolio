import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useMobilePagination } from '../context/MobilePaginationContext';
import { ArrowRight, Sparkles } from 'lucide-react';

interface MobileNextSectionCTAProps {
  nextPageIndex: number;
  label?: string;
}

export const MobileNextSectionCTA: React.FC<MobileNextSectionCTAProps> = ({ nextPageIndex, label }) => {
  const { language, t } = useLanguage();
  const { isMobile, isPaginated, goToPage, totalPages } = useMobilePagination();

  if (!isMobile || !isPaginated || nextPageIndex >= totalPages) return null;

  const getDefaultTitle = () => {
    switch (nextPageIndex) {
      case 1:
        return t.nav.about;
      case 2:
        return t.nav.services;
      case 3:
        return t.nav.skills;
      case 4:
        return t.nav.projects;
      case 5:
        return `${t.nav.career} & ${t.nav.education}`;
      case 6:
        return t.nav.contact;
      default:
        return '';
    }
  };

  const targetLabel = label || getDefaultTitle();
  const headingPrompt =
    language === 'it'
      ? 'Continua a esplorare'
      : language === 'es'
      ? 'Continúa explorando'
      : 'Continue exploring';

  return (
    <div className="md:hidden pt-8 pb-20 px-6">
      <motion.div
        whileTap={{ scale: 0.98 }}
        onClick={() => goToPage(nextPageIndex)}
        className="glass-panel p-5 rounded-3xl border border-[#18648a]/35 shadow-xl bg-gradient-to-r from-[#18648a]/15 via-[#2082b0]/10 to-transparent flex items-center justify-between cursor-pointer group active:border-cyan-400"
      >
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-2xl bg-[#18648a] flex items-center justify-center text-white shadow-md shadow-[#18648a]/40 group-hover:scale-105 transition-transform">
            <Sparkles className="w-5 h-5 text-cyan-200" />
          </div>
          <div>
            <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">
              {headingPrompt}
            </p>
            <p className="text-base font-extrabold text-foreground group-hover:text-cyan-400 transition-colors">
              {targetLabel}
            </p>
          </div>
        </div>

        <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all">
          <ArrowRight className="w-4 h-4" />
        </div>
      </motion.div>
    </div>
  );
};
