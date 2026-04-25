import { Card } from "@/components/ui/Card";
import { LinkButton } from "@/components/ui/Button";
import { ExternalLink } from "lucide-react";
import GithubIcon from "@/components/ui/icons/GithubIcon";
import type { ProjectCaseStudy } from "@/data/projects";

interface Props {
  project: ProjectCaseStudy;
  index: number;
  orientation: "horizontal" | "vertical";
}

export function ProjectCard({ project, index, orientation }: Props) {
  const num = String(index + 1).padStart(2, "0");
  const widthClass =
    orientation === "horizontal"
      ? "w-[85vw] md:w-[75vw] lg:w-[65vw] shrink-0"
      : "w-full";

  return (
    <Card className={`${widthClass} aspect-[16/10] relative`} spotlight={false}>
      <span
        aria-hidden="true"
        className="absolute top-6 right-6 font-mono text-[10rem]
                   leading-none text-white/[0.06] select-none"
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
            loading={index === 0 ? "eager" : "lazy"}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-5 min-h-0 overflow-y-auto">
          <div>
            <p className="label">Project {num}</p>
            <h3 className="text-2xl md:text-3xl font-semibold mt-2">
              {project.title}
            </h3>
            <p className="text-text-secondary mt-2">{project.tagline}</p>
          </div>

          <div className="grid grid-cols-2 gap-3 text-sm">
            <div>
              <p className="label">Role</p>
              <p className="text-text-secondary mt-1">{project.role}</p>
            </div>
            <div>
              <p className="label">Timeline</p>
              <p className="text-text-secondary mt-1">{project.timeline}</p>
            </div>
            <div className="col-span-2">
              <p className="label">Platforms</p>
              <p className="text-text-secondary mt-1">
                {project.platforms.join(" · ")}
              </p>
            </div>
          </div>

          <div>
            <p className="label mb-2">Stack</p>
            <div className="flex flex-wrap gap-2">
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
          </div>

          <div className="flex flex-wrap gap-3 mt-auto pt-2">
            {project.links.caseStudy && (
              <LinkButton
                variant="ghost"
                size="sm"
                href={project.links.caseStudy}
              >
                Case study →
              </LinkButton>
            )}
            {project.links.live && (
              <LinkButton
                variant="ghost"
                size="sm"
                href={project.links.live}
                external
              >
                <ExternalLink size={14} /> Live
              </LinkButton>
            )}
            {project.links.repo && (
              <LinkButton
                variant="mono"
                size="sm"
                href={project.links.repo}
                external
              >
                <GithubIcon className="w-3.5 h-3.5" /> Source
              </LinkButton>
            )}
            {!project.links.live &&
              !project.links.repo &&
              !project.links.caseStudy && (
                <span className="font-mono text-xs text-text-muted">
                  Internal — demo available on request
                </span>
              )}
          </div>
        </div>
      </div>
    </Card>
  );
}
