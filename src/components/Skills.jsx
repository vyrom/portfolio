import { motion } from 'framer-motion';
import { Cpu, Server, Database, Layout, Terminal, Shield, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const skillCategories = [
  {
    title: 'Backend & Architecture',
    icon: Server,
    color: 'text-sky-400',
    bgColor: 'bg-sky-500/10',
    borderColor: 'border-sky-500/20',
    key: 'backend'
  },
  {
    title: 'Fintech & Enterprise Systems',
    icon: Shield,
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/20',
    key: 'fintechErp'
  },
  {
    title: 'Databases & Performance',
    icon: Database,
    color: 'text-indigo-400',
    bgColor: 'bg-indigo-500/10',
    borderColor: 'border-indigo-500/20',
    key: 'databases'
  },
  {
    title: 'Frontend & Dashboards',
    icon: Layout,
    color: 'text-teal-400',
    bgColor: 'bg-teal-500/10',
    borderColor: 'border-teal-500/20',
    key: 'frontend'
  },
  {
    title: 'DevOps & Infrastructure',
    icon: Terminal,
    color: 'text-amber-400',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/20',
    key: 'devopsTools'
  }
];

const Skills = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950/60 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-xs font-mono text-sky-400 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Mastery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Technical Stack & Enterprise Competencies
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            A battle-tested technology toolkit honed across 8+ years of production software development in banking, fintech, and ERP platforms.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            const items = skills[category.key] || [];

            return (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-slate-700"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-10 h-10 rounded-xl ${category.bgColor} ${category.borderColor} border flex items-center justify-center ${category.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-3">
                    {items.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/80 transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <Check className={`w-3.5 h-3.5 ${category.color}`} />
                          <span className="text-sm font-medium text-slate-200">{skill.name}</span>
                        </div>
                        <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-slate-800/90 text-slate-400 border border-slate-700/50">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>{items.length} Technologies</span>
                  <span className="text-slate-400">Production Verified</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;
