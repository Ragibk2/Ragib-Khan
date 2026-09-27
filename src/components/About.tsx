import React from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Compass, 
  GraduationCap, 
  Award, 
  Sparkles, 
  Terminal, 
  Layers, 
  ShieldCheck, 
  Briefcase 
} from 'lucide-react';
import { profileData } from '../data/profile';
import { careerProgressionSteps } from '../data/learning';
import { ScrollReveal } from './ScrollReveal';
import { useLanguage } from '../context/LanguageContext';

export const About: React.FC = () => {
  const { t } = useLanguage();

  const experienceAreas = [
    "Windows 10 / 11 Support",
    "macOS (MacBook, iMac) Support",
    "Endpoint & Hardware Triage",
    "Software & Driver Diagnostics",
    "VPN & Remote Access Config",
    "Remote Desktop & VIP Support",
    "IT Asset & Inventory Management",
    "Daily Corporate IT Operations",
    "Microsoft 365 & Exchange Online",
    "Google Workspace Management",
    "Enterprise Line-of-Business Apps",
    "Network Printers & Queues",
    "LAN / WAN & DNS Troubleshooting"
  ];

  const currentDevelopmentFocus = [
    "SCCM / Configuration Manager",
    "Microsoft Azure (AZ-900 / AZ-104)",
    "Microsoft Intune & Endpoint Management",
    "Microsoft 365 Administration",
    "Windows Server & Active Directory",
    "Hybrid Cloud Identity (Entra ID)",
    "PowerShell Scripting & Tooling",
    "Infrastructure & System Automation"
  ];

  return (
    <section id="about" className="py-20 bg-[#0b0f19] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal className="max-w-3xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            {t.about.badge}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            {t.about.heading}
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            {t.about.bio}
          </p>
        </ScrollReveal>

        {/* 2-Column Core Competency & Focus */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Left Column: Areas of Experience */}
          <ScrollReveal direction="left" delay={0.1} className="lg:col-span-6 rounded-xl border border-slate-800 bg-[#0f172a]/70 p-6">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-800">
              <Briefcase className="w-4 h-4 text-blue-400" />
              <h3 className="text-base font-semibold text-white">{t.about.areasExpTitle}</h3>
            </div>
            
            <p className="text-xs text-slate-400 mb-4">
              {t.about.areasExpSubtitle}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {experienceAreas.map((area) => (
                <div key={area} className="flex items-center gap-2 py-1 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Right Column: Current Development Focus */}
          <ScrollReveal direction="right" delay={0.15} className="lg:col-span-6 rounded-xl border border-slate-800 bg-[#0f172a]/70 p-6">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-800">
              <Terminal className="w-4 h-4 text-sky-400" />
              <h3 className="text-base font-semibold text-white">{t.about.currentFocusTitle}</h3>
            </div>

            <p className="text-xs text-slate-400 mb-4">
              {t.about.currentFocusSubtitle}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {currentDevelopmentFocus.map((focus) => (
                <div key={focus} className="flex items-center gap-2 py-1 text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0"></div>
                  <span>{focus}</span>
                </div>
              ))}
            </div>

            {/* Quote on Engineering Philosophy */}
            <div className="mt-6 pt-4 border-t border-slate-800/80">
              <p className="text-xs italic text-slate-400 leading-relaxed">
                "{t.about.quote}"
              </p>
            </div>
          </ScrollReveal>

        </div>

        {/* Visual Career Direction Roadmap */}
        <ScrollReveal delay={0.2} className="rounded-xl border border-slate-800 bg-[#0f172a]/90 p-6 sm:p-8 mb-16 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-slate-800">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-400">{t.about.trajectoryBadge}</p>
              <h3 className="text-xl font-bold text-white">{t.about.trajectoryHeading}</h3>
            </div>
            <span className="text-xs text-slate-400 mt-2 sm:mt-0">
              {t.about.trajectorySubtitle}
            </span>
          </div>

          {/* Horizontal / Stacked Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {profileData.careerDirection.map((stage, idx) => {
              const isFirst = idx === 0;
              const isSecond = idx === 1;
              return (
                <div 
                  key={stage} 
                  className={`p-4 rounded-lg border transition-all ${
                    isFirst 
                      ? 'border-blue-500/50 bg-blue-950/20' 
                      : isSecond 
                        ? 'border-sky-500/40 bg-sky-950/20' 
                        : 'border-slate-800 bg-slate-900/50'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span className="font-mono">Phase 0{idx + 1}</span>
                    {isFirst && <span className="text-blue-400 font-semibold text-[11px]">Active Base (6+ Yrs)</span>}
                    {isSecond && <span className="text-sky-400 font-semibold text-[11px]">Primary Target</span>}
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">{stage}</h4>
                  <p className="text-[11px] text-slate-400 leading-snug">
                    {idx === 0 && "Hardware, OS, enterprise VPN, VIP desktop triage & asset lifecycle."}
                    {idx === 1 && "Active Directory, Group Policy, Windows Server 2022, DNS & DHCP."}
                    {idx === 2 && "Microsoft Intune, SCCM co-management, Autopilot & Win32 packaging."}
                    {idx === 3 && "Hybrid Azure infrastructure, Entra ID identity governance & automation."}
                  </p>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        {/* 3-Column Split: Education, Certifications & Soft Skills */}
        <ScrollReveal delay={0.25}>
          <div id="education" className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Education */}
            <div className="rounded-xl border border-slate-800 bg-[#0f172a]/60 p-6">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-800">
                <GraduationCap className="w-4 h-4 text-blue-400" />
                <h3 className="text-base font-semibold text-white">{t.about.educationHeading}</h3>
              </div>
              <div className="space-y-4 text-xs">
                {profileData.education.map((edu, idx) => (
                  <div key={idx} className="pb-3 border-b border-slate-800/60 last:border-b-0 last:pb-0">
                    <h4 className="font-semibold text-slate-200 text-sm">{edu.degree}</h4>
                    <p className="text-slate-400">{edu.institution}</p>
                    {edu.field && <p className="text-slate-500 text-[11px] mt-0.5">{edu.field}</p>}
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications & Training */}
            <div className="rounded-xl border border-slate-800 bg-[#0f172a]/60 p-6">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-800">
                <Award className="w-4 h-4 text-sky-400" />
                <h3 className="text-base font-semibold text-white">{t.about.certsHeading}</h3>
              </div>
              
              <div className="mb-4">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                  {t.about.completedCerts}
                </span>
                {profileData.certifications.completed.map((cert, idx) => (
                  <div key={idx} className="p-2.5 rounded bg-slate-900/80 border border-slate-800 text-xs">
                    <div className="font-semibold text-white">{cert.name}</div>
                    <div className="text-slate-400 text-[11px]">{cert.issuer}</div>
                  </div>
                ))}
              </div>

              <div>
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                  {t.about.plannedCerts}
                </span>
                <div className="space-y-2 text-xs">
                  {profileData.certifications.planned.map((cert, idx) => (
                    <div key={idx} className="p-2 rounded bg-slate-900/50 border border-slate-800/60">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-slate-300">{cert.name}</span>
                        <span className="text-[10px] text-sky-400 font-mono">Planned</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Soft Skills */}
            <div className="rounded-xl border border-slate-800 bg-[#0f172a]/60 p-6">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-800">
                <ShieldCheck className="w-4 h-4 text-indigo-400" />
                <h3 className="text-base font-semibold text-white">{t.about.softSkillsHeading}</h3>
              </div>
              <p className="text-xs text-slate-400 mb-4">
                {t.about.softSkillsDesc}
              </p>
              <div className="flex flex-wrap gap-2">
                {profileData.softSkills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-xs text-slate-300 font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
