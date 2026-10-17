import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { GraduationCap, Sparkles, BookOpen, CheckCircle2, Award } from 'lucide-react';

export const Education: React.FC = () => {
  const { language, t } = useLanguage();

  // Academic degrees: Degree in Business Administration (idx 0) & Diploma in Accounting/IT (idx 3)
  const academicItems = [
    { item: t.education.items[0], icon: GraduationCap },
    { item: t.education.items[3], icon: BookOpen },
  ];

  // Professional continuous learning & AI courses: CEINPRO (idx 1) & EOI (idx 2)
  const certificationItems = [
    { item: t.education.items[1], icon: Sparkles },
    { item: t.education.items[2], icon: Award },
  ];

  const academicSubtitle =
    language === 'it'
      ? 'Titoli di studio universitari e diploma di scuola superiore'
      : language === 'es'
      ? 'Titulaciones universitarias y estudios de educación secundaria'
      : 'University degree and secondary education';

  const certificationsSubtitle =
    language === 'it'
      ? 'Corsi applicati in intelligenza artificiale, automazione flussi e prompt engineering'
      : language === 'es'
      ? 'Formación práctica en inteligencia artificial aplicada y automatización de flujos'
      : 'Hands-on courses in applied AI, workflow automation, and agentic solutions';

  return (
    <section id="education" className="max-w-7xl mx-auto px-6 py-24 relative">
      <div className="flex flex-col gap-16">
        {/* Main Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border-[#18648a]/30 text-xs font-semibold text-[#18648a] dark:text-cyan-300">
            <span>{t.education.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            {t.education.title}{' '}
            <span className="text-gradient-primary">{t.education.subtitle}</span>
          </h2>
        </motion.div>

        {/* Section 1: Academic Background & Degrees */}
        <div className="space-y-6">
          <div className="flex items-center gap-3.5 pb-2 border-b border-white/10 dark:border-white/10">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#18648a]/30 to-cyan-500/20 border border-[#18648a]/40 flex items-center justify-center text-[#18648a] dark:text-cyan-300 shadow-sm">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                {t.education.academicTitle}
              </h3>
              <p className="text-xs text-muted-foreground">{academicSubtitle}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {academicItems.map(({ item, icon: Icon }, idx) => (
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
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#18648a]/20 to-cyan-500/20 border border-[#18648a]/30 flex items-center justify-center text-[#18648a] dark:text-cyan-300 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#18648a]/15 dark:bg-[#18648a]/40 border border-[#18648a]/30 dark:border-[#389bc7]/40 text-[#18648a] dark:text-cyan-200 shadow-sm">
                      {item.period}
                    </span>
                  </div>

                  <span className="text-xs font-bold text-[#18648a] dark:text-cyan-300 uppercase tracking-wider block mb-1">
                    {item.badge}
                  </span>
                  <h4 className="text-xl font-bold tracking-tight text-foreground mb-1.5">
                    {item.title}
                  </h4>
                  <p className="text-sm font-semibold text-muted-foreground mb-4">
                    {item.institution}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-white/5">
                  {item.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-500 dark:text-cyan-300 mt-0.5 shrink-0" />
                      <span className="text-xs text-foreground/85 font-medium">{h}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 2: Specialized Courses & AI Certifications */}
        <div className="space-y-6 pt-4">
          <div className="flex items-center gap-3.5 pb-2 border-b border-white/10 dark:border-white/10">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#18648a]/30 to-cyan-500/20 border border-[#18648a]/40 flex items-center justify-center text-[#18648a] dark:text-cyan-300 shadow-sm">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                {t.education.certificationsTitle}
              </h3>
              <p className="text-xs text-muted-foreground">{certificationsSubtitle}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {certificationItems.map(({ item, icon: Icon }, idx) => (
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
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#18648a]/20 to-cyan-500/20 border border-[#18648a]/30 flex items-center justify-center text-[#18648a] dark:text-cyan-300 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#18648a]/15 dark:bg-[#18648a]/40 border border-[#18648a]/30 dark:border-[#389bc7]/40 text-[#18648a] dark:text-cyan-200 shadow-sm">
                      {item.period}
                    </span>
                  </div>

                  <span className="text-xs font-bold text-[#18648a] dark:text-cyan-300 uppercase tracking-wider block mb-1">
                    {item.badge}
                  </span>
                  <h4 className="text-xl font-bold tracking-tight text-foreground mb-1.5">
                    {item.title}
                  </h4>
                  <p className="text-sm font-semibold text-muted-foreground mb-4">
                    {item.institution}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-white/5">
                  {item.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-500 dark:text-cyan-300 mt-0.5 shrink-0" />
                      <span className="text-xs text-foreground/85 font-medium">{h}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
