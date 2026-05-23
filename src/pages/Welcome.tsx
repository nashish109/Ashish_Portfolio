import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const bootLines = [
  "BIOS CHECK: portfolio memory map verified",
  "Loading developer profile modules...",
  "Mounting projects://showcase",
  "Syncing experience.log and education.db",
  "Initializing Portfolio OS..."
];

const Welcome = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [visibleLines, setVisibleLines] = useState(1);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => navigate("/portfolio", { replace: true }), 650);
          return 100;
        }
        return prev + 5;
      });
    }, 95);

    const lineInterval = setInterval(() => {
      setVisibleLines((prev) => Math.min(prev + 1, bootLines.length));
    }, 320);

    return () => {
      clearInterval(progressInterval);
      clearInterval(lineInterval);
    };
  }, [navigate]);

  return (
    <main className="retro-page flex min-h-screen items-center justify-center bg-black px-4 py-10 text-cyan-50">
      <section className="retro-window w-full max-w-3xl">
        <div className="space-y-6 p-5 pt-8 sm:p-8 sm:pt-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="retro-kicker">NASHISH BIOS / V2.0</p>
              <h1 className="retro-title mt-3 text-4xl sm:text-5xl md:text-6xl">
                Portfolio OS
              </h1>
            </div>
            <div className="border border-emerald-300/50 bg-black px-3 py-2 font-mono text-xs text-emerald-200">
              SYSTEM ONLINE
            </div>
          </div>

          <div className="border border-cyan-300/45 bg-black p-4 font-mono text-xs leading-7 text-cyan-100 sm:text-sm">
            {bootLines.slice(0, visibleLines).map((line) => (
              <p key={line}>
                <span className="text-emerald-300">OK</span> &gt; {line}
              </p>
            ))}
            <p className="text-cyan-200">
              &gt; boot_portfolio.exe<span style={{ animation: "boot-caret 1s steps(1) infinite" }}>_</span>
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.18em] text-cyan-200">
              <span>Initializing Portfolio OS...</span>
              <span>{progress}%</span>
            </div>
            <div className="h-4 overflow-hidden border border-cyan-300/45 bg-black shadow-inner">
              <div
                className="h-full bg-[repeating-linear-gradient(90deg,#22c55e_0_8px,#67e8f9_8px_14px,#a78bfa_14px_20px)] transition-all duration-200"
                style={{
                  width: `${progress}%`,
                  boxShadow: "0 0 24px rgba(34, 211, 238, 0.55)"
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Welcome;
