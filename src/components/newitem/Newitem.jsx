import React, { useEffect, useState } from "react";
import {
  collection,
  doc,
  setDoc,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db, storage } from "../../firebase";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  getStorage,
} from "firebase/storage";

const Newitem = () => {
  const [data, setData] = useState({});
  const [file, setFile] = useState("");
  const [per, setPer] = useState(null);

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name;

      const metadata = {
        contentType: "image/jpeg",
      };
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file, metadata);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");

          //showing the progress
          setPer(progress);

          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, img: downloadURL }));
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value });
  };

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
              onChange={handleInput}
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
              onChange={handleInput}
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
              onChange={handleInput}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputimage1" className="form-label">
              Item Image
            </label>
            <input
              type="file"
              className="form-control"
              id="file"
              aria-describedby="emailHelp"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>

          <button
            disabled={per !== null && per < 100}
            type="submit"
            className="btn btn-primary"
          >
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newitem;
