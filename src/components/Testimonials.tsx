import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Jamees architected our microservices infrastructure on GCP, handling Pub/Sub integrations and Redis caching that scaled across 31 countries. His technical leadership and clean code practices are outstanding.",
    name: "Team Lead",
    role: "MC1 - Win The Market",
  },
  {
    text: "Jamees's ability to deliver full-stack solutions across Flutter, Angular, and cloud backends made him an invaluable asset. His work on serverless integrations was top-notch.",
    name: "Project Manager",
    role: "Simonini Software",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24" aria-labelledby="testimonials-heading">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono font-medium text-accent tracking-widest uppercase mb-3">Testimonials</p>
          <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold text-foreground">
            What People Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="bg-card rounded-xl p-6 shadow-card relative"
            >
              <Quote size={24} className="text-primary/20 mb-3" aria-hidden="true" />
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 italic">"{t.text}"</p>
              <footer>
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
