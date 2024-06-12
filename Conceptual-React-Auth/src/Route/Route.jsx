import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Components/MainLayOut/MainLayOut";
import ErrorElement from "../Components/ErrorElement/ErrorElement";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import Blog from "../Components/Blog/Blog";
import Profile from "../Components/Profile/Profile";
import BookMark from "../Components/BookMark/BookMark";
import LogIn from "../Components/LogIn/LogIn";
import SingIn from "../Components/SingIn/SingIn";

const myCreateRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/profile",
        element: <Profile></Profile>
      },
      {
        path: "/bookMark",
        element: <BookMark></BookMark>
      },
      {
        path : "/login",
        element:<LogIn></LogIn>
      },
      {
        path: "/singIn",
        element:<SingIn></SingIn>
      }
    ],
  },
]);

export default myCreateRouter;
