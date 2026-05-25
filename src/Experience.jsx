import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const experiences = [
  { 
    title: 'ERP Systems', 
    description: 'Developed comprehensive Enterprise Resource Planning modules to streamline complex business processes and operations.' 
  },
  { 
    title: 'School Management', 
    description: 'Built management systems for educational institutions to handle student data, administration, and scheduling.' 
  },
  { 
    title: 'Print Shop Management', 
    description: 'Created workflow and order management solutions customized specifically for print shop operations and tracking.' 
  },
  { 
    title: 'Bus Ticket Booking', 
    description: 'Implemented a booking management system for bus ticketing, including seat allocation, route management, and scheduling.' 
  },
  { 
    title: 'Admin APIs', 
    description: 'Designed and maintained secure, high-performance Admin APIs for centralized control and data management.' 
  },
  { 
    title: 'HR Systems', 
    description: 'Developed Human Resources management systems for employee tracking, payroll automation, and attendance.' 
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