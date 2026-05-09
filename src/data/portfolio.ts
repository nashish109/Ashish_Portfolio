import {
  Award,
  BarChart3,
  Code,
  Globe,
  LineChart,
  Rocket,
  Users,
  type LucideIcon,
} from "lucide-react";
import dtccLogo from "@/assets/company-logos/dtcc.webp";
import aicteLogo from "@/assets/company-logos/AICTE-Logo-Vector.svg-.png";
import dpsLogo from "/company-logos/dps_sh.webp";
import klLogo from "/company-logos/Kl.jpg";
import jpmcLogo from "/company-logos/Jpmc.jpg";
import tvsLogo from "/company-logos/TVS-Credit.webp";
import apekshaLogo from "/company-logos/Apeksha.jpg";

export const navSections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "leadership", label: "Leadership" },
  { id: "contact", label: "Contact" },
];

export const socialLinks = {
  github: "https://github.com/nashish109",
  linkedin: "https://www.linkedin.com/in/n-ashish-455b37244/",
  instagram: "https://www.instagram.com/nashish109",
  mailto: "mailto:nashish831@gmail.com",
  email: "nashish831@gmail.com",
  aboutEmail: "nashish109@gmail.com",
  resume: "/resume/For Interviews.pdf",
};

export const heroPhrases = [
  "Data-Driven Software Engineer",
  "Full-stack Developer",
  "Financial Technology Enthusiast",
  "Cloud Solutions Builder",
];

export const aboutHighlights: Array<{
  icon: LucideIcon;
  title: string;
  text: string;
}> = [
  {
    icon: Globe,
    title: "Full-Stack & Cloud",
    text: "Proficient in Python, React, AWS, and Azure.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Solutions",
    text: "Design scalable apps that convert complex data into actionable insights.",
  },
  {
    icon: LineChart,
    title: "Experience",
    text: "Built predictive analytics dashboards and architected enterprise-level systems.",
  },
  {
    icon: Rocket,
    title: "Continuous Learner",
    text: "Stay ahead with emerging technologies and trends.",
  },
  {
    icon: Users,
    title: "Community",
    text: "Active in hackathons, mentorship, and open-source contributions.",
  },
];

export const personalInfo = [
  { label: "From", value: "Damanjodi, Koraput, Odisha" },
  { label: "Languages", value: "English, Hindi, Telugu, Odia" },
  { label: "Age", value: "21" },
  { label: "Gender", value: "Male" },
];

export const education = [
  {
    logo: klLogo,
    title: "B.Tech in Computer Science & Engineering",
    subtitle: "Data Science and Big Data Analytics",
    institution: "KL University, Vijayawada",
    duration: "2022- Present",
    achievement: "GPA: 9.39/10",
    subjects: ["Data Structures & Algorithms", "Operating Systems", "DBMS"],
  },
  {
    logo: dpsLogo,
    title: "High School",
    subtitle: "MPC (Mathematics, Physics, Chemistry)",
    institution: "Delhi Public School Damanjodi",
    duration: "2020 - 2022",
    achievement: "Percentage: 83.6%",
    subjects: ["Mathematics", "Physics", "Chemistry", "Computer Science"],
  },
  {
    logo: dpsLogo,
    title: "Secondary School",
    subtitle: "Class 6-10",
    institution: "Delhi Public School Damanjodi",
    duration: "2008 - 2020",
    achievement: "Percentage: 93.6%",
    subjects: ["Mathematics", "Science", "Social Studies", "English"],
  },
];

export const technologyIcons = [
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", name: "React" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", name: "Python" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", name: "Java" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", name: "SQL" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", name: "AWS" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", name: "Docker" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", name: "Azure" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", name: "Kubernetes" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", name: "Git" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg", name: "Jira" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", name: "VS Code" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-plain.svg", name: "DevOps" },
];

