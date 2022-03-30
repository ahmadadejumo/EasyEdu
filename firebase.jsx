import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBCbVOg8KOmAE8FaQiMVG6YRCWaFAh4oSg",
  authDomain: "easyedu-2e0ba.firebaseapp.com",
  projectId: "easyedu-2e0ba",
  storageBucket: "easyedu-2e0ba.appspot.com",
  messagingSenderId: "591835527193",
  appId: "1:591835527193:web:cc14df6fc5a38914eb5288",
  measurementId: "G-Y7BYN9T484",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
