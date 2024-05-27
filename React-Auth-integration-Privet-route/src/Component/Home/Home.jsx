import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Home = () => {

      const authInfo = useContext(AuthContext)
      console.log(authInfo)
      const {name, age, degree} = authInfo
    return (
        <div className="text-center space-y-4 mt-5">
            <h1>This is Home component</h1>
            <h1>User name : {name}</h1>
            <p>User Age : {age}</p>
            <p>User Degree : {degree}</p>
        </div>
    );
};

export default Home;