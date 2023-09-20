import ManageData from './components/ManageData'

import guarana from './assets/guarana.jpg';
import './App.css';
import ListRender from './components/ListRender';
import CondicionalRender from './components/CondicionalRender'
//import ShowUserName from './components/ShowUserName'
/* import { useState } from 'react';
 */import CardDetails from './components/CardDetails'
 import Fragment from './components/Fragment'
 import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import { useState } from 'react';
import ChangeMessage from './components/ChangeMessage';

function App() {

   /* const name = "ze";
   const [userName] = useState("Maria")  */

   const cars = [
    {id:1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0},
    {id:2, brand: "Kia", color: "verde", newCar: false, km: 212},
    {id:3, brand: "Renalt", color: "roxo", newCar: false, km: 3242},
   ];

   function showMessage(){
    console.log("ola msg")
   }

   const [message, setMessage] = useState("");

   const handleMessage = (msg) => {
    setMessage(msg);
   }
 
  return (
    <div className="App">
    {/*  imagem em public */}
    <div>
      <img src="/fanta.jpg" className="text" alt="fanta" />
    </div>
     {/*  imagem em asset */}
     <div>
      <img src={guarana} className="text" alt="guarana" />
    </div>
      <ManageData />
      <ListRender />
      <CondicionalRender />
      {/* props  */}
{/*       <ShowUserName name="João" />
 */}     
{/*         <ShowUserName name={userName} />  
 */}   {/*    destructuring */}
    <CardDetails brand="VW" km={10000} color="Azul" newCar={false}/>

    {/* Reaproveitamento */}
    <CardDetails brand="Ford" km={10000} color="preto" newCar={true}/>
    <CardDetails brand="VW" km={10000} color="Azul" newCar={false}/>

{/*     loop em array de objetos
 */} 
 {cars.map((car) => (
    <CardDetails key={car.id} brand={cars.brand} km={cars.km} color={car.color} newCar={car.newCar}/>
    ))}

   {/*  fragment */}
    <Fragment propFragment="teste" /> 

    {/* children */}
    <Container> 
      <p>E este é o novo conteúdo</p>
    </Container>

    <Container> 
      <p>E este é o novo conteúdo 2</p>
    </Container>

    {/* Executar função */}
    <ExecuteFunction myFunction={showMessage}/>

    {/* state lift */}
    <Message msg={message} />
    <ChangeMessage handleMessage={handleMessage} />
 </div>
  );
}

export default App;
