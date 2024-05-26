// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7kic-KqHVb7BlM94ea576vXOK-QU6B0o",
  authDomain: "user-email-password-auth-6de1c.firebaseapp.com",
  projectId: "user-email-password-auth-6de1c",
  storageBucket: "user-email-password-auth-6de1c.appspot.com",
  messagingSenderId: "491130315112",
  appId: "1:491130315112:web:ff125495edeea6fe0cf6dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth