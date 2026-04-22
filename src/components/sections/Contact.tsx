import { LinkButton } from "../ui/Button";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen w-full px-gutter py-28">
      <h2
        className="text-4xl font-bold text-center mb-20"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Contact <span className="text-accent">Me</span>
      </h2>

      <form
        className="max-w-xl mx-auto text-center mb-12"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div className="flex flex-wrap justify-between mb-2">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full md:w-[49%] p-4 text-base text-text-primary bg-bg-secondary rounded-lg mb-4"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full md:w-[49%] p-4 text-base text-text-primary bg-bg-secondary rounded-lg mb-4"
          />
        </div>

        <div className="flex flex-wrap justify-between mb-2">
          <input
            type="number"
            placeholder="Mobile Number"
            className="w-full md:w-[49%] p-4 text-base text-text-primary bg-bg-secondary rounded-lg mb-4"
          />
          <input
            type="text"
            placeholder="Email Subject"
            className="w-full md:w-[49%] p-4 text-base text-text-primary bg-bg-secondary rounded-lg mb-4"
          />
        </div>

        <textarea
          placeholder="Your Message"
          rows={10}
          className="w-full p-4 text-base text-text-primary bg-bg-secondary rounded-lg mb-4 resize-none"
        />

        <LinkButton href="#" content="Send Message" />
      </form>
    </section>
  );
};

export default Contact;
