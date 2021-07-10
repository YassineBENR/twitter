import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDpRQB8KxcSJSQLerqI-8vJYS5BASGhHok",
    authDomain: "clonetwitter-192c9.firebaseapp.com",
    projectId: "clonetwitter-192c9",
    storageBucket: "clonetwitter-192c9.appspot.com",
    messagingSenderId: "230336512187",
    appId: "1:230336512187:web:32af3e5b0bd885db78299e",
    measurementId: "G-K35K6PSRQ4"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;