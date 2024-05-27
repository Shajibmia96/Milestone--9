
import PropTypes from 'prop-types';
import { createContext } from 'react';
 export const AuthContext = createContext(null)

 const authInfo = {
    name: "Shajib Mia",
    age : 23,
    degree: "BSc in CSE"
 }
const AuthProvider = ({children}) => {
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
}

export default AuthProvider;