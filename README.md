<p align="center">
  <img src="https://via.placeholder.com/120x120?text=3D" alt="3D Portfolio Logo" width="120" height="120" />
</p>

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/build-passing-4ade80?style=flat-square&logo=github&logoColor=white&labelColor=1a1a2e">
    <img src="https://img.shields.io/badge/build-passing-4ade80?style=flat-square&logo=github&logoColor=white&labelColor=e2e8f0" alt="Build Passing">
  </picture>
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/license-MIT-a78bfa?style=flat-square&labelColor=1a1a2e">
    <img src="https://img.shields.io/badge/license-MIT-a78bfa?style=flat-square&labelColor=e2e8f0" alt="MIT License">
  </picture>
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/version-0.0.0-38bdf8?style=flat-square&labelColor=1a1a2e">
    <img src="https://img.shields.io/badge/version-0.0.0-38bdf8?style=flat-square&labelColor=e2e8f0" alt="Version">
  </picture>
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black&labelColor=1a1a2e">
    <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black&labelColor=e2e8f0" alt="React 19">
  </picture>
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/Three.js-r183-000000?style=flat-square&logo=threedotjs&logoColor=white&labelColor=1a1a2e">
    <img src="https://img.shields.io/badge/Three.js-r183-000000?style=flat-square&logo=threedotjs&logoColor=white&labelColor=e2e8f0" alt="Three.js">
  </picture>
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white&labelColor=1a1a2e">
    <img src="https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white&labelColor=e2e8f0" alt="Vite 8">
  </picture>
</p>

<h1 align="center">3D Portfolio</h1>

<p align="center">
  An immersive developer portfolio with an interactive 3D planet, mouse-controlled orbit, and GSAP-powered smooth scroll — all running in the browser.
</p>

---

```bash
git clone https://github.com/Dev-Chandan404/3d-portfolio.git && cd 3d-portfolio && npm install && npm run dev
```

---

## Try It Now

<p align="center">
  <a href="https://chandan404.netlify.app/">
    <img src="https://img.shields.io/badge/%F0%9F%8C%90_Live_Demo-Visit_Site-00d4ff?style=for-the-badge&labelColor=0a0a1a" alt="Live Demo">
  </a>
  &nbsp;
  <a href="https://github.dev/Dev-Chandan404/3d-portfolio">
    <img src="https://img.shields.io/badge/%E2%9C%A6_Open_in-GitHub_Dev-646CFF?style=for-the-badge&logo=github&logoColor=white&labelColor=0a0a1a" alt="Open in GitHub Dev">
  </a>
  &nbsp;
  <a href="https://github.com/Dev-Chandan404/3d-portfolio/actions">
    <img src="https://img.shields.io/badge/CI-Netlify_Deploy-00C7B7?style=for-the-badge&logo=netlify&logoColor=white&labelColor=0a0a1a" alt="Netlify Deploy Status">
  </a>
</p>

> Drag the planet. Scroll the void. Hover everything.

---

## Why Not X?

There are a few ways to build a 3D portfolio. Here's an honest breakdown of where each approach lands:

| | **3D Portfolio** | **Three.js vanilla** | **Spline embed** | **Framer / Webflow** |
|---|---|---|---|---|
| **3D engine** | React Three Fiber + Drei | Raw Three.js | Spline runtime | None / CSS only |
| **Customisation** | Full — it's just React | Full — but verbose | Limited to Spline editor | Low — GUI-constrained |
| **Bundle size** | Moderate (Three.js is chunky) | Moderate | Varies — external iframe | Small |
| **Scroll control** | Lenis + GSAP (buttery smooth) | DIY | None | Framer Motion |
| **Good for** | Devs who want 3D + code ownership | Devs who prefer no framework | Designers who don't code | Non-coders / quick deploys |
| **Not ideal for** | Projects needing a tiny JS budget | Teams preferring React | Pixel-perfect custom shaders | Custom WebGL anything |

**Bottom line:** If you want a 3D portfolio you actually own and can extend — instead of a Spline iframe or a no-code builder — this is the straightforward starting point.

---

## Features

- **Interactive 3D Planet** — drag to orbit, scroll to explore; powered by a custom `.glb` model
- **Smooth Scroll** — Lenis handles the physics, GSAP handles the choreography
- **Glassmorphism UI** — frosted panels floating in a dark cosmic scene
- **React Three Fiber** — Three.js as React components, no imperative soup
- **Responsive** — works from 375px mobile to ultrawide without layout breakage
- **Vite 8** — cold starts in milliseconds, HMR that actually behaves

---

## Tech Stack

| Layer | Package | Version |
|---|---|---|
| UI framework | React | 19 |
| Build tool | Vite | 8 |
| 3D engine | Three.js + R3F + Drei | r183 / 9.x / 10.x |
| Animation | GSAP + @gsap/react | 3.14 |
| Smooth scroll | Lenis | 1.3 |
| Math utilities | Maath | 0.10 |
| Styling | Tailwind CSS | 4 |

---

## Installation

Prerequisites: **Node.js 18+** and **npm 9+**.

```bash
# 1. Clone
git clone https://github.com/Dev-Chandan404/3d-portfolio.git
cd 3d-portfolio

# 2. Install
npm install

# 3. Develop
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173).

---

## Usage

```bash
npm run dev       # Start dev server with HMR
npm run build     # Production build → dist/
npm run preview   # Preview the production build locally
npm run lint      # ESLint check
```

To swap out the planet model, replace `Planet-transformed.glb` in the root directory and update the import path in `Planet.jsx`. The model was pre-processed with [`gltfjsx`](https://github.com/pmndrs/gltfjsx) — run it again if you change the geometry.

---

## Project Structure

```
3d-portfolio/
├── public/                  # Static assets (fonts, textures, favicons)
├── src/
│   ├── components/          # React + R3F components
│   ├── sections/            # Page sections (Hero, About, Work, Contact…)
│   └── main.jsx             # Entry point
├── Planet.jsx               # R3F planet component (gltfjsx output)
├── Planet-transformed.glb   # 3D model
├── index.html
├── vite.config.js
└── package.json
```

---

## Contributing

Contributions are welcome. Keep it lean — no dependencies added without a good reason.

```bash
# Fork → clone your fork → create a branch
git checkout -b feat/your-idea

# Make changes, then
npm run lint
git commit -m "feat: your concise description"
git push origin feat/your-idea
# Open a pull request
```

Please open an issue first for anything larger than a bug fix.

---

## License

[MIT](./LICENSE) — use it, fork it, ship it. Attribution appreciated but not required.

---

<p align="center">Built by <a href="https://github.com/Dev-Chandan404">Chandan Kumar</a> · <a href="https://chandan404.netlify.app/">Live site</a></p>
