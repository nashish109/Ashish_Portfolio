import { Timeline } from "@/components/portfolio/Timeline";

const Experience = () => {
  return (
    <div className="py-8">
      <section className="container mx-auto px-4 sm:px-6">
        <div className="text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Experience <span className="text-cyan-400">Timeline</span>
          </h2>
          <Timeline />
        </div>
      </section>
    </div>
  );
};

export default Experience;
