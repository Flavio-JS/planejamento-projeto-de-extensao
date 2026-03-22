# Histórias de Usuário e Tasks - Site Terreiro Sagrado

## Estrutura do Projeto

Este documento descreve as Histórias de Usuário (HUs) e suas respectivas Tasks para desenvolvimento do site do Terreiro Sagrado, seguindo o padrão arquitetural do `site-exemplo`.

**Stack Tecnológica:**
- Next.js 16 com App Router
- TypeScript (strict mode)
- Tailwind CSS 4
- Vitest + Testing Library
- DecapCMS para gerenciamento de conteúdo
- React Markdown

---

## HU-001: Configuração Inicial do Projeto

**Como** desenvolvedor,  
**Eu quero** configurar a estrutura inicial do projeto Next.js,  
**Para que** o projeto tenha uma base sólida e padronizada para desenvolvimento.

### Tasks:

#### Task 1.1: Inicializar Projeto Next.js com TypeScript
- Criar novo projeto Next.js 16 com TypeScript
- Configurar `tsconfig.json` com aliases (`@/*`) e strict mode
- Configurar `next.config.ts` com otimizações de imagem e headers
- **Responsável:** _______________

#### Task 1.2: Configurar Tailwind CSS 4
- Instalar e configurar Tailwind CSS 4
- Criar `tailwind.config.ts` com tema customizado (cores do design system)
- Configurar `postcss.config.mjs`
- Criar `app/globals.css` com variáveis CSS customizadas
- **Responsável:** _______________

#### Task 1.3: Configurar Sistema de Testes
- Instalar Vitest e Testing Library
- Configurar `vitest.config.ts` com jsdom e aliases
- Criar `vitest.setup.ts` com mocks do Next.js
- Criar testes básicos para validar configuração
- **Responsável:** _______________

#### Task 1.4: Configurar DecapCMS
- Criar estrutura `public/admin/`
- Criar `public/admin/index.html`
- Criar `public/admin/config.yml` com configurações base
- **Responsável:** _______________

#### Task 1.5: Criar Estrutura de Pastas
- Criar estrutura de diretórios: `app/`, `components/`, `content/`, `lib/`, `types/`, `public/`
- Configurar organização de arquivos conforme padrão
- **Responsável:** _______________

#### Task 1.6: Configurar Biblioteca de Conteúdo
- Criar `lib/config.ts` com configurações centralizadas
- Criar `lib/utils.ts` com funções auxiliares
- Instalar dependências: gray-matter, react-markdown
- **Responsável:** _______________

---

## HU-002: Componentes Globais e Layout

**Como** desenvolvedor,  
**Eu quero** criar os componentes globais de layout (Header e Footer),  
**Para que** todas as páginas tenham uma estrutura consistente e navegação padronizada.

### Tasks:

#### Task 2.1: Criar Componente Header
- Criar `components/Header.tsx` com navegação responsiva
- Implementar menu hambúrguer para mobile
- Adicionar logo e links de navegação
- Estilizar com Tailwind CSS seguindo design system
- Criar testes unitários em `components/__tests__/Header.test.tsx`
- **Responsável:** _______________

#### Task 2.2: Criar Componente Footer
- Criar `components/Footer.tsx` com informações do terreiro
- Adicionar seções: Sobre, Links Rápidos, Contato, Redes Sociais
- Implementar layout responsivo
- Criar testes unitários em `components/__tests__/Footer.test.tsx`
- **Responsável:** _______________

#### Task 2.3: Criar Layout Principal
- Criar `app/layout.tsx` com estrutura base
- Integrar Header e Footer
- Configurar metadata SEO global
- Configurar fontes (Playfair Display, Inter)
- Criar testes de integração do layout
- **Responsável:** _______________

#### Task 2.4: Criar Componentes UI Reutilizáveis
- Criar `components/ui/Button.tsx` com variantes
- Criar `components/ui/Card.tsx`
- Criar `components/ui/IconCircle.tsx`
- Criar `components/ui/Badge.tsx`
- Criar `components/ui/index.ts` para exportação centralizada
- Criar testes unitários para cada componente UI
- **Responsável:** _______________

