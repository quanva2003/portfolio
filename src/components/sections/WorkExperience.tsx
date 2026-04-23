import { WORK_EXPERIENCE } from "../../data/workExperience";
import { Section } from "../layout/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { useInView } from "../../lib/useInView";

function ExperienceCard({
  experience,
  delay,
}: {
  experience: (typeof WORK_EXPERIENCE)[number];
  delay: string;
}) {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: delay }}
      className={`bg-bg-elevated p-8 rounded-3xl border-2 border-bg hover:border-accent hover:scale-[1.02] transition duration-500 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
        <div>
          <h3 className="text-2xl font-semibold text-accent mb-2">
            {experience.position}
          </h3>
          <h4 className="text-xl font-medium text-white mb-1">
            {experience.company}
          </h4>
          <p className="text-gray-300 text-sm">{experience.duration}</p>
        </div>
        <div className="flex flex-wrap gap-2 mt-4 lg:mt-0">
          {experience.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-accent text-bg text-sm font-medium rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <p className="text-gray-300 mb-6 leading-relaxed">
        {experience.description}
      </p>
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
