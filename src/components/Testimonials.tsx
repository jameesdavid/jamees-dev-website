import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "I worked with Jamees on the same team. Initially, I was the only tech lead at the company, and later Jamees was asked to take on the role of Tech Lead for the Web team. He's brutally skilled. Jamees doesn't settle for shallow explanations; he digs deep until he fully understands how things actually work. He has strong knowledge of core topics like concurrency, asymptotic analysis, architectures, and best practices. On top of that, he's easily the person who knows Git best in my social circle. Technically sharp, curious, and dependable. I'd strongly recommend him for senior or tech lead roles.",
    name: "Renan Maganha",
    role: "Senior iOS Engineer · Swift & SwiftUI · UIKit",
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

        <div className="max-w-2xl mx-auto">
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
