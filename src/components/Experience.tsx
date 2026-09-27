import React from 'react';
import { Calendar, MapPin, Building2, CheckCircle2 } from 'lucide-react';
import { experiencesData } from '../data/experience';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';
import { useLanguage } from '../context/LanguageContext';

export const Experience: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-20 bg-[#0b0f19] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal className="max-w-3xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            {t.experience.badge}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            {t.experience.heading}
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            {t.experience.subtitle}
          </p>
        </ScrollReveal>

        {/* Timeline List */}
        <StaggerContainer className="space-y-8" staggerDelay={0.12}>
          {experiencesData.map((exp, index) => (
            <StaggerItem key={exp.id}>
              <div
                className={`relative rounded-xl border transition-all ${
                  exp.isCurrent
                    ? 'border-blue-500/40 bg-gradient-to-r from-blue-950/20 via-[#0f172a] to-[#0f172a] shadow-lg shadow-blue-950/20'
                    : 'border-slate-800 bg-[#0f172a]/70 hover:border-slate-700'
                } p-6 sm:p-8`}
              >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    {exp.isCurrent && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/30">
                        {t.experience.currentRole}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-300">
                    <span className="flex items-center gap-1.5 font-medium text-slate-200">
                      <Building2 className="w-4 h-4 text-blue-400" />
                      <span>{exp.company}</span>
                    </span>
                    {exp.client && (
                      <>
                        <span aria-hidden="true" className="text-slate-600">·</span>
                        <span className="text-slate-400">{t.experience.client}: {exp.client}</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Period & Location Metadata */}
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 font-medium">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-blue-400" />
                    <span className="tabular-nums">{exp.period}</span>
                  </span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{exp.location}</span>
                  </span>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="mb-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                  {t.experience.keyDeliverables}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs text-slate-300">
                  {exp.responsibilities.map((resp, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Tags - Clean unboxed text with subtle separator or clean micro chips */}
              <div className="pt-4 border-t border-slate-800/80">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-medium text-slate-400 mr-1">{t.experience.technologies}</span>
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-xs bg-slate-900 border border-slate-800 text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
};
