import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import {QualifyScoreInit,QualifyScoreType} from "./QualifyScoreInit"

export type QualifyScoreContextType={
  QualifyScore:QualifyScoreType;
  setQualifyScore:Dispatch<SetStateAction<QualifyScoreType>>
}

export const QualifyScoreContext = createContext<QualifyScoreContextType>( {} as QualifyScoreContextType)

export const QualifyScoreProvider= (props: { children: ReactNode })=>{
  const [QualifyScore ,setQualifyScore]= useState<QualifyScoreType>(QualifyScoreInit)

  const {children} = props

  return (
    <QualifyScoreContext.Provider value={{QualifyScore ,setQualifyScore}}>
      {children}
    </QualifyScoreContext.Provider>
  )
}

