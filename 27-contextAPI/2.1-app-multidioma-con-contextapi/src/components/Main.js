import { useContext } from "react"
import { LenguajeContext } from "../context/LenguajeContext"
import { ThemeContext } from "../context/ThemeContext"
export const Main=()=>{
    const {theme}=useContext(ThemeContext)
    const{texts}=useContext(LenguajeContext)
    return(
        <main className={theme}>
            <p>{texts.mainWelcome}</p>
            <p>{texts.mainHello}</p>
            <p>{texts.mainContent}</p>
        </main>

    )
}