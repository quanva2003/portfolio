import { Section } from "../layout/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { useInView } from "../../lib/useInView";

const About = () => {
  const { ref: imgRef, isInView: imgInView } = useInView<HTMLDivElement>();
  const { ref: textRef, isInView: textInView } = useInView<HTMLDivElement>();

  return (
    <Section id="about" labelledBy="about-heading" className="bg-bg-secondary">
      <SectionHeading id="about-heading" prefix="About" highlight="Me" />

      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        <div
          ref={imgRef}
          className={`w-full md:w-1/2 transition-all duration-700 delay-200 ${
            imgInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}
        >
          <img
            src="/wuan.png"
            alt="Van Anh Quan – profile photo"
            width="400"
            height="400"
            loading="lazy"
            className="w-[34vw] h-[34vw] object-cover rounded-full shadow-[0_0_1rem_#00fbff] hover:shadow-none transition duration-500"
          />
        </div>

        <div
          ref={textRef}
          className={`w-full md:w-1/2 transition-all duration-700 delay-300 ${
            textInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}
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
