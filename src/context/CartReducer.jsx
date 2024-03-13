import React from "react";

export const CartReducer = (state, action) => {
  const { shoppingCart, totalPrice, totalQty } = state;

  let item;
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
        item["TotalItemPrice"] - item.price * item.qty;
        updatedQty = totalQty + 1;
        updatedPrice = totalPrice + item.price;

        return {
          shoppingCart: [item, ...shoppingCart],
          totalPrice: updatedPrice,
          totalQty: updatedQty,
        };
      }
  }
};

// import React from "react";

// export const CartReducer = (state, action) => {
//   const { shoppingCart, totalPrice, totalQty } = state;

//   let newItem;
//   let updatedPrice;
//   let updatedQty;

//   switch (action.type) {
//     case "ADD_TO_CART":
//       const check = shoppingCart.find((item) => item.itemID === action.id);
//       if (check) {
//         console.log("Item already added to cart");
//         return state;
//       } else {
//         newItem = { ...action.item, qty: 1 }; // Create new item with qty: 1
//         updatedQty = totalQty + 1;
//         updatedPrice = totalPrice + newItem.itemPrice; // Corrected calculation

//         return {
//           shoppingCart: [newItem, ...shoppingCart],
//           totalPrice: updatedPrice,
//           totalQty: updatedQty,
//         };
//       }
//     default:
//       return state;
//   }
// };
