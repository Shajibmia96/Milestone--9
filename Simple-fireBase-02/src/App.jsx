
import './App.css'
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from './FireBase/firebase.init';
import { useState } from 'react';
function App() {
   
  const [user , setUser] = useState(null)
 
  const auth = getAuth(app);
  const GoogleProvider = new GoogleAuthProvider(); 
  const GithubProvider = new GithubAuthProvider()
  const handleGoogleLogIn = () =>{
    signInWithPopup(auth, GoogleProvider)
    .then( result => {
       const usergoogle = result.user
       console.log(usergoogle)
       setUser(usergoogle)
    })
    .catch(error =>{
      console.log(error)
    })
  }
  const handleGitHubLogIn = () =>{
        signInWithPopup(auth, GithubProvider)
        .then(result => {
          const userGit = result.user
          console.log(userGit)
          setUser(userGit)
        })
        .catch(error =>{
          console.log(error , error.message)
        })
  }

  const handleGoogleLogOut = () =>{
       signOut(auth)
       .then(result =>{
        console.log(result)
            setUser(null)
       })
  }

  

  return (
    <>
      
      <h1>Firebase + React</h1>
         {
          user ? <button onClick={handleGoogleLogOut}>Log Out</button> :
          <div>
             <button onClick={handleGoogleLogIn}>Log in with Google</button>
             <button onClick={handleGitHubLogIn}>Log in with Github</button>
          </div>
          
         }

      {
           user && <div>
               <h1>User Name : {user.displayName}</h1>
               <h1>Email : {user.email}</h1>
               <img src={user.photoURL} alt="" />
           </div>   
      }
      
    </>
  )
}

export default App
