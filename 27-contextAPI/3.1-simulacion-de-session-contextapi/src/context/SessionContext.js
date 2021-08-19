import { createContext, useState } from "react";

export const SessionContext=createContext();

let initialAutentication=null;
export const SessionProvider=({children})=>{
    const[autentication,setAutentication]=useState(initialAutentication)
    const handelAtentication=()=>{
        // if(autentication) setAutentication(false)
        // else setAutentication(true)
        autentication? setAutentication(false):setAutentication(true)
    }
    let data={autentication,handelAtentication}
    return(
        <SessionContext.Provider value={data}>{children}</SessionContext.Provider>
    )
}