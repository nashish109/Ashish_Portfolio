import { Reveal } from "@/components/portfolio/Reveal";
import { SectionHeading } from "@/components/portfolio/SectionHeading";
import { certifications } from "@/data/portfolio";
import { ExternalLink } from "lucide-react";

const Certifications = () => {
  return (
    <section id="certifications" className="section-shell min-h-screen">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Certifications"
          title="Professional Certifications"
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
  );
};

export default Certifications;
