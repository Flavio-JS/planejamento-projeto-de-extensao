## ❌ Pontos Negativos da Solução (Decap CMS e JAMstack)

### 1. Tempo de Publicação (Build Time)

- **O problema:** Qualquer alteração de conteúdo feita pelos designers (um texto novo, uma nova imagem, etc.) exige que o site seja **totalmente reconstruído (built)** pelo Next.js e reimplantado pelo Netlify. Isso não é instantâneo.
- **Impacto:** Em vez de ver a alteração ao clicar em "Salvar" (como em um CMS dinâmico como o WordPress ou Strapi rodando em um servidor), o designer terá que esperar o processo de _build_ do Netlify, que pode levar de **1 a 5 minutos** (dependendo do tamanho e complexidade do projeto). Isso pode ser frustrante para usuários que estão acostumados com mudanças imediatas.

### 2. Escalabilidade de Conteúdo (Limitação do Git)

- **O problema:** O Decap CMS salva todo o conteúdo (textos e metadados) no repositório Git, normalmente em arquivos Markdown ou YAML.
- **Impacto:**
  - **Limitação de Dados:** Embora seja suficiente para um site institucional (como este), essa arquitetura não é ideal para projetos com uma quantidade _massiva_ de conteúdo (milhares de posts, grande catálogo de produtos, etc.), pois o repositório Git pode ficar muito grande e lento.
  - **Dados Relacionais:** É mais difícil gerenciar conteúdo com relações complexas (ex: um produto que está relacionado a 10 categorias, que por sua vez estão relacionadas a 5 fornecedores). O CMS tradicional com banco de dados é mais adequado para dados relacionais complexos.

### 3. Falta de Extensibilidade no Backend

- **O problema:** O Decap CMS não é um backend completo. Ele apenas gerencia o conteúdo estático. Ele não oferece lógica de servidor (APIs personalizadas, funções de email complexas, etc.).
- **Impacto:** Se o projeto futuramente precisar de recursos dinâmicos complexos, como:
  - **Área de Usuário (Login/Autenticação) Complexa**
  - **Processamento de Pagamento (E-commerce)**
  - **APIs robustas para integrar com outros sistemas**
    Você terá que construir essas APIs separadamente (em _Serverless Functions_ ou outro serviço), aumentando a complexidade e potencialmente os custos.

### 4. Dependência do Provedor (Netlify)

- **O problema:** O Decap CMS se apoia fortemente nos serviços de terceiros (Git Gateway, Netlify Identity) do Netlify para autenticação e conexão com o Git.
- **Impacto:** Embora seja ótimo para o custo zero, a solução não é totalmente agnóstica (independente) do provedor de hospedagem. Migrar essa parte da infraestrutura para outro serviço (como o Vercel ou AWS) exige mais esforço de configuração e, possivelmente, a substituição da funcionalidade do Git Gateway.

---
