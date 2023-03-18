/* function Pessoa(props){
    return(
        <div>
            <img src={props.foto} alt={props.nome} />
            <p>Nome:{props.nome}</p>
            <p>Idade:{props.idade}</p>
            <p>Profissao:{props.profissao}</p>

        </div>
    )
} */


function Pessoa({nome, idade, profissao, foto}){
    return(
        <div>
            <img src={foto} alt={nome} />
            <p>Nome:{nome}</p>
            <p>Idade:{idade}</p>
            <p>Profissao:{profissao}</p>
        </div>
    )
}
export default Pessoa