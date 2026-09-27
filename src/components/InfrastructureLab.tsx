import React, { useState } from 'react';
import { 
  Server, 
  Network, 
  ShieldCheck, 
  FolderTree, 
  Cpu, 
  HardDrive, 
  CheckCircle2, 
  ArrowDown, 
  Globe, 
  Router, 
  Layers, 
  Laptop, 
  Users, 
  FileCode, 
  Terminal, 
  Activity 
} from 'lucide-react';
import { labNodesData, adHierarchySections, labActivitiesList, LabNode } from '../data/infrastructure';
import { ScrollReveal } from './ScrollReveal';
import { useLanguage } from '../context/LanguageContext';

export const InfrastructureLab: React.FC = () => {
  const { t } = useLanguage();
  const [selectedNode, setSelectedNode] = useState<LabNode>(labNodesData[1]); // Default to Primary DC
  const [activeTab, setActiveTab] = useState<'topology' | 'directory-tree' | 'activities'>('topology');

  return (
    <section id="lab" className="py-20 bg-[#0b0f19] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded text-[11px] font-semibold bg-blue-950/80 text-blue-300 border border-blue-800/40 mb-2">
              {t.lab.badge}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
              {t.lab.heading}
            </h2>
            <p className="text-slate-400 text-base max-w-2xl leading-relaxed">
              {t.lab.subtitle}
            </p>
          </div>

          {/* Sub-Tabs Navigation */}
          <div className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-lg text-xs font-medium self-start md:self-auto">
            <button
              type="button"
              onClick={() => setActiveTab('topology')}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                activeTab === 'topology'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.lab.tabTopology}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('directory-tree')}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                activeTab === 'directory-tree'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.lab.tabAdTree}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('activities')}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                activeTab === 'activities'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.lab.tabActivities}
            </button>
          </div>
        </ScrollReveal>

        {/* TAB 1: INTERACTIVE TOPOLOGY & NODE INSPECTOR */}
        {activeTab === 'topology' && (
          <ScrollReveal delay={0.1} className="space-y-8">
            
            {/* Visual Architecture Flow Diagram */}
            <div className="rounded-xl border border-slate-800 bg-[#0f172a]/90 p-6 shadow-xl">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800 text-xs text-slate-400">
                <span className="font-semibold text-slate-200">{t.lab.topologyHeading}</span>
                <span className="font-mono text-blue-400">Subnet: 192.168.10.0/24 (Lab Segment)</span>
              </div>

              {/* Tier Flow */}
              <div className="flex flex-col items-center space-y-4">
                
                {/* Level 1: Internet & Gateway */}
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-2 text-xs font-semibold text-slate-300">
                    <Globe className="w-4 h-4 text-sky-400" />
                    <span>Internet Upstream</span>
                  </div>
                  <span className="text-slate-600">→</span>
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-2 text-xs font-semibold text-slate-300">
                    <Router className="w-4 h-4 text-blue-400" />
                    <span>Edge Router / NAT Gateway</span>
                  </div>
                </div>

                <ArrowDown className="w-4 h-4 text-slate-600" />

                {/* Level 2: Virtualization Host */}
                <div className="w-full max-w-xl p-4 rounded-xl bg-blue-950/20 border border-blue-500/30 text-center">
                  <div className="flex items-center justify-center gap-2 text-sm font-bold text-white mb-1">
                    <Layers className="w-4 h-4 text-blue-400" />
                    <span>{t.lab.hostTitle}</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    {t.lab.hostDesc}
                  </p>
                </div>

                <ArrowDown className="w-4 h-4 text-slate-600" />

                {/* Level 3: Virtual Machines Cluster */}
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                  {labNodesData.map((node) => {
                    const isSelected = selectedNode.id === node.id;
                    return (
                      <button
                        key={node.id}
                        type="button"
                        onClick={() => setSelectedNode(node)}
                        className={`p-3 rounded-xl border text-left transition-all ${
                          isSelected
                            ? 'border-blue-500 bg-blue-950/40 ring-1 ring-blue-500'
                            : 'border-slate-800 bg-slate-900/60 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                          <span className="text-[10px] font-mono text-slate-500">{node.status}</span>
                        </div>
                        <h4 className="text-xs font-bold text-white mb-1 truncate">{node.name}</h4>
                        <p className="text-[10px] text-blue-400 font-medium truncate">{node.role}</p>
                        <p className="text-[9px] text-slate-400 truncate mt-1">{node.os}</p>
                      </button>
                    );
                  })}
                </div>

              </div>

            </div>

            {/* Selected Node Details Inspector */}
            <div className="rounded-xl border border-slate-800 bg-[#0f172a] p-6 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-slate-800 gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <Server className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{selectedNode.name}</h3>
                    <p className="text-xs text-blue-400">{selectedNode.role}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs">
                  <span className="px-2.5 py-1 rounded bg-slate-900 font-mono text-slate-300 border border-slate-800">
                    IP: {selectedNode.ip}
                  </span>
                  <span className="px-2 py-1 rounded bg-emerald-950/60 text-emerald-400 font-semibold border border-emerald-800/40">
                    {selectedNode.status}
                  </span>
                </div>
              </div>

              {/* Node Specs & Role Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                <div>
                  <h4 className="font-semibold uppercase tracking-wider text-slate-400 mb-2">{t.lab.systemSpecs}</h4>
                  <p className="text-slate-300 font-mono mb-4">{selectedNode.specs}</p>

                  <h4 className="font-semibold uppercase tracking-wider text-slate-400 mb-2">{t.lab.os}</h4>
                  <p className="text-slate-300 mb-4">{selectedNode.os}</p>

                  <h4 className="font-semibold uppercase tracking-wider text-slate-400 mb-2">{t.lab.purpose}</h4>
                  <p className="text-slate-300 leading-relaxed">{selectedNode.description}</p>
                </div>

                <div>
                  <h4 className="font-semibold uppercase tracking-wider text-slate-400 mb-2">{t.lab.installedRoles}</h4>
                  <div className="space-y-2">
                    {selectedNode.installedRoles.map((role, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-2 rounded bg-slate-900/60 border border-slate-800 text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span>{role}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>

          </ScrollReveal>
        )}

        {/* TAB 2: ACTIVE DIRECTORY TREE INSPECTOR */}
        {activeTab === 'directory-tree' && (
          <ScrollReveal delay={0.1} className="rounded-xl border border-slate-800 bg-[#0f172a] p-6 shadow-xl">
            <div className="pb-4 mb-6 border-b border-slate-800 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-white">{t.lab.adTreeHeading}</h3>
                <p className="text-xs text-slate-400">Forest: lab.internal (Schema Level: Windows Server 2022)</p>
              </div>
              <span className="text-xs font-mono text-blue-400">AD DS & DNS Integrated</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {adHierarchySections.map((sec, idx) => (
                <div key={idx} className="rounded-lg border border-slate-800 bg-slate-900/40 p-4">
                  <div className="flex items-center gap-2 mb-2 pb-2 border-b border-slate-800/80">
                    <FolderTree className="w-4 h-4 text-blue-400" />
                    <h4 className="text-sm font-bold text-white">{sec.name}</h4>
                  </div>
                  <p className="text-xs text-slate-400 mb-3">{sec.description}</p>
                  <div className="space-y-1.5 text-xs text-slate-300">
                    {sec.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-1.5">
                        <span className="text-blue-400 font-mono">↳</span>
                        <span className="text-[11px] leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        )}

        {/* TAB 3: LAB ACTIVITIES CHECKLIST */}
        {activeTab === 'activities' && (
          <ScrollReveal delay={0.1} className="rounded-xl border border-slate-800 bg-[#0f172a] p-6 shadow-xl">
            <div className="pb-4 mb-6 border-b border-slate-800">
              <h3 className="text-lg font-bold text-white">{t.lab.activitiesHeading}</h3>
              <p className="text-xs text-slate-400">
                Exercises performed routinely in the lab to prepare for System Administration and Cloud Administration responsibilities:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              {labActivitiesList.map((activity, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-slate-900/50 border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-slate-200 font-medium">{activity}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        )}

      </div>
    </section>
  );
};
