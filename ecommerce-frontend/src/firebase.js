import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
  FacebookAuthProvider,
} from "firebase/auth";
import "firebase/firestore";
import { addDoc, getFirestore, collection, getDocs } from "firebase/firestore";
const googleProvider = new GoogleAuthProvider();
const FBProvider = new FacebookAuthProvider();

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export const firestore = getFirestore(app);
const loggedUser = auth.currentUser;
const analytics = getAnalytics(app);

/* Inactivity timeout - set 5 mins */
auth.onAuthStateChanged((user) => {
  let sessionTimeout = null;
  if (user === null) {
    // User is logged out.
    // Clear the session timeout.
    sessionTimeout && clearTimeout(sessionTimeout);
    sessionTimeout = null;
  } else {
    // User is logged in.
    // Fetch the decoded ID token and create a session timeout which signs the user out.
    user.getIdTokenResult().then((idTokenResult) => {
      // Times are in milliseconds!
      const authTime = idTokenResult.claims.auth_time * 1000;
      const sessionDuration = 1000 * 60 * 5;
      const millisecondsUntilExpiration =
        sessionDuration - (Date.now() - authTime);
      sessionTimeout = setTimeout(
        () => auth.signOut(),
        millisecondsUntilExpiration
      );
    });
  }
});

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
    })
    .catch((error) => {
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
    });
    console.log("Registered in firestore");
  } catch {
    console.log("Error in user creation (firestore)");
  }
};

export async function regular_login(email, password) {
  await signInWithEmailAndPassword(auth, email, password);
}

export function signOutAccount() {
  signOut(auth)
    .then(() => {
      alert("Deslogueado con exito");
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
}

export async function getData() {
  let data = [];
  let datos = await firebase.firestore().collection("inventario").get();
  datos.docs.forEach((item) => {
    data.push(item.data());
  });
  return data;
}

export function addCompra(
  imagen,
  precio,
  itemcode,
  nombre,
  cantidad_disponible
) {
  if (cantidad_disponible > 0) {
    firebase
      .firestore()
      .collection("carrito")
      .doc("ZsuFnGu76TWPQus6xGce")
      .set(
        {
          items: firebase.firestore.FieldValue.arrayUnion({
            imagen: imagen,
            precio: precio,
            itemcode: itemcode,
            nombre: nombre,
            cantidad: cantidad_disponible,
          }),
        },
        { merge: true }
      );
    alert(`${nombre} added to cart!`);
  } else {
    alert(`Couldn't add ${nombre} to cart.`);
  }
}

firebase.initializeApp(firebaseConfig);

export default firebase;
