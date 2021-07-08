import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAsM3DiB0vbx1au-aWwkSboM_ZaC3AwPRM",
  authDomain: "contactapp-17833.firebaseapp.com",
  projectId: "contactapp-17833",
  storageBucket: "contactapp-17833.appspot.com",
  messagingSenderId: "395930831441",
  appId: "1:395930831441:web:9d951330a4dac1bb064670",
  measurementId: "G-KWZNBD3QLF",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
export { auth, db };