---

## HU-003: Página Home

**Como** visitante do site,  
**Eu quero** visualizar uma página inicial acolhedora e informativa,  
**Para que** eu possa entender rapidamente a proposta do terreiro e navegar para outras seções.

### Tasks:

#### Task 3.1: Criar Tipos TypeScript para Home
- Criar `types/home.ts` com interfaces:
  - `HeroContent`
  - `AboutPreviewContent`
  - `ValuesContent`
- **Responsável:** _______________

#### Task 3.2: Criar Content Loaders para Home
- Criar `lib/content/home.ts` com funções:
  - `getHeroContent()`
  - `getAboutPreviewContent()`
  - `getValuesContent()`
- Implementar leitura de arquivos markdown com gray-matter
- Exportar funções em `lib/content.ts`
- Criar testes unitários para os loaders
- **Responsável:** _______________

#### Task 3.3: Criar Conteúdo Markdown para Home
- Criar `content/home/hero.md` com conteúdo do hero section
- Criar `content/home/about-preview.md` com prévia sobre o terreiro
- Criar `content/home/values.md` com valores do terreiro
- **Responsável:** _______________

#### Task 3.4: Criar Componente HeroSection
- Criar `components/home/HeroSection.tsx`
- Implementar animações fade-in
- Criar botões de ação (Consultas, Trabalhos, Eventos, Sobre Nós)
- Estilizar com gradientes e efeitos visuais
- Criar testes unitários em `components/home/__tests__/HeroSection.test.tsx`
- **Responsável:** _______________

#### Task 3.5: Criar Componente AboutPreview
- Criar `components/home/AboutPreview.tsx`
- Implementar layout com imagem e texto
- Adicionar estatísticas/cards informativos
- Criar testes unitários em `components/home/__tests__/AboutPreview.test.tsx`
- **Responsável:** _______________

#### Task 3.6: Criar Componente ValuesSection
- Criar `components/home/ValuesSection.tsx`
- Implementar grid de valores com ícones
- Adicionar animações de entrada
- Criar testes unitários em `components/home/__tests__/ValuesSection.test.tsx`
- **Responsável:** _______________

#### Task 3.7: Criar Página Home
- Criar `app/page.tsx`
- Integrar todos os componentes do home
- Configurar metadata SEO
- Implementar server-side data fetching
- Criar testes de integração da página
- **Responsável:** _______________

#### Task 3.8: Configurar DecapCMS para Home
- Adicionar configuração de coleção "Home" no `config.yml`
- Definir campos para hero, about-preview e values
- Testar edição de conteúdo via CMS
- **Responsável:** _______________

---

## HU-004: Página Quem Somos

**Como** visitante do site,  
**Eu quero** conhecer a história e valores do terreiro,  
**Para que** eu possa entender melhor a tradição e a comunidade.

### Tasks:

#### Task 4.1: Criar Tipos TypeScript para Quem Somos
- Criar `types/quem-somos.ts` com interfaces:
  - `AboutHeroContent`
  - `ValuesContent`
  - `TimelineContent`
  - `TimelineEvent`
  - `CommunityContent`
- **Responsável:** _______________

#### Task 4.2: Criar Content Loaders para Quem Somos
- Criar `lib/content/quem-somos.ts` com funções:
  - `getAboutHeroContent()`
  - `getQuemSomosValues()`
  - `getTimelineHistory()`
  - `getCommunityContent()`
- Exportar em `lib/content.ts`
- Criar testes unitários para os loaders
- **Responsável:** _______________

#### Task 4.3: Criar Conteúdo Markdown para Quem Somos
- Criar `content/quem-somos/hero.md`
- Criar `content/quem-somos/values.md`
- Criar `content/quem-somos/timeline.md` com linha do tempo histórica
- Criar `content/quem-somos/community.md`
- **Responsável:** _______________

