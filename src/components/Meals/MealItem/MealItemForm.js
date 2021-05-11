import React, {useRef, useState} from 'react';
import classes from './MealItemForm.module.css'
import InputRef from '../../UI/InputRef'

function MealItemForm(props) {
  const [amountIsValid, setAmountIsValid] = useState(true)

  const amountInputRef = useRef();

  const submitHandler = event => {
    event.preventDefault();
    const enteredAmountVal = amountInputRef.current.value;
    const enteredAmount = Number(enteredAmountVal);
    if (enteredAmount < 1 || enteredAmount > 5) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmount);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <InputRef ref={amountInputRef} label="Amount" inputRef={{
        id: 'amount', 
        type: 'number', 
        min: '1', 
        max: '5', 
        step: '1', 
        defaultValue: '1'
      }}/>
      <button>+ Add</button>
      {!amountIsValid && <p>Please Add a valid amount</p>}
    </form>
  );
}

export default MealItemForm;
