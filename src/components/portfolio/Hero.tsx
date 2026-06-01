import { Download, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

type HeroProps = {
  className?: string;
};

export const Hero: React.FC<HeroProps> = ({ className = "" }) => {
  return (
    <section id="home" className={`hero-section ${className}`}>
      <div className="portfolio-container hero-inner">
        <img
          src="/lovable-uploads/2af5edec-412c-4f39-856e-dac49b168d46.png"
          alt="Portrait of N. Ashish"
          loading="eager"
          className="hero-avatar"
        />
        <p className="hero-kicker">Portfolio</p>
        <h1>N. Ashish</h1>
        <p className="hero-role">Software Engineer | Full Stack Developer | AI & Data Enthusiast</p>
        <p className="hero-summary">
          Computer Science graduate passionate about building scalable software, intelligent systems, and impactful technology
          solutions across software engineering, AI, data engineering, and financial technology.
        </p>
        <div className="hero-actions" aria-label="Primary links">
          <Button asChild className="primary-action">
            <a href="/resume/For Interviews.pdf" download>
              <Download aria-hidden="true" />
              Resume
            </a>
          </Button>
          <Button asChild variant="outline" className="secondary-action">
            <a href="https://www.linkedin.com/in/n-ashish-455b37244/" target="_blank" rel="noopener noreferrer">
              <Linkedin aria-hidden="true" />
              LinkedIn
            </a>
          </Button>
          <Button asChild variant="outline" className="secondary-action">
            <a href="https://github.com/nashish109" target="_blank" rel="noopener noreferrer">
              <Github aria-hidden="true" />
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
