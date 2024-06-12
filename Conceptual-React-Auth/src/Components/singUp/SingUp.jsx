import { NavLink } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import toast from "react-hot-toast";
const SingUp = () => {
    
     const {createUser} =UseAuth();

     const handleSingUp = e =>{
        e.preventDefault();

        // get field value
        const firstName = e.target.firstName.value;
        const lastName = e.target.lastName.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        

        // validation

        if(password.length < 6){
          toast.error('Your password character must be 6 or more!')
          return
        }

        console.log(email , password , firstName, lastName)

        createUser(email , password)
        .then( res => console.log(res))
        .catch(error => console.log(error))

     }


       
    return (
        <div>
             <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex">
    <div className="text-center lg:text-left mb-5">
      <h1 className="text-5xl font-bold">Sing In now!</h1>
    </div>
    <div className="card shrink-0 w-full max-w-screen-md shadow-2xl bg-base-100">
      <form onSubmit={handleSingUp} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Fist name</span>
          </label>
          <input type="text" placeholder="Fist name" name="firstName" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Last name</span>
          </label>
          <input type="text" placeholder="last name" name="lastName" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">Sing Up</button>
        </div>
      </form>
    </div>
    <p>If You have an account Please <span className="text-2xl text-green-300"><NavLink to="/login" >LogIn</NavLink></span></p>
  </div>
  
</div>
     
        </div>
        </div>
    );
};

export default SingUp;