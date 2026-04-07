# Task App (Vite + React)

Quick scaffolded project for the Task App (PWA-ready).

Run locally:

```powershell
cd "task-app"
npm install
npm run dev
```

Build & preview (production, for service worker testing):

```powershell
npm run build
npm run preview
```

Notes:
- Manifest is at `public/manifest.json`.
- Service worker is at `public/sw.js` and is registered in `src/main.jsx`.
- Icons are simple SVGs in `public/` (you can replace them with PNGs if desired).
