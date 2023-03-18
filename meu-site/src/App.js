/* import logo from './logo.svg'; */
import "./App.css";
/* import HelloWorld from './componentes/Hello.Word';
import Frase from './componentes/frase'; */
import SayMyName from "./componentes/SayMyName";
import Pessoas from "./componentes/Pessoas";
import Frase from "./componentes/Frase";



function App() {
  const nome = "Maria";

  /*  const newName = nome.toLocaleUpperCase()  */

  /*  function sum(a,b){
    return a + b
  } */

  /*   const url = 'https://via.placeholder.com/150' */

  return (
    /*Sempre tem que ter um elemento pai*/
    /*Sempre usa className no react e não class porque é uma palavra reservada */
    <div className="App">
      {/*   <div>
        <h1>Hello World</h1>
      <p>Meu primeiro App {name}</p>
      <p>Some: {sum(1, 2)}</p>
      <img src={url} alt="Minha Imagem"/>
      <Frase/>
      <HelloWorld/>
      <Frase/>  
      </div>
      /*Imagem dinimica com função url
      Exportação de helloworld.js e frases.js */}
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
    </div>
  );
}
export default App;
