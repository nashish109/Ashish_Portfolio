import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Show content after a brief delay
    const timer = setTimeout(() => setShowContent(true), 500);

    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          // Redirect to main portfolio after completion
          setTimeout(() => navigate("/portfolio"), 1000);
          return 100;
        }
        return prev + 10;
      });
    }, 150);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center animate-gradient-xy">
      <div className="text-center">
        <div className={`transition-all duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className="text-5xl font-bold text-white mb-4" style={{ textShadow: '0 0 15px rgba(0, 255, 255, 0.5)' }}>
            <div className="glitch" data-text="Welcome to my Portfolio">Welcome to my Portfolio</div>
          </h1>
          <p className="text-lg text-gray-400 mb-8" style={{ textShadow: '0 0 10px rgba(0, 255, 255, 0.3)' }}>
            Loading the best of my work for you
          </p>
        </div>
        <div className="w-64 h-1 bg-gray-800 rounded-full mx-auto overflow-hidden">
          <div
            className="h-full bg-cyan-400 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%`, boxShadow: '0 0 10px rgba(0, 255, 255, 0.5)' }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
