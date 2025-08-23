import { ProjectCard } from "@/components/portfolio/ProjectCard";

const Projects = () => {
  return (
    <div className="py-8">
      <section className="container mx-auto px-6">
        <div className="text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Projects <span className="text-cyan-400">Showcase</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <ProjectCard
              title="Movie Box Office Predictor"
              subtitle="Predictive Analytics Dashboard"
              tech={["Power BI", "Python", "Pandas", "Scikit-learn"]}
              problem="Need for accurate box office revenue predictions and trend analysis across diverse movie datasets"
              solution="Developed an ML-powered dashboard with 85% prediction accuracy and interactive visualizations for stakeholder insights"
              codeUrl="https://github.com/nashish109/movie-predictor"
              demoUrl="https://movie-predictor-demo.vercel.app"
              image="/project-images/movie-predictor.svg"
            />
            <ProjectCard
              title="Astrological Prediction Platform"
              subtitle="Full-stack Web Application"
              tech={["Django", "MySQL", "React", "Redis"]}
              problem="Creating personalized astrological predictions while handling high concurrent user traffic"
              solution="Built scalable platform with caching, achieving 20% higher user engagement and 99.9% uptime"
              codeUrl="https://github.com/nashish109/astro-predict"
              demoUrl="https://astro-predict.com"
              image="/project-images/astro-predict.svg"
            />
            <ProjectCard
              title="Event Management System"
              subtitle="Enterprise Application"
              tech={["Spring Boot", "React", "PostgreSQL", "Docker"]}
              problem="Complex event scheduling and real-time attendance tracking for university events"
              solution="Implemented microservices architecture handling 10k+ daily users with real-time analytics"
              codeUrl="https://github.com/nashish109/event-sys"
              demoUrl="https://event-sys-demo.com"
              image="/project-images/event-system.svg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
