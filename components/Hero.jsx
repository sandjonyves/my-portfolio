"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { Suspense, useState, useEffect } from "react";
import StarsBackground from "./StarsBackground";
import { Typewriter } from "./animations";
import { Button } from "./ui";
import { useScrollTo } from "../lib/hooks";
import Image from "next/image";

function Planet({ color, size, position, rotationSpeed = 1 }) {
  return (
    <Sphere args={[size, 32, 32]} position={position}>
      <meshStandardMaterial
        color={color}
        metalness={0.1}
        roughness={0.8}
      />
    </Sphere>
  );
}

function SolarSystem() {
  return (
    <>
      {/* Éclairage sombre */}
      <ambientLight intensity={0.2} />
      <pointLight 
        position={[0, 0, 0]} 
        intensity={2} 
        color="#fbbf24" 
      />
      
      {/* Planètes */}
      <Planet 
        color="#3b82f6" 
        size={0.8} 
        position={[3, 0, 0]} 
        rotationSpeed={0.5}
      />
      <Planet 
        color="#10b981" 
        size={0.6} 
        position={[6, 0, 0]} 
        rotationSpeed={0.3}
      />
      <Planet 
        color="#f59e0b" 
        size={0.7} 
        position={[9, 0, 0]} 
        rotationSpeed={0.4}
      />
      
      {/* Orbites */}
      <mesh rotation={[0, 0, 0]}>
        <ringGeometry args={[2.5, 3.5, 64]} />
        <meshBasicMaterial 
          color="#0ea5e9" 
          transparent 
          opacity={0.3} 
        />
      </mesh>
      <mesh rotation={[0, 0, 0]}>
        <ringGeometry args={[5.5, 6.5, 64]} />
        <meshBasicMaterial 
          color="#0ea5e9" 
          transparent 
          opacity={0.2} 
        />
      </mesh>
      <mesh rotation={[0, 0, 0]}>
        <ringGeometry args={[8.5, 9.5, 64]} />
        <meshBasicMaterial 
          color="#0ea5e9" 
          transparent 
          opacity={0.1} 
        />
      </mesh>
    </>
  );
}

const skills = [
  "Développeur Full Stack",
  "Spécialiste React/Next.js",
  "Passionné d'IA & ML",
  "Explorateur Spatial Digital"
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const { scrollToElement } = useScrollTo();

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToContact = () => {
    scrollToElement("#contact", { behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen space-bg relative overflow-hidden">
      <StarsBackground />
      
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 5, 15], fov: 60 }}>
          <Suspense fallback={null}>
            <SolarSystem />
            <OrbitControls 
              enableZoom={false} 
              autoRotate 
              autoRotateSpeed={0.5}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left space-y-10">
            {/* Greeting */}
            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-semibold neon-text">
                 Hello, je suis
              </h3>
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold neon-text leading-tight text-white">
                Sandjon Yves
              </h1>
              <Typewriter 
                words={skills}
                speed={100}
                deleteSpeed={50}
                pauseTime={2000}
                className="h-16"
              />
            </div>

            {/* Description */}
            <p className="text-xl sm:text-2xl leading-relaxed max-w-2xl mx-auto lg:mx-0 text-slate-300">
              Naviguant à travers les galaxies du code, je crée des applications 
              qui transcendent les limites du possible. Chaque projet est une 
              nouvelle mission spatiale vers l'innovation.
            </p>

            {/* CTA Button */}
            <div className="pt-6">
              <Button
                variant="space"
                size="xl"
                onClick={scrollToContact}
                
              >
                Décoller vers le contact
              </Button>
            </div>
          </div>

          <div className="hidden lg:flex justify-center items-center">
  <div className="relative">
    {/* Pulsing glow effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-sky-400/30 to-cyan-400/30 rounded-full blur-2xl animate-pulse"></div>
    
    {/* Outer glow and shadow */}
    <div className="absolute inset-0 bg-gradient-to-r from-sky-400/10 to-cyan-400/10 rounded-full blur-xl shadow-[0_0_20px_rgba(56,189,248,0.3)]"></div>
    
    {/* Profile photo container */}
    <div className="relative w-92 h-92 rounded-full bg-gradient-to-br from-sky-400/20 to-cyan-400/20 border-2 border-sky-400/30 flex items-center justify-center overflow-hidden group">
    <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-sky-400/20 to-cyan-400/20 border-2 border-sky-400/30 flex items-center justify-center overflow-hidden group">
      <Image 
        src="/images/profile/moi.jpg"
        width={320} // Slightly larger to ensure full coverage
        height={320}
        alt="Profile picture"
        className="rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      {/* Inner glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-sky-400/10 to-cyan-400/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
    </div>
  </div>
</div>
        </div>
      </div>
    </section>
  );
} 