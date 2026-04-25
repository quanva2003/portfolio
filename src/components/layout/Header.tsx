import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MENU_ITEMS, HEADER_CONFIG } from "../../config/header";
import MenuIcon from "../ui/icons/MenuIcon";
import CloseIcon from "../ui/icons/CloseIcon";

const Header = () => {
  const [activeSection, setActiveSection] = useState<string | null>("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // rAF-throttled scroll → only for sticky border, not section tracking
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      requestAnimationFrame(() => {
        setIsSticky(window.scrollY > HEADER_CONFIG.stickyThreshold);
        ticking = false;
      });
      ticking = true;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver for active section (no scroll event needed)
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.getAttribute("id"));
          }
        });
      },
      { rootMargin: "-40% 0px -60% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full p-4 md:px-[var(--spacing-gutter-desktop)] bg-bg flex justify-between items-center z-50 ${
        isSticky ? "border-b border-black/20" : ""
      }`}
    >
      <a
        href="#"
        className="text-2xl text-text-primary font-semibold hover:cursor-pointer"
      >
        {HEADER_CONFIG.brandName}{" "}
        <span className="text-accent">{HEADER_CONFIG.brandHighlight}</span>
      </a>

      <div className="flex items-center">
        <button
          type="button"
          className="text-text-primary cursor-pointer md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        <nav
          id="mobile-nav"
          className={`${
            menuOpen
              ? "block absolute top-16 left-0 w-full bg-bg p-4"
              : "hidden"
          } md:block`}
        >
          <div className="flex flex-col md:flex-row">
            {MENU_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className="relative text-lg md:ml-14 mb-4 md:mb-0 px-3 py-1 transition-colors duration-300 text-text-primary hover:text-accent"
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-x-3 bottom-0 h-px bg-accent"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}
                </a>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
