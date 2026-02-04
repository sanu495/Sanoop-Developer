import { Github, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-violet-500/20 bg-neutral-900/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent mb-3">
              {portfolioData.name}
            </h3>
            <p className="text-violet-300 font-medium text-sm">
              Code. Create. Connect.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <a 
                href="#home" 
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-neutral-400 hover:text-violet-400 transition-colors text-sm"
              >
                Home
              </a>
              <a 
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-neutral-400 hover:text-violet-400 transition-colors text-sm"
              >
                About
              </a>
              <a 
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-neutral-400 hover:text-violet-400 transition-colors text-sm"
              >
                Projects
              </a>
              <a 
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-neutral-400 hover:text-violet-400 transition-colors text-sm"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Connect Section */}
          <div className="text-center md:text-right">
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex justify-center md:justify-end gap-4">
              <a
                href={portfolioData.contact.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-800 border border-violet-500/30 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-violet-600 hover:border-violet-500 transition-all duration-200 hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={portfolioData.contact.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-800 border border-violet-500/30 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-violet-600 hover:border-violet-500 transition-all duration-200 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={portfolioData.contact.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-800 border border-violet-500/30 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-violet-600 hover:border-violet-500 transition-all duration-200 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={portfolioData.contact.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-800 border border-violet-500/30 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-violet-600 hover:border-violet-500 transition-all duration-200 hover:scale-110"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-violet-500/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-neutral-400 text-center md:text-left">
              © {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
            </p>
            <p className="text-neutral-500 text-center md:text-right">
              Created with <span className="text-violet-400">♥</span> by Sanoop Sanu
            </p>
          </div>
        </div>

        {/* Powered By Section */}
        <div className="mt-6 pt-6 border-t border-violet-500/10 text-center">
          <p className="text-neutral-500 text-xs">
            @ Powered by Sanoop <span className="text-violet-400">·</span> Code <span className="text-violet-400">·</span> Connect <span className="text-violet-400">·</span> Work
          </p>
        </div>
      </div>
    </footer>
  );
}
