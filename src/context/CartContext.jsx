import React, { createContext, useReducer, useEffect } from "react";
import { CartReducer } from "./CartReducer";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(CartReducer, {
    shoppingCart: [],
    totalPrice: 0,
    totalQty: 0,
  });

  console.log(Array.isArray(cart.shoppingCart));
  // console.log(cart.shoppingCart);

  // 1. Handle Potential Undefined State:
  useEffect(() => {
    // Use a conditional check for cart.shoppingCart
    if (cart.shoppingCart) {
      localStorage.setItem("shoppingCart", JSON.stringify(cart.shoppingCart));
    }
  }, [cart.shoppingCart]);

  // Load cart data from local storage on component mount
  useEffect(() => {
    const cartData = localStorage.getItem("shoppingCart");
    if (cartData) {
      dispatch({
        type: "LOAD_FROM_LOCAL_STORAGE",
        payload: JSON.parse(cartData),
      });
    }
  }, []);

  return (
    <CartContext.Provider value={{ ...cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
