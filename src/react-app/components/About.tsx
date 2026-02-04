import { portfolioData } from '@/data/portfolio';
import ScrollReveal from './ScrollReveal';

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-16 text-center">
            About Me
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <div className="grid md:grid-cols-5 gap-8 items-center bg-neutral-800/50 backdrop-blur-sm rounded-3xl p-12 shadow-lg border border-violet-500/20 hover:border-violet-500/40 transition-all duration-300">
            <div className="md:col-span-2 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-purple-600 rounded-3xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative">
                  <img
                    src="https://019c1e1a-7b0c-7a8a-aa6b-f8a7db89017d.mochausercontent.com/Profile.jpeg"
                    alt="Sanoop Sanu"
                    className="w-64 h-64 object-cover rounded-3xl border-4 border-neutral-900 shadow-2xl"
                  />
                </div>
              </div>
            </div>
            <div className="md:col-span-3">
              <p className="text-lg text-neutral-300 font-light leading-relaxed mb-6">
                {portfolioData.tagline}
              </p>
              <p className="text-neutral-400 leading-relaxed">
                {portfolioData.bio}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
