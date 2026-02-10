import type { Lang } from "../ui";

export interface ExperienceEntry {
  date: string;
  title: string;
  company: string;
  description: string;
  link?: string;
}

export interface EducationEntry {
  date: string;
  title: string;
  institution: string;
  description: string;
  link?: string;
}

const experience: Record<Lang, ExperienceEntry[]> = {
  en: [
    {
      date: "Oct 2024–Present",
      title: "Senior Frontend Developer",
      company: "Token City",
      description:
        "Owning frontend implementation and maintenance across all projects. Migrating the main SaaS dashboard from Bootstrap to multitenant SCSS architecture. Building client landing pages in Vue, Nuxt and Vite from Figma designs. Improving HTML5 structure for SEO and collaborating with fullstack and backend teams.",
      link: "https://token-city.com",
    },
    {
      date: "Sep 2024–Present",
      title: "Freelance Web Developer",
      company: "Self-employed",
      description:
        "Shipping AI-powered SaaS products, client websites, and a monetized Chrome extension. Projects include Healthspan, PhotoHouseAI, Game Portrait, DeskBreak, Centro Dharma, and FotoCV.",
    },
    {
      date: "Feb 2023–Jun 2024",
      title: "Senior Front-end Developer",
      company: "Tempe — INDITEX Group",
      description:
        "Restructured the main screen layout, refactored code into React Hooks for performance, and migrated legacy projects to current versions. Implemented unit tests with Jest and React Testing Library. Mentored junior developers via pair programming and contributed to HTML Canvas + AI projects.",
      link: "https://www.tempe.es",
    },
    {
      date: "Feb 2022–Jan 2023",
      title: "Full Stack Developer",
      company: "Doctomatic",
      description:
        "Built the testing environment (unit, e2e, UI). Developed full features from REST API endpoints to UI. Improved dev processes and created scripts for environment management. Documented services with Docusaurus and Swagger. Containerized APIs, databases and external service mocks with Docker.",
      link: "https://www.doctomatic.com",
    },
    {
      date: "May–Sep 2021",
      title: "Front-end Developer Intern",
      company: "Aire Networks",
      description:
        "Built responsive layouts with HTML5 and CSS3. Migrated components from Vanilla JS to React, implemented new views in an internal web app, and designed the form validation system.",
      link: "https://www.airenetworks.es",
    },
  ],
  es: [
    {
      date: "Oct 2024–Actualidad",
      title: "Desarrollador Frontend Senior",
      company: "Token City",
      description:
        "Encargado del mantenimiento e implementación del frontend en todos los proyectos. Migrando el dashboard SaaS principal de Bootstrap a arquitectura SCSS multitenant. Desarrollando landing pages en Vue, Nuxt y Vite a partir de diseños Figma. Mejorando la estructura HTML5 para SEO y colaborando con equipos fullstack y backend.",
      link: "https://token-city.com",
    },
    {
      date: "Sep 2024–Actualidad",
      title: "Desarrollador Web Freelance",
      company: "Autónomo",
      description:
        "Desarrollando productos SaaS con IA, webs para clientes y una extensión de Chrome monetizada. Proyectos: Healthspan, PhotoHouseAI, Game Portrait, DeskBreak, Centro Dharma y FotoCV.",
    },
    {
      date: "Feb 2023–Jun 2024",
      title: "Desarrollador Front-end Senior",
      company: "Tempe — Grupo INDITEX",
      description:
        "Reestructuré el layout principal, refactoricé código a React Hooks para mejorar rendimiento y migré proyectos legacy a versiones actuales. Implementé tests unitarios con Jest y React Testing Library. Mentoricé a desarrolladores junior con pair programming y contribuí a proyectos de HTML Canvas + IA.",
      link: "https://www.tempe.es",
    },
    {
      date: "Feb 2022–Ene 2023",
      title: "Desarrollador Full Stack",
      company: "Doctomatic",
      description:
        "Implanté el entorno de testing (unitarios, e2e, UI). Desarrollé funcionalidades completas desde endpoints REST API hasta UI. Mejoré procesos de desarrollo y creé scripts para la gestión del entorno. Documenté servicios con Docusaurus y Swagger. Containerizé APIs, bases de datos y mocks con Docker.",
      link: "https://www.doctomatic.com",
    },
    {
      date: "May–Sep 2021",
      title: "Desarrollador Front-end en prácticas",
      company: "Aire Networks",
      description:
        "Maquetación responsive con HTML5 y CSS3. Migré componentes de Vanilla JS a React, implementé nuevas vistas en una aplicación web interna y diseñé el sistema de validación de formularios.",
      link: "https://www.airenetworks.es",
    },
  ],
};

const education: Record<Lang, EducationEntry[]> = {
  en: [
    {
      date: "Oct 2025–Jan 2026",
      title: "Master's in AI Development",
      institution: "BIG school",
      description:
        "Intensive, hands-on program focused on building products with AI. Key topics: LLM fundamentals and generative AI, prompt engineering, RAG with vector databases and semantic search, AI agents and orchestration, process automation (n8n/Zapier), web integration (APIs, JS/TS), evaluation, security, and deployment. Final project: designing and launching a business-ready AI-powered MVP from ideation to production.",
    },
    {
      date: "Sep 2017–Feb 2022",
      title: "Bachelor's in Computer Engineering",
      institution: "Universidad de Alicante",
      description:
        "Software Engineering specialization. High Academic Performance Group in English. Cambridge C1 Advanced certification.",
      link: "https://www.ua.es",
    },
    {
      date: "2019–2020",
      title: "Erasmus+ Exchange — Computer Science",
      institution: "Cracow University of Technology",
      description:
        "Semester abroad focused on Neural Networks and Artificial Intelligence.",
      link: "https://www.pk.edu.pl",
    },
  ],
  es: [
    {
      date: "Oct 2025–Ene 2026",
      title: "Máster en Desarrollo de IA",
      institution: "BIG school",
      description:
        "Programa intensivo y práctico centrado en construir productos con IA. Temas clave: fundamentos de LLMs e IA generativa, ingeniería de prompts, RAG con bases vectoriales y búsqueda semántica, agentes y orquestación, automatización de procesos (n8n/Zapier), integración en aplicaciones web (APIs, JS/TS), evaluación, seguridad y despliegue. Proyecto final: diseño y lanzamiento de un MVP con IA aplicable al negocio, desde la ideación hasta la puesta en producción.",
    },
    {
      date: "Sep 2017–Feb 2022",
      title: "Grado en Ingeniería Informática",
      institution: "Universidad de Alicante",
      description:
        "Especialidad en Ingeniería del Software. Grupo de Alto Rendimiento Académico en inglés. Certificación Cambridge C1 Advanced.",
      link: "https://www.ua.es",
    },
    {
      date: "2019–2020",
      title: "Erasmus+ — Ciencias de la Computación",
      institution: "Politechnika Krakowska",
      description:
        "Semestre de intercambio centrado en Redes Neuronales e Inteligencia Artificial.",
      link: "https://www.pk.edu.pl",
    },
  ],
};

export function getExperience(lang: Lang): ExperienceEntry[] {
  return experience[lang];
}

export function getEducation(lang: Lang): EducationEntry[] {
  return education[lang];
}
