/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../Firebase/firebase.config";
import axios from "axios";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const userUpdateProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const authInfo = {
    createUser,
    loginUser,
    signOutUser,
    loading,
    setLoading,
    error,
    setError,
    user,
    setUser,
    userUpdateProfile,
    signInWithGoogle,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
      console.log("state captured", currentuser?.email);
      if (currentuser?.email) {
        const user = { email: currentuser?.email };

        axios
          .post("http://localhost:5000/jwt", user, { withCredentials: true })
          .then((res) => console.log(res.data));
      }else{
          axios.post('http://localhost:5000/logout',{},{
            withCredentials:true
          })
          .then(res=>{
            console.log('logout', res.data)
          })
      }
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
