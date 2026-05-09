import { Reveal } from "@/components/portfolio/Reveal";
import { SectionHeading } from "@/components/portfolio/SectionHeading";
import { aboutHighlights, education, personalInfo, socialLinks } from "@/data/portfolio";
import { Linkedin, Mail } from "lucide-react";

export const About: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <section id="about" className={`section-shell ${className}`}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="About"
          title="A data-minded builder with full-stack range."
          description="I am a passionate Data-Driven Software Engineer who thrives on blending full-stack development, data analytics, and cloud technologies to build impactful solutions. My goal is to transform data into innovation while constantly learning and contributing to the tech community."
        />

        <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <Reveal className="border border-white/10 bg-white/[0.025] p-6 sm:p-8">
            <h3 className="font-display text-2xl font-semibold text-white">Who I Am</h3>
            <div className="mt-8 grid gap-5">
              {aboutHighlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="grid gap-4 border-t border-white/10 pt-5 sm:grid-cols-[44px_1fr]"
                  >
                    <div className="flex h-11 w-11 items-center justify-center border border-white/12 text-white/70">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-white">{item.title}</p>
                      <p className="mt-1 text-sm leading-7 text-white/55">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={120} className="border border-white/10 p-6 sm:p-8">
            <h3 className="font-display text-2xl font-semibold text-white">
              Personal Information
            </h3>
            <dl className="mt-8 space-y-5">
              {personalInfo.map((item) => (
                <div key={item.label} className="border-b border-white/10 pb-4">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/35">
                    {item.label}
                  </dt>
                  <dd className="mt-2 text-white/76">{item.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-7 grid gap-3">
              <a
                href={`mailto:${socialLinks.aboutEmail}`}
                className="inline-flex items-center gap-3 text-white/65 transition hover:text-white"
              >
                <Mail className="h-4 w-4" />
                {socialLinks.aboutEmail}
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-white/65 transition hover:text-white"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </Reveal>
        </div>

        <div className="mt-24">
          <SectionHeading
            eyebrow="Education"
            title="Academic foundation."
            description="Formal training across computer science, data science, big data analytics, mathematics, physics, chemistry, and core software fundamentals."
          />

          <div className="grid gap-4">
            {education.map((edu, index) => (
              <Reveal
                key={`${edu.title}-${edu.duration}`}
                delay={index * 90}
                className="group grid gap-6 border border-white/10 p-5 transition hover:border-white/35 sm:grid-cols-[72px_1fr] sm:p-7"
              >
                <div>
                  <img
                    src={edu.logo}
                    alt={`${edu.institution} logo`}
                    className="h-14 w-14 border border-white/10 object-cover grayscale transition group-hover:grayscale-0"
                  />
                </div>
                <div className="grid gap-6 lg:grid-cols-[1fr_auto]">
                  <div>
                    <p className="font-display text-2xl font-semibold text-white">
                      {edu.title}
                    </p>
                    <p className="mt-2 text-white/58">{edu.subtitle}</p>
                    <p className="mt-4 font-medium text-white/82">{edu.institution}</p>
                    <p className="text-sm text-white/42">{edu.duration}</p>
                  </div>
                  <div className="lg:text-right">
                    <p className="font-mono text-xs uppercase tracking-[0.22em] text-white/35">
                      Achievement
                    </p>
                    <p className="mt-2 text-white">{edu.achievement}</p>
                    <div className="mt-5 flex flex-wrap gap-2 lg:justify-end">
                      {edu.subjects.map((subject) => (
                        <span
                          key={subject}
                          className="border border-white/12 px-3 py-1 text-xs text-white/58"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
