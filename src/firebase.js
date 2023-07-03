import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDQgcuevs6sh051haY8Tf9jYlbH541RMF0",
  authDomain: "instagram-clone-react-a833f.firebaseapp.com",
  projectId: "instagram-clone-react-a833f",
  storageBucket: "instagram-clone-react-a833f.appspot.com",
  messagingSenderId: "574121531511",
  appId: "1:574121531511:web:d72a9b8deb6092847b4e72",
  measurementId: "G-J16W0KJW55"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
export { auth, db, storage };