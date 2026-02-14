# Vue.js Interview Q&A — Tailored to Coosto Stack
### Vue 3 + TypeScript + Pinia + Vuex + Vitest + Vite

---

## BEGINNER

---

### 1. What is the Composition API and how does it differ from the Options API?

The **Options API** (Vue 2) organizes code by option type (`data`, `methods`, `computed`, `watch`). The **Composition API** (Vue 3) organizes code by logic/feature, using functions like `ref()`, `computed()`, `watch()` inside `setup()` or `<script setup>`.

```vue
<!-- Options API (Vue 2 style) -->
<script>
export default {
  data() {
    return { count: 0 }
  },
  computed: {
    doubled() { return this.count * 2 }
  },
  methods: {
    increment() { this.count++ }
  }
}
</script>

<!-- Composition API (Vue 3) -->
<script setup lang="ts">
import { ref, computed } from 'vue'

const count = ref(0)
const doubled = computed(() => count.value * 2)
function increment() { count.value++ }
</script>
```

**Key advantage:** In the Composition API, related logic stays together (instead of being scattered across `data`, `methods`, etc.), making it easy to extract into reusable **composables**.

---

### 2. What's the difference between `ref` and `reactive`?

- **`ref`** — Wraps any value (primitive or object). Accessed via `.value` in JS/TS, but NOT in templates.
- **`reactive`** — Only for objects/arrays. No `.value` needed, but you CANNOT reassign the entire object.

```ts
const count = ref(0)          // count.value = 1
const user = ref({ name: '' }) // user.value.name = 'Miguel'

const state = reactive({ count: 0, name: '' })  // state.count = 1
// state = { count: 1, name: '' }  ❌ CANNOT reassign
```

