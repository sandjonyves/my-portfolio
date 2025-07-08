"use client";

import { motion } from "framer-motion";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Section, Container } from "../../../components/layout";
import {Button} from '../../../components/ui'
import ProjectCard from "../../../components/cards/ProjectCard";
import { projects } from "../../../lib/constants";
import { useTranslation } from 'react-i18next';
import { useIntersectionObserver } from "../../../lib/hooks";
const ProjectsPage = () => {
  const { t } = useTranslation('common');
  const {ref} = useIntersectionObserver()
  const projectsRaw = t('projects.list', { returnObjects: true });
 console.log(projectsRaw)
  const projects =projectsRaw;
  return (
    <div ref={ref} className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <Section 
        id="projects-header"
        background="default"
        padding="pt-32 pb-16"
        container={false}
      >
        <Container maxWidth="max-w-4xl" animate>
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent mb-6"
            >
              Mes Projets
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-slate-300 max-w-2xl mx-auto"
            >
              Découvrez une sélection de mes projets les plus récents, 
              démontrant mes compétences en développement web et mobile.
            </motion.p>
          </div>
        </Container>
      </Section>

      {/* Projects Timeline */}
      <Section 
        id="projects-timeline"
        background="default"
        padding="pb-16"
        container={false}
      >
        <Container maxWidth="max-w-6xl">
          <VerticalTimeline
            lineColor="rgba(14, 165, 233, 0.3)"
            className="vertical-timeline-custom-line"
          >
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </VerticalTimeline>
        </Container>
      </Section>

      {/* Back to Home */}
      <Section 
        id="back-to-home"
        background="default"
        padding="pb-16"
        container={false}
      >
        <Container maxWidth="max-w-4xl" animate>
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Button
                variant="space"
                size="lg"
                onClick={() => window.location.href = '/'}
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                }
              >
                Retour à l'accueil
              </Button>
            </motion.div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default ProjectsPage; 