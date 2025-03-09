import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen w-full px-[9%] py-28">
      <h2 className="text-4xl font-bold text-center mb-20">
        Contact <span className="text-[#00fbff]">Me</span>
      </h2>

      <form className="max-w-xl mx-auto text-center mb-12">
        <div className="flex flex-wrap justify-between mb-2">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full md:w-[49%] p-4 text-base text-[#ffffffe2] bg-[#323946] rounded-lg mb-4"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full md:w-[49%] p-4 text-base text-[#ffffffe2] bg-[#323946] rounded-lg mb-4"
          />
        </div>

        <div className="flex flex-wrap justify-between mb-2">
          <input
            type="number"
            placeholder="Mobile Number"
            className="w-full md:w-[49%] p-4 text-base text-[#ffffffe2] bg-[#323946] rounded-lg mb-4"
          />
          <input
            type="text"
            placeholder="Email Subject"
            className="w-full md:w-[49%] p-4 text-base text-[#ffffffe2] bg-[#323946] rounded-lg mb-4"
          />
        </div>

        <textarea
          placeholder="Your Message"
          rows="10"
          className="w-full p-4 text-base text-[#ffffffe2] bg-[#323946] rounded-lg mb-4 resize-none"
        ></textarea>

        <button
          type="submit"
          className="mt-4 inline-block px-7 py-3 bg-[#00fbff] rounded-full shadow-[0_0_1rem_#00fbff] text-lg text-[#323946] font-semibold hover:shadow-none transition duration-500 cursor-pointer"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
