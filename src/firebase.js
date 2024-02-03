// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import { initializeApp } from "firebase/app";
// import { getFirestore} from "firebase/firestore";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";
import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyD9wtaWsP4upP8AjN6wS9SRazJ0ER5RfdM",
    authDomain: "slack-clone2-4b28d.firebaseapp.com",
    projectId: "slack-clone2-4b28d",
    storageBucket: "slack-clone2-4b28d.appspot.com",
    messagingSenderId: "338699157070",
    appId: "1:338699157070:web:1e4faa27cf153dccb90d1f",
    measurementId: "G-6MTBF6FWJS"
  };

// const firebaseApp = initializeApp(firebaseConfig);
// const db = getFirestore(firebaseApp);
// const auth = getAuth(firebaseApp);
// const provider = new GoogleAuthProvider();

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider,db};
// export default db;






