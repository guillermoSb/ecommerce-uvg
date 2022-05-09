// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, signOut, FacebookAuthProvider, UserInfo } from "firebase/auth";
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
const loggedUser = auth.currentUser;
const analytics = getAnalytics(app);

export function regular_signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function facebook_auth() {
  signInWithPopup(auth, FBProvider)
  .then((result) => {
    // The signed-in user info.
    const user = result.user;
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

export function google_auth() {
  signInWithPopup(auth, googleProvider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
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

export function regular_login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function signOutAccount() {
  signOut(auth).then(() => {
    alert("Deslogueado con exito")
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}

