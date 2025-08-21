const technologyIcons = [
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", name: "React", color: "text-blue-400", bgColor: "bg-blue-500/20" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", name: "Python", color: "text-green-400", bgColor: "bg-green-500/20" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", name: "Java", color: "text-orange-400", bgColor: "bg-orange-500/20" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", name: "SQL", color: "text-cyan-400", bgColor: "bg-cyan-500/20" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", name: "AWS", color: "text-purple-400", bgColor: "bg-purple-500/20" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", name: "Docker", color: "text-blue-500", bgColor: "bg-blue-500/20" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", name: "Azure", color: "text-yellow-400", bgColor: "bg-yellow-500/20" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", name: "Kubernetes", color: "text-blue-600", bgColor: "bg-blue-500/20" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", name: "Git", color: "text-red-400", bgColor: "bg-red-500/20" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg", name: "Jira", color: "text-blue-400", bgColor: "bg-blue-500/20" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", name: "VS Code", color: "text-blue-400", bgColor: "bg-blue-500/20" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-plain.svg", name: "DevOps", color: "text-emerald-400", bgColor: "bg-emerald-500/20" }
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
            <div className={`p-6 rounded-2xl ${tech.bgColor} border border-gray-700 group-hover:border-cyan-500/50 transition-all duration-300`}>
              <img src={tech.icon} alt={tech.name} className="h-10 w-10" />
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