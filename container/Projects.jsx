"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from 'react-i18next';
import { useIntersectionObserver } from "@/lib/hooks";
const projects = [
  {
    title: "Portfolio Spatial",
    description: "Portfolio interactif avec animations 3D, thème spatial et intégration Lottie. Focus sur l'expérience utilisateur et la performance.",
    technologies: ["React", "Next.js", "Three.js", "Framer Motion", "Tailwind CSS"],
    link: "#",
    github: "#",
    image: "/images/projects/portfolio.jpg",
    status: "En production",
    category: "Frontend"
  },
  {
    title: "E-Commerce Platform",
    description: "Plateforme e-commerce complète avec gestion des produits, panier, paiements et dashboard administrateur.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
    link: "#",
    github: "#",
    image: "/images/projects/ecommerce.jpg",
    status: "Terminé",
    category: "Full Stack"
  },
  {
    title: "Task Management App",
    description: "Application de gestion de tâches avec drag & drop, notifications en temps réel et collaboration d'équipe.",
    technologies: ["React", "Socket.io", "Express", "PostgreSQL", "JWT"],
    link: "#",
    github: "#",
    image: "/images/projects/taskapp.jpg",
    status: "En développement",
    category: "Full Stack"
  },
  {
    title: "AI Chat Assistant",
    description: "Assistant conversationnel IA avec traitement du langage naturel et intégration d'APIs externes.",
    technologies: ["Python", "OpenAI", "FastAPI", "React", "WebSocket"],
    link: "#",
    github: "#",
    image: "/images/projects/aichat.jpg",
    status: "Prototype",
    category: "AI/ML"
  }
];

const statusColors = {
  "En production": "bg-green-500/20 text-green-300 border-green-500/30",
  "Terminé": "bg-blue-500/20 text-blue-300 border-blue-500/30",
  "En développement": "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  "Prototype": "bg-purple-500/20 text-purple-300 border-purple-500/30"
};

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [hoveredProject, setHoveredProject] = useState(null);
  const { t } = useTranslation('common');
  const {ref} = useIntersectionObserver()
  const projectsRaw = t('projects.list', { returnObjects: true });
 
  const projects =projectsRaw;
  if (!Array.isArray(projects)) return null;
  const statusLabels = t('projects.status', { returnObjects: true }) || {};
  const categoryLabels = t('projects.category', { returnObjects: true }) || {};

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectIndex = parseInt(entry.target.dataset.index);
            setVisibleProjects(prev => {
              if (!prev.includes(projectIndex)) {
                return [...prev, projectIndex];
              }
              return prev;
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    const projectElements = document.querySelectorAll('.project-item');
    projectElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="projects" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-4 text-slate-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {t('projects.title')}
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-sky-400 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          />
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-item"
              data-index={index}
              initial={{ opacity: 0, y: 50 }}
              animate={visibleProjects.includes(index) ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-sky-400/20 via-purple-400/20 to-pink-400/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative bg-slate-900/80 backdrop-blur-sm rounded-lg overflow-hidden border border-slate-700/50 hover:border-sky-400/50 transition-all duration-300">
                  {/* Terminal Header avec effets améliorés */}
                  <div className="bg-slate-900 px-6 py-3 flex items-center space-x-2 border-b border-slate-700">
                    <div className="flex items-center space-x-2">
                      <motion.div 
                        className="w-3 h-3 bg-red-500 rounded-full"
                        animate={{ scale: hoveredProject === index ? 1.2 : 1 }}
                        transition={{ duration: 0.2 }}
                      />
                      <motion.div 
                        className="w-3 h-3 bg-yellow-500 rounded-full"
                        animate={{ scale: hoveredProject === index ? 1.2 : 1 }}
                        transition={{ duration: 0.2, delay: 0.1 }}
                      />
                      <motion.div 
                        className="w-3 h-3 bg-green-500 rounded-full"
                        animate={{ scale: hoveredProject === index ? 1.2 : 1 }}
                        transition={{ duration: 0.2, delay: 0.2 }}
                      />
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

                  {/* Terminal Content amélioré */}
                  <div className="bg-slate-950/80 px-6 py-6 font-mono text-base min-h-[280px] text-cyan-100 relative overflow-hidden">
                    {/* Effet de grid en arrière-plan */}
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
                            <motion.span
                              key={tech}
                              className="inline-flex items-center px-2 py-1 bg-slate-800/50 rounded text-yellow-200 text-sm border border-slate-700/50"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={visibleProjects.includes(index) ? { opacity: 1, scale: 1 } : {}}
                              transition={{ duration: 0.3, delay: i * 0.1 }}
                              whileHover={{ scale: 1.05, backgroundColor: "rgba(30, 41, 59, 0.8)" }}
                            >
                              '{tech}'{i < project.technologies.length - 1 ? ',' : ''}
                            </motion.span>
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
                          <motion.a
                            href={project.link}
                            className="inline-flex items-center px-4 py-2 bg-sky-500/20 hover:bg-sky-500/30 border border-sky-500/30 rounded-md text-sky-300 hover:text-sky-200 transition-all duration-200 group/link"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            
                            <span>Voir le projet</span>
                            <motion.span
                              className="ml-1 opacity-0 group-hover/link:opacity-100"
                              initial={{ x: -10 }}
                              animate={{ x: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              →
                            </motion.span>
                          </motion.a>
                          
                          <motion.a
                            href={project.github}
                            className="inline-flex items-center px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 rounded-md text-purple-300 hover:text-purple-200 transition-all duration-200 group/github"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <span className="mr-2"></span>
                            <span>Code source</span>
                            <motion.span
                              className="ml-1 opacity-0 group-hover/github:opacity-100"
                              initial={{ x: -10 }}
                              animate={{ x: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              →
                            </motion.span>
                          </motion.a>
                        </div>
                        
                        <div className="text-white">{'}'}</div>
                      </div>
                      
                      <div className="text-white">{'}'}</div>
                    </div>

                    {/* Particules flottantes */}
                    {hoveredProject === index && (
                      <div className="absolute inset-0 pointer-events-none">
                        {[...Array(6)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-sky-400 rounded-full"
                            initial={{ 
                              x: Math.random() * 100 + "%", 
                              y: Math.random() * 100 + "%",
                              opacity: 0 
                            }}
                            animate={{ 
                              y: [null, "-20px", "20px"],
                              opacity: [0, 1, 0] 
                            }}
                            transition={{ 
                              duration: 2,
                              repeat: Infinity,
                              delay: i * 0.2 
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button amélioré */}
        <div className="text-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link 
              href="/projects" 
              className="group relative inline-flex items-center px-8 py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-sky-500/20 to-purple-500/20 border border-sky-500/30 hover:border-sky-400/50 text-sky-300 hover:text-sky-200 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-purple-500/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
              <motion.span
                className="relative mr-2"
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              >
                
              </motion.span>
              <span className="relative">Voir tous les projets</span>
              <motion.span
                className="relative ml-2 opacity-0 group-hover:opacity-100"
                initial={{ x: -10 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.2 }}
              >
                →
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}