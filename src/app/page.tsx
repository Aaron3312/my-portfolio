// File: src/app/page.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import HeroSection from "@/components/sections/HeroSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import CTASection from "@/components/sections/CTASection";
import BackgroundCanvas from "@/components/ui/BackgroundCanvas";
import LoadingScreen from "@/components/ui/LoadingScreen";
import { projectsMin, projectsMin_spanish } from "@/data/projects";
import { useLanguage } from "@/contexts/LanguageContext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, MotionPathPlugin);
}

export default function Home() {
  const { language } = useLanguage();

  // Get 3 featured projects to display on the home page (based on language)
  const currentProjects = language === 'es' ? projectsMin_spanish : projectsMin;
  const featuredProjects = currentProjects.slice(0, 3);
  
  // State for 3D effect and interactive elements
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);
  
  // Refs for animations
  const heroRef = useRef<HTMLElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const skillItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const projectsRef = useRef<HTMLElement>(null);
  const projectItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const ctaRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Initialize empty refs arrays
  useEffect(() => {
    skillItemsRef.current = skillItemsRef.current.slice(0, 6);
    projectItemsRef.current = projectItemsRef.current.slice(0, 3);
  }, []);

  // Initialize animations
  useEffect(() => {
    if (typeof window === "undefined") return;
    
    // Loading animation
    const loadingTimeline = gsap.timeline({
      onComplete: () => {
        setIsLoading(false);
      }
    });
    
    // Initial loading animation
    loadingTimeline
      .to(".loading-progress", {
        width: "100%",
        duration: 1.5,
        ease: "power2.inOut"
      })
      .to(".loading-screen", {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.5,
        ease: "power2.inOut"
      });
      
    return () => {
      // Clean up timeline
      loadingTimeline.kill();
    };
  }, []);

  // Set up animations separately after loading is complete
  useEffect(() => {
    if (typeof window === "undefined" || isLoading) return;
    
    // Hero section animations
    const heroTimeline = gsap.timeline();
    
    if (heroTextRef.current) {
      heroTimeline.from(heroTextRef.current.querySelectorAll('.animate-in'), {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out"
      });
    }
    
    if (heroImageRef.current) {
      heroTimeline.from(heroImageRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "elastic.out(1, 0.5)"
      }, "-=0.5");
    }
    
    // Initialize ScrollTrigger
    ScrollTrigger.refresh();
    
    // Set up scroll-triggered animations
    // Skills section
    if (skillsRef.current && skillItemsRef.current.length > 0) {
      gsap.from(skillItemsRef.current.filter(Boolean), {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 70%",
          markers: process.env.NODE_ENV === 'development', // Add markers in dev mode for debugging
          toggleActions: "play none none none"
        }
      });
    }
    
    // Projects section
    if (projectsRef.current && projectItemsRef.current.length > 0) {
      gsap.from(projectItemsRef.current.filter(Boolean), {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 70%",
          markers: process.env.NODE_ENV === 'development', // Add markers in dev mode for debugging
          toggleActions: "play none none none"
        }
      });
    }
    
    // CTA section
    if (ctaRef.current) {
      gsap.from(ctaRef.current.querySelectorAll('.animate-in'), {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%",
          markers: process.env.NODE_ENV === 'development', // Add markers in dev mode for debugging
          toggleActions: "play none none none"
        }
      });
    }

    // 3D tilt effect for projects
    projectItemsRef.current.forEach(project => {
      if (!project) return;
      
      const mouseMoveHandler = (e: MouseEvent) => {
        const rect = project.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const xPercent = (x / rect.width - 0.5) * 20;
        const yPercent = (y / rect.height - 0.5) * 20;
        
        gsap.to(project, {
          rotationY: xPercent,
          rotationX: -yPercent,
          transformPerspective: 1000,
          duration: 0.5,
          ease: "power1.out"
        });
      };
      
      const mouseLeaveHandler = () => {
        gsap.to(project, {
          rotationY: 0,
          rotationX: 0,
          duration: 0.5,
          ease: "power1.out"
        });
      };
      
      project.addEventListener('mousemove', mouseMoveHandler as EventListener);
      project.addEventListener('mouseleave', mouseLeaveHandler);
      
      // Return cleanup function to remove listeners
      return () => {
        project.removeEventListener('mousemove', mouseMoveHandler as EventListener);
        project.removeEventListener('mouseleave', mouseLeaveHandler);
      };
    });
    
    // Add a window resize listener to refresh ScrollTrigger
    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    
    window.addEventListener('resize', handleResize);
    
    // Make sure ScrollTrigger refreshes when images load
    window.addEventListener('load', () => {
      ScrollTrigger.refresh();
    });
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {/* Interactive background canvas */}
      <BackgroundCanvas canvasRef={canvasRef} mousePosition={mousePosition} setMousePosition={setMousePosition} />
      
      {/* Loading screen */}
      {isLoading && <LoadingScreen />}
      
      {/* Hero Section */}
      <HeroSection heroRef={heroRef} heroTextRef={heroTextRef} heroImageRef={heroImageRef} />

      {/* Skills Section with Interactive Cards */}
      <SkillsSection skillsRef={skillsRef} skillItemsRef={skillItemsRef} />

      {/* Featured Projects Section with 3D effects */}
      <ProjectsSection 
        projectsRef={projectsRef} 
        projectItemsRef={projectItemsRef}
        featuredProjects={featuredProjects} 
      />

      {/* CTA Section */}
      <CTASection ctaRef={ctaRef} />
    </>
  );
}