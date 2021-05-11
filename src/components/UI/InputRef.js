import React from 'react';
import classes from './InputRef.module.css'

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.inputRef}>
      <label htmlFor={props.inputRef.id}>{props.label}</label>
      <input ref={ref} {...props.inputRef} />
    </div>
  );
});

export default Input;

