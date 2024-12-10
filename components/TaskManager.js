// src/app/components/TaskManager.js
'use client';

import React, { useState } from 'react';

function TaskManager() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    const newTask = { id: Date.now(), title: title, completed: false };
    setTasks((prevTasks) => [...prevTasks, newTask]); 
  };

  const toggleTaskCompletion = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed }   : task
      )
    );
  };

  return (
    <div>
      <h1>Task Manager</h1>

      <button onClick={() => addTask('New Task')}>Add Task</button>

      {/* Task list */}
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title} 
            {task.completed ? "(Completed)" : "(Incomplete)"}
            <button onClick={() => toggleTaskCompletion(task.id)}>
              Toggle Completion
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;
