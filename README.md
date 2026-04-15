<div align="center">

# ✦ 3D Portfolio — Chandan

**A visually immersive personal portfolio built with React, Three.js & modern web technologies.**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-chandan404.netlify.app-brightgreen?style=for-the-badge&logo=netlify)](https://chandan404.netlify.app/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Three.js](https://img.shields.io/badge/Three.js-black?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

</div>

---

## 🌐 Live Preview

> **[https://chandan404.netlify.app/](https://chandan404.netlify.app/)**

---

## ✨ Features

- 🎨 **Interactive 3D Scenes** — Animated 3D models and environments using Three.js & React Three Fiber
- 🚀 **Smooth Animations** — Fluid transitions and scroll-driven effects powered by Framer Motion
- 📱 **Fully Responsive** — Optimized for all screen sizes, from mobile to desktop
- 🌙 **Modern UI/UX** — Clean, dark-themed design with immersive visual storytelling
- 📬 **Contact Form** — Functional email integration via EmailJS
- ⚡ **Blazing Fast** — Built with Vite for lightning-fast dev experience and optimized production builds

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Frontend Framework | React.js |
| 3D Graphics | Three.js, React Three Fiber, @react-three/drei |
| Animations | Framer Motion |
| Styling | Tailwind CSS |
| Build Tool | Vite |
| Email | EmailJS |
| Deployment | Netlify |

---

## 📂 Project Structure

```
3d-portfolio/
├── public/
│   └── assets/          # Static assets (models, textures, icons)
├── src/
│   ├── assets/          # Images and media
│   ├── components/      # Reusable UI components
│   ├── constants/       # Data constants (skills, projects, experience)
│   ├── hoc/             # Higher Order Components
│   ├── utils/           # Utility functions
│   ├── App.jsx
│   └── main.jsx
├── .env.example
├── index.html
├── tailwind.config.js
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v18+)
- npm or yarn

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
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🔧 Environment Variables

Create a `.env` file in the root directory and add your EmailJS credentials:

```env
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

You can get these values by signing up at [EmailJS](https://www.emailjs.com/).

---

## 🧪 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

---

## 🎨 Customization

To adapt this portfolio to your own profile:

1. **Personal Info** — Update your name, bio, and social links in `src/constants/index.js`
2. **Projects** — Add your own projects with descriptions, images, and links
3. **Skills** — Edit the skills/technologies section in the constants file
4. **Work Experience** — Update your timeline/experience entries
5. **3D Models** — Swap out models in `public/` with your own `.glb` / `.gltf` files

---

## 📦 Deployment

This project is deployed on **Netlify**. To deploy your own:

```bash
npm run build
```

Then drag and drop the `dist/` folder into [Netlify Drop](https://app.netlify.com/drop), or connect your GitHub repo for continuous deployment.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🤝 Contact

**Dev Chandan** — Frontend Developer

[![GitHub](https://img.shields.io/badge/GitHub-Dev--Chandan404-181717?style=flat&logo=github)](https://github.com/Dev-Chandan404)
[![Portfolio](https://img.shields.io/badge/Portfolio-chandan404.netlify.app-brightgreen?style=flat&logo=netlify)](https://chandan404.netlify.app/)

---

<div align="center">
  <sub>Built with ❤️ and lots of ☕</sub>
</div>
