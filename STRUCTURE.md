# 📁 Structure du Projet Portfolio

## 🏗️ Architecture Modulaire

Ce projet a été restructuré pour une meilleure maintenabilité et réutilisabilité des composants.

## 📂 Structure des Dossiers

```
portfolio/
├── app/                          # Pages Next.js
│   ├── globals.css              # Styles globaux
│   ├── layout.tsx               # Layout principal
│   ├── page.tsx                 # Page d'accueil
│   └── projects/
│       └── page.jsx             # Page des projets
├── components/                   # Composants React
│   ├── ui/                      # Composants UI réutilisables
│   │   ├── Button.jsx           # Bouton avec variantes
│   │   ├── Card.jsx             # Carte avec effets
│   │   ├── Badge.jsx            # Badge pour technologies
│   │   └── index.js             # Exports
│   ├── layout/                  # Composants de mise en page
│   │   ├── Section.jsx          # Section avec animations
│   │   ├── Container.jsx        # Conteneur centré
│   │   └── index.js             # Exports
│   ├── forms/                   # Composants de formulaire
│   │   ├── Input.jsx            # Champ de saisie
│   │   ├── Textarea.jsx         # Zone de texte
│   │   └── index.js             # Exports
│   ├── animations/              # Composants d'animation
│   │   ├── Typewriter.jsx       # Effet machine à écrire
│   │   ├── FloatingParticles.jsx # Particules flottantes
│   │   └── index.js             # Exports
│   ├── cards/                   # Cartes spécialisées
│   │   └── ProjectCard.jsx      # Carte de projet
│   ├── canvas/                  # Composants Three.js
│   │   ├── Earth.jsx            # Terre 3D
│   │   ├── Stars.jsx            # Étoiles 3D
│   │   └── index.ts             # Exports
│   ├── Navbar.jsx               # Navigation
│   ├── Hero.jsx                 # Section héro
│   ├── About.jsx                # Section à propos
│   ├── Projects.jsx             # Section projets
│   ├── Experience.jsx           # Section expérience
│   ├── Education.jsx            # Section éducation
│   ├── Contact.jsx              # Section contact
│   ├── Footer.jsx               # Pied de page
│   └── StarsBackground.jsx      # Arrière-plan étoilé
├── lib/                         # Utilitaires et logique
│   ├── hooks/                   # Hooks personnalisés
│   │   ├── useIntersectionObserver.js
│   │   ├── useScrollTo.js
│   │   └── index.js             # Exports
│   ├── constants/               # Données et constantes
│   │   ├── projects.js          # Données des projets
│   │   ├── navigation.js        # Navigation et liens sociaux
│   │   └── index.js             # Exports
│   ├── utils/                   # Fonctions utilitaires
│   │   ├── Loader.jsx           # Composant de chargement
│   │   └── motion.js            # Variantes d'animation
│   └── types/                   # Types TypeScript (futur)
├── public/                      # Assets statiques
│   ├── assets/                  # Images et médias
│   ├── lottie/                  # Animations Lottie
│   └── images/                  # Images du projet
└── utils/                       # Ancien dossier (à migrer)
```

## 🧩 Composants Réutilisables

### UI Components (`components/ui/`)

#### Button
```jsx
import { Button } from '../components/ui';

<Button 
  variant="primary" // primary, secondary, outline, ghost, space
  size="md"         // sm, md, lg, xl
  onClick={handleClick}
  icon={<Icon />}
>
  Texte du bouton
</Button>
```

#### Card
```jsx
import { Card } from '../components/ui';

<Card 
  variant="default" // default, glass, terminal, project
  hover={true}
  glow={false}
>
  Contenu de la carte
</Card>
```

#### Badge
```jsx
import { Badge } from '../components/ui';

<Badge 
  variant="primary" // default, primary, success, warning, error, purple, tech
  size="md"         // sm, md, lg
  animated={true}
>
  Technologie
</Badge>
```

### Layout Components (`components/layout/`)

#### Section
```jsx
import { Section } from '../components/layout';

<Section 
  id="section-id"
  background="default" // default, dark, glass, space
  padding="py-20"
  container={true}
  maxWidth="max-w-7xl"
  animate={true}
>
  Contenu de la section
</Section>
```

