// Firebase has lots of features that we don't need, in this case, we are using only the:
// App base, firestore DB and auth.

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCwDNnGjdDNolU4HU7MDHKtUMbL8MUY4k0",
  authDomain: "web-clothing-db.firebaseapp.com",
  databaseURL: "https://web-clothing-db.firebaseio.com",
  projectId: "web-clothing-db",
  storageBucket: "",
  messagingSenderId: "957647152799",
  appId: "1:957647152799:web:133cd062aa5a786d1e64aa"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google Authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;