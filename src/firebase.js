import firebase from 'firebase';
// import 'firebase/auth';
// import 'firebase/firestore';

export const config = {
  apiKey: 'AIzaSyAZciIBN9EI3Gsiv543AkXUELgQDx-2PEM',
  authDomain: 'n-game-7d0a4.firebaseapp.com',
  databaseURL: 'https://n-game-7d0a4.firebaseio.com',
  projectId: 'n-game-7d0a4',
  storageBucket: 'n-game-7d0a4.appspot.com',
  messagingSenderId: '239293493619',
  appId: '1:239293493619:web:6574233aec06ad6492d506',
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};
