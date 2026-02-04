import { portfolioData } from '@/data/portfolio';
import { Calendar } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 bg-neutral-900/30">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-16 text-center">
            Experience & Education
          </h2>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <ScrollReveal delay={100}>
              <h3 className="text-2xl font-medium text-white mb-8">Experience & Skills</h3>
            </ScrollReveal>
            <div className="space-y-8">
              {portfolioData.experience.map((exp, index) => (
                <ScrollReveal key={index} delay={200 + index * 100}>
                  <div className="bg-neutral-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-violet-500/20 hover:border-violet-500/40 transition-all duration-300 interactive-card">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-600/20 to-purple-600/20 border border-violet-500/30 rounded-full text-sm text-violet-300 mb-4 backdrop-blur-sm">
                      <Calendar size={16} className="text-violet-400" />
                      <span className="font-medium">{exp.period}</span>
                    </div>
                    <h4 className="text-lg font-medium text-white mb-2">{exp.title}</h4>
                    <p className="text-sm text-neutral-300 mb-3">{exp.company}</p>
                    <p className="text-neutral-400 text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
          <div>
            <ScrollReveal delay={100}>
              <h3 className="text-2xl font-medium text-white mb-8">Education</h3>
            </ScrollReveal>
            <div className="space-y-8">
              {portfolioData.education.map((edu, index) => (
                <ScrollReveal key={index} delay={200 + index * 100}>
                  <div className="bg-neutral-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-violet-500/20 hover:border-violet-500/40 transition-all duration-300 interactive-card">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-600/20 to-purple-600/20 border border-violet-500/30 rounded-full text-sm text-violet-300 mb-4 backdrop-blur-sm">
                      <Calendar size={16} className="text-violet-400" />
                      <span className="font-medium">{edu.period}</span>
                    </div>
                    <h4 className="text-lg font-medium text-white mb-2">{edu.degree}</h4>
                    <p className="text-sm text-neutral-300 mb-3">{edu.institution}</p>
                    <p className="text-neutral-400 text-sm leading-relaxed">{edu.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
