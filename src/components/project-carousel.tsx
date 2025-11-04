'use client';

import { useState, useEffect, useRef } from 'react';
import { X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight } from 'lucide-react';
import { useMediaQuery } from 'react-responsive';

// BounceCards Component (Desktop)
interface BounceCardsProps {
  className?: string;
  images?: Array<{ url: string; alt: string }>;
  containerWidth?: number;
  containerHeight?: number;
  animationDelay?: number;
  animationStagger?: number;
  easeType?: string;
  transformStyles?: string[];
  enableHover?: boolean;
  onImageClick?: (index: number) => void;
}

function BounceCards({
  className = '',
  images = [],
  containerWidth = 400,
  containerHeight = 400,
  animationDelay = 0.5,
  animationStagger = 0.06,
  easeType = 'elastic.out(1, 0.8)',
  transformStyles = [
    'rotate(10deg) translate(-170px)',
    'rotate(5deg) translate(-85px)',
    'rotate(-3deg)',
    'rotate(-10deg) translate(85px)',
    'rotate(2deg) translate(170px)'
  ],
  enableHover = false,
  onImageClick
}: BounceCardsProps) {
  const gsapRef = useRef<any>(null);

  useEffect(() => {
    const initGSAP = async () => {
      try {
        const gsap = await import('gsap').then(mod => mod.gsap);
        gsapRef.current = gsap;

        gsap.fromTo(
          '.bounce-card',
          { scale: 0 },
          {
            scale: 1,
            stagger: animationStagger,
            ease: easeType,
            delay: animationDelay
          }
        );
      } catch (error) {
        console.warn('GSAP failed to load:', error);
      }
    };

    initGSAP();
  }, [animationStagger, easeType, animationDelay]);

  const getNoRotationTransform = (transformStr: string): string => {
    const hasRotate = /rotate\([\s\S]*?\)/.test(transformStr);
    if (hasRotate) {
      return transformStr.replace(/rotate\([\s\S]*?\)/, 'rotate(0deg)');
    } else if (transformStr === 'none') {
      return 'rotate(0deg)';
    } else {
      return `${transformStr} rotate(0deg)`;
    }
  };

  const getPushedTransform = (baseTransform: string, offsetX: number): string => {
    const translateRegex = /translate\(([-0-9.]+)px\)/;
    const match = baseTransform.match(translateRegex);
    if (match) {
      const currentX = parseFloat(match[1]);
      const newX = currentX + offsetX;
      return baseTransform.replace(translateRegex, `translate(${newX}px)`);
    } else {
      return baseTransform === 'none' ? `translate(${offsetX}px)` : `${baseTransform} translate(${offsetX}px)`;
    }
  };

  const pushSiblings = (hoveredIdx: number) => {
    if (!enableHover || !gsapRef.current) return;

    images.forEach((_, i) => {
      gsapRef.current.killTweensOf(`.bounce-card-${i}`);
      const baseTransform = transformStyles[i] || 'none';
      
      if (i === hoveredIdx) {
        const noRotation = getNoRotationTransform(baseTransform);
        gsapRef.current.to(`.bounce-card-${i}`, {
          transform: noRotation,
          duration: 0.4,
          ease: 'back.out(1.4)',
          overwrite: 'auto'
        });
      } else {
        const offsetX = i < hoveredIdx ? -160 : 160;
        const pushedTransform = getPushedTransform(baseTransform, offsetX);
        const distance = Math.abs(hoveredIdx - i);
        const delay = distance * 0.05;
        gsapRef.current.to(`.bounce-card-${i}`, {
          transform: pushedTransform,
          duration: 0.4,
          ease: 'back.out(1.4)',
          delay,
          overwrite: 'auto'
        });
      }
    });
  };

  const resetSiblings = () => {
    if (!enableHover || !gsapRef.current) return;
    
    images.forEach((_, i) => {
      gsapRef.current.killTweensOf(`.bounce-card-${i}`);
      const baseTransform = transformStyles[i] || 'none';
      gsapRef.current.to(`.bounce-card-${i}`, {
        transform: baseTransform,
        duration: 0.4,
        ease: 'back.out(1.4)',
        overwrite: 'auto'
      });
    });
  };

  return (
    <div
      className={`relative flex justify-center items-center ${className}`}
      style={{
        width: containerWidth,
        height: containerHeight
      }}
    >
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`bounce-card bounce-card-${idx} absolute cursor-pointer group`}
          style={{ 
            transform: transformStyles[idx] ?? 'none',
            width: '280px',
            aspectRatio: '1',
            border: '5px solid color-mix(in oklab, var(--color-blue-900) 50%, transparent)',
            borderRadius: '25px',
            overflow: 'hidden',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)'
          }}
          onMouseEnter={() => pushSiblings(idx)}
          onMouseLeave={resetSiblings}
          onClick={() => onImageClick?.(idx)}
        >
          <img 
            className="w-full h-full object-cover" 
            src={img.url} 
            alt={img.alt}
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 dark:bg-gray-800/90 rounded-full p-3">
              <ZoomIn className="h-6 w-6 text-gray-800 dark:text-gray-200" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// Mobile Carousel with Swiper-like functionality
