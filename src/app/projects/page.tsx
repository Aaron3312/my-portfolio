import { projectsMin } from "@/utils/project-utils";
import { Metadata } from 'next';
import ProjectsClient from './ProjectsClient';

export const metadata: Metadata = {
  title: 'Proyectos - Aaron Hernández | Portfolio Desarrollador Web',
  description: 'Explora mis proyectos de desarrollo web: aplicaciones React, sistemas de gestión, e-commerce, APIs REST y soluciones cloud. Casos de estudio y ejemplos de código.',
  keywords: [
    'proyectos desarrollador web México',
    'portfolio React developer',
    'ejemplos desarrollo web',
    'aplicaciones React proyectos',
    'casos estudio desarrollo software',
    'proyectos Node.js México',
    'portfolio full stack developer',
    'ejemplos código React'
  ],
  openGraph: {
    title: 'Proyectos - Aaron Hernández | Portfolio Desarrollador Web',
    description: 'Explora mis proyectos de desarrollo web: aplicaciones React, sistemas de gestión, e-commerce, APIs REST y soluciones cloud.',
    url: 'https://aaronhernandez.me/projects',
  }
}

export default function ProjectsPage() {
  return <ProjectsClient projects={projectsMin} />;
}