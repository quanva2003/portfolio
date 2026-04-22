import { useState } from "react";
import { Section } from "../layout/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { useInView } from "../../lib/useInView";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full p-4 text-base text-text-primary bg-bg-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent";

const Contact = () => {
  const [status, setStatus] = useState<Status>("idle");
  const { ref, isInView } = useInView<HTMLFormElement>();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const form = e.currentTarget;
      const data = new FormData(form);
      data.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY ?? "");
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <Section id="contact" labelledBy="contact-heading">
      <SectionHeading id="contact-heading" prefix="Contact" highlight="Me" />

      <form
        ref={ref}
        onSubmit={handleSubmit}
        noValidate
        className={`max-w-xl mx-auto text-center mb-12 transition-all duration-700 delay-300 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {/* Status announcer for screen readers */}
        <div aria-live="polite" aria-atomic="true" className="mb-4 min-h-[1.5rem]">
          {status === "success" && (
            <p className="text-green-400 font-medium">
              Message sent! I'll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 font-medium">
              Something went wrong — please try again.
            </p>
          )}
        </div>

        <div className="flex flex-wrap justify-between mb-2">
          <div className="w-full md:w-[49%] mb-4 text-left">
            <label htmlFor="name" className="sr-only">Full Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Full Name"
              required
              className={inputClass}
            />
          </div>
          <div className="w-full md:w-[49%] mb-4 text-left">
            <label htmlFor="email" className="sr-only">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email Address"
              required
              className={inputClass}
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-between mb-2">
          <div className="w-full md:w-[49%] mb-4 text-left">
            <label htmlFor="mobile" className="sr-only">Mobile Number</label>
            <input
              id="mobile"
              name="mobile"
              type="tel"
              placeholder="Mobile Number"
              className={inputClass}
            />
          </div>
          <div className="w-full md:w-[49%] mb-4 text-left">
            <label htmlFor="subject" className="sr-only">Email Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="Email Subject"
              className={inputClass}
            />
          </div>
        </div>

        <label htmlFor="message" className="sr-only">Your Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          rows={10}
          required
          className={`${inputClass} mb-4 resize-none`}
        />

        <button
          type="submit"
          disabled={status === "submitting"}
          className="hover:cursor-pointer inline-block px-7 py-3 bg-accent rounded-full shadow-[0_0_1rem_#00fbff] text-lg text-bg-secondary font-semibold hover:shadow-none transition duration-500 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? "Sending…" : "Send Message"}
        </button>
      </form>
    </Section>
  );
};

export default Contact;
