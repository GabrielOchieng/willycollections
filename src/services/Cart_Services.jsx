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
  // addItems = (newItem) => {
  //   return addDoc(CartCollectionRef, newItem);
  // };

  addToCartOnFirebase = async (itemData) => {
    const cartRef = collection(db, "carts" /* user ID here */); // Adapt this line
    const docRef = await addDoc(cartRef, itemData);
    return docRef.id; // Return the document ID
  };

  //   updateItem = (id, updatedItem) => {
  //     const itemDoc = doc(db, "items", id);
  //     return updateDoc(itemDoc, updatedItem);
  //   };

  //   deleteItem = (id) => {
  //     const itemDoc = doc(db, "items", id);
  //     return deleteDoc(itemDoc);
  //   };

  // getAllItems = () => {
  //   return getDocs(CartCollectionRef);
  // };

  // getItem = (id) => {
  //   const itemDoc = doc(db, "items", id);
  //   return getDoc(itemDoc);
  // };
}

export default new CartDataService();
