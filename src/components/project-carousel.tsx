'use client';

import { useState, useEffect } from 'react';
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
    setLightboxOpen(false);
    setZoomLevel(1);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : screenshots.length - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev < screenshots.length - 1 ? prev + 1 : 0));
  };

  const increaseZoom = () => {
    setZoomLevel((prev) => Math.min(prev + 0.25, 3));
  };

  const decreaseZoom = () => {
    setZoomLevel((prev) => Math.max(prev - 0.25, 1));
  };

  return (
    <div className="mt-16 relative">
      <h2 className="mb-6 text-2xl font-bold text-center">Screenshots</h2>
      
      {/* Main Carousel */}
      <div className="relative carousel-container">
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="w-full rounded-lg"
        >
          {screenshots.map((screenshot, index) => (
            <SwiperSlide key={index}>
              <div 
                className="cursor-pointer overflow-hidden rounded-lg border bg-gray-100 dark:border-slate-800 dark:bg-slate-800 shadow-md hover:shadow-lg transition-shadow aspect-video"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={screenshot.url}
                  alt={screenshot.alt}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <p className="mt-2 text-center text-sm text-muted-foreground">{screenshot.alt}</p>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="swiper-button-prev absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-gray-800 shadow-md hover:bg-white dark:bg-gray-800/80 dark:text-white dark:hover:bg-gray-800">
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button className="swiper-button-next absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-gray-800 shadow-md hover:bg-white dark:bg-gray-800/80 dark:text-white dark:hover:bg-gray-800">
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Custom Elegant Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Semi-transparent backdrop */}
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300"
            onClick={closeLightbox}
          />
          
          {/* Content container */}
          <div className="relative z-10 max-h-[90vh] max-w-[90vw] rounded-lg overflow-hidden bg-white dark:bg-gray-900 shadow-2xl">
            {/* Image */}
            <div 
              className="relative flex items-center justify-center overflow-hidden bg-black/10 dark:bg-black/30"
              style={{ height: 'calc(90vh - 100px)' }}
            >
              <div 
                className="transition-transform duration-300 ease-out overflow-auto"
                style={{ 
                  transform: `scale(${zoomLevel})`,
                  maxHeight: '100%',
                  maxWidth: '100%'
                }}
              >
                <Image
                  src={screenshots[currentImageIndex].url}
                  alt={screenshots[currentImageIndex].alt}
                  width={1200}
                  height={800}
                  className="object-contain"
                  style={{ 
                    maxHeight: 'calc(90vh - 100px)',
                    width: 'auto',
                    height: 'auto'
                  }}
                />
              </div>
            </div>
            
            {/* Caption bar */}
            <div className="p-4 flex items-center justify-between bg-white dark:bg-gray-800">
              <div className="flex-1">
                <p className="text-sm font-medium">{screenshots[currentImageIndex].alt}</p>
                <p className="text-xs text-muted-foreground">
                  {currentImageIndex + 1} of {screenshots.length}
                </p>
              </div>
              
              {/* Controls */}
              <div className="flex items-center gap-2">
                <button 
                  onClick={decreaseZoom}
                  disabled={zoomLevel <= 1}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50"
                  aria-label="Zoom out"
                >
                  <ZoomOut className="h-5 w-5" />
                </button>
                <button 
                  onClick={increaseZoom}
                  disabled={zoomLevel >= 3}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50"
                  aria-label="Zoom in"
                >
                  <ZoomIn className="h-5 w-5" />
                </button>
                <span className="mx-2 text-sm">{Math.round(zoomLevel * 100)}%</span>
                <button 
                  onClick={handlePrev}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button 
                  onClick={handleNext}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
                <button 
                  onClick={closeLightbox}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                  aria-label="Close lightbox"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Thumbnails at bottom */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
            <div className="flex items-center justify-center gap-2 p-2 bg-white/80 dark:bg-gray-800/80 rounded-lg backdrop-blur-sm">
              {screenshots.map((screenshot, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative h-16 w-16 overflow-hidden rounded-md border-2 transition-all ${
                    index === currentImageIndex 
                      ? 'border-primary ring-2 ring-primary ring-opacity-50' 
                      : 'border-transparent opacity-70 hover:opacity-100'
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
        </div>
      )}
    </div>
  );
}