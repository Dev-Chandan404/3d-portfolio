# 🌌 3D Portfolio

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-00d4ff?style=for-the-badge&logo=netlify&logoColor=white)](https://chandan404.netlify.app/)
[![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black&style=for-the-badge)](https://react.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-000000?logo=threedotjs&logoColor=white&style=for-the-badge)](https://threejs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white&style=for-the-badge)](https://vite.dev/)

**A modern, immersive 3D personal portfolio** showcasing projects, skills, and experience with interactive 3D elements, smooth animations, and a clean, responsive design.

Built as a **Frontend Developer** portfolio for **Chandan**.

---

## ✨ Features

- **Fully Interactive 3D Scene** — Animated planet model (`.glb`) using React Three Fiber + Drei
- **High-Performance Animations** — Powered by GSAP and Lenis for buttery-smooth scrolling
- **Modern Tailwind Design** — Fully responsive across all devices
- **Fast Development Experience** — Built with Vite + React 19
- **Modular & Clean Code** — Organized into sections, components, and constants
- **Easy to Customize** — Project data, skills, and 3D assets are all in one place

---

## 🛠 Tech Stack

| Category          | Technologies |
|-------------------|--------------|
| **Framework**     | React 19, Vite |
| **3D Graphics**   | Three.js, @react-three/fiber, @react-three/drei |
| **Styling**       | Tailwind CSS |
| **Animations**    | GSAP + @gsap/react, Lenis |
| **Utilities**     | Maath, React Icons, React Scroll, React Responsive |
| **Development**   | ESLint, TypeScript-ready setup |

---

## 🚀 Live Demo

**→ [https://chandan404.netlify.app/](https://chandan404.netlify.app/)**

*(Try interacting with the 3D planet in the hero section!)*

---

## 📸 Preview

*(./public/images/portfolio.png)*

---

## 🏗 Getting Started

### Prerequisites
- Node.js (v18 or higher)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Dev-Chandan404/3d-portfolio.git

# 2. Navigate into the project
cd 3d-portfolio

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev

Open http://localhost:5173 in your browser.
```
Build for Production
Bashnpm run build
The optimized build will be in the dist/ folder.

📁 Project Structure
Bash3d-portfolio/
├── public/                  # Static assets
├── src/
│   ├── components/          # Reusable UI components
│   ├── sections/            # Hero, About, Skills, Projects, Contact, etc.
│   ├── constants/           # Projects data, skills, social links
│   ├── utils/               # Helper functions
│   ├── App.jsx              # Root component
│   ├── SafeCanvas.jsx       # Safe R3F Canvas wrapper
│   ├── index.css
│   └── main.jsx
├── Planet-transformed.glb   # Main 3D model (used in hero)
├── vite.config.js
├── tailwind.config.js       # (via @tailwindcss/vite)
└── package.json

🎨 Customization

Update your info → Edit src/constants/index.js (or wherever your data lives)
Change 3D model → Replace Planet-transformed.glb and update the component
Add new sections → Create new files in src/sections/ and import them in App.jsx
Modify styling → Tailwind classes are used throughout


👤 Author
Chandan
Frontend Developer

GitHub: @Dev-Chandan404
Portfolio: chandan404.netlify.app
LinkedIn / Twitter → Add your links in the constants!


📄 License
This project is open source and licensed under the MIT License.
Feel free to fork it, customize it, and use it for your own portfolio! ⭐

Made with ❤️ and a lot of Three.js magic.
text**Just copy the entire markdown above and replace the current `README.md` in your repo.**  
It’s much more accurate, professional, and developer-friendly than the old version (which listed only HTML/CSS/JS).  

Let me know if you want a shorter version, dark-mode badges, or extra sections (like "How to Add
