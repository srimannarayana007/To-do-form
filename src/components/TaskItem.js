import React, { useState } from "react";
import EditTask from "./EditTask";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

function TaskItem({ task, updateTask, deleteTask }) {
  const [isEditing, setIsEditing] = useState(false);

  const toggleComplete = () => {
    updateTask({ ...task, completed: !task.completed });
  };

  const handleEdit = (updatedTask) => {
    updateTask(updatedTask);
    setIsEditing(false);
  };

  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      {isEditing ? (
        <EditTask task={task} handleEdit={handleEdit} />
      ) : (
        <>
          <span onClick={toggleComplete}>
            {task.name} ({task.category})
          </span>
          <button onClick={() => setIsEditing(true)}>
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <button onClick={() => deleteTask(task.id)}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </>
      )}
    </div>
  );
}

export default TaskItem;
