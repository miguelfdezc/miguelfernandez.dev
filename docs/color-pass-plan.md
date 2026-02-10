# Color Pass: From Grayscale to Colorful Portfolio

## Context
The site looks "black and white" despite having a teal primary defined. Root causes: tech icons are monochrome, project tag colors exist in data but are ignored by the Badge component, background glows are near-invisible, and color only appears on hover states — not in default states.

---

## Change 1: Project Badge Colors (Biggest Win)

**File:** `src/components/AnimatedProjectCard.tsx` (lines 104-112)

`projects.ts` already defines colored classes per tag (e.g. `bg-sky-950/80 text-sky-300 border border-sky-800/50` for React) but the Badge uses `variant="secondary"` (gray), ignoring `tag.class`.

**Fix:** Apply `tag.class` to the Badge:
```tsx
<Badge variant="outline" className={`text-[10px] font-normal px-1.5 py-0 h-5 ${tag.class}`}>
```

Adds 35+ colored badges across all project cards instantly.

---

## Change 2: Branded Tech Icon Colors

**File:** `src/components/HeroVisual.tsx`

Replace monochrome `text-foreground/XX` with brand colors:

| Icon | Color |
|------|-------|
| React | `text-[#61DAFB]` |
| TypeScript | `text-[#3178C6]` |
| Vue | `text-[#4FC08D]` |
| Next.js | `text-foreground` (monochrome brand) |
| Nuxt | `text-[#00DC82]` |
| Astro | `text-[#FF5D01]` |
| Node.js | `text-[#5FA04E]` |
| Tailwind | `text-[#06B6D4]` |
| Supabase | `text-[#3FCF8E]` |
| OpenAI | `text-foreground` (monochrome brand) |
| Anthropic | `text-[#D4A27F]` |
| Vercel | `text-foreground` (monochrome brand) |

---

## Change 3: Hero Status Dot — Green to Teal

**File:** `src/components/Hero.astro` (lines 34-35)

Change `bg-green-400`/`bg-green-500` → `bg-primary`.

---

## Change 4: Background Glows — More Visible

**File:** `src/layouts/Layout.astro`

- Top glow: primary opacity `0.15` → `0.25`
- Bottom glow: warm hue 30 at 6% → teal hue 180 at 12% (`oklch(0.5_0.08_180/0.12)`)

---

## Change 5: Card Hover Borders — More Visible

**Files:** `AnimatedProjectCard.tsx`, `AnimatedExperience.tsx`, `AnimatedEducation.tsx`

Increase `hover:border-primary/20` → `hover:border-primary/40`.

---

## Change 6: Timeline Line Gradient

**Files:** `AnimatedExperience.tsx`, `AnimatedEducation.tsx`

Change timeline `bg-border` → `bg-gradient-to-b from-primary/40 via-primary/20 to-border`.

---

## Change 7: Open Source Names — Default Teal

**File:** `src/components/OpenSource.astro`

Change `text-foreground/90 group-hover:text-primary` → `text-primary group-hover:text-primary/80`.

---

## Change 8: Header Logo — Extend Teal to `.dev`

**File:** `src/components/Header.astro`

Change `<span class="text-primary">.</span>dev` → `<span class="text-primary">.dev</span>`.

---

## Change 9: Open Source Cards — Teal Top Border

**File:** `src/components/OpenSource.astro`

Add `border-t-primary/30` to both card containers.

---

## Change 10: Section Heading Dots — Glow Pulse

**Files:** `src/styles/global.css` + `src/pages/[lang]/index.astro`

Add `glow-pulse` keyframe (3s ease-in-out infinite, pulsing box-shadow) and apply `animate-glow-pulse` to all 5 section heading dots.

---

## Files Summary

| File | Changes |
|------|---------|
| `src/components/AnimatedProjectCard.tsx` | Apply tag.class colors; hover border 20→40 |
| `src/components/HeroVisual.tsx` | Brand colors on 12 icons |
| `src/components/Hero.astro` | Green dot → teal |
| `src/layouts/Layout.astro` | Glow opacity increase; teal bottom glow |
| `src/components/AnimatedExperience.tsx` | Timeline gradient; hover border |
| `src/components/AnimatedEducation.tsx` | Timeline gradient; hover border |
| `src/components/OpenSource.astro` | Default teal names; top border |
| `src/components/Header.astro` | `.dev` teal |
| `src/pages/[lang]/index.astro` | Glow pulse on heading dots |
| `src/styles/global.css` | glow-pulse keyframe |

## Verification
- `npm run build` passes
- Hero: colorful branded icons
- Project cards: colored tech badges (sky, emerald, orange, purple, etc.)
- Background: visible teal glow top + bottom
- Timeline: teal gradient line
- Both `/en/` and `/es/` render correctly
