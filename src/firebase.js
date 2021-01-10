import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyBQa1VbkLZjjzpCGdDlQD2Fr0bNMJIIbkc",
  authDomain: "facebook-clone-462ca.firebaseapp.com",
  projectId: "facebook-clone-462ca",
  storageBucket: "facebook-clone-462ca.appspot.com",
  messagingSenderId: "679243142299",
  appId: "1:679243142299:web:467a1b97f203ff1a47e23e",
  measurementId: "G-2BNRBC98PP",
});

const auth = firebase.auth();

export { auth };
