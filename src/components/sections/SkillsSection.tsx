// File: src/components/sections/SkillsSection.jsx
import { useEffect, useState } from "react";
import React from "react";
import { skills } from "@/data/skillsData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Folder from "@/components/Folder";
import { useLanguage } from "@/contexts/LanguageContext";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Props {
  skillsRef: React.RefObject<HTMLElement>;
  skillItemsRef: React.MutableRefObject<(HTMLDivElement | null)[]>;
}

const SkillsSection: React.FC<Props> = ({ skillsRef, skillItemsRef }) => {
  const { data } = useLanguage();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Map skill titles to relevant images
  const skillImages: Record<string, { project: string; tech: string }> = {
    "Frontend Development": {
      project: "/images/SupplyStream.png",
      tech: "/images/blueGlobe.png"
    },
    "Backend Development": {
      project: "/images/Cronos/ResponseProyect2.png",
      tech: "/images/Crono2s.png"
    },
    "AI & Machine Learning": {
      project: "/images/Warehouse.gif",
      tech: "/images/Security.gif"
    },
    "Cloud & DevOps": {
      project: "https://raw.githubusercontent.com/Aaron3312/tienda-limpieza-corporal/master/NosotrosSoloEva.png",
      tech: "/images/SoloParaEva.png"
    },
    "Programming Languages": {
      project: "/images/BakeryPosDetails.png",
      tech: "/images/BakeryPos/BakeryPos.gif"
    },
    "Software Engineering": {
      project: "/images/nodo/website.png",
      tech: "/images/nodo/nodo.png"
    }
  };

  // Map projects to their URLs (add your project URLs here)
  const projectLinks: Record<string, string> = {
    "Supply Stream Dashboard": "/projects/supply-stream",
    "Bakery POS System": "/projects/bakery-pos",
    "Cronos Time Management": "/projects/cronos",
    "E-commerce API": "/projects/ecommerce-api",
    "Object Detection System": "/projects/warehouse-system",
    "AI Writing Assistant": "/projects/ai-assistant",
    "Microservices Infrastructure": "/projects/solo-para-eva",
    "CI/CD Pipeline Setup": "/projects/cicd-pipeline",
    "Algorithm Visualizer": "/projects/bakery-pos",
    "Compiler Design": "/projects/compiler-design",
    "Enterprise System Architecture": "/projects/nodo-dark-kitchens",
    "Network Design": "/projects/network-design"
  };

  useEffect(() => {
    // Skip if we're server-side rendering
    if (typeof window === "undefined") return;

    // Setup section entrance animation
    const sectionTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: skillsRef.current,
        start: "top 80%",
        once: true
      }
    });

    // Animate section title and subtitle
    const titleElements = skillsRef.current.querySelectorAll("h2, p");
    sectionTimeline.from(titleElements, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2
    });

    // Animate folder cards on scroll with staggered entrance
    skillItemsRef.current.forEach((card, index) => {
      if (!card) return;

      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          once: true
        },
        y: 80,
        opacity: 0,
        scale: 0.95,
        duration: 0.7,
        delay: index * 0.06,
        ease: "power3.out"
      });
    });

    // Cleanup function
    return () => {
      if (sectionTimeline.scrollTrigger) {
        sectionTimeline.scrollTrigger.kill();
      }

      // Kill any ScrollTriggers attached to items
      skillItemsRef.current.forEach((card) => {
        if (card) {
          const st = ScrollTrigger.getById(card as any) as any;
          if (st && st.kill) st.kill();
        }
      });
    };
  }, [skillsRef, skillItemsRef]);
  // Folder handles expansion animations itself; no extra effect needed here

  return (
    <section ref={skillsRef} className="py-16 sm:py-20 md:py-28 bg-dark dark:bg-slate-950 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            {data.skills.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-3xl">
            {data.skills.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 max-w-7xl mx-auto">
          {skills.map((skill, index) => {
            const isExpanded = expandedIndex === index;
            
            return (
              <div 
                key={skill.title} 
                ref={(el) => { skillItemsRef.current[index] = el; }}
                className="group relative"
                style={{ overflow: 'visible' }}
              >
                {/* Card Container */}
                <div 
                  className={`
                    relative rounded-2xl 
                    bg-gradient-to-br from-slate-900/95 to-slate-950/95
                    backdrop-blur-sm shadow-xl
                    transition-all duration-500 ease-out
                    hover:shadow-2xl hover:scale-[1.02]
                    ${isExpanded ? 'ring-2 scale-[1.02]' : 'border-2'}
                  `}
                  style={{
                    background: `linear-gradient(135deg, ${skill.color}12 0%, rgba(15, 23, 42, 0.95) 100%)`,
                    borderColor: isExpanded ? `${skill.color}80` : `${skill.color}40`,
                    boxShadow: isExpanded 
                      ? `0 20px 50px -12px ${skill.color}40, 0 0 0 2px ${skill.color}60`
                      : `0 10px 30px -10px ${skill.color}20`,
                    overflow: 'visible'
                  }}
                >
                  {/* Folder Section - Top */}
                  <div className="relative pt-6 pb-3 flex justify-center items-center" style={{ minHeight: '200px', height: '200px' }}>
                    {/* Decorative gradient bg - More vibrant */}
                    <div 
                      className="absolute inset-0 opacity-30"
                      style={{
                        background: `radial-gradient(ellipse at top, ${skill.color}60, transparent 70%)`
                      }}
                    />
                    
                    {/* Folder Component - Smaller size */}
                    <div className="relative z-10">
                      <Folder 
                        size={2} 
                        color={skill.color}
                        items={[
                          // Paper 1: Icon with glassmorphism effect
                          <div
                            key="1"
                            className="flex flex-col items-center justify-center h-full w-full p-2 rounded-lg relative overflow-hidden"
                            style={{
                              background: 'rgba(255, 255, 255, 0.08)',
                              backdropFilter: 'blur(12px)',
                              WebkitBackdropFilter: 'blur(12px)',
                              border: `1px solid ${skill.color}30`,
                              boxShadow: `0 8px 32px 0 rgba(0, 0, 0, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.1)`
                            }}
                          >
                            {/* Subtle gradient overlay */}
                            <div
                              className="absolute inset-0 opacity-20 pointer-events-none"
                              style={{
                                background: `radial-gradient(circle at 50% 0%, ${skill.color}40, transparent 70%)`
                              }}
                            />

                            <div
                              className="rounded-full p-3 mb-2 relative z-10"
                              style={{
                                background: `linear-gradient(135deg, ${skill.color}40, ${skill.color}60)`,
                                boxShadow: `0 4px 12px ${skill.color}40`
                              }}
                            >
                              <span style={{ color: '#fff', fontSize: '24px', display: 'flex' }}>
                                {skill.icon}
                              </span>
                            </div>
                            <p className="text-[5px] font-bold text-center relative z-10" style={{ color: "white", textShadow: `0 1px 2px rgba(0, 0, 0, 0.5)` }}>
                              {skill.title}
                            </p>
                          </div>,
                          
                          // Paper 2: Project image - Clickeable
                          <a 
                            key="2" 
                            href={projectLinks[skill.projects[0]] || '/projects'} 
                            className="h-full w-full overflow-hidden rounded-lg relative block cursor-pointer hover:scale-105 transition-transform"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {skillImages[skill.title] && (
                              <>
                                <img 
                                  src={skillImages[skill.title].project}
                                  alt={`${skill.title} project`}
                                  className="w-full h-full object-cover"
                                  style={{ filter: `hue-rotate(0deg) saturate(1.2)` }}
                                />
                                <div 
                                  className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent flex items-end justify-center p-2"
                                >
                                  <div className="text-center">
                                    <p className="text-[7px] font-bold text-white mb-1">
                                      {skill.projects[0]}
                                    </p>
                                    <p className="text-[5px] text-slate-300">
                                      Click to view →
                                    </p>
                                  </div>
                                </div>
                              </>
                            )}
                          </a>,
                          
                          // Paper 3: Technology image/preview
                          <div key="3" className="h-full w-full overflow-hidden rounded-lg relative">
                            {skillImages[skill.title] && (
                              <>
                                <img 
                                  src={skillImages[skill.title].tech}
                                  alt={`${skill.title} tech`}
                                  className="w-full h-full object-cover"
                                  style={{ filter: `hue-rotate(0deg) saturate(1.2)` }}
                                />
                                <div 
                                  className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent flex items-end justify-center p-2"
                                >
                                  <p className="text-[6px] font-mono text-center font-semibold" style={{ color: skill.color }}>
                                    {skill.technologies.slice(0, 2).join(' • ')}
                                  </p>
                                </div>
                              </>
                            )}
                          </div>
                        ]}
                      />
                    </div>
                  </div>

                  {/* Content Section - Bottom */}
                  <div className="px-6 pb-6" style={{ overflow: 'visible' }}>
                    {/* Title */}
                    <h3 
                      className="text-xl font-bold mb-2 text-center drop-shadow-lg"
                      style={{ 
                        color: skill.color,
                        textShadow: `0 0 20px ${skill.color}40`
                      }}
                    >
                      {skill.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-sm text-slate-300 text-center mb-4 line-clamp-2">
                      {skill.description}
                    </p>

                    {/* Quick Tech Tags */}
                    <div className="flex flex-wrap gap-2 justify-center mb-4">
                      {skill.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-[11px] rounded-lg font-semibold transition-all duration-200 hover:scale-105"
                          style={{
                            backgroundColor: `${skill.color}25`,
                            color: skill.color,
                            border: `1.5px solid ${skill.color}50`,
                            boxShadow: `0 2px 8px ${skill.color}15`
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                      {skill.technologies.length > 3 && (
                        <span 
                          className="px-3 py-1.5 text-[11px] font-medium rounded-lg"
                          style={{
                            backgroundColor: `${skill.color}10`,
                            color: `${skill.color}aa`,
                            border: `1px solid ${skill.color}20`
                          }}
                        >
                          +{skill.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Expand Button */}
                    <button
                      onClick={() => setExpandedIndex(isExpanded ? null : index)}
                      className="w-full py-2.5 px-4 rounded-lg text-sm font-semibold transition-all duration-300
                                 hover:scale-[1.02] active:scale-[0.98]"
                      style={{
                        background: isExpanded 
                          ? `linear-gradient(135deg, ${skill.color}30, ${skill.color}20)` 
                          : `linear-gradient(135deg, ${skill.color}20, ${skill.color}10)`,
                        border: `2px solid ${skill.color}40`,
                        color: skill.color,
                        boxShadow: `0 4px 12px ${skill.color}20`
                      }}
                    >
                      {isExpanded ? '↑ Show Less' : '↓ Show More'}
                    </button>

                    {/* Expanded Content */}
                    {isExpanded && (
                      <div 
                        className="mt-6 pt-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-300"
                        style={{
                          borderTop: `2px solid ${skill.color}30`
                        }}
                      >
                        {/* All Technologies */}
                        <div>
                          <h4 
                            className="text-xs font-bold mb-3 uppercase tracking-wider flex items-center gap-2"
                            style={{ color: skill.color }}
                          >
                            <span className="inline-block w-1 h-4 rounded-full" style={{ backgroundColor: skill.color }}></span>
                            All Technologies
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {skill.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1.5 text-xs rounded-lg font-medium transition-all hover:scale-105"
                                style={{
                                  backgroundColor: `${skill.color}25`,
                                  color: skill.color,
                                  border: `1px solid ${skill.color}40`
                                }}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Related Projects */}
                        <div>
                          <h4 
                            className="text-xs font-bold mb-3 uppercase tracking-wider flex items-center gap-2"
                            style={{ color: skill.color }}
                          >
                            <span className="inline-block w-1 h-4 rounded-full" style={{ backgroundColor: skill.color }}></span>
                            Related Projects
                          </h4>
                          <ul className="space-y-2">
                            {skill.projects.map((project) => (
                              <li key={project} className="text-xs text-slate-300 flex items-start group">
                                <span 
                                  className="mr-2 mt-0.5 transition-all group-hover:scale-125" 
                                  style={{ color: skill.color }}
                                >
                                  ▸
                                </span>
                                <span className="group-hover:text-white transition-colors">{project}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Code Snippet */}
                        {skill.codeSnippet && (
                          <div>
                            <h4 
                              className="text-xs font-bold mb-3 uppercase tracking-wider flex items-center gap-2"
                              style={{ color: skill.color }}
                            >
                              <span className="inline-block w-1 h-4 rounded-full" style={{ backgroundColor: skill.color }}></span>
                              Example Code
                            </h4>
                            <div 
                              className="rounded-lg p-3 overflow-x-auto"
                              style={{
                                backgroundColor: `${skill.color}08`,
                                border: `1px solid ${skill.color}30`
                              }}
                            >
                              <pre className="text-[10px] text-slate-300 leading-relaxed">
                                <code>{skill.codeSnippet}</code>
                              </pre>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;