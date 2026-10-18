import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Compass, TrendingUp, Workflow, HeartHandshake } from 'lucide-react';
import { MagicCard } from './MagicCard';

export const Services: React.FC = () => {
  const { t } = useLanguage();
  const serviceIcons = [Compass, TrendingUp, Workflow, HeartHandshake];

  return (
    <section id="services" className="max-w-7xl mx-auto px-6 py-24 relative">
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
            <span>{t.services.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            {t.services.title}{' '}
            <span className="text-gradient-primary">{t.services.subtitle}</span>
          </h2>
        </motion.div>

        {/* 4 Cards Grid with dynamic mouse-following color spotlight */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {t.services.items.map((item, idx) => {
            const Icon = serviceIcons[idx % serviceIcons.length];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="h-full"
              >
                <MagicCard className="h-full" gradientSize={300}>
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      {/* Luminous cyan icon box from screenshot */}
                      <div className="w-14 h-14 rounded-2xl border-2 border-cyan-400/90 bg-cyan-950/50 backdrop-blur-md flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.3)] group-hover:scale-105 group-hover:border-cyan-300 group-hover:shadow-[0_0_28px_rgba(34,211,238,0.5)] transition-all">
                        <Icon className="w-6 h-6 text-cyan-400 dark:text-cyan-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
                      </div>
                      <span className="text-xs font-mono font-bold text-zinc-500 dark:text-cyan-200/80">
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-cyan-600 dark:text-cyan-300 group-hover:text-cyan-500 dark:group-hover:text-cyan-200 mb-3 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-sm sm:text-base text-zinc-700 dark:text-slate-100 leading-relaxed mb-6 font-normal">
                      {item.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-cyan-500/15 dark:border-white/15">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-cyan-950/20 dark:bg-white/10 text-zinc-800 dark:text-slate-100 border border-cyan-900/25 dark:border-white/20 group-hover:border-cyan-400/40 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </MagicCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
