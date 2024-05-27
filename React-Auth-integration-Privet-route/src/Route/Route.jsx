
import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Component/Home/Home";
import LogIn from "../Component/LogIn/LogIn";
import Register from "../Component/Register/Register";
import ErrorElement from "../Component/ErrorElement/ErrorElement";
import Profile from "../Component/Profile/Profile";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorElement></ErrorElement>,
      children: [
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <LogIn></LogIn>
        },
        {
            path: "/register",
            element: <Register></Register>
        },
        {
            path: "/profile",
            element: <Profile></Profile>
        }
      ]
    },
  ]);

  export default router