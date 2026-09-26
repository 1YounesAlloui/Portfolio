import React from 'react';
import type { Project } from '../types';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article className="glass-panel p-6 sm:p-8 rounded-3xl flex flex-col justify-between hover:border-white/20 transition-all duration-300 group">
      <div>
        {/* Header Strip: Category & Badges */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold px-3 py-1 rounded-full bg-white/8 text-white/60 border border-white/12">
            <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
            {project.category}
          </span>
          {project.badge && (
            <span className="text-[11px] font-mono text-slate-400 bg-white/5 px-2.5 py-0.5 rounded-md border border-white/10">
              {project.badge}
            </span>
          )}
        </div>

        {/* Project Name & Subtitle */}
        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-white/80 transition-colors">
          {project.name}
        </h3>
        <p className="text-xs font-mono text-white/30 mt-1 mb-4">
          {project.subtitle}
        </p>

        {/* Project Description */}
        <p className="text-sm text-white/55 leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Engineering Highlights */}
        <div className="space-y-2 mb-6 pt-4 border-t border-white/10">
          <div className="text-xs font-mono uppercase tracking-wider text-white/40 font-semibold mb-2">
            Architectural Highlights:
          </div>
          {project.highlights.map((highlight, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs text-white/50">
              <CheckCircle2 className="w-3.5 h-3.5 text-white/35 mt-0.5 shrink-0" />
              <span>{highlight}</span>
            </div>
          ))}
        </div>

        {/* Architectural Role */}
        {project.architecturalRole && (
          <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 mb-6 text-xs text-slate-300">
            <span className="font-semibold text-white font-mono text-[11px] block mb-1">
              ENGINEERING SCOPE:
            </span>
            {project.architecturalRole}
          </div>
        )}
      </div>

      {/* Footer Strip: Technologies & Links */}
      <div className="pt-4 border-t border-white/10">
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.all.map((tech, i) => (
            <span
              key={i}
              className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 text-slate-300 border border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links (strictly only if provided) */}
        {(project.githubUrl || project.demoUrl) && (
          <div className="flex items-center gap-3 pt-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-white/50 hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Repository</span>
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-white/60 hover:underline"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live System</span>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
};