#### Task 4.4: Criar Componente AboutHero
- Criar `components/quem-somos/AboutHero.tsx`
- Implementar layout com imagem em mosaico
- Adicionar estatísticas do terreiro
- Criar testes unitários em `components/quem-somos/__tests__/AboutHero.test.tsx`
- **Responsável:** _______________

#### Task 4.5: Criar Componente ValuesMission
- Criar `components/quem-somos/ValuesMission.tsx`
- Implementar grid de 3 valores principais
- Adicionar ícones e descrições
- Criar testes unitários em `components/quem-somos/__tests__/ValuesMission.test.tsx`
- **Responsável:** _______________

#### Task 4.6: Criar Componente TimelineHistory
- Criar `components/quem-somos/TimelineHistory.tsx`
- Implementar linha do tempo vertical com eventos
- Adicionar animações de scroll
- Criar testes unitários em `components/quem-somos/__tests__/TimelineHistory.test.tsx`
- **Responsável:** _______________

#### Task 4.7: Criar Componente Community
- Criar `components/quem-somos/Community.tsx`
- Implementar galeria de imagens em mosaico
- Adicionar depoimentos da comunidade
- Criar testes unitários em `components/quem-somos/__tests__/Community.test.tsx`
- **Responsável:** _______________

#### Task 4.8: Criar Página Quem Somos
- Criar `app/quem-somos/page.tsx`
- Integrar todos os componentes
- Configurar metadata SEO
- Criar testes de integração da página
- **Responsável:** _______________

#### Task 4.9: Configurar DecapCMS para Quem Somos
- Adicionar coleção "Quem Somos" no `config.yml`
- Definir campos para todas as seções
- Configurar campo de lista para timeline
- **Responsável:** _______________

---

## HU-005: Página Medicinas Ancestrais

**Como** visitante interessado em práticas espirituais,  
**Eu quero** conhecer as medicinas ancestrais praticadas no terreiro,  
**Para que** eu possa entender as tradições de cura e orientação espiritual.

### Tasks:

#### Task 5.1: Criar Tipos TypeScript para Medicinas
- Criar `types/medicinas.ts` com interfaces:
  - `MedicinasHeroContent`
  - `OrixaContent`
  - `LinhaTrabalhoContent`
  - `MedicinaFlorestaContent`
  - `BeneficioContent`
- **Responsável:** _______________

#### Task 5.2: Criar Content Loaders para Medicinas
- Criar `lib/content/medicinas.ts` com funções:
  - `getMedicinasHero()`
  - `getOrixasContent()`
  - `getLinhasTrabalho()`
  - `getMedicinasFlorestContent()`
- Exportar em `lib/content.ts`
- Criar testes unitários para os loaders
- **Responsável:** _______________

#### Task 5.3: Criar Conteúdo Markdown para Medicinas
- Criar `content/medicinas/hero.md`
- Criar `content/medicinas/orixas.md` com informações dos Orixás
- Criar `content/medicinas/linhas-trabalho.md` com accordion
- Criar `content/medicinas/medicinas-floresta.md`
- **Responsável:** _______________

#### Task 5.4: Criar Componente MedicinasHero
- Criar `components/medicinas/MedicinasHero.tsx`
- Implementar sistema de tabs (Umbanda / Medicinas da Floresta)
- Adicionar botões de navegação entre tabs
- Criar testes unitários em `components/medicinas/__tests__/MedicinasHero.test.tsx`
- **Responsável:** _______________

#### Task 5.5: Criar Componente OrixasCards
- Criar `components/medicinas/OrixasCards.tsx`
- Implementar grid de cards com informações dos Orixás
- Adicionar ícones e cores específicas
- Criar testes unitários em `components/medicinas/__tests__/OrixasCards.test.tsx`
- **Responsável:** _______________

#### Task 5.6: Criar Componente LinhasTrabalho
- Criar `components/medicinas/LinhasTrabalho.tsx`
- Implementar accordion interativo
- Adicionar funcionalidade de expandir/recolher
- Criar testes unitários em `components/medicinas/__tests__/LinhasTrabalho.test.tsx`
- **Responsável:** _______________