**Rule of thumb:** Use `ref` for everything (it's more flexible). Use `reactive` only when you have an object with multiple properties that always go together.

---

### 3. What is `<script setup>`?

Syntactic sugar for the Composition API that removes boilerplate:
- No `return` needed — everything declared is available in the template
- No `export default` needed
- `defineProps`, `defineEmits`, `defineModel` are compiler macros (not imports)

```vue
<script setup lang="ts">
// Everything here is automatically accessible in the template
import { ref } from 'vue'

const count = ref(0)
function increment() { count.value++ }
</script>
```

---

### 4. How do you declare props with TypeScript in Vue 3?

```vue
<script setup lang="ts">
// With interface
interface Props {
  title: string
  count?: number
  items: string[]
}

const props = withDefaults(defineProps<Props>(), {
  count: 0
})
</script>
```

`defineProps` is a **compiler macro** — it's not imported, Vue processes it at build time.

---

### 5. How do you emit events with TypeScript?

```vue
<script setup lang="ts">
const emit = defineEmits<{
  update: [value: string]
  delete: [id: number]
  submit: []
}>()

// Usage:
emit('update', 'new value')
emit('delete', 42)
emit('submit')
</script>
```

---

### 6. What's the difference between `v-if` and `v-show`?

- **`v-if`** — Mounts/unmounts the element from the DOM. More expensive to toggle, but doesn't render if initially `false`.
- **`v-show`** — Always mounts the element, just toggles `display: none`. More efficient for frequent toggles.

**Rule:** `v-if` for conditions that rarely change. `v-show` for frequent toggles (tabs, dropdowns).

---

### 7. What's the purpose of `:key` in `v-for`?

Vue uses `key` to identify each DOM node and reuse it efficiently. Without `key` (or with `key` = index), Vue can mix up elements and cause bugs in stateful components.

```vue
<!-- ✅ Correct: unique key per item -->
<li v-for="item in items" :key="item.id">{{ item.name }}</li>

<!-- ❌ Avoid: key = index can cause bugs -->
<li v-for="(item, index) in items" :key="index">{{ item.name }}</li>
```

---

### 8. What is a composable?

A function that encapsulates reusable logic using the Composition API. Equivalent to React **custom hooks**. Convention: name starts with `use`.

```ts
// composables/useCounter.ts
import { ref, computed } from 'vue'

export function useCounter(initial = 0) {
  const count = ref(initial)
  const doubled = computed(() => count.value * 2)

  function increment() { count.value++ }
  function reset() { count.value = initial }

  return { count, doubled, increment, reset }
}
```

```vue
<!-- Usage in a component -->
<script setup>
import { useCounter } from '@/composables/useCounter'
const { count, doubled, increment } = useCounter(10)
</script>
```

---

### 9. What is Pinia and how does it differ from Vuex?

**Pinia** is the official store for Vue 3 (replaces Vuex). Key differences:

| | Vuex | Pinia |
|---|---|---|
| Mutations | Yes (required) | Don't exist |
| TypeScript | Limited support | Native support |
| Stores | Modules inside 1 store | Independent stores |
| Syntax | Options API | Options or Setup |
| DevTools | Yes | Yes |
| Composition | Complex (namespaced modules) | Simple (import and use) |

```ts
// Pinia store
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const items = ref<CartItem[]>([])
  const total = computed(() => items.value.reduce((sum, i) => sum + i.price, 0))

  function addItem(item: CartItem) {
    items.value.push(item)
  }

  return { items, total, addItem }
})
```

---

### 10. How does Vuex work? (Coosto still uses it in legacy parts)

Vuex follows the Flux pattern: **State → Getters → Mutations → Actions**

```ts
const store = createStore({
  state: { count: 0 },

  // Getters: computed values from the store
  getters: {
    doubled: (state) => state.count * 2
  },

  // Mutations: ONLY way to mutate state (synchronous)
  mutations: {
    INCREMENT(state) { state.count++ },
    SET_COUNT(state, value: number) { state.count = value }
  },

  // Actions: can be async, call mutations via commit
  actions: {
    async fetchCount({ commit }) {
      const response = await fetch('/api/count')
      const data = await response.json()
      commit('SET_COUNT', data.count)
    }
  }
})

// In a component:
store.state.count
store.getters.doubled
store.commit('INCREMENT')
store.dispatch('fetchCount')
```

**Key for Coosto:** They still use Vuex in some parts. You need to understand both.

---

## INTERMEDIATE

---

### 11. What's the difference between `watch` and `watchEffect`?

- **`watch`** — Watches specific sources. Receives old and new values. Only runs when the explicit sources change.
- **`watchEffect`** — Auto-detects dependencies. Runs immediately and re-runs when any reactive dependency changes.

```ts
// watch: explicit
watch(count, (newVal, oldVal) => {
  console.log(`${oldVal} → ${newVal}`)
})

// watch: multiple sources
watch([firstName, lastName], ([newFirst, newLast]) => {
  console.log(`${newFirst} ${newLast}`)
})

// watchEffect: auto-tracking
watchEffect(() => {
  // Re-runs automatically when count.value changes
  console.log(`count is ${count.value}`)
})
```

**When to use which:**
- `watch` when you need the previous value, or when you need to control exactly what you observe
- `watchEffect` for simple side effects that depend on reactive data

---

### 12. How does `v-model` work on custom components?

`v-model` on a component is syntactic sugar for prop + emit:

```vue
<!-- Parent -->
<SearchInput v-model="query" />
<!-- Equivalent to: -->
<SearchInput :modelValue="query" @update:modelValue="query = $event" />
```

```vue
<!-- SearchInput.vue (Vue 3.4+) -->
<script setup lang="ts">
const model = defineModel<string>()
</script>

<template>
  <input v-model="model" />
</template>
```

**Multiple v-models:**
```vue
<UserForm v-model:name="userName" v-model:email="userEmail" />
```

```vue
<!-- UserForm.vue -->
<script setup lang="ts">
const name = defineModel<string>('name')
const email = defineModel<string>('email')
</script>
```

---

### 13. What are slots and what are they used for?

Slots allow a parent component to inject content into a child component. Three types:

```vue
<!-- Card.vue -->
<template>
  <div class="card">
    <!-- Default slot -->
    <slot />

    <!-- Named slot -->
    <header>
      <slot name="header" />
    </header>

    <!-- Scoped slot: passes data to the parent -->
    <slot name="item" :data="internalData" :index="currentIndex" />
  </div>
</template>
```

```vue
<!-- Usage -->
<Card>
  <p>Default slot content</p>

  <template #header>
    <h2>My title</h2>
  </template>

  <template #item="{ data, index }">
    <span>{{ index }}: {{ data.name }}</span>
  </template>
</Card>
```

**Scoped slots** are very powerful — they let the parent decide how to render data from the child (render delegation pattern).

---

### 14. What is Provide/Inject?

Dependency injection in Vue. Allows passing data from an ancestor to any descendant without prop drilling.

```ts
// Parent/Ancestor
import { provide, ref } from 'vue'
import type { InjectionKey } from 'vue'

// Typed key for safety
export const UserKey: InjectionKey<Ref<User>> = Symbol('user')

const user = ref<User>({ name: 'Miguel' })
provide(UserKey, user)
```

```ts
// Any descendant (at any depth)
import { inject } from 'vue'
import { UserKey } from '@/keys'

const user = inject(UserKey) // Ref<User> | undefined
// With default value:
const user = inject(UserKey, ref({ name: 'Guest' }))
```

**Use cases:** Theme, auth context, global config, table/form context.

---

### 15. How do you test Vue components with Vitest?

```ts
import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import TodoList from '../TodoList.vue'

describe('TodoList', () => {
  it('renders empty state', () => {
    const wrapper = mount(TodoList)
    expect(wrapper.findAll('li')).toHaveLength(0)
    expect(wrapper.text()).toContain('No tasks')
  })

  it('adds a todo', async () => {
    const wrapper = mount(TodoList)
    await wrapper.find('input').setValue('New todo')
    await wrapper.find('button').trigger('click')
    expect(wrapper.findAll('li')).toHaveLength(1)
    expect(wrapper.text()).toContain('New todo')
  })

  it('emits event on completion', async () => {
    const wrapper = mount(TodoList, {
      props: { items: [{ id: 1, text: 'Test', done: false }] }
    })
    await wrapper.find('input[type="checkbox"]').setValue(true)
    expect(wrapper.emitted('complete')).toBeTruthy()
    expect(wrapper.emitted('complete')![0]).toEqual([1])
  })
})
```

**Testing composables:**
```ts
import { useCounter } from '../useCounter'

it('increments', () => {
  const { count, increment } = useCounter()
  expect(count.value).toBe(0)
  increment()
  expect(count.value).toBe(1)
})
```

---

### 16. How would you build a composable for data fetching?

```ts
import { ref, watchEffect, type Ref } from 'vue'

export function useFetch<T>(url: string | Ref<string>) {
  const data = ref<T | null>(null)
  const error = ref<string | null>(null)
  const loading = ref(false)

  async function execute() {
    loading.value = true
    error.value = null
    try {
      const urlValue = typeof url === 'string' ? url : url.value
      const response = await fetch(urlValue)
      if (!response.ok) throw new Error(`HTTP ${response.status}`)
      data.value = await response.json()
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Unknown error'
    } finally {
      loading.value = false
    }
  }

  // If url is reactive, re-fetch when it changes
  if (typeof url !== 'string') {
    watchEffect(() => { execute() })
  } else {
    execute()
  }

  return { data, error, loading, refetch: execute }
}
```

---

### 17. How would you implement debounce on a search input?

```vue
<script setup lang="ts">
import { ref, watch } from 'vue'

const searchQuery = ref('')
const debouncedQuery = ref('')

let timeout: ReturnType<typeof setTimeout>

watch(searchQuery, (newVal) => {
  clearTimeout(timeout)
  timeout = setTimeout(() => {
    debouncedQuery.value = newVal
  }, 300)
})
</script>

<template>
  <input v-model="searchQuery" placeholder="Search..." />
  <SearchResults :query="debouncedQuery" />
</template>
```

**As a reusable composable:**
```ts
import { ref, watch, type Ref } from 'vue'

export function useDebouncedRef<T>(source: Ref<T>, delay = 300) {
  const debounced = ref(source.value) as Ref<T>
  let timeout: ReturnType<typeof setTimeout>

  watch(source, (val) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => { debounced.value = val }, delay)
  })

  return debounced
}
```

---

### 18. How does Vue Router work and what are navigation guards?

```ts
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: () => import('./views/Home.vue') },  // lazy loading
    {
      path: '/dashboard',
      component: () => import('./views/Dashboard.vue'),
      meta: { requiresAuth: true }
    },
    { path: '/:pathMatch(.*)*', component: () => import('./views/NotFound.vue') }
  ]
})

// Global guard
router.beforeEach((to, from) => {
  if (to.meta.requiresAuth && !isAuthenticated()) {
    return { path: '/login', query: { redirect: to.fullPath } }
  }
})
```

```vue
<!-- In-component guard -->
<script setup>
import { onBeforeRouteLeave } from 'vue-router'

onBeforeRouteLeave((to, from) => {
  if (hasUnsavedChanges.value) {
    return confirm('Leave without saving?')
  }
})
</script>
```

---

### 19. What are Teleport, Fragments, and Suspense?

**Teleport** — Renders DOM in a different part of the tree (like React Portals):
```vue
<Teleport to="body">
  <Modal v-if="showModal" @close="showModal = false" />
</Teleport>
```

**Fragments** — Multiple root nodes (Vue 2 required a single root):
```vue
<template>
  <header>Header</header>
  <main>Content</main>
  <footer>Footer</footer>
</template>
```

**Suspense** — Handles async components with a fallback:
```vue
<Suspense>
  <template #default>
    <AsyncComponent />
  </template>
  <template #fallback>
    <LoadingSpinner />
  </template>
</Suspense>
```

---

## ADVANCED

---

### 20. How does Vue 3's reactivity system work?

Vue 3 uses **Proxy** (instead of Vue 2's `Object.defineProperty`):

1. When you create `reactive(obj)`, Vue wraps the object in a Proxy
2. The Proxy intercepts `get` → records which effect (computed/watch/render) accessed which property (**track**)
3. The Proxy intercepts `set` → notifies all effects that depend on that property (**trigger**)

```
reactive(obj)  →  Proxy  →  get: track(target, key)
                          →  set: trigger(target, key)
```

**`ref`** internally uses an object with getter/setter on `.value` that does track/trigger. If the value is an object, it wraps it in `reactive`.

**Practical implications:**
- Destructuring a `reactive` loses reactivity → use `toRefs()`
- Reassigning a `reactive` loses the reference → use `ref` for replaceable values
- `shallowRef` / `shallowReactive` doesn't do deep tracking (performance)

---

### 21. How would you plan a Vue 2 to Vue 3 migration?

**Relevant for Coosto — they have Vue 2 code with Vuex that they're migrating.**

1. **Audit:** Inventory of components, mixins, filters, plugins, dependencies
2. **Compatibility build:** Vue 3 has a `@vue/compat` mode that emulates Vue 2 and shows warnings
3. **Incremental migration:**
   - First: update build tooling (Webpack → Vite)
   - Second: remove deprecated APIs (filters, event bus `$on/$off`, `$listeners`)
   - Third: migrate Options API → Composition API component by component
   - Fourth: mixins → composables
   - Fifth: Vuex → Pinia (or Vuex 4 as intermediate step)
4. **Testing at each step:** Existing tests should keep passing
5. **Risk areas:** Third-party libraries, custom directives, render functions, plugins

**What to tell Pim:** "I've researched the Vue 2→3 migration path for Token City. The compatibility build makes it possible to do it incrementally. The key is not trying to migrate everything at once — component by component, with tests at each step."

---

### 22. When would you use `shallowRef` / `shallowReactive`?

When you have large objects that don't need deep reactivity:

```ts
// ❌ Deep reactive on an array of 10,000 items = slow
const items = ref<Item[]>(hugeArray)

// ✅ Shallow: only reacts if you reassign the ref, not if you change an item
const items = shallowRef<Item[]>(hugeArray)

// To update, you need to reassign:
items.value = [...items.value, newItem]
// Or force trigger:
triggerRef(items)
```

**Use cases:** Large lists, API data that isn't edited inline, complex config objects.

---

### 23. How would you design a shared component library?

**Relevant for Coosto — they have a component library with VitePress.**

1. **Separate package** (monorepo or standalone repo)
2. **Each component:** Typed props, typed emits, slots for flexibility
3. **Documentation:** VitePress or Storybook with interactive examples
4. **Design tokens:** CSS custom properties for theming (`--color-primary`, etc.)
5. **Testing:** Vitest for unit tests + visual regression tests
6. **Versioning:** Semver so teams can upgrade at their own pace
7. **Tree-shaking:** Named exports so only what's used gets included
8. **Accessibility:** ARIA, keyboard navigation, focus management

```ts
// Good library component
<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
}

withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false
})

defineEmits<{ click: [event: MouseEvent] }>()
</script>
```

---

### 24. How would you optimize performance in a Vue app?

1. **Lazy loading routes:** `() => import('./views/Heavy.vue')`
2. **`v-once`** for static content that never changes
3. **`v-memo`** to prevent re-renders of sublists
4. **`shallowRef`** for large non-edited data
5. **`computed`** instead of methods (caching)
6. **Virtual scrolling** for long lists (vue-virtual-scroller)
7. **Code splitting** with `defineAsyncComponent`
8. **Debounce** on search/filter inputs
9. **`v-show`** instead of `v-if` for frequent toggles
10. **Avoid unnecessary watchers** — prefer computed when possible

**Diagnosing:**
- Vue DevTools → Performance timeline
- Browser DevTools → Performance tab → flame chart
- `vite-bundle-visualizer` to analyze bundle size
- Network tab for redundant API calls

---

### 25. How would you test a composable that fetches data?

```ts
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { useFetch } from '../useFetch'
import { flushPromises } from '@vue/test-utils'

// Mock global fetch
const mockFetch = vi.fn()
global.fetch = mockFetch

describe('useFetch', () => {
  beforeEach(() => {
    mockFetch.mockReset()
  })

  it('fetches data successfully', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ name: 'Miguel' })
    })

    const { data, loading, error } = useFetch('/api/user')

    expect(loading.value).toBe(true)
    await flushPromises()

    expect(loading.value).toBe(false)
    expect(data.value).toEqual({ name: 'Miguel' })
    expect(error.value).toBeNull()
  })

  it('handles errors', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: 404
    })

    const { data, error } = useFetch('/api/missing')
    await flushPromises()

    expect(data.value).toBeNull()
    expect(error.value).toContain('404')
  })
})
```

---

### 26. What's the difference between `computed` and `watch`?

| | `computed` | `watch` |
|---|---|---|
| **Purpose** | Derive a value | Execute side effects |
| **Returns** | Yes, returns a value | No |
| **Caching** | Yes (recalculates only if deps change) | No |
| **Timing** | Synchronous, lazy | Can be async |
| **Example** | `fullName = computed(() => first + last)` | `watch(route, () => fetchData())` |

**Rule:** If you need a derived value → `computed`. If you need to DO something when a value changes (API call, localStorage, logging) → `watch`.

---

### 27. How would you handle complex forms in Vue?

```vue
<script setup lang="ts">
import { reactive, computed } from 'vue'

interface FormData {
  name: string
  email: string
  role: 'admin' | 'user'
}

const form = reactive<FormData>({
  name: '',
  email: '',
  role: 'user'
})

const errors = reactive({
  name: '',
  email: ''
})

const isValid = computed(() =>
  form.name.length > 0 &&
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) &&
  !errors.name &&
  !errors.email
)

function validate(field: keyof FormData) {
  if (field === 'name' && !form.name) {
    errors.name = 'Name required'
  } else if (field === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Invalid email'
  } else {
    errors[field as keyof typeof errors] = ''
  }
}

async function handleSubmit() {
  if (!isValid.value) return
  await fetch('/api/users', {
    method: 'POST',
    body: JSON.stringify(form)
  })
}
</script>
```

---

### 28. How would you migrate a Vuex module to Pinia?

```ts
// BEFORE: Vuex module
const cartModule = {
  state: () => ({ items: [], total: 0 }),
  getters: {
    itemCount: (state) => state.items.length
  },
  mutations: {
    ADD_ITEM(state, item) {
      state.items.push(item)
      state.total += item.price
    }
  },
  actions: {
    async checkout({ state, commit }) {
      await api.checkout(state.items)
    }
  }
}

// AFTER: Pinia store
export const useCartStore = defineStore('cart', () => {
  const items = ref<CartItem[]>([])
  const total = computed(() => items.value.reduce((sum, i) => sum + i.price, 0))
  const itemCount = computed(() => items.value.length)

  function addItem(item: CartItem) {
    items.value.push(item)
  }

  async function checkout() {
    await api.checkout(items.value)
  }

  return { items, total, itemCount, addItem, checkout }
})
```

**Key changes:** No mutations, total is computed (not manual state), no `commit`/`dispatch` needed.

---

### 29. How would you structure a large Vue project?

```
src/
├── assets/              # Static assets
├── components/          # Shared/reusable components
│   ├── ui/              # Base UI components (Button, Input, Modal)
│   └── layout/          # Layout components (Header, Sidebar)
├── composables/         # Shared composables (useAuth, useFetch)
├── stores/              # Pinia stores (useUserStore, useCartStore)
├── views/               # Page-level components (routed)
├── router/              # Vue Router config
├── types/               # Shared TypeScript types/interfaces
├── utils/               # Pure utility functions
├── api/                 # API client / service layer
└── App.vue
```

**Principles:**
- Generic UI components separate from business components
- Composables for reusable logic
- One store per domain (not one giant store)
- Shared types in their own folder
- API layer separate from components

---

### 30. How would you implement lazy loading and code splitting?

```ts
// Lazy loaded routes
const routes = [
  {
    path: '/dashboard',
    component: () => import('./views/Dashboard.vue')
  }
]

// Async component with loading/error states
import { defineAsyncComponent } from 'vue'

const HeavyChart = defineAsyncComponent({
  loader: () => import('./components/HeavyChart.vue'),
  loadingComponent: LoadingSpinner,
  errorComponent: ErrorDisplay,
  delay: 200,    // ms before showing loading
  timeout: 10000 // ms before showing error
})
```

**Vite automatically** does code splitting on dynamic imports. Each `() => import(...)` becomes a separate chunk.
