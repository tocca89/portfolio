import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Phone, MapPin, Copy, Check, MessageSquare, ArrowUpRight } from 'lucide-react';
import { LinkedinIcon } from './Icons';

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(t.contact.info.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const contactCards = [
    {
      label: t.contact.emailLabel,
      value: t.contact.info.email,
      icon: Mail,
      action: {
        type: 'copy',
        text: copied ? t.contact.copiedEmail : t.contact.copyEmail,
        href: `mailto:${t.contact.info.email}`,
      },
      gradient: 'from-[#18648a]/20 to-cyan-500/20',
      border: 'border-[#18648a]/30',
      iconColor: 'text-cyan-400',
    },
    {
      label: t.contact.phoneLabel,
      value: t.contact.info.phone,
      icon: Phone,
      action: {
        type: 'whatsapp',
        text: t.contact.callWhatsApp,
        href: 'https://wa.me/34644564857',
      },
      gradient: 'from-emerald-500/20 to-teal-500/20',
      border: 'border-emerald-500/30',
      iconColor: 'text-emerald-400',
    },
    {
      label: t.contact.linkedinLabel,
      value: t.contact.info.linkedin,
      icon: LinkedinIcon,
      action: {
        type: 'link',
        text: t.contact.openLinkedIn,
        href: t.contact.info.linkedinUrl,
      },
      gradient: 'from-[#18648a]/20 to-blue-500/20',
      border: 'border-blue-500/30',
      iconColor: 'text-[#56b5df]',
    },
    {
      label: t.contact.locationLabel,
      value: t.contact.info.location,
      icon: MapPin,
      action: null,
      gradient: 'from-[#18648a]/20 to-cyan-500/20',
      border: 'border-[#18648a]/30',
      iconColor: 'text-cyan-300',
    },
  ];

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-24 relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8 }}
        className="glass-panel p-8 sm:p-14 lg:p-16 rounded-[3rem] border border-white/10 dark:border-white/10 relative overflow-hidden"
      >
        {/* Background ambient glowing orbs */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#18648a]/25 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-cyan-600/25 blur-[130px] rounded-full pointer-events-none" />

        <div className="relative z-10 flex flex-col gap-12">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border-[#18648a]/30 text-xs font-semibold text-[#18648a] dark:text-cyan-300">
              <span>{t.contact.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
              {t.contact.title}{' '}
              <span className="text-gradient-primary">{t.contact.subtitle}</span>
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {t.contact.description}
            </p>
          </div>

          {/* Clean Prominent Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            {contactCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className={`glass-panel p-6 sm:p-8 rounded-3xl relative overflow-hidden group hover:${card.border} hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between`}
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${card.gradient} border ${card.border} flex items-center justify-center ${card.iconColor} group-hover:scale-110 transition-transform shadow-md`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground block mb-1">
                          {card.label}
                        </span>
                        <span className="text-base sm:text-lg font-bold text-foreground break-all">
                          {card.value}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Actions Row */}
                  {card.action && (
                    <div className="pt-4 border-t border-white/5 flex flex-wrap items-center gap-3">
                      {card.action.type === 'copy' ? (
                        <>
                          <button
                            onClick={handleCopyEmail}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold glass-panel hover:bg-white/10 hover:border-[#18648a]/40 text-foreground transition-all cursor-pointer"
                          >
                            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-cyan-400" />}
                            <span>{copied ? t.contact.copiedEmail : t.contact.copyEmail}</span>
                          </button>
                          <a
                            href={card.action.href}
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-[#18648a]/15 dark:bg-[#18648a]/35 text-[#18648a] dark:text-cyan-200 border border-[#18648a]/30 dark:border-[#389bc7]/40 hover:bg-[#18648a]/25 dark:hover:bg-[#18648a]/45 transition-all shadow-sm"
                          >
                            <span>{t.contact.openEmail}</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        </>
                      ) : card.action.type === 'whatsapp' ? (
                        <>
                          <a
                            href="https://wa.me/34644564857"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-500 shadow-md shadow-emerald-600/20 transition-all"
                          >
                            <MessageSquare className="w-3.5 h-3.5" />
                            <span>{t.contact.callWhatsApp}</span>
                          </a>
                          <a
                            href="tel:+34644564857"
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold glass-panel text-foreground hover:bg-white/10 transition-all"
                          >
                            <Phone className="w-3.5 h-3.5 text-emerald-400" />
                            <span>{t.contact.callPhone}</span>
                          </a>
                        </>
                      ) : (
                        <a
                          href={card.action.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-bold bg-blue-600 text-white hover:bg-blue-500 shadow-md shadow-blue-600/20 transition-all"
                        >
                          <LinkedinIcon className="w-3.5 h-3.5" />
                          <span>{t.contact.openLinkedIn}</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