#### Task 5.7: Criar Componente MedicinasFlorestaSection
- Criar `components/medicinas/MedicinasFlorestaSection.tsx`
- Implementar seções de ayahuasca, rapé e sananga
- Adicionar aviso ético importante
- Criar testes unitários em `components/medicinas/__tests__/MedicinasFlorestaSection.test.tsx`
- **Responsável:** _______________

#### Task 5.8: Criar Componente WarningCard
- Criar `components/medicinas/WarningCard.tsx`
- Estilizar com destaque visual
- Adicionar ícone de alerta
- Criar testes unitários em `components/medicinas/__tests__/WarningCard.test.tsx`
- **Responsável:** _______________

#### Task 5.9: Criar Página Medicinas
- Criar `app/medicinas/page.tsx`
- Integrar sistema de tabs e todos os componentes
- Configurar metadata SEO
- Implementar lógica de troca de tabs
- Criar testes de integração da página
- **Responsável:** _______________

#### Task 5.10: Configurar DecapCMS para Medicinas
- Adicionar coleção "Medicinas" no `config.yml`
- Definir campos para Orixás, Linhas de Trabalho e Medicinas da Floresta
- Configurar campos de lista e accordion
- **Responsável:** _______________

---

## HU-006: Página Grupo Musical

**Como** visitante interessado na cultura do terreiro,  
**Eu quero** conhecer o grupo musical e suas atividades,  
**Para que** eu possa apreciar a arte e cultura afro-brasileira.

### Tasks:

#### Task 6.1: Criar Tipos TypeScript para Grupo Musical
- Criar `types/grupo-musical.ts` com interfaces:
  - `GrupoHeroContent`
  - `IntegranteContent`
  - `MusicPlayerContent`
  - `VideoContent`
  - `ProjetoCulturalContent`
  - `DepoimentoContent`
- **Responsável:** _______________

#### Task 6.2: Criar Content Loaders para Grupo Musical
- Criar `lib/content/grupo-musical.ts` com funções:
  - `getGrupoHeroContent()`
  - `getIntegrantesContent()`
  - `getMusicPlayerContent()`
  - `getVideosContent()`
  - `getProjetosCulturaisContent()`
  - `getDepoimentosContent()`
- Exportar em `lib/content.ts`
- Criar testes unitários para os loaders
- **Responsável:** _______________

#### Task 6.3: Criar Conteúdo Markdown para Grupo Musical
- Criar `content/grupo-musical/hero.md`
- Criar `content/grupo-musical/integrantes.md` com perfis dos músicos
- Criar `content/grupo-musical/music-player.md`
- Criar `content/grupo-musical/videos.md` com galeria
- Criar `content/grupo-musical/projetos-culturais.md`
- Criar `content/grupo-musical/depoimentos.md`
- **Responsável:** _______________

#### Task 6.4: Criar Componente GrupoHero
- Criar `components/grupo-musical/GrupoHero.tsx`
- Implementar hero com imagem de fundo
- Adicionar overlay e título destacado
- Criar testes unitários em `components/grupo-musical/__tests__/GrupoHero.test.tsx`
- **Responsável:** _______________

#### Task 6.5: Criar Componente IntegrantesSection
- Criar `components/grupo-musical/IntegrantesSection.tsx`
- Implementar grid de cards com fotos e descrições
- Adicionar informações de instrumentos
- Criar testes unitários em `components/grupo-musical/__tests__/IntegrantesSection.test.tsx`
- **Responsável:** _______________

#### Task 6.6: Criar Componente MusicPlayer
- Criar `components/grupo-musical/MusicPlayer.tsx`
- Integrar player Spotify (iframe)
- Adicionar cards de destaques musicais
- Criar testes unitários em `components/grupo-musical/__tests__/MusicPlayer.test.tsx`
- **Responsável:** _______________

