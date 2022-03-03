import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyAVMeTq9nBkqs9iQWdlODgob-Rx22RsdNY",
    authDomain: "c71-project-40476.firebaseapp.com",
    projectId: "c71-project-40476",
    storageBucket: "c71-project-40476.appspot.com",
    messagingSenderId: "265154853712",
    appId: "1:265154853712:web:33d4ec8c0275e64bc60a55"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