export const experienceItems = [
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

export const projects = [
  {
    title: "Movie Box Office Predictor",
    subtitle: "Predictive Analytics Dashboard",
    tech: ["Power BI", "Python", "Pandas", "Scikit-learn"],
    problem: "Need for accurate box office revenue predictions and trend analysis across diverse movie datasets",
    solution: "Developed an ML-powered dashboard with 85% prediction accuracy and interactive visualizations for stakeholder insights",
    codeUrl: "https://github.com/nashish109/movie-predictor",
    demoUrl: "https://movie-predictor-demo.vercel.app",
    image: "/project-images/movie-predictor.svg",
  },
  {
    title: "Astrological Prediction Platform",
    subtitle: "Full-stack Web Application",
    tech: ["Django", "MySQL", "React", "Redis"],
    problem: "Creating personalized astrological predictions while handling high concurrent user traffic",
    solution: "Built scalable platform with caching, achieving 20% higher user engagement and 99.9% uptime",
    codeUrl: "https://github.com/nashish109/astro-predict",
    demoUrl: "https://astro-predict.com",
    image: "/project-images/astro-predict.svg",
  },
  {
    title: "Event Management System",
    subtitle: "Enterprise Application",
    tech: ["Spring Boot", "React", "PostgreSQL", "Docker"],
    problem: "Complex event scheduling and real-time attendance tracking for university events",
    solution: "Implemented microservices architecture handling 10k+ daily users with real-time analytics",
    codeUrl: "https://github.com/nashish109/event-sys",
    demoUrl: "https://event-sys-demo.com",
    image: "/project-images/event-system.svg",
  },
];

export const certifications = [
  {
    title: "Salesforce AI Associate",
    description: "Certified in Salesforce AI fundamentals and implementation",
    category: "AI & Machine Learning",
    image: "/badges/2023-07_Badge_SF-Certified_AI-Associate_High-Res.png",
    alt: "Salesforce AI Associate Certification",
    href: "https://www.salesforce.com/trailblazer/s9aa677s1nj5p2qdx3",
  },
  {
    title: "Red Hat Enterprise Application Developer",
    description: "Certified in enterprise Java development and Red Hat technologies",
    category: "Enterprise Development",
    image: "/badges/red-hat-certified-enterprise-application-developer.png",
    alt: "Red Hat Enterprise Application Developer Certification",
    href: "https://www.credly.com/badges/59b91eec-9bf7-4e56-bde0-f9084b3d6830/public_url",
  },
  {
    title: "MongoDB Certified DBA Associate",
    description: "Certified in Managing and administering MongoDB databases",
    category: "Database Administration",
    image: "/badges/MongoDBA Certificate.png",
    alt: "MongoDB Certified DBA Associate Certification",
    href: "https://www.credly.com/badges/c2699805-5bdf-467c-bf1c-9463b2dfdc7f/public_url",
  },
  {
    title: "Oracle Cloud Infrastructure Certified Architect Associate",
    description: "Certified in designing and implementing Oracle Cloud Infrastructure solutions",
    category: "Cloud Architecture",
    image: "/badges/Oracle Badge.jpg",
    alt: "Oracle Cloud Infrastructure Certified Architect Associate Certification",
    href: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=CC638976BD85DC1ACFE6669A3EEED0E8F6DB67500F5A78455281DC6F25E8EA86",
  },
  {
    title: "Automation Anywhere Certified Essentials RPA Professional",
    description: "Certified in implementing Automation Anywhere RPA Technology",
    category: "Automation using RPA",
    image: "/badges/Automation Badge.png",
    alt: "Automation Anywhere Certified Essentials RPA Professional Certification",
    href: "https://certificates.automationanywhere.com/8d9c85bb-33b2-47f1-b0da-203541090fb5#acc.x0Xnuds3",
  },
];

export const leadershipItems = [
  {
    icon: Code,
    title: "Participant - JPMC CFG Hackathon",
    date: "June 28-29, 2025",
    logo: jpmcLogo,
    logoClassName: "w-12 h-12",
    description: [
      "Built a multi-role React.js frontend with real-time dashboards, WhatsApp updates, and regional language support.",
      "Designed secure MongoDB schemas for attendance, progress, and job mapping.",
      "Proposed enhancements including certificate automation and scheme alerts for scalability.",
    ],
  },
  {
    icon: Award,
    title: "TVS Credit E.P.I.C. Challenge - Semi-Finalist",
    date: "2024",
    logo: tvsLogo,
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
    logo: apekshaLogo,
    description: [
      "Trained 20+ students in Python for data problem-solving.",
      "Developed coding resources for structured practice tasks.",
    ],
  },
];
