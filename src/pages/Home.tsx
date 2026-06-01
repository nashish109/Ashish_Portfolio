import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Award,
  Briefcase,
  CheckCircle2,
  Code,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { About } from "@/components/portfolio/About";
import { Hero } from "@/components/portfolio/Hero";
import aicteLogo from "@/assets/company-logos/AICTE-Logo-Vector.svg-.png";
import dtccLogo from "@/assets/company-logos/dtcc.webp";
import nalcoLogo from "@/assets/company-logos/NALCO.png";

const profileLinks = {
  resume: "/resume/For Interviews.pdf",
  linkedin: "https://www.linkedin.com/in/n-ashish-455b37244/",
  github: "https://github.com/nashish109",
  email: "mailto:nashish831@gmail.com",
};

const experiences = [
  {
    role: "Vocational Trainee - NALCO",
    organization: "Damanjodi, Odisha",
    duration: "May 2026 - June 2026",
    logo: nalcoLogo,
    points: [
      "Gained knowledge of Intra-Net systems for secure and efficient internal employee data flow.",
      "Acquired hands-on exposure to industrial machinery and control room operations using Honeywell International automation systems.",
      "Developed a predictive maintenance model to detect potential machine breakdowns and generate alerts using vibration data analysis.",
    ],
  },
  {
    role: "IT Intern - DTCC",
    organization: "Chennai, Tamil Nadu",
    duration: "May 2025 - July 2025",
    logo: dtccLogo,
    points: [
      "Contributed to a trade reconciliation project across frontend implementation and database design.",
      "Designed relational schemas for efficient data handling in reconciliation workflows.",
      "Used Angular, TypeScript, and MySQL to support scalable enterprise application delivery.",
    ],
  },
  {
    role: "Data Engineering Intern - AICTE",
    organization: "Remote",
    duration: "June 2024 - August 2024",
    logo: aicteLogo,
    points: [
      "Developed and maintained Python and SQL data pipelines.",
      "Created databases for structured storage, retrieval, and analysis.",
      "Worked with warehousing concepts for larger analytical datasets.",
    ],
  },
];

const research = [
  {
    icon: Code,
    title: "Participant - JPMC CFG Hackathon",
    date: "June 28-29, 2025",
    logo: "/company-logos/Jpmc.jpg",
    description: [
      "Built a multi-role React.js frontend with real-time dashboards, WhatsApp updates, and regional language support.",
      "Designed secure MongoDB schemas for attendance, progress, and job mapping.",
      "Proposed enhancements including certificate automation and scheme alerts for scalability.",
    ],
  },
  {
    icon: Code,
    title: "NOKIA Accelerate Her in Tech - A Student Hackathon - Semi-Finalist",
    date: "March 08-23, 2025",
    logo: "/company-logos/NOKIA.png",
    description: [
      "Reached the Semi-Finalist round of Nokia Accelerate Her in Tech Hackathon by successfully clearing multiple competitive programming and technical assessment rounds.",
      "Solved MCQs and coding challenges on the HackerEarth platform, demonstrating strong problem-solving and programming fundamentals.",
      "Participated in advanced Code Hunt rounds focused on networking, software concepts, and core technical problem-solving under competitive conditions.",
    ],
  },
  {
    icon: Award,
    title: "TVS Credit E.P.I.C. Challenge - Semi-Finalist",
    date: "August 15, 2024",
    logo: "/company-logos/TVS-Credit.webp",
    description: [
      "Achieved semi-finalist status among 40,000+ participants in a national analytics and IT competition.",
      "Led a team to design innovative fintech repayment solutions with real-world applicability.",
      "Developed wireframe prototypes emphasizing scalability and customer experience.",
      "Advanced through multiple competitive rounds with strong problem-solving and presentation skills.",
    ],
  },
  {
    icon: Users,
    title: "Mentor - APEKSHA",
    date: "August 2023 - Present",
    logo: "/company-logos/Apeksha.jpg",
    description: [
      "Trained 20+ students in Python for data problem-solving.",
      "Developed coding resources for structured practice tasks.",
    ],
  },
];

