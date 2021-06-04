import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import {teamDataListInit,teamDataListType} from "./QualifyScoreInit"

export type teamDataListContextType={
  teamDataList:teamDataListType;
  setTeamDataList:Dispatch<SetStateAction<teamDataListType>>
}

export const teamDataListContext = createContext<teamDataListContextType>( {} as teamDataListContextType)

export const QualifyScoreProvider= (props: { children: ReactNode })=>{
  const [teamDataList ,setTeamDataList]= useState<teamDataListType>(teamDataListInit)

  const {children} = props

  return (
    <teamDataListContext.Provider value={{teamDataList ,setTeamDataList}}>
      {children}
    </teamDataListContext.Provider>
  )
}

