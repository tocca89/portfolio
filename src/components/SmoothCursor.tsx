import React, { useState, useEffect, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

interface SmoothCursorProps {
  size?: number;
  color?: string;
  glowEffect?: boolean;
  showTrail?: boolean;
  trailLength?: number;
  magneticDistance?: number;
}

const CursorArrow: React.FC<{ size?: number; color?: string; className?: string }> = ({
  size = 22,
  color = '#389bc7',
  className = '',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size * 2}
      height={size * 2.16}
      viewBox="0 0 50 54"
      fill="none"
      className={`pointer-events-none drop-shadow-md ${className}`}
    >
      <defs>
        <filter id="cursor-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#389bc7" floodOpacity="0.5" />
        </filter>
      </defs>
      <g filter="url(#cursor-glow)">
        <path
          d="M42.6817 41.1495L27.5103 6.79925C26.7269 5.02557 24.2082 5.02558 23.3927 6.79925L7.59814 41.1495C6.75833 42.9759 8.52712 44.8902 10.4125 44.1954L24.3757 39.0496C24.8829 38.8627 25.4385 38.8627 25.9422 39.0496L39.8121 44.1954C41.6849 44.8902 43.4884 42.9759 42.6817 41.1495Z"
          fill={color}
        />
        <path
          d="M43.7146 40.6933L28.5431 6.34306C27.3556 3.65428 23.5772 3.69516 22.3668 6.32755L6.57226 40.6778C5.3134 43.4156 7.97238 46.298 10.803 45.2549L24.7662 40.109C25.0221 40.0147 25.2999 40.0156 25.5494 40.1082L39.4193 45.254C42.2261 46.2953 44.9254 43.4347 43.7146 40.6933Z"
          stroke="#ffffff"
          strokeWidth={1.5}
        />
      </g>
    </svg>
  );
};

