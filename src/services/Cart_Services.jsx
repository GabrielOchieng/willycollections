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

export const CartCollectionRef = collection(db, "users"); // Define a reference for carts collection

class CartDataService {
  // addToCartOnFirebase = async (itemData, userId) => {
  //   console.log(itemData.id);
  //   // Include userId as an argument
  //   const userCartRef = doc(CartCollectionRef, userId); // Create a document reference for the user's cart

  //   try {
  //     const cartDoc = await getDoc(userCartRef); // Check if user's cart document exists

  //     // If document exists, add item to a subcollection named "carts" within the user's cart
  //     if (cartDoc.exists()) {
  //       const itemRef = collection(userCartRef, "carts"); // Create a reference to the "carts" subcollection
  //       const docRef = await addDoc(itemRef, itemData);
  //       console.log(docRef.id);
  //       return docRef.id; // Return the document ID of the added item
  //     } else {
  //       // Create a new document for the user's cart if it doesn't exist
  //       await setDoc(userCartRef, {}); // Set an empty document for the user's cart
  //       const itemRef = collection(userCartRef, "carts"); // Create a reference to the "carts" subcollection
  //       const docRef = await addDoc(itemRef, itemData);
  //       return docRef.id; // Return the document ID of the added item
  //     }
  //   } catch (error) {
  //     console.error("Error adding item to cart:", error);
  //     // Handle errors (optional)
  //   }
  // };

  addToCartOnFirebase = async (itemData, userId) => {
    console.log(itemData.id);
    try {
      const userCartRef = doc(CartCollectionRef, userId);

      // Check if cart document exists, creating it if necessary
      await getDoc(userCartRef)
        .then(() => {})
        .catch(() => {
          setDoc(userCartRef, {}); // Create empty cart if it doesn't exist
        });

      const itemRef = collection(userCartRef, "carts");
      const existingItemRef = getDoc(doc(itemRef, itemData.id)); // Check for existing item by ID

      const existingItemData = (await existingItemRef).data();

      // If item doesn't exist, add it
      if (!existingItemData) {
        const docRef = await addDoc(itemRef, itemData);
        return docRef.id;
      } else {
        console.log("Item already exists in cart. Consider updating quantity.");
        // Handle duplicate scenario (e.g., update quantity in existing document)
        // You can use updateDoc(existingItemRef, { quantity: existingItemData.quantity + 1 })
      }
    } catch (error) {
      console.error("Error adding item to cart:", error);
      // Handle errors (optional)
    }
  };

  fetchCartItems = async (userId) => {
    try {
      const userCartRef = doc(CartCollectionRef, userId); // Reference user's cart document

      const cartDoc = await getDoc(userCartRef); // Retrieve cart document

      if (cartDoc.exists()) {
        const itemsCollectionRef = collection(userCartRef, "carts"); // Reference "carts" subcollection
        const querySnapshot = await getDocs(itemsCollectionRef); // Fetch carts

        const cartItems = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        return cartItems;
      } else {
        // Handle the case where the user's cart document doesn't exist
        return []; // Or throw an error, depending on your logic
      }
    } catch (error) {
      console.error("Error fetching cart carts:", error);
      // Handle errors (optional)
    }
  };

  updateCartItem = async (itemData, userId, itemId) => {
    const cartRef = collection(db, "carts", userId);
    const docRef = doc(cartRef, itemId);
    await updateDoc(docRef, itemData);
  };

  deleteCartItem = async (userId, itemId) => {
    // Include userId and itemId as arguments
    const userCartRef = doc(CartCollectionRef, userId); // Reference to user's cart document
    console.log(userId);
    console.log(itemId);

    try {
      const cartDoc = await getDoc(userCartRef); // Check if user's cart document exists

      if (cartDoc.exists()) {
        const itemRef = collection(userCartRef, "carts"); // Reference to "carts" subcollection
        const itemToDeleteRef = doc(itemRef, itemId); // Reference to specific item document

        await deleteDoc(itemToDeleteRef); // Delete the item document
      } else {
        console.warn("Cart document not found for user:", userId); // Handle potential errors
      }
    } catch (error) {
      console.error("Error removing item from cart:", error);
      // Handle errors (optional)
    }
  };
}

export default new CartDataService();
