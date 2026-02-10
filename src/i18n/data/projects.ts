import ReactIcon from "@/components/icons/React.astro";
import NextJSIcon from "@/components/icons/NextJS.astro";
import TypeScriptIcon from "@/components/icons/TypeScript.astro";
import TailwindIcon from "@/components/icons/Tailwind.astro";
import SupabaseIcon from "@/components/icons/Supabase.astro";
import AstroIcon from "@/components/icons/AstroIcon.astro";
import ChromeIcon from "@/components/icons/Chrome.astro";
import AIIcon from "@/components/icons/AI.astro";
import ViteIcon from "@/components/icons/Vite.astro";

import JavaScriptIcon from "@/components/icons/JavaScript.astro";
import ReactNativeIcon from "@/components/icons/ReactNative.astro";
import NodeJSIcon from "@/components/icons/NodeJS.astro";
import type { Lang } from "../ui";

interface Tag {
  name: string;
  class: string;
  icon: any;
}

const TAGS: Record<string, Tag> = {
  REACT: {
    name: "React",
    class: "bg-sky-950/80 text-sky-300 border border-sky-800/50",
    icon: ReactIcon,
  },
  NEXT: {
    name: "Next.js",
    class: "bg-gray-800 text-gray-200 border border-gray-700/50",
    icon: NextJSIcon,
  },
  TYPESCRIPT: {
    name: "TypeScript",
    class: "bg-blue-950/80 text-blue-300 border border-blue-800/50",
    icon: TypeScriptIcon,
  },
  TAILWIND: {
    name: "Tailwind",
    class: "bg-cyan-950/80 text-cyan-300 border border-cyan-800/50",
    icon: TailwindIcon,
  },
  SUPABASE: {
    name: "Supabase",
    class: "bg-emerald-950/80 text-emerald-300 border border-emerald-800/50",
    icon: SupabaseIcon,
  },
  ASTRO: {
    name: "Astro",
    class: "bg-orange-950/80 text-orange-300 border border-orange-800/50",
    icon: AstroIcon,
  },
  CHROME: {
    name: "Chrome APIs",
    class: "bg-yellow-950/80 text-yellow-300 border border-yellow-800/50",
    icon: ChromeIcon,
  },
  AI: {
    name: "AI SDK",
    class: "bg-purple-950/80 text-purple-300 border border-purple-800/50",
    icon: AIIcon,
  },
  VITE: {
    name: "Vite",
    class: "bg-violet-950/80 text-violet-300 border border-violet-800/50",
    icon: ViteIcon,
  },

  JAVASCRIPT: {
    name: "JavaScript",
    class: "bg-yellow-950/80 text-yellow-300 border border-yellow-800/50",
    icon: JavaScriptIcon,
  },
  REACT_NATIVE: {
    name: "React Native",
    class: "bg-sky-950/80 text-sky-300 border border-sky-800/50",
    icon: ReactNativeIcon,
  },
  NODE: {
    name: "Node.js",
    class: "bg-green-950/80 text-green-300 border border-green-800/50",
    icon: NodeJSIcon,
  },
};

export interface Project {
  title: string;
  description: string;
  link?: string;
  github?: string | null;
  image: string;
  tags: Tag[];
}

interface ProjectBase {
  title: string;
  link?: string;
  github?: string | null;
  image: string;
  tags: Tag[];
}

interface ProjectDescriptions {
  en: string;
  es: string;
}

