import { Button } from "@/components/ui/button";
import { Download, MapPin, Languages, User, GraduationCap, Award, BookOpen, School, Globe, BarChart3, LineChart, Rocket, Users, Linkedin, ArrowDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import dpslogo from "/company-logos/dps_sh.webp";
import kllogo from "/company-logos/Kl.jpg";

export const About: React.FC<{ className?: string }> = ({ className = "" }) => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeTab, setActiveTab] = useState(0);

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
    <section id="about" className={`py-16 ${className}`}>
      <div className="container mx-auto px-6 relative">
        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-400 animate-bounce">
          <ArrowDown className="h-6 w-6" />
        </div>
        <div className="text-center space-y-6">
          {/* Header */}
          <div id="about-header" className="space-y-2">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              About <span className="text-cyan-400">Me</span>
            </h2>
          </div>

          {/* Two Column Layout - Who I Am and Personal Info */}
          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            {/* Left Side - Who I Am */}
            <div className="lg:col-span-3 space-y-6">
              <h3 className="text-2xl font-bold text-white text-left">Who I Am</h3>
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
                <div className="text-gray-300 space-y-6 leading-relaxed text-left">
                  {/* Intro */}
                  <p>
                    I’m a passionate Data-Driven Software Engineer who thrives on blending full-stack development, data analytics, and cloud technologies to build impactful solutions. My goal is to transform data into innovation while constantly learning and contributing to the tech community.
                  </p>

                  {/* Bullet Points with Icons */}
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

                {/* Resume Button */}
              </div>
            </div>

            {/* Right Side - Personal Information */}
            <div className="lg:col-span-2 space-y-6">
              <h3 className="text-2xl font-bold text-white text-left">Personal Information</h3>
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 text-left">
                <div className="space-y-6">
                  <div className="space-y-4 text-lg">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-cyan-400" />
                      <span className="text-gray-300"><strong className="text-white">From:</strong> Damanjodi, Koraput, Odisha</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Languages className="h-5 w-5 text-cyan-400" />
                      <span className="text-gray-300"><strong className="text-white">Languages:</strong> English, Hindi, Telugu, Odia</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <User className="h-5 w-5 text-cyan-400" />
                      <span className="text-gray-300"><strong className="text-white">Age:</strong> 21</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <User className="h-5 w-5 text-cyan-400" />
                      <span className="text-gray-300"><strong className="text-white">Gender:</strong> Male</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Download className="h-5 w-5 text-cyan-400" />
                      <a href="mailto:nashish109@gmail.com" className="text-gray-300 hover:text-cyan-400"><strong className="text-white">Mail:</strong> nashish109@gmail.com</a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Linkedin className="h-5 w-5 text-cyan-400" />
                      <a href="https://www.linkedin.com/in/n-ashish-455b37244/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400"><strong className="text-white">LinkedIn</strong></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold text-white text-center my-16">Education</h3>
            <div className="relative">
              {/* Vertical Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-cyan-400 to-transparent"></div>
              
              {/* Timeline Items */}
              <div className="space-y-16">
                {education.map((edu, index) => {
                  const Logo = edu.logo;
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
                          className={`bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-cyan-500/50 hover:shadow-lg transition-all duration-1000 ${
                            visibleItems[index]
                              ? 'opacity-100 translate-y-0'
                              : 'opacity-0 translate-y-8'
                          }`}
                        >
                          {/* Header */}
                          <div className="flex items-center gap-4 mb-4">
                            {Logo && (
                              <img src={Logo} alt="logo" className="h-10 w-10 rounded-lg object-cover" />
                            )}
                            <div className="text-left">
                              <h3 className="font-bold text-xl text-white">{edu.title}</h3>
                              <p className="text-cyan-300 text-sm font-medium">{edu.subtitle}</p>
                            </div>
                          </div>
                          
                          {/* Institution and Duration */}
                          <div className="ml-16 text-left">
                            <p className="text-gray-200 font-semibold">{edu.institution}</p>
                            <p className="text-gray-300 text-sm">{edu.duration}</p>
                            <div className="flex items-center gap-2 mt-2">
                              <Award className="h-4 w-4 text-yellow-300" />
                              <span className="text-yellow-300 font-bold">{edu.achievement}</span>
                            </div>
                          </div>
                          
                          {/* Subjects */}
                          <div className="ml-16 text-left mt-4">
                            <p className="text-gray-400 text-sm mb-2">Subjects:</p>
                            <div className="flex flex-wrap gap-2">
                              {edu.subjects.map((subject, subjectIndex) => (
                                <span key={subjectIndex} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full border border-cyan-500/30">
                                  {subject}
                                </span>
                              ))}
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
        </div>
      </div>
    </section>
  );
};
