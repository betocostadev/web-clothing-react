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

// Add new user
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // const collectionRef = firestore.collection('users');
  // console.log(collectionRef);

  const snapShot = await userRef.get();
  // const collectionSnapShot = await collectionRef.get();
  // console.log({ collection: collectionSnapShot.docs.map(doc => doc.data())});

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
}

// Passing the Shop Data to the Back-End (Firestore DB)
// No using, used once to send the shop.data to Firestore.
export const addCollectionAndDocuments =  async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  // console.log(collectionRef);

  // Using firestore batch to avoid problems when saving the data.
  // If something happens at the middle of the operation, everything fails.
  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    // Create new docs on this collection and generate an ID.
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  // batch.commit fires the batch request
  return await batch.commit();
}

// We will get an array from firestore, so we will convert it into an object:
export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();
    // We will get our routeName using encoreURI
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  });
  return transformedCollection.reduce((acc, collection) => {
    // Will return objects based on their title. Hats for the hats collection, etc.
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {})
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google Authentication
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;