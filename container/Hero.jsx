"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { Suspense, useState, useEffect } from "react";
import { StarsBackground } from "@/components/canvas";
import { Typewriter } from "@/components/animations";
import { Button } from "@/components/ui";
import { useScrollTo } from "../lib/hooks";
import Image from "next/image";
import { useTranslation } from 'react-i18next';
import { useIntersectionObserver } from "../lib/hooks";
import { ContactPhone } from "@mui/icons-material";

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

export default function Hero() {
  const {t} = useTranslation('common')
  const {ref} = useIntersectionObserver({ threshold: 0.3 })
  const [mounted, setMounted] = useState(false);
  const { scrollToElement } = useScrollTo();
  const skills = t('hero.list',{returnObjects:true})

  useEffect(() => {
    console.log(skills)
    setMounted(true);
  }, []);

  const scrollToContact = () => {
    scrollToElement("#contact", { behavior: "smooth" });
  };

  return (
    <>
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes scan {
          0%, 100% { transform: translateY(-100%); }
          50% { transform: translateY(200%); }
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 12s linear infinite;
        }
        .animate-scan {
          animation: scan 4s ease-in-out infinite;
        }
      `}</style>

      <section ref={ref} id="home" className="min-h-screen space-bg relative overflow-hidden">
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
              <div className="mt-6">
                <h3 className="text-xl sm:text-2xl font-semibold neon-text">
                   {t('hero.salutation')}
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
              {t('hero.description')}
              </p>

              {/* CTA Button */}
              <div className="pt-6">
                <Button
                  variant="space"
                  size="xl"
                  onClick={scrollToContact}
                  
                >
                  {t('contact.title')} 
                  <ContactPhone className="ml-2 h-6 w-6"/>
                </Button>
              </div>
            </div>

            {/* Right side - Photo hexagonale avec effets */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative w-[500px] h-[500px]">
                {/* Orbites animées multiples */}
                <div className="absolute inset-0 animate-spin-slow">
                  <div className="absolute top-0 left-1/2 w-3 h-3 -ml-1.5 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
                </div>
                <div className="absolute inset-4 animate-spin-reverse">
                  <div className="absolute top-0 left-1/2 w-2.5 h-2.5 -ml-1.25 bg-sky-400 rounded-full shadow-[0_0_8px_rgba(56,189,248,0.8)]"></div>
                </div>
                <div className="absolute inset-8 animate-spin-slow" style={{animationDuration: '20s'}}>
                  <div className="absolute top-0 left-1/2 w-2 h-2 -ml-1 bg-blue-400 rounded-full shadow-[0_0_6px_rgba(96,165,250,0.8)]"></div>
                </div>

                {/* Anneaux de particules */}
                <div className="absolute inset-0 opacity-30">
                  <svg className="w-full h-full animate-spin-slow" style={{animationDuration: '30s'}}>
                    <circle cx="50%" cy="50%" r="48%" fill="none" stroke="url(#gradient1)" strokeWidth="1" strokeDasharray="4 8" />
                  </svg>
                </div>
                <div className="absolute inset-8 opacity-20">
                  <svg className="w-full h-full animate-spin-reverse" style={{animationDuration: '25s'}}>
                    <circle cx="50%" cy="50%" r="45%" fill="none" stroke="url(#gradient2)" strokeWidth="1" strokeDasharray="3 6" />
                  </svg>
                </div>

                {/* Définition des gradients */}
                <svg className="absolute" width="0" height="0">
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.8" />
                    </linearGradient>
                    <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.6" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Effet de lueur pulsante multiple */}
                <div className="absolute inset-12 bg-gradient-to-r from-cyan-500/20 via-sky-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute inset-16 bg-gradient-to-br from-sky-400/30 to-cyan-400/30 rounded-full blur-2xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
                
                {/* Hexagone container principal */}
                <div className="absolute inset-16">
                  <div className="relative w-full h-full group">
                    {/* Bordures hexagonales animées */}
                    <div className="absolute inset-0 opacity-50">
                      <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow" style={{animationDuration: '40s'}}>
                        <polygon 
                          points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5" 
                          fill="none" 
                          stroke="url(#gradient1)" 
                          strokeWidth="0.5"
                          className="drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]"
                        />
                      </svg>
                    </div>
                    <div className="absolute inset-2 opacity-70">
                      <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-reverse" style={{animationDuration: '35s'}}>
                        <polygon 
                          points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5" 
                          fill="none" 
                          stroke="url(#gradient2)" 
                          strokeWidth="0.8"
                          className="drop-shadow-[0_0_10px_rgba(14,165,233,0.6)]"
                        />
                      </svg>
                    </div>

                    {/* Container de la photo avec clip-path hexagonal */}
                    <div 
                      className="absolute inset-6 overflow-hidden transition-all duration-500 group-hover:inset-4"
                      style={{
                        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                      }}
                    >
                      {/* Bordure intérieure brillante */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/40 via-sky-400/40 to-blue-400/40 animate-pulse"></div>
                      
                      {/* Photo */}
                      <div className="absolute inset-[2px]" style={{
                        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                      }}>
                        <Image 
                          src="/images/profile/moi.jpg"
                          fill
                          alt="Profile picture"
                          className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                        />
                        {/* Overlay holographique au survol */}
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 via-sky-400/20 to-blue-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    </div>

                    {/* Coins lumineux */}
                    <div className="absolute -top-2 -left-2 w-4 h-4 bg-cyan-400 rounded-full blur-sm animate-pulse"></div>
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-sky-400 rounded-full blur-sm animate-pulse" style={{animationDelay: '0.3s'}}></div>
                    <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-400 rounded-full blur-sm animate-pulse" style={{animationDelay: '0.6s'}}></div>
                    <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-cyan-400 rounded-full blur-sm animate-pulse" style={{animationDelay: '0.9s'}}></div>
                  </div>
                </div>

                {/* Effet de scan holographique */}
                <div className="absolute inset-16 overflow-hidden pointer-events-none" style={{
                  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                }}>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent h-full animate-scan"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}