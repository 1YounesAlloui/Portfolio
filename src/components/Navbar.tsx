import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { scrollToSection } from '../lib/utils';

const navLinks = [
  { name: 'Home', href: 'hero' },
  { name: 'Skills', href: 'skills' },
  { name: 'Projects', href: 'projects' },
  { name: 'Contact', href: 'contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = navLinks.map(l => l.href);
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Monogram & Name */}
          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-3 group text-left focus:outline-none focus:ring-2 focus:ring-white/20 rounded-lg p-1"
            aria-label="Alloui Younes Abdelaziz - Back to top"
          >
            <div className="relative w-9 h-9 rounded-xl bg-black/60 border border-white/12 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-white/30">
              <span className="font-mono font-bold text-sm text-white/80">
                AY
              </span>
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/3 pointer-events-none" />
            </div>
            <div>
              <div className="font-semibold text-sm sm:text-base tracking-tight text-white flex items-center gap-2">
                <span>Alloui Younes Abdelaziz</span>
                <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-white/50 animate-pulse" />
              </div>
              <p className="text-xs text-slate-400 font-mono tracking-wider">
                Full-Stack Software Engineer
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5 rounded-full px-4 py-1.5 border border-white/10 bg-black/50 backdrop-blur-xl shadow-black-glass-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-3.5 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-all duration-200 relative ${
                    isActive
                      ? 'text-white bg-white/10 font-semibold'
                      : 'text-white/50 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-3 h-0.5 rounded-full bg-white/60" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action CTA */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNavClick('contact')}
              className="hidden lg:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl text-black bg-white hover:bg-white/90 transition-all duration-200 cursor-pointer"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              className="md:hidden p-2 rounded-xl border border-white/10 bg-black/60 text-white/40 hover:text-white backdrop-blur-md transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#060910]/95 backdrop-blur-2xl px-6 py-6 transition-all duration-300 animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-white/10 text-white font-semibold'
                      : 'text-white/50 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
            <div className="pt-2">
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-medium text-black bg-white hover:bg-white/90"
              >
                <span>Let's Discuss</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
