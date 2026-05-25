import React from 'react';
import { FaPhp, FaLaravel, FaWordpress, FaDatabase, FaCogs, FaPalette, FaMicrosoft } from 'react-icons/fa';
import { SiNestjs, SiExpress, SiMysql, SiPostgresql } from 'react-icons/si';
import { DiPhotoshop } from 'react-icons/di';
import { motion } from 'framer-motion';
import './Skills.css';

const skillsData = [
  { name: 'PHP', icon: <FaPhp /> },
  { name: 'Laravel', icon: <FaLaravel /> },
  { name: 'WordPress', icon: <FaWordpress /> },
  { name: 'Odoo', icon: <FaCogs /> },
  { name: 'NestJS', icon: <SiNestjs /> },
  { name: 'Express', icon: <SiExpress /> },
  { name: 'SQL', icon: <FaDatabase /> },
  { name: 'MySQL', icon: <SiMysql /> },
  { name: 'PostgreSQL', icon: <SiPostgresql /> },
  { name: 'Adobe HD', icon: <FaPalette /> },
  { name: 'Photoshop', icon: <DiPhotoshop /> },
  { name: 'MS Office', icon: <FaMicrosoft /> }
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <motion.div 
            key={index} 
            className="skill-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <span className="skill-icon">{skill.icon}</span>
            <span className="skill-name">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;