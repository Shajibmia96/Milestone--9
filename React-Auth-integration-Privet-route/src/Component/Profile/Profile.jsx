import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Profile = () => {
    const AuthInfo = useContext(AuthContext)
    const {name, age, degree} = AuthInfo;
    return (
        <div>
             <h1 className="text-4xl">This is Profile views</h1>
             <h1>{name}</h1>
             <p>{age}</p>
             <p>{degree}</p>
        </div>
    );
};

export default Profile;