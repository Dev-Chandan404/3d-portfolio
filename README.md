<svg width="900" height="300" viewBox="0 0 900 300" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="bg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#020d1a"/>
      <stop offset="100%" stop-color="#010810"/>
    </radialGradient>
    <radialGradient id="planet-grad" cx="35%" cy="35%" r="60%">
      <stop offset="0%" stop-color="#1a6b99"/>
      <stop offset="50%" stop-color="#0a2a40"/>
      <stop offset="100%" stop-color="#020b14"/>
    </radialGradient>
    <radialGradient id="planet-glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#00d4ff" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="#00d4ff" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="nebula1" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#00d4ff" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#00d4ff" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="nebula2" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#7b5ea7" stop-opacity="0.1"/>
      <stop offset="100%" stop-color="#7b5ea7" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="title-grad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#00d4ff"/>
      <stop offset="50%" stop-color="#a78bfa"/>
      <stop offset="100%" stop-color="#ff6b35"/>
    </linearGradient>
    <linearGradient id="ring-grad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#00d4ff" stop-opacity="0"/>
      <stop offset="50%" stop-color="#00d4ff" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="#00d4ff" stop-opacity="0"/>
    </linearGradient>
    <filter id="glow-strong">
      <feGaussianBlur stdDeviation="4" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <filter id="glow-soft">
      <feGaussianBlur stdDeviation="8" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <filter id="glow-text">
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <clipPath id="clip-main">
      <rect width="900" height="300" rx="16"/>
    </clipPath>
    <style>
      @keyframes float {
        0%,100% { transform: translateY(0px); }
        50%      { transform: translateY(-10px); }
      }
      @keyframes spin-ring {
        from { transform: rotate(0deg); }
        to   { transform: rotate(360deg); }
      }
      @keyframes twinkle-a { 0%,100%{opacity:.9} 50%{opacity:.2} }
      @keyframes twinkle-b { 0%,100%{opacity:.5} 50%{opacity:1} }
      @keyframes twinkle-c { 0%,100%{opacity:.3} 60%{opacity:.9} }
      @keyframes pulse-glow {
        0%,100% { opacity: 0.5; }
        50%      { opacity: 1; }
      }
      @keyframes drift {
        0%,100% { transform: translate(0,0); }
        33%     { transform: translate(4px,-3px); }
        66%     { transform: translate(-3px,4px); }
      }
      @keyframes badge-in {
        from { opacity:0; transform: translateX(-8px); }
        to   { opacity:1; transform: translateX(0); }
      }
      @keyframes scanline {
        0%   { transform: translateY(-100%); }
        100% { transform: translateY(400%); }
      }
      .planet-group { animation: float 5s ease-in-out infinite; transform-origin: 158px 150px; }
      .ring-outer   { animation: spin-ring 12s linear infinite; transform-origin: 158px 150px; }
      .ring-inner   { animation: spin-ring 8s linear infinite reverse; transform-origin: 158px 150px; }
      .s1 { animation: twinkle-a 2.1s ease-in-out infinite; }
      .s2 { animation: twinkle-b 1.7s ease-in-out infinite; }
      .s3 { animation: twinkle-c 2.8s ease-in-out infinite; }
      .s4 { animation: twinkle-a 3.3s ease-in-out infinite; }
      .s5 { animation: twinkle-b 1.4s ease-in-out infinite; }
      .glow-pulse { animation: pulse-glow 3s ease-in-out infinite; }
      .nebula-drift { animation: drift 8s ease-in-out infinite; }
    </style>
  </defs>

  <g clip-path="url(#clip-main)">

    <!-- Background -->
    <rect width="900" height="300" fill="url(#bg)"/>

    <!-- Nebula clouds -->
    <ellipse class="nebula-drift" cx="160" cy="140" rx="180" ry="140" fill="url(#nebula1)"/>
    <ellipse cx="700" cy="180" rx="220" ry="160" fill="url(#nebula2)"/>
    <ellipse cx="500" cy="80" rx="150" ry="100" fill="url(#nebula1)" opacity="0.5"/>

    <!-- Stars layer 1 - slow twinkle -->
    <circle class="s1" cx="42"  cy="18"  r="1.2" fill="#c8e6f8"/>
    <circle class="s1" cx="310" cy="35"  r="0.9" fill="#c8e6f8"/>
    <circle class="s1" cx="580" cy="12"  r="1.4" fill="#ffffff"/>
    <circle class="s1" cx="760" cy="28"  r="1.0" fill="#c8e6f8"/>
    <circle class="s1" cx="860" cy="55"  r="0.8" fill="#c8e6f8"/>
    <circle class="s1" cx="430" cy="22"  r="1.1" fill="#ffffff"/>
    <circle class="s1" cx="640" cy="60"  r="0.9" fill="#c8e6f8"/>
    <circle class="s1" cx="820" cy="110" r="1.3" fill="#c8e6f8"/>
    <circle class="s1" cx="50"  cy="250" r="1.0" fill="#ffffff"/>
    <circle class="s1" cx="220" cy="275" r="0.8" fill="#c8e6f8"/>
    <circle class="s1" cx="700" cy="265" r="1.2" fill="#c8e6f8"/>
    <circle class="s1" cx="870" cy="240" r="1.0" fill="#ffffff"/>

    <!-- Stars layer 2 - medium twinkle -->
    <circle class="s2" cx="90"  cy="70"  r="0.9" fill="#c8e6f8"/>
    <circle class="s2" cx="270" cy="55"  r="1.3" fill="#ffffff"/>
    <circle class="s2" cx="490" cy="48"  r="0.8" fill="#c8e6f8"/>
    <circle class="s2" cx="670" cy="20"  r="1.1" fill="#ffffff"/>
    <circle class="s2" cx="790" cy="70"  r="0.9" fill="#c8e6f8"/>
    <circle class="s2" cx="380" cy="280" r="1.0" fill="#ffffff"/>
    <circle class="s2" cx="550" cy="270" r="1.3" fill="#c8e6f8"/>
    <circle class="s2" cx="840" cy="170" r="0.8" fill="#c8e6f8"/>
    <circle class="s2" cx="110" cy="195" r="1.0" fill="#ffffff"/>
    <circle class="s2" cx="350" cy="18"  r="0.7" fill="#c8e6f8"/>

    <!-- Stars layer 3 - fast twinkle -->
    <circle class="s3" cx="180" cy="30"  r="1.5" fill="#ffffff"/>
    <circle class="s3" cx="620" cy="38"  r="1.0" fill="#c8e6f8"/>
    <circle class="s3" cx="730" cy="90"  r="0.8" fill="#ffffff"/>
    <circle class="s3" cx="460" cy="285" r="1.2" fill="#c8e6f8"/>
    <circle class="s3" cx="810" cy="290" r="0.9" fill="#ffffff"/>
    <circle class="s3" cx="70"  cy="140" r="0.7" fill="#c8e6f8"/>
    <circle class="s4" cx="240" cy="260" r="1.1" fill="#ffffff"/>
    <circle class="s4" cx="900" cy="130" r="0.8" fill="#c8e6f8"/>
    <circle class="s5" cx="500" cy="220" r="1.3" fill="#ffffff"/>
    <circle class="s5" cx="660" cy="250" r="0.9" fill="#c8e6f8"/>

    <!-- Neon accent dots -->
    <circle class="s2 glow-pulse" cx="340" cy="90"  r="1.5" fill="#00d4ff" filter="url(#glow-strong)"/>
    <circle class="s4 glow-pulse" cx="750" cy="45"  r="1.2" fill="#a78bfa" filter="url(#glow-strong)"/>
    <circle class="s3 glow-pulse" cx="880" cy="200" r="1.0" fill="#00d4ff" filter="url(#glow-strong)"/>

    <!-- === PLANET GROUP (floats) === -->
    <g class="planet-group">

      <!-- Outer glow halo -->
      <circle cx="158" cy="150" r="88" fill="url(#planet-glow)" class="glow-pulse"/>

      <!-- Orbit ring (spinning) -->
      <g class="ring-outer">
        <ellipse cx="158" cy="150" rx="110" ry="28" fill="none" stroke="url(#ring-grad)" stroke-width="1.5"/>
      </g>
      <g class="ring-inner">
        <ellipse cx="158" cy="150" rx="90" ry="22" fill="none" stroke="#00d4ff" stroke-width="0.5" stroke-opacity="0.3" stroke-dasharray="8 6"/>
      </g>

      <!-- Planet shadow (behind planet over ring) -->
      <ellipse cx="158" cy="152" rx="62" ry="28" fill="#020b14" opacity="0.7"/>

      <!-- Planet sphere -->
      <circle cx="158" cy="150" r="62" fill="url(#planet-grad)"/>

      <!-- Surface highlight -->
      <ellipse cx="138" cy="128" rx="22" ry="14" fill="#1e8ab0" opacity="0.25"/>
      <ellipse cx="148" cy="122" rx="10" ry="6" fill="#33aad4" opacity="0.15"/>

      <!-- Surface craters/texture -->
      <circle cx="170" cy="160" r="8"  fill="#0d3a58" opacity="0.5"/>
      <circle cx="145" cy="170" r="5"  fill="#0d3a58" opacity="0.4"/>
      <circle cx="178" cy="138" r="4"  fill="#0d3a58" opacity="0.3"/>

      <!-- Atmosphere rim -->
      <circle cx="158" cy="150" r="62" fill="none" stroke="#00d4ff" stroke-width="2" stroke-opacity="0.2"/>
      <circle cx="158" cy="150" r="64" fill="none" stroke="#00d4ff" stroke-width="1" stroke-opacity="0.1"/>

      <!-- Glow dots on planet surface -->
      <circle cx="130" cy="158" r="2" fill="#00d4ff" opacity="0.5" filter="url(#glow-strong)"/>
      <circle cx="185" cy="142" r="1.5" fill="#00d4ff" opacity="0.4" filter="url(#glow-strong)"/>
    </g>

    <!-- Vertical separator line -->
    <line x1="268" y1="40" x2="268" y2="260" stroke="#00d4ff" stroke-width="0.5" stroke-opacity="0.2"/>

    <!-- === TEXT SIDE === -->

    <!-- Top mono label -->
    <text x="310" y="72" font-family="'Courier New', monospace" font-size="11" fill="#00d4ff" opacity="0.7" letter-spacing="3">DEV · CHANDAN404 · 3D PORTFOLIO</text>

    <!-- Main title -->
    <text x="308" y="125" font-family="Georgia, serif" font-size="48" font-weight="700" fill="url(#title-grad)" filter="url(#glow-text)" letter-spacing="-1">3D Portfolio</text>

    <!-- Subtitle -->
    <text x="311" y="155" font-family="'Courier New', monospace" font-size="13" fill="#7a9ab0" letter-spacing="0.5">Interactive planet · Mouse orbit · GSAP cosmos</text>

    <!-- Divider line -->
    <line x1="310" y1="170" x2="620" y2="170" stroke="#00d4ff" stroke-width="0.5" stroke-opacity="0.25"/>

    <!-- Tech badges row -->
    <!-- React badge -->
    <rect x="310" y="182" width="64" height="22" rx="11" fill="#61dafb" fill-opacity="0.1" stroke="#61dafb" stroke-width="0.8" stroke-opacity="0.5"/>
    <text x="342" y="197" font-family="'Courier New', monospace" font-size="10" fill="#61dafb" text-anchor="middle" letter-spacing="0.5">React 19</text>

    <!-- Three.js badge -->
    <rect x="382" y="182" width="62" height="22" rx="11" fill="#ffffff" fill-opacity="0.05" stroke="#ffffff" stroke-width="0.8" stroke-opacity="0.3"/>
    <text x="413" y="197" font-family="'Courier New', monospace" font-size="10" fill="#e8f4f8" text-anchor="middle" letter-spacing="0.5">Three.js</text>

    <!-- GSAP badge -->
    <rect x="452" y="182" width="52" height="22" rx="11" fill="#00ff9f" fill-opacity="0.08" stroke="#00ff9f" stroke-width="0.8" stroke-opacity="0.4"/>
    <text x="478" y="197" font-family="'Courier New', monospace" font-size="10" fill="#00ff9f" text-anchor="middle" letter-spacing="0.5">GSAP</text>

    <!-- Vite badge -->
    <rect x="512" y="182" width="44" height="22" rx="11" fill="#646cff" fill-opacity="0.1" stroke="#646cff" stroke-width="0.8" stroke-opacity="0.5"/>
    <text x="534" y="197" font-family="'Courier New', monospace" font-size="10" fill="#a78bfa" text-anchor="middle" letter-spacing="0.5">Vite</text>

    <!-- Tailwind badge -->
    <rect x="564" y="182" width="64" height="22" rx="11" fill="#06b6d4" fill-opacity="0.08" stroke="#06b6d4" stroke-width="0.8" stroke-opacity="0.4"/>
    <text x="596" y="197" font-family="'Courier New', monospace" font-size="10" fill="#06b6d4" text-anchor="middle" letter-spacing="0.5">Tailwind</text>

    <!-- Bottom line -->
    <text x="311" y="238" font-family="'Courier New', monospace" font-size="11" fill="#4a7a90" letter-spacing="1">✦ Built by Chandan Kumar · chandan404.netlify.app</text>

    <!-- Corner decoration top-right -->
    <line x1="870" y1="10" x2="890" y2="10" stroke="#00d4ff" stroke-width="1" stroke-opacity="0.4"/>
    <line x1="890" y1="10" x2="890" y2="30" stroke="#00d4ff" stroke-width="1" stroke-opacity="0.4"/>

    <!-- Corner decoration bottom-left -->
    <line x1="10"  y1="290" x2="30"  y2="290" stroke="#00d4ff" stroke-width="1" stroke-opacity="0.4"/>
    <line x1="10"  y1="270" x2="10"  y2="290" stroke="#00d4ff" stroke-width="1" stroke-opacity="0.4"/>

    <!-- Scanline effect (very subtle) -->
    <rect width="900" height="3" fill="#00d4ff" fill-opacity="0.015" y="0">
      <animateTransform attributeName="transform" type="translate" from="0,0" to="0,300" dur="4s" repeatCount="indefinite"/>
    </rect>

    <!-- Border glow -->
    <rect width="900" height="300" rx="16" fill="none" stroke="#00d4ff" stroke-width="1" stroke-opacity="0.15"/>

  </g>
</svg>
