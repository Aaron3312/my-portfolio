// src/components/project-card.tsx
// src/components/project-card.tsx
import Image from "next/image"
import { Button } from "@/components/ui/Button"
import { Github, ExternalLink, Globe, Hourglass, Cake, Film, HeartHandshake, Brain, Shield } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  githubUrl?: string
  liveUrl?: string
  slug: string
  icon?: string
}

export function ProjectCard({
  title,
  description,
  image,
  tags,
  githubUrl,
  liveUrl,
  slug,
  icon = "default"
}: ProjectCardProps) {
  // Icon selection based on the icon string or project slug
  const getIcon = () => {
    switch (icon) {
      case "globe":
      case "supply-stream":
        return <Globe className="h-6 w-6 text-sky-600" />;
      case "owl":
      case "cronos":
        return <Hourglass className="h-6 w-6 text-amber-600" />;
      case "cake":
      case "bakery-pos":
        return <Cake className="h-6 w-6 text-pink-500" />;
      case "film":
      case "cuevana":
        return <Film className="h-6 w-6 text-violet-500" />;
      case "heart":
      case "solo-para-eva":
        return <HeartHandshake className="h-6 w-6 text-red-500" />;
      case "brain":
      case "warehouse-system":
        return <Brain className="h-6 w-6 text-indigo-500" />;
      case "shield":
      case "security-system":
        return <Shield className="h-6 w-6 text-emerald-600" />;
      default:
        return <ExternalLink className="h-6 w-6 text-slate-500" />;
    }
  };
  return (
    <div className="group flex flex-col overflow-hidden rounded-lg bg-black shadow-sm transition-all  hover:translate-y-[-5px] duration-300 dark:border-slate-800 dark:bg-slate-950">
      <div className="aspect-video w-full overflow-hidden bg-black dark:bg-slate-800 relative">
        <div className="absolute top-4 right-4 z-10 rounded-full bg-black/90 p-2 shadow-md dark:bg-slate-900/90">
          {getIcon()}
        </div>
        <Image
          src={image}
          alt={title}
          width={600}
          height={340}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <h3 className="mb-2 text-xl font-bold">{title}</h3>
          <p className="mb-4 text-muted-foreground">{description}</p>
          <div className="mb-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-black px-2.5 py-0.5 text-xs font-medium text-slate-800 dark:bg-slate-800 dark:text-slate-100"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href={`/projects/${slug}`} variant="default" size="sm">
            View Details
          </Button>
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center justify-center rounded-md border border-slate-200 bg-black px-3 text-sm font-medium text-slate-900 transition-colors hover:bg-black hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:hover:bg-slate-800 dark:hover:text-slate-100 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900"
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center justify-center rounded-md border border-slate-200 bg-black px-3 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:hover:bg-slate-800 dark:hover:text-slate-100 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}