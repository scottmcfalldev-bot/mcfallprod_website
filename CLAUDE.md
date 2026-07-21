# mcfallprod_website

Marketing website for McFall Productions.

## Stack

- **Vite + React 18 + TypeScript**, styled with **Tailwind CSS**.
- Icons via `lucide-react`. ESLint configured (`eslint.config.js`).
- Entry `index.html` → `src/main.tsx` → `src/App.tsx`; UI in `src/components/`,
  helpers in `src/utils/`, global styles in `src/index.css`.

## Commands

```bash
npm install
npm run dev         # local dev server
npm run build       # production build -> dist/
npm run preview     # preview the build
npm run lint        # eslint .
npm run typecheck   # tsc --noEmit -p tsconfig.app.json
```

Run `npm run typecheck` and `npm run lint` before considering a change done.

## Notes

- Tailwind config in `tailwind.config.js`; PostCSS in `postcss.config.js`.
- TS is split across `tsconfig.app.json` (app) and `tsconfig.node.json` (tooling).
