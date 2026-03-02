import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Linkedin, Github, Download } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

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
            Have a project in mind? I'd love to hear about it. Reach out and I'll get back to you promptly.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-sm mx-auto flex flex-col gap-4"
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
            href="/Jamees Souza - Web Developer.pdf"
            download="Jamees Souza - Web Developer.pdf"
            className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow flex items-center gap-3 group"
            aria-label="Download CV"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <Download size={18} />
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm">Download CV</p>
              <p className="text-xs text-muted-foreground">PDF • Updated 2026</p>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
