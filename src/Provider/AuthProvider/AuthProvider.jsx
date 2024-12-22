/* eslint-disable react/prop-types */
import { AuthContext } from "../../Context/AuthContext/AuthContext";

const AuthProvider = ({ children }) => {
    const authInfo= {
        name:'booking'
    }
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
