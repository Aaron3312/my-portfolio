import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aaron Hernández Jiménez | Full Stack Developer & Cloud Solutions Architect',
  description: 'Full Stack Developer y Cloud Solutions Architect con especialización en aplicaciones web escalables, soluciones nativas en la nube y sistemas con IA. Estudiante de Ciencias de la Computación en Tecnológico de Monterrey.',
  keywords: [
    'Aaron Hernández Jiménez',
    'Full Stack Developer',
    'Cloud Solutions Architect',
    'React Developer',
    'Next.js Developer',
    'Node.js Developer',
    'AWS Developer',
    'Machine Learning Developer',
    'Tecnológico de Monterrey',
    'Web Developer México',
    'Desarrollador Web',
    'JavaScript Developer',
    'TypeScript Developer',
    'Python Developer'
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
        url: '/og-image.png', // Imagen optimizada 1200x630px
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
    images: ['https://raw.githubusercontent.com/Aaron3312/aaron3312/main/SGCAM_20241125_163111155.PORTRAIT.jpg'],
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
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
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
      </body>
    </html>
  )
}