import { portfolioData } from '@/data/portfolio';
import { Code, Server, Database } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const iconMap = {
  Code,
  Server,
  Database,
};

export default function Services() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-16 text-center">
            Services
          </h2>
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-8">
          {portfolioData.services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <ScrollReveal key={index} delay={100 + index * 100}>
                <div className="bg-neutral-800/50 backdrop-blur-sm rounded-2xl p-10 shadow-lg border border-violet-500/20 hover:border-violet-500/40 transition-all duration-300 group interactive-card">
                  <div className="w-14 h-14 bg-violet-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-violet-600 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <Icon className="text-violet-400 group-hover:text-white transition-colors duration-300" size={24} />
                  </div>
                  <h3 className="text-xl font-medium text-white mb-4">{service.title}</h3>
                  <p className="text-neutral-400 leading-relaxed mb-6">{service.description}</p>
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-violet-400 hover:text-violet-300 font-medium transition-colors duration-300 inline-flex items-center gap-1 group-hover:gap-2"
                  >
                    Learn more →
                  </a>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
