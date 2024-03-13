import React from "react";

export const CartReducer = (state, action) => {
  const { shoppingCart, totalPrice, totalQty } = state;

  let item;
  let index;
  let updatedPrice;
  let updatedQty;

  switch (action.type) {
    case "ADD_TO_CART":
      const check = shoppingCart.find((item) => item.itemID === action.id);
      if (check) {
        console.log("Item already added to cart");
        return state;
      } else {
        item = action.item;
        item["qty"] = 1;
        item["TotalItemPrice"] - item.ItemPrice * item.qty;
        updatedQty = totalQty + 1;
        updatedPrice = totalPrice + item.ItemPrice;

        return {
          shoppingCart: [item, ...shoppingCart],
          totalPrice: updatedPrice,
          totalQty: updatedQty,
        };
      }
  }
};
