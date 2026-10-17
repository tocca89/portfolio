import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const CareerTimeline: React.FC = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 75%', 'end 75%'],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <section id="career" ref={containerRef} className="max-w-7xl mx-auto px-6 py-24 relative">
      <div className="flex flex-col gap-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border-[#18648a]/30 text-xs font-semibold text-[#0c4a6e] dark:text-cyan-300">
            <span>{t.career.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            {t.career.title}{' '}
            <span className="text-gradient-primary">{t.career.subtitle}</span>
          </h2>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Static Background Vertical Track */}
          <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-white/10 dark:bg-white/10" />

          {/* Dynamic Scroll-Driven Animated Fill Line in #18648a */}
          <motion.div
            style={{ scaleY, transformOrigin: 'top' }}
            className="hidden lg:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-1 rounded-full bg-gradient-to-b from-[#18648a] via-[#389bc7] to-cyan-400 shadow-[0_0_15px_rgba(56,181,223,0.7)]"
          />

          <div className="space-y-12">
            {t.career.items.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`relative flex flex-col lg:flex-row items-center ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Central Node */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-zinc-950 border-2 border-[#18648a] items-center justify-center z-10 shadow-lg shadow-[#18648a]/40 hover:scale-110 transition-transform"
                  >
                    <Briefcase className="w-4 h-4 text-cyan-400" />
                  </motion.div>

                  {/* Card Container */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, delay: idx * 0.1 }}
                    className="w-full lg:w-[46%]"
                  >
                    <div className="glass-panel p-6 sm:p-8 rounded-3xl relative overflow-hidden group hover:border-[#18648a]/50 hover:-translate-y-1 transition-all duration-300 shadow-xl hover:shadow-[#18648a]/15">
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#18648a]/15 dark:bg-[#18648a]/35 border border-[#18648a]/30 dark:border-[#18648a]/50 text-[#0c4a6e] dark:text-cyan-200 shadow-sm">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{item.period}</span>
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground font-medium">
                          <MapPin className="w-3.5 h-3.5 text-[#0c4a6e] dark:text-cyan-400" />
                          <span>{item.location}</span>
                        </span>
                      </div>

                      {/* Role & Company */}
                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-1 group-hover:text-cyan-400 transition-colors">
                        {item.role}
                      </h3>
                      <p className="text-sm font-bold text-[#0c4a6e] dark:text-cyan-300 mb-4">
                        {item.company}
                      </p>

                      <p className="text-sm text-muted-foreground leading-relaxed mb-5 font-normal">
                        {item.description}
                      </p>

                      {/* Milestone Launch Visual */}
                      {item.image && (
                        <div className="w-full h-48 sm:h-60 rounded-2xl overflow-hidden mb-5 border border-[#18648a]/30 relative group/img shadow-md">
                          <img
                            src={item.image}
                            alt={item.company}
                            style={{ objectPosition: 'center 66%' }}
                            className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                            loading="lazy"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = '/takeoff-espana.jpg';
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/20 to-transparent pointer-events-none" />
                        </div>
                      )}

                      {/* Key Achievements */}
                      <div className="space-y-2.5 pt-3 border-t border-white/5">
                        {item.achievements.map((ach, aIdx) => (
                          <div key={aIdx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                            <span className="text-xs sm:text-sm font-medium text-foreground/90">
                              {ach}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
