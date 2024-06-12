import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCEHjzIc0C9BlixJMDDh57VYrJAvIexcGM",
  authDomain: "conceptual-react-auth-ecbf7.firebaseapp.com",
  projectId: "conceptual-react-auth-ecbf7",
  storageBucket: "conceptual-react-auth-ecbf7.appspot.com",
  messagingSenderId: "1018885093118",
  appId: "1:1018885093118:web:6e58490b1504e7ebf657af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth