// src/data/dataWebsite.ts
// Centralized data for the entire website in both languages

export interface WebsiteData {
  // Navbar
  nav: {
    home: string;
    projects: string;
    about: string;
    contact: string;
  };

  // Hero Section
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    viewWorkButton: string;
    contactButton: string;
    resumeButton: string;
  };

  // About Page
  about: {
    title: string;
    subtitle: string;
    name: string;
    bio1: string;
    bio2: string;
    getInTouch: string;
    downloadResume: string;
    education: {
      title: string;
      degree: string;
      university: string;
      period: string;
      description: string;
      ccna: {
        title: string;
        institution: string;
        year: string;
        description: string;
      };
    };
    experience: {
      title: string;
      freelance: {
        title: string;
        company: string;
        period: string;
        description: string;
      };
      intern: {
        title: string;
        company: string;
        period: string;
        description: string;
      };
      teachingAssistant: {
        title: string;
        company: string;
        period: string;
        description: string;
      };
    };
    skills: {
      title: string;
      subtitle: string;
      frontend: string;
      backend: string;
      databaseCloud: string;
      toolsOthers: string;
    };
    beyondCoding: {
      title: string;
      description: string;
    };
    cta: {
      title: string;
      description: string;
      button: string;
    };
  };

  // Contact Page
  contact: {
    title: string;
    subtitle: string;
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    sendButton: string;
    sending: string;
    successMessage: string;
    errorMessage: string;
    getInTouch: {
      title: string;
      description: string;
    };
    info: {
      email: string;
      location: string;
      availability: string;
    };
  };

  // Common
  common: {
    viewProject: string;
    liveDemo: string;
    sourceCode: string;
    readMore: string;
    backToProjects: string;
    backToHome: string;
  };

  // Projects
  projects: {
    title: string;
    description: string;
    count: string;
    technologies: string;
    links: string;
    screenshots: string;
    notFound: string;
    notFoundDescription: string;
    viewAll: string;
  };

  // Skills Section
  skills: {
    title: string;
    subtitle: string;
    showMore: string;
    showLess: string;
    allTechnologies: string;
    relatedProjects: string;
    exampleCode: string;
    clickToView: string;
  };

  // CTA Section
  cta: {
    title: string;
    description: string;
    button: string;
  };

  // Footer
  footer: {
    description: string;
    links: string;
    connect: string;
    rights: string;
  };
}

