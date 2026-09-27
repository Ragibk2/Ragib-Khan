import React from 'react';
import { ArrowDownToLine, ArrowRight, ShieldCheck, Laptop, Cpu, Server, Terminal, Sparkles, MapPin } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { profileData } from '../data/profile';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background subtle technology grid and faint ambient gradient */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 20%, rgba(37, 99, 235, 0.15) 0%, transparent 60%), radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)`,
          backgroundSize: '100% 100%, 32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center lg:text-left lg:max-w-none lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center">
          
          {/* Main Hero Column */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8"
          >
            
            {/* Availability / Status indicator - Clean, understated design */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-300 mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-medium text-slate-200">{t.hero.status}</span>
            </div>

            {/* Candidate Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 text-balance">
              {profileData.name}
            </h1>

            {/* Professional Title */}
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-400 mb-2">
              {t.hero.title}
            </h2>

            {/* Secondary Line */}
            <p className="text-sm sm:text-base font-medium text-slate-400 tracking-wide mb-6">
              {t.hero.secondaryTitle}
            </p>

            {/* Professional Introduction Block */}
            <div className="relative border-l-2 border-blue-500/60 pl-4 py-1 mb-8 text-left max-w-2xl mx-auto lg:mx-0">
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                {t.hero.summary}
              </p>
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-10">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all shadow-lg shadow-blue-900/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <span>{t.hero.viewProjects}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
              >
                <ArrowDownToLine className="w-4 h-4 text-blue-400" />
                <span>{t.hero.downloadResume}</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
              >
                <span>{t.hero.contactMe}</span>
              </a>
            </div>

            {/* Unboxed metadata tags with dot separators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-1 text-xs text-slate-400">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{t.hero.location}</span>
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>{t.hero.yearsExp}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>{t.hero.fleets}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>{t.hero.activeLab}</span>
            </div>

          </motion.div>

          {/* Right Visual Card Column - Architecture & Systems Summary Card */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 lg:mt-0 lg:col-span-4"
          >
            <div className="relative rounded-xl border border-slate-800/90 bg-[#0f172a]/80 p-5 backdrop-blur shadow-2xl">
              
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                    {t.hero.engineeringProfile}
                  </span>
                </div>
                <span className="text-xs font-mono text-blue-400">{t.hero.targetTitle}</span>
              </div>

              {/* Technical Profile Snapshot */}
              <div className="space-y-3.5 text-left text-xs">
                
                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                  <div className="flex items-center gap-2 text-slate-200 font-medium mb-1">
                    <Laptop className="w-3.5 h-3.5 text-blue-400" />
                    <span>{t.hero.endpointFleet}</span>
                  </div>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    {t.hero.endpointFleetDesc}
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                  <div className="flex items-center gap-2 text-slate-200 font-medium mb-1">
                    <Terminal className="w-3.5 h-3.5 text-sky-400" />
                    <span>{t.hero.automationScripting}</span>
                  </div>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    {t.hero.automationScriptingDesc}
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                  <div className="flex items-center gap-2 text-slate-200 font-medium mb-1">
                    <Server className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{t.hero.infraCloudPath}</span>
                  </div>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    {t.hero.infraCloudPathDesc}
                  </p>
                </div>

              </div>

              {/* Card Footer Link */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                <span className="text-slate-400">{t.hero.careerDirection}</span>
                <a href="#about" className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1">
                  <span>{t.hero.exploreRoadmap}</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
