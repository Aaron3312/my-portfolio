"use client";
import { ProjectCard } from "@/components/ui/project-card";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { useRouter } from "next/navigation";
import { projectsMin } from "@/utils/project-utils";

// Register plugins
gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ProjectsPage() {
  const container = useRef(null);

  useGSAP(() => {
    // Set GSAP defaults for consistency
    gsap.defaults({
      ease: "power2.out",
      duration: 0.8
    });

    // 1. HERO SECTION ANIMATION - ESTILO ORIGINAL
    const heroTL = gsap.timeline();
    
    // Split heading into characters like the original
    const heading = container.current.querySelector('.hero-heading');
    const chars = heading.textContent.split('');
    heading.innerHTML = chars.map(char => char === ' ' ? ' ' : `<span class="char">${char}</span>`).join('');
    
    heroTL
      .from('.char', {
        opacity: 0,
        y: gsap.utils.wrap([-100, -80, -120, -90]),
        rotationX: gsap.utils.wrap([-90, -120, -80]),
        transformOrigin: "0% 50% -50",
        ease: "back.out(1.7)",
        duration: 1.2,
        stagger: {
          amount: 0.8,
          from: "random",
        }
      })
      .from('.hero-description', {
        opacity: 0,
        y: 20,
        rotationX: -40,
        transformOrigin: "50% 0% -40",
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.4")
      .from('.projects-count', {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)"
      }, "-=0.3");

    // 2. CARDS ENTRANCE ANIMATION
    ScrollTrigger.batch('.project-card-container', {
      interval: 0.1,
      batchMax: 3,
      onEnter: (batch) => {
        gsap.from(batch, {
          y: 80,
          opacity: 0,
          scale: 0.9,
          rotation: gsap.utils.random(-5, 5),
          duration: 1,
          stagger: {
            each: 0.2,
            ease: "power2.out"
          },
          ease: "back.out(1.4)"
        });
      }
    });

    // 3. PARALLAX EFFECTS
    gsap.to('.parallax-bg', {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: '.projects-section',
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

    // 4. FLOATING ELEMENTS
    gsap.to('.floating-element', {
      y: -20,
      duration: 2,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
      stagger: {
        each: 0.3,
        repeat: -1
      }
    });

    // 5. PROGRESS INDICATOR
    const progressBar = document.querySelector('.progress-bar');
    if (progressBar) {
      ScrollTrigger.create({
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          gsap.to(progressBar, {
            scaleX: self.progress,
            duration: 0.1
          });
        }
      });
    }

  }, { scope: container });

  return (
    <div ref={container} className="projects-page">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-[#0a0a0a] dark:bg-[#020618] z-50">
        <div className="progress-bar h-full bg-gradient-to-r from-blue-400 to-purple-400 origin-left scale-x-0"></div>
      </div>

      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="floating-element absolute top-20 left-10 w-4 h-4 bg-blue-400/20 rounded-full"></div>
        <div className="floating-element absolute top-40 right-20 w-6 h-6 bg-purple-400/20 rounded-full"></div>
        <div className="floating-element absolute bottom-32 left-1/4 w-3 h-3 bg-indigo-400/20 rounded-full"></div>
        <div className="floating-element absolute bottom-20 right-1/3 w-5 h-5 bg-violet-400/20 rounded-full"></div>
      </div>

      {/* Hero Section */}
      <section className="hero-section relative min-h-[60vh] flex items-center justify-center text-center bg-[#020618]">
        <div className="parallax-bg absolute inset-0 bg-gradient-to-br from-[#020618] via-[#0a0a0a] to-[#020618]"></div>
        
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="hero-heading text-4xl md:text-6xl lg:text-7xl font-bold text-[#ededed] mb-6">
            My Projects
          </h1>
          
          <p className="hero-description text-lg md:text-xl text-[#ededed]/80 max-w-2xl mx-auto mb-8">
            A showcase of my web development projects and applications
          </p>
          
          <div className="projects-count inline-flex items-center gap-2 px-6 py-3 bg-[#ededed]/10 backdrop-blur-sm rounded-full border border-[#ededed]/20">
            <span className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-[#ededed]">{projectsMin.length} Projects Available</span>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section py-20 bg-[#090a0b]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projectsMin.map((project, index) => (
              <ProjectCardWrapper 
                key={project.slug} 
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Individual Project Card Component with Smooth Hover Effects
function ProjectCardWrapper({ project, index }) {
  const cardRef = useRef(null);
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/projects/${project.slug}`);
  };

  useGSAP(() => {
    const card = cardRef.current;
    let isHovering = false;

    // Create hover timeline
    const hoverTL = gsap.timeline({ paused: true });
    
    hoverTL
      .to(card, {
        y: -10,
        scale: 1.03,
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
        duration: 0.4,
        ease: "power2.out"
      }, 0)
      .to(card.querySelector('.card-image'), {
        scale: 1.1,
        duration: 0.6,
        ease: "power2.out"
      }, 0)
      .to(card.querySelector('.card-overlay'), {
        opacity: 1,
        duration: 0.3
      }, 0.1)
      .to(card.querySelectorAll('.card-tag'), {
        y: -5,
        scale: 1.1,
        stagger: 0.05,
        duration: 0.3
      }, 0.1)
      .to(card.querySelectorAll('.card-button'), {
        y: -3,
        scale: 1.05,
        stagger: 0.05,
        duration: 0.3
      }, 0.2);

    // Mouse tracking for subtle 3D effect
    const handleMouseMove = (e) => {
      if (!isHovering) return;
      
      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const rotateX = (e.clientY - centerY) / rect.height * -10;
      const rotateY = (e.clientX - centerX) / rect.width * 10;
      
      gsap.to(card, {
        rotationX: rotateX,
        rotationY: rotateY,
        transformPerspective: 1000,
        duration: 0.5,
        ease: "power1.out"
      });
    };

    const handleMouseEnter = () => {
      isHovering = true;
      hoverTL.play();
      card.addEventListener('mousemove', handleMouseMove);
    };

    const handleMouseLeave = () => {
      isHovering = false;
      hoverTL.reverse();
      card.removeEventListener('mousemove', handleMouseMove);
      
      gsap.to(card, {
        rotationX: 0,
        rotationY: 0,
        duration: 0.6,
        ease: "power2.out"
      });
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup
    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
      card.removeEventListener('mousemove', handleMouseMove);
    };

  }, { scope: cardRef });

  return (
    <div 
      ref={cardRef}
      className="project-card-container group cursor-pointer"
      onClick={handleCardClick}
      style={{ 
        transformStyle: 'preserve-3d',
        backfaceVisibility: 'hidden'
      }}
    >
      <div className="relative h-full bg-black dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg transition-colors duration-300">
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden">
          <img 
            className="card-image w-full h-full object-cover transition-transform duration-700"
            src={project.image} 
            alt={project.title}
            loading="lazy"
          />
          <div className="card-overlay absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300"></div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
            {project.title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.slice(0, 3).map((tag, tagIndex) => (
              <span 
                key={tagIndex}
                className="card-tag px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium transition-all duration-300"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="card-tag px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                +{project.tags.length - 3} more
              </span>
            )}
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            {project.githubUrl && (
              <a 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="card-button flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-center font-medium transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Code
                </span>
              </a>
            )}
            {project.liveUrl && (
              <a 
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="card-button flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-center font-medium transition-all duration-300 hover:from-blue-700 hover:to-purple-700"
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </span>
              </a>
            )}
          </div>
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      </div>
    </div>
  );
}