export const websiteData: Record<'en' | 'es', WebsiteData> = {
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      about: 'About',
      contact: 'Contact',
    },

    hero: {
      badge: 'Software Engineer',
      title: "Hi, I'm Aaron Hernández Jiménez",
      subtitle: 'Full Stack Developer | Cloud Solutions Architect',
      description: 'Computer Science student at Tecnológico de Monterrey with expertise in building scalable web applications, cloud-native solutions, and AI-powered systems.',
      viewWorkButton: 'View My Work',
      contactButton: 'Get In Touch',
      resumeButton: 'Download Resume',
    },

    about: {
      title: 'About Me',
      subtitle: 'Learn more about my background, skills, and experience',
      name: 'Aaron Hernandez',
      bio1: "I'm a Computer Science student at Tecnológico de Monterrey with expertise in building scalable full-stack applications, cloud-native solutions, and AI-powered systems. I'm passionate about leveraging technology to solve real-world problems and create exceptional user experiences.",
      bio2: "My journey in software development spans multiple domains including Web Development, Cloud Architecture, AI/ML Integration, and DevOps. I continuously expand my skills through hands-on projects with social impact, currently focusing on Advanced Cloud Architecture & MLOps. I'm set to graduate with my B.S. in Computer Science in 2026.",
      getInTouch: 'Get In Touch',
      downloadResume: 'Download Resume',
      education: {
        title: 'Education',
        degree: 'B.S. in Computer Science',
        university: 'Tecnológico de Monterrey (ITESM)',
        period: '2022 - 2026 (Expected)',
        description: 'Focusing on Full-Stack Web Development, Cloud Computing & Serverless Architecture, Advanced Algorithms & Data Structures, and Software Engineering.',
        ccna: {
          title: 'CCNA 200-301 Networking',
          institution: 'Cisco Training Certification',
          year: '2023',
          description: 'Comprehensive program covering networking fundamentals, IP connectivity, security fundamentals, automation and programmability.',
        },
      },
      experience: {
        title: 'Experience',
        freelance: {
          title: 'Web Developer',
          company: 'Freelance',
          period: '2023 - Present',
          description: 'Developing custom web applications for various clients. Specializing in React, Next.js, and full-stack development.',
        },
        intern: {
          title: 'Frontend Developer Intern',
          company: 'Tech Innovators Inc.',
          period: '2022 - 2023',
          description: 'Developed and maintained user interfaces for web applications. Collaborated with UI/UX designers and backend developers to implement new features.',
        },
        teachingAssistant: {
          title: 'Web Development Teaching Assistant',
          company: 'Universidad del Valle de México',
          period: '2021 - 2022',
          description: 'Assisted students in learning web development basic concepts and technologies. Provided code reviews and troubleshooting support.',
        },
      },
      skills: {
        title: 'Technical Skills',
        subtitle: 'Technologies and tools I work with',
        frontend: 'Frontend',
        backend: 'Backend',
        databaseCloud: 'Database & Cloud',
        toolsOthers: 'Tools & Others',
      },
      beyondCoding: {
        title: 'Beyond Coding',
        description: "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, hiking in nature, playing video games, or enjoying a good book on technology and innovation. I'm also passionate about teaching and sharing my knowledge with others.",
      },
      cta: {
        title: "Let's Connect!",
        description: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
        button: 'Contact Me',
      },
    },

    contact: {
      title: 'Get In Touch',
      subtitle: "Have a question or want to work together? I'd love to hear from you.",
      nameLabel: 'Your Name',
      emailLabel: 'Your Email',
      messageLabel: 'Your Message',
      sendButton: 'Send Message',
      sending: 'Sending...',
      successMessage: 'Message sent successfully! I\'ll get back to you soon.',
      errorMessage: 'Failed to send message. Please try again.',
      getInTouch: {
        title: 'Get In Touch',
        description: "Have a question or want to work together? I'd love to hear from you.",
      },
      info: {
        email: 'Email',
        location: 'Location',
        availability: 'Availability',
      },
    },

    common: {
      viewProject: 'View Project',
      liveDemo: 'Live Demo',
      sourceCode: 'Source Code',
      readMore: 'Read More',
      backToProjects: 'Back to Projects',
      backToHome: 'Back to Home',
    },

    projects: {
      title: 'My Projects',
      description: 'A showcase of my web development projects and applications',
      count: 'Projects Available',
      technologies: 'Technologies',
      links: 'Links',
      screenshots: 'Screenshots',
      notFound: 'Project Not Found',
      notFoundDescription: "The project you're looking for doesn't exist or has been removed.",
      viewAll: 'View All Projects',
    },

    skills: {
      title: 'Skills & Technologies',
      subtitle: 'Technologies I work with on a daily basis',
      showMore: 'Show More',
      showLess: 'Show Less',
      allTechnologies: 'All Technologies',
      relatedProjects: 'Related Projects',
      exampleCode: 'Example Code',
      clickToView: 'Click to view →',
    },

    cta: {
      title: 'Ready to work together?',
      description: "Let's build something amazing together. Contact me to discuss your project.",
      button: 'Start a Project',
    },

    footer: {
      description: 'Web developer specializing in modern web applications and user-friendly interfaces.',
      links: 'Links',
      connect: 'Connect',
      rights: 'All rights reserved.',
    },
  },

  es: {
    nav: {
      home: 'Inicio',
      projects: 'Proyectos',
      about: 'Acerca de',
      contact: 'Contacto',
    },

    hero: {
      badge: 'Ingeniero de Software',
      title: 'Hola, soy Aaron Hernández Jiménez',
      subtitle: 'Desarrollador Full Stack | Arquitecto de Soluciones Cloud',
      description: 'Estudiante de Ciencias de la Computación en el Tecnológico de Monterrey con experiencia en construcción de aplicaciones web escalables, soluciones cloud-native y sistemas con IA.',
      viewWorkButton: 'Ver Mi Trabajo',
      contactButton: 'Contáctame',
      resumeButton: 'Descargar CV',
    },

    about: {
      title: 'Acerca de Mí',
      subtitle: 'Conoce más sobre mi experiencia, habilidades y trayectoria',
      name: 'Aaron Hernandez',
      bio1: 'Soy estudiante de Ciencias de la Computación en el Tecnológico de Monterrey con experiencia en construcción de aplicaciones full-stack escalables, soluciones cloud-native y sistemas con IA. Me apasiona usar la tecnología para resolver problemas del mundo real y crear experiencias de usuario excepcionales.',
      bio2: 'Mi trayectoria en desarrollo de software abarca múltiples dominios incluyendo Desarrollo Web, Arquitectura Cloud, Integración de IA/ML y DevOps. Constantemente expando mis habilidades a través de proyectos prácticos con impacto social, actualmente enfocándome en Arquitectura Cloud Avanzada y MLOps. Me graduaré con mi Licenciatura en Ciencias de la Computación en 2026.',
      getInTouch: 'Contáctame',
      downloadResume: 'Descargar CV',
      education: {
        title: 'Educación',
        degree: 'Licenciatura en Ciencias de la Computación',
        university: 'Tecnológico de Monterrey (ITESM)',
        period: '2022 - 2026 (Esperado)',
        description: 'Enfocándome en Desarrollo Web Full-Stack, Computación en la Nube y Arquitectura Serverless, Algoritmos y Estructuras de Datos Avanzados, e Ingeniería de Software.',
        ccna: {
          title: 'CCNA 200-301 Redes',
          institution: 'Certificación Cisco Training',
          year: '2023',
          description: 'Programa integral que cubre fundamentos de redes, conectividad IP, fundamentos de seguridad, automatización y programabilidad.',
        },
      },
      experience: {
        title: 'Experiencia',
        freelance: {
          title: 'Desarrollador Web',
          company: 'Freelance',
          period: '2023 - Presente',
          description: 'Desarrollo de aplicaciones web personalizadas para diversos clientes. Especializado en React, Next.js y desarrollo full-stack.',
        },
        intern: {
          title: 'Pasante de Desarrollador Frontend',
          company: 'Tech Innovators Inc.',
          period: '2022 - 2023',
          description: 'Desarrollé y mantuve interfaces de usuario para aplicaciones web. Colaboré con diseñadores UI/UX y desarrolladores backend para implementar nuevas funcionalidades.',
        },
        teachingAssistant: {
          title: 'Ayudante de Desarrollo Web',
          company: 'Universidad del Valle de México',
          period: '2021 - 2022',
          description: 'Asistí a estudiantes en el aprendizaje de conceptos básicos y tecnologías de desarrollo web. Proporcioné revisiones de código y soporte para resolución de problemas.',
        },
      },
      skills: {
        title: 'Habilidades Técnicas',
        subtitle: 'Tecnologías y herramientas con las que trabajo',
        frontend: 'Frontend',
        backend: 'Backend',
        databaseCloud: 'Bases de Datos y Cloud',
        toolsOthers: 'Herramientas y Otros',
      },
      beyondCoding: {
        title: 'Más Allá del Código',
        description: 'Cuando no estoy programando, me puedes encontrar explorando nuevas tecnologías, contribuyendo a proyectos de código abierto, haciendo senderismo, jugando videojuegos o disfrutando un buen libro sobre tecnología e innovación. También me apasiona enseñar y compartir mi conocimiento con otros.',
      },
      cta: {
        title: '¡Conectemos!',
        description: 'Siempre estoy abierto a discutir nuevos proyectos, ideas creativas u oportunidades para ser parte de tu visión.',
        button: 'Contáctame',
      },
    },

    contact: {
      title: 'Ponte en Contacto',
      subtitle: '¿Tienes una pregunta o quieres trabajar juntos? Me encantaría escucharte.',
      nameLabel: 'Tu Nombre',
      emailLabel: 'Tu Email',
      messageLabel: 'Tu Mensaje',
      sendButton: 'Enviar Mensaje',
      sending: 'Enviando...',
      successMessage: '¡Mensaje enviado exitosamente! Te responderé pronto.',
      errorMessage: 'Error al enviar el mensaje. Por favor intenta de nuevo.',
      getInTouch: {
        title: 'Ponte en Contacto',
        description: '¿Tienes una pregunta o quieres trabajar juntos? Me encantaría escucharte.',
      },
      info: {
        email: 'Email',
        location: 'Ubicación',
        availability: 'Disponibilidad',
      },
    },

    common: {
      viewProject: 'Ver Proyecto',
      liveDemo: 'Demo en Vivo',
      sourceCode: 'Código Fuente',
      readMore: 'Leer Más',
      backToProjects: 'Volver a Proyectos',
      backToHome: 'Volver al Inicio',
    },

    projects: {
      title: 'Mis Proyectos',
      description: 'Una muestra de mis proyectos y aplicaciones de desarrollo web',
      count: 'Proyectos Disponibles',
      technologies: 'Tecnologías',
      links: 'Enlaces',
      screenshots: 'Capturas de Pantalla',
      notFound: 'Proyecto No Encontrado',
      notFoundDescription: 'El proyecto que buscas no existe o ha sido eliminado.',
      viewAll: 'Ver Todos los Proyectos',
    },

    skills: {
      title: 'Habilidades y Tecnologías',
      subtitle: 'Tecnologías con las que trabajo diariamente',
      showMore: 'Ver Más',
      showLess: 'Ver Menos',
      allTechnologies: 'Todas las Tecnologías',
      relatedProjects: 'Proyectos Relacionados',
      exampleCode: 'Código de Ejemplo',
      clickToView: 'Clic para ver →',
    },

    cta: {
      title: '¿Listo para trabajar juntos?',
      description: 'Construyamos algo increíble juntos. Contáctame para discutir tu proyecto.',
      button: 'Iniciar un Proyecto',
    },

    footer: {
      description: 'Desarrollador web especializado en aplicaciones web modernas e interfaces amigables.',
      links: 'Enlaces',
      connect: 'Conectar',
      rights: 'Todos los derechos reservados.',
    },
  },
};
