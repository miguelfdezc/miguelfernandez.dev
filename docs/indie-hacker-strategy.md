# Indie Hacker Strategy — Feb to Oct 2026

> Last updated: February 2026
> Context: 8 months until autonomo discount expires. Decision time.

---

## Current Situation

- **Job:** Senior Frontend Dev at Token City (Oct 2024 - Present). Actively interviewing for better-paying roles.
- **Master's:** AI Development at Big School (ongoing, heavy workload Feb-Mar, winding down Apr-May)
- **Autonomo:** Paying ~€80/month (tarifa plana discount). Expires Oct 2026 → jumps to ~€300/month. If dropped, can't get the discount again for 2-3 years.
- **Side project revenue:** ~€0 after 1.5 years as autonomo. DeskBreak has had 5-6 paid users total and a couple yearly subscribers. That's it.
- **Available time:** 5-10 hrs/week outside job + Master's
- **Monthly costs eating into salary:** Claude Code Max, ChatGPT, TaxDown accountant, autonomo, Master's payments, plus tried Outrank.so + Revid.ai (~€100/month) for SEO/video automation — all adding up to nearly a third of salary.

### What's been tried (and what didn't work)
- **Twitter/X marketing:** Only attracted other indie hackers, not actual target users (job seekers, office workers, real estate agents)
- **Paid automation tools (Outrank.so, Revid.ai):** ~€100+/month, no meaningful results. Dropped.
- **Building more products:** 10+ shipped projects, great code quality, near-zero revenue. The problem was never the building.

### The core lesson
The problem isn't the products — it's reaching the RIGHT people through the RIGHT channels. Twitter reaches indie hackers. Spanish job seekers use Google. Office workers find Chrome extensions in the Web Store. Real estate agents are in physical offices on the street. Each product needs its own distribution channel, and most of them aren't Twitter.

---

## The Big Decisions

### Priority #1: PhotoHouseAI (the main bet)

**Why PhotoHouseAI over everything else:**

- **B2B > B2C** — Real estate agents have money and clear ROI (better photos = sell properties faster). Job seekers pay €5 once. Office workers might pay $2/month for a break reminder. Agents will pay €30-50/month without blinking.
- **Local market advantage** — El Campello and Alicante are booming real estate markets (expats, tourism, coastal property). 20+ real estate offices on the daily beach walk alone. New ones opening regularly. Alicante city has hundreds more.
- **The product sells itself** — Before/after property photo comparisons are visually undeniable. Dark living room → bright, staged photo. Agents get it instantly.
- **Distribution is free and natural** — Walk into offices on the beach walk. No SEO, no Twitter, no paid tools. "Hey, I live here, I'm a developer, I built this tool. Here's what it does. Want to try it free?" That's not sales — it's showing your work.
- **Quick to MVP** — Template (Supastarter) is very complete. Configure Stripe + credits with Claude Code, deploy. Couple of weekends.
- **Higher ticket** — €30-50/month per agency vs €5 one-time (FotoCV) vs €2/month (DeskBreak)

**The math:** 5 agencies at €40/month = €200/month. 10 agencies = €400/month. That covers autonomo at full price and then some. And that's just El Campello — haven't touched Alicante, Benidorm, Torrevieja, or the rest of the coast.

**Next steps:**
1. Get PhotoHouseAI working — Stripe + credits + deploy (1-2 weekends with Claude Code)
2. Create 5-10 before/after examples from Idealista listings in El Campello
3. Walk into 5 offices with before/afters on phone
4. Offer free trial (10 photos free), then €30-50/month credit pack
5. If it works in El Campello → expand to Alicante city, then coast

### Priority #2: Finish the Master's

Non-negotiable. The AI credential helps whether you stay indie or land a better job. Heavy Feb-Mar, lighter Apr-May. Don't sacrifice this for side projects — the Master's has guaranteed career value, side projects are speculative.

### Priority #3: Job interviews

Keep interviewing. A salary jump from a better company is the most reliable income increase. The Master's + portfolio (Healthspan, 10 shipped projects, AI experience) makes you a strong candidate for senior/lead roles. This runs in parallel and doesn't conflict with anything.

### Priority #4: DeskBreak — untapped potential

Has paying users and solves a real pain (remote workers forgetting to take breaks). Competitors like LookAway have proven the market and grown organically through Reddit posts and X. DeskBreak is an improved version of simple Pomodoro apps (12 break types, YouTube guided breaks, stats tracking).

