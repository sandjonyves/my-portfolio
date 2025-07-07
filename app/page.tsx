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
  StarsBackground
} from "@/components";

export default function Home() {
  return (
    <main className="min-h-screen space-bg">
      <StarsBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills/>
      <Experience />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
