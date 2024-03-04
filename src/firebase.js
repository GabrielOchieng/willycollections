// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
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
