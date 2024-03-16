// import React from "react";

// export const CartReducer = (state, action) => {
//   const { shoppingCart, totalPrice, totalQty } = state;

//   let item;
//   let index;
//   let updatedPrice;
//   let updatedQty;

//   switch (action.type) {
//     case "ADD_TO_CART":
//       const check = shoppingCart.find((item) => item.itemID === action.id);
//       if (check) {
//         console.log("Item already added to cart");
//         return state;
//       } else {
//         item = action.item;
//         item["qty"] = 1;
//         item["TotalItemPrice"] - item.price * item.qty;
//         updatedQty = totalQty + 1;
//         updatedPrice = totalPrice + item.price;

//         return {
//           shoppingCart: [item, ...shoppingCart],
//           totalPrice: updatedPrice,
//           totalQty: updatedQty,
//         };
//       }
//   }
// };

import React from "react";

export const CartReducer = (state, action) => {
  // Ensure state has a default value to avoid errors:
  const { shoppingCart = [], totalPrice = 0, totalQty = 0 } = state;

  switch (action.type) {
    case "ADD_TO_CART":
      const check = shoppingCart.find((item) => item.itemID === action.id);
      if (check) {
        console.log("Item already added to cart");
        return state;
      } else {
        // 1. Fixed syntax error:
        const item = {
          ...action.item,
          qty: 1,
          TotalItemPrice: action.item.price * 1,
        }; // Use correct assignment for TotalItemPrice

        const updatedQty = totalQty + 1;
        const updatedPrice = totalPrice + action.item.price;

        return {
          shoppingCart: [item, ...shoppingCart],
          totalPrice: updatedPrice,
          totalQty: updatedQty,
        };
      }
    // Handle other actions as needed...
    default:
      return state;
  }
};
