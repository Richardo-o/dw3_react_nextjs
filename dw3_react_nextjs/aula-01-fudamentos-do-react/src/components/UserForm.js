import { useState } from "react";

const UserForm = () => {

    const[name, setName] = useState("")
    const[email, setEmail] = useState("")
    
    return(
        <>
            <h1>Fomulário de cadastro: </h1> 
            <br />
            <form>
                <input type="text"
                 placeholder="Digite seu nome"
                 value={name}
                 // "Quando o valor do input mudar, pegue onovo valor (e.target.value) e mande atualizar o estado name (setName())"
                 onChange={(e) => setName(e.target.value)}/>
                 
                <br /><br />
                <input type="email"
                 placeholder="Digite o seu email"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}/>
                <br />
                <button type="submit">Cadastrar</button>
            </form>
            <br /> <br />
            {name}
            {email}
        </>
    );
}
export default UserForm;
