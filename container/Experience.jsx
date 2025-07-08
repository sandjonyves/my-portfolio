"use client";

import Lottie from "lottie-react";
import { Section, Container } from "../components/layout";
import { Card, Badge} from "../components/ui"
import { useIntersectionObserver } from "../lib/hooks";
import { useTranslation } from 'react-i18next';

export default function Experience() {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.3 });
  const { t } = useTranslation('common');
  const experiencesRaw = t('experience.list', { returnObjects: true });
  const experiences = Array.isArray(experiencesRaw) ? experiencesRaw : [];
  const typeLabels = t('experience.type', { returnObjects: true }) || {};

  return (
    <Section 
      id="experience" 
      background="default"
      padding="py-24"
      ref={ref}
    >
      <Container maxWidth="max-w-6xl">
        <div className="flex flex-col items-center mb-12">
          <Badge 
            variant="primary" 
            size="lg"
            className="mb-4 px-8 py-2 bg-gradient-to-r from-sky-400 to-cyan-500 text-white font-mono text-lg rounded-md shadow-lg border-b-4 border-sky-400 neon-text"
          >
            {t('experience.title')}
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-sky-100 neon-text mb-2 text-center">
            {t('experience.subtitle')}
          </h2>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Timeline à gauche */}
          <div className="w-full md:w-2/3">
            {/* Timeline verticale */}
            <div className="relative border-l-2 border-sky-400/40 pl-8">
              {experiences.map((exp, idx) => (
                <div key={exp.title} className="mb-12 relative group">
                  {/* Point de la timeline */}
                  <span className="absolute -left-5 top-2 w-4 h-4 rounded-full bg-sky-400 border-4 border-slate-900 group-hover:bg-cyan-400 transition-colors"></span>
                  {/* Icône */}
                  <span className="absolute -left-12 top-0">{exp.icon}</span>
                  
                  <Card
                    variant="default"
                    className="p-6 border-sky-400 neon-border hover:shadow-sky-400/30"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <span className="text-sky-400 font-mono text-sm mb-1 sm:mb-0">
                        {exp.date}
                      </span>
                      <Badge
                        variant={exp.type === "Pro" ? "primary" : "purple"}
                        size="sm"
                        className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider"
                      >
                        {typeLabels[exp.type] || exp.type}
                      </Badge>
                    </div>
                    <div className="font-mono text-lg md:text-xl font-bold tracking-wide mb-1 text-sky-100">
                      {exp.title}
                    </div>
                    <div className="text-cyan-200 font-mono text-base mb-1">
                      {exp.company}
                    </div>
                    <div className="text-slate-300 text-base">
                      {exp.description}
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          {/* Animation Lottie à droite */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="max-w-xs w-full">
              <Lottie
                autoplay
                loop
                animationData={require("../public/lottie/Experience.json")}
                style={{ height: 420, width: 420 }}
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
} 