import React from "react";
import { workExperience } from "../data/workExperience";

const WorkExperience = () => {
  return (
    <section id="work-experience" className="min-h-screen w-full px-[9%] py-28">
      <h2
        className="text-4xl font-bold text-center mb-20"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Work <span className="text-[#00fbff]">Experience</span>
      </h2>

      <div className="flex flex-col gap-8 mb-20">
        {workExperience.map((experience, index) => (
          <div
            key={experience.id}
            className="bg-[#323946] p-8 rounded-3xl border-2 border-[#1f242d] hover:border-[#00fbff] hover:scale-[1.02] transition duration-500"
            data-aos="fade-up"
            data-aos-delay={`${300 + index * 200}`}
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-semibold text-[#00fbff] mb-2">
                  {experience.position}
                </h3>
                <h4 className="text-xl font-medium text-white mb-1">
                  {experience.company}
                </h4>
                <p className="text-gray-300 text-sm">{experience.duration}</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-4 lg:mt-0">
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[#00fbff] text-[#323946] text-sm font-medium rounded-full"
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
