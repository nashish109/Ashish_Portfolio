import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLocation } from "react-router-dom";
import { useSmoothNavigate } from "@/hooks/useSmoothNavigate";
import { Award, Briefcase, Code, FolderOpen, Home, Mail, Menu, Sparkles, User, Users, X } from "lucide-react";

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
    const currentSection = sections.find((section) => section.path === location.pathname);
    if (currentSection) setActive(currentSection.id);
  }, [location.pathname]);

  const handleNavigation = (path: string, elementId?: string) => {
    smoothNavigate(path, elementId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="retro-toolbar fixed left-2 right-2 top-2 z-50 rounded-lg md:left-4 md:right-4">
        <div className="container mx-auto px-3">
          <nav className="flex min-h-14 items-center justify-between gap-3 py-2">
            <button onClick={() => handleNavigation("/portfolio")} className="chrome-chip flex items-center gap-2 rounded px-3 py-2 font-mono text-xs uppercase tracking-[0.16em]">
              <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
              Ashish.OS
            </button>

            <div className="hidden items-center gap-1 overflow-x-auto md:flex">
              {sections.map((s) => {
                const Icon = s.icon;
                const isActive = active === s.id;

                return (
                  <button
                    key={s.id}
                    onClick={() => handleNavigation(s.path, s.id === "about" ? "about" : undefined)}
                    className={cn(
                      "glitch-hover inline-flex shrink-0 items-center gap-2 rounded border px-3 py-2 font-mono text-[0.68rem] uppercase tracking-[0.12em] transition-all",
                      isActive
                        ? "border-cyan-200/60 bg-cyan-200/15 text-white shadow-[0_0_18px_rgba(34,211,238,0.2)]"
                        : "border-white/10 bg-black/25 text-slate-300 hover:border-cyan-200/45 hover:bg-cyan-300/10 hover:text-cyan-50"
                    )}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {s.label}
                  </button>
                );
              })}
            </div>

            <Button onClick={() => handleNavigation("/portfolio/contact")} className="retro-button hidden md:inline-flex">
              <Sparkles className="mr-2 h-4 w-4" />
              Hire Me
            </Button>

            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="retro-button inline-flex h-10 w-10 items-center justify-center rounded md:hidden">
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </nav>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-x-2 top-20 z-40 rounded-lg border border-cyan-300/25 bg-black/95 p-4 shadow-[0_0_34px_rgba(34,211,238,0.18)] backdrop-blur-xl md:hidden">
          <div className="space-y-2">
            {sections.map((s) => {
              const Icon = s.icon;
              const isActive = active === s.id;

              return (
                <button
                  key={s.id}
                  onClick={() => handleNavigation(s.path, s.id === "about" ? "about" : undefined)}
                  className={cn(
                    "flex w-full items-center gap-3 rounded border px-4 py-3 text-left font-mono text-xs uppercase tracking-[0.14em] transition-all",
                    isActive ? "border-cyan-200/60 bg-cyan-200/15 text-white" : "border-white/10 bg-black/30 text-slate-300"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {s.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};
