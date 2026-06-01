const technologies = [
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", name: "React", category: "Frontend" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", name: "Python", category: "AI/ML" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg", name: "Django", category: "Backend" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", name: "SQL", category: "Databases" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", name: "AWS", category: "Cloud" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", name: "C++", category: "Engineering" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", name: "Azure", category: "Cloud" },
  { icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/tableau.svg", name: "Tableau", category: "Analytics" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", name: "Git", category: "Tools" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg", name: "R", category: "AI/ML" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", name: "VS Code", category: "Tools" },
  { icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/powerbi.svg", name: "Power BI", category: "Analytics" },
];

export const Skills: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <section id="skills" className={`section-block ${className}`}>
      <div className="section-wrap">
        <div className="hermes-grid">
          <div className="hermes-cell col-span-full text-center">
            <h2 className="section-title mt-5">Technologies<br />and Tools</h2>
          </div>
          <div className="hermes-cell col-span-full text-center">
            <p className="mx-auto max-w-[640px] text-[1.0625rem] leading-relaxed tracking-normal opacity-60" style={{ textTransform: "none" }}>
              A collection of technologies and tools I work with.
            </p>
          </div>

          <div className="hermes-cell col-span-full !p-0">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
              {technologies.map((tech, index) => (
                <article key={tech.name} className="hermes-hover tech-logo-card border-b border-current/20 p-4 sm:p-5 lg:border-r">
                  <div className="flex items-center justify-between">
                    <small className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] opacity-40">
                      {String(index + 1).padStart(2, "0")}
                    </small>
                    <span className="premium-chip hidden sm:inline-flex">{tech.category}</span>
                  </div>

                  <div className="mt-6 grid place-items-center">
                    <div className="tech-logo-frame">
                      <img src={tech.icon} alt={`${tech.name} logo`} loading="lazy" className="h-12 w-12 object-contain sm:h-14 sm:w-14" />
                    </div>
                  </div>

                  <h3 className="mt-5 text-center font-mono text-[0.875rem] font-semibold uppercase tracking-[0.16em]">
                    {tech.name}
                  </h3>
                  <p className="mt-2 text-center font-mono text-[0.6875rem] uppercase tracking-[0.14em] opacity-45 sm:hidden">
                    {tech.category}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
