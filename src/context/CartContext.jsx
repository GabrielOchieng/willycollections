import React, { createContext, useReducer, useEffect, useState } from "react";
import { collection, getDocs, doc, writeBatch } from "firebase/firestore";
import { auth, db } from "../firebase";
import { CartReducer } from "./CartReducer";
import { onAuthStateChanged } from "firebase/auth";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(CartReducer, {
    shoppingCart: [],
    totalPrice: 0,
    totalQty: 0,
  });
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(false);

  const loadCartFromFirebase = async () => {
    if (!userId) {
      // console.log("No user ID available yet.");
      return;
    }
    console.log("Fetching cart for user:", userId);
    const userCart = collection(db, "users", userId, "carts");

    try {
      const snapshot = await getDocs(userCart);
      const cartItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      dispatch({ type: "LOAD_FROM_FIREBASE", payload: cartItems });
      console.log("Cart items fetched:", cartItems);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  useEffect(() => {
    // Initialize Firebase app (if needed)
    // ... initialization code here ...

    onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log("User authenticated:", user);
        setUserId(user.uid);
        loadCartFromFirebase();
      } else {
        console.log("User not authenticated.");
      }
    });
  }, []);

  useEffect(() => {
    if (userId && cart.shoppingCart) {
      // console.log("Updating cart in Firestore for user:", userId);
      const cartRef = collection(db, "users", userId, "carts");
      const batch = writeBatch(db);
      cart.shoppingCart.forEach((item) => {
        batch.set(doc(cartRef, item.id), item);
      });
      try {
        batch.commit();
        // console.log("Cart updated successfully.");
      } catch (error) {
        console.error("Error updating cart:", error);
      }
    }
  }, [cart.shoppingCart, userId]);

  // ... CartReducer implementation ...

  const fetchCartItems = async () => {
    setLoading(true);
    try {
      await loadCartFromFirebase();
    } catch (error) {
      console.error("Error fetching cart items:", error);
    } finally {
      setLoading(false);
    }
  };

  const calculateCartTotal = (cartItems) => {
    let totalPrice = 0;
    let totalQuantity = 0;

    cartItems.forEach((item) => {
      totalPrice += item.price * item.quantity;
      totalQuantity += item.quantity;
    });

    return { totalPrice, totalQuantity };
  };

  useEffect(() => {
    const { shoppingCart, totalPrice, totalQty } = cart;
    const newTotals = calculateCartTotal(shoppingCart);
    dispatch({ type: "UPDATE_TOTALS", payload: newTotals });
  }, [cart.shoppingCart]);

  return (
    <CartContext.Provider
      value={{ ...cart, dispatch, loading, fetchCartItems }}
    >
      {children}
    </CartContext.Provider>
  );
};
