## 💻 Resumo da Stack Tecnológica

---

### 1. Next.js (Frontend e Gerador Estático)

O Next.js é um **framework de desenvolvimento web baseado em React** que oferece renderização híbrida. Para este projeto, ele será usado primariamente como um **Gerador de Sites Estáticos (SSG - Static Site Generator)**.

- **O que é:** Um framework de código aberto que permite construir aplicações React de forma eficiente, especialmente útil para criar páginas rápidas e otimizadas para SEO.
- **Função no Projeto:** Ele lê o conteúdo do CMS (arquivos Markdown/YAML) durante o **processo de build** e pré-renderiza todo o HTML, CSS e JavaScript. O resultado é um conjunto de arquivos estáticos, ultrarrápidos e seguros, que não precisam de um servidor rodando dinamicamente.
- **Benefício Principal:** **Performance e Custo Zero/Baixo.** Ao gerar páginas estáticas, eliminamos a necessidade de um servidor de aplicação caro, permitindo a hospedagem gratuita em serviços de CDN.

---

### 2. Decap CMS (Headless CMS Estático)

O Decap CMS (anteriormente Netlify CMS) é a peça-chave para o requisito de edição por usuários não-técnicos.

- **O que é:** É um **Sistema de Gerenciamento de Conteúdo (CMS) Headless e de Código Aberto**. O termo "Headless" significa que ele gerencia o conteúdo, mas não o layout visual (o _front-end_ React, a "cabeça", é separado).
- **Função no Projeto:** Ele fornece uma **interface de usuário intuitiva e amigável** para que os designers possam adicionar, editar e remover textos e imagens, conforme o escopo do projeto (Página Inicial, Quem Somos, etc.).
- **Modelo Operacional:** Em vez de usar um banco de dados (que exige um servidor), o Decap CMS se conecta ao **Git (GitHub/GitLab)** via API. Quando o designer salva uma alteração, o CMS automaticamente faz um **commit** no repositório.
- **Benefício Principal:** **Facilidade de Uso para Designers e Custo Zero.** Elimina a necessidade de um servidor de backend e banco de dados, pois o conteúdo é armazenado diretamente em arquivos dentro do repositório Git.

---

### 3. Netlify (Hospedagem e Automação de Build)

O Netlify é uma plataforma de hospedagem e automação de desenvolvimento para sites modernos.

- **O que é:** Uma plataforma de desenvolvimento e hospedagem que se especializa em servir sites estáticos rapidamente via **CDN (Content Delivery Network)**, além de fornecer serviços como **Netlify Identity** (gerenciamento de usuários).
- **Função no Projeto:**
  1.  **Hospedagem Gratuita:** Serve o site estático gerado pelo Next.js (o _build_).
  2.  **Automação (CI/CD):** Monitora o repositório Git. Cada vez que o Decap CMS faz um commit (o designer salvou o conteúdo), o Netlify automaticamente aciona o `next build` para **reconstruir e publicar o site** em minutos, garantindo que o conteúdo esteja sempre atualizado.
  3.  **Netlify Identity / Git Gateway:** Fornece o serviço de autenticação necessário (login e permissões) para que o Decap CMS consiga fazer commits no seu repositório Git de forma segura.
- **Benefício Principal:** **Infraestrutura Completa com Custo Zero/Mínimo e Agilidade.** Gerencia a implantação, a atualização e a autenticação, permitindo um fluxo de trabalho (workflow) suave para o designer.

---

## 💡 Fluxo de Trabalho (Workflow)

Este diagrama simples resume como essas três peças interagem para fornecer um site editável de custo zero:

1.  O **Designer** acessa o **Decap CMS** e edita o conteúdo.
2.  Ao salvar, o **Decap CMS** faz um **Commit no Git** (via Git Gateway do Netlify).
3.  O **Netlify** detecta o novo commit e executa o **Next.js** (`next build`).
4.  O **Next.js** lê o novo conteúdo dos arquivos, gera os arquivos estáticos.
5.  O **Netlify** publica os novos arquivos, e o site está **atualizado** para os **Visitantes**.

Essa arquitetura é conhecida como **JAMstack**, otimizando a velocidade, a segurança e, crucialmente, o custo.

Você gostaria de uma descrição mais detalhada de como o Next.js lida com a busca de dados (`getStaticProps`) para o seu relatório?
