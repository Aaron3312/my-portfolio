"use client";
// src/app/projects/page.tsx
import { ProjectCard } from "@/components/ui/project-card";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useEffect, useRef, useState } from "react";
import { projectsMin } from "@/utils/project-utils";

// Register plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}

export default function ProjectsPage() {
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const projectsContainerRef = useRef(null);
  const pageWrapperRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Split text for character-by-character animation
    const headingSplit = new SplitText(headingRef.current, { type: "chars,words" });
    const descSplit = new SplitText(descriptionRef.current, { type: "chars,words,lines" });

    // Create master timeline
    const masterTl = gsap.timeline();

    // Heading animation - cascading characters with wave effect
    masterTl.from(headingSplit.chars, {
      opacity: 0,
      y: gsap.utils.wrap([-100, -80, -120, -90]),
      rotationX: gsap.utils.wrap([-90, -120, -80]),
      transformOrigin: "0% 50% -50",
      ease: "back.out(1.7)",
      duration: 1.2,
      stagger: {
        amount: 0.8,
        from: "random",
      },
    });

    // Description animation with lines transitioning in
    masterTl.from(descSplit.lines, {
      opacity: 0,
      y: 20,
      rotationX: -40,
      transformOrigin: "50% 0% -40",
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
    }, "-=0.4");

    // Add parallax scrolling effects to project container
    gsap.to(projectsContainerRef.current, {
      y: "10%",
      ease: "none",
      scrollTrigger: {
        trigger: projectsContainerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    // Mouse move effect for 3D perspective
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) - 0.5,
        y: (e.clientY / window.innerHeight) - 0.5,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Project cards enhanced animations
    const projectCards = document.querySelectorAll(".project-card");
    
    projectCards.forEach((card, index) => {
      // Initial appearance with 3D rotation and staggered delay
      gsap.from(card, {
        opacity: 0,
        y: 80,
        rotationY: gsap.utils.random(-15, 15),
        rotationX: gsap.utils.random(-10, 10),
        scale: 0.9,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=100px",
          end: "center center",
          toggleActions: "play none none reverse",
        },
        delay: index * 0.15, // Increased stagger time
      });

      // Select elements within each card
      const image = card.querySelector(".card-image");
      const content = card.querySelector(".card-content");
      const title = card.querySelector("h3") || card.querySelector(".card-title");
      const description = card.querySelector("p") || card.querySelector(".card-description");
      const tags = card.querySelectorAll(".card-tag");
      const buttons = card.querySelectorAll(".card-button");

      // Create a timeline for each card's hover animation
      const hoverTl = gsap.timeline({ paused: true });
      
      // Enhanced hover animations
      hoverTl.to(card, {
        y: -15,
        rotationY: 5,
        rotationX: -5,
        scale: 1.05,
        boxShadow: "0 25px 50px rgba(0, 0, 0, 0.2)",
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        duration: 0.5,
        ease: "power2.out",
      }, 0)
      .to(image, {
        scale: 1.15,
        rotation: 1,
        filter: "brightness(1.1) contrast(1.1)",
        duration: 0.8,
        ease: "power2.out",
      }, 0)
      .to(title, {
        color: "#4361ee",
        fontWeight: "bold",
        letterSpacing: "0.02em",
        duration: 0.4,
      }, 0)
      .to(description, {
        y: -5,
        opacity: 0.9,
        duration: 0.5,
      }, 0.1)
      .to(tags, {
        scale: 1.15,
        y: -5,
        color: "black",
        backgroundColor: "#4361ee",
        stagger: 0.07,
        duration: 0.4,
      }, 0.1)
      .to(buttons, {
        y: -8,
        scale: 1.1,
        boxShadow: "0 6px 15px rgba(0, 0, 0, 0.15)",
        stagger: 0.1,
        duration: 0.4,
      }, 0.2);

      // Apply 3D perspective based on mouse position
      const moveTl = gsap.timeline({ paused: true });
      
      card.addEventListener("mouseenter", () => {
        hoverTl.play();
        card.addEventListener("mousemove", (e) => {
          const cardRect = card.getBoundingClientRect();
          const cardCenterX = cardRect.left + cardRect.width / 2;
          const cardCenterY = cardRect.top + cardRect.height / 2;
          
          // Calculate mouse position relative to card center
          const moveX = (e.clientX - cardCenterX) / (cardRect.width / 2);
          const moveY = (e.clientY - cardCenterY) / (cardRect.height / 2);
          
          // Apply 3D rotation based on mouse position
          gsap.to(card, {
            rotationY: moveX * 10,
            rotationX: -moveY * 10,
            transformPerspective: 1000,
            transformOrigin: "center center",
            duration: 0.5,
            ease: "power2.out",
          });
          
          // Add depth to internal elements
          gsap.to(image, {
            x: moveX * 15,
            y: moveY * 15,
            duration: 0.5,
          });
          
          gsap.to(content, {
            x: moveX * 10,
            y: moveY * 10,
            duration: 0.5,
          });
          
          gsap.to(tags, {
            x: moveX * 5 * (index % 3 + 1),
            y: moveY * 5 * (index % 3 + 1),
            stagger: 0.05,
            duration: 0.5,
          });
        });
      });

      card.addEventListener("mouseleave", () => {
        hoverTl.reverse();
        gsap.to(card, {
          rotationY: 0,
          rotationX: 0,
          transformOrigin: "center center",
          duration: 0.6,
          ease: "power1.out",
        });
      });

      // Scroll-driven color changes
      ScrollTrigger.create({
        trigger: card,
        start: "top center",
        end: "bottom center",
        onToggle: (self) => {
          if (self.isActive) {
            gsap.to(card, {
              backgroundColor: `hsl(${210 + index * 15}, 80%, 97%)`,
              borderColor: `hsl(${210 + index * 15}, 80%, 90%)`,
              duration: 0.8,
            });
          } else {
            gsap.to(card, {
              backgroundColor: "black",
              borderColor: "rgba(0,0,0,0.1)",
              duration: 0.8,
            });
          }
        },
      });
    });

    // Fancy scroll indicator
    const scrollIndicator = document.createElement("div");
    scrollIndicator.className = "scroll-indicator";
    document.body.appendChild(scrollIndicator);
    
    Object.assign(scrollIndicator.style, {
      position: "fixed",
      bottom: "40px",
      right: "40px",
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      background: "black",
      zIndex: 100,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
    });
    
    const scrollProgress = document.createElement("div");
    scrollIndicator.appendChild(scrollProgress);
    
    Object.assign(scrollProgress.style, {
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      background: "#4361ee",
      transformOrigin: "bottom",
      transform: "scaleY(0)",
    });
    
    // Update scroll indicator based on scroll position
    ScrollTrigger.create({
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        gsap.to(scrollProgress, {
          scaleY: self.progress,
          rotation: self.progress * 360 * 1.5,
          duration: 0.1,
        });
      }
    });

    // Equalizar altura de las tarjetas después de que se rendericen
    equalizeCardHeights();
    window.addEventListener('resize', equalizeCardHeights);

    // Clean up
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener('resize', equalizeCardHeights);
      if (scrollIndicator.parentNode) {
        document.body.removeChild(scrollIndicator);
      }
      masterTl.kill();
    };
  }, []);

  // Función para igualar la altura de todas las tarjetas
  const equalizeCardHeights = () => {
    const cards = document.querySelectorAll('.project-card');
    if (!cards.length) return;
    
    // Primero, resetear alturas para medirlas correctamente
    cards.forEach(card => {
      card.style.height = 'auto';
    });
    
    // Encontrar la altura máxima
    let maxHeight = 0;
    cards.forEach(card => {
      const height = card.offsetHeight;
      if (height > maxHeight) {
        maxHeight = height;
      }
    });
    
    // Aplicar la altura máxima a todas las tarjetas
    cards.forEach(card => {
      card.style.height = `${maxHeight}px`;
    });
  };

  // Apply subtle 3D effect to entire page based on mouse position
  useEffect(() => {
    if (pageWrapperRef.current) {
      gsap.to(pageWrapperRef.current, {
        rotationY: mousePosition.x * 3,
        rotationX: -mousePosition.y * 3,
        transformPerspective: 1000,
        transformOrigin: "center center",
        duration: 1,
        ease: "power1.out",
      });
    }
  }, [mousePosition]);

  return (
    <div ref={pageWrapperRef} className="overflow-hidden">
      <div>
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="mb-12 text-center">
            <h1
              ref={headingRef} 
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
              data-speed="0.8"
            >
              My Projects  
            </h1>
            <p
              ref={descriptionRef}
              className="mt-4 text-muted-foreground md:text-lg" 
              data-speed="0.9"
            >
              A showcase of my web development projects and applications
            </p>
          </div>
          <div
            ref={projectsContainerRef}
            className="grid mb-20 grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto"
            data-speed="1.05"  
          >
            {projectsMin.map((project, index) => (
              <div 
                key={project.slug} 
                className="project-card h-full"
                data-speed={1 + (index % 3) * 0.05}
                style={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <ProjectCard 
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={project.tags}
                  githubUrl={project.githubUrl} 
                  liveUrl={project.liveUrl}
                  slug={project.slug}
                  icon={project.slug}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}