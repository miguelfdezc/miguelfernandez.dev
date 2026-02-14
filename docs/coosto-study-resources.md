# Study Resources — Vue 3 + TypeScript + Vitest

## Priority order: Watch first, then read, then practice

---

## VIDEOS — Watch Passively First

### Vue 3 Composition API (START HERE)
1. **Traversy Media — Vue.js Crash Course 2024** (~3h)
   - https://www.youtube.com/results?search_query=traversy+media+vue+crash+course+2024
   - Covers: Composition API, script setup, Vue Router, building a project
   - Good for: refreshing the full picture, Brad explains clearly

2. **The Net Ninja — Vue 3 with TypeScript** (free series)
   - https://www.classcentral.com/course/youtube-vue-3-with-typescript-jump-start-45821
   - Covers: TypeScript setup, typed props/emits, composables
   - Good for: the TypeScript-specific syntax you need

3. **Vue School — Vue.js 3 Fundamentals with Composition API** (free)
   - https://vueschool.io/courses/vue-js-fundamentals-with-the-composition-api
   - Official, endorsed by Vue team
   - Good for: canonical patterns

### Pinia
4. **Vue Mastery — From Vuex to Pinia** (short course)
   - https://www.vuemastery.com/courses/from-vuex-to-pinia/what-is-pinia/
   - Covers: migration path, Pinia setup syntax
   - Good for: understanding both (Coosto uses Vuex still!)

### Vitest / Testing
5. **Vue School — Rapid Testing with Vitest** (by Anthony Fu, creator of Vitest)
   - https://vueschool.io/courses/rapid-testing-with-vitest
   - Covers: testing components, composables, DOM environment
   - Good for: the exact testing setup Coosto uses

### Composables / Advanced Patterns
6. **Vue Mastery — Coding Better Composables** (5-part series)
   - https://www.vuemastery.com/blog/coding-better-composables-1-of-5/
   - Covers: composable design patterns, reusability
   - Good for: writing clean composables (what Pim will evaluate)

---

## DOCS — Read/Reference (don't read cover-to-cover)

### Must-Read Pages
7. **Vue.js Official — Composition API FAQ**
   - https://vuejs.org/guide/extras/composition-api-faq
   - Why Composition API exists, when to use it

8. **Vue.js Official — TypeScript with Composition API**
   - https://vuejs.org/guide/typescript/composition-api
   - defineProps, defineEmits, ref typing, generics — THE reference

9. **Vue.js Official — script setup**
   - https://vuejs.org/api/sfc-script-setup.html
   - Complete reference for `<script setup>` syntax

10. **Vue.js Official — Composables**
    - https://vuejs.org/guide/reusability/composables.html
    - Official patterns and conventions

11. **Vue.js Official — Testing**
    - https://vuejs.org/guide/scaling-up/testing.html
    - Testing philosophy, unit vs component vs e2e

12. **Pinia Official — Getting Started**
    - https://pinia.vuejs.org/introduction.html
    - Setup stores, composition syntax

13. **Pinia Official — Migrating from Vuex**
    - https://pinia.vuejs.org/cookbook/migration-vuex.html
    - Step-by-step migration guide (relevant for Coosto!)

14. **Vitest — Getting Started**
    - https://vitest.dev/guide/
    - Setup, assertions, mocking

15. **Vue Test Utils — Getting Started**
    - https://test-utils.vuejs.org/guide/
    - mount, find, trigger, emitted

---

## Q&A / INTERVIEW PREP — Skim for gaps

16. **300 Vue.js Interview Questions** (GitHub)
    - https://github.com/sudheerj/vuejs-interview-questions
    - Biggest collection, scan for any concept you forgot

17. **Vue Interview Questions 2026** (GitHub)
    - https://github.com/Devinterview-io/vue-interview-questions
    - Updated, organized by topic

18. **Toptal Vue.js Interview Questions**
    - https://www.toptal.com/vue-js/interview-questions
    - Curated by senior devs, quality > quantity

19. **Midudev — Pruebas Técnicas** (GitHub)
    - https://github.com/midudev/pruebas-tecnicas
    - Not Vue-specific but good for live coding practice format

---

## INTERACTIVE PRACTICE

20. **VueDose Tips** (short Vue tips)
    - https://vuedose.tips/
    - Quick pattern tips, good for daily review

21. **Escuela Vue — Composable Guide** (Spanish!)
    - https://escuelavue.es/en/devtips/vue-3-composable-functions
    - Composables explained step by step

---

## STUDY PLAN — 5 days (Thu Feb 13 → Mon Feb 17)
**(Interview: Tuesday Feb 17 at 15:30, Alicante office)**

### Day 1 — Thursday Feb 13 — DONE
- ~~Watch Traversy Media Vue crash course~~ — watched ~1h

### Day 2 — Friday Feb 14 — DONE
- ~~Net Ninja TypeScript + Vue series (#2)~~
- ~~Vue official TypeScript + Composition API page (#8) + Scrimba~~
- ~~Read `coosto-vue-wiki-qa.md` — all 30 questions~~
- ~~Review Phase 1.5 JS/TS fundamentals~~

### Day 3 — Saturday Feb 15 (~1.5-2h)
- Project setup: Vue + TS + Vitest + Pinia (15 min)
- Guided Vue patterns with Claude — Round 1: type along + retry from memory (45 min)
- Guided JS patterns — Round 1: debounce, array chains, async/await (30 min)
- If time: Vitest component test (15 min)

### Day 4 — Sunday Feb 16 (BIG DAY — ~3-4h)
- Vue + JS patterns from memory — Round 2-3, less help each time (1h 15min)
- Watch Pinia/Vuex migration video (#4) (15 min break)
- Exercise 1: Todo List — guided then solo rebuild (40 min)
- Exercise 3: Search + Filter — solo attempt (30 min)
- Case Study practice with Claude as Fran/Pim (30-45 min)

### Day 5 — Monday Feb 17 (~1.5-2h + walk)
- Patterns from memory — Round 3, no hints (20 min)
- Mock interview simulation, timed (40 min)
- Review cheatsheet + interviewers docs (20 min)
- Walk to decompress
- Logistics: clothes, route, arrive early, pen

### Total: ~6-8h across 5 days
