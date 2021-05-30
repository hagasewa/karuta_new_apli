import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { createContext,  useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyAZFG_qhvTPrFSwUkaFcFkMnDbCUklzcgo",
  authDomain: "karuta-apli.firebaseapp.com",
  projectId: "karuta-apli",
  storageBucket: "karuta-apli.appspot.com",
  messagingSenderId: "194669337550",
  appId: "1:194669337550:web:08307a17c52e0810de699f",
};
firebase.initializeApp(firebaseConfig);



export const AuthContext = createContext();

export const AuthProvider = (props) => {


  const { children } = props;
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(null);


  return (
    <AuthContext.Provider
      value={{ currentUser, setCurrentUser, token, setToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};
