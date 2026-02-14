# Coosto - Team Structure

## Development Organization (CONFIRMED from 2nd interview)
- **6 dev teams** running SCRUM
- **Maarten Swartjes** manages as Software Development Manager
- **Guilds system:** Frontend Guild, Backend Guild, etc. (cross-team knowledge sharing)
- Each team has: developers, QA, PM, 1-2 UX Designers
- Product Owner involvement — developers help prepare backlog, own stories

### Named Teams
- **Platform team** - infrastructure/platform work
- **Sonar team** - customer-facing modules (search engine, legal data scraping, sentiment/awareness/emotion analysis)
- **Frontend team** - Pim + the position Miguel is interviewing for
- (3 more teams, names unknown)

### Product Modules
- 4 main modules + shared module (shared settings)
- Sonar team: search engine → scrape data legally → show sentiment, awareness, emotion data
- EmotionAI uses OpenAI

## Known Team Members

### Leadership
- **Maarten Swartjes** - Software Development Manager (Netherlands, Horst)
- **Dominique van Roon** - IT Director
- **Ankie W.** - Product Manager

### Tech Leads
- **Jose Hernandez Milan** - Principal Engineer / Tech Lead (Spanish, worked in Dublin previously)
  - LinkedIn: linkedin.com/in/jose-hernández-milán-70978a58
  - Known for guiding colleagues on good practices
  - Balance between firmness and coaching
  - 3+ years managing dev teams, recruiting, mentoring
- **Francisco Soler Aracil** - Tech Lead, Sonar Team (Alicante, studied at UA, previously at European Patent Office)
- **Freek Maes** - Tech Lead (likely Dutch)
- 1 more Tech Lead (name unknown)

### Frontend Team (Miguel's target team)
- **Pim Schreurs** - Senior Frontend / Web Developer (Netherlands, 11+ years at Coosto)
- **Josep Ramon Camps Llado** - Frontend Developer
- **Wesley van der Sanden** - Frontend Developer (Netherlands)
- **Marcos Urios Gomez** - Software Developer / Frontend (Alicante, attends Alicante Frontend meetups, UA multimedia grad ~1997)
- **[Person leaving]** - The one Miguel would replace (name unknown)
- **Current composition:** 2 seniors + 1 medior
- **Hiring for:** All levels — junior/medium or senior (not necessarily senior)

### Backend Team (Aitor's team)
- **Aitor Rodriguez Sanz** - Backend Developer (Alicante, 4+ years)
- **Daniel Romero Martinez** - Backend Developer
- **Ivan S.** - Backend Software Engineer
- **Francisco Soler Aracil** - Tech Lead, Sonar Team (see Tech Leads section)

### Other
- **Boudy de Geer** - Gave an AI talk at Alicante Frontend meetups (Coosto employee)
- **Tessa Wassenberg-Huijssen** - Corporate Recruiter / HR Officer (Eindhoven)

## Headcount
- **Tech total:** 20-30 in Netherlands, ~10 in Alicante
- **Company total:** ~80-90 in Netherlands, ~10 in Alicante

## Office Distribution
- **Eindhoven:** HQ, some devs (Pim, Wesley, Freek likely)
- **Alicante:** Dev office (Aitor, Daniel, Ivan, Francisco, Marcos, Josep Ramon, Jose likely)

## Work Model (CONFIRMED from 2nd interview)
- Everything online but **Thursday = office/team day**
- Flexible day
- **At least 2 days at the office, maybe 3**
- Nobody is fully in-office (confirmed by Aitor)

## Miguel's Target Position
- Replacing a frontender who is leaving Pim's team
- Open to all levels (junior/medium/senior)
- Miguel would work closely with Pim

## Tech Stack (CONFIRMED from 2nd interview)

### Frontend
- **Vue + TypeScript** — new code, custom toolkit (NOT Nuxt!)
- **Vite** — build tooling
- **Vitest** — testing (they admit lacking coverage)
- **Pinia** — main state management
- **Vuex** — only in some legacy/random parts, not the main approach
- **Shared component library** — documented with VitePress (possibly Tailwind CSS — unclear, accent)
- **Modules in TypeScript**

### Backend
- **NestJS** (TypeScript)
- PHP (Lumen) — legacy services
- Go, Elixir
- MySQL, MongoDB
- Docker, Kubernetes
- RabbitMQ, Kafka
- Grafana (monitoring)

### DevOps / Infrastructure
- **Jenkins** for CI/CD (staging tests + production deploys)
- **Sentry** for error tracking and alerts
- **Grafana** for monitoring/alerts
- **Syslog** for logs
- Docker, Kubernetes (backend)
- **JIRA** for project management
- **Bitbucket** for code repositories
- CI/CD pipeline: QA perspective → UI perspective → green light to prod

## Methodology
- Agile/Scrum (6 teams)
- Sprint refinement, daily standup, weekly meetings
- Quarter plan for initiatives and ideas
- OKRs
- Maarten acts as Agile coach
