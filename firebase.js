import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyDxYeB3JuGsLU5vXIfW8M06cZdR8QilnOA",
    authDomain: "smat-d54a1.firebaseapp.com",
    projectId: "smat-d54a1",
    storageBucket: "smat-d54a1.appspot.com",
    messagingSenderId: "336286861699",
    appId: "1:336286861699:web:8e5505085ead2c03a98eb6",
    measurementId: "G-PNP4C458HB"
  };

const  app = initializeApp(firebaseConfig);

// export const authentication = getAuth(app);
export const db = getFirestore(app);