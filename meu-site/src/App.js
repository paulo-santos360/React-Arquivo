/* import logo from './logo.svg'; */
import './App.css';
import HelloWorld from './componentes/Hello.Word';

function App() {

  const name = 'PAULO'

  const newName = name.toLocaleUpperCase()

  function sum(a,b){
    return a + b
  }

  const url = 'https://via.placeholder.com/150'

  return (
    /*Sempre tem que ter um elemento pai*/
    /*Sempre usa className no react e não class porque é uma palavra reservada */
    <div className="App">
     {
      <div>
      <h1>Hello World</h1>
      <p>Meu primeiro App {name}</p>
      <p>Some: {sum(1, 2)}</p>
      <img src={url} alt="Minha Imagem"/>
      <HelloWorld/>
      </div>
      }
    </div>
    /*Imagem dinimica com função url*/
  );
}

export default App
