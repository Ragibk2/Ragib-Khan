import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight, Sparkles, Layers, Cpu, Info } from 'lucide-react';
import { ProjectItem } from '../data/projects';
import { useLanguage } from '../context/LanguageContext';

interface ProjectCardProps {
  project: ProjectItem;
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelectProject }) => {
  const { t } = useLanguage();
  const [repoNotice, setRepoNotice] = useState(false);

  return (
    <div className="group rounded-xl border border-slate-800 bg-[#0f172a]/80 hover:border-slate-700 transition-all duration-200 flex flex-col justify-between overflow-hidden shadow-xl">
      
      {/* Visual Image / Screenshot Container */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-950 border-b border-slate-800/80">
        <img
          src={project.image}
          alt={`${project.name} interface preview`}
          className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        
        {/* Subtle scrim for title contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-80" />

        {/* Status & Badge overlay */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-xs">
          <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-900/90 text-slate-200 border border-slate-700/80 backdrop-blur-sm">
            {project.badge}
          </span>
          <span className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-blue-950/80 text-blue-300 border border-blue-500/30 backdrop-blur-sm">
            {project.status}
          </span>
        </div>
      </div>

      {/* Card Content Area */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          
          {/* Category */}
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-1">
            {project.category}
          </p>

          {/* Project Title & Subtitle */}
          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
            {project.name}
          </h3>
          <p className="text-xs font-medium text-slate-400 mb-3">
            {project.subtitle}
          </p>

          {/* Description */}
          <p className="text-xs text-slate-300 leading-relaxed mb-5">
            {project.description}
          </p>

          {/* Key Highlight Features List */}
          <div className="mb-5 space-y-1.5 text-xs text-slate-400 border-t border-slate-800/80 pt-3">
            {project.features[0]?.items.slice(0, 3).map((item, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <span className="text-blue-400 font-bold">·</span>
                <span className="line-clamp-1 text-slate-300">{item}</span>
              </div>
            ))}
          </div>

          {/* Technologies Used */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-[11px] font-mono text-slate-300 bg-slate-900 border border-slate-800 rounded"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="px-1.5 py-0.5 text-[11px] font-mono text-slate-400">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>

        </div>

        {/* Action Buttons Row */}
        <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-2">
          {repoNotice && (
            <div className="p-2 rounded bg-blue-950/40 border border-blue-800/60 text-[11px] text-blue-200 flex items-center justify-between">
              <span>Code in private staging. Available upon recruitment request.</span>
              <button onClick={() => setRepoNotice(false)} className="text-blue-300 font-bold ml-2">✕</button>
            </div>
          )}

          <div className="flex items-center justify-between gap-3 text-xs">
            <button
              type="button"
              onClick={() => onSelectProject(project)}
              className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-semibold focus-visible:outline-none focus-visible:underline"
            >
              <span>{t.projects.viewArchitecture}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <div className="flex items-center gap-2">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    if (project.links.github === '[ADD GITHUB URL]') {
                      e.preventDefault();
                      setRepoNotice(true);
                      setTimeout(() => setRepoNotice(false), 5000);
                    }
                  }}
                  className="p-1.5 text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded hover:border-slate-700 transition-colors"
                  title={t.projects.githubRepo}
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 text-blue-400 hover:text-blue-300 bg-blue-950/40 border border-blue-800/40 rounded hover:border-blue-700 transition-colors"
                  title={t.projects.liveDemo}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
