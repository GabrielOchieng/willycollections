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

  createOrder = async (userId) => {
    try {
      const userCartRef = doc(CartCollectionRef, userId);
      const cartDoc = await getDoc(userCartRef);

      if (cartDoc.exists()) {
        const itemsCollectionRef = collection(userCartRef, "carts");
        const querySnapshot = await getDocs(itemsCollectionRef);
        const cartItems = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Generate a unique order ID (consider using a library like `uuid`)
        const orderId = crypto.randomUUID();

        // Create a new order document in Firestore (replace 'orders' with your collection name)
        const ordersRef = collection(db, "orders");
        const orderRef = await addDoc(ordersRef, {
          userId,
          items: cartItems, // Include cart items in the order
          createdAt: serverTimestamp(), // Use serverTimestamp for easier order creation time management
          orderId,
        });

        // Clear the user's cart after successful order creation (optional)
        await setDoc(userCartRef, {});

        // dispatch({ type: "CREATE_ORDER_SUCCESS", payload: orderId }); // Dispatch success action with order ID

        return orderId; // Return the created order ID
      } else {
        console.warn("Cart document not found for user:", userId);
        return null; // Or throw an error depending on your logic
      }
    } catch (error) {
      console.error("Error creating order:", error);
      // Handle errors (optional)
      return null;
    }
  };
}

export default new CartDataService();
