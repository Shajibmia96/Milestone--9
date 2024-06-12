import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Config/FirebaseConfig";



export const AuthContext = createContext(null)


const googleProvider = new GoogleAuthProvider();


const ProviderContext = ({children}) => {

    //   UseState for user
      const [user , setUser] = useState({})
      //  //   UseState for loading

      const [loading , setLoading] = useState(true)
    //  Google log in
      const googleLogIn = () =>{
        setLoading(true)
       return signInWithPopup(auth , googleProvider)
        
      }

    //   Sing up in
   const createUser = (email , password)=>{
       setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
   }

//    sing in 
   const singIn = (email , password) =>{
    setLoading(true)
       return signInWithEmailAndPassword(auth, email, password)
   }

//    Sing out 
 const logOut = () =>{
    return signOut(auth)
 }

//    Using observer

useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
          setUser(user)
          setLoading(false)
      });
}, [])

    console.log(user)
    const authentication = {
        googleLogIn,
        createUser,
        singIn,
        logOut,
        user,
        loading
    }

       
    return (
        <AuthContext.Provider value={authentication} >
            {children}
        </AuthContext.Provider>
    );
};

export default ProviderContext;