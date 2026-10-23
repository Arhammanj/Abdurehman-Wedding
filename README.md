# Premium Animated Pakistani Nikah Invitation

A cinematic, single-page invitation website for the Nikah ceremony of **M. Abdurehman Waseem** and **Zainab Babar**. Built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

## Wedding Details

- **Bismillah:** بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
- **Hosts:** Mr. and Mrs. M. Rana Waseem
- **Invitation:** Cordially invite you to the Nikah Ceremony of Their Son
- **Groom:** M. Abdurehman Waseem
- **Bride:** Zainab Babar
- **Date:** 13 November 2026
- **Venue:** Sitara Marquee by Taj Mahal, Civic Centre, West Canal Road, Faisalabad

## Tech Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev/)

## Features

- **Cinematic scene sequence** — Bismillah, invitation, couple reveal, save-the-date, venue, and a complete final card (~20–30s pacing)
- **Luxury Pakistani aesthetic** — warm ivory/champagne palette, Islamic arch, jali pattern, floral corners, fairy lights, lanterns, bokeh
- **Arabic calligraphy** — Proper Arabic rendering with Amiri
- **Elegant typography** — Cormorant Garamond, Marcellus, Great Vibes
- **Interactive cover** — "Open Invitation" to start the animated sequence
- **Share & replay** — Native share with clipboard fallback, unobtrusive replay button
- **Venue map link** — "View Location" opens a Google Maps search for the exact venue
- **Mobile-first** — Optimised for portrait viewing (WhatsApp), readable without zooming
- **Accessible** — Semantic HTML, keyboard focus states, `prefers-reduced-motion` support

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) 18+ recommended
- npm (comes with Node.js)

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open the local URL shown in your terminal to view the invitation.

### Build

```bash
npm run build
```

The production-ready files will be output to `dist/`.

### Preview Production Build

```bash
npm run preview
```

## Deployment

### Vercel
1. Push this project to a Git repository (GitHub/GitLab/Bitbucket)
2. Import the repo in [Vercel](https://vercel.com/)
3. Vercel will auto-detect Vite — build command `npm run build`, output directory `dist`
4. Deploy and share the generated URL

### Netlify
1. Push this project to a Git repository
2. Import in [Netlify](https://netlify.com/)
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy and share the URL

Or drag-and-drop the `dist/` folder into Netlify Drop.

## Quality Check
- [x] All wedding information matches exactly as specified
- [x] Arabic Bismillah preserved exactly as provided
- [x] Couple names, date, and venue are correct
- [x] Fully responsive (mobile, tablet, desktop)
- [x] Arabic text renders correctly
- [x] No account/sign-in required
- [x] Real web elements (not a single static image)
- [x] Reduced motion support

## Notes
- If background ambience is desired later, add audio only after user interaction. This build does not auto-play audio.
- The "View Location" link uses a map search (coordinates not hardcoded) as requested.
