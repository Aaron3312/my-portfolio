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

// Projects data in English
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
    title: "JAI-VIER: Task Management System",
    description: "Complete task management system inspired by Jira, developed with Next.js, TypeScript and advanced design patterns.",
    image: "/images/jaivier/image.png",
    iconName: "Brain",
    iconColor: "text-blue-600",
    tags: ["Next.js", "TypeScript", "Spring Boot", "TailwindCSS", "Docker"],
    githubUrl: "https://github.com/Aaron3312/task-management-system",
    liveUrl: "https://task-management-system-blue-six.vercel.app",
    fullDescription: `
      <h2>Overview</h2>
      <p>JAI-VIER is a complete task management system inspired by Jira, developed with Next.js, TypeScript and advanced design patterns. It offers a comprehensive solution for managing projects, sprints, and tasks with a modern and intuitive interface.</p>

      <h2>Project Presentation</h2>
      <div style="position: relative; width: 100%; height: 0; padding-top: 56.2500%; padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden; border-radius: 8px; will-change: transform;">
        <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0; margin: 0;" src="https://www.canva.com/design/DAGp59TPwPo/IEnPjcm00_xPazineNMjJA/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen"></iframe>
      </div>
      <p style="font-size: 12px; margin-top: 0.5em; text-align: center;"><a href="https://www.canva.com/design/DAGp59TPwPo/IEnPjcm00_xPazineNMjJA/view?utm_content=DAGp59TPwPo&utm_campaign=designshare&utm_medium=embeds&utm_source=link" target="_blank" rel="noopener" style="color: #666; text-decoration: none;">JAI-VIER Presentation</a> by Luis Fernando Cuevas Arroyo</p>

      <h2>Key Features</h2>
      <ul>
        <li><strong>Project Management:</strong> Create, edit, and monitor projects with comprehensive administration tools.</li>
        <li><strong>Sprint Management:</strong> Organize work into sprints with start and end dates, real-time monitoring.</li>
        <li><strong>Task Management:</strong> Create, assign, and track tasks and subtasks with customizable statuses.</li>
        <li><strong>Control Panel:</strong> Visualize project, sprint, and task status in real-time.</li>
        <li><strong>Detailed Reports:</strong> Analyze progress, team velocity, and schedule deviations.</li>
        <li><strong>Modern Interface:</strong> Responsive design with shadcn/ui components and Tailwind CSS.</li>
      </ul>

      <h2>Design Patterns Implemented</h2>
      <ul>
        <li><strong>Bridge Pattern:</strong> Separation of tasks from notification methods for greater flexibility.</li>
        <li><strong>Factory Pattern:</strong> Automatic task creation, splitting tasks exceeding 4 hours.</li>
        <li><strong>Singleton Pattern:</strong> Centralized application state management in memory.</li>
        <li><strong>Composite Pattern:</strong> Uniform work with tasks and subtasks in complex hierarchies.</li>
      </ul>

      <h2>Technologies Used</h2>
      <ul>
        <li><strong>Frontend:</strong> Next.js, React, TypeScript, Tailwind CSS for a modern experience.</li>
        <li><strong>UI Components:</strong> shadcn/ui based on Radix UI for accessible components.</li>
        <li><strong>Backend:</strong> Spring Boot REST API for robust business logic.</li>
        <li><strong>Deployment:</strong> Docker for containerization and automated deployment.</li>
        <li><strong>Icons & Utilities:</strong> Lucide React, date-fns for date formatting.</li>
      </ul>

      <h2>Team Development (Team 31)</h2>
      <ul>
        <li><strong>Tellez:</strong> Project Manager / System Administrator</li>
        <li><strong>Bañales:</strong> Algorithm Specialist, Java with Spring Boot</li>
        <li><strong>Diego:</strong> Backend Developer</li>
        <li><strong>Fernando Cuevas:</strong> QA Specialist</li>
        <li><strong>Aaron:</strong> Full Stack Developer</li>
        <li><strong>Aram:</strong> Intern Developer</li>
      </ul>
    `,
    screenshots: [
      {
        url: "https://raw.githubusercontent.com/Aaron3312/task-management-system/master/JaivierInicioBlack.png",
        alt: "JAI-VIER Home Page"
      },
      {
        url: "https://raw.githubusercontent.com/Aaron3312/task-management-system/master/JavierProyectsBlack.png",
        alt: "JAI-VIER Project Management"
      },
      {
        url: "https://raw.githubusercontent.com/Aaron3312/task-management-system/master/JaivierSprintsBlack.png",
        alt: "JAI-VIER Sprint Management"
      },
      {
        url: "https://raw.githubusercontent.com/Aaron3312/task-management-system/master/JaivierTareasBlack.png",
        alt: "JAI-VIER Task Management"
      },
      {
        url: "https://raw.githubusercontent.com/Aaron3312/task-management-system/master/JaivierTareasDetailBlack.png",
        alt: "JAI-VIER Task Details"
      },
      {
        url: "https://raw.githubusercontent.com/Aaron3312/task-management-system/master/InformesJaivierBlack.png",
        alt: "JAI-VIER Reports and Analytics"
      },
      {
        url: "https://raw.githubusercontent.com/Aaron3312/task-management-system/master/EquipoJaivier.png",
        alt: "JAI-VIER Team"
      }
    ]
  },
  "cache-of-recipes": {
    title: "Cache of Recipes",
    description: "Modern web application to discover, save and share culinary recipes with authentication, favorites and ratings.",
    image: "/images/CacheOfRecipes/Cache.png",
    iconName: "Cake",
    iconColor: "text-orange-500",
    tags: ["Next.js 15", "React 19", "TypeScript", "Firebase", "Spoonacular API", "GSAP", "Tailwind CSS"],
    githubUrl: "https://github.com/Aaron3312/cacheofrecipes",
    liveUrl: "https://cacheofrecipes.vercel.app",
    fullDescription: `
      <h2>Overview</h2>
      <p>Cache of Recipes is a modern web application built with Next.js that allows users to discover, save, and share culinary recipes. The application uses the Spoonacular API to retrieve a wide variety of recipes and offers advanced features such as authentication, favorites management, and ratings.</p>

      <h2>Key Features</h2>
      <ul>
        <li><strong>Advanced Search:</strong> Search recipes by name, ingredients, cuisine type, special diets and more.</li>
        <li><strong>Favorites System:</strong> Save your preferred recipes for quick access with Firebase synchronization.</li>
        <li><strong>Ratings and Reviews:</strong> Complete rating system with stars and comments.</li>
        <li><strong>Complete Authentication:</strong> Sign up and login with email/password or Google OAuth.</li>
        <li><strong>Responsive Design:</strong> Interface optimized for mobile and desktop devices.</li>
        <li><strong>GSAP Animations:</strong> Smooth user experience with modern animations and visual effects.</li>
        <li><strong>Dark Mode:</strong> Full support for light and dark theme with smooth transitions.</li>
        <li><strong>Smart API Management:</strong> Robust system with multiple API keys and error handling.</li>
      </ul>

      <h2>Technical Architecture</h2>
      <ul>
        <li><strong>Modern Frontend:</strong> Next.js 15.3.2 with React 19, TypeScript and Tailwind CSS 4.</li>
        <li><strong>Advanced Animations:</strong> GSAP for visual effects and smooth transitions.</li>
        <li><strong>UI Components:</strong> Radix UI and shadcn/ui for accessible and modern components.</li>
        <li><strong>Backend Services:</strong> Firebase for authentication, Firestore for data and Spoonacular API for recipes.</li>
        <li><strong>Form Management:</strong> React Hook Form with Zod validation for robust forms.</li>
        <li><strong>State Management:</strong> React Query for efficient server state management.</li>
      </ul>

      <h2>Security & Performance</h2>
      <ul>
        <li><strong>Firebase Authentication:</strong> Secure session management with email/password and Google OAuth.</li>
        <li><strong>Firestore Rules:</strong> Granular access control to data per user.</li>
        <li><strong>API Proxy:</strong> Frontend API key protection with load balancing.</li>
        <li><strong>Optimization:</strong> Lazy loading, code splitting and image optimization with Next.js.</li>
        <li><strong>Middleware Protection:</strong> Authentication-protected routes and input validation.</li>
      </ul>

      <h2>Data Structure</h2>
      <ul>
        <li><strong>Users Collection:</strong> User profiles with personal information and preferences.</li>
        <li><strong>Favorites Collection:</strong> Favorite recipe management per user.</li>
        <li><strong>Reviews Collection:</strong> Rating and comment system with automatic aggregation.</li>
        <li><strong>Spoonacular Integration:</strong> Smart proxy for recipe and nutrition data.</li>
      </ul>
    `,
    screenshots: [
      {
        url: "/images/CacheOfRecipes/Cache.png",
        alt: "Cache of Recipes - Main Page"
      }
    ]
  },
  "nodo-dark-kitchens": {
    title: "NODO Dark Kitchens Paraguay",
    description: "First ghost kitchen network in Paraguay for delivery expansion without initial investment.",
    image: "/images/nodo/website.png",
    iconName: "Globe",
    iconColor: "text-orange-600",
    tags: ["Next.js 15.3.4", "TypeScript 5", "Tailwind CSS 4", "GSAP 3.13.0", "Radix UI", "EmailJS"],
    githubUrl: "https://github.com/Aaron3312/dark-kitchens-paraguay",
    liveUrl: "https://nododk.com",
    fullDescription: `
      <h2>Overview</h2>
      <p>NODO Dark Kitchens Paraguay is a modern web application for the first ghost kitchen network in Paraguay. The website promotes delivery expansion services for restaurants without initial investment, offering a complete solution for food business growth.</p>

      <h2>Key Features</h2>
      <ul>
        <li><strong>Complete Landing Page:</strong> Modern design with video background and GSAP animations for an immersive experience.</li>
        <li><strong>Lead Generation Form:</strong> Integrated system with EmailJS to capture interested restaurants.</li>
        <li><strong>Interactive Gallery:</strong> Complete showcase of facilities with 3D renders and professional photography.</li>
        <li><strong>Coverage Map:</strong> Clear visualization of service areas in Paraguay.</li>
        <li><strong>WhatsApp Integration:</strong> Floating button for direct contact and quick inquiries.</li>
        <li><strong>Responsive Design:</strong> Mobile-first approach with design adapted for all devices.</li>
        <li><strong>Advanced Animations:</strong> GSAP with ScrollTrigger for smooth and professional visual effects.</li>
        <li><strong>Newsletter Signup:</strong> Subscription system to stay updated.</li>
      </ul>

      <h2>Technical Architecture</h2>
      <ul>
        <li><strong>Modern Framework:</strong> Next.js 15.3.4 with App Router for optimized SSG.</li>
        <li><strong>TypeScript 5:</strong> Type-safe development with better code maintainability.</li>
        <li><strong>Styling System:</strong> Tailwind CSS 4 with custom typography system (Inter, Space Grotesk, JetBrains Mono, Montserrat).</li>
        <li><strong>UI Components:</strong> Radix UI + Shadcn/ui for accessible and reusable components.</li>
        <li><strong>Animation System:</strong> GSAP 3.13.0 with ScrollTrigger for complex animations and glassmorphism effects.</li>
        <li><strong>Forms:</strong> EmailJS for form handling without additional backend.</li>
        <li><strong>Deployment:</strong> Static export configured for shared hosting with WebP/AVIF image optimization.</li>
      </ul>

      <h2>Business Impact</h2>
      <ul>
        <li><strong>Lead Generation:</strong> Effective capture of restaurants interested in the dark kitchen model.</li>
        <li><strong>Brand Positioning:</strong> Establishes NODO as an innovative leader in the Paraguayan market.</li>
        <li><strong>Educational Information:</strong> Clearly explains the business model and benefits.</li>
        <li><strong>Professional Showcase:</strong> Demonstrates the quality and capabilities of the facilities.</li>
        <li><strong>Multiple Channels:</strong> Various contact points for different types of users.</li>
        <li><strong>SEO Optimized:</strong> Configured for better visibility in local searches.</li>
      </ul>

      <h2>Performance & Optimization</h2>
      <ul>
        <li><strong>Static Export:</strong> Static generation for maximum performance on shared hosting.</li>
        <li><strong>Image Optimization:</strong> Modern WebP and AVIF formats for fast loading.</li>
        <li><strong>Code Splitting:</strong> Optimized component loading with lazy loading.</li>
        <li><strong>Bundle Optimization:</strong> Automated scripts for FTP and Vercel deployment.</li>
        <li><strong>Performance Metrics:</strong> Lighthouse optimized for speed and accessibility.</li>
      </ul>

      <h2>Project Structure</h2>
      <ul>
        <li><strong>Components:</strong> 15+ custom React components organized by functionality.</li>
        <li><strong>Sections:</strong> 8 main sections (Hero, About, Coverage, Gallery, etc.).</li>
        <li><strong>Custom Hooks:</strong> useGSAPAnimations for centralized animation management.</li>
        <li><strong>Context System:</strong> ThemeContext for theme management and global state.</li>
        <li><strong>Assets Management:</strong> Optimized organization of images and videos.</li>
      </ul>
    `,
    screenshots: [
      {
        url: "/images/nodo/website.png",
        alt: "NODO Dark Kitchens - Main Website"
      },
      {
        url: "/images/nodo/SobreNodo.png",
        alt: "NODO Dark Kitchens - About Section"
      },
      {
        url: "/images/nodo/ComoFunciona.png",
        alt: "NODO Dark Kitchens - How It Works"
      },
      {
        url: "/images/nodo/ContactForm.png",
        alt: "NODO Dark Kitchens - Contact Form"
      },
      {
        url: "/images/nodo/AnalisisComparativo.png",
        alt: "NODO Dark Kitchens - Benefits Comparative Analysis"
      },
      {
        url: "/images/nodo/Render1.jpeg",
        alt: "NODO Dark Kitchens - 3D Render of Facilities"
      }
    ]
  }
};

