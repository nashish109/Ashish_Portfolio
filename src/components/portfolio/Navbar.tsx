import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Award, Briefcase, FolderOpen, Home, Mail, Menu, Microscope, Moon, Sun, User, X } from "lucide-react";
import { cn } from "@/lib/utils";

const sections = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "research", label: "Research", icon: Microscope },
  { id: "certifications", label: "Certifications", icon: Award },
  { id: "projects", label: "Projects", icon: FolderOpen },
  { id: "contact", label: "Contact", icon: Mail },
];

export const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const getHeaderOffset = () => (window.matchMedia("(max-width: 700px)").matches ? 64 : 72);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("portfolio-theme");
    const initialTheme = storedTheme === "dark" ? "dark" : "light";
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark-theme", initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.classList.toggle("dark-theme", nextTheme === "dark");
    window.localStorage.setItem("portfolio-theme", nextTheme);
  };

  useEffect(() => {
    const onScroll = () => {
      const visible = sections
        .map((section) => {
          const element = document.getElementById(section.id);
          if (!element) return null;
          return { id: section.id, top: Math.abs(element.getBoundingClientRect().top - getHeaderOffset()) };
        })
        .filter(Boolean) as Array<{ id: string; top: number }>;

      visible.sort((a, b) => a.top - b.top);
      if (visible[0]) setActive(visible[0].id);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const goToSection = (id: string) => {
    setOpen(false);

    const scroll = () => {
      const element = document.getElementById(id);
      if (!element) return;
      window.scrollTo({ top: element.offsetTop - getHeaderOffset(), behavior: "smooth" });
    };
    if (location.pathname !== "/portfolio") {
      navigate("/portfolio");
      window.setTimeout(scroll, 80);
      return;
    }

    scroll();
  };

  return (
    <>
      <div className="floating-controls" aria-label="Portfolio controls">
        <button type="button" onClick={() => setOpen(true)} className="sidebar-toggle" aria-label="Open navigation" aria-expanded={open}>
          <Menu className="h-5 w-5" />
        </button>

        <button type="button" onClick={toggleTheme} className="theme-toggle" aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>
          {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "fixed inset-0 z-[60] bg-slate-950/30 backdrop-blur-[2px] transition-opacity duration-300",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <aside
        className={cn(
          "nav-drawer fixed bottom-0 left-0 top-0 z-[70] flex w-[min(88vw,360px)] flex-col border-r transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "-translate-x-full",
        )}
        aria-label="Portfolio navigation"
      >
        <div className="nav-header flex items-center justify-between border-b p-5">
          <button onClick={() => goToSection("home")} className="text-left" type="button">
            <span className="nav-name block text-2xl font-extrabold tracking-normal">N. Ashish</span>
            <span className="nav-subtitle mt-1 block text-xs font-bold uppercase tracking-[0.12em]">Portfolio</span>
          </button>
          <button type="button" onClick={() => setOpen(false)} className="nav-close grid h-10 w-10 place-items-center rounded-full border" aria-label="Close navigation">
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto p-3">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <button
                key={section.id}
                type="button"
                onClick={() => goToSection(section.id)}
                className={cn(
                  "nav-link flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-sm font-bold transition-colors",
                  active === section.id && "active",
                )}
              >
                <Icon className="h-4 w-4 shrink-0" />
                {section.label}
              </button>
            );
          })}
        </nav>
      </aside>
    </>
  );
};
