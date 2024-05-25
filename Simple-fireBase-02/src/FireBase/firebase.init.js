// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHSHdmXZPYa2FM12_HDUTGZ8GXEJT968s",
  authDomain: "simple-firebase-02-6d4b9.firebaseapp.com",
  projectId: "simple-firebase-02-6d4b9",
  storageBucket: "simple-firebase-02-6d4b9.appspot.com",
  messagingSenderId: "254599207079",
  appId: "1:254599207079:web:bf56a12f9930248c356382"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  default app