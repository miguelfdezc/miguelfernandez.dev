# Visual Impact Overhaul: Color, Hero, 21st.dev, Lighthouse

## Context
The portfolio works but looks too "generic dark theme." Dark mode is too black, light mode is too plain white. Hero wastes 50% of screen (empty right side). Only 4 of many available 21st.dev components are used. Lighthouse has several quick wins missing (no JSON-LD, no skip link, no font preload). Goal: make recruiters say "damn we NEED to hire this guy" AND impress technical reviewers on GitHub.

---

## Phase 1: Color Palette — Warmer, Richer (30 min)

### `src/styles/global.css`

**Dark mode** — increase chroma, shift hue warmer (60→55):

| Variable | Current | New |
|----------|---------|-----|
| `--background` | `oklch(0.16 0.008 60)` | `oklch(0.145 0.014 55)` |
| `--card` | `oklch(0.20 0.008 60)` | `oklch(0.185 0.014 55)` |
| `--popover` | `oklch(0.20 0.008 60)` | `oklch(0.185 0.014 55)` |
| `--secondary` | `oklch(0.24 0.008 60)` | `oklch(0.22 0.012 55)` |
| `--muted` | `oklch(0.24 0.008 60)` | `oklch(0.22 0.012 55)` |
| `--accent` | `oklch(0.24 0.015 180)` | `oklch(0.22 0.02 175)` |

**Light mode** — shift from clinical white to warm cream (hue 60→70):

| Variable | Current | New |
|----------|---------|-----|
| `--background` | `oklch(0.98 0.002 60)` | `oklch(0.975 0.005 70)` |
| `--card` | `oklch(1 0 0)` | `oklch(0.99 0.003 70)` |
| `--popover` | `oklch(1 0 0)` | `oklch(0.99 0.003 70)` |
| `--secondary` | `oklch(0.94 0.008 60)` | `oklch(0.94 0.01 65)` |
| `--muted` | `oklch(0.94 0.004 60)` | `oklch(0.94 0.006 65)` |
| `--border` | `oklch(0.9 0.004 60)` | `oklch(0.88 0.008 65)` |

Also update `html:not(.dark) body` background to match.

### `src/layouts/Layout.astro` — background effects

- Enhance ambient glow: 12% → 15% opacity, larger ellipse
- Add subtle warm glow at bottom of page (new radial gradient, oklch hue 30 at 6% opacity)
- Make dot grid slightly more subtle in light mode (add `dark:opacity-100 opacity-60`)

---

## Phase 2: Hero Redesign — Fill the Right Side (2-3 hrs)

### `src/components/Hero.astro`

Convert from single `max-w-3xl` block to two-column grid:
```
grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center
```
- Left: existing text content (badge, h1, subtitle, description, CTAs)
- Right: new `<HeroVisual client:load />` React island (hidden on mobile: `hidden lg:flex`)

### New: `src/components/HeroVisual.tsx`

**Orbiting circles** with tech stack icons around a central `</>` element:
- Inner orbit (radius ~100, 25s): React, TypeScript, Next.js icons
- Outer orbit (radius ~170, 35s, reverse): AI, Tailwind, Supabase, Astro icons
- Center: stylized code symbol in a bordered card with backdrop-blur
- Pure CSS animation (zero perf cost, no canvas/WebGL)

**Install:** `npx shadcn@latest add "https://21st.dev/r/magicui/orbiting-circles"`

### New: `src/components/TechIcons.tsx`

React SVG versions of the tech icons (copy SVG paths from existing `src/components/icons/*.astro` files). Needed because `.astro` components can't be imported in `.tsx`.

### `src/components/Hero.astro` — add Particles background

**Install:** `npx shadcn@latest add "https://21st.dev/r/magicui/particles"`

Subtle particle field behind the hero section:
- quantity: ~40, staticity: 60, size: 0.5
- Primary color, low opacity
- Respect `prefers-reduced-motion`
- Use `client:visible`

### Delete: `src/components/AnimatedHero.tsx`

Unused 126-line duplicate of Hero.astro. Dead code cleanup.

---

## Phase 3: Lighthouse Quick Wins (1-2 hrs)

