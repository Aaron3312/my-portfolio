// File: src/components/ui/BackgroundCanvas.jsx
import { useEffect } from "react";

const BackgroundCanvas = ({ canvasRef, mousePosition, setMousePosition }) => {
  // Interactive background animation using canvas and Perlin noise
  useEffect(() => {
    if (typeof window === 'undefined' || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    let animationFrame;
    let time = 0;
    
    // Simplified Perlin noise simulation for background pattern
    const animate = () => {
      time += 0.003;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const w = canvas.width;
      const h = canvas.height;
      const cellSize = 30;
      const cols = Math.ceil(w / cellSize);
      const rows = Math.ceil(h / cellSize);
      
      for (let x = 0; x < cols; x++) {
        for (let y = 0; y < rows; y++) {
          const posX = x * cellSize;
          const posY = y * cellSize;
          
          // Simple noise approximation
          const noiseValue = Math.sin(x * 0.1 + time) * Math.cos(y * 0.1 + time) * 0.5 + 0.5;
          
          const size = noiseValue * 5 + 1;
          
          // Getting distance from mouse for interactive effect
          const dx = mousePosition.x - posX;
          const dy = mousePosition.y - posY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 200;
          let mouseEffect = 0;
          
          if (dist < maxDist) {
            mouseEffect = (1 - dist / maxDist) * 8;
          }
          
          ctx.fillStyle = `rgba(63, 131, 248, ${noiseValue * 0.1})`;
          ctx.beginPath();
          ctx.arc(posX, posY, size + mouseEffect, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      
      animationFrame = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Track mouse movement for interactive background
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, [mousePosition, setMousePosition, canvasRef]);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-40 dark:opacity-20"
    />
  );
};

export default BackgroundCanvas;