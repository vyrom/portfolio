import { ArrowUp, Send, Mail } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 py-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <a href="#home" className="font-mono text-xl font-bold tracking-tight text-white hover:text-sky-400 transition-colors">
              &lt;<span className="text-sky-400">Vyrom</span> /&gt;
            </a>
            <p className="text-xs text-slate-500 font-mono mt-1">
              Senior Fullstack & Enterprise Backend Developer • ABA Bank
            </p>
          </div>

          {/* Quick Nav Anchors */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-medium">
            <a href="#home" className="hover:text-sky-400 transition-colors">Home</a>
            <a href="#hrms" className="hover:text-sky-400 transition-colors">HRMS Modules</a>
            <a href="#experience" className="hover:text-sky-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-sky-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-sky-400 transition-colors">Skills</a>
            <a href="#events" className="hover:text-sky-400 transition-colors">Events</a>
            <a href="#contact" className="hover:text-sky-400 transition-colors">Contact</a>
          </div>

          {/* Back to top & Socials */}
          <div className="flex items-center gap-3">
            <a
              href={personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg bg-slate-900 hover:text-white hover:bg-slate-800 transition-colors text-slate-400"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href={personal.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="p-2 rounded-lg bg-slate-900 hover:text-sky-400 hover:bg-slate-800 transition-colors text-slate-400"
            >
              <Send className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              aria-label="Email"
              className="p-2 rounded-lg bg-slate-900 hover:text-indigo-400 hover:bg-slate-800 transition-colors text-slate-400"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-2 rounded-lg bg-slate-900 hover:text-sky-400 hover:bg-slate-800 transition-colors text-slate-400 ml-2"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-4">
          <div>
            © {currentYear} Bunrong Vyrom. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Built with React 19, Tailwind CSS v4 & Framer Motion</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
