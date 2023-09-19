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

# Importando componente

- A importação é a maneira que temos de reutilizar o componente;
- Utilizamos a sintaxe: import X from ‘./componentes/X’onde X é o nome do componente;
- Para colocar o componente importado em outro componente, precisamos colocá-lo em forma de tag: <FirstComponent />
- E então finalizamos o ciclo de importação;
- Vamos importar o FirstComponent em App;

# JSX

- JSX é o HTML do React;
- Onde vamos declarar as tags de HTML que serão exibidas no navegador;
- Ficam no return do componente;
- Temos algumas diferenças do HTML, por exemplo: class será className;
- Isso se dá pelasinstruções semelhantes de JS e HTML, pois o JSX é JavaScript, então algumas terão nomes diferentes;
- O JSX pode ter apenas um elemento pai;

# Comentários no componente

- Podemos inserir comentários de duas maneirasno componente;
- Na parte da função, onde é executada a lógica, a sintaxe é: // Algum comentário;
- E também no JSX: { /* Algum comentário */ }
- As chaves nos permitem executar sentenças em JavaScript, veremos isso mais adiante;
- Vamos testar os comentários!

# Template Expressions

- Template Expressionsé o recurso que nos permite executar JS no JSX e também interpolar variáveis;
- Isso será muito útil ao longo dos seus projetos em React;
- A sintaxe é: { algumCódigoEmJS }
- Tudo que está entre chaves é processado em JavaScripte nos retorna um resultado;
- Vamos ver na prática!

# Hierarquia de componentes

- Os componentes que criamos podem ser reutilizados em vários componentes;
- E ainda componentes podem formar uma hierarquia, sendo importados uns dentro dos outros, como fizemos em App;
- Vamos ver na prática estes conceitos!

# Evento de click

- Os eventos para o front-end são essenciais;
- Em várias situações vamos precisar do click, como ao envia formulários;
- No React os eventos já estão ‘prontos’, podemos utilizar on Cativar uma função ao clicar em um elemento;
- Esta função é criada na própria função do componente;
- As funções geralmente tem o padrão handleAlgumaCoisa;