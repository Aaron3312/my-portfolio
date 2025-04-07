// src/utils/project-utils.ts
import { projects, Project } from "@/data/projects";

export const getProjectData = (slug: string): Project | undefined => {
  return projects[slug];
};