#### Task 6.7: Criar Componente VideoGallery
- Criar `components/grupo-musical/VideoGallery.tsx`
- Implementar grid de vídeos do YouTube
- Adicionar thumbnails e títulos
- Criar testes unitários em `components/grupo-musical/__tests__/VideoGallery.test.tsx`
- **Responsável:** _______________

#### Task 6.8: Criar Componente ProjetosCulturais
- Criar `components/grupo-musical/ProjetosCulturais.tsx`
- Implementar cards de projetos com descrições
- Adicionar ícones e badges
- Criar testes unitários em `components/grupo-musical/__tests__/ProjetosCulturais.test.tsx`
- **Responsável:** _______________

#### Task 6.9: Criar Componente DepoimentosSection
- Criar `components/grupo-musical/DepoimentosSection.tsx`
- Implementar grid de depoimentos
- Estilizar com aspas e autores
- Criar testes unitários em `components/grupo-musical/__tests__/DepoimentosSection.test.tsx`
- **Responsável:** _______________

#### Task 6.10: Criar Página Grupo Musical
- Criar `app/grupo-musical/page.tsx`
- Integrar todos os componentes
- Configurar metadata SEO
- Criar testes de integração da página
- **Responsável:** _______________

#### Task 6.11: Configurar DecapCMS para Grupo Musical
- Adicionar coleção "Grupo Musical" no `config.yml`
- Definir campos para integrantes, vídeos e projetos
- Configurar campos de mídia (imagens, vídeos)
- **Responsável:** _______________

---

## HU-007: Página Contato

**Como** visitante interessado em entrar em contato,  
**Eu quero** ter acesso a um formulário e informações de contato,  
**Para que** eu possa me comunicar com o terreiro facilmente.

### Tasks:

#### Task 7.1: Criar Tipos TypeScript para Contato
- Criar `types/contato.ts` com interfaces:
  - `ContatoHeroContent`
  - `ContactFormData`
  - `ContactInfoContent`
  - `ScheduleContent`
  - `LocationContent`
  - `SocialMediaContent`
- **Responsável:** _______________

#### Task 7.2: Criar Content Loaders para Contato
- Criar `lib/content/contato.ts` com funções:
  - `getContatoHeroContent()`
  - `getContactInfoContent()`
  - `getScheduleContent()`
  - `getLocationContent()`
  - `getSocialMediaContent()`
- Exportar em `lib/content.ts`
- Criar testes unitários para os loaders
- **Responsável:** _______________

#### Task 7.3: Criar Validações de Formulário
- Criar `lib/validations/contato.ts` com validações:
  - Validação de nome (obrigatório, min 3 caracteres)
  - Validação de email (formato válido)
  - Validação de telefone (formato brasileiro)
  - Validação de mensagem (obrigatório, min 10 caracteres)
- Usar Zod ou Yup para validações
- Criar testes unitários para validações
- **Responsável:** _______________

#### Task 7.4: Criar Conteúdo Markdown para Contato
- Criar `content/contato/hero.md`
- Criar `content/contato/contact-info.md` com endereço, telefone, email
- Criar `content/contato/schedule.md` com horários de funcionamento
- Criar `content/contato/location.md` com informações do mapa
- Criar `content/contato/social-media.md` com links das redes
- **Responsável:** _______________

#### Task 7.5: Criar Componente ContatoHero
- Criar `components/contato/ContatoHero.tsx`
- Implementar banner de boas-vindas
- Estilizar com gradiente
- Criar testes unitários em `components/contato/__tests__/ContatoHero.test.tsx`
- **Responsável:** _______________

#### Task 7.6: Criar Componente ContactForm
- Criar `components/contato/ContactForm.tsx`
- Implementar formulário com campos: nome, email, telefone, assunto, mensagem
- Adicionar validação em tempo real
- Implementar feedback de envio (success/error)
- Adicionar estados de loading
- Criar testes unitários em `components/contato/__tests__/ContactForm.test.tsx`
- **Responsável:** _______________

