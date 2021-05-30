/* チームリスト */

import axios from "axios"
import { useEffect, useState } from "react"
import { PlayersListApiUrl } from "../../initialize/PlayersListApiUrl"

export const PlayersList =()=>{


  const [error,setError] = useState(null)
  const [isLoaded,setIsLoaded] = useState(false)
  const [PlayersList, setPlayersList] = useState({})

  useEffect(()=>{
  axios.get(PlayersListApiUrl).then(
    (result)=>{
      setIsLoaded(true)
      setPlayersList(result.data)
      
    },
    (error) =>{
      setIsLoaded(true)
      setError(error)
    }
  )
},[])

if(error){
  return(<div>:{error.message}</div>)
} else if (!isLoaded) {
  return <div>Loading...</div>;
}else {
  return (
    <ul>
      {PlayersList.map((player)=>(
        <li >
        {player}
      </li>
      ))}

   
    </ul>
  );
}
}