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

# Atalho da extensão
rafce

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

# Funções no evento

- Quando as funções são simples, podemos realizar a lógica no próprio evento;
- Isso torna nossa código mais ‘complicado’, por atrelar lógica com HTML;
- Mas em algumas situaçõesé aplicável;
- Vamos ver na prática!

# Funções de renderização

- Podemos criar funções que retornam JSX;
- Isso serve para criar situações que dependam de outras condições;
- Ou seja, o JSX a ser renderizado pode variar por alguma variável, por exemplo;
- Vamos ver na prática!

# Imagens no React

- As imagens públicasdo nosso projeto podem ficar na pasta public;
- De lá elas podem ser chamadas pelas tags img diretamente pelo /nome.jpg;
- Pois a pasta public fica linkada com o srcdas imagens;
- Vamos ver na prática!

# Imagens em asset

- A pasta public pode ser utilizada para colocar imagens, como fizemos na aula passada;
- Mas um padrão bem utilizada para as imagens dos projetos é colocar em uma pasta chamada assets, em src;
- Ou seja, você vai encontrar projetos com as duas abordagens;
- Em assets precisamos importar as imagens, e o src é dinâmicocom o nome de importação;

# O que são hooks?

- Recursos do React que temdiversas funções;
- Como: guardar e alterar o estado de algum dadona nossa aplicação;
- Todos os hooks começam com use, por exemplo: useState;
- Podemos criar os nossos hooks, isso é chamado de custom hook;
- Os hooks precisam ser importados;
- Geralmente são úteis em todas as aplicações, utilizaremos diversos ao longo do curso;

# useState hook

- O hook de useState é um dos mais utilizados;
- Utilizamos para gerenciar o estado de algum dado, variáveis não funcionam corretamente, o componente não re-renderiza;
- Para guardar o dado definimos o nome da variável e para alterar vamos utilizar setNome, onde nome é o nome do nosso dado;
- Vamos ver na prática!

# Renderização de lista

- Uma outra ação bem comum é renderizar listas de dados no template;
- Fazemos isso com os dados com tipo de array;
- Utilizando ométodo map para nos auxiliar;
- Além dos dados podemosinserir JSXem cada iteração;
- Vamos ver na prática!

# A propriedade key

- Iterar listas sem a propriedade key nos gera um warning, podemos verificar isso no console;
- O React precisa de uma chave únicaem cada um dos itens iterados;
- Isso serve para ajudá-lo na renderização do componente;
- Geralmente teremos um array de objetose podemos colocar key como alguma chave única, como o id de algum dado;
- Em último casodevemos utilizar o index do método map;

# Previous state

- Previous stateé um recurso que nos permite pegar o dado em seu valor original dentro de um set de dado;
- Isso é muito utilizado para modificar listas , pois temos o valor antigo e 
transformamos em um valor novo;
- O primeiro argumentode um set sempre será o previous state;
- Vamos ver na prática!

# Comandos 

- json api npm run server