import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDUInrk1mGAk2qgpbJ70Q880jOm1mS3_aM",
    authDomain: "instagram-clone-f8556.firebaseapp.com",
    projectId: "instagram-clone-f8556",
    storageBucket: "instagram-clone-f8556.appspot.com",
    messagingSenderId: "925796512927",
    appId: "1:925796512927:web:6bb8c7f4de9ac5fef51eaa",
    measurementId: "G-3S0HY6RRR9"
  });

  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const storage = firebase.storage()

  export {db, auth, storage }
