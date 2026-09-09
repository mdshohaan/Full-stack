import { useState } from "react";
import shortid from "shortid";
import Layout from "../components/layout/Layout";
import CreateTask from "../components/tasks/CreateTask";
import ShowTasks from "../components/tasks/ShowTasks";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [visibility, setVisibility] = useState("all");

  // const deleteTask = (id) => setTasks(tasks.filter((item) => item.id !== id));

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
    const newTask = tasks.map((item) => {
      if (item.id === id) {
        // item.isCompleted = !item.isCompleted
        // better way
        return {
          ...item,
          isCompleted: !item.isCompleted,
        };
      }
      return item;
    });
    setTasks(newTask);
  };

  const handleVisibility = (text) => {
    setVisibility(text);
  };

  const getFilteredTask = () => {
    if (visibility === "incompleted") {
      return tasks.filter((item) => !item.isCompleted);
    }
    if (visibility === "completed") {
      return tasks.filter((item) => item.isCompleted);
    }
    return tasks;
  };

  return (
    <div>
      <Layout>
        <h1>Task List</h1>
        <CreateTask addNewTask={addNewTask} />
        <div>
          <button onClick={() => handleVisibility("all")}>All</button>
          <button button onClick={() => handleVisibility("completed")}>
            Completed
          </button>
          <button button onClick={() => handleVisibility("incompleted")}>
            Not Completed
          </button>
        </div>
        <div> Visibility : {visibility} </div>
        <ShowTasks tasks={getFilteredTask()} toggleComplete={toggleComplete} />
      </Layout>
    </div>
  );
};

export default Tasks;
