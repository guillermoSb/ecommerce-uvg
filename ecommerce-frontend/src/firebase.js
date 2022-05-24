import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

    const firebaseConfig = {
        apiKey: "AIzaSyA_WclKi_NmhfPviSUYxdLUJ4FXvexgGpE",
        authDomain: "stw-uvg-proyecto2.firebaseapp.com",
        databaseURL: "https://stw-uvg-proyecto2-default-rtdb.firebaseio.com",
        projectId: "stw-uvg-proyecto2",
        storageBucket: "stw-uvg-proyecto2.appspot.com",
        messagingSenderId: "365577856480",
        appId: "1:365577856480:web:f7987beb398947f8543785",
        measurementId: "G-GKWKDPWBCK"
    };

    firebase.initializeApp(firebaseConfig);

    export default firebase;


