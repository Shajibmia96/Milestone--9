// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6E3t7e3z6Sytizro3xE4Zzt00ov6NUVo",
  authDomain: "auth-integration-privet-44361.firebaseapp.com",
  projectId: "auth-integration-privet-44361",
  storageBucket: "auth-integration-privet-44361.appspot.com",
  messagingSenderId: "422158153834",
  appId: "1:422158153834:web:676ddea54b56f40de07213"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;