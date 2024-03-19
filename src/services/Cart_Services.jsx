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

export const CartCollectionRef = collection(db, "carts");

class CartDataService {
  addToCartOnFirebase = async (itemData) => {
    const cartRef = collection(db, "carts" /* user ID here */); // Adapt this line
    const docRef = await addDoc(cartRef, itemData);
    return docRef.id; // Return the document ID
  };

  fetchCartItems = async (userId) => {
    const cartRef = collection(db, "carts", userId);
    const querySnapshot = await getDocs(cartRef);
    const cartItems = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return cartItems;
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