// Projects data in Spanish
export const projects_spanish: ProjectsData = {
  "supply-stream": {
    title: "SupplyStream",
    description: "Sistema de gestión de inventario con IA para el Banco de Alimentos de Guadalajara, reduciendo el tiempo de seguimiento manual en un 50%.",
    image: "https://raw.githubusercontent.com/Aaron3312/my-portfolio/master/public/images/SupplyStream.png",
    iconName: "Globe",
    iconColor: "text-sky-600",
    tags: ["React Native", "Firebase", "TensorFlow Lite", "Machine Learning"],
    githubUrl: "https://github.com/Aaron3312/SupplyStreamR",
    liveUrl: "",
    fullDescription: `
      <h2>Resumen</h2>
      <p>Desarrollé un sistema de gestión de inventario con inteligencia artificial para el Banco de Alimentos de Guadalajara que optimiza las operaciones con una interfaz intuitiva, facilitando al personal el seguimiento de recursos y la optimización de procesos.</p>

      <h2>Logros Clave</h2>
      <ul>
        <li><strong>Mejora de Eficiencia:</strong> Reducción del 50% en el tiempo de seguimiento manual mediante sistemas automatizados.</li>
        <li><strong>Integración de IA:</strong> Implementación de visión por computadora para identificar artículos a través de cámaras de dispositivos y catalogarlos automáticamente.</li>
        <li><strong>Reducción de Costos:</strong> Transición a arquitectura serverless, reduciendo los costos operativos en un 30%.</li>
        <li><strong>Sistema de Escaneo:</strong> Creación de un sistema integrado de detección de códigos de barras para procesamiento rápido de inventario.</li>
      </ul>

      <h2>Tecnologías Utilizadas</h2>
      <ul>
        <li><strong>React Native:</strong> Para el desarrollo de aplicación móvil multiplataforma.</li>
        <li><strong>Firebase:</strong> Para autenticación, base de datos y funciones serverless.</li>
        <li><strong>TensorFlow Lite:</strong> Para capacidades de aprendizaje automático en el dispositivo.</li>
        <li><strong>Visión por Computadora:</strong> Para identificación y catalogación automática de artículos.</li>
      </ul>
    `,
    screenshots: [
      {
        url: "/images/SupplyStream/MovileView.jpg",
        alt: "Interfaz Móvil de SupplyStream"
      },
      {
        url: "/images/SupplyStream/MovileLogin.jpg",
        alt: "Inicio de Sesión Móvil de SupplyStream"
      },
      {
        url: "/images/SupplyStream/CameraView.jpg",
        alt: "Vista de Cámara de SupplyStream"
      },
      {
        url: "/images/SupplyStream/Database.jpg",
        alt: "Interfaz de Base de Datos de SupplyStream"
      }
    ]
  },
  "bakery-pos": {
    title: "BakeryPOS",
    description: "Sistema inteligente de punto de venta con funcionalidad offline para panaderías mediante IndexedDB.",
    image: "/images/BakeryPos/BakeryPos.gif",
    iconName: "Cake",
    iconColor: "text-pink-500",
    tags: ["JavaScript", "Firebase", "IndexedDB", "Python", "Thermal Printing"],
    githubUrl: "",
    liveUrl: "",
    fullDescription: `
      <h2>Resumen</h2>
      <p>Un sistema integral de punto de venta diseñado específicamente para panaderías con funcionalidad offline y capacidades de gestión de pedidos en tiempo real.</p>

      <h2>Logros Clave</h2>
      <ul>
        <li><strong>Funcionalidad Offline:</strong> Construido con IndexedDB para un 99.9% de tiempo de actividad incluso sin conexión a internet.</li>
        <li><strong>Gestión en Tiempo Real:</strong> Sistema de gestión de pedidos en tiempo real diseñado con Firebase, reduciendo el tiempo de procesamiento en un 65%.</li>
        <li><strong>Impresión Térmica:</strong> Implementación de integración de impresora térmica basada en Python para generación automática de recibos.</li>
      </ul>

      <h2>Tecnologías Utilizadas</h2>
      <ul>
        <li><strong>JavaScript:</strong> Lenguaje de programación principal para la aplicación.</li>
        <li><strong>Firebase:</strong> Sistema de base de datos y autenticación backend.</li>
        <li><strong>IndexedDB:</strong> Para almacenamiento de datos offline y funcionalidad.</li>
        <li><strong>Python:</strong> Para integración de impresora térmica.</li>
      </ul>
    `,
    screenshots: [
      {
        url: "https://raw.githubusercontent.com/Aaron3312/aaron3312/main/posPc.png",
        alt: "Panel de Control de BakeryPOS"
      },
      {
        url: "https://raw.githubusercontent.com/Aaron3312/aaron3312/main/posPc2.png",
        alt: "Gestión de Productos de BakeryPOS"
      },
      {
        url: "https://raw.githubusercontent.com/Aaron3312/aaron3312/main/posPc3.png",
        alt: "Procesamiento de Pedidos de BakeryPOS"
      }
    ]
  },
  "cronos": {
    title: "Proyecto Cronos",
    description: "Plataforma de gestión de proyectos con IA que transforma descripciones de proyectos en listas de tareas accionables.",
    image: "/images/Cronos.png",
    iconName: "Hourglass",
    iconColor: "text-amber-600",
    tags: ["Node.js", "Express", "PostgreSQL", "OpenAI API", "Notion API"],
    githubUrl: "https://github.com/Aaron3312/CronosProyect1",
    liveUrl: "",
    fullDescription: `
      <h2>Resumen</h2>
      <p>Una innovadora plataforma de gestión de proyectos con inteligencia artificial que agiliza la configuración de proyectos y la gestión de tareas.</p>

      <h2>Presentación del Proyecto</h2>
      <div style="position: relative; width: 100%; height: 0; padding-top: 56.2500%; padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden; border-radius: 8px; will-change: transform;">
        <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0; margin: 0;" src="https://www.canva.com/design/DAGH8BuRwig/sTRtHyyXpxexpQt0bXMDpQ/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen"></iframe>
      </div>
      <p style="font-size: 12px; margin-top: 0.5em; text-align: center;"><a href="https://www.canva.com/design/DAGH8BuRwig/sTRtHyyXpxexpQt0bXMDpQ/view?utm_content=DAGH8BuRwig&utm_campaign=designshare&utm_medium=embeds&utm_source=link" target="_blank" rel="noopener" style="color: #666; text-decoration: none;">Ver Presentación Completa</a> by A01638657</p>

      <h2>Logros Clave</h2>
      <ul>
        <li><strong>Generación de Tareas con IA:</strong> Desarrollo de una plataforma que transforma descripciones de proyectos en listas de tareas accionables utilizando IA.</li>
        <li><strong>Impulso de Eficiencia:</strong> Reducción del 60% en el tiempo de configuración de proyectos en 5 equipos con organización inteligente de tareas.</li>
        <li><strong>Gestión de Plazos:</strong> Creación de una interfaz de calendario interactiva que redujo los plazos incumplidos en un 30%.</li>
      </ul>

      <h2>Tecnologías Utilizadas</h2>
      <ul>
        <li><strong>Node.js y Express:</strong> Framework backend para la aplicación.</li>
        <li><strong>PostgreSQL:</strong> Base de datos para almacenar datos de proyectos y tareas.</li>
        <li><strong>API de OpenAI:</strong> Para generación y organización de tareas con IA.</li>
        <li><strong>API de Notion:</strong> Para integración con espacios de trabajo de Notion.</li>
        <li><strong>NGINX:</strong> Servidor web y proxy inverso.</li>
        <li><strong>GCP y AWS:</strong> Para alojamiento y servicios en la nube.</li>
      </ul>
    `,
    screenshots: [
      {
        url: "https://raw.githubusercontent.com/Aaron3312/aaron3312/main/CronosPage1.png",
        alt: "Panel de Control de Cronos"
      },
      {
        url: "https://raw.githubusercontent.com/Aaron3312/aaron3312/main/CronosPage2.png",
        alt: "Gestión de Tareas de Cronos"
      },
      {
        url: "/images/Cronos/Chatbot.png",
        alt: "Chatbot de Cronos"
      },
      {
        url: "/images/Cronos/CronoAskAProyect.png",
        alt: "Cronos Solicitar un Proyecto"
      },
      {
        url: "/images/Cronos/ResponseProyect.png",
        alt: "Respuesta de Proyecto de Cronos"
      },
      {
        url: "/images/Cronos/ResponseProyect2.png",
        alt: "Respuesta de Proyecto de Cronos 2"
      },
      {
        url: "/images/Cronos/NotionResponse.png",
        alt: "Respuesta de Notion de Cronos"
      }
    ]
  },
  "cuevana": {
    title: "Web2",
    description: "Aplicación web moderna para explorar películas y series usando la API de TMDB con funcionalidad de búsqueda avanzada.",
    image: "/images/Web2/MovieDetails.png",
    iconName: "Film",
    iconColor: "text-violet-500",
    tags: ["React", "Vite", "TMDB API", "Cypress", "GitHub Actions"],
    githubUrl: "https://github.com/Aaron3312/web2",
    liveUrl: "https://aaron3312.github.io/web2/",
    fullDescription: `
      <h2>Resumen</h2>
      <p>Una plataforma integral de exploración de películas y series con búsqueda avanzada y características de recomendación.</p>

      <h2>Logros Clave</h2>
      <ul>
        <li><strong>Base de Datos Completa:</strong> Desarrollo de integración con la API de The Movie Database para datos extensos de películas y series.</li>
        <li><strong>Búsqueda Avanzada:</strong> Implementación de potente funcionalidad de búsqueda y sistemas de recomendación personalizados.</li>
        <li><strong>Vistas Detalladas:</strong> Creación de interfaces responsivas con vistas detalladas de títulos incluyendo sinopsis, reparto y trailers.</li>
        <li><strong>Interacción del Usuario:</strong> Construcción de un sistema integrado de calificación y reseñas para mayor participación del usuario.</li>
        <li><strong>Pipeline CI/CD:</strong> Configuración de pipeline CI/CD con GitHub Actions para pruebas y despliegue automatizados.</li>
      </ul>

      <h2>Tecnologías Utilizadas</h2>
      <ul>
        <li><strong>React.js:</strong> Biblioteca JavaScript para construir la interfaz de usuario.</li>
        <li><strong>Vite:</strong> Herramienta frontend de próxima generación para desarrollo más rápido.</li>
        <li><strong>API de TMDB:</strong> API externa para datos de películas y series.</li>
        <li><strong>CSS/SCSS:</strong> Para estilos y diseño responsivo.</li>
        <li><strong>Cypress:</strong> Framework de pruebas end-to-end.</li>
        <li><strong>GitHub Actions:</strong> Para automatización de pipeline CI/CD.</li>
      </ul>
    `,
    screenshots: [
      {
        url: "/images/Web2/Pelis1.png",
        alt: "Página de Resumen de Películas"
      },
      {
        url: "/images/Web2/Peis2.png",
        alt: "Vista de Cuadrícula de Películas"
      },
      {
        url: "/images/Web2/Series1.png",
        alt: "Página de Exploración de Series"
      },
      {
        url: "/images/Web2/Estrenos.png",
        alt: "Página de Últimos Estrenos"
      },
      {
        url: "/images/Web2/MovieDetails.png",
        alt: "Vista de Detalles de Película"
      },
      {
        url: "/images/Web2/MovieDetails2.png",
        alt: "Información Extendida de Película"
      },
      {
        url: "/images/Web2/SimilarMovies.png",
        alt: "Recomendaciones de Películas Similares"
      }
    ]
  },
  "warehouse-system": {
    title: "Sistema Multi-Agente de Almacén",
    description: "Simulación de robótica autónoma con visión por computadora en tiempo real usando YOLOv5 y navegación inteligente.",
    image: "https://raw.githubusercontent.com/Aaron3312/my-portfolio/master/public/images/Warehouse.gif",
    iconName: "Brain",
    iconColor: "text-indigo-500",
    tags: ["Unity", "Python", "YOLOv5", "UDP", "NavMesh"],
    githubUrl: "https://github.com/Aaron3312/ProyectoSkeletons",
    liveUrl: "https://photos.app.goo.gl/A92KUd19TzXEcXMr7",
    fullDescription: `
      <h2>Resumen</h2>
      <p>Un sistema multi-agente avanzado que simula robots autónomos coordinándose en entornos de almacén complejos.</p>

      <h2>Logros Clave</h2>
      <ul>
        <li><strong>Coordinación Multi-Agente:</strong> Ingeniería de una simulación de almacén con robots autónomos coordinándose en entornos complejos.</li>
        <li><strong>Visión en Tiempo Real:</strong> Implementación de visión por computadora en tiempo real usando YOLOv5 con transmisión UDP (40% más rápido que sistemas anteriores).</li>
        <li><strong>Navegación Inteligente:</strong> Diseño de navegación inteligente usando NavMesh para evasión dinámica de obstáculos y optimización de rutas.</li>
      </ul>

      <h2>Tecnologías Utilizadas</h2>
      <ul>
        <li><strong>Unity:</strong> Motor de juego para entorno de simulación 3D.</li>
        <li><strong>Python:</strong> Para algoritmos de IA y visión por computadora.</li>
        <li><strong>YOLOv5:</strong> Modelo de detección de objetos en tiempo real.</li>
        <li><strong>UDP:</strong> Protocolo para comunicación en tiempo real entre agentes.</li>
        <li><strong>NavMesh:</strong> Para búsqueda de rutas y navegación.</li>
      </ul>
    `,
    screenshots: [
      {
        url: "https://raw.githubusercontent.com/Aaron3312/ProyectoSkeletons/main/images/robots.png",
        alt: "Robots Autónomos"
      },
      {
        url: "https://raw.githubusercontent.com/Aaron3312/ProyectoSkeletons/main/images/metricas.png",
        alt: "Métricas de Rendimiento"
      },
      {
        url: "https://raw.githubusercontent.com/Aaron3312/ProyectoSkeletons/main/images/Navmesh.png",
        alt: "Malla de Navegación"
      }
    ]
  },
  "security-system": {
    title: "Sistema Multi-Agente de Seguridad",
    description: "Simulación de seguridad carcelaria con drones autónomos, cámaras de seguridad y detección de amenazas con IA.",
    image: "https://raw.githubusercontent.com/Aaron3312/my-portfolio/master/public/images/Security.gif",
    iconName: "Shield",
    iconColor: "text-emerald-600",
    tags: ["Unity", "Python", "Computer Vision", "AI", "Autonomous Agents"],
    githubUrl: "https://raw.githubusercontent.com/Aaron3312/ProyectoDronUnity",
    liveUrl: "https://youtu.be/k5nwyPjoEUE",
    fullDescription: `
      <h2>Resumen</h2>
      <p>Un sistema de simulación multi-agente que modela interacciones entre drones autónomos, cámaras de seguridad y personal de seguridad en un entorno carcelario.</p>

      <h2>Presentación del Proyecto</h2>
      <div style="position: relative; width: 100%; height: 0; padding-top: 56.2500%; padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden; border-radius: 8px; will-change: transform;">
        <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0; margin: 0;" src="https://www.canva.com/design/DAGXyHlqQeE/R9dCppmP2wrmYetSsfTzyA/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen"></iframe>
      </div>
      <p style="font-size: 12px; margin-top: 0.5em; text-align: center;"><a href="https://www.canva.com/design/DAGXyHlqQeE/R9dCppmP2wrmYetSsfTzyA/view?utm_content=DAGXyHlqQeE&utm_campaign=designshare&utm_medium=embeds&utm_source=link" target="_blank" rel="noopener" style="color: #666; text-decoration: none;">Presentación de Ciberseguridad 3D Púrpura Negro</a> by aaron hernandez</p>

      <h2>Logros Clave</h2>
      <ul>
        <li><strong>Vigilancia Autónoma:</strong> Implementación de un dron autónomo que realiza patrullas aéreas y detecta actividades sospechosas usando visión por computadora.</li>
        <li><strong>Sistema de Seguridad Integrado:</strong> Creación de un sistema donde cámaras fijas y personal colaboran en tiempo real para responder a amenazas detectadas.</li>
        <li><strong>Detección de Amenazas en Tiempo Real:</strong> Utilización de IA para identificar posibles brechas de seguridad y coordinar respuestas apropiadas.</li>
      </ul>

      <h2>Tecnologías Utilizadas</h2>
      <ul>
        <li><strong>Unity:</strong> Para crear el entorno de simulación 3D.</li>
        <li><strong>Python:</strong> Backend para algoritmos de IA y comportamiento de agentes.</li>
        <li><strong>Visión por Computadora:</strong> Para detección de amenazas y vigilancia.</li>
        <li><strong>Agentes Autónomos:</strong> Para simular entidades de seguridad independientes.</li>
      </ul>
    `,
    screenshots: [
      {
        url: "https://raw.githubusercontent.com/Aaron3312/ProyectoDronUnity/main/Images/Dron.png",
        alt: "Dron Autónomo"
      },
      {
        url: "https://raw.githubusercontent.com/Aaron3312/ProyectoDronUnity/main/Images/SecurityCams.png",
        alt: "Cámaras de Seguridad"
      },
      {
        url: "https://raw.githubusercontent.com/Aaron3312/ProyectoDronUnity/main/Images/SecurityGuard.png",
        alt: "Personal de Seguridad"
      },
      {
        url: "https://raw.githubusercontent.com/Aaron3312/ProyectoDronUnity/main/Images/Ladron.png",
        alt: "Amenaza"
      }
    ]
  },
  "solo-para-eva": {
    title: "Solo Para Eva",
    description: "Escaparate de e-commerce para productos artesanales de cuidado corporal natural con elegante visualización y categorización de productos.",
    image: "/images/SoloParaEva.png",
    iconName: "HeartHandshake",
    iconColor: "text-red-500",
    tags: ["Next.js", "React", "TailwindCSS", "Responsive Design"],
    githubUrl: "https://github.com/Aaron3312/tienda-limpieza-corporal",
    liveUrl: "https://soloparaeva.lat",
    fullDescription: `
      <h2>Resumen</h2>
      <p>Un escaparate de e-commerce moderno para productos artesanales de cuidado corporal natural, enfocado en crear una experiencia de compra elegante y fácil de usar.</p>

      <h2>Logros Clave</h2>
      <ul>
        <li><strong>Escaparate E-commerce Completo:</strong> Desarrollo de una plataforma integral para productos artesanales de cuidado corporal natural.</li>
        <li><strong>Diseño Responsivo:</strong> Implementación de visualización elegante de productos y categorización con capacidad de respuesta completa.</li>
        <li><strong>Interfaz Intuitiva:</strong> Creación de una interfaz intuitiva para exploración de productos con vistas detalladas de cada artículo.</li>
        <li><strong>Interacción del Usuario:</strong> Integración de testimonios de clientes y capacidades de filtrado de productos.</li>
        <li><strong>Excelencia Front-end:</strong> Construido como parte del programa "Servicio Becario" mostrando habilidades integrales de desarrollo front-end.</li>
      </ul>

      <h2>Tecnologías Utilizadas</h2>
      <ul>
        <li><strong>Next.js:</strong> Framework de React para renderizado del lado del servidor y generación de sitios estáticos.</li>
        <li><strong>React:</strong> Biblioteca JavaScript para construir la interfaz de usuario.</li>
        <li><strong>TailwindCSS:</strong> Framework CSS utility-first para estilos.</li>
        <li><strong>Diseño Responsivo:</strong> Enfoque mobile-first asegurando excelente UX en todos los dispositivos.</li>
      </ul>
    `,
    screenshots: [
      {
        url: "https://raw.githubusercontent.com/Aaron3312/tienda-limpieza-corporal/master/landingSoloEva.png",
        alt: "Página de Inicio de Solo Para Eva"
      },
      {
        url: "https://raw.githubusercontent.com/Aaron3312/tienda-limpieza-corporal/master/ProductosSoloEva.png",
        alt: "Página de Productos de Solo Para Eva"
      },
      {
        url: "https://raw.githubusercontent.com/Aaron3312/tienda-limpieza-corporal/master/NosotrosSoloEva.png",
        alt: "Página de Acerca de Nosotros de Solo Para Eva"
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
      <h2>Resumen</h2>
      <p>JAI-VIER es un sistema completo de gestión de tareas inspirado en Jira, desarrollado con Next.js, TypeScript y patrones de diseño avanzados. Ofrece una solución integral para la gestión de proyectos, sprints y tareas con una interfaz moderna y intuitiva.</p>

      <h2>Presentación del Proyecto</h2>
      <div style="position: relative; width: 100%; height: 0; padding-top: 56.2500%; padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden; border-radius: 8px; will-change: transform;">
        <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0; margin: 0;" src="https://www.canva.com/design/DAGp59TPwPo/IEnPjcm00_xPazineNMjJA/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen"></iframe>
      </div>
      <p style="font-size: 12px; margin-top: 0.5em; text-align: center;"><a href="https://www.canva.com/design/DAGp59TPwPo/IEnPjcm00_xPazineNMjJA/view?utm_content=DAGp59TPwPo&utm_campaign=designshare&utm_medium=embeds&utm_source=link" target="_blank" rel="noopener" style="color: #666; text-decoration: none;">Presentación de JAI-VIER</a> by Luis Fernando Cuevas Arroyo</p>

      <h2>Características Clave</h2>
      <ul>
        <li><strong>Gestión de Proyectos:</strong> Crear, editar y monitorear proyectos con herramientas completas de administración.</li>
        <li><strong>Gestión de Sprints:</strong> Organizar el trabajo en sprints con fechas de inicio y fin, monitoreo en tiempo real.</li>
        <li><strong>Gestión de Tareas:</strong> Crear, asignar y dar seguimiento a tareas y subtareas con estados personalizables.</li>
        <li><strong>Panel de Control:</strong> Visualizar el estado de proyectos, sprints y tareas en tiempo real.</li>
        <li><strong>Informes Detallados:</strong> Analizar progreso, velocidad del equipo y desviaciones de cronograma.</li>
        <li><strong>Interfaz Moderna:</strong> Diseño responsive con componentes de shadcn/ui y Tailwind CSS.</li>
      </ul>

      <h2>Patrones de Diseño Implementados</h2>
      <ul>
        <li><strong>Patrón Bridge:</strong> Separación de tareas de los métodos de notificación para mayor flexibilidad.</li>
        <li><strong>Patrón Factory:</strong> Creación automática de tareas, dividiendo las que superan 4 horas.</li>
        <li><strong>Patrón Singleton:</strong> Manejo centralizado del estado de la aplicación en memoria.</li>
        <li><strong>Patrón Composite:</strong> Trabajo uniforme con tareas y subtareas en jerarquías complejas.</li>
      </ul>

      <h2>Tecnologías Utilizadas</h2>
      <ul>
        <li><strong>Frontend:</strong> Next.js, React, TypeScript, Tailwind CSS para una experiencia moderna.</li>
        <li><strong>Componentes UI:</strong> shadcn/ui basado en Radix UI para componentes accesibles.</li>
        <li><strong>Backend:</strong> Spring Boot API REST para lógica de negocio robusta.</li>
        <li><strong>Despliegue:</strong> Docker para contenedorización y despliegue automatizado.</li>
        <li><strong>Iconos y Utilidades:</strong> Lucide React, date-fns para formateo de fechas.</li>
      </ul>

      <h2>Desarrollo en Equipo (Equipo 31)</h2>
      <ul>
        <li><strong>Tellez:</strong> Project Manager / Administrador de Sistemas</li>
        <li><strong>Bañales:</strong> Especialista en algoritmos, Java con Spring Boot</li>
        <li><strong>Diego:</strong> Desarrollador Backend</li>
        <li><strong>Fernando Cuevas:</strong> Especialista QA</li>
        <li><strong>Aaron:</strong> Desarrollador Full Stack</li>
        <li><strong>Aram:</strong> Desarrollador en Prácticas</li>
      </ul>
    `,
    screenshots: [
      {
        url: "https://raw.githubusercontent.com/Aaron3312/task-management-system/master/JaivierInicioBlack.png",
        alt: "Página de Inicio de JAI-VIER"
      },
      {
        url: "https://raw.githubusercontent.com/Aaron3312/task-management-system/master/JavierProyectsBlack.png",
        alt: "Gestión de Proyectos de JAI-VIER"
      },
      {
        url: "https://raw.githubusercontent.com/Aaron3312/task-management-system/master/JaivierSprintsBlack.png",
        alt: "Gestión de Sprints de JAI-VIER"
      },
      {
        url: "https://raw.githubusercontent.com/Aaron3312/task-management-system/master/JaivierTareasBlack.png",
        alt: "Gestión de Tareas de JAI-VIER"
      },
      {
        url: "https://raw.githubusercontent.com/Aaron3312/task-management-system/master/JaivierTareasDetailBlack.png",
        alt: "Detalles de Tareas de JAI-VIER"
      },
      {
        url: "https://raw.githubusercontent.com/Aaron3312/task-management-system/master/InformesJaivierBlack.png",
        alt: "Informes y Análisis de JAI-VIER"
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
      <h2>Resumen</h2>
      <p>Cache of Recipes es una aplicación web moderna construida con Next.js que permite a los usuarios descubrir, guardar y compartir recetas culinarias. La aplicación utiliza la API de Spoonacular para obtener una amplia variedad de recetas y ofrece funcionalidades avanzadas como autenticación, gestión de favoritos y calificaciones.</p>

      <h2>Características Clave</h2>
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

      <h2>Arquitectura Técnica</h2>
      <ul>
        <li><strong>Frontend Moderno:</strong> Next.js 15.3.2 con React 19, TypeScript y Tailwind CSS 4.</li>
        <li><strong>Animaciones Avanzadas:</strong> GSAP para efectos visuales y transiciones fluidas.</li>
        <li><strong>Componentes UI:</strong> Radix UI y shadcn/ui para componentes accesibles y modernos.</li>
        <li><strong>Servicios Backend:</strong> Firebase para autenticación, Firestore para datos y Spoonacular API para recetas.</li>
        <li><strong>Gestión de Formularios:</strong> React Hook Form con validación Zod para formularios robustos.</li>
        <li><strong>Gestión de Estado:</strong> React Query para gestión eficiente del estado del servidor.</li>
      </ul>

      <h2>Seguridad y Rendimiento</h2>
      <ul>
        <li><strong>Autenticación Firebase:</strong> Gestión segura de sesiones con email/password y Google OAuth.</li>
        <li><strong>Reglas Firestore:</strong> Control granular de acceso a datos por usuario.</li>
        <li><strong>Proxy API:</strong> Protección de claves API del frontend con balanceo de carga.</li>
        <li><strong>Optimización:</strong> Lazy loading, code splitting y optimización de imágenes con Next.js.</li>
        <li><strong>Protección Middleware:</strong> Rutas protegidas por autenticación y validación de entrada.</li>
      </ul>

      <h2>Estructura de Datos</h2>
      <ul>
        <li><strong>Colección Users:</strong> Perfiles de usuario con información personal y preferencias.</li>
        <li><strong>Colección Favorites:</strong> Gestión de recetas favoritas por usuario.</li>
        <li><strong>Colección Reviews:</strong> Sistema de calificaciones y comentarios con agregación automática.</li>
        <li><strong>Integración Spoonacular:</strong> Proxy inteligente para datos de recetas y nutrición.</li>
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
      <h2>Resumen</h2>
      <p>NODO Dark Kitchens Paraguay es una aplicación web moderna para la primera red de cocinas fantasma en Paraguay. El sitio web promociona servicios de expansión de delivery para restaurantes sin inversión inicial, ofreciendo una solución completa para el crecimiento del negocio gastronómico.</p>

      <h2>Características Clave</h2>
      <ul>
        <li><strong>Landing Page Completa:</strong> Diseño moderno con video background y animaciones GSAP para una experiencia inmersiva.</li>
        <li><strong>Formulario Lead Generation:</strong> Sistema integrado con EmailJS para captura de restaurantes interesados.</li>
        <li><strong>Galería Interactiva:</strong> Showcase completo de las instalaciones con renders 3D y fotografías profesionales.</li>
        <li><strong>Mapa de Cobertura:</strong> Visualización clara de las áreas de servicio en Paraguay.</li>
        <li><strong>Integración WhatsApp:</strong> Botón flotante para contacto directo y consultas rápidas.</li>
        <li><strong>Diseño Responsivo:</strong> Enfoque mobile-first con diseño adaptado para todos los dispositivos.</li>
        <li><strong>Animaciones Avanzadas:</strong> GSAP con ScrollTrigger para efectos visuales fluidos y profesionales.</li>
        <li><strong>Registro Newsletter:</strong> Sistema de suscripción para mantenerse actualizado.</li>
      </ul>

      <h2>Arquitectura Técnica</h2>
      <ul>
        <li><strong>Framework Moderno:</strong> Next.js 15.3.4 con App Router para SSG optimizado.</li>
        <li><strong>TypeScript 5:</strong> Desarrollo type-safe con mejor mantenibilidad del código.</li>
        <li><strong>Sistema de Estilos:</strong> Tailwind CSS 4 con sistema de tipografía personalizado (Inter, Space Grotesk, JetBrains Mono, Montserrat).</li>
        <li><strong>Componentes UI:</strong> Radix UI + Shadcn/ui para componentes accesibles y reutilizables.</li>
        <li><strong>Sistema de Animación:</strong> GSAP 3.13.0 con ScrollTrigger para animaciones complejas y efectos glassmorphism.</li>
        <li><strong>Formularios:</strong> EmailJS para manejo de formularios sin backend adicional.</li>
        <li><strong>Despliegue:</strong> Exportación estática configurada para hosting compartido con optimización de imágenes WebP/AVIF.</li>
      </ul>

      <h2>Impacto de Negocio</h2>
      <ul>
        <li><strong>Generación de Leads:</strong> Captura efectiva de restaurantes interesados en el modelo de dark kitchens.</li>
        <li><strong>Posicionamiento de Marca:</strong> Establece NODO como líder innovador en el mercado paraguayo.</li>
        <li><strong>Información Educativa:</strong> Explica claramente el modelo de negocio y beneficios.</li>
        <li><strong>Showcase Profesional:</strong> Demuestra la calidad y capacidades de las instalaciones.</li>
        <li><strong>Múltiples Canales:</strong> Diversos puntos de contacto para diferentes tipos de usuarios.</li>
        <li><strong>SEO Optimizado:</strong> Configurado para mejor visibilidad en búsquedas locales.</li>
      </ul>

      <h2>Rendimiento y Optimización</h2>
      <ul>
        <li><strong>Exportación Estática:</strong> Generación estática para máximo rendimiento en hosting compartido.</li>
        <li><strong>Optimización de Imágenes:</strong> Formatos modernos WebP y AVIF para carga rápida.</li>
        <li><strong>Code Splitting:</strong> Carga optimizada de componentes con lazy loading.</li>
        <li><strong>Optimización Bundle:</strong> Scripts automatizados para deploy FTP y Vercel.</li>
        <li><strong>Métricas de Rendimiento:</strong> Lighthouse optimizado para velocidad y accesibilidad.</li>
      </ul>

      <h2>Estructura del Proyecto</h2>
      <ul>
        <li><strong>Componentes:</strong> 15+ componentes React personalizados organizados por funcionalidad.</li>
        <li><strong>Secciones:</strong> 8 secciones principales (Hero, About, Coverage, Gallery, etc.).</li>
        <li><strong>Hooks Personalizados:</strong> useGSAPAnimations para manejo centralizado de animaciones.</li>
        <li><strong>Sistema de Contexto:</strong> ThemeContext para gestión de temas y estado global.</li>
        <li><strong>Gestión de Assets:</strong> Organización optimizada de imágenes y videos.</li>
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

// Utility function to get project data by slug
export const getProjectData = (slug: string): Project | undefined => {
  return projects[slug];
};

// Minimal project data for quick access (English)
export const projectsMin = [
  {
    title: "NODO Dark Kitchens Paraguay",
    description: "First ghost kitchen network in Paraguay for delivery expansion without initial investment.",
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
    title: "JAI-VIER: Task Management System",
    description: "Complete task management system inspired by Jira, developed with Next.js, TypeScript and advanced design patterns.",
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
    description: "Modern web application to discover, save and share culinary recipes with authentication, favorites and ratings.",
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
];

// Minimal project data for quick access (Spanish)
export const projectsMin_spanish = [
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
    title: "Sistema Multi-Agente de Seguridad",
    description: "Simulación de seguridad carcelaria con drones autónomos, cámaras de seguridad y detección de amenazas con IA.",
    image: "https://raw.githubusercontent.com/Aaron3312/my-portfolio/master/public/images/Security.gif",
    tags: ["Unity", "Python", "Computer Vision", "AI", "Agentes Autónomos"],
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
    title: "Proyecto Cronos",
    description: "Plataforma de gestión de proyectos con IA que transforma descripciones de proyectos en listas de tareas accionables.",
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
    description: "Sistema integral de punto de venta para panaderías con funcionalidad offline y gestión de pedidos en tiempo real.",
    image: "/images/BakeryPos/BakeryPos.gif",
    tags: ["JavaScript", "Firebase", "IndexedDB", "Python", "Impresión Térmica"],
    githubUrl: "",
    liveUrl: "",
    slug: "bakery-pos"
  },
  {
    title: "Solo Para Eva",
    description: "Escaparate de e-commerce para productos artesanales de cuidado corporal natural con elegante visualización y categorización.",
    image: "https://raw.githubusercontent.com/Aaron3312/my-portfolio/master/public/images/SoloParaEva.png",
    tags: ["Next.js", "React", "TailwindCSS", "Diseño Responsivo"],
    githubUrl: "https://github.com/Aaron3312/tienda-limpieza-corporal",
    liveUrl: "https://soloparaeva.lat",
    slug: "solo-para-eva"
  },
  {
    title: "Web2",
    description: "Aplicación web moderna para explorar películas y series usando TMDB API con funcionalidad de búsqueda avanzada.",
    image: "https://raw.githubusercontent.com/Aaron3312/my-portfolio/master/public/images/Web2.png",
    tags: ["React", "Vite", "TMDB API", "Cypress", "GitHub Actions"],
    githubUrl: "https://github.com/Aaron3312/web2",
    liveUrl: "https://aaron3312.github.io/web2/",
    slug: "cuevana"
  },
  {
    title: "SupplyStream",
    description: "Sistema de gestión de inventario con IA para el Banco de Alimentos de Guadalajara, reduciendo el tiempo de seguimiento manual en un 50%.",
    image: "https://raw.githubusercontent.com/Aaron3312/my-portfolio/master/public/images/SupplyStream.png",
    tags: ["React Native", "Firebase", "TensorFlow Lite", "Machine Learning"],
    githubUrl: "https://github.com/Aaron3312/SupplyStreamR",
    liveUrl: "",
    slug: "supply-stream"
  },
  {
    title: "Sistema Multi-Agente de Almacén",
    description: "Simulación de robótica autónoma con visión por computadora en tiempo real usando YOLOv5 y navegación inteligente.",
    image: "https://raw.githubusercontent.com/Aaron3312/my-portfolio/master/public/images/Warehouse.gif",
    tags: ["Unity", "Python", "YOLOv5", "UDP", "NavMesh", "Computer Vision", "AI", "Agentes Autónomos", "Navegación Inteligente", "React"],
    githubUrl: "https://github.com/Aaron3312/ProyectoSkeletons",
    liveUrl: "https://photos.app.goo.gl/vM2MzAaMhbRRqmNJ8",
    slug: "warehouse-system"
  }
];