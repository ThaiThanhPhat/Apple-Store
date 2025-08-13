<img width="975" height="600" alt="image" src="https://github.com/user-attachments/assets/a2cde09e-47f2-41f4-b48a-7527d7c226ae" />## Apple Store – React + Vite

## Apple Store – React + Vite

<div align="center">
  <img src="https://images.tokopedia.net/img/JFrBQq/2023/10/5/779f7eef-b576-4759-b5d6-9b66f9bfb3f6.jpg" alt="Project banner" width="900" />
  <br /><br />
  <img src="https://img.shields.io/badge/-React_JS-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="react.js" />
  <img src="https://img.shields.io/badge/-Three_JS-black?style=for-the-badge&logoColor=white&logo=threedotjs&color=000000" alt="three.js" />
  <img src="https://img.shields.io/badge/-GSAP-black?style=for-the-badge&logoColor=white&logo=greensock&color=88CE02" alt="greensock" />
  <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
</div>

A modern demo replicating the Apple Store feel with realtime 3D models, smooth animations, and a reusable code architecture. The project focuses on performance, UX, and scalability.

### Table of Contents
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Code Architecture](#code-architecture)
- [Screens & Highlights](#screens--highlights)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Optional Configuration](#optional-configuration)

## Tech Stack
- React.js
- Three.js
- React Three Fiber
- React Three Drei
- GSAP (Greensock)
- Vite
- Tailwind CSS

## Features
- 👉 Beautiful Subtle Smooth Animations using GSAP: Enhanced user experience with seamless and captivating animations powered by GSAP.
- 👉 3D Model Rendering with Different Colors and Sizes: Explore the iPhone 15 Pro from every angle with dynamic 3D rendering, offering various color and size options.
- 👉 Custom Video Carousel (made with GSAP): Engage users with a unique and interactive video carousel developed using GSAP for a personalized browsing experience.
- 👉 Completely Responsive: Consistent access and optimal viewing on any device with a fully responsive design that adapts to different screen sizes.
- …and many more, including code architecture and reusability.

## Code Architecture
- `src/components`: Core UI components (Hero, Highlights, Features, Model, VideoCarousel, …)
- `src/constants`: Static data (nav lists, slides, models, sizes, …)
- `src/utils`: Helpers (animations, media utils, assets mapping)
- `src/index.css`: Global styles (Tailwind utilities + custom CSS)
- `src/main.jsx`: App bootstrap and optional Sentry init
- `public/models`: GLB models and public assets


## Screens & Highlights
- Hero with video
- Highlights with animated title and links
- Custom GSAP-driven video carousel with progress indicators
- 3D iPhone viewer with color/size controls
- Features section with images/video and scroll animations

## Getting Started
1) Prerequisites
- Node.js >= 18
- npm (or pnpm/yarn)

2) Clone & install
```bash
git clone https://github.com/your-username/apple-project.git
cd apple-project
npm install
```

3) Start dev server
```bash
npm run dev
```
Open the printed URL (e.g., `http://localhost:5173`) in your browser.

Want a fixed port (e.g., 5100)? Add this to `vite.config.js`:
```js
export default defineConfig({
  server: { port: 5100 },
  plugins: [react()]
})
```

4) Build for production
```bash
npm run build
```
Artifacts will be generated in the `dist/` folder.

5) Preview the build
```bash
npm run preview
```

## Scripts
- `dev`: start Vite dev server
- `build`: build production bundle
- `preview`: preview the production build locally

## Optional Configuration
- Sentry: The project includes Sentry integration. Update the `dsn` in `src/main.jsx` if you want error/perf monitoring.
- 3D Assets: GLB models live in `public/models/`. Replace assets as needed and adjust camera/scale in `ModelView.jsx`.
- Tailwind: Mix utility classes in JSX with fine‑grained styles in `src/index.css`.

