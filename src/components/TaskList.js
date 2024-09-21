import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, updateTask, deleteTask }) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
