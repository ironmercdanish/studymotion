import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyB5re1hFbBWdV6GN2Ww7jj6AvEsAW6jROo",
  authDomain: "codecampus-eaaf9.firebaseapp.com",
  projectId: "codecampus-eaaf9",
  storageBucket: "codecampus-eaaf9.appspot.com",
  messagingSenderId: "346416144858",
  appId: "1:346416144858:web:596de88ce62edd849e60e3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
// provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

export {auth, provider};