import { useContext } from "react"
import { LenguajeContext } from "../context/LenguajeContext"
import { SessionContext } from "../context/SessionContext"
import { ThemeContext } from "../context/ThemeContext"
export const Main=()=>{
    const {theme}=useContext(ThemeContext)
    const{texts}=useContext(LenguajeContext)
    const{autentication}=useContext(SessionContext)
    return(
        <main className={theme}>
            {autentication
            ?
                <p>{texts.mainHello}</p>
            :
                <p>{texts.mainWelcome}</p>
            }
            <p>{texts.mainContent}</p>
        </main>

    )
}