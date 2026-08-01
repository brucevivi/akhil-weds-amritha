# Vivek & Gauthami — Wedding Website

A cinematic single-page wedding invitation site, built with React 19, TypeScript, Tailwind CSS v4, Framer Motion, and GSAP/ScrollTrigger. All content (names, dates, venues, family details) is transcribed from the couple's printed invitation into [`src/data/invitation.ts`](src/data/invitation.ts) — that file is the single source of truth for real content.

## Getting started

```bash
npm install
npm run dev
```

Other scripts: `npm run build` (typecheck + production build), `npm run preview` (serve the production build), `npm run lint`, `npm run format`.

## RSVP setup

The RSVP form posts to [Formspree](https://formspree.io). Create a form there, then copy `.env.example` to `.env` and set `VITE_FORMSPREE_ENDPOINT` to your form's endpoint. Until that's set, the form shows a fallback message directing guests to call/WhatsApp the host numbers already on the invitation.

## Notes

- No photo gallery or "how we met" story section — the source invitation has neither real photos nor a written story, so those sections were intentionally left out rather than filled with placeholders.
- All decorative artwork (lotus, peacock, temple lamp, mandala, venue illustrations) is original hand-authored SVG inspired by the invitation's Kerala mural palette — not a reproduction of the printed artwork.
- The `AudioToggle` in the footer is wired up but silent until a real ambient sound file is added (see `src/components/audio/AudioToggle.tsx`).
