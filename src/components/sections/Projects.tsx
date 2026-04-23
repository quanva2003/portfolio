import { PROJECTS } from "../../data/projects";
import { Section } from "../layout/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { useInView } from "../../lib/useInView";

function ProjectCard({
  project,
  delay,
}: {
  project: (typeof PROJECTS)[number];
  delay: string;
}) {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: delay }}
      className={`transition-all duration-700 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <Card className="p-0" spotlight>
        <div className="group relative h-64 w-full overflow-hidden rounded-2xl">
          <img
            src={project.thumbnail}
            alt={project.imageAlt}
            width="600"
            height="256"
            loading="lazy"
            className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
          />
          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/80 to-transparent flex justify-center items-end flex-col p-6 text-center translate-y-full group-hover:translate-y-0 transition duration-500">
            <h4 className="text-xl font-semibold text-text-primary w-full">{project.title}</h4>
            <p className="text-sm mt-1 text-text-secondary w-full">{project.tagline}</p>
          </div>
        </div>
        <div className="p-4 md:p-5">
          <h4 className="text-base font-medium text-text-primary">{project.title}</h4>
          <p className="text-sm text-text-secondary mt-1">{project.tagline}</p>
        </div>
      </Card>
    </div>
  );
}

const Projects = () => {
  return (
    <Section id="projects" labelledBy="projects-heading" className="bg-bg-elevated">
      <SectionHeading id="projects-heading" highlight="Projects" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            delay={`${300 + index * 100}ms`}
          />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
