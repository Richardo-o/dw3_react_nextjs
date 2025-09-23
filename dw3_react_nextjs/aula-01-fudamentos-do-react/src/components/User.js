// Expressões js dentro do HTML

const User = () => {
    //Criando variáveis para o componente
    const name = "Ricardo Estevam";
  return (
    <>
    {/* Esse é o comentário em JSX */}
      <div>Usuário Logado: <strong>{name}</strong></div>
    </>
  );
};

export default User;
