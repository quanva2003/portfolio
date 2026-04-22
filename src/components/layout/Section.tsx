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
      className={`px-gutter py-20 ${className ?? ""}`}
    >
      {children}
    </section>
  );
}
