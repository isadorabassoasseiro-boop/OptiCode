# OptiCode — Landing Page do Smartphone JOVI V70

Landing page institucional do projeto **OptiCode** (challenge FIAP), criada para
apresentar o smartphone **JOVI V70**: vitrine do produto, público-alvo,
diferenciais da solução, equipe responsável e canal de contato.

O site é uma SPA (Single Page Application) em React com três páginas
(**Home**, **Sobre** e **Suporte**), visual escuro minimalista e animações
conduzidas pela rolagem.

---

## 🚀 Como rodar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) **20.19 ou superior** (recomendado: 22+)
- [npm](https://www.npmjs.com/) (vem junto com o Node.js)

### Passo a passo

1. **Clone o repositório** e entre na pasta do projeto:

   ```bash
   git clone <url-do-repositorio>
   cd OptiCode
   ```

2. **Instale as dependências**:

   ```bash
   npm install
   ```

3. **(Opcional) Configure as variáveis de ambiente** — copie o arquivo de
   exemplo e preencha a URL do seu formulário no Formspree:

   ```bash
   cp .env.exemple .env
   ```

   > A variável `VITE_FORMSPREE_URL` reserva o endpoint de envio do formulário
   > da seção de contato. Sem ela, o projeto roda normalmente.

4. **Inicie o servidor de desenvolvimento**:

   ```bash
   npm run dev
   ```

5. Abra no navegador o endereço exibido no terminal
   (por padrão: `http://localhost:5173`).

### Scripts disponíveis

| Comando           | O que faz                                              |
| ----------------- | ------------------------------------------------------ |
| `npm run dev`     | Sobe o servidor de desenvolvimento com hot reload (HMR) |
| `npm run build`   | Gera a versão de produção na pasta `dist/`              |
| `npm run preview` | Serve localmente o build de produção para conferência   |
| `npm run lint`    | Roda o ESLint em todo o projeto                         |

---

## 🌐 Deploy (Vercel)

> **Link do site:** _aguardando deploy_
>
> <!-- 🔗 Cole aqui a URL definitiva assim que o projeto subir para a Vercel,
>      ex.: https://opticode.vercel.app -->
>
> `____________________________________________`

---

## 🧱 Tecnologias utilizadas

| Tecnologia                          | Uso no projeto                                   |
| ----------------------------------- | ------------------------------------------------ |
| [React 19](https://react.dev/)      | Biblioteca de interface (componentes funcionais) |
| [Vite 8](https://vite.dev/)         | Bundler e servidor de desenvolvimento            |
| [Tailwind CSS v4](https://tailwindcss.com/) | Estilização utilitária + tokens de tema (`@theme`) |
| [React Router v7](https://reactrouter.com/) | Rotas client-side entre as três páginas  |
| [react-icons](https://react-icons.github.io/react-icons/) | Ícones (Fa6, Md, Io, Gi, Ai)     |
| ESLint                              | Lint e padronização do código                    |

---

## 📁 Estrutura de pastas

```
OptiCode/
├── public/
│   └── imagens/            # Fotos, logos e vídeos exibidos no site
├── docs/                   # Documentação do redesign (uma parte por arquivo)
├── src/
│   ├── components/         # Seções e componentes reutilizáveis
│   │   ├── Header.jsx      # Navegação fixa translúcida (logo + links + busca)
│   │   ├── HeaderLink.jsx  # Item de link do menu
│   │   ├── Footer.jsx      # Rodapé minimalista (logo + copyright)
│   │   ├── Hero.jsx        # Abertura com vídeo e animação de rolagem
│   │   ├── HeroBenefico.jsx# Item de benefício do Hero
│   │   ├── Galeria.jsx     # Lista arrastável de fotos do JOVI V70
│   │   ├── GaleriaFotos.jsx# Bloco de foto com zoom no hover
│   │   ├── GaleriaModal.jsx# Modal de imagem ampliada (portal + Esc)
│   │   ├── PublicoAlvo.jsx # Seção "pensado em estudantes" (scroll animado)
│   │   ├── PublicoAlvoCard.jsx  # Card "roleta" (ícone ⇄ informações)
│   │   ├── BannerEstudantes.jsx # Vídeo de fundo da seção Público-Alvo
│   │   ├── Solucao.jsx     # Grid de diferenciais da solução
│   │   ├── SolucaoCard.jsx # Card com imagem e painel de texto no hover
│   │   ├── Equipe.jsx      # Carrossel infinito da equipe
│   │   ├── EquipeCard.jsx  # Cartão de integrante
│   │   ├── Contato.jsx     # Seção de contato (infos + formulário)
│   │   ├── ContatoItem.jsx # Linha de informação (ícone + título + texto)
│   │   └── ContatoForm.jsx # Campo reutilizável (input ou textarea)
│   ├── pages/
│   │   ├── Home.jsx        # Rota "/"      → Hero + Galeria
│   │   ├── Sobre.jsx       # Rota "/sobre" → PublicoAlvo + Solucao
│   │   └── Suporte.jsx     # Rota "/suporte" → Equipe + Contato
│   ├── App.css             # Tokens @theme do Tailwind + CSS global
│   ├── App.jsx             # Rotas, layout compartilhado e scroll reset
│   ├── index.css           # Import do Tailwind
│   └── main.jsx            # Bootstrap do React + BrowserRouter
├── .env.exemple            # Modelo de variáveis de ambiente (Formspree)
├── index.html              # HTML raiz da SPA
├── vite.config.js          # Plugins React + Tailwind do Vite
└── package.json            # Dependências e scripts
```

---

## 🧭 Como o projeto funciona

### Rotas e layout compartilhado

- O `main.jsx` monta o React dentro do `<BrowserRouter>`; o `App.jsx`
  declara as rotas com `<Routes>`/`<Route>`:

  | Rota      | Página  | Seções renderizadas            |
  | --------- | ------- | ------------------------------ |
  | `/`       | `Home`  | `Hero` + `Galeria`             |
  | `/sobre`  | `Sobre` | `PublicoAlvo` + `Solucao`      |
  | `/suporte`| `Suporte` | `Equipe` + `Contato`         |

- `Header` e `Footer` ficam **fora** das rotas, no `App.jsx`, portanto aparecem
  em todas as páginas. O componente `ScrollToTop` observa a rota ativa e rola a
  janela para o topo a cada navegação.

### Header e Footer

- **Header**: barra fixa no topo (`fixed`), escura e translúcida com
  `backdrop-blur`. Três zonas: logo oficial à esquerda, navegação centralizada
  (Home, Suporte, Sobre) e, à direita, campo de busca expansível (abre/fecha
  com foco automático) + botão hambúrguer que vira menu suspenso no mobile.
- **Footer**: faixa preta minimalista com o logotipo centralizado e o aviso de
  copyright.

### Home — Hero com animação de rolagem

- A seção `Hero` tem `200vh` de altura com um bloco `sticky` de `100vh`:
  o fundo (vídeo `video_banner.mp4` em loop, sem som, com véu em gradiente)
  permanece parado enquanto o usuário rola.
- Um listener de `scroll` calcula o progresso da rolagem e, com easing cúbico:
  1. o título ("Smartphone JOVI") **sobe e desaparece**;
  2. os três benefícios (`HeroBeneficio`: qualidade, tecnologia, suporte)
     **sobem de baixo até o centro** da tela.
- Abaixo, a `Galeria` apresenta o JOVI V70 sobre um banner com véu escuro:
  - lista horizontal **arrastável com o mouse** (Pointer Events +
    `setPointerCapture`); no toque vale a rolagem nativa com `snap`;
  - um arrasto maior que 5px é tratado como drag e **não** abre o modal,
    preservando o clique simples;
  - as bordas da lista são disfarçadas com `mask-image` em degradê;
  - clicar em uma foto abre o `GaleriaModal` (renderizado via
    `createPortal` no `body`), que trava o scroll da página e fecha com
    `Esc` ou clique no fundo;
  - cada bloco (`GaleriaFotos`) aplica zoom suave na imagem no hover.

### Sobre — Público-alvo e Solução

- `PublicoAlvo` reutiliza o mesmo padrão de animação do Hero (seção de
  `200vh` + bloco `sticky`): o título "Pensado em estudantes" sobe e some,
  enquanto o painel com três cards sobe de baixo. O fundo é o vídeo
  `video_Estudantes.mp4` (`BannerEstudantes`).
- Os `PublicoAlvoCard` funcionam como uma "roleta" de duas paradas:
  no desktop o **hover** gira o card do ícone para o texto; no mobile o
  **clique** alterna o estado (`aria-expanded`).
- `Solucao` monta um grid de 3 colunas com o card central ocupando duas
  linhas. Cada `SolucaoCard` exibe a imagem com o nome do diferencial e, no
  hover, um painel translúcido com a descrição sobe de baixo cobrindo a foto.

### Suporte — Equipe e Contato

- `Equipe` é um **carrossel infinito feito à mão** (sem biblioteca):
  - a lista de membros é triplicada; ao terminar um deslize perto das
    extremidades, o componente volta silenciosamente (sem transição) para a
    cópia do meio, que mostra exatamente os mesmos cards — criando o loop;
  - navegação por **arraste** (touch ou mouse) com encaixe no card mais
    próximo, e por **setas** laterais;
  - a quantidade de cards visíveis é responsiva (3,3 no desktop, 2,2 em
    tablets, 1,15 no mobile) — a fração deixa parte dos vizinhos aparecendo
    nas laterais ("edge peek");
  - `transitioncancel` e o início de um novo arraste destravam o carrossel
    caso uma animação seja interrompida no meio.
- `Contato` fecha a página com fundo escuro e caixa em duas colunas no
  desktop (informações à esquerda, formulário à direita) que vira coluna
  única no mobile:
  - `ContatoItem` exibe e-mail, localização e horário de atendimento com
    ícone em caixa destacada;
  - `ContatoForm` é o campo reutilizável (label + input/textarea) usado para
    Nome, E-mail, Assunto e Mensagem, com botão de envio estilizado.

### Estilização e paleta de cores

- O Tailwind CSS v4 entra pelo plugin `@tailwindcss/vite` (ver
  `vite.config.js`); não há `tailwind.config.js` — a configuração é CSS-first.
- Os tokens oficiais do tema ficam no bloco `@theme` do `App.css`:

  | Token    | Cor       | Uso típico                        |
  | -------- | --------- | --------------------------------- |
  | `night`  | `#070A10` | Fundos de seção escuros           |
  | `deep`   | `#0E1B2A` | Cards e superfícies elevadas      |
  | `navy`   | `#123B6B` | Bordas e detalhes                 |
  | `azure`  | `#2A7FFF` | Destaques e ações                 |
  | `ice`    | `#A6F0FF` | Títulos e textos sobre fundo escuro |

- A fonte do projeto é **Merriweather Sans** (Google Fonts, importada no
  `App.css` e registrada como `--font-brand`).
- O mesmo `App.css` concentra o CSS global legado da seção de contato
  (`.caixaContato`, `.formulario`, `.botao` etc.) e os keyframes das
  animações do modal (`fundo-modal`, `caixa-modal`).

### Variáveis de ambiente

- `.env.exemple` documenta a variável `VITE_FORMSPREE_URL` (URL HTTPS do
  formulário no Formspree). Copie para `.env` (arquivo ignorado pelo Git)
  quando for ligar o envio do formulário de contato.

---

## 📄 Documentação adicional

A pasta [`docs/`](./docs/README.md) registra o redesign do site parte a parte
(hero, header, páginas/rotas, footer, paleta de cores), com capturas e as
decisões visuais de cada etapa. Consulte-a antes de alterar o visual de
alguma seção para manter a consistência.

---

## 👥 Integrantes do grupo

Nomes e RMs completos estão em [`INTEGRANTES.txt`](./INTEGRANTES.txt):

- Delvane S. Sampaio Oliveira — RM 571825
- Gabriel Brito Braga — RM 570467
- Isadora Basso Asseiro — RM 569323
- Murilo Camilo da Silva — RM 571631
- Murilo Castro Chialastri — RM 569328
