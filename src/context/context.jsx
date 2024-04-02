import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import { Navigate } from "react-router-dom";

export const AuthContext = createContext();

const Context = ({ children }) => {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");
  const [loading,setLoading]=useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      setLoading(false)
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const signInUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((newUser) => {
        setLoading(true)
        const user = newUser.user;
        {
          user && setMessage("user created successfully");
        }
        <Navigate to='/orders'></Navigate>
      })
      .catch((er) => {
        console.log(er);
        setMessage(er.message);
      });
  };

  const datas = { user, message, setMessage, signInUser ,loading };
  return (
    <div>
      <AuthContext.Provider value={datas}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};
export default Context;
