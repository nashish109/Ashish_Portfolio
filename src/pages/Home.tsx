import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Rocket, Target, Code2, FolderOpen, Mail, Cpu, Monitor, Database, TerminalSquare } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const stats = [
    { icon: Rocket, value: "2+", label: "Years Experience" },
    { icon: Target, value: "10+", label: "Projects Completed" },
    { icon: Code2, value: "15+", label: "Technologies" }
  ];

  const quickLaunch = [
    { icon: FolderOpen, label: "Projects", path: "/portfolio/projects", note: "software archive" },
    { icon: Database, label: "Experience", path: "/portfolio/experience", note: "work logs" },
    { icon: Monitor, label: "Certifications", path: "/portfolio/certifications", note: "verified badges" },
    { icon: Mail, label: "Contact", path: "/portfolio/contact", note: "secure message" },
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

      <section className="px-4 pb-10 sm:px-6 lg:pb-16">
        <div className="container mx-auto">
          <div className="web-directory">
            <div className="web-directory-title flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <span>ASHISH_NET / Desktop Command Center</span>
              <span className="text-emerald-300">visitor_session: active</span>
            </div>
            <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
              <div className="border-b-2 border-cyan-300/35 p-4 sm:p-6 lg:border-b-0 lg:border-r-2">
                <div className="mb-4 flex items-center gap-3 font-mono text-sm uppercase tracking-[0.16em] text-cyan-100">
                  <TerminalSquare className="h-5 w-5 text-emerald-300" />
                  Web Directory
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {quickLaunch.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link key={item.label} to={item.path} className="desktop-shortcut">
                        <Icon className="h-8 w-8 text-cyan-200" />
                        <span>{item.label}</span>
                        <span className="text-[0.62rem] text-slate-500">{item.note}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <div className="mb-4 flex items-center gap-3 font-mono text-sm uppercase tracking-[0.16em] text-cyan-100">
                  <Cpu className="h-5 w-5 text-emerald-300" />
                  Live System Log
                </div>
                <div className="mb-4 border border-cyan-300/35 bg-black p-4 font-mono text-sm leading-7 text-cyan-100 shadow-[inset_1px_1px_0_rgba(255,255,255,0.12)]">
                  <p><span className="text-emerald-300">[00:01]</span> Mounted profile archive...</p>
                  <p><span className="text-emerald-300">[00:02]</span> Loaded analytics, cloud, and full-stack modules...</p>
                  <p><span className="text-emerald-300">[00:03]</span> Recruiter view optimized for desktop, tablet, and mobile...</p>
                  <p><span className="text-emerald-300">[OK]</span> Portfolio workstation ready.</p>
                </div>
                <div className="grid gap-3 md:grid-cols-3">
                  {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <div key={stat.label} className="border border-cyan-300/30 bg-black p-3 font-mono shadow-[inset_1px_1px_0_rgba(255,255,255,0.12)]">
                        <div className="mb-2 flex items-center justify-between gap-3">
                          <span className="flex items-center gap-2 text-cyan-100">
                            <Icon className="h-4 w-4 text-emerald-300" />
                            {stat.label}
                          </span>
                          <span className="text-lg font-black text-white">{stat.value}</span>
                        </div>
                        <div className="h-2 border border-cyan-300/30 bg-black">
                          <div
                            className="h-full bg-[repeating-linear-gradient(90deg,#22c55e_0_8px,#67e8f9_8px_14px)]"
                            style={{ width: `${76 + index * 9}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      {/* About Section */}
      <div className="ninety-divider">directory://profile/about-me</div>
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
      <div className="ninety-divider">diagnostics://technologies-tools</div>
      <section className="py-12 sm:py-16 lg:py-20">
        <div
          ref={(el) => (itemRefs.current[0] = el)}
          className={`container mx-auto px-4 sm:px-6 transition-all duration-1000 ${
            visibleItems[0]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <Skills />
        </div>
      </section>

    </div>
  );
};

export default Home;
