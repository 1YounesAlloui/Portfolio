import React from 'react';
import { Layout, Server, Database, Cloud, CheckCircle2 } from 'lucide-react';

const lifecycleStages = [
  {
    icon: Layout,
    title: 'Frontend Engineering',
    description: 'Constructing performant, typed, and reactive user interfaces using React, TypeScript, and modern styling systems that deliver fluid interactions across viewports.'
  },
  {
    icon: Server,
    title: 'Backend & REST APIs',
    description: 'Designing modular Django and Django REST Framework backends with clean data contracts, business rules, and secure JWT authentication protocols.'
  },
  {
    icon: Database,
    title: 'Databases & Schemas',
    description: 'Structuring normalized relational schemas with PostgreSQL, Neon serverless databases, and SQLite, ensuring transactional integrity and performant queries.'
  },
  {
    icon: Cloud,
    title: 'Deployment & Environments',
    description: 'Configuring modern production deployments using Vercel for frontend edge delivery and Render for backend microservices and databases.'
  }
];

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-white/40 uppercase mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
              01 // Architectural Background
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              End-to-End Software Engineering
            </h2>
          </div>
        </div>

        {/* Narrative & Principles Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Main Statement & Core Focus */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 rounded-3xl glass-panel relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-white/8 rounded-full blur-3xl pointer-events-none" />
              
              <h3 className="text-xl sm:text-2xl font-semibold text-white leading-snug mb-4">
                Building reliable software by treating frontend, backend, and deployment as an integrated system.
              </h3>
              
              <p className="text-white/60 leading-relaxed mb-4">
                As a Full-Stack Software Engineer, I build cohesive systems across frontend, backend, and databases, focusing on clean integration and reliable performance.
              </p>

              <p className="text-white/60 leading-relaxed">
              I build web, desktop, and mobile applications, With a focus on clean architecture, type safety, and reliability.
              </p>

              <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div>
                  <div className="text-xs font-mono text-white/40">SPECIALIZATION</div>
                  <div className="text-sm font-semibold text-white mt-1">Full-Stack Engineering</div>
                </div>
                <div>
                  <div className="text-xs font-mono text-white/40">PLATFORMS</div>
                  <div className="text-sm font-semibold text-white mt-1">Web, Desktop & Mobile</div>
                </div>
                
              </div>
            </div>
          </div>

          {/* Core Architectural Pillars */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-3xl glass-panel">
              <h4 className="text-xs font-mono uppercase tracking-wider text-white/40 mb-4 font-semibold">
                Lifecycle Competencies
              </h4>

              <div className="space-y-4">
                {[
                  { title: 'Frontend Systems', desc: 'React, TypeScript, component architecture, Tailwind CSS' },
                  { title: 'Backend & APIs', desc: 'Python, Django, Django REST Framework, JWT auth' },
                  { title: 'Data Persistence', desc: 'Relational design, PostgreSQL, Neon, SQLite' },
                  { title: 'Cross-Platform', desc: 'Native desktop via Electron, mobile with React Native' },
                  { title: 'Deployment & CI/CD', desc: 'Vercel static/serverless hosting and Render services' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 group">
                    <CheckCircle2 className="w-4 h-4 text-white/40 mt-1 shrink-0 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="text-sm font-semibold text-white">
                        {item.title}
                      </div>
                      <div className="text-xs text-white/30">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Lifecycle Flow Timeline / Architectural Stages */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono uppercase tracking-wider text-white/30">
              Integrated Engineering Flow
            </span>
            <div className="flex-1 h-[1px] bg-white/10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {lifecycleStages.map((stage, idx) => {
              const Icon = stage.icon;
              return (
                <div
                  key={idx}
                  className="glass-panel p-5 rounded-2xl flex flex-col justify-between hover:border-white/20 transition-all duration-200 group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center text-white/50 group-hover:scale-110 transition-transform">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] font-mono font-semibold text-slate-500">
                        0{idx + 1}
                      </span>
                    </div>
                    <h5 className="text-sm font-semibold text-white mb-2">
                      {stage.title}
                    </h5>
                    <p className="text-xs text-white/30 leading-relaxed">
                      {stage.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