const certifications = [
  {
    title: "Salesforce AI Associate",
    description: "Certified in Salesforce AI fundamentals and implementation",
    category: "AI & Machine Learning",
    image: "/badges/2023-07_Badge_SF-Certified_AI-Associate_High-Res.png",
    url: "https://www.salesforce.com/trailblazer/s9aa677s1nj5p2qdx3",
  },
  {
    title: "Red Hat Enterprise Application Developer",
    description: "Certified in enterprise Java development and Red Hat technologies",
    category: "Enterprise Development",
    image: "/badges/red-hat-certified-enterprise-application-developer.png",
    url: "https://www.credly.com/badges/59b91eec-9bf7-4e56-bde0-f9084b3d6830/public_url",
  },
  {
    title: "MongoDB Associate Database Administrator",
    description: "Certified in MongoDB database administration and management",
    category: "Database Administration",
    image: "/badges/MongoDBA Certificate.png",
    url: "https://www.credly.com/badges/c2699805-5bdf-467c-bf1c-9463b2dfdc7f/public_url",
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Architect Associate",
    description: "Certified in Oracle Cloud Infrastructure architecture and deployment",
    category: "Cloud Architecture",
    image: "/badges/Oracle Badge.jpg",
    url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=CC638976BD85DC1ACFE6669A3EEED0E8F6DB67500F5A78455281DC6F25E8EA86",
  },
  {
    title: "Automation Anywhere Certified Essentials RPA Professional",
    description: "Certified in Automation Anywhere RPA tools and techniques",
    category: "Robotic Process Automation",
    image: "/badges/RPA logo.jpg",
    url: "https://certificates.automationanywhere.com/8d9c85bb-33b2-47f1-b0da-203541090fb5#acc.x0Xnuds3",
  },
];

const projects = [
  {
    title: "Hermes Agent",
    description: "Industrial AI predictive maintenance platform for equipment monitoring, failure forecasting, and operational insight.",
    tech: ["Python", "AI", "Streamlit", "Sensors"],
    image: "/project-images/movie-predictor.svg",
    github: "https://github.com/nashish109",
    demo: "#",
  },
  {
    title: "Sensor-Based Machine Failure Prediction System",
    description: "Machine learning system that analyzes sensor readings to detect early signs of industrial machine failure.",
    tech: ["Python", "Scikit-learn", "IoT", "Analytics"],
    image: "/project-images/movie-predictor.svg",
    github: "https://github.com/nashish109",
    demo: "#",
  },
  {
    title: "Position & Trade Reconciliation Platform",
    description: "Financial technology platform for comparing positions, resolving trade breaks, and improving operations visibility.",
    tech: ["React", "Spring Boot", "SQL", "FinTech"],
    image: "/project-images/event-system.svg",
    github: "https://github.com/nashish109",
    demo: "#",
  },
  {
    title: "KalaVedika Virtual Art Exhibition Platform",
    description: "Digital exhibition experience for artists and audiences with curated galleries and accessible browsing.",
    tech: ["React", "TypeScript", "UI/UX", "Cloud"],
    image: "/placeholder.svg",
    github: "https://github.com/nashish109",
    demo: "#",
  },
  {
    title: "Online Event Management System",
    description: "End-to-end event platform for registrations, scheduling, attendance, and organizer workflows.",
    tech: ["Spring Boot", "React", "PostgreSQL"],
    image: "/project-images/event-system.svg",
    github: "https://github.com/nashish109",
    demo: "#",
  },
  {
    title: "Stock Price Prediction System",
    description: "Predictive analytics application that models market movement and visualizes trend behavior for analysis.",
    tech: ["Python", "Pandas", "ML", "Visualization"],
    image: "/project-images/movie-predictor.svg",
    github: "https://github.com/nashish109",
    demo: "#",
  },
  {
    title: "Astrological Prediction System",
    description: "Full-stack prediction platform with personalized user flows, database-backed profiles, and scalable delivery.",
    tech: ["Django", "MySQL", "React"],
    image: "/project-images/astro-predict.svg",
    github: "https://github.com/nashish109",
    demo: "#",
  },
];

const SectionHeading = ({ eyebrow, title }: { eyebrow: string; title: string }) => (
  <div className="section-heading">
    <span>{eyebrow}</span>
    <h2>{title}</h2>
  </div>
);

