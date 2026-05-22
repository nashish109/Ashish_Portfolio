const technologyIcons = [
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", name: "React", color: "text-blue-400", bgColor: "from-blue-400/35 to-cyan-300/15" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", name: "Python", color: "text-green-400", bgColor: "from-green-400/35 to-yellow-300/15" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg", name: "Django", color: "text-emerald-400", bgColor: "from-emerald-400/35 to-green-300/15" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", name: "SQL", color: "text-cyan-400", bgColor: "from-cyan-400/35 to-blue-300/15" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", name: "AWS", color: "text-purple-400", bgColor: "from-orange-300/35 to-purple-300/15" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", name: "C++", color: "text-blue-500", bgColor: "from-blue-400/35 to-indigo-300/15" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", name: "Azure", color: "text-yellow-400", bgColor: "from-sky-400/35 to-blue-300/15" },
  { icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/tableau.svg", name: "Tableau", color: "text-blue-600", bgColor: "from-blue-300/35 to-red-300/15" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", name: "Git", color: "text-red-400", bgColor: "from-red-400/35 to-orange-300/15" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg", name: "R", color: "text-blue-400", bgColor: "from-sky-400/35 to-blue-300/15" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", name: "VS Code", color: "text-blue-400", bgColor: "from-blue-400/35 to-sky-300/15" },
  { icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/powerbi.svg", name: "Power BI", color: "text-yellow-400", bgColor: "from-yellow-300/40 to-amber-300/15" }
];

export const Skills: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`space-y-8 ${className}`}>
      {/* Header */}
      <div className="text-center space-y-4">
        <h3 className="text-3xl md:text-4xl font-bold text-white">
          Technologies & <span className="text-cyan-400">Tools</span>
        </h3>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A collection of technologies and tools I work with
        </p>
      </div>

      {/* Technology Icons Grid - Better Arrangement */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 max-w-5xl mx-auto">
        {technologyIcons.map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col items-center space-y-3 group cursor-pointer transform hover:scale-105 transition-all duration-300 animate-float"
          >
            <div className={`p-6 rounded-2xl bg-gradient-to-br ${tech.bgColor} border border-white/20 shadow-[0_0_24px_rgba(255,255,255,0.08)] group-hover:border-cyan-300/70 group-hover:shadow-[0_0_28px_rgba(34,211,238,0.28)] transition-all duration-300`}>
              <img
                src={tech.icon}
                alt={tech.name}
                className="h-12 w-12 opacity-100 brightness-150 contrast-150 saturate-200 drop-shadow-[0_0_14px_rgba(255,255,255,0.5)] transition-all duration-300 group-hover:brightness-[1.8] group-hover:drop-shadow-[0_0_20px_rgba(34,211,238,0.75)]"
              />
            </div>
            <span className="text-sm font-medium text-gray-300 text-center group-hover:text-cyan-400 transition-colors duration-300">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
