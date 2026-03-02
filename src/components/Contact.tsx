import { useRef, useState, type FormEvent } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Mail, Linkedin, Github, Download, CheckCircle } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    // mailto fallback
    const subject = encodeURIComponent(`Contact from ${result.data.name}`);
    const body = encodeURIComponent(`Name: ${result.data.name}\nEmail: ${result.data.email}\n\n${result.data.message}`);
    window.location.href = `mailto:jameesdavidcs@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-section-alt" aria-labelledby="contact-heading">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono font-medium text-accent tracking-widest uppercase mb-3">Contact</p>
          <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold text-foreground">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Have a project in mind? I'd love to hear about it. Drop me a message and I'll get back to you promptly.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-3"
          >
            {submitted ? (
              <div className="bg-card rounded-xl p-8 shadow-card text-center">
                <CheckCircle size={48} className="text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card rounded-xl p-6 shadow-card space-y-5" noValidate>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">Name</label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Your name"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && <p id="name-error" className="text-destructive text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="you@example.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && <p id="email-error" className="text-destructive text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="Tell me about your project..."
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && <p id="message-error" className="text-destructive text-xs mt-1">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity w-full justify-center"
                >
                  Send Message <Send size={16} />
                </button>
              </form>
            )}
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2 flex flex-col gap-4"
          >
            <div className="bg-card rounded-xl p-6 shadow-card">
              <h3 className="font-semibold text-foreground mb-4">Get in Touch</h3>
              <a href="mailto:jameesdavidcs@gmail.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors mb-3">
                <Mail size={18} className="text-primary" /> jameesdavidcs@gmail.com
              </a>
              <div className="flex gap-3 mt-4">
                <a
                  href="https://linkedin.com/in/jameesdavid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://github.com/jameesdavid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="GitHub profile"
                >
                  <Github size={18} />
                </a>
              </div>
            </div>

            <a
              href="#"
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow flex items-center gap-3 group"
              aria-label="Download resume"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Download size={18} />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">Download Resume</p>
                <p className="text-xs text-muted-foreground">PDF • Updated 2025</p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
