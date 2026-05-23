import { useEffect, useRef, useState } from "react";
import dtccLogo from "../../assets/company-logos/dtcc.webp";
import aicteLogo from "../../assets/company-logos/AICTE-Logo-Vector.svg-.png";
import nalcoLogo from "../../assets/company-logos/NALCO.png";

interface TimelineItem {
  role: string;
  org: string;
  period: string;
  bullets: string[];
  logo?: string;
}

const items: TimelineItem[] = [
  {
    role: "Vocational Trainee - NALCO",
    org: "Damanjodi, Odisha",
    period: "May 2026 - June 2026",
    logo: nalcoLogo,
    bullets: [
      "Gained knowledge of Intra-Net systems for secure and efficient internal employee data flow.",
      "Acquired hands-on exposure to industrial machinery and control room operations using Honeywell International automation systems.",
      "Developed a predictive maintenance model to detect potential machine breakdowns and generate alerts using vibration data analysis.",
    ],
  },
  {
    role: "IT Intern - DTCC",
    org: "Chennai, Tamil Nadu",
    period: "May 2025 - July 2025",
    logo: dtccLogo,
    bullets: [
      "Contributed to a Trade Reconciliation project focusing on frontend development and database design.",
      "Designed and managed relational database schemas to enable efficient data handling and reconciliation workflows.",
      "Utilized Angular, TypeScript, and MySQL to build scalable and reliable solutions.",
    ],
  },
  {
    role: "Data Engineering Intern - AICTE",
    org: "Remote",
    period: "June 2024 - August 2024",
    logo: aicteLogo,
    bullets: [
      "Developed and maintained data pipelines using Python and SQL.",
      "Created and managed databases for data storage and retrieval.",
      "Worked with data warehousing solutions to store and analyze large datasets.",
    ],
  },
];

export const Timeline = () => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

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
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="mx-auto max-w-4xl">
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-300 via-cyan-300 to-transparent shadow-[0_0_18px_rgba(34,211,238,0.35)] sm:left-8" />

        <div className="space-y-12">
          {items.map((item, index) => (
            <div key={item.role} className="relative flex items-start" ref={(el) => (itemRefs.current[index] = el)}>
              <div className="absolute left-2 top-2 z-10 h-4 w-4 border-4 border-black bg-emerald-300 shadow-[0_0_18px_rgba(52,211,153,0.8)] sm:left-6" />

              <div className="ml-8 min-w-0 flex-1 sm:ml-16">
                <div className={`retro-window transition-all duration-1000 ${visibleItems[index] ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                  <div className="p-4 pt-8 sm:p-6 sm:pt-10">
                    <div className="mb-5 border border-cyan-300/45 bg-black px-3 py-2 text-left font-mono text-xs text-cyan-100 shadow-[inset_1px_1px_0_rgba(255,255,255,0.12)]">
                      LOG_ENTRY_{String(index + 1).padStart(2, "0")} / {item.period}
                    </div>

                    <div className="mb-6 flex flex-col items-start gap-4 sm:flex-row">
                      {item.logo && (
                        <img src={item.logo} alt={`${item.org} logo`} className="h-12 w-16 border border-cyan-300/30 object-cover" />
                      )}
                      <div className="text-left">
                        <h3 className="mb-1 text-xl font-semibold text-white">{item.role}</h3>
                        <p className="text-sm text-cyan-300">{item.org}</p>
                        <p className="text-sm text-slate-400">{item.period}</p>
                      </div>
                    </div>

                    <ul className="ml-2 space-y-3 text-left text-sm text-gray-300">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3">
                          <span className="mt-1 text-emerald-300">&gt;</span>
                          <span className="flex-1 leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
