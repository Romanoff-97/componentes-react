# Exercício 2 - Primeiro Componente React

Bem-vindo ao meu primeiro projeto de criação de componentes com React! 🚀

Este projeto foi desenvolvido como parte de um exercício para praticar a criação e reutilização de componentes no React, utilizando TypeScript e Vite. O objetivo principal foi componentizar elementos da interface para exibir pôsteres de filmes de forma organizada.

## 🛠️ Tecnologias Utilizadas

- **React** (v19)
- **TypeScript**
- **Vite**
- **CSS Modules** (para estilização escopada)

## 📂 Estrutura do Projeto

O projeto segue uma estrutura simples focada em componentes:

- **`src/App.tsx`**: O componente principal que renderiza a aplicação e organiza os cards na tela.
- **`src/Card`**: Componente responsável por exibir as informações do filme (imagem, título, descrição e botão).
- **`src/Button`**: Componente reutilizável de botão ("Comprar agora").

## 🚀 Como Rodar o Projeto

Siga os passos abaixo para rodar o projeto localmente:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/Romanoff_97/primeiro-componente-react.git
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Rode o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

4.  Acesse `http://localhost:5173` no seu navegador.

## 📝 Sobre o Exercício

O desafio consistiu em:
1.  Criar um componente `Card` que exibe um pôster de Star Wars.
2.  Criar um componente `Button` estilizado.
3.  Utilizar CSS Modules para garantir que os estilos não entrem em conflito.
4.  Reutilizar o componente `Card` várias vezes na `App` principal.

---
*Desenvolvido com 💙 durante meus estudos de React.*
