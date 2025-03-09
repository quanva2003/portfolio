import React from "react";

const Services = () => {
  return (
    <section id="services" className="min-h-screen w-full px-[9%] py-28">
      <h2 className="text-4xl font-bold text-center mb-20">
        Our <span className="text-[#00fbff]">Services</span>
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-8 mb-20">
        <div className="flex-1 min-w-[300px] bg-[#323946] p-8 rounded-3xl text-center border-2 border-[#1f242d] hover:border-[#00fbff] hover:scale-[1.02] transition duration-500">
          <i className="bx bx-code-alt text-6xl text-[#00fbff]"></i>
          <h3 className="text-2xl font-semibold my-4">Front End</h3>
          <p className="text-base mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque amet
            atque voluptate saepe magni aspernatur id nemo quasi quibusdam
            ratione.
          </p>
          <a
            href="#"
            className="inline-block px-7 py-3 bg-[#00fbff] rounded-full shadow-[0_0_1rem_#00fbff] text-lg text-[#323946] font-semibold hover:shadow-none transition duration-500"
          >
            Read More
          </a>
        </div>

        <div className="flex-1 min-w-[300px] bg-[#323946] p-8 rounded-3xl text-center border-2 border-[#1f242d] hover:border-[#00fbff] hover:scale-[1.02] transition duration-500">
          <i className="bx bxs-paint text-6xl text-[#00fbff]"></i>
          <h3 className="text-2xl font-semibold my-4">Graphic Design</h3>
          <p className="text-base mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            fugiat quaerat vero magnam? Sunt exercitationem atque distinctio
            deleniti culpa minus.
          </p>
          <a
            href="#"
            className="inline-block px-7 py-3 bg-[#00fbff] rounded-full shadow-[0_0_1rem_#00fbff] text-lg text-[#323946] font-semibold hover:shadow-none transition duration-500"
          >
            Read More
          </a>
        </div>

        <div className="flex-1 min-w-[300px] bg-[#323946] p-8 rounded-3xl text-center border-2 border-[#1f242d] hover:border-[#00fbff] hover:scale-[1.02] transition duration-500">
          <i className="bx bx-data text-6xl text-[#00fbff]"></i>
          <h3 className="text-2xl font-semibold my-4">Back End</h3>
          <p className="text-base mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque amet
            atque voluptate saepe magni aspernatur id nemo quasi quibusdam
            ratione.
          </p>
          <a
            href="#"
            className="inline-block px-7 py-3 bg-[#00fbff] rounded-full shadow-[0_0_1rem_#00fbff] text-lg text-[#323946] font-semibold hover:shadow-none transition duration-500"
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
