"use client";

import { Section, Container } from "../components/layout";
import { Card, Badge} from '../components/ui'
import { useTranslation } from 'react-i18next';

export default function Skills() {
  const { t } = useTranslation('common');
  const skillsDataRaw = t('skills.list', { returnObjects: true });
  const skillsData = Array.isArray(skillsDataRaw) ? skillsDataRaw : [];
  return (
    <Section id="skills" background="default" padding="py-24">
      <Container maxWidth="max-w-4xl">
        <div className="flex flex-col items-center mb-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-sky-400 font-mono">
            {t('skills.title')}
          </h2>
          <div className="w-24 h-1 bg-sky-400 mx-auto rounded-full animate-pulse" />
        </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-sky-100 neon-text mb-2 text-center">
            {t('skills.subtitle')}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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