# React-Arquivo
 Projeto em React

# O QUE É REACT

Uma biblioteca JS para criação de interfaces;

Utilizado para construir SPAs (Single Page Application)

Baseado em Componentes

Utiliza o JSX para renderizar HTML

E aplicação o Virtual Dom para realizar as alterações de DOM;

Podemos Adicionar a um Projeto OU CRIAR UM PROJETO COM ELE

# COMO INSTALAR O REACT?

Para instalar o React vamos utilizar uma ferramenta chamada CREATE REACT APP;

Recebemos todos os arquivos da biblioteca e temos como executá-la

Para utilizar precisamos do Node e também npm;

Esta ferramenta também otimiza o app gerado para produção

É possivel iniciar a aplicação com npm start

## COMANDO NPX CREATE-REACT-APP NOME-DO-PROJETO

cd mu-site

npm start

ctrl + C para o servidor

# Entendendo o JSX

O JSX é como um html, porem dentro de codigo Javascript;

É a principal maneira de escrever HTML com o REACT;

Podemos interpolar variaveis, inserindo ela entre{}

É possivel também executar funções em JSX;

Inserir valores em atributos de tags também é válido em JSX;

/*Sempre tem que ter um elemento pai*/

/*Sempre usa className no react e não class porque é uma palavra reservada */

# Componentes

Permite dividir a aplicação em partes

Os componentes renderizam JSX, assim como App.js(que é um Componente)

E importá-lo onde precisamos utilizar;

Normalmente ficam em uma pasta chamada components

# Props

As Props são valores passados paea componentes;

Podemos deixa-los dinâmicos;

Ou seja, mudando a exucuçao por causa na chamada do componente

E precisa ser resgatado dentro de uma propriedade/argumento chamada props na função de definição do componente;

As props são somente de leitura!

# Adicionando CSS

O CSS pode ser adicionado de forma global na aplicaçao, por meio do arquivo index.css por exemplo

Porém é possivel estilizar a nivel de componentes

Utilizando o CSS Modules para isso

Basta criar como Componente.module.css

E chamar esta CSS  no Componente