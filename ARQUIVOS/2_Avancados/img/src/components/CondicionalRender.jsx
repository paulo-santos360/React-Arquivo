import React, { useState } from 'react'

const CondicionalRender = () => {

  const [x] = useState(false);//false

  const [name, setName] = useState("Matheus")

  return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>Se x for true, sim</p>}
        {!x && <p>Agora x é falso</p>}
        {name === "João" ? (
            <div>
                <p>O nome é João</p>
            </div>
        ) : (
            <div>
                <p>Nome não é encontrado!</p>
            </div>
        )}
        <button onClick={() => setName("João")}>Clica aqui!</button>

    </div>
  )
}

export default CondicionalRender