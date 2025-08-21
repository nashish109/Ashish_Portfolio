import { Footer } from "@/components/portfolio/Footer";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, User, Briefcase, FolderOpen, Award, Users, Mail } from "lucide-react";
import { useEffect } from "react";

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const sections = [
    { id: "home", label: "Home", path: "/portfolio", icon: Home },
    { id: "about", label: "About", path: "/portfolio/about", icon: User },
    { id: "experience", label: "Experience", path: "/portfolio/experience", icon: Briefcase },
    { id: "projects", label: "Projects", path: "/portfolio/projects", icon: FolderOpen },
    { id: "certifications", label: "Certifications", path: "/portfolio/certifications", icon: Award },
    { id: "leadership", label: "Leadership", path: "/portfolio/leadership", icon: Users },
    { id: "contact", label: "Contact", path: "/portfolio/contact", icon: Mail },
  ];

  // Add slide transition effect
  useEffect(() => {
    const mainContent = document.querySelector('main');
    if (mainContent) {
      mainContent.classList.add('slide-in');
      setTimeout(() => {
        mainContent.classList.remove('slide-in');
      }, 500);
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-black">
      {/* Fixed Navbar with Transparent Background */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm py-4">
        <div className="flex justify-end">
          <div className="flex flex-wrap gap-2">
            {sections.map((section) => {
              const Icon = section.icon;
              const isActive = location.pathname === section.path;
              
              return (
                <Button
                  key={section.id}
                  variant="ghost"
                  size="sm"
                  onClick={() => navigate(section.path)}
                  className={`text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-cyan-400 bg-cyan-400/10'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {section.label}
                </Button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main content with top padding for fixed navbar */}
      <div className="pt-20 relative z-10">
        <main className="flex-1">
          <div className="fade-in">
            <Outlet key={location.pathname} />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
