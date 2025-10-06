// src/utils/project-utils.ts
import { projects, Project } from "@/data/projects";

export const getProjectData = (slug: string): Project | undefined => {
  return projects[slug];
};

export const projectsMin = [
  {
    title: "NODO Dark Kitchens Paraguay",
    description: "Primera red de cocinas fantasma en Paraguay para expansión de delivery sin inversión inicial.",
    image: "/images/nodo/nodo.png",
    tags: ["Next.js 15.3.4", "TypeScript 5", "Tailwind CSS 4", "GSAP 3.13.0", "Radix UI", "EmailJS"],
    githubUrl: "https://github.com/Aaron3312/dark-kitchens-paraguay",
    liveUrl: "https://nododk.com/",
    slug: "nodo-dark-kitchens"
  },

  {
    title: "Security Multi-Agent System",
    description: "Prison security simulation with autonomous drones, security cameras, and AI-powered threat detection.",
    image: "https://raw.githubusercontent.com/Aaron3312/my-portfolio/master/public/images/Security.gif",
    tags: ["Unity", "Python", "Computer Vision", "AI", "Autonomous Agents"],
    githubUrl: "https://github.com/Aaron3312/ProyectoDronUnity",
    liveUrl: "https://youtu.be/k5nwyPjoEUE",
    slug: "security-system"
  },
  {
    title: "JAI-VIER: Sistema de Gestión de Tareas",
    description: "Sistema completo de gestión de tareas inspirado en Jira, desarrollado con Next.js, TypeScript y patrones de diseño avanzados.",
    image: "/images/jaivier/image.png",
    tags: ["Next.js", "TypeScript", "Spring Boot", "TailwindCSS", "Docker"],
    githubUrl: "https://github.com/Aaron3312/task-management-system",
    liveUrl: "https://task-management-system-blue-six.vercel.app",
    slug: "jai-vier"
  },
    {
    title: "Cronos Project",
    description: "AI-powered project management platform that transforms project descriptions into actionable task lists.",
    image: "https://raw.githubusercontent.com/Aaron3312/my-portfolio/master/public/images/Cronos.png",
    tags: ["Node.js", "Express", "PostgreSQL", "OpenAI API", "Notion API"],
    githubUrl: "https://github.com/Aaron3312/CronosProyect1",
    liveUrl: "",
    slug: "cronos"
  },
  {
    title: "Cache of Recipes",
    description: "Aplicación web moderna para descubrir, guardar y compartir recetas culinarias con autenticación, favoritos y calificaciones.",
    image: "/images/CacheOfRecipes/Cache.png",
    tags: ["Next.js 15", "React 19", "TypeScript", "Firebase", "Spoonacular API", "GSAP"],
    githubUrl: "https://github.com/Aaron3312/cacheofrecipes",
    liveUrl: "https://cacheofrecipes.vercel.app",
    slug: "cache-of-recipes"
  },
  {
    title: "BakeryPOS",
    description: "Comprehensive point-of-sale system for bakeries with offline functionality and real-time order management.",
    image: "/images/BakeryPos/BakeryPos.gif",
    tags: ["JavaScript", "Firebase", "IndexedDB", "Python", "Thermal Printing"],
    githubUrl: "",
    liveUrl: "",
    slug: "bakery-pos"
  },
  {
    title: "Solo Para Eva",
    description: "E-commerce showcase for artisanal natural body care products with elegant product display and categorization.",
    image: "https://raw.githubusercontent.com/Aaron3312/my-portfolio/master/public/images/SoloParaEva.png",
    tags: ["Next.js", "React", "TailwindCSS", "Responsive Design"],
    githubUrl: "https://github.com/Aaron3312/tienda-limpieza-corporal",
    liveUrl: "https://soloparaeva.lat",
    slug: "solo-para-eva"
  },
  {
    title: "Web2",
    description: "Modern web application for exploring movies and series using TMDB API with advanced search functionality.",
    image: "https://raw.githubusercontent.com/Aaron3312/my-portfolio/master/public/images/Web2.png",
    tags: ["React", "Vite", "TMDB API", "Cypress", "GitHub Actions"],
    githubUrl: "https://github.com/Aaron3312/web2",
    liveUrl: "https://aaron3312.github.io/web2/",
    slug: "cuevana"
  },

  {
    title: "SupplyStream",
    description: "AI-powered inventory management system for Food Bank Guadalajara, reducing manual tracking time by 50%.",
    image: "https://raw.githubusercontent.com/Aaron3312/my-portfolio/master/public/images/SupplyStream.png",
    tags: ["React Native", "Firebase", "TensorFlow Lite", "Machine Learning"],
    githubUrl: "https://github.com/Aaron3312/SupplyStreamR",
    liveUrl: "",
    slug: "supply-stream"
  },
  {
    title: "Warehouse MultiAgent System",
    description: "Autonomous robotics simulation with real-time computer vision using YOLOv5 and intelligent navigation.",
    image: "https://raw.githubusercontent.com/Aaron3312/my-portfolio/master/public/images/Warehouse.gif",
    tags: ["Unity", "Python", "YOLOv5", "UDP", "NavMesh", "Computer Vision", "AI", "Autonomous Agents", "Intelligent Navigation", "React"],
    githubUrl: "https://github.com/Aaron3312/ProyectoSkeletons",
    liveUrl: "https://photos.app.goo.gl/vM2MzAaMhbRRqmNJ8",
    slug: "warehouse-system"
  }
]