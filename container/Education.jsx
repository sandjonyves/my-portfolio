"use client";

import Lottie from "lottie-react";
import { Section, Container } from "../components/layout";
import { Card, Badge } from "../components/ui";
import { useIntersectionObserver } from "../lib/hooks";
import { useTranslation } from 'react-i18next';

export default function Education() {
  const { t } = useTranslation('common');
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.3 });
  const educationDataRaw = t('education.list', { returnObjects: true });
  const educationData = Array.isArray(educationDataRaw) ? educationDataRaw : [];

  return (
    <Section 
      id="education" 
      background="default"
      padding="py-24"
      className="border-t"
      ref={ref}
    >
      <Container maxWidth="max-w-6xl">
        <div className="flex flex-col items-center mb-12">
         
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-sky-400 font-mono">
            {t('education.title')}
          </h2>
          <div className="w-24 h-1 bg-sky-400 mx-auto rounded-full animate-pulse" />
        </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-sky-100 neon-text mb-2 text-center">
            {t('education.subtitle')}
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
           {/* Animation Lottie à droite */}
           <div className="w-full md:w-1/2 flex justify-center">
            <div className="max-w-xs w-full">
              <Lottie
                autoplay
                loop
                animationData={require("../public/lottie/Education.json")}
                style={{ height: 420, width: 420 }}
              />
            </div>
          </div>
        
          <div className="w-full md:w-2/3">
            <div className="relative border-r-2 border-sky-400/40 pr-8">
              {educationData.map((edu, idx) => (
                <div key={edu.title} className="mb-12 relative group">
                  <span className="absolute -right-5 top-2 w-4 h-4 rounded-full bg-sky-400 border-4 border-slate-900 group-hover:bg-cyan-400 transition-colors"></span>
                  <span className="absolute -right-12 top-0">{edu.icon}</span>

                  <Card
                    variant="default"
                    className="p-6 border-sky-400 neon-border hover:shadow-sky-400/30"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <span className="text-sky-400 font-mono text-sm mb-1 sm:mb-0">
                        {edu.date}
                      </span>
                    </div>
                    <div className="font-mono text-lg md:text-xl font-bold tracking-wide mb-1 text-sky-100">
                      {edu.title}
                    </div>
                    <div className="text-cyan-200 font-mono text-base mb-1">
                      {edu.school}
                    </div>
                    <div className="text-slate-300 text-base">
                      {edu.description}
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

         
        </div>
      </Container>
    </Section>
  );
}
