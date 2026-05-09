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
          window.setTimeout(() => navigate("/portfolio"), 350);
          return 100;
        }
        return value + 20;
      });
    }, 90);

    return () => window.clearInterval(interval);
  }, [navigate]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
      <div className="w-full max-w-lg text-center">
        <p className="font-mono text-xs uppercase tracking-[0.34em] text-white/35">
          Initializing Portfolio
        </p>
        <h1 className="mt-5 font-display text-5xl font-semibold leading-none sm:text-7xl">
          N. Ashish
        </h1>
        <p className="mt-5 text-white/52">Loading the best of my work for you</p>
        <div className="mt-9 h-px w-full bg-white/10">
          <div
            className="h-px bg-white transition-all duration-200"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </main>
  );
};

export default Welcome;
