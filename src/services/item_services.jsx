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
  addItems = async (newItem) => {
    try {
      const docRef = await addDoc(itemCollectionRef, newItem);
      console.log("Document written with ID:", docRef.id);
    } catch (error) {
      console.error("Error adding document:", error);
      // Throw a custom error to the component (optional)
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

  getItem = async (id) => {
    const itemDoc = doc(db, "items", id);
    const snapshot = await getDoc(itemDoc);
    if (snapshot.exists) {
      // Document data can be accessed with snapshot.data()
      return snapshot.data();
    } else {
      // Handle document not found scenario (optional)
      console.log("No item found with that ID");
      return null;
    }
  };

  getAllItems = async () => {
    try {
      const itemsCollection = collection(db, "items");
      const snapshot = await getDocs(itemsCollection);
      const fetchedItems = snapshot.docs.map((doc) => ({
        itemID: doc.id,
        itemName: doc.data().name,
        itemType: doc.data().type,
        itemPrice: doc.data().price,
        itemImg: doc.data().imageUrl,
      }));
      return fetchedItems;
    } catch (error) {
      console.error("Error fetching items:", error);
      return []; // Handle errors by returning an empty array (optional)
    }
  };

  // Add methods for uploading and downloading files with Firebase Storage (optional)
}

export default new ItemDataService();