**Competitor analysis — LookAway (the benchmark):**
- **Mac-only** desktop app — $14.99 one-time or $45 lifetime license
- Also on **Setapp** (Netflix-of-Mac-apps, 250+ apps for one subscription, devs get 70-90% revenue share)
- Has a **companion iOS app ("LookAway Mirror")** in beta — syncs breaks from Mac to iPhone
- Grew organically via Reddit (r/remotework, r/productivity, r/WFH, r/ergonomics) and X
- Can do system-level things Chrome extensions can't: force screen lock, overlay on all apps, detect meetings/screen recordings, menubar presence

**Key insight: Chrome extensions are hard to monetize.** People expect them free. Desktop apps (especially Mac) have better monetization culture — $15-45 is normal for a Mac utility.

**Platform strategy for DeskBreak:**
1. **Chrome extension (keep) → Free tier / lead gen.** Already works, already has users. "Want more? Get the desktop app."
2. **Mac desktop app (build) → Primary paid product.** $15-45 one-time or subscription. Tauri or Electron can reuse existing React code. System-level features Chrome can't do (force lock screen, overlay, meeting detection, menubar). Distribute via direct sales + **Setapp** (they handle marketing, you get 70% revenue) + Mac App Store.
3. **iOS companion app (later) → Syncs with desktop.** Like LookAway Mirror. Vibrate phone/Apple Watch when break time. Not the primary product.
4. **B2B team plans (later) → Web admin dashboard + desktop client.** $5-15/employee/month. Companies buy for remote teams. HR/People ops love wellness tools.

**Distribution channels:**
- Reddit organic (r/remotework, r/productivity, r/WFH, r/ergonomics) — LookAway's proven playbook
- Setapp (Mac app subscription platform — built-in audience of Mac power users)
- Chrome Web Store optimization (30 min task, then leave)
- Product Hunt launch for desktop version
- For B2B: LinkedIn outreach to HR/People ops, remote-first company directories

**Not just passive income — real product with a clear path to growth.** The product is solid, the market is proven (LookAway), the monetization is clear (desktop app > Chrome extension), and the distribution channels are identified (Reddit, Setapp, direct).

### Priority #5 (on hold): FotoCV

**Deprioritized.** Initially seemed like the top bet because CVPhoto.app is a proven $2K/month model. But:
- Users pay first, then photos are generated — so AI costs scale with revenue, not ahead of it. The old €400-600/month estimate was wrong (assumed flat Astria subscription).
- Could switch from Astria AI to cheaper alternatives (Replicate, Fal AI, Gemini, etc.) to further reduce per-image cost
- Low ticket price (€5-10 per photo) — needs volume
- Emails/webhooks broken — needs fixing before it can function
- Spanish SEO would take months to rank
- No blog posts written yet

**Not dead, just parked.** The cost barrier is lower than initially thought (pay-per-use, not upfront). Main blockers are broken emails/webhooks and the SEO time investment. Could be revisited as a second product without needing PhotoHouseAI cash flow to subsidize it.

**B2B angle:** Instead of selling to individual job seekers (€5-10/photo, needs volume), could sell bulk packages to recruiting agencies, career coaching services, or university career departments (€50-200/month per organization). Higher ticket, fewer customers needed, businesses have budgets for this.

### Deprioritized: Everything else

