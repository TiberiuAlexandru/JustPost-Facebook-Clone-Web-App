// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA-VrNjCnr1puYyOYpCojIeKzopivcQKFo",
    authDomain: "justpost-app.firebaseapp.com",
    projectId: "justpost-app",
    storageBucket: "justpost-app.appspot.com",
    messagingSenderId: "826113719676",
    appId: "1:826113719676:web:20fb521bb1695bc15bf8f9",
    measurementId: "G-LMK5MLJBQF"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export { auth, provider };
  export default db;