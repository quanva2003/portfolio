import { SOCIAL_ICONS } from "../../data/socialIcons";
import { DownloadButton } from "../ui/Button";
import { Section } from "../layout/Section";
import { useInView } from "../../lib/useInView";

const Hero = () => {
  const { ref: contentRef, isInView: contentInView } = useInView<HTMLDivElement>();
  const { ref: imageRef, isInView: imageInView } = useInView<HTMLDivElement>();

  return (
    <Section
      id="home"
      labelledBy="home-heading"
      className="flex flex-col md:flex-row justify-center items-center"
    >
      <div
        ref={contentRef}
        className={`mt-10 md:-mt-40 w-full md:w-1/2 transition-all duration-700 delay-100 ${
          contentInView
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-8"
        }`}
      >
        <p className="text-3xl font-bold mt-10">Hello, It's Me</p>
        <h1
          id="home-heading"
          className="text-4xl font-bold text-accent my-2"
        >
          Van Anh Quan
        </h1>
        <p className="text-3xl font-bold flex flex-wrap md:flex-nowrap gap-2 min-h-[9rem] md:min-h-0">
          And I'm a{" "}
          <span className="text-accent block md:inline-block typed-text">
            Frontend Developer
          </span>
        </p>

        <div className="mt-12 mb-10 flex flex-row gap-6">
          {SOCIAL_ICONS.map((icon) => {
            const IconComponent = icon.Icon;
            return (
              <a
                key={icon.id}
                href={icon.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={icon.name}
                className="hover:cursor-pointer inline-flex justify-center items-center md:w-14 md:h-14 w-10 h-10 border-2 border-accent rounded-full text-xl text-accent hover:bg-accent hover:text-bg-secondary hover:shadow-[0_0_1rem_#00fbff] transition duration-300 group"
              >
                <IconComponent className="text-accent group-hover:text-bg-secondary transition duration-300" />
              </a>
            );
          })}
        </div>

        <DownloadButton content="Download CV" fileName="VanAnhQuan_CV.pdf" />
      </div>

      <div
        ref={imageRef}
        className={`mt-20 md:mt-0 animate-float transition-all duration-700 delay-200 ${
          imageInView
            ? "opacity-100 -translate-x-0"
            : "opacity-0 -translate-x-8"
        }`}
      >
        <img
          src="/wuan.svg"
          alt="Van Anh Quan – illustrated avatar"
          width="600"
          height="600"
          fetchPriority="high"
          className="md:h-[85vh] h-[60vh] object-cover"
        />
      </div>
    </Section>
  );
};

export default Hero;
