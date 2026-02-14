# Round 3 Prep — Problem Solving Test

## CONFIRMED FORMAT (from Tessa, Feb 13)
- **Date:** Tuesday February 17th at 15:30 — Alicante office
- **Interviewers:** Francisco Soler Aracil (Tech Lead Sonar, in person) + Pim Schreurs (online)
- **Format:** Problem solving test + small coding part (doesn't need to run)
- **No need to bring YOUR laptop** — but they might provide one. Format unclear (could be their laptop with editor, could be paper, could be whiteboard)
- **Duration:** 60 min + office tour. Reserve 1.5h.

## What This Means for Prep
- Code doesn't need to run — but you may still type code on a laptop they provide. **Prep as if you'll type real code**, just without needing it to compile
- **Problem solving test** = likely JS/TS problem solving + Vue-specific questions. Need both JS fundamentals AND Vue patterns
- **Pim is online** — he WILL evaluate Vue depth, Composition API patterns, testing strategy. Vue knowledge is essential
- **Francisco** is full-stack/architecture background — expect broader engineering + JS/TS questions alongside Pim's Vue questions
- Miguel has been relying on Copilot/Claude Code — still needs to write Vue + TS from memory
- **Brush up on JS fundamentals:** array methods, string methods, ES6+ features — typical problem solving building blocks

## Their Stack (what the questions will be about)
- Vue 3 Composition API + `<script setup>`
- TypeScript (strict-ish)
- Pinia (main state management)
- Vuex (only some legacy/random parts)
- Vitest for testing
- Plain Vue + Vite (NO Nuxt)
- Component library documented with VitePress (possibly Tailwind — unclear)

---

## PHASE 1: MUSCLE MEMORY — Write These From Memory

**Goal:** Be able to write these patterns without any autocomplete. Practice each one 2-3 times until it flows naturally.

### 1.1 Basic Component with Typed Props + Emits

```vue
<script setup lang="ts">
interface Props {
  title: string
  count?: number
  items: string[]
}

const props = withDefaults(defineProps<Props>(), {
  count: 0
})

const emit = defineEmits<{
  update: [value: string]
  delete: [id: number]
}>()

function handleClick(id: number) {
  emit('delete', id)
}
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <span>{{ count }}</span>
    <ul>
      <li v-for="item in items" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>
```

**Practice until you can write this in < 2 minutes.**

### 1.2 Reactive State Patterns

```vue
<script setup lang="ts">
import { ref, reactive, computed, watch, watchEffect } from 'vue'

// ref for primitives
const count = ref(0)
const name = ref<string>('')

// reactive for objects
const user = reactive({
  name: '',
  email: '',
  age: 0
})

// computed (cached, read-only by default)
const doubleCount = computed(() => count.value * 2)

// writable computed
const fullName = computed({
  get: () => `${user.name}`,
  set: (val: string) => { user.name = val }
})

// watch specific source
watch(count, (newVal, oldVal) => {
  console.log(`count changed: ${oldVal} → ${newVal}`)
})

// watch multiple sources
watch([count, name], ([newCount, newName]) => {
  console.log(newCount, newName)
})

// watchEffect auto-tracks dependencies
watchEffect(() => {
  console.log(`count is ${count.value}`)
})
</script>
```

### 1.3 Composable (Custom Hook)

```ts
// composables/useCounter.ts
import { ref, computed } from 'vue'

export function useCounter(initial = 0) {
  const count = ref(initial)
  const doubled = computed(() => count.value * 2)

  function increment() {
    count.value++
  }

  function decrement() {
    count.value--
  }

  function reset() {
    count.value = initial
  }

  return { count, doubled, increment, decrement, reset }
}
```

```ts
// composables/useFetch.ts
import { ref, watchEffect } from 'vue'

export function useFetch<T>(url: string) {
  const data = ref<T | null>(null)
  const error = ref<string | null>(null)
  const loading = ref(false)

  async function fetchData() {
    loading.value = true
    error.value = null
    try {
      const response = await fetch(url)
      if (!response.ok) throw new Error(`HTTP ${response.status}`)
      data.value = await response.json()
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Unknown error'
    } finally {
      loading.value = false
    }
  }

  fetchData()

  return { data, error, loading, refetch: fetchData }
}
```

### 1.4 Provide/Inject (Dependency Injection)

```ts
// Parent component
import { provide, ref } from 'vue'
import type { InjectionKey } from 'vue'

export const ThemeKey: InjectionKey<Ref<string>> = Symbol('theme')

const theme = ref('light')
provide(ThemeKey, theme)
```

```ts
// Child component (any depth)
import { inject } from 'vue'
import { ThemeKey } from './keys'

const theme = inject(ThemeKey, ref('light')) // with default
```

### 1.5 v-model on Custom Component

```vue
<!-- Parent -->
<SearchInput v-model="query" v-model:filter="activeFilter" />
```

```vue
<!-- SearchInput.vue -->
<script setup lang="ts">
const model = defineModel<string>()
const filter = defineModel<string>('filter')
</script>

<template>
  <input :value="model" @input="model = ($event.target as HTMLInputElement).value" />
  <select :value="filter" @change="filter = ($event.target as HTMLSelectElement).value">
    <option value="all">All</option>
    <option value="active">Active</option>
  </select>
</template>
```

### 1.6 Slots (Named + Scoped)

```vue
<!-- Card.vue -->
<template>
  <div class="card">
    <header v-if="$slots.header">
      <slot name="header" />
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <slot name="footer" :count="items.length" />
    </footer>
  </div>
</template>
```

```vue
<!-- Usage -->
<Card>
  <template #header>
    <h2>Title</h2>
  </template>

  <p>Default slot content</p>

  <template #footer="{ count }">
    <span>{{ count }} items</span>
  </template>
</Card>
```

### 1.7 Vuex Store (they still use it!)

```ts
// store/index.ts
import { createStore } from 'vuex'

interface State {
  count: number
  items: string[]
}

export default createStore<State>({
  state: {
    count: 0,
    items: []
  },
  getters: {
    doubleCount: (state) => state.count * 2,
    itemCount: (state) => state.items.length
  },
  mutations: {
    INCREMENT(state) {
      state.count++
    },
    ADD_ITEM(state, item: string) {
      state.items.push(item)
    }
  },
  actions: {
    async fetchItems({ commit }) {
      const response = await fetch('/api/items')
      const items = await response.json()
      items.forEach((item: string) => commit('ADD_ITEM', item))
    }
  }
})

// In component
import { useStore } from 'vuex'
const store = useStore()
store.state.count
store.getters.doubleCount
store.commit('INCREMENT')
store.dispatch('fetchItems')
```

### 1.8 Pinia Store (what you use now)

```ts
// stores/useUserStore.ts
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useUserStore = defineStore('user', () => {
  // state
  const user = ref<User | null>(null)
  const loading = ref(false)

  // getters
  const isLoggedIn = computed(() => user.value !== null)
  const displayName = computed(() => user.value?.name ?? 'Guest')

  // actions
  async function login(email: string, password: string) {
    loading.value = true
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({ email, password })
      })
      user.value = await response.json()
    } finally {
      loading.value = false
    }
  }

  function logout() {
    user.value = null
  }

  return { user, loading, isLoggedIn, displayName, login, logout }
})
```

### 1.9 Vitest Component Test

```ts
// components/__tests__/Counter.test.ts
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Counter from '../Counter.vue'

describe('Counter', () => {
  it('renders initial count', () => {
    const wrapper = mount(Counter, {
      props: { initial: 5 }
    })
    expect(wrapper.text()).toContain('5')
  })

  it('increments on click', async () => {
    const wrapper = mount(Counter)
    await wrapper.find('button').trigger('click')
    expect(wrapper.text()).toContain('1')
  })

  it('emits update event', async () => {
    const wrapper = mount(Counter)
    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted('update')).toHaveLength(1)
    expect(wrapper.emitted('update')![0]).toEqual([1])
  })
})
```

### 1.10 Vitest Composable Test

```ts
// composables/__tests__/useCounter.test.ts
import { describe, it, expect } from 'vitest'
import { useCounter } from '../useCounter'

describe('useCounter', () => {
  it('starts at initial value', () => {
    const { count } = useCounter(10)
    expect(count.value).toBe(10)
  })

  it('increments', () => {
    const { count, increment } = useCounter()
    increment()
    expect(count.value).toBe(1)
  })

  it('computes doubled', () => {
    const { doubled, increment } = useCounter(5)
    expect(doubled.value).toBe(10)
    increment()
    expect(doubled.value).toBe(12)
  })
})
```

---

## PHASE 1.5: JS/TS FUNDAMENTALS — Problem Solving Building Blocks

**These come up in any "problem solving test". Know them cold.**

### Array Methods
```ts
const nums = [3, 1, 4, 1, 5, 9]

// Transform
nums.map(n => n * 2)              // [6, 2, 8, 2, 10, 18]
nums.filter(n => n > 3)           // [4, 5, 9]
nums.find(n => n > 3)             // 4
nums.findIndex(n => n > 3)        // 2
nums.some(n => n > 8)             // true
nums.every(n => n > 0)            // true

// Reduce
nums.reduce((sum, n) => sum + n, 0)  // 23

// Sort (mutates!)
[...nums].sort((a, b) => a - b)   // [1, 1, 3, 4, 5, 9]
[...nums].sort((a, b) => b - a)   // [9, 5, 4, 3, 1, 1]

// Immutable operations
[...nums, 10]                     // append
nums.slice(1, 3)                  // [1, 4] (no mutation)
nums.splice(1, 1)                 // removes index 1 (MUTATES)

// Flat + FlatMap
[[1, 2], [3, 4]].flat()           // [1, 2, 3, 4]
[1, 2].flatMap(n => [n, n * 2])   // [1, 2, 2, 4]
```

### String Methods
```ts
const str = '  Hello World  '

str.trim()                        // 'Hello World'
str.trimStart() / str.trimEnd()
str.toLowerCase() / str.toUpperCase()
str.includes('World')             // true
str.startsWith('  He')            // true
str.split(' ')                    // ['', '', 'Hello', 'World', '', '']
str.trim().split(' ')             // ['Hello', 'World']
str.replace('World', 'Vue')       // '  Hello Vue  '
str.replaceAll(' ', '-')          // '--Hello-World--'
str.padStart(20, '0')
'abc'.repeat(3)                   // 'abcabcabc'
str.at(0) / str.at(-1)           // access by index
```

### Object Methods
```ts
const obj = { a: 1, b: 2, c: 3 }

Object.keys(obj)                  // ['a', 'b', 'c']
Object.values(obj)                // [1, 2, 3]
Object.entries(obj)               // [['a', 1], ['b', 2], ['c', 3]]
Object.fromEntries([['x', 1]])    // { x: 1 }
{ ...obj, d: 4 }                  // spread to clone/extend
Object.assign({}, obj, { d: 4 }) // same as spread
```

### ES6+ Features to Know
```ts
// Destructuring
const { a, b, ...rest } = obj
const [first, ...others] = [1, 2, 3]

// Optional chaining + nullish coalescing
user?.address?.city ?? 'Unknown'

// Template literals
`Hello ${name}, you have ${items.length} items`

// Promises + async/await
async function fetchData() {
  try {
    const res = await fetch(url)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    return await res.json()
  } catch (e) {
    console.error(e)
  }
}

// Promise.all (parallel)
const [users, posts] = await Promise.all([fetchUsers(), fetchPosts()])

// Set (unique values)
const unique = [...new Set([1, 2, 2, 3])]  // [1, 2, 3]

// Map
const map = new Map<string, number>()
map.set('key', 1)
map.get('key')  // 1
map.has('key')  // true

// Ternary
const label = count === 0 ? 'empty' : count === 1 ? 'one' : 'many'
```

### Common Problem Solving Patterns
```ts
// Debounce (they might ask this!)
function debounce<T extends (...args: any[]) => void>(fn: T, ms: number) {
  let timer: ReturnType<typeof setTimeout>
  return (...args: Parameters<T>) => {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), ms)
  }
}

// Group by
function groupBy<T>(arr: T[], key: keyof T): Record<string, T[]> {
  return arr.reduce((groups, item) => {
    const val = String(item[key])
    groups[val] = groups[val] || []
    groups[val].push(item)
    return groups
  }, {} as Record<string, T[]>)
}

// Remove duplicates by key
function uniqueBy<T>(arr: T[], key: keyof T): T[] {
  const seen = new Set()
  return arr.filter(item => {
    const val = item[key]
    if (seen.has(val)) return false
    seen.add(val)
    return true
  })
}

// Deep clone (simple)
const clone = structuredClone(obj)  // modern JS
```

---

## PHASE 2: PRACTICE EXERCISES — Do These WITHOUT AI

**Rules:** Close Copilot. Close Claude Code. Use only Vue docs if stuck. Time yourself.

### Exercise 1: Todo List (30 min)
Build a typed todo list component with:
- `<script setup lang="ts">`
- Interface for Todo `{ id: number, text: string, done: boolean }`
- `ref<Todo[]>` for the list
- Add todo (input + button)
- Toggle done (click)
- Delete todo
- Computed: remaining count
- Emit events to parent

### Exercise 2: Composable — useLocalStorage (20 min)
```ts
// Write a composable that syncs a ref with localStorage
const name = useLocalStorage<string>('user-name', 'default')
// name.value reads/writes to localStorage automatically
```
Hints: `watch`, `JSON.parse/stringify`, generic type parameter

### Exercise 3: Search + Filter Component (30 min)
Build a component that:
- Takes `items: { id: number, name: string, category: string }[]` as prop
- Has a search input (v-model)
- Has category filter dropdown
- Shows filtered results using computed
- Debounce the search (write a simple debounce or use `watchEffect` with timeout)

### Exercise 4: Vuex → Pinia Migration (20 min)
Given this Vuex store, rewrite it as Pinia:
```ts
// Convert this Vuex module to a Pinia store
const cartModule = {
  state: { items: [], total: 0 },
  getters: {
    itemCount: (state) => state.items.length,
    formattedTotal: (state) => `€${state.total.toFixed(2)}`
  },
  mutations: {
    ADD_ITEM(state, item) { state.items.push(item); state.total += item.price },
    REMOVE_ITEM(state, id) {
      const idx = state.items.findIndex(i => i.id === id)
      if (idx > -1) { state.total -= state.items[idx].price; state.items.splice(idx, 1) }
    }
  },
  actions: {
    async checkout({ state, commit }) {
      await fetch('/api/checkout', { method: 'POST', body: JSON.stringify(state.items) })
      state.items.forEach(i => commit('REMOVE_ITEM', i.id))
    }
  }
}
```

### Exercise 5: Write Tests (20 min)
Write Vitest tests for your Todo List component from Exercise 1:
- Renders empty state
- Adds a todo
- Toggles completion
- Deletes a todo
- Shows correct remaining count

### Exercise 6: Component with Slots + Provide/Inject (25 min)
Build a `DataTable` component:
- Props: `columns: { key: string, label: string }[]` and `rows: Record<string, any>[]`
- Named slot `#cell(columnKey)` for custom cell rendering (scoped slot passing row data)
- Provide a `tableContext` so deeply nested components can access table state
- Sort by clicking column headers (toggle asc/desc)

---

## PHASE 3: CASE STUDY SCENARIOS — Walk Through These Verbally

Practice explaining your reasoning out loud. Pim wants to see HOW you think, not just the answer.

### Scenario 1: "We have a dashboard with 5 widgets. Each widget fetches its own data. How would you architect this?"

**Talk through:**
- Each widget = own component with own composable for data fetching
- `useFetch` composable or per-widget composable (`useSalesWidget`, etc.)
- Loading/error states per widget (don't block the whole dashboard)
- Consider `Suspense` for async components
- Caching strategy: store data in Pinia if shared, or local ref if widget-specific
- Refresh mechanism: polling, manual refresh button, or WebSocket
- Layout: CSS Grid for responsive dashboard, each widget independent

### Scenario 2: "A page is slow. How would you diagnose and fix it?"

**Talk through:**
1. **Measure first:** Browser DevTools → Performance tab, identify bottlenecks
2. **Common Vue issues:**
   - Unnecessary re-renders: check if reactive data is too broad (use `shallowRef` for large objects)
   - Too many watchers
   - `v-if` vs `v-show` for toggled elements
   - Missing `key` attributes causing full re-renders
   - Large lists without virtual scrolling
3. **Network:** Check API calls (too many? too large? no caching?)
4. **Bundle size:** Analyze with `vite-bundle-visualizer`, lazy load routes/components
5. **Computed vs methods:** Ensure expensive calculations are cached in `computed`
6. Always measure after each change to confirm improvement

### Scenario 3: "How would you plan a Vue 2 → Vue 3 migration?"

**Talk through:**
1. **Assess scope:** How big is the codebase? How much Vue 2-specific code?
2. **Migration build:** Vue 3 has a compatibility build that supports Vue 2 APIs
3. **Incremental approach:**
   - Start with build tooling (Webpack → Vite)
   - Migrate Options API → Composition API file by file
   - Replace mixins with composables
   - Vuex → Pinia (or keep Vuex 4 as intermediate step)
   - Remove deprecated APIs (filters, event bus, `$listeners`)
4. **Testing throughout:** Run existing tests after each migration step
5. **Risk areas:** Third-party libraries that need Vue 3 versions, custom directives, render functions

### Scenario 4: "Design a shared component library for multiple teams"

**Talk through:**
- Separate package/repo (or monorepo with the library as a package)
- VitePress for documentation (they use this!) + possibly Tailwind CSS (unclear)
- Storybook or Histoire for interactive component demos
- TypeScript for all component APIs
- Design tokens / CSS custom properties for theming
- Versioning (semver) so teams can upgrade at their own pace
- Testing: Vitest for unit tests, visual regression tests
- Accessibility: ARIA attributes, keyboard navigation
- Review process: Frontend Guild reviews changes

### Scenario 5: "How would you add a new feature from design to production?"

**Talk through:**
1. Review design with UX (Figma)
2. Break into stories in JIRA
3. Sprint refinement: discuss with team, estimate
4. Component design: identify reusable components, props/emits interface
5. Implementation: `<script setup>`, typed props, composables for logic
6. Testing: Vitest unit tests for logic, component tests for interaction
7. Code review in Bitbucket (PR)
8. CI/CD: Jenkins runs tests, QA checks, UI checks → green light → prod
9. Monitor: Sentry for errors, Grafana for performance

---

## PHASE 4: INTERVIEW DAY TIPS

### Before the interview
- Don't bring your laptop — but they may provide one (format unknown: their laptop, paper, or whiteboard)
- Bring a pen just in case (paper-based problems)
- Review the cheatsheet (`coosto-interview-cheatsheet.md`) one last time
- Know the route to Alicante office, arrive 10 min early
- Dress smart casual

### During the problem solving test
- **Talk out loud** — explain your reasoning as you work through problems
- **Start with the interface** — define types/data structures before implementation
- **Ask clarifying questions** — shows you think before coding
- **Don't optimize prematurely** — get the logic right, then discuss improvements
- **If stuck:** Say "let me think about this for a moment" — silence is okay
- **If you don't know an exact API:** Say "I think it's something like X" — honesty > guessing
- **Keep it simple** — Pim values clean, simple code over clever tricks
- **Code doesn't need to run** — but write it as cleanly as you can (you might be on a laptop with an editor)
- **JS fundamentals matter** — array methods, string methods, destructuring, async/await (see Phase 1.5)

### For Francisco (in person, full-stack background):
- Expect broader questions about architecture, data flow, API design
- He values "building things and learning how they work" — show curiosity
- He was a Solution Architect — he'll care about WHY you make design decisions
- Alicante + UA connection — be natural about it

### For Pim (online, frontend specialist):
- He'll evaluate Vue-specific depth: Composition API, reactivity, patterns
- Be technically precise, not hand-wavy
- If you don't know something, say so — he respects honesty over BS
- Testing strategy will likely come up (they lack coverage)

### Common problem solving patterns they might use:
1. "Given this scenario, how would you design the component structure?"
2. "Here's some code — what's wrong with it? How would you fix it?"
3. "Write a composable for X" (on paper, doesn't need to run)
4. "How would you add sorting/filtering to this component?"
5. "How would you test this component?"
6. "Walk us through how you'd implement feature X from scratch"

---

## STUDY SCHEDULE — 5 days (Thu Feb 13 → Mon Feb 17)
**(Interview: Tuesday Feb 17 at 15:30)**

See `coosto-study-resources.md` for video/doc links.

### Day 1 — Thursday Feb 13 — DONE
- ~~Watch Traversy Media Vue crash course~~ — watched ~1h

### Day 2 — Friday Feb 14 — DONE
- ~~Net Ninja TypeScript + Vue series~~
- ~~Vue official TypeScript + Composition API page (skimmed + Scrimba)~~
- ~~Read `coosto-vue-wiki-qa.md` — all 30 questions~~
- ~~Review Phase 1.5 JS/TS fundamentals~~

### Day 3 — Saturday Feb 15 (~1.5-2h after lunch)
**Guided practice with Claude — Round 1 (type along + quick retry from memory)**
- Project setup: `npm create vue@latest` with TS + Vitest + Pinia (15 min)
- Guided Vue patterns: typed props/emits, reactive state, composable, Pinia store (45 min)
- Guided JS patterns: debounce, array chains, async/await (30 min)
- If time: Vitest component test (15 min)
- **Extra (low energy / evening):** Scrimba or Vue School interactive tutorials — Composition API, Pinia

### Day 4 — Sunday Feb 16 (THE BIG DAY — afternoon + evening, ~3-4h)
**Full practice — Round 2-3 with decreasing help**
- **Extra (morning / beach walk):** Scrimba Vue tutorials on phone if you feel like it
- Vue patterns from memory, Claude hints only when stuck (45 min)
- JS/TS patterns from memory (30 min)
- Pinia/Vuex migration video (15 min passive break)
- Exercise 1: Todo List — guided then solo rebuild (40 min)
- Exercise 3: Search + Filter — solo attempt (30 min)
- Case Study practice: Claude plays Fran/Pim, asks Phase 3 questions (30-45 min)

### Day 5 — Monday Feb 17 (skip CrossFit — ~1.5-2h afternoon + walk)
**Mock interview + final review**
- Write 2-3 patterns from memory, no hints — Round 3 (20 min)
- Mock interview: Claude asks case study scenarios, timed (40 min)
- Review cheatsheet + interviewers docs (20 min)
- Walk to decompress
- Logistics: clothes, route, arrive 10 min early, pen in pocket

### Total: ~6-8h across 5 days
