## Apple Store – React + Vite

A modern demo replicating the Apple Store feel with realtime 3D models, smooth animations, and a reusable code architecture. The project focuses on performance, UX, and scalability.

### Tech Stack
- React.js
- Three.js
- React Three Fiber
- React Three Drei
- GSAP (Greensock)
- Vite
- Tailwind CSS

### Features
- 👉 Beautiful Subtle Smooth Animations using GSAP: Enhanced user experience with seamless and captivating animations powered by GSAP.
- 👉 3D Model Rendering with Different Colors and Sizes: Explore the iPhone 15 Pro from every angle with dynamic 3D rendering, offering various color and size options.
- 👉 Custom Video Carousel (made with GSAP): Engage users with a unique and interactive video carousel developed using GSAP for a personalized browsing experience.
- 👉 Completely Responsive: Consistent access and optimal viewing on any device with a fully responsive design that adapts to different screen sizes.
- …and many more, including code architecture and reusability.

### Code Architecture (high level)
- `src/components`: Core UI components (Hero, Highlights, Features, Model, VideoCarousel, …)
- `src/utils`: Helpers (animations, assets mapping, image/video utilities)
- `src/constants`: Static data (nav lists, slides, models, sizes, …)
- `src/index.css`: Global styles (Tailwind utilities + custom CSS)
- `src/main.jsx`: App bootstrap and optional Sentry init

### Getting Started (Clone & Run)
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
Open the printed URL (e.g., `http://localhost:5100`) in your browser.

4) Build for production
```bash
npm run build
```
Artifacts will be generated in the `dist/` folder.

### Optional Configuration
- Sentry: The project includes Sentry integration. Update the `dsn` in `src/main.jsx` if you want error/perf monitoring.
- 3D Assets: GLB models live in `public/models/`. Replace as needed; adjust scale/camera if necessary.
- Tailwind: Mix utility classes in JSX with fine‑grained styles in `src/index.css`.
