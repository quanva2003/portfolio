import { MenuOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import { MENU_ITEMS, HEADER_CONFIG } from "../constants";

const Header = () => {
  const [activeSection, setActiveSection] = useState<string | null>("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > HEADER_CONFIG.stickyThreshold);

      const sections = document.querySelectorAll("section");
      sections.forEach((sec) => {
        const top = window.scrollY;
        const offset = sec.offsetTop - HEADER_CONFIG.scrollOffset;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full p-4 md:px-gutter bg-bg-primary flex justify-between items-center z-50 ${
        isSticky ? "border-b border-black/20" : ""
      }`}
    >
      <a
        href="#"
        className="text-2xl text-text-primary font-semibold cursor-default hover:drop-shadow-[0_0_10px_rgba(0,251,255,0.5)] transition-all duration-300 hover:cursor-pointer"
      >
        {HEADER_CONFIG.brandName}{" "}
        <span className="text-accent hover:drop-shadow-[0_0_15px_rgba(0,251,255,0.8)] transition-all duration-300">
          {HEADER_CONFIG.brandHighlight}
        </span>
      </a>

      <div className="flex items-center">
        <div
          className="text-text-primary text-2xl cursor-pointer md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <MenuOutlined />
        </div>

        <nav
          className={`${
            menuOpen
              ? "block absolute top-16 left-0 w-full bg-bg-primary p-4"
              : "hidden"
          } md:block`}
        >
          <div className="flex flex-col md:flex-row">
            {MENU_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`text-lg md:ml-14 mb-4 md:mb-0 hover:drop-shadow-[0_0_8px_rgba(0,251,255,0.4)] transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-accent drop-shadow-[0_0_8px_rgba(0,251,255,0.6)]"
                    : "text-text-primary hover:text-accent"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
