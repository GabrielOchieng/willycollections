import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // Import uuid for unique ID generation
import { serverTimestamp } from "firebase/firestore";
import ItemDataService from "../../services/item_services";
import { getStorage, ref, uploadBytes } from "firebase/storage";

const NewItem = () => {
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
      email,
      message,
      imageUrl,
      timestamp: serverTimestamp(),
    };

    try {
      await ItemDataService.addItems(newItem);

      console.log("Uploading Data to Firestore: \n", newItem);

      const storage = getStorage();
      const storageRef = ref(storage, imageUrl);

      await uploadBytes(storageRef, image);
      console.log("Image uploaded successfully");

      setName("");
      setEmail("");
      setMessage("");
      setFile(null); // Clear file input after successful submission
    } catch (error) {
      console.error("Error adding data:", error);
      // Handle errors appropriately, e.g., display error message to user
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewItem;
