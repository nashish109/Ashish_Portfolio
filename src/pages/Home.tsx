import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Timeline } from "@/components/portfolio/Timeline";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { Contact } from "@/components/portfolio/Contact";
import { ArrowDown, Rocket, Target, Code2, Briefcase } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Home = () => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const featuredProjects = [
    {
      title: "Movie Box Office Predictor",
      subtitle: "ML-Powered Analytics Dashboard",
      tech: ["Power BI", "Python", "Machine Learning"],
      problem: "Need for accurate box office predictions",
      solution: "85% accuracy ML model with interactive visualizations",
      codeUrl: "https://github.com/nashish109/movie-predictor",
      demoUrl: "https://movie-predictor-demo.vercel.app",
      image: "/project-images/movie-predictor.svg"
    },
    {
      title: "Event Management System",
      subtitle: "Enterprise Microservices Platform",
      tech: ["Spring Boot", "React", "Docker"],
      problem: "Complex event scheduling & tracking",
      solution: "10k+ daily users with real-time analytics",
      codeUrl: "https://github.com/nashish109/event-sys",
      demoUrl: "https://event-sys-demo.com",
      image: "/project-images/event-system.svg"
    }
  ];

  const stats = [
    { icon: Rocket, value: "2+", label: "Years Experience" },
    { icon: Target, value: "10+", label: "Projects Completed" },
    { icon: Code2, value: "15+", label: "Technologies" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = itemRefs.current.findIndex(ref => ref === entry.target);
          if (index !== -1 && entry.isIntersecting) {
            setVisibleItems(prev => {
              const newItems = [...prev];
              newItems[index] = true;
              return newItems;
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />
      

      {/* About Section */}
      <div
        ref={(el) => (itemRefs.current[8] = el)}
        className={`transition-all duration-1000 ${
          visibleItems[8]
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <About />
      </div>
      
      {/* Skills Section */}
      <section className="py-24">
        <div
          ref={(el) => (itemRefs.current[0] = el)}
          className={`container mx-auto px-6 transition-all duration-1000 ${
            visibleItems[0]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <Skills />
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div
            ref={(el) => (itemRefs.current[1] = el)}
            className={`text-center space-y-6 mb-16 transition-all duration-1000 ${
              visibleItems[1]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center justify-center gap-2 text-cyan-400 mb-4">
              <Briefcase className="h-5 w-5" />
              <span className="text-sm font-medium">Professional Journey</span>
              <Briefcase className="h-5 w-5" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Work <span className="text-cyan-400">Experience</span>
            </h2>
            <p
              ref={(el) => (itemRefs.current[3] = el)}
              className={`text-gray-400 text-lg max-w-3xl mx-auto transition-all duration-1000 ${
                visibleItems[3]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              A track record of delivering exceptional results and driving innovation
            </p>
          </div>
          <Timeline />
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div
            ref={(el) => (itemRefs.current[2] = el)}
            className={`text-center space-y-6 mb-16 transition-all duration-1000 ${
              visibleItems[2]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Featured <span className="text-cyan-400">Projects</span>
            </h2>
            <p
              ref={(el) => (itemRefs.current[4] = el)}
              className={`text-gray-400 text-lg max-w-3xl mx-auto transition-all duration-1000 ${
                visibleItems[4]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Showcasing innovative solutions and technical expertise
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={project.title}
                ref={(el) => (itemRefs.current[index + stats.length] = el)}
                className={`transition-all duration-1000 ${
                  visibleItems[index + stats.length]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
          
          <div
            ref={(el) => (itemRefs.current[7] = el)}
            className={`text-center mt-12 transition-all duration-1000 ${
              visibleItems[7]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <a
              href="/portfolio/projects"
              className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-3 rounded-xl font-semibold"
            >
              View All Projects
              <ArrowDown className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div
        ref={(el) => (itemRefs.current[6] = el)}
        className={`transition-all duration-1000 ${
          visibleItems[6]
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <Contact />
      </div>
    </div>
  );
};

export default Home;
