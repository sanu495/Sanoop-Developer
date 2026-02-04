import { portfolioData } from '@/data/portfolio';
import { ExternalLink, Github } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 bg-neutral-900/30">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-16 text-center">
            Featured Projects
          </h2>
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, index) => (
            <ScrollReveal key={index} delay={100 + index * 100}>
              <div className="bg-neutral-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-violet-500/20 hover:border-violet-500/40 transition-all duration-300 group interactive-card">
                <div className="aspect-video overflow-hidden bg-neutral-900 relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-8">
                  <h3 className="text-lg font-medium text-white mb-3 group-hover:text-violet-400 transition-colors">{project.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-6">{project.description}</p>
                  <div className="flex items-center gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-violet-400 hover:text-violet-300 transition-all duration-300 hover:gap-3"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-violet-400 hover:text-violet-300 transition-all duration-300 hover:gap-3"
                      >
                        <ExternalLink size={16} />
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
