import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../FireBase/FireBase.init";
import { useRef, useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";

const SingUp = () => {
      
        const [singUpError, setSingUpError] = useState('')
        const [singUpSuccess, setSingUpSuccess] = useState('')
        const [showPassword , setShowPassword] = useState(false)
        const emailRef = useRef(null)

       const handleSingUp = e =>{
          e.preventDefault()
          const email = e.target.email.value;
          const password = e.target.password.value;
          console.log(email , password)
          setSingUpError("")
          setSingUpSuccess("")
          signInWithEmailAndPassword(auth , email , password)
          .then(result =>{
            const user = result.user
            console.log(user)
            setSingUpSuccess("Sing up successFull")
          })
          .catch(error =>{
            const errorMessage = error.message;
            setSingUpError(errorMessage)
          })
       }

    //    handleForgetPassWord

       const handleForgetPassWord = ()=>{
        const email = emailRef.current.value;
        if(!email){
            setSingUpError("Please provide a email")
        }
        else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
            setSingUpError("This is not a valid email")
        }
        // e.preventDefault()
        console.log("This is ref" , emailRef.current.value)
        
        sendPasswordResetEmail(auth, email)
        .then ( () =>{
              alert("please Check you email")
        })
        .catch(error =>{
            console.log(error)
        })
       }
  return (
    <div>
      
        <div className="hero mt-10 ">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-400">
            <form onSubmit={handleSingUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  ref={emailRef}
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                <input
                  type={showPassword ? "text":"password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                 <span className="absolute top-3 right-35" onClick={()=>setShowPassword(!showPassword)}>{showPassword ? <IoMdEye /> : <IoMdEyeOff />}</span>
                </div>
                <label className="label">
                  <a onClick={handleForgetPassWord} href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>

        {
            singUpError && <p className="text-red-400 text-center text-2xl mt-4">{singUpError}</p>
        }
        {
            singUpSuccess && <p className="text-green-400-400 text-center text-2xl mt-4">{singUpSuccess}</p>
        }

        <p className="text-center mt-4">New to this site Please <Link to='/heroRegister' className="text-emerald-500 text-3xl p-2"> Register</Link></p>
     
    </div>
  );
};

export default SingUp;
