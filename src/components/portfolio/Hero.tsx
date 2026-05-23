import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowDown, ArrowRight, Download, Github, Instagram, Linkedin, Mail, RadioTower } from "lucide-react";
import { Button } from "@/components/ui/button";

type HeroProps = {
  className?: string;
};

const TYPING_SPEED = 72;
const DELETING_SPEED = 34;
const PAUSE_TIME = 2400;

const phrases = [
  "Data-Driven Software Engineer",
  "Full-stack Developer",
  "Financial Technology Enthusiast",
  "Cloud Solutions Builder",
];

const asciiName = String.raw`
 _   _      _        _     _     _     _
| \ | |    / \   ___| |__ (_)___| |__ | |
|  \| |   / _ \ / __| '_ \| / __| '_ \| |
| |\  |  / ___ \\__ \ | | | \__ \ | | |_|
|_| \_| /_/   \_\___/_| |_|_|___/_| |_(_)
`;

export const Hero: React.FC<HeroProps> = ({ className = "" }) => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [paused, setPaused] = useState(false);

  const speed = useMemo(() => (paused ? PAUSE_TIME : deleting ? DELETING_SPEED : TYPING_SPEED), [deleting, paused]);

  const handleTypingEffect = useCallback(() => {
    const current = phrases[index % phrases.length];

    if (paused) {
      setPaused(false);
      setDeleting(true);
      return;
    }

    if (!deleting) {
      if (display.length < current.length) {
        setDisplay(current.slice(0, display.length + 1));
      } else {
        setPaused(true);
      }
      return;
    }

    if (display.length > 0) {
      setDisplay(current.slice(0, display.length - 1));
    } else {
      setDeleting(false);
      setIndex((i) => (i + 1) % phrases.length);
      setDisplay("");
    }
  }, [display, deleting, index, paused]);

  useEffect(() => {
    const timeout = setTimeout(handleTypingEffect, speed);
    return () => clearTimeout(timeout);
  }, [handleTypingEffect, speed]);

  const handleScrollDown = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className={`relative px-4 pb-12 pt-10 sm:px-6 sm:pt-1 ${className}`}>
      <div className="container mx-auto">
        <div className="crt-shell">
          <div className="relative z-10">
            <div className="web-directory-title flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <span>http://ashish.dev/index.html</span>
              <span className="text-emerald-300">status: online / no cookies / recruiter safe</span>
            </div>

            <div className="modem-strip">
              <span>*** CONNECTED AT 56K *** DATA ENGINEER PORTFOLIO *** FULL STACK / CLOUD / ANALYTICS *** </span>
            </div>

            <div className="grid gap-0 lg:grid-cols-[1.12fr_0.88fr]">
              <div className="border-b-2 border-cyan-300/45 p-4 sm:p-6 lg:border-b-0 lg:border-r-2">
                <div className="ascii-name">{asciiName}</div>

                <div className="mt-5 border-2 border-cyan-300/45 bg-black p-4 font-mono text-sm leading-7 text-cyan-100 shadow-[inset_2px_2px_0_rgba(255,255,255,0.12)]">
                  <p><span className="text-emerald-300">C:\PORTFOLIO&gt;</span> boot profile</p>
                  <p><span className="text-emerald-300">role:</span> {display}<span className="animate-blink">_</span></p>
                  <p><span className="text-emerald-300">mission:</span> Transforming complex data into meaningful insights and building scalable solutions that drive innovation in the digital age.</p>
                </div>

                <div className="mt-5 dos-table">
                  <div className="dos-table-row">
                    <div className="dos-table-key">Signal</div>
                    <div className="dos-table-value">Recruiter ready / Portfolio session active</div>
                  </div>
                  <div className="dos-table-row">
                    <div className="dos-table-key">Stack</div>
                    <div className="dos-table-value">React / Data / Cloud / Analytics / Full-stack systems</div>
                  </div>
                </div>

                <div className="mt-5 flex flex-col flex-wrap gap-3 sm:flex-row">
                  <Button size="lg" onClick={() => navigate("/portfolio/projects")} className="retro-button w-full sm:w-auto">
                    Run Projects.exe
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" onClick={() => navigate("/portfolio/contact")} className="retro-button w-full sm:w-auto">
                    Open Comms
                  </Button>
                  <Button
                    size="lg"
                    className="retro-button w-full sm:w-auto"
                    onClick={() => {
                      const link = document.createElement("a");
                      link.href = "/resume/For Interviews.pdf";
                      link.download = "N-Ashish-Resume.pdf";
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Resume.pdf
                  </Button>
                </div>

                <div className="mt-4 grid grid-cols-4 gap-2 sm:max-w-sm">
                  {[
                    { href: "https://github.com/nashish109", label: "GitHub", icon: Github },
                    { href: "https://www.linkedin.com/in/n-ashish-455b37244/", label: "LinkedIn", icon: Linkedin },
                    { href: "https://www.instagram.com/nashish109", label: "Instagram", icon: Instagram },
                    { href: "mailto:nashish831@gmail.com", label: "Mail", icon: Mail },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <Button key={item.label} variant="ghost" size="icon" asChild className="chrome-chip h-12 w-full text-cyan-100 hover:text-white">
                        <a href={item.href} aria-label={item.label} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}>
                          <Icon className="h-5 w-5" />
                        </a>
                      </Button>
                    );
                  })}
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <div className="mb-4 flex items-center justify-between border border-cyan-300/45 bg-black px-3 py-2 font-mono text-xs text-cyan-100">
                  <span>USER_ID_CARD.GIF</span>
                  <span className="flex items-center gap-2 text-emerald-300">
                    <RadioTower className="h-3.5 w-3.5" />
                    LIVE
                  </span>
                </div>

                <div className="relative mx-auto max-w-[340px] border-2 border-cyan-300/45 bg-black p-2">
                  <div className="absolute inset-2 z-10 bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.08)_0_1px,transparent_1px_4px)] opacity-30" />
                  <img
                    src="/lovable-uploads/2af5edec-412c-4f39-856e-dac49b168d46.png"
                    alt="Portrait of N. Ashish"
                    loading="eager"
                    className="relative aspect-[4/5] w-full object-cover grayscale-[0.15] contrast-125 saturate-125"
                  />
                </div>

                <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:items-center">
                  <div className="font-mono text-xs">
                    <div className="border border-cyan-300/35 bg-black p-3 shadow-inner min-w-[300px]">
                      <p className="text-slate-500">LOCATION</p>
                      <p className="text-cyan-100">INDIA</p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleScrollDown}
                    aria-label="Enter system and scroll to about section"
                    className="retro-button group flex items-center gap-3 px-4 py-2 font-mono text-[0.65rem] uppercase tracking-[0.18em]"
                  >
                    SYSTEM DETAILS
                    <ArrowDown className="h-4 w-4 animate-bounce text-cyan-200" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
