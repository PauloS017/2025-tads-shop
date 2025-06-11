# TADS Shop

## Sobre o Projeto

TADS Shop é uma aplicação web moderna desenvolvida como parte do curso de Tecnologia em Análise e Desenvolvimento de Sistemas (TADS) do IFMS. Este projeto demonstra a implementação de uma interface rica para uma plataforma de e-commerce, utilizando tecnologias de ponta no desenvolvimento front-end.

## Tecnologias Utilizadas

- **Next.js 15**: Framework React para renderização do lado do servidor (SSR) e geração de sites estáticos
- **React 19**: Biblioteca para construção de interfaces de usuário
- **TypeScript**: Linguagem que adiciona tipagem estática ao JavaScript
- **Tailwind CSS**: Framework CSS para design responsivo e componentes customizáveis
- **Shadcn UI**: Biblioteca de componentes acessíveis e customizáveis construída sobre o Radix UI
- **Next Themes**: Solução para gerenciamento de temas (claro/escuro)

## Estrutura do Projeto

```
app/                  # Diretórios e arquivos da aplicação Next.js
  dashboard/          # Página do dashboard administrativo
  page.tsx            # Página inicial
  layout.tsx          # Layout principal da aplicação
components/           # Componentes reutilizáveis
  ui/                 # Componentes de interface do usuário
hooks/                # React hooks personalizados
lib/                  # Funções utilitárias e helpers
public/               # Arquivos estáticos (imagens, ícones)
```

## Requisitos de Sistema

- Node.js 18.x ou superior
- npm 8.x ou superior (ou yarn/pnpm)

## Como Executar o Projeto

1. Clone este repositório:

   ```bash
   git clone https://github.com/seu-usuario/tads-shop.git
   cd tads-shop
   ```

2. Instale as dependências:

   ```bash
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   ```

3. Execute o servidor de desenvolvimento:

   ```bash
   npm run dev
   # ou
   yarn dev
   # ou
   pnpm dev
   ```

4. Acesse a aplicação em `http://localhost:3000`

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Compila o projeto para produção
- `npm run start` - Inicia o servidor em modo de produção (após build)
- `npm run lint` - Executa a verificação de linting

## Características

- Design responsivo para dispositivos móveis e desktop
- Tema claro e escuro
- Interface de administração com dashboard
- Componentes acessíveis seguindo as melhores práticas




