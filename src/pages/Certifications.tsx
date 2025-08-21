import { Badge } from "@/components/ui/badge";

const Certifications = () => {
  return (
    <div className="py-16">
      <section className="container mx-auto px-6">
        <div className="text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Professional <span className="text-cyan-400">Certifications</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Salesforce AI Associate */}
            <a href="https://www.salesforce.com/trailblazer/s9aa677s1nj5p2qdx3" target="_blank" rel="noopener noreferrer" className="block">
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 h-full">
                <div className="text-center space-y-4">
                  <img
                    src="/badges/2023-07_Badge_SF-Certified_AI-Associate_High-Res.png"
                    alt="Salesforce AI Associate Certification"
                    className="w-32 h-32 mx-auto object-contain"
                  />
                  <h3 className="text-xl font-bold text-white">Salesforce AI Associate</h3>
                  <p className="text-gray-400 text-sm">
                    Certified in Salesforce AI fundamentals and implementation
                  </p>
                  <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
                    AI & Machine Learning
                  </Badge>
                </div>
              </div>
            </a>

            {/* Red Hat Enterprise Application Developer */}
            <a href="https://www.credly.com/badges/59b91eec-9bf7-4e56-bde0-f9084b3d6830/public_url" target="_blank" rel="noopener noreferrer" className="block">
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 h-full">
                <div className="text-center space-y-4">
                  <img
                    src="/badges/red-hat-certified-enterprise-application-developer.png"
                    alt="Red Hat Enterprise Application Developer Certification"
                    className="w-32 h-32 mx-auto object-contain"
                  />
                  <h3 className="text-xl font-bold text-white">Red Hat Enterprise Application Developer</h3>
                  <p className="text-gray-400 text-sm">
                    Certified in enterprise Java development and Red Hat technologies
                  </p>
                  <Badge variant="secondary" className="bg-red-500/20 text-red-400 border-red-500/30">
                    Enterprise Development
                  </Badge>
                </div>
              </div>
            </a>

            {/* Additional Certifications Placeholder */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300">
              <div className="text-center space-y-4">
                <div className="w-32 h-32 mx-auto bg-gray-800 rounded-full flex items-center justify-center">
                  <span className="text-4xl text-gray-600">+</span>
                </div>
                <h3 className="text-xl font-bold text-white">More Coming Soon</h3>
                <p className="text-gray-400 text-sm">
                  Continuously expanding skills and certifications
                </p>
                <Badge variant="secondary" className="bg-gray-500/20 text-gray-400 border-gray-500/30">
                  In Progress
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certifications;
