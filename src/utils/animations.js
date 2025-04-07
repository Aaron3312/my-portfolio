// File: src/utils/animations.js
// GSAP animation utilities

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}

// Hero section animations
export const animateHero = (heroTextRef, heroImageRef) => {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  
  // Animate hero text elements with stagger
  tl.from(heroTextRef.current.children, {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    delay: 0.5
  });
  
  // Animate hero image with scale and rotation
  tl.from(heroImageRef.current, {
    scale: 0.8,
    opacity: 0,
    rotation: -5,
    duration: 1.2
  }, "-=0.6");
  
  return tl;
};

// Skills section animations
export const animateSkills = (skillsRef, skillItemsRef) => {
  // Animate section title
  const titleElements = skillsRef.current.querySelector('h2');
  const subtitleElements = skillsRef.current.querySelector('p');
  
  const titleTl = gsap.timeline({
    scrollTrigger: {
      trigger: skillsRef.current,
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  });
  
  titleTl.from([titleElements, subtitleElements], {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2
  });
  
  // Animate skill cards
  skillItemsRef.current.forEach((item, index) => {
    if (!item) return;
    
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      y: 50,
      opacity: 0,
      scale: 0.9,
      duration: 0.6,
      delay: index * 0.1
    });
  });
};

// Projects section animations
export const animateProjects = (projectsRef, projectItemsRef) => {
  // Animate section title
  const titleElements = projectsRef.current.querySelector('h2');
  const subtitleElements = projectsRef.current.querySelector('p');
  
  const titleTl = gsap.timeline({
    scrollTrigger: {
      trigger: projectsRef.current,
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  });
  
  titleTl.from([titleElements, subtitleElements], {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2
  });
  
  // Animate project cards with 3D effect
  projectItemsRef.current.forEach((item, index) => {
    if (!item) return;
    
    // Initial animation on scroll
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      y: 100,
      opacity: 0,
      duration: 0.8,
      delay: index * 0.2
    });
    
    // Enhanced 3D tilt effect
    item.addEventListener('mousemove', (e) => {
      const rect = item.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const xPercent = (x / rect.width - 0.5) * 20;
      const yPercent = (y / rect.height - 0.5) * 20;
      
      gsap.to(item, {
        rotationY: xPercent,
        rotationX: -yPercent,
        transformPerspective: 1000,
        duration: 0.4,
        ease: 'power2.out'
      });
      
      // Shine effect on hover
      gsap.to(item.querySelector('.absolute'), {
        opacity: 0.8,
        duration: 0.3
      });
    });
    
    item.addEventListener('mouseleave', () => {
      gsap.to(item, {
        rotationY: 0,
        rotationX: 0,
        scale: 1,
        duration: 0.6,
        ease: 'elastic.out(1, 0.5)'
      });
      
      // Fade out shine effect
      gsap.to(item.querySelector('.absolute'), {
        opacity: 0,
        duration: 0.3
      });
    });
  });
  
  // Animate the CTA button
  const ctaButton = projectsRef.current.querySelector('a[href="/projects"]');
  
  gsap.from(ctaButton, {
    scrollTrigger: {
      trigger: ctaButton,
      start: 'top 90%'
    },
    scale: 0.8,
    opacity: 0,
    duration: 0.6,
    ease: 'back.out(1.7)'
  });
};

// CTA section animations
export const animateCTA = (ctaRef) => {
  const title = ctaRef.current.querySelector('h2');
  const desc = ctaRef.current.querySelector('p');
  const button = ctaRef.current.querySelector('a');
  
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ctaRef.current,
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  });
  
  tl.from(title, {
    y: 50,
    opacity: 0,
    duration: 0.8
  })
  .from(desc, {
    y: 30,
    opacity: 0,
    duration: 0.6
  }, "-=0.4")
  .from(button, {
    scale: 0.8,
    opacity: 0,
    duration: 0.6,
    ease: 'back.out(1.7)'
  }, "-=0.2");
  
  // Add hover animation
  button.addEventListener('mouseenter', () => {
    gsap.to(button, {
      scale: 1.05,
      duration: 0.3,
      ease: 'power1.out'
    });
  });
  
  button.addEventListener('mouseleave', () => {
    gsap.to(button, {
      scale: 1,
      duration: 0.3,
      ease: 'power1.out'
    });
  });
};

// Loading screen animation
export const animateLoadingScreen = (loadingScreenElement, onComplete) => {
  const tl = gsap.timeline({
    onComplete
  });
  
  tl.to(loadingScreenElement, {
    opacity: 0,
    duration: 0.8,
    ease: 'power2.inOut',
    pointerEvents: 'none'
  });
  
  return tl;
};

// Background particles animation enhancement
export const enhanceParticles = (particles) => {
  gsap.to(particles, {
    scale: 'random(0.5, 1.5)',
    opacity: 'random(0.3, 0.7)',
    duration: 'random(1, 3)',
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
    stagger: {
      each: 0.1,
      from: 'random',
      grid: 'auto'
    }
  });
};

// Page transition animations
export const pageTransition = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};