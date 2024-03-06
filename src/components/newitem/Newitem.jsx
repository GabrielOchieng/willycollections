import React, { useState } from "react";
import {
  collection,
  doc,
  setDoc,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../firebase";

const Newitem = () => {
  const [email, setEmail] = useState("");
  const [data, setData] = useState({});

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const res = await addDoc(collection(db, "cities"), {
        name: "Los Angeles",
        state: "CA",
        country: "USA",
        timeStamp: serverTimestamp(),
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container d-flex flex-column align-items-center">
      <h1>New Item</h1>
      <div className="container border p-3 mt-2 rounded">
        <form onSubmit={handleAdd}>
          <div className="mb-3">
            <label htmlFor="exampleInputname1" className="form-label">
              Item Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputname1"
              aria-describedby="emailHelp"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputtype1" className="form-label">
              Item Type
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputtype1"
              aria-describedby="emailHelp"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputprice1" className="form-label">
              Item Price
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleInputprice1"
              aria-describedby="emailHelp"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputimage1" className="form-label">
              Item Image
            </label>
            <input
              type="file"
              className="form-control"
              id="exampleInputimage1"
              aria-describedby="emailHelp"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newitem;
