# Parte 02 — Redesign do Header

## Objetivo

Header minimalista, fino e limpo, inspirado na navbar da Apple: barra
translúcida de 48px, logotipo em ícone e apenas 3 seções de navegação.

## Arquivos modificados

| Arquivo | Mudança |
|---------|---------|
| `src/App.css` | Tokens `@theme` adicionados; todo o CSS legado da navbar removido (`.navbar`, `.logo`, `.icone`, `.nomeLogo`, `.btnMenu`, `.linksMenu` + versões das media queries 768px e 480px); padding do hero ajustado (130→100 desktop, 110→88 ≤768px) |
| `src/components/Header.jsx` | Reescrito em Tailwind: barra `h-16` (64px), `bg-night/80 backdrop-blur-md`, logo substituído pela imagem oficial sem fundo `public/imagens/opticode_sem_fundo.png` (`h-10`), navegação reduzida para Home / Suporte / Sobre, menu mobile funcional via `useState` |
| `src/components/HeaderLink.jsx` | Reescrito em Tailwind (`text-xs text-ice/70 hover:text-ice`), nova prop `onClick` para fechar o menu mobile |

## Decisões de design

- **Altura**: 90px → **64px** (`h-16`), proporção fina como a referência.
  (Evolução durante o ajuste: 48 → 64 → 80 → 64px.)
- **Fundo**: `bg-night/80 backdrop-blur-md` — translúcido, sem cor vibrante.
- **Logo**: texto "OPTICODE" + ícone boxicons substituídos pela imagem oficial
  `Logotipo OPTICODE em Branco.png` (`h-10`), linkando para `#inicio`.
  Histórico de assets: `icon_opticode.png` (fundo branco) →
  `opticode_sem_fundo.png` → **`Logotipo OPTICODE em Branco.png`** (atual).
  Aplicado filtro `brightness-0 invert opacity-90` para manter silhueta branca
  nítida (aspecto de ícone, legível sobre o fundo escuro).
- **Links**: 14px (`text-sm`), `text-ice/70`, hover `text-ice`, `gap-10`,
  centralizados no meio da tela como na referência.
- **Layout final**: grid de tela cheia (`w-full`, sem container) com 3 colunas no
  desktop — **pesquisa expansível à esquerda** (col 1), **navegação centralizada
  no meio da tela** (col 2) e **logotipo à direita** (col 3).
  No mobile: pesquisa à esquerda; hamburger + logotipo à direita.
  Nenhuma seção extra de navegação foi adicionada (mantidos os 3 links).
- **Pesquisa expansível**: ícone de lupa (`FaMagnifyingGlass`) que, ao clicar,
  expande um campo de digitação (`w-0` → `w-40`/`md:w-56`, `transition-all`),
  com foco automático via `useRef` + `useEffect`. Estilo: pílula
  `border-navy/50 bg-night/60`, foco `border-azure/60`.
- **Navegação reduzida para 3 itens** (pedido do usuário):
  - `Home` → `#inicio`
  - `Suporte` → `#contato`
  - `Sobre` → `#equipe`
  - Observação: os destinos foram mapeados para as seções existentes mais
    próximas; ajustar quando houver páginas/seções próprias de Suporte e Sobre.
- **Links**: 12px (`text-xs`), `text-ice/70`, hover `text-ice`, centralizados
  no desktop como na referência.
- **Padrão Tailwind**: header é o primeiro componente 100% em utilitários
  Tailwind com os tokens da [paleta oficial](./paleta-de-cores.md). As próximas
  partes devem seguir o mesmo padrão.

## Bugs antigos corrigidos

- Menu mobile era **morto**: classes `btnMenu`/`menuAberto` existiam sem nenhum
  handler JS → implementado toggle com `useState`.
- Ícones Boxicons (`bx bxs-bolt`, `bx bx-menu`) nunca renderizaram — a
  biblioteca não está instalada → substituídos por `react-icons/fa6`
  (FaBars/FaXmark).
- Link "inicio" duplicado e `href="equipe"` quebrado (sem `#`) → removidos com
  a nova navegação de 3 itens.
- `aria-expanded` agora é dinâmico e o botão tem `aria-label` alternante.

## Registro visual

- Barra fixa 64px, fundo night 80% com blur.
- Pesquisa (lupa expansível) à esquerda; navegação centralizada no meio da tela;
  logotipo oficial à direita; hamburger à direita (mobile).
- Dropdown mobile: `bg-night/95`, borda superior `border-navy/50`, fecha ao
  clicar em qualquer link.
