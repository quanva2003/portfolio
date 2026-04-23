import { Section } from '../layout/Section';
import { LinkButton } from '../ui/Button';
import { HeroSpotlight } from './hero/HeroSpotlight';
import { HeroPortrait } from './hero/HeroPortrait';

const Hero = () => {
  return (
    <Section id="home" labelledBy="hero-heading">
      <div className="relative min-h-[85vh] grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-12 md:gap-16 items-center">
        <HeroSpotlight />

        {/* Text block */}
        <div className="relative z-10 space-y-8">
          <p className="label">Frontend Developer · Ho Chi Minh City</p>

          <h1 id="hero-heading">
            <span>Building </span>
            <span className="text-gradient">interfaces </span>
            <br className="hidden md:block" />
            <span>that feel right.</span>
          </h1>

          <p className="max-w-prose text-lg">
            I build web and mobile products with React and React Native.
            I care about performance on mid-range devices — because that's
            what most users in Vietnam actually have.
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
