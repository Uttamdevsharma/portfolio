<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Personal Portfolio

Next.js 16 (App Router) + React 19 + Tailwind CSS v4 + TypeScript portfolio site, deployed on Vercel.

## Commands

- `npm run dev` — dev server (http://localhost:3000)
- `npm run build` — production build (the main verification step)
- `npm run lint` — ESLint (eslint-config-next, core-web-vitals + typescript)
- No test framework exists. There is no `typecheck` script; run `npx tsc --noEmit` for typechecking.

## Architecture

- **App Router** under `src/app`: `layout.tsx`, `page.tsx` (home), and `projects/[id]/page.tsx` (static detail pages).
- **`src/components/*` are all `"use client"`**; keep this convention. `page.tsx` and the project detail page are server components.
- The detail page awaits `params` as a `Promise` (`const { id } = await params;`) — this is the current Next.js convention, not a bug.
- **`src/constants/projects.ts` is the single source of truth for project data.** Both the home Projects section and `/projects/[id]` (via `generateStaticParams`) read from `PROJECTS`. To add a project: add an entry there and drop an image in `public/image/`.
- Path alias `@/*` → `./src/*` (configured in `tsconfig.json`).

## Styling

- **Tailwind v4** via `@tailwindcss/postcss` — no `tailwind.config` file; global styles are plain CSS in `src/app/globals.css` (theme CSS variables + `.dark` overrides).
- Component-specific styling uses **CSS Modules** (`*.module.css` next to each component).
- **Dark mode** via `next-themes` in `src/app/providers.tsx`: `attribute="class"`, `defaultTheme="dark"`, `enableSystem={false}`. The `<html>` tag uses `suppressHydrationWarning` — do not remove it.

## Conventions

- Icons: `react-icons/fa` (most components) and `lucide-react` (Navbar, Experience). Match the existing import style in the file you touch.
- `.env*` files are gitignored — no env vars are currently required to run.
