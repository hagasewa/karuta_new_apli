import firebase from "firebase/app";
import { useContext } from "react";
import { useHistory } from "react-router";
import { AuthContext } from "../Providers/AuthProvider";

export const useGoogleAuthLogout = () => {
  const { setToken, setCurrentUser } = useContext(AuthContext);
  let history = useHistory();

  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("user");
        setToken(null);
        setCurrentUser(null);
        
      history.push("/");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  
  return logout;
};
