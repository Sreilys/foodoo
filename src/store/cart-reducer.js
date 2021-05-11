import {addItemToCart, removeItemFromCart} from './cart-utility';

export const defaultCartState = {
  items: [],
  totalAmount: 0
}

export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':      
      const increaseTotalAmount = state.totalAmount + action.payload.price * action.payload.amount;
      let updatedOnAddToCart = addItemToCart(state.items, action.payload, "amount");
      return {
        items: updatedOnAddToCart,
        totalAmount: increaseTotalAmount
      }
    case 'REMOVE':
      const decreaseTotalAmount = state.totalAmount - action.payload.price;
      let updatedOnRemoveFromCart = removeItemFromCart(state.items, action.payload, "amount");
      return {
        items: updatedOnRemoveFromCart,
        totalAmount: decreaseTotalAmount
      }
    default:
      return defaultCartState;
  }
}
