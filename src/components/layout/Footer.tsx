// src/components/footer.tsx
"use client";
import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export function Footer() {
  const { data } = useLanguage();
  return (
    <footer className="border-t bg-white dark:bg-slate-950 dark:border-slate-800">
      <div className="container mx-auto py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">{data.about.name}</h3>
            <p className="text-sm text-muted-foreground">
              {data.footer.description}
            </p>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">{data.footer.links}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {data.nav.home}
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {data.nav.projects}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {data.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {data.nav.contact}
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">{data.footer.connect}</h3>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a 
                href="https://github.com/Aaron3312" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a 
                href="mailto:a01642529@tec.mx" 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t dark:border-slate-800">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {data.about.name}. {data.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}