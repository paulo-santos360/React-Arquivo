import Button from "./eventos/Button"

function Evento({ numero }){

    function meuEvento(){
        console.log(`Ativando Primeiro Evento`)
    }

    function segundoEvento(){
        console.log(`Ativando Segundo Evento`)
    }

    return(
        <div>
            <p>Clique para disparar um evento</p>
            <Button event={meuEvento} text="Ativando o Primeiro Evento" />
            <Button event={segundoEvento} text="Ativando o Segundo Evento" />

{/*             <button onClick={meuEvento}>Ativar!</button>
 */}        </div>
    )
}

export default Evento