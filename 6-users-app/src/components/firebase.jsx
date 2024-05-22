// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9XeUGj9djjxfNRkdmoEw6aaYiRqOIVlQ",
  authDomain: "fir-crud-640bf.firebaseapp.com",
  databaseURL: "https://fir-crud-640bf-default-rtdb.firebaseio.com",
  projectId: "fir-crud-640bf",
  storageBucket: "fir-crud-640bf.appspot.com",
  messagingSenderId: "66484328832",
  appId: "1:66484328832:web:1a34307dd5008bb2714965",
  measurementId: "G-8K881BETV9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
