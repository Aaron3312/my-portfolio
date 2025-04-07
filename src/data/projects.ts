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
    image: "https://raw.githubusercontent.com/Aaron3312/my-portfolio/master/public/images/BakeryPos.png",
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
    image: "/images/cronos.png",
    iconName: "Hourglass",
    iconColor: "text-amber-600",
    tags: ["Node.js", "Express", "PostgreSQL", "OpenAI API", "Notion API"],
    githubUrl: "https://github.com/Aaron3312/CronosProject",
    liveUrl: "",
    fullDescription: `
      <h2>Overview</h2>
      <p>An innovative AI-powered project management platform that streamlines project setup and task management.</p>
      
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
        url: "/images/cronos/Chatbot.png",
        alt: "Cronos Chatbot"
      },
      {
        url: "/images/cronos/CronoAskAProyect.png",
        alt: "Cronos Ask a Project"
      },
      {
        url: "/images/cronos/ResponseProyect.png",
        alt: "Cronos Project Response"
      },
      {
        url: "/images/cronos/ResponseProyect2.png",
        alt: "Cronos Project Response 2"
      },
      {
        url: "/images/cronos/NotionResponse.png",
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
  }
};