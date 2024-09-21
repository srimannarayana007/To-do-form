import React, { useState } from "react";

function EditTask({ task, handleEdit }) {
  const [taskName, setTaskName] = useState(task.name);
  const [category, setCategory] = useState(task.category);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEdit({ ...task, name: taskName, category });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button type="submit">Save</button>
    </form>
  );
}

export default EditTask;
