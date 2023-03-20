/* import logo from './logo.svg'; */
/* import HelloWorld from './componentes/Hello.Word';
import Frase from './componentes/frase'; */
/* import SayMyName from "./componentes/SayMyName";
import Pessoas from "./componentes/Pessoas";
import Frase from "./componentes/Frase";
import List from "./componentes/List"; 
import Condicional from "./componentes/Condicoes";
import Evento from "./componentes/Evento";
import Form from "./componentes/Form";
import OutraLista from "./componentes/OutraLista";*/
import { useState } from "react";

import "./App.css";
import Saudacao from "./componentes/Saudacao";
import SeuNome from "./componentes/SeuNome";

/* const nome = "Maria"; */

/*  const newName = nome.toLocaleUpperCase()  */

/*  function sum(a,b){
    return a + b
  } */

/*   const url = 'https://via.placeholder.com/150' */

/*  <h1>Hello World</h1>
      <p>Meu primeiro App {name}</p>
      <p>Some: {sum(1, 2)}</p>
      <img src={url} alt="Minha Imagem"/>
      <Frase/>
      <HelloWorld/>
      <Frase/>  
      </div>
      Imagem dinimica com função url
      Exportação de helloworld.js e frases.js }
      <h1>Testando css</h1>
      <SayMyName nome="Paulo" />
      <SayMyName nome={nome} />
      <Pessoas
        nome="Paulo"
        idade="30"
        profissao="Programador"
        foto="https://via.placeholder.com/150"
      />
      <Frase/>
      <List/>

      <> */
{
  /* <h1>Ola</h1>
      <Evento />
      <Form/> 
     <h1>Renderização Condicional</h1>
     <Condicional/>
    */
}
/*Sempre tem que ter um elemento pai*/
/*Sempre usa className no react e não class porque é uma palavra reservada */
{
  /* 
      const meusItens = ['React', 'Vue', 'Angular']
    <h1>Renderização de Listas</h1>
    <OutraLista itens={meusItens}/>
    <OutraLista itens={[]}/> */
}



function App() {

  const [nome, setNome] = useState()

  return (
    <div className="App">
      <h1>State Lift</h1>
      <SeuNome setNome={setNome} />
      <Saudacao nome={nome}/>
      {nome}
    </div>
  )
}
export default App;
