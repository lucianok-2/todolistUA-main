import React from "react";

export function TodoItem({ todo, cambiarEstado }) {
  const { id, task, completed } = todo;

  const handleOnChange = () => {
    cambiarEstado(id);
  };

  return (
    <li className={`list-group-item ${completed ? 'bg-danger text-white' : 'bg-success text-white'}`}>
      <input
        className="form-check-input me-2"
        type="checkbox"
        checked={completed}
        onChange={handleOnChange}
      />
      {task}
    </li>
  );
}