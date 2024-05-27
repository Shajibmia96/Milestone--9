
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from '../FireBase/firebase.config';

 export const AuthContext = createContext(null)
  
 
const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null)

    // console.log(user)

     const createUser = (Email , Password) =>{

       return createUserWithEmailAndPassword(auth, Email,Password)
     }

     const singInUser = (Email ,Password) =>{
        return signInWithEmailAndPassword(auth , Email, Password)
     }

     const logOut = () =>{
        signOut(auth)
     }

     useEffect(()=>{
         const unSubscribe =  onAuthStateChanged(auth ,(currentUser)=>{
            setUser(currentUser)
            console.log("Observer this current user" , currentUser)
           })

           return () =>{
            unSubscribe()
           }

           
     },[])

    const authInfo = {
        user, 
        createUser,
        singInUser,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
}

export default AuthProvider;