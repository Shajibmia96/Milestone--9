
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from '../FireBase/firebase.config';

 export const AuthContext = createContext(null)
  
 
const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null)

    const [loading, setLoading] = useState(true)

    // console.log(user)

     const createUser = (Email , Password) =>{
            setLoading(true)
       return createUserWithEmailAndPassword(auth, Email,Password)
     }

     const singInUser = (Email ,Password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth , Email, Password)
     }

     const logOut = () =>{
        setLoading(true)
        signOut(auth)
     }

     useEffect(()=>{
         const unSubscribe =  onAuthStateChanged(auth ,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
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
        logOut,
        loading
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