import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { GraduationCap, Award, Sparkles, BookOpen, CheckCircle2 } from 'lucide-react';

export const Education: React.FC = () => {
  const { t } = useLanguage();
  const icons = [GraduationCap, Sparkles, Award, BookOpen];

  return (
    <section id="education" className="max-w-7xl mx-auto px-6 py-24 relative">
      <div className="flex flex-col gap-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border-[#18648a]/30 text-xs font-semibold text-[#0c4a6e] dark:text-cyan-300">
            <span>{t.education.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            {t.education.title}{' '}
            <span className="text-gradient-primary">{t.education.subtitle}</span>
          </h2>
        </motion.div>

        {/* Education & Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {t.education.items.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass-panel p-8 rounded-3xl relative overflow-hidden group hover:border-[#18648a]/50 transition-all duration-300 flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#18648a]/20 to-cyan-500/20 border border-[#18648a]/30 flex items-center justify-center text-[#0c4a6e] dark:text-cyan-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#18648a]/15 dark:bg-[#18648a]/35 border border-[#18648a]/30 dark:border-[#18648a]/50 text-[#0c4a6e] dark:text-cyan-200 shadow-sm">
                      {item.period}
                    </span>
                  </div>

                  <span className="text-xs font-bold text-[#0c4a6e] dark:text-cyan-300 uppercase tracking-wider block mb-1">
                    {item.badge}
                  </span>
                  <h3 className="text-xl font-bold tracking-tight text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm font-semibold text-muted-foreground mb-4">
                    {item.institution}
                  </p>
                </div>

                {/* Highlights */}
                <div className="space-y-2 pt-4 border-t border-white/5">
                  {item.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                      <span className="text-xs text-foreground/80 font-medium">{h}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
