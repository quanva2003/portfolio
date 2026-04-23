# QuanVA — Portfolio

> React + TypeScript portfolio built to the same standards I apply to production work — accessible, performant, and CI-gated.

[![CI](https://github.com/quanva2003/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/quanva2003/portfolio/actions/workflows/ci.yml)

Live: https://quanva-portfolio.vercel.app

![Preview](./public/assets/portfolio.png)

## Stack

| Layer | Choice |
|---|---|
| UI | React 19 + TypeScript |
| Build | Vite 6 |
| Styling | Tailwind CSS 4 — CSS-first `@theme` tokens |
| Animations | `useInView` (IntersectionObserver) + CSS keyframes |
| Deployment | Vercel |
| CI | GitHub Actions — lint · type-check · build · Lighthouse CI |

## Architecture decisions

- **Vite over Next.js** — no server-side rendering or API routes needed; Vite delivers faster HMR, a smaller output bundle, and zero framework overhead for a static client-side site.
- **Tailwind CSS 4 `@theme` tokens** — design tokens (colors, spacing, radii) live in one CSS file and are consumed everywhere as CSS custom properties; no JavaScript config file, and dark-mode variants require zero plugin wiring.
- **Custom `useInView` + CSS keyframes over AOS / Framer Motion** — entrance animations are 10 lines of CSS; third-party animation libraries add ~30 kB and introduce render-phase side effects with no offsetting benefit here.
- **No Redux / Zustand** — the portfolio has no shared mutable state; the few pieces of local state are scoped to their nearest component, keeping the tree flat and the bundle small.

## Running locally

```bash
git clone https://github.com/quanva2003/portfolio
cd portfolio
npm install
npm run dev
```

## What I learned building this

- **Tailwind 4's CSS-first config is a real DX shift.** Tokens defined in CSS work natively in `calc()`, `clamp()`, and `animation` — something that required plugins in Tailwind 3.
- **The Lighthouse CI gate earns its keep immediately.** During setup it caught a semantic markup regression: a `<section>` without an `aria-labelledby` dropped the accessibility score from 100 to 94. I wouldn't have noticed without the automated threshold.
- **CSS typing animation with `ch` units is trickier than it looks.** The `steps()` count has to match the exact character count per string, and Vietnamese characters with diacritics count as one `ch` but render wider — you have to eyeball it per string.
- **`IntersectionObserver` + strict mode interact in non-obvious ways.** In development, React 18/19 strict mode mounts components twice; the observer fires, disconnects, then fires again. The `fires-once` disconnect logic had to be placed inside the `observe` callback, not the effect cleanup.

## License

MIT — see [LICENSE](./LICENSE) file.