interface MobileCarouselProps {
  screenshots: Screenshot[];
  onImageClick: (index: number) => void;
}

function MobileCarousel({ screenshots, onImageClick }: MobileCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
    setIsDragging(true);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const currentTouch = e.targetTouches[0].clientX;
    setTouchEnd(currentTouch);
    const diff = currentTouch - touchStart;
    setOffset(diff);
  };

  const onTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentIndex < screenshots.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
    if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
    
    setOffset(0);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full px-4">
      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-2xl">
        <div
          ref={containerRef}
          className="relative h-[400px] touch-pan-y"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex h-full transition-transform duration-300 ease-out"
            style={{
              transform: `translateX(calc(-${currentIndex * 100}% + ${isDragging ? offset : 0}px))`
            }}
          >
            {screenshots.map((screenshot, idx) => (
              <div
                key={idx}
                className="min-w-full h-full flex items-center justify-center px-2"
              >
                <div
                  className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl cursor-pointer"
                  onClick={() => !isDragging && onImageClick(idx)}
                >
                  <img
                    src={screenshot.url}
                    alt={screenshot.alt}
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white text-sm font-medium drop-shadow-lg line-clamp-2">
                      {screenshot.alt}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        {currentIndex > 0 && (
          <button
            onClick={() => goToSlide(currentIndex - 1)}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 dark:bg-gray-800/90 shadow-lg backdrop-blur-sm"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800 dark:text-gray-200" />
          </button>
        )}
        {currentIndex < screenshots.length - 1 && (
          <button
            onClick={() => goToSlide(currentIndex + 1)}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 dark:bg-gray-800/90 shadow-lg backdrop-blur-sm"
          >
            <ChevronRight className="w-6 h-6 text-gray-800 dark:text-gray-200" />
          </button>
        )}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center items-center gap-2 mt-6">
        {screenshots.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`transition-all duration-300 rounded-full ${
              idx === currentIndex
                ? 'w-8 h-2 bg-blue-600'
                : 'w-2 h-2 bg-gray-300 dark:bg-gray-600'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="text-center mt-4">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {currentIndex + 1} / {screenshots.length}
        </p>
      </div>

      {/* Thumbnails Preview */}
      <div className="mt-6 overflow-x-auto pb-4">
        <div className="flex gap-2 px-1">
          {screenshots.map((screenshot, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                idx === currentIndex
                  ? 'ring-2 ring-blue-600 scale-110'
                  : 'opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={screenshot.url}
                alt={`Thumbnail ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// Main ProjectCarousel Component
interface Screenshot {
  url: string;
  alt: string;
}

interface ProjectCarouselProps {
  screenshots: Screenshot[];
  title: string;
}

export default function ProjectCarousel({ screenshots, title }: ProjectCarouselProps) {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [currentGroup, setCurrentGroup] = useState(0);
  const [isClient, setIsClient] = useState(false);
  
  const lightboxRef = useRef<HTMLDivElement>(null);
  const gsapRef = useRef<any>(null);

  const imagesPerGroup = 6;
  const totalGroups = Math.ceil(screenshots.length / imagesPerGroup);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Initialize GSAP for lightbox
  useEffect(() => {
    const initGSAP = async () => {
      try {
        const gsap = await import('gsap').then(mod => mod.gsap);
        gsapRef.current = gsap;
      } catch (error) {
        console.warn('GSAP failed to load:', error);
      }
    };
    initGSAP();
  }, []);

  // Lightbox GSAP animations
  useEffect(() => {
    if (!gsapRef.current) return;

    if (lightboxOpen && lightboxRef.current) {
      gsapRef.current.fromTo(lightboxRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.4, ease: "back.out(1.4)" }
      );

      const controls = lightboxRef.current.querySelectorAll('.lightbox-control');
      gsapRef.current.fromTo(controls,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.3, stagger: 0.1, delay: 0.2, ease: "power2.out" }
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
    
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [lightboxOpen, screenshots.length]);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setZoomLevel(1);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
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

  const getCurrentGroupImages = () => {
    const start = currentGroup * imagesPerGroup;
    const end = start + imagesPerGroup;
    return screenshots.slice(start, end);
  };

  const getTransformStyles = (count: number) => {
    if (count === 1) return ['rotate(0deg)'];
    if (count === 2) return ['rotate(5deg) translate(-150px)', 'rotate(-5deg) translate(150px)'];
    if (count === 3) return ['rotate(8deg) translate(-200px)', 'rotate(0deg)', 'rotate(-8deg) translate(200px)'];
    if (count === 4) return [
      'rotate(10deg) translate(-240px)',
      'rotate(3deg) translate(-80px)',
      'rotate(-3deg) translate(80px)',
      'rotate(-10deg) translate(240px)'
    ];
    if (count === 6) return [
      'rotate(12deg) translate(-320px)',
      'rotate(6deg) translate(-200px)',
      'rotate(2deg) translate(-80px)',
      'rotate(-2deg) translate(80px)',
      'rotate(-6deg) translate(200px)',
      'rotate(-12deg) translate(320px)'
    ];
    return [
      'rotate(10deg) translate(-280px)',
      'rotate(5deg) translate(-140px)',
      'rotate(-3deg)',
      'rotate(-10deg) translate(140px)',
      'rotate(2deg) translate(280px)'
    ];
  };

  const currentImages = getCurrentGroupImages();
  const transformStyles = getTransformStyles(currentImages.length);

  // Mobile View
  if (isMobile) {
    return (
      <div className="mt-12">
        <div className="text-center mb-8 px-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            {title} Gallery
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {isClient ? 'Swipe to explore' : 'Gallery'}
          </p>
        </div>
        
        <MobileCarousel 
          screenshots={screenshots} 
          onImageClick={openLightbox}
        />

        {/* Lightbox Modal for Mobile */}
        {lightboxOpen && (
          <div className="fixed inset-0 z-50 bg-black">
            <div className="absolute inset-0 flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-4 bg-black/80">
                <span className="text-white text-sm font-medium">
                  {currentImageIndex + 1} / {screenshots.length}
                </span>
                <button 
                  onClick={closeLightbox}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Image */}
              <div className="flex-1 relative flex items-center justify-center p-4">
                <img
                  src={screenshots[currentImageIndex].url}
                  alt={screenshots[currentImageIndex].alt}
                  className="max-w-full max-h-full object-contain"
                  style={{ transform: `scale(${zoomLevel})` }}
                />
                
                {/* Navigation */}
                {screenshots.length > 1 && (
                  <>
                    <button 
                      onClick={handlePrev}
                      className="absolute left-2 w-12 h-12 flex items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button 
                      onClick={handleNext}
                      className="absolute right-2 w-12 h-12 flex items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}
              </div>

              {/* Bottom Controls */}
              <div className="p-4 bg-black/80">
                <div className="flex items-center justify-center gap-4 mb-3">
                  <button 
                    onClick={decreaseZoom}
                    disabled={zoomLevel <= 1}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 text-white disabled:opacity-30"
                  >
                    <ZoomOut className="w-5 h-5" />
                  </button>
                  <span className="text-white text-sm font-medium min-w-[4rem] text-center">
                    {Math.round(zoomLevel * 100)}%
                  </span>
                  <button 
                    onClick={increaseZoom}
                    disabled={zoomLevel >= 3}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 text-white disabled:opacity-30"
                  >
                    <ZoomIn className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-white/80 text-sm text-center line-clamp-2">
                  {screenshots[currentImageIndex].alt}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Desktop View
  return (
    <div className="mt-12 relative">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          {title} Gallery
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Click on any image to view in full screen
        </p>
      </div>
      
      {/* Bounce Cards Container */}
      <div className="flex justify-center items-center min-h-[600px] relative">
        <BounceCards
          className="bounce-cards-wrapper"
          images={currentImages}
          containerWidth={1200}
          containerHeight={500}
          animationDelay={0.5}
          animationStagger={0.08}
          easeType="elastic.out(1, 0.5)"
          transformStyles={transformStyles}
          enableHover={true}
          onImageClick={(idx) => openLightbox(currentGroup * imagesPerGroup + idx)}
        />
      </div>

      {/* Group Indicator */}
      {totalGroups > 1 && (
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: totalGroups }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentGroup(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentGroup 
                  ? 'w-8 bg-blue-600' 
                  : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      )}

      {/* Desktop Lightbox Modal */}
      {lightboxOpen && (
        <div ref={lightboxRef} className="fixed inset-0 z-50">
          <div 
            className="absolute inset-0 bg-black/95 backdrop-blur-md"
            onClick={closeLightbox}
          />
          
          {/* Top Controls */}
          <div className="absolute top-0 left-0 right-0 z-30 flex justify-between items-center p-4">
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
                      <img
                        src={screenshot.url}
                        alt={screenshot.alt}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            <button 
              onClick={closeLightbox}
              className="lightbox-control flex h-12 w-12 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors border border-white/20"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          {/* Image Container */}
          <div className="absolute inset-0 flex items-center justify-center p-4 pt-20 pb-32">
            {screenshots.length > 1 && (
              <button 
                onClick={handlePrev}
                className="lightbox-control absolute left-4 top-1/2 -translate-y-1/2 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-black/70 text-white hover:bg-black/90 transition-colors border border-white/20 shadow-2xl"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            )}
            
            <div 
              className="image-container relative w-[90vw] h-[80vh]"
              style={{ transform: `scale(${zoomLevel})` }}
            >
              <img
                src={screenshots[currentImageIndex].url}
                alt={screenshots[currentImageIndex].alt}
                className="w-full h-full object-contain rounded-lg shadow-2xl"
              />
            </div>
            
            {screenshots.length > 1 && (
              <button 
                onClick={handleNext}
                className="lightbox-control absolute right-4 top-1/2 -translate-y-1/2 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-black/70 text-white hover:bg-black/90 transition-colors border border-white/20 shadow-2xl"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            )}
          </div>
          
          {/* Bottom Controls */}
          <div className="absolute bottom-0 left-0 right-0 z-30 p-4">
            <div className="flex flex-col items-center gap-4">
              <div className="lightbox-control max-w-3xl">
                <div className="px-6 py-3 bg-black/70 backdrop-blur-md rounded-lg text-white text-center border border-white/20">
                  <p className="text-base leading-relaxed">{screenshots[currentImageIndex].alt}</p>
                </div>
              </div>
              
              <div className="lightbox-control">
                <div className="flex items-center gap-6 px-8 py-4 bg-black/70 backdrop-blur-md rounded-full text-white border border-white/20">
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={decreaseZoom}
                      disabled={zoomLevel <= 1}
                      className="p-2 rounded-full hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <ZoomOut className="h-5 w-5" />
                    </button>
                    <span className="text-base min-w-[4rem] text-center font-medium">
                      {Math.round(zoomLevel * 100)}%
                    </span>
                    <button 
                      onClick={increaseZoom}
                      disabled={zoomLevel >= 3}
                      className="p-2 rounded-full hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <ZoomIn className="h-5 w-5" />
                    </button>
                  </div>
                  
                  <div className="w-px h-8 bg-white/30"></div>
                  
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

