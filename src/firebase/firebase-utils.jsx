// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlS8yuz5pGEbtAQZZYe4tY7R_9-gcs28E",
  authDomain: "crwn-db-2ee95.firebaseapp.com",
  projectId: "crwn-db-2ee95",
  storageBucket: "crwn-db-2ee95.appspot.com",
  messagingSenderId: "750960325563",
  appId: "1:750960325563:web:50821bbd953b636e9eca9e",
  measurementId: "G-5LP0YH4LKL"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// This will use the google signin popup but we can use other providers like twitter, facebook, git , oauth, SAML etc
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

