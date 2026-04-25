import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Section } from "../layout/Section";
import { LinkButton } from "../ui/Button";
import { HeroSpotlight } from "./hero/HeroSpotlight";
import { HeroPortrait } from "./hero/HeroPortrait";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const Hero = () => {
  const reduced = useReducedMotion();

  return (
    <Section id="home" labelledBy="hero-heading">
      <div className="relative min-h-[85vh] grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-12 md:gap-16 items-center pb-16 md:pb-24">
        <HeroSpotlight />

        {/* Text block */}
        <div className="relative z-10 space-y-8">
          <p className="label">Frontend Developer · Ho Chi Minh City</p>

          <motion.h1
            id="hero-heading"
            variants={container}
            initial={reduced ? false : "hidden"}
            animate={reduced ? undefined : "show"}
          >
            <motion.span variants={item}>Building </motion.span>
            <motion.span variants={item} className="text-gradient">
              interfaces{" "}
            </motion.span>
            <br className="hidden md:block" />
            <motion.span variants={item}>that feel right.</motion.span>
          </motion.h1>

          <p className="max-w-prose text-lg">
            I build web and mobile products with React and React Native. I care
            about performance on mid-range devices — because that's what most
            users in Vietnam actually have.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <LinkButton variant="primary" href="#projects">
              View work →
            </LinkButton>
            <LinkButton variant="ghost" href="#contact">
              Get in touch
            </LinkButton>
          </div>
        </div>

        {/* Portrait */}
        <div className="relative z-10 justify-self-center md:justify-self-end">
          <HeroPortrait />
        </div>
      </div>
    </Section>
  );
};

export default Hero;
