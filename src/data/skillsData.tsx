// File: src/data/skillsData.tsx
import { Layout, Server, Code } from "lucide-react";
import React from "react";

// Define the skill type for better type safety
export interface Skill {
  title: string;
  icon: React.ReactNode;
  technologies: string[];
  color: string;
  description: string;
  projects: string[];
  codeSnippet: string;
}

// Skills data in English
export const skills_en: Skill[] = [
  {
    title: "Frontend Development",
    icon: <Layout className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />,
    technologies: ["React", "React Native", "Next.js", "Angular", "Redux", "TailwindCSS"],
    color: "#3B82F6",
    description: "Building responsive, accessible, and performant user interfaces with modern frameworks and libraries.",
    projects: ["Supply Stream Dashboard", "Bakery POS System"],
    codeSnippet: `
// Custom React Hook for responsive design
const useResponsive = () => {
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return {
    isMobile: width < 768,
    isTablet: width >= 768 && width < 1024,
    isDesktop: width >= 1024
  };
};`
  },
  {
    title: "Backend Development",
    icon: <Server className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />,
    technologies: ["Node.js", "Express", "Spring Boot", "Firebase", "PostgreSQL"],
    color: "#10B981",
    description: "Creating robust and scalable server-side applications with modern frameworks and databases.",
    projects: ["Cronos Time Management", "E-commerce API"],
    codeSnippet: `
// Express middleware for request validation
const validateRequest = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    
    if (error) {
      return res.status(400).json({
        error: error.details.map(x => x.message).join(', ')
      });
    }
    
    next();
  };
};`
  },
  {
    title: "AI & Machine Learning",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 sm:h-6 sm:w-6 text-primary">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
      <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
      <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
      <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
      <line x1="12" y1="22.08" x2="12" y2="12"></line>
    </svg>,
    technologies: ["TensorFlow Lite", "Computer Vision", "YOLOv5", "OpenAI API"],
    color: "#8B5CF6",
    description: "Implementing machine learning models and AI solutions for real-world applications.",
    projects: ["Object Detection System", "AI Writing Assistant"],
    codeSnippet: `
// TensorFlow.js image classification
async function classifyImage(imageElement) {
  const model = await tf.loadLayersModel('model/model.json');
  
  const tensor = tf.browser
    .fromPixels(imageElement)
    .resizeNearestNeighbor([224, 224])
    .toFloat()
    .expandDims();
  
  const prediction = await model.predict(tensor).data();
  return Array.from(prediction);
}`
  },
  {
    title: "Cloud & DevOps",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 sm:h-6 sm:w-6 text-primary">
      <path d="M18 10h-4v4h4v-4z"></path>
      <path d="M10 10H6v4h4v-4z"></path>
      <path d="M18 3H6v4h12V3z"></path>
      <path d="M6 17h12v4H6v-4z"></path>
    </svg>,
    technologies: ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "GitHub Actions"],
    color: "#EC4899",
    description: "Architecting and deploying cloud-native applications with modern DevOps practices.",
    projects: ["Microservices Infrastructure", "CI/CD Pipeline Setup"],
    codeSnippet: `
# Docker Compose for microservices
version: '3.8'

services:
  api:
    build: ./api
    ports:
      - "3000:3000"
    environment:
      - DB_HOST=postgres
      - REDIS_HOST=redis
    depends_on:
      - postgres
      - redis
  
  worker:
    build: ./worker
    depends_on:
      - redis
      - postgres`
  },
  {
    title: "Programming Languages",
    icon: <Code className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />,
    technologies: ["C++", "Python", "JavaScript", "TypeScript", "Java", "C#", "SQL", "Haskell"],
    color: "#F59E0B",
    description: "Proficient in multiple programming paradigms and languages for various application needs.",
    projects: ["Algorithm Visualizer", "Compiler Design"],
    codeSnippet: `
// Recursive Fibonacci in TypeScript with memoization
function fibonacci(n: number, memo: Record<number, number> = {}): number {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  
  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}`
  },
  {
    title: "Software Engineering",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 sm:h-6 sm:w-6 text-primary">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
      <polyline points="16 17 21 12 16 7"></polyline>
      <line x1="21" y1="12" x2="9" y2="12"></line>
    </svg>,
    technologies: ["Agile Methodology", "CI/CD Pipelines", "Requirements Engineering", "CCNA Networking"],
    color: "#06B6D4",
    description: "Implementing best practices in software development and engineering principles.",
    projects: ["Enterprise System Architecture", "Network Design"],
    codeSnippet: `
// Jest unit test example
describe('Authentication Service', () => {
  test('should validate user credentials', async () => {
    // Arrange
    const mockUser = { email: 'test@example.com', password: 'password123' };
    mockUserRepo.findByEmail.mockResolvedValue({
      ...mockUser,
      passwordHash: await bcrypt.hash('password123', 10)
    });
    
    // Act
    const result = await authService.validateUser(
      mockUser.email, 
      mockUser.password
    );
    
    // Assert
    expect(result).toBeTruthy();
  });
});`
  }
];

