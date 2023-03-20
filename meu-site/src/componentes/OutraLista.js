function OutraLista({itens}){
    return(
        <>
        <h3>Lista de Coisas Boas:</h3>
        {itens.map((item, index) => (
            <p key={index}>{item}</p>
        ))}
        </>
    )
}

export default OutraLista