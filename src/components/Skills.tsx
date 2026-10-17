import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Users2, Layers, Sparkles, Building2, Globe2 } from 'lucide-react';

export const Skills: React.FC = () => {
  const { t } = useLanguage();
  const categoryIcons = [Users2, Layers, Sparkles, Building2];

  return (
    <section id="skills" className="max-w-7xl mx-auto px-6 py-24 relative">
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
            <span>{t.skills.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            {t.skills.title}{' '}
            <span className="text-gradient-primary">{t.skills.subtitle}</span>
          </h2>
        </motion.div>

        {/* 4 Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {t.skills.categories.map((cat, idx) => {
            const Icon = categoryIcons[idx % categoryIcons.length];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="glass-panel p-8 rounded-3xl relative overflow-hidden group hover:border-[#18648a]/50 transition-all duration-300 shadow-xl"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#18648a]/40 to-cyan-500/20 border border-[#18648a]/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold tracking-tight text-foreground">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">{cat.description}</p>
                  </div>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2 pt-3">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-white/5 dark:bg-white/5 border border-white/10 text-foreground/90 hover:border-[#389bc7]/50 hover:bg-[#18648a]/15 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Languages Proficiency Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="glass-panel p-8 rounded-3xl border border-[#18648a]/30 relative overflow-hidden shadow-xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#18648a]/20 border border-[#18648a]/30 flex items-center justify-center text-cyan-400">
              <Globe2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">{t.skills.languagesTitle}</h3>
              <p className="text-xs text-muted-foreground">Competenze linguistiche operative sui mercati europei</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.skills.languages.map((l, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white/5 dark:bg-white/5 border border-white/5 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-base text-foreground">{l.lang}</span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#18648a]/15 dark:bg-[#18648a]/35 text-[#0c4a6e] dark:text-cyan-200 border border-[#18648a]/30 dark:border-[#18648a]/50 shadow-sm">
                    {l.level}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{l.detail}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
