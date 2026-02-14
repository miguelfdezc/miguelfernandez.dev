# 2nd Interview Notes - Feb 11, 2026

## Attendees
- **Maarten Swartjes** (Software Development Manager)
- **Pim Schreurs** (Senior Frontend Developer)

## Overall
- **Duration:** 1h 05-10min (went over the scheduled hour — positive sign)
- **Flow:** Natural conversation. Maarten started with personal/hobbies, then experience, then culture/company. Pim joined with technical opinions. Miguel covered most prepared points.
- **Vibe:** Good. No awkward moments. At one point Miguel asked if he was talking too much — they said no.
- **What impressed them:** Miguel's Vue experience answer and testing background specifically stood out

## Interview Process (now confirmed)
1. HR with Tessa - DONE (Feb 9)
2. Maarten + Pim interview - DONE (Feb 11)
3. Case study - more in-depth tech, practical scenarios
4. "Click" phase - Hiring Manager Maarten, some more checks
5. Final with Tessa HR (yes/no decision)

## Pim's Behavior
- Explicitly said at the start he doesn't do this kind of interview thing, isn't used to judging, doesn't know what people usually say
- Visibly shy — more comfortable talking about tech than doing "interview" mode
- Asked Miguel's Vue vs React opinion — expected a strong stance, said he wouldn't judge either way
- Miguel gave diplomatic answer (worked with both, latest versions have similarities)

## Interview Flow
1. Maarten started with personal hobbies/interests (both sides shared)
2. Pim's disclaimer about not being used to interviewing/judging
3. Experience discussion — general conversation, Miguel covered most prepared points
4. Motivation / why leaving — talked about small vs big company experience, no growth at current role, Coosto looks like the intermediate sweet spot, likes the project
5. Technical opinions — Pim asked about Vue vs React, testing, general tech
6. NestJS came up — they mentioned backend uses it, Miguel said he's used it as fullstack (brief)
7. Maarten explained culture, company, way of working extensively
8. Miguel asked questions, they answered, offered more detail
9. Ended naturally after ~1h 10min

## What Miguel Shared About Himself
- Music (hobby)
- Has apps (side projects)
- Spare time courses since uni + AI specialization now
- Sports: CrossFit since last year, played basketball before
- Vue opinion/experience

## Stack Revealed (CONFIRMED from Pim)
- **Vue + TypeScript** - new code, no Nuxt (custom toolkit)
- **Vite** - build tooling
- **Vitest** - testing (but they admit lacking coverage)
- **Pinia** - main state management
- **Vuex** - only in some legacy/random parts, not the main approach
- **Shared component library** - documented with VitePress (possibly Tailwind CSS — didn't understand 100% due to accent)
- **NestJS** - backend services
- **Modules in TypeScript**
- **QA process** exists
- Note: They DON'T use Nuxt — custom toolkit instead

## Team Structure (CONFIRMED)
- **6 dev teams** running SCRUM
- **Platform team** - infrastructure/platform work
- **Sonar team** - customer-facing modules (search engine, scrape data legally, sentiment/awareness/emotion data)
- **Frontend team** - Pim + Miguel would be here
- Sprint refinement, daily standup, weekly meetings
- CI/CD pipeline with QA perspective, UI perspective checks → green light to prod
- **JIRA** for project management
- **Bitbucket** for code (not GitHub)
- Quarter plan for initiatives and ideas
- Each team has: QA, PM, 1-2 UX Designers
- **Guilds system:** Frontend Guild, Backend Guild, etc. (cross-team knowledge sharing)
- Current frontend needs: **2 seniors + 1 medior**, looking for **all 3 levels** (junior/medium or senior — not necessarily senior)

## Product/Module Details
- Search engine that scrapes data legally
- Sonar team builds the ability to search on that engine and show data: sentiment, awareness, etc.
- 4 modules + shared module (shared settings)
- EmotionAI uses OpenAI

## Cultural Details (CONFIRMED)
- **Training budget:** ~1K EUR, never actually declined a course as long as you can relate it to your work. Can expand budget if justified
- Conferences, Udemy courses encouraged
- Interact with other frontend teams via Guilds
- Work with UI/UX, PM, help prepare backlog, own stories, Product Owner involvement
- Can help out outside of frontend (not part of role but welcome)
- Collaborative environment — opinions to improve product are valued
- They have internal Talks
- People working there 10-15 years (Maarten and Pim confirm they love it)
- People move between departments: junior → senior → different role → junior again → senior
- **Tech headcount:** 20-30 in Netherlands, ~10 in Alicante
- **Office policy:** Everything online but **Thursday = office/team day**. Flexible day. At least 2 days at office, maybe 3
- Team bonding: summer BBQ in Holland, collaborative party, Christmas party, activities

## Offer & Timing
- The job offer has now been **published** — so between next phases they'll probably interview more people too
- This could also be a pressure tactic / bluff — unclear
- **Tessa will contact Miguel before end of week** (or Miguel can contact her to share his experience/impressions)
- They acknowledged Miguel has other interviews and will **try to accelerate the process**

## Aitor Follow-up (Feb 12)
- **Miguel was likely the FIRST candidate** — vacancy wasn't open when Aitor referred him
- **Aitor's case study was basic** — a Python function, validations, try/catch, comments. "Bastante junior"
- **BUT:** Aitor's was for junior backend, 3-4 years ago. Frontend medior-senior in 2026 will be significantly harder. Same format (case study, reasoning) but different level of content.
- **Probably from scratch** (Aitor doesn't remember exactly)
- **Alicante office has no managers** — "nos miman un poco" (pampered)
- **Testing angle:** They were specifically interested when Miguel talked about testing experience — could be part of case study. Aitor confirmed (Feb 12): "en el FE tienen algún tests pero creo que muchos menos que en el BE ahora mismo" — frontend tests are significantly lacking vs backend. Writing tests could be part of the case study.
- Aitor confirmed the general format is "un caso básico para ver cómo piensas" (case to see how you think) — but expect Vue-specific, more complex scenarios for this level

## Next Steps
- Email to Tessa scheduled for Thursday morning (done)
- Prepare for 3rd interview: **Case study + in-depth technical questions**
  - Likely with **Pim + Maarten** (Pim for tech, Maarten to guide conversation)
  - Focus on: reasoning out loud, clean code, validations, error handling, testing
  - May be from scratch (no starter code)
- "Click" phase details unclear — could be internal check between Maarten and HR, salary/bureaucratic discussion with Tessa, or general vibe assessment
