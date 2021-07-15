// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyB1ylb-KvT3gMwcTgkd7jsKBqGdclYWo3I",
    authDomain: "whats-app-clone-cac62.firebaseapp.com",
    projectId: "whats-app-clone-cac62",
    storageBucket: "whats-app-clone-cac62.appspot.com",
    messagingSenderId: "765228630457",
    appId: "1:765228630457:web:772a62bf729b9ff8dff668",
    measurementId: "G-FQT29PBPXG"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider};
export default db
