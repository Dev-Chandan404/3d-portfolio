<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>3D Portfolio — Chandan Kumar</title>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;700&family=Syne:wght@700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

  :root {
    --neon: #00d4ff;
    --neon2: #7b5ea7;
    --neon3: #ff6b35;
    --gold: #ffd700;
    --glass: rgba(255,255,255,0.04);
    --glass-border: rgba(0,212,255,0.2);
    --text: #e8f4f8;
    --muted: #7a9ab0;
  }

  html { scroll-behavior: smooth; }

  body {
    background: #020b14;
    color: var(--text);
    font-family: 'Space Grotesk', sans-serif;
    overflow-x: hidden;
    cursor: none;
  }

  /* Custom cursor */
  #cursor {
    position: fixed;
    width: 12px; height: 12px;
    background: var(--neon);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transform: translate(-50%, -50%);
    transition: width 0.2s, height 0.2s, background 0.2s;
    mix-blend-mode: screen;
  }
  #cursor-ring {
    position: fixed;
    width: 36px; height: 36px;
    border: 1px solid rgba(0,212,255,0.5);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9998;
    transform: translate(-50%, -50%);
    transition: transform 0.12s ease-out, width 0.2s, height 0.2s;
  }

  /* Star canvas */
  #stars {
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    z-index: 0;
    pointer-events: none;
  }

  /* Nebula blobs */
  .nebula {
    position: fixed;
    border-radius: 50%;
    filter: blur(120px);
    pointer-events: none;
    z-index: 0;
  }
  .nebula-1 { width: 600px; height: 600px; background: rgba(0,212,255,0.07); top: -200px; left: -200px; }
  .nebula-2 { width: 500px; height: 500px; background: rgba(123,94,167,0.08); bottom: 10%; right: -100px; }
  .nebula-3 { width: 400px; height: 400px; background: rgba(255,107,53,0.05); top: 40%; left: 30%; }

  /* Layout */
  main {
    position: relative;
    z-index: 1;
    max-width: 860px;
    margin: 0 auto;
    padding: 0 2rem 6rem;
  }

  /* === HERO === */
  .hero {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 4rem 0 2rem;
    perspective: 1000px;
  }

  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.7rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--neon);
    border: 1px solid rgba(0,212,255,0.3);
    padding: 6px 18px;
    border-radius: 100px;
    margin-bottom: 2.5rem;
    background: rgba(0,212,255,0.05);
    animation: fadeUp 0.8s ease both;
  }

  .hero-badge::before {
    content: '';
    width: 6px; height: 6px;
    background: var(--neon);
    border-radius: 50%;
    animation: pulse 2s infinite;
  }

  .hero-title {
    font-family: 'Syne', sans-serif;
    font-size: clamp(3.5rem, 9vw, 7rem);
    font-weight: 800;
    line-height: 0.9;
    letter-spacing: -0.02em;
    margin-bottom: 1.5rem;
    animation: fadeUp 0.8s 0.1s ease both;
  }

  .hero-title .line1 { display: block; color: #fff; }
  .hero-title .line2 {
    display: block;
    background: linear-gradient(135deg, var(--neon), var(--neon2) 60%, var(--neon3));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .hero-sub {
    font-size: 1.05rem;
    color: var(--muted);
    max-width: 480px;
    line-height: 1.7;
    margin-bottom: 3rem;
    animation: fadeUp 0.8s 0.2s ease both;
  }

  .hero-cta {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
    animation: fadeUp 0.8s 0.3s ease both;
  }

  .btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 14px 32px;
    background: var(--neon);
    color: #020b14;
    font-weight: 700;
    font-size: 0.9rem;
    border-radius: 8px;
    text-decoration: none;
    letter-spacing: 0.04em;
    transition: transform 0.2s, box-shadow 0.2s;
    box-shadow: 0 0 30px rgba(0,212,255,0.3);
  }
  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 50px rgba(0,212,255,0.5);
  }

  .btn-ghost {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 13px 28px;
    color: var(--text);
    font-weight: 500;
    font-size: 0.9rem;
    border-radius: 8px;
    text-decoration: none;
    border: 1px solid rgba(255,255,255,0.15);
    background: rgba(255,255,255,0.03);
    transition: border-color 0.2s, background 0.2s;
  }
  .btn-ghost:hover {
    border-color: rgba(0,212,255,0.4);
    background: rgba(0,212,255,0.05);
  }

  /* Floating planet ring */
  .planet-ring {
    position: relative;
    width: 200px; height: 200px;
    margin: 4rem auto 2rem;
    animation: float 6s ease-in-out infinite, fadeUp 1s 0.4s ease both;
  }
  .planet-core {
    width: 100%; height: 100%;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, #2a7fa8, #0a2a40 60%, #020b14);
    box-shadow:
      inset -20px -20px 60px rgba(0,0,0,0.7),
      inset 10px 10px 40px rgba(0,212,255,0.15),
      0 0 80px rgba(0,212,255,0.2),
      0 0 160px rgba(123,94,167,0.1);
  }
  .planet-ring::after {
    content: '';
    position: absolute;
    top: 50%; left: -20%;
    width: 140%; height: 30%;
    border: 2px solid rgba(0,212,255,0.25);
    border-radius: 50%;
    transform: translateY(-50%) rotateX(75deg);
    pointer-events: none;
  }
  .planet-dot {
    position: absolute;
    border-radius: 50%;
    background: rgba(0,212,255,0.7);
    box-shadow: 0 0 10px var(--neon);
  }

  /* === SECTION LAYOUT === */
  section {
    margin-bottom: 5rem;
  }

  .section-label {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.65rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--neon);
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .section-label::after {
    content: '';
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, rgba(0,212,255,0.3), transparent);
  }

  .section-title {
    font-family: 'Syne', sans-serif;
    font-size: clamp(1.8rem, 4vw, 2.6rem);
    font-weight: 700;
    margin-bottom: 2rem;
    color: #fff;
  }

  /* === FEATURES GRID === */
  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5px;
    border: 1.5px solid rgba(0,212,255,0.1);
    border-radius: 16px;
    overflow: hidden;
    background: rgba(0,212,255,0.1);
  }

  .feature-card {
    background: #020b14;
    padding: 2rem 1.75rem;
    transition: background 0.3s;
    position: relative;
    overflow: hidden;
  }
  .feature-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(to right, transparent, var(--neon), transparent);
    opacity: 0;
    transition: opacity 0.3s;
  }
  .feature-card:hover { background: rgba(0,212,255,0.04); }
  .feature-card:hover::before { opacity: 1; }

  .feature-icon {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    display: block;
  }
  .feature-name {
    font-weight: 600;
    font-size: 0.95rem;
    color: #fff;
    margin-bottom: 0.5rem;
  }
  .feature-desc {
    font-size: 0.85rem;
    color: var(--muted);
    line-height: 1.6;
  }

  /* === TECH STACK === */
  .stack-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 1rem;
  }

  .stack-card {
    background: var(--glass);
    border: 1px solid var(--glass-border);
    border-radius: 12px;
    padding: 1.25rem 1.5rem;
    transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s;
    transform-style: preserve-3d;
    cursor: default;
  }
  .stack-card:hover {
    transform: translateY(-6px) rotateX(4deg);
    border-color: rgba(0,212,255,0.5);
    box-shadow: 0 20px 50px rgba(0,0,0,0.5), 0 0 30px rgba(0,212,255,0.15);
  }

  .stack-category {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.62rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--neon);
    margin-bottom: 0.5rem;
  }
  .stack-tech {
    font-size: 0.9rem;
    color: var(--text);
    line-height: 1.6;
  }

  /* === INSTALL BLOCK === */
  .install-wrap {
    background: #05111a;
    border: 1px solid rgba(0,212,255,0.15);
    border-radius: 16px;
    overflow: hidden;
  }

  .install-header {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0.9rem 1.5rem;
    background: rgba(0,212,255,0.05);
    border-bottom: 1px solid rgba(0,212,255,0.1);
  }
  .dot { width: 10px; height: 10px; border-radius: 50%; }
  .dot-r { background: #ff5f56; }
  .dot-y { background: #ffbd2e; }
  .dot-g { background: #27c93f; }
  .install-title {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.7rem;
    color: var(--muted);
    margin-left: auto;
    letter-spacing: 0.1em;
  }

  .install-body {
    padding: 1.75rem 2rem;
  }

  .cmd-block { margin-bottom: 1.5rem; }
  .cmd-comment {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.75rem;
    color: #4a7a90;
    margin-bottom: 0.3rem;
  }
  .cmd-line {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.85rem;
    color: #e8f4f8;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .cmd-prompt { color: var(--neon); user-select: none; }
  .cmd-keyword { color: #c792ea; }
  .cmd-path { color: #addb67; }

  /* === SCRIPTS TABLE === */
  .scripts-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.88rem;
  }
  .scripts-table th {
    text-align: left;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.65rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--muted);
    padding: 0.75rem 1rem;
    border-bottom: 1px solid rgba(255,255,255,0.06);
    font-weight: 400;
  }
  .scripts-table td {
    padding: 0.75rem 1rem;
    border-bottom: 1px solid rgba(255,255,255,0.04);
    vertical-align: middle;
  }
  .scripts-table tr:last-child td { border-bottom: none; }
  .scripts-table tr:hover td { background: rgba(0,212,255,0.03); }

  code {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.8rem;
    background: rgba(0,212,255,0.08);
    color: var(--neon);
    padding: 3px 9px;
    border-radius: 5px;
    border: 1px solid rgba(0,212,255,0.15);
  }

  .badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-size: 0.7rem;
    font-family: 'JetBrains Mono', monospace;
    padding: 4px 10px;
    border-radius: 100px;
    letter-spacing: 0.05em;
  }
  .badge-blue { background: rgba(56,189,248,0.1); color: #38bdf8; border: 1px solid rgba(56,189,248,0.2); }
  .badge-purple { background: rgba(167,139,250,0.1); color: #a78bfa; border: 1px solid rgba(167,139,250,0.2); }
  .badge-green { background: rgba(52,211,153,0.1); color: #34d399; border: 1px solid rgba(52,211,153,0.2); }
  .badge-orange { background: rgba(251,146,60,0.1); color: #fb923c; border: 1px solid rgba(251,146,60,0.2); }

  /* === DIVIDER === */
  .divider {
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(0,212,255,0.3), transparent);
    margin: 4rem 0;
  }

  /* === FOOTER === */
  .footer {
    text-align: center;
    padding: 3rem 0;
    border-top: 1px solid rgba(255,255,255,0.06);
  }
  .footer-name {
    font-family: 'Syne', sans-serif;
    font-size: 1.1rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 0.5rem;
  }
  .footer-sub {
    font-size: 0.82rem;
    color: var(--muted);
    margin-bottom: 1.5rem;
  }
  .footer-link {
    color: var(--neon);
    text-decoration: none;
    font-weight: 600;
    font-size: 0.85rem;
    border-bottom: 1px solid rgba(0,212,255,0.3);
    padding-bottom: 2px;
    transition: border-color 0.2s;
  }
  .footer-link:hover { border-color: var(--neon); }

  /* === ANIMATIONS === */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotateY(0deg); }
    50% { transform: translateY(-18px) rotateY(8deg); }
  }
  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.4; transform: scale(0.6); }
  }
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  .reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.7s ease, transform 0.7s ease;
  }
  .reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }

  /* scroll indicator */
  .scroll-hint {
    position: absolute;
    bottom: 2.5rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    font-size: 0.7rem;
    color: var(--muted);
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-family: 'JetBrains Mono', monospace;
    animation: fadeUp 1s 1s ease both;
  }
  .scroll-hint-line {
    width: 1px;
    height: 40px;
    background: linear-gradient(to bottom, var(--neon), transparent);
    animation: scrollLine 2s ease-in-out infinite;
  }
  @keyframes scrollLine {
    0% { transform: scaleY(0); transform-origin: top; }
    50% { transform: scaleY(1); transform-origin: top; }
    51% { transform: scaleY(1); transform-origin: bottom; }
    100% { transform: scaleY(0); transform-origin: bottom; }
  }

  /* 3D tilt wrapper */
  .tilt-card {
    transform-style: preserve-3d;
    transition: transform 0.1s ease-out;
  }
