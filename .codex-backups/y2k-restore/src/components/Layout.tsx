import { Footer } from "@/components/portfolio/Footer";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, User, Briefcase, FolderOpen, Award, Users, Mail, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isNavOpen, setIsNavOpen] = useState(false);

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

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsNavOpen(false);
  };

  return (
    <div className="min-h-screen bg-black">
      <button
        type="button"
        onClick={() => setIsNavOpen((open) => !open)}
        aria-label={isNavOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isNavOpen}
        className="fixed left-4 top-4 z-[60] inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-black/70 text-gray-200 shadow-lg backdrop-blur-sm transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
      >
        {isNavOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isNavOpen && (
        <button
          type="button"
          aria-label="Close navigation overlay"
          onClick={() => setIsNavOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-50 h-screen w-72 border-r border-white/10 bg-black/90 px-5 pb-6 pt-20 shadow-2xl backdrop-blur-xl transition-transform duration-300 ${
          isNavOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="flex h-full flex-col gap-2" aria-label="Portfolio navigation">
          {sections.map((section) => {
            const Icon = section.icon;
            const isActive = location.pathname === section.path;

            return (
              <Button
                key={section.id}
                variant="ghost"
                onClick={() => handleNavigation(section.path)}
                className={`w-full justify-start gap-3 rounded-lg px-4 py-6 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-cyan-400/10 text-cyan-400"
                    : "text-gray-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                <Icon className="h-5 w-5" />
                {section.label}
              </Button>
            );
          })}
        </nav>
      </aside>

      {/* Main content keeps its existing spacing so page layouts stay stable. */}
      <div className="pt-2 relative z-10">
        <main className="flex-1">
          <div className="pt-2 relative z-10">
            <Outlet key={location.pathname} />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
