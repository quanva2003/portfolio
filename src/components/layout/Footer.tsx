import { SOCIAL_ICONS } from '../../data/socialIcons';

const Footer = () => {
  return (
    <footer className="border-t border-border mt-32">
      <div className="px-[var(--spacing-gutter-desktop)] py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-mono text-xs text-text-muted">
          © 2026 QuanVA · Built with React, TypeScript, Tailwind.{' '}
          <a
            href="https://github.com/quanva2003/portfolio"
            className="hover:text-text-primary transition-colors underline underline-offset-4"
          >
            View source →
          </a>
        </p>
        <div className="flex gap-4">
          {SOCIAL_ICONS.map((icon) => (
            <a
              key={icon.id}
              href={icon.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={icon.name}
              className="inline-flex items-center justify-center w-11 h-11 text-text-muted hover:text-text-primary transition-colors"
            >
              <icon.Icon className="w-[18px] h-[18px]" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
