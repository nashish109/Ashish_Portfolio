import React from "react";
import { ArrowUpRight, Github } from "lucide-react";

type ProjectCardProps = {
  title: string;
  subtitle: string;
  tech: string[];
  problem: string;
  solution: string;
  codeUrl: string;
  demoUrl: string;
  image?: string;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, subtitle, tech, problem, solution, codeUrl, demoUrl, image }) => {
  return (
    <article className="hermes-hover flex h-full flex-col border-b border-current/20 p-4 lg:border-r">
      {image && (
        <div className="mb-5 border-4 border-double border-current/40 bg-background/40 p-2">
          <img src={image} alt={title} className="aspect-[16/9] w-full object-cover opacity-80 transition-opacity duration-200 hover:opacity-100" />
        </div>
      )}

      <small className="section-eyebrow opacity-60">{subtitle}</small>
      <h3 className="mt-3 text-2xl font-semibold uppercase leading-tight tracking-[0.035em]">{title}</h3>
      <p className="mt-4 text-[0.98rem] leading-relaxed tracking-normal opacity-60" style={{ textTransform: "none" }}>{problem}</p>
      <p className="mt-3 text-[0.98rem] leading-relaxed tracking-normal opacity-70" style={{ textTransform: "none" }}>{solution}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {tech.map((item) => (
          <span key={item} className="premium-chip">{item}</span>
        ))}
      </div>

      <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row">
        {demoUrl && (
          <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="premium-button flex-1 px-3 py-2.5">
            Live Demo
            <ArrowUpRight className="h-4 w-4" />
          </a>
        )}
        {codeUrl && (
          <a href={codeUrl} target="_blank" rel="noopener noreferrer" className="premium-button-secondary flex-1 px-3 py-2.5">
            <Github className="h-4 w-4" />
            Source
          </a>
        )}
      </div>
    </article>
  );
};
