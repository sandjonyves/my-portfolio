"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Box } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import { Section, Container} from "./layout";
import {Card, Badge } from './ui'
import { useIntersectionObserver } from "../lib/hooks";

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

const skillsData = [
  {
    category: "Frontend",
    skills: ["React & Next.js", "TypeScript", "Tailwind CSS", "Three.js"]
  },
  {
    category: "Backend", 
    skills: ["Node.js & Express", "Python & Django", "PostgreSQL & MongoDB", "APIs REST & GraphQL"]
  },
  {
    category: "DevOps",
    skills: ["Docker & Kubernetes", "AWS & Vercel", "CI/CD Pipelines", "Monitoring"]
  },
  {
    category: "Outils",
    skills: ["Git & GitHub", "VS Code", "Figma", "Postman"]
  }
];

export default function About() {
  const [mounted, setMounted] = useState(false);
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.3 });
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  return (
    <Section 
      id="about" 
      background="dark"
      padding="py-20"
      ref={ref}
    >
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-100">
            À propos de moi
          </h2>
          <div className="w-24 h-1 bg-sky-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 3D Avatar */}
          <div className="h-96 lg:h-[800px] relative">
            <Canvas camera={{ position: [0, 0, 5] }}>
              <Suspense fallback={null}>
                <ambientLight intensity={2} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <AnimatedAvatar />
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
              </Suspense>
            </Canvas>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-slate-100">
              Développeur passionné par l'innovation
            </h3>
            
            <p className="text-lg leading-relaxed text-slate-400">
              Avec plus de 5 ans d'expérience dans le développement web, je me spécialise 
              dans la création d'applications modernes et performantes. Mon expertise 
              couvre l'ensemble de la stack technique, du frontend au backend.
            </p>

            <p className="text-lg leading-relaxed text-slate-400">
              Je suis constamment à l'affût des nouvelles technologies et des meilleures 
              pratiques pour offrir des solutions innovantes et des expériences 
              utilisateur exceptionnelles.
            </p>

            {/* Skills */}
            {/* <div className="grid grid-cols-2 gap-4 mt-8">
              {skillsData.map((skillGroup, index) => (
                <Card
                  key={skillGroup.category}
                  variant="glass"
                  className="p-6"
                >
                  <h4 className="text-lg font-semibold text-sky-400 mb-3">
                    {skillGroup.category}
                  </h4>
                  <ul className="space-y-2 text-slate-300">
                    {skillGroup.skills.map((skill, skillIndex) => (
                      <li key={skillIndex}>• {skill}</li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div> */}
          </div>
        </div>
      </Container>
    </Section>
  );
} 