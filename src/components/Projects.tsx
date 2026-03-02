import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

type Category = "All" | "Frontend" | "Backend" | "Cloud" | "Data" | "AI";

const projects = [
  {
    title: "MC1 Pub/Sub Microservices",
    desc: "Decoupled heavy processes from the main server using Pub/Sub messaging, optimizing large-scale imports and background processing for 100+ clients globally.",
    tags: ["GCP", "Pub/Sub", "Cloud Run", "NestJS", "TypeScript"],
    categories: ["Cloud", "Backend"] as Category[],
  },
  {
    title: "Redis Distributed Caching",
    desc: "Replaced local cache in Cloud Run instances with Redis, ensuring consistency and efficiency across scalable multi-instance environments.",
    tags: ["Redis", "Cloud Run", "Node.js", "TypeScript"],
    categories: ["Backend", "Cloud"] as Category[],
  },
  {
    title: "Firestore & BigQuery Analytics",
    desc: "Optimized Firestore data modeling and supported analytics team with BigQuery queries, analysis, and data visualization.",
    tags: ["Firebase", "Firestore", "BigQuery", "SQL", "Angular"],
    categories: ["Data", "Frontend"] as Category[],
  },
  {
    title: "LLM & MCP Integration",
    desc: "Deployed MCP servers, defined prompt engineering best practices, and integrated LLMs to accelerate development workflows and analysis.",
    tags: ["LLMs", "MCP", "Prompt Engineering", "Node.js"],
    categories: ["AI", "Backend"] as Category[],
  },
  {
    title: "Flutter & Angular Apps",
    desc: "Developed cross-platform mobile and web applications using Flutter, Angular, and Node.js with serverless backends on AWS and GCP.",
    tags: ["Flutter", "Angular", "TypeScript", "AWS Lambda", "Cloud Functions"],
    categories: ["Frontend", "Cloud"] as Category[],
  },
  {
    title: "CeCarbon Platform",
    desc: "Full-stack contributions across React.js front-end and Node.js/Express/MongoDB back-end, building features and resolving bugs.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Sequelize"],
    categories: ["Frontend", "Backend"] as Category[],
  },
];

const filterTabs: Category[] = ["All", "Frontend", "Backend", "Cloud", "Data", "AI"];

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState<Category>("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.categories.includes(active));

  return (
    <section id="projects" className="py-24" aria-labelledby="projects-heading">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-mono font-medium text-accent tracking-widest uppercase mb-3">Projects</p>
          <h2 id="projects-heading" className="text-3xl md:text-4xl font-bold text-foreground">
            Featured Work
          </h2>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
          role="tablist"
          aria-label="Filter projects by category"
        >
          {filterTabs.map((tab) => (
            <button
              key={tab}
              role="tab"
              aria-selected={active === tab}
              onClick={() => setActive(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                active === tab
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filtered.map((project, i) => (
            <motion.article
              key={project.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow flex flex-col"
            >
              <h3 className="text-lg font-bold text-foreground mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-1">{project.desc}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="badge-skill text-[11px] px-2 py-0.5 rounded-md font-mono">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <Github size={14} /> Code
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                  aria-label={`View ${project.title} live`}
                >
                  <ExternalLink size={14} /> Live
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
