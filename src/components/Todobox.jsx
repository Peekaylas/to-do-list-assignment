import React, { useState } from 'react'
import { todos as initialTodos } from "../data/todos"
import TodoTings from "./TodoTings"

const Todobox = () => {
  const [todos, setTodos] = useState(initialTodos)

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ))
  }

  return (
    <>
      <div className="big-box">
        <div className="small-box">
          <h2>Your List</h2>
        </div>
        <div className="outline">
          {todos.map((todo) => (
            <TodoTings
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Todobox;