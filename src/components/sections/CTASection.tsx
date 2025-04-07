// File: src/components/sections/CTASection.jsx
import { Button } from "@/components/ui/Button";

const CTASection = ({ ctaRef }) => {
  return (
    <section 
      ref={ctaRef} 
      id="cta-section"
      className="py-16 sm:py-20 md:py-28 bg-white dark:bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-50 dark:from-blue-950/20 dark:to-indigo-950/20"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 leading-tight animate-in mb-4 sm:mb-6">
            Let's Build Something Amazing
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-10 animate-in">
            I'm currently available for freelance projects, full-time positions, or consulting work. 
            If you're interested in working together on innovative solutions, let's connect!
          </p>
          <Button 
            href="/contact" 
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl font-medium text-white w-full sm:w-auto max-w-xs mx-auto animate-in relative overflow-hidden group"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full opacity-10 group-hover:w-96 group-hover:h-96"></span>
            <span className="relative z-10">Contact Me</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;