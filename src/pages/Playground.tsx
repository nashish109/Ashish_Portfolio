import { Playground } from "@/components/portfolio/Playground";

const PlaygroundPage = () => {
  return (
    <div className="min-h-screen">
      <section className="container py-20">
        <h2 className="text-3xl font-display mb-6">Data Science Playground</h2>
        <Playground />
      </section>
    </div>
  );
};

export default PlaygroundPage;
