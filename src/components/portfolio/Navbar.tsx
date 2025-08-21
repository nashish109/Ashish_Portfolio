import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLocation } from "react-router-dom";
import { useSmoothNavigate } from "@/hooks/useSmoothNavigate";
import { Sparkles, Home, User, Briefcase, FolderOpen, Award, Users, Code, Mail, Menu, X } from "lucide-react";

const sections = [
  { id: "home", label: "Home", path: "/portfolio", icon: Home },
  { id: "about", label: "About", path: "/portfolio/about", icon: User },
  { id: "experience", label: "Experience", path: "/portfolio/experience", icon: Briefcase },
  { id: "projects", label: "Projects", path: "/portfolio/projects", icon: FolderOpen },
  { id: "certs", label: "Certifications", path: "/portfolio/certifications", icon: Award },
  { id: "leadership", label: "Leadership", path: "/portfolio/leadership", icon: Users },
  { id: "playground", label: "Playground", path: "/portfolio/playground", icon: Code },
  { id: "contact", label: "Contact", path: "/portfolio/contact", icon: Mail },
];

export const Navbar = () => {
  const location = useLocation();
  const [active, setActive] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const smoothNavigate = useSmoothNavigate();

  useEffect(() => {
    const currentSection = sections.find(section => section.path === location.pathname);
    if (currentSection) {
      setActive(currentSection.id);
    }
  }, [location.pathname]);

  const handleNavigation = (path: string, elementId?: string) => {
    smoothNavigate(path, elementId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-6">
          <nav className="flex items-center justify-between h-14">
            {/* Logo */}
            <button
              onClick={() => handleNavigation("/portfolio")}
              className="group flex items-center gap-2"
            >
              <div className="relative">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-lg flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                  N
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-lg blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              </div>
              <span className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                Ashish
              </span>
            </button>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1">
              {sections.map((s) => {
                const Icon = s.icon;
                const isActive = active === s.id;
                
                return (
                  <button
                    key={s.id}
                    onClick={() => handleNavigation(s.path, s.id === 'about' ? 'about' : undefined)}
                    className={cn(
                      "group relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2",
                      isActive
                        ? "text-white bg-gradient-to-r from-cyan-500/20 to-pink-500/20 border border-cyan-400/30"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    {s.label}
                    {isActive && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button
                onClick={() => handleNavigation("/portfolio/contact")}
                className="bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-400 hover:to-pink-400 text-white border-0 shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
              >
                <Sparkles className="mr-2 h-4 w-4" />
                Hire Me
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors duration-300"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-16 z-40 md:hidden">
          <div className="bg-black/95 backdrop-blur-xl border-t border-white/10">
            <div className="container mx-auto px-6 py-6">
              <div className="space-y-2">
                {sections.map((s) => {
                  const Icon = s.icon;
                  const isActive = active === s.id;
                  
                  return (
                    <button
                      key={s.id}
                      onClick={() => handleNavigation(s.path, s.id === 'about' ? 'about' : undefined)}
                      className={cn(
                        "w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-3",
                        isActive
                          ? "text-white bg-gradient-to-r from-cyan-500/20 to-pink-500/20 border border-cyan-400/30"
                          : "text-gray-300 hover:text-white hover:bg-white/5"
                      )}
                    >
                      <Icon className="h-5 w-5" />
                      {s.label}
                    </button>
                  );
                })}
                
                {/* Mobile CTA */}
                <div className="pt-4">
                  <Button
                    onClick={() => handleNavigation("/portfolio/contact")}
                    className="w-full bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-400 hover:to-pink-400 text-white border-0 shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                  >
                    <Sparkles className="mr-2 h-4 w-4" />
                    Hire Me
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
