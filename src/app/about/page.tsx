// src/app/about/page.tsx
"use client";
import Image from "next/image"
import { Button } from "../../components/ui/Button"
import { FileText, GraduationCap, Briefcase } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import Cubes from "@/components/ui/Cubes"

export default function AboutPage() {
  const { data } = useLanguage();
  return (
    <div className="relative min-h-screen">
      {/* Decorative cubes background - pointer-events-none so it doesn't block page interactions */}
      <div className="fixed inset-0 -z-10 pointer-events-none opacity-70">
        <Cubes 
          fullScreen={true} 
          gridSize={10} 
          maxAngle={75} 
          radius={5} 
          cellGap={3}
          borderStyle="2px solid rgba(82, 39, 255, 0.5)" 
          faceColor="#0a0e1a" 
          rippleColor="#ff6b6b" 
          rippleSpeed={1.5} 
          autoAnimate={true} 
          rippleOnClick={true}
          shadow="0 4px 15px rgba(0, 0, 0, 0.8)"
        />
      </div>
      <div className="container mx-auto max-w-5xl px-4 py-12 md:py-20">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{data.about.title}</h1>
        <p className="mt-4 text-muted-foreground md:text-lg">
          {data.about.subtitle}
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
          <h2 className="mb-4 text-2xl font-bold">{data.about.name}</h2>
          <p className="mb-6 text-muted-foreground">
            {data.about.bio1}
          </p>
          <p className="mb-6 text-muted-foreground">
            {data.about.bio2}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <Button href="/contact" icon>
              {data.about.getInTouch}
            </Button>
            <Button href="https://github.com/Aaron3312/my-portfolio/raw/master/resume.pdf" variant="outline" className="inline-flex items-center">
              <FileText className="mr-2 h-4 w-4" />
              {data.about.downloadResume}
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
            <h2 className="text-2xl font-bold">{data.about.education.title}</h2>
          </div>
          
          <div className="space-y-8">
            <div className="relative border-l border-slate-200 pl-6 dark:border-slate-800">
              <div className="absolute -left-[7px] top-[10px] h-3.5 w-3.5 rounded-full border border-white bg-slate-200 dark:border-slate-950 dark:bg-slate-800"></div>
              <h3 className="text-xl font-semibold">{data.about.education.degree}</h3>
              <p className="text-muted-foreground">{data.about.education.university}</p>
              <p className="text-sm text-muted-foreground">{data.about.education.period}</p>
              <p className="mt-2">
                {data.about.education.description}
              </p>
            </div>

            <div className="relative border-l border-slate-200 pl-6 dark:border-slate-800">
              <div className="absolute -left-[7px] top-[10px] h-3.5 w-3.5 rounded-full border border-white bg-slate-200 dark:border-slate-950 dark:bg-slate-800"></div>
              <h3 className="text-xl font-semibold">{data.about.education.ccna.title}</h3>
              <p className="text-muted-foreground">{data.about.education.ccna.institution}</p>
              <p className="text-sm text-muted-foreground">{data.about.education.ccna.year}</p>
              <p className="mt-2">
                {data.about.education.ccna.description}
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
            <h2 className="text-2xl font-bold">{data.about.experience.title}</h2>
          </div>
          
          <div className="space-y-8">
            <div className="relative border-l border-slate-200 pl-6 dark:border-slate-800">
              <div className="absolute -left-[7px] top-[10px] h-3.5 w-3.5 rounded-full border border-white bg-slate-200 dark:border-slate-950 dark:bg-slate-800"></div>
              <h3 className="text-xl font-semibold">{data.about.experience.freelance.title}</h3>
              <p className="text-muted-foreground">{data.about.experience.freelance.company}</p>
              <p className="text-sm text-muted-foreground">{data.about.experience.freelance.period}</p>
              <p className="mt-2">
                {data.about.experience.freelance.description}
              </p>
            </div>

            <div className="relative border-l border-slate-200 pl-6 dark:border-slate-800">
              <div className="absolute -left-[7px] top-[10px] h-3.5 w-3.5 rounded-full border border-white bg-slate-200 dark:border-slate-950 dark:bg-slate-800"></div>
              <h3 className="text-xl font-semibold">{data.about.experience.intern.title}</h3>
              <p className="text-muted-foreground">{data.about.experience.intern.company}</p>
              <p className="text-sm text-muted-foreground">{data.about.experience.intern.period}</p>
              <p className="mt-2">
                {data.about.experience.intern.description}
              </p>
            </div>

            <div className="relative border-l border-slate-200 pl-6 dark:border-slate-800">
              <div className="absolute -left-[7px] top-[10px] h-3.5 w-3.5 rounded-full border border-white bg-slate-200 dark:border-slate-950 dark:bg-slate-800"></div>
              <h3 className="text-xl font-semibold">{data.about.experience.teachingAssistant.title}</h3>
              <p className="text-muted-foreground">{data.about.experience.teachingAssistant.company}</p>
              <p className="text-sm text-muted-foreground">{data.about.experience.teachingAssistant.period}</p>
              <p className="mt-2">
                {data.about.experience.teachingAssistant.description}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Skills Section */}
      
      {/* Call to Action */}
      <div className="mt-20 rounded-lg bg-slate-100 p-10 text-center dark:bg-slate-800">
        <h2 className="mb-4 text-2xl font-bold">{data.about.cta.title}</h2>
        <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
          {data.about.cta.description}
        </p>
        <Button href="/contact" size="lg" icon>
          {data.about.cta.button}
        </Button>
      </div>
    </div>
    </div>
  )
}