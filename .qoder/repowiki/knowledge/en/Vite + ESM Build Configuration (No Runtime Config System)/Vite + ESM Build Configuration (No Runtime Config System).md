---
kind: configuration_system
name: Vite + ESM Build Configuration (No Runtime Config System)
category: configuration_system
scope:
    - '**'
source_files:
    - package.json
    - vite.config.js
    - eslint.config.js
    - src/main.jsx
    - src/App.jsx
---

## What system/approach is used

This repository is a Vite + React single-page application with **no runtime configuration system**. There is no `.env` file, no config loader, no feature flags, and no secrets management. All build-time configuration lives in three flat files at the project root:

- `package.json` — declares scripts (`dev`, `build`, `lint`, `preview`) and dependencies.
- `vite.config.js` — defines the Vite plugin pipeline (React + Tailwind via `@tailwindcss/vite`).
- `eslint.config.js` — flat ESLint config extending `js.configs.recommended`, `reactHooks`, and `reactRefresh`.

The app entrypoint (`src/main.jsx`) bootstraps React's `createRoot` and renders `<App />` directly; there is no config object, environment variable reader, or runtime settings layer.

## Key files and packages

- `package.json` — npm manifest; `type: "module"` enables native ESM imports throughout the project.
- `vite.config.js` — only two plugins are registered: `@vitejs/plugin-react` and `@tailwindcss/vite`.
- `eslint.config.js` — uses the new flat config format (`defineConfig`, `globalIgnores`); ignores `dist/`; applies to `**/*.{js,jsx}`.
- `index.html` — HTML shell served by Vite (hosted under `/`).
- `src/main.jsx` — React bootstrap; no config loading.
- `src/App.jsx` — top-level component composing page sections; no props-driven configuration.

## Architecture and conventions

- **Build-only configuration**: All customization happens at build time through Vite plugins and npm scripts. There is no concept of per-environment configs (e.g., no `.env.development` / `.env.production`).
- **ESM-first**: `package.json` sets `"type": "module"`, so all JS/JSX files use `import`/`export` syntax consistently across components and config files.
- **Tailwind via Vite plugin**: Styling is configured entirely through the `@tailwindcss/vite` plugin rather than a separate `tailwind.config.js` — default Tailwind behavior is assumed.
- **Component composition over configuration**: The UI is assembled by importing and rendering section components (`Header`, `Hero`, `Solucao`, `PublicoAlvo`, `Galeria`, `Equipe`, `Contato`, `Footer`) inside `App.jsx`. No prop-based theming or configuration objects are passed down.
- **No runtime state for configuration**: Components do not read `process.env`, `import.meta.env`, or any external source for settings.

## Conventions and constraints

- Scripts are the only way to interact with the build toolchain: `npm run dev`, `npm run build`, `npm run lint`, `npm run preview` (enforced by `package.json` scripts).
- ESLint rules are inherited from the recommended presets; no custom rules are declared beyond enabling React Hooks and Refresh integrations (enforced by `eslint.config.js`).
- Only `dist/` is globally ignored by ESLint (enforced by `globalIgnores(['dist'])`).
- The project has no `.env*` files, no YAML/TOML/JSON config files, and no config-loading code anywhere under `src/` — confirmed by absence of such files in the repository tree and by scanning the entrypoints.

Because this is a static landing-page SPA with no server-side runtime, there is no secrets store, no environment-layering, and no feature-flag system. Configuration is effectively limited to build-time plugin selection and npm script aliases.