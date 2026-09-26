import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, FolderGit2, Code2, Layers, Cpu, Database, Cloud } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { scrollToSection } from '../lib/utils';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto w-full">
        <div className="flex flex-col items-center text-center">

          {/* Status Pill */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-white/70 animate-pulse" />
            <span className="text-xs font-mono font-medium tracking-wide text-white/60">
              ENGINEERING SCALABLE ARCHITECTURES
            </span>
          </motion.div>

          {/* Name & Title */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4 max-w-4xl"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white">
              Alloui Younes Abdelaziz
            </h1>
            <div className="flex items-center justify-center gap-3">
              <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-white/30" />
              <p className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-white/50">
                Full-Stack Software Engineer
              </p>
              <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-white/30" />
            </div>
          </motion.div>

          {/* Statement */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-white/40 max-w-2xl leading-relaxed"
          >
            Focused on building scalable{' '}
            <span className="text-white/70 font-medium">web</span>,{' '}
            <span className="text-white/70 font-medium">desktop</span>, and{' '}
            <span className="text-white/70 font-medium">mobile applications</span>{' '}
            — clean architecture, type safety, and reliable performance.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto"
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-medium text-sm flex items-center justify-center gap-2.5 bg-white text-black hover:bg-white/90 transition-all duration-200 group cursor-pointer"
            >
              <FolderGit2 className="w-4 h-4" />
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-medium text-sm flex items-center justify-center gap-2.5 glass-panel text-white/70 hover:text-white cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Me</span>
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex items-center gap-3"
          >
            {[
              {
                href: 'https://github.com/1YounesAlloui',
                label: 'GitHub Profile (opens in new tab)',
                icon: <GithubIcon className="w-5 h-5" />,
              },
              {
                href: 'https://www.linkedin.com/in/younes-alloui-14a627250/',
                label: 'LinkedIn Profile (opens in new tab)',
                icon: <LinkedinIcon className="w-5 h-5" />,
              },
              {
                href: 'mailto:younesalloui55@gmail.com',
                label: 'Send email',
                icon: <Mail className="w-5 h-5" />,
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={item.label}
                className="p-2.5 rounded-xl glass-panel text-white/40 hover:text-white transition-all duration-200"
              >
                {item.icon}
              </a>
            ))}
          </motion.div>

          {/* Capability Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-14 w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3"
          >
            {[
              { icon: Layers,     label: 'Full-Stack Web',   desc: 'React & Django' },
              { icon: Code2,      label: 'Cross-Platform',   desc: 'Electron & Mobile' },
              { icon: Database,   label: 'Databases',        desc: 'PostgreSQL & Neon' },
              { icon: Cpu,        label: 'AI Integration',   desc: 'Intelligent Workflows' },
              { icon: Cloud,      label: 'Cloud Deployment', desc: 'Vercel & Render' },
              { icon: FolderGit2, label: 'API Architecture', desc: 'DRF & Secure JWT' },
            ].map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <div
                  key={idx}
                  className="glass-panel p-3.5 rounded-2xl flex flex-col items-center text-center group transition-all duration-200"
                >
                  <Icon className="w-5 h-5 text-white/50 mb-2 transition-transform group-hover:scale-110 group-hover:text-white/80" />
                  <span className="text-xs font-semibold text-white/70">{badge.label}</span>
                  <span className="text-[10px] text-white/30 font-mono mt-0.5">{badge.desc}</span>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
};
