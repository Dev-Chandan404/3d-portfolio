# 🌌 3D Portfolio — Chandan Kumar

> An immersive, interactive 3D developer portfolio built with React, Three.js, and GSAP. Drag a real planet. Scroll through the cosmos. Experience a portfolio like no other.

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Site-00d4ff?style=for-the-badge)](https://chandan404.netlify.app/)
[![GitHub Stars](https://img.shields.io/github/stars/Dev-Chandan404/3d-portfolio?style=for-the-badge&color=ffd700)](https://github.com/Dev-Chandan404/3d-portfolio/stargazers)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-0.183-000000?style=for-the-badge&logo=threedotjs&logoColor=white)](https://threejs.org/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

---

## ✨ Features

- 🌍 **Interactive 3D Planet** — Drag with your mouse to orbit a real `.glb` model rendered in real-time
- 🌀 **Scroll-Driven Experience** — Lenis smooth scroll + GSAP animations create seamless scene transitions
- 💡 **Dynamic Lighting & Depth** — Three.js camera movement, lighting, and floating elements build true spatial depth
- 🎨 **Neon Glassmorphism UI** — Futuristic, translucent panels with glowing accents
- 📱 **Fully Responsive** — Optimised from mobile to ultra-wide via `react-responsive`
- ⚡ **Vite-Powered** — Near-instant HMR and optimised production builds

---

## 🛠 Tech Stack

| Category | Technology |
|---|---|
| **Framework** | React 19 + Vite 8 |
| **3D Rendering** | Three.js · React Three Fiber · Drei |
| **Animation** | GSAP 3 · @gsap/react · Lenis · Maath |
| **Styling** | Tailwind CSS v4 |
| **Icons** | React Icons · @iconify/react |
| **Navigation** | react-scroll |
| **3D Assets** | Custom `.glb` planet model |
| **Deployment** | Netlify |

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Dev-Chandan404/3d-portfolio.git
cd 3d-portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build optimised production bundle |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

---

## 📁 Project Structure

```
3d-portfolio/
├── public/              # Static assets (textures, icons, etc.)
├── src/                 # React source code
│   ├── components/      # UI and 3D components
│   ├── sections/        # Portfolio sections (Hero, About, Projects, Contact)
│   └── main.jsx         # App entry point
├── Planet.jsx           # Standalone 3D planet component
├── Planet-transformed.glb  # Custom planet 3D model
├── index.html
├── vite.config.js
└── package.json
```

---

## 🌐 Live Demo

**[→ chandan404.netlify.app](https://chandan404.netlify.app/)**

> 💡 **Pro tip:** Drag the planet with your mouse and scroll to travel through the experience.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to open an [issue](https://github.com/Dev-Chandan404/3d-portfolio/issues) or submit a pull request.

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

**Built with 🚀 by [Chandan Kumar](https://github.com/Dev-Chandan404)**

*If you found this project useful, consider giving it a ⭐ on GitHub!*

</div>
