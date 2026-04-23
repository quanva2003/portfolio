import { useState } from 'react';
import { Section } from '../layout/Section';
import { SectionHeading } from '../ui/SectionHeading';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const inputClass =
  'w-full px-4 py-3 text-base text-text-primary bg-transparent border border-border rounded-lg ' +
  'focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors duration-200';

const Contact = () => {
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const form = e.currentTarget;
      const data = new FormData(form);
      data.append('access_key', import.meta.env.VITE_WEB3FORMS_KEY ?? '');
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <Section id="contact" labelledBy="contact-heading">
      <SectionHeading id="contact-heading" prefix="Contact" highlight="Me" />

      <div className="max-w-2xl mx-auto">
        {/* Status announcer for screen readers */}
        <div aria-live="polite" aria-atomic="true" className="mb-6 min-h-[1.5rem] text-center">
          {status === 'success' && (
            <p className="text-green-400 font-medium">
              Message sent! I'll get back to you soon.
            </p>
          )}
          {status === 'error' && (
            <p className="text-red-400 font-medium">
              Something went wrong — please try again.
            </p>
          )}
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          {/* Name + Email row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
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
            <div>
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

          {/* Mobile + Subject row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="mobile" className="sr-only">Mobile Number</label>
              <input
                id="mobile"
                name="mobile"
                type="tel"
                placeholder="Mobile Number"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="subject" className="sr-only">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Subject"
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="sr-only">Your Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows={8}
              required
              className={`${inputClass} resize-none`}
            />
          </div>

          <div className="flex justify-center md:justify-start">
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full md:w-auto px-8 py-3 bg-accent text-bg font-semibold rounded-lg
                         hover:opacity-90 transition-opacity duration-200
                         disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? 'Sending…' : 'Send Message'}
            </button>
          </div>
        </form>

        <p className="text-center text-sm text-text-muted mt-6">
          Or email me directly at{' '}
          <a
            href="mailto:vananhquanpro@gmail.com"
            className="underline underline-offset-4 hover:text-text-primary transition-colors"
          >
            vananhquanpro@gmail.com
          </a>
        </p>
      </div>
    </Section>
  );
};

export default Contact;
