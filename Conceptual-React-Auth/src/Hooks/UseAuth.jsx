import  { useContext } from 'react';
import { AuthContext } from '../Provider/ProviderContext';

const UseAuth = () => {
      const all = useContext(AuthContext)
    return all
};

export default UseAuth;