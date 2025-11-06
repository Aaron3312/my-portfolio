// src/app/projects/[slug]/page.tsx
import { projects } from "@/data/projects"
import ProjectDetailClient from "./ProjectDetailClient"

// This function tells Next.js which routes to pre-render at build time
export async function generateStaticParams() {
  const slugs = Object.keys(projects);
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// Server component wrapper that passes params to client component
export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  return <ProjectDetailClient slug={resolvedParams.slug} />
}
