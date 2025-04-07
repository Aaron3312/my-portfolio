// src/app/page.tsx
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Briefcase, Code, Database, Layout, Server, Hourglass, Globe, Cake, Brain, Cpu, Shield } from "lucide-react"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-blue-950/30 dark:via-slate-950 dark:to-indigo-950/30"></div>
        <div className="absolute inset-0 opacity-30 dark:opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/20 dark:bg-blue-400/10 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400/20 dark:bg-indigo-400/10 rounded-full filter blur-3xl transform translate-x-1/3 translate-y-1/3"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col gap-4 text-center md:text-left">
              <div className="inline-block mx-auto md:mx-0 mb-2 px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300">
                Software Engineer
              </div>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300">
                Hi, I'm Aaron Hernández Jiménez
              </h1>
              <p className="text-xl text-blue-600 dark:text-blue-400 font-medium">
                Full Stack Developer | Cloud Solutions Architect
              </p>
              <p className="text-muted-foreground md:text-lg">
                Computer Science student at Tecnológico de Monterrey with expertise in building scalable web applications, cloud-native solutions, and AI-powered systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-6 justify-center md:justify-start">
                <Button 
                  href="/projects" 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  View My Work
                </Button>
                <Button 
                  href="/contact" 
                  variant="outline" 
                  size="lg"
                  className="border-2 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  Get In Touch
                </Button>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="relative h-[280px] w-[280px] md:h-[400px] md:w-[400px] rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl bg-white dark:bg-slate-900 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 dark:from-blue-500/20 dark:to-indigo-500/20 z-10"></div>
                <Image
                  src="https://raw.githubusercontent.com/Aaron3312/aaron3312/main/IMG_20230214_210450.jpg"
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

      {/* Skills Section */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Skills</h2>
            <p className="mt-4 text-muted-foreground md:text-lg max-w-3xl">
              Expertise in multiple domains of software development and engineering
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-gray-50 dark:bg-slate-900 rounded-lg shadow-sm">
              <div className="rounded-full bg-primary/10 p-3 mb-4">
                <Layout className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Frontend Development</h3>
              <p className="text-muted-foreground text-center">
                React, React Native, Next.js, Angular, Redux, TailwindCSS
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-50 dark:bg-slate-900 rounded-lg shadow-sm">
              <div className="rounded-full bg-primary/10 p-3 mb-4">
                <Server className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Backend Development</h3>
              <p className="text-muted-foreground text-center">
                Node.js, Express, Spring Boot, Firebase, PostgreSQL
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-50 dark:bg-slate-900 rounded-lg shadow-sm">
              <div className="rounded-full bg-primary/10 p-3 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
                  <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
                  <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">AI & Machine Learning</h3>
              <p className="text-muted-foreground text-center">
                TensorFlow Lite, Computer Vision, YOLOv5, OpenAI API
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-50 dark:bg-slate-900 rounded-lg shadow-sm">
              <div className="rounded-full bg-primary/10 p-3 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary">
                  <path d="M18 10h-4v4h4v-4z"></path>
                  <path d="M10 10H6v4h4v-4z"></path>
                  <path d="M18 3H6v4h12V3z"></path>
                  <path d="M6 17h12v4H6v-4z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Cloud & DevOps</h3>
              <p className="text-muted-foreground text-center">
                AWS, GCP, Azure, Docker, Kubernetes, GitHub Actions
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-50 dark:bg-slate-900 rounded-lg shadow-sm">
              <div className="rounded-full bg-primary/10 p-3 mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Programming Languages</h3>
              <p className="text-muted-foreground text-center">
                C++, Python, JavaScript, TypeScript, Java, C#, SQL, Haskell
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-50 dark:bg-slate-900 rounded-lg shadow-sm">
              <div className="rounded-full bg-primary/10 p-3 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary">
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                  <polyline points="16 17 21 12 16 7"></polyline>
                  <line x1="21" y1="12" x2="9" y2="12"></line>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Software Engineering</h3>
              <p className="text-muted-foreground text-center">
                Agile Methodology, CI/CD Pipelines, Requirements Engineering, CCNA Networking
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-gray-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
            <p className="mt-4 text-muted-foreground md:text-lg max-w-3xl">
              A selection of my most innovative work
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* SupplyStream */}
            <div className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all hover:translate-y-[-5px] duration-300">
              <div className="absolute top-4 right-4 z-10 rounded-full bg-white/90 p-2 shadow-md dark:bg-slate-900/90">
                <Globe className="h-6 w-6 text-sky-600" />
              </div>
              <div className="aspect-video w-full bg-gray-100 dark:bg-slate-800 relative">
                <Image
                  src="/images/supply-stream.jpg"
                  alt="SupplyStream Project"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6 bg-white dark:bg-slate-950">
                <h3 className="text-xl font-bold mb-2">SupplyStream</h3>
                <p className="text-muted-foreground mb-4">
                  AI-powered inventory management for Food Bank Guadalajara
                </p>
                <div className="flex justify-center">
                  <Button href="/projects/supply-stream" variant="outline" size="sm">
                    View Project
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Cronos Project */}
            <div className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all hover:translate-y-[-5px] duration-300">
              <div className="absolute top-4 right-4 z-10 rounded-full bg-white/90 p-2 shadow-md dark:bg-slate-900/90">
                <Hourglass className="h-6 w-6 text-amber-600" />
              </div>
              <div className="aspect-video w-full bg-gray-100 dark:bg-slate-800 relative">
                <Image
                  src="/images/cronos.jpg"
                  alt="Cronos Project"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6 bg-white dark:bg-slate-950">
                <h3 className="text-xl font-bold mb-2">Cronos Project</h3>
                <p className="text-muted-foreground mb-4">
                  AI-powered project management with intelligent task organization
                </p>
                <div className="flex justify-center">
                  <Button href="/projects/cronos" variant="outline" size="sm">
                    View Project
                  </Button>
                </div>
              </div>
            </div>
            
            {/* BakeryPOS */}
            <div className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all hover:translate-y-[-5px] duration-300">
              <div className="absolute top-4 right-4 z-10 rounded-full bg-white/90 p-2 shadow-md dark:bg-slate-900/90">
                <Cake className="h-6 w-6 text-pink-500" />
              </div>
              <div className="aspect-video w-full bg-gray-100 dark:bg-slate-800 relative">
                <Image
                  src="/images/bakery-pos.jpg"
                  alt="BakeryPOS Project"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6 bg-white dark:bg-slate-950">
                <h3 className="text-xl font-bold mb-2">BakeryPOS</h3>
                <p className="text-muted-foreground mb-4">
                  Smart point-of-sale system with offline functionality for bakeries
                </p>
                <div className="flex justify-center">
                  <Button href="/projects/bakery-pos" variant="outline" size="sm">
                    View Project
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <Button href="/projects" variant="default" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-50 dark:from-blue-950/20 dark:to-indigo-950/20"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-5 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 leading-relaxed -mt-1">
              Let's Build Something Amazing
            </h2>
            <p className="text-muted-foreground mb-8 md:text-lg">
              I'm currently available for freelance projects, full-time positions, or consulting work. 
              If you're interested in working together on innovative solutions, let's connect!
            </p>
            <Button href="/contact" size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              Contact Me
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}