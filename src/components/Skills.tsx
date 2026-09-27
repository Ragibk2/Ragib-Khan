import React, { useState } from 'react';
import { 
  Laptop, 
  Server, 
  Network, 
  Terminal, 
  Wrench, 
  Code, 
  CheckCircle2, 
  BookOpen, 
  Clock, 
  Search, 
  ExternalLink 
} from 'lucide-react';
import { skillsDatabase, SkillStatus } from '../data/skills';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';
import { useLanguage } from '../context/LanguageContext';

export const Skills: React.FC = () => {
  const { t } = useLanguage();
  const [activeStatusFilter, setActiveStatusFilter] = useState<'All' | SkillStatus>('All');
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('All');

  const categories = [
    'All',
    'Operating Systems',
    'Endpoint & Support',
    'Networking',
    'Enterprise Tools',
    'Programming & Automation',
    'Cloud & Systems'
  ];

  const filteredSkills = skillsDatabase.filter((skill) => {
    const matchesStatus = activeStatusFilter === 'All' || skill.status === activeStatusFilter;
    const matchesCategory = activeCategoryFilter === 'All' || skill.category === activeCategoryFilter;
    return matchesStatus && matchesCategory;
  });

  // Count by status
  const professionalCount = skillsDatabase.filter(s => s.status === 'Professional Experience').length;
  const workingCount = skillsDatabase.filter(s => s.status === 'Working Knowledge').length;
  const learningCount = skillsDatabase.filter(s => s.status === 'Currently Learning').length;

  return (
    <section id="skills" className="py-20 bg-[#0b0f19] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal className="max-w-3xl mb-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            {t.skills.badge}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            {t.skills.heading}
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            {t.skills.subtitle}
          </p>
        </ScrollReveal>

        {/* Status Filter Cards / Segmented Controls */}
        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          
          <button
            type="button"
            onClick={() => setActiveStatusFilter(activeStatusFilter === 'Professional Experience' ? 'All' : 'Professional Experience')}
            className={`p-4 rounded-xl border text-left transition-all ${
              activeStatusFilter === 'Professional Experience'
                ? 'border-blue-500 bg-blue-950/30 ring-1 ring-blue-500/50'
                : 'border-slate-800 bg-[#0f172a]/80 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                Tier 1
              </span>
              <span className="text-xs font-mono text-slate-400 tabular-nums">{professionalCount} Skills</span>
            </div>
            <h3 className="text-base font-bold text-white mb-1">{t.skills.tier1}</h3>
            <p className="text-xs text-slate-400 leading-snug">
              {t.skills.tier1Desc}
            </p>
          </button>

          <button
            type="button"
            onClick={() => setActiveStatusFilter(activeStatusFilter === 'Working Knowledge' ? 'All' : 'Working Knowledge')}
            className={`p-4 rounded-xl border text-left transition-all ${
              activeStatusFilter === 'Working Knowledge'
                ? 'border-sky-500 bg-sky-950/30 ring-1 ring-sky-500/50'
                : 'border-slate-800 bg-[#0f172a]/80 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-sky-400">
                Tier 2
              </span>
              <span className="text-xs font-mono text-slate-400 tabular-nums">{workingCount} Skills</span>
            </div>
            <h3 className="text-base font-bold text-white mb-1">{t.skills.tier2}</h3>
            <p className="text-xs text-slate-400 leading-snug">
              {t.skills.tier2Desc}
            </p>
          </button>

          <button
            type="button"
            onClick={() => setActiveStatusFilter(activeStatusFilter === 'Currently Learning' ? 'All' : 'Currently Learning')}
            className={`p-4 rounded-xl border text-left transition-all ${
              activeStatusFilter === 'Currently Learning'
                ? 'border-indigo-500 bg-indigo-950/30 ring-1 ring-indigo-500/50'
                : 'border-slate-800 bg-[#0f172a]/80 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
                Tier 3
              </span>
              <span className="text-xs font-mono text-slate-400 tabular-nums">{learningCount} Skills</span>
            </div>
            <h3 className="text-base font-bold text-white mb-1">{t.skills.tier3}</h3>
            <p className="text-xs text-slate-400 leading-snug">
              {t.skills.tier3Desc}
            </p>
          </button>

          </div>
        </ScrollReveal>

        {/* Category Filter Tabs */}
        <ScrollReveal delay={0.15}>
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none text-xs">
          <span className="text-slate-400 font-medium whitespace-nowrap mr-2">{t.skills.filterCategory}:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategoryFilter(cat)}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap font-medium transition-colors ${
                activeCategoryFilter === cat
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
          {activeStatusFilter !== 'All' && (
            <button
              type="button"
              onClick={() => setActiveStatusFilter('All')}
              className="text-xs text-slate-400 hover:text-white underline ml-2 whitespace-nowrap"
            >
              {t.skills.clearFilter}
            </button>
          )}
          </div>
        </ScrollReveal>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => {
            const isPro = skill.status === 'Professional Experience';
            const isWorking = skill.status === 'Working Knowledge';
            const isLearning = skill.status === 'Currently Learning';

            return (
              <div
                key={skill.id}
                className="rounded-xl border border-slate-800 bg-[#0f172a]/70 hover:border-slate-700 p-5 flex flex-col justify-between transition-all"
              >
                <div>
                  
                  {/* Card Header: Category & Status */}
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span>{skill.category}</span>
                    <span 
                      className={`font-medium ${
                        isPro ? 'text-blue-400' : isWorking ? 'text-sky-400' : 'text-indigo-400'
                      }`}
                    >
                      {skill.status}
                    </span>
                  </div>

                  {/* Skill Name */}
                  <h4 className="text-base font-bold text-white mb-3">
                    {skill.name}
                  </h4>

                  {/* Experience Highlight Bullet Points */}
                  <div className="space-y-1.5 mb-4 text-xs text-slate-300">
                    {skill.whatIKnow.slice(0, 3).map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="text-blue-400 font-bold">·</span>
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Card Footer: Lab / Learning Focus & Related Project */}
                <div className="pt-3 border-t border-slate-800/80 text-[11px] space-y-1">
                  {skill.whatIAmLearning.length > 0 && (
                    <div className="text-slate-400 flex items-start gap-1">
                      <span className="text-sky-400 font-semibold shrink-0">{t.skills.focus}:</span>
                      <span className="truncate">{skill.whatIAmLearning[0]}</span>
                    </div>
                  )}
                  {skill.relatedProjects.length > 0 && (
                    <div className="text-slate-500 flex items-center gap-1">
                      <span className="shrink-0">{t.skills.appliedIn}:</span>
                      <span className="text-slate-400 font-medium truncate">{skill.relatedProjects.join(', ')}</span>
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>

        {/* Quick link to detailed Skills & Technology Updates Search */}
        <ScrollReveal delay={0.2} className="mt-10 text-center">
          <a
            href="#search-skills"
            className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
          >
            <Search className="w-3.5 h-3.5" />
            <span>{t.skills.searchPrompt}</span>
          </a>
        </ScrollReveal>

      </div>
    </section>
  );
};
