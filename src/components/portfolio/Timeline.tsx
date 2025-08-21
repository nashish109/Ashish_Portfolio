import { useEffect, useRef, useState } from "react";
import dtccLogo from "../../assets/company-logos/dtcc.webp";
import aicteLogo from "../../assets/company-logos/AICTE-Logo-Vector.svg-.png";

interface TimelineItem {
  role: string;
  org: string;
  period: string;
  bullets: string[];
  logo?: string;
}

const items: TimelineItem[] = [
  {
    role: "IT Intern – DTCC",
    org: "Chennai, Tamil Nadu",
    period: "May 2025 – July 2025",
    logo: dtccLogo,
    bullets: [
      "Contributed to a Trade Reconciliation project focusing on frontend development and database design.",
      "Designed and managed relational database schemas to enable efficient data handling and reconciliation workflows.",
      "Utilized Angular, TypeScript, and MySQL to build scalable and reliable solutions.",
    ],
  },
  {
    role: "Data Engineering Intern – AICTE",
    org: "Remote",
    period: "June 2024 – August 2024",
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
    <div className="max-w-4xl mx-auto">
      <div className="relative">
        {/* Vertical Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-cyan-400 to-transparent"></div>
        
        {/* Timeline Items */}
        <div className="space-y-12">
          {items.map((item, index) => (
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
                    {item.logo && (
                      <img src={item.logo} alt={`${item.org} logo`} className="w-16.5 h-12 rounded-md object-cover" />
                    )}
                    <div className="text-left">
                      <h3 className="font-semibold text-xl text-white mb-1">{item.role}</h3>
                      <p className="text-sm text-cyan-400">{item.org}</p>
                      <p className="text-sm text-cyan-400">{item.period}</p>
                    </div>
                  </div>
                  
                  {/* Description with Bullet Points */}
                  <ul className="text-gray-300 space-y-3 text-sm ml-2 text-left">
                    {item.bullets.map((bullet, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span className="flex-1 leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
