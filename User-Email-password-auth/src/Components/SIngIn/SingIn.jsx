import { createUserWithEmailAndPassword, } from "firebase/auth";
import auth from "../../FireBase/FireBase.init";
import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";


const SingIn = () => {
       
   const [registerError , setRegisterError] = useState('');
   const [showPassword , setShowPassword] = useState(false)

   const handleSubmit = e =>{
       e.preventDefault()
       console.log("Hello")
       const Email = e.target.email.value;
       const Password = e.target.password.value;
       console.log(Email , Password)
       setRegisterError('')
       createUserWithEmailAndPassword(auth , Email, Password)
       .then(result =>{
         const user = result.user
         console.log(user)
       })

       .catch(error =>{
        console.log(error)
        setRegisterError(error.message)
       })
   }
    return (
        <div>
              <h2 className="text-3">Please Sing In</h2>

<form onSubmit={handleSubmit} className="max-w-sm mx-auto">
  <div className="mb-5">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter you email" required />
  </div>
  <div className="mb-5">
    <label  name="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input type={showPassword ? "text":"password"} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter you password" required />
    <span onClick={()=> setShowPassword(!showPassword)}>{showPassword ?  <IoMdEye /> :<IoMdEyeOff/> }</span>
  </div>
  <div className="flex items-start mb-5">
    <div className="flex items-center h-5">
      <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
    </div>
    <label name="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
  </div>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
 {
    registerError && <p className="text-red-500 text-3xl text-center mt-4">{registerError}</p>
 }

        </div>
    );
};

export default SingIn;