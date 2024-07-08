
import React, { useState } from 'react';

const TaskForm = ({ onAdd }) => {
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    
    onAdd(newTask);
    setNewTask('');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8">
      <input
        type="text"
        className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
        placeholder="Add a new task..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button
        type="submit"
        className="px-8 rounded-r-lg bg-blue-500 text-white font-semibold p-4 uppercase border-t border-b border-r"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
