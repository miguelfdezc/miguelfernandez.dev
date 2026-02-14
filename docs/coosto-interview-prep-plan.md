# Interview Prep Plan - Coosto 3rd Round (Problem Solving Test)

## Context
Miguel passed the 2nd round (Feb 11) with Maarten Swartjes (Software Dev Manager) and Pim Schreurs (Senior Frontend Dev). They explained the stack, team structure, and culture in detail. They're trying to accelerate the process.

## 3rd Round — CONFIRMED
- **Date:** Tuesday February 17th at 15:30
- **Location:** Alicante office (in person!)
- **Interviewers:** Francisco Soler Aracil (Tech Lead Sonar, in person) + Pim Schreurs (online)
- **Format:** Problem solving test with a small part of coding (doesn't need to run)
- **No laptop needed** — they provide materials
- **Duration:** 60 min interview + office tour with Francisco after. Reserve 1.5 hours.
- After this: a "Click" phase with Maarten, then final with Tessa HR.

## Key Stack Facts Learned (2nd interview)
- **Vue + TypeScript** — custom toolkit, NOT Nuxt
- **Vite** + **Vitest** (testing coverage is lacking — opportunity!)
- **Pinia** (main state management), **Vuex** only in some legacy/random parts
- **Shared component library** documented with VitePress (possibly Tailwind — unclear)
- **NestJS** backend (Miguel has NestJS experience from Doctomatic!)
- **6 dev teams** (SCRUM), Guilds (Frontend Guild, Backend Guild)
- **JIRA + Bitbucket**
- Position open to all levels (junior/medium/senior)

---

## 1. INTERVIEW FORMAT & DYNAMICS (from 2nd round experience)

**Language:** English (confirmed)

**Dynamic observed in 2nd round:**
- **Maarten led the conversation** - communicator, people person, asked most questions
- **Pim was quieter** - introverted, observed and asked targeted technical questions
- Both were genuinely warm, talked about culture and longevity (10-15 years there)
- Maarten mentioned music as a hobby

**3rd round (CONFIRMED):** Problem solving test with Francisco (Tech Lead Sonar, in person) + Pim (online). Small coding part that doesn't need to run. No laptop. Francisco has a full-stack/architecture background — expect broader engineering questions alongside Pim's frontend depth.

---

## 2. LIKELY QUESTIONS & PREPARED ANSWERS

### From Maarten (people/culture/motivation):

**Q: "Tell us about yourself / walk us through your experience"**
Suggested flow (3-4 min, don't ramble):
- Quick intro: Computer Engineering from UA, Erasmus in Poland (AI focus), based in Alicante
- Doctomatic: Full-stack startup, full code ownership from day one, testing culture (TDD), Docker, React + NestJS + Python
- INDITEX/Tempe: Senior Frontend in React, led team restructuring, mentored new devs, became the reference for task estimation, legacy migrations
- Token City (current): Senior Frontend, Vue + Nuxt (direct Coosto match!), only frontend engineer, dashboard architecture, Figma-to-code, multitenant SCSS system
- Currently doing a specialization in AI Development (private program, lifetime access - staying current with AI as a dev)
- Thread: progressive growth from full-stack startup → big corporate → current senior ownership → ready for a collaborative team environment

**Q: "Why are you looking to leave / why Coosto?"**
Keep consistent with what you told Tessa, but add Coosto-specific angles:
- "I'm looking for opportunities that combine growth with a well-structured environment. At Token City I've learned a lot being the sole frontend developer, but I miss working in a proper frontend team where I can both contribute and learn from others."
- "Coosto is interesting because it's that sweet spot - not a chaotic startup, not a rigid corporation. A mature product with real users, a proper engineering team, and using the stack I work with daily."
- "I've mostly worked remote, but honestly I've missed that in-person team connection. I think hybrid works really well when the company structures it intentionally - having an office to go to and real face-to-face collaboration, but with the flexibility of remote days."
- "I also liked hearing about the career growth program and mentorship structure from Tessa - having a clear path for development is something I value."
- Do NOT mention salary as a motivator
- Do NOT badmouth Token City

**Q: "Why do you consider yourself senior?"**
You already answered this well to Tessa. Reinforce:
- Full code ownership since Doctomatic (startup environment, no one to hand-hold)
- Hired as Senior at INDITEX/MetaEnlace, became the main frontend in my sub-team
- Mentored new developers via pair programming
- At Token City: sole frontend engineer, make all architectural decisions (SCSS multitenancy, migration strategies, dependency management)
- "For me seniority is about scope of ownership and decision-making, not just years. I try to actively push myself - I stay current with frontend trends, I go to meetups, I build my own projects to learn new things, I contribute to open source. I think what makes someone senior is that constant drive to grow and take on more responsibility, not just time passing."

**Q: "How do you work? Describe your ideal workflow"**
- Agile/Scrum across all my roles (maps to their daily standups)
- At INDITEX: proper sprints, estimations, Jira, code reviews
- Value clean code, testing, and documentation
- Comfortable with both autonomous work and collaboration
- "I prefer having clear sprint goals but freedom in how to implement"

**Q: "How do you handle disagreements / difficult situations?"**
- At INDITEX: had to negotiate task estimates with other departments, learned to defend technical decisions with data
- At Doctomatic: proactively improved development processes even when not asked
- "I believe in discussing technical decisions openly, presenting trade-offs, and being willing to be wrong"

**Q: "What do you know about Coosto?"**
Show you did research (but don't reveal the depth of your LinkedIn stalking):
- Social media marketing platform - Listen, Engage, Publish, Report, Discover modules
- Saw the EmotionAI launch (you can mention seeing it, Maarten posted about it proudly)
- ~100 people, offices in Eindhoven and Alicante
- Founded ~2008, bootstrapped, ISO certified
- "I'd love to hear more about the technical side from you both"

### From Pim (technical/frontend):

**Q: "What's your experience with Vue?"**
- Already addressed in 2nd round — they know Miguel uses Vue + Nuxt at Token City
- For 3rd round, focus on **depth**: Composition API patterns, composables, reactivity system internals
- **Key advantage now:** They DON'T use Nuxt (custom toolkit), so Miguel's plain Vue + Vite experience is equally relevant
- **Migration experience:** Nuxt 3→4 done, Vue 2→3 researched (they also have Vuex code not fully migrated — shared challenge)
- **NestJS experience from Doctomatic** = direct match with their backend!

**Q: "TypeScript experience?"**
- Using daily at Token City with Vue/Nuxt
- Used at INDITEX/Tempe with React (varying strictness levels depending on the project)
- Used at Doctomatic (full-stack with NestJS + React)
- Personal projects (portfolio built with Astro + TypeScript)
- "I've used TypeScript across most of my roles now - with varying levels of strictness depending on the project. I appreciate it for catching bugs early and making refactoring safer, especially in larger codebases."

**Q: "How do you approach testing?"**
- Strong testing background: Jest, Cypress, React Testing Library, Supertest, TDD at Doctomatic
- Set up the entire testing environment at Doctomatic from scratch (unit, e2e, UI)
- At INDITEX/Tempe: improved test coverage across multiple projects
- **Currently using Vitest at Token City** — actively improving test base and coverage
- **Migrated E2E from Cypress to Playwright at Token City** + used Playwright in personal projects (Healthspan)
- Used Storybook at INDITEX/Tempe for component documentation
- "I believe in pragmatic testing - critical paths need solid coverage, but not every utility needs 100% coverage. Right now I'm actually expanding test coverage at Token City using Vitest and setting up E2E tests."

**Q: "How do you stay up to date with frontend?"**
- Active in Alicante Frontend community (attend meetups regularly)
- Friends with the organizers who also run VueConf Madrid
- Open source contributions (Vitest Spanish translation, React, Vite, MDN, Astro)
- Doing an AI specialization program (lifetime access, staying current)
- Side projects: 10+ shipped products, always trying new tech

**Q: About state management / architecture**
- **Using Pinia right now at Token City** — hands-on daily
- Used Vuex before in university, courses, and personal projects — understand both
- Redux + React Context from React roles (INDITEX, Doctomatic) — different state management patterns
- "I've worked with several state management approaches - Redux and React Context in React, Vuex in earlier Vue projects, and now Pinia at Token City. I prefer Pinia's simpler API - no mutations, better TypeScript support, independent stores instead of nested modules. Having used different patterns helps me evaluate trade-offs."

---

## 3. QUESTIONS YOU SHOULD ASK THEM

### For Maarten (shows team/culture interest):
1. "How are the development teams structured? What does a typical sprint look like?"
2. "What does onboarding look like for a new team member?"
3. "How do the Alicante and Eindhoven teams collaborate day to day?" (shows you think about distributed team dynamics)
4. "What are the current priorities or challenges for the frontend team?"

### For Pim (shows technical depth + respect):
1. "What does the frontend stack look like? Vue version, do you use Nuxt, Pinia, Vitest, Vite...?" (lets them explain their setup, opens natural conversation where you can relate your experience with each tool)
2. "How do you handle component architecture? Do you have a design system or component library?"
3. "What does your CI/CD pipeline look like for frontend?" (you know it's Jenkins but let him explain)
4. "What's the frontend testing strategy currently?"

### Shows genuine interest:
5. "I saw the EmotionAI launch - that's really interesting. Is the frontend team involved in those AI features?"
6. "What would success look like for whoever fills this role in the first 3-6 months?"

---

## 4. YOUR COMPETITIVE ADVANTAGES (weave these in naturally)

1. **Vue + TypeScript daily** - not learning from scratch, already productive (and they DON'T use Nuxt, so plain Vue experience matches perfectly)
2. **Vue 2→3 migration researched** at Token City - same challenge Coosto faces with their Vuex code
3. **Knows both Vuex and Pinia** - used Vuex before, using Pinia now at Token City
4. **NestJS experience** from Doctomatic - direct match with their backend!
5. **Testing culture** - set up testing from scratch at Doctomatic. They admit lacking coverage = opportunity for Miguel to add value
6. **Only frontend dev at Token City** - proves full ownership capability, but wanting to be in a team shows maturity
7. **Alicante-based** - no relocation needed, already in the community
8. **Alicante Frontend meetups** - connected to the local frontend community (Marcos Urios goes too!)
9. **AI knowledge** - specialization in AI + shipped AI products, relevant for EmotionAI (which uses OpenAI)
10. **15-day notice** - can start quickly (they need to replace someone)
11. **Mentoring experience** - INDITEX pair programming, can eventually help grow the team
12. **Open source contributor** - Vitest, React, Vite docs shows community mindset
13. **Vitest + Playwright experience** - matches their Vitest stack, can help improve coverage
14. **Bitbucket experience** - used Bitbucket Pipelines at previous roles (they use Bitbucket)

---

## 5. THINGS TO AVOID

- **Don't reveal how much you know from Aitor** - say "from what I've read" or "from what Tessa mentioned"
- **Don't badmouth Token City** - frame it positively ("learned a lot being autonomous, now ready for team collaboration")
- **Don't oversell AI** - mention it as a bonus, not your primary identity (they're hiring a frontend dev)
- **Don't bring up salary** - let them bring it up, or save for after the technical round
- **Don't pretend to know more Vue than you do** - be honest about what you know vs what you've used extensively
- **Don't talk too much** - Pim is introverted, respect pauses, don't fill every silence
- **Don't mention you told Tessa 35K** if they ask about salary expectations - if pressed, say "I'd prefer to discuss specifics after we've both assessed the technical fit"
- **Don't mention your side projects / autonomo too prominently** - could signal you're not fully committed. If it comes up, frame it as "personal projects to keep learning"

---

## 6. TACTICAL TIPS

### For Francisco (in person — Tech Lead Sonar, full-stack/architecture background):
- He's based in Alicante, studied at UA — shared local connection, be natural about it
- His background is Solution Architecture (European Patent Office) — expect WHY questions about design decisions
- He values "building things and learning how they work" — show curiosity and builder mindset
- He's a Tech Lead managing a product team — he'll care about how you'd work within a team
- Mention your side projects naturally — he builds things too (Telegram bots, Raspberry Pi projects)
- He may ask broader engineering questions (not just Vue) — API design, data flow, system thinking

### For Pim (online — Senior Frontend Dev, 11+ years):
- Be technically precise, not hand-wavy
- Show respect for his 11+ years of experience
- If you don't know something, say so directly — he'll respect honesty over BS
- You can mention SudokuMaker if he asks about side projects ("I saw you built SudokuMaker, that's really cool") — shows you did your homework
- Don't try to impress with buzzwords — he's picky and will see through it
- Match his energy — if he's quiet, give concise answers to his questions

### General:
- **In person** at Alicante office — dress smart casual, arrive 10 min early
- No laptop needed — bring a pen just in case
- Interview is in English most likely — practice your key answers out loud beforehand
- Take notes when they explain problems — shows engagement
- Think out loud during problem solving — they want to see your reasoning process
- At the end, express clear interest: "I'm really excited about this opportunity"
- After the 60 min, Francisco will show you the office — be friendly, ask questions

---

## 7. COMMUNITY & VUE ECOSYSTEM (how to impress Pim naturally)

When asked "how do you stay up to date?" — deliver this as ONE clean paragraph, not a list of names:

> "Beyond my day job, I'm pretty active in the local community - I go to the Alicante Frontend meetups regularly and I've gotten to know the organizers well. Some of them are Vue contributors and they organize VueMadrid, which I'm attending this year. I also contribute to open source when I can - I helped translate the Vitest documentation to Spanish, and I've contributed to Vite and MDN docs too. I think staying connected to the community and giving back is important."

**DO:** Mention Alicante Frontend, open source contributions, VueMadrid tickets, "I think Marcos from your team goes too"
**DON'T:** Name-drop Vue Core members, mention Pinia creator unless Pinia comes up, list people like reading a CV — Pim is introverted and will see through social flexing.

**Frame Vue experience timeline positively:**
> "I started exploring Vue and its ecosystem back in university - even contributed to the Vite and Vitest translations. When I got to work with it professionally at Token City, it was a natural fit. Now with Nuxt on top, I'm comfortable with both the framework and the broader ecosystem."

---

## 8. VUE / PINIA / TS QUICK TECHNICAL REFRESHER

Key concepts Pim could casually ask about. Not deep-dive questions (that's the next interview), but showing you understand fundamentals:

### Vue 3 vs Vue 2 (relevant since they're migrating)
- **Composition API** (Vue 3) vs Options API (Vue 2): Composition uses `setup()`, `ref()`, `reactive()`, `computed()`, `watch()`. More flexible, better TS support, better code reuse via composables.
- **Composables** = reusable logic functions (like React hooks). Replace mixins from Vue 2.
- **`<script setup>`** = syntactic sugar for Composition API. Less boilerplate, auto-exposes to template.
- **Teleport** = render component DOM in different part of the page (like React Portals)
- **Fragments** = multiple root nodes (Vue 2 required single root)
- **Suspense** = handle async components with fallback UI
- Migration challenges: Vuex→Pinia, Options→Composition, filters removed, `$listeners`/`$attrs` merged, event bus removed, etc.

### Pinia (they use it)
- **Replacement for Vuex** in Vue 3 ecosystem (created by Eduardo San Martin Morote - the Spanish creator you know about via VueMadrid organizers)
- Key differences from Vuex:
  - No mutations (just state + getters + actions)
  - Better TypeScript support out of the box
  - Multiple stores without modules (each store is independent)
  - Composition API friendly (`useStore()`)
  - DevTools support
- Basic store: `defineStore('name', { state: () => ({}), getters: {}, actions: {} })`
- Can also use setup syntax: `defineStore('name', () => { const count = ref(0); return { count } })`

### TypeScript with Vue
- `defineProps<{ title: string }>()` for typed props
- `defineEmits<{ (e: 'update', value: string): void }>()` for typed events
- `ref<string>('')` for typed refs
- Generics in composables for reusable typed logic

### Key Vue Patterns Pim might value
- **Provide/Inject** for dependency injection (avoid prop drilling)
- **Slots** (named, scoped) for flexible component composition
- **v-model** on custom components (two-way binding pattern)
- **Lazy loading routes** with `defineAsyncComponent` or dynamic imports
- **Watchers** (`watch` vs `watchEffect`) - watch is explicit, watchEffect auto-tracks

### Performance (Pim is "picky")
- `v-once` for static content
- `shallowRef` / `shallowReactive` for large objects
- `computed` vs methods (caching)
- Virtual scrolling for large lists
- Code splitting via dynamic imports

### Their Stack vs Miguel's Experience (CONFIRMED from 2nd interview):
- **Vue + TypeScript (custom toolkit, no Nuxt)** = Vue + Vite daily at Token City, also plain Vue projects
- **Vitest** = using NOW at Token City, improving test coverage
- **Vuex** (still in parts) = used Vuex before, now uses Pinia — understands migration path
- **VitePress component docs (possibly Tailwind?)** = used Storybook at INDITEX (similar docs concept), Tailwind in portfolio site
- **NestJS** = used at Doctomatic (full-stack, built API endpoints)
- **Jenkins** = used at INDITEX/Tempe (DevOps managed, saw pipeline)
- **Sentry** = used at Doctomatic + own projects
- **Grafana** = implementing at Token City with new DevOps hire
- **JIRA** = used at INDITEX/Tempe
- **Bitbucket** = used Bitbucket Pipelines in previous roles
- **Playwright** = implementing at Token City + personal projects

---

## 9. AI TOOLS GUIDANCE

**Don't bring up AI coding tools (Copilot, Claude Code, Cursor) proactively.**
- Pim has 14+ years of experience, built skills without AI. Could see heavy AI reliance as a red flag.
- Your Master's in AI = product/domain knowledge (good to mention). Using AI to write code = different signal.
- Coosto builds AI features (EmotionAI) but that doesn't mean their devs use AI coding tools.

**If THEY ask about AI tools:**
> "Yes, I use tools like GitHub Copilot as a productivity aid - mainly for boilerplate, repetitive patterns, and exploring approaches. But I always review and understand what's generated. I think the important thing is having the fundamentals to know when the tool is wrong."

**DO:** Mention Master's in AI as product knowledge (relevant for EmotionAI/Discover)
**DON'T:** Say "I built X with Claude Code", "I use AI for most coding", or anything suggesting dependence
**Frame:** AI tools = one tool among many (like a linter), fundamentals come first

---

## 10. STACK MATCH TABLE (Coosto stack confirmed vs Miguel's experience)

| Their Stack (confirmed) | Miguel's Experience |
|---|---|
| **Vue + TypeScript (custom toolkit)** | Vue + Vite daily at Token City, also plain Vue projects |
| **Vitest** | Using NOW at Token City, improving test coverage |
| **Vuex** (still in parts) | Used Vuex before, now uses Pinia — understands both |
| **VitePress docs (possibly Tailwind?)** | Tailwind in portfolio site, Storybook at INDITEX (similar docs concept) |
| **NestJS** (backend) | Used at Doctomatic — built API endpoints, full-stack |
| **Jenkins** | Used at INDITEX/Tempe (DevOps managed, saw pipeline) |
| **Sentry** | Used at Doctomatic + own projects |
| **Grafana** | Implementing NOW at Token City with new DevOps hire |
| **JIRA** | Used at INDITEX/Tempe |
| **Bitbucket** | Used Bitbucket Pipelines in previous roles |
| **Playwright/E2E** | Implementing at Token City + personal projects (Healthspan) |
| **PHP/Lumen** (legacy) | Basic PHP/Laravel from university |
| **Docker/K8s** | Docker Compose at Doctomatic |
| **RabbitMQ** | Exposure at Doctomatic |

---

## 11. 30-SECOND ELEVATOR PITCH (if they say "tell us about yourself")

"I'm Miguel, a Senior Frontend Developer based here in Alicante. I studied Computer Engineering at the University of Alicante and did an Erasmus in Poland focused on AI. I've been working professionally for about 4 years now - I started full-stack at a health-tech startup in Barcelona called Doctomatic, where I set up the entire testing infrastructure and learned to own features end-to-end. Then I moved to INDITEX where I worked as Senior Frontend in React, leading a sub-team, mentoring new developers, and handling legacy migrations. Currently at Token City, I work with Vue and Nuxt daily - building their SaaS dashboard, creating landing pages from Figma designs, and I designed their multitenant styling architecture. I'm also doing a specialization in AI development to stay current with how AI is shaping our field. I'm really interested in Coosto because it's the kind of environment I thrive in - a mature product, a real team to collaborate with, and using the Vue stack I already work with every day."
