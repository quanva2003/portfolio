interface SectionHeadingProps {
  prefix?: string;
  highlight: string;
  id: string;
}

export function SectionHeading({ prefix, highlight, id }: SectionHeadingProps) {
  return (
    <h2 id={id} className="text-4xl font-bold text-center mb-20">
      {prefix && `${prefix} `}
      <span className="text-accent">{highlight}</span>
    </h2>
  );
}
