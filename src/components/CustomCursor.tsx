import React, { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [trail, setTrail] = useState<{ x: number; y: number }[]>([]);
  const isClicking = useRef(false);
  const lastPos = useRef({ x: 0, y: 0 });
  const lastTime = useRef(Date.now());
  const velocity = useRef({ x: 0, y: 0 });
  const angleRef = useRef(0);

  const springConfig = { damping: 30, stiffness: 350, mass: 0.6 };
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);
  const rotateSpring = useSpring(0, { damping: 25, stiffness: 200 });
  const scaleSpring = useSpring(1, { damping: 20, stiffness: 400 });

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;

    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      const dt = Math.max(1, now - lastTime.current);
      const dx = e.clientX - lastPos.current.x;
      const dy = e.clientY - lastPos.current.y;

      velocity.current = { x: dx / dt, y: dy / dt };
      lastTime.current = now;
      lastPos.current = { x: e.clientX, y: e.clientY };

      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      if (!isVisible) setIsVisible(true);

      // Add to trail
      setTrail((prev) => [{ x: e.clientX, y: e.clientY }, ...prev.slice(0, 3)]);

      // Calculate movement angle
      const speed = Math.sqrt(dx * dx + dy * dy);
      if (speed > 2) {
        const deg = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
        let delta = deg - angleRef.current;
        if (delta > 180) delta -= 360;
        if (delta < -180) delta += 360;
        angleRef.current += delta;
        rotateSpring.set(angleRef.current);
      }
    };

    const onMouseDown = () => {
      isClicking.current = true;
      scaleSpring.set(0.75);
    };

    const onMouseUp = () => {
      isClicking.current = false;
      scaleSpring.set(1);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      if (animId) cancelAnimationFrame(animId);
    };
  }, [cursorX, cursorY, rotateSpring, scaleSpring, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* 4 Trailing Glow Dots */}
      {trail.map((point, i) => (
        <motion.div
          key={i}
          style={{
            position: 'fixed',
            left: point.x,
            top: point.y,
            translateX: '-50%',
            translateY: '-50%',
            zIndex: 9998 - i,
            pointerEvents: 'none',
            opacity: ((4 - i) / 4) * 0.45,
            scale: ((4 - i) / 4) * 0.75,
          }}
          className="w-2.5 h-2.5 bg-[#389bc7] rounded-full pointer-events-none shadow-[0_0_8px_#389bc7]"
        />
      ))}

      {/* Main Stylized Template Cursor Arrow (BA) */}
      <motion.div
        style={{
          position: 'fixed',
          left: smoothX,
          top: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          rotate: rotateSpring,
          scale: scaleSpring,
          zIndex: 9999,
          pointerEvents: 'none',
          willChange: 'transform',
          filter: 'drop-shadow(0 0 10px rgba(56, 181, 223, 0.7))',
        }}
        className="select-none pointer-events-none hidden md:block text-[#389bc7]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="28"
          viewBox="0 0 50 54"
          fill="none"
          className="pointer-events-none"
        >
          <path
            d="M42.6817 41.1495L27.5103 6.79925C26.7269 5.02557 24.2082 5.02558 23.3927 6.79925L7.59814 41.1495C6.75833 42.9759 8.52712 44.8902 10.4125 44.1954L24.3757 39.0496C24.8829 38.8627 25.4385 38.8627 25.9422 39.0496L39.8121 44.1954C41.6849 44.8902 43.4884 42.9759 42.6817 41.1495Z"
            fill="#389bc7"
            stroke="#ffffff"
            strokeWidth="1.5"
          />
        </svg>
      </motion.div>
    </>
  );
};
