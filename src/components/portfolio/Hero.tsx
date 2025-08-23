import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ArrowRight, Instagram, ArrowDown } from "lucide-react";
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

export const Hero: React.FC<HeroProps> = ({ className = "" }) => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [paused, setPaused] = useState(false);

  const speed = useMemo(() => {
    if (paused) return PAUSE_TIME;
    return deleting ? DELETING_SPEED : TYPING_SPEED;
  }, [deleting, paused]);

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
    } else {
      if (display.length > 0) {
        setDisplay(current.slice(0, display.length - 1));
      } else {
        setDeleting(false);
        setIndex((i) => (i + 1) % phrases.length);
        setDisplay("");
      }
    }
  }, [display, deleting, index, paused]);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeout = setTimeout(handleTypingEffect, speed);
    return () => clearTimeout(timeout);
  }, [handleTypingEffect, speed]);

  return (
    <section ref={containerRef} className={`relative flex items-center justify-center min-h-screen ${className}`}>
      {/* Main Content */}
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side */}
          <div className="text-center lg:text-left space-y-8 animate-slide-from-left">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 text-white">
              Hi, I'm <span className="text-cyan-400">N.Ashish</span>
            </h1>

            {/* Typing Effect */}
            <div className="text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-8 min-h-[4rem] flex items-center justify-center lg:justify-start">
              I'm a{" "}
              <span className="text-cyan-400 ml-2 typing-text">{display}</span>
              <span className="animate-blink text-cyan-400 ml-1">|</span>
            </div>

            <p className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-2xl leading-relaxed">
              Transforming complex data into meaningful insights and building scalable solutions that drive innovation in the digital age.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Button
                size="lg"
                onClick={() => navigate("/portfolio/projects")}
                className="bg-cyan-600 hover:bg-cyan-500 text-white border-0"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                onClick={() => navigate("/portfolio/contact")}
                className="bg-cyan-600 hover:bg-cyan-500 text-white border-0"
              >
                Get In Touch
              </Button>
              <Button
                size="lg"
                className="bg-cyan-600 hover:bg-cyan-500 text-white border-0"
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
                Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild className="text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10">
                <a href="https://github.com/nashish109" target="_blank" rel="noopener noreferrer">
                  <Github className="h-8 w-8" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="text-gray-400 hover:text-blue-400 hover:bg-blue-400/10">
                <a href="https://www.linkedin.com/in/n-ashish-455b37244/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-8 w-8" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="text-gray-400 hover:text-pink-400 hover:bg-pink-400/10">
                <a href="https://www.instagram.com/nashish109" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-8 w-8" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="text-gray-400 hover:text-emerald-400 hover:bg-emerald-400/10">
                <a href="mailto:nashish831@gmail.com">
                  <Mail className="h-8 w-8" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex justify-center lg:justify-end animate-slide-from-right mt-8 lg:mt-0">
            <div className="relative">
              <img
                src="/lovable-uploads/2af5edec-412c-4f39-856e-dac49b168d46.png"
                alt="Portrait of N. Ashish"
                loading="eager"
                className="rounded-2xl border border-gray-700 shadow-2xl w-64 h-64 md:w-80 md:h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-400 animate-bounce">
        <span className="text-sm mb-2">Scroll Down</span>
        <ArrowDown className="h-6 w-6" />
      </div>
    </section>
  );
};
