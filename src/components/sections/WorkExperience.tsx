import { WORK_EXPERIENCE } from "../../data/workExperience";

const WorkExperience = () => {
  return (
    <section id="work-experience" className="min-h-screen w-full px-gutter py-28">
      <h2
        className="text-4xl font-bold text-center mb-20"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Work <span className="text-accent">Experience</span>
      </h2>

      <div className="flex flex-col gap-8 mb-20">
        {WORK_EXPERIENCE.map((experience, index) => (
          <div
            key={experience.id}
            className="bg-bg-secondary p-8 rounded-3xl border-2 border-bg-primary hover:border-accent hover:scale-[1.02] transition duration-500"
            data-aos="fade-up"
            data-aos-delay={`${300 + index * 200}`}
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
                    className="px-3 py-1 bg-accent text-bg-secondary text-sm font-medium rounded-full"
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
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
