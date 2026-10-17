import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useMobilePagination, PAGES } from '../context/MobilePaginationContext';
import {
  ChevronLeft,
  ChevronRight,
  Home,
  User,
  Compass,
  Sparkles,
  FolderGit2,
  Briefcase,
  Mail,
  X,
  Layers,
  ScrollText,
} from 'lucide-react';

export const MobilePager: React.FC = () => {
  const { language, t } = useLanguage();
  const {
    isMobile,
    isPaginated,
    currentPage,
    goToPage,
    nextPage,
    prevPage,
    totalPages,
    togglePaginated,
  } = useMobilePagination();

  const [sheetOpen, setSheetOpen] = useState(false);

  if (!isMobile) return null;

  const pageIcons = [Home, User, Compass, Sparkles, FolderGit2, Briefcase, Mail];

  const getPageTitle = (index: number) => {
    switch (index) {
      case 0:
        return t.nav.home;
      case 1:
        return t.nav.about;
      case 2:
        return t.nav.services;
      case 3:
        return t.nav.skills;
      case 4:
        return t.nav.projects;
      case 5:
        return t.nav.career;
      case 6:
        return t.nav.contact;
      default:
        return '';
    }
  };

  const labelPrevious = language === 'it' ? 'Indietro' : language === 'es' ? 'Anterior' : 'Back';
  const labelNext = language === 'it' ? 'Avanti' : language === 'es' ? 'Siguiente' : 'Next';
  const labelPages = language === 'it' ? 'Sezioni del Portfolio' : language === 'es' ? 'Secciones del Portafolio' : 'Portfolio Sections';
  const labelModePaginated = language === 'it' ? 'Passa a scorrimento continuo' : language === 'es' ? 'Cambiar a vista continua' : 'Switch to continuous scroll';
  const labelModeContinuous = language === 'it' ? 'Passa a vista paginata' : language === 'es' ? 'Cambiar a vista paginada' : 'Switch to paginated view';

  return (
    <>
      {/* Floating Bottom Navigation Bar */}
      <div className="fixed bottom-3 inset-x-3 z-40 md:hidden pointer-events-none pb-[env(safe-area-inset-bottom)]">
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="pointer-events-auto max-w-md mx-auto rounded-2xl glass-panel bg-zinc-950/90 dark:bg-zinc-950/95 border border-[#18648a]/40 shadow-2xl p-1.5 flex items-center justify-between backdrop-blur-2xl"
        >
          {isPaginated ? (
            <>
              {/* Prev Button */}
              <button
                onClick={prevPage}
                disabled={currentPage === 0}
                className={`p-2 rounded-xl transition-all flex items-center justify-center cursor-pointer ${
                  currentPage === 0
                    ? 'opacity-30 cursor-not-allowed text-zinc-500'
                    : 'text-zinc-200 hover:text-white hover:bg-white/10 active:scale-95'
                }`}
                aria-label={labelPrevious}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Center Page Pill & Indicator */}
              <button
                onClick={() => setSheetOpen(true)}
                className="flex-1 mx-1.5 py-1.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 active:bg-white/15 transition-all text-center flex flex-col items-center justify-center cursor-pointer border border-white/5"
              >
                <div className="flex items-center gap-1.5 text-xs font-bold text-foreground">
                  <span className="text-[#389bc7] font-mono">{currentPage + 1}/{totalPages}</span>
                  <span className="text-zinc-500">•</span>
                  <span className="truncate max-w-[150px]">{getPageTitle(currentPage)}</span>
                </div>

                {/* 7 Micro Dot Stepper */}
                <div className="flex items-center gap-1 mt-1">
                  {PAGES.map((_, idx) => (
                    <span
                      key={idx}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        idx === currentPage
                          ? 'w-4 bg-cyan-400 shadow-sm shadow-cyan-400/50'
                          : 'w-1 bg-zinc-600'
                      }`}
                    />
                  ))}
                </div>
              </button>

              {/* Next Button */}
              <button
                onClick={nextPage}
                disabled={currentPage === totalPages - 1}
                className={`p-2 rounded-xl transition-all flex items-center justify-center cursor-pointer ${
                  currentPage === totalPages - 1
                    ? 'opacity-30 cursor-not-allowed text-zinc-500'
                    : 'text-zinc-200 hover:text-white hover:bg-white/10 active:scale-95 text-cyan-400'
                }`}
                aria-label={labelNext}
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* View Mode Toggle: Paginated vs Continuous */}
              <button
                onClick={togglePaginated}
                title={labelModePaginated}
                className="p-2 ml-0.5 rounded-xl text-zinc-400 hover:text-white hover:bg-white/10 active:scale-95 transition-all cursor-pointer"
                aria-label={labelModePaginated}
              >
                <ScrollText className="w-4 h-4" />
              </button>
            </>
          ) : (
            /* Continuous scroll toolbar on mobile */
            <div className="w-full flex items-center justify-between px-3 py-1">
              <span className="text-xs font-semibold text-muted-foreground flex items-center gap-2">
                <ScrollText className="w-4 h-4 text-cyan-400" />
                {language === 'it' ? 'Scorrimento continuo attivo' : language === 'es' ? 'Desplazamiento continuo' : 'Continuous scroll active'}
              </span>
              <button
                onClick={togglePaginated}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-bold bg-[#18648a] text-white shadow-md active:scale-95 transition-all cursor-pointer"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>{language === 'it' ? 'Modalità Paginata' : language === 'es' ? 'Modo Paginado' : 'Paginated Mode'}</span>
              </button>
            </div>
          )}
        </motion.div>
      </div>

      {/* Drawer / Bottom Sheet for Quick Section Jumps on Mobile */}
      <AnimatePresence>
        {sheetOpen && (
          <div className="fixed inset-0 z-50 md:hidden flex flex-col justify-end">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSheetOpen(false)}
              className="absolute inset-0 bg-black/75 backdrop-blur-sm"
            />

            {/* Sheet Card */}
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 280 }}
              className="relative z-10 rounded-t-3xl glass-panel bg-zinc-950/95 border-t border-white/15 p-6 max-h-[80vh] overflow-y-auto pb-[calc(env(safe-area-inset-bottom)+1.5rem)]"
            >
              {/* Handle Bar */}
              <div className="w-12 h-1.5 rounded-full bg-zinc-700 mx-auto mb-4" />

              <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/10">
                <h3 className="text-base font-bold text-foreground flex items-center gap-2">
                  <Layers className="w-4 h-4 text-cyan-400" />
                  <span>{labelPages}</span>
                </h3>
                <button
                  onClick={() => setSheetOpen(false)}
                  className="w-8 h-8 rounded-full glass-panel flex items-center justify-center text-zinc-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Section List */}
              <div className="space-y-2">
                {PAGES.map((page, idx) => {
                  const Icon = pageIcons[idx] || Sparkles;
                  const isCurrent = idx === currentPage;

                  return (
                    <button
                      key={page.id}
                      onClick={() => {
                        goToPage(idx);
                        setSheetOpen(false);
                      }}
                      className={`w-full flex items-center justify-between p-3.5 rounded-2xl transition-all cursor-pointer ${
                        isCurrent
                          ? 'bg-[#18648a]/30 border border-[#389bc7]/50 text-white shadow-md shadow-[#18648a]/20'
                          : 'bg-white/5 hover:bg-white/10 text-zinc-300 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                            isCurrent
                              ? 'bg-gradient-to-tr from-[#18648a] to-cyan-500 text-white shadow-md'
                              : 'bg-zinc-800 text-zinc-400'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="text-left">
                          <p className="text-sm font-bold">{getPageTitle(idx)}</p>
                          <p className="text-[11px] text-zinc-400 font-mono">
                            {language === 'it' ? `Sezione ${idx + 1} di 7` : language === 'es' ? `Sección ${idx + 1} de 7` : `Section ${idx + 1} of 7`}
                          </p>
                        </div>
                      </div>

                      {isCurrent && (
                        <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-md shadow-cyan-400/80" />
                      )}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
