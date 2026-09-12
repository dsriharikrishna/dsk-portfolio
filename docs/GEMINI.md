# GEMINI.md - AI Agent Context & Repository Guidelines

Welcome to the **Dasari Sriharikrishna Portfolio** repository (`portfolio-dasari-sriharikrishna`). This document provides comprehensive context, architectural patterns, design standards, and guidelines for AI coding assistants (such as Google Gemini, Antigravity, and Claude) working on this codebase.

---

## 1. Project Overview & Objectives

- **Owner**: Dasari Sriharikrishna
- **Role**: Software / Full-Stack Engineer
- **Project Type**: Production-ready, personal portfolio and engineering showcase
- **Primary Goal**: Showcase engineering expertise, full-stack projects, interactive stack maps, blogs, and provide an interactive contact & resume portal.
- **Core Focus**: High visual polish (cinematic dark mode, glowing accents, glassmorphism, micro-animations) combined with clean, scalable, type-safe architecture.

---

## 2. Technology Stack & Dependencies

### Core Frameworks & Runtime
- **Runtime & Language**: Node.js, TypeScript 5.4+ (strict mode enabled)
- **Framework**: Next.js 16 (App Router with Turbopack support)
- **React**: React 19 (Server and Client Components)

### Styling & UI Systems
- **CSS Engine**: Tailwind CSS 3.4+ (`tailwind.config.ts`, `postcss.config.js`)
- **UI Component Primitives**: Radix UI (`@radix-ui/react-icons`, `@radix-ui/react-tooltip`) + shadcn/ui patterns
- **Styling Helpers**: `clsx`, `tailwind-merge`, `class-variance-authority` (via `src/lib/utils.ts` `cn` helper)
- **Icons**: `lucide-react`
- **Design System Aesthetics**: Glassmorphism, cyber/cinematic glowing accents, custom animated cursors, particles, and meteors

### Animations
- **Primary Animation Engine**: Framer Motion 13 (`framer-motion`, `motion`)
- **Canvas / Interactive**: Custom Canvas-based Particle field, Smooth Cursor, Rough Notation (`rough-notation`)
- **Animation Utilities**: `src/lib/animations.ts`

### Forms & Backend Integrations
- **Form Handling**: React Hook Form 7.52+
- **Schema Validation**: Zod 3.23+ (`src/lib/validations.ts`)
- **Email Service**: Resend (`resend` SDK) via Next.js Route Handler (`src/app/api/contact/route.ts` / `src/services/email.ts`)
- **Toast Notifications**: `sonner`

---

## 3. Architecture & Project Structure

The project strictly follows a **Feature-Based Architecture (Domain-Driven Structure)**. Business logic, components, and static data are co-located by domain rather than scattered into monolithic folders.

```
dsk-portfolio/
├── docs/                        # Unified documentation directory
│   ├── README.md                # Documentation index
│   ├── GEMINI.md                # AI agent instructions & guidelines
│   ├── LOGS.md                  # Detailed changelog & commit history
│   ├── CHANGELOG.md             # Changelog pointer
│   └── DEVTO_ARTICLE.md         # Dev.to article documentation
├── components.json              # shadcn/ui configuration
├── next.config.mjs              # Next.js configuration
├── tailwind.config.ts           # Tailwind CSS configuration & design tokens
├── tsconfig.json                # TypeScript compiler configuration
├── .eslintrc.js                 # ESLint rules
├── .prettierrc                  # Prettier formatting rules
├── public/                      # Static assets (images, icons, resume, etc.)
│   ├── dsk-1.png
│   ├── signitives.png
│   ├── intern pe.png
│   └── favicon.svg
└── src/
    ├── app/                     # Next.js App Router routes & layouts
    │   ├── api/contact/         # Contact submission API handler
    │   ├── blog/                # Blog route
    │   ├── engineer/            # Deep dive / engineering perspective route
    │   ├── projects/            # Dedicated projects route
    │   ├── recruiter/           # Quick recruiter summary route
    │   ├── resume/              # Dedicated resume viewer & download route
    │   ├── globals.css          # Design tokens, CSS variables, utility layers
    │   ├── layout.tsx           # Root layout with fonts, smooth cursor, navbar & footer
    │   └── page.tsx             # Home landing page assembling all feature sections
    ├── components/
    │   ├── layout/              # Global shell components (Navbar.tsx, Footer.tsx)
    │   ├── shared/              # Reusable cross-feature UI (GlassCard, SectionHeader, etc.)
    │   └── ui/                  # Primitives & Magic UI (highlighter, marquee, meteors, particles, pointer, etc.)
    ├── features/                # Domain-specific feature modules
    │   ├── about/
    │   │   ├── components/      # About, Journey, Principles, Problems
    │   │   └── data/about.ts    # Bio, milestones, and principles data
    │   ├── experience/
    │   │   ├── components/      # Experience timeline, Education, Certifications
    │   │   └── data/            # experience.ts, education.ts, certifications.ts
    │   ├── projects/
    │   │   ├── components/      # Projects showcase, EngineeringLab
    │   │   └── data/projects.ts # Featured project data, metrics, tags, repo links
    │   ├── skills/
    │   │   ├── components/      # Skills list, interactive StackMap visualization
    │   │   └── data/skills.ts   # Categorized skills, proficiency, category mappings
    │   ├── github/
    │   │   └── components/      # GithubMetrics, GithubSection
    │   ├── blog/
    │   │   ├── components/      # BlogSection
    │   │   └── data/blog.ts     # Articles, read time, URLs
    │   └── contact/
    │       ├── components/      # Contact form, ResumeSection
    │       └── data/            # contact.ts, resume.ts
    ├── lib/                     # Shared utilities & configurations
    │   ├── utils.ts             # cn helper (`clsx` + `twMerge`)
    │   ├── animations.ts        # Reusable Framer Motion variants
    │   ├── devto.ts             # Dev.to API fetcher integration
    │   └── validations.ts       # Zod schemas for contact form & inputs
    ├── services/                # External services
    │   └── email.ts             # Resend email sending client and templates
    └── types/
        └── index.ts             # Shared TypeScript interfaces & types
```

