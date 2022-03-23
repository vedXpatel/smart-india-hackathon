// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC6Kl26Y1kY35DRudHAsXA9EjHE0zu4Wvo",
    authDomain: "disaster-data-extraction.firebaseapp.com",
    databaseURL: "https://disaster-data-extraction-default-rtdb.firebaseio.com",
    projectId: "disaster-data-extraction",
    storageBucket: "disaster-data-extraction.appspot.com",
    messagingSenderId: "403244136343",
    appId: "1:403244136343:web:90b7b6190ee0e49533b6d2",
    measurementId: "G-HMEZSZZ1DX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);