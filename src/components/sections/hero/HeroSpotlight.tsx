'use client';
import { useEffect, useRef } from 'react';

export function HeroSpotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let ticking = false;
    const handleMove = (e: MouseEvent) => {
      if (ticking) return;
      requestAnimationFrame(() => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          ref.current.style.setProperty('--x', `${x}px`);
          ref.current.style.setProperty('--y', `${y}px`);
        }
        ticking = false;
      });
      ticking = true;
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="absolute inset-0 -z-0 pointer-events-none"
      style={{
        background: `radial-gradient(
          600px circle at var(--x, 50%) var(--y, 50%),
          rgba(34, 211, 238, 0.08),
          transparent 40%
        )`,
      }}
    />
  );
}
