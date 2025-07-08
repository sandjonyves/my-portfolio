"use client";

import { Section, Container } from "../components/layout";
import { socialLinks } from "../lib/constants";
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation('common');

  return (
    <Section 
      background="default"
      padding="py-12"
      className="bg-slate-900"
    >
      <Container>
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4 text-sky-400">
            🛰️ Portfolio Spatial
          </h3>
          <p className="mb-6 max-w-md mx-auto text-slate-400">
            Développeur Full Stack passionné par l'innovation et l'exploration 
            des nouvelles technologies.
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-sky-400 transition-colors duration-200"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
          
          <footer className="py-8 text-center text-slate-400 text-sm">
            {t('footer.text', 'Tous droits réservés.')}
          </footer>
        </div>
      </Container>
    </Section>
  );
} 