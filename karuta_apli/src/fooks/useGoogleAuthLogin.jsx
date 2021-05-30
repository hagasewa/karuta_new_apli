import firebase from "firebase/app";
import { useContext } from "react";
import { useHistory } from "react-router";
import { AuthContext } from "../Providers/AuthProvider";

export const useGoogleAuthLogin=()=>{
  const {setToken,setCurrentUser} = useContext(AuthContext)
  let history = useHistory();

 const login = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      setToken(credential.accessToken)
      sessionStorage.setItem('token',credential.accessToken)

      // The signed-in user info.
      setCurrentUser(result.user)
      
      history.push("/qualify-score-input");
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      console.log("エラーコード：",errorCode)
      console.log("エラーメッセージ：",errorMessage)
      console.log("email：",email)
      console.log("credential：",credential)
      // ...
    });
};
return login
}