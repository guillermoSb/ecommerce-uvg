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
  apiKey: "AIzaSyB-lVV_pu8TlFoOaSBUifu1MnBygNriHZs",
  authDomain: "e-commerce-chat-c4578.firebaseapp.com",
  projectId: "e-commerce-chat-c4578",
  storageBucket: "e-commerce-chat-c4578.appspot.com",
  messagingSenderId: "628163791171",
  appId: "1:628163791171:web:df61a31aefb9b023f547f6",
  measurementId: "G-7B141R0M5T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export const firestore = getFirestore(app);
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

const createUserDocument = async (email) => {
  if (!email) return;

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