"use client";

import { useTranslation } from 'react-i18next';
import Link from "next/link";

const statusColors = {
  "En production": "bg-green-500/20 text-green-300 border-green-500/30",
  "Terminé": "bg-blue-500/20 text-blue-300 border-blue-500/30",
  "En développement": "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  "Prototype": "bg-purple-500/20 text-purple-300 border-purple-500/30"
};

export default function Projects() {
  const { t } = useTranslation('common');
  const projects = t('projects.list', { returnObjects: true });
  const statusLabels = t('projects.status', { returnObjects: true }) || {};
  const categoryLabels = t('projects.category', { returnObjects: true }) || {};

  if (!Array.isArray(projects)) {
    return <p className="text-center text-red-500">Aucun projet trouvé.</p>;
  }

  return (
    <section id="projects" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-100">
            {t('projects.title')}
          </h2>
          <div className="w-24 h-1 bg-sky-400 mx-auto rounded-full" />
        </div>

        <div className="space-y-8">
          {projects.slice(0, 2).map((project, index) => (
            <div key={project.title} className="project-item">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-sky-400/20 via-purple-400/20 to-pink-400/20 rounded-lg blur opacity-100 transition-opacity duration-500" />
                
                <div className="relative bg-slate-900/80 backdrop-blur-sm rounded-lg overflow-hidden border border-slate-700/50">
                  {/* Terminal Header */}
                  <div className="bg-slate-900 px-6 py-3 flex items-center space-x-2 border-b border-slate-700">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full" />
                      <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                    </div>
                    <div className="flex-1 text-center font-mono text-lg font-semibold select-none text-cyan-300">
                      {project.title}
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${statusColors[project.status]}`}>
                        {statusLabels[project.status] || project.status}
                      </span>
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-slate-700/50 text-slate-300 border border-slate-600">
                        {categoryLabels[project.category] || project.category}
                      </span>
                    </div>
                  </div>

                  {/* Terminal Content */}
                  <div className="bg-slate-950/80 px-6 py-6 font-mono text-base min-h-[280px] text-cyan-100 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-400/5 to-purple-400/5 opacity-50" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_70%)]" />
                    
                    <div className="relative z-10 space-y-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-pink-400">const</span>
                        <span className="text-cyan-200">project</span>
                        <span className="text-white">=</span>
                        <span className="text-white">{'{'}</span>
                      </div>
                      
                      <div className="ml-4 space-y-1">
                        <div className="flex items-start">
                          <span className="text-cyan-200">name</span>
                          <span className="text-white">:</span>
                          <span className="text-yellow-300 ml-2">'{project.title}'</span>
                          <span className="text-white">,</span>
                        </div>
                        
                        <div className="flex items-start">
                          <span className="text-cyan-200">technologies</span>
                          <span className="text-white">:</span>
                          <span className="text-white ml-2">[</span>
                        </div>
                        
                        <div className="ml-4 flex flex-wrap gap-1">
                          {project.technologies.map((tech, i) => (
                            <span
                              key={tech}
                              className="inline-flex items-center px-2 py-1 bg-slate-800/50 rounded text-yellow-200 text-sm border border-slate-700/50"
                            >
                              '{tech}'{i < project.technologies.length - 1 ? ',' : ''}
                            </span>
                          ))}
                        </div>
                        
                        <div className="text-white">],</div>
                        
                        <div className="flex items-start">
                          <span className="text-cyan-200">description</span>
                          <span className="text-white">:</span>
                          <span className="text-sky-300 ml-2">'{project.description}'</span>
                          <span className="text-white">,</span>
                        </div>
                        
                        <div className="flex items-start">
                          <span className="text-cyan-200">actions</span>
                          <span className="text-white">:</span>
                          <span className="text-white ml-2">{'{'}</span>
                        </div>
                        
                        <div className="ml-4 flex space-x-4">
                          <a
                            href={project.demo}
                            className="inline-flex items-center px-4 py-2 bg-sky-500/20 hover:bg-sky-500/30 border border-sky-500/30 rounded-md text-sky-300 hover:text-sky-200 transition-all duration-200"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Voir le projet →
                          </a>
                          
                          <a
                            href={project.code}
                            className="inline-flex items-center px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 rounded-md text-purple-300 hover:text-purple-200 transition-all duration-200"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Code source →
                          </a>
                        </div>
                        
                        <div className="text-white">{'}'}</div>
                      </div>
                      
                      <div className="text-white">{'}'}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Voir plus */}
        <div className="text-center mt-16">
          <Link 
            href="/fr/projects" 
            className="inline-block px-8 py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-sky-500/20 to-purple-500/20 border border-sky-500/30 hover:border-sky-400/50 text-sky-300 hover:text-sky-200 transition-all duration-300"
          >
            Voir tous les projets →
          </Link>
        </div>
      </div>
    </section>
  );
}
