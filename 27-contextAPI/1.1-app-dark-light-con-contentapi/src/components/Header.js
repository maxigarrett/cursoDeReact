import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

export const Header=()=>{

    //useContext se usa para extraer las variables de estado. ya que este componente esta dentro de un 
    // compponente provaider llamado ThemeProvaider en la pagina myPage y este provaider tiene la
    //varible de estado theme y la funcion handelTheme que captura la info de los input radio
    //y ThemeContext llamamos al contexto donde se creo todas las variables y funciones que queremos
    //compartir y las metemos dentro de useContext para estraer esa info
    const {theme,handelTheme}=useContext(ThemeContext)
    return(
        <header className={theme}>
            <h1>seleccionando tema oscuro sin Context API</h1>
            <label htmlFor='light'>Light</label>
            <label htmlFor='dark'>Dark</label>
            <input type='radio' name='theme' value='light' id='light' onClick={handelTheme}/>
            <input type='radio'name='theme' value='dark' id='dark' onClick={handelTheme}/>
        </header>

    )
}