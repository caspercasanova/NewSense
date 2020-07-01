import firebase from 'firebase/app';
import 'firebase/firestore';
import "firebase/analytics";



// Initialize Firebase and add to window
firebase.initializeApp({
  apiKey: "AIzaSyCPAzfvBFAt5h3FxcKwWNHjugbgnKv7WUE",
  authDomain: "newsenseactive.firebaseapp.com",
  databaseURL: "https://newsenseactive.firebaseio.com",
  projectId: "newsenseactive",
  storageBucket: "newsenseactive.appspot.com",
  messagingSenderId: "1068564898932",
  appId: "1:1068564898932:web:279415f9e07f8e637f9d21",
  measurementId: "G-146XQDGJDE"
});
if(process.env.NODE_ENV === 'development'){
  window.firebase = firebase
}



export default firebase;

export const firestore = firebase.firestore();
