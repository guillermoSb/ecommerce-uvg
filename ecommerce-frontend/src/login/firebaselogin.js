/* eslint-disable no-template-curly-in-string */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, signOut, FacebookAuthProvider } from "firebase/auth";
import "firebase/firestore";
import { addDoc, getFirestore, collection } from "firebase/firestore";
const googleProvider = new GoogleAuthProvider();
const FBProvider = new FacebookAuthProvider();

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
const firestore = getFirestore(app);
const loggedUser = auth.currentUser;
const analytics = getAnalytics(app);

export async function regular_signup(email, password) {
  await createUserWithEmailAndPassword(auth, email, password);
  await createUserDocument(email);
}

export async function facebook_auth() {
  signInWithPopup(auth, FBProvider)
  .then((result) => {
    // The signed-in user info.
    const user = result.user;
    createUserDocument(user);
    console.log(user);
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;
    return credential;
    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);

    // ...
  });
  
}

export async function google_auth() {
  signInWithPopup(auth, googleProvider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    createUserDocument(user);
    console.log(user);

    return token;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}

const createUserDocument = async(email) => {
  if(!email) return;
    
  try {
    const docRef = await addDoc(collection(firestore, "users"), {
      email: email,
      isAdmin: false,
    })
    console.log("Registered in firestore");
  } catch {
    console.log("Error in user creation (firestore)");
  }
  
}

export async function regular_login(email, password) {
  await signInWithEmailAndPassword(auth, email, password);
}

export function signOutAccount() {
  signOut(auth).then(() => {
    alert("Deslogueado con exito")
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}

