import { motion } from 'framer-motion';
import { Layers, ArrowRight, Server, Activity } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-900/40 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-xs font-mono text-teal-400 mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Production Systems</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Featured Case Studies & Systems
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Real-world enterprise solutions engineered for banking operations, high-security digital payments, and multi-branch ERP environments.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group hover:border-sky-500/40 ${
                project.featured ? 'border-slate-700/80' : ''
              }`}
            >
              <div>
                {/* Top Badges */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20">
                    {project.category}
                  </span>
                  <span className="text-xs font-semibold text-slate-400 font-mono">
                    {project.client}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-sky-300 transition-colors">
                  {project.title}
                </h3>

                {/* Metrics Banner */}
                <div className="mb-4 p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <Activity className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{project.metrics}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Architecture Flow Note */}
                <div className="mb-6 p-3 rounded-lg bg-slate-950/80 border border-slate-800/80">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1 flex items-center gap-1.5">
                    <Server className="w-3 h-3 text-sky-400" />
                    <span>Architecture Flow</span>
                  </div>
                  <div className="text-xs font-mono text-slate-300 leading-snug">
                    {project.architecture}
                  </div>
                </div>
              </div>

              {/* Bottom Footer: Tech Stack & Links */}
              <div>
                <div className="pt-4 border-t border-slate-800/80 mb-5">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800/60 text-slate-300 border border-slate-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                  >
                    <FaGithub className="w-4 h-4 text-slate-400" />
                    <span>View Repository</span>
                  </a>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-sky-400 hover:text-sky-300 group-hover:translate-x-1 transition-all"
                  >
                    <span>Discuss System</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
