import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { scrollToSection } from '../lib/utils';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-[#05070d]/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Positioning */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-black/60 border border-white/10 flex items-center justify-center font-mono font-bold text-xs text-white/60">
              AY
            </div>
            <div>
              <div className="font-semibold text-sm text-white">
                Alloui Younes Abdelaziz
              </div>
              <p className="text-xs text-slate-400 font-mono">
                Full-Stack Software Engineer
              </p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/1YounesAlloui"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-xl text-white/30 hover:text-white hover:bg-white/5 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/younes-alloui-14a627250/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-xl text-white/30 hover:text-white hover:bg-white/5 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:younesalloui55@gmail.com"
              aria-label="Email"
              className="p-2 rounded-xl text-white/30 hover:text-white hover:bg-white/5 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={() => scrollToSection('hero')}
            aria-label="Back to top"
            className="flex items-center gap-1.5 text-xs font-mono text-white/30 hover:text-white transition-colors cursor-pointer"
          >
            <span>TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Metadata */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-500 gap-3 text-center sm:text-left">
          <div>
            © {currentYear} Alloui Younes Abdelaziz.
          </div>
          <div className="flex items-center gap-4">
            <span>React + TypeScript + Tailwind</span>
            <span>•</span>
            <span>Vercel Optimized</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
