import { portfolioData } from '@/data/portfolio';
import { ArrowRight, Github, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = portfolioData.title;
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    // Simplified mousemove for better scroll performance
    let ticking = false;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (backgroundRef.current) {
            const x = (e.clientX / window.innerWidth - 0.5) * 10;
            const y = (e.clientY / window.innerHeight - 0.5) * 10;
            
            const particles = backgroundRef.current.children;
            if (particles[0]) {
              (particles[0] as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
            }
            if (particles[1]) {
              (particles[1] as HTMLElement).style.transform = `translate(${-x}px, ${-y}px)`;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20 sm:pt-24 pb-12 relative overflow-hidden">
      {/* Animated background particles - optimized */}
      <div ref={backgroundRef} className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-violet-600/10 rounded-full blur-3xl"
          style={{ 
            top: '20%', 
            left: '10%',
            animation: 'float 8s ease-in-out infinite',
            backfaceVisibility: 'hidden'
          }}
        />
        <div 
          className="absolute w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-purple-600/10 rounded-full blur-3xl"
          style={{ 
            bottom: '20%', 
            right: '10%',
            animation: 'float 10s ease-in-out infinite',
            animationDelay: '2s',
            backfaceVisibility: 'hidden'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Mobile Layout - Centered */}
        <div className="lg:hidden flex flex-col items-center text-center">
          {/* Welcome badge */}
          <div className="mb-8 animate-slideDown">
            <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-violet-600/20 border border-violet-500/30 rounded-full text-violet-300 text-xs sm:text-sm font-medium backdrop-blur-sm">
              Welcome to my portfolio
            </span>
          </div>

          {/* Profile Photo */}
          <div className="mb-8 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <div className="relative group">
              {/* Outer glow ring - animated */}
              <div className="absolute -inset-2 sm:-inset-3 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 rounded-full opacity-75 blur-xl sm:blur-2xl group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              
              {/* Rotating gradient border */}
              <div className="absolute -inset-1 sm:-inset-1.5 bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 rounded-full opacity-75 group-hover:opacity-100 transition-opacity duration-300" 
                   style={{ animation: 'spin 8s linear infinite' }}></div>
              
              {/* Inner frame */}
              <div className="relative bg-neutral-900 rounded-full p-1.5 sm:p-2">
                <div className="relative overflow-hidden rounded-full">
                  {/* Shimmer effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  <img
                    src="https://019c1e1a-7b0c-7a8a-aa6b-f8a7db89017d.mochausercontent.com/Profile.jpeg"
                    alt="Sanoop Sanu"
                    className="w-48 h-48 sm:w-56 sm:h-56 object-cover rounded-full relative z-10 shadow-2xl group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              
              {/* Floating accent elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full opacity-20 blur-xl animate-float" style={{ animationDelay: '0s' }}></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full opacity-20 blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>

          {/* Name and Title */}
          <div className="w-full">
            <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4 leading-tight animate-slideUp">
              <span className="block mb-1 sm:mb-2 text-xl sm:text-3xl font-light text-neutral-400">
                Hello, I'm
              </span>
              <span className="block bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                {portfolioData.name}
              </span>
            </h1>
            
            <div className="min-h-16 sm:min-h-20 mb-6 animate-fadeIn" style={{ animationDelay: '0.5s' }}>
              <p className="text-base sm:text-lg text-violet-300 font-medium leading-relaxed">
                {displayedText}
                <span className="inline-block w-0.5 h-4 sm:h-5 bg-violet-400 ml-1 animate-blink" />
              </p>
            </div>

            {/* Description */}
            <div className="mb-6 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light tracking-wide bg-gradient-to-r from-neutral-300 via-neutral-200 to-neutral-300 bg-clip-text text-transparent">
                {portfolioData.description}
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 justify-center mb-8 animate-fadeIn" style={{ animationDelay: '0.7s' }}>
              <a
                href={portfolioData.contact.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-2.5 bg-neutral-800/50 backdrop-blur-sm rounded-full border border-neutral-700 transition-all duration-300 group overflow-hidden hover:scale-110 hover:-translate-y-1"
                aria-label="GitHub"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/0 via-neutral-100/30 to-neutral-900/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                <div className="absolute inset-0 shadow-[0_0_15px_rgba(255,255,255,0)] group-hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-shadow duration-300 rounded-full"></div>
                <Github size={18} className="relative z-10 text-neutral-400 group-hover:text-white transition-all duration-300 group-hover:rotate-12" />
              </a>
              <a
                href={portfolioData.contact.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-2.5 bg-neutral-800/50 backdrop-blur-sm rounded-full border border-neutral-700 transition-all duration-300 group overflow-hidden hover:scale-110 hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/30 to-blue-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                <div className="absolute inset-0 shadow-[0_0_15px_rgba(59,130,246,0)] group-hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] transition-shadow duration-300 rounded-full"></div>
                <Linkedin size={18} className="relative z-10 text-neutral-400 group-hover:text-blue-400 transition-all duration-300 group-hover:rotate-12" />
              </a>
              <a
                href={portfolioData.contact.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-2.5 bg-neutral-800/50 backdrop-blur-sm rounded-full border border-neutral-700 transition-all duration-300 group overflow-hidden hover:scale-110 hover:-translate-y-1"
                aria-label="Instagram"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600/0 via-pink-600/30 to-pink-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                <div className="absolute inset-0 shadow-[0_0_15px_rgba(236,72,153,0)] group-hover:shadow-[0_0_15px_rgba(236,72,153,0.6)] transition-shadow duration-300 rounded-full"></div>
                <Instagram size={18} className="relative z-10 text-neutral-400 group-hover:text-pink-400 transition-all duration-300 group-hover:rotate-12" />
              </a>
              <a
                href={portfolioData.contact.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-2.5 bg-neutral-800/50 backdrop-blur-sm rounded-full border border-neutral-700 transition-all duration-300 group overflow-hidden hover:scale-110 hover:-translate-y-1"
                aria-label="WhatsApp"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/0 via-green-600/30 to-green-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                <div className="absolute inset-0 shadow-[0_0_15px_rgba(34,197,94,0)] group-hover:shadow-[0_0_15px_rgba(34,197,94,0.6)] transition-shadow duration-300 rounded-full"></div>
                <MessageCircle size={18} className="relative z-10 text-neutral-400 group-hover:text-green-400 transition-all duration-300 group-hover:rotate-12" />
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fadeIn" style={{ animationDelay: '0.8s' }}>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-sm sm:text-base rounded-full hover:from-violet-500 hover:to-purple-500 transition-all duration-200 shadow-lg shadow-violet-500/30 hover:shadow-violet-500/60 hover:scale-105 active:scale-95"
              >
                Get in touch
                <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px] group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={portfolioData.contact.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-neutral-800/50 backdrop-blur-sm text-white text-sm sm:text-base rounded-full hover:bg-neutral-700/50 transition-all duration-200 shadow-md hover:shadow-lg border border-neutral-700 hover:border-violet-500/50 hover:scale-105 active:scale-95"
              >
                View Resume
              </a>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Side by Side */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Photo Section */}
          <div className="flex justify-center lg:justify-end animate-fadeIn" style={{ animationDelay: '0.3s' }}>
            <div className="relative group">
              {/* Outer glow ring - animated */}
              <div className="absolute -inset-4 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 rounded-full opacity-75 blur-2xl group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              
              {/* Rotating gradient border */}
              <div className="absolute -inset-2 bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 rounded-full opacity-75 group-hover:opacity-100 transition-opacity duration-300" 
                   style={{ animation: 'spin 8s linear infinite' }}></div>
              
              {/* Inner frame */}
              <div className="relative bg-neutral-900 rounded-full p-2">
                <div className="relative overflow-hidden rounded-full">
                  {/* Shimmer effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  <img
                    src="https://019c1e1a-7b0c-7a8a-aa6b-f8a7db89017d.mochausercontent.com/Profile.jpeg"
                    alt="Sanoop Sanu"
                    className="w-80 h-80 xl:w-96 xl:h-96 object-cover rounded-full relative z-10 shadow-2xl group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              
              {/* Floating accent elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full opacity-20 blur-xl animate-float" style={{ animationDelay: '0s' }}></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full opacity-20 blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>

          {/* Text Content Section */}
          <div className="text-center lg:text-left">
            <div className="mb-8 animate-slideDown">
              <span className="inline-block px-4 py-2 bg-violet-600/20 border border-violet-500/30 rounded-full text-violet-300 text-sm font-medium backdrop-blur-sm">
                Welcome to my portfolio
              </span>
            </div>
            
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-tight animate-slideUp">
              <span className="block mb-2 text-4xl lg:text-5xl font-light text-neutral-400">
                Hello, I'm
              </span>
              <span className="block bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                {portfolioData.name}
              </span>
            </h1>
            
            <div className="min-h-20 mb-8 animate-fadeIn" style={{ animationDelay: '0.5s' }}>
              <p className="text-xl lg:text-2xl text-violet-300 font-medium leading-relaxed">
                {displayedText}
                <span className="inline-block w-0.5 h-6 bg-violet-400 ml-1 animate-blink" />
              </p>
            </div>

            {/* Description */}
            <div className="mb-8 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
              <p className="text-base lg:text-lg text-neutral-300 leading-relaxed font-light tracking-wide bg-gradient-to-r from-neutral-300 via-neutral-200 to-neutral-300 bg-clip-text text-transparent">
                {portfolioData.description}
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start mb-12 animate-fadeIn" style={{ animationDelay: '0.7s' }}>
              <a
                href={portfolioData.contact.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-3 bg-neutral-800/50 backdrop-blur-sm rounded-full border border-neutral-700 transition-all duration-300 group overflow-hidden hover:scale-110 hover:-translate-y-1"
                aria-label="GitHub"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/0 via-neutral-100/30 to-neutral-900/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                <div className="absolute inset-0 shadow-[0_0_20px_rgba(255,255,255,0)] group-hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] transition-shadow duration-300 rounded-full"></div>
                <Github size={20} className="relative z-10 text-neutral-400 group-hover:text-white transition-all duration-300 group-hover:rotate-12" />
              </a>
              <a
                href={portfolioData.contact.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-3 bg-neutral-800/50 backdrop-blur-sm rounded-full border border-neutral-700 transition-all duration-300 group overflow-hidden hover:scale-110 hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/30 to-blue-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                <div className="absolute inset-0 shadow-[0_0_20px_rgba(59,130,246,0)] group-hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] transition-shadow duration-300 rounded-full"></div>
                <Linkedin size={20} className="relative z-10 text-neutral-400 group-hover:text-blue-400 transition-all duration-300 group-hover:rotate-12" />
              </a>
              <a
                href={portfolioData.contact.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-3 bg-neutral-800/50 backdrop-blur-sm rounded-full border border-neutral-700 transition-all duration-300 group overflow-hidden hover:scale-110 hover:-translate-y-1"
                aria-label="Instagram"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600/0 via-pink-600/30 to-pink-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                <div className="absolute inset-0 shadow-[0_0_20px_rgba(236,72,153,0)] group-hover:shadow-[0_0_20px_rgba(236,72,153,0.6)] transition-shadow duration-300 rounded-full"></div>
                <Instagram size={20} className="relative z-10 text-neutral-400 group-hover:text-pink-400 transition-all duration-300 group-hover:rotate-12" />
              </a>
              <a
                href={portfolioData.contact.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-3 bg-neutral-800/50 backdrop-blur-sm rounded-full border border-neutral-700 transition-all duration-300 group overflow-hidden hover:scale-110 hover:-translate-y-1"
                aria-label="WhatsApp"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/0 via-green-600/30 to-green-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                <div className="absolute inset-0 shadow-[0_0_20px_rgba(34,197,94,0)] group-hover:shadow-[0_0_20px_rgba(34,197,94,0.6)] transition-shadow duration-300 rounded-full"></div>
                <MessageCircle size={20} className="relative z-10 text-neutral-400 group-hover:text-green-400 transition-all duration-300 group-hover:rotate-12" />
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fadeIn" style={{ animationDelay: '0.8s' }}>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-full hover:from-violet-500 hover:to-purple-500 transition-all duration-200 shadow-lg shadow-violet-500/30 hover:shadow-violet-500/60 hover:scale-105 active:scale-95"
              >
                Get in touch
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={portfolioData.contact.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-neutral-800/50 backdrop-blur-sm text-white rounded-full hover:bg-neutral-700/50 transition-all duration-200 shadow-md hover:shadow-lg border border-neutral-700 hover:border-violet-500/50 hover:scale-105 active:scale-95"
              >
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
