import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // Import uuid for unique ID generation
import { serverTimestamp } from "firebase/firestore";
import ItemDataService from "../../services/item_services";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage"; // Removed uploadBytesResumable as not needed

const NewItem = () => {
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [per, setPer] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!file) {
      console.error("Please select a file to upload.");
      return;
    }
    setIsSubmitting(true);
    const uniqueID = uuidv4();
    const storage = getStorage();
    const storageRef = ref(storage, `images/${uniqueID}/${file.name}`); // Corrected storage path

    try {
      const uploadTask = await uploadBytes(storageRef, file); // Use uploadBytes
      const url = await getDownloadURL(storageRef); // Ensure URL is obtained after upload

      const newItem = {
        id: uniqueID,
        name,
        price,
        type,
        imageUrl: url, // Use the actual download URL
        timestamp: serverTimestamp(),
      };

      await ItemDataService.addItems(newItem);
    } catch (error) {
      console.error("Error adding data:", error);
      // Handle errors gracefully, e.g., display error messages to the user
    } finally {
      setName("");
      setType("");
      setPrice("");
      setFile(null);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container p-5 mt-5 d-flex flex-column align-items-center">
      <h1>New Item</h1>
      <div className="container border p-3 mt-2 rounded shadow">
        <form onSubmit={handleSubmit} className="row">
          <div className="mb-3 col-md-6">
            <label htmlFor="exampleInputname1" className="form-label">
              Item Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputname1"
              aria-describedby="emailHelp"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="mb-3 col-md-6">
            <label htmlFor="exampleInputtype1" className="form-label">
              Item Type
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputtype1"
              aria-describedby="emailHelp"
              onChange={(e) => setType(e.target.value)}
              value={type}
            />
          </div>
          <div className="mb-3 col-md-6">
            <label htmlFor="exampleInputprice1" className="form-label">
              Item Price
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleInputprice1"
              aria-describedby="emailHelp"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
          </div>
          <div className="mb-3 col-md-6">
            <label htmlFor="fileInput" className="form-label">
              Item Image
            </label>
            <input
              type="file"
              id="fileInput"
              className="form-control"
              onChange={handleFileChange}
            />
          </div>
          <button
            disabled={isSubmitting}
            // disabled={per !== null && per < 100}
            type="submit"
            className="btn btn-primary col-12 mt-3"
          >
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewItem;
