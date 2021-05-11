import React, {useState, useEffect, useContext} from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

function HeaderCartButton(props) {
  const [btnAnimate, setBtnAnimate] = useState(false);

  const {items} = useContext(CartContext);

  const numberOfCartItems = items.reduce((accumulator, item) => {
    return accumulator + item.amount;
  }, 0);

  const btnClasses =  `${classes.button} ${btnAnimate && classes.bump}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnAnimate(true);
    
    const timer = setTimeout(() => {
      setBtnAnimate(false);
    }, 300)

    return () => {
      clearTimeout(timer);
    }
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;
