import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { ArrowUpRight, CheckCircle2, TrendingUp, X } from 'lucide-react';

export const Projects: React.FC = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const activeProject = t.projects.items.find((p) => p.id === selectedProject);

  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-24 relative">
      <div className="flex flex-col gap-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border-[#18648a]/30 text-xs font-semibold text-[#18648a] dark:text-cyan-300">
            <span>{t.projects.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            {t.projects.title}{' '}
            <span className="text-gradient-primary">{t.projects.subtitle}</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {t.projects.items.map((project, idx) => {
            const colSpan = idx === 0 || idx === 3 ? 'md:col-span-7' : 'md:col-span-5';

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedProject(project.id)}
                className={`${colSpan} glass-panel rounded-3xl overflow-hidden group cursor-pointer hover:border-[#18648a]/50 hover:shadow-2xl hover:shadow-[#18648a]/20 transition-all duration-300 flex flex-col justify-between relative`}
              >
                {/* Image Header with Gradient Overlay */}
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{ objectPosition: project.id === 'takeoff-spain' ? 'center 66%' : 'center' }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/takeoff-espana.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

                  {/* Highlight pill */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs font-bold text-white shadow-lg">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{project.highlight}</span>
                  </div>

                  {/* Top-Right Arrow button */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-[#18648a] group-hover:scale-110 transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono font-bold text-[#0c4a6e] dark:text-cyan-300 tracking-wider uppercase mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-2 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-white/5 text-foreground/80 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal Detail */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
              className="glass-panel w-full max-w-2xl rounded-3xl p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto border border-[#18648a]/40 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 w-9 h-9 rounded-full glass-panel flex items-center justify-center text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image Banner in Modal */}
              {activeProject.image && (
                <div className="w-full h-56 sm:h-72 rounded-2xl overflow-hidden mb-6 relative border border-[#18648a]/30 shadow-lg">
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    style={{ objectPosition: activeProject.id === 'takeoff-spain' ? 'center 66%' : 'center' }}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/takeoff-espana.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
                </div>
              )}

              <span className="text-xs font-mono font-bold text-[#18648a] dark:text-cyan-300 tracking-wider uppercase mb-2 block">
                {activeProject.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-2">
                {activeProject.title}
              </h3>
              <p className="text-sm font-semibold text-[#18648a] dark:text-cyan-300 mb-6">
                {activeProject.subtitle}
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                    {language === 'it' ? 'Panoramica & Strategia' : language === 'es' ? 'Resumen y Estrategia' : 'Overview & Strategy'}
                  </h4>
                  <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">
                    {activeProject.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                    {language === 'it' ? 'Risultati Chiave Raggiunti' : language === 'es' ? 'Resultados Clave Obtenidos' : 'Key Results Achieved'}
                  </h4>
                  <div className="space-y-2.5">
                    {activeProject.results.map((res, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-3 p-3 rounded-xl glass-panel border border-[#18648a]/20">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                        <span className="text-xs sm:text-sm font-medium text-foreground">
                          {res}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {activeProject.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-xs font-bold bg-[#18648a]/15 dark:bg-[#18648a]/35 border border-[#18648a]/30 dark:border-[#18648a]/50 text-[#0c4a6e] dark:text-cyan-200 shadow-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
