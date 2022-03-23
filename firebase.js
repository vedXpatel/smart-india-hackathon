import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

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

firebase.initializeApp(firebaseConfig);
firebase.firestore();
export default firebase;