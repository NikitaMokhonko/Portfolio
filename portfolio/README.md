# Portfolio — Nikita Mokhonko

Personal site: selected work, case studies and experience.
Frontend & UI/UX engineer, Stockholm.

## Stack

| | |
|---|---|
| Framework | React 19 + Vite |
| Routing | TanStack Router, file-based, with auto code splitting |
| Styling | Tailwind CSS v4 — tokens in `src/styles.css` |
| Fonts | Zodiak Variable (display, self-hosted) + Inter (text, Google Fonts) |
| Motion | Scroll-driven CSS animations (`animation-timeline: view()`), IntersectionObserver reveals, View Transitions; `ogl` for the cursor ribbon |
| Hosting | Vercel |

## Commands

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # vite build + tsc
npm run serve     # preview the production build
npm run test      # vitest
npm run a11y      # axe-core WCAG 2.2 AA audit, both themes, two viewports
npm run audit     # links, metadata, heading order, images, reduced motion
```

Both audit scripts run against a served build and exit non-zero on failure:

```bash
npm run build && npm run serve
BASE=http://localhost:4173 npm run a11y
BASE=http://localhost:4173 npm run audit
```

## Structure

```
src/
  data/
    projects.ts     Every project: copy, meta, gallery, links. One source of truth.
    experience.ts   Roles and languages
    site.ts         Name, contact, capabilities, tech stack
  lib/
    theme.ts        Theme hook; pairs with the pre-paint script in index.html
    useReveal.ts    Page-level IntersectionObserver for scroll reveals
  components/       Header, Footer, ProjectCard, Lightbox, TechMarquee, …
  routes/
    __root.tsx      Shell: skip link, header, footer, ribbon
    index.tsx       Home
    projects.tsx    Work index with type filters
    work.$slug.tsx  Case study, rendered from data/projects.ts
    about.tsx       Experience timeline
    contact.tsx
    <legacy>.tsx    Old flat URLs (/skinsmart, /novabank, …) redirect to /work/<slug>
```

### Theming

Every colour on the site resolves through a CSS custom property defined in
`src/styles.css` — `--bg`, `--surface`, `--ink`, `--line`, `--accent` and so on.
`:root` holds the light palette; `:root[data-theme="dark"]` overrides the same
names. Tailwind sees them through `@theme inline`, so `bg-surface` and
`text-ink` are theme-aware without a single `dark:` variant in the markup.

Switching themes is one attribute flip on `<html>`. An inline script in
`index.html` resolves the theme before first paint (stored choice, else the OS
preference) so there's no flash of the wrong palette.

To add or change a colour, edit **both** blocks in `src/styles.css`. Nothing
else needs touching.

### Adding a project

Append an entry to `projects` in `src/data/projects.ts` and drop the images in
`public/`. The card, the work index, the filters and the whole case-study page
are generated from it — there is no per-project component to write.

Set `featured: true` to surface it on the home page. The first featured entry
renders as the wide hero card.

### Accessibility

`npm run a11y` runs axe-core over every route in both themes at two viewport
widths, against `wcag2a`, `wcag2aa`, `wcag21a`, `wcag21aa`, `wcag22aa` and
axe best-practice. It exits non-zero on any violation, so it can gate a deploy.
Point it elsewhere with `BASE=http://localhost:3001 npm run a11y`.

Currently zero violations. What the automated pass cannot check, and how it is
handled here:

- **Page titles (2.4.2)** — each route sets its own via `usePageMeta`, and a
  live region in `__root` announces the new title after client-side navigation.
- **Focus order (2.4.3)** — the lightbox traps Tab while open and returns focus
  to the thumbnail that opened it.
- **Target size (2.5.8)** — nav links sit at 20-23px at their font size, so
  `.link-line::before` pads the pointer target out to 24px without moving the
  text or its underline.
- **Contrast (1.4.3)** — `--muted` is set for the darkest surface it appears
  on (`--bg-alt`), at 5.11:1. Do not lighten it; muted text runs as small as
  11px.
- **Motion (2.3.3)** — see below.

### Motion

Anything with the `reveal` class is picked up by `useReveal` and faded in once
it enters the viewport. Stagger with `<Reveal delay={120}>`.

Every animation — reveals, the marquee, the cursor ribbon — is disabled under `prefers-reduced-motion: reduce`. The ribbon also
skips coarse pointers and narrow viewports entirely, so phones never build a
WebGL context.

### Images

Screenshots are JPEG, capped at 1600px wide, quality 82. Nothing on the site
displays wider than that, and the PNG originals were roughly four times the
size for no visible gain.
