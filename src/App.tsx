import React from 'react';
import { BackgroundParticles } from './components/BackgroundParticles';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#080a0f] text-white/80 selection:bg-white/15 selection:text-white">
      {/* Light Glass Diamonds Canvas Background */}
      <BackgroundParticles />


      {/* Main Content Hierarchy */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-1">
          <Hero />
          <Skills />
          <Projects />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;