const ExperienceSection = () => (
  <section id="experience" className="portfolio-section">
    <div className="portfolio-container">
      <SectionHeading eyebrow="Experience" title="Focused, practical engineering work." />
      <div className="experience-grid">
        {experiences.map((item) => (
          <article className="clean-card experience-card" key={item.role}>
            <div className="experience-logo-row">
              <img src={item.logo} alt={`${item.role} logo`} className="experience-logo" />
              <div className="card-icon">
                <Briefcase aria-hidden="true" />
              </div>
            </div>
            <p className="card-meta">{item.duration}</p>
            <h3>{item.role}</h3>
            <p className="muted">{item.organization}</p>
            <ul>
              {item.points.map((point) => (
                <li key={point}>
                  <CheckCircle2 aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const ResearchSection = () => (
  <section id="research" className="portfolio-section section-muted">
    <div className="portfolio-container">
      <SectionHeading eyebrow="Research" title="Leadership & Achievements" />
      <div className="research-grid">
        {research.map((item) => (
          <article className="clean-card research-card" key={item.title}>
            <div className="card-topline">
              <img src={item.logo} alt={`${item.title} logo`} className="research-logo" />
              <span className="status-badge">{item.date}</span>
            </div>
            <h3>{item.title}</h3>
            <ul>
              {item.description.map((description) => (
                <li key={description}>
                  <CheckCircle2 aria-hidden="true" />
                  <span>{description}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const CertificationsSection = () => (
  <section id="certifications" className="portfolio-section">
    <div className="portfolio-container">
      <SectionHeading eyebrow="Certifications" title="Validated foundations across cloud, AI, and data." />
      <div className="cert-grid">
        {certifications.map((cert) => (
          <article className="clean-card cert-card" key={cert.title}>
            <img src={cert.image} alt="" aria-hidden="true" className="cert-bg" />
            <div className="cert-overlay" />
            <div className="cert-content">
              <span>{cert.category}</span>
              <h3>{cert.title}</h3>
              <p>{cert.description}</p>
            </div>
            <a href={cert.url} target="_blank" rel="noopener noreferrer">
              Verify
              <ArrowUpRight aria-hidden="true" />
            </a>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const ProjectsSection = () => {
  const [index, setIndex] = useState(0);
  const startX = useRef<number | null>(null);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % projects.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, []);

  const move = (direction: 1 | -1) => {
    setIndex((current) => (current + direction + projects.length) % projects.length);
  };

  const onTouchEnd = (x: number) => {
    if (startX.current === null) return;
    const delta = startX.current - x;
    if (Math.abs(delta) > 40) move(delta > 0 ? 1 : -1);
    startX.current = null;
  };

  return (
    <section id="projects" className="portfolio-section projects-section">
      <div className="portfolio-container">
        <div className="projects-header">
          <SectionHeading eyebrow="Projects" title="" />
          <div className="carousel-controls" aria-label="Project carousel controls">
            <button type="button" onClick={() => move(-1)} aria-label="Previous project">
              <ArrowLeft aria-hidden="true" />
            </button>
            <button type="button" onClick={() => move(1)} aria-label="Next project">
              <ArrowRight aria-hidden="true" />
            </button>
          </div>
        </div>

        <div
          className="project-carousel"
          onTouchStart={(event) => {
            startX.current = event.touches[0].clientX;
          }}
          onTouchEnd={(event) => onTouchEnd(event.changedTouches[0].clientX)}
        >
          <div className="project-track" style={{ transform: `translateX(-${index * 100}%)` }}>
            {projects.map((project) => (
              <article className="project-slide" key={project.title}>
                <div className="project-card">
                  <img src={project.image} alt={`${project.title} thumbnail`} loading="lazy" />
                  <div className="project-copy">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tag-row">
                      {project.tech.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                    <div className="project-actions">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github aria-hidden="true" />
                        GitHub
                      </a>
                      <a href={project.demo} target={project.demo === "#" ? undefined : "_blank"} rel={project.demo === "#" ? undefined : "noopener noreferrer"}>
                        Demo
                        <ArrowUpRight aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="carousel-dots" aria-label="Project carousel position">
          {projects.map((project, dotIndex) => (
            <button
              key={project.title}
              type="button"
              className={dotIndex === index ? "active" : ""}
              onClick={() => setIndex(dotIndex)}
              aria-label={`Show ${project.title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => (
  <section id="contact" className="portfolio-section section-muted">
    <div className="portfolio-container">
      <SectionHeading eyebrow="Contact" title="Direct professional channels." />
      <div className="contact-grid">
        <a className="contact-item" href={profileLinks.email}>
          <Mail aria-hidden="true" />
          <span>Email</span>
          <strong>nashish831@gmail.com</strong>
        </a>
        <a className="contact-item" href={profileLinks.linkedin} target="_blank" rel="noopener noreferrer">
          <Linkedin aria-hidden="true" />
          <span>LinkedIn</span>
          <strong>N. Ashish</strong>
        </a>
        <a className="contact-item" href={profileLinks.github} target="_blank" rel="noopener noreferrer">
          <Github aria-hidden="true" />
          <span>GitHub</span>
          <strong>nashish109</strong>
        </a>
        <div className="contact-item">
          <MapPin aria-hidden="true" />
          <span>Location</span>
          <strong>India</strong>
        </div>
      </div>
    </div>
  </section>
);

const Home = () => {
  const location = useLocation();
  const section = location.pathname.split("/").pop();

  useEffect(() => {
    if (!section || section === "portfolio") return;
    window.setTimeout(() => {
      const element = document.getElementById(section);
      if (!element) return;
      const headerOffset = window.matchMedia("(max-width: 700px)").matches ? 64 : 72;
      window.scrollTo({ top: element.offsetTop - headerOffset, behavior: "smooth" });
    }, 80);
  }, [location.pathname, section]);

  return (
    <>
      <Hero />
      <About />
      <ExperienceSection />
      <ResearchSection />
      <CertificationsSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
};

export default Home;
