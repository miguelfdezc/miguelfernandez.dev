export const languages = {
  en: "English",
  es: "Español",
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = "en";

export const ui: Record<Lang, Record<string, string>> = {
  en: {
    // Meta
    "meta.title": "Miguel Fernández | Senior Frontend Developer & AI Engineer",
    "meta.description":
      "Senior frontend developer and AI engineer building products that ship. 4+ years shipping SaaS apps, Chrome extensions, and client websites. Master's in AI Development.",

    // Nav
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.education": "Education",
    "nav.about": "About",
    "nav.blog": "Blog",

    // Hero
    "hero.badge": "Available for work",
    "hero.subtitle":
      "Senior frontend developer & AI engineer building products that ship.",
    "hero.description":
      "4+ years shipping SaaS apps, Chrome extensions, and client websites. CS degree & Master\u2019s in AI Development.",
    "hero.cta": "Get in touch",
    "hero.cv": "Download CV",

    // Section headings
    "section.projects": "Projects",
    "section.projects.subtitle": "Things I've built and shipped.",
    "section.experience": "Experience",
    "section.experience.subtitle": "Where I've worked and what I've done.",
    "section.education": "Education",
    "section.education.subtitle": "Where I've studied and what I've learned.",
    "section.about": "About me",
    "section.about.subtitle": "A bit more about who I am.",
    "section.contact": "Get in touch",
    "section.contact.subtitle": "Let's build something together.",

    // Contact
    "contact.intro": "Interested in working together? Feel free to reach out.",
    "contact.email": "Email me",

    // Footer
    "footer.rights": "All rights reserved.",

    // Blog
    "blog.title": "Blog",
    "blog.description":
      "Thoughts on web development, AI engineering, and building products.",
    "blog.empty": "Coming soon.",
    "blog.empty.sub": "First post in the works...",
    "blog.back": "Back to blog",
    "blog.updated": "Updated:",

    // Connector words
    "connector.at": "at",

    // RSS
    "rss.title": "Miguel Fernández | Blog",
    "rss.description":
      "Thoughts on web development, AI engineering, and building products.",
  },

  es: {
    // Meta
    "meta.title":
      "Miguel Fernández | Desarrollador Frontend Senior & Ingeniero IA",
    "meta.description":
      "Desarrollador frontend senior e ingeniero de IA que crea productos reales. +4 años desarrollando apps SaaS, extensiones de Chrome y webs para clientes. Máster en Desarrollo de IA.",

    // Nav
    "nav.projects": "Proyectos",
    "nav.experience": "Experiencia",
    "nav.education": "Formación",
    "nav.about": "Sobre mí",
    "nav.blog": "Blog",

    // Hero
    "hero.badge": "Disponible para trabajar",
    "hero.subtitle":
      "Desarrollador frontend senior & ingeniero de IA que crea productos reales.",
    "hero.description":
      "+4 años desarrollando apps SaaS, extensiones de Chrome y webs para clientes. Grado en Informática y Máster en Desarrollo de IA.",
    "hero.cta": "Contactar",
    "hero.cv": "Descargar CV",

    // Section headings
    "section.projects": "Proyectos",
    "section.projects.subtitle": "Lo que he construido y lanzado.",
    "section.experience": "Experiencia",
    "section.experience.subtitle": "Dónde he trabajado y qué he hecho.",
    "section.education": "Formación",
    "section.education.subtitle": "Dónde he estudiado y qué he aprendido.",
    "section.about": "Sobre mí",
    "section.about.subtitle": "Un poco más sobre quién soy.",
    "section.contact": "Contacto",
    "section.contact.subtitle": "Construyamos algo juntos.",

    // Contact
    "contact.intro":
      "¿Te interesa trabajar juntos? No dudes en escribirme.",
    "contact.email": "Enviar email",

    // Footer
    "footer.rights": "Todos los derechos reservados.",

    // Blog
    "blog.title": "Blog",
    "blog.description":
      "Reflexiones sobre desarrollo web, ingeniería de IA y creación de productos.",
    "blog.empty": "Próximamente.",
    "blog.empty.sub": "Primer artículo en camino...",
    "blog.back": "Volver al blog",
    "blog.updated": "Actualizado:",

    // Connector words
    "connector.at": "en",

    // RSS
    "rss.title": "Miguel Fernández | Blog",
    "rss.description":
      "Reflexiones sobre desarrollo web, ingeniería de IA y creación de productos.",
  },
};
