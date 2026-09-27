import React, { useState } from 'react';
import { 
  Terminal, 
  Copy, 
  Check, 
  Workflow, 
  Zap, 
  ShieldCheck, 
  Clock, 
  Code2, 
  FileCode, 
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import { automationProcessSteps, automationSamples } from '../data/automation';
import { ScrollReveal } from './ScrollReveal';
import { useLanguage } from '../context/LanguageContext';

export const AutomationLab: React.FC = () => {
  const { t } = useLanguage();
  const [selectedSampleId, setSelectedSampleId] = useState<string>(automationSamples[0].id);
  const [copied, setCopied] = useState(false);

  const selectedSample = automationSamples.find(s => s.id === selectedSampleId) || automationSamples[0];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(selectedSample.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const automationExamples = [
    "Silent Software Deployment",
    "DNS Troubleshooting & Flush",
    "Disk & Profile Cleanup",
    "Hardware & System Info",
    "Network Ping & Gateway Diagnostics",
    "Windows Update Diagnostics",
    "Service Auto-Restart Triggers",
    "PowerShell Fleet Utilities",
    "Telemetry Monitoring Dashboards"
  ];

  return (
    <section id="automation" className="py-20 bg-[#0b0f19] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal className="max-w-3xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            {t.automation.badge}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            {t.automation.heading}
          </h2>
          <blockquote className="border-l-2 border-blue-500/80 pl-4 py-1 text-slate-300 text-sm sm:text-base leading-relaxed italic mb-4">
            "{t.automation.quote}"
          </blockquote>
        </ScrollReveal>

        {/* Visual 8-Step Automation Process Flow */}
        <ScrollReveal delay={0.1} className="rounded-xl border border-slate-800 bg-[#0f172a]/90 p-6 sm:p-8 mb-12 shadow-xl">
          <div className="flex items-center gap-2 mb-6 pb-3 border-b border-slate-800">
            <Workflow className="w-4 h-4 text-blue-400" />
            <h3 className="text-base font-bold text-white">{t.automation.lifecycleHeading}</h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {automationProcessSteps.map((step, idx) => (
              <div 
                key={step.stepNumber}
                className="relative p-3 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-blue-500/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="text-[10px] font-mono text-blue-400 font-bold mb-1">
                    {step.stepNumber}
                  </div>
                  <h4 className="text-xs font-bold text-white mb-1.5 leading-snug">
                    {step.name}
                  </h4>
                  <p className="text-[10px] text-slate-400 leading-tight">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Automation Examples Badge Grid */}
        <ScrollReveal delay={0.15} className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
            {t.automation.modulesHeading}
          </p>
          <div className="flex flex-wrap gap-2">
            {automationExamples.map((ex) => (
              <span
                key={ex}
                className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 font-medium"
              >
                {ex}
              </span>
            ))}
          </div>
        </ScrollReveal>

        {/* Interactive Script Inspector */}
        <ScrollReveal delay={0.2} className="rounded-xl border border-slate-800 bg-[#0f172a] overflow-hidden shadow-2xl">
          
          {/* Header Bar */}
          <div className="px-6 py-4 border-b border-slate-800 bg-slate-900/60 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-3">
              <Terminal className="w-5 h-5 text-blue-400" />
              <div>
                <h3 className="text-sm font-bold text-white">
                  {t.automation.inspectorHeading}
                </h3>
                <p className="text-xs text-slate-400">
                  {t.automation.inspectorSubtitle}
                </p>
              </div>
            </div>

            {/* Language / Category Tag */}
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded text-xs font-mono font-medium bg-blue-950 text-blue-300 border border-blue-800/40">
                {selectedSample.language}
              </span>
              <span className="text-xs text-slate-400">
                {selectedSample.category}
              </span>
            </div>
          </div>

          {/* Script Selectors & Code Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Nav: Script List */}
            <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-slate-800 p-4 space-y-2 bg-[#0b0f19]/60">
              {automationSamples.map((sample) => {
                const isActive = sample.id === selectedSampleId;
                return (
                  <button
                    key={sample.id}
                    type="button"
                    onClick={() => setSelectedSampleId(sample.id)}
                    className={`w-full text-left p-3 rounded-lg border transition-all ${
                      isActive
                        ? 'border-blue-500/60 bg-blue-950/20 text-white shadow-sm'
                        : 'border-slate-800/80 bg-slate-900/40 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-mono text-[11px] text-blue-400 font-semibold">{sample.language}</span>
                      <span className="text-[10px] text-slate-400">{sample.category}</span>
                    </div>
                    <div className="text-xs font-bold text-slate-200 leading-snug mb-1">
                      {sample.title}
                    </div>
                    <p className="text-[11px] text-slate-400 line-clamp-1">
                      {sample.impact}
                    </p>
                  </button>
                );
              })}

              <div className="p-3 rounded-lg border border-slate-800/60 bg-slate-900/30 text-[11px] text-slate-400 mt-4">
                <span className="font-semibold text-slate-300 block mb-1">{t.automation.safetyTitle}</span>
                {t.automation.safetyDesc}
              </div>
            </div>

            {/* Right: Code Display */}
            <div className="lg:col-span-8 flex flex-col justify-between bg-[#0a0e17]">
              
              <div className="p-4 border-b border-slate-800/80 flex items-center justify-between bg-slate-950/60">
                <div>
                  <h4 className="text-xs font-bold text-white mb-0.5">{selectedSample.title}</h4>
                  <p className="text-[11px] text-slate-400">{selectedSample.description}</p>
                </div>

                <button
                  type="button"
                  onClick={handleCopyCode}
                  className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">{t.automation.copied}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-blue-400" />
                      <span>{t.automation.copyCode}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Code Pre Container */}
              <div className="p-4 overflow-x-auto text-xs font-mono text-slate-300 leading-relaxed max-h-96">
                <pre>{selectedSample.code}</pre>
              </div>

              {/* Impact Banner */}
              <div className="p-3 border-t border-slate-800 bg-slate-900/50 flex items-center gap-2 text-xs">
                <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="text-slate-400 font-medium">{t.automation.impact}</span>
                <span className="text-slate-200 font-semibold">{selectedSample.impact}</span>
              </div>

            </div>

          </div>

        </ScrollReveal>

      </div>
    </section>
  );
};
