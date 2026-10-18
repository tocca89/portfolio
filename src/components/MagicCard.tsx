import React, { useCallback } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export interface MagicCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  gradientSize?: number;
  gradientColor?: string;
  gradientFrom?: string;
  gradientTo?: string;
}

export const MagicCard: React.FC<MagicCardProps> = ({
  children,
  className = '',
  gradientSize = 280,
  gradientColor,
  gradientFrom,
  gradientTo,
  ...props
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const defaultGlow = isDark ? 'rgba(34, 211, 238, 0.16)' : 'rgba(24, 100, 138, 0.12)';
  const defaultFrom = isDark ? '#22d3ee' : '#389bc7';
  const defaultTo = isDark ? '#18648a' : '#18648a';

  const activeGlow = gradientColor ?? defaultGlow;
  const activeFrom = gradientFrom ?? defaultFrom;
  const activeTo = gradientTo ?? defaultTo;

  const mouseX = useMotionValue(-gradientSize);
  const mouseY = useMotionValue(-gradientSize);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const { left, top } = e.currentTarget.getBoundingClientRect();
      mouseX.set(e.clientX - left);
      mouseY.set(e.clientY - top);
    },
    [mouseX, mouseY]
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(-gradientSize);
    mouseY.set(-gradientSize);
  }, [mouseX, mouseY, gradientSize]);

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative flex flex-col justify-between rounded-3xl border border-cyan-500/15 dark:border-cyan-500/20 bg-card/90 backdrop-blur-md p-8 shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-950/30 overflow-hidden ${className}`}
      {...props}
    >
      {/* 1. Inner radial glow following the mouse pointer */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${activeGlow}, transparent 75%)
          `,
        }}
      />

      {/* 2. Illuminated border gradient spotlight following the mouse pointer */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${activeFrom}, ${activeTo}, transparent 70%)
          `,
          maskImage: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
          WebkitMaskImage: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor',
          padding: '1.5px',
        }}
      />

      {/* 3. Card Content */}
      <div className="relative z-10 w-full flex flex-col h-full justify-between">
        {children}
      </div>
    </div>
  );
};
