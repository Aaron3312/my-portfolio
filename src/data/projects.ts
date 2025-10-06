// src/data/projects.ts
import React from 'react';
import { 
  Globe, 
  Cake, 
  Hourglass, 
  Film, 
  HeartHandshake, 
  Brain, 
  Shield 
} from "lucide-react";

export interface Screenshot {
  url: string;
  alt: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  iconName: string;
  iconColor: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  fullDescription: string;
  screenshots?: Screenshot[];
}

export interface ProjectsData {
  [key: string]: Project;
}

export const projects: ProjectsData = {
  "supply-stream": {
    title: "SupplyStream",
    description: "AI-powered inventory management system for Food Bank Guadalajara, reducing manual tracking time by 50%.",
    image: "https://raw.githubusercontent.com/Aaron3312/my-portfolio/master/public/images/SupplyStream.png",
    iconName: "Globe",
    iconColor: "text-sky-600",
    tags: ["React Native", "Firebase", "TensorFlow Lite", "Machine Learning"],
    githubUrl: "https://github.com/Aaron3312/SupplyStreamR",
    liveUrl: "",
    fullDescription: `
      <h2>Overview</h2>
      <p>Developed an AI-powered inventory management system for Food Bank Guadalajara that streamlines operations with an intuitive interface, making it easy for staff to track resources and optimize processes.</p>
      
      <h2>Key Achievements</h2>
      <ul>
        <li><strong>Efficiency Improvement:</strong> Reduced manual tracking time by 50% through automated systems.</li>
        <li><strong>AI Integration:</strong> Implemented computer vision to identify items through device cameras and automatically catalog them.</li>
        <li><strong>Cost Reduction:</strong> Transitioned to serverless architecture, reducing operational costs by 30%.</li>
        <li><strong>Scanning System:</strong> Created an integrated barcode detection system for rapid inventory processing.</li>
      </ul>
      
      <h2>Technologies Used</h2>
      <ul>
        <li><strong>React Native:</strong> For the cross-platform mobile application development.</li>
        <li><strong>Firebase:</strong> For authentication, database, and serverless functions.</li>
        <li><strong>TensorFlow Lite:</strong> For on-device machine learning capabilities.</li>
        <li><strong>Computer Vision:</strong> For automated item identification and cataloging.</li>
      </ul>
    `,
    screenshots: [
      {
        url: "/images/SupplyStream/MovileView.jpg",
        alt: "SupplyStream Mobile Interface"
      },
      {
        url: "/images/SupplyStream/MovileLogin.jpg",
        alt: "SupplyStream Mobile Login"
      },
      {
        url: "/images/SupplyStream/CameraView.jpg",
        alt: "SupplyStream Camera View"
      },
      {
        url: "/images/SupplyStream/Database.jpg",
        alt: "SupplyStream Database Interface"
      }
    ]
  },
  "bakery-pos": {
    title: "BakeryPOS",
    description: "Smart point-of-sale system with offline functionality for bakeries via IndexedDB.",
    image: "/images/BakeryPos/BakeryPos.gif",
    iconName: "Cake",
    iconColor: "text-pink-500",
    tags: ["JavaScript", "Firebase", "IndexedDB", "Python", "Thermal Printing"],
    githubUrl: "",
    liveUrl: "",
    fullDescription: `
      <h2>Overview</h2>
      <p>A comprehensive point-of-sale system specifically designed for bakeries with offline functionality and real-time order management capabilities.</p>
      
      <h2>Key Achievements</h2>
      <ul>
        <li><strong>Offline Functionality:</strong> Built with IndexedDB for 99.9% uptime even without internet connection.</li>
        <li><strong>Real-time Management:</strong> Engineered a real-time order management system using Firebase, reducing processing time by 65%.</li>
        <li><strong>Thermal Printing:</strong> Implemented Python-based thermal printer integration for automatic receipt generation.</li>
      </ul>
      
      <h2>Technologies Used</h2>
      <ul>
        <li><strong>JavaScript:</strong> Core programming language for the application.</li>
        <li><strong>Firebase:</strong> Backend database and authentication system.</li>
        <li><strong>IndexedDB:</strong> For offline data storage and functionality.</li>
        <li><strong>Python:</strong> For thermal printer integration.</li>
      </ul>
    `,
    screenshots: [
      {
        url: "https://raw.githubusercontent.com/Aaron3312/aaron3312/main/posPc.png",
        alt: "BakeryPOS Dashboard"
      },
      {
        url: "https://raw.githubusercontent.com/Aaron3312/aaron3312/main/posPc2.png",
        alt: "BakeryPOS Product Management"
      },
      {
        url: "https://raw.githubusercontent.com/Aaron3312/aaron3312/main/posPc3.png",
        alt: "BakeryPOS Order Processing"
      }
    ]
  },
  "cronos": {
    title: "Cronos Project",
    description: "AI-powered project management platform that transforms project descriptions into actionable task lists.",
    image: "/images/Cronos.png",
    iconName: "Hourglass",
    iconColor: "text-amber-600",
    tags: ["Node.js", "Express", "PostgreSQL", "OpenAI API", "Notion API"],
    githubUrl: "https://github.com/Aaron3312/CronosProyect1",
    liveUrl: "",
    fullDescription: `
      <h2>Overview</h2>
      <p>An innovative AI-powered project management platform that streamlines project setup and task management.</p>
      
      <h2>Project Presentation</h2>
      <div style="position: relative; width: 100%; height: 0; padding-top: 56.2500%; padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden; border-radius: 8px; will-change: transform;">
        <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0; margin: 0;" src="https://www.canva.com/design/DAGH8BuRwig/sTRtHyyXpxexpQt0bXMDpQ/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen"></iframe>
      </div>
      <p style="font-size: 12px; margin-top: 0.5em; text-align: center;"><a href="https://www.canva.com/design/DAGH8BuRwig/sTRtHyyXpxexpQt0bXMDpQ/view?utm_content=DAGH8BuRwig&utm_campaign=designshare&utm_medium=embeds&utm_source=link" target="_blank" rel="noopener" style="color: #666; text-decoration: none;">View Full Presentation</a> by A01638657</p>
      
      <h2>Key Achievements</h2>
      <ul>
        <li><strong>AI Task Generation:</strong> Developed a platform that transforms project descriptions into actionable task lists using AI.</li>
        <li><strong>Efficiency Boost:</strong> Reduced project setup time by 60% across 5 teams with intelligent task organization.</li>
        <li><strong>Deadline Management:</strong> Created an interactive calendar interface that reduced missed deadlines by 30%.</li>
      </ul>
      
      <h2>Technologies Used</h2>
      <ul>
        <li><strong>Node.js & Express:</strong> Backend framework for the application.</li>
        <li><strong>PostgreSQL:</strong> Database for storing project and task data.</li>
        <li><strong>OpenAI API:</strong> For AI-powered task generation and organization.</li>
        <li><strong>Notion API:</strong> For integration with Notion workspaces.</li>
        <li><strong>NGINX:</strong> Web server and reverse proxy.</li>
        <li><strong>GCP & AWS:</strong> For cloud hosting and services.</li>
      </ul>
    `,
    screenshots: [
      {
        url: "https://raw.githubusercontent.com/Aaron3312/aaron3312/main/CronosPage1.png",
        alt: "Cronos Project Dashboard"
      },
      {
        url: "https://raw.githubusercontent.com/Aaron3312/aaron3312/main/CronosPage2.png",
        alt: "Cronos Project Task Management"
      },

      {
        url: "/images/Cronos/Chatbot.png",
        alt: "Cronos Chatbot"
      },
      {
        url: "/images/Cronos/CronoAskAProyect.png",
        alt: "Cronos Ask a Project"
      },
      {
        url: "/images/Cronos/ResponseProyect.png",
        alt: "Cronos Project Response"
      },
      {
        url: "/images/Cronos/ResponseProyect2.png",
        alt: "Cronos Project Response 2"
      },
      {
        url: "/images/Cronos/NotionResponse.png",
        alt: "Cronos Notion Response"
      }
    ]
  },
// Updated cuevana (Web2) project entry
"cuevana": {
    title: "Web2",
    description: "Modern web application for exploring movies and series using TMDB API with advanced search functionality.",
    image: "/images/Web2/MovieDetails.png",
    iconName: "Film",
    iconColor: "text-violet-500",
    tags: ["React", "Vite", "TMDB API", "Cypress", "GitHub Actions"],
    githubUrl: "https://github.com/Aaron3312/web2",
    liveUrl: "https://aaron3312.github.io/web2/",
    fullDescription: `
      <h2>Overview</h2>
      <p>A comprehensive movie and series exploration platform with advanced search and recommendation features.</p>
      
      <h2>Key Achievements</h2>
      <ul>
        <li><strong>Comprehensive Database:</strong> Developed integration with The Movie Database API for extensive movie and series data.</li>
        <li><strong>Advanced Search:</strong> Implemented powerful search functionality and personalized recommendation systems.</li>
        <li><strong>Detailed Views:</strong> Created responsive interfaces with detailed views for titles including synopsis, cast, and trailers.</li>
        <li><strong>User Engagement:</strong> Built an integrated rating and review system for enhanced user engagement.</li>
        <li><strong>CI/CD Pipeline:</strong> Configured CI/CD pipeline with GitHub Actions for automated testing and deployment.</li>
      </ul>
      
      <h2>Technologies Used</h2>
      <ul>
        <li><strong>React.js:</strong> JavaScript library for building the user interface.</li>
        <li><strong>Vite:</strong> Next generation frontend tooling for faster development.</li>
        <li><strong>TMDB API:</strong> External API for movie and series data.</li>
        <li><strong>CSS/SCSS:</strong> For styling and responsive design.</li>
        <li><strong>Cypress:</strong> End-to-end testing framework.</li>
        <li><strong>GitHub Actions:</strong> For CI/CD pipeline automation.</li>
      </ul>
    `,
    screenshots: [
      {
        url: "/images/Web2/Pelis1.png",
        alt: "Movies Overview Page"
      },
      {
        url: "/images/Web2/Peis2.png",
        alt: "Movie Grid Display"
      },
      {
        url: "/images/Web2/Series1.png",
        alt: "Series Browse Page"
      },
      {
        url: "/images/Web2/Estrenos.png",
        alt: "Latest Releases Page"
      },
      {
        url: "/images/Web2/MovieDetails.png",
        alt: "Movie Details View"
      },
      {
        url: "/images/Web2/MovieDetails2.png",
        alt: "Extended Movie Information"
      },
      {
        url: "/images/Web2/SimilarMovies.png",
        alt: "Similar Movies Recommendations"
      }
    ]
  },
  "warehouse-system": {
    title: "Warehouse MultiAgent System",
    description: "Autonomous robotics simulation with real-time computer vision using YOLOv5 and intelligent navigation.",
    image: "https://raw.githubusercontent.com/Aaron3312/my-portfolio/master/public/images/Warehouse.gif",
    iconName: "Brain",
    iconColor: "text-indigo-500",
    tags: ["Unity", "Python", "YOLOv5", "UDP", "NavMesh"],
    githubUrl: "https://github.com/Aaron3312/ProyectoSkeletons",
    liveUrl: "https://photos.app.goo.gl/A92KUd19TzXEcXMr7",
    fullDescription: `
      <h2>Overview</h2>
      <p>An advanced multi-agent system that simulates autonomous robots coordinating in complex warehouse environments.</p>
      
      <h2>Key Achievements</h2>
      <ul>
        <li><strong>Multi-Agent Coordination:</strong> Engineered a warehouse simulation with autonomous robots coordinating in complex environments.</li>
        <li><strong>Real-time Vision:</strong> Implemented real-time computer vision using YOLOv5 with UDP streaming (40% faster than previous systems).</li>
        <li><strong>Intelligent Navigation:</strong> Designed intelligent navigation using NavMesh for dynamic obstacle avoidance and path optimization.</li>
      </ul>
      
      <h2>Technologies Used</h2>
      <ul>
        <li><strong>Unity:</strong> Game engine for 3D simulation environment.</li>
        <li><strong>Python:</strong> For AI algorithms and computer vision.</li>
        <li><strong>YOLOv5:</strong> Real-time object detection model.</li>
        <li><strong>UDP:</strong> Protocol for real-time communication between agents.</li>
        <li><strong>NavMesh:</strong> For pathfinding and navigation.</li>
      </ul>
    `,
    screenshots: [
      {
        url: "https://raw.githubusercontent.com/Aaron3312/ProyectoSkeletons/main/images/robots.png",
        alt: "Autonomous Robots"
      },
      {
        url: "https://raw.githubusercontent.com/Aaron3312/ProyectoSkeletons/main/images/metricas.png",
        alt: "Performance Metrics"
      },
      {
        url: "https://raw.githubusercontent.com/Aaron3312/ProyectoSkeletons/main/images/Navmesh.png",
        alt: "Navigation Mesh"
      }
    ]
  },
  "security-system": {
    title: "Security Multi-Agent System",
    description: "Prison security simulation with autonomous drones, security cameras, and AI-powered threat detection.",
    image: "https://raw.githubusercontent.com/Aaron3312/my-portfolio/master/public/images/Security.gif",
    iconName: "Shield",
    iconColor: "text-emerald-600",
    tags: ["Unity", "Python", "Computer Vision", "AI", "Autonomous Agents"],
    githubUrl: "https://raw.githubusercontent.com/Aaron3312/ProyectoDronUnity",
    liveUrl: "https://youtu.be/k5nwyPjoEUE",
    fullDescription: `
      <h2>Overview</h2>
      <p>A multi-agent simulation system modeling interactions between autonomous drones, security cameras, and security personnel in a prison environment.</p>
      
      <h2>Project Presentation</h2>
      <div style="position: relative; width: 100%; height: 0; padding-top: 56.2500%; padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden; border-radius: 8px; will-change: transform;">
        <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0; margin: 0;" src="https://www.canva.com/design/DAGXyHlqQeE/R9dCppmP2wrmYetSsfTzyA/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen"></iframe>
      </div>
      <p style="font-size: 12px; margin-top: 0.5em; text-align: center;"><a href="https://www.canva.com/design/DAGXyHlqQeE/R9dCppmP2wrmYetSsfTzyA/view?utm_content=DAGXyHlqQeE&utm_campaign=designshare&utm_medium=embeds&utm_source=link" target="_blank" rel="noopener" style="color: #666; text-decoration: none;">Black Purple 3D Cybersecurity Keynote Presentation</a> by aaron hernandez</p>
      
      <h2>Key Achievements</h2>
      <ul>
        <li><strong>Autonomous Surveillance:</strong> Implemented an autonomous drone that performs aerial patrols and detects suspicious activities using computer vision.</li>
        <li><strong>Integrated Security System:</strong> Created a system where fixed cameras and personnel collaborate in real-time to respond to detected threats.</li>
        <li><strong>Real-time Threat Detection:</strong> Utilized AI to identify potential security breaches and coordinate appropriate responses.</li>
      </ul>
      
      <h2>Technologies Used</h2>
      <ul>
        <li><strong>Unity:</strong> For creating the 3D simulation environment.</li>
        <li><strong>Python:</strong> Backend for AI algorithms and agent behavior.</li>
        <li><strong>Computer Vision:</strong> For threat detection and surveillance.</li>
        <li><strong>Autonomous Agents:</strong> For simulating independent security entities.</li>
      </ul>
    `,
    screenshots: [
      {
        url: "https://raw.githubusercontent.com/Aaron3312/ProyectoDronUnity/main/Images/Dron.png",
        alt: "Autonomous Drone"
      },
      {
        url: "https://raw.githubusercontent.com/Aaron3312/ProyectoDronUnity/main/Images/SecurityCams.png",
        alt: "Security Cameras"
      },
      {
        url: "https://raw.githubusercontent.com/Aaron3312/ProyectoDronUnity/main/Images/SecurityGuard.png",
        alt: "Security Personnel"
      },
      {
        url: "https://raw.githubusercontent.com/Aaron3312/ProyectoDronUnity/main/Images/Ladron.png",
        alt: "Threat"
      }
    ]
  },
  "solo-para-eva": {
    title: "Solo Para Eva",
    description: "E-commerce showcase for artisanal natural body care products with elegant product display and categorization.",
    image: "/images/SoloParaEva.png",
    iconName: "HeartHandshake",
    iconColor: "text-red-500",
    tags: ["Next.js", "React", "TailwindCSS", "Responsive Design"],
    githubUrl: "https://github.com/Aaron3312/tienda-limpieza-corporal",
    liveUrl: "https://soloparaeva.lat",
    fullDescription: `
      <h2>Overview</h2>
      <p>A modern e-commerce showcase for artisanal natural body care products, focused on creating an elegant and user-friendly shopping experience.</p>
      
      <h2>Key Achievements</h2>
      <ul>
        <li><strong>Complete E-commerce Showcase:</strong> Developed a comprehensive platform for artisanal natural body care products.</li>
        <li><strong>Responsive Design:</strong> Implemented elegant product display and categorization with full responsiveness.</li>
        <li><strong>Intuitive Interface:</strong> Created an intuitive interface for product exploration with detailed views for each item.</li>
        <li><strong>User Engagement:</strong> Integrated customer testimonials and product filtering capabilities.</li>
        <li><strong>Front-end Excellence:</strong> Built as part of the "Servicio Becario" program showcasing comprehensive front-end development skills.</li>
      </ul>
      
      <h2>Technologies Used</h2>
      <ul>
        <li><strong>Next.js:</strong> React framework for server-side rendering and static site generation.</li>
        <li><strong>React:</strong> JavaScript library for building the user interface.</li>
        <li><strong>TailwindCSS:</strong> Utility-first CSS framework for styling.</li>
        <li><strong>Responsive Design:</strong> Mobile-first approach ensuring excellent UX across all devices.</li>
      </ul>
    `,
    screenshots: [
      {
        url: "https://raw.githubusercontent.com/Aaron3312/tienda-limpieza-corporal/master/landingSoloEva.png",
        alt: "Solo Para Eva Landing Page"
      },
      {
        url: "https://raw.githubusercontent.com/Aaron3312/tienda-limpieza-corporal/master/ProductosSoloEva.png",
        alt: "Solo Para Eva Products Page"
      },
      {
        url: "https://raw.githubusercontent.com/Aaron3312/tienda-limpieza-corporal/master/NosotrosSoloEva.png",
        alt: "Solo Para Eva About Us Page"
      }
    ]
  },
  "jai-vier": {
    title: "JAI-VIER: Sistema de Gestión de Tareas",
    description: "Sistema completo de gestión de tareas inspirado en Jira, desarrollado con Next.js, TypeScript y patrones de diseño avanzados.",
    image: "/images/jaivier/image.png",
    iconName: "Brain",
    iconColor: "text-blue-600",
    tags: ["Next.js", "TypeScript", "Spring Boot", "TailwindCSS", "Docker"],
    githubUrl: "https://github.com/Aaron3312/task-management-system",
    liveUrl: "https://task-management-system-blue-six.vercel.app",
    fullDescription: `
      <h2>Overview</h2>
      <p>JAI-VIER es un sistema completo de gestión de tareas inspirado en Jira, desarrollado con Next.js, TypeScript y patrones de diseño avanzados. Ofrece una solución integral para la gestión de proyectos, sprints y tareas con una interfaz moderna y intuitiva.</p>
      
      <h2>Project Presentation</h2>
      <div style="position: relative; width: 100%; height: 0; padding-top: 56.2500%; padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden; border-radius: 8px; will-change: transform;">
        <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0; margin: 0;" src="https://www.canva.com/design/DAGp59TPwPo/IEnPjcm00_xPazineNMjJA/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen"></iframe>
      </div>
      <p style="font-size: 12px; margin-top: 0.5em; text-align: center;"><a href="https://www.canva.com/design/DAGp59TPwPo/IEnPjcm00_xPazineNMjJA/view?utm_content=DAGp59TPwPo&utm_campaign=designshare&utm_medium=embeds&utm_source=link" target="_blank" rel="noopener" style="color: #666; text-decoration: none;">JAI-VIER Presentation</a> by Luis Fernando Cuevas Arroyo</p>
      
      <h2>Key Features</h2>
      <ul>
        <li><strong>Gestión de Proyectos:</strong> Crear, editar y monitorear proyectos con herramientas completas de administración.</li>
        <li><strong>Gestión de Sprints:</strong> Organizar el trabajo en sprints con fechas de inicio y fin, monitoreo en tiempo real.</li>
        <li><strong>Gestión de Tareas:</strong> Crear, asignar y dar seguimiento a tareas y subtareas con estados personalizables.</li>
        <li><strong>Panel de Control:</strong> Visualizar el estado de proyectos, sprints y tareas en tiempo real.</li>
        <li><strong>Informes Detallados:</strong> Analizar progreso, velocidad del equipo y desviaciones de cronograma.</li>
        <li><strong>Interfaz Moderna:</strong> Diseño responsive con componentes de shadcn/ui y Tailwind CSS.</li>
      </ul>
      
      <h2>Design Patterns Implemented</h2>
      <ul>
        <li><strong>Bridge Pattern:</strong> Separación de tareas de los métodos de notificación para mayor flexibilidad.</li>
        <li><strong>Factory Pattern:</strong> Creación automática de tareas, dividiendo las que superan 4 horas.</li>
        <li><strong>Singleton Pattern:</strong> Manejo centralizado del estado de la aplicación en memoria.</li>
        <li><strong>Composite Pattern:</strong> Trabajo uniforme con tareas y subtareas en jerarquías complejas.</li>
      </ul>
      
      <h2>Technologies Used</h2>
      <ul>
        <li><strong>Frontend:</strong> Next.js, React, TypeScript, Tailwind CSS para una experiencia moderna.</li>
        <li><strong>UI Components:</strong> shadcn/ui basado en Radix UI para componentes accesibles.</li>
        <li><strong>Backend:</strong> Spring Boot API REST para lógica de negocio robusta.</li>
        <li><strong>Deployment:</strong> Docker para contenedorización y despliegue automatizado.</li>
        <li><strong>Icons & Utilities:</strong> Lucide React, date-fns para formateo de fechas.</li>
      </ul>
      
      <h2>Team Development (Equipo 31)</h2>
      <ul>
        <li><strong>Tellez:</strong> Project Manager / System Administrator</li>
        <li><strong>Bañales:</strong> Especialista en algoritmos, Java con Spring Boot</li>
        <li><strong>Diego:</strong> Desarrollador Backend</li>
        <li><strong>Fernando Cuevas:</strong> QA Specialist</li>
        <li><strong>Aaron:</strong> Desarrollador Full Stack</li>
        <li><strong>Aram:</strong> Intern Developer</li>
      </ul>
    `,
    screenshots: [
      {
        url: "https://raw.githubusercontent.com/Aaron3312/task-management-system/master/JaivierInicioBlack.png",
        alt: "JAI-VIER Página de Inicio"
      },
      {
        url: "https://raw.githubusercontent.com/Aaron3312/task-management-system/master/JavierProyectsBlack.png",
        alt: "JAI-VIER Gestión de Proyectos"
      },
      {
        url: "https://raw.githubusercontent.com/Aaron3312/task-management-system/master/JaivierSprintsBlack.png",
        alt: "JAI-VIER Gestión de Sprints"
      },
      {
        url: "https://raw.githubusercontent.com/Aaron3312/task-management-system/master/JaivierTareasBlack.png",
        alt: "JAI-VIER Gestión de Tareas"
      },
      {
        url: "https://raw.githubusercontent.com/Aaron3312/task-management-system/master/JaivierTareasDetailBlack.png",
        alt: "JAI-VIER Detalles de Tareas"
      },
      {
        url: "https://raw.githubusercontent.com/Aaron3312/task-management-system/master/InformesJaivierBlack.png",
        alt: "JAI-VIER Informes y Análisis"
      },
      {
        url: "https://raw.githubusercontent.com/Aaron3312/task-management-system/master/EquipoJaivier.png",
        alt: "Equipo JAI-VIER"
      }
    ]
  },
  "cache-of-recipes": {
    title: "Cache of Recipes",
    description: "Aplicación web moderna para descubrir, guardar y compartir recetas culinarias con autenticación, favoritos y calificaciones.",
    image: "/images/CacheOfRecipes/Cache.png",
    iconName: "Cake",
    iconColor: "text-orange-500",
    tags: ["Next.js 15", "React 19", "TypeScript", "Firebase", "Spoonacular API", "GSAP", "Tailwind CSS"],
    githubUrl: "https://github.com/Aaron3312/cacheofrecipes",
    liveUrl: "https://cacheofrecipes.vercel.app",
    fullDescription: `
      <h2>Overview</h2>
      <p>Cache of Recipes es una aplicación web moderna construida con Next.js que permite a los usuarios descubrir, guardar y compartir recetas culinarias. La aplicación utiliza la API de Spoonacular para obtener una amplia variedad de recetas y ofrece funcionalidades avanzadas como autenticación, gestión de favoritos y calificaciones.</p>
      
      <h2>Key Features</h2>
      <ul>
        <li><strong>Búsqueda Avanzada:</strong> Busca recetas por nombre, ingredientes, tipo de cocina, dietas especiales y más.</li>
        <li><strong>Sistema de Favoritos:</strong> Guarda tus recetas preferidas para acceso rápido con sincronización en Firebase.</li>
        <li><strong>Calificaciones y Reseñas:</strong> Sistema completo de valoración con estrellas y comentarios.</li>
        <li><strong>Autenticación Completa:</strong> Registro e inicio de sesión con email/contraseña o Google OAuth.</li>
        <li><strong>Diseño Responsivo:</strong> Interfaz optimizada para dispositivos móviles y escritorio.</li>
        <li><strong>Animaciones GSAP:</strong> Experiencia de usuario fluida con animaciones modernas y efectos visuales.</li>
        <li><strong>Modo Oscuro:</strong> Soporte completo para tema claro y oscuro con transiciones suaves.</li>
        <li><strong>Gestión Inteligente de API:</strong> Sistema robusto con múltiples claves API y manejo de errores.</li>
      </ul>
      
      <h2>Technical Architecture</h2>
      <ul>
        <li><strong>Frontend Moderno:</strong> Next.js 15.3.2 con React 19, TypeScript y Tailwind CSS 4.</li>
        <li><strong>Animaciones Avanzadas:</strong> GSAP para efectos visuales y transiciones fluidas.</li>
        <li><strong>UI Components:</strong> Radix UI y shadcn/ui para componentes accesibles y modernos.</li>
        <li><strong>Backend Services:</strong> Firebase para autenticación, Firestore para datos y Spoonacular API para recetas.</li>
        <li><strong>Form Management:</strong> React Hook Form con validación Zod para formularios robustos.</li>
        <li><strong>State Management:</strong> React Query para gestión eficiente del estado del servidor.</li>
      </ul>
      
      <h2>Security & Performance</h2>
      <ul>
        <li><strong>Autenticación Firebase:</strong> Gestión segura de sesiones con email/password y Google OAuth.</li>
        <li><strong>Reglas Firestore:</strong> Control granular de acceso a datos por usuario.</li>
        <li><strong>API Proxy:</strong> Protección de claves API del frontend con balanceo de carga.</li>
        <li><strong>Optimización:</strong> Lazy loading, code splitting y optimización de imágenes con Next.js.</li>
        <li><strong>Middleware Protection:</strong> Rutas protegidas por autenticación y validación de entrada.</li>
      </ul>
      
      <h2>Data Structure</h2>
      <ul>
        <li><strong>Users Collection:</strong> Perfiles de usuario con información personal y preferencias.</li>
        <li><strong>Favorites Collection:</strong> Gestión de recetas favoritas por usuario.</li>
        <li><strong>Reviews Collection:</strong> Sistema de calificaciones y comentarios con agregación automática.</li>
        <li><strong>Spoonacular Integration:</strong> Proxy inteligente para datos de recetas y nutrición.</li>
      </ul>
    `,
    screenshots: [
      {
        url: "/images/CacheOfRecipes/Cache.png",
        alt: "Cache of Recipes - Página Principal"
      }
    ]
  },
  "nodo-dark-kitchens": {
    title: "NODO Dark Kitchens Paraguay",
    description: "Primera red de cocinas fantasma en Paraguay para expansión de delivery sin inversión inicial.",
    image: "/images/nodo/website.png",
    iconName: "Globe",
    iconColor: "text-orange-600",
    tags: ["Next.js 15.3.4", "TypeScript 5", "Tailwind CSS 4", "GSAP 3.13.0", "Radix UI", "EmailJS"],
    githubUrl: "https://github.com/Aaron3312/dark-kitchens-paraguay",
    liveUrl: "https://nododk.com",
    fullDescription: `
      <h2>Overview</h2>
      <p>NODO Dark Kitchens Paraguay es una aplicación web moderna para la primera red de cocinas fantasma (dark kitchens) en Paraguay. El sitio web promociona servicios de expansión de delivery para restaurantes sin inversión inicial, ofreciendo una solución completa para el crecimiento del negocio gastronómico.</p>
      
      <h2>Key Features</h2>
      <ul>
        <li><strong>Landing Page Completa:</strong> Diseño moderno con video background y animaciones GSAP para una experiencia inmersiva.</li>
        <li><strong>Formulario Lead Generation:</strong> Sistema integrado con EmailJS para captura de restaurantes interesados.</li>
        <li><strong>Galería Interactiva:</strong> Showcase completo de las instalaciones con renders 3D y fotografías profesionales.</li>
        <li><strong>Mapa de Cobertura:</strong> Visualización clara de las áreas de servicio en Paraguay.</li>
        <li><strong>WhatsApp Integration:</strong> Botón flotante para contacto directo y consultas rápidas.</li>
        <li><strong>Responsive Design:</strong> Mobile-first approach con diseño adaptado para todos los dispositivos.</li>
        <li><strong>Animaciones Avanzadas:</strong> GSAP con ScrollTrigger para efectos visuales fluidos y profesionales.</li>
        <li><strong>Newsletter Signup:</strong> Sistema de suscripción para mantenerse actualizado.</li>
      </ul>
      
      <h2>Technical Architecture</h2>
      <ul>
        <li><strong>Framework Moderno:</strong> Next.js 15.3.4 con App Router para SSG optimizado.</li>
        <li><strong>TypeScript 5:</strong> Desarrollo type-safe con mejor mantenibilidad del código.</li>
        <li><strong>Styling System:</strong> Tailwind CSS 4 con sistema de tipografía personalizado (Inter, Space Grotesk, JetBrains Mono, Montserrat).</li>
        <li><strong>UI Components:</strong> Radix UI + Shadcn/ui para componentes accesibles y reutilizables.</li>
        <li><strong>Animation System:</strong> GSAP 3.13.0 con ScrollTrigger para animaciones complejas y efectos glassmorphism.</li>
        <li><strong>Forms:</strong> EmailJS para manejo de formularios sin backend adicional.</li>
        <li><strong>Deployment:</strong> Static export configurado para hosting compartido con optimización de imágenes WebP/AVIF.</li>
      </ul>
      
      <h2>Business Impact</h2>
      <ul>
        <li><strong>Lead Generation:</strong> Captura efectiva de restaurantes interesados en el modelo de dark kitchens.</li>
        <li><strong>Brand Positioning:</strong> Establece NODO como líder innovador en el mercado paraguayo.</li>
        <li><strong>Información Educativa:</strong> Explica claramente el modelo de negocio y beneficios.</li>
        <li><strong>Showcase Profesional:</strong> Demuestra la calidad y capacidades de las instalaciones.</li>
        <li><strong>Múltiples Canales:</strong> Diversos puntos de contacto para diferentes tipos de usuarios.</li>
        <li><strong>SEO Optimizado:</strong> Configurado para mejor visibilidad en búsquedas locales.</li>
      </ul>
      
      <h2>Performance & Optimization</h2>
      <ul>
        <li><strong>Static Export:</strong> Generación estática para máximo rendimiento en hosting compartido.</li>
        <li><strong>Image Optimization:</strong> Formatos modernos WebP y AVIF para carga rápida.</li>
        <li><strong>Code Splitting:</strong> Carga optimizada de componentes con lazy loading.</li>
        <li><strong>Bundle Optimization:</strong> Scripts automatizados para deploy FTP y Vercel.</li>
        <li><strong>Performance Metrics:</strong> Lighthouse optimizado para velocidad y accesibilidad.</li>
      </ul>
      
      <h2>Project Structure</h2>
      <ul>
        <li><strong>Components:</strong> 15+ componentes React personalizados organizados por funcionalidad.</li>
        <li><strong>Sections:</strong> 8 secciones principales (Hero, About, Coverage, Gallery, etc.).</li>
        <li><strong>Custom Hooks:</strong> useGSAPAnimations para manejo centralizado de animaciones.</li>
        <li><strong>Context System:</strong> ThemeContext para gestión de temas y estado global.</li>
        <li><strong>Assets Management:</strong> Organización optimizada de imágenes y videos.</li>
      </ul>
    `,
    screenshots: [
      {
        url: "/images/nodo/website.png",
        alt: "NODO Dark Kitchens - Página Web Principal"
      },
      {
        url: "/images/nodo/SobreNodo.png",
        alt: "NODO Dark Kitchens - Sección Sobre NODO"
      },
      {
        url: "/images/nodo/ComoFunciona.png",
        alt: "NODO Dark Kitchens - Cómo Funciona el Servicio"
      },
      {
        url: "/images/nodo/ContactForm.png",
        alt: "NODO Dark Kitchens - Formulario de Contacto"
      },
      {
        url: "/images/nodo/AnalisisComparativo.png",
        alt: "NODO Dark Kitchens - Análisis Comparativo de Beneficios"
      },
      {
        url: "/images/nodo/Render1.jpeg",
        alt: "NODO Dark Kitchens - Render 3D de las Instalaciones"
      }
    ]
  }
};