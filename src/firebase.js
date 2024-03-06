import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  //   apiKey: process.env.REACT_APP_FIREBASE_KEY,
  apiKey: "AIzaSyDEwbty2eUYlA_0H7Gh97DsU0vczxfRL6Q",
  authDomain: "willycollections-e0479.firebaseapp.com",
  projectId: "willycollections-e0479",
  storageBucket: "willycollections-e0479.appspot.com",
  messagingSenderId: "744714131167",
  appId: "1:744714131167:web:e48c813e158d87c1527b6a",
  measurementId: "G-6PFZ41375F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
