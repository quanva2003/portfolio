import React from "react";
import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen w-full px-[9%] py-28 bg-[#323946]"
    >
      <h2
        className="text-4xl font-bold text-center mb-20 text-[#00fbff]"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, index) => (
          <div
            key={project.id}
            className="group"
            data-aos="fade-up"
            data-aos-delay={`${300 + index * 100}`}
          >
            <div className="relative h-64 w-full rounded-3xl shadow-lg overflow-hidden">
              <img
                src={project.image}
                alt="portfolio"
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-[#00fbff] to-black/10 flex justify-center items-center flex-col p-16 text-center translate-y-full group-hover:translate-y-0 transition duration-500">
                <h4 className="text-2xl font-semibold">{project.title}</h4>
                <p className="text-base my-1 mb-4">{project.description}</p>
              </div>
            </div>
            {/* Title hiển thị dưới image trên mobile */}
            <div className="md:hidden mt-4 text-center">
              <h4 className="text-xl font-semibold text-white">
                {project.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
