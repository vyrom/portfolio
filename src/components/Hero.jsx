import { motion } from 'framer-motion';
import { ArrowRight, Send, ShieldCheck, Database, Layers } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  const { personal } = portfolioData;

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-mesh">
      {/* Decorative ambient glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Value Proposition */}
          <motion.div 
            className="lg:col-span-7 text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Status Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/60 text-xs font-mono text-sky-400 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              HRMS Developer @ ABA Bank • Ex-Fintech Backend
            </div>

            {/* Main Greeting & Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] mb-4">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-indigo-400">Bunrong Vyrom</span>
            </h1>

            <h2 className="text-xl sm:text-2xl font-semibold text-slate-300 mb-6 flex flex-wrap items-center gap-2">
              <span>Senior Fullstack & Enterprise Backend Developer</span>
            </h2>

            {/* Professional Summary */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed mb-8 max-w-2xl">
              Architecting mission-critical internal enterprise platforms and high-security payment services. Currently engineering the central <strong className="text-slate-200">HRMS ecosystem at ABA Bank</strong> (Onboarding, Leave, OT Engine, Shift Rostering) and formerly developed digital wallet backends for <strong className="text-slate-200">UMPAY APP</strong>.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a 
                href="#hrms" 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-400 text-slate-950 font-semibold text-sm hover:bg-sky-300 transition-all shadow-lg shadow-sky-400/20 group"
              >
                <span>Explore HRMS Modules</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a 
                href={personal.telegramUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700 font-medium text-sm transition-all hover:border-sky-400/50"
              >
                <Send className="w-4 h-4 text-sky-400" />
                <span>Chat via Telegram</span>
              </a>

              <a 
                href="#projects" 
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-slate-300 hover:text-white font-medium text-sm hover:bg-slate-800/40 transition-colors"
              >
                <span>View Case Studies</span>
              </a>
            </div>

            {/* Quick Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800/80">
              {personal.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="font-mono text-2xl sm:text-3xl font-bold text-white tracking-tight">{stat.value}</span>
                  <span className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-1">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Interactive System Architecture Card */}
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="glass-card rounded-2xl p-5 sm:p-6 border border-slate-700/60 shadow-2xl relative overflow-hidden">
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs font-mono text-slate-400 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-slate-300">system_monitor.sh</span>
                </div>
                <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> LIVE
                </span>
              </div>

              {/* Status Modules */}
              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-sky-400" />
                    <div>
                      <div className="text-slate-200 font-semibold">ABA HRMS Platform</div>
                      <div className="text-[11px] text-slate-500">Workforce & Approvals Engine</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] border border-emerald-500/20 font-bold">
                    99.98% Uptime
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Database className="w-4 h-4 text-indigo-400" />
                    <div>
                      <div className="text-slate-200 font-semibold">Biometric Punch Sync</div>
                      <div className="text-[11px] text-slate-500">Rotational Shift Reconciliation</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 text-[10px] border border-sky-500/20 font-bold">
                    Active Daemons
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Layers className="w-4 h-4 text-teal-400" />
                    <div>
                      <div className="text-slate-200 font-semibold">UMPAY Digital Wallet</div>
                      <div className="text-[11px] text-slate-500">Fintech Payment Gateway</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-teal-500/10 text-teal-400 text-[10px] border border-teal-500/20 font-bold">
                    High Security
                  </span>
                </div>
              </div>

              {/* Core Modules Chips */}
              <div className="mt-5 pt-4 border-t border-slate-800">
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2.5">
                  Core Enterprise Modules
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {['Onboarding', 'Offboarding', 'ESS Portal', 'Leave Approval', 'OT Engine', 'Shift Roster', 'Recruitment'].map((mod) => (
                    <span 
                      key={mod}
                      className="px-2.5 py-1 rounded-md text-[11px] bg-slate-800/70 text-slate-300 border border-slate-700/60 font-medium"
                    >
                      {mod}
                    </span>
                  ))}
                </div>
              </div>

              {/* Architecture Blueprint Footnote */}
              <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>Stack: NestJS • React • PostgreSQL</span>
                <span className="text-sky-400">Phnom Penh, KH</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
