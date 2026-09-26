import React, { useState } from 'react';
import { skillCategories, coreSpecialties } from '../data/skills';
import { Code, Server, Monitor, Database, Cloud, Cpu, Sparkles, Check } from 'lucide-react';

const categoryIcons: Record<string, React.ElementType> = {
  frontend: Code,
  backend: Server,
  'desktop-crossplatform': Monitor,
  databases: Database,
  'deployment-devops': Cloud,
  'architecture-ai': Cpu,
};

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredCategories = selectedCategory === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === selectedCategory);

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-white/40 uppercase mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
              02 // Technology Stack & Tooling
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Technical Capabilities
            </h2>
          </div>
        </div>

        {/* Core Specialties Callout Strip */}
        <div className="glass-panel p-5 rounded-2xl mb-10 flex flex-wrap items-center justify-between gap-4 border border-white/15 bg-white/5">
          <div className="flex items-center gap-2 text-xs font-mono uppercase text-white/50 font-semibold">
            <Sparkles className="w-4 h-4 text-white/40" />
            <span>Core Architectural Focus:</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {coreSpecialties.map((spec, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-slate-200 border border-white/10"
              >
                <Check className="w-3 h-3 text-white/40" />
                {spec}
              </span>
            ))}
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-white text-black font-semibold'
                : 'glass-panel text-white/50 hover:text-white hover:border-white/20'
            }`}
          >
            All Disciplines
          </button>
          {skillCategories.map((cat) => {
            const Icon = categoryIcons[cat.id] || Code;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-white text-black font-semibold'
                    : 'glass-panel text-white/50 hover:text-white hover:border-white/20'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.title.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => {
            const Icon = categoryIcons[cat.id] || Code;
            return (
              <div
                key={cat.id}
                className="glass-panel p-6 rounded-3xl flex flex-col justify-between hover:border-white/20 transition-all duration-300 group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-white/8 flex items-center justify-center text-white/50 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white">
                        {cat.title}
                      </h3>
                      <span className="text-[11px] font-mono text-white/30">
                        {cat.skills.length} core technologies
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1 rounded-lg text-xs font-medium font-mono border border-white/10 bg-black/40 text-slate-300 group-hover:border-white/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
