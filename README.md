<div align="center">
  <h1>
    🌌 3D Portfolio
  </h1>

  <p>
    <strong>A stunning, fully interactive 3D personal portfolio</strong><br>
    Built with React, Three.js & Tailwind — smooth animations, immersive experience, and modern design.
  </p>

  <a href="https://chandan404.netlify.app/" target="_blank">
    <img src="https://img.shields.io/badge/Live%20Demo-Visit%20Now-00d4ff?style=for-the-badge&logo=netlify&logoColor=white" alt="Live Demo">
  </a>
  
  <a href="https://github.com/Dev-Chandan404/3d-portfolio/stargazers" target="_blank">
    <img src="https://img.shields.io/github/stars/Dev-Chandan404/3d-portfolio?style=for-the-badge&logo=github&color=ffd700" alt="GitHub Stars">
  </a>
  
  <a href="https://github.com/Dev-Chandan404/3d-portfolio/fork" target="_blank">
    <img src="https://img.shields.io/github/forks/Dev-Chandan404/3d-portfolio?style=for-the-badge&logo=github&color=00ff88" alt="GitHub Forks">
  </a>

  <br><br>

  <img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black&style=for-the-badge" alt="React">
  <img src="https://img.shields.io/badge/Three.js-000000?logo=threedotjs&logoColor=white&style=for-the-badge" alt="Three.js">
  <img src="https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white&style=for-the-badge" alt="Vite">
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B67F?logo=tailwindcss&logoColor=white&style=for-the-badge" alt="Tailwind">
  <img src="https://img.shields.io/badge/GSAP-00FF9F?logo=greensock&logoColor=black&style=for-the-badge" alt="GSAP">

  <br><br>
  <strong>✦ Made with ❤️ & Three.js magic by Chandan ✦</strong>
</div>

---

## ✨ Features

- 🌍 **Immersive 3D Hero** — Interactive rotating planet with mouse controls (`.glb` model)
- ⚡ **Ultra-smooth Scrolling** — Powered by Lenis + GSAP
- 🎨 **Modern Glassmorphic UI** — Beautiful Tailwind design with dark theme
- 📱 **Fully Responsive** — Looks perfect on mobile, tablet & desktop
- 🚀 **Blazing Fast** — Built with Vite + React 19
- 🔧 **Easy to Customize** — All data (projects, skills, socials) in one file

---

## 📸 Preview

*(Add your GIF/screenshots here — highly recommended!)*

![3D Portfolio Preview](https://via.placeholder.com/1200x600/0A0A0A/00d4ff?text=3D+Portfolio+Preview+Coming+Soon)

---

## 🛠 Tech Stack

| Category          | Technology                          |
|-------------------|-------------------------------------|
| **Frontend**      | React 19, Vite                      |
| **3D Graphics**   | Three.js, React Three Fiber, Drei   |
| **Styling**       | Tailwind CSS                        |
| **Animations**    | GSAP + @gsap/react, Lenis           |
| **3D Helpers**    | Maath                               |
| **Icons**         | React Icons                         |

---

## 🚀 Live Demo

**[🔗 Click here to experience the 3D Portfolio](https://chandan404.netlify.app/)**

> *Try dragging the planet in the hero section!*

---

## 🏗 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/Dev-Chandan404/3d-portfolio.git
cd 3d-portfolio
2. Install dependencies
Bashnpm install
3. Run development server
Bashnpm run dev
Open http://localhost:5173 and enjoy the magic ✨
Build for Production
Bashnpm run build
Output folder: dist/

📁 Project Structure
Bash3d-portfolio/
├── public/
│   └── models/                  # 3D assets
├── src/
│   ├── components/              # Reusable components
│   ├── sections/                # Hero, About, Skills, Projects, Contact
│   ├── constants/               # All your data (projects, skills, links)
│   ├── utils/                   # Helper functions
│   ├── App.jsx
│   ├── SafeCanvas.jsx           # R3F Canvas wrapper
│   └── main.jsx
├── Planet-transformed.glb       # Main 3D planet model
├── vite.config.js
├── tailwind.config.js
└── package.json

🎨 How to Customize (Super Easy)

Change your info → Edit src/constants/index.js
Replace 3D model → Drop your own .glb file and update the path
Add new projects → Just add objects in the projects array
Update colors → Modify Tailwind config or CSS variables


👤 Author
Chandan
Frontend Developer & 3D Enthusiast

GitHub → @Dev-Chandan404
Live Portfolio → chandan404.netlify.app
LinkedIn / Twitter → Add your links in constants!


📄 License
This project is licensed under the MIT License — feel free to use it for your own portfolio!


  ⭐ Star this repo if you like it!
