import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setProgress((value) => {
        if (value >= 100) {
          window.clearInterval(interval);
          window.setTimeout(() => navigate("/portfolio", { replace: true }), 320);
          return 100;
        }
        return value + 8;
      });
    }, 70);

    return () => window.clearInterval(interval);
  }, [navigate]);

  return (
    <main className="portfolio-shell grid min-h-screen place-items-center px-4">
      <section className="portfolio-content w-full max-w-[560px] border border-current/20 p-6 text-center sm:p-8">
        <small className="section-eyebrow">Portfolio</small>
        <h1 className="hero-title mt-4 text-5xl sm:text-6xl">N. Ashish</h1>
        <p className="mx-auto mt-5 max-w-[420px] text-[1.0625rem] leading-relaxed tracking-normal opacity-60" style={{ textTransform: "none" }}>
          Loading AI engineering profile.
        </p>
        <div className="mt-8 h-2 border border-current/20 bg-background/40">
          <div className="h-full bg-current transition-all duration-150" style={{ width: `${progress}%` }} />
        </div>
      </section>
    </main>
  );
};

export default Welcome;
