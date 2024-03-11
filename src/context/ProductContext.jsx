// import React, { createContext } from "react";
// import { db } from "../firebase";

// export const ProductContext = createContext();

// export class ProductContextProvider extends React.Component {
//   state = {
//     items: [], //defining initial state with an empty array of
//   };
//   componentDidMount() {
//     const prevItems = this.state.items;
//     db.collections("items").onSnapshot((snapshot) => {
//       let changes = snapshot.docChanges();
//       changes.forEach((change) => {
//         if (change.type === "added") {
//           prevItems.push({
//             itemID: change.doc.id,
//             itemName: change.doc.data().ItemName,
//             itemPrice: change.doc.data().ItemPrice,
//             itemImg: change.doc.data().ItemImg,
//           });
//         }
//         this.setState({
//           items: prevItems,
//         });
//       });
//     });
//   }

//   render() {
//     return (
//       <ProductContext.Provider value={{ items: [...this.state.items] }}>
//         {this.props.children}
//       </ProductContext.Provider>
//     );
//   }
// }

import React, { createContext, useEffect, useState } from "react";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../firebase"; // Import Firebase Firestore instance

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);

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
        setItems(fetchedItems);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    const subscribeToItems = () => {
      onSnapshot(collection(db, "items"), (snapshot) => {
        const changes = snapshot.docChanges();
        changes.forEach((change) => {
          if (change.type === "added") {
            setItems((prevItems) => [
              ...prevItems,
              {
                itemID: change.doc.id,
                itemName: change.doc.data().name,
                itemType: change.doc.data().type,
                itemPrice: change.doc.data().price,
                itemImg: change.doc.data().image,
              },
            ]);
          } else if (change.type === "modified" || change.type === "removed") {
            // Handle updates or deletions (optional)
          }
        });
      });
    };

    fetchItems(); // Fetch initial data
    subscribeToItems(); // Listen for real-time changes
  }, []); // Empty dependency array to run only once on mount

  return (
    <ProductContext.Provider value={{ items }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
