# jamees-dev-website

Personal developer portfolio built with React, TypeScript, and Tailwind CSS.

**Live:** https://jameesdavid.github.io/jamees-dev-website

## Stack

- **React 18** + **TypeScript** — UI and logic
- **Vite 5** (SWC) — build tooling
- **Tailwind CSS 3** + **shadcn/ui** — styling and components
- **Framer Motion** — animations
- **React Router DOM v6** — routing
- **Vitest** + **Testing Library** — tests

## Getting started

```bash
# Requires Node >= 24
npm install
npm run dev       # http://localhost:8080
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server (port 8080) |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run test` | Run tests |
| `npm run test:watch` | Run tests in watch mode |

## Project structure

```
src/
├── components/     # Section components (Hero, About, Experience, Projects…)
├── components/ui/  # shadcn/ui primitives (do not edit manually)
├── pages/          # Route pages (Index, NotFound)
├── hooks/          # Custom hooks
├── lib/            # Utilities (cn)
└── test/           # Test setup and specs
```

Portfolio content (experience, projects, skills) is stored as TypeScript constants inside each section component — edit the component directly to update the content.

## Deployment

Deploys automatically to GitHub Pages on every push to `main` via GitHub Actions.
