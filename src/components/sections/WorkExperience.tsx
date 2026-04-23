import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { WORK_EXPERIENCE } from '../../data/workExperience';
import { Section } from '../layout/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';

function ExperienceCard({
  experience,
  index,
}: {
  experience: (typeof WORK_EXPERIENCE)[number];
  index: number;
}) {
  const reduced = useReducedMotion();
  const isCurrent = experience.duration.includes('Present');

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 24 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-xl font-semibold text-text-primary">
                {experience.position}
              </h3>
              {isCurrent && (
                <span className="label text-accent border border-accent/30 px-2 py-0.5 rounded-full">
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
                className="font-mono text-xs px-2 py-1 rounded border border-border text-text-muted"
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
    </motion.div>
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
            index={index}
          />
        ))}
      </div>
    </Section>
  );
};

export default WorkExperience;
