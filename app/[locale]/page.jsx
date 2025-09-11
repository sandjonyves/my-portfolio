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

import { StarsBackground } from "@/components/canvas";

export default function HomePage({ params }) {
  // params.locale = 'en' ou 'fr'
  return (
    <main className="min-h-screen space-bg">
      {/* <StarsBackground /> */}
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
} 