import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyDIpZ8Pp9Zi5tMtRa04ZB0eOZ83BnBSGpo",
    authDomain: "jjfashion-ea132.firebaseapp.com",
    projectId: "jjfashion-ea132",
    storageBucket: "jjfashion-ea132.appspot.com",
    messagingSenderId: "392860188670",
    appId: "1:392860188670:web:def20475edd235b60c4aaf"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const db = firebase.firestore();
  export default firebase
