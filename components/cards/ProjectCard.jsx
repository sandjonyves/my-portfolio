"use client";

import { motion } from "framer-motion";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { Card, Badge, Button } from "../ui";

const ProjectCard = ({ project, index }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "rgba(15, 23, 42, 0.8)",
        color: "#f1f5f9",
        border: "1px solid rgba(14, 165, 233, 0.3)",
        borderRadius: "12px",
        boxShadow: "0 8px 32px rgba(14, 165, 233, 0.1)",
      }}
      contentArrowStyle={{
        borderRight: "7px solid rgba(14, 165, 233, 0.3)",
      }}
      date={project.date}
      iconStyle={{
        background: "#0ea5e9",
        color: "#fff",
        boxShadow: "0 0 20px rgba(14, 165, 233, 0.5)",
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      }
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
      >
        {/* Project image */}
        {project.image && (
          <motion.div
            className="mb-6 overflow-hidden rounded-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src={project.image} 
              alt={project.name}
              className="w-full h-48 object-cover"
            />
          </motion.div>
        )}

        {/* Project info */}
        <div className="space-y-4">
          {/* Title */}
          <h3 className="text-2xl font-bold text-slate-100">
            {project.name}
          </h3>

          {/* Description */}
          <p className="text-slate-300 leading-relaxed">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mt-4">
            {project.technologies.map((tool, toolIndex) => (
              <Badge
                key={`tool-${toolIndex}`}
                variant="tech"
                animated
                className="hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                {tool}
              </Badge>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4 mt-6">
            {project.demo && (
              <Button
                variant="primary"
                size="sm"
                onClick={() => window.open(project.demo, '_blank')}
                icon={
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                }
              >
                Demo
              </Button>
            )}
            
            {project.code && (
              <Button
                variant="secondary"
                size="sm"
                onClick={() => window.open(project.code, '_blank')}
                icon={
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                }
              >
                Code
              </Button>
            )}
          </div>
        </div>
      </motion.div>
    </VerticalTimelineElement>
  );
};

export default ProjectCard; 