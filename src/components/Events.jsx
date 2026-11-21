import { motion } from 'framer-motion';
import { Calendar, MapPin, Mic, Users, Award, BookOpen, Sparkles, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const typeIcons = {
  'Internal Tech Talk': Mic,
  'Conference & Seminar': Award,
  'Tech Community': Users,
  'Technical Workshop': BookOpen
};

const Events = () => {
  const { events } = portfolioData;

  return (
    <section id="events" className="py-24 relative overflow-hidden bg-slate-900/40 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Community & Continuous Learning</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Events, Tech Talks & Activities
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Active engagement in technology conferences, internal engineering symposiums, tech meetups, and hands-on workshops across Cambodia.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {events.map((event, idx) => {
            const Icon = typeIcons[event.type] || Users;

            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group hover:border-amber-500/40"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      <Icon className="w-3.5 h-3.5" />
                      {event.type}
                    </span>

                    <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-slate-800 text-slate-300 border border-slate-700/60">
                      {event.role}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {event.title}
                  </h3>

                  {/* Meta: Date & Location */}
                  <div className="flex items-center gap-4 text-xs font-mono text-slate-400 mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-sky-400" />
                      {event.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-rose-400" />
                      {event.location}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {event.description}
                  </p>
                </div>

                {/* Footer Tag */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs font-mono font-medium text-slate-400">
                    Topic: <span className="text-slate-200">{event.tag}</span>
                  </span>
                  <a
                    href="#contact"
                    className="text-xs font-mono text-amber-400 hover:text-amber-300 inline-flex items-center gap-1"
                  >
                    <span>Connect</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Community Callout */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-400">
            Interested in having me speak at your event or collaborating on a tech workshop?{' '}
            <a href="#contact" className="text-sky-400 hover:text-sky-300 font-semibold underline underline-offset-4">
              Get in touch
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};

export default Events;
