// File: src/components/sections/HeroSection.tsx
"use client";
import React, { RefObject, useEffect } from 'react';
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/contexts/LanguageContext";
import gsap from "gsap";
import { FileText } from "lucide-react";
import Dither from '@/components/Dither';

interface HeroSectionProps {
  heroRef: RefObject<HTMLElement>;
  heroTextRef: RefObject<HTMLDivElement>;
  heroImageRef: RefObject<HTMLDivElement>;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  heroRef,
  heroTextRef,
  heroImageRef
}) => {
  const { data } = useLanguage();

  useEffect(() => {
    // Create the main timeline
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    // Get hero elements
    const heroElements = heroTextRef.current?.children;
    const imageContainer = heroImageRef.current;
    
    if (heroElements && imageContainer) {
      // Stagger animation for text elements
      tl.from(heroElements, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        delay: 0.5
      });
      
      // Animate the profile image
      tl.from(imageContainer, {
        scale: 0.8,
        opacity: 0,
        rotation: -5,
        duration: 1.2
      }, "-=0.8");
      
      // Add mouse move parallax effect
      const handleMouseMove = (e: MouseEvent) => {
        const xPos = (e.clientX / window.innerWidth - 0.5) * 220;
        const yPos = (e.clientY / window.innerHeight - 0.5) * 220;
        
        gsap.to(imageContainer, {
          x: xPos,
          y: yPos,
          rotation: xPos * 0.1,
          duration: 1.5,
          ease: "power2.out"
        });
        
        // Subtle parallax for text elements
        gsap.to(heroElements, {
          x: xPos * 0.3,
          duration: 1.5,
          ease: "power2.out",
          stagger: 0.05
        });
      };
      
      // Add scroll-based animation for the scroll indicator
      const scrollIndicator = heroRef.current?.querySelector('.animate-bounce');
      if (scrollIndicator) {
        gsap.fromTo(scrollIndicator, 
          { opacity: 0, y: -20 },
          { 
            opacity: 1, 
            y: 0,
            duration: 0.5,
            delay: 2.5
          }
        );
      }
      
      // Add event listener for mouse move
      window.addEventListener("mousemove", handleMouseMove);
      
      // Clean up on unmount
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        tl.kill();
      };
    }
  }, [heroRef, heroTextRef, heroImageRef]);

  return (
    <section 
      ref={heroRef} 
      id="hero-section"
      className="min-h-screen py-12 sm:py-16 md:py-20 relative overflow-hidden flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-blue-950/30 dark:via-slate-950 dark:to-indigo-950/30 z-0"></div>

      {/* Dither animated background (behind content) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          <Dither
            waveColor={[0.12, 0.16, 0.26]}
            disableAnimation={false}
            enableMouseInteraction={true}
            mouseRadius={0.3}
            colorNum={4}
            waveAmplitude={0.3}
            waveFrequency={3}
            waveSpeed={0.05}
          />
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div ref={heroTextRef} className="flex flex-col gap-4 sm:gap-6 text-center md:text-left order-2 md:order-1">
            <div className="inline-block mx-auto md:mx-0 px-3 py-1 text-xs sm:text-sm font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300">
              {data.hero.badge}
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 leading-tight">
              {data.hero.title}
            </h1>
            <p className="text-xl sm:text-2xl text-blue-600 dark:text-blue-400 font-medium">
              {data.hero.subtitle}
            </p>
            <p className="text-base sm:text-lg text-muted-foreground">
              {data.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
              <Button
                href="/projects"
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl font-medium text-white w-full sm:w-auto relative overflow-hidden group"
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full opacity-10 group-hover:w-96 group-hover:h-96"></span>
                <span className="relative z-10">{data.hero.viewWorkButton}</span>
              </Button>
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-2 hover:bg-slate-100 dark:hover:bg-slate-800 w-full sm:w-auto font-medium relative overflow-hidden group"
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-100 dark:bg-blue-900 rounded-full opacity-30 group-hover:w-96 group-hover:h-96"></span>
                <span className="relative z-10">{data.hero.contactButton}</span>
              </Button>
              <Button
                href="https://github.com/Aaron3312/my-portfolio/raw/master/resume.pdf"
                variant="outline"
                size="lg"
                className="border-2 hover:bg-slate-100 dark:hover:bg-slate-800 w-full sm:w-auto font-medium relative overflow-hidden group"
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-100 dark:bg-blue-900 rounded-full opacity-30 group-hover:w-96 group-hover:h-96"></span>
                <span className="relative z-10 inline-flex items-center">
                  <FileText className="mr-2 h-4 w-4" />
                  {data.hero.resumeButton}
                </span>
              </Button>
            </div>
            
            {/* Bouncing scroll indicator */}
            <div className="hidden md:flex justify-center md:justify-start mt-12">
              <div className="animate-bounce w-6 h-10 border-2 border-slate-400 dark:border-slate-600 rounded-full flex flex-col items-center justify-start p-1">
                <div className="w-1 h-2 bg-slate-400 dark:bg-slate-600 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
          
          <div ref={heroImageRef} className="flex justify-center items-center order-1 md:order-2 mb-6 md:mb-0">
            <div className="relative h-[250px] w-[250px] sm:h-[300px] sm:w-[300px] md:h-[450px] md:w-[450px] rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl bg-white dark:bg-slate-900 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 dark:from-blue-500/20 dark:to-indigo-500/20 z-10"></div>
              <Image
                src="https://raw.githubusercontent.com/Aaron3312/aaron3312/main/SGCAM_20241125_163111155.PORTRAIT.jpg"
                alt="Aaron Hernandez"
                fill
                className="object-cover z-0"
                priority
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;