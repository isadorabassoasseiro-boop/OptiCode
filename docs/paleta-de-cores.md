# Paleta de Cores Oficial — OptiCode

Paleta definida pelo usuário na Parte 02. **Todas as novas seções do redesign
devem seguir exclusivamente estes tokens**, sempre via utilitários Tailwind
(nunca hex hardcoded em JSX ou CSS novo).

## Tokens Tailwind v4 (`@theme` em `src/App.css`)

| Token | Hex | Utilitário | Uso |
|-------|-----|------------|-----|
| `night` | `#070A10` | `bg-night`, `text-night` | Fundo base do site, barras translúcidas (`bg-night/80`) |
| `deep` | `#0E1B2A` | `bg-deep` | Superfícies elevadas: cards, painéis, seções alternadas |
| `navy` | `#123B6B` | `border-navy/50` | Bordas e divisores sutis (usar entre 40% e 60% de opacidade) |
| `azure` | `#2A7FFF` | `bg-azure`, `text-azure` | **Única cor de ação**: botões primários, links ativos, destaques |
| `ice` | `#A6F0FF` | `text-ice/70` | Texto e ícones; usar opacidades (70–90%) em vez de branco puro |

Fonte de marca: `font-brand` → Poppins (registrada como `--font-brand`).

## Regras de uso

1. Sempre usar utilitários Tailwind (`bg-night/80`, `text-ice/70`) — nunca
   `style={{}}` ou classes CSS novas com hex.
2. Texto: hierarquia via opacidades de `ice` — títulos `text-ice`, corpo
   `text-ice/70`, apoio `text-ice/50`.
3. Barras fixas (header/footer): `bg-night/80 backdrop-blur-md`.
4. Bordas: `border-navy/40` a `border-navy/60`.
5. `azure` é a única cor de ação (CTA, hover ativo). Não introduzir outras
   cores vibrantes.
6. Superfícies de conteúdo: `bg-deep` sobre fundo `bg-night`.
7. Tipografia de marca: `font-brand` (Poppins) em logos e títulos.

## Cores legadas (migrar nas próximas partes)

Ainda presentes nas seções não redesenhadas (`Solucao`, `PublicoAlvo`,
`Galeria`, `Equipe`, `Contato`, `Footer`) e no hero:

- `--secondary #020A1D` → substituir por `night`
- `--tertiary #1683FF`, `#008CFF`, `#0071E3`, `#2997FF` → substituir por `azure`
- `--light #F1FAEE` → substituir por `ice`
- `#1760B8`, `#0F1D3F` (bordas antigas) → substituir por `navy`

A unificação completa está planejada para a parte final do redesign.
