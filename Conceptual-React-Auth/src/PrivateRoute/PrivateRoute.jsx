import { Navigate } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import Loading from "../Loading/Loading";


const PrivateRoute = ({children}) => {

    const {user , loading} = UseAuth()

    // we are waiting for user

    if(loading) return <Loading></Loading>

    if(!user?.email){
        return <Navigate to="/logIn"/>
    }

    return children;
};

export default PrivateRoute;