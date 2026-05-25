import React from 'react';
import Navbar from './Navbar';
import Hero from '../Hero';
import Projects from './Projects';
import Skills from './Skills';
import Experience from './Experience';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-secondary)] text-[var(--color-text-main)] font-sans">
      <Navbar />
      <main>
        <div id="home">
          <Hero />
        </div>
        
        <Skills />
        
        <Experience />
        
        <Projects />
        
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
