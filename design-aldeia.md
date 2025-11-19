# Design do Site Aldeia da Luz

Design do site Aldeia da Luz terreiro de Umbanda:

## Paleta de Cores e Sistema de Design

```css
/* Cores Base */
--primary: #254822;           /* Dark Spruce - Verde profundo da floresta */
--primary-foreground: #CBCBC8; /* Silver - Texto sobre primária */

--secondary: #29193B;          /* Midnight Violet - Roxo místico */
--secondary-foreground: #CBCBC8; /* Silver - Texto sobre secundária */

--accent: #254822;             /* Dark Spruce - Destaques e elementos */
--accent-foreground: #CBCBC8;  /* Silver - Texto sobre accent */

--background: #CBCBC8;         /* Silver - Fundo principal (LIGHT MODE) */
--foreground: #010206;         /* Black - Texto principal */

--muted: #50504E;              /* Charcoal - Elementos secundários */
--muted-foreground: #CBCBC8;   /* Silver - Texto sobre muted */

--card: #FFFFFF;               /* White - Cards e containers (para contraste no fundo claro) */
--card-foreground: #010206;    /* Black - Texto em cards */

--border: #50504E;             /* Bordas */
--ring: #254822;               /* Focus rings */
```

## Estrutura das Páginas

### 1. PÁGINA INICIAL (HOME)

**Elementos principais:**
- Hero section de altura completa com imagem/vídeo de fundo (natureza, instrumentos, espaço do terreiro)
- Overlay sutil usando `--secondary` com opacidade 70-80% (mais opaco para legibilidade no light mode)
- Título principal em `--primary-foreground` (Silver) com tipografia expressiva e sombra sutil
- Frase de propósito centralizada em `--primary-foreground`
- 4 botões CTA principais com `--primary` background e `--primary-foreground` texto
- Scroll suave para seções seguintes
- Animações sutis de entrada (fade-in)

**Estética:**
- Místico, acolhedor, natural
- Elementos orgânicos (folhas, formas fluidas)
- Espaçamento generoso
- Tipografia hierárquica clara

---

### 2. QUEM SOMOS

**Layout:**
- Seção dividida: 50% texto + 50% galeria de imagens
- Background `--background`
- Cards com `--card` background para missão/valores
- Timeline visual da história usando `--primary` como linha guia
- Fotos em grid com hover effects sutis

**Elementos de destaque:**
- Ícones customizados para valores (espiritualidade, ecologia, ancestralidade) em `--primary`
- Citações em destaque com borda lateral `--primary`
- Seção "Nossa Comunidade" com fotos em mosaico

---

### 3. MEDICINAS ANCESTRAIS

**Divisão em abas ou scroll sections:**

**Seção Umbanda:**
- Background gradient sutil de `--background` para branco (#FFFFFF)
- Cards explicativos sobre orixás/entidades com ilustrações (cards em `--card` com sombra suave)
- Layout tipo accordion para linhas de trabalho
- Uso de símbolos e iconografia respeitosa em `--primary`

**Seção Medicinas da Floresta:**
- Background com textura orgânica usando `--muted`
- Cards informativos para cada medicina (Rapé, Ayahuasca, Sananga)
- Banner de aviso ético destacado com `--primary` background
- Ícones naturais (plantas, elementos)

**Elementos comuns:**
- Divisores decorativos usando `--border`
- Texto em colunas para legibilidade
- Destaque para avisos de responsabilidade

---

### 4. GRUPO MUSICAL

**Hero da seção:**
- Banner com foto do grupo, overlay `--secondary`
- Nome do grupo em destaque com `--accent`

**Conteúdo:**
- Grid de integrantes com fotos circulares e nomes
- Player de música integrado (Spotify embed) com styling customizado
- Galeria de vídeos em grid 2x2 ou 3x3
- Botões de redes sociais com `--primary` hover
- Timeline de apresentações e eventos

---

### 4.1 CULTURA E PROJETOS

**Layout em cards:**
- Grid responsivo de projetos (ÌYALÒDÊ, LUZ DA ALDEIA, RAÌZES EM MOVIMENTO)
- Cada card com:
  - Imagem de capa
  - Título do projeto em `--primary`
  - Descrição breve em `--foreground`
  - Botão "Saiba mais" com `--primary` background
  - Links para redes sociais específicas

**Design:**
- Cards em `--card` (branco) com hover effect (elevação, borda `--primary`)
- Filtros/tags para categorizar projetos
- Seção de depoimentos/resultados com background levemente mais escuro (#B5B5B2)

---

### 5. CONTATO E REDES

**Layout centralizado:**
- Formulário estilizado com campos em `--card` (branco com borda `--border`)
- Labels em `--foreground`
- Inputs com borda `--border` e focus ring `--ring`
- Botão submit com `--primary` background
- Mapa de localização integrado (Google Maps com tema light)
- Ícones de redes sociais grandes e clicáveis em `--primary`
- Informações de contato (email, Instagram) destacadas

**Elementos extras:**
- Horários de atendimento/funcionamento
- Aviso sobre agendamento prévio
- Banner de boas-vindas

---

## Diretrizes Gerais de Design

### Tipografia
- Hierarquia clara (H1 → 48px, H2 → 36px, H3 → 24px, Body → 16px)
- Fontes serifadas para títulos (caráter místico/ancestral)
- Sans-serif para corpo de texto (legibilidade)
- Line-height generoso (1.6-1.8)

### Espaçamento
- Sistema de 8px (8, 16, 24, 32, 48, 64, 96, 128px)
- Padding generoso em seções (64-96px vertical)
- Containers com max-width 1200-1400px

### Animações
- Fade-in ao scroll para elementos
- Hover effects sutis (scale 1.02, brightness 110%)
- Transições suaves (300-400ms ease)
- Parallax leve em backgrounds

### Elementos visuais
- Formas orgânicas e fluidas
- Texturas naturais (madeira, folhas, terra) com opacidade baixa sobre fundo claro
- Símbolos e iconografia da Umbanda (respeitosamente) em `--primary` ou `--secondary`
- Fotografias com filtros sutis e bordas em `--primary`
- Sombras suaves (box-shadow) para criar profundidade nos cards

### Responsividade
- Mobile-first approach
- Breakpoints: 640px, 768px, 1024px, 1280px
- Menu hamburger em mobile com `--secondary` background
- Grids que colapsam para 1 coluna em mobile

### Acessibilidade
- Contraste mínimo WCAG AA
- Alt text em todas as imagens
- Focus indicators visíveis
- Navegação por teclado
- Textos claros e objetivos

### Atmosfera geral
- Espiritual mas moderno
- Acolhedor e respeitoso
- Conexão com natureza (texturas orgânicas)
- Místico sem ser sombrio
- Profissional mas caloroso

---

## Elementos Especiais

### Header/Navegação
- Fixo no topo com scroll
- Background `--background` com sombra sutil ao scroll (box-shadow)
- Logo à esquerda
- Menu horizontal com links em `--foreground`
- Hover em `--primary` com sublinhado

### Footer
- Background `--secondary`
- 3 colunas: Sobre, Links rápidos, Contato
- Redes sociais
- Copyright e avisos legais
- Texto em `--secondary-foreground`

### Avisos Éticos (em todas as páginas relevantes)
- Card destacado com `--primary` background
- Ícone de alerta
- Texto claro sobre responsabilidade espiritual
- Borda `--accent`
