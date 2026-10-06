---
kind: dependency_management
name: NPM Dependency Management via package.json + Lockfile
category: dependency_management
scope:
    - '**'
source_files:
    - package.json
    - package-lock.json
    - .gitignore
---

## Approach

This is a Vite + React SPA whose third-party dependencies are managed with **npm** (Node Package Manager). There is no vendoring, no private registry configuration, and no monorepo tooling — the project is a single flat npm package.

## Key Files

- `package.json` — declares runtime and dev dependencies, scripts, and package metadata.
- `package-lock.json` — npm lockfile that pins exact transitive dependency versions for reproducible installs.
- `.gitignore` — excludes `node_modules/` and `dist/` from version control; also ignores debug logs from npm/yarn/pnpm/lerna.

## Conventions Observed

- Dependencies are split into two categories:
  - `dependencies`: runtime packages (`react`, `react-dom`, `tailwindcss`, `@tailwindcss/vite`, `react-icons`).
  - `devDependencies`: build/tooling packages (`vite`, `@vitejs/plugin-react`, `eslint`, `@eslint/js`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`, `globals`, `@types/react`, `@types/react-dom`).
- All versions use caret ranges (`^x.y.z`), allowing minor/patch updates within the major version. No fixed pinning in `package.json`; exact resolution is delegated to `package-lock.json`.
- The package is marked `"private": true`, which prevents accidental publication to the public npm registry.
- Scripts expose the standard Vite workflow: `dev`, `build`, `lint`, `preview`.
- The project uses ESM (`"type": "module"`) so imports in source files follow Node ESM conventions.
- `node_modules/` is gitignored, so dependency trees are not committed beyond the lockfile.
- There is no `.npmrc`, no `packageManager` field, and no `pnpm-workspace.yaml` / `lerna.json` / `turbo.json` — the repo does not enforce a specific package manager at the workspace level, though `.gitignore` contains generic entries for npm/yarn/pnpm/lerna debug logs.
- No private registries, scoped auth tokens, or proxy settings are configured in this repository.

## Constraints Enforced by the Codebase

- Runtime vs. build-time separation is enforced by placing framework/UI libraries under `dependencies` and tooling under `devDependencies` in `package.json`.
- Reproducible builds rely on `package-lock.json` being kept in sync with `package.json` (standard npm behavior).
- The package cannot be published to npm because of the `"private": true` flag.