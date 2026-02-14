# INTERVIEW CHEATSHEET - 3rd Round (Problem Solving Test)
## Tuesday Feb 17 at 15:30 — Alicante Office
## With: Francisco Soler Aracil (Tech Lead Sonar, in person) + Pim Schreurs (online)

---

### THEIR CONFIRMED STACK (from 2nd interview)
- Vue + TypeScript — custom toolkit, NOT Nuxt
- Vite (build)
- Vitest (testing — they lack coverage!)
- Pinia (main), Vuex only in some legacy parts
- Shared component library + VitePress docs (possibly Tailwind? unclear)
- NestJS backend (you used this at Doctomatic!)
- Jenkins CI/CD, Sentry, Grafana
- JIRA + Bitbucket
- 6 dev teams, SCRUM, Guilds system

---

### YOUR STACK MATCHES TO HIGHLIGHT
- [ ] Vue + Vite daily (no Nuxt = your plain Vue experience matches perfectly)
- [ ] Vitest at Token City (+ you can help improve their coverage)
- [ ] Vuex knowledge + Pinia (understand migration path)
- [ ] NestJS at Doctomatic (full-stack API endpoints)
- [ ] Playwright E2E testing (migrated from Cypress)
- [ ] JIRA at INDITEX, Bitbucket Pipelines experience
- [ ] Component library concepts (Storybook at INDITEX)

---

### FORMAT (CONFIRMED by Tessa, Feb 13)
- **Problem solving test** with a **small part of coding** (doesn't need to run)
- No need to bring YOUR laptop — but they might provide one (format unclear: their laptop, paper, or whiteboard)
- 60 min interview + office tour after
- Francisco in person, Pim joins online
- From Aitor: "un caso básico para ver cómo piensas" (case to see how you think)

### WHAT THIS MEANS
- **Prep as if you'll type code** on a screen — just doesn't need to compile/run
- Problem solving = likely JS/TS fundamentals + Vue patterns. Need BOTH
- **Pim is still there (online)** — Vue depth is essential (Composition API, composables, Pinia, testing)
- Francisco (full-stack background) — broader engineering + JS/TS questions
- Think out loud — they want to see HOW you approach problems

### LIKELY SCENARIOS
- [ ] Problem: given a scenario, design a component architecture (props, state, data flow)
- [ ] Problem: debug/spot issues in provided code (logic, reactivity, performance)
- [ ] Small coding: write a composable, component, or function on paper/whiteboard
- [ ] State management: when to use Pinia vs composable vs local state
- [ ] Testing: how would you test X? (approach, not running code)
- [ ] Explain reasoning as you work through each problem
- [ ] Architecture: how would you structure a feature end-to-end

---

### KEY TECHNICAL CONCEPTS TO REVIEW
- [ ] Composition API: ref, reactive, computed, watch, watchEffect
- [ ] Composables (reusable logic, like React hooks)
- [ ] `<script setup>` syntax
- [ ] Provide/Inject (dependency injection)
- [ ] Slots (named, scoped)
- [ ] v-model on custom components
- [ ] Pinia: defineStore, state/getters/actions, setup syntax
- [ ] Vuex: state/mutations/actions/getters/modules (they still use it!)
- [ ] Vue Router: navigation guards, lazy loading
- [ ] TypeScript with Vue: defineProps, defineEmits, typed refs

---

### INTERVIEWERS
- **Francisco Soler Aracil** (in person) — Tech Lead Sonar, based in Alicante, studied at UA, previously Solution Architect at European Patent Office. Full-stack background (not purely frontend). Values "building things and learning how they work." Side projects on GitHub (Raspberry Pi, Telegram bots). Likely speaks Spanish — potential connection point.
- **Pim Schreurs** (online) — Senior Frontend Dev, 11+ years at Coosto. Shy, precise, honest. Will evaluate Vue depth, code quality, testing strategy.

### THINGS TO REMEMBER
- They lack test coverage → frame your testing experience as adding value
- NestJS backend → mention Doctomatic experience naturally
- Position is all levels (not just senior) → don't oversell seniority
- They're accelerating for you → they're interested!
- Code doesn't need to run → focus on clean structure and reasoning, not syntax perfection
- Francisco is full-stack/backend background → expect broader engineering questions
- Think out loud! The problem solving format is about showing your reasoning process

---

### AVOID (same as before)
- Don't reveal Aitor intel depth
- Don't oversell AI tools usage
- Don't pretend expertise you don't have (Pim is picky, will test you)
- If you don't know, say so honestly — Pim respects that
