import {useReducer} from 'react';
import CartContext from './cart-context';
import {defaultCartState, cartReducer} from './cart-reducer';

function CartProvider(props) {

  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({type: 'ADD', payload: item});
  }
  const removeItemToCartHandler = (item) => {
    dispatchCartAction({type: 'REMOVE', payload: item});
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;

