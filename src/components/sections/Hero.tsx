import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { SOCIAL_ICONS } from "../../data/socialIcons";
import { DownloadButton } from "../ui/Button";

const Hero = () => {
  const textRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const typed = new Typed(textRef.current!, {
      strings: ["Frontend Developer", "Mobile Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen w-full px-gutter py-28 flex flex-col md:flex-row justify-center items-center"
    >
      <div
        className="mt-10 md:-mt-40 w-full md:w-1/2"
        data-aos="fade-right"
        data-aos-delay="200"
      >
        <p
          className="text-3xl font-bold mt-10"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Hello, It's Me
        </p>
        <h1
          className="text-4xl font-bold text-accent my-2"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Van Anh Quan
        </h1>
        <p
          className="text-3xl font-bold flex flex-wrap md:flex-nowrap gap-2 min-h-[9rem] md:min-h-0 "
          data-aos="fade-up"
          data-aos-delay="500"
        >
          And I'm a
          <span
            ref={textRef}
            className="text-accent block md:inline-block text-nowrap"
          ></span>
        </p>

        <div
          className="mt-12 mb-10 flex flex-row gap-6"
          data-aos="fade-up"
          data-aos-delay="600"
        >
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

        <div data-aos="fade-up" data-aos-delay="700">
          <DownloadButton content="Download CV" fileName="VanAnhQuan_CV.pdf" />
        </div>
      </div>

      <div
        className="mt-20 md:mt-0 animate-float"
        data-aos="fade-left"
        data-aos-delay="400"
      >
        <img
          src="/wuan.svg"
          alt="home"
          className="md:h-[85vh] h-[60vh] object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
