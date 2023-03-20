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

# Fragmentos

Os React Fragments permite a criação de um componente sem elemento pai;

O propósito é descomplicar os nós do DOM

A sintaxe é <> e </>, não há um nome para a tag;

Criamos no próprio JSX

# Avançando em Props

Podemos definir tipos para as props, realizando uma espécie de validação

Defimos em um objeto chamado propTypes no próprio componente

E ainda há a possibilidade de definir um valor padrão

Neste caso utilizamos o objeto defaulProps

# Eventos

Os eventos de React são os mesmo do Dom

Ou seja, temos eventos para responder a um click

O evento é atrelado a uma tag que irá executa-lo

Geralmente um método é atribuido ao evento

Este método devve ser criado no componente

# UseState

O useState é um hook do react

Com ele conseguimos manusear o estado de um componente de forma simples

Este hook funciona muito bem com eventos

Podemos atrelar um evento a mudança de state

# Métodos por props

Os métodos também podem ser passados por props

Ou seja, um componente filho pode ativar o metodo do seu ancestral

Vamos acessar o método por meio de um evento

A sintaxe é a mesma de uma props de dados: props.meuEvento

# Renderização por condição

Podemos atrelar a exibição de algum elemento por Condição

Esta ação é chamada de renderização condicional

Envolvemos as tags em chaves{};

Como as chaves executam JavaScript, criamos nossa condição

É possivel usar o state para criar as condiçoes;

## Renderização de Listas

Para renderizar uma lista vamos primeiramente precisar de um array

Depois utilizamos a função map, para percorrer cada um dos itens

Podendo assim renderizar algo na tela

É possivel unir operadores condicionais com a renderizacao de listas;

# State Lift

State Lift é um técnica utilizada para compartilhar o state

É normal vários componentes dependerem do mesmo estado

Então precisamos elevar o nivel do mesmo a um componente pai

Então centralizamos o state no pai, e definimos quem usa e quem define (setState)

# React Router

O React Router é um pacote para mudança de URLs da aplicação;

Podemos assim acessar outras views, sem o page reload

Trocando apenas uma parte do layout da aplicação, ou seja, o que muda de view para view

Precisamos instalar este pacote no projeto

E também realizar algumas mudanças em como o App é estruturado