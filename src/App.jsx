import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HRMSModules from './components/HRMSModules';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Events from './components/Events';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-sky-500 selection:text-white relative overflow-x-hidden w-full">
      <Navbar />
      <main className="w-full overflow-x-hidden">
        <Hero />
        <HRMSModules />
        <Experience />
        <Projects />
        <Skills />
        <Events />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
