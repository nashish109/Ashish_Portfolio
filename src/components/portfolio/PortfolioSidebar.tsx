import { navSections } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const PortfolioSidebar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const nodes = navSections
      .map((section) => document.getElementById(section.id))
      .filter(Boolean) as HTMLElement[];

    if (!nodes.length) {
      const pathSection = navSections.find((section) =>
        location.pathname.includes(section.id),
      );
      setActive(pathSection?.id ?? "home");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (current?.target?.id) {
          setActive(current.target.id);
        }
      },
      { threshold: [0.25, 0.45, 0.65], rootMargin: "-20% 0px -45% 0px" },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [location.pathname]);

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace("#", "");
    window.requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    });
  }, [location.hash, location.pathname]);

  const goTo = (id: string) => {
    setOpen(false);

    if (location.pathname !== "/portfolio") {
      navigate(`/portfolio#${id}`);
      return;
    }

    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    window.history.replaceState(null, "", `/portfolio#${id}`);
  };

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="fixed left-4 top-4 z-[70] flex h-11 w-11 items-center justify-center border border-white/12 bg-black/70 text-white backdrop-blur-xl transition hover:border-white/35 hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:left-6 sm:top-6"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      <div
        aria-hidden={!open}
        onClick={() => setOpen(false)}
        className={cn(
          "fixed inset-0 z-[55] bg-black/55 backdrop-blur-sm transition-opacity duration-300",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />

      <aside
        className={cn(
          "fixed left-0 top-0 z-[60] flex h-dvh w-[min(84vw,360px)] flex-col border-r border-white/10 bg-black px-7 pb-8 pt-24 shadow-2xl transition-transform duration-500 ease-out",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="mb-10">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-white/35">
            Portfolio
          </p>
          <p className="mt-3 font-display text-2xl font-semibold text-white">
            N. Ashish
          </p>
        </div>

        <nav className="space-y-1" aria-label="Portfolio sections">
          {navSections.map((section, index) => (
            <button
              type="button"
              key={section.id}
              onClick={() => goTo(section.id)}
              className={cn(
                "group flex w-full items-center justify-between border-b border-white/8 py-4 text-left text-lg transition",
                active === section.id ? "text-white" : "text-white/48 hover:text-white",
              )}
            >
              <span>{section.label}</span>
              <span
                className={cn(
                  "font-mono text-xs transition",
                  active === section.id ? "text-white" : "text-white/25 group-hover:text-white/60",
                )}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
};
