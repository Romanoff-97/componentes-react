# Coleção de Componentes React

Bem-vindo à minha coleção de componentes React! 🚀

Este repositório reúne diversos componentes desenvolvidos durante meu aprendizado, com foco total em **reutilização**, **responsividade** e **boas práticas**. O objetivo é construir uma biblioteca de elementos de interface modulares e versáteis, utilizando TypeScript e Vite.

## 🛠️ Tecnologias Utilizadas

- **React** (v19)
- **TypeScript**
- **Vite**
- **CSS Modules** (para estilização escopada e modular)

## 📂 Componentes Disponíveis

O projeto está organizado para facilitar a manutenção e escalabilidade. Abaixo estão os componentes já implementados:

- **`src/App.tsx`**: Componente principal que organiza o layout e renderiza a lista de cards.
- **`src/Card`**: Componente que exibe os detalhes de um filme/série.
  - Recebe um objeto `movie` (título, imagem, descrição) e uma `buttonLabel`.
  - Reutiliza o componente `Button` internamente.
- **`src/Profile`**: Componente de perfil de usuário.
  - Exibe avatar, nome, bio e contatos (e-mail, telefone).
  - Inclui botões para redes sociais (GitHub, LinkedIn, etc).
- **`src/Button`**: Componente de botão genérico.
  - Recebe uma prop `label` para definir o texto do botão.
  - Opcionalmente aceita uma prop `url` para links externos.

*Novos componentes serão adicionados conforme o avanço no curso.*

## 🚀 Como Rodar o Projeto

Siga os passos abaixo para visualizar os componentes em funcionamento:

1. **Clone o repositório:**

    ```bash
    git clone https://github.com/Romanoff_97/primeiro-componente-react.git
    ```

2. **Instale as dependências:**

    ```bash
    npm install
    ```

3. **Rode o servidor de desenvolvimento:**

    ```bash
    npm run dev
    ```

4. Acesse `http://localhost:5173` no seu navegador.

## 📝 Sobre o Projeto

Este projeto serve como um playground para testar conceitos de componentização no React. A ênfase está em criar códigos limpos, que permitam fácil manutenção e adaptação para diferentes layouts e dispositivos.

---
*Desenvolvido com 💙 durante meus estudos de React.*
