import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const useSmoothNavigate = () => {
  const navigate = useNavigate();

  const smoothNavigate = (path: string, elementId?: string) => {
    navigate(path);
    if (elementId) {
      localStorage.setItem('scrollToElement', elementId);
    }
  };

  useEffect(() => {
    const elementId = localStorage.getItem('scrollToElement');
    if (elementId) {
      const element = document.getElementById(elementId);
      if (element) {
        const navbar = document.querySelector('header');
        const navbarHeight = navbar ? navbar.offsetHeight : 0;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
      localStorage.removeItem('scrollToElement');
    }
  }, []);

  return smoothNavigate;
};