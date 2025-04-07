// src/app/about/page.tsx
import Image from "next/image"
import { Button } from "../../components/ui/Button"
import { FileText, GraduationCap, Briefcase } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-12 md:py-20">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h1>
        <p className="mt-4 text-muted-foreground md:text-lg">
          Learn more about my background, skills, and experience
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-2xl border bg-gray-100 dark:border-slate-800 dark:bg-slate-800">
          <Image
            src="/images/about.jpg"
            alt="Aaron Hernandez"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="flex flex-col justify-center">
          <h2 className="mb-4 text-2xl font-bold">Aaron Hernandez</h2>
          <p className="mb-6 text-muted-foreground">
            I'm a Computer Science student at Tecnológico de Monterrey with expertise in building 
            scalable full-stack applications, cloud-native solutions, and AI-powered systems. 
            I'm passionate about leveraging technology to solve real-world problems and create 
            exceptional user experiences.
          </p>
          <p className="mb-6 text-muted-foreground">
            My journey in software development spans multiple domains including Web Development, 
            Cloud Architecture, AI/ML Integration, and DevOps. I continuously expand my skills through 
            hands-on projects with social impact, currently focusing on Advanced Cloud Architecture & MLOps.
            I'm set to graduate with my B.S. in Computer Science in 2026.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <Button href="/contact" icon>
              Get In Touch
            </Button>
            <Button href="https://github.com/Aaron3312/my-portfolio/raw/master/resume.pdf" variant="outline" className="inline-flex items-center">
              <FileText className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
      
      {/* Education & Experience Section */}
      <div className="mt-20 grid grid-cols-1 gap-16 md:grid-cols-2">
        {/* Education */}
        <div>
          <div className="mb-6 flex items-center">
            <div className="mr-4 rounded-full bg-primary/10 p-2">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold">Education</h2>
          </div>
          
          <div className="space-y-8">
            <div className="relative border-l border-slate-200 pl-6 dark:border-slate-800">
              <div className="absolute -left-[7px] top-[10px] h-3.5 w-3.5 rounded-full border border-white bg-slate-200 dark:border-slate-950 dark:bg-slate-800"></div>
              <h3 className="text-xl font-semibold">B.S. in Computer Science</h3>
              <p className="text-muted-foreground">Tecnológico de Monterrey (ITESM)</p>
              <p className="text-sm text-muted-foreground">2022 - 2026 (Expected)</p>
              <p className="mt-2">
                Focusing on Full-Stack Web Development, Cloud Computing & Serverless Architecture, 
                Advanced Algorithms & Data Structures, and Software Engineering.
              </p>
            </div>
            
            <div className="relative border-l border-slate-200 pl-6 dark:border-slate-800">
              <div className="absolute -left-[7px] top-[10px] h-3.5 w-3.5 rounded-full border border-white bg-slate-200 dark:border-slate-950 dark:bg-slate-800"></div>
              <h3 className="text-xl font-semibold">CCNA 200-301 Networking</h3>
              <p className="text-muted-foreground">Cisco Certification</p>
              <p className="text-sm text-muted-foreground">2023</p>
              <p className="mt-2">
                Comprehensive program covering networking fundamentals, IP connectivity, 
                security fundamentals, automation and programmability.
              </p>
            </div>
          </div>
        </div>
        
        {/* Experience */}
        <div>
          <div className="mb-6 flex items-center">
            <div className="mr-4 rounded-full bg-primary/10 p-2">
              <Briefcase className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold">Experience</h2>
          </div>
          
          <div className="space-y-8">
            <div className="relative border-l border-slate-200 pl-6 dark:border-slate-800">
              <div className="absolute -left-[7px] top-[10px] h-3.5 w-3.5 rounded-full border border-white bg-slate-200 dark:border-slate-950 dark:bg-slate-800"></div>
              <h3 className="text-xl font-semibold">Web Developer</h3>
              <p className="text-muted-foreground">Freelance</p>
              <p className="text-sm text-muted-foreground">2023 - Present</p>
              <p className="mt-2">
                Developing custom web applications for various clients. Specializing in React, Next.js, and full-stack development.
              </p>
            </div>
            
            <div className="relative border-l border-slate-200 pl-6 dark:border-slate-800">
              <div className="absolute -left-[7px] top-[10px] h-3.5 w-3.5 rounded-full border border-white bg-slate-200 dark:border-slate-950 dark:bg-slate-800"></div>
              <h3 className="text-xl font-semibold">Frontend Developer Intern</h3>
              <p className="text-muted-foreground">Tech Innovators Inc.</p>
              <p className="text-sm text-muted-foreground">2022 - 2023</p>
              <p className="mt-2">
                Developed and maintained user interfaces for web applications. 
                Collaborated with UI/UX designers and backend developers to implement new features.
              </p>
            </div>
            
            <div className="relative border-l border-slate-200 pl-6 dark:border-slate-800">
              <div className="absolute -left-[7px] top-[10px] h-3.5 w-3.5 rounded-full border border-white bg-slate-200 dark:border-slate-950 dark:bg-slate-800"></div>
              <h3 className="text-xl font-semibold">Web Development Teaching Assistant</h3>
              <p className="text-muted-foreground">Tecnológico de Monterrey</p>
              <p className="text-sm text-muted-foreground">2021 - 2022</p>
              <p className="mt-2">
                Assisted students in learning web development concepts and technologies. 
                Provided code reviews and troubleshooting support.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Skills Section */}
      <div className="mt-20">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold">Technical Skills</h2>
          <p className="mt-2 text-muted-foreground">
            Technologies and tools I work with
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          <div className="flex flex-col items-center rounded-lg border bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
            <h3 className="mb-4 text-lg font-semibold">Frontend</h3>
            <ul className="space-y-2 text-center text-muted-foreground">
              <li>React / Next.js</li>
              <li>TypeScript</li>
              <li>HTML / CSS</li>
              <li>Tailwind CSS</li>
              <li>Responsive Design</li>
            </ul>
          </div>
          
          <div className="flex flex-col items-center rounded-lg border bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
            <h3 className="mb-4 text-lg font-semibold">Backend</h3>
            <ul className="space-y-2 text-center text-muted-foreground">
              <li>Node.js</li>
              <li>Express</li>
              <li>Python</li>
              <li>Spring Boot</li>
              <li>RESTful APIs</li>
            </ul>
          </div>
          
          <div className="flex flex-col items-center rounded-lg border bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
            <h3 className="mb-4 text-lg font-semibold">Database & Cloud</h3>
            <ul className="space-y-2 text-center text-muted-foreground">
              <li>Firebase</li>
              <li>MongoDB</li>
              <li>SQL / PostgreSQL</li>
              <li>AWS Services</li>
              <li>Vercel / Netlify</li>
            </ul>
          </div>
          
          <div className="flex flex-col items-center rounded-lg border bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
            <h3 className="mb-4 text-lg font-semibold">Tools & Others</h3>
            <ul className="space-y-2 text-center text-muted-foreground">
              <li>Git / GitHub</li>
              <li>Docker</li>
              <li>CI/CD Pipelines</li>
              <li>UI/UX Design</li>
              <li>Agile Methodology</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Interests Section */}
      <div className="mt-20 text-center">
        <h2 className="mb-6 text-2xl font-bold">Beyond Coding</h2>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
          hiking in nature, playing video games, or enjoying a good book on technology and innovation.
          I'm also passionate about teaching and sharing my knowledge with others.
        </p>
      </div>
      
      {/* Call to Action */}
      <div className="mt-20 rounded-lg bg-slate-100 p-10 text-center dark:bg-slate-800">
        <h2 className="mb-4 text-2xl font-bold">Let's Connect!</h2>
        <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        <Button href="/contact" size="lg" icon>
          Contact Me
        </Button>
      </div>
    </div>
  )
}