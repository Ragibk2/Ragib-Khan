import React, { useState } from 'react';
import { 
  Compass, 
  ArrowRight, 
  CheckCircle2, 
  BookOpen, 
  Layers, 
  Server, 
  Cloud, 
  ShieldCheck, 
  Terminal, 
  Laptop 
} from 'lucide-react';
import { learningRoadmapData, careerProgressionSteps } from '../data/learning';
import { ScrollReveal } from './ScrollReveal';
import { useLanguage } from '../context/LanguageContext';

export const LearningRoadmap: React.FC = () => {
  const { t } = useLanguage();
  const [activeDomainId, setActiveDomainId] = useState<string>('intune');

  const activeDomain = learningRoadmapData.find(d => d.id === activeDomainId) || learningRoadmapData[0];

  return (
    <section id="upskilling" className="py-20 bg-[#0b0f19] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal className="max-w-3xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            {t.upskilling.badge}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            {t.upskilling.heading}
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            {t.upskilling.subtitle}
          </p>
        </ScrollReveal>

        {/* Visual 5-Stage Career Progression Roadmap */}
        <ScrollReveal delay={0.1} className="rounded-xl border border-slate-800 bg-[#0f172a]/90 p-6 sm:p-8 mb-16 shadow-xl">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-400">{t.upskilling.roadmapHeading}</p>
              <h3 className="text-lg font-bold text-white">{t.upskilling.roadmapSubtitle}</h3>
            </div>
            <span className="text-xs font-mono text-slate-400">5-Stage Strategy</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {careerProgressionSteps.map((step, idx) => (
              <div 
                key={step.stage}
                className={`p-4 rounded-xl border flex flex-col justify-between ${step.accent}`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-mono font-bold text-[10px] uppercase">{step.stage}</span>
                    <span className="text-[10px] font-semibold">{step.status}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1.5 leading-snug">
                    {step.title}
                  </h4>
                  <p className="text-[11px] text-slate-300 leading-relaxed mb-3">
                    {step.description}
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-800/60 text-[10px] font-medium text-slate-400">
                  {step.badge}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Deep-Dive Domain Tabs */}
        <ScrollReveal delay={0.15} className="rounded-xl border border-slate-800 bg-[#0f172a] overflow-hidden shadow-2xl">
          
          {/* Domain Tab Selector Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-b border-slate-800 bg-slate-900/60">
            {learningRoadmapData.map((domain) => {
              const isActive = domain.id === activeDomainId;
              return (
                <button
                  key={domain.id}
                  type="button"
                  onClick={() => setActiveDomainId(domain.id)}
                  className={`p-4 text-left border-b-2 transition-all ${
                    isActive
                      ? 'border-blue-500 bg-blue-950/20 text-white'
                      : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/40'
                  }`}
                >
                  <span className="text-[10px] font-mono uppercase tracking-wider text-blue-400 block mb-1">
                    {domain.focusArea}
                  </span>
                  <span className="text-xs sm:text-sm font-bold block truncate">
                    {domain.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Domain Detailed Content */}
          <div className="p-6 sm:p-8">
            <div className="max-w-2xl mb-6">
              <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-blue-950 text-blue-400 border border-blue-800/40 mr-2">
                {activeDomain.status}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-2 mb-1">
                {activeDomain.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                {activeDomain.subtitle}
              </p>
            </div>

            {/* Topics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeDomain.topics.map((topic, i) => (
                <div 
                  key={i}
                  className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                      <h4 className="text-sm font-bold text-white">{topic.title}</h4>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed mb-3 pl-6">
                      {topic.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-800/60 pl-6 text-[11px]">
                    <span className="text-sky-400 font-semibold block mb-0.5">{t.upskilling.handsOnLab}:</span>
                    <span className="text-slate-400">{topic.handsOnLab}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </ScrollReveal>

      </div>
    </section>
  );
};
