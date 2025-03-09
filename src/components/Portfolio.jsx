import React from "react";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      image: "/assets/image/img2.png",
      title: "Web Design",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, nihil.",
    },
    {
      id: 2,
      image: "/assets/image/img2.png",
      title: "Web Design",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, dignissimos.",
    },
    {
      id: 3,
      image: "/assets/image/img4.png",
      title: "Web Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, sequi!",
    },
    {
      id: 4,
      image: "/assets/image/img4.png",
      title: "Web Design",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, nulla?",
    },
    {
      id: 5,
      image: "/assets/image/img6.png",
      title: "Web Design",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, cum!",
    },
    {
      id: 6,
      image: "/assets/image/img6.png",
      title: "Web Design",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ut!",
    },
  ];

  return (
    <section
      id="portfolio"
      className="min-h-screen w-full px-[9%] py-28 bg-[#323946]"
    >
      <h2 className="text-4xl font-bold text-center mb-20">
        Latest <span className="text-[#00fbff]">Project</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative h-64 w-full rounded-3xl shadow-lg overflow-hidden group"
          >
            <img
              src={project.image}
              alt="portfolio"
              className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-[#00fbff] to-black/10 flex justify-center items-center flex-col p-16 text-center translate-y-full group-hover:translate-y-0 transition duration-500">
              <h4 className="text-2xl font-semibold">{project.title}</h4>
              <p className="text-base my-1 mb-4">{project.description}</p>
              <a
                href="#"
                className="inline-flex justify-center items-center w-14 h-14 bg-[#ffffffe2] rounded-full"
              >
                <i className="bx bx-link-external text-xl text-[#323946]"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
