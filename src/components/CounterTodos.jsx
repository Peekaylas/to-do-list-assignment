import React from 'react'
import {todos} from '../data/todos'

const CounterTodos = () => {
  const completedTodos = todos.filter(todo => todo.done).length
  return (
    <div>
      <p>
        <span>
          Completed: {completedTodos} / {todos.length}
        </span>
      </p>
    </div>
  )
}

export default CounterTodos;