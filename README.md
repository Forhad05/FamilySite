# Global Educational Pathways — Website

A React + TypeScript + Vite site for **Global Educational Pathways**, a family-run, Australia-focused education-counselling consultancy.

## About the business

Global Educational Pathways guides students end-to-end through studying in Australia — from choosing the right course through to visa approval and settling in. Rather than a faceless call centre, it's a small team offering direct, personal attention at every stage, led by a QEAC-certified (Qualified Education Agent Counsellor) lead counsellor.

Students and families are never charged directly — the consultancy is compensated through standard incentive arrangements with partner universities and colleges upon enrolment.

### Services

1. **Primary Assessment** — free evaluation of academic background, finances, and English proficiency.
2. **Application Processing** — full management of university applications, statements of purpose, and response tracking.
3. **Documentation** — academic records, financial proof, and Confirmation of Enrolment (CoE) review.
4. **Visa Application & Interview** — Subclass 500 preparation, GTE statements, financial evidence, interview readiness.
5. **Messaging & Communication Support** — day-to-day student and family queries.
6. **Post-Arrival Support** — in-person help in Sydney after students land.

### Study in Australia — quick facts

- Qualification levels span AQF 1–10, from English for Academic Purposes through to PhD.
- Two main intakes per year: **February/March** and **July/August** (some universities also run October/November or trimesters).
- Recommended to start the process **6–8 months** ahead of the target intake.
- Every student visa holder needs **Overseas Student Health Cover (OSHC)** for the duration of their stay.
- Popular fields: IT, Engineering, Business & Analytics, Education, Nursing & Health Sciences, Agriculture & Veterinary Science.

(Cost and fee figures live in `src/lib/sabina/study-in-australia.json` as general, non-binding estimates — exact numbers are confirmed per student.)

## Content model

Real site copy lives in `src/lib/sabina/*.json`, separate from UI structure:

| File | Contents |
|---|---|
| `home.json` | Homepage hero, "why choose us", services overview, study-abroad checklist, FAQs |
| `about.json` | Founder story and QEAC credential |
| `services.json` | Detailed service sections |
| `study-in-australia.json` | Programs, costs, intakes, OSHC, visa fees, deadlines |
| `team.json` | Team bios |
| `universities.json` | Partner institutions (placeholder — see below) |
| `faqs.json` | Standalone FAQ set |
| `contact-us.json` | Office contact details (placeholder — see below) |
| `index.json` | Manifest describing this folder, plus outstanding TODOs |

UI/UX layout is taken from a Figma reference file and re-skinned with the above content — the two are deliberately not 1:1 (see `CLAUDE.md` for the full hybrid design/content model and approved page↔route mapping).

## Outstanding content TODOs

Carried over from `src/lib/sabina/index.json` — **do not publish without resolving these**:

- [ ] Real name for the Marketing (Australia) team member (`team.json`), currently a placeholder.
- [ ] Real office address(es), phone, and email for both Bangladesh and Sydney (`contact-us.json`), currently `+61 000 000 000` and `TODO` fields.
- [ ] Actual partner universities/colleges (`universities.json` is intentionally empty — fabricating names would misrepresent real accreditation).
- [ ] Review exact tuition/visa-fee figures in `study-in-australia.json` before publishing (general public estimates, subject to change).
- [ ] Review any commission/incentive language before publishing — copy intentionally avoids naming specific amounts.
- [ ] Confirm "Global Educational Pathways" isn't already trademarked/in use elsewhere.

## Development

```bash
npm install
npm run dev      # start the Vite dev server
npm run build    # type-check (tsc -b) and build for production
npm run preview  # preview the production build locally
npm run lint     # oxlint
```

### Stack

- React 19 + TypeScript
- Vite 8
- React Router 7 (client-side routing across Home, About, Services, Study in Australia, Universities, Team, Contact)
- oxlint

### Project structure

- `src/pages/` — one component per route
- `src/sections/` — shared section building blocks
- `src/lib/sabina/` — real site content (JSON)
- `src/lib/figma-exports/` — images exported from the Figma design reference
- `src/lib/scraped/` — raw reference content pulled from a competitor site for structural inspiration only (not used verbatim anywhere)
- `src/hooks/usePageMeta.ts` — sets a per-page `<title>`/meta description on route change
