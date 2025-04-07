// File: src/components/sections/CTASection.jsx
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CTASection = ({ ctaRef }) => {
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  
  useEffect(() => {
    // Skip if we're server-side rendering
    if (typeof window === "undefined") return;
    
    // Simple animations for CTA elements
    if (titleRef.current) {
      gsap.from(titleRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%"
        }
      });
    }
    
    if (textRef.current) {
      gsap.from(textRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.6,
        delay: 0.2,
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%"
        }
      });
    }
    
    if (buttonRef.current) {
      gsap.from(buttonRef.current, {
        y: 20,
        opacity: 0,
        scale: 0.9,
        duration: 0.6,
        delay: 0.4,
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%"
        }
      });
    }
    
    // Clean up
    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [ctaRef]);
  
  return (
    <section 
      ref={ctaRef} 
      id="cta-section"
      className="py-16 sm:py-20 md:py-28 bg-white dark:bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-50 dark:from-blue-950/20 dark:to-indigo-950/20"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h2 
            ref={titleRef}
            className="text-3xl sm:text-4xl font-bold tracking-tighter md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 leading-tight mb-4 sm:mb-6"
          >
            Let's Build Something Amazing
          </h2>
          <p 
            ref={textRef}
            className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-10"
          >
            I'm currently available for freelance projects, full-time positions, or consulting work. 
            If you're interested in working together on innovative solutions, let's connect!
          </p>
          <div ref={buttonRef}>
            <Button 
              href="/contact" 
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl font-medium text-white w-full sm:w-auto max-w-xs mx-auto relative overflow-hidden group"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full opacity-10 group-hover:w-96 group-hover:h-96"></span>
              <span className="relative z-10">Contact Me</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;