#### Container
```jsx
import { Container } from '../components/layout';

<Container 
  maxWidth="max-w-7xl"
  padding="px-4 sm:px-6 lg:px-8"
  animate={false}
>
  Contenu centré
</Container>
```

### Form Components (`components/forms/`)

#### Input
```jsx
import { Input } from '../components/forms';

<Input
  label="Nom"
  name="name"
  type="text"
  placeholder="Votre nom"
  value={value}
  onChange={handleChange}
  error={error}
  required={true}
/>
```

#### Textarea
```jsx
import { Textarea } from '../components/forms';

<Textarea
  label="Message"
  name="message"
  placeholder="Votre message"
  value={value}
  onChange={handleChange}
  rows={4}
  required={true}
/>
```

### Animation Components (`components/animations/`)

#### Typewriter
```jsx
import { Typewriter } from '../components/animations';

<Typewriter
  words={["Mot 1", "Mot 2", "Mot 3"]}
  speed={100}
  deleteSpeed={50}
  pauseTime={2000}
/>
```

#### FloatingParticles
```jsx
import { FloatingParticles } from '../components/animations';

<FloatingParticles
  count={8}
  color="bg-sky-400"
  size="w-2 h-2"
  duration={3}
/>
```

## 🎣 Hooks Personnalisés (`lib/hooks/`)

### useIntersectionObserver
```jsx
import { useIntersectionObserver } from '../lib/hooks';

const [ref, isIntersecting, hasIntersected] = useIntersectionObserver({
  threshold: 0.3,
  rootMargin: '0px'
});
```

### useScrollTo
```jsx
import { useScrollTo } from '../lib/hooks';

const { scrollToElement, scrollToTop } = useScrollTo();

scrollToElement('#section-id', { behavior: 'smooth' });
scrollToTop({ behavior: 'smooth' });
```

## 📊 Constantes (`lib/constants/`)

### Projects
```jsx
import { projects, statusColors } from '../lib/constants';

// Utilisation des données de projets
projects.map(project => <ProjectCard project={project} />)
```

### Navigation
```jsx
import { navigationItems, socialLinks } from '../lib/constants';

// Utilisation des liens de navigation
navigationItems.map(item => <NavItem item={item} />)
```

## 🎨 Styles CSS

### Classes Utilitaires
- `space-bg`: Arrière-plan spatial avec étoiles
- `neon-text`: Texte avec effet néon
- `space-button`: Bouton avec effet spatial

### Thème Sombre
- Couleurs principales: `slate-900`, `slate-800`, `slate-700`
- Accents: `sky-400`, `cyan-400`, `blue-600`
- Texte: `slate-100`, `slate-300`

## 🚀 Bonnes Pratiques

### 1. Import des Composants
```jsx
// ✅ Bon - Import depuis les index
import { Button, Card, Badge } from '../components/ui';
import { Section, Container } from '../components/layout';

// ❌ Éviter - Import direct
import Button from '../components/ui/Button';
```

### 2. Utilisation des Hooks
```jsx
// ✅ Bon - Hook personnalisé
const [ref, isIntersecting] = useIntersectionObserver();

// ❌ Éviter - Logique répétée
useEffect(() => {
  const observer = new IntersectionObserver(...);
  // ...
}, []);
```

### 3. Données Centralisées
```jsx
// ✅ Bon - Constantes centralisées
import { projects } from '../lib/constants';

// ❌ Éviter - Données dans les composants
const projects = [...];
```

## 🔄 Migration

Pour migrer les anciens composants vers la nouvelle structure :

1. **Identifier les patterns répétés**
2. **Extraire les composants réutilisables**
3. **Créer les hooks personnalisés**
4. **Centraliser les données**
5. **Mettre à jour les imports**

## 📝 Ajout de Nouveaux Composants

1. Créer le composant dans le bon dossier
2. Ajouter l'export dans le fichier `index.js`
3. Documenter les props et l'utilisation
4. Tester la réutilisabilité

Cette structure modulaire facilite la maintenance, améliore la réutilisabilité et suit les meilleures pratiques React/Next.js. 