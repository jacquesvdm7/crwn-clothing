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

// This will perform asynchronouse save to the database
export const createUserProfileDocument =  async (userAuth, additionalData) => {
  // if we do not receive a valid userAuth Object then do not save
    if (!userAuth) return;
    //check if thew user already exists
    //first get reference to user object
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    //then asynchronousely get the data for the user into the snapshot object
    const snapshot = await userRef.get();
    if (snapshot.exists)
    {
      console.log("This is exisitng user");
    }
    else{
      console.log("This is new user");
      //Deconstruct userAuth and only use the two fields below
      const {displayName, email}  = userAuth;
      const createdDt = new Date();
      try {
        //Please remember again to do async when accessing database to make it non blocking
         await userRef.set({name: displayName, email: email, createdDate: createdDt, ...additionalData});
      } catch (error) {
         console.log('Error creating user', error.message);
      }
      
    }
    console.log(snapshot);

    return userRef;

}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// This will use the google signin popup but we can use other providers like twitter, facebook, git , oauth, SAML etc
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

