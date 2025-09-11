"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Box } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import { Section, Container} from "../components/layout";
import {Card, Badge } from '../components/ui'
import { useIntersectionObserver } from "../lib/hooks";
import { useTranslation } from 'react-i18next';
import Lottie from "lottie-react";

function AnimatedAvatar() {
  return (
    <Box args={[2, 2, 2]} scale={1.5}>
      <meshStandardMaterial
        color="#0ea5e9"
        transparent
        opacity={0.8}
        wireframe
      />
    </Box>
  );
}



export default function About() {

  const [ref] = useIntersectionObserver({ threshold: 0.3 });
  const { t } = useTranslation('common');
  
  
  return (
    <Section 
      id="about" 
      background="dark"
      
      padding=""
      ref={ref}
    >
      <Container>
        <div className="text-center pt-16 ">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-100">
            {t('about.title')}
          </h2>
          <div className="w-24 h-1 bg-sky-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
        
        <Lottie
                autoplay
                loop
                animationData={require("../public/lottie/About.json")}
                style={{ height: 420, width: 420 }}
              />

          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-slate-100">
              {t('about.subtitle')}
            </h3>
            
            <p className="text-lg leading-relaxed text-slate-400">
              {t('about.description1')}
            </p>

            <p className="text-lg leading-relaxed text-slate-400">
              {t('about.description2')}
            </p>

          </div>
        </div>
      </Container>
    </Section>
  );
} 