function Form(){

    function cadastrarUsuario(e){
        e.preventDefault()
        console.log("Cadastrar o Usuario")
    }
    return(
        <div>
            <h1>Meu Cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="test" placeholder="Digite seu Nome"/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>
    )
}
export default Form