---

## 4. Development Workflow & Commands

Always run commands from the workspace root (`c:\PROJECTS\dsk-portfolio`):

| Action | Command | Notes |
|---|---|---|
| **Development** | `npm run dev` | Runs Next.js dev server with Turbopack on `http://localhost:3000` |
| **Build** | `npm run build` | Builds optimized production bundle via Next.js |
| **Start** | `npm run start` | Runs production server after build |
| **Lint** | `npm run lint` | Runs ESLint across the project |
| **Format** | `npm run format` | Runs Prettier across all files |

### Environment Variables
Store local secrets in `.env.local` (never commit this file):
```env
RESEND_API_KEY=re_your_api_key_here
CONTACT_EMAIL_TO=dsriharik8432@gmail.com
CONTACT_EMAIL_FROM=onboarding@resend.dev
```

---

## 5. Coding Standards & Conventions

### TypeScript & Types
- Strictly type props, functions, and state. Avoid `any` at all costs.
- Place domain models in `src/types/index.ts` or feature-specific types alongside feature data.
- Ensure all component props interface definitions are exported or explicitly named.

### Component Design & Patterns
- **Server vs. Client Components**: Mark components with `"use client"` whenever using React hooks (`useState`, `useEffect`), browser APIs, or Framer Motion animations. Keep static layouts and data wrappers as Server Components where practical.
- **Modularity**: Never create monolithic 500+ line components. Break UI into focused subcomponents (e.g. `Journey`, `Principles`, `Problems` in `features/about`).
- **Feature Encapsulation**: New sections must be created under `src/features/[feature-name]/` with their own `components/` and `data/` directories.

### Styling & CSS Rules
- Use Tailwind utility classes directly on JSX elements.
- Use `cn(...)` from `@/lib/utils` for dynamic or conditional classes.
- Rely on defined CSS variables in `globals.css` (e.g. `--background`, `--foreground`, `--primary`, `--border`, etc.) for consistent dark mode aesthetics.
- Maintain the glassmorphism and luminous aesthetic: subtle borders (`border-white/10` or `border-zinc-800`), dark semi-transparent backgrounds (`bg-zinc-950/60`, `backdrop-blur-md`), and glowing gradients (`bg-gradient-to-r`).

### Animations & Micro-Interactions
- Keep Framer Motion transitions smooth and lightweight (`duration: 0.3` to `0.6s`, `ease: "easeOut"`).
- Honor reduced motion preferences when possible.
- Avoid duplicate animation loops that consume excessive GPU or cause canvas lag.

---

## 6. Commit & Changelog Management

When making changes:
1. Document major changes in `docs/LOGS.md` following the established changelog structure.
2. Follow **Conventional Commits**:
   - `feat:` for new features or sections
   - `fix:` for bug fixes
   - `refactor:` for architectural improvements
   - `style:` for styling/theme updates
   - `docs:` for documentation updates
   - `chore:` for dependency or tooling updates
3. Keep commit messages clear, descriptive, and linked to relevant components.

---

## 7. Contact & Project Credits

- **Author**: Dasari Srihari Krishna
- **Email**: `dsriharik8432@gmail.com`
- **GitHub**: [github.com/dsriharikrishna](https://github.com/dsriharikrishna)
- **LinkedIn**: [linkedin.com/in/dasari-sriharikrishna](https://www.linkedin.com/in/dasari-sriharikrishna/)
