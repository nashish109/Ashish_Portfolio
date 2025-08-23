import { Award, Users, Code } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import jpmclogo from "/company-logos/Jpmc.jpg";
import tvslogo from "/company-logos/TVS-Credit.webp";
import apekshalogo from "/company-logos/Apeksha.jpg";
const Leadership = () => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const achievements = [
    {
      icon: Code,
      title: "Participant – JPMC CFG Hackathon",
      date: "June 28–29, 2025",
      logo: jpmclogo,
      logoClassName: "w-12 h-12",
      description: [
        "Built a multi-role React.js frontend with real-time dashboards, WhatsApp updates, and regional language support.",
        "Designed secure MongoDB schemas for attendance, progress, and job mapping.",
        "Proposed enhancements including certificate automation and scheme alerts for scalability."
      ]
    },
    {
      icon: Award,
      title: "TVS Credit E.P.I.C. Challenge – Semi-Finalist",
      date: "2024",
      logo: tvslogo,
      description: [
        "Achieved semi-finalist status among 40,000+ participants in a national analytics and IT competition.",
        "Led a team to design innovative fintech repayment solutions with real-world applicability.",
        "Developed wireframe prototypes emphasizing scalability and customer experience.",
        "Advanced through multiple competitive rounds with strong problem-solving and presentation skills."
      ]
    },
    {
      icon: Users,
      title: "Mentor – APEKSHA",
      date: "August 2023 – Present",
      logo: apekshalogo,
      description: [
        "Trained 20+ students in Python for data problem-solving.",
        "Developed coding resources for structured practice tasks."
      ]
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
    <div className="pt-8 pb-16">
      <section className="container mx-auto px-6">
        <div className="text-center space-y-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Leadership & <span className="text-cyan-400">Achievements</span>
          </h2>
          
          {/* Timeline Layout */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-cyan-400 to-transparent"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <div 
                      key={index} 
                      className="relative flex items-start"
                      ref={(el) => itemRefs.current[index] = el}
                    >
                      {/* Timeline Dot */}
                      <div className="absolute left-6 top-2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-black shadow-lg z-10"></div>
                      
                      {/* Content Card */}
                      <div className="ml-16 flex-1">
                        <div
                          className={`bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-cyan-500/50 hover:shadow-lg transition-all duration-1000 ${
                            visibleItems[index] 
                              ? 'opacity-100 translate-y-0' 
                              : 'opacity-0 translate-y-8'
                          }`}
                        >
                          {/* Header */}
                          <div className="flex items-start gap-4 mb-6">
                            {achievement.logo && (
                              <img src={achievement.logo} alt={`${achievement.title} logo`} className={`object-cover ${achievement.logoClassName || 'w-16.5 h-12 rounded-md'}`} />
                            )}
                            {!achievement.logo && (
                              <div className="p-3 rounded-xl bg-cyan-500/20 border border-cyan-500/30">
                                <Icon className="h-9 w-9 text-cyan-400" />
                              </div>
                            )}
                            <div className="text-left">
                              <h3 className="font-semibold text-xl text-white mb-1">{achievement.title}</h3>
                              <p className="text-sm text-cyan-400">{achievement.date}</p>
                            </div>
                          </div>
                          
                          {/* Description with Bullet Points in Single Lines */}
                          <ul className="text-gray-300 space-y-3 text-sm ml-2 text-left">
                            {achievement.description.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start gap-3">
                                <span className="text-cyan-400 mt-1">•</span>
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
