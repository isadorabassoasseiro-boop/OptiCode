# Parte 01 — Redesign da Seção Central (Hero)

**Data:** 06/10/2026
**Escopo:** apenas a seção central do site (`<section id="inicio">`, componente `Hero`).
**Referência visual:** hero de produto da Apple — fundo preto, título gigante
centralizado, subtítulo curto de uma linha, dois CTAs em pílula (um sólido,
um contornado) e o visual do produto ocupando o fundo.
**Diretriz:** minimalismo acima de tudo.

---

## 1. Resumo do que mudou

A seção central deixou de ser um layout de duas colunas (texto à esquerda +
imagem estática à direita + caixas de benefícios) e virou um hero de tela
cheia, centralizado, com o vídeo `video_banner.mp4` funcionando como plano
de fundo por trás do texto.

## 2. Arquivos modificados

### `src/components/Hero.jsx`
- Removido o grid de duas colunas (`.container`), a coluna de texto
  (`.textoHero`), o CTA retangular antigo ("CONHEÇA NOSSOS SMARTPHONES") e o
  bloco de imagem estática (`.imgHero` com o PNG do ChatGPT).
- Adicionado `<video className="videoHero">` com `src="./imagens/video_banner.mp4"`
  e atributos `autoPlay muted loop playsInline` (reproduz sozinho, sem som,
  em loop — comportamento de vídeo de fundo).
- Adicionado `<div className="sombraHero">` (overlay em gradiente sobre o
  vídeo, para legibilidade do texto e transição suave para a próxima seção).
- Conteúdo agora é um único bloco centralizado (`.conteudoHero`):
  - `h1.tituloHero` → "Smartphone JOVI"
  - `p.subtituloHero` → "Tecnologia que conecta."
  - `.acoesHero` com dois CTAs em pílula:
    - "Saiba mais" (`.botaoPilha`, sólido) → `#solucao`
    - "Comprar" (`.botaoPilha.contorno`) → `#contato`
  - Lista de benefícios mantida, porém reduzida a uma linha discreta
    (`.beneficiosHero`) no rodapé do hero.
- Removido o import do ícone `WiDirectionRight` (não é mais usado).

### `src/components/HeroBenefico.jsx`
- Props simplificadas: antes `Icone`, `linha1`, `linha2`; agora `Icone`, `texto`.
- Markup simplificado de caixa com ícone grande azul (`text-[#1683FF] text-[38px]`)
  para item minimalista de uma linha: `li.itemBeneficio` com ícone pequeno +
  `<span>` de texto (estilizados via CSS, sem classes utilitárias de cor/tamanho).

### `src/App.css`
- **Bloco do hero antigo substituído** (regras `#inicio`, `#inicio .container`,
  `.conteudo`, `.textoHero`, `.beneficios`, `.caixaBeneficio`, `.imgHero`)
  pelas novas regras:
  - `#inicio`: `position: relative`, `min-height: 100vh`, flex centralizado,
    fundo `#000000`, `overflow: hidden`.
  - `.videoHero`: `position: absolute; inset: 0; object-fit: cover; opacity: 0.75`
    (vídeo cobrindo toda a seção, como plano de fundo).
  - `.sombraHero`: gradiente vertical
    `#000 → rgba(0,0,0,.55) → rgba(0,0,0,.15) → rgba(2,10,29,.65) → #020A1D`
    (preto no topo para o texto, vídeo visível no meio, fusão com o fundo
    `#020A1D` das próximas seções na base).
  - `.conteudoHero`: coluna centralizada, `z-index: 1`, `max-width: 900px`.
  - `.tituloHero`: `clamp(54px, 8vw, 104px)`, peso 700, `letter-spacing: -0.03em`,
    cor `#F5F5F7`.
  - `.subtituloHero`: `clamp(19px, 2.4vw, 28px)`, peso 500, cor `#F5F5F7`.
  - `.botaoPilha` / `.botaoPilha.contorno`: CTAs em pílula (`border-radius: 980px`);
    sólido `#0071E3` (hover `#0077ED`); contornado com borda/texto `#2997FF`
    (hover com fundo `rgba(41,151,255,0.12)`).
  - `.beneficiosHero` / `.itemBeneficio` (+ `.itemBeneficio svg`): linha discreta
    em cinza `#86868B`, caixa alta, 12px, ícones de 16px.
- **Media queries atualizadas** para remover referências às classes extintas
  (`.conteudo`, `.textoHero`, `.imgHero`, `.beneficios`) e ajustar o novo hero:
  - `≤1024px`: `.beneficiosHero` com gap/margem reduzidos.
  - `≤768px`: `#inicio` com padding `110px 20px 70px` (navbar mobile menor).
  - `≤480px`: `.acoesHero` em coluna com `.botaoPilha` largura total;
    `.beneficiosHero` em coluna centralizada.
- **Intocados de propósito:** `.botao` (ainda usado pelo formulário de contato,
  inclusive a regra de largura total no mobile), navbar, demais seções e footer.

## 3. Decisões de design (para consistência nas próximas partes)

| Elemento | Valor |
|----------|-------|
| Fundo do hero | `#000000` puro |
| Texto principal | `#F5F5F7` |
| Texto discreto/apoio | `#86868B` |
| Azul CTA sólido | `#0071E3` (hover `#0077ED`) |
| Azul CTA contornado | `#2997FF` |
| Raio dos CTAs | `980px` (pílula) |
| Fonte | Montserrat (`var(--text)`) já existente no projeto |
| Transição de seção | gradiente do overlay termina em `#020A1D` |

Observação: o azul "Apple" (`#0071E3`/`#2997FF`) foi introduzido só no hero.
O azul antigo da marca (`#1683FF`) permanece nas demais seções até que elas
sejam redesignadas nas próximas partes.

## 4. Comportamento do vídeo de fundo

- `autoPlay` + `muted` são obrigatórios juntos para autoplay funcionar nos
  navegadores modernos; `playsInline` garante autoplay no iOS.
- `loop` mantém o vídeo rodando continuamente como fundo.
- `object-fit: cover` faz o vídeo preencher a seção sem distorcer.
- A legibilidade do texto não depende só do vídeo: o overlay `.sombraHero`
  garante contraste mesmo se o vídeo falhar ao carregar (o fundo preto da
  seção aparece no lugar).

## 5. Próximas partes (sugestão de ordem)

1. `02` — Header/navbar no mesmo linguaggio minimalista (fundo translúcido preto).
2. `03` — Seção Solução (`#solucao`).
3. `04` — Público-alvo, Galeria, Equipe, Contato e Footer.
4. `05` — Unificação da paleta (aposentar `#1683FF`/`#020A1D` onde fizer sentido).
