import { Section } from "../layout/Section";
import { SectionHeading } from "../ui/SectionHeading";

const About = () => {
  return (
    <Section id="about" labelledBy="about-heading" className="bg-bg-secondary">
      <SectionHeading id="about-heading" prefix="About" highlight="Me" />

      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
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
          <p className="text-lg my-8">
            Innovative Freelance Front-End Developer with 1+ Years at Upwork
            Seeking New Challenges | Bachelor of Software Engineering | Proficient
            in HTML, CSS, JS, MongoDB, Express.js, React, React Native, Node.js |
            Eager to Bring Problem-Solving and Critical Thinking Skills to Your
            Team.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default About;
