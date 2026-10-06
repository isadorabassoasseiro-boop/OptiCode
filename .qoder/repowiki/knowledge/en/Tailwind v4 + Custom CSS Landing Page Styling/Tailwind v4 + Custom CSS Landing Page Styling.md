---
kind: frontend_style
name: Tailwind v4 + Custom CSS Landing Page Styling
category: frontend_style
scope:
    - '**'
source_files:
    - src/App.css
    - src/index.css
    - vite.config.js
    - package.json
---

## Approach

The OptiCode landing page is a Vite + React SPA whose visual style is built on **Tailwind CSS v4** (via `@tailwindcss/vite` plugin) combined with a large hand-written stylesheet. Tailwind is imported through the Vite pipeline (`vite.config.js`) and referenced in both `src/index.css` (`@import "tailwindcss";`) and `src/App.css`. However, the actual component styling is overwhelmingly done in plain CSS under `src/App.css` (~1295 lines), not via Tailwind utility classes.

## Key Files

- `package.json` — declares `tailwindcss: ^4.3.3`, `@tailwindcss/vite: ^4.3.3`, and `react-icons: ^5.7.0` as dependencies.
- `vite.config.js` — registers the `@tailwindcss/vite` plugin alongside `@vitejs/plugin-react`.
- `src/index.css` — minimal entry that only imports Tailwind.
- `src/App.css` — the single source of truth for all visual design: design tokens, global resets, section styles, component styles, and responsive breakpoints.
- `public/imagens/` — static assets (PNGs, video banner) referenced by components.

## Design Tokens & Theme

All colors, fonts, and spacing are centralized in CSS custom properties defined at `:root` in `src/App.css`:

- Colors: `--secondary: #020A1D` (page background), `--tertiary: #1683FF` (accent blue), `--light: #F1FAEE` (primary text), `--gray: #B5C1D8` (secondary text).
- Fonts: `--text: 'Montserrat', sans-serif` (body), `--logo: 'Poppins', sans-serif` (branding). Both are loaded from Google Fonts via `@import url(...)` at the top of `App.css`.
- The palette is dark-themed: backgrounds use `#020A1D` / `#03102A` / `#010817`, borders use `#1760B8`, accent highlights use `#1683FF` / `#00B7FF`, and body text uses `#F1FAEE` / `#C4CCE0`.

## Architecture & Conventions

- **Single stylesheet**: All styling lives in one file (`src/App.css`). There are no per-component CSS modules, SCSS files, or styled-components.
- **BEM-like class naming**: Classes follow a descriptive, block-element pattern using kebab-case and camelCase (e.g., `.navbar`, `.linksMenu`, `.card`, `.cardTime`, `.caixaContato`, `.rodape`, `.colunaRodape`).
- **Section-based layout**: Each major landing-page section is an `<section>` with a unique id (`#inicio`, `#solucao`, `#publico-alvo`, `.galeria`, `#equipe`, `#contato`, `#footer`) and shares a common structure: a centered header block (`.topoSecaoN`) followed by a grid container.
- **Grid-driven layouts**: Sections use CSS Grid extensively — `.grid` (5-column), `.gridPublico` (3-column), `.gridFotos` (asymmetric 2fr+1fr+1fr), `.gridTime` (5-column), `.rodape` (4-column footer), `.caixaContato` (2-column contact form).
- **Iconography**: Icons come from `react-icons` (rendered as `<i>` elements) rather than inline SVGs.
- **Typography scale**: Headings use `font-weight: 800`, labels use `600–700`, body uses `500–600`; hero titles use `clamp()` for fluid sizing (`clamp(54px, 8vw, 104px)`).
- **Hover interactions**: Cards, buttons, links, and social icons consistently apply `transition: 0.3s ease` with subtle transforms (`translateY(-5px)`) and glow box-shadows using the accent color.

## Responsive Strategy

Responsive behavior is implemented with three `@media (max-width: ...)` breakpoints in `src/App.css`:

| Breakpoint | Target | Key changes |
|---|---|---|
| `1024px` | Tablet | Grids collapse to 3 columns; `.areaPrincipal` stacks vertically; gallery becomes 2-column; footer becomes 2-column. |
| `768px` | Mobile | Navbar switches to hamburger menu (`.btnMenu` shown, `.linksMenu` hidden and toggled via `.menuAberto`); grids collapse to 2 columns; contact form stacks; footer collapses to 1 column. |
| `480px` | Small mobile | Hero actions stack vertically; all grids become single-column; font sizes reduce; section padding tightens to `60px 20px 70px`. |

No Tailwind-specific responsive utilities are used; all media queries and breakpoint logic live in this single CSS file.

## Conventions Observed

- Global reset: `* { box-sizing: border-box; }` plus `body { margin: 0; padding: 0; }`.
- Section backgrounds are uniformly `#020A1D` with consistent vertical padding of `80px 40px 100px`.
- Card components share a base style: `background-color: #03102A`, `border: 1px solid #1760B8`, `border-radius: 14px`, and a hover state that shifts to `#061A3A` with `border-color: #00B7FF` and `translateY(-5px)`.
- Buttons come in two variants: filled `.botao` (blue `#1683FF`) and outlined `.botaoPilha.contorno` (transparent with `#2997FF` border).
- Form inputs use `background-color: #020A1D`, `border: 1px solid #1760B8`, `border-radius: 8px`, and focus state highlights the border with `#00B7FF` plus a glow shadow.
- Footer uses a 4-column grid (`1.5fr 1fr 1fr 1fr`) with a separate `.rodapeFinal` bar for copyright.

## Rules Enforced by Tooling

- Tailwind CSS v4 is enabled exclusively through the `@tailwindcss/vite` plugin registered in `vite.config.js`; there is no `tailwind.config.js` file, so Tailwind's default configuration is used without customization.
- No ESLint rules target CSS/SCSS files (the project uses `eslint-plugin-react-hooks` and `eslint-plugin-react-refresh` only), so CSS formatting/style conventions are not enforced by linting.
- The repository contains no PostCSS config, Sass loader, or CSS-in-JS library beyond the plain CSS approach described above.