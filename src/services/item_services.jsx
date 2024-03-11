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

const itemCollectionRef = collection(db, "form-data");

class ItemDataService {
  // addItems = async (newItem, file) => {
  //   try {
  //     if (file && newItem.id) {
  //       const storageRef = ref(storage, `items/${newItem.id}`); // Create storage reference
  //       const uploadTask = await uploadBytes(storageRef, file); // Upload file
  //       const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
  //       newItem.fileURL = downloadURL; // Add file URL to item data
  //     }
  //   } catch (error) {
  //     console.error("Error adding item:", error); // Handle any errors
  //     throw error; // Rethrow to allow for further handling
  //   }

  //   return addDoc(itemCollectionRef, newItem);
  // };

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
