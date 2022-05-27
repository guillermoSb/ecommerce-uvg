const { getAuth } = require("firebase/auth");
const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");
require("dotenv").config();

const firebaseConfig = {
  apiKey: "AIzaSyA_WclKi_NmhfPviSUYxdLUJ4FXvexgGpE",
  authDomain: "stw-uvg-proyecto2.firebaseapp.com",
  databaseURL: "https://stw-uvg-proyecto2-default-rtdb.firebaseio.com/",
  projectId: "stw-uvg-proyecto2",
  storageBucket: "stw-uvg-proyecto2.appspot.com",
  messagingSenderId: "365577856480",
  appId: "1:365577856480:web:f7987beb398947f8543785",
  measurementId: "G-GKWKDPWBCK"
};

const app = initializeApp(firebaseConfig); // Initialize firebase app
const auth = getAuth();
const db = getFirestore(app);
const loggedUser = auth.currentUser;

module.exports = { db, loggedUser };
