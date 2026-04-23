import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import type { ProjectCaseStudy } from '@/data/projects';

interface Props {
  projects: readonly ProjectCaseStudy[];
}

export function ProjectsHorizontal({ projects }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  const translatePercent = -((projects.length - 1) / projects.length) * 100;
  const x = useTransform(scrollYProgress, [0, 1], ['0%', `${translatePercent}%`]);

  return (
    <div
      ref={ref}
      className="relative"
      style={{ height: `${projects.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <motion.div
          style={{ x }}
          className="flex gap-8 px-[var(--spacing-gutter-desktop)]
                     will-change-transform"
        >
          {projects.map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={i}
              orientation="horizontal"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
