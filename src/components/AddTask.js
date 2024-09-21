import React, { useState } from "react";

function AddTask({ addTask }) {
  const [taskName, setTaskName] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName && category) {
      const newTask = {
        id: Date.now(),
        name: taskName,
        category,
        completed: false,
      };
      addTask(newTask);
      setTaskName("");
      setCategory("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTask;
