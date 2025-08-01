import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Analytics } from '@vercel/analytics/next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Desarrollador Web México | Aaron Hernández - Full Stack Developer',
  description: 'Desarrollador web profesional en México especializado en React, Next.js, Node.js y AWS. Servicios de desarrollo web, aplicaciones móviles y soluciones cloud. Disponible para proyectos freelance.',
  keywords: [
    'desarrollador web',
    "web developer",
    "web developer México",
    'desarrollador web México',
    'programador web',

    'desarrollador frontend',
    'desarrollador frontend México',
    'desarrollador backend',
    "backend developer México",
    'full stack developer México',
    'React developer México',
    
    'Next.js developer',
    'Node.js developer',
    'AWS solutions architect',
    'desarrollador freelance',
    'desarrollador freelance México',
    'programador freelance México',
    "programador web freelance",
    'desarrollador de software',
    "website developer México",
    "websites developer",
    'desarrollador de aplicaciones web',
    'desarrollo web profesional',
    'freelance developer México',
    'AWS developer',
    'programador freelance',
    'desarrollo de aplicaciones web',
    'Aaron Hernández desarrollador',
    'servicios desarrollo web',
    'Tecnológico de Monterrey developer'
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
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Aaron Hernández Jiménez - Full Stack Developer & Cloud Solutions Architect',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aaron Hernández Jiménez | Full Stack Developer & Cloud Solutions Architect',
    description: 'Full Stack Developer especializado en React, Node.js, AWS y sistemas con IA. Disponible para proyectos freelance y posiciones full-time.',
    images: ['/og-image.png'],
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
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
