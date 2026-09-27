import React, { useState, useMemo } from 'react';
import { 
  Search, 
  ExternalLink, 
  BookOpen, 
  CheckCircle2, 
  Terminal, 
  Sparkles, 
  X, 
  Layers, 
  FolderGit2, 
  Filter 
} from 'lucide-react';
import { skillsDatabase, SkillItem } from '../data/skills';
import { ScrollReveal } from './ScrollReveal';
import { useLanguage } from '../context/LanguageContext';

export const SkillsSearch: React.FC = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const presetSearchChips = [
    "Azure",
    "Intune",
    "SCCM",
    "PowerShell",
    "Active Directory",
    "Microsoft 365",
    "macOS",
    "Windows 11",
    "Linux",
    "VPN",
    "TypeScript",
    "C#"
  ];

  const filteredSkills = useMemo(() => {
    return skillsDatabase.filter((skill) => {
      const matchesCategory = selectedCategory === 'All' || skill.category === selectedCategory;
      if (!matchesCategory) return false;

      if (!searchTerm.trim()) return true;

      const q = searchTerm.toLowerCase();
      const inName = skill.name.toLowerCase().includes(q);
      const inCat = skill.category.toLowerCase().includes(q);
      const inStatus = skill.status.toLowerCase().includes(q);
      const inWhatIKnow = skill.whatIKnow.some(item => item.toLowerCase().includes(q));
      const inWhatIAmLearning = skill.whatIAmLearning.some(item => item.toLowerCase().includes(q));
      const inTopics = skill.recommendedTopics.some(item => item.toLowerCase().includes(q));
      const inProjects = skill.relatedProjects.some(item => item.toLowerCase().includes(q));

      return inName || inCat || inStatus || inWhatIKnow || inWhatIAmLearning || inTopics || inProjects;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <section id="search-skills" className="py-20 bg-[#0b0f19] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal className="max-w-3xl mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            {t.search.badge}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            {t.search.heading}
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            {t.search.subtitle}
          </p>
        </ScrollReveal>

        {/* Search Bar & Quick Filter Chips */}
        <ScrollReveal delay={0.1} className="rounded-xl border border-slate-800 bg-[#0f172a] p-6 mb-8 shadow-xl">
          
          <div className="relative mb-4">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={t.search.inputPlaceholder}
              className="w-full pl-12 pr-10 py-3 rounded-lg bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-1"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Quick preset chips */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="text-slate-400 font-medium">{t.search.quickSuggestions}:</span>
            {presetSearchChips.map((chip) => (
              <button
                key={chip}
                type="button"
                onClick={() => setSearchTerm(chip)}
                className={`px-2.5 py-1 rounded text-xs transition-colors ${
                  searchTerm.toLowerCase() === chip.toLowerCase()
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800'
                }`}
              >
                {chip}
              </button>
            ))}
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="text-xs text-blue-400 hover:text-blue-300 underline ml-2"
              >
                {t.search.resetSearch}
              </button>
            )}
          </div>

          {/* Architecture Transparency Notice */}
          <div className="mt-4 pt-4 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center justify-between">
            <span>
              Data Source: Structured local repository (<code className="text-slate-300">src/data/skills.ts</code>) with extensibility hooks for cloud search APIs.
            </span>
            <span className="font-mono text-slate-300">{filteredSkills.length} {t.search.matchesFound}</span>
          </div>

        </ScrollReveal>

        {/* Results Grid */}
        {filteredSkills.length === 0 ? (
          <div className="rounded-xl border border-slate-800 bg-[#0f172a]/50 p-12 text-center">
            <Search className="w-8 h-8 text-slate-600 mx-auto mb-3" />
            <h4 className="text-base font-bold text-white mb-1">{t.search.noResults}</h4>
            <p className="text-xs text-slate-400 max-w-md mx-auto mb-4">
              {t.search.noResultsDesc}
            </p>
            <button
              type="button"
              onClick={() => setSearchTerm('')}
              className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500"
            >
              {t.search.resetSearch}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredSkills.map((skill) => (
              <div
                key={skill.id}
                className="rounded-xl border border-slate-800 bg-[#0f172a]/80 hover:border-slate-700 p-6 flex flex-col justify-between shadow-lg transition-all"
              >
                <div>
                  
                  {/* Top Bar: Category & Status */}
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-slate-400 font-mono text-[11px] uppercase tracking-wider">
                      {skill.category}
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded text-[11px] font-semibold border ${
                        skill.status === 'Professional Experience'
                          ? 'bg-blue-950/60 text-blue-300 border-blue-800/50'
                          : skill.status === 'Working Knowledge'
                            ? 'bg-sky-950/60 text-sky-300 border-sky-800/50'
                            : 'bg-indigo-950/60 text-indigo-300 border-indigo-800/50'
                      }`}
                    >
                      {skill.status}
                    </span>
                  </div>

                  {/* Technology Name */}
                  <h3 className="text-xl font-bold text-white mb-4">
                    {skill.name}
                  </h3>

                  {/* What I Already Know */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                      <span>{t.search.whatIKnow}</span>
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {skill.whatIKnow.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-blue-400 font-bold">·</span>
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* What I Am Learning */}
                  {skill.whatIAmLearning.length > 0 && (
                    <div className="mb-4 pt-3 border-t border-slate-800/80">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2 flex items-center gap-1.5">
                        <Terminal className="w-3.5 h-3.5" />
                        <span>{t.search.whatIAmLearning}</span>
                      </h4>
                      <ul className="space-y-1.5 text-xs text-slate-300">
                        {skill.whatIAmLearning.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-sky-400 font-bold">↳</span>
                            <span className="leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Recommended Learning Topics */}
                  {skill.recommendedTopics.length > 0 && (
                    <div className="mb-4 pt-3 border-t border-slate-800/80">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                        {t.search.recommendedTopics}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {skill.recommendedTopics.map((top) => (
                          <span
                            key={top}
                            className="px-2 py-0.5 rounded text-[11px] bg-slate-900 border border-slate-800 text-slate-300"
                          >
                            {top}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                </div>

                {/* Footer: Related Projects & Official Docs */}
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                  <div>
                    {skill.relatedProjects.length > 0 && (
                      <span className="text-slate-400 text-[11px]">
                        {t.search.relatedProjects}: <span className="text-slate-200 font-medium">{skill.relatedProjects.join(', ')}</span>
                      </span>
                    )}
                  </div>

                  {skill.docUrl && (
                    <a
                      href={skill.docUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-semibold"
                    >
                      <span>{t.search.officialDocs}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
