'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from 'lucide-react';
import { Screenshot } from '@/data/projects';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ProjectCarouselProps {
  screenshots: Screenshot[];
  title: string;
}

export default function ProjectCarousel({ screenshots, title }: ProjectCarouselProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  
  // Refs for GSAP animations
  const carouselRef = useRef<HTMLDivElement>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);
  const prevButtonRef = useRef<HTMLButtonElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);
  const gsapRef = useRef<any>(null);

  // Initialize GSAP animations
  useEffect(() => {
    const initGSAP = async () => {
      try {
        const { gsap } = await import('gsap');
        gsapRef.current = gsap;

        // Carousel entrance animation
        if (carouselRef.current) {
          gsap.fromTo(carouselRef.current, 
            { 
              opacity: 0, 
              y: 50 
            },
            { 
              opacity: 1, 
              y: 0, 
              duration: 0.8,
              ease: "power2.out"
            }
          );
        }

        // Navigation buttons hover animations
        const animateButton = (button: HTMLElement, isHover: boolean) => {
          gsap.to(button, {
            scale: isHover ? 1.1 : 1,
            rotate: isHover ? 360 : 0,
            duration: 0.3,
            ease: "back.out(1.7)"
          });
        };

        // Setup button hover effects
        [prevButtonRef.current, nextButtonRef.current].forEach(button => {
          if (button) {
            const handleMouseEnter = () => animateButton(button, true);
            const handleMouseLeave = () => animateButton(button, false);
            
            button.addEventListener('mouseenter', handleMouseEnter);
            button.addEventListener('mouseleave', handleMouseLeave);
            
            // Cleanup function will be returned later
            button._gsapCleanup = () => {
              button.removeEventListener('mouseenter', handleMouseEnter);
              button.removeEventListener('mouseleave', handleMouseLeave);
            };
          }
        });

      } catch (error) {
        console.warn('GSAP failed to load for carousel:', error);
      }
    };

    initGSAP();

    // Cleanup
    return () => {
      [prevButtonRef.current, nextButtonRef.current].forEach(button => {
        if (button && button._gsapCleanup) {
          button._gsapCleanup();
        }
      });
    };
  }, []);

  // Lightbox GSAP animations
  useEffect(() => {
    if (!gsapRef.current) return;

    if (lightboxOpen && lightboxRef.current) {
      // Lightbox entrance animation
      gsapRef.current.fromTo(lightboxRef.current,
        {
          opacity: 0,
          scale: 0.8
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: "back.out(1.4)"
        }
      );

      // Animate lightbox controls
      const controls = lightboxRef.current.querySelectorAll('.lightbox-control');
      gsapRef.current.fromTo(controls,
        {
          opacity: 0,
          y: 20
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          stagger: 0.1,
          delay: 0.2,
          ease: "power2.out"
        }
      );
    }
  }, [lightboxOpen]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      
      if (e.key === 'Escape') {
        setLightboxOpen(false);
      } else if (e.key === 'ArrowLeft') {
        setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : screenshots.length - 1));
      } else if (e.key === 'ArrowRight') {
        setCurrentImageIndex((prev) => (prev < screenshots.length - 1 ? prev + 1 : 0));
      } else if (e.key === '+') {
        setZoomLevel((prev) => Math.min(prev + 0.25, 3));
      } else if (e.key === '-') {
        setZoomLevel((prev) => Math.max(prev - 0.25, 1));
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    
    // Lock scrolling when lightbox is open
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [lightboxOpen, screenshots.length, currentImageIndex]);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setZoomLevel(1);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    // Animate out before closing
    if (gsapRef.current && lightboxRef.current) {
      gsapRef.current.to(lightboxRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          setLightboxOpen(false);
          setZoomLevel(1);
        }
      });
    } else {
      setLightboxOpen(false);
      setZoomLevel(1);
    }
  };

  const handlePrev = () => {
    // Animate image transition
    if (gsapRef.current && lightboxRef.current) {
      const imageContainer = lightboxRef.current.querySelector('.image-container');
      if (imageContainer) {
        gsapRef.current.to(imageContainer, {
          x: -50,
          opacity: 0.5,
          duration: 0.2,
          ease: "power2.out",
          onComplete: () => {
            setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : screenshots.length - 1));
            gsapRef.current.fromTo(imageContainer, 
              { x: 50, opacity: 0.5 },
              { x: 0, opacity: 1, duration: 0.3, ease: "power2.out" }
            );
          }
        });
      }
    } else {
      setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : screenshots.length - 1));
    }
  };

  const handleNext = () => {
    // Animate image transition
    if (gsapRef.current && lightboxRef.current) {
      const imageContainer = lightboxRef.current.querySelector('.image-container');
      if (imageContainer) {
        gsapRef.current.to(imageContainer, {
          x: 50,
          opacity: 0.5,
          duration: 0.2,
          ease: "power2.out",
          onComplete: () => {
            setCurrentImageIndex((prev) => (prev < screenshots.length - 1 ? prev + 1 : 0));
            gsapRef.current.fromTo(imageContainer, 
              { x: -50, opacity: 0.5 },
              { x: 0, opacity: 1, duration: 0.3, ease: "power2.out" }
            );
          }
        });
      }
    } else {
      setCurrentImageIndex((prev) => (prev < screenshots.length - 1 ? prev + 1 : 0));
    }
  };

  const increaseZoom = () => {
    const newZoom = Math.min(zoomLevel + 0.25, 3);
    if (gsapRef.current && lightboxRef.current) {
      const imageContainer = lightboxRef.current.querySelector('.image-container');
      if (imageContainer) {
        gsapRef.current.to(imageContainer, {
          scale: newZoom,
          duration: 0.3,
          ease: "power2.out"
        });
      }
    }
    setZoomLevel(newZoom);
  };

  const decreaseZoom = () => {
    const newZoom = Math.max(zoomLevel - 0.25, 1);
    if (gsapRef.current && lightboxRef.current) {
      const imageContainer = lightboxRef.current.querySelector('.image-container');
      if (imageContainer) {
        gsapRef.current.to(imageContainer, {
          scale: newZoom,
          duration: 0.3,
          ease: "power2.out"
        });
      }
    }
    setZoomLevel(newZoom);
  };

  return (
    <div ref={carouselRef} className="mt-12 relative">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">Project Gallery</h2>
        <p className="text-gray-600 dark:text-gray-400">Click on any image to view in full screen</p>
      </div>
      
      {/* Main Carousel */}
      <div className="relative carousel-container px-4">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={24}
          slidesPerView={1}
          navigation={{
            prevEl: '.swiper-button-prev-custom',
            nextEl: '.swiper-button-next-custom',
          }}
          pagination={{ 
            clickable: true,
            dynamicBullets: true,
            el: '.swiper-pagination-custom'
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 24,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          className="w-full pb-12"
        >
          {screenshots.map((screenshot, index) => (
            <SwiperSlide key={index}>
              <div className="group relative">
                <div 
                  className="cursor-pointer overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 aspect-video relative"
                  onClick={() => openLightbox(index)}
                >
                  <Image
                    src={screenshot.url}
                    alt={screenshot.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 dark:bg-gray-800/90 rounded-full p-3">
                      <ZoomIn className="h-6 w-6 text-gray-800 dark:text-gray-200" />
                    </div>
                  </div>
                </div>
                <div className="mt-3 px-2">
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200 line-clamp-2">
                    {screenshot.alt}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Custom Navigation Buttons */}
        <button 
          ref={prevButtonRef}
          className="swiper-button-prev-custom absolute left-0 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 transition-all duration-200"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button 
          ref={nextButtonRef}
          className="swiper-button-next-custom absolute right-0 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 transition-all duration-200"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
        
        {/* Custom Pagination */}
        <div className="swiper-pagination-custom flex justify-center mt-6"></div>
      </div>

      {/* Modern Lightbox Modal - FIXED */}
      {lightboxOpen && (
        <div ref={lightboxRef} className="fixed inset-0 z-50">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/95 backdrop-blur-md"
            onClick={closeLightbox}
          />
          
          {/* Top Controls Row */}
          <div className="absolute top-0 left-0 right-0 z-30 flex justify-between items-center p-4">
            {/* Thumbnail Strip - Top Left */}
            {screenshots.length > 1 && (
              <div className="lightbox-control">
                <div className="flex items-center gap-2 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full max-w-sm overflow-x-auto border border-white/20">
                  {screenshots.map((screenshot, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative h-10 w-10 overflow-hidden rounded-lg border-2 transition-all flex-shrink-0 ${
                        index === currentImageIndex 
                          ? 'border-white ring-2 ring-white/50 scale-110' 
                          : 'border-white/30 opacity-60 hover:opacity-100 hover:border-white/60'
                      }`}
                    >
                      <Image
                        src={screenshot.url}
                        alt={screenshot.alt}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Close Button - Top Right */}
            <button 
              onClick={closeLightbox}
              className="lightbox-control flex h-12 w-12 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors border border-white/20"
              aria-label="Close lightbox"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          {/* Full Screen Image Container - FIXED */}
          <div className="absolute inset-0 flex items-center justify-center p-4 pt-20 pb-32">
            {/* Left Navigation - Now inside the image area */}
            {screenshots.length > 1 && (
              <button 
                onClick={handlePrev}
                className="lightbox-control absolute left-4 top-1/2 -translate-y-1/2 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-black/70 text-white hover:bg-black/90 transition-colors border border-white/20 shadow-2xl"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            )}
            
            {/* Image Container - Now takes full available space */}
<div 
  className="image-container relative w-[190vw] h-[80vh]"
  style={{ transform: `scale(${zoomLevel})` }}
>
  <Image
    src={screenshots[currentImageIndex].url}
    alt={screenshots[currentImageIndex].alt}
    fill
    className="object-contain rounded-lg shadow-2xl"
    priority
    sizes="100vw"
  />
</div>

            
            {/* Right Navigation */}
            {screenshots.length > 1 && (
              <button 
                onClick={handleNext}
                className="lightbox-control absolute right-4 top-1/2 -translate-y-1/2 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-black/70 text-white hover:bg-black/90 transition-colors border border-white/20 shadow-2xl"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            )}
          </div>
          
          {/* Bottom Controls Row */}
          <div className="absolute bottom-0 left-0 right-0 z-30 p-4">
            <div className="flex flex-col items-center gap-4">
              {/* Image Caption */}
              <div className="lightbox-control max-w-3xl">
                <div className="px-6 py-3 bg-black/70 backdrop-blur-md rounded-lg text-white text-center border border-white/20">
                  <p className="text-base leading-relaxed">{screenshots[currentImageIndex].alt}</p>
                </div>
              </div>
              
              {/* Controls Bar */}
              <div className="lightbox-control">
                <div className="flex items-center gap-6 px-8 py-4 bg-black/70 backdrop-blur-md rounded-full text-white border border-white/20">
                  {/* Zoom Controls */}
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={decreaseZoom}
                      disabled={zoomLevel <= 1}
                      className="p-2 rounded-full hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      aria-label="Zoom out"
                    >
                      <ZoomOut className="h-5 w-5" />
                    </button>
                    <span className="text-base min-w-[4rem] text-center font-medium">{Math.round(zoomLevel * 100)}%</span>
                    <button 
                      onClick={increaseZoom}
                      disabled={zoomLevel >= 3}
                      className="p-2 rounded-full hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      aria-label="Zoom in"
                    >
                      <ZoomIn className="h-5 w-5" />
                    </button>
                  </div>
                  
                  {/* Separator */}
                  <div className="w-px h-8 bg-white/30"></div>
                  
                  {/* Image Info */}
                  <div className="text-center px-3">
                    <p className="text-base font-medium">
                      {currentImageIndex + 1} of {screenshots.length}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}