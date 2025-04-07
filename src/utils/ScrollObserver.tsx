// File: src/components/utils/ScrollObserver.tsx
import React, { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * ScrollObserver component to handle initialization and cleanup
 * of ScrollTrigger. This helps ensure ScrollTrigger works correctly
 * with dynamic content and Next.js.
 */
const ScrollObserver: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // This will create a slight delay to ensure the DOM is fully loaded
    const initScrollTrigger = setTimeout(() => {
      console.log('Initializing ScrollTrigger');
      
      // Force a refresh of ScrollTrigger
      ScrollTrigger.refresh(true);
      
      // Add a warning if ScrollTrigger has no registered triggers
      if (ScrollTrigger.getAll().length === 0) {
        console.warn('ScrollTrigger initialized but no triggers were registered');
      } else {
        console.log(`${ScrollTrigger.getAll().length} ScrollTrigger instances initialized`);
      }
    }, 500);
    
    // Create a MutationObserver to watch for DOM changes
    const observer = new MutationObserver(() => {
      console.log('DOM changed, refreshing ScrollTrigger');
      ScrollTrigger.refresh();
    });
    
    // Start observing the document with the configured parameters
    observer.observe(document.body, { 
      childList: true, 
      subtree: true 
    });
    
    // Set up scroll and resize listeners for more reliable refreshing
    const handleResize = () => {
      console.log('Window resized, refreshing ScrollTrigger');
      ScrollTrigger.refresh();
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup function
    return () => {
      clearTimeout(initScrollTrigger);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      console.log('ScrollTrigger cleaned up');
    };
  }, []);

  return <>{children}</>;
};

export default ScrollObserver;