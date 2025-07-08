"use client";

import Lottie from "lottie-react";
import { Section, Container } from "../components/layout";
import {Card} from '../components/ui'
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
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Animation Lottie à gauche */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="max-w-xs w-full">
              <Lottie
                autoplay
                loop
                animationData={require("../public/lottie/Education.json")}
                style={{ height: 360, width: 360 }}
              />
            </div>
          </div>
          
          {/* Cartes Education à droite */}
          <div className="w-full md:w-1/2 flex flex-col gap-10">
            <div className="flex justify-center md:justify-start mb-6">
              <div className="relative">
                <span className="absolute left-1/2 -translate-x-1/2 -top-8 px-8 py-2 bg-gradient-to-r from-sky-400 to-cyan-500 text-white font-mono text-lg rounded-md shadow-lg border-b-4 border-sky-400 neon-text">
                  {t('education.title')}
                </span>
              </div>
            </div>
            
            {educationData.map((edu, idx) => (
              <Card
                key={edu.title}
                variant="default"
                className="p-8 border-sky-400 neon-border"
                style={{ boxShadow: "0 0 24px 0 rgba(14,165,233,0.10)" }}
              >
                <div className="text-sky-400 font-mono text-sm mb-2 text-right">
                  {edu.date}
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1">{edu.icon}</span>
                  <div>
                    <div className="font-mono text-lg md:text-xl font-bold tracking-wide mb-2 text-sky-100">
                      {edu.title}
                    </div>
                    <div className="text-cyan-200 font-mono text-base">
                      {edu.school}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
} 