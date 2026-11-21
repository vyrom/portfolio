import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Send, ChevronRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'HRMS Modules', href: '#hrms' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Events', href: '#events' },
  { name: 'Contact', href: '#contact' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { personal } = portfolioData;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with live status indicator */}
          <a href="#home" className="flex items-center gap-2 group">
            <span className="font-mono text-xl font-bold tracking-tight text-white group-hover:text-sky-400 transition-colors">
              &lt;<span className="text-sky-400">Vyrom</span> /&gt;
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-950/80 text-emerald-400 border border-emerald-800/60">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              ABA Bank
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-sm font-medium text-slate-300 hover:text-sky-400 hover:bg-slate-800/40 rounded-lg transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href={personal.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="p-2 text-slate-300 hover:text-sky-400 hover:bg-slate-800 rounded-lg transition-colors"
            >
              <Send className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-sky-400 border border-sky-500/30 rounded-lg hover:bg-sky-400 hover:text-slate-950 transition-all shadow-sm"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={personal.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-sky-400 hover:bg-slate-800/60 rounded-lg"
              aria-label="Telegram"
            >
              <Send className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-200 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6 text-sky-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Animated Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden glass-nav border-t border-slate-800/80 px-4 pt-3 pb-6 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className="flex items-center justify-between px-3 py-2.5 text-base font-medium text-slate-200 hover:text-sky-400 hover:bg-slate-800/50 rounded-lg transition-colors"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </a>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <a
                  href={personal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-300 hover:text-white"
                >
                  <FaGithub className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={personal.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-sky-400"
                >
                  <Send className="w-4 h-4" />
                  <span>Telegram</span>
                </a>
              </div>
              <a
                href="#contact"
                onClick={closeMenu}
                className="px-3 py-1 text-xs font-semibold bg-sky-400 text-slate-950 rounded-md"
              >
                Hire / Connect
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
