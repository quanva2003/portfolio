import { ProjectCard } from './ProjectCard';
import type { ProjectCaseStudy } from '@/data/projects';

interface Props {
  projects: readonly ProjectCaseStudy[];
}

export function ProjectsVertical({ projects }: Props) {
  return (
    <div className="flex flex-col gap-8">
      {projects.map((project, i) => (
        <ProjectCard
          key={project.slug}
          project={project}
          index={i}
          orientation="vertical"
        />
      ))}
    </div>
  );
}
