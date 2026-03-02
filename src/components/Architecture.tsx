import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FileText, ArrowUpRight } from "lucide-react";

const articles = [
  {
    title: "Clean Architecture in NestJS: A Practical Guide",
    excerpt: "How to structure a NestJS application with domain layers, use cases, and adapters for long-term maintainability.",
    tag: "Architecture",
  },
  {
    title: "Firestore Data Modeling for Multi-Tenant Systems",
    excerpt: "Patterns and trade-offs for designing Firestore schemas that support tenant isolation and efficient queries.",
    tag: "Cloud",
  },
  {
    title: "CI/CD on Azure DevOps: From Zero to Production",
    excerpt: "Building reliable pipelines with Docker, automated testing, and staged deployments for Node.js services.",
    tag: "DevOps",
  },
];

const Architecture = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="writing" className="py-24 bg-section-alt" aria-labelledby="writing-heading">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono font-medium text-accent tracking-widest uppercase mb-3">Writing</p>
          <h2 id="writing-heading" className="text-3xl md:text-4xl font-bold text-foreground">
            Technical Notes
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {articles.map((a, i) => (
            <motion.a
              key={a.title}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
              className="group bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow block"
            >
              <div className="flex items-center gap-2 mb-3">
                <FileText size={16} className="text-accent" />
                <span className="badge-skill text-[11px] px-2 py-0.5 rounded-md font-mono">{a.tag}</span>
              </div>
              <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors flex items-start gap-1">
                {a.title}
                <ArrowUpRight size={14} className="shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-sm text-muted-foreground">{a.excerpt}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Architecture;
