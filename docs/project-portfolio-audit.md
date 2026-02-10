# Miguel Fernandez - Project Portfolio Audit & Strategy Guide

> Generated: February 2026 | GitHub: miguelfdezc | Portfolio: miguelfernandez.dev
> 122 GitHub repos (53 public, 69 private) | 27 Vercel deployments | 65+ local projects
> Currently: Frontend dev (stagnant 2-3 years) | Starting: Master's in AI Development

---

## Table of Contents

1. [Situation & Strategy](#situation--strategy)
2. [Your Website Right Now](#your-website-right-now)
3. [Honest Project Rankings](#honest-project-rankings)
4. [Portfolio for Better Job](#portfolio-for-a-better-job)
5. [AI SaaS / Side Project Direction](#ai-saas--side-project-direction)
6. [Open Source Strategy](#open-source-strategy)
7. [Interview Prep](#interview-prep)
8. [Action Plan](#action-plan)
9. [Full Project Inventory](#full-project-inventory)

---

## Situation & Strategy

**Where you are:** Stuck at a boring frontend job with stagnant salary for 2-3 years. You have the skills of a senior full-stack engineer but the visibility of a mid-level frontend dev. You're starting a master's in AI Development (Big School + Racks Academy).

**Honest project count:** 3-4 real shipped products + several experiments/MVPs. Not "15+ shipped products" - that was over-hyped. The real ones are: DeskBreak Chrome Extension (monetized), Healthspan (AI-built in 2 weeks, very complete), Centro Dharma (live client site), and FotoCV/Game Portrait (working MVPs with payments).

**What to do:**
1. **Update portfolio + GitHub** with what you already have (honest framing) to land a better job
2. **Interview for senior frontend or full-stack roles** - you're massively underemployed
3. **Build ONE AI SaaS on the side** aligned with your master's coursework (triple duty: coursework + portfolio + business)
4. **Use AI-assisted development speed** to improve existing projects, not start new ones

**Your superpower:** You built Healthspan (complete SaaS, 1,475 tests, AI features, payments, mobile) in 2 weeks with Claude Code. That speed is itself a marketable skill. Companies in 2026 want developers who are effective with AI tools.

---

## Your Website Right Now

**miguelfernandez.dev is severely outdated.** Here's what it currently shows:

- **Title:** "Frontend Developer from Alicante, Spain" - underselling you
- **Projects:** Only 2 (DeskBreak Chrome extension + Band Finder)
- **Experience:** Tempe/INDITEX (2023-2024), Doctomatic (2022-2023), Aire Networks intern (2021)
- **No mention of:** AI projects, mobile apps, PhotoHouseAI, Healthspan, Centro Dharma, master's program, indie projects
- **No blog**, no case studies, no metrics, no testimonials
- **Generic "About Me"** section

**What someone sees visiting your site:** "Mid-level frontend dev who made a Chrome extension and a college project."

**What they should see:** "Full-stack developer with AI integration experience across 6+ products, live client work, and a master's in AI Development."

### Website Update Plan

**New title:** "Full-Stack Developer & AI Engineer" or "Software Engineer specializing in AI-powered applications"

**New project sections:**

1. **Featured Projects** (3-4 with screenshots + descriptions):
   - DeskBreak - Chrome extension with 12 break types, monetized (your most authentic work)
   - Healthspan - Full SaaS with 1,475 tests, AI features (frame as: "built with AI-assisted development")
   - Centro Dharma - Live client site (link to centrodharma.es)
   - PhotoHouseAI or Game Portrait - AI image product (show deployed app, describe architecture)

2. **More Projects** (smaller cards):
   - FotoCV - AI CV photos
   - Vibe Coding Platform - AI coding IDE
   - Game Portrait or FotoCV (whichever isn't featured above)
   - Band Finder - University TFG, original full-stack work

3. **Technical Writing / OSS** (brief section):
   - Vitest docs Spanish translation (your initiative)
   - React, Vite, MDN, Astro docs translations

4. **Blog** (even 1-2 posts):
   - "How I Built a SaaS with 1,475 Tests Using AI-Assisted Development"
   - "Building a Chrome Extension with React: Lessons from DeskBreak"

**Update experience:** Add "Indie Developer / Freelance" covering your side projects and client work (Centro Dharma).

---

## Honest Project Rankings

### S-Tier - Real Shipped Products

#### 1. Healthspan (couple-cuisine)
- **What:** Full SaaS for meal planning, recipes, nutrition tracking
- **Stack:** React 18, Vite, Supabase (auth + DB + edge functions + storage), Tailwind, Polar.sh payments, Capacitor mobile
- **Honest context:** Built in ~2 weeks with Claude Code / Opus 4.5. The code quality, testing, and architecture are genuinely excellent. But the story is "I'm very effective with AI tools" not "I struggled through months of engineering."
- **Why still S-Tier:**
  - 1,475+ unit/integration tests (Vitest + React Testing Library)
  - 23 Playwright E2E test files with axe-core accessibility testing
  - Full CI/CD: GitHub Actions (lint, typecheck, test, build, Lighthouse, security audit)
  - AI features: recipe generation, ingredient generation, voice input
  - Payments (Polar.sh), Sentry monitoring, GDPR compliance
  - 100+ components organized by feature
  - **Frame it as:** "I can ship production-quality software extremely fast using AI-assisted development"
- **GitHub:** Private
- **Deployed:** Vercel (healthspan)

#### 2. DeskBreak Chrome Extension
- **What:** Break reminder Chrome extension with 12 break types, monetized
- **Stack:** React + Chrome APIs (alarms, storage, notifications, offscreen) + Tailwind
- **Honest context:** This is your most authentic engineering work. You spent real time on it, solved real Chrome API problems, monetized it (some revenue), and iterated based on user feedback. The desktop/mobile/VSCode repos exist but are early experiments, not finished products. The "website" is a landing page.
- **Why S-Tier:**
  - Your own idea, your own code, your own struggles
  - 12 break types (stretch, eye rest, breathing, etc.)
  - 7-step onboarding wizard
  - YouTube integration for guided breaks
  - Stats tracking and personalization
  - Monetized product with real users
  - Chrome Extension APIs are a niche skill that not many devs have
  - **DO NOT claim "5 platforms"** - be honest about what's shipped vs experiments
- **GitHub:** Private
- **Deployed:** Vercel (landing page), Chrome Web Store (extension)

#### 3. Centro Dharma
- **What:** Psychology center website for a real client in Alicante
- **Stack:** Astro 5, React islands, Tailwind, shadcn/ui
- **Why S-Tier (for credibility):**
  - Live production site: centrodharma.es
  - Real client, real constraints, real deadlines
  - Astro 5 islands architecture (strategic hydration)
  - SEO: JSON-LD structured data, sitemap generation
  - GDPR: Cookiebot integration
  - Proves you can deliver for real businesses
- **GitHub:** Private
- **Deployed:** Vercel (centrodharma)

### A-Tier - Strong Portfolio Projects

#### 4. PhotoHouseAI (HousePhotoAI)
- **What:** AI-powered real estate photo enhancement platform
- **Stack:** Turborepo monorepo, Next.js App Router, React 19, Prisma + Drizzle, AI SDK (Fal.ai + Google Gemini), better-auth, Stripe, Biome
- **Deep dive findings:**
  - 211 components across the monorepo
  - 16 database models (User, Session, Organization, Member, ImageJob, CreditTransaction, etc.)
  - Enterprise-grade auth: 2FA, passkeys, RBAC, organization-based access, user banning
  - 5 payment providers (Stripe, Polar, Lemon Squeezy, Creem, DodoPayments)
  - Credit-based billing system with transaction tracking
  - 10 separate packages (@repo/ai, api, auth, database, i18n, logs, mail, payments, storage, utils)
  - Fal.ai for image processing (virtual staging, remodeling, sketch-to-photo)
  - Google Gemini for room type detection
  - Playwright E2E tests configured
- **Honest context:** Built on supastarter (purchased license), so can't open source. But the customization and AI features are yours. Architecture is genuinely enterprise-grade.
- **GitHub:** Private (supastarter license)

#### 5. Game Portrait
- **What:** AI platform that transforms photos into game-style artwork (Zelda, Persona, Final Fantasy, etc.)
- **Stack:** Next.js 14, Supabase, LemonSqueezy, S3 (AWS), PostHog
- **Deep dive findings:**
  - 7 AI providers integrated (OpenAI/DALL-E, Groq, Replicate, Anthropic, Google, Perplexity, DeepSeek)
  - LemonSqueezy payments fully implemented (187-line webhook handler)
  - Supabase magic links + Google OAuth
  - 6 database migration files (profiles, generations, chat, files, pdf, voice)
  - S3 for file storage
  - PostHog analytics
  - 151 component files
  - Credit system for image generation
  - ProseMirror rich text editor integration
- **Quality:** 8/10 code, 7/10 completeness. A real product.
- **GitHub:** Private
- **Deployed:** Vercel (game-portrait)

#### 6. Vibe Coding Platform
- **What:** AI-powered web development IDE (like a mini v0/Bolt)
- **Stack:** Next.js 15 (Turbopack), Vercel AI SDK (OpenAI, Vercel, Anthropic models), Vercel Sandbox, Zustand, SWR
- **Deep dive findings:**
  - Best code quality of all your projects (9/10)
  - 53 well-organized components (chat, file-explorer, commands-logs, preview, model-selector)
  - Sophisticated multi-store Zustand architecture (sandbox lifecycle, file explorer, error monitoring)
  - 137-line AI system prompt with detailed code generation instructions
  - Streaming AI responses with tool execution
  - Resizable panel layout (professional IDE feel)
  - 89-line CLAUDE.md with architecture documentation
  - Mobile-responsive with tab-based interface
- **Honest context:** No auth, no payments, no persistence (ephemeral sandboxes). It's a polished prototype/demo, not a monetized product.
- **GitHub:** Private
- **Deployed:** Vercel (vibe-coding-platform)

### B-Tier - Supporting Projects

| Project | Stack | Honest Assessment |
|---------|-------|-------------------|
| **FotoCV** | Next.js 15, Stripe, Astria AI, Supabase | Working MVP for AI CV photos (fotocv.es). 42 pages, 28 components, 10 server actions. Stripe works, Astria AI generates headshots. No tests. Medium code quality. Spanish market focus. |
| **Band Finder (TFG)** | JavaScript (3 repos: API + App + Backoffice) | Your university degree thesis. Original full-stack work, no AI assistance. Shows foundational engineering. Public repos. Old (2021-2023) but honest. |
| **Custom Landings** | Astro 5, React islands, i18n | Clean landing page for your design service. Good code quality, small codebase. |
| **TourGuideAI** | Next.js, Firebase, Stripe | AI travel guide. Multiple versions built. Had some traction. |
| **Indie Hacker Game** | Phaser + Three.js | Fun 2D platformer + 3D version. Good conversation starter. |
| **FitChef** | Expo, React Native | Recipe/nutrition mobile app. |
| **Music Songlist** | React, Tailwind | Personal passion project. |
| **fullstack-assignment** | TypeScript | **PUBLIC (2 stars).** Completed fullstack hiring assessment. One of your best public repos. |
| **Demo_Testing** | TypeScript | Full-stack school mgmt app. Technical assessment (Oct 2025, recent). |
| **Test Dev (Agile Monkeys)** | JavaScript | Frontend technical assessment for The Agile Monkeys. |
| **Vitest Docs ES** | TypeScript | **PUBLIC (2 stars).** Spanish translation of vitest.dev. Your own OSS initiative. |

### Abandoned / Not Real Products

| Project | Honest Status |
|---------|--------------|
| **ObraGest** | **ABANDONED.** Co-founder (architect) left. Good architecture (Expo + Supabase + RevenueCat) but dead project. Don't showcase as active. |
| **Construction Reporting** | Part of ObraGest cluster. Also abandoned. |
| **PlanMark** | Unclear status. Similar stack to ObraGest. |
| **ImgStudioAI** | **Just a landing page.** Built on Shipixen template. No actual backend or product. Don't showcase as a product. |
| **DeskBreak Desktop** | Early Electron experiment. Not finished. |
| **DeskBreak Mobile** | Early Expo experiment. Not finished. |
| **DeskBreak VS Code** | Not even started. |
| **LeadGeneratorList** | Next.js + Prisma. Unclear if active. |
| **ProductizedAgencies** | Next.js + Prisma. Unclear if active. |
| **AI Branding Images** | Old (2024), unclear status. |

### C-Tier - Skip for Portfolio

- Tutorial clones (medium-clone, amazon-clone, covid-tracker)
- Course exercises (Flutter, Fullstack Open, Udemy, Wes Bos)
- University projects (Java, C, Assembly, C#)
- Purchased boilerplates (ship-fast, wrapfast) - NEVER showcase these
- Translation forks - mention as OSS contributions but don't feature as projects

---

## Portfolio for a Better Job

You're not looking for any job - you're trying to escape a plateau. The pitch is different.

### Your Interview Story

> "I'm a full-stack developer with 3+ years of production experience. On the side, I've shipped a monetized Chrome extension, built a complete SaaS with 1,475 tests using AI-assisted development, and delivered client websites. I've integrated AI (OpenAI, LangChain, Fal.ai, Vercel AI SDK) into 6+ products. I'm currently doing a master's in AI Development to deepen my expertise. I'm looking for a senior role where I can combine frontend/full-stack skills with AI engineering."

### For Senior Frontend Roles

| # | Project | What It Proves |
|---|---------|----------------|
| 1 | **DeskBreak Extension** | Chrome API expertise, React in constrained environments, onboarding flows, real monetized product |
| 2 | **Healthspan** | Testing culture (1,475 tests), component architecture, React Hook Form + Zod, accessibility (axe-core), performance (Lighthouse CI) |
| 3 | **Centro Dharma** | Production client site, Astro 5 islands, SEO, GDPR, real constraints |
| 4 | **Vibe Coding Platform** | Best code quality (9/10), sophisticated state management (Zustand), streaming AI, modern React patterns |
| 5 | **Custom Landings** | Clean Astro 5 + React islands, i18n, small readable codebase |

**Key talking points:**
- "I built and monetized a Chrome extension - 12 break types, onboarding wizard, YouTube integration"
- "I maintain 1,475+ tests including E2E with accessibility testing"
- "I have a live client site in production with SEO and GDPR compliance"
- "I'm effective with AI-assisted development - I can ship a complete SaaS in 2 weeks"

### For Senior Full-Stack Roles

| # | Project | What It Proves |
|---|---------|----------------|
| 1 | **Healthspan** | Supabase backend, AI edge functions, payment webhooks, CI/CD pipeline |
| 2 | **PhotoHouseAI** | Monorepo (10 packages), Prisma + Drizzle, enterprise auth, 5 payment providers, 16 DB models |
| 3 | **Game Portrait** | 7 AI providers, LemonSqueezy payments, S3 storage, Supabase + PostHog |
| 4 | **Band Finder (TFG)** | Classic REST API + frontend + admin panel (3 repos), your original work |
| 5 | **FotoCV** | Working MVP with Stripe + AI (Astria), end-to-end product |

**Key talking points:**
- "I've integrated 7 different AI providers in a single product"
- "I've built a Turborepo monorepo with 10 shared packages"
- "I have 3 completed technical assessments from real hiring processes (one is public with 2 stars)"

---

## AI SaaS / Side Project Direction

You're starting a master's in AI Development. Whatever you build should serve triple duty: **coursework + portfolio + potential business.**

### Options

| Direction | Pros | Cons |
|-----------|------|------|
| **AI SaaS product** | Can become a real business. Shows end-to-end product skills. Aligns with master's. | Need to focus on ONE thing and market it. |
| **AI automation agency** | Immediate revenue potential. Clients pay well. | Service business, not scalable. Requires sales/marketing. |
| **AI MVPs for clients** | Fast cash, uses your "build in 2 weeks" superpower. | Client work is trading time for money. |

### My recommendation

**Build ONE AI SaaS that's genuinely useful to you or people you know.** Not a copy of ChatGPT, not another "AI wrapper." Something specific:

- Healthspan already has AI - could you expand it into a proper health/wellness AI platform? (Break reminders from DeskBreak + meal planning + fitness tracking)
- Something from your master's coursework that solves a real problem
- An AI tool for developers (you've already built Vibe Coding Platform - that space is hot)
- An AI tool for a specific industry you know (construction from ObraGest? music from your guitar/songlist projects?)

**Key principle:** Don't build a new product just to have a new product. Build something where you have a distribution advantage or domain expertise.

---

## Open Source Strategy

### Make Public This Week (Zero risk)

| Project | Action |
|---------|--------|
| **Indie Hacker Game** | Make repo public as-is. Fun, shareable, no secrets. |
| **DeskBreak Chrome Extension** | Remove API keys, add `.env.example`, make public. This is YOUR authentic code. |

### Already Public (Leverage these)

| Project | Stars | Action |
|---------|-------|--------|
| **fullstack-assignment** | 2 | Share in job applications proactively. Proves you pass technical tests. |
| **vitest-docs-es** | 2 | Add to resume/LinkedIn as OSS contribution. |
| **Band Finder** (3 repos) | 1 each | Already public. Mention as "university thesis, original full-stack work." |

### Improve Then Publish

| Project | What to do | Time with AI |
|---------|-----------|-------------|
| **Healthspan** (sanitized) | Remove secrets, add `.env.example`, write README with architecture diagram | 1-2 days |
| **DeskBreak Extension** | Add Vitest tests, improve README | 2-3 days |

### Keep Private

- PhotoHouseAI (supastarter license)
- Ship-fast, WrapFast (purchased boilerplates)
- Centro Dharma (client business data)
- Technical assessments with company names (sanitize first)

### Mention as OSS Contributions (Resume/LinkedIn)

- vitest-docs-es - Spanish translation (your initiative, 2 stars)
- es.reactjs.org - React docs Spanish translation
- vitejs-docs-es - Vite docs Spanish translation
- MDN translated-content - MDN Spanish translations
- astro-docs - Astro docs contributions

---

## Interview Prep

### Completed Technical Assessments (Ready to share)

| Assessment | Context | GitHub | Notes |
|-----------|--------|--------|-------|
| **fullstack-assignment** | Fullstack position skill assessment | **PUBLIC (2 stars)** | Share this link in applications. |
| **test-dev_miguel-fernandez** | The Agile Monkeys - Frontend test | Private | Sanitize company references if sharing. |
| **Demo_Testing** | School management app (Oct 2025) | Private | Recent. Full-stack. Shows current skill level. |

### "Show Me Your Code" Cheat Sheet

| Question | Show This |
|----------|-----------|
| "Show me testing" | Healthspan - 1,475 tests, Vitest + RTL + Playwright + axe-core |
| "Show me component architecture" | Healthspan - 100+ components by feature, custom hooks |
| "Show me a full-stack project" | Band Finder (3 repos, TFG) or Game Portrait |
| "Show me a take-home assessment" | fullstack-assignment (public) or Demo_Testing |
| "Show me mobile dev" | FitChef (Expo + React Native) |
| "Show me modern React" | PhotoHouseAI (React 19, App Router) |
| "Show me production code" | Centro Dharma (centrodharma.es) |
| "Show me AI integration" | Game Portrait (7 AI providers) or Healthspan (AI edge functions) |
| "Show me state management" | Vibe Coding Platform (Zustand multi-store, 9/10 code quality) |

### Numbers to Know

- 1,475 tests (Healthspan)
- Monetized Chrome extension (DeskBreak)
- Live client site (centrodharma.es)
- 7 AI providers in one product (Game Portrait)
- 211 components + 16 DB models (PhotoHouseAI)
- 10-package monorepo (PhotoHouseAI)
- 3 completed technical assessments
- Master's in AI Development (in progress)
- AI-assisted development: complete SaaS in 2 weeks

---

## Action Plan

### This Week (Low effort, high impact)

- [ ] Make Indie Hacker Game repo public on GitHub (5 minutes)
- [ ] Make DeskBreak Chrome Extension repo public (remove env vars first)
- [ ] Update GitHub profile README with tech stack badges and links to deployed products
- [ ] Add OSS doc translations to LinkedIn

### This Month (Portfolio overhaul)

- [ ] **Rewrite miguelfernandez.dev** completely:
  - New title: "Full-Stack Developer & AI Engineer"
  - Featured projects: DeskBreak, Healthspan, Centro Dharma, PhotoHouseAI/Game Portrait
  - Add experience section including indie/freelance work
  - Add master's program mention
  - Add 1 blog post
- [ ] Sanitize and publish Healthspan (or subset) on GitHub
- [ ] Use AI speed to add tests to DeskBreak extension (2-3 days)
- [ ] Start interviewing for senior roles

### This Quarter (Career + education + side project)

- [ ] Land a better job (senior frontend or full-stack)
- [ ] Progress through master's coursework
- [ ] Pick ONE AI SaaS concept from master's to build as side project
- [ ] Write 1-2 blog posts about your AI-assisted development workflow

### What NOT to Do

- Don't claim "5 platforms" for DeskBreak (it's 1 product + experiments)
- Don't showcase purchased boilerplates (ship-fast, wrapfast, supastarter)
- Don't list ObraGest as active (it's abandoned)
- Don't call ImgStudioAI a product (it's a landing page)
- Don't start more new side projects until you've polished existing ones
- Don't make university/course repos public
- Don't stay at your current job out of inertia

---

## Full Project Inventory

### All Projects with Honest Status

| Project | Stack | Last Active | GitHub | Vercel | Status |
|---------|-------|-------------|--------|--------|--------|
| Healthspan | React, Vite, Supabase, Polar.sh | 2026-02-06 | Private | Yes | S-Tier. Complete SaaS. AI-built in 2 weeks. |
| DeskBreak Extension | React, Chrome APIs | 2025-10-17 | Private | - | S-Tier. Monetized. Your authentic work. |
| DeskBreak Landing | Next.js, Firebase, Stripe | 2025-11-22 | Private | Yes | Landing page for the extension. |
| Centro Dharma | Astro 5, React islands | 2025-12-15 | Private | Yes | S-Tier. Live client site. |
| PhotoHouseAI | Turborepo, Next.js, React 19, Prisma | 2025-12-09 | Private | - | A-Tier. 211 components, 16 DB models. Supastarter-based. |
| Game Portrait | Next.js 14, Supabase, 7 AI providers | 2025-11-10 | Private | Yes | A-Tier. Full SaaS with payments. |
| Vibe Coding Platform | Next.js 15, AI SDK, Vercel Sandbox | 2025-09-22 | Private | Yes | A-Tier. Best code quality (9/10). Prototype. |
| FotoCV | Next.js 15, Stripe, Astria AI | 2025-12-09 | Private | Yes | B-Tier. Working MVP. No tests. |
| Band Finder (3 repos) | JavaScript (API+App+Backoffice) | 2023-03-07 | **Public** | - | B-Tier. University TFG. Original work. |
| fullstack-assignment | TypeScript | 2023-01-23 | **Public (2★)** | - | B-Tier. Completed tech assessment. |
| Demo_Testing | TypeScript | 2025-10-16 | Private | - | B-Tier. Recent tech assessment. |
| Test Dev (Agile Monkeys) | JavaScript | 2024-05-26 | Private | - | B-Tier. Frontend tech assessment. |
| Custom Landings | Astro 5, React, i18n | 2025-12-15 | Private | Yes | B-Tier. Clean code. |
| TourGuideAI | Next.js, Firebase, Stripe | 2025-11-07 | Private | Yes | B-Tier. AI travel guide. |
| Indie Hacker Game | Phaser, Three.js | 2025-11-10 | Private | Yes | B-Tier. Fun. Make public. |
| Vitest Docs ES | TypeScript | 2024-02-19 | **Public (2★)** | - | B-Tier. Your OSS initiative. |
| Music Songlist | React | 2025-07-30 | Private | Yes | B-Tier. Personal project. |
| FitChef | Expo, React Native | 2025-04-28 | Private | - | B-Tier. Mobile app. |
| ObraGest | Expo, React Native, Supabase | 2025-09-30 | Private | - | **ABANDONED.** Co-founder left. |
| PlanMark | Expo, React Native, Supabase | 2025-09-25 | Private | - | Unclear status. |
| ImgStudioAI | Next.js (Shipixen template) | 2025-06-07 | Private | Yes | **Landing page only.** No actual product. |
| DeskBreak Desktop | Electron, React | 2025-10-18 | Private | - | Early experiment. Unfinished. |
| DeskBreak Mobile | Expo, React Native | 2025-10-20 | Private | - | Early experiment. Unfinished. |
| DeskBreak VS Code | - | - | Private | - | Not started. |
| RapidLandings | Next.js | 2025-12-14 | Private | Yes | Landing page service. |
| LeadGeneratorList | Next.js, Prisma | 2024-10-09 | Private | Yes | Unclear status. |
| ProductizedAgencies | Next.js, Prisma | 2024-10-09 | Private | Yes | Unclear status. |
| AI Branding Images | Next.js, OpenAI, Stripe | 2024-05-16 | Private | - | Old. Unclear status. |
| AI Chat Gifts | React, Firebase | 2024-07-03 | Private | Yes | Old. |
| v0-archi-report | TypeScript | 2025-09-25 | Private | Yes | Architecture tool. |
| HeartStoneApp | Ionic, TypeScript | 2020-05-05 | Public | - | C-Tier. Old. |
| Medium Clone | Next.js | 2022-08-15 | Public | Yes | C-Tier. Tutorial. |
| Various course repos | Flutter, React Native, etc. | Various | Mixed | - | C-Tier. Skip. |
| Various doc forks | React/Vite/MDN/Astro | Various | Public | - | Mention as OSS contributions only. |
| University repos | Java, C, Assembly, C# | 2017-2021 | Private | - | C-Tier. Never showcase. |

### Vercel Deployments (All 27)

healthspan, centrodharma, custom-landings, tourguideai, deskbreak, rapidlandings, game-portrait, fotocv, ai-chat-gifts, ai-travel-guide, indie-hacker-game, porfolio-dev, imgstudioai, productizedagencies, medium-clone, leadgeneratorlist, v0-open-in-v0, miguelfernandez-dev, indie-hacker-game-3d, clean-professional-online-presence, nextjs-dashboard, nextjs-blog, v0-archi-report-dalux-alternative, vibe-coding-platform, test-dev-miguel-fernandez, page-title-this-is-the-tagline-of-your-website, music-songlist

---

*You don't need more projects. You need to make your existing work visible, land a better job, and pick ONE AI SaaS to focus on alongside your master's. The code is there. The skills are there. The gap is presentation.*
