import { Timeline } from "@/components/portfolio/Timeline";

const Experience = () => {
  return (
    <section id="experience" className="section-block">
      <div className="section-wrap">
        <div className="hermes-grid">
          <div className="hermes-cell col-span-full text-center">
            <h2 className="section-title mt-1">Experience Timeline</h2>
          </div>
          <div className="hermes-cell col-span-full">
            <Timeline />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
