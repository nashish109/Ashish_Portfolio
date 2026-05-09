import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { Reveal } from "@/components/portfolio/Reveal";
import { SectionHeading } from "@/components/portfolio/SectionHeading";
import { projects } from "@/data/portfolio";

const Projects = () => {
  return (
    <section id="projects" className="section-shell min-h-screen">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Projects"
          title="Projects Showcase"
          description="Showcasing innovative solutions and technical expertise through analytics dashboards, full-stack applications, and enterprise systems."
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
  );
};

export default Projects;
