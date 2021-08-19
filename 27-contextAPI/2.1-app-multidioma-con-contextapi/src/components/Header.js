import { useContext } from "react"
import { LenguajeContext } from "../context/LenguajeContext"
import { ThemeContext } from "../context/ThemeContext"


export const Header=()=>{
    const {theme,handelTheme}=useContext(ThemeContext)
    const {texts,handelLenguaje}=useContext(LenguajeContext)
    return(
        <header className={theme}>
            <h1>{texts.headerTitle}</h1>
            <h2>{texts.headerSubTitle}</h2>

            <select onChange={handelLenguaje}>
                <option value='es'>ES</option>
                <option value='en'>EN</option>
            </select>
            <label htmlFor='light'>{texts.headerLight}</label>
            <input type='radio' name='theme' value='light' id='light' onClick={handelTheme}/>
            <label htmlFor='dark'>{texts.headerDark}</label>
            <input type='radio'name='theme' value='dark' id='dark' onClick={handelTheme}/>
            <button>{texts.headerButtonLogin} / {texts.headerButtonLogout}</button>
            {/* <button>{texts.headerButtonLogout}</button> */}
        </header>

    )
}