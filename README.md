# Falou website

The landing page for Falou: what it is, how it works, a hands-on demo, privacy, FAQ and download.

**Stack:** React 19 · TypeScript · Vite · Tailwind CSS 4 · Biome. No router: it's a single page with anchor links.

```bash
npm install
npm run dev      # http://localhost:5180
npm run lint     # Biome lint + format check
npm run format   # Biome fix
npm run build    # type check + production build into dist/
```

## Where things live

```
src/sections/     One file per page section (Header, Hero, TryIt, HowItWorks, Features, Privacy, Faq, Download)
src/components/   Product UI pieces reused across sections (Keycap, Bubble, Waveform, MacWindow, Logo, SectionHead)
src/lib/site.ts   Download link, version, requirements: change these when Falou ships
src/lib/phrases.ts  Sample sentences for the demo (what was "said" vs what Falou "typed")
src/index.css     Design tokens: colours, fonts, animations
```

## Design notes

- **Colours:** white and cool grays; midnight blue (`#0E1A33`) instead of black; orange (`#EE6A2C`) only as an accent, the way the app uses it for its "recording" dot.
- **Type:** Geist for text, Instrument Serif italic for a few accent words, Geist Mono for small labels. Self-hosted (Fontsource), so the page makes no requests to font CDNs, in line with the app's privacy promise.
- **Visuals are the product's own UI** (the keycap, the floating bubble, a chat window), not illustrations.
- **The "Try it" demo is simulated** with sample sentences and says so. Real in-browser speech recognition (Chrome's Web Speech API) would send visitors' voices to Google, which contradicts what Falou stands for.
- Respects "reduce motion", works with keyboard (hold Space on the button) and touch.

## Shipping

Set `downloadUrl` in `src/lib/site.ts` to the .dmg (e.g. a GitHub Release asset), then deploy `dist/` to any static host (Vercel, Netlify, Cloudflare Pages, GitHub Pages).

Fonts are under the SIL Open Font License; everything else is MIT or Apache-2.0.
