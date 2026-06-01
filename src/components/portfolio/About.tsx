type AboutProps = {
  className?: string;
};

export const About: React.FC<AboutProps> = ({ className = "" }) => {
  return (
    <section id="about" className={`portfolio-section section-muted ${className}`}>
      <div className="portfolio-container narrow">
        <div className="section-heading centered">
          <span>About</span>
          <h2>Engineer with a practical AI and data mindset.</h2>
        </div>
        <p className="about-copy">
          Computer Science graduate focused on Software Engineering, Full Stack Development, AI & Data Engineering, and
          Financial Technology. I enjoy building scalable products that connect clean engineering with useful intelligence.
          National-level Carnatic Singer and Badminton Player.
        </p>
      </div>
    </section>
  );
};
