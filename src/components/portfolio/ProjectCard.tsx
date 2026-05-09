import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

type ProjectCardProps = {
  title: string;
  subtitle: string;
  tech: string[];
  problem: string;
  solution: string;
  codeUrl: string;
  demoUrl: string;
  image?: string;
  index?: number;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  subtitle,
  tech,
  problem,
  solution,
  codeUrl,
  demoUrl,
  image,
  index = 0,
}) => {
  return (
    <article className="group grid h-full overflow-hidden border border-white/10 bg-white/[0.02] transition duration-300 hover:border-white/35">
      {image && (
        <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-white/[0.03]">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-[1.03] group-hover:grayscale-0"
          />
          <div className="absolute left-4 top-4 border border-white/15 bg-black/75 px-3 py-1 font-mono text-xs text-white/58 backdrop-blur">
            {String(index + 1).padStart(2, "0")}
          </div>
        </div>
      )}

      <div className="flex h-full flex-col p-5 sm:p-6">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-white/35">
          {subtitle}
        </p>
        <h3 className="mt-3 font-display text-2xl font-semibold leading-tight text-white">
          {title}
        </h3>

        <div className="mt-5 flex flex-wrap gap-2">
          {tech.map((item) => (
            <span key={item} className="border border-white/12 px-3 py-1 text-xs text-white/58">
              {item}
            </span>
          ))}
        </div>

        <div className="mt-7 grid gap-5 text-sm leading-7 text-white/58">
          <div>
            <p className="mb-1 font-mono text-[11px] uppercase tracking-[0.24em] text-white/35">
              Problem
            </p>
            <p>{problem}</p>
          </div>
          <div>
            <p className="mb-1 font-mono text-[11px] uppercase tracking-[0.24em] text-white/35">
              Solution
            </p>
            <p>{solution}</p>
          </div>
        </div>

        <div className="mt-auto flex flex-wrap gap-3 pt-7">
          {codeUrl && (
            <Button
              variant="outline"
              size="sm"
              className="rounded-none border-white/15 bg-transparent text-white hover:bg-white hover:text-black"
              asChild
            >
              <a href={codeUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                Code
              </a>
            </Button>
          )}
          {demoUrl && (
            <Button
              size="sm"
              className="rounded-none border border-white bg-white text-black hover:bg-black hover:text-white"
              asChild
            >
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </article>
  );
};
