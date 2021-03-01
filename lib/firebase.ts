import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

 const firebaseConfig = {
    apiKey: "AIzaSyCCSAZlJ-Uzulc-h_m83NbvZyqSsTICaIs",
    authDomain: "fireship-ad2dc.firebaseapp.com",
    projectId: "fireship-ad2dc",
    storageBucket: "fireship-ad2dc.appspot.com",
    messagingSenderId: "835831694463",
    appId: "1:835831694463:web:1cb0ed35c4f637d4e52b4a",
    measurementId: "G-F3WXV3T6JP"
  };

  if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig)
  }

  export const auth = firebase.auth();
  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export const firestore = firebase.firestore();
  export const storage = firebase.storage();