#### Task 7.7: Criar API Route para Envio de Email
- Criar `app/api/contact/route.ts`
- Implementar envio de email (Nodemailer, SendGrid, ou serviço similar)
- Adicionar validação de dados no backend
- Implementar rate limiting
- Adicionar tratamento de erros
- Criar testes de integração para a API
- **Responsável:** _______________

#### Task 7.8: Criar Componente ContactInfo
- Criar `components/contato/ContactInfo.tsx`
- Implementar cards com endereço, telefone, email, WhatsApp
- Adicionar ícones e links clicáveis
- Criar testes unitários em `components/contato/__tests__/ContactInfo.test.tsx`
- **Responsável:** _______________

#### Task 7.9: Criar Componente ScheduleCard
- Criar `components/contato/ScheduleCard.tsx`
- Implementar card com horários de funcionamento
- Adicionar destaque para dias de gira/trabalhos
- Criar testes unitários em `components/contato/__tests__/ScheduleCard.test.tsx`
- **Responsável:** _______________

#### Task 7.10: Criar Componente MapSection
- Criar `components/contato/MapSection.tsx`
- Integrar Google Maps (iframe ou API)
- Adicionar filtro sepia conforme design
- Criar testes unitários em `components/contato/__tests__/MapSection.test.tsx`
- **Responsável:** _______________

#### Task 7.11: Criar Componente SocialMedia
- Criar `components/contato/SocialMedia.tsx`
- Implementar grid de redes sociais (Facebook, Instagram, WhatsApp, YouTube)
- Adicionar hover effects
- Criar testes unitários em `components/contato/__tests__/SocialMedia.test.tsx`
- **Responsável:** _______________

#### Task 7.12: Criar Página Contato
- Criar `app/contato/page.tsx`
- Integrar todos os componentes
- Configurar metadata SEO
- Implementar layout em grid (formulário à esquerda, info à direita)
- Criar testes de integração da página
- **Responsável:** _______________

#### Task 7.13: Configurar DecapCMS para Contato
- Adicionar coleção "Contato" no `config.yml`
- Definir campos para informações de contato, horários e redes sociais
- Configurar campos de mapa (coordenadas)
- **Responsável:** _______________

---

## HU-008: Aviso Ético e Responsabilidade

**Como** desenvolvedor responsável,  
**Eu quero** adicionar um aviso ético em todas as páginas relevantes,  
**Para que** os visitantes entendam os valores e compromissos do terreiro.

### Tasks:

#### Task 8.1: Criar Componente EthicsNotice
- Criar `components/EthicsNotice.tsx`
- Implementar seção destacada com aviso importante
- Adicionar ícone de alerta
- Estilizar com cores primárias em gradiente
- Criar testes unitários em `components/__tests__/EthicsNotice.test.tsx`
- **Responsável:** _______________

#### Task 8.2: Criar Conteúdo para Aviso Ético
- Criar `content/global/ethics-notice.md`
- Adicionar texto sobre seriedade, responsabilidade e tradições
- **Responsável:** _______________

#### Task 8.3: Integrar EthicsNotice nas Páginas
- Adicionar EthicsNotice em todas as páginas principais
- Posicionar antes do footer
- Criar testes de integração
- **Responsável:** _______________

---

## HU-009: SEO e Performance

**Como** proprietário do site,  
**Eu quero** que o site tenha boa performance e SEO,  
**Para que** mais pessoas possam encontrar e acessar o terreiro online.

### Tasks:

#### Task 9.1: Configurar Metadata SEO
- Criar metadata para todas as páginas
- Adicionar Open Graph tags
- Configurar Twitter Cards
- Adicionar keywords relevantes
- **Responsável:** _______________

#### Task 9.2: Criar Sitemap
- Criar `app/sitemap.ts` para geração automática
- Incluir todas as páginas principais
- Configurar prioridades e frequências de atualização
- **Responsável:** _______________

