import React from 'react';
import { 
  ArrowDownToLine, 
  Eye, 
  FileText, 
  Printer, 
  CheckCircle2, 
  Info,
  Calendar,
  Building,
  GraduationCap
} from 'lucide-react';
import { profileData } from '../data/profile';
import { ScrollReveal } from './ScrollReveal';
import { useLanguage } from '../context/LanguageContext';

interface ResumeSectionProps {
  onOpenResumeModal: () => void;
}

export const Resume: React.FC<ResumeSectionProps> = ({ onOpenResumeModal }) => {
  const { t } = useLanguage();

  return (
    <section id="resume" className="py-20 bg-[#0b0f19] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal className="max-w-3xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            {t.resume.badge}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            {t.resume.heading}
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            {t.resume.subtitle}
          </p>
        </ScrollReveal>

        {/* Action Banner Card */}
        <ScrollReveal delay={0.1} className="rounded-2xl border border-slate-800 bg-gradient-to-br from-[#0f172a] via-[#0f172a] to-blue-950/20 p-8 sm:p-10 mb-12 shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{t.resume.cardTitle}</h3>
                  <span className="text-xs text-slate-400">{t.resume.cardSub}</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                {t.resume.cardDesc}
              </p>

              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                  <span>{t.resume.verified}</span>
                </span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                  <span>{t.resume.fleets}</span>
                </span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                  <span>{t.resume.atsOptimized}</span>
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <a
                href="/resume/Ragib-Khan-Resume.pdf"
                download="Ragib-Khan-Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-all shadow-lg shadow-blue-900/30"
              >
                <ArrowDownToLine className="w-4 h-4" />
                <span>{t.resume.btnDownload}</span>
              </a>

              <button
                type="button"
                onClick={onOpenResumeModal}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-semibold border border-slate-700 transition-all"
              >
                <Eye className="w-4 h-4 text-blue-400" />
                <span>{t.resume.btnView}</span>
              </button>
            </div>

          </div>

          {/* Setup note for user */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-start gap-3 text-xs text-slate-400">
            <Info className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
            <div>
              <span className="text-slate-300 font-semibold">Resume PDF: </span>
              {t.resume.locationNote}
            </div>
          </div>

        </ScrollReveal>

      </div>
    </section>
  );
};
