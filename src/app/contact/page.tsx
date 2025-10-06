import { Metadata } from 'next'
import ContactForm from '../../components/ContactForm'

export const metadata: Metadata = {
  title: 'Contacto - Aaron Hernández | Contratar Desarrollador Web',
  description: 'Contacta conmigo para proyectos de desarrollo web, aplicaciones React, soluciones AWS y consultoría técnica. Disponible para freelance y colaboraciones en México.',
  keywords: [
    'contactar desarrollador web México',
    'contratar programador React',
    'solicitar cotización desarrollo web',
    'freelance developer México contact',
    'hire React developer México',
    'consultoría desarrollo web',
    'presupuesto aplicación web',
    'Aaron Hernández contacto'
  ],
  openGraph: {
    title: 'Contacto - Aaron Hernández | Contratar Desarrollador Web',
    description: 'Contacta conmigo para proyectos de desarrollo web, aplicaciones React, soluciones AWS y consultoría técnica. Disponible para freelance y colaboraciones.',
    url: 'https://aaronhernandez.me/contact',
  }
}

export default function ContactPage() {
  return <ContactForm />
}
