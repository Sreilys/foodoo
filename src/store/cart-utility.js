export const addItemToCart = (cartItems, cartItemToAdd, quantityKey = "quantity") => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id ?
        { ...cartItem, [quantityKey]: cartItem[quantityKey] + cartItemToAdd[quantityKey] }
        : cartItem
    )
  };
  return [...cartItems, { ...cartItemToAdd, [quantityKey]: cartItemToAdd[quantityKey] }];
};


export const removeItemFromCart = (cartItems, cartItemToRemove, quantityKey = "quantity") => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  );
  if (existingCartItem[quantityKey] === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }
  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, [quantityKey]: cartItem[quantityKey] - 1 }
      : cartItem
  );
};
