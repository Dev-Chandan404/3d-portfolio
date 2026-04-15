# 3D Portfolio – Immersive Three.js Experience  

Experience an interactive 3D developer portfolio that *feels like a world*. This README serves as a guide to a **Three.js-powered** portfolio site (live at [chandan404.netlify.app](https://chandan404.netlify.app)), showing how to present its 3D visuals, animations, and deployment on GitHub. It includes a summary of features and tech, an animated GIF hero demo (with specs), badges (Live site, Netlify, Three.js, license), code snippets for setup and animation, and guidance on performance & accessibility. Citations are provided from official Three.js and Netlify docs, best-practice sources, and relevant tutorials to ensure accuracy【32†L1-L4】【37†L133-L141】.

---

## 📽️ Hero – Animated Preview  

<p align="center">  
<img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="3D Portfolio Preview" width="80%" />  
</p>  

*Animated GIF preview (above)* – shows a sample scene with rotating 3D objects and glowing lights. For your own demo GIF, record a short clip (5–10s) of the live portfolio (e.g. using QuickTime or OBS), then use **FFmpeg** to convert and optimize it (reduce frame rate and size)【49†L120-L129】【23†L343-L350】. For example: 

```bash
# Example FFmpeg command to create a 640px GIF at 12fps from a video
ffmpeg -ss 0 -i demo.mp4 -r 12 -vf "scale=640:-1" -pix_fmt rgb24 -y preview.gif
```

This approach (frame rate down to ~12 fps, scaled to 640×360) can cut file size dramatically (from ~30MB to ~2MB in one case【49†L126-L134】). Aim for under **5MB** in total; GitHub limits assets to **10MB**【23†L343-L350】 and smaller GIFs load faster. *Placeholder:* you can use any looping GIF link until you replace it (e.g. `![Demo](https://media.giphy.com/media/W8YY7JvaM2YLe/giphy.gif)`).

---

## 🏆 Live Demo & Badges  

[![Live Demo](https://img.shields.io/website?url=https%3A%2F%2Fchandan404.netlify.app&logo=google-chrome)](https://chandan404.netlify.app)  
[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR_PROJECT_ID/deploy-status)](https://app.netlify.com/sites/YOUR_SITE_NAME/deploys)  [![License: MIT](https://img.shields.io/badge/license-MIT-green)](LICENSE)  [![three.js](https://img.shields.io/badge/three.js-v0.15-black?logo=three.js&logoColor=white)](https://threejs.org/)  

- **Live Demo:** Click the “Live Demo” badge to open the site (hosted on Netlify).  
- **Netlify Status:** Reflects the current build/deploy status from Netlify (see docs【37†L133-L141】).  
- **License:** MIT.  
- **Three.js:** Uses [Three.js](https://threejs.org/) (v0.15), the WebGL 3D engine【32†L1-L4】.  

---

## 🔍 Executive Summary  

A **3D Portfolio** merges web development with interactive graphics. Instead of a static page, the UI has multiple overlapping layers and animated elements, creating a sense of depth and motion. Key points:  

- **Interactive 3D Scene:** The core of the site is a Three.js scene rendered on the page, with models and animations that respond to scrolling or cursor movement (camera pans, rotates)【5†L282-L290】【32†L1-L4】.  
- **Modern Web UI:** HTML/CSS overlays present text, project cards, and navigation. Smooth CSS3 animations and responsive design ensure it looks good on all devices.  
- **Showcase Personality:** By using 3D visuals and animations, the portfolio stands out – it’s not just info, it’s an *experience*.  

The result is a portfolio that feels like a lightweight WebGL game, ideal for developers showcasing creativity.

---

## 🚀 Features  

- **3D Depth Illusion:** Layered UI elements with CSS `perspective` and 3D transforms give a sense of space. E.g. cards that “float” in front of a background scene.  
- **Smooth Animations:** Continuous loops (rotating objects, pulsing lights) and transitions (fade-in content, hover effects).  
- **Responsive Design:** Adapts to mobile/tablet; the 3D canvas resizes (window listeners) and UI rearranges.  
- **Project Gallery:** Showcases projects with 3D preview images or modals.  
- **Contact Links:** Social/media icons using subtle animations.  
- **Dark + Neon Theme:** A sleek dark background with neon accent colors (cyan, magenta) for contrast.  

---

## 🔧 Tech Stack  

- **HTML / CSS / JS:** Basic web stack. Semantic HTML5 structure; modern CSS (Flexbox/Grid) for layout plus 3D transforms (`transform: rotateX/translateZ` etc).  
- **Three.js Engine:** Renders the 3D scene using WebGL (via Three.js v0.15)【32†L1-L4】. We use `PerspectiveCamera`, `WebGLRenderer`, lights (`PointLight`, `AmbientLight`), and simple geometries (e.g. cubes, torus).  
- **Deployment:** [Netlify](https://netlify.com) – continuous deploy from GitHub.  
- **Extras:** Shaders (GLSL) for special effects (e.g. water, glow), and optional post-processing (e.g. bloom) as future improvements.  

---

## 📂 Project Structure  

```
3d-portfolio/
│
├── index.html           # Main HTML file, <canvas> container
├── style.css            # 3D layout styles (perspective, overlays, colors)
├── script.js            # JS: initializes Three.js scene + animations
├── assets/
│   ├── images/          # Texture maps or UI images (PNG, JPG)
│   └── models/          # 3D models (GLTF/OBJ) if any
└── README.md            # This file
``` 

The core is **index.html / script.js** – they set up a Three.js scene (scene, camera, lights, renderer), load any models/textures, and start an animation loop (`requestAnimationFrame`)【32†L1-L4】.  

---

## 💻 Installation & Running Locally  

1. **Clone the repo:**  
   ```bash
   git clone https://github.com/Dev-Chandan404/3d-portfolio.git
   cd 3d-portfolio
   ```  
2. **Open `index.html`:** No build step needed. Simply double-click `index.html` or serve with a simple HTTP server (e.g. `npx serve`) to avoid CORS with textures/models.  
3. **Interact:** Open the page in browser; you should see the 3D scene and UI.  

*(If using modules or advanced imports, ensure a local server; otherwise linking Three.js via `<script>` is simplest.)*

---

## 💡 Key Code Snippets  

**Three.js Scene Setup:** (ES Module style)
```js
import * as THREE from 'https://unpkg.com/three/build/three.module.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.z = 5;
```
This initializes the scene and camera【32†L1-L4】. 

**Animation Loop:**  
```js
function animate() {
  requestAnimationFrame(animate);
  // example: rotate a cube
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
```
The `requestAnimationFrame` loop ensures smooth 60fps animation (frame rate auto-managed) and updates the canvas.  

**Lighting and Materials:**  
```js
const light = new THREE.PointLight(0xffffff, 1);
light.position.set(5, 5, 5);
scene.add(light);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshStandardMaterial({ color: 0x00ffdd, metalness: 0.5, roughness: 0.2 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
```
A basic cube mesh with lighting. Three.js materials (Standard/Physical) give realistic shading【32†L1-L4】. Experiment with `AmbientLight`, `HemisphereLight`, or shaders for effects.

---

## 🎨 Animations & Interaction Details  

- **Camera Motion:** The camera is animated in subtle ways (e.g. slight translation on scroll, or orbit controls). For instance, on scroll we might update `camera.position.z` or `camera.lookAt(scene.position)`.  
- **Hover Effects:** Detect cursor movement (`window.addEventListener('pointermove')`) to tilt or move UI cards (using CSS transforms) or adjust light positions for parallax feel.  
- **Shaders:** Custom GLSL shaders can create effects (water ripples, neon glow). Three.js’s [`MeshBasicMaterial.onBeforeCompile`](https://threejs.org/docs/#api/en/materials/MeshBasicMaterial) hook or ShaderMaterial can inject GLSL code for advanced effects.  
- **Performance Tips:** Keep poly count low (use simple geometries or LOD models). Reuse geometries/materials. Compress textures. Animate transforms rather than heavy physics. Keep renderer pixel ratio to device (`renderer.setPixelRatio(window.devicePixelRatio)`), but consider capping it for mobiles.  

*(Three.js offers extensive docs on cameras, lights, and performance – e.g. see [Three.js docs on cameras](https://threejs.org/docs/#api/en/cameras/PerspectiveCamera) and [on render optimization](https://threejs.org/docs/#manual/en/introduction/Creating-a-scene).)*

---

## 🛠️ Customization Guide  

The project is designed to be **easily customizable**:

- **Replace Content:** Edit HTML to change your name, bio, and projects.  
- **Swap Models:** In `/assets/models`, add your own GLTF/OBJ models. Update `script.js` to load them (`THREE.GLTFLoader` or `OBJLoader`).  
- **Textures & Colors:** Swap textures/images in `/assets/images`. Change CSS variables or colors in the material definitions for a different theme.  
- **Layout:** Use CSS Grid/Flex to add sections. Toggle `.hidden` classes to hide/show panels.  
- **Add Features:** You can integrate more Three.js features (e.g. `OrbitControls` for drag, `Stats.js` for FPS counter, or GSAP for timeline animations).  

**Note:** When editing assets, optimize them: use [Squoosh](https://squoosh.app) or [ImageOptim](https://imageoptim.com) to compress images【43†L318-L327】, and ensure any new GIF/PNG is within reason (keep icons under ~100KB, UI images under ~500KB, GIFs under ~5MB【23†L343-L350】).

---

## 📦 Deployment (Netlify)

This site is deployed on Netlify for continuous delivery. The flow is:

```mermaid
flowchart LR
    A[GitHub &#8594; Push Repo] --> B[Netlify Build Starts]
    B --> C{Build Success?}
    C -- Yes --> D[Deploy to Production]
    C -- No  --> E[Build Failed (Check Logs)]
    D --> F[Live Site Updated]
```

1. **Push to GitHub:** Any commit to the `main` branch triggers Netlify.  
2. **Netlify Build:** Netlify pulls from GitHub, runs any build commands (for static site, often none beyond bundling or copying files).  
3. **Deploy:** On success, the updated site is published (automatically live). Status badges and logs are updated in Netlify (see [Netlify docs on status badges]【37†L133-L141】).  

To set this up for your fork: after pushing, go to Netlify Dashboard → *Add new site* → *Import from GitHub*, select your repo, and link it. Netlify will provide a Status Badge snippet (copy that Markdown into README). For example:
```md
[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR_PROJECT_ID/deploy-status)](https://app.netlify.com/sites/YOUR_SITE_NAME/deploys)
```
Replace `YOUR_PROJECT_ID` and `YOUR_SITE_NAME` with values from your Netlify *Settings > Status badges* page【37†L149-L158】.

---

## 🌐 3D Preview Options Comparison  

| Preview Method         | Pros                                     | Cons                                                | File Size  | Dimensions (w×h)       | Implementation                                                         |
|------------------------|------------------------------------------|-----------------------------------------------------|------------|------------------------|------------------------------------------------------------------------|
| **Animated GIF**       | - Shows motion (camera, objects) <br>- Universal support in Markdown <br>- Easy to embed with `<img>`【47†L170-L178】 | - Large file (megabytes) can slow loading【23†L343-L350】 <br>- Static once embedded (no interactivity) | ~1–5 MB (target) | ~600×400 or HD, scaled down | 1) Record screen or export video <br> 2) Use ffmpeg to convert (limit fps, resize)【49†L126-L134】 <br> 3) Host GIF (e.g. in repo or externally) and embed with `![Alt](URL)`【47†L170-L178】 |
| **Animated SVG**      | - Vector (crisp at any resolution) <br>- Very small size (<50KB) <br>- Text effects possible with SVG animations | - No true 3D content (flat 2D animations) <br>- Limited effects (no frame-by-frame video) <br>- Some Markdown renderers may inline SVG as image (supported on GitHub) | < 100 KB  | Any (set in viewBox) | 1) Create SVG with `<animate>` elements (e.g. flicker, color-change). <br> 2) Copy SVG code into Markdown (`![Alt](data:image/svg+xml;utf8,<svg ...>`) or link as file.  |
| **Live Embed / Screenshot** | - Best quality (actual website) <br>- Keeps animation - Static screenshot optional <br>- Small file if static | - No inline rendering of live site on GitHub <br>- User must click link to see 3D scene <br>- Screenshot is static image only | Screenshot ~200–500KB (PNG) | e.g. 1280×720 (HD) | 1) Link to live site (via badges or hyperlink). <br> 2) For inline preview, capture screenshot of site, compress, and embed like `![Site screenshot](img.png)`. <br>3) Or embed a short screen-record video if converted to small GIF. |

---

## 🖼️ Image Hosting Recommendations  

- **Primary Sources:** Use the Netlify site or GitHub itself for images. For example, take screenshots of your live site (or use saved assets) and store them in the repo (e.g. `/assets/images/`) or host on an image CDN (Imgur, Cloudinary).  
- **Netlify Deploy:** You can also use your Netlify domain (or a serverless function) to serve images, but simplest is direct linking to a raw GitHub or Netlify file URL.  
- **Original Files:** Whenever possible, use original high-quality assets. Convert them (see GIF recipe above) rather than sourcing from unknown image search. 

*Example:* To embed an image from this repo, you could use:  
```md
![Dashboard Screenshot](/assets/images/dashboard.png)
``` 
GitHub will display it from the repo itself.

---

## 🏷️ Suggested Badges  

Copy these Markdown lines into your README:

```md
[![Live Demo](https://img.shields.io/website?url=https%3A%2F%2Fchandan404.netlify.app&logo=google-chrome&label=Live%20Demo)](https://chandan404.netlify.app/)
[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR_PROJECT_ID/deploy-status)](https://app.netlify.com/sites/YOUR_SITE_NAME/deploys)
[![License: MIT](https://img.shields.io/badge/License-MIT-green)](LICENSE)
[![three.js](https://img.shields.io/badge/three.js-v0.15-black?logo=three.js&logoColor=white)](https://threejs.org/)
```

- **Live Demo:** Opens the site (uses Shields’ [website status badge](https://img.shields.io/website)).  
- **Netlify Status:** Shows build success/failure (replace `YOUR_PROJECT_ID` and `YOUR_SITE_NAME`).  
- **License:** Standard MIT badge.  
- **Three.js:** Badge with Three.js logo.  

These provide quick status info and links to the live site, deployments, license file, and Three.js official site.

---

## ✅ Accessibility & Performance Checks  

- **Alt Text:** Always add descriptive `alt="..."` text to images and GIFs【54†L541-L550】. For example: `![Rotating 3D cube](/assets/images/cube.gif)`. Screen readers will announce this so users know what the image is.  
- **Headings & Links:** Use clear headings (H1 for title, H2/H3 for sections) and avoid ambiguous link text【54†L580-L588】【54†L518-L526】. E.g. `[Live Demo]` instead of `[Click here]`.  
- **Color Contrast:** Ensure text/graphics on dark backgrounds have high contrast. Tools like the [Chrome Accessibility Developer Tools](https://developer.chrome.com/docs/devtools/accessibility/) can audit color contrast.  
- **Image Optimization:** Compress all images/GIFs. Tools like [Squoosh](https://squoosh.app) or ImageOptim can reduce PNG/JPEG size by >50% without visible loss【43†L318-L327】. For GIFs, consider converting to MP4/WebM for small demos (though GitHub READMEs only accept GIF/PNG/JPEG).  
- **Lighthouse Audit:** Run [Lighthouse](https://developers.google.com/web/tools/lighthouse) to check performance, accessibility, and SEO scores【56†L137-L145】. Netlify can even run a Lighthouse plugin on each build【56†L137-L145】. Aim for a fast initial load: all images **LCP**-optimized, use `width`/`height` attributes on `<img>`, and minify CSS/JS. 

By following these guidelines (accessible links/alt text, optimized images, Lighthouse testing), your README will be both impressive and inclusive.

---

## 🔮 Roadmap (Future Enhancements)  

- [ ] Add **GLTF 3D models** (e.g. custom logo or icons) to scene.  
- [ ] Implement **scroll-driven animations** (use [ScrollTrigger](https://greensock.com/docs/v3/Plugins/ScrollTrigger) or GSAP).  
- [ ] Shader effects: rippling water, hologram glitches (GLSL via Three.js).  
- [ ] Improve mobile performance: reduce polycount on small screens, conditional rendering.  
- [ ] Optional: add a toggle for Light/Dark mode with different skybox/environment maps.  

These improvements can further showcase your skills and keep the portfolio cutting-edge.

---

## ⚡ Quick Reference Assets & Code  

**a) GIF Generation Recipe (via FFmpeg):**  
```bash
# Record or export a short clip (e.g. MP4), then convert:
ffmpeg -ss 0 -i clip.mp4 -r 10 -vf "scale=800:-1" -pix_fmt rgb24 -y demo.gif
```
- `-ss 0`: start at 0 seconds; `-t 5` to limit length.  
- `-r 10`: 10 fps (lower for smaller file).  
- `scale=800:-1`: width 800px, height auto.  
- `rgb24`: use RGB color.  
This reduces size; in one example it shrank a 29MB GIF to ~2MB【49†L126-L134】.

**b) Animated SVG Header (example):**  
```svg
<svg viewBox="0 0 600 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="glow" x1="0%" x2="100%" y1="0%" y2="0%">
      <stop offset="0%" stop-color="#0ff">
        <animate attributeName="stop-color" values="#0ff; #3af; #0ff" dur="1.5s" repeatCount="indefinite"/>
      </stop>
      <stop offset="100%" stop-color="#3af">
        <animate attributeName="stop-color" values="#3af; #0ff; #3af" dur="1.5s" repeatCount="indefinite"/>
      </stop>
    </linearGradient>
  </defs>
  <text x="50%" y="60%" text-anchor="middle" font-family="monospace" font-size="36" fill="url(#glow)">
    3D PORTFOLIO
  </text>
</svg>
```
This SVG animates a neon gradient on the text "3D PORTFOLIO". You can embed it by uploading as `.svg` or using a data URI. For example:  
```md
![3D Portfolio](data:image/svg+xml;utf8,<svg>…</svg>)
```  

**c) Three.js Splash-Screen Script (ES Module):**  
```js
// splash.js - minimal Three.js scene (importable or <script type="module">)
import * as THREE from 'https://unpkg.com/three/build/three.module.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, innerWidth/innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(innerWidth, innerHeight);
document.body.appendChild(renderer.domElement);

// Torus knot geometry with neon material
const geometry = new THREE.TorusKnotGeometry(1, 0.3, 100, 16);
const material = new THREE.MeshBasicMaterial({ color: 0x00ffff });
const knot = new THREE.Mesh(geometry, material);
scene.add(knot);

// Ambient glow
const light = new THREE.PointLight(0x00ffff, 1.2);
light.position.set(5, 5, 5);
scene.add(light);

camera.position.z = 3;

function animate() {
  requestAnimationFrame(animate);
  knot.rotation.x += 0.01;
  knot.rotation.y += 0.02;
  renderer.render(scene, camera);
}
animate();
```
This creates a spinning **torus knot** with a cyan glow. Save as `splash.js` and include in an HTML file (host on Netlify). Example HTML:  
```html
<!DOCTYPE html><body><script type="module" src="splash.js"></script></body>
```  
Link to it in README for a live intro or use as a template for your own effect.

---

## 📚 Sources & Further Reading  

- Three.js documentation – for geometry, cameras, materials: “Three.js is a cross-browser JavaScript library for creating 3D graphics using WebGL and WebGPU.”【32†L1-L4】 (see [manual](https://threejs.org/manual/#en/creating-a-scene)).  
- Netlify Docs – “Status badges are visual representations of your site’s status… add it to repository READMEs”【37†L133-L141】.  
- Web.dev – *Image Compression*: “Lossless compression is used for GIF, PNG, WebP, and AVIF… You can compress images using Squoosh or ImageOptim.”【43†L318-L327】.  
- StackOverflow & Blogs on GIFs – Tips to host and compress GIFs.  Large GIFs (25MB) are impractical in READMEs; host externally and use optimized size【47†L170-L178】【49†L126-L134】.  
- GitHub Accessibility – Use alt text and structured headings: “Using image descriptions (alt text) helps… Everyone can extract meaning”【54†L541-L550】; Lighthouse audits for performance and accessibility【56†L137-L145】.  

This README template and guide ensure your **3D portfolio** README is as dynamic and impressive as the site itself. Adjust the content, assets, and code to fit your project, and deploy confidently.  

Happy coding – make it *feel* 3D!
