import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const Home = () => {
  const textRef = useRef(null);

  useEffect(() => {
    // ScrollReveal logic would go here (needs to be installed)

    // Typed.js initialization
    const typed = new Typed(textRef.current, {
      strings: ["Frontend Developer", "Mobile Developer", "Backend Developer"],
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
      className="min-h-screen w-full px-[9%] py-28 flex flex-col md:flex-row justify-center items-center"
    >
      <div className="mt-10 md:-mt-40 w-full md:w-1/2">
        <h3 className="text-3xl font-bold mt-10">Hello, It's Me</h3>
        <h1 className="text-4xl font-bold text-[#00fbff] my-2">Van Anh Quan</h1>
        <h3 className="text-3xl font-bold flex gap-2">
          And I'm a <span ref={textRef} className="text-[#00fbff]"></span>
        </h3>

        <div className="mt-12 mb-10">
          <a
            href="#"
            className="inline-flex justify-center items-center w-14 h-14 border-2 border-[#00fbff] rounded-full text-xl text-[#00fbff] mr-6 hover:bg-[#00fbff] hover:text-[#323946] hover:shadow-[0_0_1rem_#00fbff] transition duration-300"
          >
            <svg
              viewBox="-5 0 20 20"
              className="w-[23px] h-[23px]"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-385.000000, -7399.000000)"
                    fill="#000000"
                  >
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path
                        d="M335.821282,7259 L335.821282,7250 L338.553693,7250 L339,7246 L335.821282,7246 L335.821282,7244.052 C335.821282,7243.022 335.847593,7242 337.286884,7242 L338.744689,7242 L338.744689,7239.14 C338.744689,7239.097 337.492497,7239 336.225687,7239 C333.580004,7239 331.923407,7240.657 331.923407,7243.7 L331.923407,7246 L329,7246 L329,7250 L331.923407,7250 L331.923407,7259 L335.821282,7259 Z"
                        id="facebook-[#176]"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </a>
          <a
            href="#"
            className="inline-flex justify-center items-center w-14 h-14 border-2 border-[#00fbff] rounded-full text-xl text-[#00fbff] mr-6 hover:bg-[#00fbff] hover:text-[#323946] hover:shadow-[0_0_1rem_#00fbff] transition duration-300"
          >
            <i className="bx bxl-twitter"></i>
          </a>
          <a
            href="#"
            className="inline-flex justify-center items-center w-14 h-14 border-2 border-[#00fbff] rounded-full text-xl text-[#00fbff] mr-6 hover:bg-[#00fbff] hover:text-[#323946] hover:shadow-[0_0_1rem_#00fbff] transition duration-300"
          >
            <i className="bx bxl-instagram-alt"></i>
          </a>
          <a
            href="#"
            className="inline-flex justify-center items-center w-14 h-14 border-2 border-[#00fbff] rounded-full text-xl text-[#00fbff] mr-6 hover:bg-[#00fbff] hover:text-[#323946] hover:shadow-[0_0_1rem_#00fbff] transition duration-300"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>

        <a
          href="#"
          className="inline-block px-7 py-3 bg-[#00fbff] rounded-full shadow-[0_0_1rem_#00fbff] text-lg text-[#323946] font-semibold hover:shadow-none transition duration-500"
        >
          Download CV
        </a>
      </div>

      <div className="mt-20 md:mt-0 md:mr-[-5rem] md:z-[-1] animate-float">
        <img src="/assets/image/home1.png" alt="home" className="w-[40vw]" />
      </div>
    </section>
  );
};

export default Home;
