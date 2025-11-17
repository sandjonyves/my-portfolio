"use client";
import { Section, Container } from "../components/layout";
import { socialLinks } from "../lib/constants";
import { useTranslation } from 'react-i18next';
import { Rocket, Code, Favorite } from '@mui/icons-material';

export default function Footer() {
  const { t } = useTranslation('common');
  const currentYear = new Date().getFullYear();

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        .animate-twinkle {
          animation: twinkle 1.5s ease-in-out infinite;
        }
      `}</style>

      <Section 
        background="default"
        padding="py-0"
        className="relative overflow-hidden"
      >
        {/* Effet d'étoiles en arrière-plan */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="absolute top-10 left-10 w-1 h-1 bg-white rounded-full animate-twinkle"></div>
          <div className="absolute top-20 right-20 w-1 h-1 bg-sky-400 rounded-full animate-twinkle" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-40 left-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-twinkle" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-white rounded-full animate-twinkle" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute bottom-20 right-10 w-1 h-1 bg-sky-300 rounded-full animate-twinkle" style={{animationDelay: '0.8s'}}></div>
        </div>

        {/* Ligne de séparation lumineuse */}
        <div className="relative">
          <div className="h-px bg-gradient-to-r from-transparent via-sky-500 to-transparent animate-glow"></div>
        </div>

        <Container>
          <div className="relative py-16">
            {/* Section principale */}
            <div className="grid md:grid-cols-3 gap-12 mb-12">
              {/* Colonne 1 - À propos */}
              <div className="text-center md:text-left space-y-4">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                  <Rocket className="w-6 h-6 text-sky-400 animate-float" sx={{ fontSize: 24 }} />
                  <h3 className="text-xl font-bold text-sky-400">
                    Sandjon Yves
                  </h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Développeur Full Stack passionné par l'innovation et l'exploration 
                  des nouvelles technologies dans l'univers du développement web.
                </p>
              </div>

              {/* Colonne 2 - Liens rapides */}
              <div className="text-center space-y-4">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center justify-center gap-2">
                  <Code className="text-cyan-400" sx={{ fontSize: 20 }} />
                  Liens Rapides
                </h4>
                <nav className="flex flex-col space-y-2">
                  <a href="#home" className="text-slate-400 hover:text-sky-400 transition-colors duration-200 text-sm">
                    Accueil
                  </a>
                  <a href="#about" className="text-slate-400 hover:text-sky-400 transition-colors duration-200 text-sm">
                    À propos
                  </a>
                  <a href="#projects" className="text-slate-400 hover:text-sky-400 transition-colors duration-200 text-sm">
                    Projets
                  </a>
                  <a href="#contact" className="text-slate-400 hover:text-sky-400 transition-colors duration-200 text-sm">
                    Contact
                  </a>
                </nav>
              </div>

              {/* Colonne 3 - Réseaux sociaux */}
              <div className="text-center md:text-right space-y-4">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Connectons-nous
                </h4>
                <p className="text-slate-400 text-sm mb-4">
                  Suivez mon parcours dans l'espace digital
                </p>
                <div className="flex justify-center md:justify-end gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative w-10 h-10 flex items-center justify-center rounded-lg bg-slate-800/50 border border-slate-700 hover:border-sky-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:-translate-y-1"
                      aria-label={social.name}
                    >
                      <span className="text-slate-400 group-hover:text-sky-400 transition-colors duration-200">
                        {social.icon}
                      </span>
                      {/* Effet de lueur au survol */}
                      <div className="absolute inset-0 rounded-lg bg-sky-400/0 group-hover:bg-sky-400/10 transition-colors duration-300"></div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Séparateur */}
            <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-8"></div>

            {/* Copyright */}
            <div className="text-center space-y-4">
              {/* <div className="flex items-center justify-center gap-2 text-slate-400 text-sm">
                <span>Fait avec</span>
                <Favorite className="text-red-500 animate-pulse" sx={{ fontSize: 16 }} />
                <span>par</span>
                <span className="text-sky-400 font-semibold">Sandjon Yves</span>
              </div> */}
              <p className="text-slate-500 text-xs">
                © {currentYear} {t('footer.text', 'Tous droits réservés.')}
              </p>
              <div className="flex items-center justify-center gap-4 text-xs text-slate-500">
                <a href="#" className="hover:text-sky-400 transition-colors duration-200">
                  Mentions légales
                </a>
                <span>•</span>
                <a href="#" className="hover:text-sky-400 transition-colors duration-200">
                  Confidentialité
                </a>
              </div>
            </div>

            {/* Effet fusée décorative */}
            <div className="absolute -bottom-4 right-10 opacity-10">
              <Rocket sx={{ fontSize: 128 }} className="text-sky-400 rotate-45" style={{ transform: 'rotate(45deg)' }} />
            </div>
          </div>
        </Container>

        {/* Effet de lueur en bas */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-sky-500/10 blur-3xl"></div>
      </Section>
    </>
  );
}