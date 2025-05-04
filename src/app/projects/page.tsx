// src/app/projects/page.tsx
import { ProjectCard } from "@/components/ui/project-card"

// Export the projects array so it can be imported in other files
export const projects = [
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
    title: "Cronos Project",
    description: "AI-powered project management platform that transforms project descriptions into actionable task lists.",
    image: "https://raw.githubusercontent.com/Aaron3312/my-portfolio/master/public/images/Cronos.png",
    tags: ["Node.js", "Express", "PostgreSQL", "OpenAI API", "Notion API"],
    githubUrl: "https://github.com/Aaron3312/CronosProyect1",

    slug: "cronos"
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
  },
  {
    title: "Security Multi-Agent System",
    description: "Prison security simulation with autonomous drones, security cameras, and AI-powered threat detection.",
    image: "https://raw.githubusercontent.com/Aaron3312/my-portfolio/master/public/images/Security.gif",
    tags: ["Unity", "Python", "Computer Vision", "AI", "Autonomous Agents"],
    githubUrl: "https://github.com/Aaron3312/ProyectoDronUnity",
    liveUrl: "https://youtu.be/k5nwyPjoEUE",
    slug: "security-system"
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