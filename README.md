<div align="center">

<img src="https://via.placeholder.com/120x120/0a0a1a/00d4ff?text=3D" alt="3D Portfolio" width="110" />

# 3D Portfolio

**An immersive developer portfolio powered by React Three Fiber, GSAP, and a draggable planet.**

<br/>

<!-- Badges — light/dark adaptive -->
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/build-passing-4ade80?style=flat-square&logo=githubactions&logoColor=white&labelColor=0d1117">
  <img src="https://img.shields.io/badge/build-passing-4ade80?style=flat-square&logo=githubactions&logoColor=white&labelColor=e2e8f0" alt="Build">
</picture>
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/license-MIT-a78bfa?style=flat-square&labelColor=0d1117">
  <img src="https://img.shields.io/badge/license-MIT-a78bfa?style=flat-square&labelColor=e2e8f0" alt="License">
</picture>
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/version-0.0.0-38bdf8?style=flat-square&labelColor=0d1117">
  <img src="https://img.shields.io/badge/version-0.0.0-38bdf8?style=flat-square&labelColor=e2e8f0" alt="Version">
</picture>
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black&labelColor=0d1117">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black&labelColor=e2e8f0" alt="React">
</picture>
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/Three.js-r183-ffffff?style=flat-square&logo=threedotjs&logoColor=black&labelColor=0d1117">
  <img src="https://img.shields.io/badge/Three.js-r183-000000?style=flat-square&logo=threedotjs&logoColor=white&labelColor=e2e8f0" alt="Three.js">
</picture>
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white&labelColor=0d1117">
  <img src="https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white&labelColor=e2e8f0" alt="Vite">
</picture>
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/deployed-Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white&labelColor=0d1117">
  <img src="https://img.shields.io/badge/deployed-Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white&labelColor=e2e8f0" alt="Netlify">
</picture>

</div>

<br/>

```bash
git clone https://github.com/Dev-Chandan404/3d-portfolio.git && cd 3d-portfolio && npm install && npm run dev
```

<br/>

---

## ✦ Try It Now

<br/>

<div align="center">