// Skills data in Spanish
export const skills_es: Skill[] = [
  {
    title: "Desarrollo Frontend",
    icon: <Layout className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />,
    technologies: ["React", "React Native", "Next.js", "Angular", "Redux", "TailwindCSS"],
    color: "#3B82F6",
    description: "Construcción de interfaces de usuario responsivas, accesibles y de alto rendimiento con frameworks y librerías modernas.",
    projects: ["Panel Supply Stream", "Sistema POS Panadería"],
    codeSnippet: `
// Custom React Hook para diseño responsive
const useResponsive = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    isMobile: width < 768,
    isTablet: width >= 768 && width < 1024,
    isDesktop: width >= 1024
  };
};`
  },
  {
    title: "Desarrollo Backend",
    icon: <Server className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />,
    technologies: ["Node.js", "Express", "Spring Boot", "Firebase", "PostgreSQL"],
    color: "#10B981",
    description: "Creación de aplicaciones del lado del servidor robustas y escalables con frameworks y bases de datos modernas.",
    projects: ["Gestión de Tiempo Cronos", "API E-commerce"],
    codeSnippet: `
// Middleware Express para validación de solicitudes
const validateRequest = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);

    if (error) {
      return res.status(400).json({
        error: error.details.map(x => x.message).join(', ')
      });
    }

    next();
  };
};`
  },
  {
    title: "IA y Machine Learning",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 sm:h-6 sm:w-6 text-primary">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
      <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
      <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
      <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
      <line x1="12" y1="22.08" x2="12" y2="12"></line>
    </svg>,
    technologies: ["TensorFlow Lite", "Visión por Computadora", "YOLOv5", "API OpenAI"],
    color: "#8B5CF6",
    description: "Implementación de modelos de machine learning y soluciones de IA para aplicaciones del mundo real.",
    projects: ["Sistema de Detección de Objetos", "Asistente de Escritura con IA"],
    codeSnippet: `
// Clasificación de imágenes con TensorFlow.js
async function classifyImage(imageElement) {
  const model = await tf.loadLayersModel('model/model.json');

  const tensor = tf.browser
    .fromPixels(imageElement)
    .resizeNearestNeighbor([224, 224])
    .toFloat()
    .expandDims();

  const prediction = await model.predict(tensor).data();
  return Array.from(prediction);
}`
  },
  {
    title: "Cloud y DevOps",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 sm:h-6 sm:w-6 text-primary">
      <path d="M18 10h-4v4h4v-4z"></path>
      <path d="M10 10H6v4h4v-4z"></path>
      <path d="M18 3H6v4h12V3z"></path>
      <path d="M6 17h12v4H6v-4z"></path>
    </svg>,
    technologies: ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "GitHub Actions"],
    color: "#EC4899",
    description: "Arquitectura y despliegue de aplicaciones cloud-native con prácticas modernas de DevOps.",
    projects: ["Infraestructura de Microservicios", "Configuración Pipeline CI/CD"],
    codeSnippet: `
# Docker Compose para microservicios
version: '3.8'

services:
  api:
    build: ./api
    ports:
      - "3000:3000"
    environment:
      - DB_HOST=postgres
      - REDIS_HOST=redis
    depends_on:
      - postgres
      - redis

  worker:
    build: ./worker
    depends_on:
      - redis
      - postgres`
  },
  {
    title: "Lenguajes de Programación",
    icon: <Code className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />,
    technologies: ["C++", "Python", "JavaScript", "TypeScript", "Java", "C#", "SQL", "Haskell"],
    color: "#F59E0B",
    description: "Competente en múltiples paradigmas de programación y lenguajes para diversas necesidades de aplicación.",
    projects: ["Visualizador de Algoritmos", "Diseño de Compilador"],
    codeSnippet: `
// Fibonacci recursivo en TypeScript con memoización
function fibonacci(n: number, memo: Record<number, number> = {}): number {
  if (n in memo) return memo[n];
  if (n <= 1) return n;

  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}`
  },
  {
    title: "Ingeniería de Software",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 sm:h-6 sm:w-6 text-primary">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
      <polyline points="16 17 21 12 16 7"></polyline>
      <line x1="21" y1="12" x2="9" y2="12"></line>
    </svg>,
    technologies: ["Metodología Ágil", "Pipelines CI/CD", "Ingeniería de Requisitos", "Redes CCNA"],
    color: "#06B6D4",
    description: "Implementación de mejores prácticas en desarrollo de software y principios de ingeniería.",
    projects: ["Arquitectura de Sistema Empresarial", "Diseño de Redes"],
    codeSnippet: `
// Ejemplo de prueba unitaria con Jest
describe('Servicio de Autenticación', () => {
  test('debe validar credenciales de usuario', async () => {
    // Arrange
    const mockUser = { email: 'test@example.com', password: 'password123' };
    mockUserRepo.findByEmail.mockResolvedValue({
      ...mockUser,
      passwordHash: await bcrypt.hash('password123', 10)
    });

    // Act
    const result = await authService.validateUser(
      mockUser.email,
      mockUser.password
    );

    // Assert
    expect(result).toBeTruthy();
  });
});`
  }
];

// Export default as English (for backwards compatibility)
export const skills = skills_en;

export default skills;