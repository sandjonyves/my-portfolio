"use client";

import Lottie from "lottie-react";
import { Section, Container } from "./layout";
import { Card, Badge} from "./ui"
import { useIntersectionObserver } from "../lib/hooks";

const experiences = [
  {
    type: "Pro",
    title: "Full Stack Developer (Freelance)",
    company: "Indépendant",
    date: "2023 - Aujourd'hui",
    description:
      "Développement d'applications web sur-mesure pour des clients variés (e-commerce, dashboards, sites vitrines). Stack : React, Next.js, Node.js, MongoDB, Tailwind CSS.",
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-sky-400"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a2 2 0 012-2h2a2 2 0 012 2v2m-6 4h6a2 2 0 002-2v-6a2 2 0 00-2-2h-2a2 2 0 00-2 2v6a2 2 0 002 2z" /></svg>
    ),
  },
  {
    type: "Perso",
    title: "Projet personnel : Portfolio 3D Next.js",
    company: "Projet personnel",
    date: "2024",
    description:
      "Création de mon portfolio interactif avec animations 3D, thème spatial et intégration Lottie. Focus sur l'expérience utilisateur et la performance.",
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-cyan-400"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
    ),
  },
  {
    type: "Pro",
    title: "Stagiaire Développeur Web",
    company: "Startup Tech",
    date: "2022 - 2023",
    description:
      "Participation à la refonte d'une plateforme SaaS, développement de modules front-end et back-end, collaboration en équipe agile.",
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-sky-400"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 01-8 0m8 0a4 4 0 00-8 0m8 0V5a4 4 0 00-8 0v2m8 0a4 4 0 01-8 0" /></svg>
    ),
  },
];

export default function Experience() {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.3 });

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
            Experience
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-sky-100 neon-text mb-2 text-center">
            Mon parcours professionnel & personnel
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
                        {exp.type === "Pro" ? "Pro" : "Perso"}
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