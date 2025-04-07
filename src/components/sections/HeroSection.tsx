// File: src/components/sections/HeroSection.tsx
import React, { RefObject } from 'react';
import Image from "next/image";
import { Button } from "@/components/ui/Button";

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
  return (
    <section 
      ref={heroRef} 
      id="hero-section"
      className="min-h-screen py-12 sm:py-16 md:py-20 relative overflow-hidden flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-blue-950/30 dark:via-slate-950 dark:to-indigo-950/30"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div ref={heroTextRef} className="flex flex-col gap-4 sm:gap-6 text-center md:text-left order-2 md:order-1">
            <div className="inline-block mx-auto md:mx-0 px-3 py-1 text-xs sm:text-sm font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 animate-in">
              Software Engineer
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 leading-tight animate-in">
              Hi, I'm Aaron Hernández Jiménez
            </h1>
            <p className="text-xl sm:text-2xl text-blue-600 dark:text-blue-400 font-medium animate-in">
              Full Stack Developer | Cloud Solutions Architect
            </p>
            <p className="text-base sm:text-lg text-muted-foreground animate-in">
              Computer Science student at Tecnológico de Monterrey with expertise in building scalable web applications, cloud-native solutions, and AI-powered systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start animate-in">
              <Button 
                href="/projects" 
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl font-medium text-white w-full sm:w-auto relative overflow-hidden group"
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full opacity-10 group-hover:w-96 group-hover:h-96"></span>
                <span className="relative z-10">View My Work</span>
              </Button>
              <Button 
                href="/contact" 
                variant="outline" 
                size="lg"
                className="border-2 hover:bg-slate-100 dark:hover:bg-slate-800 w-full sm:w-auto font-medium relative overflow-hidden group"
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-100 dark:bg-blue-900 rounded-full opacity-30 group-hover:w-96 group-hover:h-96"></span>
                <span className="relative z-10">Get In Touch</span>
              </Button>
            </div>
            
            {/* Bouncing scroll indicator */}
            <div className="hidden md:flex justify-center md:justify-start mt-12 animate-in">
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
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;