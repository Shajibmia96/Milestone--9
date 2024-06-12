import UseAuth from "../../Hooks/UseAuth";

const Profile = () => {
       const {user} = UseAuth()
    return (
        <div>
              <div className="flex container mx-auto justify-center items-baseline mt-20 gap-3">
              <h1 className="text-2xl">Name: {user.displayName}</h1> 
              <h1 className="text-2xl">Email: {user.email}</h1>
              </div>

        </div>
    );
};

export default Profile;