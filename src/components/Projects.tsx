import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  X, 
  Layers, 
  Cpu, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Server, 
  Terminal, 
  ShieldAlert 
} from 'lucide-react';
import { projectsData, ProjectItem } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';
import { useLanguage } from '../context/LanguageContext';

export const Projects: React.FC = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [repoNotice, setRepoNotice] = useState(false);

  return (
    <section id="projects" className="py-20 bg-[#0b0f19] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal className="max-w-3xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            {t.projects.badge}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            {t.projects.heading}
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            {t.projects.subtitle}
          </p>
        </ScrollReveal>

        {/* Projects Grid */}
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-8" staggerDelay={0.12}>
          {projectsData.map((project) => (
            <StaggerItem key={project.id}>
              <ProjectCard
                project={project}
                onSelectProject={(proj) => setSelectedProject(proj)}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Project Details Modal */}
        {selectedProject && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <div 
              className="relative w-full max-w-4xl bg-[#0f172a] border border-slate-700/80 rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto text-left"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-lg bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="mb-6 pr-10">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-blue-950 text-blue-300 border border-blue-800/50">
                    {selectedProject.badge}
                  </span>
                  <span className="text-xs text-slate-400">·</span>
                  <span className="text-xs font-mono text-slate-300">{selectedProject.status}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                  {selectedProject.name}
                </h3>
                <p className="text-sm text-blue-400 font-medium">
                  {selectedProject.subtitle}
                </p>
              </div>

              {/* Project Image Preview */}
              <div className="rounded-xl overflow-hidden border border-slate-800 mb-6 bg-black/40">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  className="w-full h-auto max-h-80 object-cover"
                />
              </div>

              {/* Overview Description */}
              <div className="mb-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  {t.projects.projectOverview}
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Agentless Architecture Section (for HT IT Monitor Tool) */}
              {selectedProject.architecture && (
                <div className="mb-6 p-5 rounded-xl bg-slate-900/90 border border-blue-900/30">
                  <div className="flex items-center gap-2 mb-3">
                    <Server className="w-4 h-4 text-blue-400" />
                    <h4 className="text-sm font-bold text-white">
                      {selectedProject.architecture.title}
                    </h4>
                  </div>
                  
                  {/* Flow Steps */}
                  <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 my-4 text-xs font-mono text-center">
                    {selectedProject.architecture.steps.map((step, idx) => (
                      <div key={idx} className="p-2.5 rounded bg-[#0b0f19] border border-slate-800 flex flex-col justify-center items-center text-slate-300">
                        <span className="text-[10px] text-blue-400 font-bold mb-1">0{idx + 1}</span>
                        <span className="text-[11px] leading-tight">{step}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {selectedProject.architecture.description}
                  </p>
                </div>
              )}

              {/* AI-Assisted Monitoring Section (HT IT Monitor Tool) */}
              {selectedProject.aiEnhancement && (
                <div className="mb-6 p-5 rounded-xl bg-gradient-to-br from-indigo-950/30 via-slate-900 to-slate-900 border border-indigo-500/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-indigo-400" />
                    <h4 className="text-sm font-bold text-white">
                      {selectedProject.aiEnhancement.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-300 mb-3 leading-relaxed">
                    {selectedProject.aiEnhancement.description}
                  </p>

                  <div className="space-y-2 mb-4 text-xs">
                    {selectedProject.aiEnhancement.capabilities.map((cap, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-2.5 rounded bg-black/40 border border-indigo-900/40 text-[11px] text-slate-400 flex items-start gap-2">
                    <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{selectedProject.aiEnhancement.disclaimer}</span>
                  </div>
                </div>
              )}

              {/* Comprehensive Features List */}
              <div className="mb-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                  {t.projects.keyFeatures}
                </h4>
                <div className="space-y-4">
                  {selectedProject.features.map((cat, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                      {cat.category && (
                        <h5 className="text-xs font-semibold text-blue-300 uppercase tracking-wider mb-2">
                          {cat.category}
                        </h5>
                      )}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                        {cat.items.map((item, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <span className="text-blue-400 font-bold">·</span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  {t.projects.techFrameworks}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tItem) => (
                    <span
                      key={tItem}
                      className="px-2.5 py-1 text-xs font-mono bg-slate-900 border border-slate-800 text-slate-300 rounded"
                    >
                      {tItem}
                    </span>
                  ))}
                </div>
              </div>

              {/* Repository Notice if Placeholder */}
              {repoNotice && (
                <div className="mb-4 p-3 rounded-lg bg-blue-950/50 border border-blue-800/60 text-xs text-blue-200 flex items-center justify-between">
                  <span>Code repository is currently hosted in private enterprise lab repository. Access credentials provided upon request.</span>
                  <button onClick={() => setRepoNotice(false)} className="text-blue-300 font-bold ml-2">✕</button>
                </div>
              )}

              {/* Footer Actions */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <a
                    href={selectedProject.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      if (selectedProject.links.github === '[ADD GITHUB URL]') {
                        e.preventDefault();
                        setRepoNotice(true);
                      }
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium border border-slate-700 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>{t.projects.githubRepo}</span>
                  </a>

                  {selectedProject.links.demo && (
                    <a
                      href={selectedProject.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>{t.projects.liveDemo}</span>
                    </a>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="text-slate-400 hover:text-white"
                >
                  {t.projects.closeModal}
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
