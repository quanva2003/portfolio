const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen w-full px-[9%] py-28 flex flex-col md:flex-row justify-center items-center gap-8 bg-[#323946]"
    >
      <div
        className="w-full md:w-1/2"
        data-aos="fade-right"
        data-aos-delay="200"
      >
        <img
          src="/wuan.png"
          alt="about"
          className="w-[34vw] h-[34vw] object-cover rounded-full shadow-[0_0_1rem_#00fbff] hover:shadow-none transition duration-500"
        />
      </div>

      <div
        className="w-full md:w-1/2"
        data-aos="fade-left"
        data-aos-delay="300"
      >
        <h2
          className="text-4xl font-bold text-left mb-4"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          About <span className="text-[#00fbff]">Me</span>
        </h2>
        <p className="text-lg my-8" data-aos="fade-up" data-aos-delay="500">
          Innovative Freelance Front-End Developer with 1+ Years at Upwork
          Seeking New Challenges | Bachelor of Software Engineering | Proficient
          in HTML, CSS, JS, MongoDB, Express.js, React, React Native, Node.js |
          Eager to Bring Problem-Solving and Critical Thinking Skills to Your
          Team.
        </p>
      </div>
    </section>
  );
};

export default About;
