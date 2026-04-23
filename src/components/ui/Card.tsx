import { useRef, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface CardProps {
  children: ReactNode;
  className?: string;
  spotlight?: boolean;
}

export function Card({ children, className = '', spotlight = true }: CardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!spotlight || !ref.current || reduced) return;
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty('--card-x', `${e.clientX - rect.left}px`);
    ref.current.style.setProperty('--card-y', `${e.clientY - rect.top}px`);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      whileHover={reduced ? undefined : { y: -2 }}
      transition={{ duration: 0.2 }}
      className={
        'group relative overflow-hidden rounded-2xl ' +
        'border border-border bg-bg-glass backdrop-blur-sm ' +
        'p-6 md:p-8 transition-colors duration-300 ' +
        'hover:border-border-strong ' +
        className
      }
    >
      {spotlight && !reduced && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0
                     transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(
              400px circle at var(--card-x) var(--card-y),
              rgba(34, 211, 238, 0.06),
              transparent 40%
            )`,
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
