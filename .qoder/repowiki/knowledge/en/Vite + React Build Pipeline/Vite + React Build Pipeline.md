---
kind: build_system
name: Vite + React Build Pipeline
category: build_system
scope:
    - '**'
source_files:
    - package.json
    - vite.config.js
    - eslint.config.js
    - index.html
---

## Build System Overview

This is a Vite + React single-page application. The build pipeline is defined entirely through npm scripts and Vite configuration — there are no Makefiles, Dockerfiles, CI pipelines, or shell-based build scripts in the repository.

## Key Files

- `package.json` — declares npm scripts (`dev`, `build`, `lint`, `preview`) and all runtime/dev dependencies.
- `vite.config.js` — registers the `@vitejs/plugin-react` and `@tailwindcss/vite` plugins; no custom rollup options, aliases, or output overrides.
- `eslint.config.js` — flat-config ESLint setup extending `@eslint/js`, `react-hooks`, and `react-refresh`; ignores the `dist/` directory.
- `index.html` — HTML entry point served by Vite's dev server and used as the template for production builds.

## Scripts and Commands

| Script | Command | Purpose |
|---|---|---|
| `npm run dev` | `vite` | Starts the Vite development server with HMR |
| `npm run build` | `vite build` | Produces optimized static assets under `dist/` |
| `npm run lint` | `eslint .` | Runs ESLint against `**/*.{js,jsx}` (excluding `dist/`) |
| `npm run preview` | `vite preview` | Serves the built `dist/` locally for verification |

## Architecture and Conventions

- **Bundler**: Vite 8.x with the React plugin handles JSX transformation and module resolution.
- **Styling**: Tailwind CSS v4 via the `@tailwindcss/vite` plugin; styles are consumed directly from source files rather than a separate PostCSS pipeline.
- **Module system**: `"type": "module"` in `package.json` enables ESM throughout the project; both `vite.config.js` and `eslint.config.js` use top-level `import`/`export`.
- **Linting**: Flat config ESLint (v10) with browser globals enabled; React Hooks rules and the React Refresh plugin are included to match the Vite dev experience.
- **Output**: Default Vite behavior — `dist/` contains the bundled JS, CSS, and copied static assets; no custom `build.outDir` or asset prefixing is configured.
- **Versioning**: `package.json` has `"private": true` and a placeholder `"version": "0.0.0"`; there is no automated version bumping script or release workflow.

## Constraints Observed

- No containerization: there is no `Dockerfile` or docker-compose configuration in the repository.
- No CI/CD: no GitHub Actions, GitLab CI, or other pipeline files exist at the repository root.
- No cross-compilation or platform-specific build logic — Vite produces browser-targeted assets only.
- The `dist/` directory is explicitly ignored by ESLint via `globalIgnores(['dist'])` in `eslint.config.js`.
- Dependencies are pinned via `package-lock.json`; no yarn/pnpm lockfile is present.