import dtccLogo from "../../assets/company-logos/dtcc.webp";
import aicteLogo from "../../assets/company-logos/AICTE-Logo-Vector.svg-.png";
import nalcoLogo from "../../assets/company-logos/NALCO.png";

const items = [
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
      "Contributed to a trade reconciliation project across frontend implementation and database design.",
      "Designed relational schemas for efficient data handling in reconciliation workflows.",
      "Used Angular, TypeScript, and MySQL to support scalable enterprise application delivery.",
    ],
  },
  {
    role: "Data Engineering Intern - AICTE",
    org: "Remote",
    period: "June 2024 - August 2024",
    logo: aicteLogo,
    bullets: [
      "Developed and maintained Python and SQL data pipelines.",
      "Created databases for structured storage, retrieval, and analysis.",
      "Worked with warehousing concepts for larger analytical datasets.",
    ],
  },
];

export const Timeline = () => {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="relative">
        <div className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-cyan-200/0 via-cyan-200/35 to-cyan-200/0 sm:left-8" />

        <div className="space-y-6 sm:space-y-8">
          {items.map((item) => (
            <article key={item.role} className="relative pl-10 sm:pl-20">
              <div className="absolute left-[0.7rem] top-7 h-3 w-3 border border-current/40 bg-current sm:left-[1.7rem]" />
              <div className="premium-card hermes-hover">
                <div className="premium-inner p-5 sm:p-7">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                    <img src={item.logo} alt={`${item.org} logo`} className="h-14 w-20 rounded-md border border-white/10 bg-white object-contain p-1" />
                    <div className="min-w-0 flex-1 text-left">
                      <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                        <div>
                          <h3 className="mt-2 text-xl font-semibold text-white">{item.role}</h3>
                          <p className="mt-1 text-sm tracking-normal opacity-60" style={{ textTransform: "none" }}>{item.org}</p>
                        </div>
                        <span className="premium-chip w-fit">{item.period}</span>
                      </div>
                      <ul className="mt-5 grid gap-3 text-sm leading-7 opacity-70">
                        {item.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-3">
                            <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-200" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
