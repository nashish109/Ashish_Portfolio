import { Reveal } from "@/components/portfolio/Reveal";
import { SectionHeading } from "@/components/portfolio/SectionHeading";
import { leadershipItems } from "@/data/portfolio";

const Leadership = () => {
  return (
    <section id="leadership" className="section-shell min-h-screen">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Leadership"
          title="Leadership & Achievements"
          description="Mentorship, hackathons, competitive problem solving, and activities that highlight team leadership and practical impact."
        />

        <div className="space-y-5">
          {leadershipItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal
                key={`${item.title}-${item.date}`}
                delay={index * 90}
                className="group grid gap-5 border border-white/10 p-5 transition hover:border-white/35 sm:p-7 lg:grid-cols-[0.34fr_1fr]"
              >
                <div className="flex items-start gap-4">
                  {item.logo ? (
                    <img
                      src={item.logo}
                      alt={`${item.title} logo`}
                      className={`${item.logoClassName || "h-12 w-16"} border border-white/10 object-cover grayscale transition group-hover:grayscale-0`}
                    />
                  ) : (
                    <div className="flex h-12 w-12 items-center justify-center border border-white/10">
                      <Icon className="h-5 w-5" />
                    </div>
                  )}
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.22em] text-white/35">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-2 text-sm text-white/48">{item.date}</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                    {item.title}
                  </h3>
                  <ul className="mt-6 grid gap-3 text-sm leading-7 text-white/62">
                    {item.description.map((line) => (
                      <li key={line} className="grid grid-cols-[18px_1fr] gap-3">
                        <span className="mt-3 h-px bg-white/45" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
