import React, { useState, useEffect } from "react";

const Header = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Sticky header logic
      setIsSticky(window.scrollY > 100);

      // Active section logic
      const sections = document.querySelectorAll("section");
      sections.forEach((sec) => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full p-4 md:px-[9%] bg-[#1f242d] flex justify-between items-center z-50 ${
        isSticky ? "border-b border-black/20" : ""
      }`}
    >
      <a
        href="#"
        className="text-2xl text-[#ffffffe2] font-semibold cursor-default"
      >
        Wuan's <span className="text-[#00fbff]">Portfolio</span>
      </a>

      <div className="flex items-center">
        {/* Mobile menu icon */}
        <div
          className="text-[#ffffffe2] text-2xl cursor-pointer md:hidden"
          onClick={toggleMenu}
        >
          ádasdasd
          <i className={`bx ${menuOpen ? "bx-x" : "bx-menu"}`}></i>
        </div>

        {/* Navigation */}
        <nav
          className={`${
            menuOpen
              ? "block absolute top-16 left-0 w-full bg-[#1f242d] p-4"
              : "hidden"
          } md:block`}
        >
          <div className="flex flex-col md:flex-row">
            <a
              href="#home"
              className={`text-lg md:ml-14 mb-2 md:mb-0 ${
                activeSection === "home"
                  ? "text-[#00fbff]"
                  : "text-[#ffffffe2] hover:text-[#00fbff] transition duration-300"
              }`}
            >
              Home
            </a>
            <a
              href="#about"
              className={`text-lg md:ml-14 mb-2 md:mb-0 ${
                activeSection === "about"
                  ? "text-[#00fbff]"
                  : "text-[#ffffffe2] hover:text-[#00fbff] transition duration-300"
              }`}
            >
              About
            </a>
            <a
              href="#services"
              className={`text-lg md:ml-14 mb-2 md:mb-0 ${
                activeSection === "services"
                  ? "text-[#00fbff]"
                  : "text-[#ffffffe2] hover:text-[#00fbff] transition duration-300"
              }`}
            >
              Services
            </a>
            <a
              href="#portfolio"
              className={`text-lg md:ml-14 mb-2 md:mb-0 ${
                activeSection === "portfolio"
                  ? "text-[#00fbff]"
                  : "text-[#ffffffe2] hover:text-[#00fbff] transition duration-300"
              }`}
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className={`text-lg md:ml-14 ${
                activeSection === "contact"
                  ? "text-[#00fbff]"
                  : "text-[#ffffffe2] hover:text-[#00fbff] transition duration-300"
              }`}
            >
              Contact
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
