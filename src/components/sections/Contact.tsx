import { LinkButton } from "../ui/Button";
import { Section } from "../layout/Section";
import { SectionHeading } from "../ui/SectionHeading";

const Contact = () => {
  return (
    <Section id="contact" labelledBy="contact-heading">
      <SectionHeading id="contact-heading" prefix="Contact" highlight="Me" />

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
    </Section>
  );
};

export default Contact;
