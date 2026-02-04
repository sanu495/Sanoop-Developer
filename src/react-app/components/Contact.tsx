import { portfolioData } from '@/data/portfolio';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-16 text-center">
            Get In Touch
          </h2>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 gap-12">
          <ScrollReveal delay={100}>
            <div className="bg-neutral-800/50 backdrop-blur-sm rounded-2xl p-12 shadow-lg border border-violet-500/20">
              <h3 className="text-2xl font-medium text-white mb-8">Send a message</h3>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-6 py-4 bg-neutral-900/50 border border-violet-500/20 rounded-xl focus:outline-none focus:border-violet-500/60 transition-all duration-300 text-white placeholder-neutral-500 hover:border-violet-500/40"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-6 py-4 bg-neutral-900/50 border border-violet-500/20 rounded-xl focus:outline-none focus:border-violet-500/60 transition-all duration-300 text-white placeholder-neutral-500 hover:border-violet-500/40"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Your Phone"
                    className="w-full px-6 py-4 bg-neutral-900/50 border border-violet-500/20 rounded-xl focus:outline-none focus:border-violet-500/60 transition-all duration-300 text-white placeholder-neutral-500 hover:border-violet-500/40"
                  />
                </div>
                <div>
                  <textarea
                    rows={5}
                    placeholder="Your Message"
                    className="w-full px-6 py-4 bg-neutral-900/50 border border-violet-500/20 rounded-xl focus:outline-none focus:border-violet-500/60 transition-all duration-300 resize-none text-white placeholder-neutral-500 hover:border-violet-500/40"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl hover:from-violet-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 hover:scale-105 active:scale-95"
                >
                  Send Message
                </button>
              </form>
            </div>
          </ScrollReveal>
          <div>
            <ScrollReveal delay={200}>
              <h3 className="text-2xl font-medium text-white mb-8">Contact Details</h3>
            </ScrollReveal>
            <div className="space-y-6 mb-12">
              <ScrollReveal delay={300}>
                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-violet-600/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-violet-600 transition-all duration-300 group-hover:scale-110">
                    <Mail size={20} className="text-violet-400 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-400 mb-1">Email</p>
                    <a href={`mailto:${portfolioData.contact.email}`} className="text-white hover:text-violet-400 transition-colors duration-300">
                      {portfolioData.contact.email}
                    </a>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={350}>
                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-violet-600/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-violet-600 transition-all duration-300 group-hover:scale-110">
                    <Phone size={20} className="text-violet-400 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-400 mb-1">Phone</p>
                    <p className="text-white">{portfolioData.contact.phone}</p>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={400}>
                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-violet-600/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-violet-600 transition-all duration-300 group-hover:scale-110">
                    <MapPin size={20} className="text-violet-400 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-400 mb-1">Address</p>
                    <p className="text-white">{portfolioData.contact.address}</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={500}>
              <h3 className="text-xl font-medium text-white mb-6">Connect with me</h3>
              <div className="flex gap-4">
                <a
                  href={portfolioData.contact.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-violet-600/20 rounded-xl flex items-center justify-center hover:bg-violet-600 transition-all duration-300 group hover:scale-110 hover:rotate-6 active:scale-95"
                >
                  <Github size={20} className="text-violet-400 group-hover:text-white" />
                </a>
                <a
                  href={portfolioData.contact.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-violet-600/20 rounded-xl flex items-center justify-center hover:bg-violet-600 transition-all duration-300 group hover:scale-110 hover:rotate-6 active:scale-95"
                >
                  <Linkedin size={20} className="text-violet-400 group-hover:text-white" />
                </a>
                <a
                  href={portfolioData.contact.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-violet-600/20 rounded-xl flex items-center justify-center hover:bg-violet-600 transition-all duration-300 group hover:scale-110 hover:rotate-6 active:scale-95"
                >
                  <Instagram size={20} className="text-violet-400 group-hover:text-white" />
                </a>
                <a
                  href={portfolioData.contact.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-violet-600/20 rounded-xl flex items-center justify-center hover:bg-violet-600 transition-all duration-300 group hover:scale-110 hover:rotate-6 active:scale-95"
                >
                  <MessageCircle size={20} className="text-violet-400 group-hover:text-white" />
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
