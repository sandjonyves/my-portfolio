export const projects = [
  {
    name: "Portfolio Personnel",
    description: "Un portfolio moderne développé avec Next.js, Three.js et Framer Motion. Présente mes projets, compétences et expériences avec des animations fluides et un design responsive.",
    tools: ["Next.js", "Three.js", "Framer Motion", "Tailwind CSS", "JavaScript"],
    demo: "https://votre-portfolio.com",
    code: "https://github.com/votre-username/portfolio",
    date: "2024",
    image: "/project1.jpg",
    status: "En production",
    category: "Frontend"
  },
  {
    name: "Application E-commerce",
    description: "Plateforme e-commerce complète avec gestion des produits, panier d'achat, système de paiement et tableau de bord administrateur.",
    tools: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
    demo: "https://ecommerce-demo.com",
    code: "https://github.com/votre-username/ecommerce",
    date: "2023",
    image: "/project2.jpg",
    status: "Terminé",
    category: "Full Stack"
  },
  {
    name: "Application de Gestion de Tâches",
    description: "Application de gestion de tâches avec authentification, drag & drop, notifications et synchronisation en temps réel.",
    tools: ["Vue.js", "Firebase", "Vuex", "CSS3", "JavaScript"],
    demo: "https://task-manager-demo.com",
    code: "https://github.com/votre-username/task-manager",
    date: "2023",
    image: "/project3.jpg",
    status: "En développement",
    category: "Full Stack"
  },
  {
    name: "API REST",
    description: "API REST complète avec authentification JWT, validation des données, documentation Swagger et tests automatisés.",
    tools: ["Express.js", "PostgreSQL", "JWT", "Jest", "Swagger"],
    demo: "https://api-docs.com",
    code: "https://github.com/votre-username/api-rest",
    date: "2022",
    image: "/project4.jpg",
    status: "Terminé",
    category: "Backend"
  },
  {
    name: "Application Mobile",
    description: "Application mobile cross-platform avec géolocalisation, notifications push et synchronisation hors ligne.",
    tools: ["React Native", "Expo", "Firebase", "Redux", "TypeScript"],
    demo: "https://mobile-app-demo.com",
    code: "https://github.com/votre-username/mobile-app",
    date: "2022",
    image: "/project5.jpg",
    status: "Prototype",
    category: "Mobile"
  }
];

export const statusColors = {
  "En production": "bg-green-500/20 text-green-300 border-green-500/30",
  "Terminé": "bg-blue-500/20 text-blue-300 border-blue-500/30",
  "En développement": "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  "Prototype": "bg-purple-500/20 text-purple-300 border-purple-500/30"
}; 