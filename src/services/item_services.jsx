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

export const itemCollectionRef = collection(db, "items");

class ItemDataService {
  // addItems = (newItem) => {
  //   return addDoc(itemCollectionRef, newItem);
  // };

  addItems = async (newItem) => {
    try {
      const docRef = await addDoc(itemCollectionRef, newItem);
      console.log("Document written with ID:", docRef.id);
      // Handle successful addition (optional)
    } catch (error) {
      console.error("Error adding document:", error);
      // Throw a custom error to the component
    }
  };

  updateItem = (id, updatedItem) => {
    const itemDoc = doc(db, "items", id);
    return updateDoc(itemDoc, updatedItem);
  };

  deleteItem = (id) => {
    const itemDoc = doc(db, "items", id);
    return deleteDoc(itemDoc);
  };

  getAllItems = () => {
    return getDocs(itemCollectionRef);
  };

  getItem = (id) => {
    const itemDoc = doc(db, "items", id);
    return getDoc(itemDoc);
  };

  return;
}

export default new ItemDataService();
