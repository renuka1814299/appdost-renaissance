import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 z-40 w-14 h-14 rounded-full bg-gradient-primary text-white glow-primary flex items-center justify-center hover:scale-110 transition-all group shadow-lg animate-fade-in"
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6 group-hover:animate-pulse-glow" />
        </button>
      )}
    </>
  );
};

export default BackToTop;