### 3A. JSON-LD structured data — `src/layouts/Layout.astro`
Add `Person` schema in `<head>`: name, url, jobTitle (bilingual), sameAs (GitHub, LinkedIn), knowsAbout, alumniOf.

### 3B. Font preloading — `src/layouts/Layout.astro`
Add `<link rel="preload">` for critical Geist Sans woff2 files (400, 700 weights).

### 3C. Skip-to-content link — `src/layouts/Layout.astro` + `src/pages/[lang]/index.astro`
Add visually-hidden skip link as first child of `<body>`. Add `id="main-content"` to `<main>`.
Add translations: "Skip to main content" / "Ir al contenido principal" in `src/i18n/ui.ts`.

### 3D. Preconnect hints — `src/layouts/Layout.astro`
Add `<link rel="preconnect" href="https://datafa.st">` + dns-prefetch fallback.

### 3E. Mobile menu accessibility — `src/components/Header.astro`
Add `aria-expanded="false"` and `aria-controls="mobile-menu"` to the toggle button. Update script to toggle `aria-expanded` on click/close.

### 3F. Image dimensions — `src/components/AnimatedProjectCard.tsx`
Add `width={600}` `height={featured ? 288 : 176}` and `decoding="async"` to project images.

### 3G. Favicon optimization — `src/layouts/Layout.astro`
Current `favicon.ico` is 270KB. Switch primary to SVG favicon (749 bytes), keep .ico as fallback with `sizes="48x48"`.

---

## Phase 4: Visual Polish with 21st.dev (1 hr)

### Section heading glow — `src/pages/[lang]/index.astro`
Add `shadow-[0_0_8px_2px] shadow-primary/30` to the dot span next to each section heading. CSS-only, no install.

### Optional: RetroGrid in Contact — `src/components/Contact.astro`
Install `npx shadcn@latest add "https://21st.dev/r/magicui/retro-grid"` and add as background behind MagicCard in contact section. Only if it looks good after testing.

---

## Phase 5: Code Quality (1 hr)

### Type-safe translation keys — `src/i18n/index.ts` + `src/i18n/ui.ts`
Extract `TranslationKey` union type from `ui["en"]` keys. Change `useTranslations` return type from `(key: string) => string` to `(key: TranslationKey) => string`.

### Extract shared React SVG icons — `src/components/icons/react/index.tsx`
Create barrel file with GitHubIcon, LinkedInIcon, MailIcon, ExternalLinkIcon, DownloadIcon. Replace inline SVG duplicates across AnimatedProjectCard.tsx, AnimatedExperience.tsx, etc.

---

## shadcn Nova Theme — SKIP

Not worth the disruption. Nova mainly changes padding/spacing/radius. Our OKLCH palette is already custom. Migration would overwrite tokens and require retesting every component. If we want tighter spacing, just adjust `--radius` from `0.625rem` to `0.5rem`.

---

## Files Summary

| Action | File |
|--------|------|
| Modify | `src/styles/global.css` — color palette |
| Modify | `src/layouts/Layout.astro` — bg effects, JSON-LD, font preload, skip link, preconnect, favicon |
| Modify | `src/components/Hero.astro` — two-column grid, particles |
| Create | `src/components/HeroVisual.tsx` — orbiting circles |
| Create | `src/components/TechIcons.tsx` — React SVG icons |
| Create | `src/components/ui/orbiting-circles.tsx` — via 21st.dev CLI |
| Create | `src/components/ui/particles.tsx` — via 21st.dev CLI |
| Delete | `src/components/AnimatedHero.tsx` — dead code |
| Modify | `src/components/Header.astro` — aria-expanded |
| Modify | `src/components/AnimatedProjectCard.tsx` — image dimensions |
| Modify | `src/pages/[lang]/index.astro` — main id, heading glow |
| Modify | `src/i18n/ui.ts` — skip link translations |
| Modify | `src/i18n/index.ts` — type-safe keys |
| Optional | `src/components/Contact.astro` — retro grid |

---

## Verification
- `npm run build` passes at every phase
- Dark mode: warm chocolate feel, not flat black
- Light mode: warm cream, not clinical white
- Hero: orbiting tech icons on right side, particles in background
- Lighthouse: 95+ on Performance, Accessibility, Best Practices, SEO
- All animations respect `prefers-reduced-motion`
- Both `/en/` and `/es/` render correctly
