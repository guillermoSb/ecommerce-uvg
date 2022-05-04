// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const regeneratorRuntime = require("regenerator-runtime");

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_WclKi_NmhfPviSUYxdLUJ4FXvexgGpE",
  authDomain: "stw-uvg-proyecto2.firebaseapp.com",
  projectId: "stw-uvg-proyecto2",
  storageBucket: "stw-uvg-proyecto2.appspot.com",
  messagingSenderId: "365577856480",
  appId: "1:365577856480:web:08ba1a0676098be3543785",
  measurementId: "G-902XSQSB9J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const analytics = getAnalytics(app);

export function regular_login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
