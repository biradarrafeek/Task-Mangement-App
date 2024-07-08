
import React from 'react';

const TaskList = ({ tasks, onDelete, onToggle }) => {
  return (
    <div className="divide-y divide-gray-200">
      {tasks.map((task) => (
        <div
          key={task.id}
          className={`py-4 flex justify-between items-center ${task.completed ? 'bg-gray-100' : ''}`}
        >
          <span
            className={`text-lg ${task.completed ? 'line-through text-gray-500' : 'text-black'}`}
            onClick={() => onToggle(task.id)}
          >
            {task.title}
          </span>
          <div>
            <button
              onClick={() => onDelete(task.id)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
