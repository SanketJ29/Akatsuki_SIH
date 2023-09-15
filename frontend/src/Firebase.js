// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCuXhx23LbYnrpuMfzjqoF9OzdmBgGfJtY",
  authDomain: "woodland-saga.firebaseapp.com",
  projectId: "woodland-saga",
  storageBucket: "woodland-saga.appspot.com",
  messagingSenderId: "323966478006",
  appId: "1:323966478006:web:c7cc38428bfecad2482817",
  measurementId: "G-JTMYPEGDSX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { app, auth };