</style>
</head>
<body>

<!-- Cursor -->
<div id="cursor"></div>
<div id="cursor-ring"></div>

<!-- Nebula -->
<div class="nebula nebula-1"></div>
<div class="nebula nebula-2"></div>
<div class="nebula nebula-3"></div>

<!-- Stars -->
<canvas id="stars"></canvas>

<main>
  <!-- HERO -->
  <div class="hero">
    <div class="hero-badge">🌌 Interactive 3D Portfolio</div>

    <div class="planet-ring" id="planet">
      <div class="planet-core"></div>
    </div>

    <h1 class="hero-title">
      <span class="line1">Chandan Kumar</span>
      <span class="line2">3D Portfolio</span>
    </h1>
    <p class="hero-sub">An immersive developer portfolio built with React, Three.js & GSAP. Drag a real planet. Scroll through the cosmos.</p>

    <div class="hero-cta">
      <a href="https://chandan404.netlify.app/" class="btn-primary" target="_blank">
        ↗ Launch Experience
      </a>
      <a href="https://github.com/Dev-Chandan404/3d-portfolio" class="btn-ghost" target="_blank">
        ⌥ View Source
      </a>
    </div>

    <div class="scroll-hint">
      <div class="scroll-hint-line"></div>
      scroll
    </div>
  </div>

  <!-- FEATURES -->
  <section class="reveal">
    <div class="section-label">What's inside</div>
    <h2 class="section-title">Features</h2>
    <div class="features-grid tilt-card" id="featGrid">
      <div class="feature-card">
        <span class="feature-icon">🌍</span>
        <div class="feature-name">Interactive 3D Planet</div>
        <div class="feature-desc">Drag with your mouse to orbit a real <code>.glb</code> model rendered live in Three.js</div>
      </div>
      <div class="feature-card">
        <span class="feature-icon">🌀</span>
        <div class="feature-name">Scroll-Driven Experience</div>
        <div class="feature-desc">Lenis smooth scroll + GSAP animations sync the scene to your finger</div>
      </div>
      <div class="feature-card">
        <span class="feature-icon">💡</span>
        <div class="feature-name">Depth & Lighting</div>
        <div class="feature-desc">Real camera movement, dynamic lighting, and floating elements build true spatial depth</div>
      </div>
      <div class="feature-card">
        <span class="feature-icon">🎨</span>
        <div class="feature-name">Neon Glassmorphism</div>
        <div class="feature-desc">Futuristic translucent UI panels with glowing cyan accents</div>
      </div>
      <div class="feature-card">
        <span class="feature-icon">📱</span>
        <div class="feature-name">Fully Responsive</div>
        <div class="feature-desc">Optimised from mobile to ultra-wide via <code>react-responsive</code></div>
      </div>
      <div class="feature-card">
        <span class="feature-icon">⚡</span>
        <div class="feature-name">Vite-Powered</div>
        <div class="feature-desc">Near-instant HMR in dev and optimised production bundles with Vite 8</div>
      </div>
    </div>
  </section>

  <div class="divider"></div>

  <!-- TECH STACK -->
  <section class="reveal">
    <div class="section-label">Under the hood</div>
    <h2 class="section-title">Tech Stack</h2>
    <div class="stack-grid">
      <div class="stack-card">
        <div class="stack-category">Framework</div>
        <div class="stack-tech">React 19 + Vite 8</div>
      </div>
      <div class="stack-card">
        <div class="stack-category">3D Engine</div>
        <div class="stack-tech">Three.js · R3F · Drei</div>
      </div>
      <div class="stack-card">
        <div class="stack-category">Animation</div>
        <div class="stack-tech">GSAP 3 · Lenis · Maath</div>
      </div>
      <div class="stack-card">
        <div class="stack-category">Styling</div>
        <div class="stack-tech">Tailwind CSS v4</div>
      </div>
      <div class="stack-card">
        <div class="stack-category">Icons</div>
        <div class="stack-tech">React Icons · Iconify</div>
      </div>
      <div class="stack-card">
        <div class="stack-category">Deployment</div>
        <div class="stack-tech">Netlify</div>
      </div>
    </div>

    <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-top: 2rem;">
      <span class="badge badge-blue">React 19</span>
      <span class="badge badge-purple">Three.js 0.183</span>
      <span class="badge badge-blue">React Three Fiber</span>
      <span class="badge badge-green">Vite 8</span>
      <span class="badge badge-orange">GSAP 3</span>
      <span class="badge badge-blue">Tailwind v4</span>
      <span class="badge badge-purple">Lenis</span>
      <span class="badge badge-green">Netlify</span>
    </div>
  </section>

  <div class="divider"></div>

  <!-- INSTALLATION -->
  <section class="reveal">
    <div class="section-label">Getting started</div>
    <h2 class="section-title">Installation</h2>
    <div class="install-wrap tilt-card" id="termCard">
      <div class="install-header">
        <div class="dot dot-r"></div>
        <div class="dot dot-y"></div>
        <div class="dot dot-g"></div>
        <span class="install-title">bash — 3d-portfolio</span>
      </div>
      <div class="install-body">
        <div class="cmd-block">
          <div class="cmd-comment"># Clone the universe</div>
          <div class="cmd-line"><span class="cmd-prompt">$</span> <span class="cmd-keyword">git</span> clone <span class="cmd-path">https://github.com/Dev-Chandan404/3d-portfolio.git</span></div>
        </div>
        <div class="cmd-block">
          <div class="cmd-comment"># Enter the dimension</div>
          <div class="cmd-line"><span class="cmd-prompt">$</span> <span class="cmd-keyword">cd</span> <span class="cmd-path">3d-portfolio</span></div>
        </div>
        <div class="cmd-block">
          <div class="cmd-comment"># Install dependencies</div>
          <div class="cmd-line"><span class="cmd-prompt">$</span> <span class="cmd-keyword">npm</span> install</div>
        </div>
        <div class="cmd-block" style="margin-bottom:0">
          <div class="cmd-comment"># Launch dev server</div>
          <div class="cmd-line"><span class="cmd-prompt">$</span> <span class="cmd-keyword">npm</span> run <span class="cmd-path">dev</span></div>
        </div>
      </div>
    </div>

    <!-- Scripts table -->
    <div style="margin-top: 1.5rem; background: var(--glass); border: 1px solid rgba(0,212,255,0.1); border-radius: 12px; overflow: hidden;">
      <table class="scripts-table">
        <thead>
          <tr>
            <th>Command</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><code>npm run dev</code></td><td style="color: var(--muted);">Start development server with HMR</td></tr>
          <tr><td><code>npm run build</code></td><td style="color: var(--muted);">Build optimised production bundle</td></tr>
          <tr><td><code>npm run preview</code></td><td style="color: var(--muted);">Preview production build locally</td></tr>
          <tr><td><code>npm run lint</code></td><td style="color: var(--muted);">Run ESLint across the project</td></tr>
        </tbody>
      </table>
    </div>
  </section>

  <div class="divider"></div>

  <!-- FOOTER -->
  <div class="footer reveal">
    <div class="footer-name">Built by Chandan Kumar</div>
    <div class="footer-sub">Open source · MIT License · Deployed on Netlify</div>
    <a href="https://chandan404.netlify.app/" class="footer-link" target="_blank">chandan404.netlify.app ↗</a>
  </div>
