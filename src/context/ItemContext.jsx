import React, { useReducer, createContext, useEffect } from "react";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../firebase"; // Import Firebase Firestore instance
import ItemReducer from "./ItemReducer";

export const ItemContext = createContext();

const initialState = { items: [] };

export const ItemContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ItemReducer, initialState);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const itemsCollection = collection(db, "items"); // Get a reference to "items" collection
        const snapshot = await getDocs(itemsCollection); // Fetch initial data
        const fetchedItems = snapshot.docs.map((doc) => ({
          itemID: doc.id,
          itemName: doc.data().name,
          itemType: doc.data().type,
          itemPrice: doc.data().price,
          itemImg: doc.data().imageUrl,
        }));
        dispatch({ type: "SET_ITEMS", payload: fetchedItems });
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    const subscribeToItems = () => {
      onSnapshot(collection(db, "items"), (snapshot) => {
        const changes = snapshot.docChanges();
        changes.forEach((change) => {
          if (change.type === "added") {
            dispatch({
              type: "ADD_ITEM",
              payload: {
                itemID: change.doc.id,
                itemName: change.doc.data().name,
                itemType: change.doc.data().type,
                itemPrice: change.doc.data().price,
                itemImg: change.doc.data().imageUrl,
              },
            });
          }
          // Handle updates or deletions with appropriate actions (optional)
        });
      });
    };

    fetchItems();
    subscribeToItems();
  }, []); // Empty dependency array to run only once on mount

  return (
    <ItemContext.Provider value={{ items: state.items, dispatch }}>
      {children}
    </ItemContext.Provider>
  );
};

export default ItemContextProvider;
