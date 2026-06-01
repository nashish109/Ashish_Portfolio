import { Award, Code, Users } from "lucide-react";
import jpmclogo from "/company-logos/Jpmc.jpg";
import tvslogo from "/company-logos/TVS-Credit.webp";
import apekshalogo from "/company-logos/Apeksha.jpg";
import nokia from "/company-logos/NOKIA.png";

const achievements = [
  {
    icon: Code,
    title: "Participant - JPMC CFG Hackathon",
    date: "June 28-29, 2025",
    logo: jpmclogo,
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

const Leadership = () => {
  return (
    <section id="research" className="section-block">
      <div className="section-wrap">
        <div className="hermes-grid">
          <div className="hermes-cell col-span-full text-center">
            <h2 className="section-title mt-5">Leadership & Achievements</h2>
          </div>
          

          <div className="hermes-cell col-span-full !p-0">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {achievements.map((achievement) => {
                const Icon = achievement.icon;
                return (
                  <article key={achievement.title} className="hermes-hover border-b border-current/20 p-5 lg:border-r">
                    <div className="flex items-start gap-4">
                      {achievement.logo ? (
                        <img src={achievement.logo} alt={`${achievement.title} logo`} className="h-14 w-20 border border-current/20 bg-white object-contain p-1" />
                      ) : (
                        <div className="grid h-14 w-14 place-items-center border border-current/20">
                          <Icon className="h-6 w-6 opacity-70" />
                        </div>
                      )}
                      <div>
                        <h3 className="text-xl font-semibold uppercase leading-tight tracking-[0.035em]">{achievement.title}</h3>
                        <p className="mt-1 font-mono text-xs uppercase tracking-[0.16em] opacity-50">{achievement.date}</p>
                      </div>
                    </div>
                    <ul className="mt-6 grid gap-3 text-sm leading-relaxed opacity-70">
                      {achievement.description.map((item) => (
                        <li key={item} className="flex gap-3 tracking-normal" style={{ textTransform: "none" }}>
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-current" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
