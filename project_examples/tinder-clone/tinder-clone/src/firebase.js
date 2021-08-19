import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBYkvUPv5jeprwL6a0yzp9siOqRG50gDSw",
    authDomain: "tinder-clone-475bd.firebaseapp.com",
    projectId: "tinder-clone-475bd",
    storageBucket: "tinder-clone-475bd.appspot.com",
    messagingSenderId: "537594861145",
    appId: "1:537594861145:web:3e3f87b3274d5986c54348",
    measurementId: "G-5CBF1XHBV1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;