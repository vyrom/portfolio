import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Building2, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-950/60 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-400 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Domain & Enterprise Experience
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            A track record of engineering scalable enterprise systems, high-volume fintech payment backends, and multi-tenant ERP platforms.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central/left line */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-8 w-0.5 bg-gradient-to-b from-sky-500 via-indigo-500 to-slate-800" />

          <div className="space-y-12">
            {experience.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-12 sm:pl-20"
              >
                {/* Timeline node icon */}
                <div className="absolute left-2 sm:left-6 -translate-x-1/2 top-1.5 w-5 h-5 rounded-full bg-slate-950 border-4 border-sky-400 z-10 shadow-lg shadow-sky-400/30" />

                {/* Experience Card */}
                <div className="glass-card rounded-2xl p-6 sm:p-8 hover:border-sky-500/40">
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-white">
                          {exp.role}
                        </h3>
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20">
                          {exp.badge}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-slate-300">
                        <span className="flex items-center gap-1.5 text-indigo-400 font-semibold">
                          <Building2 className="w-4 h-4" />
                          {exp.company}
                        </span>
                        <span className="text-slate-600">•</span>
                        <span className="flex items-center gap-1.5 text-slate-400">
                          <MapPin className="w-3.5 h-3.5" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800 self-start sm:self-auto">
                      <Calendar className="w-3.5 h-3.5 text-sky-400" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-slate-300 mb-5 leading-relaxed font-normal">
                    {exp.description}
                  </p>

                  {/* Achievements List */}
                  <div className="space-y-2.5 mb-6">
                    {exp.achievements.map((ach, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{ach}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Badges */}
                  <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded text-xs font-mono bg-slate-900/90 text-slate-300 border border-slate-800 hover:border-slate-700 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
