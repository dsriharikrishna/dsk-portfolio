# Project Changelog & Commit History (`docs/LOGS.md`)

All notable changes, architectural milestones, and commit history for the **Dasari Sriharikrishna Portfolio** are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) and adheres to [Conventional Commits](https://www.conventionalcommits.org/).

---

## 📌 Quick Summary of Milestones

| Release / Phase | Timeframe | Highlights |
|---|---|---|
| **v1.2.1** | September 2026 | Headline & typography standardization across all 14 UI sections via unified `SectionHeader`, and consolidation of documentation into `docs/`. |
| **v1.2.0** | September 2026 | Feature-based architecture migration, Next.js 16 & React 19 upgrade, Framer Motion animations, Magic UI components (particles, pointer, meteors, smooth cursor), interactive StackMap, dedicated recruiter & engineer routes. |
| **v1.0.0** | February 2026 | Initial portfolio launch with Next.js App Router, Tailwind CSS, Lucide icons, Resend email service, Dev.to integration, and Netlify deployment configuration. |

---

## 📜 Chronological Commit Log & Changelog

### 🚀 Phase 2: Feature-Based Architecture & Interactive UI Overhaul (September 2026)

#### [Work in Progress / Working Tree] - 2026-09-12
- **Type**: `style` / `refactor`
- **Subject**: `refactor: unify section headline typography and consolidate documentation into docs/`
- **Description**:
  - Standardized [`SectionHeader`](file:///c:/PROJECTS/dsk-portfolio/src/components/shared/SectionHeader.tsx) strictly to **`center`** alignment across the entire portfolio for total visual symmetry, featuring consistent tag typography, gradient accent highlights, and centered subtitles.
  - Applied the unified centered `SectionHeader` hierarchy across all 15 components: `Journey`, `About`, `Problems`, `Principles`, `EngineeringLab`, `StackMap`, `Experience`, `Projects`, `Skills`, `GithubSection`, `BlogSection`, `ResumeSection`, `Contact`, `Education`, `Certifications`, and `/blog` page.
  - Eliminated excessive vertical paddings, margins, and gaps across all sections (reducing `py-32`/`py-24` down to compact, punchy `py-16 md:py-20`, `mb-16` down to `mb-6 md:mb-8`, and container `gap-20`/`gap-16` down to `gap-8 md:gap-10`).
  - Upgraded [`Hero`](file:///c:/PROJECTS/dsk-portfolio/src/components/sections/Hero.tsx) `<h1>` with responsive fluid typography (`text-4xl sm:text-5xl md:text-6xl`).
  - Consolidated all markdown documentation (`GEMINI.md`, `LOGS.md`, `CHANGELOG.md`, `DEVTO_ARTICLE.md`) into a single [`docs/`](file:///c:/PROJECTS/dsk-portfolio/docs) folder.
- **Changed Files**:
  - `src/components/shared/SectionHeader.tsx`
  - `src/components/sections/Hero.tsx`
  - `src/components/layout/Footer.tsx`
  - `src/app/recruiter/page.tsx`
  - `src/app/blog/page.tsx`
  - `src/features/about/components/Journey.tsx`
  - `src/features/about/components/About.tsx`
  - `src/features/about/components/Problems.tsx`
  - `src/features/about/components/Principles.tsx`
  - `src/features/projects/components/EngineeringLab.tsx`
  - `src/features/projects/components/Projects.tsx`
  - `src/features/skills/components/StackMap.tsx`
  - `src/features/skills/components/Skills.tsx`
  - `src/features/experience/components/Experience.tsx`
  - `src/features/experience/components/Education.tsx`
  - `src/features/experience/components/Certifications.tsx`
  - `src/features/github/components/GithubSection.tsx`
  - `src/features/blog/components/BlogSection.tsx`
  - `src/features/contact/components/ResumeSection.tsx`
  - `src/features/contact/components/Contact.tsx`

---

#### [Commit `21a3f78`] - 2026-09-09
- **Commit Hash**: `21a3f785af46519791616b3ef9177d8bbdfa2ba1`
- **Short Hash**: `21a3f78`
- **Author**: dsriharikrishna19 `<srihari.dasari@signitives.net>`
- **Date**: Wed Sep 9 10:56:41 2026 +0530
- **Type**: `feat`
- **Subject**: `feat: add interactive stack map visualization component to skills feature`
- **Description**:
  - Enhanced the interactive stack map visualization component (`StackMap.tsx`) under `src/features/skills/components/`.
  - Improved category selection controls, animated node state transitions, and responsive grid display for skill proficiencies and tags.
- **Changed Files**:
  - `src/features/skills/components/StackMap.tsx` (+30, -13)

---

#### [Commit `d0583e6`] - 2026-09-09
- **Commit Hash**: `d0583e62f5c7445b1d8b4c7244be9f53d502c29c`
- **Short Hash**: `d0583e6`
- **Author**: dsriharikrishna19 `<srihari.dasari@signitives.net>`
- **Date**: Wed Sep 9 10:46:43 2026 +0530
- **Type**: `feat`
- **Subject**: `feat: add Hero section and Resume component with interactive animations`
- **Description**:
  - Fine-tuned Framer Motion entry animations and layout styling for `Hero.tsx`.
  - Polished the resume download and preview trigger in `src/features/contact/components/ResumeSection.tsx`.
- **Changed Files**:
  - `src/components/sections/Hero.tsx` (+2, -2)
  - `src/features/contact/components/ResumeSection.tsx` (+3, -3)

---

#### [Commit `db7503a`] - 2026-09-09
- **Commit Hash**: `db7503a3fd35f0f16e38cfadac05708eb995c8ea`
- **Short Hash**: `db7503a`
- **Author**: dsriharikrishna19 `<srihari.dasari@signitives.net>`
- **Date**: Wed Sep 9 10:37:17 2026 +0530
- **Type**: `feat`
- **Subject**: `feat: implement Experience component with responsive timeline layout`
- **Description**:
  - Refined timeline connector styling, responsive spacing, and role details rendering in `Experience.tsx`.
- **Changed Files**:
  - `src/features/experience/components/Experience.tsx` (+2, -2)

---

#### [Commit `07980fe`] - 2026-09-09
- **Commit Hash**: `07980fe61088aaa93c1c39b1af48f67abf8d5aee`
- **Short Hash**: `07980fe`
- **Author**: dsriharikrishna19 `<srihari.dasari@signitives.net>`
- **Date**: Wed Sep 9 10:33:40 2026 +0530
- **Type**: `feat`
- **Subject**: `feat: implement about and experience feature components with associated data and types`
- **Description**:
  - Integrated high-resolution company and personal identity branding assets (`dsk-1.png`, `intern pe.png`, `signitives.png`).
  - Added `logo` attribute support to the `Experience` interface in `src/types/index.ts`.
  - Refactored `About.tsx` and `Experience.tsx` to dynamically bind organization assets, timelines, and credentials.
- **Changed Files**:
  - `public/dsk-1.png` (new binary asset)
  - `public/intern pe.png` (new binary asset)
  - `public/signitives.png` (new binary asset)
  - `src/features/about/components/About.tsx` (+20, -29)
  - `src/features/experience/components/Experience.tsx` (+44, -29)
  - `src/features/experience/data/experience.ts` (+2, -0)
  - `src/types/index.ts` (+1, -0)

---

#### [Commit `fe5176f`] - 2026-09-08
- **Commit Hash**: `fe5176f127db13054ab50613321fac7e473d3e01`
- **Short Hash**: `fe5176f`
- **Author**: dsriharikrishna19 `<srihari.dasari@signitives.net>`
- **Date**: Tue Sep 8 22:37:33 2026 +0530
- **Type**: `refactor`
- **Subject**: `refactor: upgrade to Next.js 16, replace GSAP with Framer Motion, and transition to a Feature-Based Architecture`
- **Description**:
  - Completely updated `README.md` to reflect the Next.js 16 upgrade, Framer Motion adoption over GSAP, and the new Domain-Driven / Feature-Based folder layout.
- **Changed Files**:
  - `README.md` (+45, -45)

---

#### [Commit `53bdb29`] - 2026-09-08
- **Commit Hash**: `53bdb2973afb70f60b35eea0d46eb90c22bf38d5`
- **Short Hash**: `53bdb29`
- **Author**: dsriharikrishna19 `<srihari.dasari@signitives.net>`
- **Date**: Tue Sep 8 22:23:00 2026 +0530
- **Type**: `feat`
- **Subject**: `feat: implement email service and base theme styling with UI components and dependencies update`
- **Description**:
  - Streamlined `src/app/globals.css` by converting custom redundant CSS utility declarations into standard Tailwind color tokens and CSS variables.
  - Enhanced `Footer.tsx`, `GlassCard.tsx`, and `SectionHeader.tsx` layout styling.
  - Cleaned up `src/services/email.ts` and updated Tailwind animations in `tailwind.config.ts`.
- **Changed Files**:
  - `package.json` (+2, -2)
  - `package-lock.json` (+59, -59)
  - `src/app/globals.css` (+11, -293)
  - `src/components/layout/Footer.tsx` (+13, -8)
  - `src/components/shared/GlassCard.tsx` (+1, -1)
  - `src/components/shared/SectionHeader.tsx` (+3, -3)
  - `src/services/email.ts` (+0, -1)
  - `tailwind.config.ts` (+5, -0)

---

#### [Commit `ee0587a`] - 2026-09-08
- **Commit Hash**: `ee0587aee043fdedaed54d1466fe3e5bcd4fead0`
- **Short Hash**: `ee0587a`
- **Author**: dsriharikrishna19 `<srihari.dasari@signitives.net>`
- **Date**: Tue Sep 8 21:58:58 2026 +0530
- **Type**: `feat`
- **Subject**: `feat: initialize portfolio project with structured feature-based architecture and custom UI components`
- **Description**:
  - **Major Structural Architecture Overhaul**:
    - Disassembled flat monolithic `src/components/sections/` and `src/data/` directories.
    - Built domain-driven features: `about`, `experience`, `projects`, `skills`, `github`, `blog`, `contact`, each with dedicated `components/` and `data/`.
  - **Added Magic UI & Visual Effects**:
    - `highlighter.tsx`: Interactive luminous hover effect
    - `marquee.tsx`: Infinite scrolling marquee
    - `meteors.tsx`: Animated falling meteors background effect
    - `particles.tsx`: Interactive canvas particle constellation
    - `pointer.tsx`: Custom neon pointer effect
    - `smooth-cursor.tsx`: Spring-physics fluid cursor follower
    - `text-reveal.tsx`: Scroll-triggered text revelation
  - **Added Specialized Routes**:
    - `src/app/engineer/page.tsx`: Technical engineering deep-dive
    - `src/app/recruiter/page.tsx`: Fast-track summary for hiring teams
    - `src/app/projects/page.tsx`: Expanded portfolio projects directory
  - **Added Novel Feature Components**:
    - `EngineeringLab.tsx`: Interactive sandbox and experiments viewer
    - `StackMap.tsx`: Skill cluster map
    - `Journey.tsx`, `Principles.tsx`, `Problems.tsx`: Deeper insights into engineering philosophy and problem solving
- **Changed Files**:
  - 55 files changed (+3620, -1601)

---

### 📦 Phase 1: Initial Launch & Portfolio Foundation (February 2026)

#### [Commit `78154ca`] - 2026-02-25
- **Commit Hash**: `78154cafcdc35b5f940204a9a049c6b2a682bb8e`
- **Short Hash**: `78154ca`
- **Author**: dsriharikrishna `<dsriharikrishna2002@gmail.com>`
- **Date**: Wed Feb 25 09:06:48 2026 +0530
- **Type**: `fix`
- **Subject**: `updated url`
- **Description**:
  - Updated live canonical portfolio URL and Dev.to post links in `DEVTO_ARTICLE.md` and `src/data/resume.ts`.
- **Changed Files**:
  - `DEVTO_ARTICLE.md` (+2, -2)
  - `src/data/resume.ts` (+1, -1)

---

#### [Commit `a6ac066`] - 2026-02-25
- **Commit Hash**: `a6ac06687fb50e222983f6389ca3225a52a50d54`
- **Short Hash**: `a6ac066`
- **Author**: dsriharikrishna `<dsriharikrishna2002@gmail.com>`
- **Date**: Wed Feb 25 09:04:51 2026 +0530
- **Type**: `fix`
- **Subject**: `Update email.ts`
- **Description**:
  - Fixed notification recipient target email address in `src/services/email.ts`.
- **Changed Files**:
  - `src/services/email.ts` (+1, -1)

---

#### [Commit `23d8c88`] - 2026-02-25
- **Commit Hash**: `23d8c8834f9136771c6f04b0a9c2a51bf25062f4`
- **Short Hash**: `23d8c88`
- **Author**: dsriharikrishna `<dsriharikrishna2002@gmail.com>`
- **Date**: Wed Feb 25 09:00:40 2026 +0530
- **Type**: `feat`
- **Subject**: `changes done`
- **Description**:
  - Initial full-stack portfolio codebase setup.
  - Configured Next.js App Router, TypeScript, ESLint, Prettier, PostCSS, and Tailwind CSS.
  - Implemented core sections: `Hero`, `About`, `Certifications`, `Contact`, `Education`, `Experience`, `GithubMetrics`, `Projects`, `Skills`.
  - Added shared glassmorphism cards (`GlassCard.tsx`) and scroll animations (`ScrollAnimation.tsx`).
  - Added Resend contact API backend integration with email validation schemas via Zod.
  - Configured Netlify deployment file (`netlify.toml`) and Dev.to article documentation (`DEVTO_ARTICLE.md`).
- **Changed Files**:
  - 54 files created (+10,667 insertions)

---

#### [Commit `cb4805c`] - 2026-02-25
- **Commit Hash**: `cb4805cc96756a88c9a7f2c26f9f5c6cf652d8ca`
- **Short Hash**: `cb4805c`
- **Author**: Dasari Srihari Krishna `<114545573+dsriharikrishna@users.noreply.github.com>`
- **Date**: Wed Feb 25 08:52:06 2026 +0530
- **Type**: `chore`
- **Subject**: `Initial commit`
- **Description**:
  - Created repository with initial `README.md`.
- **Changed Files**:
  - `README.md` (+1, -0)

---

## 📝 How to Maintain and Track Future Logs

When committing new work to this repository:
1. Append the new entry at the top of the **Chronological Commit Log** under the corresponding milestone or a new version header.
2. Follow the standardized entry template:
   ```markdown
   #### [Commit `<short_hash>`] - YYYY-MM-DD
   - **Commit Hash**: `<full_hash>`
   - **Short Hash**: `<short_hash>`
   - **Author**: `<author_name>` `<email>`
   - **Date**: `<date_with_timezone>`
   - **Type**: `feat` | `fix` | `refactor` | `docs` | `style` | `chore`
   - **Subject**: `<commit_subject>`
   - **Description**:
     - Bulleted breakdown of key functional and technical modifications.
   - **Changed Files**:
     - `path/to/file` (+lines_added, -lines_removed)
   ```
