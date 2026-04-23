import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface Props {
  prefix?: string;
  highlight: string;
  id: string;
}

export function SectionHeading({ prefix, highlight, id }: Props) {
  const reduced = useReducedMotion();
  return (
    <motion.h2
      id={id}
      initial={reduced ? false : { opacity: 0, y: 24 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
      className="text-center mb-20"
    >
      {prefix && `${prefix} `}
      <span className="text-gradient">{highlight}</span>
    </motion.h2>
  );
}
