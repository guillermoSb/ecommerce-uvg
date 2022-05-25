const { getAuth } = require("firebase/auth");
const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");


const firebaseConfig = {
    apiKey: "AIzaSyB-lVV_pu8TlFoOaSBUifu1MnBygNriHZs",
    authDomain: "e-commerce-chat-c4578.firebaseapp.com",
    projectId: "e-commerce-chat-c4578",
    storageBucket: "e-commerce-chat-c4578.appspot.com",
    messagingSenderId: "628163791171",
    appId: "1:628163791171:web:df61a31aefb9b023f547f6",
    measurementId: "G-7B141R0M5T",
};

const app = initializeApp(firebaseConfig);   // Initialize firebase app
const auth = getAuth();
const db = getFirestore(app);
const loggedUser = auth.currentUser;


module.exports = { db, loggedUser };