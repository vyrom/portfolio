import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    title: 'Scalable E-commerce API',
    description: 'A robust RESTful API built for a high-traffic e-commerce platform with payment gateway integration and optimized database queries.',
    tags: ['NestJS', 'Express', 'PostgreSQL'],
    link: '#'
  },
  {
    id: 2,
    title: 'Enterprise ERP Solution',
    description: 'Custom modules and workflow automation developed for an enterprise resource planning system to streamline business operations.',
    tags: ['Odoo', 'PHP', 'PostgreSQL'],
    link: '#'
  },
  {
    id: 3,
    title: 'Content Management System',
    description: 'A backend architecture providing dynamic content delivery, user authentication, and role-based access control.',
    tags: ['Laravel', 'MySQL', 'WordPress'],
    link: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <motion.div 
            key={project.id} 
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tags">
              {project.tags.map(tag => (
                <span key={tag} className="project-tag">{tag}</span>
              ))}
            </div>
            <a href={project.link} className="project-link">View Project &rarr;</a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;