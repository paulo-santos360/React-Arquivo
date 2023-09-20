const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e)
        console.log('ativou o evento')
    }

    const renderSomething = (x) => {
        if(x) {
            return <h1>Renderizar isso !</h1>

        } else {
            return <h1>Também posso Renderizar isso !</h1>
        }
    }

 return (
    <div>
        <div>
            <button onClick={handleMyEvent}>Click Aqui</button>
        </div>
        <div>
            <button onClick={() => console.log('clicou')}>Inline</button>
        </div>
        <div>
            <button onClick={() => {
                if (true) {
                    console.log("Isso deveria não existir")
                }
            }}>Não usar essa logica</button>
        </div>
        {renderSomething(true)}
        {renderSomething(false)}
    </div>
 )
};

export default Events;