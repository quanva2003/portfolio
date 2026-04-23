import { WORK_EXPERIENCE } from "../../data/workExperience";
import { Section } from "../layout/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { useInView } from "../../lib/useInView";

function ExperienceCard({
  experience,
  delay,
}: {
  experience: (typeof WORK_EXPERIENCE)[number];
  delay: string;
}) {
  const { ref, isInView } = useInView<HTMLDivElement>();
  const isCurrent = experience.duration.includes('Present');

  return (
    <div
      ref={ref}
      style={{ transitionDelay: delay }}
      className={`transition-all duration-700 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <Card>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-xl font-semibold text-text-primary">
                {experience.position}
              </h3>
              {isCurrent && (
                <span className="font-mono text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent">
                  Current
                </span>
              )}
            </div>
            <h4 className="text-base font-medium text-text-secondary mb-1">
              {experience.company}
            </h4>
            <p className="text-text-muted text-sm">{experience.duration}</p>
          </div>
          <div className="flex flex-wrap gap-2 mt-4 lg:mt-0">
            {experience.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-3 py-1 bg-bg-elevated text-text-secondary text-xs font-medium rounded-full border border-border"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <p className="text-text-secondary leading-relaxed">
          {experience.description}
        </p>
      </Card>
    </div>
  );
}

const WorkExperience = () => {
  return (
    <Section id="work-experience" labelledBy="work-experience-heading">
      <SectionHeading
        id="work-experience-heading"
        prefix="Work"
        highlight="Experience"
      />

      <div className="flex flex-col gap-8 mb-20">
        {WORK_EXPERIENCE.map((experience, index) => (
          <ExperienceCard
            key={experience.id}
            experience={experience}
            delay={`${300 + index * 150}ms`}
          />
        ))}
      </div>
    </Section>
  );
};

export default WorkExperience;
