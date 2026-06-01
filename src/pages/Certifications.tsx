const certifications = [
  {
    title: "Salesforce AI Associate",
    description: "Certified in Salesforce AI fundamentals and implementation",
    category: "AI & Machine Learning",
    image: "/badges/2023-07_Badge_SF-Certified_AI-Associate_High-Res.png",
    url: "https://www.salesforce.com/trailblazer/s9aa677s1nj5p2qdx3",
  },
  {
    title: "Red Hat Enterprise Application Developer",
    description: "Certified in enterprise Java development and Red Hat technologies",
    category: "Enterprise Development",
    image: "/badges/red-hat-certified-enterprise-application-developer.png",
    url: "https://www.credly.com/badges/59b91eec-9bf7-4e56-bde0-f9084b3d6830/public_url",
  },
  {
    title: "MongoDB Associate Database Administrator",
    description: "Certified in MongoDB database administration and management",
    category: "Database Administration",
    image: "/badges/MongoDBA Certificate.png",
    url: "https://www.credly.com/badges/c2699805-5bdf-467c-bf1c-9463b2dfdc7f/public_url",
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Architect Associate",
    description: "Certified in Oracle Cloud Infrastructure architecture and deployment",
    category: "Cloud Architecture",
    image: "/badges/Oracle Badge.jpg",
    url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=CC638976BD85DC1ACFE6669A3EEED0E8F6DB67500F5A78455281DC6F25E8EA86",
  },
  {
    title: "Automation Anywhere Certified Essentials RPA Professional",
    description: "Certified in Automation Anywhere RPA tools and techniques",
    category: "Robotic Process Automation",
    image: "/badges/RPA logo.jpg",
    url: "https://certificates.automationanywhere.com/8d9c85bb-33b2-47f1-b0da-203541090fb5#acc.x0Xnuds3",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="section-block">
      <div className="section-wrap">
        <div className="hermes-grid">
          <div className="hermes-cell col-span-full text-center">
            <h2 className="section-title mt-2"> My Certifications</h2>
          </div>
          
          <div className="hermes-cell col-span-full !p-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {certifications.map((cert) => (
                <a key={cert.title} href={cert.url} target="_blank" rel="noopener noreferrer" className="hermes-hover border-b border-current/20 p-5 lg:border-r">
                  <div className="grid h-32 w-32 place-items-center border border-current/20 bg-white p-3">
                    <img src={cert.image} alt={`${cert.title} badge`} className="max-h-full max-w-full object-contain" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold uppercase leading-tight tracking-[0.035em]">{cert.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed tracking-normal opacity-60" style={{ textTransform: "none" }}>{cert.description}</p>
                  <span className="premium-chip mt-4">{cert.category}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
