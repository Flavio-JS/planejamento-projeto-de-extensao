# Site Aldeia - Next.js + Decap CMS

Este é um projeto [Next.js](https://nextjs.org) integrado com [Decap CMS](https://decapcms.org) para gerenciamento de conteúdo.

## 🚀 Tecnologias

- **Next.js 16** - Framework React com SSG (Static Site Generation)
- **Decap CMS** - Sistema de gerenciamento de conteúdo
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **React Markdown** - Renderização de Markdown
- **Gray Matter** - Processamento de front matter

## 📁 Estrutura do Projeto

```
site-aldeia/
├── content/blog/          # Posts do blog (Markdown)
├── public/
│   ├── admin/            # Interface do Decap CMS
│   │   ├── config.yml    # Configuração do CMS
│   │   └── index.html
│   └── images/uploads/   # Imagens enviadas pelo CMS
├── src/
│   ├── app/
│   │   ├── blog/         # Páginas do blog
│   │   │   ├── [slug]/   # Post individual
│   │   │   └── page.tsx  # Lista de posts
│   │   └── page.tsx      # Página inicial
│   └── lib/
│       └── posts.ts      # Funções para ler posts
```

## 🛠️ Instalação

```bash
# Clone o repositório
git clone [seu-repositório]

# Entre na pasta do projeto
cd site-aldeia

# Instale as dependências
npm install
```

## 🎯 Como Usar

### Desenvolvimento Local

Para usar o Decap CMS localmente, você precisa rodar **dois servidores simultaneamente**:

#### Terminal 1 - Servidor Next.js
```bash
npm run dev
```

#### Terminal 2 - Proxy do Decap CMS
```bash
npm run cms-proxy
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### Páginas Disponíveis

- **Home**: `http://localhost:3000` - Página inicial
- **Blog**: `http://localhost:3000/blog` - Lista de posts
- **Admin**: `http://localhost:3000/admin` - Painel do CMS

## ✏️ Gerenciando Conteúdo

### Acessar o Painel Admin

1. Certifique-se de que ambos os servidores estão rodando
2. Acesse `http://localhost:3000/admin`
3. Faça login (em desenvolvimento local, não requer autenticação)

### Criar um Post

1. No painel admin, clique em "New Blog"
2. Preencha os campos:
   - **Título**: Nome do post
   - **Data de Publicação**: Data e hora
   - **Descrição**: Resumo do post
   - **Imagem de Capa**: Upload da imagem
   - **Corpo**: Conteúdo em Markdown
3. Clique em "Publish"

### Editar um Post

1. Na lista de posts, clique no post desejado
2. Faça as modificações
3. Clique em "Publish" para salvar

### Deletar um Post

1. Abra o post no painel admin
2. Clique no menu (três pontos)
3. Selecione "Delete entry"
4. Confirme a exclusão

## 📝 Formato dos Posts

Os posts são salvos em `content/blog/` com o seguinte formato:

```markdown
---
title: "Título do Post"
date: "2024-01-15T10:00:00.000Z"
description: "Descrição breve do post"
image: "/images/uploads/imagem.jpg"
---

# Conteúdo do Post

Seu conteúdo em Markdown aqui...
```

## 🚢 Deploy

### Netlify (Recomendado para Decap CMS)

1. Faça push do código para GitHub
2. Conecte o repositório no Netlify
3. Configure:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `out` ou `.next`
4. Ative o Netlify Identity
5. Ative o Git Gateway nas configurações

### Vercel

```bash
npm run build
npm run start
```

Ou faça deploy direto pela [Vercel Platform](https://vercel.com/new).

## 📚 Recursos

- [Documentação Next.js](https://nextjs.org/docs)
- [Documentação Decap CMS](https://decapcms.org/docs)
- [Guia Markdown](https://www.markdownguide.org/)

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.
