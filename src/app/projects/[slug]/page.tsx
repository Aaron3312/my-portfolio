// src/app/projects/[slug]/page.tsx
import Image from "next/image"
import { Button } from "../../../components/ui/Button"
import { ArrowLeft, Github, ExternalLink, Globe, Cake, Hourglass, Film, HeartHandshake, Brain, Shield, CheckCircle2 } from "lucide-react"
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

// Define proper type that matches Next.js expectations
type ProjectParams = {
  params: {
    slug: string;
  };
  searchParams?: Record<string, string | string[] | undefined>;
};

// Format description content with bullet points
const formatDescription = (content: string) => {
  if (!content) return { paragraphs: [], features: [] };
  
  // Split content by paragraphs
  const paragraphs: string[] = [];
  const features: string[] = [];
  
  // Try to detect if there are sections that could be bullet points
  // Look for sentences that start with "Features include", "Key functionalities", etc.
  const lines = content.split(/\n+/);
  
  let inFeatureSection = false;
  
  lines.forEach(line => {
    const trimmedLine = line.trim();
    
    if (!trimmedLine) return;
    
    // Check if this line introduces a feature list
    if (
      /features include|key features|main features|functionalities|capabilities|highlights/i.test(trimmedLine) ||
      /implemented|developed|built|created|designed with/i.test(trimmedLine)
    ) {
      inFeatureSection = true;
      paragraphs.push(trimmedLine);
    } 
    // Check if this could be a bullet point item
    else if (inFeatureSection && 
            (trimmedLine.startsWith('-') || 
             trimmedLine.startsWith('•') || 
             /^(\d+\.)/.test(trimmedLine) ||
             trimmedLine.length < 100)) { // Short sentences in feature section likely to be features
      features.push(trimmedLine.replace(/^[-•\s]+/, '').trim());
    } 
    // Regular paragraph
    else {
      inFeatureSection = false;
      paragraphs.push(trimmedLine);
    }
  });
  
  return { paragraphs, features };
};

// Make the component async
export default async function ProjectDetail({ params }: { params: { slug: string } }) {
  // Make sure params is properly awaited
  const paramData = await Promise.resolve(params);
  const slug = paramData.slug;
  
  // If getProjectData is async, add await here
  const project = getProjectData(slug);
  
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
  
  // Format the description content
  const formattedContent = formatDescription(project.fullDescription);
  
  // Check if we need to use the HTML content directly
  const useRawHtml = project.fullDescription.includes('<') && project.fullDescription.includes('>');

  return (
    <div className="container max-w-5xl mx-auto py-12 md:py-20 px-4 sm:px-6">
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
          {useRawHtml ? (
            <div className="prose max-w-none dark:prose-invert" dangerouslySetInnerHTML={{ __html: project.fullDescription }} />
          ) : (
            <div className="space-y-6">
              {/* Overview Section */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <div className="space-y-4">
                  {formattedContent.paragraphs.map((paragraph, idx) => (
                    <p key={idx} className="text-base text-muted-foreground">{paragraph}</p>
                  ))}
                </div>
              </div>
              
              {/* Features Section - Only show if we have features */}
              {formattedContent.features.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                  <ul className="space-y-3">
                    {formattedContent.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-base text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
        
        <div className="space-y-8">
          <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-lg">
            <h3 className="mb-4 text-xl font-bold">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-800 dark:bg-slate-700 dark:text-slate-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-lg">
            <h3 className="mb-4 text-xl font-bold">Links</h3>
            <div className="flex flex-col space-y-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-slate-200 dark:bg-slate-700 rounded-md text-sm font-medium hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
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
                  className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-md text-sm font-medium text-primary hover:bg-primary/20 transition-colors"
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
        <div className="bg-slate-50 dark:bg-slate-800/30 py-10 px-4 rounded-lg mt-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Project Gallery</h2>
          <ProjectCarousel screenshots={project.screenshots} title={project.title} />
        </div>
      )}
    </div>
  )
}