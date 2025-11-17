'use client'
import {
  Navbar,
  Hero,
  About,
  Skills,
  Projects,
  Education,
  Experience,
  Contact,
  Footer,
} from "@/container";

import ProjectPage from "@/app/[locale]/projects.jsx";
import { useState } from "react";
import { useScroll,motion } from "framer-motion";


// return (
//   <motion.div style={{ scaleX: scrollYProgress }} />  
// )

export default function HomePage({ params }) {


  const [viewAll, setViewAll] = useState(false);
  const { scrollYProgress } = useScroll();
  const handleViewAll = () => {
    setViewAll(true);
  }
  // params.locale = 'en' ou 'fr'
  return (
    <main className="min-h-screen space-bg">
      {/* <StarsBackground /> */}
      <motion.div 
  className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-[9999]"
  style={{ scaleX: scrollYProgress }} 
/> 
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects handleViewAll={handleViewAll}/>
      {viewAll && <ProjectPage />}
      <Contact />
      <Footer />
    </main>
  );
} 