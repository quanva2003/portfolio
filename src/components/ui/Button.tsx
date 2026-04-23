import type { ReactNode } from 'react';

interface LinkButtonProps {
  href: string;
  variant: 'primary' | 'ghost';
  children: ReactNode;
}

export function LinkButton({ href, variant, children }: LinkButtonProps) {
  const base =
    'inline-flex items-center gap-1 px-7 py-3 rounded-full text-lg font-semibold transition duration-300';
  const styles = {
    primary:
      'bg-accent text-bg shadow-[0_0_1rem_rgba(34,211,238,0.4)] hover:shadow-none',
    ghost:
      'border border-border-strong text-text-primary hover:border-accent hover:text-accent',
  };

  return (
    <a href={href} className={`${base} ${styles[variant]}`}>
      {children}
    </a>
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
