import { useState } from 'react'
import './MyForm.css'

const MyForm = ( {user} ) => {

    // 3 - gerenciamento de dados
    const [name, setName] = useState(user ? user.name : '');
    const [email, setEmail]  = useState(user ? user.email : '');

    const handleName = (e) => {
        setName(e.target.value);
    }

    ///console.log(name);
    ///console.log(email);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Enviando o formulario");
        console.log(name, email);

        // 7 - limpar form
        setName("")
        setEmail("")
    };

    return (

    <div>
        {/* 5 - envio de form */}
       {/*  1 - criação de form */}
       <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">Nome:</label>
            <input type="text" name="name" placeholder='Digite seu Nome' onChange={handleName} value={name}/>
        </div>
        {/* 2 - label envolvendo input sugerido na doc */}
        <label>
            <span>E-mail</span>
            {/* 4 - simplificação de manipulação de state */}
            <input type="email" name="email" placeholder='Digite seu Email' onChange={(e) => setEmail(e.target.value)} value={email}/>
        </label>
            {/* 8 - textarea */}
            <label><span>Bio</span>
            <textarea name="bio"></textarea>
            </label>
            <input type="submit" value="Enviar" />
       </form>
    </div>
  );
};

export default MyForm