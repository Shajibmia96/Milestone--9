import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Components/Home/Home";
import SingIn from "../Components/SIngIn/SingIn";
import SingUp from "../Components/SingUp/SingUp";
import HeroRegister from "../Components/HeroRegister/HeroRegister";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
             path: "/singIn",
             element: <SingIn></SingIn>
        },
        {
            path: "/singUp",
            element: <SingUp></SingUp>
        },
        {
          path : "/heroRegister",
          element: <HeroRegister></HeroRegister>
        }
      ]

    },
  ]);

  export default router