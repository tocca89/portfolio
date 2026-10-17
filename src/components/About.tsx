import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, TrendingUp, Users, Award, Quote, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const { t } = useLanguage();

  const metricsData = [
    {
      value: t.about.metrics.experience.value,
      label: t.about.metrics.experience.label,
      icon: Award,
    },
    {
      value: t.about.metrics.companies.value,
      label: t.about.metrics.companies.label,
      icon: Users,
    },
    {
      value: t.about.metrics.mrr.value,
      label: t.about.metrics.mrr.label,
      icon: TrendingUp,
    },
    {
      value: t.about.metrics.retention.value,
      label: t.about.metrics.retention.label,
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-24 relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-16"
      >
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border-[#18648a]/30 text-xs font-semibold text-[#0c4a6e] dark:text-cyan-300">
            <span>{t.about.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            {t.about.title}{' '}
            <span className="text-gradient-primary">{t.about.titleHighlight}</span>
          </h2>
        </div>

        {/* 2-Column Content: Left = Profile & Philosophy; Right = Key Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Bio & Core Tenets */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-normal">
              {t.about.description1}
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-normal">
              {t.about.description2}
            </p>

            {/* Core Pillars Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {t.about.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl glass-panel border border-[#18648a]/20">
                  <CheckCircle2 className="w-4 h-4 text-[#0c4a6e] dark:text-cyan-300 shrink-0" />
                  <span className="text-xs font-semibold text-foreground/90">{h}</span>
                </div>
              ))}
            </div>

            {/* Quote Card */}
            <div className="glass-panel p-6 rounded-2xl border-l-4 border-l-[#18648a] relative overflow-hidden mt-6 shadow-lg">
              <Quote className="w-8 h-8 text-[#18648a]/20 absolute -bottom-1 right-3 pointer-events-none" />
              <p className="text-sm sm:text-base font-medium text-foreground/90 italic leading-relaxed">
                "{t.about.quote}"
              </p>
              <p className="text-xs font-bold text-[#0c4a6e] dark:text-cyan-300 mt-3 uppercase tracking-wider">
                — Lorenzo Toccaceli
              </p>
            </div>
          </div>

          {/* Right Column: 4 Glowing Metric Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {metricsData.map((m, idx) => {
              const Icon = m.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="glass-panel p-6 rounded-3xl relative overflow-hidden group hover:border-[#18648a]/50 transition-all duration-300 shadow-lg"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#18648a]/15 blur-2xl rounded-full group-hover:bg-[#18648a]/30 transition-all pointer-events-none" />

                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#18648a]/40 to-cyan-500/30 border border-[#18648a]/30 p-[1px] mb-4 shadow-sm group-hover:scale-110 transition-transform">
                    <div className="w-full h-full bg-zinc-900 rounded-[15px] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-cyan-400" />
                    </div>
                  </div>

                  <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-1.5">
                    {m.value}
                  </div>
                  <div className="text-xs font-semibold text-muted-foreground leading-tight">
                    {m.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
