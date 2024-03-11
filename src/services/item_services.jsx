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
  addItems = (newItem) => {
    return addDoc(itemCollectionRef, newItem);
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
