# 03 — Divisão da Landing Page em Múltiplas Páginas

## Objetivo

Transformar a landing page única em um site com três páginas, mantendo apenas
o Header e o Footer compartilhados entre todas.

## Estrutura de páginas

| Rota      | Página  | Seções                          |
| --------- | ------- | ------------------------------- |
| `/`       | Home    | Hero, Galeria                   |
| `/suporte`| Suporte | Nossa Equipe, Contato           |
| `/sobre`  | Sobre   | Público-Alvo, Solução           |

## Mudanças

- Instalada a dependência `react-router-dom` (React Router v7).
- Criada a pasta `src/pages` com os componentes de página:
  - `Home.jsx` — renderiza `Hero` e `Galeria`.
  - `Suporte.jsx` — renderiza `Equipe` e `Contato`.
  - `Sobre.jsx` — renderiza `PublicoAlvo` e `Solucao`.
- `src/App.jsx` — agora declara as rotas via `<Routes>` e `<Route>`,
  mantendo `<Header />` e `<Footer />` fixos em volta das páginas.
  Adicionado o componente `ScrollToTop` para que toda troca de rota
  comece no topo da página.
- `src/main.jsx` — aplicação envolvida em `<BrowserRouter>`.
- `src/components/Header.jsx` — logo e links de navegação (`Home`,
  `Suporte`, `Sobre`) convertidos para `<Link to="...">` do React Router.
- `src/components/HeaderLink.jsx` — prop `href` renomeada para `to`;
  renderiza `<Link>` em vez de `<a>`.
- `src/components/Footer.jsx` — âncoras (`#inicio`, `#solucao`, etc.)
  substituídas por rotas:
  - Início, Galeria, Smartphone JOVI → `/`
  - Solução, Público-Alvo, Nossa Solução, Estudantes → `/sobre`
  - Nossa Equipe → `/suporte`
- `src/components/FooterLink.jsx` — prop `href` renomeada para `to`;
  renderiza `<Link>` em vez de `<a>`.

## Observações

- As seções (`Hero`, `Galeria`, `Equipe`, `Contato`, `PublicoAlvo`,
  `Solucao`) não foram alteradas — apenas reagrupadas nas páginas.
- O `id` de cada seção foi mantido (`#inicio`, `#galerias`, `#equipe`,
  `#contato`, `#publico-alvo`, `#solucao`).
- Hospedagens estáticas sem suporte a fallback de SPA podem precisar de
  configuração extra para as rotas (ou trocar `BrowserRouter` por
  `HashRouter`).
