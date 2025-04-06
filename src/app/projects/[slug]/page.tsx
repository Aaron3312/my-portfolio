// src/app/projects/[slug]/page.tsx
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, ArrowLeft, Globe, Owl, Cake, Film, HeartHandshake, Brain, Shield } from "lucide-react"
import Link from "next/link"

// This would typically come from a CMS or database
const getProjectData = (slug: string) => {
  const projects = {
    "supply-stream": {
      title: "SupplyStream",
      description: "AI-powered inventory management system for Food Bank Guadalajara, reducing manual tracking time by 50%.",
      image: "/images/supply-stream.jpg",
      icon: <Globe className="h-6 w-6 text-sky-600" />,
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
          url: "https://raw.githubusercontent.com/Aaron3312/SupplyStreamR/master/22.jpg",
          alt: "SupplyStream Mobile Interface"
        }
      ]
    },
    "bakery-pos": {
      title: "BakeryPOS",
      description: "Smart point-of-sale system with offline functionality for bakeries via IndexedDB.",
      image: "/images/bakery-pos.jpg",
      icon: <Cake className="h-6 w-6 text-pink-500" />,
      tags: ["JavaScript", "Firebase", "IndexedDB", "Python", "Thermal Printing"],
      githubUrl: "https://github.com/Aaron3312/BakeryPOS",
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
      image: "/images/cronos.jpg",
      icon: <Owl className="h-6 w-6 text-amber-600" />,
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
          url: "https://raw.githubusercontent.com/Aaron3312/aaron3312/main/cronosPortaitHorizontal.png",
          alt: "Cronos Project Overview"
        }
      ]
    },
    "cuevana": {
      title: "Cuevana by Aaron",
      description: "Modern web application for exploring movies and series using TMDB API with advanced search functionality.",
      image: "/images/cuevana.jpg",
      icon: <Film className="h-6 w-6 text-violet-500" />,
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
          url: "https://github.com/Aaron3312/web2/raw/master/image.png",
          alt: "Cuevana Platform Screenshot"
        }
      ]
    },
    "warehouse-system": {
      title: "Warehouse MultiAgent System",
      description: "Autonomous robotics simulation with real-time computer vision using YOLOv5 and intelligent navigation.",
      image: "/images/warehouse-system.jpg",
      icon: <Brain className="h-6 w-6 text-indigo-500" />,
      tags: ["Unity", "Python", "YOLOv5", "UDP", "NavMesh"],
      githubUrl: "https://github.com/Aaron3312/ProyectoSkeletons",
      liveUrl: "",
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
          url: "https://github.com/Aaron3312/ProyectoSkeletons/raw/main/images/robots.png",
          alt: "Autonomous Robots"
        },
        {
          url: "https://github.com/Aaron3312/ProyectoSkeletons/raw/main/images/metricas.png",
          alt: "Performance Metrics"
        },
        {
          url: "https://github.com/Aaron3312/ProyectoSkeletons/raw/main/images/Navmesh.png",
          alt: "Navigation Mesh"
        }
      ]
    },
    "security-system": {
      title: "Security Multi-Agent System",
      description: "Prison security simulation with autonomous drones, security cameras, and AI-powered threat detection.",
      image: "/images/security-system.jpg",
      icon: <Shield className="h-6 w-6 text-emerald-600" />,
      tags: ["Unity", "Python", "Computer Vision", "AI", "Autonomous Agents"],
      githubUrl: "https://github.com/Aaron3312/ProyectoDronUnity",
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
        }
      ]
    },
    "solo-para-eva": {
      title: "Solo Para Eva",
      description: "E-commerce showcase for artisanal natural body care products with elegant product display and categorization.",
      image: "/images/solo-para-eva.jpg",
      icon: <HeartHandshake className="h-6 w-6 text-red-500" />,
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
          url: "https://github.com/Aaron3312/tienda-limpieza-corporal/raw/master/landingSoloEva.png",
          alt: "Solo Para Eva Landing Page"
        },
        {
          url: "https://github.com/Aaron3312/tienda-limpieza-corporal/raw/master/ProductosSoloEva.png",
          alt: "Solo Para Eva Products Page"
        },
        {
          url: "https://github.com/Aaron3312/tienda-limpieza-corporal/raw/master/NosotrosSoloEva.png",
          alt: "Solo Para Eva About Us Page"
        }
      ]
    }
  };
  
  return projects[slug as keyof typeof projects];
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = getProjectData(params.slug);
  
  if (!project) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-3xl font-bold">Project Not Found</h1>
        <p className="mt-4 text-muted-foreground">
          The project you're looking for doesn't exist or has been removed.
        </p>
        <Button href="/projects" className="mt-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Button>
      </div>
    );
  }

  return (
    <div className="container py-12 md:py-20">
      <div className="mb-8">
        <Link 
          href="/projects" 
          className="inline-flex items-center text-sm font-medium text-primary hover:underline"
        >
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to Projects
        </Link>
      </div>
      
      <div className="mb-10">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-slate-100 p-2 dark:bg-slate-800">
            {project.icon}
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{project.title}</h1>
        </div>
        <p className="mt-4 text-muted-foreground md:text-lg">{project.description}</p>
      </div>
      
      <div className="mb-12 aspect-video w-full overflow-hidden rounded-xl border bg-gray-100 dark:border-slate-800 dark:bg-slate-800 relative shadow-lg">
        <Image
          src={project.image}
          alt={project.title}
          width={1200}
          height={675}
          className="h-full w-full object-cover"
        />
      </div>
      
      <div className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="col-span-2">
          <div className="prose max-w-none dark:prose-invert" dangerouslySetInnerHTML={{ __html: project.fullDescription }} />
        </div>
        
        <div className="space-y-8">
          <div>
            <h3 className="mb-3 text-xl font-bold">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-800 dark:bg-slate-800 dark:text-slate-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="mb-3 text-xl font-bold">Links</h3>
            <div className="flex flex-col space-y-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub Repository
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {project.screenshots && project.screenshots.length > 0 && (
        <div className="mt-16">
          <h2 className="mb-6 text-2xl font-bold">Screenshots</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {project.screenshots.map((screenshot, index) => (
              <div 
                key={index} 
                className="overflow-hidden rounded-lg border bg-gray-100 dark:border-slate-800 dark:bg-slate-800 shadow-md hover:shadow-lg transition-shadow"
              >
                <Image
                  src={screenshot.url}
                  alt={screenshot.alt}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}