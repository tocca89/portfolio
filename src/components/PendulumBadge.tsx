import React, { useRef, useState, useEffect, useCallback } from 'react';

interface PendulumBadgeProps {
  ropeLength?: number;
  ropeColor?: string;
  name?: string;
  role?: string;
  badgeId?: string;
  accentColor?: string;
  photoUrl?: string;
  className?: string;
}

export const PendulumBadge: React.FC<PendulumBadgeProps> = ({
  ropeLength = 125,
  ropeColor = '#0e2534',
  name = 'Lorenzo Toccaceli',
  role = 'Customer Success Manager',
  badgeId = 'CSM-LT89',
  accentColor = '#18648a',
  photoUrl = '/lorenzo.jpeg',
  className = '',
}) => {
  const physics = useRef({ angle: 0, vel: 0 });
  const animFrame = useRef<number | null>(null);
  const lastTime = useRef<number | null>(null);
  const lastAngle = useRef(0);
  const isDragging = useRef(false);
  const [angleDeg, setAngleDeg] = useState(0);
  const [, setDraggingState] = useState(false);
  const startX = useRef(0);
  const startAngle = useRef(0);

  const GRAVITY = 980;
  const DAMPING = 1.2;
  const SPRING_TENSION = 1.5;
  const MASS = 1.0;

  const updatePhysics = useCallback(
    (time: number) => {
      if (lastTime.current === null) {
        lastTime.current = time;
      }
      const dt = Math.min((time - lastTime.current) / 1000, 0.05);
      lastTime.current = time;
      const p = physics.current;

      if (isDragging.current) {
        if (dt > 0) {
          p.vel = (p.angle - lastAngle.current) / dt;
        }
        lastAngle.current = p.angle;
        animFrame.current = requestAnimationFrame(updatePhysics);
      } else {
        const effectiveLength = ropeLength + 100;
        const accel =
          -(GRAVITY / effectiveLength) * Math.sin(p.angle) -
          (DAMPING / MASS) * p.vel -
          (SPRING_TENSION / MASS) * p.angle;

        p.vel += accel * dt;
        p.angle += p.vel * dt;

        setAngleDeg(p.angle * (180 / Math.PI));

        if (Math.abs(p.angle) > 0.001 || Math.abs(p.vel) > 0.001) {
          animFrame.current = requestAnimationFrame(updatePhysics);
        } else {
          p.angle = 0;
          p.vel = 0;
          setAngleDeg(0);
        }
      }
    },
    [ropeLength]
  );

  const startLoop = useCallback(() => {
    if (animFrame.current) cancelAnimationFrame(animFrame.current);
    lastTime.current = null;
    animFrame.current = requestAnimationFrame(updatePhysics);
  }, [updatePhysics]);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      e.currentTarget.setPointerCapture(e.pointerId);
      isDragging.current = true;
      setDraggingState(true);
      startX.current = e.clientX;
      startAngle.current = physics.current.angle;
      lastAngle.current = physics.current.angle;
      if (animFrame.current) cancelAnimationFrame(animFrame.current);
      lastTime.current = null;
      animFrame.current = requestAnimationFrame(updatePhysics);
    },
    [updatePhysics]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!isDragging.current) return;
      const dx = e.clientX - startX.current;
      const effectiveLength = ropeLength + 100;
      const targetAngle = startAngle.current - dx / effectiveLength;
      const clampedAngle = Math.max(-1.3, Math.min(1.3, targetAngle));
      physics.current.angle = clampedAngle;
      setAngleDeg(clampedAngle * (180 / Math.PI));
    },
    [ropeLength]
  );

  const handlePointerUp = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch {
        // ignore
      }
      isDragging.current = false;
      setDraggingState(false);
    },
    []
  );

  const handleClick = useCallback(() => {
    if (Math.abs(physics.current.vel) < 0.1 && Math.abs(physics.current.angle) < 0.05) {
      physics.current.vel = 3.8;
      startLoop();
    }
  }, [startLoop]);

  useEffect(() => {
    physics.current.angle = 0.25;
    startLoop();

    return () => {
      if (animFrame.current) cancelAnimationFrame(animFrame.current);
    };
  }, [startLoop]);

  return (
    <div className={`flex flex-col items-center select-none ${className}`} style={{ touchAction: 'none' }}>
      {/* Wall anchor pin */}
      <div className="w-4 h-4 rounded-full shadow-lg z-20 relative bg-zinc-800 border-2 border-zinc-600 flex items-center justify-center">
        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
      </div>

      {/* Swinging pendulum assembly */}
      <div
        className="flex flex-col items-center cursor-grab active:cursor-grabbing origin-top will-change-transform"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onClick={handleClick}
        style={{
          transform: `rotate(${angleDeg}deg)`,
          marginTop: '-6px',
        }}
      >
        {/* Lanyard Strap & Metal Clip */}
        <div className="pointer-events-none flex flex-col items-center">
          {/* Lanyard Ribbon */}
          <div
            className="w-4 rounded-t-sm shadow-inner relative overflow-hidden"
            style={{
              height: `${ropeLength}px`,
              background: `linear-gradient(90deg, #0a1b26 0%, ${accentColor} 50%, #0a1b26 100%)`,
              borderLeft: '1px solid rgba(255,255,255,0.15)',
              borderRight: '1px solid rgba(255,255,255,0.15)',
            }}
          >
            {/* Lanyard text pattern */}
            <div className="absolute inset-0 flex flex-col justify-around items-center opacity-40">
              <span className="text-[7px] font-mono tracking-widest text-cyan-200 uppercase rotate-90">TAKEOFF</span>
              <span className="text-[7px] font-mono tracking-widest text-cyan-200 uppercase rotate-90">SUCCESS</span>
            </div>
          </div>

          {/* Metallic Clip SVG */}
          <svg width="42" height="34" viewBox="0 0 42 34" className="mt-[-2px] z-10 drop-shadow-md">
            <defs>
              <linearGradient id="metalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#71717a" />
                <stop offset="40%" stopColor="#d4d4d8" />
                <stop offset="70%" stopColor="#a1a1aa" />
                <stop offset="100%" stopColor="#52525b" />
              </linearGradient>
            </defs>
            <rect x="13" y="1" width="16" height="5" rx="2" fill="url(#metalGrad)" stroke="#3f3f46" strokeWidth="0.8" />
            <path
              d="M 21 6 L 21 16 Q 21 24 16 26 Q 13 28 13 32 L 29 32 Q 29 28 26 26 Q 21 24 21 16"
              fill="none"
              stroke="url(#metalGrad)"
              strokeWidth="3.2"
              strokeLinecap="round"
            />
            <line x1="21" y1="16" x2="21" y2="28" stroke="#f4f4f5" strokeWidth="1.2" strokeDasharray="3,1" />
          </svg>
        </div>

        {/* Physical ID Card */}
        <div
          className="relative w-[18.5rem] xs:w-[20rem] sm:w-[22rem] max-w-[92vw] rounded-[2.25rem] overflow-hidden shadow-2xl border border-white/20 dark:border-white/15 bg-card pointer-events-none mt-[-14px] backdrop-blur-xl transition-shadow duration-300 hover:shadow-[#18648a]/30"
          style={{
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.45), 0 0 35px -5px rgba(24, 100, 138, 0.35)',
          }}
        >
          {/* Card Top Punch Hole */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
            <div className="w-10 h-3 rounded-full bg-black/70 dark:bg-black/95 border border-white/30 shadow-inner flex items-center justify-center">
              <div className="w-7 h-1 rounded-full bg-zinc-950 opacity-90" />
            </div>
          </div>

          {/* Top Banner with #18648a Gradient */}
          <div
            className="px-6 pt-8 pb-5 flex flex-col items-center gap-3 relative text-white"
            style={{
              background: `linear-gradient(135deg, ${accentColor} 0%, #134e6c 50%, #0a2939 100%)`,
            }}
          >
            {/* Smart Card Chip */}
            <div className="absolute top-4 left-4 w-7 h-5 rounded bg-amber-400/90 border border-amber-300 shadow-sm flex items-center justify-center">
              <div className="w-5 h-3.5 border border-amber-700/40 rounded-[2px] grid grid-cols-2 gap-[1px] p-[1px]">
                <div className="bg-amber-600/40" />
                <div className="bg-amber-600/40" />
                <div className="bg-amber-600/40" />
                <div className="bg-amber-600/40" />
              </div>
            </div>

            {/* Security Hologram Emblem */}
            <div className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-[9px] font-bold tracking-wider uppercase">
              B2B SaaS
            </div>

            {/* Profile Photo (Enlarged 1/3) */}
            <div className="relative mt-2">
              <div className="w-[108px] h-[108px] rounded-full overflow-hidden border-3 border-white/90 shadow-2xl bg-zinc-800 ring-4 ring-[#389bc7]/40">
                <img
                  src={photoUrl}
                  alt={name}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300';
                  }}
                />
              </div>
              <div className="absolute bottom-1 right-2 w-4 h-4 rounded-full bg-emerald-400 border-2 border-white shadow-sm" />
            </div>

            <div className="text-center">
              <h3 className="font-extrabold text-xl text-white tracking-tight">{name}</h3>
              <p className="text-xs text-cyan-200 font-semibold tracking-wide">{role}</p>
            </div>
          </div>

          {/* Card Body */}
          <div className="bg-white/95 dark:bg-zinc-900/95 px-5 py-4 flex flex-col items-center gap-2">
            <div className="w-full flex items-center justify-between text-[11px] text-zinc-500 dark:text-zinc-400 font-medium px-1">
              <span>SPECIALIZATION</span>
              <span className="font-bold text-zinc-800 dark:text-zinc-200">Customer Success</span>
            </div>
            <div className="w-full flex items-center justify-between text-[11px] text-zinc-500 dark:text-zinc-400 font-medium px-1">
              <span>MARKETS</span>
              <span className="font-bold text-[#18648a] dark:text-[#389bc7]">Italy • Spain</span>
            </div>

            {/* Divider */}
            <div className="my-1.5 w-full border-t border-zinc-200 dark:border-zinc-800" />

            {/* Realistic Barcode */}
            <div className="flex gap-[2px] items-end h-7 px-2">
              {Array.from({ length: 32 }).map((_, idx) => (
                <div
                  key={idx}
                  className="bg-zinc-800 dark:bg-zinc-200 rounded-[1px]"
                  style={{
                    width: idx % 3 === 0 ? '3px' : idx % 5 === 0 ? '2px' : '1px',
                    height: `${45 + Math.sin(idx * 1.5) * 35}%`,
                  }}
                />
              ))}
            </div>

            {/* Card Footer Badge ID */}
            <div className="flex items-center justify-between w-full pt-1 text-[10px] font-mono text-zinc-400 dark:text-zinc-500">
              <span>ID: {badgeId}</span>
              <span className="text-[#18648a] dark:text-[#389bc7] font-semibold">VERIFIED CSM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
