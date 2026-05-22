import React from "react";
import { Button } from "@/components/ui/button";
import { Code2, ExternalLink, FileCode2, Github, TerminalSquare } from "lucide-react";

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
    <article className="group retro-window scan-panel h-full transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200/50">
      <div className="p-4 pt-8 sm:p-5 sm:pt-9">
        <div className="mb-4 flex items-center justify-between border border-cyan-300/45 bg-black px-3 py-2 font-mono text-xs text-cyan-100 shadow-[inset_1px_1px_0_rgba(255,255,255,0.12)]">
          <span className="flex min-w-0 items-center gap-2">
            <FileCode2 className="h-4 w-4 shrink-0" />
            <span className="truncate">{title}.exe</span>
          </span>
          <span className="text-emerald-300">READY</span>
        </div>

        {image && (
          <div className="mb-5 h-44 overflow-hidden border-2 border-cyan-300/30 bg-black">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}

        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="glitch-hover text-lg font-semibold text-white transition-colors group-hover:text-cyan-200 sm:text-xl">{title}</h3>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-cyan-300">{subtitle}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {tech.map((t) => (
              <span key={t} className="chrome-chip px-2.5 py-1 font-mono text-[0.68rem]">
                {t}
              </span>
            ))}
          </div>

          <div className="space-y-3 border border-cyan-300/25 bg-black p-4 shadow-[inset_1px_1px_0_rgba(255,255,255,0.1)]">
            <div className="space-y-1">
              <h4 className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-cyan-200">
                <Code2 className="h-4 w-4" /> Problem
              </h4>
              <p className="text-sm leading-relaxed text-slate-300">{problem}</p>
            </div>
            <div className="space-y-1">
              <h4 className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-emerald-200">
                <TerminalSquare className="h-4 w-4" /> Solution
              </h4>
              <p className="text-sm leading-relaxed text-slate-300">{solution}</p>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-1 sm:flex-row">
            {codeUrl && (
              <Button variant="outline" size="sm" className="retro-button w-full gap-2 sm:w-auto" asChild>
                <a href={codeUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" /> Source
                </a>
              </Button>
            )}
            {demoUrl && (
              <Button size="sm" className="retro-button w-full gap-2 sm:w-auto" asChild>
                <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" /> Launch
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};
