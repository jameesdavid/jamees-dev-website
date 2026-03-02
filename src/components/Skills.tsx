import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Monitor, Server, Cloud, Database, Container, TestTube, BrainCircuit,
} from "lucide-react";

const categories = [
  {
    icon: Monitor,
    title: "Frontend",
    skills: ["Angular", "TypeScript", "React", "Vue.js", "Next.js", "HTML/CSS", "JavaScript", "Ionic"],
  },
  {
    icon: Server,
    title: "Backend",
    skills: ["NestJS", "Node.js", "REST APIs", "Express"],
  },
  {
    icon: Cloud,
    title: "Cloud & Infra",
    skills: ["Cloud Run", "Pub/Sub", "Cloud Functions", "Firebase", "Firestore", "AWS Lambda", "Redis"],
  },
  {
    icon: Database,
    title: "Data",
    skills: ["BigQuery", "SQL", "MongoDB", "Firestore", "Data Modeling"],
  },
  {
    icon: Container,
    title: "DevOps",
    skills: ["Docker", "Git", "CI/CD Pipelines"],
  },
  {
    icon: TestTube,
    title: "Testing",
    skills: ["Jest", "Playwright", "Unit Testing", "E2E Testing"],
  },
  {
    icon: BrainCircuit,
    title: "AI & ML",
    skills: ["LLMs", "RAG", "Prompt Engineering", "MCP Servers"],
  },
  {
    icon: Monitor,
    title: "Mobile",
    skills: ["Flutter", "Ionic", "Cross-Platform"],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-24" aria-labelledby="skills-heading">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono font-medium text-accent tracking-widest uppercase mb-3">Skills</p>
          <h2 id="skills-heading" className="text-3xl md:text-4xl font-bold text-foreground">
            Technical Expertise
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="bg-card rounded-xl p-5 shadow-card hover:shadow-card-hover transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <cat.icon size={20} />
                </div>
                <h3 className="font-semibold text-foreground">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span key={s} className="badge-skill text-xs px-2.5 py-1 rounded-md font-mono">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