const projectData: { base: ProjectBase; descriptions: ProjectDescriptions }[] =
  [
    {
      base: {
        title: "Healthspan",
        link: "https://usehealthspan.com",
        github: null,
        image: "/projects/healthspan.webp",
        tags: [
          TAGS.REACT,
          TAGS.VITE,
          TAGS.SUPABASE,
          TAGS.TYPESCRIPT,
          TAGS.TAILWIND,
          TAGS.AI,
        ],
      },
      descriptions: {
        en: "Full SaaS health platform with 1,475 tests, AI-powered features, and integrated payments. Built from the ground up as a comprehensive health management solution.",
        es: "Plataforma SaaS de salud completa con 1.475 tests, funciones con IA y pagos integrados. Construida desde cero como solución integral de gestión de salud.",
      },
    },
    {
      base: {
        title: "DeskBreak",
        link: "https://www.deskbreak.app",
        github: null,
        image: "/projects/deskbreak.webp",
        tags: [TAGS.REACT, TAGS.CHROME, TAGS.TYPESCRIPT, TAGS.TAILWIND],
      },
      descriptions: {
        en: "Monetized Chrome extension helping desk workers stay healthy with 12 break types, customizable reminders, and ergonomic exercises. Designed for seamless integration into daily browsing.",
        es: "Extensión de Chrome monetizada que ayuda a trabajadores de escritorio a mantenerse sanos con 12 tipos de descanso, recordatorios personalizables y ejercicios ergonómicos.",
      },
    },
    {
      base: {
        title: "PhotoHouseAI",
        link: "https://housephotoai.com",
        github: null,
        image: "/projects/photohouseai.webp",
        tags: [TAGS.NEXT, TAGS.REACT, TAGS.TYPESCRIPT, TAGS.TAILWIND, TAGS.AI],
      },
      descriptions: {
        en: "AI real estate photo enhancement platform with 211 components and 16 database models. Transforms property photos using AI for professional real estate listings.",
        es: "Plataforma de mejora de fotos inmobiliarias con IA, 211 componentes y 16 modelos de base de datos. Transforma fotos de propiedades con IA para anuncios profesionales.",
      },
    },
    {
      base: {
        title: "Game Portrait",
        link: "https://gameportrait.com",
        github: null,
        image: "/projects/game-portrait.webp",
        tags: [TAGS.NEXT, TAGS.SUPABASE, TAGS.TYPESCRIPT, TAGS.TAILWIND, TAGS.AI],
      },
      descriptions: {
        en: "AI game-style artwork generator integrating 7 AI providers with payments. Users upload photos and receive custom game-inspired portraits powered by multiple AI models.",
        es: "Generador de retratos estilo videojuego con IA, integrando 7 proveedores de IA y pagos. Los usuarios suben fotos y reciben retratos personalizados creados por múltiples modelos de IA.",
      },
    },
    {
      base: {
        title: "Centro Dharma",
        link: undefined,
        github: null,
        image: "/projects/centro-dharma.webp",
        tags: [TAGS.ASTRO, TAGS.REACT, TAGS.TAILWIND],
      },
      descriptions: {
        en: "Client website for a psychology center in Alicante. Astro 5 islands architecture, JSON-LD structured data, sitemap generation, and GDPR-compliant cookie consent.",
        es: "Web para un centro de psicología en Alicante. Arquitectura Astro 5 islands, datos estructurados JSON-LD, generación de sitemap y consentimiento de cookies GDPR.",
      },
    },
    {
      base: {
        title: "FotoCV",
        link: "https://fotocv.es",
        github: null,
        image: "/projects/fotocv.webp",
        tags: [TAGS.NEXT, TAGS.AI, TAGS.TYPESCRIPT, TAGS.TAILWIND],
      },
      descriptions: {
        en: "AI-powered professional headshot generator for CVs and LinkedIn. Stripe payments, Astria AI for photo generation, and 10 server actions handling the full pipeline.",
        es: "Generador de fotos profesionales con IA para CVs y LinkedIn. Pagos con Stripe, Astria AI para generación de fotos y 10 server actions gestionando todo el pipeline.",
      },
    },
    {
      base: {
        title: "TourGuideAI",
        link: "https://tourguideai.app",
        github: null,
        image: "/projects/tourguideai.webp",
        tags: [TAGS.NEXT, TAGS.AI, TAGS.TYPESCRIPT, TAGS.TAILWIND],
      },
      descriptions: {
        en: "AI travel audio guide SaaS with GPT-4o tour generation, ElevenLabs text-to-speech narration, Google Maps routing, and Stripe payments across 3 subscription tiers. 114 cities in the database.",
        es: "SaaS de audioguías de viaje con IA usando GPT-4o para generación de tours, narración con ElevenLabs, rutas en Google Maps y pagos con Stripe en 3 planes de suscripción. 114 ciudades en la base de datos.",
      },
    },
    {
      base: {
        title: "Custom Landings",
        link: "https://customlandings.com",
        github: null,
        image: "/projects/custom-landings.webp",
        tags: [TAGS.ASTRO, TAGS.REACT, TAGS.TYPESCRIPT, TAGS.TAILWIND],
      },
      descriptions: {
        en: "Bilingual landing page for my freelance web development service. Astro 5 islands architecture, 14 animated sections with Framer Motion, form validation with Zod, and PostHog analytics.",
        es: "Landing page bilingüe para mi servicio freelance de desarrollo web. Arquitectura Astro 5 islands, 14 secciones animadas con Framer Motion, validación de formularios con Zod y analítica con PostHog.",
      },
    },
    {
      base: {
        title: "Indie Hacker Game",
        link: "https://indiehackergame.com",
        github: null,
        image: "/projects/indie-hacker-game.webp",
        tags: [TAGS.JAVASCRIPT, TAGS.VITE, TAGS.SUPABASE],
      },
      descriptions: {
        en: "Startup-themed 2D platformer built with vanilla JavaScript and Canvas. Collect MRR, squash bugs, and reach Product-Market Fit. 6 playable indie hacker characters and Supabase leaderboard.",
        es: "Plataformas 2D temático de startups con JavaScript vanilla y Canvas. Recoge MRR, aplasta bugs y alcanza el Product-Market Fit. 6 personajes indie hackers jugables y leaderboard con Supabase.",
      },
    },
    {
      base: {
        title: "Band Finder",
        link: "http://hdl.handle.net/10045/121389",
        github: null,
        image: "/projects/band-finder.webp",
        tags: [TAGS.REACT_NATIVE, TAGS.NODE, TAGS.TYPESCRIPT],
      },
      descriptions: {
        en: "University thesis project (grade: 10/10, candidate for Honours) — a social network for musicians to find band members, jam sessions, and collaborations based on proximity and musical interests.",
        es: "Proyecto de fin de grado (nota: 10/10, candidato a Matrícula de Honor) — red social para músicos donde encontrar miembros de banda, jams y colaboraciones según proximidad e intereses musicales.",
      },
    },
  ];

export function getProjects(lang: Lang): Project[] {
  return projectData.map(({ base, descriptions }) => ({
    ...base,
    description: descriptions[lang],
  }));
}
