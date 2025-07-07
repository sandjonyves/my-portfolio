"use client";

import { Section, Container } from "./layout";
import { Card, Badge} from './ui'

const skillsData = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js", "Framer Motion"]
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB", "GraphQL"]
  },
  {
    category: "DevOps",
    skills: ["Docker", "Kubernetes", "AWS", "Vercel", "CI/CD", "Monitoring"]
  },
  {
    category: "Outils",
    skills: ["Git", "GitHub", "VS Code", "Figma", "Postman"]
  }
];

export default function Skills() {
  return (
    <Section id="skills" background="dark" padding="py-20">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-sky-100">
            Mes Compétences
          </h2>
          <div className="w-24 h-1 bg-sky-400 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((group) => (
            <Card key={group.category} variant="glass" className="p-6">
              <h3 className="text-lg font-semibold text-sky-400 mb-4 text-center">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {group.skills.map((skill) => (
                  <Badge key={skill} variant="tech" animated>
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
} 