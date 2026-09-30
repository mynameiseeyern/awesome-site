# eeyernng.com

Ee Yern Ng's portfolio. Next.js 15 (App Router), TypeScript, plain CSS, no UI library. Fonts ship with the build (Geist via the `geist` package, Caveat via Fontsource), so there are no runtime font requests.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build, what Vercel runs
```

## Deploy to Vercel

1. Push this folder to a GitHub repo (or `npx vercel` from the folder).
2. In Vercel: New Project, import the repo. Framework preset is detected as Next.js; no settings to change.
3. Project settings, Domains: add `eeyernng.com` and `www.eeyernng.com`. Vercel shows the DNS records to set at your registrar (an A record to `76.76.21.21` for the apex, a CNAME to `cname.vercel-dns.com` for www). The domain currently points at Framer, so remove those records first.
4. Every push to `main` redeploys.

## Pages

- `/` home
- `/work/chameleon` and `/work/xoda`: full case studies (content in `content/case-studies.ts`). Cards in the grid with an `href` link to these; the others open the side peek panel.

## Images from the old Framer site

The portrait and the case-study images still load from Framer's CDN (`framerusercontent.com`, allowed in `next.config.mjs`). Before you shut the Framer project down, run:

```bash
npm run assets
```

It downloads everything into `public/work/` and tells you which URLs to swap. Then delete `images.remotePatterns` from `next.config.mjs`.

## Where things live

| What | Where |
|---|---|
| Project cards and peek-panel copy | `content/projects.tsx` |
| Hero copy, "How I work", experience rows, mentoring, CV link, contact line | `content/site.ts` |
| Case studies | `content/case-studies.ts` and `app/work/[slug]/page.tsx` |
| All styling and design tokens (light and dark) | `app/globals.css` |
| Page order | `app/page.tsx` |
| Metadata, fonts, theme init script | `app/layout.tsx` |
| Card crayon hover border | `components/Crayon.tsx` |
| Easter eggs (C coffee, G paper, T theme, the mug) | `components/Footer.tsx` |

## Adding a project card

Add an object to `content/projects.tsx`. The `Sketch` is an inline SVG following the rules in `docs/sketch-cards.md` (the same rules as the "portfolio-sketch-cards" skill). The grid and the peek panel both render from that one entry.

## Real screenshots

Each peek panel has a dashed "screens coming soon" slot at the bottom (`components/Work.tsx`). When screens are cleared to share, drop the images in `public/work/<slug>/` and replace that block with `next/image` tags.

## Notes

- Theme: `data-theme` on `<html>`, restored from `localStorage` before paint by the inline script in `layout.tsx`. System preference is used when nothing is saved. `T` toggles it.
- Motion respects `prefers-reduced-motion`. Scroll reveals use CSS scroll-driven animations where supported and simply render static elsewhere.
- No em dashes anywhere in copy; use commas, colons or hyphens.
