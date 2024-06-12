import { NavLink } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";

const NavBar = () => {
    const {user,logOut} = UseAuth()
  return (
    <div className="mt-10">
      <div className="flex justify-evenly">
         <h1 className="text-4xl text-orange-400">About my self</h1>
        <div className="flex gap-10 justify-center items-center text-2xl">
        <ul className=" flex gap-10 justify-center items-center text-2xl ">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-blue-400 underline" : ""
              }
            >
              Home
            </NavLink>
            
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-blue-400 underline" : ""
              }
            >
              About
            </NavLink>
            
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-blue-400 underline" : ""
              }
            >
              Blog
            </NavLink>
            
          </li>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-blue-400 underline" : ""
              }
            >
              Profile
            </NavLink>
            
          </li>
          <li>
            <NavLink
              to="/bookMark"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-blue-400 underline" : ""
              }
            >
              BookMark
            </NavLink>
            
          </li>
        </ul>
        <ul>
        {
          user?.email ? <div className="flex gap-3 justify-center items-center">
             <h1>{user?.email}</h1>
             <button onClick={logOut} className="btn btn-accent">LogOut</button>
          </div> :  <div><NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-blue-400 underline" : ""
          }
        >
          LogIn
        </NavLink></div>
        }
        </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
