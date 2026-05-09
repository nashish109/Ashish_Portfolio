import { Button } from "@/components/ui/button";
import { heroPhrases, socialLinks } from "@/data/portfolio";
import { ArrowDown, ArrowRight, Download, Github, Instagram, Linkedin, Mail } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";

const TYPING_SPEED = 70;
const DELETING_SPEED = 34;
const PAUSE_TIME = 2200;

export const Hero: React.FC<{ className?: string }> = ({ className = "" }) => {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [paused, setPaused] = useState(false);

  const speed = useMemo(() => {
    if (paused) return PAUSE_TIME;
    return deleting ? DELETING_SPEED : TYPING_SPEED;
  }, [deleting, paused]);

  const handleTypingEffect = useCallback(() => {
    const current = heroPhrases[index % heroPhrases.length];

    if (paused) {
      setPaused(false);
      setDeleting(true);
      return;
    }

    if (!deleting && display.length < current.length) {
      setDisplay(current.slice(0, display.length + 1));
      return;
    }

    if (!deleting) {
      setPaused(true);
      return;
    }

    if (display.length > 0) {
      setDisplay(current.slice(0, display.length - 1));
      return;
    }

    setDeleting(false);
    setIndex((value) => (value + 1) % heroPhrases.length);
  }, [deleting, display, index, paused]);

  useEffect(() => {
    const timeout = window.setTimeout(handleTypingEffect, speed);
    return () => window.clearTimeout(timeout);
  }, [handleTypingEffect, speed]);

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = socialLinks.resume;
    link.download = "N-Ashish-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className={`relative flex min-h-screen items-center overflow-hidden px-5 py-28 sm:px-8 lg:px-12 ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] opacity-30" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-white/8 to-transparent" />

      <div className="relative mx-auto grid w-full max-w-7xl items-end gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="max-w-5xl animate-fade-in">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.34em] text-white/42">
            Portfolio / Developer / Data
          </p>
          <h1 className="font-display text-[clamp(4.5rem,14vw,12rem)] font-semibold uppercase leading-[0.78] tracking-normal text-white">
            N.
            <br />
            Ashish
          </h1>

          <div className="mt-8 min-h-9 font-display text-2xl font-light text-white/72 sm:text-3xl">
            <span>I'm a </span>
            <span className="text-white">{display}</span>
            <span className="ml-1 animate-blink text-white/60">|</span>
          </div>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/56 sm:text-lg">
            Transforming complex data into meaningful insights and building scalable
            solutions that drive innovation in the digital age.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button
              size="lg"
              onClick={() => scrollTo("projects")}
              className="h-12 rounded-none border border-white bg-white px-6 text-black hover:bg-black hover:text-white"
            >
              View My Work
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              onClick={() => scrollTo("contact")}
              className="h-12 rounded-none border border-white/20 bg-transparent px-6 text-white hover:bg-white hover:text-black"
            >
              Get In Touch
            </Button>
            <Button
              size="lg"
              onClick={downloadResume}
              className="h-12 rounded-none border border-white/20 bg-transparent px-6 text-white hover:bg-white hover:text-black"
            >
              <Download className="h-4 w-4" />
              Resume
            </Button>
          </div>

          <div className="mt-9 flex items-center gap-2">
            {[
              { href: socialLinks.github, label: "GitHub", icon: Github },
              { href: socialLinks.linkedin, label: "LinkedIn", icon: Linkedin },
              { href: socialLinks.instagram, label: "Instagram", icon: Instagram },
              { href: socialLinks.mailto, label: "Email", icon: Mail },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={item.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  aria-label={item.label}
                  className="flex h-11 w-11 items-center justify-center border border-white/10 text-white/55 transition hover:border-white hover:bg-white hover:text-black"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:mx-0 lg:justify-self-end">
          <div className="absolute -inset-4 border border-white/10" />
          <img
            src="/lovable-uploads/2af5edec-412c-4f39-856e-dac49b168d46.png"
            alt="Portrait of N. Ashish"
            loading="eager"
            className="relative aspect-[4/5] w-full border border-white/15 object-cover grayscale transition duration-500 hover:grayscale-0"
          />
        </div>
      </div>

      <button
        type="button"
        onClick={() => scrollTo("about")}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-white/40 transition hover:text-white"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.28em]">Scroll</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </button>
    </section>
  );
};
