
import { NavLink, Navigate } from "react-router-dom";
import SocalMedia from "../SocalMedia/SocalMedia";
import UseAuth from "../../Hooks/UseAuth";



const LogIn = () => {
       
        const {singIn} = UseAuth()
        
         const handleSingIn = e =>{
            e.preventDefault();
            const email = e.target.email.value;
            const password = e.target.password.value;

            singIn(email , password)
            .then(res => console.log(res))
            .catch(error => console.log(error))
         }
         <Navigate to="/profile"/>

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex">
    <div className="text-center lg:text-left mb-5">
      <h1 className="text-5xl font-bold">Login now!</h1>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSingIn} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email" type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">Log In</button>
          
        </div>
        <div>
            <SocalMedia></SocalMedia>
        </div>
      </form>
    </div>
    <p>If You have not an account Please <span className="text-2xl text-green-300"><NavLink to="/singUp" >Sing Up</NavLink></span></p>
    
  </div>
  
</div>
     
        </div>
    );
};

export default LogIn;