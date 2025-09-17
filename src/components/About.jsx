import React from "react";
const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen w-full px-[9%] py-28 flex flex-col md:flex-row justify-center items-center gap-8 bg-[#323946]"
    >
      <div className="w-full md:w-1/2">
        <img
          src="/src/assets/about(1).png"
          alt="about"
          className="w-[34vw] h-[34vw] object-cover rounded-full shadow-[0_0_1rem_#00fbff] hover:shadow-none transition duration-500"
        />
      </div>

      <div className="w-full md:w-1/2">
        <h2 className="text-4xl font-bold text-left mb-4">
          About <span className="text-[#00fbff]">Me</span>
        </h2>
        <p className="text-lg my-8">
          Innovative Freelance Front-End Developer with 1+ Years at Upwork
          Seeking New Challenges | Bachelor of Software Engineering | Proficient
          in HTML, CSS, JS, MongoDB, Express.js, React, React Native, Node.js |
          Eager to Bring Problem-Solving and Critical Thinking Skills to Your
          Team.
        </p>
        {/* <a
          href="#"
          className="inline-block px-7 py-3 bg-[#00fbff] rounded-full shadow-[0_0_1rem_#00fbff] text-lg text-[#323946] font-semibold hover:shadow-none transition duration-500"
        >
          Read More
        </a> */}
      </div>
    </section>
  );
};

export default About;
