// import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
// import { db, storage } from "../firebase";
// import {
//   collection,
//   doc,
//   getDoc,
//   getDocs,
//   updateDoc,
//   deleteDoc,
//   setDoc,
//   addDoc,
//   serverTimestamp,
// } from "firebase/firestore";

// export const CartCollectionRef = collection(db, "carts");

// class CartDataService {
//   addToCartOnFirebase = async (itemData, userId) => {
//     // Include userId as an argument
//     const cartRef = collection(db, "users", userId, "carts"); // Use userId here
//     const docRef = await addDoc(cartRef, itemData);
//     return docRef.id; // Return the document ID
//   };

import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  setDoc,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

export const CartCollectionRef = collection(db, "carts"); // Define a reference for carts collection

class CartDataService {
  addToCartOnFirebase = async (itemData, userId) => {
    // Include userId as an argument
    const userCartRef = doc(CartCollectionRef, userId); // Create a document reference for the user's cart

    try {
      const cartDoc = await getDoc(userCartRef); // Check if user's cart document exists

      // If document exists, add item to a subcollection named "items" within the user's cart
      if (cartDoc.exists()) {
        const itemRef = collection(userCartRef, "items"); // Create a reference to the "items" subcollection
        const docRef = await addDoc(itemRef, itemData);
        return docRef.id; // Return the document ID of the added item
      } else {
        // Create a new document for the user's cart if it doesn't exist
        await setDoc(userCartRef, {}); // Set an empty document for the user's cart
        const itemRef = collection(userCartRef, "items"); // Create a reference to the "items" subcollection
        const docRef = await addDoc(itemRef, itemData);
        return docRef.id; // Return the document ID of the added item
      }
    } catch (error) {
      console.error("Error adding item to cart:", error);
      // Handle errors (optional)
    }
  };

  fetchCartItems = async (userId) => {
    try {
      const cartRef = collection(db, "carts", userId);
      const querySnapshot = await getDocs(cartRef);

      const cartItems = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      return cartItems;
    } catch (error) {
      console.error("Error fetching cart items:", error);
      // Handle errors (optional)
    }
  };

  updateCartItem = async (itemData, userId, itemId) => {
    const cartRef = collection(db, "carts", userId);
    const docRef = doc(cartRef, itemId);
    await updateDoc(docRef, itemData);
  };

  deleteCartItem = async (userId, itemId) => {
    const cartRef = collection(db, "carts", userId);
    const docRef = doc(cartRef, itemId);
    await deleteDoc(docRef);
  };
}

export default new CartDataService();
