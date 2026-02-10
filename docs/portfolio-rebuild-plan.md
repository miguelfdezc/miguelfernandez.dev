# Portfolio Rebuild Plan — miguelfernandez.dev

> Date: February 2026
> Repo: New project (replace current porfolio.dev fork)
> Deploy: Vercel → miguelfernandez.dev

---

## Stack

- **Astro 5** — static-first, zero JS by default
- **Tailwind CSS 4** — utility-first styling
- **React islands** — interactive components only where needed (theme toggle, contact form, animations)
- **MDX content collections** — blog-ready from day one
- **TypeScript** — throughout

---

## Design Direction

- **Minimal dark + accent color** (teal/blue/green TBD)
- Dark-mode-first, light mode toggle available
- Single accent color — let project screenshots be the visual focus
- Subtle animations: fade-in on scroll, hover states, nothing flashy
- Professional dev portfolio vibe — "this person ships real products"

---

## Site Structure

### Single-page with anchor nav (`/`)

1. **Hero** — Name, title, availability badge, social links (LinkedIn, GitHub, Email)
   - Title: "Full-Stack Developer & AI Engineer"
   - Subtitle: "Building AI-powered products and web applications. Currently pursuing a Master's in AI Development."

2. **Projects** (5-6 featured) — Screenshot, title, description, tech tags, links (live + GitHub where public)
   - Healthspan — Full SaaS, 1,475 tests, AI features, payments (React, Vite, Supabase, TypeScript, Tailwind)
   - DeskBreak — Monetized Chrome extension, 12 break types (React, Chrome APIs, TypeScript, Tailwind)
   - PhotoHouseAI — AI real estate photo enhancement, 211 components, 16 DB models (Next.js, React 19, TypeScript, Tailwind)
   - Game Portrait — AI game-style artwork, 7 AI providers, payments (Next.js, Supabase, TypeScript, Tailwind)
   - Centro Dharma — Live client psychology center website (Astro, React, Tailwind) → centrodharma.es
   - Vibe Coding Platform — AI-powered web IDE, 9/10 code quality (Next.js 15, AI SDK, Zustand, TypeScript)
   - Band Finder — University thesis, original full-stack work (React Native) — keep as last project

3. **Experience** — Timeline cards
   - Current job (2024-Present) — name the company, frontend role
   - Indie Developer / Freelance — side projects + client work (Centro Dharma, DeskBreak, AI SaaS products)
   - Senior Frontend Developer (2023-2024) @ Tempe INDITEX Group
   - Full Stack Developer (2022-2023) @ Doctomatic
   - Frontend Developer Intern (2021) @ Aire Networks
   - *User will provide exact data from LinkedIn/CV*

4. **About Me** — Rewritten bio
   - Full-stack developer with 4+ years experience
   - AI integration across multiple products (OpenAI, Vercel AI SDK, Fal.ai, LangChain)
   - Monetized Chrome extension
   - AI-assisted development expertise
   - Master's in AI Development (in progress)
   - OSS contributions (Vitest, React, Vite, MDN, Astro docs translations)

5. **Contact** — Email, LinkedIn, GitHub links

### Blog route (`/blog`)

- MDX content collection set up and ready
- Empty for now — first post will be something like "How I Built a SaaS in 2 Weeks with AI"
- Route exists, shows "Coming soon" or empty state

---

## Project Screenshots

- Capture real screenshots from deployed Vercel apps
- Save as webp in `/public/projects/`
- Need screenshots for: Healthspan, PhotoHouseAI, Game Portrait, Centro Dharma, Vibe Coding Platform
- DeskBreak already has an image

---

## SEO & Meta

- Page title: "Miguel Fernández | Full-Stack Developer & AI Engineer"
- Meta description: "Full-stack developer building AI-powered products. Shipped SaaS apps, Chrome extensions, and client websites. Master's in AI Development."
- Open Graph tags for social sharing
- RSS feed at `/feed.xml`
- Sitemap generation (astro-sitemap)
- robots.txt

---

## Tech Details

- Content: hardcoded in components (projects, experience) + MDX files (blog)
- Icons: SVG components for tech tags (React, Next.js, TypeScript, Tailwind, Supabase, Astro, Chrome, AI)
- Fonts: Onest Variable (keep from current site) or Inter Variable
- Analytics: keep Datafast or switch
- Deploy: Vercel, same domain

---

## File Structure (planned)

```
miguelfernandez.dev/
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── Projects.astro
│   │   ├── ProjectCard.astro
│   │   ├── Experience.astro
│   │   ├── ExperienceItem.astro
│   │   ├── AboutMe.astro
│   │   ├── Contact.astro
│   │   ├── ThemeToggle.astro (React island)
│   │   ├── SocialLinks.astro
│   │   ├── TechTag.astro
│   │   └── icons/
│   │       ├── GitHub.astro
│   │       ├── LinkedIn.astro
│   │       ├── Mail.astro
│   │       ├── React.astro
│   │       ├── NextJS.astro
│   │       ├── TypeScript.astro
│   │       ├── Tailwind.astro
│   │       ├── Supabase.astro
│   │       ├── Astro.astro
│   │       ├── Chrome.astro
│   │       ├── AI.astro
│   │       ├── Vite.astro
│   │       └── ...
│   ├── content/
│   │   ├── config.ts
│   │   └── blog/
│   │       └── (empty, ready for posts)
│   ├── layouts/
│   │   ├── Layout.astro
│   │   └── BlogPost.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── blog/
│   │   │   ├── index.astro
│   │   │   └── [...slug].astro
│   │   └── feed.xml.ts
│   ├── styles/
│   │   └── global.css
│   └── data/
│       ├── projects.ts
│       └── experience.ts
├── public/
│   ├── projects/
│   │   ├── healthspan.webp
│   │   ├── deskbreak.webp
│   │   ├── photohouseai.webp
│   │   ├── game-portrait.webp
│   │   ├── centro-dharma.webp
│   │   ├── vibe-coding.webp
│   │   └── band-finder.webp
│   ├── favicon.ico
│   └── og-image.png
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

---

## What User Still Needs to Provide

- [ ] Current company name and exact title
- [ ] Full experience timeline from LinkedIn/CV
- [ ] Preferred accent color (teal, blue, green, or other)
- [ ] Updated profile photo (or keep current one)
- [ ] Any specific design references / portfolios they like
