import { NavLink } from "react-router-dom";

const SingIn = () => {
    return (
        <div>
             <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex">
    <div className="text-center lg:text-left mb-5">
      <h1 className="text-5xl font-bold">Sing In now!</h1>
    </div>
    <div className="card shrink-0 w-full max-w-screen-md shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Fist name</span>
          </label>
          <input type="email" placeholder="Fist name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Last name</span>
          </label>
          <input type="email" placeholder="last name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sing In</button>
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

export default SingIn;