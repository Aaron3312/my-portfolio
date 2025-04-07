// File: src/components/sections/SkillsSection.jsx
import { useState, useEffect } from "react";
import React from "react";
import { skills } from "@/data/skillsData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const SkillsSection = ({ skillsRef, skillItemsRef }) => {
  const [activeSkillIndex, setActiveSkillIndex] = useState(null);
  const [skillsInView, setSkillsInView] = useState(false);

  // Handle skill click to show detailed view
  const handleSkillClick = (index) => {
    setActiveSkillIndex(activeSkillIndex === index ? null : index);
  };

  useEffect(() => {
    // Skip if we're server-side rendering
    if (typeof window === "undefined") return;

    // Setup section entrance animation
    const sectionTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: skillsRef.current,
        start: "top 80%",
        once: true,
        onEnter: () => setSkillsInView(true)
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

    // Animate skill cards on scroll with staggered entrance
    skillItemsRef.current.forEach((card, index) => {
      if (!card) return;

      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          once: true
        },
        y: 100,
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        delay: index * 0.1,
        ease: "power3.out"
      });
    });

    // Cleanup function
    return () => {
      if (sectionTimeline.scrollTrigger) {
        sectionTimeline.scrollTrigger.kill();
      }
      
      skillItemsRef.current.forEach((card) => {
        if (card && ScrollTrigger.getById(card)) {
          ScrollTrigger.getById(card).kill();
        }
      });
    };
  }, [skillsRef, skillItemsRef]);

  // Card expansion animation effect
  useEffect(() => {
    if (activeSkillIndex !== null) {
      const activeCard = skillItemsRef.current[activeSkillIndex];
      if (!activeCard) return;

      // Create expansion timeline
      const expandTl = gsap.timeline();
      
      // Animate the expansion
      expandTl.to(activeCard, {
        scale: 1.02,
        duration: 0.3,
        ease: "power2.out"
      })
      .to(activeCard.querySelector('.p-6, .p-8'), {
        backgroundColor: "#000000", // black
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
        duration: 0.3
      }, "<");
      
      // Animate content appearing
      const content = activeCard.querySelector('.w-full.mt-4');
      if (content) {
        expandTl.from(content.children, {
          opacity: 0,
          y: 20,
          stagger: 0.1,
          duration: 0.4
        }, "-=0.2");
      }
      
      // Clean up animations when component unmounts
      return () => {
        expandTl.kill();
      };
    }
  }, [activeSkillIndex, skillItemsRef]);

  return (
    <section ref={skillsRef} className="py-16 sm:py-20 md:py-28 bg-dark dark:bg-slate-950 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            My Skills
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-3xl">
            Expertise in multiple domains of software development and engineering
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              ref={el => skillItemsRef.current[index] = el}
              className={`relative cursor-pointer transition-all duration-500 transform ${activeSkillIndex === index ? 'col-span-full' : ''}`}
              onClick={() => handleSkillClick(index)}
            >
              <div 
                className={`flex flex-col items-center p-6 sm:p-8 rounded-xl border border-dark dark:border-slate-800 shadow-sm overflow-hidden ${activeSkillIndex === index ? 'bg-white dark:bg-slate-900' : 'bg-gray-50 dark:bg-slate-900 hover:shadow-md hover:-translate-y-1'}`}
                style={{
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                {/* Background gradient */}
                <div 
                  className="absolute inset-0 opacity-10" 
                  style={{ 
                    background: `radial-gradient(circle at 50% 0%, ${skill.color}40, transparent 70%)`,
                    transition: 'all 0.5s ease'
                  }}
                ></div>
                
                <div className={`relative z-10 flex ${activeSkillIndex === index ? 'flex-col w-full items-start' : 'flex-col items-center'}`}>
                  {/* Icon and Title */}
                  <div className={`flex ${activeSkillIndex === index ? 'flex-row items-center mb-6' : 'flex-col items-center'}`}>
                    <div 
                      className={`rounded-full p-3 mb-4 ${activeSkillIndex === index ? 'mb-0 mr-4' : ''}`}
                      style={{ 
                        background: `linear-gradient(135deg, ${skill.color}20, ${skill.color}40)` 
                      }}
                    >
                      {React.cloneElement(skill.icon, { 
                        style: { color: skill.color } 
                      })}
                    </div>
                    <h3 className={`font-bold ${activeSkillIndex === index ? 'text-2xl' : 'text-lg sm:text-xl'}`}>
                      {skill.title}
                    </h3>
                  </div>
                  
                  {/* Basic view - Technologies list */}
                  {activeSkillIndex !== index && (
                    <p className="text-xs sm:text-sm text-muted-foreground text-center mt-2">
                      {skill.technologies.join(", ")}
                    </p>
                  )}
                  
                  {/* Expanded view */}
                  {activeSkillIndex === index && (
                    <div className="w-full mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <p className="text-base mb-4 text-muted-foreground">{skill.description}</p>
                        
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold mb-2">Technologies:</h4>
                          <div className="flex flex-wrap gap-2">
                            {skill.technologies.map(tech => (
                              <span 
                                key={tech} 
                                className="px-2 py-1 text-xs rounded-md" 
                                style={{ 
                                  backgroundColor: `${skill.color}20`,
                                  color: skill.color 
                                }}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-semibold mb-2">Related Projects:</h4>
                          <ul className="list-disc list-inside text-sm text-muted-foreground">
                            {skill.projects.map(project => (
                              <li key={project}>{project}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="relative">
                        <h4 className="text-sm font-semibold mb-2">Example Code:</h4>
                        <div className="text-xs bg-slate-900 text-slate-100 p-4 rounded-md overflow-x-auto">
                          <pre><code>{skill.codeSnippet}</code></pre>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Expanded view close button */}
                  {activeSkillIndex === index && (
                    <button 
                      className="mt-6 text-sm text-blue-600 dark:text-blue-400 hover:underline self-center"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveSkillIndex(null);
                      }}
                    >
                      Close
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;