import { Reveal } from "@/components/portfolio/Reveal";
import { experienceItems } from "@/data/portfolio";

export const Timeline = () => {
  return (
    <div className="space-y-5">
      {experienceItems.map((item, index) => (
        <Reveal
          key={`${item.role}-${item.period}`}
          delay={index * 100}
          className="group grid gap-5 border border-white/10 p-5 transition hover:border-white/35 sm:p-7 lg:grid-cols-[0.34fr_1fr]"
        >
          <div className="flex items-start gap-4">
            {item.logo && (
              <img
                src={item.logo}
                alt={`${item.org} logo`}
                className="h-12 w-16 border border-white/10 object-cover grayscale transition group-hover:grayscale-0"
              />
            )}
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-white/35">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-2 text-sm text-white/48">{item.period}</p>
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-2 border-b border-white/10 pb-5 md:flex-row md:items-end md:justify-between">
              <div>
                <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                  {item.role}
                </h3>
                <p className="mt-2 text-white/52">{item.org}</p>
              </div>
            </div>

            <ul className="mt-6 grid gap-3 text-sm leading-7 text-white/62">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="grid grid-cols-[18px_1fr] gap-3">
                  <span className="mt-3 h-px bg-white/45" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  );
};
