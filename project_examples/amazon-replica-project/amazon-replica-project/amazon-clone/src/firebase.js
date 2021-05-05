import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDOIUfSV9NTHHA6iHwHHGJexTKpDyPHohI",
    authDomain: "challenge-59232.firebaseapp.com",
    projectId: "challenge-59232",
    storageBucket: "challenge-59232.appspot.com",
    messagingSenderId: "712668687987",
    appId: "1:712668687987:web:bbbfa29b6c1fef05184406",
    measurementId: "G-7FMDR5BG6L"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();

  export {db, auth}