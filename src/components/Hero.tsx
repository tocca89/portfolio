import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useMobilePagination } from '../context/MobilePaginationContext';
import { PendulumBadge } from './PendulumBadge';
import { ArrowRight, Mail, Phone, MapPin, Sparkles } from 'lucide-react';
import { LinkedinIcon } from './Icons';

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  const { isMobile, isPaginated, goToSection } = useMobilePagination();
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % t.hero.roles.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [t.hero.roles.length]);

  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-[92vh] flex flex-col pt-24 md:pt-32 pb-16 overflow-hidden"
    >
      {/* Background Dot Pattern with Ambient #18648a Glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg className="w-full h-full opacity-25 dark:opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-pattern" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.2" className="fill-[#18648a]/70 dark:fill-[#389bc7]/50" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-pattern)" />
        </svg>

        {/* Ambient Radial Blur Glows */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#18648a]/20 dark:bg-[#18648a]/30 blur-[150px] rounded-full" />
        <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-[#2082b0]/20 dark:bg-[#2082b0]/25 blur-[130px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex-1 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Left Column: Value Proposition & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 max-w-2xl text-center lg:text-left space-y-6"
        >
          {/* Availability Pill */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass-panel border-[#18648a]/40 text-xs font-semibold text-cyan-400 dark:text-cyan-300 shadow-sm animate-pulse">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/50" />
            <span>{t.hero.availableBadge}</span>
          </div>

          {/* Heading with Name & Rotating Roles */}
          <div className="space-y-2">
            <p className="text-base sm:text-lg font-medium text-muted-foreground">
              {t.hero.greeting}
            </p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1]">
              <span className="text-gradient-primary">{t.hero.name}</span>
            </h1>

            {/* Smooth animated text morph with blur */}
            <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start overflow-hidden relative">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                  className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground/90 tracking-tight"
                >
                  {t.hero.roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* Bio Summary */}
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-normal">
            {t.hero.bio}
          </p>

          {/* Quick Info Badges */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-muted-foreground pt-1">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full glass-panel border-[#18648a]/30">
              <MapPin className="w-3.5 h-3.5 text-[#0c4a6e] dark:text-cyan-400" />
              <span>{t.contact.info.location}</span>
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full glass-panel border-[#18648a]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#0c4a6e] dark:text-cyan-400" />
              <span>B2B SaaS • Onboarding • MRR Growth</span>
            </span>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
            <a
              href="#contact"
              onClick={(e) => {
                if (isMobile && isPaginated) {
                  e.preventDefault();
                  goToSection('contact');
                }
              }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-[#18648a] via-[#2082b0] to-[#18648a] bg-[length:200%_auto] hover:bg-right hover:scale-105 transition-all duration-300 shadow-xl shadow-[#18648a]/40 cursor-pointer"
            >
              <span>{t.hero.ctaContact}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#projects"
              onClick={(e) => {
                if (isMobile && isPaginated) {
                  e.preventDefault();
                  goToSection('projects');
                }
              }}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-semibold text-foreground glass-panel hover:bg-white/10 dark:hover:bg-white/10 hover:border-[#389bc7]/40 hover:scale-105 transition-all duration-200 cursor-pointer"
            >
              <span>{t.hero.ctaProjects}</span>
            </a>
          </div>

          {/* Social Action Icons - LinkedIn, Mail, Phone in plain icons (NO plaintext email) */}
          <div className="pt-2 flex items-center justify-center lg:justify-start gap-3">
            <a
              href="https://linkedin.com/in/lt89"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl glass-panel text-muted-foreground hover:text-cyan-400 hover:border-[#18648a]/50 hover:scale-110 transition-all duration-200 shadow-md cursor-pointer"
              aria-label="LinkedIn profile"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href="mailto:lorenzo.toccaceli@gmail.com"
              className="p-3 rounded-2xl glass-panel text-muted-foreground hover:text-cyan-400 hover:border-[#18648a]/50 hover:scale-110 transition-all duration-200 shadow-md cursor-pointer"
              aria-label="Send email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="tel:+34644564857"
              className="p-3 rounded-2xl glass-panel text-muted-foreground hover:text-cyan-400 hover:border-[#18648a]/50 hover:scale-110 transition-all duration-200 shadow-md cursor-pointer"
              aria-label="Call or WhatsApp"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Physical Interactive Pendulum Lanyard Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-1 flex flex-col items-center justify-center relative w-full lg:max-w-md"
        >
          <PendulumBadge
            name={t.hero.name}
            role={t.hero.badgeRole}
            badgeId={t.hero.badgeId}
            photoUrl="/lorenzo.jpeg"
            accentColor="#18648a"
            ropeColor="#0e2534"
            ropeLength={115}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};
