import { Award, Users, Code } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import jpmclogo from "/company-logos/Jpmc.jpg";
import tvslogo from "/company-logos/TVS-Credit.webp";
import apekshalogo from "/company-logos/Apeksha.jpg";
import nokia from "/company-logos/NOKIA.png";

const Leadership = () => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const achievements = [
    {
      icon: Code,
      title: "Participant - JPMC CFG Hackathon",
      date: "June 28-29, 2025",
      logo: jpmclogo,
      logoClassName: "w-12 h-12",
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
      logo: nokia,
      logoClassName: "h-12 w-24 object-contain bg-white p-1",
      description: [
        "Reached the Semi-Finalist round of Nokia Accelerate Her in Tech Hackathon by successfully clearing multiple competitive programming and technical assessment rounds.",
        "Solved MCQs and coding challenges on the HackerEarth platform, demonstrating strong problem-solving and programming fundamentals.",
        "Participated in advanced Code Hunt rounds focused on networking, software concepts, and core technical problem-solving under competitive conditions.",
      ],
    },
    {
      icon: Award,
      title: "TVS Credit E.P.I.C. Challenge - Semi-Finalist",
      date: "2024",
      logo: tvslogo,
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
      logo: apekshalogo,
      description: [
        "Trained 20+ students in Python for data problem-solving.",
        "Developed coding resources for structured practice tasks.",
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = itemRefs.current.findIndex((ref) => ref === entry.target);
          if (index !== -1 && entry.isIntersecting) {
            setVisibleItems((prev) => {
              const newItems = [...prev];
              newItems[index] = true;
              return newItems;
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="pb-16 pt-8">
      <section className="container mx-auto px-4 sm:px-6">
        <div className="space-y-12 text-center">
          <p className="retro-kicker">Achievement Database</p>
          <h2 className="retro-title mb-8 text-3xl sm:text-4xl md:text-5xl">
            Leadership & <span className="text-cyan-400">Achievements</span>
          </h2>

          <div className="mx-auto max-w-4xl">
            <div className="relative">
              <div className="absolute bottom-0 left-4 top-0 w-0.5 bg-gradient-to-b from-emerald-300 via-cyan-300 to-transparent shadow-[0_0_18px_rgba(34,211,238,0.35)] sm:left-8" />

              <div className="space-y-12">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <div
                      key={achievement.title}
                      className="relative flex items-start"
                      ref={(el) => (itemRefs.current[index] = el)}
                    >
                      <div className="absolute left-2 top-2 z-10 h-4 w-4 border-4 border-black bg-emerald-300 shadow-[0_0_18px_rgba(52,211,153,0.8)] sm:left-6" />

                      <div className="ml-8 min-w-0 flex-1 sm:ml-16">
                        <div
                          className={`retro-window p-4 pt-8 transition-all duration-1000 sm:p-6 sm:pt-10 ${
                            visibleItems[index] ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                          }`}
                        >
                          <div className="mb-6 flex flex-col items-start gap-4 sm:flex-row">
                            {achievement.logo ? (
                              <img
                                src={achievement.logo}
                                alt={`${achievement.title} logo`}
                                className={`border border-cyan-300/30 ${achievement.logoClassName || "h-12 w-16 object-cover"}`}
                              />
                            ) : (
                              <div className="border border-cyan-500/50 bg-black p-3">
                                <Icon className="h-9 w-9 text-cyan-400" />
                              </div>
                            )}
                            <div className="text-left">
                              <h3 className="mb-1 text-xl font-semibold text-white">{achievement.title}</h3>
                              <p className="text-sm text-cyan-400">{achievement.date}</p>
                            </div>
                          </div>

                          <ul className="ml-2 space-y-3 text-left text-sm text-gray-300">
                            {achievement.description.map((item) => (
                              <li key={item} className="flex items-start gap-3">
                                <span className="mt-1 text-cyan-400">&bull;</span>
                                <span className="flex-1 leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Leadership;
