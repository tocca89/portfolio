import React, { useCallback } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export interface MagicCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  gradientSize?: number;
  gradientColor?: string;
  gradientFrom?: string;
}

export const MagicCard: React.FC<MagicCardProps> = ({
  children,
  className = '',
  gradientSize = 300,
  gradientColor,
  gradientFrom,
  ...props
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Inner soft radial aura: light sky-blue in day mode, electric cyan in night mode
  const defaultGlow = isDark
    ? 'rgba(34, 211, 238, 0.18)'
    : 'rgba(56, 189, 248, 0.14)';

  // Border spotlight color: bright sky-blue in day mode, vibrant cyan in night mode
  const defaultFrom = isDark ? '#38bdf8' : '#389bc7';

  const activeGlow = gradientColor ?? defaultGlow;
  const activeFrom = gradientFrom ?? defaultFrom;

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
      className={`group relative rounded-3xl p-[1.5px] bg-[#389bc7]/25 dark:bg-cyan-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-[#18648a]/10 dark:hover:shadow-2xl dark:hover:shadow-cyan-950/40 overflow-hidden flex flex-col ${className}`}
      {...props}
    >
      {/* 1. Dynamic border spotlight that follows the mouse along the perimeter */}
      <motion.div
        className="pointer-events-none absolute -inset-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${activeFrom}, transparent 70%)
          `,
        }}
      />

      {/* 2. Inner card container with clean sky-blue (day) or dark petrol (night) background */}
      <div className="relative z-10 w-full h-full rounded-[22.5px] bg-[#eaf4fb] dark:bg-[#122230] p-8 flex flex-col justify-between overflow-hidden">
        {/* Soft inner ambient glow that follows the cursor inside the card */}
        <motion.div
          className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0"
          style={{
            background: useMotionTemplate`
              radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${activeGlow}, transparent 75%)
            `,
          }}
        />

        {/* 3. Card Content */}
        <div className="relative z-10 w-full flex flex-col h-full justify-between">
          {children}
        </div>
      </div>
    </div>
  );
};
