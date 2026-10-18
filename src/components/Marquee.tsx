import React from 'react';
import {
  Layers,
  Cpu,
  Workflow,
  Sparkles,
  Database,
  BarChart3,
  ShieldCheck,
  TrendingUp,
  Globe2,
  Users2,
  Share2,
  Cloud,
} from 'lucide-react';

export const Marquee: React.FC = () => {
  const items = [
    { name: 'TakeOff CRM', icon: Layers, color: 'text-cyan-400' },
    { name: 'n8n & Make Automation', icon: Workflow, color: 'text-amber-400' },
    { name: 'Customer Onboarding', icon: Users2, color: 'text-emerald-400' },
    { name: 'Account Expansion & Upselling', icon: TrendingUp, color: 'text-green-400' },
    { name: 'Google Antigravity & AI', icon: Sparkles, color: 'text-cyan-400' },
    { name: 'Claude Code & LLMs', icon: Cpu, color: 'text-rose-400' },
    { name: 'ISO 9001 Quality Systems', icon: ShieldCheck, color: 'text-blue-400' },
    { name: 'API & Webhooks', icon: Share2, color: 'text-sky-400' },
    { name: 'SQL & Data Analysis', icon: Database, color: 'text-orange-400' },
    { name: 'Power BI & Dashboards', icon: BarChart3, color: 'text-yellow-400' },
    { name: 'Cloudflare & Vercel', icon: Cloud, color: 'text-teal-400' },
    { name: 'Multilingual Operations', icon: Globe2, color: 'text-sky-300' },
  ];

  return (
    <div className="w-full py-6 border-y border-white/10 dark:border-white/10 bg-black/10 dark:bg-black/30 backdrop-blur-sm overflow-hidden relative">
      {/* Side gradient fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      {/* Infinite scrolling ticker */}
      <div className="animate-marquee flex items-center gap-4 whitespace-nowrap">
        {[...items, ...items, ...items].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border-white/5 hover:border-[#18648a]/50 hover:scale-105 transition-all duration-200 cursor-default"
            >
              <Icon className={`w-4 h-4 ${item.color}`} />
              <span className="text-xs font-semibold text-foreground/90">{item.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
