// File: src/components/sections/ProjectsSection.jsx
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { getProjectIcon } from "@/utils/projectIcons";

const ProjectsSection = ({ projectsRef, projectItemsRef, featuredProjects }) => {
  return (
    <section ref={projectsRef} className="py-16 sm:py-20 md:py-28 bg-gray-50 dark:bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-950/10 dark:to-indigo-950/10"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            Featured Projects
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-3xl">
            A selection of my most innovative work
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* Map through featured projects from the projects array */}
          {featuredProjects.map((project, index) => (
            <div 
              key={project.slug} 
              ref={el => projectItemsRef.current[index] = el}
              className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 backdrop-blur-sm"
              style={{ 
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10 rounded-full bg-white/90 p-1.5 sm:p-2 shadow-md dark:bg-slate-900/90 transform transition-transform duration-300 group-hover:scale-110" style={{ transform: 'translateZ(20px)' }}>
                {getProjectIcon(project.slug)}
              </div>
              
              <div className="aspect-video w-full bg-gray-100 dark:bg-slate-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <Image
                  src={project.image}
                  alt={`${project.title} Project`}
                  fill
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
              </div>
              
              <div className="p-5 sm:p-6 bg-white dark:bg-slate-900 transform" style={{ transform: 'translateZ(5px)' }}>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{project.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-5">
                  {project.description}
                </p>
                <div className="flex justify-center">
                  <Button 
                    href={`/projects/${project.slug}`} 
                    variant="outline" 
                    size="sm" 
                    className="text-xs sm:text-sm w-full border-blue-500 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30"
                  >
                    View Project
                  </Button>
                </div>
                <div className="absolute border border-transparent group-hover:border-blue-500/20 dark:group-hover:border-blue-400/20 rounded-lg transition-colors duration-300"></div>
              </div>
              
              {/* Highlight effect around the card */}
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-10 sm:mt-12">
          <Button 
            href="/projects" 
            variant="default" 
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl font-medium text-white w-full sm:w-auto max-w-xs mx-auto relative overflow-hidden group"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full opacity-10 group-hover:w-96 group-hover:h-96"></span>
            <span className="relative z-10">View All Projects</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;