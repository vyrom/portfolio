import React from 'react';
import { FaTelegram, FaFacebook } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Get In Touch</h2>
      <motion.div 
        className="contact-container"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="contact-description">
          I'm currently available for new opportunities. Whether you have a question or just want to connect, feel free to reach out to me!
        </p>
        <div className="contact-info">
          <div className="contact-item">
            <span className="contact-label"><FaTelegram className="contact-icon" /> Telegram:</span>
            <a href="tel:0968245680" className="contact-link">0968245680</a>
          </div>
          <div className="contact-item">
            <span className="contact-label"><FaFacebook className="contact-icon" /> Facebook:</span>
            <a href="https://facebook.com/BunrongVyrom" target="_blank" rel="noopener noreferrer" className="contact-link">Bunrong Vyrom</a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;