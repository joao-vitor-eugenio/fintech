
# Fintech Dashboard

Aplicação web de dashboard para uma fintech, desenvolvida em React e TypeScript, que permite visualizar, filtrar e analisar vendas, com gráficos e listagem detalhada das transações.

## Funcionalidades

- Visualização de resumo financeiro (total de vendas, recebidos, a receber, pagamentos com erro)
- Filtro de vendas por período (data inicial e final)
- Navegação entre resumo e listagem de vendas
- Visualização detalhada de cada venda
- Gráfico de vendas por status (pago, processando, falha)

## Tecnologias Utilizadas

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [React Router DOM](https://reactrouter.com/)
- [Recharts](https://recharts.org/) (gráficos)
- CSS Modules

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/joao-vitor-eugenio/fintech.git
   cd fintech
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Rode o projeto em modo desenvolvimento:
   ```bash
   npm run dev
   ```
4. Acesse [http://localhost:5173](http://localhost:5173) no navegador.

## Scripts Disponíveis

- `npm run dev` — Inicia o servidor de desenvolvimento
- `npm run build` — Gera a build de produção
- `npm run preview` — Visualiza a build de produção localmente
- `npm run lint` — Executa o linter

## Estrutura do Projeto

- `src/` — Código-fonte principal
  - `Components/` — Componentes reutilizáveis (Elementos, Layout, Forms)
  - `Pages/` — Páginas principais (Resumo, Vendas, Venda)
  - `Contexts/` — Contexto global de dados
  - `Hooks/` — Hooks customizados
  - `assets/` — Imagens e ícones

## Licença

Este projeto é apenas para fins de estudo e demonstração.