</main>

<script>
  // Custom cursor
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursor-ring');
  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; cursor.style.left = mx+'px'; cursor.style.top = my+'px'; });
  setInterval(() => { rx += (mx - rx) * 0.15; ry += (my - ry) * 0.15; ring.style.left = rx+'px'; ring.style.top = ry+'px'; }, 16);
  document.querySelectorAll('a,button').forEach(el => {
    el.addEventListener('mouseenter', () => { cursor.style.width='20px'; cursor.style.height='20px'; cursor.style.background='#fff'; });
    el.addEventListener('mouseleave', () => { cursor.style.width='12px'; cursor.style.height='12px'; cursor.style.background='var(--neon)'; });
  });

  // Stars
  const canvas = document.getElementById('stars');
  const ctx = canvas.getContext('2d');
  let stars = [];
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  function initStars() {
    stars = [];
    for (let i = 0; i < 250; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.2 + 0.2,
        o: Math.random() * 0.7 + 0.1,
        s: Math.random() * 0.3 + 0.05
      });
    }
  }
  function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(s => {
      s.o += s.s * (Math.random() > 0.5 ? 1 : -1) * 0.01;
      s.o = Math.max(0.05, Math.min(0.9, s.o));
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(200,230,255,${s.o})`;
      ctx.fill();
    });
    requestAnimationFrame(drawStars);
  }
  resizeCanvas(); initStars(); drawStars();
  window.addEventListener('resize', () => { resizeCanvas(); initStars(); });

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), 80);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(el => obs.observe(el));

  // 3D tilt on feature grid
  function addTilt(el) {
    el.addEventListener('mousemove', e => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      el.style.transform = `perspective(900px) rotateY(${dx * 6}deg) rotateX(${-dy * 4}deg)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg)';
    });
  }
  document.querySelectorAll('.tilt-card').forEach(addTilt);

  // Parallax nebula on mouse move
  const nebulas = document.querySelectorAll('.nebula');
  document.addEventListener('mousemove', e => {
    const xFrac = e.clientX / window.innerWidth - 0.5;
    const yFrac = e.clientY / window.innerHeight - 0.5;
    nebulas.forEach((n, i) => {
      const depth = (i + 1) * 15;
      n.style.transform = `translate(${xFrac * depth}px, ${yFrac * depth}px)`;
    });
  });

  // Planet mouse parallax
  const planet = document.getElementById('planet');
  document.addEventListener('mousemove', e => {
    const xFrac = (e.clientX / window.innerWidth - 0.5) * 2;
    const yFrac = (e.clientY / window.innerHeight - 0.5) * 2;
    planet.style.transform = `rotateY(${xFrac * 18}deg) rotateX(${-yFrac * 12}deg)`;
  });
</script>
</body>
</html>
