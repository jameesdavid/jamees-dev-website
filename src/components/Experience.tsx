import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Full Stack Developer & Cloud Architect",
    company: "MC1 - Win The Market",
    period: "Feb 2023 – Present",
    bullets: [
      "Implemented microservices architecture with Pub/Sub messaging, decoupling heavy processes and optimizing large-scale imports and background processing.",
      "Replaced local cache in Cloud Run instances with Redis, ensuring consistency and efficiency in scalable multi-instance environments.",
      "Applied best practices in Firestore data modeling and supported the analytics team with BigQuery queries and analysis.",
      "Led the web team — delegating tasks, reviewing PRs, managing versioning across environments, and reporting weekly productivity.",
      "Deployed MCP servers, defined prompt engineering best practices, and integrated LLMs to accelerate development and analysis.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Simonini Software",
    period: "Oct 2022 – Present",
    bullets: [
      "Developed mobile and web applications using Flutter, Angular, and Node.js (TypeScript).",
      "Designed scalable backend solutions leveraging AWS and Google Cloud Platform with Firebase, MongoDB, and SQL databases.",
      "Integrated serverless services (AWS Lambda, Cloud Functions) and containerized workloads (Cloud Run).",
    ],
  },
  {
    role: "Freelancer Full Stack Developer",
    company: "JMD Softwares",
    period: "May 2019 – Dec 2022",
    bullets: [
      "Developed features and fixed bugs across front-end (React.js, Formik, Axios) and back-end (Node.js, Express, Sequelize, MongoDB) for CeCarbon.",
      "Built a statistical research platform with Angular and PrimeNG featuring advanced data tables and secure authentication for Grupo 6Sigma.",
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-24 bg-section-alt" aria-labelledby="experience-heading">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono font-medium text-accent tracking-widest uppercase mb-3">Experience</p>
          <h2 id="experience-heading" className="text-3xl md:text-4xl font-bold text-foreground">
            Career Timeline
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" aria-hidden="true" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                className="relative pl-12 md:pl-16"
              >
                {/* Dot */}
                <div className="absolute left-2.5 md:left-4.5 top-1 w-3 h-3 rounded-full bg-primary ring-4 ring-background" />

                <div className="bg-card rounded-xl p-6 shadow-card">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <Briefcase size={16} className="text-primary" />
                    <span className="text-xs font-mono text-accent">{exp.period}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{exp.role}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{exp.company}</p>
                  <ul className="space-y-2">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary mt-1 shrink-0">•</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
