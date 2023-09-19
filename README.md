# React-Arquivo
React

# criar com react
npx create-react-app app Ex hello world

# criar com Vite
 npm create vite@latest
 1 nome do app EX hello word2
 2 escolha o framework React
 3 escolha JAVASCRIPT

# react pacotes node_modules
npm i

# Iniciar Vite
npm run dev

# Estrutura Base

- Há algumas pastas e Arquivos chave para o desenvolvimento em React
- node_modules: Onde as dependências do projeto ficam
- puplic: Assets estáticos e HTML de inicialização;
- src: Onde vamos programar as nossas apps;
- src/index.js: Arquivos de inicialização do React;
- src/App.js: Componentes principal da aplicação;

# Extensão para React
- Há uma extensão no marketplace do VS Code que ajuda muito a programar em React;
- O nome dela é: ES7 + React/Redux/React-Nativesnippets;
- Conseguimos criar muito código com apenas alguns atalhos;
- Vamos instalá-la!

- Atalho rfce criar Component

# Preparando o Emmet para React

- Emmet é uma extensão nativa do VS Code que ajuda a escrever HTML mais rápido;
- Porém ela não vem configuradapara o React!
- Temos que acessar File > Settings > Extensionse procurar por Emmet;
- Lá vamos incluir a linguagem: javascript - javascriptreact;
- Vamos configurar!

# Peco que façam a alteração da extensão dos arquivos de cada componente para jsx.

# Criando componentes

- Na maioria dos projetos os componentes ficam em uma pasta chamada components, que devemos criar;
- Geralmente são nomeados com a camel case: FirstComponent.js;
- No arquivo criamos uma função, que contém o código deste componente (a lógica e o template);
- E também precisamos exportar esta função, para reutilizá-lo;
- Vamos ver na prática!