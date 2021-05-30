import { useContext } from "react"
import { AuthContext } from "../Providers/AuthProvider"

export const useIsSessionToken=()=>{
  const {token} = useContext(AuthContext)
  const IsSessionToken=()=>{
  if(token) {return true}
  else if(sessionStorage.getItem('token')){
    //setToken(sessionStorage.getItem('token'))
    return true
  }
  else {return false}
}
return IsSessionToken
}