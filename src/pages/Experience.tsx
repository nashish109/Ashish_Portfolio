import { SectionHeading } from "@/components/portfolio/SectionHeading";
import { Timeline } from "@/components/portfolio/Timeline";

const Experience = () => {
  return (
    <section id="experience" className="section-shell min-h-screen">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Experience"
          title="Experience Timeline"
          description="A track record of delivering exceptional results and driving innovation through frontend development, data engineering, and database design."
        />
        <Timeline />
      </div>
    </section>
  );
};

export default Experience;
