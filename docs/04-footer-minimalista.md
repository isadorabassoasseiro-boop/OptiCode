# 04 — Footer Minimalista

## Objetivo

Redesenhar o footer para um estilo minimalista: fundo preto, sem borda azul,
logo oficial da OptiCode no lugar do texto "OPTICODE" e apenas os elementos
essenciais.

## Mudanças

- `src/components/Footer.jsx` — reescrito inteiramente em Tailwind:
  - `<footer className="bg-black">` (fundo preto, sem borda).
  - Logo oficial `Logotipo OPTICODE em Branco.png` (h-8/h-9), sem filtro,
    pois o fundo é escuro; o logo é um link para a Home (`/`).
  - Linha de copyright `© 2026 OPTICODE. Todos os direitos reservados.`
    em `text-white/60`.
  - Removidos: colunas de navegação, contato, descrição, "Challenge JOVI",
    ícones do Boxicons e o texto "OPTICODE" com o raio azul.
- `src/components/FooterLink.jsx` e `src/components/FooterColuna.jsx` —
  deletados (ficaram sem uso após a simplificação).
- `src/App.css` — removido todo o bloco CSS do footer antigo (`#footer`,
  `.rodape`, `.logoRodape`, `.descricaoRodape`, `.redesSociais`,
  `.colunaRodape`, `.contatoRodape`, `.rodapeFinal`) e as regras de media
  query relacionadas.

## Observações

- O footer agora segue a convenção de estilização por utilitários Tailwind,
  sem classes CSS customizadas.
