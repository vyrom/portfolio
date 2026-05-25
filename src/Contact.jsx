import React from 'react';
import { FaTelegram, FaFacebook, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
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
            <span className="contact-label"><FaPhone className="contact-icon" /> Phone:</span>
            <a href="tel:+855967425680" className="contact-link">+855 96 742 5680</a>
          </div>
          <div className="contact-item">
            <span className="contact-label"><FaEnvelope className="contact-icon" /> Email:</span>
            <a href="mailto:vyrom99997@gmail.com" className="contact-link">vyrom99997@gmail.com</a>
          </div>
          <div className="contact-item">
            <span className="contact-label"><FaMapMarkerAlt className="contact-icon" /> Location:</span>
            <span className="contact-link">St 271, Tek Tlar, Sen Sok, Phnom Penh</span>
          </div>
          <div className="contact-item">
            <span className="contact-label"><FaTelegram className="contact-icon" /> Telegram:</span>
            <a href="https://t.me/BunrongVyrom" target="_blank" rel="noopener noreferrer" className="contact-link">@BunrongVyrom</a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;