#### Task 9.3: Criar Robots.txt
- Criar `app/robots.ts`
- Configurar regras de crawling
- Referenciar sitemap
- **Responsável:** _______________

#### Task 9.4: Otimizar Imagens
- Configurar Next.js Image com otimizações
- Adicionar lazy loading
- Definir tamanhos responsivos
- Criar testes de performance
- **Responsável:** _______________

#### Task 9.5: Implementar Schema.org
- Adicionar JSON-LD para Organization
- Adicionar JSON-LD para LocalBusiness
- Adicionar JSON-LD para eventos (se aplicável)
- **Responsável:** _______________

#### Task 9.6: Configurar Analytics
- Integrar Google Analytics ou alternativa
- Configurar eventos de tracking
- Adicionar consentimento de cookies (LGPD)
- **Responsável:** _______________

---

## HU-010: Acessibilidade

**Como** visitante com necessidades especiais,  
**Eu quero** que o site seja acessível,  
**Para que** eu possa navegar e consumir o conteúdo independentemente das minhas limitações.

### Tasks:

#### Task 10.1: Implementar Navegação por Teclado
- Garantir focus states visíveis
- Implementar skip links
- Testar navegação completa via teclado
- **Responsável:** _______________

#### Task 10.2: Adicionar Atributos ARIA
- Adicionar labels apropriados
- Implementar live regions para conteúdo dinâmico
- Adicionar roles semânticos
- Criar testes de acessibilidade
- **Responsável:** _______________

#### Task 10.3: Garantir Contraste de Cores
- Validar contraste WCAG AA
- Ajustar cores se necessário
- Testar com ferramentas de acessibilidade
- **Responsável:** _______________

#### Task 10.4: Otimizar para Screen Readers
- Adicionar alt text em todas as imagens
- Estruturar headings hierarquicamente
- Testar com NVDA/JAWS
- **Responsável:** _______________

---

## HU-011: Responsividade

**Como** visitante mobile,  
**Eu quero** que o site funcione perfeitamente no meu dispositivo,  
**Para que** eu possa acessar todas as funcionalidades em qualquer lugar.

### Tasks:

#### Task 11.1: Implementar Design Responsivo no Header
- Criar menu hambúrguer funcional para mobile
- Implementar drawer/sidebar mobile
- Testar em múltiplos dispositivos
- Criar testes de responsividade
- **Responsável:** _______________

#### Task 11.2: Ajustar Layouts para Mobile
- Adaptar grids para mobile (1 coluna)
- Ajustar tamanhos de fonte
- Otimizar espaçamentos
- Testar em diferentes breakpoints
- **Responsável:** _______________

#### Task 11.3: Otimizar Formulário de Contato Mobile
- Garantir campos touch-friendly
- Ajustar teclado virtual (inputmode)
- Melhorar UX de validação em mobile
- **Responsável:** _______________

#### Task 11.4: Testar em Dispositivos Reais
- Testar em iOS (Safari)
- Testar em Android (Chrome)
- Testar em tablets
- Documentar bugs e ajustar
- **Responsável:** _______________

---

## HU-012: Deploy e Infraestrutura

**Como** desenvolvedor,  
**Eu quero** configurar deploy automatizado,  
**Para que** o site esteja disponível online com atualizações contínuas.

### Tasks:

#### Task 12.1: Configurar Vercel Deploy
- Criar conta Vercel
- Conectar repositório Git
- Configurar variáveis de ambiente
- Testar deploy de produção
- **Responsável:** _______________

#### Task 12.2: Configurar Domínio Customizado
- Registrar/configurar domínio
- Configurar DNS
- Configurar SSL/TLS
- **Responsável:** _______________

#### Task 12.3: Configurar CI/CD
- Configurar GitHub Actions (ou similar)
- Implementar testes automáticos no CI
- Configurar preview deployments
- **Responsável:** _______________

#### Task 12.4: Configurar Variáveis de Ambiente
- Criar `.env.example`
- Documentar variáveis necessárias
- Configurar env vars no Vercel
- **Responsável:** _______________

