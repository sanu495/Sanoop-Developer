import { useEffect, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function ScrollButton() {
  const [isVisible, setIsVisible] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrolled = window.scrollY;
          setShowScrollTop(scrolled > 300);
          setIsVisible(scrolled < window.innerHeight * 2);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={showScrollTop ? scrollToTop : scrollToAbout}
      className="fixed right-8 bottom-8 z-40 flex flex-col items-center gap-2 text-neutral-400 hover:text-violet-400 transition-all duration-300 cursor-pointer group"
      aria-label={showScrollTop ? 'Scroll to top' : 'Scroll down'}
    >
      {showScrollTop ? (
        <>
          <div className="w-12 h-12 bg-violet-600/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-violet-500/30 group-hover:bg-violet-600 group-hover:border-violet-500 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 shadow-lg shadow-violet-500/20 group-hover:shadow-violet-500/40">
            <ChevronUp size={24} className="text-violet-400 group-hover:text-white transition-colors animate-bounce-slow" />
          </div>
          <span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Top
          </span>
        </>
      ) : (
        <>
          <span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Scroll
          </span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex items-start justify-center p-2 group-hover:border-violet-400 transition-colors">
            <div className="w-1 h-3 bg-current rounded-full animate-scroll" />
          </div>
          <ChevronDown size={20} className="animate-bounce" />
        </>
      )}
    </button>
  );
}
