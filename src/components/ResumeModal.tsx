import React from 'react';
import { X, ArrowDownToLine, Printer, Mail, Phone, MapPin, ExternalLink, CheckCircle2 } from 'lucide-react';
import { profileData } from '../data/profile';
import { experiencesData } from '../data/experience';
import { projectsData } from '../data/projects';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-white text-slate-900 rounded-2xl shadow-2xl overflow-hidden max-h-[95vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar (Screen only, hidden on print) */}
        <div className="no-print px-6 py-3.5 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
              Official Resume Preview
            </span>
            <span className="text-xs text-slate-400">· Ragib Khan</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 border border-slate-700 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Resume</span>
            </button>

            <a
              href="/resume/Ragib-Khan-Resume.pdf"
              download="Ragib-Khan-Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white transition-colors"
            >
              <ArrowDownToLine className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors ml-2"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="overflow-y-auto p-8 sm:p-12 text-slate-800 text-xs leading-normal font-sans">
          
          {/* Header */}
          <div className="border-b-2 border-slate-800 pb-5 mb-6">
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-1">
              {profileData.name}
            </h1>
            <p className="text-sm font-bold text-blue-700 mb-3">
              {profileData.title}
            </p>

            {/* Contact details */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                <a href={`mailto:${profileData.email}`} className="hover:underline">{profileData.email}</a>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-slate-500" />
                <a href={`tel:${profileData.phone}`} className="hover:underline">{profileData.phone}</a>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>{profileData.location}</span>
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Professional Summary
            </h2>
            <p className="text-slate-700 leading-relaxed text-xs">
              {profileData.summary} Proven track record across corporate newsroom, media, and enterprise setups maintaining high SLA compliance, managing VIP support, and building custom PowerShell and C# automation utilities to streamline operations.
            </p>
          </div>

          {/* Experience */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-3">
              Professional Experience
            </h2>

            <div className="space-y-4">
              {experiencesData.map((exp) => (
                <div key={exp.id}>
                  <div className="flex items-baseline justify-between mb-0.5">
                    <span className="text-sm font-bold text-slate-900">{exp.role}</span>
                    <span className="text-xs font-semibold text-slate-600 tabular-nums">{exp.period}</span>
                  </div>
                  <div className="text-xs font-semibold text-slate-700 mb-1.5">
                    {exp.company} {exp.client && `– ${exp.client}`}, {exp.location}
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-slate-700 pl-1 text-[11px] leading-relaxed">
                    {exp.responsibilities.map((r, idx) => (
                      <li key={idx}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills Overview */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Technical Competencies
            </h2>
            <div className="space-y-1.5 text-[11px] text-slate-700">
              <p><strong className="text-slate-900">Operating Systems:</strong> Windows 10/11, macOS (MacBook Pro/Air, iMac), Windows Server 2022 (Lab), Ubuntu Linux (Lab).</p>
              <p><strong className="text-slate-900">Endpoint & IT Support:</strong> Desktop Support L2, Hardware/Software Diagnostics, Driver & BIOS Troubleshooting, BitLocker, Asset Management, Remote Support (TeamViewer, AnyDesk, RDP).</p>
              <p><strong className="text-slate-900">Networking:</strong> TCP/IP, DNS Troubleshooting, DHCP, Client VPN (FortiClient, Cisco), WFH Support, LAN/WAN.</p>
              <p><strong className="text-slate-900">Enterprise Applications:</strong> Microsoft 365, Outlook, Google Workspace, ManageEngine AssetExplorer / ServiceDesk.</p>
              <p><strong className="text-slate-900">Tooling & Scripting:</strong> PowerShell, C# (.NET WinForms), Node.js, TypeScript, React, REST APIs, Git, GitHub.</p>
              <p><strong className="text-slate-900">Current Upskilling:</strong> Microsoft Intune, SCCM, Azure Cloud (AZ-900/AZ-104), Active Directory Domain Services, Group Policy Objects.</p>
            </div>
          </div>

          {/* Featured Projects */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Featured Personal & Lab Projects
            </h2>
            <div className="space-y-2 text-[11px] text-slate-700">
              <div>
                <strong className="text-slate-900">PulseX:</strong> AI-assisted news & market intelligence platform aggregating domestic & world indices, tech, and cybersecurity feeds (React, TypeScript, Node.js, REST APIs).
              </div>
              <div>
                <strong className="text-slate-900">HT IT Automation Suite (Personal Project):</strong> Support & deployment automation desktop utility featuring one-click DNS flush, disk cleanup, and silent software package deployments (C#, .NET, PowerShell).
              </div>
              <div>
                <strong className="text-slate-900">HT IT Monitor Tool (Personal Lab):</strong> Agentless Windows domain computer monitoring using Active Directory discovery, PowerShell WinRM/WMI, and web telemetry dashboards.
              </div>
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                Education
              </h2>
              <div className="space-y-1 text-[11px] text-slate-700">
                <p><strong className="text-slate-900">Bachelor of Arts (B.A.)</strong> – Bareilly College, Bareilly</p>
                <p><strong className="text-slate-900">Intermediate (PCM)</strong> – U.P. Board</p>
                <p><strong className="text-slate-900">High School (PCM)</strong> – U.P. Board</p>
              </div>
            </div>

            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                Certifications & Training
              </h2>
              <div className="space-y-1 text-[11px] text-slate-700">
                <p><strong className="text-slate-900">Syscom Institute:</strong> Hardware & Networking (Completed)</p>
                <p><strong className="text-slate-900">Active Study:</strong> Azure Fundamentals (AZ-900), Azure Administrator (AZ-104), M365 Endpoint Admin (MD-102)</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
