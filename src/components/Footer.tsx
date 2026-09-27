import React from 'react';
import { ArrowUp, Terminal, Shield, Mail, Phone, MapPin } from 'lucide-react';
import { profileData } from '../data/profile';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070b13] border-t border-slate-800/80 py-12 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 3-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800/80">
          
          {/* Col 1: Bio & Wordmark */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center text-white">
                <Terminal className="w-3.5 h-3.5" />
              </div>
              <span className="text-sm font-bold text-white tracking-tight">Ragib Khan</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm mb-4">
              Experienced Desktop Support Engineer (L2) with 6+ years corporate IT experience advancing into System Administration, Endpoint Management, Cloud, and Infrastructure Automation.
            </p>
            <div className="text-[11px] text-slate-400">
              Delhi, India · ragibk2@gmail.com
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-3">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a href="#about" className="hover:text-blue-400 transition-colors">About & Summary</a>
              <a href="#experience" className="hover:text-blue-400 transition-colors">Experience Timeline</a>
              <a href="#skills" className="hover:text-blue-400 transition-colors">Skills Dashboard</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors">Featured Projects</a>
              <a href="#automation" className="hover:text-blue-400 transition-colors">Automation Lab</a>
              <a href="#lab" className="hover:text-blue-400 transition-colors">Infrastructure Lab</a>
              <a href="#upskilling" className="hover:text-blue-400 transition-colors">Upskilling Roadmap</a>
              <a href="#resume" className="hover:text-blue-400 transition-colors">Resume & PDF</a>
            </div>
          </div>

          {/* Col 3: Integrity & Privacy Disclaimer */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-3 flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-blue-400" />
              <span>Integrity & Privacy</span>
            </h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              PulseX, HT IT Automation Suite, and HT IT Monitor Tool are personal and lab projects inspired by enterprise IT support workflows. All IP addresses, domains, and configurations displayed are sanitized demo data.
            </p>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} Ragib Khan. All rights reserved.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
