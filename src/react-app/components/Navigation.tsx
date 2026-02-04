import { useEffect, useState, useRef, memo } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (!ticking) {
        window.requestAnimationFrame(() => {
          lastScrollY.current = currentScrollY;
          setIsScrolled(currentScrollY > 20);

          // Update active section based on scroll position
          const sections = navItems.map(item => item.href.slice(1));
          const current = sections.find(section => {
            const element = document.getElementById(section);
            if (element) {
              const rect = element.getBoundingClientRect();
              return rect.top <= 150 && rect.bottom >= 150;
            }
            return false;
          });
          if (current) setActiveSection(current);
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      // Ultra-fast smooth scroll with optimized easing
      const startPosition = window.pageYOffset;
      const distance = offsetPosition - startPosition;
      const duration = 400; // Very fast scroll
      let startTime: number | null = null;

      function animation(currentTime: number) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        
        // Optimized easing function for snappier feel
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        
        window.scrollTo(0, startPosition + distance * easeOutQuart);
        
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      }

      requestAnimationFrame(animation);
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-neutral-900/95 backdrop-blur-xl shadow-lg border-b border-violet-500/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo with profile photo */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className="flex items-center gap-2 sm:gap-3 group flex-shrink-0"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-200"></div>
              <img
                src="https://019c1e1a-7b0c-7a8a-aa6b-f8a7db89017d.mochausercontent.com/Profile.jpeg"
                alt="Sanoop Sanu"
                width="40"
                height="40"
                loading="eager"
                decoding="async"
                className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-neutral-900"
              />
            </div>
            <span className="text-base sm:text-xl font-medium text-white group-hover:text-violet-400 transition-colors duration-200">
              Sanoop Sanu
            </span>
          </a>

          {/* Desktop Navigation items */}
          <div className="hidden lg:flex relative gap-1 bg-neutral-800/30 backdrop-blur-sm rounded-full p-1.5 border border-violet-500/10">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              const isHovered = hoveredItem === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  onMouseEnter={() => setHoveredItem(item.href)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`relative px-5 py-2.5 text-sm font-medium transition-all duration-200 rounded-full ${
                    isActive 
                      ? 'text-white' 
                      : 'text-neutral-400'
                  }`}
                >
                  {/* Active state background */}
                  {isActive && (
                    <span className={`absolute inset-0 rounded-full shadow-lg transition-all duration-200 ${
                      isHovered 
                        ? 'bg-gradient-to-r from-violet-500 to-purple-500 shadow-violet-500/60 scale-105'
                        : 'bg-gradient-to-r from-violet-600 to-purple-600 shadow-violet-500/50'
                    }`} style={{ zIndex: -1 }} />
                  )}
                  {/* Hover state background for non-active items */}
                  {!isActive && isHovered && (
                    <span className="absolute inset-0 bg-violet-600/20 rounded-full scale-105 transition-all duration-200" style={{ zIndex: -1 }} />
                  )}
                  <span className={`relative transition-colors duration-200 ${
                    isHovered && !isActive ? 'text-violet-300' : ''
                  }`}>
                    {item.label}
                  </span>
                </a>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-violet-400 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute left-0 right-0 top-full mt-2 mx-4 bg-neutral-900/95 backdrop-blur-xl border border-violet-500/20 rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-col p-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg'
                        : 'text-neutral-400 hover:bg-violet-600/20 hover:text-violet-300'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default memo(Navigation);
