import React from "react";

const TodoTings = ({ todo, deleteTodo, toggleTodo }) => {
  return (
    <div>
      <input
        type="checkbox"
        className="checkbox"
        checked={todo.done}
        onChange={() => toggleTodo(todo.id)}
      />
      <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
        {todo.task}
      </span>
      <button
        className="dltbtn"
        onClick={() => deleteTodo(todo.id)}
      >
        delete
      </button>
    </div>
  );
};

export default TodoTings;