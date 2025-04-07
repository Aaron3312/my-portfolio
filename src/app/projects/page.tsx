// src/app/projects/page.tsx
import { ProjectCard } from "@/components/project-card"

const projects = [
  {
    title: "SupplyStream",
    description: "AI-powered inventory management system for Food Bank Guadalajara, reducing manual tracking time by 50%.",
    image: "/images/supply-stream.jpg",
    tags: ["React Native", "Firebase", "TensorFlow Lite", "Machine Learning"],
    githubUrl: "https://github.com/Aaron3312/SupplyStream",
    liveUrl: "",
    slug: "supply-stream"
  },
  {
    title: "BakeryPOS",
    description: "Comprehensive point-of-sale system for bakeries with offline functionality and real-time order management.",
    image: "/images/bakery-pos.jpg",
    tags: ["JavaScript", "Firebase", "IndexedDB", "Python", "Thermal Printing"],
    githubUrl: "https://github.com/Aaron3312/BakeryPOS",
    liveUrl: "",
    slug: "bakery-pos"
  },
  {
    title: "Cuevana by Aaron",
    description: "Modern web application for exploring movies and series using TMDB API with advanced search functionality.",
    image: "/images/cuevana.jpg",
    tags: ["React", "Vite", "TMDB API", "Cypress", "GitHub Actions"],
    githubUrl: "https://github.com/Aaron3312/web2",
    liveUrl: "https://aaron3312.github.io/web2/",
    slug: "cuevana"
  },
  {
    title: "Cronos Project",
    description: "AI-powered project management platform that transforms project descriptions into actionable task lists.",
    image: "/images/cronos.jpg",
    tags: ["Node.js", "Express", "PostgreSQL", "OpenAI API", "Notion API"],
    githubUrl: "https://github.com/Aaron3312/CronosProject",
    liveUrl: "",
    slug: "cronos"
  },
  {
    title: "Warehouse MultiAgent System",
    description: "Autonomous robotics simulation with real-time computer vision using YOLOv5 and intelligent navigation.",
    image: "/images/warehouse-system.jpg",
    tags: ["Unity", "Python", "YOLOv5", "UDP", "NavMesh"],
    githubUrl: "https://github.com/Aaron3312/ProyectoSkeletons",
    liveUrl: "",
    slug: "warehouse-system"
  },
  {
    title: "Security Multi-Agent System",
    description: "Prison security simulation with autonomous drones, security cameras, and AI-powered threat detection.",
    image: "/images/security-system.jpg",
    tags: ["Unity", "Python", "Computer Vision", "AI", "Autonomous Agents"],
    githubUrl: "https://github.com/Aaron3312/ProyectoDronUnity",
    liveUrl: "https://youtu.be/k5nwyPjoEUE",
    slug: "security-system"
  },
  {
    title: "Solo Para Eva",
    description: "E-commerce showcase for artisanal natural body care products with elegant product display and categorization.",
    image: "/images/solo-para-eva.jpg",
    tags: ["Next.js", "React", "TailwindCSS", "Responsive Design"],
    githubUrl: "https://github.com/Aaron3312/tienda-limpieza-corporal",
    liveUrl: "https://soloparaeva.lat",
    slug: "solo-para-eva"
  }
]

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h1>
        <p className="mt-4 text-muted-foreground md:text-lg">
          A showcase of my web development projects and applications
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            title={project.title}
            description={project.description}
            image={project.image}
            tags={project.tags}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
            slug={project.slug}
            icon={project.slug}
          />
        ))}
      </div>
    </div>
  )
}