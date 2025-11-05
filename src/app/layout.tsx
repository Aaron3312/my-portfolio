import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Analytics } from '@vercel/analytics/next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Desarrollador Web México | Aaron Hernández - Full Stack Developer',
  description: 'Desarrollador web profesional en México especializado en React, Next.js, Node.js y AWS. Servicios de desarrollo web, aplicaciones móviles y soluciones cloud. Disponible para proyectos freelance.',
  keywords: [
    // Términos de trabajo freelance
    'desarrollador web freelance México',
    'programador freelance Guadalajara',
    'freelance React developer México',
    'contratación desarrollador web México',
    'servicios desarrollo web freelance',
    'desarrollador full stack disponible',
    'busco desarrollador web México',
    'hiring React developer México',
    
    // Proyectos específicos
    'desarrollo aplicaciones web personalizadas',
    'creación sitios web empresariales',
    'desarrollo e-commerce México',
    'aplicaciones React a medida',
    'sistemas gestión tareas',
    'desarrollo PWA México',
    'migración legacy a React',
    'optimización rendimiento web',
    
    // Tecnologías específicas
    'desarrollador Next.js México',
    'especialista TypeScript México',
    'desarrollador Node.js freelance',
    'AWS solutions architect México',
    'desarrollador Firebase México',
    'integración APIs REST México',
    'desarrollo microservicios',
    'arquitectura serverless AWS',
    
    // Términos de búsqueda específicos
    'Aaron Hernández desarrollador',
    'programador Tecnológico Monterrey',
    'desarrollador web Jalisco',
    'full stack developer Guadalajara',
    'contrato desarrollador React',
    'proyecto desarrollo web México',
    'consultor técnico desarrollo',
    'mentor desarrollo web México'
  ],
  authors: [{ name: 'Aaron Hernández Jiménez' }],
  creator: 'Aaron Hernández Jiménez',
  publisher: 'Aaron Hernández Jiménez',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://aaronhernandez.me'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Aaron Hernández Jiménez | Full Stack Developer & Cloud Solutions Architect',
    description: 'Full Stack Developer especializado en React, Node.js, AWS y sistemas con IA. Disponible para proyectos freelance y posiciones full-time.',
    url: 'https://aaronhernandez.me',
    siteName: 'Aaron Hernández - Portfolio',
    locale: 'es_MX',
    type: 'website',
    images: [
      {
        url: 'https://aaronhernandez.me/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Aaron Hernández Jiménez - Full Stack Developer & Cloud Solutions Architect',
      },
    ],
  },
  other: {
    'fb:app_id': '1234567890123456',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aaron Hernández Jiménez | Full Stack Developer & Cloud Solutions Architect',
    description: 'Full Stack Developer especializado en React, Node.js, AWS y sistemas con IA. Disponible para proyectos freelance y posiciones full-time.',
    images: ['https://aaronhernandez.me/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  verification: {
    // Agrega aquí tus códigos de verificación cuando los tengas
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://raw.githubusercontent.com" />
        <link rel="dns-prefetch" href="https://raw.githubusercontent.com" />
        <link rel="preload" as="image" href="https://raw.githubusercontent.com/Aaron3312/aaron3312/main/SGCAM_20241125_163111155.PORTRAIT.jpg" fetchPriority="high" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Aaron Dev" />
        <style dangerouslySetInnerHTML={{
          __html: `
            :root { --background: #ffffff; --foreground: #171717; }
            @media (prefers-color-scheme: dark) { :root { --background: #0a0a0a; --foreground: #ededed; } }
            body { background: var(--background); color: var(--foreground); font-family: system-ui, -apple-system, sans-serif; margin: 0; line-height: 1.6; }
            .loading-screen { position: fixed; inset: 0; background: var(--background); display: flex; align-items: center; justify-content: center; z-index: 100; }
          `
        }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Aaron Hernández Jiménez",
              "jobTitle": "Full Stack Developer & Cloud Solutions Architect",
              "description": "Desarrollador web profesional especializado en React, Next.js, Node.js, AWS y sistemas con IA. Disponible para proyectos freelance y posiciones full-time.",
              "url": "https://aaronhernandez.me",
              "image": "https://raw.githubusercontent.com/Aaron3312/aaron3312/main/SGCAM_20241125_163111155.PORTRAIT.jpg",
              "email": "mailto:aaron3312.dev@gmail.com",
              "telephone": "+52-33-1234-5678",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Guadalajara",
                "addressRegion": "Jalisco",
                "addressCountry": "México"
              },
              "alumniOf": {
                "@type": "Organization",
                "name": "Tecnológico de Monterrey",
                "sameAs": "https://tec.mx"
              },
              "knowsAbout": [
                "React", "Next.js", "Node.js", "TypeScript", "JavaScript",
                "AWS", "Cloud Computing", "Machine Learning", "AI",
                "Python", "PostgreSQL", "Firebase", "Docker",
                "Desarrollo Web", "Desarrollo Full Stack", "Arquitectura de Software"
              ],
              "seeks": {
                "@type": "JobPosting",
                "title": "Proyectos de Desarrollo Web y Software",
                "description": "Busco oportunidades freelance y proyectos full-time en desarrollo web, aplicaciones móviles y soluciones cloud",
                "hiringOrganization": {
                  "@type": "Person",
                  "name": "Aaron Hernández Jiménez"
                }
              },
              "sameAs": [
                "https://github.com/Aaron3312",
                "https://linkedin.com/in/aaron-hernandez-jimenez"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance Developer"
              },
              "hasOccupation": {
                "@type": "Occupation",
                "name": "Software Developer",
                "occupationLocation": {
                  "@type": "Place",
                  "name": "México"
                },
                "skills": [
                  "React Development",
                  "Full Stack Development", 
                  "Cloud Architecture",
                  "Machine Learning",
                  "Web Development",
                  "Mobile Development"
                ]
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
