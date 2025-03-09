import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center flex-wrap p-4 md:px-[9%] bg-[#323946]">
      <div className="text-base">
        <p>Copyright &copy; 2025 by WuanVan5076 | All Rights Reserved.</p>
      </div>

      <div>
        <a
          href="#home"
          className="inline-flex justify-center items-center p-2 bg-[#00fbff] rounded-lg hover:shadow-[0_0_1rem_#00fbff] transition duration-500"
        >
          <i className="bx bx-up-arrow-alt text-xl text-[#323946]"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
