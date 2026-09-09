const ShowTasks = ({ tasks, toggleComplete }) => {
  // const dateFormat = (date) => new Date(date).toLocaleDateString();

  return (
    <div>
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task) => (
            <li key={task.id} onClick={() => toggleComplete(task.id)}>
              {task.text}
            </li>
          ))}
        </ul>
      ) : (
        <p>There is no task</p>
      )}
    </div>
  );
};

export default ShowTasks;
