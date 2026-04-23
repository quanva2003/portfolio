import { Section } from '../layout/Section';
import { SectionHeading } from '../ui/SectionHeading';

function StackGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="label mb-3">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="font-mono text-xs px-2 py-1 rounded border border-border text-text-muted"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

const About = () => {
  return (
    <Section id="about" labelledBy="about-heading" className="bg-bg-elevated">
      <SectionHeading id="about-heading" prefix="About" highlight="Me" />

      {/* Availability pill */}
      <div className="flex justify-center mb-12">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-bg-glass">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="font-mono text-xs text-text-secondary">
            Available for freelance · Q2 2026
          </span>
        </span>
      </div>

      <div className="grid md:grid-cols-[2fr_1fr] gap-12 md:gap-16">
        {/* Left: prose */}
        <div className="space-y-6">
          <p className="text-lg text-text-secondary leading-relaxed">
            I'm a Frontend Developer based in Ho Chi Minh City, Vietnam,
            building web and mobile products with React and React Native.
            I focus on performance on mid-range devices — because that's
            what most users in Vietnam actually have.
          </p>
          <p className="text-lg text-text-secondary leading-relaxed">
            I started freelancing on Upwork, delivering interfaces for
            international clients. Since 2024 I've been at Dan Solutions,
            where I work on larger-scale apps with React Native, Next.js,
            and Zustand — and contribute to team workflows through GitHub
            collaboration and version control.
          </p>
          {/* TODO: add third paragraph with personal philosophy / what drives your work */}
        </div>

        {/* Right: stack groups */}
        <div className="space-y-8">
          <StackGroup
            title="Frontend"
            items={['React', 'TypeScript', 'Next.js', 'Tailwind CSS']}
          />
          <StackGroup
            title="Mobile"
            items={['React Native', 'Expo']}
          />
          <StackGroup
            title="State & Data"
            items={['Zustand', 'Node.js', 'MongoDB']}
          />
          <StackGroup
            title="Tools"
            items={['Git', 'Vite', 'Figma']}
          />
        </div>
      </div>
    </Section>
  );
};

export default About;
