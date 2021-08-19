import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

export const Main=()=>{
    const {theme}=useContext(ThemeContext)
    return(
        <main className={theme}>
            <p>Bienvenid@ invitad@</p>
            <p>Hola Usuari@</p>
            <p>Mi contenido principal</p>
        </main>

    )
}