// import React, { createContext, useReducer, useEffect } from "react";
// import { CartReducer } from "./CartReducer";

// export const CartContext = createContext();

// export const CartContextProvider = ({ children }) => {
//   const [cart, dispatch] = useReducer(CartReducer, {
//     shoppingCart: [],
//     totalPrice: 0,
//     totalQty: 0,
//   });

//   console.log(Array.isArray(cart.shoppingCart));
//   // console.log(cart.shoppingCart);

//   // 1. Handle Potential Undefined State:
//   useEffect(() => {
//     // Use a conditional check for cart.shoppingCart
//     if (cart.shoppingCart) {
//       localStorage.setItem("shoppingCart", JSON.stringify(cart.shoppingCart));
//     }
//   }, [cart.shoppingCart]);

//   // Load cart data from local storage on component mount
//   useEffect(() => {
//     const cartData = localStorage.getItem("shoppingCart");
//     if (cartData) {
//       dispatch({
//         type: "LOAD_FROM_LOCAL_STORAGE",
//         payload: JSON.parse(cartData),
//       });
//     }
//   }, []);

//   return (
//     <CartContext.Provider value={{ ...cart, dispatch }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

import React, { createContext, useReducer, useEffect, useState } from "react";
// import { firebase } from "firebase/app"; // Import Firebase
import { CartReducer } from "./CartReducer";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, doc, writeBatch } from "firebase/firestore";
import { auth, db } from "../firebase";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(CartReducer, {
    shoppingCart: [],
    totalPrice: 0,
    totalQty: 0,
  });
  const [userId, setUserId] = useState(null); // Store user ID for Firestore access
  const [loading, setLoading] = useState(false); // Add a loading state

  // ... Existing code for loadCartFromFirebase and useEffect for initialization ...
  const loadCartFromFirebase = async () => {
    if (!userId) {
      return;
    }
    const userCart = collection(db, "users", userId, "cart"); // Access user's cart collection
    const snapshot = await getDocs(userCart);

    const cartItems = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(), // Extract cart item data
    }));
    console.log(cartItems);

    dispatch({ type: "LOAD_FROM_FIREBASE", payload: cartItems });
  };

  useEffect(() => {
    // Initialize Firebase app
    (async () => {
      // const app = firebase.initializeApp(firebaseConfig); // Replace with your Firebase config
      // const auth = getAuth(app);

      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUserId(user.uid);
          loadCartFromFirebase();
        }
      });
    })();
  }, []);

  // Update cart data in Firebase on changes
  useEffect(() => {
    if (userId && cart.shoppingCart) {
      const cartRef = collection(db, "users", userId, "cart");
      const batch = writeBatch(db);

      cart.shoppingCart.forEach((item) => {
        batch.set(doc(cartRef, item.id), item);
      });

      batch.commit();
    }
  }, [cart.shoppingCart, userId]);

  const fetchCartItems = async () => {
    setLoading(true); // Set loading state to true
    try {
      await loadCartFromFirebase();
    } catch (error) {
      // Handle any errors during fetching
      console.error("Error fetching cart items:", error);
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <CartContext.Provider
      value={{ ...cart, dispatch, loading, fetchCartItems }}
    >
      {children}
    </CartContext.Provider>
  );
};
