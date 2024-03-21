import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemPage from "../../pages/ItemPage";
// Import your component for displaying a single item (replace with your component name)
// import SingleItem from "./SingleItem";

// Replace with your data fetching logic or API call
const fetchItemsByType = async (type) => {
  // Simulate API call with some sample data (replace with your actual logic)
  const items = [
    { id: 1, name: "Women's Dress", price: 39.99, image: "path/to/image1.jpg" },
    { id: 2, name: "Women's Top", price: 24.99, image: "path/to/image2.jpg" },
    // ... more items
  ];
  return items.filter((item) => item.type.toLowerCase() === type.toLowerCase());
};

const WomensWear = () => {
  const [items, setItems] = useState([]);
  const { type } = useParams(); // Assuming your route path includes a type parameter (e.g., /womens-wear)

  useEffect(() => {
    const fetchData = async () => {
      const fetchedItems = await fetchItemsByType(type);
      setItems(fetchedItems);
    };

    fetchData();
  }, [type]); // Re-run effect when `type` parameter changes

  return (
    <div className="container mt-5">
      <h1>{type.toUpperCase()} Wear</h1>
      <div className="row d-flex justify-content-between flex-wrap">
        {items.map((item) => (
          //   <SingleItem key={item.id} itemData={item} />
          <ItemPage key={item.id} itemData={item} />
        ))}
      </div>
    </div>
  );
};

export default WomensWear;
