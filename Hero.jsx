import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-container">
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Vyrom</span>
        </h1>
        <h2 className="hero-subtitle">Backend Developer</h2>
        <p className="hero-description">
          I specialize in building robust APIs, scalable architectures, and efficient database solutions using modern backend technologies.
          Welcome to my personal portfolio!
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-secondary">Contact Me</a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;