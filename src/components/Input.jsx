import React from 'react'

const Input = (props) => {
  return (
    <input
      placeholder={props.placeholder}
      type={props.type}
      id={props.id}
      className={props.id}
      required={props.required}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default Input;