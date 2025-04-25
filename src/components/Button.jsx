import React from 'react'

const Button = ({id, type, btnClass, child}) => {
  return (
    <button id={id} type={type} className={btnClass}>
      {child}
    </button>
  )
}

export default Button;