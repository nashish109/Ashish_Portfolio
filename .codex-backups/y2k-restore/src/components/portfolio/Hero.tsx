import {
  useEffect,
  useMemo,
  useRef,
  useState,
  useCallback,
} from "react";

import { Button } from "@/components/ui/button";

import {
  Github,
  Linkedin,
  Mail,
  Download,
  ArrowRight,
  Instagram,
  ArrowDown,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

type HeroProps = {
  className?: string;
};

const TYPING_SPEED = 80;
const DELETING_SPEED = 40;
const PAUSE_TIME = 3000;

const phrases = [
  "Data-Driven Software Engineer",
  "Full-stack Developer",
  "Financial Technology Enthusiast",
  "Cloud Solutions Builder",
];

export const Hero: React.FC<HeroProps> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [paused, setPaused] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const speed = useMemo(() => {
    if (paused) return PAUSE_TIME;
    return deleting
      ? DELETING_SPEED
      : TYPING_SPEED;
  }, [deleting, paused]);

  const handleTypingEffect = useCallback(() => {
    const current =
      phrases[index % phrases.length];

    if (paused) {
      setPaused(false);
      setDeleting(true);
      return;
    }

    if (!deleting) {
      if (display.length < current.length) {
        setDisplay(
          current.slice(
            0,
            display.length + 1
          )
        );
      } else {
        setPaused(true);
      }
    } else {
      if (display.length > 0) {
        setDisplay(
          current.slice(
            0,
            display.length - 1
          )
        );
      } else {
        setDeleting(false);
        setIndex(
          (i) =>
            (i + 1) % phrases.length
        );
        setDisplay("");
      }
    }
  }, [
    display,
    deleting,
    index,
    paused,
  ]);

  const handleScrollDown = () => {
    document
      .getElementById("about")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  useEffect(() => {
    const timeout = setTimeout(
      handleTypingEffect,
      speed
    );

    return () => clearTimeout(timeout);
  }, [handleTypingEffect, speed]);

  return (
    <section
      ref={containerRef}
      className={`relative flex items-center justify-center min-h-[100svh] py-20 lg:min-h-[88vh] lg:py-0 ${className}`}
    >
      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">

          {/* LEFT SIDE */}
          <div className="text-center lg:text-left space-y-6 md:space-y-8 animate-slide-from-left">

            {/* Heading */}
            <div>
              <p className="mb-6 text-xs sm:text-sm uppercase tracking-[0.22em] sm:tracking-[0.35em] text-gray-500">
                Portfolio / Developer / Data
              </p>

              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-white">
                Hi, I'm{" "}
                <span className="text-cyan-400">
                  N.Ashish
                </span>
              </h1>
            </div>

            {/* Typing Effect */}
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-300 min-h-[5rem] sm:min-h-[4rem] flex flex-wrap items-center justify-center lg:justify-start">
              I'm a

              <span className="inline-block text-cyan-400 ml-2 typing-text">
                {display}
              </span>

              <span className="animate-blink text-cyan-400 ml-1">
                |
              </span>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-2xl leading-relaxed">
              Transforming complex data into
              meaningful insights and building
              scalable solutions that drive
              innovation in the digital age.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start">

              <Button
                size="lg"
                onClick={() =>
                  navigate(
                    "/portfolio/projects"
                  )
                }
                className="w-full sm:w-auto bg-cyan-600 hover:bg-cyan-500 text-white border-0"
              >
                View My Work

                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button
                size="lg"
                onClick={() =>
                  navigate(
                    "/portfolio/contact"
                  )
                }
                className="w-full sm:w-auto bg-cyan-600 hover:bg-cyan-500 text-white border-0"
              >
                Get In Touch
              </Button>

              <Button
                size="lg"
                className="w-full sm:w-auto bg-cyan-600 hover:bg-cyan-500 text-white border-0"
                onClick={() => {
                  const link =
                    document.createElement(
                      "a"
                    );

                  link.href =
                    "/resume/For Interviews.pdf";

                  link.download =
                    "N-Ashish-Resume.pdf";

                  document.body.appendChild(
                    link
                  );

                  link.click();

                  document.body.removeChild(
                    link
                  );
                }}
              >
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">

              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10"
              >
                <a
                  href="https://github.com/nashish109"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-8 w-8" />
                </a>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-gray-400 hover:text-blue-400 hover:bg-blue-400/10"
              >
                <a
                  href="https://www.linkedin.com/in/n-ashish-455b37244/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-8 w-8" />
                </a>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-gray-400 hover:text-pink-400 hover:bg-pink-400/10"
              >
                <a
                  href="https://www.instagram.com/nashish109"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-8 w-8" />
                </a>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-gray-400 hover:text-emerald-400 hover:bg-emerald-400/10"
              >
                <a href="mailto:nashish831@gmail.com">
                  <Mail className="h-8 w-8" />
                </a>
              </Button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex justify-center lg:justify-end animate-slide-from-right mt-4 lg:mt-0">

            <div className="relative">

              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl bg-cyan-500/10 blur-3xl" />

              <img
                src="/lovable-uploads/2af5edec-412c-4f39-856e-dac49b168d46.png"
                alt="Portrait of N. Ashish"
                loading="eager"
                className="relative rounded-2xl border border-gray-700 shadow-2xl w-[min(82vw,20rem)] h-[min(105vw,26rem)] sm:w-80 sm:h-[28rem] md:w-[28rem] md:h-[34rem] xl:w-[32rem] xl:h-[38rem] object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Center Scroll Button */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <button
          type="button"
          onClick={handleScrollDown}
          aria-label="Scroll to about section"
          className="flex flex-col items-center gap-2 text-gray-400 transition-all duration-300 hover:text-cyan-400"
        >
          <span className="text-xs uppercase tracking-[0.3em]">
            Scroll
          </span>

          <ArrowDown className="h-5 w-5 animate-bounce" />
        </button>
      </div>
    </section>
  );
};
