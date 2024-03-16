export const CartReducer = (state, action) => {
  // Ensure state has default values:
  const { shoppingCart = [], totalPrice = 0, totalQty = 0 } = state;

  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItemIndex = shoppingCart.findIndex(
        (item) => item.itemID === action.item.itemID
      );

      // If item already exists, update its quantity:
      if (existingItemIndex !== -1) {
        const updatedQty = shoppingCart[existingItemIndex].qty + 1;
        const updatedPrice = totalPrice + action.item.price;

        return {
          ...state,
          shoppingCart: shoppingCart.map((item, index) =>
            index === existingItemIndex ? { ...item, qty: updatedQty } : item
          ),
          totalPrice: updatedPrice,
          totalQty: state.totalQty + 1,
        };
      } else {
        // If item is new, add it to the cart:
        const updatedCart = [...shoppingCart, { ...action.item, qty: 1 }];
        return {
          ...state,
          shoppingCart: updatedCart,
          totalPrice: totalPrice + action.item.price,
          totalQty: totalQty + 1,
        };
      }
    }
    // Handle other actions as needed...
    default:
      return state;
  }
};
