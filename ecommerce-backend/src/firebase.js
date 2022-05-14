const { getAuth } = require("firebase/auth");
const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");


const firebaseConfig = {
    apiKey: "AIzaSyA_WclKi_NmhfPviSUYxdLUJ4FXvexgGpE",
    authDomain: "stw-uvg-proyecto2.firebaseapp.com",
    projectId: "stw-uvg-proyecto2",
    storageBucket: "stw-uvg-proyecto2.appspot.com",
    messagingSenderId: "365577856480",
    appId: "1:365577856480:web:08ba1a0676098be3543785",
    measurementId: "G-902XSQSB9J",
};
const app = initializeApp(firebaseConfig);   // Initialize firebase app
const auth = getAuth();
const db = getFirestore(app);
const loggedUser = auth.currentUser;


module.exports = { db, loggedUser };