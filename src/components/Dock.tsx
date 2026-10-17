import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, MotionValue } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import {
  Home,
  User,
  Compass,
  Sparkles,
  FolderGit2,
  Briefcase,
  GraduationCap,
  Mail,
  Sun,
  Moon,
  Globe,
} from 'lucide-react';

interface DockItemProps {
  mouseX: MotionValue<number>;
  id: string;
  label: string;
  icon: React.ElementType;
  onClick: () => void;
}

const DockItem: React.FC<DockItemProps> = ({ mouseX, label, icon: Icon, onClick }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const sizeTransform = useTransform(distance, [-140, 0, 140], [42, 66, 42]);
  const size = useSpring(sizeTransform, { mass: 0.1, stiffness: 180, damping: 14 });

  const iconSizeTransform = useTransform(distance, [-140, 0, 140], [18, 28, 18]);
  const iconSize = useSpring(iconSizeTransform, { mass: 0.1, stiffness: 180, damping: 14 });

  return (
    <div className="relative flex flex-col items-center">
      {/* Tooltip */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 6 }}
          transition={{ duration: 0.15 }}
          className="absolute -top-10 px-2.5 py-1 rounded-md bg-zinc-900 border border-white/20 text-[11px] font-semibold text-white whitespace-nowrap shadow-xl pointer-events-none z-50"
        >
          {label}
        </motion.div>
      )}

      <motion.div
        ref={ref}
        style={{ width: size, height: size }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
        className="rounded-full flex items-center justify-center cursor-pointer transition-colors duration-150 text-zinc-300 hover:text-white hover:bg-white/10 glass-panel shadow-md border border-white/10 hover:border-[#389bc7]/50"
        role="button"
        tabIndex={0}
      >
        <motion.div style={{ width: iconSize, height: iconSize }} className="flex items-center justify-center">
          <Icon className="w-full h-full" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Dock: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const mouseX = useMotionValue(Infinity);
  const [showDock, setShowDock] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y > window.innerHeight * 0.35) {
        setShowDock(true);
      } else {
        setShowDock(false);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const dockItems = [
    { id: 'hero', icon: Home, label: t.nav.home },
    { id: 'about', icon: User, label: t.nav.about },
    { id: 'services', icon: Compass, label: t.nav.services },
    { id: 'skills', icon: Sparkles, label: t.nav.skills },
    { id: 'projects', icon: FolderGit2, label: t.nav.projects },
    { id: 'career', icon: Briefcase, label: t.nav.career },
    { id: 'education', icon: GraduationCap, label: t.nav.education },
    { id: 'contact', icon: Mail, label: t.nav.contact },
  ];

  const nextLanguage = () => {
    if (language === 'it') setLanguage('es');
    else if (language === 'es') setLanguage('en');
    else setLanguage('it');
  };

  return (
    <AnimatePresence>
      {showDock && (
        <motion.div
          initial={{ y: 90, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 90, opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="fixed bottom-3 left-0 right-0 z-[999] hidden md:flex items-center justify-center pointer-events-none"
        >
          <motion.div
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            className="pointer-events-auto p-2 rounded-full glass-panel border border-[#18648a]/30 shadow-2xl flex items-center gap-2 backdrop-blur-2xl bg-zinc-950/85 dark:bg-zinc-950/90 shadow-[#18648a]/20"
          >
            {dockItems.map((item) => (
              <DockItem
                key={item.id}
                id={item.id}
                label={item.label}
                icon={item.icon}
                mouseX={mouseX}
                onClick={() => scrollTo(item.id)}
              />
            ))}

            {/* Separator Line */}
            <div className="w-[1px] h-7 bg-white/20 mx-1 self-center" />

            {/* Quick Language Toggle */}
            <button
              onClick={nextLanguage}
              className="px-3 h-10 rounded-full flex items-center gap-1.5 text-xs font-bold text-zinc-300 hover:text-white hover:bg-white/10 transition-all cursor-pointer glass-panel border border-white/10"
              title={`Lingua: ${language.toUpperCase()} (Clicca per cambiare)`}
            >
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span className="uppercase">{language}</span>
            </button>

            {/* Quick Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full flex items-center justify-center text-zinc-300 hover:text-white hover:bg-white/10 transition-all cursor-pointer glass-panel border border-white/10"
              aria-label="Cambia tema chiaro/scuro"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-cyan-400" />}
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
