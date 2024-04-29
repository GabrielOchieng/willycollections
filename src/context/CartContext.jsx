import React, { createContext, useReducer, useEffect, useState } from "react";
import {
  collection,
  getDocs,
  doc,
  writeBatch,
  deleteDoc,
} from "firebase/firestore";
import { auth, db } from "../firebase";
import { CartReducer } from "./CartReducer";
import { onAuthStateChanged } from "firebase/auth";
import Cart_Services from "../services/Cart_Services";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(CartReducer, {
    shoppingCart: [],
    totalPrice: 0,
    totalQuantity: 0,
  });

  console.log(cart);

  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null); // Added state for order ID

  const addToCart = async (itemData) => {
    setLoading(true); // Set loading state

    try {
      const addedItemId = await Cart_Services.addToCartOnFirebase(
        itemData,
        userId
      );

      // Only dispatch success if the item was actually added (not a duplicate)
      if (addedItemId) {
        dispatch({
          type: "ADD_TO_CART_SUCCESS",
          payload: { ...itemData, id: addedItemId },
        });
      }
    } catch (error) {
      dispatch({ type: "ADD_TO_CART_FAILURE", error: error.message });
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  const loadCartFromFirebase = async () => {
    if (!userId) {
      // console.log("No user ID available yet.");
      return;
    }

    try {
      const fetchedCartItems = await Cart_Services.fetchCartItems(userId);
      dispatch({ type: "LOAD_FROM_FIREBASE", payload: fetchedCartItems });
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

  // ... CartReducer implementation (with REMOVE_FROM_CART case)
  const removeItemFromCart = async (userId, itemId) => {
    try {
      await Cart_Services.deleteCartItem(userId, itemId);
      dispatch({ type: "REMOVE_FROM_CART_SUCCESS", payload: itemId }); // Dispatch after successful deletion
    } catch (error) {
      dispatch({ type: "REMOVE_FROM_CART_FAILURE", error: error.message });
    }
  };

  const createOrder = async (orderDetails) => {
    dispatch({ type: "CREATE_ORDER_REQUEST" });
    try {
      const generatedOrderId = await Cart_Services.createOrder(
        userId,
        orderDetails
      );
      dispatch({ type: "CREATE_ORDER_SUCCESS", payload: generatedOrderId });
      alert("Order placed successfully! Your order ID is: " + generatedOrderId);

      return generatedOrderId;
    } catch (error) {
      // ... handle errors
      console.error("Error creating order:", error);
      dispatch({ type: "CREATE_ORDER_FAILURE", error: error.message });
      alert("Order placement failed. Please try again later.");
    }
  };

  // const createOrder = async (orderDetails) => {
  //   dispatch({ type: "CREATE_ORDER_REQUEST" });
  //   try {
  //     const generatedOrderId = await Cart_Services.createOrder(
  //       userId,
  //       orderDetails
  //     );
  //     dispatch({ type: "CREATE_ORDER_SUCCESS", payload: generatedOrderId });
  //     alert("Order placed successfully! Your order ID is: " + generatedOrderId);

  //     return generatedOrderId; // Return the generated order ID
  //   } catch (error) {
  //     // ... handle errors
  //     console.error("Error creating order:", error);
  //     dispatch({ type: "CREATE_ORDER_FAILURE", error: error.message }); // Dispatch failure action
  //     alert("Order placement failed. Please try again later.");
  //   }
  // };

  // const fetchOrder = async (orderId) => {
  //   setLoading(true); // Set loading state
  //   try {
  //     const fetchedOrder = await Cart_Services.fetchOrder(orderId);
  //     if (fetchedOrder) {
  //       dispatch({ type: "FETCH_ORDER_SUCCESS", payload: fetchedOrder });
  //     } else {
  //       console.warn("Order not found:", orderId);
  //     }
  //   } catch (error) {
  //     dispatch({ type: "FETCH_ORDER_FAILURE", error: error.message });
  //   } finally {
  //     setLoading(false); // Reset loading state
  //   }
  // };

  const fetchOrder = async (orderId) => {
    try {
      setLoading(true);
      const fetchedOrder = await Cart_Services.fetchOrder(orderId);
      if (fetchedOrder) {
        dispatch({ type: "FETCH_ORDER_SUCCESS", payload: fetchedOrder });
      } else {
        console.warn("Order not found:", orderId);
      }
    } catch (error) {
      dispatch({ type: "FETCH_ORDER_FAILURE", error: error.message });
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
    const { shoppingCart, totalPrice, totalQuantity } = cart;
    const newTotals = calculateCartTotal(shoppingCart);
    dispatch({ type: "UPDATE_TOTALS", payload: newTotals });
  }, [cart.shoppingCart]);

  return (
    <CartContext.Provider
      value={{
        ...cart,
        dispatch,
        loading,
        addToCart,
        loadCartFromFirebase,
        removeItemFromCart,
        createOrder,
        fetchOrder,
        orderId,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
