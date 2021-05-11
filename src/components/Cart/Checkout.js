import useInput from '../../hooks/useInput'
import classes from './Checkout.module.css';

const Checkout = (props) => {
  const {
    value: name,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameValueChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: nameReset
  } = useInput(value => value.trim() !== '');

  const {
    value: street,
    isValid: streetIsValid,
    hasError: streetHasError,
    valueChangeHandler: streetValueChangeHandler,
    inputBlurHandler: streetInputBlurHandler,
    reset: streetReset
  } = useInput(value => value.trim() !== '');

  const {
    value: postal,
    isValid: postalIsValid,
    hasError: postalHasError,
    valueChangeHandler: postalValueChangeHandler,
    inputBlurHandler: postalInputBlurHandler,
    reset: postalReset
  } = useInput(value => value.trim() !== '');

  const {
    value: city,
    isValid: cityIsValid,
    hasError: cityHasError,
    valueChangeHandler: cityValueChangeHandler,
    inputBlurHandler: cityInputBlurHandler,
    reset: cityReset
  } = useInput(value => value.trim() !== '');

  const confirmHandler = (event) => {
    event.preventDefault();
    alert(`Order confirmed for ${name} ${street} ${postal} ${city}`);
    nameReset();
    streetReset();
    postalReset();
    cityReset();
  };

  let isFormValid = false;
  if (nameIsValid && streetIsValid && postalIsValid && cityIsValid) {
    isFormValid = true;
  }

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameHasError ? (`${classes.control} ${classes.invalid}`) : classes.control}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameValueChangeHandler} onBlur={nameInputBlurHandler} />
        {nameHasError && <p className={classes['invalid-text']}>Name should not be empty</p>}
      </div>
      <div className={streetHasError ? (`${classes.control} ${classes.invalid}`) : classes.control}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' onChange={streetValueChangeHandler} onBlur={streetInputBlurHandler} />
        {streetHasError && <p className={classes['invalid-text']}>Street should not be empty</p>}
      </div>
      <div className={postalHasError ? (`${classes.control} ${classes.invalid}`) : classes.control}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' onChange={postalValueChangeHandler} onBlur={postalInputBlurHandler} />
        {postalHasError && <p className={classes['invalid-text']}>Postal Code should not be empty</p>}
      </div>
      <div className={cityHasError ? (`${classes.control} ${classes.invalid}`) : classes.control}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' onChange={cityValueChangeHandler} onBlur={cityInputBlurHandler} />
        {cityHasError && <p className={classes['invalid-text']}>City should not be empty</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        {isFormValid ? (
          <button className={classes.submit}>Confirm</button>
        ) : (<button className={classes.submit} disabled>Confirm</button>)}
      </div>
    </form>
  );
};

export default Checkout;
