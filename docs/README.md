# Documentação do Redesign — OptiCode

Este projeto está passando por um redesign completo, executado **por partes**.
Cada parte recebe um arquivo numerado nesta pasta, registrando o que foi
modificado, por quê e quais decisões visuais foram tomadas.

## Diretriz geral do redesign

- **Minimalismo acima de tudo** — referência visual: página de produto da Apple
  (fundo preto, tipografia grande centralizada, poucos elementos, CTAs em pílula).
- Fundo preto/vídeo em vez de blocos coloridos cheios de bordas.
- Tipografia limpa, hierarquia forte (título gigante + subtítulo curto).
- Botões em formato pílula (raio 980px), um sólido e um contornado.
- Cinza de apoio `#86868B` e branco suave `#F5F5F7` para texto.

## Índice das partes

| # | Arquivo | Escopo | Status |
|---|---------|--------|--------|
| 01 | [01-redesign-hero.md](./01-redesign-hero.md) | Seção central (Hero `#inicio`) + vídeo de fundo | Concluído |
| 02 | [02-redesign-header.md](./02-redesign-header.md) | Header minimalista (48px, translúcido, ícone oficial, 3 links) | Concluído |

## Referência transversal

- [paleta-de-cores.md](./paleta-de-cores.md) — tokens oficiais Tailwind
  (`night`, `deep`, `navy`, `azure`, `ice`) e regras de uso para **todas** as
  partes do redesign.

## Como usar esta pasta

- Antes de mexer em uma nova seção, leia o arquivo da parte correspondente
  para manter consistência visual com o que já foi feito.
- Ao concluir uma nova parte, crie o próximo arquivo numerado
  (`02-...md`, `03-...md`) e atualize o índice acima.
