import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const badges = ["TypeScript", "Angular", "NestJS", "Node.js", "GCP", "Firebase", "Flutter", "Docker", "BigQuery"];

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" aria-hidden="true" loading="eager" />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-sm font-mono font-medium text-accent tracking-widest uppercase mb-4">
            Hello, I'm Jamees David
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-tight mb-6">
            Web Developer
            <br />
            <span className="text-gradient">&amp; Cloud Architect</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            I design and build scalable, production-grade systems with{" "}
            <span className="font-semibold text-foreground">TypeScript</span>,{" "}
            <span className="font-semibold text-foreground">Angular</span>,{" "}
            <span className="font-semibold text-foreground">NestJS</span>,{" "}
            <span className="font-semibold text-foreground">Flutter</span>, and{" "}
            <span className="font-semibold text-foreground">Google Cloud Platform</span>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-10"
        >
          {badges.map((b) => (
            <span
              key={b}
              className="badge-skill px-3 py-1 rounded-full text-xs font-mono font-medium"
            >
              {b}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            View Projects <ArrowRight size={18} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-semibold bg-background/60 hover:bg-secondary transition-colors"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </motion.a>
    </section>
  );
};

export default Hero;
