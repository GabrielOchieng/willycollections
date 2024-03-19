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

// import React, { createContext, useReducer, useEffect, useState } from "react";
// import { collection, getDocs, doc, writeBatch } from "firebase/firestore";
// import { auth, db } from "../firebase";
// import { CartReducer } from "./CartReducer";
// import { onAuthStateChanged } from "firebase/auth";

// export const CartContext = createContext();

// export const CartContextProvider = ({ children }) => {
//   const [cart, dispatch] = useReducer(CartReducer, {
//     shoppingCart: [],
//     totalPrice: 0,
//     totalQty: 0,
//   });
//   const [userId, setUserId] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const loadCartFromFirebase = async () => {
//     if (!userId) {
//       return;
//     }
//     const userCart = collection(db, "users", userId, "cart");
//     const snapshot = await getDocs(userCart);
//     const cartItems = snapshot.docs.map((doc) => ({
//       id: doc.id,
//       ...doc.data(),
//     }));
//     dispatch({ type: "LOAD_FROM_FIREBASE", payload: cartItems });
//   };

//   useEffect(() => {
//     // Initialize Firebase app (if needed)
//     // ... initialization code here ...

//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         console.log(user);
//         setUserId(user.uid);
//         loadCartFromFirebase();
//       }
//     });
//   }, []);

//   useEffect(() => {
//     if (userId && cart.shoppingCart) {
//       const cartRef = collection(db, "users", userId, "cart");
//       console.log(userId);
//       const batch = writeBatch(db);
//       cart.shoppingCart.forEach((item) => {
//         batch.set(doc(cartRef, item.id), item);
//       });
//       batch.commit();
//     }
//   }, [cart.shoppingCart, userId]);

//   // ... CartReducer implementation ...

//   const fetchCartItems = async () => {
//     setLoading(true);
//     try {
//       await loadCartFromFirebase();
//     } catch (error) {
//       console.error("Error fetching cart items:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <CartContext.Provider
//       value={{ ...cart, dispatch, loading, fetchCartItems }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

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
      console.log("No user ID available yet.");
      return;
    }
    console.log("Fetching cart for user:", userId);
    const userCart = collection(db, "users", userId, "cart");
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
        console.log("User authenticated:", user);
        setUserId(user.uid);
        loadCartFromFirebase();
      } else {
        console.log("User not authenticated.");
      }
    });
  }, []);

  useEffect(() => {
    if (userId && cart.shoppingCart) {
      console.log("Updating cart in Firestore for user:", userId);
      const cartRef = collection(db, "users", userId, "cart");
      const batch = writeBatch(db);
      cart.shoppingCart.forEach((item) => {
        batch.set(doc(cartRef, item.id), item);
      });
      try {
        batch.commit();
        console.log("Cart updated successfully.");
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

  return (
    <CartContext.Provider
      value={{ ...cart, dispatch, loading, fetchCartItems }}
    >
      {children}
    </CartContext.Provider>
  );
};
