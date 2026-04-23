import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PROJECTS } from '@/data/projects';
import { ProjectsHorizontal } from './ProjectsHorizontal';
import { ProjectsVertical } from './ProjectsVertical';

export function Projects() {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const reduced = useReducedMotion();
  const useHorizontal = isDesktop && !reduced;

  return (
    <Section id="projects" labelledBy="projects-heading">
      <SectionHeading id="projects-heading" prefix="Selected" highlight="work" />
      {useHorizontal ? (
        <ProjectsHorizontal projects={PROJECTS} />
      ) : (
        <ProjectsVertical projects={PROJECTS} />
      )}
    </Section>
  );
}
