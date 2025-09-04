// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_APIKEY,
 authDomain: "eatwell-ee93a.firebaseapp.com",
  projectId: "eatwell-ee93a",
  storageBucket: "eatwell-ee93a.firebasestorage.app",
  messagingSenderId: "75623254989",
  appId: "1:75623254989:web:1784efca28fb08db2f1284"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const provider=new GoogleAuthProvider()
export {provider,auth}