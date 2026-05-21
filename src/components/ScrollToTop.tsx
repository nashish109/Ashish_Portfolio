import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const scrollPositions = new Map<string, number>();
const getPathKey = (pathname: string) => `portfolio-scroll:${pathname}`;

const getSavedScroll = (locationKey: string, pathname: string) => {
  const historyScrollY = window.history.state?.portfolioScrollY;
  if (typeof historyScrollY === "number") return historyScrollY;

  const keyedPosition = scrollPositions.get(locationKey);
  if (typeof keyedPosition === "number") return keyedPosition;

  const storedPosition = sessionStorage.getItem(getPathKey(pathname));
  return storedPosition ? Number(storedPosition) : 0;
};

const saveScroll = (locationKey: string, pathname: string) => {
  const scrollY = window.scrollY;
  scrollPositions.set(locationKey, scrollY);
  sessionStorage.setItem(getPathKey(pathname), String(scrollY));
};

const restoreScroll = (scrollY: number) => {
  let attempts = 0;
  const maxAttempts = 40;

  const tick = () => {
    const maxScrollY = document.documentElement.scrollHeight - window.innerHeight;

    if (maxScrollY >= scrollY || attempts === maxAttempts - 1) {
      window.scrollTo(0, Math.min(scrollY, Math.max(maxScrollY, 0)));
    }

    attempts += 1;

    if (attempts < maxAttempts && Math.abs(window.scrollY - scrollY) > 2) {
      window.setTimeout(tick, 50);
    }
  };

  requestAnimationFrame(tick);
};

const ScrollToTop = () => {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    const storageKey = location.key;
    const pathname = location.pathname;

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    if (navigationType === "POP") {
      window.setTimeout(() => {
        restoreScroll(getSavedScroll(storageKey, pathname));
      }, 0);
    } else {
      window.scrollTo(0, 0);
    }

    return () => {
      saveScroll(storageKey, pathname);
    };
  }, [location.key, location.pathname, navigationType]);

  useEffect(() => {
    const handleScroll = () => {
      saveScroll(location.key, location.pathname);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.key, location.pathname]);

  return null;
};

export default ScrollToTop;
