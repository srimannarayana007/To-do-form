import React, { useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filterTasks = (status) => {
    setFilter(status);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddTask addTask={addTask} />
      <TaskList
        tasks={filteredTasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
      <div className="filter-buttons">
        <button onClick={() => filterTasks("all")}>All</button>
        <button onClick={() => filterTasks("completed")}>Completed</button>
        <button onClick={() => filterTasks("pending")}>Pending</button>
      </div>
    </div>
  );
}

export default App;
