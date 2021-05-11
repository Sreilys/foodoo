import React, {useState, useContext} from 'react';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import Modal from '../UI/Modal';
import Checkout from './Checkout';
import classes from './Cart.module.css'

function Cart(props) {
  const [isCheckout, setIsCheckout] = useState(false);

  const cartCtx = useContext(CartContext);

  const totalAmount = cartCtx.totalAmount.toFixed(2);
  const hasItems = cartCtx.items.length > 0;

  const cartItems = cartCtx.items;

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item, amount: 1});
  }

  const cartItemRemoveHandler = (item) => {
    cartCtx.removeItem(item)
  }

  const handleOrder = () => {
    setIsCheckout(true);
  }

  return (
    <Modal onClose={props.onClose}>
      <ul>
        {cartItems.map(item => (
          <CartItem 
            key={item.id} 
            name={item.name} 
            amount={item.amount} 
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item)}
            onAdd={cartItemAddHandler.bind(null, item)}
            >{item.name}</CartItem>
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalAmount}</span>
      </div>
      {isCheckout && <Checkout onCancel={props.onClose}/>}
      {!isCheckout && 
        <div className={classes.actions}>
          <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
          {hasItems && <button className={classes.button} onClick={handleOrder}>Order</button>}
        </div>
      }
    </Modal>
  );
}

export default Cart;

