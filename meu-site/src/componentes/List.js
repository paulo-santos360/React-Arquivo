/*Fragmento js*/
import Item from "./Item"

function List(){
    return(
        <>
            <h1>
                <ul>
                    <Item marca="Ferrari"/>
                    <Item marca="Fiat"/>
                    <Item marca="Renault"/>

                </ul>
            </h1>
        </>
    )
}

export default List