These are all lower priority than PhotoHouseAI. Some could become sprint candidates later (Apr-May when Master's winds down), but NOT now.

---

## B2B vs B2C Analysis

**Key lesson from DeskBreak experience:** B2B is easier for indie hackers — higher ticket, fewer customers needed, businesses have budgets. That's why PhotoHouseAI was the right pivot. But other projects also have B2B angles worth noting.

### B2B Opportunities Across All Projects

| Project | Current | B2B Pivot | How | Potential Ticket |
|---------|---------|-----------|-----|-----------------|
| **PhotoHouseAI** | Already B2B | — | Real estate agencies | €30-50/mo per agency |
| **DeskBreak** | B2C ($2/mo) | **Best B2B candidate** | Sell team plans to companies for employee wellness. HR/People ops buy wellness tools. Roadmap already mentions "team collaboration features." | $5-15/employee/mo |
| **TourGuideAI** | B2C | Could be B2B | Sell to hotels, tour operators, Airbnb hosts — white-label guides for their guests | €20-50/mo per business |
| **FotoCV** | B2C (€5-10) | Could be B2B | Sell to recruiting agencies, career coaching services, university career departments (bulk photo packages) | €50-200/mo per org |
| **Guitar Practice Tracker** | B2C ($3/mo) | Could be B2B | Sell to music schools, guitar teachers (track student progress, assign practice) | €10-30/mo per teacher |
| **Healthspan** | B2C ($8-15/mo) | Don't force it | Couple/family focus is the differentiator. Corporate wellness would need a separate product — the intimate couple features don't translate to coworkers. | Stay B2C |

**DeskBreak B2B is the sleeper hit.** Companies already pay for employee wellness programs. "Keep your remote team healthy" is an easy sell to HR/People ops. And the product already works — it just needs a team dashboard, admin features, and company billing. The B2C extension could be the free tier that feeds the B2B funnel.

---

## All Projects — Final Verdict

### Active Focus
| Project | Action | Why |
|---------|--------|-----|
| **PhotoHouseAI** | MVP sprint → local sales in El Campello | B2B, local advantage, high ticket, free distribution |

### Real Business Candidates (need distribution strategy)
| Project | Status | Notes |
|---------|--------|-------|
| **DeskBreak Chrome** | Real business candidate | 5-6 paid users, couple yearly subs. Product is solid (12 break types, guided breaks, stats). LookAway proved the market grows via Reddit/organic. Needs: Chrome Web Store optimization + Reddit/community marketing. Desktop or mobile version could expand reach. Distribution was the missing piece, not the product. **B2B pivot potential — see B2B analysis above.** |
| **Healthspan** | Real business candidate | Most complete product (1,492 tests, 95% coverage, mobile ready). "Duolingo of longevity" vision — daily protocol, streaks, gamification, couples focus. Spanish-first in a growing biohacking/longevity market (Marcos Vazquez, RealFooding proved demand). $8-15/month pricing. Nutrition module 80% done, 6 more modules planned. Distribution is the challenge — needs App Store optimization, content marketing, community building. |
| **FotoCV** | Fixable MVP | Proven model (CVPhoto = €2K/mo). Pay-per-use costs scale with revenue. Needs email/webhook fix. **B2B angle: sell to recruiting agencies/career services instead of individual job seekers (€50-200/mo per org).** |

### Keep Running (delivered / done)
| Project | Status | Notes |
|---------|--------|-------|
| **Centro Dharma** | Delivered | Live client site. Done. |
| **Band Finder** | Portfolio | University thesis. Public repo for interviews. |
| **Portfolio site** | Live | miguelfernandez.dev on Astro 5. Already great. Visual overhaul plan exists for later polish. |
| **Indie Hacker Game** | Done | Already launched on X during vibe coding wave (pre-Claude Code era). Has leaderboard ranking + score sharing via Supabase (likely paused for inactivity on free tier). Had its moment. |

### Sprint Candidates (Apr-May, after Master's lightens)
| Project | Sprint effort | Potential | Notes |
|---------|--------------|-----------|-------|
| **TourGuideAI** | 3-5 days | Seasonal (summer) | 114 cities, Stripe works. Launch on Product Hunt before June. **B2B angle: sell to hotels/tour operators/Airbnb hosts as white-label guides (€20-50/mo).** |
| **vuejs.wiki** | 1 weekend | Brand/audience | 30 Q&As written, zero competition in Spanish Vue space. Compounds into career positioning. |
| **Guitar Practice Tracker** | 3-5 days | Niche SaaS | From Notion ideas (8.5 points). Personal passion, $3/month, loyal niche. **B2B angle: sell to music schools/guitar teachers (€10-30/mo per teacher).** |

### On Hold
| Project | Why on hold |
|---------|-------------|
| **SEO Directories** (5 on Directify) | Fix SSL when Directify resolves it. Passive content play. Not urgent. |

### Investigate Later
| Project | Question |
|---------|----------|
| **ObraGest** | Construction is booming in Spain. RevenueCat subs ready. But co-founder left — can you run it alone? |
| **PlanMark** | Same question. |

### Dead / Sunset
| Project | Reason |
|---------|--------|
| Game Portrait | Expire domain. AI art market commoditized. |
| ImgStudioAI | Redundant with PhotoHouseAI. |
| LaunchTone | No clear path to revenue. |
| AI Branding | Too generic. |
| Flight Tracker | Hobby project, no market. |
| Car Calculator/Comparator | Too generic, no monetization. |
| Food Comparator/NutritionPal/FoodMaps | Zero code, too competitive. |
| Social Reminder | Concept only. |
| Apply Logo to Anything | Commoditized by Canva. |
| Music Inpainting / AI Melody Filler | No backend, no payments, too niche. |
| v0 for React Native / Remix | Competing with well-funded companies. |
| Viber3D | No clear market. |
| More directory ideas | Already have 5+. |
| Vibe Coding Platform | Vercel CLI fork. Not original work. |

### Notion Ideas — Worth considering later
| Idea | Score | Notes |
|------|-------|-------|
| **Guitar Practice Tracker** | 8.5 | Sprint candidate for Apr-May |
| **Supermarket Prices Comparison** | — | Spain-specific, SEO potential ("comparador precios supermercado") |
| **CPR Songs** | — | Niche but interesting |
| **Custom Mobile Apps for SMB** | — | Productized service play (B2B by nature) |
| **Interview Prep SaaS** | — | Big scope, needs validation. Price-sensitive B2C users. |

Everything else in the 50+ Notion ideas: too early, too niche, or already done better by someone else.

---

## Master Ranking (Feb 2026)

Ranked by: revenue potential × distribution clarity × current readiness. B2B projects weighted higher (indie hacker lesson: B2B > B2C for starting out).

| # | Project | Model | Ticket | Distribution | Status |
|---|---------|-------|--------|-------------|--------|
| 1 | **PhotoHouseAI** | B2B | €30-50/mo per agency | Walk into offices (free, local) | MVP sprint active |
| 2 | **DeskBreak** (B2B pivot) | B2B | $5-15/employee/mo | LinkedIn outreach to HR, Reddit organic, Chrome Web Store | Product ready, needs team features + marketing |
| 3 | **Healthspan** | B2C | $8-15/mo | App Store, content marketing, biohacking communities | Most complete product (1,492 tests, mobile ready), needs distribution |
| 4 | **FotoCV** | B2C → B2B | €5-10/photo or €50-200/mo per org | Spanish SEO, or sell to recruiting agencies | Pay-per-use costs, needs email/webhook fix |
| 5 | **TourGuideAI** | B2C → B2B | €20-50/mo per hotel | Product Hunt, or sell to hotels/tour operators | 90% done, seasonal summer window |
| 6 | **vuejs.wiki** | Brand/audience | — | Dev communities, meetups | 1 weekend MVP, zero competition |
| 7 | **Guitar Practice Tracker** | B2C → B2B | $3/mo or €10-30/mo per school | Niche communities, music schools | Passion project, loyal niche |
| 8 | **Supermarket Prices** | SEO/affiliate | — | Spanish SEO | Concept, needs scraping |
| 9 | **Interview Prep SaaS** | B2C | — | Needs validation | Big scope, price-sensitive users |
| 10 | **Custom Mobile Apps** | B2B service | Per-project | Direct sales | Real money but trades time for money |

---

## Autonomo Decision Framework

**The question in October:** Are side projects generating ≥€300/month?

| Scenario | Decision |
|----------|----------|
| PhotoHouseAI has 8+ paying agencies | **Keep autonomo.** You have product-market fit. Scale to Alicante city. |
| PhotoHouseAI has 3-7 agencies + growing | **Probably keep.** Trajectory matters. If growing month-over-month, worth the investment. |
| PhotoHouseAI has 0-2 agencies after trying | **Drop autonomo.** You gave it a real shot with the right channel. Focus on career. Re-register in 2-3 years if something takes off. |
| Landed a much better job (big salary jump) | **Evaluate.** If new salary removes financial pressure, maybe keep autonomo as cheap insurance even at €300/month. |

**Important:** Dropping autonomo isn't failure. It's a business decision. You can still build side projects — you just can't invoice for them. If a project later explodes, re-register then.

---

## Cost Management

### Cut immediately
- ~~Outrank.so~~ (~€50/month) — already dropped
- ~~Revid.ai~~ (~€50/month) — already dropped
- Any other paid marketing tools that aren't converting

### Keep (justified)
- **Claude Code Max** — use for PhotoHouseAI sprint AND day job. Dual value.
- **TaxDown** — need accountant while autonomo is active
- **Autonomo** — €80/month until Oct, then decide
- **Master's payments** — non-negotiable, finishing

### Evaluate
- **ChatGPT subscription** — do you need both ChatGPT and Claude Code Max? If Claude covers your needs, consider dropping one.
- **Domain renewals** — see domain decisions below

---

## Domain Decisions

| Domain | Action | Urgency |
|--------|--------|---------|
| **housephotoai.com** | **KEEP** | Top priority project |
| **fotocv.es** | Renew | On hold but don't lose the domain |
| **fotocurriculum.com** | Renew | On hold but don't lose the domain |
| **fotocurriculum.es** | Renew | On hold but don't lose the domain |
| **deskbreak.app** | Keep | Passive income |
| **usehealthspan.com** | **KEEP** (2027) | Real business candidate — longevity/biohacking platform |
| **tourguideai.app** | Keep | Sprint candidate before summer |
| **nextjslandings.com** | Keep, fix SSL | Directify issue |
| **indiecourselist.com** | Keep, fix SSL | Directify issue |
| **customlandings.com** | Keep | Low cost |
| All other directory domains | Keep | Low cost, passive |
| **gameportrait.com** | **EXPIRE** | Dead project |
| **indiehackergame.com** | **EXPIRE** | Can host on subdomain if needed |

---

## Monthly Timeline: Feb → Oct 2026

### February-March (Master's heavy + PhotoHouseAI MVP)
- **Master's:** Priority. Heavy coursework period.
- **PhotoHouseAI:** 1-2 weekends — set up Stripe, credits, deploy with Claude Code
- **PhotoHouseAI:** Create 5-10 before/after examples from Idealista El Campello listings
- **PhotoHouseAI:** Walk into first 5 real estate offices
- **DeskBreak:** Optimize Chrome Web Store listing (30 min). Research LookAway's Reddit strategy for organic growth ideas.
- **Quick:** Fix directory SSL if Directify resolves the issue

### April-May (Master's winding down + PhotoHouseAI growth + first sprint)
- **PhotoHouseAI:** Expand to more El Campello offices, start Alicante city
- **PhotoHouseAI:** Iterate based on agent feedback (what features do they want?)
- **Sprint 1:** TourGuideAI — polish + launch on Product Hunt before summer
- **Evaluate:** How many paying PhotoHouseAI agencies? Is there growth?

### June-July (More time available)
- **PhotoHouseAI:** Scale if working. Benidorm, Torrevieja, rest of coast.
- **Sprint 2:** Guitar Practice Tracker
- **Master's final project:** Use as next product if possible
- **FotoCV:** Consider fixing (broken emails/webhooks). Costs are pay-per-use so no upfront investment needed beyond dev time.

### August-September (Decision time)
- **Hard look at the numbers.** Is PhotoHouseAI making €300+/month?
- **If yes:** Keep autonomo. You have a real business. Consider FotoCV as second product.
- **If no:** Prepare to drop autonomo in October. No shame — focus on career.
- **Job situation:** Did interviews lead to a better offer? Factor salary into autonomo math.

### October (D-Day)
- **Keep or drop autonomo** based on revenue trajectory
- **Either way:** You have a Master's in AI, 10+ shipped projects, interview experience, and you actually tried the right marketing channels this time

---

## Key Lessons Learned

1. **Building ≠ Revenue.** 10 shipped products, near-zero revenue. The bottleneck was always distribution, not code quality.
2. **Wrong channel = wasted effort.** Twitter reaches indie hackers, not customers. Each product's users live somewhere specific — find that place.
3. **Paid automation tools are a trap at pre-revenue stage.** €100+/month for Outrank + Revid with no results. Use Claude Code (already paying for it) to create content manually.
4. **B2B local > B2C global.** One real estate agent paying €40/month > 100 job seekers who might pay €5 once. Especially when the agents are literally on your daily walk.
5. **The best distribution channel for PhotoHouseAI is your feet.** Walk into offices. Show before/afters. Let the product sell itself.
6. **Don't spread across 10 projects.** Focus on one (PhotoHouseAI), let the rest run passively or wait.

---

## The Bottom Line

**One product. One channel. Eight months.**

PhotoHouseAI + walking into El Campello real estate offices. That's the play.

Everything else is secondary: Master's runs in parallel (non-negotiable), job interviews continue (safety net), DeskBreak and Healthspan have real potential but need distribution strategy, other projects wait their turn.

If 8 months of selling to local real estate agents doesn't work, drop autonomo knowing you finally tried the right approach — not more building, not Twitter, not paid tools — but actually talking to customers who have money and a problem you solve.
