import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

type ButtonVariant = 'primary' | 'ghost' | 'mono';
type ButtonSize = 'sm' | 'md' | 'lg';

interface LinkButtonProps {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  external?: boolean;
  children: ReactNode;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-text-primary text-bg hover:bg-white',
  ghost:
    'border border-border text-text-primary bg-transparent ' +
    'hover:border-border-strong hover:bg-bg-glass',
  mono:
    'font-mono text-text-secondary hover:text-text-primary bg-transparent ' +
    'relative after:absolute after:bottom-0 after:left-0 after:h-px ' +
    'after:bg-current after:w-0 hover:after:w-full ' +
    'after:transition-all after:duration-300',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-5 py-2.5 text-base',
  lg: 'px-7 py-3.5 text-base',
};

export function LinkButton({
  href,
  variant = 'primary',
  size = 'md',
  external = false,
  children,
  className = '',
}: LinkButtonProps) {
  const reduced = useReducedMotion();
  const linkProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  const base =
    'inline-flex items-center gap-2 rounded-full font-medium ' +
    'transition-colors duration-200 focus-visible:outline-none ' +
    'focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ' +
    'focus-visible:ring-offset-bg';

  return (
    <motion.a
      href={href}
      whileHover={reduced ? undefined : { scale: 1.02 }}
      whileTap={reduced ? undefined : { scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={`${base} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...linkProps}
    >
      {children}
    </motion.a>
  );
}

interface DownloadButtonProps {
  content: string;
  fileName: string;
}

export function DownloadButton({ content, fileName }: DownloadButtonProps) {
  return (
    <a
      href={`/cv/${fileName}`}
      download={fileName}
      className="hover:cursor-pointer inline-block px-7 py-3 bg-accent rounded-full shadow-[0_0_1rem_#00fbff] text-lg text-bg font-semibold hover:shadow-none transition duration-500"
    >
      {content}
    </a>
  );
}
