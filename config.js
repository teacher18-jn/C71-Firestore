import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyDfJkIjrBshsE-TvT5c94Fi9CanGA_J12g",
    authDomain: "wily-app-14214.firebaseapp.com",
    projectId: "wily-app-14214",
    storageBucket: "wily-app-14214.appspot.com",
    messagingSenderId: "542856356970",
    appId: "1:542856356970:web:9671b694a68e1b0003d613"
};

  // Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);   
}
  
export default firebase.firestore();