[![Live Demo](https://img.shields.io/badge/%F0%9F%8C%90%20Live%20Demo-chandan404.netlify.app-00d4ff?style=for-the-badge&labelColor=0a0a1a)](https://chandan404.netlify.app/)
&nbsp;&nbsp;
[![Open in GitHub Dev](https://img.shields.io/badge/%E2%9C%A6%20Edit%20in-GitHub%20Dev-646CFF?style=for-the-badge&logo=github&logoColor=white&labelColor=0a0a1a)](https://github.dev/Dev-Chandan404/3d-portfolio)
&nbsp;&nbsp;
[![GitHub Stars](https://img.shields.io/github/stars/Dev-Chandan404/3d-portfolio?style=for-the-badge&logo=github&labelColor=0a0a1a&color=ffd700)](https://github.com/Dev-Chandan404/3d-portfolio/stargazers)

<br/>

> **Drag** the planet &nbsp;·&nbsp; **Scroll** through the cosmos &nbsp;·&nbsp; **Hover** everything

</div>

<br/>

---

## ✦ Features

<br/>

| | Feature | Detail |
|:---:|:---|:---|
| 🌍 | **Interactive 3D Planet** | Drag to orbit in real-time — powered by a custom `.glb` model via React Three Fiber |
| 🌀 | **Depth & Parallax** | Full 3D scene with dynamic lighting, camera movement, and floating ambient elements |
| ⚡ | **Buttery Smooth Scroll** | Lenis handles the physics, GSAP handles the choreography — zero jank |
| 🎨 | **Glassmorphism UI** | Frosted neon panels floating in a deep-space dark canvas |
| 📱 | **Fully Responsive** | From 375px mobile to ultrawide — layout holds at every breakpoint |
| 🚀 | **Vite 8 Powered** | Sub-second cold starts, HMR that actually behaves |

<br/>

---

## ✦ Tech Stack

<br/>

<div align="center">

| Layer | Technology | Version |
|:---|:---|:---:|
| **UI Framework** | React | `19` |
| **Build Tool** | Vite | `8` |
| **3D Engine** | Three.js + React Three Fiber + Drei | `r183 / 9.x / 10.x` |
| **Animation** | GSAP + @gsap/react | `3.14` |
| **Smooth Scroll** | Lenis | `1.3` |
| **Math Utilities** | Maath | `0.10` |
| **Styling** | Tailwind CSS | `4` |

</div>

<br/>

---

## ✦ Why Not X?

An honest look at the alternatives — each has a real use case:

<br/>

<div align="center">

|  | **3D Portfolio** ← you are here | Three.js Vanilla | Spline Embed | Framer / Webflow |
|:---|:---:|:---:|:---:|:---:|
| **3D Engine** | R3F + Drei | Raw Three.js | Spline runtime | None |
| **Customisation** | ✅ Full — it's React | ✅ Full — but verbose | ⚠️ Editor-limited | ❌ GUI-constrained |
| **Scroll Control** | Lenis + GSAP | DIY | None | Framer Motion |
| **Code Ownership** | ✅ 100% | ✅ 100% | ❌ Iframe dependency | ❌ Platform lock-in |
| **Ideal for** | Devs wanting 3D + control | Devs avoiding frameworks | Designers, not coders | Non-coders, fast deploys |
| **Skip if you need** | Tiny JS budgets | React ecosystem | Custom shaders | WebGL anything |

</div>

<br/>

> **Bottom line:** If you want a 3D portfolio you *own* and can extend — not a Spline iframe or a no-code builder — this is the starting point.

<br/>

---

## ✦ Project Structure

<br/>

```
3d-portfolio/
│
├── public/                   # Static assets — textures, favicons, fonts
│
├── src/
│   ├── components/           # Reusable React + R3F components
│   ├── sections/             # Page sections (Hero, About, Work, Contact…)
│   └── main.jsx              # App entry point
│
├── Planet.jsx                # R3F planet component (gltfjsx output)
├── Planet-transformed.glb    # 3D model — swap this to change the planet
├── index.html
├── vite.config.js
└── package.json
```

<br/>

---

## ✦ Installation

<br/>

> **Prerequisites:** Node.js `18+` · npm `9+`

<br/>

**1 — Clone**

```bash
git clone https://github.com/Dev-Chandan404/3d-portfolio.git
cd 3d-portfolio
```

**2 — Install**

```bash
npm install
```

**3 — Run**

```bash
npm run dev
# → http://localhost:5173
```

<br/>

---

## ✦ Usage

<br/>

```bash
npm run dev       # Dev server with HMR
npm run build     # Production build → /dist
npm run preview   # Preview production build locally
npm run lint      # ESLint check
```

<br/>

**Swapping the planet model**

Replace `Planet-transformed.glb` in the root, then update the import path in `Planet.jsx`. The component was generated with [`gltfjsx`](https://github.com/pmndrs/gltfjsx) — re-run it after changing geometry:

```bash
npx gltfjsx Planet.glb --transform
```

<br/>

---

## ✦ Contributing

<br/>

Contributions are welcome. Keep it lean — no new dependencies without a good reason.

```bash
# 1. Fork → clone your fork
git clone https://github.com/YOUR_USERNAME/3d-portfolio.git

# 2. Create a branch
git checkout -b feat/your-idea

# 3. Lint, commit, push
npm run lint
git commit -m "feat: concise description"
git push origin feat/your-idea

# 4. Open a pull request on GitHub
```

> For anything larger than a bug fix, open an issue first so we can align before you write code.

<br/>

---

## ✦ License

<br/>

[MIT](./LICENSE) — use it, fork it, ship it. Attribution appreciated, not required.

<br/>

---

<div align="center">

Built by [**Chandan Kumar**](https://github.com/Dev-Chandan404) &nbsp;·&nbsp; [Live Site](https://chandan404.netlify.app/) &nbsp;·&nbsp; [Report a Bug](https://github.com/Dev-Chandan404/3d-portfolio/issues)

<br/>

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/%E2%98%85_If_this_helped_you%2C_drop_a_star!-ffd700?style=flat-square&labelColor=0d1117">
  <img src="https://img.shields.io/badge/%E2%98%85_If_this_helped_you%2C_drop_a_star!-ffd700?style=flat-square&labelColor=e2e8f0" alt="Star this repo">
</picture>

</div>
