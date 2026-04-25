import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  labelledBy: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, labelledBy, children, className }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`px-[var(--spacing-gutter-mobile)] md:px-[var(--spacing-gutter-desktop)] py-20 md:py-32 ${className ?? ""}`}
    >
      {children}
    </section>
  );
}
