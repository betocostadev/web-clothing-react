export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);
  if (existingCartItem) {
    // return new array with the items added
    return cartItems.map(
      cartItem => cartItem.id === cartItemToAdd.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
      );
  }
  return [ ...cartItems, { ...cartItemToAdd, quantity: 1 }]
};
