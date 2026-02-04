import Navigation from '@/react-app/components/Navigation';
import Hero from '@/react-app/components/Hero';
import About from '@/react-app/components/About';
import Experience from '@/react-app/components/Experience';
import Services from '@/react-app/components/Services';
import Projects from '@/react-app/components/Projects';
import Contact from '@/react-app/components/Contact';
import ScrollButton from '@/react-app/components/ScrollButton';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Services />
      <Projects />
      <Contact />
      <ScrollButton />
    </div>
  );
}
