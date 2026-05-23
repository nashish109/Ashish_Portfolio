import { Playground } from "@/components/portfolio/Playground";

const PlaygroundPage = () => {
  return (
    <div className="min-h-screen">
      <section className="container py-20">
        <p className="retro-kicker mb-3">Experimental Module</p>
        <h2 className="retro-title mb-6 text-3xl md:text-5xl">Data Science Playground</h2>
        <Playground />
      </section>
    </div>
  );
};

export default PlaygroundPage;
