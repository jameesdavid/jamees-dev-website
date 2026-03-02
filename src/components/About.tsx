import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Layers, Cpu, Shield } from "lucide-react";

const principles = [
  { icon: Layers, title: "Clean Architecture", desc: "Separating concerns for maintainable, testable systems." },
  { icon: Shield, title: "SOLID Principles", desc: "Writing robust code that scales with team and product growth." },
  { icon: Cpu, title: "Domain-Driven Design", desc: "Modeling complex domains with clear boundaries and ubiquitous language." },
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 bg-section-alt" aria-labelledby="about-heading">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-sm font-mono font-medium text-accent tracking-widest uppercase mb-3">About Me</p>
          <h2 id="about-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Engineering Scalable Systems
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Full stack developer and cloud solutions architect with strong expertise in Angular, TypeScript, Node.js,
            NestJS, Flutter, Firebase, and Google Cloud Platform. Experienced in designing and implementing scalable
            microservices, CI/CD pipelines, and Pub/Sub integrations, applying SOLID principles, Clean Architecture,
            and Domain-Driven Design to deliver high-performance, secure, and maintainable systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                <p.icon size={24} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
