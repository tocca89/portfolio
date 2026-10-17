import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Compass, TrendingUp, Workflow, HeartHandshake } from 'lucide-react';

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

        {/* 4 Cards Grid */}
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
                whileHover={{ y: -6 }}
                className="glass-panel p-8 rounded-3xl relative overflow-hidden group hover:border-[#18648a]/50 transition-all duration-300 flex flex-col justify-between shadow-xl"
              >
                {/* Background glow */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-[#18648a]/15 blur-3xl rounded-full group-hover:bg-[#18648a]/30 transition-all pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#18648a] to-cyan-500 p-[1px] shadow-md group-hover:scale-110 transition-transform">
                      <div className="w-full h-full bg-zinc-950 rounded-[15px] flex items-center justify-center">
                        <Icon className="w-6 h-6 text-cyan-400" />
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-muted-foreground/60">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-3 group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/5 dark:bg-white/5 text-foreground/80 border border-white/5"
                    >
                      {tag}
                    </span>
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
