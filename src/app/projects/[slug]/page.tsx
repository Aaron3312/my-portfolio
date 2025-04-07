// src/app/projects/[slug]/page.tsx
import Image from "next/image"
import { Button } from "../../components/ui/button"
import { ArrowLeft, Github, ExternalLink, Globe, Cake, Hourglass, Film, HeartHandshake, Brain, Shield } from "lucide-react"
import Link from "next/link"
import { getProjectData } from "@/utils/project-utils"
import ProjectCarousel from "@/components/project-carousel"
import { projects } from "@/data/projects"

// Helper function to get the correct icon component
const getIconComponent = (iconName: string, className: string) => {
  const icons = {
    Globe: <Globe className={className} />,
    Cake: <Cake className={className} />,
    Hourglass: <Hourglass className={className} />,
    Film: <Film className={className} />,
    HeartHandshake: <HeartHandshake className={className} />,
    Brain: <Brain className={className} />,
    Shield: <Shield className={className} />
  };
  
  return icons[iconName as keyof typeof icons] || <Globe className={className} />;
};

// This function generates all the possible slug values at build time
export async function generateStaticParams() {
  // Get all project slugs from your projects data
  const slugs = Object.keys(projects);
  
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = getProjectData(params.slug);
  
  if (!project) {
    return (
      <div className="container max-w-5xl mx-auto py-20 text-center">
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

  // Get the icon
  const icon = getIconComponent(project.iconName, `h-6 w-6 ${project.iconColor}`);

  return (
    <div className="container max-w-5xl mx-auto py-12 md:py-20">
      <div className="mb-8">
        <Link 
          href="/projects" 
          className="inline-flex items-center text-sm font-medium text-primary hover:underline"
        >
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to Projects
        </Link>
      </div>
      
      <div className="mb-10 text-center">
        <div className="flex items-center gap-3 justify-center">
          <div className="rounded-full bg-slate-100 p-2 dark:bg-slate-800">
            {icon}
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{project.title}</h1>
        </div>
        <p className="mt-4 text-muted-foreground md:text-lg max-w-2xl mx-auto">{project.description}</p>
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
        <ProjectCarousel screenshots={project.screenshots} title={project.title} />
      )}
    </div>
  )
}