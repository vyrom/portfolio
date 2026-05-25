import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const experiences = [
  { 
    title: 'Backend Developer @ ABA Bank', 
    description: '2024 - Present | Developing and maintaining robust backend services, APIs, and handling core system integrations.' 
  },
  { 
    title: 'Backend Developer @ Infinity Information', 
    description: '2022 - 2024 | Integration of user-facing elements, building reusable code, application optimization, implementation of security and data storage solutions.' 
  },
  { 
    title: 'Web Developer @ CloudNet Cambodia', 
    description: '2018 - 2022 | Full stack web development (WordPress, custom API). Developed APIs for Google Maps, mobile apps, and payment services. Customized ERP systems.' 
  },
  { 
    title: 'IT Support & Web Design @ IT Global', 
    description: '2017 - 2018 | Designed responsive landing pages, integrated CMS programs, and conducted website testing.' 
  },
  { 
    title: 'Graphic Designer @ Narita Vespa', 
    description: '2015 - 2016 | Conceptualized visuals, developed illustrations, logos, and designs using software and hand-drawn techniques.' 
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">Domain Experience</h2>
      <div className="experience-grid">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index} 
            className="experience-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="experience-title">{exp.title}</h3>
            <p className="experience-description">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;