import "./App.css";
import MyComponent from "./components/MyComponent";
import Title from "./components/Title";
import { useState } from "react";

function App() {
  const n = 15;
  const [name] = useState("Zé");

  const redTitle = true

  return (
    <div className="App">
      {/*  CSS global */}
      <h1>React CSS</h1>
      {/*  CSS component */}
      <MyComponent />
      {/* CSS INLINE */}
      <p style={{ color: "blue", padding: "10px", borderTop: "1px solid red" }}>
        Este componente é inline
      </p>
      {/* CSS INLINE DINAMICO */}
      <h2 style={n < 10 ? { color: "red" } : { color: "pink" }}>
        CSS dinâmico
      </h2>
      <h2 style={n > 10 ? { color: "red" } : { color: "pink" }}>
        CSS dinâmico
      </h2>
      <h2
        style={
          name === "Zé" 
          ? { color: "red", backgroundColor: "#123" } 
          : null}
      >
        CSS dinâmico
      </h2>
       {/* CSS CLASSES DINAMICA*/}
       <h2 className={redTitle ? "red-title" : "title"}>Este titulo vai ter classes dinamica</h2>
       {/* CSS Modules*/}
       <Title />
       
    </div>
  );
}

export default App;
