const Description = (props) =>{
    // props (propriedades do componente)
    // props é um objeto {} e possui chaves e valores
    // EX: props.city = "Registro"
    return(
        <>
        <div> 
            <p>Cidade: {props.city}</p>
            <p>Idade: {props.age} anos</p>
            <p>Email: {props.email}</p>
        </div>
        
        </>
    )
}

export default Description;