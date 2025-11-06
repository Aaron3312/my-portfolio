// src/components/footer.tsx
"use client";
import Link from "next/link"
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export function Footer() {
  const { data, language } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 border-t border-slate-200 dark:border-slate-800">
      {/* Decorative gradient background */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800/20 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.05))]" />

      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative container mx-auto px-4 py-12 md:py-16">
        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-4 space-y-4">
            <Link href="/" className="inline-block group">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                {data.about.name}
              </h3>
            </Link>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-xs">
              {data.footer.description}
            </p>

            {/* Social links with hover effects */}
            <div className="flex space-x-3 pt-2">
              <a
                href="https://github.com/Aaron3312"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-xl bg-slate-100 dark:bg-slate-800/50 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Github className="h-5 w-5 text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                <span className="sr-only">GitHub</span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity" />
              </a>
              <a
                href="https://www.linkedin.com/in/aaron3312"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-xl bg-slate-100 dark:bg-slate-800/50 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Linkedin className="h-5 w-5 text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                <span className="sr-only">LinkedIn</span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity" />
              </a>
              <a
                href="mailto:aypierre223@gmail.com"
                className="group relative p-3 rounded-xl bg-slate-100 dark:bg-slate-800/50 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Mail className="h-5 w-5 text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                <span className="sr-only">Email</span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <div className="h-px w-8 bg-gradient-to-r from-blue-500 to-purple-500" />
              {data.footer.links}
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: data.nav.home },
                { href: "/projects", label: data.nav.projects },
                { href: "/about", label: data.nav.about },
                { href: "/contact", label: data.nav.contact },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-blue-600 dark:bg-blue-400 transition-all duration-300 mr-0 group-hover:mr-2" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Availability / CTA Section */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <div className="h-px w-8 bg-gradient-to-r from-blue-500 to-purple-500" />
              {data.footer.connect}
            </h4>

            {/* Availability Status */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-xs font-semibold text-green-700 dark:text-green-400">
                {data.availability.status}
              </span>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {data.footer.ctaText}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Mail className="h-4 w-4" />
              {data.footer.ctaButton}
            </Link>
          </div>
        </div>

        {/* Divider with gradient */}
        <div className="relative h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent mb-8" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2">
            <span>&copy; {new Date().getFullYear()} {data.about.name}.</span>
            <span className="hidden sm:inline">{data.footer.rights}</span>
          </p>

          <div className="flex items-center gap-4">
            {/* Scroll to top button */}
            <button
              onClick={scrollToTop}
              className="group p-2 rounded-lg bg-slate-100 dark:bg-slate-800/50 hover:bg-blue-600 dark:hover:bg-blue-600 transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-4 w-4 text-slate-700 dark:text-slate-300 group-hover:text-white transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}