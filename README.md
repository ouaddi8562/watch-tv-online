# Watch-TV Online

Marketing site for **watch-tv.online** — Next.js 16 (App Router), React 19, plain CSS in `app/globals.css`.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build    # production build — run before pushing
```

## Where things live

| Path | What |
|---|---|
| `app/page.tsx` | Home page (hero, pricing calculator, steps, reviews) |
| `app/<route>/page.tsx` | One folder per page: pricing, devices, installation, features, channels-vod, faq, contact, terms, privacy, refund, dmca |
| `app/layout.tsx` | Site-wide metadata/SEO, header, footer, chat widgets, pre-paint theme script |
| `app/sitemap.ts`, `app/robots.ts` | Generated `/sitemap.xml` and `/robots.txt` — add new pages to the sitemap |
| `components/Header.tsx`, `NavMenu.tsx` | Logo + navigation (collapses to a menu button at ≤1080px) |
| `components/Footer.tsx` | Footer links and the mobile "Choose Plan" bar |
| `components/PricingCalculator.tsx` | Plan/screen price picker |
| `components/ChatWidgets.tsx` | WhatsApp button + Crisp chat loader |
| `components/ThemeToggle.tsx` | Light/dark switch (saved in `localStorage`) |
| `public/images/` | Site images — use `next/image` with the real width/height |

## Notes

- This Next.js version has breaking changes from older docs; check `node_modules/next/dist/docs/` before using an API (see `AGENTS.md`).
- WhatsApp number and Crisp website ID are hard-coded in `Footer.tsx`, `ChatWidgets.tsx` and `app/contact/page.tsx`.
