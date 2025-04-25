import React, { useState } from 'react'
import Button from './Button'
import Input from './Input'

const InputTodos = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim()) {
      addTodo(inputValue)
      setInputValue('')
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Add a new task"
          id="todo-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button type="submit" id="tbtn" btnClass="tbtn" child="add" />
      </form>
    </div>
  )
}

export default InputTodos;