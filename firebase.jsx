// Import the functions you need from the SDKs you need
import * as firbase from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
let app;
if (firbase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firbase.app();
}

const auth = firbase.auth();
export { auth };