#### Task 12.5: Configurar Backup de Conteúdo
- Implementar backup automático do conteúdo markdown
- Configurar versionamento Git para content/
- Documentar processo de recuperação
- **Responsável:** _______________

---

## HU-013: Documentação

**Como** desenvolvedor ou mantenedor futuro,  
**Eu quero** ter documentação completa do projeto,  
**Para que** eu possa entender e manter o código facilmente.

### Tasks:

#### Task 13.1: Criar README Principal
- Criar `README.md` com visão geral do projeto
- Documentar stack tecnológica
- Adicionar instruções de instalação
- Adicionar comandos principais
- **Responsável:** _______________

#### Task 13.2: Documentar Estrutura do Projeto
- Criar documento explicando organização de pastas
- Documentar convenções de código
- Explicar fluxo de dados (content → loaders → components)
- **Responsável:** _______________

#### Task 13.3: Criar Guia de Contribuição
- Criar `CONTRIBUTING.md`
- Documentar processo de desenvolvimento
- Explicar padrões de commit
- Documentar processo de testes
- **Responsável:** _______________

#### Task 13.4: Documentar DecapCMS
- Criar `CMS_GUIDE.md`
- Explicar como usar o CMS
- Documentar campos e coleções
- Adicionar screenshots
- **Responsável:** _______________

#### Task 13.5: Criar Documentação de Deploy
- Criar `DEPLOY_GUIDE.md`
- Documentar processo de deploy
- Explicar configuração de env vars
- Documentar troubleshooting comum
- **Responsável:** _______________

---

## Resumo de Entregas

### Páginas Principais:
1. ✅ Home (`/`)
2. ✅ Quem Somos (`/quem-somos`)
3. ✅ Medicinas Ancestrais (`/medicinas`)
4. ✅ Grupo Musical (`/grupo-musical`)
5. ✅ Contato (`/contato`)

### Componentes Globais:
- Header com navegação responsiva
- Footer com informações completas
- EthicsNotice (aviso ético)
- Componentes UI reutilizáveis (Button, Card, Badge, etc.)

### Funcionalidades Técnicas:
- Sistema de conteúdo com markdown + DecapCMS
- Sistema de tipos TypeScript completo
- Testes unitários e de integração
- SEO otimizado
- Acessibilidade WCAG AA
- Responsividade mobile-first
- API de contato com envio de email
- Deploy automatizado

### Documentação:
- README principal
- Guias de contribuição
- Documentação do CMS
- Guia de deploy

---

## Convenções do Projeto

### Nomenclatura:
- Componentes: PascalCase (`HeroSection.tsx`)
- Arquivos de conteúdo: kebab-case (`hero.md`)
- Tipos: PascalCase com sufixo `Content` (`HeroContent`)
- Funções: camelCase (`getHeroContent()`)

### Estrutura de Testes:
```typescript
describe('ComponentName', () => {
  it('renders correctly', () => { ... });
  it('handles user interaction', () => { ... });
  it('respects visibility flag', () => { ... });
});
```

### Git Commits:
- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Documentação
- `test:` Testes
- `refactor:` Refatoração
- `style:` Formatação

---

## Dependências Esperadas

```json
{
  "dependencies": {
    "next": "^16.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "gray-matter": "^4.0.3",
    "react-markdown": "^9.0.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.0.0"
  },
  "devDependencies": {
    "@testing-library/react": "^14.0.0",
    "@testing-library/jest-dom": "^6.0.0",
    "@vitejs/plugin-react": "^4.0.0",
    "vitest": "^1.0.0",
    "jsdom": "^23.0.0",
    "typescript": "^5.0.0",
    "@types/react": "^19.0.0",
    "tailwindcss": "^4.0.0",
    "postcss": "^8.0.0",
    "autoprefixer": "^10.0.0"
  }
}
```

---

**Data de Criação:** 22 de Março de 2026  
**Última Atualização:** 22 de Março de 2026  
**Versão:** 1.0.0
