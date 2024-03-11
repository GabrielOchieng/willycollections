import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // Import uuid for unique ID generation
import { serverTimestamp } from "firebase/firestore";
import ItemDataService from "../../services/item_services";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";

const NewItem = () => {
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [per, setPer] = useState("");

  let image = file;

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!file) {
      // Handle case where no file is selected
      console.error("Please select a file to upload.");
      return;
    }

    const uniqueID = uuidv4();
    const imageUrl = `/images/${uniqueID}/${image.name}`;

    const newItem = {
      name,
      price,
      type,
      imageUrl,
      timestamp: serverTimestamp(),
    };

    try {
      await ItemDataService.addItems(newItem);

      console.log("Uploading Data to Firestore: \n", newItem);

      const name = new Date().getTime() + file.name;
      const storage = getStorage();
      const storageRef = ref(storage, file.name);

      const uploadTask = uploadBytesResumable(storageRef, image);

      getDownloadURL(storageRef)
        .then((url) => {
          // Use the downloaded URL in the image src
          // <img src={url} alt="My Image" />;
          console.log(url);
        })
        .catch((error) => {
          console.error("Error getting image URL:", error);
          // Handle error gracefully, display a placeholder image, etc.
        });

      setName("");
      setType("");
      setPrice("");
      setFile(null); // Clear file input after successful submission
    } catch (error) {
      console.error("Error adding data:", error);
      // Handle errors appropriately, e.g., display error message to user
    }
  };

  return (
    <div className="container d-flex flex-column align-items-center">
      {/* {message?.msg && (
      <Alert
        variant={message?.error ? "danger" : "success"}
        dismissible
        onClose={() => setMessage("")}
      >
        {message?.msg}
      </Alert>
    )} */}
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