export const SmoothCursor: React.FC<SmoothCursorProps> = ({
  size = 22,
  color = '#389bc7',
  glowEffect = true,
  showTrail = true,
  trailLength = 4,
  magneticDistance = 50,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOverInteractive, setIsOverInteractive] = useState(false);
  const [trail, setTrail] = useState<{ x: number; y: number }[]>([]);

  const posRef = useRef({ x: 0, y: 0 });
  const velRef = useRef({ x: 0, y: 0 });
  const lastTime = useRef(Date.now());
  const lastAngle = useRef(0);
  const accumulatedAngle = useRef(0);

  const springConfig = { damping: 35, stiffness: 350, mass: 0.8, restDelta: 0.001 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);
  const rotateSpring = useSpring(0, { damping: 50, stiffness: 250 });
  const scaleSpring = useSpring(1, { stiffness: 450, damping: 30 });

  const interactiveSelector =
    "a, button, [role='button'], input, textarea, select, .cursor-pointer, .cursor-grab, .cursor-grabbing, [data-magnetic], [data-cursor-interactive]";

  useEffect(() => {
    // Only enable on desktop with fine mouse pointer
    if (!window.matchMedia('(pointer: fine)').matches || window.innerWidth < 768) {
      return;
    }

    let rafId: number | null = null;

    const updatePhysics = (pt: { x: number; y: number }) => {
      const now = Date.now();
      const dt = now - lastTime.current;
      if (dt > 0) {
        velRef.current = {
          x: (pt.x - posRef.current.x) / dt,
          y: (pt.y - posRef.current.y) / dt,
        };
      }
      lastTime.current = now;
      posRef.current = pt;
    };

    const findMagneticTarget = (x: number, y: number) => {
      const elements = document.querySelectorAll(interactiveSelector);
      for (const el of Array.from(elements)) {
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const dist = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
        if (dist < magneticDistance) {
          return { x: centerX, y: centerY, distance: dist };
        }
      }
      return null;
    };

    const handleMouseMove = (e: MouseEvent) => {
      let targetX = e.clientX;
      let targetY = e.clientY;

      const overInteractive = !!(e.target as Element)?.closest(interactiveSelector);
      setIsOverInteractive(overInteractive);

      // Template cursor control: when hovering interactive, native pointer shows and custom arrow hides
      if (overInteractive) {
        document.body.style.cursor = 'pointer';
      } else {
        document.body.style.cursor = 'none';
      }

      // Magnetic subtle snap
      const magnetic = findMagneticTarget(targetX, targetY);
      if (magnetic) {
        const pull = 1 - magnetic.distance / magneticDistance;
        targetX += (magnetic.x - targetX) * pull * 0.35;
        targetY += (magnetic.y - targetY) * pull * 0.35;
      }

      updatePhysics({ x: targetX, y: targetY });

      // Trail
      if (showTrail && !overInteractive) {
        setTrail((prev) => [{ x: targetX, y: targetY }, ...prev.slice(0, trailLength - 1)]);
      }

      cursorX.set(targetX);
      cursorY.set(targetY);

      // Rotation towards velocity
      const speed = Math.sqrt(Math.pow(velRef.current.x, 2) + Math.pow(velRef.current.y, 2));
      if (speed > 0.1) {
        const targetDeg = Math.atan2(velRef.current.y, velRef.current.x) * (180 / Math.PI) + 90;
        let delta = targetDeg - lastAngle.current;
        if (delta > 180) delta -= 360;
        if (delta < -180) delta += 360;
        accumulatedAngle.current += delta;
        rotateSpring.set(accumulatedAngle.current);
        lastAngle.current = targetDeg;
      }

      if (!isVisible) setIsVisible(true);
    };

    const onThrottledMove = (e: MouseEvent) => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        handleMouseMove(e);
        rafId = null;
      });
    };

    const onMouseEnter = () => {
      setIsVisible(true);
      document.body.style.cursor = 'none';
    };

    const onMouseLeave = () => {
      setIsVisible(false);
      document.body.style.cursor = 'auto';
    };

    const onMouseDown = () => scaleSpring.set(0.75);
    const onMouseUp = () => scaleSpring.set(1);

    document.body.style.cursor = 'none';
    window.addEventListener('mousemove', onThrottledMove, { passive: true });
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('mousemove', onThrottledMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      document.body.style.cursor = 'auto';
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [cursorX, cursorY, rotateSpring, scaleSpring, isVisible, magneticDistance, showTrail, trailLength]);

  // If mobile, invisible, or hovering over a link/button, do not render arrow
  if (!isVisible || isOverInteractive) return null;

  return (
    <>
      {/* Trailing Ambient Glow Dots */}
      {showTrail &&
        !isOverInteractive &&
        trail.map((point, idx) => (
          <motion.div
            key={idx}
            style={{
              position: 'fixed',
              left: point.x,
              top: point.y,
              translateX: '-50%',
              translateY: '-50%',
              zIndex: 9998 - idx,
              pointerEvents: 'none',
              opacity: ((trailLength - idx) / trailLength) * 0.45,
              scale: ((trailLength - idx) / trailLength) * 0.75,
            }}
            className="w-2.5 h-2.5 rounded-full pointer-events-none bg-cyan-400 shadow-[0_0_12px_#22d3ee]"
          />
        ))}

      {/* Main Template Cursor Arrow */}
      <motion.div
        style={{
          position: 'fixed',
          left: cursorX,
          top: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          rotate: rotateSpring,
          scale: scaleSpring,
          zIndex: 9999,
          pointerEvents: 'none',
          willChange: 'transform',
          filter: glowEffect ? 'drop-shadow(0 0 12px rgba(34, 211, 238, 0.75))' : 'none',
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        className="select-none pointer-events-none hidden md:block text-[#18648a]"
      >
        <CursorArrow size={size} color={color} />
      </motion.div>
    </>
  );
};
