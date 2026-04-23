import { Card } from '@/components/ui/Card';
import { LinkButton } from '@/components/ui/Button';
import { ExternalLink } from 'lucide-react';
import GithubIcon from '@/components/ui/icons/GithubIcon';
import type { ProjectCaseStudy } from '@/data/projects';

interface Props {
  project: ProjectCaseStudy;
  index: number;
  orientation: 'horizontal' | 'vertical';
}

export function ProjectCard({ project, index, orientation }: Props) {
  const num = String(index + 1).padStart(2, '0');
  const widthClass =
    orientation === 'horizontal'
      ? 'w-[85vw] md:w-[75vw] lg:w-[65vw] shrink-0'
      : 'w-full';

  return (
    <Card className={`${widthClass} aspect-[16/10] relative`} spotlight={false}>
      <span
        aria-hidden="true"
        className="absolute top-6 right-6 font-mono text-[8rem]
                   leading-none text-text-muted/10 select-none"
      >
        {num}
      </span>

      <div
        className="relative z-10 grid h-full grid-cols-1
                   md:grid-cols-[3fr_2fr] gap-8"
      >
        <div
          className="overflow-hidden rounded-xl border border-border
                     aspect-video md:aspect-auto"
        >
          <img
            src={project.thumbnail}
            alt={`${project.title} — ${project.tagline}`}
            width={1200}
            height={800}
            loading={index === 0 ? 'eager' : 'lazy'}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-4">
          <p className="label">Project {num}</p>
          <h3 className="text-2xl md:text-3xl font-semibold">{project.title}</h3>
          <p className="text-text-secondary">{project.tagline}</p>

          <div className="flex flex-wrap gap-2 mt-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs px-2 py-1 rounded
                           border border-border text-text-muted"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mt-auto pt-4">
            {project.links.live && (
              <LinkButton variant="ghost" size="sm" href={project.links.live} external>
                <ExternalLink size={14} /> Live
              </LinkButton>
            )}
            {project.links.repo && (
              <LinkButton variant="mono" size="sm" href={project.links.repo} external>
                <GithubIcon className="w-3.5 h-3.5" /> Source
              </LinkButton>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}
