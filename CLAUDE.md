# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server on port 8080
npm run build        # Production build
npm run build:dev    # Development build
npm run preview      # Preview production build
npm run lint         # ESLint on all files
npm run test         # Run tests once (vitest run)
npm run test:watch   # Run tests in watch mode
```

## Tech Stack

React 18 + Vite 5 + TypeScript 5 + Tailwind CSS 3 + shadcn/ui (Radix primitives) + Framer Motion 12. Routing via React Router DOM v6. TanStack React Query v5 is wired up but not actively used yet. Testing with Vitest + @testing-library/react + jsdom. SWC compiler via @vitejs/plugin-react-swc. Fonts: Inter (sans) + JetBrains Mono (mono).

## Architecture

### Single-Page Portfolio

Personal developer portfolio. Two routes in `App.tsx`: `/` renders `Index.tsx` (assembles all sections) and `*` renders `NotFound.tsx`. In-page navigation uses anchor hash links (`#about`, `#skills`, etc.) with smooth scrolling.

### Component Structure

Each portfolio section is its own component in `src/components/` (Hero, About, Skills, Experience, Projects, Architecture, Testimonials, Contact, Footer). All section data (experience entries, projects, skills, etc.) is **co-located as const arrays at the top of each component file** — no separate data layer.

### Scroll Animations Pattern

Components use `useRef` + Framer Motion's `useInView({ once: true })` for scroll-triggered entrance animations: `animate={inView ? { opacity: 1, y: 0 } : {}}`.

### State Management

No global state. All state is local `useState` within components. Theming via CSS custom properties and `dark` class.

### Styling Conventions

- Use `cn()` from `@/lib/utils` for conditional class merging
- Custom CSS tokens in `src/index.css` `@layer utilities`: `.text-gradient`, `.bg-section-alt`, `.shadow-card`, `.badge-skill`
- Dark mode is class-based (`darkMode: ["class"]`)
- Cards: `bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow`
- Alternate section backgrounds use `bg-section-alt`

### shadcn/ui

Components in `src/components/ui/` — do not edit manually. Add new ones via `npx shadcn@latest add <component>`. Config in `components.json`.

### Path Aliases

`@/*` maps to `src/*` (configured in tsconfig.app.json and vite.config.ts).

## Key Notes

- **TypeScript is lenient**: `strict: false`, `noImplicitAny: false` — intentional for this project
- **No backend**: Contact form uses `mailto:` fallback, no server-side handler
- **Data is hardcoded**: Update portfolio content by editing the relevant component file directly
- **Dev server port**: Always `8080`, not default Vite port
- **Test setup**: `src/test/setup.ts` imports jest-dom matchers and mocks `window.matchMedia`
