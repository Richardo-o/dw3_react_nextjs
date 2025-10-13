const TaskList = ({ tasks }) => {
  // Retorno Condicional
  if (tasks.length === 0) {
    return <p>Não tem tarefas para mostrar</p>;
  }

  return (
    <>
      <div>
        <h4>Lista de Tarefas</h4>
        <ol>
          {tasks.map((task) => (
            <li key={task.id}>
              {task.id} - {task.text}
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default TaskList;
