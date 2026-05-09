import { About } from "@/components/portfolio/About";
import { Contact } from "@/components/portfolio/Contact";
import { Hero } from "@/components/portfolio/Hero";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { Reveal } from "@/components/portfolio/Reveal";
import { SectionHeading } from "@/components/portfolio/SectionHeading";
import { Skills } from "@/components/portfolio/Skills";
import { Timeline } from "@/components/portfolio/Timeline";
import { certifications, leadershipItems, projects } from "@/data/portfolio";
import { ExternalLink } from "lucide-react";

const Home = () => {
  return (
    <div className="overflow-hidden bg-black text-white">
      <Hero />
      <About />
      <Skills />

      <section id="experience" className="section-shell">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="Experience"
            title="Professional work, shaped as systems."
            description="A track record of delivering exceptional results and driving innovation through frontend development, data engineering, database design, and scalable software workflows."
          />
          <Timeline />
        </div>
      </section>

      <section id="projects" className="section-shell">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="Projects"
            title="Selected technical builds."
            description="A compact showcase of data products, full-stack platforms, and enterprise systems built around measurable outcomes."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal key={project.title} delay={index * 90}>
                <ProjectCard {...project} index={index} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="certifications" className="section-shell">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="Certifications"
            title="Credentials with recruiter-ready clarity."
            description="Professional certifications across AI, enterprise development, database administration, cloud architecture, and RPA automation."
          />
          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-3">
            {certifications.map((cert, index) => (
              <Reveal key={cert.title} delay={index * 70} className="h-full">
                <a
                  href={cert.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full min-h-[320px] flex-col bg-black p-6 transition hover:bg-white hover:text-black sm:p-8"
                >
                  <div className="flex items-start justify-between gap-4">
                    <img
                      src={cert.image}
                      alt={cert.alt}
                      className="h-24 w-24 object-contain grayscale transition group-hover:grayscale-0"
                    />
                    <ExternalLink className="h-4 w-4 text-white/35 transition group-hover:text-black/55" />
                  </div>
                  <div className="mt-auto pt-8">
                    <p className="font-mono text-xs uppercase tracking-[0.22em] text-white/35 transition group-hover:text-black/45">
                      {cert.category}
                    </p>
                    <h3 className="mt-3 font-display text-2xl font-semibold leading-tight text-white transition group-hover:text-black">
                      {cert.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-white/56 transition group-hover:text-black/62">
                      {cert.description}
                    </p>
                  </div>
                </a>
              </Reveal>
            ))}
            <Reveal delay={certifications.length * 70} className="h-full">
              <div className="flex h-full min-h-[320px] flex-col justify-end bg-black p-6 sm:p-8">
                <p className="font-display text-5xl font-light text-white/35">+</p>
                <p className="mt-8 font-display text-2xl font-semibold text-white">
                  More Coming Soon
                </p>
                <p className="mt-4 text-sm leading-7 text-white/52">
                  Continuously expanding skills and certifications.
                </p>
                <span className="mt-6 w-fit border border-white/12 px-3 py-1 text-xs text-white/48">
                  In Progress
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="leadership" className="section-shell">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="Leadership"
            title="Mentorship, hackathons, and competitive problem solving."
            description="Leadership and achievement work across team-based fintech ideation, social-impact mentoring, and fast-paced engineering competitions."
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

      <Contact />
    </div>
  );
};

export default Home;
