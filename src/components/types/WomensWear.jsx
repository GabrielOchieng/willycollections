// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// // Import Firebase SDK for accessing Firestore
// import {
//   getFirestore,
//   collection,
//   query,
//   limit,
//   orderBy,
//   startAfter,
// } from "firebase/firestore";

// // Assuming Firebase is configured correctly in your project
// const db = getFirestore();

// const WomensWear = () => {
//   const [items, setItems] = useState([]);
//   const { type } = useParams();
//   const [lastVisible, setLastVisible] = useState(null); // For pagination

//   useEffect(() => {
//     const fetchItems = async () => {
//       const q = query(
//         collection(db, "items"),
//         orderBy("name"),
//         startAfter(lastVisible),
//         limit(10)
//       );
//       try {
//         const querySnapshot = await getDocs(q);
//         const fetchedItems = querySnapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         setItems(fetchedItems);
//         setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
//       } catch (error) {
//         console.error("Error fetching items:", error);
//       }
//     };

//     fetchItems();
//   }, [type, lastVisible]);

//   return (
//     <div className="container mt-5">
//       <h1>{type.toUpperCase()} Wear</h1>
//       <div className="row d-flex justify-content-between flex-wrap">
//         {items.map((item) => (
//           //   <SingleItem key={item.id} itemData={item} />
//           <ItemPage key={item.id} itemData={item} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WomensWear;

import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";

const WomensWear = () => {
  const { type } = useParams();
  const { items } = useContext(ProductContext);
  console.log(type, items);

  const filteredItems = items.filter(
    (item) => item.itemType.toLowerCase() === type.toLowerCase()
  );

  return (
    <div className="container mt-5">
      <h1>{type.toUpperCase()}</h1>
      <div className="row d-flex justify-content-between flex-wrap">
        {filteredItems.map((item) => (
          // Assuming ItemPage component handles item data
          <ItemPage key={item.itemID} itemData={item} />
        ))}
      </div>
    </div>
  );
};

export default WomensWear;
