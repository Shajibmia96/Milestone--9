import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import { Toaster } from "react-hot-toast";

const MainLayOut = () => {
    return (
        <div>
               <NavBar></NavBar>
              
              <Outlet></Outlet>
              <Toaster/>
        </div>
    );
};

export default MainLayOut;