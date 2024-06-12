import { useContext } from "react";
import { AuthContext } from "../../Provider/ProviderContext";

const SocalMedia = () => {
  const { user, googleLogIn } = useContext(AuthContext);

  const handleGoogleLogIn = (media) => {
    
       media()
      .then(res => console.log(res))
      .catch(error => console.log(error))
  };

  return (
    <div>
      <h1 className="text-2xl m-5 flex justify-center items-center">
        Continue with{" "}
      </h1>
      <div className=" flex gap-1">
        <button
          onClick={()=>handleGoogleLogIn(googleLogIn)}
          className="btn-secondary btn btn-sm "
        >
          Google
        </button>
        
      </div>
    </div>
  );
};

export default SocalMedia;
