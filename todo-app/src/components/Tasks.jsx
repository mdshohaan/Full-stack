import { useState } from "react";
import shortid from "shortid";
import CreateTask from "./CreateTask";
import ShowTask from "./ShowTask";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [visibility, setVisibility] = useState("");

  const addNewTask = (text) => {
    const task = {
      text,
      isCompleted: false,
      createdAt: new Date(),
      id: shortid.generate(),
    };
    setTasks([task, ...tasks]);
  };

  const toggleComplete = (id) => {
    const newTasks = tasks.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isCompleted: !item.isCompleted,
        };
      }
      return item;
    });
    setTasks(newTasks);
  };

  const filteredTask = () => {
    if (visibility === "complete")
      return tasks.filter((item) => item.isCompleted);
    if (visibility === "incomplete")
      return tasks.filter((item) => !item.isCompleted);
    return tasks;
  };

  // after all, this is new tasks state
  const changeTask = filteredTask();

  return (
    <div>
      <h1>Task</h1>
      <CreateTask addNewTask={addNewTask} />
      <div>
        <button onClick={() => setVisibility("all")}>All</button>
        <button onClick={() => setVisibility("complete")}>Complete</button>
        <button onClick={() => setVisibility("incomplete")}>Incomplete</button>
      </div>
      <p>{visibility}</p>
      <ShowTask tasks={changeTask} toggleComplete={toggleComplete} />
    </div>
  );
};

export default Tasks;
