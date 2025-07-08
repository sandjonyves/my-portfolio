"use client";

import { useTranslation } from 'react-i18next';
import Link from "next/link";
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui';

const statusColors = {
  "En production": "bg-sky-500/20 text-sky-300 border-sky-500/30",
  "Terminé": "bg-blue-500/20 text-blue-300 border-blue-500/30",
  "En développement": "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
  "Prototype": "bg-indigo-500/20 text-indigo-300 border-indigo-500/30"
};

// Composant pour l'effet de typing
const TypingEffect = ({ text, delay = 50, className = "" }) => {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, delay);

    return () => clearInterval(timer);
  }, [text, delay]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <span className={className}>
      {displayText}
      {showCursor && <span className="text-sky-400 animate-pulse">▋</span>}
    </span>
  );
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
    <section id="projects" className="py-20  relative overflow-hidden bg-transparent">
      {/* Effet de scanlines */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/5 to-transparent pointer-events-none">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(56,189,248,0.03)_2px,rgba(56,189,248,0.03)_4px)]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-sky-400 font-mono">
            {t('projects.title')}
          </h2>
          <div className="w-24 h-1 bg-sky-400 mx-auto rounded-full animate-pulse" />
        </div>

        <div className="space-y-8">
          {projects.slice(0, 2).map((project, index) => (
            <div key={project.title} className="project-item">
              <div className="relative group">
                {/* Effet de glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-sky-400/20 via-cyan-400/20 to-blue-400/20 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative bg-black/95 backdrop-blur-sm rounded-lg overflow-hidden border border-sky-500/30 shadow-2xl">
                  {/* Terminal Header */}
                  <div className="bg-slate-800 px-6 py-3 flex items-center space-x-2 border-b border-sky-500/30">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full shadow-lg shadow-red-500/50" />
                      <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-lg shadow-yellow-500/50" />
                      <div className="w-3 h-3 bg-green-500 rounded-full shadow-lg shadow-green-500/50" />
                    </div>
                    <div className="flex-1 text-center font-mono text-lg font-semibold select-none text-sky-400">
                      sandjonyves@portfolio:~/{project.title.toLowerCase().replace(/\s+/g, '-')}
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border font-mono ${statusColors[project.status]}`}>
                        {statusLabels[project.status] || project.status}
                      </span>
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-slate-700/50 text-slate-300 border border-slate-600 font-mono">
                        {categoryLabels[project.category] || project.category}
                      </span>
                    </div>
                  </div>

                  {/* Terminal Content */}
                  <div className="bg-black/95 px-6 py-6 font-mono text-sm min-h-[320px] text-sky-300 relative overflow-hidden">
                    {/* Effet de scanlines internes */}
                    <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_1px,rgba(56,189,248,0.03)_1px,rgba(56,189,248,0.03)_2px)] pointer-events-none" />
                    
                    {/* Prompt initial */}
                    <div className="mb-4 text-sky-400">
                      <span className="text-cyan-400">sandjonyves@portfolio</span>
                      <span className="text-white">:</span>
                      <span className="text-blue-400">~/projects</span>
                      <span className="text-white">$ </span>
                      <TypingEffect text="cat project.json" className="text-sky-300" />
                    </div>
                    
                    <div className="relative z-10 space-y-1 pl-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-white">{'{'}</span>
                      </div>
                      
                      <div className="ml-4 space-y-1">
                        <div className="flex items-start">
                          <span className="text-cyan-400">"name"</span>
                          <span className="text-white">:</span>
                          <span className="text-yellow-300 ml-2">"{project.title}"</span>
                          <span className="text-white">,</span>
                        </div>
                        
                        <div className="flex items-start">
                          <span className="text-cyan-400">"status"</span>
                          <span className="text-white">:</span>
                          <span className="text-yellow-300 ml-2">"{project.status}"</span>
                          <span className="text-white">,</span>
                        </div>
                        
                        <div className="flex items-start">
                          <span className="text-cyan-400">"technologies"</span>
                          <span className="text-white">:</span>
                          <span className="text-white ml-2">[</span>
                        </div>
                        
                        <div className="ml-4 space-y-1">
                          {project.technologies.map((tech, i) => (
                            <div key={tech} className="flex items-center">
                              <span className="text-yellow-300">"{tech}"</span>
                              {i < project.technologies.length - 1 && <span className="text-white">,</span>}
                            </div>
                          ))}
                        </div>
                        
                        <div className="text-white">],</div>
                        
                        <div className="flex items-start">
                          <span className="text-cyan-400">"description"</span>
                          <span className="text-white">:</span>
                          <span className="text-sky-300 ml-2">"{project.description}"</span>
                          <span className="text-white">,</span>
                        </div>
                        
                        <div className="flex items-start">
                          <span className="text-cyan-400">"links"</span>
                          <span className="text-white">:</span>
                          <span className="text-white ml-2">{'{'}</span>
                        </div>
                        
                        <div className="ml-4 space-y-1">
                          <div className="flex items-center">
                            <span className="text-cyan-400">"demo"</span>
                            <span className="text-white">:</span>
                            <span className="text-yellow-300 ml-2">"{project.demo}"</span>
                            <span className="text-white">,</span>
                          </div>
                          <div className="flex items-center">
                            <span className="text-cyan-400">"source"</span>
                            <span className="text-white">:</span>
                            <span className="text-yellow-300 ml-2">"{project.code}"</span>
                          </div>
                        </div>
                        
                        <div className="text-white">{'}'}</div>
                      </div>
                      
                      <div className="text-white">{'}'}</div>
                      
                      {/* Ligne de commande suivante */}
                      <div className="mt-6 pt-4 border-t border-sky-500/20">
                        <div className="text-sky-400 mb-2">
                          <span className="text-cyan-400">sandjonyves@portfolio</span>
                          <span className="text-white">:</span>
                          <span className="text-blue-400">~/projects</span>
                          <span className="text-white">$ </span>
                          <span className="text-sky-300">open --links</span>
                        </div>
                        
                        <div className="flex space-x-4 mt-2">
                          <a
                            href={project.demo}
                            className="inline-flex items-center px-4 py-2 bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 rounded-md text-sky-300 hover:text-sky-200 transition-all duration-200 font-mono text-sm shadow-lg shadow-sky-500/10"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="text-sky-400">./</span>demo.sh
                          </a>
                          
                          <a
                            href={project.code}
                            className="inline-flex items-center px-4 py-2 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 rounded-md text-cyan-300 hover:text-cyan-200 transition-all duration-200 font-mono text-sm shadow-lg shadow-cyan-500/10"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="text-cyan-400">git</span> clone
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Voir plus */}
        <div className="text-center mt-16">
        <Button className="text-center mt-16">
          <Link 
            href="/fr/projects" 
            className="inline-block px-8 py-4 text-lg font-semibold rounded-md  border-sky-500/30 hover:border-sky-400/50 text-sky-100 hover:text-sky-200 transition-all duration-300 font-mono shadow-lg shadow-sky-500/10"
          >
            <span className="text-sky-800">$</span> ls --all-projects
          </Link>
        </Button>
        </div>
      </div>
    </section>
  );
}