import { Button } from "@/components/ui/button";
import { Download, MapPin, Languages, User, GraduationCap, Award, Globe, BarChart3, LineChart, Rocket, Users, Linkedin, ArrowDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import dpslogo from "/company-logos/dps_sh.webp";
import kllogo from "/company-logos/Kl.jpg";

export const About: React.FC<{ className?: string }> = ({ className = "" }) => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scrollToEducation = () => {
    const educationSection = document.getElementById("education");
    if (!educationSection) return;

    const y = educationSection.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const education = [
    {
      logo: kllogo,
      title: "B.Tech in Computer Science & Engineering",
      subtitle: "Data Science and Big Data Analytics",
      institution: "KL University, Vijayawada",
      duration: "2022- Present",
      achievement: "GPA: 9.39/10",
      subjects: ["Data Structures & Algorithms", "Operating Systems", "DBMS"]
    },
    {
      logo: dpslogo,
      title: "High School",
      subtitle: "MPC (Mathematics, Physics, Chemistry)",
      institution: "Delhi Public School Damanjodi",
      duration: "2020 - 2022",
      achievement: "Percentage: 83.6%",
      subjects: ["Mathematics", "Physics", "Chemistry", "Computer Science"]
    },
    {
      logo: dpslogo,
      title: "Secondary School",
      subtitle: "Class 6-10",
      institution: "Delhi Public School Damanjodi",
      duration: "2008 - 2020",
      achievement: "Percentage: 93.6%",
      subjects: ["Mathematics", "Science", "Social Studies", "English"]
    }
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
    <section id="about" className={`container scroll-mt-32 px-4 py-16 sm:px-6 sm:py-20 ${className}`}>
      <div className="mb-10 space-y-6 text-center">
        <div className="inline-flex items-center justify-center gap-2 text-cyan-300">
          <span className="retro-kicker">Inbox / Profile Mail</span>
        </div>
        <h2 className="retro-title text-4xl md:text-5xl">
          About <span className="text-cyan-400">Me</span>
        </h2>
      </div>

      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.8fr_1fr]">
        <div className="retro-window">
          <div className="space-y-6 p-5 pt-8 sm:p-8 sm:pt-10">
            <h3 className="text-left font-mono text-sm uppercase tracking-[0.18em] text-cyan-200">MAIL_001 / Who I Am</h3>
            <div className="border border-cyan-300/45 bg-black p-4 font-mono text-sm leading-7 text-cyan-100 shadow-[inset_1px_1px_0_rgba(255,255,255,0.12)]">
              <p>
                I’m a passionate Data-Driven Software Engineer who thrives on blending full-stack development, data analytics, and cloud technologies to build impactful solutions. My goal is to transform data into innovation while constantly learning and contributing to the tech community.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Globe className="text-cyan-400 h-5 w-5 mt-1" />
                  <span><strong>Full-Stack & Cloud</strong> – Proficient in Python, React, AWS, and Azure.</span>
                </li>
                <li className="flex items-start gap-3">
                  <BarChart3 className="text-green-400 h-5 w-5 mt-1" />
                  <span><strong>Data-Driven Solutions</strong> – Design scalable apps that convert complex data into actionable insights.</span>
                </li>
                <li className="flex items-start gap-3">
                  <LineChart className="text-purple-400 h-5 w-5 mt-1" />
                  <span><strong>Experience</strong> – Built predictive analytics dashboards and architected enterprise-level systems.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Rocket className="text-red-400 h-5 w-5 mt-1" />
                  <span><strong>Continuous Learner</strong> – Stay ahead with emerging technologies and trends.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="text-orange-400 h-5 w-5 mt-1" />
                  <span><strong>Community</strong> – Active in hackathons, mentorship, and open-source contributions.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="retro-window">
            <div className="space-y-6 p-5 pt-8 sm:p-8 sm:pt-10 text-left">
              <h3 className="text-left font-mono text-sm uppercase tracking-[0.18em] text-cyan-200">PROFILE_CARD / Personal Information</h3>
              <div className="border border-cyan-300/45 bg-black p-4 font-mono text-sm leading-7 text-cyan-100 shadow-[inset_1px_1px_0_rgba(255,255,255,0.12)]">
                <div className="space-y-4 text-base sm:text-lg">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 shrink-0 text-cyan-400 mt-1" />
                    <span className="text-gray-300"><strong className="text-white">From:</strong> Damanjodi, Koraput, Odisha</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Languages className="h-5 w-5 shrink-0 text-cyan-400 mt-1" />
                    <span className="text-gray-300"><strong className="text-white">Languages:</strong> English, Hindi, Telugu, Odia</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <User className="h-5 w-5 shrink-0 text-cyan-400 mt-1" />
                    <span className="text-gray-300"><strong className="text-white">Age:</strong> 21</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <User className="h-5 w-5 shrink-0 text-cyan-400 mt-1" />
                    <span className="text-gray-300"><strong className="text-white">Gender:</strong> Male</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Download className="h-5 w-5 shrink-0 text-cyan-400 mt-1" />
                    <a href="mailto:nashish109@gmail.com" className="min-w-0 break-words text-gray-300 hover:text-cyan-400"><strong className="text-white">Mail:</strong> nashish109@gmail.com</a>
                  </div>
                  <div className="flex items-start gap-3">
                    <Linkedin className="h-5 w-5 shrink-0 text-cyan-400 mt-1" />
                    <a href="https://www.linkedin.com/in/n-ashish-455b37244/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400"><strong className="text-white">LinkedIn</strong></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Button
            onClick={scrollToEducation}
            className="retro-button w-full"
          >
            View Education
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      <div id="education" className="max-w-4xl mx-auto scroll-mt-24 mt-16">
        <div className="text-center mb-10">
          <h3 className="retro-title inline-flex flex-wrap items-center justify-center gap-3 text-2xl sm:text-3xl md:text-4xl">
            <GraduationCap className="h-6 w-6 sm:h-7 sm:w-7 text-cyan-400" />
            Academic <span className="text-cyan-400">Journey</span>
          </h3>
        </div>

        <div className="relative">
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-300 via-cyan-300 to-transparent shadow-[0_0_18px_rgba(34,211,238,0.35)]"></div>

          <div className="space-y-16">
            {education.map((edu, index) => {
              const Logo = edu.logo;
              return (
                <div
                  key={index}
                  className="relative flex items-start"
                  ref={(el) => itemRefs.current[index] = el}
                >
                  <div className="absolute left-2 sm:left-6 top-2 w-4 h-4 bg-emerald-300 border-4 border-black shadow-[0_0_18px_rgba(52,211,153,0.8)] z-10"></div>

                  <div className="ml-8 sm:ml-16 flex-1 min-w-0">
                    <div
                      className={`retro-window transition-all duration-1000 ${
                        visibleItems[index]
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-8'
                      }`}
                    >
                      <div className="p-4 pt-8 sm:p-8 sm:pt-10">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                          {Logo && (
                            <img src={Logo} alt="logo" className="h-10 w-10 border border-cyan-300/30 object-cover" />
                          )}
                          <div className="text-left">
                            <h3 className="font-bold text-xl text-white">{edu.title}</h3>
                            <p className="text-cyan-300 text-sm font-medium">{edu.subtitle}</p>
                          </div>
                        </div>

                        <div className="sm:ml-16 text-left">
                          <p className="text-gray-200 font-semibold">{edu.institution}</p>
                          <p className="text-gray-300 text-sm">{edu.duration}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <Award className="h-4 w-4 text-yellow-300" />
                            <span className="text-yellow-300 font-bold">{edu.achievement}</span>
                          </div>
                        </div>

                        <div className="sm:ml-16 text-left mt-4">
                          <p className="text-gray-400 text-sm mb-2">Subjects:</p>
                          <div className="flex flex-wrap gap-2">
                            {edu.subjects.map((subject, subjectIndex) => (
                              <span key={subjectIndex} className="chrome-chip px-3 py-1 text-xs">
                                {subject}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
