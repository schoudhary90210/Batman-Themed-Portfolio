<div align="center">

# 🦇 BATCOMPUTER TERMINAL

### A Batman Arkham-inspired developer portfolio

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![GSAP](https://img.shields.io/badge/GSAP-3-88CE02?style=flat-square&logo=greensock)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-purple?style=flat-square)
![Tailwind](https://img.shields.io/badge/Tailwind-4-38BDF8?style=flat-square&logo=tailwindcss)

[**🔴 LIVE DEMO →**](https://siddhantchoudhary.vercel.app)

</div>

---

## Overview

An immersive Arkham-series inspired portfolio built as a Batcomputer terminal. Features a CRT monitor frame, cinematic boot sequences, particle systems, and interactive HUD elements — all running on a modern Next.js stack.

Not a template. Every animation, effect, and interaction was custom-built.

## Features

**Core Experience**
- WayneTech terminal boot sequence with system initialization, progress bars, and bat-symbol SVG draw
- 3D CRT monitor frame with metallic bezels, corner screws, and screen effects
- Video game-style main menu with periodic burst glitch effects
- Bat swarm intro + click-triggered bat scatter particles
- Gotham rain system with lightning flashes
- Scarecrow fear toxin idle trigger (surprise glitch attack)

**Sections**
- **Operative Profile** — Animated dossier with scanning line, typing reveals, stat bars, and classification stamps
- **Arsenal** — 6 project cards with holographic wireframes, 3D tilt tracking, and flip animations
- **Gadgets** — Categorized tech inventory grid
- **Case History** — Vertical timeline with scroll-triggered reveals
- **Contact** — Encrypted channel connection sequence with signal waveform

**Polish**
- Cursor glow trail with lerp smoothing
- Magnetic hover on interactive elements
- Text reveal animations on section headers
- Animated counter roll-up on metrics
- Mechanical click SFX, bat screech, ambient audio
- Full HUD overlay with live data tickers, scan lines, and corner brackets
- Responsive design with simplified effects on mobile
- `prefers-reduced-motion` accessibility support

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animation | GSAP + Framer Motion |
| Audio | Howler.js + Web Audio API |
| Particles | Canvas 2D |
| Deployment | Vercel |

## Run Locally
```bash
git clone https://github.com/schoudhary90210/Batman-Themed-Portfolio.git
cd Batman-Themed-Portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure
```
src/
├── app/              # Next.js app router
├── components/
│   ├── boot/         # WayneTech boot sequence
│   ├── effects/      # Bat particles, rain, scarecrow, cursor glow
│   ├── menu/         # Main menu with glitch effects
│   ├── sections/     # All 5 content sections
│   └── ui/           # HUD, monitor frame, text reveal, magnetic wrap
├── hooks/            # Audio, bat particles, magnetic, reduced motion
├── data/             # Projects, experience, tech stack, contact
└── lib/              # Animation variants, constants
```

---

<div align="center">
<sub>Built by <a href="https://github.com/schoudhary90210">Siddhant Choudhary</a></sub>
</div>
