import React from 'react';
import { FaLaravel, FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import { SiExpress, SiFlutter } from 'react-icons/si';
import { DiPhotoshop } from 'react-icons/di';
import { motion } from 'framer-motion';
import './Skills.css';

const skillsData = [
  { name: 'Laravel', icon: <FaLaravel /> },
  { name: 'Express Js', icon: <SiExpress /> },
  { name: 'React Js', icon: <FaReact /> },
  { name: 'HTML5', icon: <FaHtml5 /> },
  { name: 'CSS3', icon: <FaCss3Alt /> },
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'Flutter', icon: <SiFlutter /> },
  { name: 'Photoshop', icon: <DiPhotoshop /> }
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