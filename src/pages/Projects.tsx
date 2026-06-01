import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "Movie Box Office Predictor",
    subtitle: "Predictive Analytics Dashboard",
    tech: ["Power BI", "Python", "Pandas", "Scikit-learn"],
    problem: "Need for accurate box office revenue predictions and trend analysis across diverse movie datasets",
    solution: "Developed an ML-powered dashboard with 85% prediction accuracy and interactive visualizations for stakeholder insights",
    codeUrl: "https://github.com/nashish109/movie-predictor",
    demoUrl: "https://movie-predictor-demo.vercel.app",
    image: "/project-images/movie-predictor.svg",
  },
  {
    title: "Astrological Prediction Platform",
    subtitle: "Full-stack Web Application",
    tech: ["Django", "MySQL", "React", "Redis"],
    problem: "Creating personalized astrological predictions while handling high concurrent user traffic",
    solution: "Built scalable platform with caching, achieving 20% higher user engagement and 99.9% uptime",
    codeUrl: "https://github.com/nashish109/astro-predict",
    demoUrl: "https://astro-predict.com",
    image: "/project-images/astro-predict.svg",
  },
  {
    title: "Event Management System",
    subtitle: "Enterprise Application",
    tech: ["Spring Boot", "React", "PostgreSQL", "Docker"],
    problem: "Complex event scheduling and real-time attendance tracking for university events",
    solution: "Implemented microservices architecture handling 10k+ daily users with real-time analytics",
    codeUrl: "https://github.com/nashish109/event-sys",
    demoUrl: "https://event-sys-demo.com",
    image: "/project-images/event-system.svg",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-block">
      <div className="section-wrap">
        <div className="hermes-grid">
          <div className="hermes-cell col-span-full lg:col-span-2">
            <small className="section-eyebrow">Executable Library</small>
            <h2 className="section-title mt-3">Projects Showcase</h2>
          </div>
          <div className="hermes-cell col-span-full lg:col-span-3">
            <p className="max-w-[640px] text-[1.0625rem] leading-relaxed tracking-normal opacity-60" style={{ textTransform: "none" }}>
              Selected full-stack, analytics, and enterprise applications arranged as a focused engineering timeline.
            </p>
          </div>

          <div className="hermes-cell col-span-full !p-0">
            <div className="project-timeline">
              {projects.map((project, index) => {
                const isRight = index % 2 === 1;
                return (
                  <article key={project.title} className={`project-story ${isRight ? "project-story-right" : "project-story-left"}`}>
                    <div className="project-node" aria-hidden="true">
                      <span>{String(index + 1).padStart(2, "0")}</span>
                    </div>

                    <div className="project-panel hermes-hover">
                      <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
                        <div className={`project-media ${isRight ? "lg:order-2" : ""}`}>
                          <div className="border-4 border-double border-current/40 bg-background/40 p-2">
                            <img src={project.image} alt={project.title} className="aspect-[16/10] w-full object-cover opacity-85" />
                          </div>
                        </div>

                        <div className="project-copy">
                          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                            <div>
                              <small className="section-eyebrow opacity-60">{project.subtitle}</small>
                              <h3 className="mt-3 text-2xl font-semibold uppercase leading-tight tracking-[0.035em] sm:text-3xl">{project.title}</h3>
                            </div>
                            <span className="premium-chip w-fit">Project {String(index + 1).padStart(2, "0")}</span>
                          </div>

                          <div className="mt-6 grid gap-4">
                            <div>
                              <small className="section-eyebrow opacity-50">Problem</small>
                              <p className="mt-2 text-[0.98rem] leading-relaxed tracking-normal opacity-60" style={{ textTransform: "none" }}>{project.problem}</p>
                            </div>
                            <div>
                              <small className="section-eyebrow opacity-50">Solution</small>
                              <p className="mt-2 text-[0.98rem] leading-relaxed tracking-normal opacity-70" style={{ textTransform: "none" }}>{project.solution}</p>
                            </div>
                          </div>

                          <div className="mt-5 flex flex-wrap gap-2">
                            {project.tech.map((item) => (
                              <span key={item} className="premium-chip">{item}</span>
                            ))}
                          </div>

                          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                            {project.demoUrl && (
                              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="premium-button flex-1 px-3 py-2.5">
                                Launch
                                <ArrowUpRight className="h-4 w-4" />
                              </a>
                            )}
                            {project.codeUrl && (
                              <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="premium-button-secondary flex-1 px-3 py-2.5">
                                <Github className="h-4 w-4" />
                                Source
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
