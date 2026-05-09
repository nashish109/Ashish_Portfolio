import { Reveal } from "@/components/portfolio/Reveal";
import { technologyIcons } from "@/data/portfolio";

export const Skills: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`border-y border-white/10 py-14 ${className}`}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <Reveal className="grid gap-8 lg:grid-cols-[0.45fr_1fr] lg:items-start">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-white/35">
              Toolkit
            </p>
            <h3 className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl">
              Technologies & Tools
            </h3>
            <p className="mt-4 max-w-sm text-sm leading-7 text-white/50">
              A collection of technologies and tools I work with.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {technologyIcons.map((tech) => (
              <div
                key={tech.name}
                className="group flex min-h-32 flex-col items-center justify-center gap-3 bg-black p-5 text-center transition hover:bg-white hover:text-black"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="h-10 w-10 grayscale transition group-hover:grayscale-0"
                />
                <span className="text-sm font-medium text-white/65 transition group-hover:text-black">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
};
