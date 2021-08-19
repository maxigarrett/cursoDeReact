import { useContext } from "react"
import { LenguajeContext } from "../context/LenguajeContext"
import { ThemeContext } from "../context/ThemeContext"
export const Footer=()=>{
    const {theme}=useContext(ThemeContext)
    const {texts}=useContext(LenguajeContext)
    return(
        <footer className={theme}>
            <p>{texts.footerTitle}</p>
        </footer>

    )
}