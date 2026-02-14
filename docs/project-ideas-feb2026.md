# Project Ideas — Save for After Coosto Interview Process

## Context
These ideas came up during Coosto interview prep (Feb 11, 2026). Both are worth exploring but should NOT distract from the 3rd round interview prep. Revisit after the Coosto process is resolved.

---

## Idea 1: vuejs.wiki (like reactjs.wiki by Midudev)

### What
A Vue.js interview Q&A site in Spanish, modeled after Midudev's reactjs.wiki. Q&A format organized by difficulty (Principiante / Intermedio / Avanzado).

### Why it's a good idea
- **Doesn't exist yet** — confirmed via search, no Vue equivalent of reactjs.wiki
- Midudev proved the demand with React (huge in Spanish dev community)
- Vue has a big European community, especially Spain (VueMadrid, Alicante Frontend)
- Positions Miguel as a Vue community figure (good for career + brand)
- Content already exists — `coosto-vue-wiki-qa.md` has 30 Q&A as seed content
- Simple to build and maintain (static site)
- Could build with **VitePress** (dogfooding, same tool Coosto uses for component docs)

### Scope (MVP)
- VitePress site with the 30 Q&A from `coosto-vue-wiki-qa.md`
- Organized by difficulty level
- Search functionality (VitePress built-in)
- Domain: vuejs.wiki (check availability)
- Deploy on Vercel/Netlify
- Open source on GitHub (community contributions)

### Potential growth
- Community contributions via GitHub PRs
- Social media presence (Twitter/X, LinkedIn)
- Present at VueMadrid, Alicante Frontend meetups
- Add Vue 3 migration guides, Pinia patterns, Vitest guides
- Could become THE Spanish Vue resource

### Tech stack
- VitePress (Vue-powered, same as Coosto uses)
- TypeScript
- Deployed on Vercel
- GitHub repo for community contributions

### Estimated effort
- MVP: 1 weekend (~8-10 hours)
- Content already written, just needs site structure

### Synergy with interview prep
- Building with VitePress = learning a tool Coosto uses
- Writing Vue content = studying Vue patterns
- Can mention at Coosto as community initiative

---

## Idea 2: Interview Prep SaaS (Spanish/European market)

### What
AI-powered interview preparation tool for the Spanish/European job market. Takes messy inputs (emails, WhatsApp, LinkedIn profiles, audio notes) and outputs structured interview prep: company research, interviewer profiles, phase-by-phase prep plans, cheatsheets, mock Q&A.

### Why it's interesting
- The process we did today was genuinely useful and took hours manually
- Spanish/European interview culture differs from US (less leetcode, more cultural fit, different salary norms, convenio/autonomo considerations)
- Could complement FotoCV (same customer: job seeker)
- Few competitors in the European/Spanish market

### Concerns
- The real value was the AI conversation, not a rigid SaaS flow
- Monetization unclear (job seekers are price-sensitive)
- Scope is big — company research, NLP for audio/text, LinkedIn scraping (legal issues), multi-phase prep generation
- Needs product-market fit validation before building

### What it would need
- AI backbone (Claude/OpenAI API)
- Input processing: emails, WhatsApp exports, audio transcription, LinkedIn profiles
- Output: structured prep docs, cheatsheets, Q&A by phase
- Interviewer profiling from public data
- Spanish/European interview culture knowledge base
- User accounts, saved interview processes

### Estimated effort
- MVP: 2-4 weeks
- Full product: months
- Needs validation first (talk to job seekers, recruiters)

### Next step
- Validate demand: ask at Alicante Frontend meetup, post on Twitter
- Check if FotoCV users would want this
- Don't build until validated

---

## Priority
1. **NOW:** Focus on Coosto round 3 prep (case study + live coding)
2. **After Coosto process:** Build vuejs.wiki MVP (1 weekend, low risk, high visibility)
3. **Later:** Validate interview prep SaaS idea (if vuejs.wiki gains traction, you'll have audience to test with)

---

## TODO
- [ ] vuejs.wiki domain availability checked
- [ ] Seed content exists at `docs/coosto-vue-wiki-qa.md` (30 Q&A)
- [ ] VitePress project scaffold tested
- [ ] FotoCV synergy explored
