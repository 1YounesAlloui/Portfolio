import React, { useState } from 'react';
import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { Bot, Cpu } from 'lucide-react';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories: string[] = [
    'All',
    'Multi-Platform Systems',
    'AI-Integrated Platforms',
    'Web Applications',
    'Mobile',
    'Productivity & Tooling',
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-white/40 uppercase mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
              03 // Projects
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              My Projects
            </h2>
          </div>
        </div>

        {/* AI-Integrated Applications Spotlight Subsection (Section 11) */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl mb-14 border border-white/10 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/8 border border-white/15 text-white/60 text-xs font-mono font-medium">
                <Bot className="w-3.5 h-3.5 text-white/50" />
                <span>SPECIALIZED</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Full-Stack Software Engineer
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                I have worked on multiple mobile/desktop applications and commercial web sites.
              </p>
            </div>
            <div className="shrink-0 p-4 rounded-2xl bg-black/60 border border-white/10 flex flex-col gap-2 font-mono text-xs text-white/40">
              <span className="text-white font-semibold flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-white/50" />
                Full-Stack Engineering
              </span>
              <span>• Interactive Interfaces</span>
              <span>• Workflow Automation</span>
              <span>• Systems / Data Analysis</span>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeFilter === cat
                  ? 'bg-white text-black font-semibold'
                  : 'glass-panel text-white/50 hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
};
