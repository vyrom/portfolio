import { motion } from 'framer-motion';
import { UserCheck, Users, CalendarCheck, Clock, CalendarDays, Briefcase, Workflow, CheckCircle, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  UserCheck: UserCheck,
  Users: Users,
  CalendarCheck: CalendarCheck,
  Clock: Clock,
  CalendarDays: CalendarDays,
  Briefcase: Briefcase
};

const HRMSModules = () => {
  const { hrmsModules } = portfolioData;

  return (
    <section id="hrms" className="py-24 relative overflow-hidden bg-slate-900/40 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-xs font-mono text-sky-400 mb-3">
            <Workflow className="w-3.5 h-3.5" />
            <span>ABA Bank Enterprise Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Core HRMS Engineering & Modules
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Digitizing complex human resource operations for thousands of employees through automated multi-level state machines, biometric hardware reconciliation, and intuitive self-service portals.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hrmsModules.map((module, idx) => {
            const IconComponent = iconMap[module.icon] || Workflow;
            return (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="glass-card rounded-2xl p-6 flex flex-col justify-between group hover:border-sky-500/40"
              >
                <div>
                  {/* Card Header with Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:bg-sky-400 group-hover:text-slate-950 transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-semibold text-slate-500 group-hover:text-sky-400 transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-sky-300 transition-colors">
                    {module.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {module.description}
                  </p>
                </div>

                {/* Tags Footer */}
                <div className="pt-4 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-1.5">
                    {module.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-slate-800/80 text-slate-300 border border-slate-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Enterprise Highlights Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-800/40 border border-slate-700/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-sm text-slate-300">
            <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>Full compliance with banking security standards, RBAC permissions, and comprehensive transaction audit trails.</span>
          </div>
          <a
            href="#experience"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 font-mono shrink-0 group"
          >
            <span>View Full Career Timeline</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default HRMSModules;
